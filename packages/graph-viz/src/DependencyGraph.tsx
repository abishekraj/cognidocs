import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Maximize, Minus, Plus } from 'lucide-react';

interface DependencyGraphProps {
  data: {
    nodes: Record<string, any>;
    edges: any[];
  };
}

export const DependencyGraph: React.FC<DependencyGraphProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setZoomLevel] = useState(1);

  // Transform data for D3
  const nodes = Object.values(data.nodes).map((n: any) => ({ ...n }));
  const links = data.edges.map((e: any) => ({ source: e.from, target: e.to }));

  useEffect(() => {
    if (!svgRef.current || !containerRef.current || nodes.length === 0) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Clear previous
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height]);

    // Zoom behavior
    const g = svg.append('g');
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        g.attr('transform', event.transform.toString());
        setZoomLevel(event.transform.k);
      });

    svg.call(zoom);

    // Simulation
    const simulation = d3
      .forceSimulation(nodes as any)
      .force(
        'link',
        d3
          .forceLink(links)
          .id((d: any) => d.id)
          .distance(100)
      )
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collide', d3.forceCollide().radius(30));

    // Links
    const link = g
      .append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', 1.5);

    // Nodes
    const node = g
      .append('g')
      .selectAll<SVGCircleElement, unknown>('g')
      .data(nodes)
      .join('g')
      .call(
        d3
          .drag<SVGGElement, unknown>()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      );

    node
      .append('circle')
      .attr('r', 8)
      .attr('fill', (d: any) => (d.type === 'component' ? '#f59e0b' : '#3b82f6'))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5);

    node
      .append('text')
      .text((d: any) => d.id.split('/').pop())
      .attr('x', 12)
      .attr('y', 4)
      .style('font-size', '10px')
      .style('fill', 'var(--text-primary, #333)')
      .style('pointer-events', 'none');

    node.append('title').text((d: any) => d.id);

    // Ticks
    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }, [data]); // Re-run if data changes

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-secondary, #fafafa)',
      }}
    >
      <svg ref={svgRef} style={{ width: '100%', height: '100%' }}></svg>
      {/* Controls Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <button style={btnStyle} title="Zoom In">
          <Plus size={16} />
        </button>
        <button style={btnStyle} title="Zoom Out">
          <Minus size={16} />
        </button>
        <button style={btnStyle} title="Fit">
          <Maximize size={16} />
        </button>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          background: 'var(--bg-primary, white)',
          padding: '8px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: '0.8rem',
            color: 'var(--text-secondary, #666)',
          }}
        >
          <span
            style={{ width: 10, height: 10, borderRadius: '50%', background: '#3b82f6' }}
          ></span>{' '}
          File
          <span
            style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }}
          ></span>{' '}
          Component
        </div>
      </div>
    </div>
  );
};

const btnStyle: React.CSSProperties = {
  background: 'var(--bg-primary, white)',
  border: '1px solid var(--border-color, #ccc)',
  borderRadius: '4px',
  padding: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
};
