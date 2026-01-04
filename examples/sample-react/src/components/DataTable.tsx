import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

/**
 * Advanced data table component with sorting, filtering, and pagination
 *
 * This component demonstrates comprehensive React hooks usage and provides
 * a feature-rich data table for displaying and managing tabular data.
 *
 * @example Basic usage
 * ```tsx
 * <DataTable
 *   data={users}
 *   columns={[
 *     { key: 'name', label: 'Name', sortable: true },
 *     { key: 'email', label: 'Email', sortable: true },
 *     { key: 'role', label: 'Role', filterable: true }
 *   ]}
 *   pageSize={10}
 * />
 * ```
 *
 * @example With custom row renderer
 * ```tsx
 * <DataTable
 *   data={products}
 *   columns={productColumns}
 *   renderRow={(item) => (
 *     <tr key={item.id}>
 *       <td>{item.name}</td>
 *       <td>${item.price}</td>
 *     </tr>
 *   )}
 * />
 * ```
 */

export interface Column<T> {
  /** Unique key for the column */
  key: keyof T;
  /** Display label */
  label: string;
  /** Enable sorting for this column */
  sortable?: boolean;
  /** Enable filtering for this column */
  filterable?: boolean;
  /** Custom render function */
  render?: (value: any, row: T) => React.ReactNode;
}

export interface DataTableProps<T extends Record<string, any>> {
  /** Array of data items to display */
  data: T[];
  /** Column configuration */
  columns: Column<T>[];
  /** Number of items per page */
  pageSize?: number;
  /** Enable search functionality */
  searchable?: boolean;
  /** Custom row renderer */
  renderRow?: (item: T, index: number) => React.ReactNode;
  /** Callback when row is clicked */
  onRowClick?: (item: T) => void;
  /** Loading state */
  loading?: boolean;
  /** Custom empty state message */
  emptyMessage?: string;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  pageSize = 10,
  searchable = true,
  renderRow,
  onRowClick,
  loading = false,
  emptyMessage = 'No data available',
}: DataTableProps<T>) {
  // State management with useState
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Partial<Record<keyof T, string>>>({});

  // Refs for performance optimization
  const tableRef = useRef<HTMLTableElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Effect for auto-focusing search input
  useEffect(() => {
    if (searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchable]);

  // Effect for resetting page when data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [data, searchTerm, filters]);

  // Memoized filtered data
  const filteredData = useMemo(() => {
    let result = [...data];

    // Apply search
    if (searchTerm) {
      result = result.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply column filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        result = result.filter((item) =>
          String(item[key]).toLowerCase().includes(value.toLowerCase())
        );
      }
    });

    return result;
  }, [data, searchTerm, filters]);

  // Memoized sorted data
  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];

      if (aVal === bVal) return 0;

      const comparison = aVal > bVal ? 1 : -1;
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [filteredData, sortColumn, sortDirection]);

  // Memoized paginated data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize]);

  // Memoized total pages
  const totalPages = useMemo(() => {
    return Math.ceil(sortedData.length / pageSize);
  }, [sortedData.length, pageSize]);

  // Callback for sorting
  const handleSort = useCallback((column: keyof T) => {
    setSortColumn((prev) => {
      if (prev === column) {
        setSortDirection((dir) => (dir === 'asc' ? 'desc' : 'asc'));
        return column;
      }
      setSortDirection('asc');
      return column;
    });
  }, []);

  // Callback for filter change
  const handleFilterChange = useCallback((column: keyof T, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [column]: value,
    }));
  }, []);

  // Callback for search change
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  // Callback for page change
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    tableRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  if (loading) {
    return <div className="data-table-loading">Loading...</div>;
  }

  return (
    <div className="data-table">
      {/* Search bar */}
      {searchable && (
        <div className="data-table-search">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      )}

      {/* Table */}
      <table ref={tableRef} className="data-table-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)}>
                <div className="header-cell">
                  <span>{column.label}</span>
                  {column.sortable && (
                    <button onClick={() => handleSort(column.key)}>
                      {sortColumn === column.key ? (sortDirection === 'asc' ? '↑' : '↓') : '↕'}
                    </button>
                  )}
                </div>
                {column.filterable && (
                  <input
                    type="text"
                    placeholder={`Filter ${column.label}`}
                    value={filters[column.key] || ''}
                    onChange={(e) => handleFilterChange(column.key, e.target.value)}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length}>{emptyMessage}</td>
            </tr>
          ) : (
            paginatedData.map((item, index) => {
              if (renderRow) {
                return renderRow(item, index);
              }

              return (
                <tr
                  key={index}
                  onClick={() => onRowClick?.(item)}
                  style={{ cursor: onRowClick ? 'pointer' : 'default' }}
                >
                  {columns.map((column) => (
                    <td key={String(column.key)}>
                      {column.render ? column.render(item[column.key], item) : item[column.key]}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="data-table-pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Stats */}
      <div className="data-table-stats">
        Showing {paginatedData.length} of {sortedData.length} items
        {sortedData.length !== data.length && ` (filtered from ${data.length} total)`}
      </div>
    </div>
  );
}
