import { j as e } from './ui-vendor-uWBPbD_0.js';
import { r as s } from './react-vendor-BI367zWJ.js';
import { D as t } from './graph-vendor-BuQDEdtN.js';
function r() {
  const [r, d] = s.useState(null),
    [n, a] = s.useState(!0);
  return (
    s.useEffect(() => {
      fetch('/content/graph.json')
        .then((e) => e.json())
        .then((e) => {
          (d(e), a(!1));
        })
        .catch((e) => {
          a(!1);
        });
    }, []),
    n
      ? e.jsx('div', {
          className: 'flex items-center justify-center h-96',
          children: e.jsx('div', {
            className: 'text-muted-foreground',
            children: 'Loading dependency graph...',
          }),
        })
      : r
        ? e.jsxs('div', {
            className: 'h-[calc(100vh-180px)]',
            children: [
              e.jsxs('div', {
                className: 'mb-4',
                children: [
                  e.jsx('h1', {
                    className: 'text-4xl font-bold text-foreground mb-2',
                    children: 'Dependency Graph',
                  }),
                  e.jsx('p', {
                    className: 'text-muted-foreground',
                    children:
                      "Visualize the relationships between your project's components and modules",
                  }),
                ],
              }),
              e.jsx('div', {
                className: 'border border-border rounded-lg overflow-hidden',
                style: { height: 'calc(100% - 100px)' },
                children: e.jsx(t, { data: r }),
              }),
            ],
          })
        : e.jsx('div', {
            className: 'flex items-center justify-center h-96',
            children: e.jsx('div', {
              className: 'text-destructive',
              children: 'Failed to load graph data',
            }),
          })
  );
}
export { r as GraphPage };
