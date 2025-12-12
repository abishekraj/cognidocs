import {
  j as e,
  h as s,
  i as t,
  k as r,
  g as a,
  E as l,
  l as n,
  B as d,
  a as c,
  H as o,
  e as i,
} from './ui-vendor-uWBPbD_0.js';
import { r as x } from './react-vendor-BI367zWJ.js';
import { C as m } from './card-DcysQnb-.js';
import { B as h, S as j } from './index-oaZTyD6l.js';
const p = ({ examples: a, className: l = '' }) => {
    const [n, d] = x.useState(null);
    return a && 0 !== a.length
      ? e.jsxs(m, {
          className: `p-6 ${l}`,
          children: [
            e.jsxs('h3', {
              className: 'text-lg font-bold text-foreground mb-4 flex items-center gap-2',
              children: [e.jsx(s, { className: 'h-5 w-5 text-primary' }), 'Examples'],
            }),
            e.jsx('div', {
              className: 'space-y-4',
              children: a.map((s, a) =>
                e.jsxs(
                  'div',
                  {
                    className: 'space-y-2',
                    children: [
                      s.description &&
                        e.jsx('p', {
                          className: 'text-sm text-muted-foreground',
                          children: s.description,
                        }),
                      e.jsxs('div', {
                        className: 'relative group',
                        children: [
                          e.jsx('pre', {
                            className:
                              'bg-muted rounded-lg p-4 overflow-x-auto text-sm border border-border',
                            children: e.jsx('code', {
                              className: 'text-foreground',
                              children: s.code,
                            }),
                          }),
                          e.jsx('button', {
                            onClick: () =>
                              (async (e, s) => {
                                try {
                                  (await navigator.clipboard.writeText(e),
                                    d(s),
                                    setTimeout(() => d(null), 2e3));
                                } catch (t) {}
                              })(s.code, a),
                            className:
                              'absolute top-2 right-2 p-2 bg-background/80 hover:bg-background border border-border rounded-md opacity-0 group-hover:opacity-100 transition-opacity',
                            title: 'Copy code',
                            children:
                              n === a
                                ? e.jsx(t, {
                                    className: 'h-4 w-4 text-green-600 dark:text-green-400',
                                  })
                                : e.jsx(r, { className: 'h-4 w-4 text-muted-foreground' }),
                          }),
                        ],
                      }),
                    ],
                  },
                  a
                )
              ),
            }),
          ],
        })
      : null;
  },
  u = ({ see: s, links: t, className: r = '' }) => {
    const d = s && s.length > 0,
      c = t && t.length > 0;
    return d || c
      ? e.jsxs(m, {
          className: `p-6 ${r}`,
          children: [
            d &&
              e.jsxs('div', {
                className: 'mb-4 last:mb-0',
                children: [
                  e.jsxs('h3', {
                    className: 'text-lg font-bold text-foreground mb-3 flex items-center gap-2',
                    children: [e.jsx(a, { className: 'h-5 w-5 text-primary' }), 'See Also'],
                  }),
                  e.jsx('div', {
                    className: 'space-y-2',
                    children: s.map((s, t) =>
                      e.jsxs(
                        'div',
                        {
                          className:
                            'flex items-start gap-2 p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors',
                          children: [
                            e.jsx(l, {
                              className: 'h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5',
                            }),
                            e.jsx('div', {
                              className: 'flex-1',
                              children: s.url
                                ? e.jsx('a', {
                                    href: s.url,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    className: 'text-sm text-primary hover:underline font-medium',
                                    children: s.text,
                                  })
                                : e.jsxs('div', {
                                    children: [
                                      e.jsx('code', {
                                        className: 'text-sm font-medium text-foreground',
                                        children: s.target,
                                      }),
                                      s.text !== s.target &&
                                        e.jsx('p', {
                                          className: 'text-sm text-muted-foreground mt-1',
                                          children: s.text,
                                        }),
                                    ],
                                  }),
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            c &&
              e.jsxs('div', {
                children: [
                  e.jsxs('h3', {
                    className: 'text-lg font-bold text-foreground mb-3 flex items-center gap-2',
                    children: [e.jsx(n, { className: 'h-5 w-5 text-primary' }), 'Related Links'],
                  }),
                  e.jsx('div', {
                    className: 'flex flex-wrap gap-2',
                    children: t.map((s, t) =>
                      e.jsx(
                        'a',
                        {
                          href: s.url,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className: 'inline-flex items-center gap-1.5',
                          children: e.jsxs(h, {
                            variant: 'secondary',
                            className:
                              'hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer',
                            children: [
                              e.jsx(l, { className: 'h-3 w-3' }),
                              e.jsx('span', { children: s.text }),
                            ],
                          }),
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
          ],
        })
      : null;
  };
function f({ id: s }) {
  var t, r, a, l, f, g, N;
  const [v, b] = x.useState(null),
    [y, w] = x.useState(!0);
  return (
    x.useEffect(() => {
      fetch('/content/data.json')
        .then((e) => e.json())
        .then((e) => {
          var t;
          for (const r of e.results) {
            const e = null == (t = r.components) ? void 0 : t.find((e) => e.name === s);
            if (e) return (b(e), void w(!1));
          }
          w(!1);
        })
        .catch((e) => {
          w(!1);
        });
    }, [s]),
    y
      ? e.jsx('div', {
          className: 'flex items-center justify-center h-96',
          children: e.jsx('div', {
            className: 'text-muted-foreground',
            children: 'Loading component...',
          }),
        })
      : v
        ? e.jsxs('div', {
            className: 'space-y-6',
            children: [
              e.jsxs('div', {
                children: [
                  e.jsxs('div', {
                    className: 'flex items-center gap-3 mb-2',
                    children: [
                      e.jsx(d, { className: 'h-8 w-8 text-primary' }),
                      e.jsx('h1', {
                        className: 'text-4xl font-bold text-foreground',
                        children: v.name,
                      }),
                      e.jsx(h, { variant: 'secondary', children: v.framework }),
                      e.jsx(h, { variant: 'outline', children: v.type }),
                    ],
                  }),
                  v.description &&
                    e.jsx('p', {
                      className: 'text-lg text-muted-foreground mt-2',
                      children: v.description,
                    }),
                ],
              }),
              e.jsx(j, {}),
              e.jsxs(m, {
                className: 'p-6',
                children: [
                  e.jsxs('h2', {
                    className: 'text-xl font-bold text-foreground mb-4 flex items-center gap-2',
                    children: [e.jsx(c, { className: 'h-5 w-5' }), 'Source'],
                  }),
                  e.jsxs('div', {
                    className: 'space-y-2',
                    children: [
                      e.jsxs('div', {
                        className: 'flex items-start gap-2',
                        children: [
                          e.jsx('span', {
                            className: 'text-sm text-muted-foreground min-w-[80px]',
                            children: 'File:',
                          }),
                          e.jsx('code', {
                            className: 'text-sm bg-muted px-2 py-1 rounded flex-1 break-all',
                            children: v.filePath,
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          e.jsx('span', {
                            className: 'text-sm text-muted-foreground min-w-[80px]',
                            children: 'Line:',
                          }),
                          e.jsx(h, { variant: 'outline', children: v.line }),
                        ],
                      }),
                      e.jsxs('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          e.jsx('span', {
                            className: 'text-sm text-muted-foreground min-w-[80px]',
                            children: 'Exported:',
                          }),
                          e.jsx(h, {
                            variant: v.isExported ? 'default' : 'secondary',
                            children: v.isExported ? 'Yes' : 'No',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              v.props &&
                v.props.length > 0 &&
                e.jsxs(m, {
                  className: 'p-6',
                  children: [
                    e.jsxs('h2', {
                      className: 'text-xl font-bold text-foreground mb-4 flex items-center gap-2',
                      children: [e.jsx(o, { className: 'h-5 w-5' }), 'Props'],
                    }),
                    e.jsx('div', {
                      className: 'space-y-4',
                      children: v.props.map((s) =>
                        e.jsxs(
                          'div',
                          {
                            className:
                              'border border-border rounded-lg p-4 hover:bg-accent/5 transition-colors',
                            children: [
                              e.jsx('div', {
                                className: 'flex items-start justify-between mb-2',
                                children: e.jsxs('div', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    e.jsx('code', {
                                      className: 'text-sm font-semibold text-primary',
                                      children: s.name,
                                    }),
                                    s.required &&
                                      e.jsx(h, {
                                        variant: 'destructive',
                                        className: 'text-xs',
                                        children: 'Required',
                                      }),
                                  ],
                                }),
                              }),
                              e.jsxs('div', {
                                className: 'mt-2',
                                children: [
                                  e.jsx('span', {
                                    className: 'text-xs text-muted-foreground',
                                    children: 'Type:',
                                  }),
                                  e.jsx('code', {
                                    className: 'ml-2 text-sm bg-muted px-2 py-0.5 rounded',
                                    children: s.type,
                                  }),
                                ],
                              }),
                              s.description &&
                                e.jsx('p', {
                                  className: 'text-sm text-muted-foreground mt-2',
                                  children: s.description,
                                }),
                            ],
                          },
                          s.name
                        )
                      ),
                    }),
                  ],
                }),
              v.hooks &&
                v.hooks.length > 0 &&
                e.jsxs(m, {
                  className: 'p-6',
                  children: [
                    e.jsxs('h2', {
                      className: 'text-xl font-bold text-foreground mb-4 flex items-center gap-2',
                      children: [e.jsx(n, { className: 'h-5 w-5' }), 'Hooks'],
                    }),
                    e.jsx('div', {
                      className: 'flex flex-wrap gap-2',
                      children: v.hooks.map((s) =>
                        e.jsx(h, { variant: 'secondary', children: s }, s)
                      ),
                    }),
                  ],
                }),
              (null == (t = v.jsdoc) ? void 0 : t.deprecated) &&
                e.jsx(m, {
                  className: 'p-6 border-destructive/50 bg-destructive/10',
                  children: e.jsxs('div', {
                    className: 'flex items-start gap-3',
                    children: [
                      e.jsx(i, { className: 'h-5 w-5 text-destructive flex-shrink-0 mt-0.5' }),
                      e.jsxs('div', {
                        children: [
                          e.jsx('h3', {
                            className: 'text-lg font-bold text-destructive mb-2',
                            children: 'Deprecated',
                          }),
                          e.jsx('p', {
                            className: 'text-sm text-muted-foreground',
                            children: v.jsdoc.deprecated,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              (null == (r = v.jsdoc) ? void 0 : r.examples) &&
                v.jsdoc.examples.length > 0 &&
                e.jsx(p, { examples: v.jsdoc.examples }),
              (((null == (a = v.jsdoc) ? void 0 : a.see) && v.jsdoc.see.length > 0) ||
                ((null == (l = v.jsdoc) ? void 0 : l.links) && v.jsdoc.links.length > 0)) &&
                e.jsx(u, { see: v.jsdoc.see, links: v.jsdoc.links }),
              ((null == (f = v.jsdoc) ? void 0 : f.returns) ||
                (null == (g = v.jsdoc) ? void 0 : g.since) ||
                (null == (N = v.jsdoc) ? void 0 : N.author)) &&
                e.jsxs(m, {
                  className: 'p-6',
                  children: [
                    e.jsx('h3', {
                      className: 'text-lg font-bold text-foreground mb-4',
                      children: 'Additional Information',
                    }),
                    e.jsxs('div', {
                      className: 'space-y-3',
                      children: [
                        v.jsdoc.returns &&
                          e.jsxs('div', {
                            children: [
                              e.jsx('span', {
                                className: 'text-sm font-semibold text-muted-foreground',
                                children: 'Returns:',
                              }),
                              e.jsx('p', {
                                className: 'text-sm text-foreground mt-1',
                                children: v.jsdoc.returns,
                              }),
                            ],
                          }),
                        v.jsdoc.since &&
                          e.jsxs('div', {
                            children: [
                              e.jsx('span', {
                                className: 'text-sm font-semibold text-muted-foreground',
                                children: 'Since:',
                              }),
                              e.jsx(h, {
                                variant: 'outline',
                                className: 'ml-2',
                                children: v.jsdoc.since,
                              }),
                            ],
                          }),
                        v.jsdoc.author &&
                          v.jsdoc.author.length > 0 &&
                          e.jsxs('div', {
                            children: [
                              e.jsx('span', {
                                className: 'text-sm font-semibold text-muted-foreground',
                                children: 'Author(s):',
                              }),
                              e.jsx('div', {
                                className: 'flex flex-wrap gap-2 mt-2',
                                children: v.jsdoc.author.map((s, t) =>
                                  e.jsx(h, { variant: 'secondary', children: s }, t)
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              e.jsxs(m, {
                className: 'p-6',
                children: [
                  e.jsx('h2', {
                    className: 'text-xl font-bold text-foreground mb-4',
                    children: 'Usage Example',
                  }),
                  e.jsx('div', {
                    className: 'bg-muted rounded-lg p-4',
                    children: e.jsx('pre', {
                      className: 'text-sm overflow-x-auto',
                      children: e.jsx('code', {
                        children: `import { ${v.name} } from '${v.filePath.replace(/.+\/src/, '.')}';\n\n<${v.name}${v.props.length > 0 ? ' ...' : ''} />`,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        : e.jsx('div', {
            className: 'flex items-center justify-center h-96',
            children: e.jsx('div', {
              className: 'text-destructive',
              children: 'Component not found',
            }),
          })
  );
}
export { f as ComponentDetailPage };
