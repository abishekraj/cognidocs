import {
  j as e,
  F as s,
  B as t,
  a,
  L as n,
  P as r,
  G as o,
  C as l,
  b as d,
  T as c,
  c as i,
  Z as m,
  d as x,
  e as u,
  f as g,
  g as h,
} from './ui-vendor-uWBPbD_0.js';
import { r as f } from './react-vendor-BI367zWJ.js';
import { C as p } from './card-DcysQnb-.js';
import { B as j } from './index-oaZTyD6l.js';
function v() {
  const [v, N] = f.useState(null),
    [b, y] = f.useState(!0),
    [C, w] = f.useState(null);
  f.useEffect(() => {
    fetch('/content/data.json')
      .then((e) => e.json())
      .then((e) => {
        if ((N(e), e.results)) {
          const s = k(e.results, e.stats);
          w(s);
        }
        y(!1);
      })
      .catch((e) => {
        y(!1);
      });
  }, []);
  const k = (e, s) => {
      let t = 0,
        a = 0,
        n = 0,
        r = 0,
        o = 0;
      e.forEach((e) => {
        (e.functions && (t += e.functions.filter((e) => e.description).length),
          e.classes && (a += e.classes.filter((e) => e.description).length),
          e.interfaces && (n += e.interfaces.filter((e) => e.description).length),
          e.types && (r += e.types.filter((e) => e.description).length),
          e.components && (o += e.components.filter((e) => e.description).length));
      });
      const l = t + a + n + r + o,
        d = s.functions + s.classes + s.interfaces + s.types + s.components,
        c = d > 0 ? Math.round((l / d) * 100) : 0;
      return {
        documentedFunctions: t,
        totalFunctions: s.functions,
        documentedClasses: a,
        totalClasses: s.classes,
        documentedInterfaces: n,
        totalInterfaces: s.interfaces,
        documentedTypes: r,
        totalTypes: s.types,
        documentedComponents: o,
        totalComponents: s.components,
        overallCoverage: c,
      };
    },
    F = (e) => (e >= 80 ? 'text-green-500' : e >= 50 ? 'text-yellow-500' : 'text-red-500');
  if (b)
    return e.jsx('div', {
      className: 'flex items-center justify-center h-96',
      children: e.jsx('div', {
        className: 'text-muted-foreground',
        children: 'Loading project overview...',
      }),
    });
  if (!v)
    return e.jsx('div', {
      className: 'flex items-center justify-center h-96',
      children: e.jsx('div', {
        className: 'text-destructive',
        children: 'Failed to load project data',
      }),
    });
  const I = [
      {
        label: 'Files',
        value: v.stats.files,
        icon: s,
        color: 'text-blue-500',
        bgColor: 'bg-blue-100 dark:bg-blue-950',
      },
      {
        label: 'Components',
        value: v.stats.components,
        icon: t,
        color: 'text-green-500',
        bgColor: 'bg-green-100 dark:bg-green-950',
      },
      {
        label: 'Functions',
        value: v.stats.functions,
        icon: a,
        color: 'text-purple-500',
        bgColor: 'bg-purple-100 dark:bg-purple-950',
      },
      {
        label: 'Interfaces',
        value: v.stats.interfaces,
        icon: n,
        color: 'text-orange-500',
        bgColor: 'bg-orange-100 dark:bg-orange-950',
      },
      {
        label: 'Classes',
        value: v.stats.classes,
        icon: r,
        color: 'text-red-500',
        bgColor: 'bg-red-100 dark:bg-red-950',
      },
      {
        label: 'Types',
        value: v.stats.types,
        icon: o,
        color: 'text-cyan-500',
        bgColor: 'bg-cyan-100 dark:bg-cyan-950',
      },
    ],
    T =
      v.stats.components + v.stats.functions + v.stats.classes + v.stats.interfaces + v.stats.types;
  return e.jsxs('div', {
    className: 'space-y-6',
    children: [
      e.jsxs('div', {
        children: [
          e.jsx('h1', {
            className: 'text-4xl font-bold text-foreground mb-2',
            children: 'Project Overview',
          }),
          e.jsxs('p', {
            className: 'text-muted-foreground flex items-center gap-2',
            children: [
              e.jsx(l, { className: 'h-4 w-4' }),
              'Documentation generated on ',
              new Date(v.metadata.generatedAt).toLocaleString(),
            ],
          }),
        ],
      }),
      C &&
        e.jsxs(p, {
          className:
            'p-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10',
          children: [
            e.jsxs('div', {
              className: 'flex items-start justify-between mb-4',
              children: [
                e.jsxs('div', {
                  children: [
                    e.jsxs('h2', {
                      className: 'text-2xl font-bold text-foreground mb-1 flex items-center gap-2',
                      children: [
                        e.jsx(d, { className: 'h-6 w-6 text-primary' }),
                        'Documentation Health',
                      ],
                    }),
                    e.jsx('p', {
                      className: 'text-sm text-muted-foreground',
                      children: 'Overall documentation coverage and quality metrics',
                    }),
                  ],
                }),
                e.jsxs(j, {
                  variant:
                    ((M = C.overallCoverage),
                    M >= 80 ? 'default' : M >= 50 ? 'secondary' : 'destructive'),
                  className: 'text-lg px-4 py-2',
                  children: [C.overallCoverage, '% Coverage'],
                }),
              ],
            }),
            e.jsxs('div', {
              className: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6',
              children: [
                e.jsxs('div', {
                  className: 'text-center p-4 rounded-lg bg-background/50 border border-primary/20',
                  children: [
                    e.jsxs('div', {
                      className: `text-3xl font-bold ${F(C.overallCoverage)}`,
                      children: [C.overallCoverage, '%'],
                    }),
                    e.jsx('div', {
                      className: 'text-xs text-muted-foreground mt-1 font-semibold',
                      children: 'Overall',
                    }),
                    e.jsxs('div', {
                      className: 'text-xs text-muted-foreground',
                      children: [
                        C.documentedFunctions +
                          C.documentedClasses +
                          C.documentedInterfaces +
                          C.documentedTypes +
                          C.documentedComponents,
                        '/',
                        T,
                      ],
                    }),
                  ],
                }),
                C.totalComponents > 0 &&
                  e.jsxs('div', {
                    className: 'text-center p-4 rounded-lg bg-background/50',
                    children: [
                      e.jsxs('div', {
                        className: `text-3xl font-bold ${F(Math.round((C.documentedComponents / C.totalComponents) * 100))}`,
                        children: [
                          Math.round((C.documentedComponents / C.totalComponents) * 100),
                          '%',
                        ],
                      }),
                      e.jsx('div', {
                        className: 'text-xs text-muted-foreground mt-1',
                        children: 'Components',
                      }),
                      e.jsxs('div', {
                        className: 'text-xs text-muted-foreground',
                        children: [C.documentedComponents, '/', C.totalComponents],
                      }),
                    ],
                  }),
                C.totalFunctions > 0 &&
                  e.jsxs('div', {
                    className: 'text-center p-4 rounded-lg bg-background/50',
                    children: [
                      e.jsxs('div', {
                        className: `text-3xl font-bold ${F(Math.round((C.documentedFunctions / C.totalFunctions) * 100))}`,
                        children: [
                          Math.round((C.documentedFunctions / C.totalFunctions) * 100),
                          '%',
                        ],
                      }),
                      e.jsx('div', {
                        className: 'text-xs text-muted-foreground mt-1',
                        children: 'Functions',
                      }),
                      e.jsxs('div', {
                        className: 'text-xs text-muted-foreground',
                        children: [C.documentedFunctions, '/', C.totalFunctions],
                      }),
                    ],
                  }),
                C.totalClasses > 0 &&
                  e.jsxs('div', {
                    className: 'text-center p-4 rounded-lg bg-background/50',
                    children: [
                      e.jsxs('div', {
                        className: `text-3xl font-bold ${F(Math.round((C.documentedClasses / C.totalClasses) * 100))}`,
                        children: [Math.round((C.documentedClasses / C.totalClasses) * 100), '%'],
                      }),
                      e.jsx('div', {
                        className: 'text-xs text-muted-foreground mt-1',
                        children: 'Classes',
                      }),
                      e.jsxs('div', {
                        className: 'text-xs text-muted-foreground',
                        children: [C.documentedClasses, '/', C.totalClasses],
                      }),
                    ],
                  }),
                C.totalInterfaces > 0 &&
                  e.jsxs('div', {
                    className: 'text-center p-4 rounded-lg bg-background/50',
                    children: [
                      e.jsxs('div', {
                        className: `text-3xl font-bold ${F(Math.round((C.documentedInterfaces / C.totalInterfaces) * 100))}`,
                        children: [
                          Math.round((C.documentedInterfaces / C.totalInterfaces) * 100),
                          '%',
                        ],
                      }),
                      e.jsx('div', {
                        className: 'text-xs text-muted-foreground mt-1',
                        children: 'Interfaces',
                      }),
                      e.jsxs('div', {
                        className: 'text-xs text-muted-foreground',
                        children: [C.documentedInterfaces, '/', C.totalInterfaces],
                      }),
                    ],
                  }),
                C.totalTypes > 0 &&
                  e.jsxs('div', {
                    className: 'text-center p-4 rounded-lg bg-background/50',
                    children: [
                      e.jsxs('div', {
                        className: `text-3xl font-bold ${F(Math.round((C.documentedTypes / C.totalTypes) * 100))}`,
                        children: [Math.round((C.documentedTypes / C.totalTypes) * 100), '%'],
                      }),
                      e.jsx('div', {
                        className: 'text-xs text-muted-foreground mt-1',
                        children: 'Types',
                      }),
                      e.jsxs('div', {
                        className: 'text-xs text-muted-foreground',
                        children: [C.documentedTypes, '/', C.totalTypes],
                      }),
                    ],
                  }),
              ],
            }),
            e.jsxs('div', {
              className: 'mt-6',
              children: [
                e.jsxs('div', {
                  className: 'flex justify-between text-sm text-muted-foreground mb-2',
                  children: [
                    e.jsx('span', { children: 'Documentation Progress' }),
                    e.jsxs('span', { children: [C.overallCoverage, '% Complete'] }),
                  ],
                }),
                e.jsx('div', {
                  className: 'w-full bg-muted rounded-full h-3 overflow-hidden',
                  children: e.jsx('div', {
                    className:
                      'h-full transition-all duration-500 ' +
                      (C.overallCoverage >= 80
                        ? 'bg-green-500'
                        : C.overallCoverage >= 50
                          ? 'bg-yellow-500'
                          : 'bg-red-500'),
                    style: { width: `${C.overallCoverage}%` },
                  }),
                }),
              ],
            }),
          ],
        }),
      e.jsxs('div', {
        children: [
          e.jsxs('h2', {
            className: 'text-xl font-bold text-foreground mb-4 flex items-center gap-2',
            children: [e.jsx(c, { className: 'h-5 w-5' }), 'Project Statistics'],
          }),
          e.jsx('div', {
            className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
            children: I.map((s) => {
              const t = s.icon;
              return e.jsx(
                p,
                {
                  className: 'p-6 hover:shadow-md transition-shadow',
                  children: e.jsxs('div', {
                    className: 'flex items-start justify-between',
                    children: [
                      e.jsxs('div', {
                        children: [
                          e.jsx('p', {
                            className: 'text-sm text-muted-foreground mb-1',
                            children: s.label,
                          }),
                          e.jsx('p', {
                            className: 'text-3xl font-bold text-foreground',
                            children: s.value,
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className: `p-3 rounded-lg ${s.bgColor}`,
                        children: e.jsx(t, { className: `h-6 w-6 ${s.color}` }),
                      }),
                    ],
                  }),
                },
                s.label
              );
            }),
          }),
        ],
      }),
      e.jsxs('div', {
        className: 'grid grid-cols-1 lg:grid-cols-2 gap-4',
        children: [
          e.jsxs(p, {
            className: 'p-6',
            children: [
              e.jsxs('h2', {
                className: 'text-xl font-bold text-foreground mb-4 flex items-center gap-2',
                children: [e.jsx(i, { className: 'h-5 w-5' }), 'Configuration'],
              }),
              e.jsxs('div', {
                className: 'space-y-3',
                children: [
                  e.jsxs('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      e.jsx('span', {
                        className: 'text-sm text-muted-foreground min-w-[120px]',
                        children: 'Entry Point:',
                      }),
                      e.jsx('code', {
                        className: 'text-sm bg-muted px-2 py-1 rounded',
                        children: v.metadata.config.entry,
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      e.jsx('span', {
                        className: 'text-sm text-muted-foreground min-w-[120px]',
                        children: 'Theme:',
                      }),
                      e.jsx(j, { variant: 'outline', children: v.metadata.config.theme }),
                    ],
                  }),
                  e.jsxs('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      e.jsx('span', {
                        className: 'text-sm text-muted-foreground min-w-[120px]',
                        children: 'Frameworks:',
                      }),
                      e.jsx('div', {
                        className: 'flex gap-2',
                        children: v.metadata.config.frameworks.map((s) =>
                          e.jsx(j, { variant: 'secondary', children: s }, s)
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          C &&
            e.jsxs(p, {
              className: 'p-6',
              children: [
                e.jsxs('h2', {
                  className: 'text-xl font-bold text-foreground mb-4 flex items-center gap-2',
                  children: [e.jsx(m, { className: 'h-5 w-5' }), 'Quality Insights'],
                }),
                e.jsxs('div', {
                  className: 'space-y-3',
                  children: [
                    e.jsxs('div', {
                      className: 'flex items-start gap-3',
                      children: [
                        C.overallCoverage >= 80
                          ? e.jsx(x, { className: 'h-5 w-5 text-green-500 mt-0.5' })
                          : e.jsx(u, { className: 'h-5 w-5 text-yellow-500 mt-0.5' }),
                        e.jsxs('div', {
                          children: [
                            e.jsx('div', {
                              className: 'text-sm font-medium',
                              children: 'Documentation Coverage',
                            }),
                            e.jsx('div', {
                              className: 'text-xs text-muted-foreground',
                              children:
                                C.overallCoverage >= 80
                                  ? 'Excellent! Your project has great documentation coverage.'
                                  : C.overallCoverage >= 50
                                    ? 'Good start! Consider documenting more code elements.'
                                    : 'Consider adding more documentation to improve clarity.',
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs('div', {
                      className: 'flex items-start gap-3',
                      children: [
                        e.jsx(g, { className: 'h-5 w-5 text-blue-500 mt-0.5' }),
                        e.jsxs('div', {
                          children: [
                            e.jsx('div', {
                              className: 'text-sm font-medium',
                              children: 'Code Elements',
                            }),
                            e.jsxs('div', {
                              className: 'text-xs text-muted-foreground',
                              children: [
                                T,
                                ' total code elements across ',
                                v.stats.files,
                                ' files',
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    v.stats.components > 0 &&
                      e.jsxs('div', {
                        className: 'flex items-start gap-3',
                        children: [
                          e.jsx(t, { className: 'h-5 w-5 text-green-500 mt-0.5' }),
                          e.jsxs('div', {
                            children: [
                              e.jsx('div', {
                                className: 'text-sm font-medium',
                                children: 'Component Library',
                              }),
                              e.jsxs('div', {
                                className: 'text-xs text-muted-foreground',
                                children: [
                                  v.stats.components,
                                  ' reusable component',
                                  1 !== v.stats.components ? 's' : '',
                                  ' detected',
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
        ],
      }),
      e.jsxs(p, {
        className: 'p-6',
        children: [
          e.jsxs('h2', {
            className: 'text-xl font-bold text-foreground mb-4 flex items-center gap-2',
            children: [e.jsx(h, { className: 'h-5 w-5' }), 'Quick Links'],
          }),
          e.jsxs('div', {
            className: 'grid grid-cols-1 md:grid-cols-2 gap-3',
            children: [
              e.jsxs('a', {
                href: '#/README',
                className:
                  'flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                'aria-label': 'Go to Introduction page',
                children: [
                  e.jsx(s, { className: 'h-5 w-5 text-primary', 'aria-hidden': 'true' }),
                  e.jsxs('div', {
                    children: [
                      e.jsx('div', { className: 'font-medium', children: 'Introduction' }),
                      e.jsx('div', {
                        className: 'text-xs text-muted-foreground',
                        children: 'Read the README',
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs('a', {
                href: '#/graph',
                className:
                  'flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                'aria-label': 'Go to Dependency Graph page',
                children: [
                  e.jsx(o, { className: 'h-5 w-5 text-primary', 'aria-hidden': 'true' }),
                  e.jsxs('div', {
                    children: [
                      e.jsx('div', { className: 'font-medium', children: 'Dependency Graph' }),
                      e.jsx('div', {
                        className: 'text-xs text-muted-foreground',
                        children: 'Visualize dependencies',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
  var M;
}
export { v as OverviewPage };
