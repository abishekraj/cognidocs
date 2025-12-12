import { r as e, R as t, a as n, b as r, c as o } from './react-vendor-BI367zWJ.js';
var i = { exports: {} },
  a = {},
  l = e,
  c = Symbol.for('react.element'),
  s = Symbol.for('react.fragment'),
  u = Object.prototype.hasOwnProperty,
  d = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  f = { key: !0, ref: !0, __self: !0, __source: !0 };
function p(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  for (r in (void 0 !== n && (i = '' + n),
  void 0 !== t.key && (i = '' + t.key),
  void 0 !== t.ref && (a = t.ref),
  t))
    u.call(t, r) && !f.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
  return { $$typeof: c, type: e, key: i, ref: a, props: o, _owner: d.current };
}
((a.Fragment = s), (a.jsx = p), (a.jsxs = p), (i.exports = a));
var h = i.exports;
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m = (e) => {
    const t = ((e) =>
      e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())))(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  v = (...e) =>
    e
      .filter((e, t, n) => Boolean(e) && '' !== e.trim() && n.indexOf(e) === t)
      .join(' ')
      .trim(),
  y = (e) => {
    for (const t in e) if (t.startsWith('aria-') || 'role' === t || 'title' === t) return !0;
  };
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var g = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w = e.forwardRef(
    (
      {
        color: t = 'currentColor',
        size: n = 24,
        strokeWidth: r = 2,
        absoluteStrokeWidth: o,
        className: i = '',
        children: a,
        iconNode: l,
        ...c
      },
      s
    ) =>
      e.createElement(
        'svg',
        {
          ref: s,
          ...g,
          width: n,
          height: n,
          stroke: t,
          strokeWidth: o ? (24 * Number(r)) / Number(n) : r,
          className: v('lucide', i),
          ...(!a && !y(c) && { 'aria-hidden': 'true' }),
          ...c,
        },
        [...l.map(([t, n]) => e.createElement(t, n)), ...(Array.isArray(a) ? a : [a])]
      )
  ),
  x = (t, n) => {
    const r = e.forwardRef(({ className: r, ...o }, i) => {
      return e.createElement(w, {
        ref: i,
        iconNode: n,
        className: v(
          `lucide-${((a = m(t)), a.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase())}`,
          `lucide-${t}`,
          r
        ),
        ...o,
      });
      var a;
    });
    return ((r.displayName = m(t)), r);
  },
  b = x('arrow-right', [
    ['path', { d: 'M5 12h14', key: '1ays0h' }],
    ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
  ]),
  E = x('arrow-up', [
    ['path', { d: 'm5 12 7-7 7 7', key: 'hav0vg' }],
    ['path', { d: 'M12 19V5', key: 'x0mq9r' }],
  ]),
  S = x('book-open', [
    ['path', { d: 'M12 7v14', key: '1akyts' }],
    [
      'path',
      {
        d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z',
        key: 'ruj8y',
      },
    ],
  ]),
  C = x('box', [
    [
      'path',
      {
        d: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z',
        key: 'hh9hay',
      },
    ],
    ['path', { d: 'm3.3 7 8.7 5 8.7-5', key: 'g66t2b' }],
    ['path', { d: 'M12 22V12', key: 'd0xqtd' }],
  ]),
  k = x('chart-column', [
    ['path', { d: 'M3 3v16a2 2 0 0 0 2 2h16', key: 'c24i48' }],
    ['path', { d: 'M18 17V9', key: '2bz60n' }],
    ['path', { d: 'M13 17V5', key: '1frdt8' }],
    ['path', { d: 'M8 17v-3', key: '17ska0' }],
  ]),
  R = x('check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]),
  P = x('chevron-down', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]),
  N = x('chevron-right', [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]]),
  M = x('chevron-up', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]),
  A = x('circle-alert', [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
    ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
  ]),
  j = x('circle-check', [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
  ]),
  O = x('clock', [
    ['path', { d: 'M12 6v6l4 2', key: 'mmk7yg' }],
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ]),
  T = x('code-xml', [
    ['path', { d: 'm18 16 4-4-4-4', key: '1inbqp' }],
    ['path', { d: 'm6 8-4 4 4 4', key: '15zrgr' }],
    ['path', { d: 'm14.5 4-5 16', key: 'e7oirm' }],
  ]),
  _ = x('code', [
    ['path', { d: 'm16 18 6-6-6-6', key: 'eg8j8' }],
    ['path', { d: 'm8 6-6 6 6 6', key: 'ppft3o' }],
  ]),
  L = x('copy', [
    ['rect', { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2', key: '17jyea' }],
    ['path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2', key: 'zix9uf' }],
  ]),
  D = x('external-link', [
    ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
    ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
    ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
  ]),
  I = x('file-braces', [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    [
      'path',
      { d: 'M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1', key: '1oajmo' },
    ],
    [
      'path',
      { d: 'M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1', key: 'mpwhp6' },
    ],
  ]),
  W = x('file-code', [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['path', { d: 'M10 12.5 8 15l2 2.5', key: '1tg20x' }],
    ['path', { d: 'm14 12.5 2 2.5-2 2.5', key: 'yinavb' }],
  ]),
  F = x('file-text', [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['path', { d: 'M10 9H8', key: 'b1mrlr' }],
    ['path', { d: 'M16 13H8', key: 't4e002' }],
    ['path', { d: 'M16 17H8', key: 'z1uh3a' }],
  ]),
  V = x('git-branch', [
    ['line', { x1: '6', x2: '6', y1: '3', y2: '15', key: '17qcm7' }],
    ['circle', { cx: '18', cy: '6', r: '3', key: '1h7g24' }],
    ['circle', { cx: '6', cy: '18', r: '3', key: 'fqmcym' }],
    ['path', { d: 'M18 9a9 9 0 0 1-9 9', key: 'n2h4wq' }],
  ]),
  $ = x('hash', [
    ['line', { x1: '4', x2: '20', y1: '9', y2: '9', key: '4lhtct' }],
    ['line', { x1: '4', x2: '20', y1: '15', y2: '15', key: 'vyu0kd' }],
    ['line', { x1: '10', x2: '8', y1: '3', y2: '21', key: '1ggp8o' }],
    ['line', { x1: '16', x2: '14', y1: '3', y2: '21', key: 'weycgp' }],
  ]),
  B = x('house', [
    ['path', { d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', key: '5wwlr5' }],
    [
      'path',
      {
        d: 'M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
        key: 'r6nss1',
      },
    ],
  ]),
  H = x('info', [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M12 16v-4', key: '1dtifu' }],
    ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
  ]),
  z = x('layers', [
    [
      'path',
      {
        d: 'M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z',
        key: 'zw3jo',
      },
    ],
    [
      'path',
      {
        d: 'M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12',
        key: '1wduqc',
      },
    ],
    [
      'path',
      {
        d: 'M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17',
        key: 'kqbvx6',
      },
    ],
  ]),
  q = x('lightbulb', [
    [
      'path',
      {
        d: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5',
        key: '1gvzjb',
      },
    ],
    ['path', { d: 'M9 18h6', key: 'x1upvd' }],
    ['path', { d: 'M10 22h4', key: 'ceow96' }],
  ]),
  U = x('link', [
    ['path', { d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71', key: '1cjeqo' }],
    ['path', { d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71', key: '19qd67' }],
  ]),
  K = x('menu', [
    ['path', { d: 'M4 5h16', key: '1tepv9' }],
    ['path', { d: 'M4 12h16', key: '1lakjw' }],
    ['path', { d: 'M4 19h16', key: '1djgab' }],
  ]),
  Y = x('network', [
    ['rect', { x: '16', y: '16', width: '6', height: '6', rx: '1', key: '4q2zg0' }],
    ['rect', { x: '2', y: '16', width: '6', height: '6', rx: '1', key: '8cvhb9' }],
    ['rect', { x: '9', y: '2', width: '6', height: '6', rx: '1', key: '1egb70' }],
    ['path', { d: 'M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3', key: '1jsf9p' }],
    ['path', { d: 'M12 12V8', key: '2874zd' }],
  ]),
  X = x('package', [
    [
      'path',
      {
        d: 'M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z',
        key: '1a0edw',
      },
    ],
    ['path', { d: 'M12 22V12', key: 'd0xqtd' }],
    ['polyline', { points: '3.29 7 12 12 20.71 7', key: 'ousv84' }],
    ['path', { d: 'm7.5 4.27 9 5.15', key: '1c824w' }],
  ]),
  Z = x('palette', [
    [
      'path',
      {
        d: 'M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z',
        key: 'e79jfc',
      },
    ],
    ['circle', { cx: '13.5', cy: '6.5', r: '.5', fill: 'currentColor', key: '1okk4w' }],
    ['circle', { cx: '17.5', cy: '10.5', r: '.5', fill: 'currentColor', key: 'f64h9f' }],
    ['circle', { cx: '6.5', cy: '12.5', r: '.5', fill: 'currentColor', key: 'qy21gx' }],
    ['circle', { cx: '8.5', cy: '7.5', r: '.5', fill: 'currentColor', key: 'fotxhn' }],
  ]),
  G = x('search', [
    ['path', { d: 'm21 21-4.34-4.34', key: '14j7rj' }],
    ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
  ]),
  J = x('trending-up', [
    ['path', { d: 'M16 7h6v6', key: 'box55l' }],
    ['path', { d: 'm22 7-8.5 8.5-5-5L2 17', key: '1t1m79' }],
  ]),
  Q = x('triangle-alert', [
    [
      'path',
      {
        d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
        key: 'wmoenq',
      },
    ],
    ['path', { d: 'M12 9v4', key: 'juzpu7' }],
    ['path', { d: 'M12 17h.01', key: 'p32p05' }],
  ]),
  ee = x('x', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]),
  te = x('zap', [
    [
      'path',
      {
        d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
        key: '1xq2db',
      },
    ],
  ]);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ function ne(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function re(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((null == e || e(r), !1 === n || !r.defaultPrevented)) return null == t ? void 0 : t(r);
  };
}
function oe(...t) {
  const n = t[0];
  if (1 === t.length) return n;
  const r = () => {
    const r = t.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (t) {
      const o = r.reduce(
        (e, { useScope: n, scopeName: r }) => ({ ...e, ...n(t)[`__scope${r}`] }),
        {}
      );
      return e.useMemo(() => ({ [`__scope${n.scopeName}`]: o }), [o]);
    };
  };
  return ((r.scopeName = n.scopeName), r);
}
function ie(e, t) {
  if ('function' == typeof e) return e(t);
  null != e && (e.current = t);
}
function ae(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((e) => {
      const r = ie(e, t);
      return (n || 'function' != typeof r || (n = !0), r);
    });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          const n = r[t];
          'function' == typeof n ? n() : ie(e[t], null);
        }
      };
  };
}
function le(...t) {
  return e.useCallback(ae(...t), t);
}
function ce(t) {
  const n = se(t),
    r = e.forwardRef((t, r) => {
      const { children: o, ...i } = t,
        a = e.Children.toArray(o),
        l = a.find(de);
      if (l) {
        const t = l.props.children,
          o = a.map((n) =>
            n === l
              ? e.Children.count(t) > 1
                ? e.Children.only(null)
                : e.isValidElement(t)
                  ? t.props.children
                  : null
              : n
          );
        return h.jsx(n, {
          ...i,
          ref: r,
          children: e.isValidElement(t) ? e.cloneElement(t, void 0, o) : null,
        });
      }
      return h.jsx(n, { ...i, ref: r, children: o });
    });
  return ((r.displayName = `${t}.Slot`), r);
}
function se(t) {
  const n = e.forwardRef((t, n) => {
    const { children: r, ...o } = t;
    if (e.isValidElement(r)) {
      const t = (function (e) {
          var t, n;
          let r = null == (t = Object.getOwnPropertyDescriptor(e.props, 'ref')) ? void 0 : t.get,
            o = r && 'isReactWarning' in r && r.isReactWarning;
          if (o) return e.ref;
          if (
            ((r = null == (n = Object.getOwnPropertyDescriptor(e, 'ref')) ? void 0 : n.get),
            (o = r && 'isReactWarning' in r && r.isReactWarning),
            o)
          )
            return e.props.ref;
          return e.props.ref || e.ref;
        })(r),
        i = (function (e, t) {
          const n = { ...t };
          for (const r in t) {
            const o = e[r],
              i = t[r];
            /^on[A-Z]/.test(r)
              ? o && i
                ? (n[r] = (...e) => {
                    const t = i(...e);
                    return (o(...e), t);
                  })
                : o && (n[r] = o)
              : 'style' === r
                ? (n[r] = { ...o, ...i })
                : 'className' === r && (n[r] = [o, i].filter(Boolean).join(' '));
          }
          return { ...e, ...n };
        })(o, r.props);
      return (r.type !== e.Fragment && (i.ref = n ? ae(n, t) : t), e.cloneElement(r, i));
    }
    return e.Children.count(r) > 1 ? e.Children.only(null) : null;
  });
  return ((n.displayName = `${t}.SlotClone`), n);
}
var ue = Symbol('radix.slottable');
function de(t) {
  return (
    e.isValidElement(t) &&
    'function' == typeof t.type &&
    '__radixId' in t.type &&
    t.type.__radixId === ue
  );
}
function fe(...t) {
  const n = t[0];
  if (1 === t.length) return n;
  const r = () => {
    const r = t.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (t) {
      const o = r.reduce(
        (e, { useScope: n, scopeName: r }) => ({ ...e, ...n(t)[`__scope${r}`] }),
        {}
      );
      return e.useMemo(() => ({ [`__scope${n.scopeName}`]: o }), [o]);
    };
  };
  return ((r.scopeName = n.scopeName), r);
}
var pe = e.createContext(void 0);
function he(t) {
  const n = me(t),
    r = e.forwardRef((t, r) => {
      const { children: o, ...i } = t,
        a = e.Children.toArray(o),
        l = a.find(ye);
      if (l) {
        const t = l.props.children,
          o = a.map((n) =>
            n === l
              ? e.Children.count(t) > 1
                ? e.Children.only(null)
                : e.isValidElement(t)
                  ? t.props.children
                  : null
              : n
          );
        return h.jsx(n, {
          ...i,
          ref: r,
          children: e.isValidElement(t) ? e.cloneElement(t, void 0, o) : null,
        });
      }
      return h.jsx(n, { ...i, ref: r, children: o });
    });
  return ((r.displayName = `${t}.Slot`), r);
}
function me(t) {
  const n = e.forwardRef((t, n) => {
    const { children: r, ...o } = t;
    if (e.isValidElement(r)) {
      const t = (function (e) {
          var t, n;
          let r = null == (t = Object.getOwnPropertyDescriptor(e.props, 'ref')) ? void 0 : t.get,
            o = r && 'isReactWarning' in r && r.isReactWarning;
          if (o) return e.ref;
          if (
            ((r = null == (n = Object.getOwnPropertyDescriptor(e, 'ref')) ? void 0 : n.get),
            (o = r && 'isReactWarning' in r && r.isReactWarning),
            o)
          )
            return e.props.ref;
          return e.props.ref || e.ref;
        })(r),
        i = (function (e, t) {
          const n = { ...t };
          for (const r in t) {
            const o = e[r],
              i = t[r];
            /^on[A-Z]/.test(r)
              ? o && i
                ? (n[r] = (...e) => {
                    const t = i(...e);
                    return (o(...e), t);
                  })
                : o && (n[r] = o)
              : 'style' === r
                ? (n[r] = { ...o, ...i })
                : 'className' === r && (n[r] = [o, i].filter(Boolean).join(' '));
          }
          return { ...e, ...n };
        })(o, r.props);
      return (r.type !== e.Fragment && (i.ref = n ? ae(n, t) : t), e.cloneElement(r, i));
    }
    return e.Children.count(r) > 1 ? e.Children.only(null) : null;
  });
  return ((n.displayName = `${t}.SlotClone`), n);
}
var ve = Symbol('radix.slottable');
function ye(t) {
  return (
    e.isValidElement(t) &&
    'function' == typeof t.type &&
    '__radixId' in t.type &&
    t.type.__radixId === ve
  );
}
var ge = [
  'a',
  'button',
  'div',
  'form',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'select',
  'span',
  'svg',
  'ul',
].reduce((t, n) => {
  const r = he(`Primitive.${n}`),
    o = e.forwardRef((e, t) => {
      const { asChild: o, ...i } = e,
        a = o ? r : n;
      return (
        'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
        h.jsx(a, { ...i, ref: t })
      );
    });
  return ((o.displayName = `Primitive.${n}`), { ...t, [n]: o });
}, {});
function we(t) {
  const n = e.useRef(t);
  return (
    e.useEffect(() => {
      n.current = t;
    }),
    e.useMemo(
      () =>
        (...e) => {
          var t;
          return null == (t = n.current) ? void 0 : t.call(n, ...e);
        },
      []
    )
  );
}
var xe,
  be = 'dismissableLayer.update',
  Ee = 'dismissableLayer.pointerDownOutside',
  Se = 'dismissableLayer.focusOutside',
  Ce = e.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  ke = e.forwardRef((t, n) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: a,
        onInteractOutside: l,
        onDismiss: c,
        ...s
      } = t,
      u = e.useContext(Ce),
      [d, f] = e.useState(null),
      p =
        (null == d ? void 0 : d.ownerDocument) ??
        (null == globalThis ? void 0 : globalThis.document),
      [, m] = e.useState({}),
      v = le(n, (e) => f(e)),
      y = Array.from(u.layers),
      [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      w = y.indexOf(g),
      x = d ? y.indexOf(d) : -1,
      b = u.layersWithOutsidePointerEventsDisabled.size > 0,
      E = x >= w,
      S = (function (t, n = null == globalThis ? void 0 : globalThis.document) {
        const r = we(t),
          o = e.useRef(!1),
          i = e.useRef(() => {});
        return (
          e.useEffect(() => {
            const e = (e) => {
                if (e.target && !o.current) {
                  let t = function () {
                    Pe(Ee, r, o, { discrete: !0 });
                  };
                  const o = { originalEvent: e };
                  'touch' === e.pointerType
                    ? (n.removeEventListener('click', i.current),
                      (i.current = t),
                      n.addEventListener('click', i.current, { once: !0 }))
                    : t();
                } else n.removeEventListener('click', i.current);
                o.current = !1;
              },
              t = window.setTimeout(() => {
                n.addEventListener('pointerdown', e);
              }, 0);
            return () => {
              (window.clearTimeout(t),
                n.removeEventListener('pointerdown', e),
                n.removeEventListener('click', i.current));
            };
          }, [n, r]),
          { onPointerDownCapture: () => (o.current = !0) }
        );
      })((e) => {
        const t = e.target,
          n = [...u.branches].some((e) => e.contains(t));
        E && !n && (null == i || i(e), null == l || l(e), e.defaultPrevented || null == c || c());
      }, p),
      C = (function (t, n = null == globalThis ? void 0 : globalThis.document) {
        const r = we(t),
          o = e.useRef(!1);
        return (
          e.useEffect(() => {
            const e = (e) => {
              if (e.target && !o.current) {
                Pe(Se, r, { originalEvent: e }, { discrete: !1 });
              }
            };
            return (n.addEventListener('focusin', e), () => n.removeEventListener('focusin', e));
          }, [n, r]),
          { onFocusCapture: () => (o.current = !0), onBlurCapture: () => (o.current = !1) }
        );
      })((e) => {
        const t = e.target;
        [...u.branches].some((e) => e.contains(t)) ||
          (null == a || a(e), null == l || l(e), e.defaultPrevented || null == c || c());
      }, p);
    return (
      (function (t, n = null == globalThis ? void 0 : globalThis.document) {
        const r = we(t);
        e.useEffect(() => {
          const e = (e) => {
            'Escape' === e.key && r(e);
          };
          return (
            n.addEventListener('keydown', e, { capture: !0 }),
            () => n.removeEventListener('keydown', e, { capture: !0 })
          );
        }, [r, n]);
      })((e) => {
        x === u.layers.size - 1 &&
          (null == o || o(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
      }, p),
      e.useEffect(() => {
        if (d)
          return (
            r &&
              (0 === u.layersWithOutsidePointerEventsDisabled.size &&
                ((xe = p.body.style.pointerEvents), (p.body.style.pointerEvents = 'none')),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Re(),
            () => {
              r &&
                1 === u.layersWithOutsidePointerEventsDisabled.size &&
                (p.body.style.pointerEvents = xe);
            }
          );
      }, [d, p, r, u]),
      e.useEffect(
        () => () => {
          d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Re());
        },
        [d, u]
      ),
      e.useEffect(() => {
        const e = () => m({});
        return (document.addEventListener(be, e), () => document.removeEventListener(be, e));
      }, []),
      h.jsx(ge.div, {
        ...s,
        ref: v,
        style: { pointerEvents: b ? (E ? 'auto' : 'none') : void 0, ...t.style },
        onFocusCapture: re(t.onFocusCapture, C.onFocusCapture),
        onBlurCapture: re(t.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: re(t.onPointerDownCapture, S.onPointerDownCapture),
      })
    );
  });
ke.displayName = 'DismissableLayer';
function Re() {
  const e = new CustomEvent(be);
  document.dispatchEvent(e);
}
function Pe(e, t, r, { discrete: o }) {
  const i = r.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  (t && i.addEventListener(e, t, { once: !0 }),
    o
      ? (function (e, t) {
          e && n.flushSync(() => e.dispatchEvent(t));
        })(i, a)
      : i.dispatchEvent(a));
}
e.forwardRef((t, n) => {
  const r = e.useContext(Ce),
    o = e.useRef(null),
    i = le(n, o);
  return (
    e.useEffect(() => {
      const e = o.current;
      if (e)
        return (
          r.branches.add(e),
          () => {
            r.branches.delete(e);
          }
        );
    }, [r.branches]),
    h.jsx(ge.div, { ...t, ref: i })
  );
}).displayName = 'DismissableLayerBranch';
var Ne = 0;
function Me() {
  const e = document.createElement('span');
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.outline = 'none'),
    (e.style.opacity = '0'),
    (e.style.position = 'fixed'),
    (e.style.pointerEvents = 'none'),
    e
  );
}
var Ae = 'focusScope.autoFocusOnMount',
  je = 'focusScope.autoFocusOnUnmount',
  Oe = { bubbles: !1, cancelable: !0 },
  Te = e.forwardRef((t, n) => {
    const { loop: r = !1, trapped: o = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...l } = t,
      [c, s] = e.useState(null),
      u = we(i),
      d = we(a),
      f = e.useRef(null),
      p = le(n, (e) => s(e)),
      m = e.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (e.useEffect(() => {
      if (o) {
        let e = function (e) {
            if (m.paused || !c) return;
            const t = e.target;
            c.contains(t) ? (f.current = t) : Ie(f.current, { select: !0 });
          },
          t = function (e) {
            if (m.paused || !c) return;
            const t = e.relatedTarget;
            null !== t && (c.contains(t) || Ie(f.current, { select: !0 }));
          },
          n = function (e) {
            if (document.activeElement === document.body)
              for (const t of e) t.removedNodes.length > 0 && Ie(c);
          };
        (document.addEventListener('focusin', e), document.addEventListener('focusout', t));
        const r = new MutationObserver(n);
        return (
          c && r.observe(c, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener('focusin', e),
              document.removeEventListener('focusout', t),
              r.disconnect());
          }
        );
      }
    }, [o, c, m.paused]),
      e.useEffect(() => {
        if (c) {
          We.add(m);
          const t = document.activeElement;
          if (!c.contains(t)) {
            const n = new CustomEvent(Ae, Oe);
            (c.addEventListener(Ae, u),
              c.dispatchEvent(n),
              n.defaultPrevented ||
                (!(function (e, { select: t = !1 } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if ((Ie(r, { select: t }), document.activeElement !== n)) return;
                })(((e = _e(c)), e.filter((e) => 'A' !== e.tagName)), { select: !0 }),
                document.activeElement === t && Ie(c)));
          }
          return () => {
            (c.removeEventListener(Ae, u),
              setTimeout(() => {
                const e = new CustomEvent(je, Oe);
                (c.addEventListener(je, d),
                  c.dispatchEvent(e),
                  e.defaultPrevented || Ie(t ?? document.body, { select: !0 }),
                  c.removeEventListener(je, d),
                  We.remove(m));
              }, 0));
          };
        }
        var e;
      }, [c, u, d, m]));
    const v = e.useCallback(
      (e) => {
        if (!r && !o) return;
        if (m.paused) return;
        const t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
          n = document.activeElement;
        if (t && n) {
          const t = e.currentTarget,
            [o, i] = (function (e) {
              const t = _e(e),
                n = Le(t, e),
                r = Le(t.reverse(), e);
              return [n, r];
            })(t);
          o && i
            ? e.shiftKey || n !== i
              ? e.shiftKey && n === o && (e.preventDefault(), r && Ie(i, { select: !0 }))
              : (e.preventDefault(), r && Ie(o, { select: !0 }))
            : n === t && e.preventDefault();
        }
      },
      [r, o, m.paused]
    );
    return h.jsx(ge.div, { tabIndex: -1, ...l, ref: p, onKeyDown: v });
  });
function _e(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        const t = 'INPUT' === e.tagName && 'hidden' === e.type;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Le(e, t) {
  for (const n of e) if (!De(n, { upTo: t })) return n;
}
function De(e, { upTo: t }) {
  if ('hidden' === getComputedStyle(e).visibility) return !0;
  for (; e; ) {
    if (void 0 !== t && e === t) return !1;
    if ('none' === getComputedStyle(e).display) return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ie(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }),
      e !== n &&
        (function (e) {
          return e instanceof HTMLInputElement && 'select' in e;
        })(e) &&
        t &&
        e.select());
  }
}
Te.displayName = 'FocusScope';
var We = (function () {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && (null == n || n.pause()), (e = Fe(e, t)), e.unshift(t));
    },
    remove(t) {
      var n;
      ((e = Fe(e, t)), null == (n = e[0]) || n.resume());
    },
  };
})();
function Fe(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return (-1 !== r && n.splice(r, 1), n);
}
var Ve = (null == globalThis ? void 0 : globalThis.document) ? e.useLayoutEffect : () => {},
  $e = r[' useId '.trim().toString()] || (() => {}),
  Be = 0;
function He(t) {
  const [n, r] = e.useState($e());
  return (
    Ve(() => {
      r((e) => e ?? String(Be++));
    }, [t]),
    n ? `radix-${n}` : ''
  );
}
const ze = ['top', 'right', 'bottom', 'left'],
  qe = Math.min,
  Ue = Math.max,
  Ke = Math.round,
  Ye = Math.floor,
  Xe = (e) => ({ x: e, y: e }),
  Ze = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  Ge = { start: 'end', end: 'start' };
function Je(e, t, n) {
  return Ue(e, qe(t, n));
}
function Qe(e, t) {
  return 'function' == typeof e ? e(t) : e;
}
function et(e) {
  return e.split('-')[0];
}
function tt(e) {
  return e.split('-')[1];
}
function nt(e) {
  return 'x' === e ? 'y' : 'x';
}
function rt(e) {
  return 'y' === e ? 'height' : 'width';
}
const ot = new Set(['top', 'bottom']);
function it(e) {
  return ot.has(et(e)) ? 'y' : 'x';
}
function at(e) {
  return nt(it(e));
}
function lt(e) {
  return e.replace(/start|end/g, (e) => Ge[e]);
}
const ct = ['left', 'right'],
  st = ['right', 'left'],
  ut = ['top', 'bottom'],
  dt = ['bottom', 'top'];
function ft(e, t, n, r) {
  const o = tt(e);
  let i = (function (e, t, n) {
    switch (e) {
      case 'top':
      case 'bottom':
        return n ? (t ? st : ct) : t ? ct : st;
      case 'left':
      case 'right':
        return t ? ut : dt;
      default:
        return [];
    }
  })(et(e), 'start' === n, r);
  return (o && ((i = i.map((e) => e + '-' + o)), t && (i = i.concat(i.map(lt)))), i);
}
function pt(e) {
  return e.replace(/left|right|bottom|top/g, (e) => Ze[e]);
}
function ht(e) {
  return 'number' != typeof e
    ? (function (e) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...e };
      })(e)
    : { top: e, right: e, bottom: e, left: e };
}
function mt(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function vt(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = it(t),
    a = at(t),
    l = rt(a),
    c = et(t),
    s = 'y' === i,
    u = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    f = r[l] / 2 - o[l] / 2;
  let p;
  switch (c) {
    case 'top':
      p = { x: u, y: r.y - o.height };
      break;
    case 'bottom':
      p = { x: u, y: r.y + r.height };
      break;
    case 'right':
      p = { x: r.x + r.width, y: d };
      break;
    case 'left':
      p = { x: r.x - o.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (tt(t)) {
    case 'start':
      p[a] -= f * (n && s ? -1 : 1);
      break;
    case 'end':
      p[a] += f * (n && s ? -1 : 1);
  }
  return p;
}
async function yt(e, t) {
  var n;
  void 0 === t && (t = {});
  const { x: r, y: o, platform: i, rects: a, elements: l, strategy: c } = e,
    {
      boundary: s = 'clippingAncestors',
      rootBoundary: u = 'viewport',
      elementContext: d = 'floating',
      altBoundary: f = !1,
      padding: p = 0,
    } = Qe(t, e),
    h = ht(p),
    m = l[f ? ('floating' === d ? 'reference' : 'floating') : d],
    v = mt(
      await i.getClippingRect({
        element:
          null == (n = await (null == i.isElement ? void 0 : i.isElement(m))) || n
            ? m
            : m.contextElement ||
              (await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating))),
        boundary: s,
        rootBoundary: u,
        strategy: c,
      })
    ),
    y =
      'floating' === d
        ? { x: r, y: o, width: a.floating.width, height: a.floating.height }
        : a.reference,
    g = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)),
    w = ((await (null == i.isElement ? void 0 : i.isElement(g))) &&
      (await (null == i.getScale ? void 0 : i.getScale(g)))) || { x: 1, y: 1 },
    x = mt(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: y,
            offsetParent: g,
            strategy: c,
          })
        : y
    );
  return {
    top: (v.top - x.top + h.top) / w.y,
    bottom: (x.bottom - v.bottom + h.bottom) / w.y,
    left: (v.left - x.left + h.left) / w.x,
    right: (x.right - v.right + h.right) / w.x,
  };
}
function gt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function wt(e) {
  return ze.some((t) => e[t] >= 0);
}
const xt = new Set(['left', 'top']);
function bt() {
  return 'undefined' != typeof window;
}
function Et(e) {
  return kt(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function St(e) {
  var t;
  return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function Ct(e) {
  var t;
  return null == (t = (kt(e) ? e.ownerDocument : e.document) || window.document)
    ? void 0
    : t.documentElement;
}
function kt(e) {
  return !!bt() && (e instanceof Node || e instanceof St(e).Node);
}
function Rt(e) {
  return !!bt() && (e instanceof Element || e instanceof St(e).Element);
}
function Pt(e) {
  return !!bt() && (e instanceof HTMLElement || e instanceof St(e).HTMLElement);
}
function Nt(e) {
  return (
    !(!bt() || 'undefined' == typeof ShadowRoot) &&
    (e instanceof ShadowRoot || e instanceof St(e).ShadowRoot)
  );
}
const Mt = new Set(['inline', 'contents']);
function At(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Mt.has(o);
}
const jt = new Set(['table', 'td', 'th']);
function Ot(e) {
  return jt.has(Et(e));
}
const Tt = [':popover-open', ':modal'];
function _t(e) {
  return Tt.some((t) => {
    try {
      return e.matches(t);
    } catch (n) {
      return !1;
    }
  });
}
const Lt = ['transform', 'translate', 'scale', 'rotate', 'perspective'],
  Dt = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'],
  It = ['paint', 'layout', 'strict', 'content'];
function Wt(e) {
  const t = Ft(),
    n = Rt(e) ? Bt(e) : e;
  return (
    Lt.some((e) => !!n[e] && 'none' !== n[e]) ||
    (!!n.containerType && 'normal' !== n.containerType) ||
    (!t && !!n.backdropFilter && 'none' !== n.backdropFilter) ||
    (!t && !!n.filter && 'none' !== n.filter) ||
    Dt.some((e) => (n.willChange || '').includes(e)) ||
    It.some((e) => (n.contain || '').includes(e))
  );
}
function Ft() {
  return (
    !('undefined' == typeof CSS || !CSS.supports) && CSS.supports('-webkit-backdrop-filter', 'none')
  );
}
const Vt = new Set(['html', 'body', '#document']);
function $t(e) {
  return Vt.has(Et(e));
}
function Bt(e) {
  return St(e).getComputedStyle(e);
}
function Ht(e) {
  return Rt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function zt(e) {
  if ('html' === Et(e)) return e;
  const t = e.assignedSlot || e.parentNode || (Nt(e) && e.host) || Ct(e);
  return Nt(t) ? t.host : t;
}
function qt(e) {
  const t = zt(e);
  return $t(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Pt(t) && At(t) ? t : qt(t);
}
function Ut(e, t, n) {
  var r;
  (void 0 === t && (t = []), void 0 === n && (n = !0));
  const o = qt(e),
    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
    a = St(o);
  if (i) {
    const e = Kt(a);
    return t.concat(a, a.visualViewport || [], At(o) ? o : [], e && n ? Ut(e) : []);
  }
  return t.concat(o, Ut(o, [], n));
}
function Kt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Yt(e) {
  const t = Bt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Pt(e),
    i = o ? e.offsetWidth : n,
    a = o ? e.offsetHeight : r,
    l = Ke(n) !== i || Ke(r) !== a;
  return (l && ((n = i), (r = a)), { width: n, height: r, $: l });
}
function Xt(e) {
  return Rt(e) ? e : e.contextElement;
}
function Zt(e) {
  const t = Xt(e);
  if (!Pt(t)) return Xe(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Yt(t);
  let a = (i ? Ke(n.width) : n.width) / r,
    l = (i ? Ke(n.height) : n.height) / o;
  return (
    (a && Number.isFinite(a)) || (a = 1),
    (l && Number.isFinite(l)) || (l = 1),
    { x: a, y: l }
  );
}
const Gt = Xe(0);
function Jt(e) {
  const t = St(e);
  return Ft() && t.visualViewport
    ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
    : Gt;
}
function Qt(e, t, n, r) {
  (void 0 === t && (t = !1), void 0 === n && (n = !1));
  const o = e.getBoundingClientRect(),
    i = Xt(e);
  let a = Xe(1);
  t && (r ? Rt(r) && (a = Zt(r)) : (a = Zt(e)));
  const l = (function (e, t, n) {
    return (void 0 === t && (t = !1), !(!n || (t && n !== St(e))) && t);
  })(i, n, r)
    ? Jt(i)
    : Xe(0);
  let c = (o.left + l.x) / a.x,
    s = (o.top + l.y) / a.y,
    u = o.width / a.x,
    d = o.height / a.y;
  if (i) {
    const e = St(i),
      t = r && Rt(r) ? St(r) : r;
    let n = e,
      o = Kt(n);
    for (; o && r && t !== n; ) {
      const e = Zt(o),
        t = o.getBoundingClientRect(),
        r = Bt(o),
        i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
      ((c *= e.x),
        (s *= e.y),
        (u *= e.x),
        (d *= e.y),
        (c += i),
        (s += a),
        (n = St(o)),
        (o = Kt(n)));
    }
  }
  return mt({ width: u, height: d, x: c, y: s });
}
function en(e, t) {
  const n = Ht(e).scrollLeft;
  return t ? t.left + n : Qt(Ct(e)).left + n;
}
function tn(e, t) {
  const n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - en(e, n), y: n.top + t.scrollTop };
}
const nn = new Set(['absolute', 'fixed']);
function rn(e, t, n) {
  let r;
  if ('viewport' === t)
    r = (function (e, t) {
      const n = St(e),
        r = Ct(e),
        o = n.visualViewport;
      let i = r.clientWidth,
        a = r.clientHeight,
        l = 0,
        c = 0;
      if (o) {
        ((i = o.width), (a = o.height));
        const e = Ft();
        (!e || (e && 'fixed' === t)) && ((l = o.offsetLeft), (c = o.offsetTop));
      }
      const s = en(r);
      if (s <= 0) {
        const e = r.ownerDocument,
          t = e.body,
          n = getComputedStyle(t),
          o =
            ('CSS1Compat' === e.compatMode &&
              parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
            0,
          a = Math.abs(r.clientWidth - t.clientWidth - o);
        a <= 25 && (i -= a);
      } else s <= 25 && (i += s);
      return { width: i, height: a, x: l, y: c };
    })(e, n);
  else if ('document' === t)
    r = (function (e) {
      const t = Ct(e),
        n = Ht(e),
        r = e.ownerDocument.body,
        o = Ue(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = Ue(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
      let a = -n.scrollLeft + en(e);
      const l = -n.scrollTop;
      return (
        'rtl' === Bt(r).direction && (a += Ue(t.clientWidth, r.clientWidth) - o),
        { width: o, height: i, x: a, y: l }
      );
    })(Ct(e));
  else if (Rt(t))
    r = (function (e, t) {
      const n = Qt(e, !0, 'fixed' === t),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = Pt(e) ? Zt(e) : Xe(1);
      return { width: e.clientWidth * i.x, height: e.clientHeight * i.y, x: o * i.x, y: r * i.y };
    })(t, n);
  else {
    const n = Jt(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return mt(r);
}
function on(e, t) {
  const n = zt(e);
  return !(n === t || !Rt(n) || $t(n)) && ('fixed' === Bt(n).position || on(n, t));
}
function an(e, t, n) {
  const r = Pt(t),
    o = Ct(t),
    i = 'fixed' === n,
    a = Qt(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = Xe(0);
  function s() {
    c.x = en(o);
  }
  if (r || (!r && !i))
    if ((('body' !== Et(t) || At(o)) && (l = Ht(t)), r)) {
      const e = Qt(t, !0, i, t);
      ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
    } else o && s();
  i && !r && o && s();
  const u = !o || r || i ? Xe(0) : tn(o, l);
  return {
    x: a.left + l.scrollLeft - c.x - u.x,
    y: a.top + l.scrollTop - c.y - u.y,
    width: a.width,
    height: a.height,
  };
}
function ln(e) {
  return 'static' === Bt(e).position;
}
function cn(e, t) {
  if (!Pt(e) || 'fixed' === Bt(e).position) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (Ct(e) === n && (n = n.ownerDocument.body), n);
}
function sn(e, t) {
  const n = St(e);
  if (_t(e)) return n;
  if (!Pt(e)) {
    let t = zt(e);
    for (; t && !$t(t); ) {
      if (Rt(t) && !ln(t)) return t;
      t = zt(t);
    }
    return n;
  }
  let r = cn(e, t);
  for (; r && Ot(r) && ln(r); ) r = cn(r, t);
  return r && $t(r) && ln(r) && !Wt(r)
    ? n
    : r ||
        (function (e) {
          let t = zt(e);
          for (; Pt(t) && !$t(t); ) {
            if (Wt(t)) return t;
            if (_t(t)) return null;
            t = zt(t);
          }
          return null;
        })(e) ||
        n;
}
const un = {
  convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const i = 'fixed' === o,
      a = Ct(r),
      l = !!t && _t(t.floating);
    if (r === a || (l && i)) return n;
    let c = { scrollLeft: 0, scrollTop: 0 },
      s = Xe(1);
    const u = Xe(0),
      d = Pt(r);
    if ((d || (!d && !i)) && (('body' !== Et(r) || At(a)) && (c = Ht(r)), Pt(r))) {
      const e = Qt(r);
      ((s = Zt(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
    }
    const f = !a || d || i ? Xe(0) : tn(a, c);
    return {
      width: n.width * s.x,
      height: n.height * s.y,
      x: n.x * s.x - c.scrollLeft * s.x + u.x + f.x,
      y: n.y * s.y - c.scrollTop * s.y + u.y + f.y,
    };
  },
  getDocumentElement: Ct,
  getClippingRect: function (e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const i = [
        ...('clippingAncestors' === n
          ? _t(t)
            ? []
            : (function (e, t) {
                const n = t.get(e);
                if (n) return n;
                let r = Ut(e, [], !1).filter((e) => Rt(e) && 'body' !== Et(e)),
                  o = null;
                const i = 'fixed' === Bt(e).position;
                let a = i ? zt(e) : e;
                for (; Rt(a) && !$t(a); ) {
                  const t = Bt(a),
                    n = Wt(a);
                  (n || 'fixed' !== t.position || (o = null),
                    (
                      i
                        ? !n && !o
                        : (!n && 'static' === t.position && o && nn.has(o.position)) ||
                          (At(a) && !n && on(e, a))
                    )
                      ? (r = r.filter((e) => e !== a))
                      : (o = t),
                    (a = zt(a)));
                }
                return (t.set(e, r), r);
              })(t, this._c)
          : [].concat(n)),
        r,
      ],
      a = i[0],
      l = i.reduce(
        (e, n) => {
          const r = rn(t, n, o);
          return (
            (e.top = Ue(r.top, e.top)),
            (e.right = qe(r.right, e.right)),
            (e.bottom = qe(r.bottom, e.bottom)),
            (e.left = Ue(r.left, e.left)),
            e
          );
        },
        rn(t, a, o)
      );
    return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
  },
  getOffsetParent: sn,
  getElementRects: async function (e) {
    const t = this.getOffsetParent || sn,
      n = this.getDimensions,
      r = await n(e.floating);
    return {
      reference: an(e.reference, await t(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
  },
  getClientRects: function (e) {
    return Array.from(e.getClientRects());
  },
  getDimensions: function (e) {
    const { width: t, height: n } = Yt(e);
    return { width: t, height: n };
  },
  getScale: Zt,
  isElement: Rt,
  isRTL: function (e) {
    return 'rtl' === Bt(e).direction;
  },
};
function dn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function fn(e, t, n, r) {
  void 0 === r && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: a = 'function' == typeof ResizeObserver,
      layoutShift: l = 'function' == typeof IntersectionObserver,
      animationFrame: c = !1,
    } = r,
    s = Xt(e),
    u = o || i ? [...(s ? Ut(s) : []), ...Ut(t)] : [];
  u.forEach((e) => {
    (o && e.addEventListener('scroll', n, { passive: !0 }), i && e.addEventListener('resize', n));
  });
  const d =
    s && l
      ? (function (e, t) {
          let n,
            r = null;
          const o = Ct(e);
          function i() {
            var e;
            (clearTimeout(n), null == (e = r) || e.disconnect(), (r = null));
          }
          return (
            (function a(l, c) {
              (void 0 === l && (l = !1), void 0 === c && (c = 1), i());
              const s = e.getBoundingClientRect(),
                { left: u, top: d, width: f, height: p } = s;
              if ((l || t(), !f || !p)) return;
              const h = {
                rootMargin:
                  -Ye(d) +
                  'px ' +
                  -Ye(o.clientWidth - (u + f)) +
                  'px ' +
                  -Ye(o.clientHeight - (d + p)) +
                  'px ' +
                  -Ye(u) +
                  'px',
                threshold: Ue(0, qe(1, c)) || 1,
              };
              let m = !0;
              function v(t) {
                const r = t[0].intersectionRatio;
                if (r !== c) {
                  if (!m) return a();
                  r
                    ? a(!1, r)
                    : (n = setTimeout(() => {
                        a(!1, 1e-7);
                      }, 1e3));
                }
                (1 !== r || dn(s, e.getBoundingClientRect()) || a(), (m = !1));
              }
              try {
                r = new IntersectionObserver(v, { ...h, root: o.ownerDocument });
              } catch (y) {
                r = new IntersectionObserver(v, h);
              }
              r.observe(e);
            })(!0),
            i
          );
        })(s, n)
      : null;
  let f,
    p = -1,
    h = null;
  a &&
    ((h = new ResizeObserver((e) => {
      let [r] = e;
      (r &&
        r.target === s &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(p),
        (p = requestAnimationFrame(() => {
          var e;
          null == (e = h) || e.observe(t);
        }))),
        n());
    })),
    s && !c && h.observe(s),
    h.observe(t));
  let m = c ? Qt(e) : null;
  return (
    c &&
      (function t() {
        const r = Qt(e);
        m && !dn(m, r) && n();
        ((m = r), (f = requestAnimationFrame(t)));
      })(),
    n(),
    () => {
      var e;
      (u.forEach((e) => {
        (o && e.removeEventListener('scroll', n), i && e.removeEventListener('resize', n));
      }),
        null == d || d(),
        null == (e = h) || e.disconnect(),
        (h = null),
        c && cancelAnimationFrame(f));
    }
  );
}
const pn = function (e) {
    return (
      void 0 === e && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: a, middlewareData: l } = t,
            c = await (async function (e, t) {
              const { placement: n, platform: r, elements: o } = e,
                i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
                a = et(n),
                l = tt(n),
                c = 'y' === it(n),
                s = xt.has(a) ? -1 : 1,
                u = i && c ? -1 : 1,
                d = Qe(t, e);
              let {
                mainAxis: f,
                crossAxis: p,
                alignmentAxis: h,
              } = 'number' == typeof d
                ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                : {
                    mainAxis: d.mainAxis || 0,
                    crossAxis: d.crossAxis || 0,
                    alignmentAxis: d.alignmentAxis,
                  };
              return (
                l && 'number' == typeof h && (p = 'end' === l ? -1 * h : h),
                c ? { x: p * u, y: f * s } : { x: f * s, y: p * u }
              );
            })(t, e);
          return a === (null == (n = l.offset) ? void 0 : n.placement) &&
            null != (r = l.arrow) &&
            r.alignmentOffset
            ? {}
            : { x: o + c.x, y: i + c.y, data: { ...c, placement: a } };
        },
      }
    );
  },
  hn = function (e) {
    return (
      void 0 === e && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: a = !1,
              limiter: l = {
                fn: (e) => {
                  let { x: t, y: n } = e;
                  return { x: t, y: n };
                },
              },
              ...c
            } = Qe(e, t),
            s = { x: n, y: r },
            u = await yt(t, c),
            d = it(et(o)),
            f = nt(d);
          let p = s[f],
            h = s[d];
          if (i) {
            const e = 'y' === f ? 'bottom' : 'right';
            p = Je(p + u['y' === f ? 'top' : 'left'], p, p - u[e]);
          }
          if (a) {
            const e = 'y' === d ? 'bottom' : 'right';
            h = Je(h + u['y' === d ? 'top' : 'left'], h, h - u[e]);
          }
          const m = l.fn({ ...t, [f]: p, [d]: h });
          return { ...m, data: { x: m.x - n, y: m.y - r, enabled: { [f]: i, [d]: a } } };
        },
      }
    );
  },
  mn = function (e) {
    return (
      void 0 === e && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: a,
              initialPlacement: l,
              platform: c,
              elements: s,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: p = 'bestFit',
              fallbackAxisSideDirection: h = 'none',
              flipAlignment: m = !0,
              ...v
            } = Qe(e, t);
          if (null != (n = i.arrow) && n.alignmentOffset) return {};
          const y = et(o),
            g = it(l),
            w = et(l) === l,
            x = await (null == c.isRTL ? void 0 : c.isRTL(s.floating)),
            b =
              f ||
              (w || !m
                ? [pt(l)]
                : (function (e) {
                    const t = pt(e);
                    return [lt(e), t, lt(t)];
                  })(l)),
            E = 'none' !== h;
          !f && E && b.push(...ft(l, m, h, x));
          const S = [l, ...b],
            C = await yt(t, v),
            k = [];
          let R = (null == (r = i.flip) ? void 0 : r.overflows) || [];
          if ((u && k.push(C[y]), d)) {
            const e = (function (e, t, n) {
              void 0 === n && (n = !1);
              const r = tt(e),
                o = at(e),
                i = rt(o);
              let a =
                'x' === o
                  ? r === (n ? 'end' : 'start')
                    ? 'right'
                    : 'left'
                  : 'start' === r
                    ? 'bottom'
                    : 'top';
              return (t.reference[i] > t.floating[i] && (a = pt(a)), [a, pt(a)]);
            })(o, a, x);
            k.push(C[e[0]], C[e[1]]);
          }
          if (((R = [...R, { placement: o, overflows: k }]), !k.every((e) => e <= 0))) {
            var P, N;
            const e = ((null == (P = i.flip) ? void 0 : P.index) || 0) + 1,
              t = S[e];
            if (t) {
              if (
                !('alignment' === d && g !== it(t)) ||
                R.every((e) => it(e.placement) !== g || e.overflows[0] > 0)
              )
                return { data: { index: e, overflows: R }, reset: { placement: t } };
            }
            let n =
              null ==
              (N = R.filter((e) => e.overflows[0] <= 0).sort(
                (e, t) => e.overflows[1] - t.overflows[1]
              )[0])
                ? void 0
                : N.placement;
            if (!n)
              switch (p) {
                case 'bestFit': {
                  var M;
                  const e =
                    null ==
                    (M = R.filter((e) => {
                      if (E) {
                        const t = it(e.placement);
                        return t === g || 'y' === t;
                      }
                      return !0;
                    })
                      .map((e) => [
                        e.placement,
                        e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                      ])
                      .sort((e, t) => e[1] - t[1])[0])
                      ? void 0
                      : M[0];
                  e && (n = e);
                  break;
                }
                case 'initialPlacement':
                  n = l;
              }
            if (o !== n) return { reset: { placement: n } };
          }
          return {};
        },
      }
    );
  },
  vn = function (e) {
    return (
      void 0 === e && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: a, elements: l } = t,
            { apply: c = () => {}, ...s } = Qe(e, t),
            u = await yt(t, s),
            d = et(o),
            f = tt(o),
            p = 'y' === it(o),
            { width: h, height: m } = i.floating;
          let v, y;
          'top' === d || 'bottom' === d
            ? ((v = d),
              (y =
                f === ((await (null == a.isRTL ? void 0 : a.isRTL(l.floating))) ? 'start' : 'end')
                  ? 'left'
                  : 'right'))
            : ((y = d), (v = 'end' === f ? 'top' : 'bottom'));
          const g = m - u.top - u.bottom,
            w = h - u.left - u.right,
            x = qe(m - u[v], g),
            b = qe(h - u[y], w),
            E = !t.middlewareData.shift;
          let S = x,
            C = b;
          if (
            (null != (n = t.middlewareData.shift) && n.enabled.x && (C = w),
            null != (r = t.middlewareData.shift) && r.enabled.y && (S = g),
            E && !f)
          ) {
            const e = Ue(u.left, 0),
              t = Ue(u.right, 0),
              n = Ue(u.top, 0),
              r = Ue(u.bottom, 0);
            p
              ? (C = h - 2 * (0 !== e || 0 !== t ? e + t : Ue(u.left, u.right)))
              : (S = m - 2 * (0 !== n || 0 !== r ? n + r : Ue(u.top, u.bottom)));
          }
          await c({ ...t, availableWidth: C, availableHeight: S });
          const k = await a.getDimensions(l.floating);
          return h !== k.width || m !== k.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  },
  yn = function (e) {
    return (
      void 0 === e && (e = {}),
      {
        name: 'hide',
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = 'referenceHidden', ...o } = Qe(e, t);
          switch (r) {
            case 'referenceHidden': {
              const e = gt(await yt(t, { ...o, elementContext: 'reference' }), n.reference);
              return { data: { referenceHiddenOffsets: e, referenceHidden: wt(e) } };
            }
            case 'escaped': {
              const e = gt(await yt(t, { ...o, altBoundary: !0 }), n.floating);
              return { data: { escapedOffsets: e, escaped: wt(e) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  gn = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const { x: n, y: r, placement: o, rects: i, platform: a, elements: l, middlewareData: c } = t,
        { element: s, padding: u = 0 } = Qe(e, t) || {};
      if (null == s) return {};
      const d = ht(u),
        f = { x: n, y: r },
        p = at(o),
        h = rt(p),
        m = await a.getDimensions(s),
        v = 'y' === p,
        y = v ? 'top' : 'left',
        g = v ? 'bottom' : 'right',
        w = v ? 'clientHeight' : 'clientWidth',
        x = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
        b = f[p] - i.reference[p],
        E = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(s));
      let S = E ? E[w] : 0;
      (S && (await (null == a.isElement ? void 0 : a.isElement(E)))) ||
        (S = l.floating[w] || i.floating[h]);
      const C = x / 2 - b / 2,
        k = S / 2 - m[h] / 2 - 1,
        R = qe(d[y], k),
        P = qe(d[g], k),
        N = R,
        M = S - m[h] - P,
        A = S / 2 - m[h] / 2 + C,
        j = Je(N, A, M),
        O =
          !c.arrow &&
          null != tt(o) &&
          A !== j &&
          i.reference[h] / 2 - (A < N ? R : P) - m[h] / 2 < 0,
        T = O ? (A < N ? A - N : A - M) : 0;
      return {
        [p]: f[p] + T,
        data: { [p]: j, centerOffset: A - j - T, ...(O && { alignmentOffset: T }) },
        reset: O,
      };
    },
  }),
  wn = function (e) {
    return (
      void 0 === e && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: a } = t,
            { offset: l = 0, mainAxis: c = !0, crossAxis: s = !0 } = Qe(e, t),
            u = { x: n, y: r },
            d = it(o),
            f = nt(d);
          let p = u[f],
            h = u[d];
          const m = Qe(l, t),
            v =
              'number' == typeof m
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (c) {
            const e = 'y' === f ? 'height' : 'width',
              t = i.reference[f] - i.floating[e] + v.mainAxis,
              n = i.reference[f] + i.reference[e] - v.mainAxis;
            p < t ? (p = t) : p > n && (p = n);
          }
          if (s) {
            var y, g;
            const e = 'y' === f ? 'width' : 'height',
              t = xt.has(et(o)),
              n =
                i.reference[d] -
                i.floating[e] +
                ((t && (null == (y = a.offset) ? void 0 : y[d])) || 0) +
                (t ? 0 : v.crossAxis),
              r =
                i.reference[d] +
                i.reference[e] +
                (t ? 0 : (null == (g = a.offset) ? void 0 : g[d]) || 0) -
                (t ? v.crossAxis : 0);
            h < n ? (h = n) : h > r && (h = r);
          }
          return { [f]: p, [d]: h };
        },
      }
    );
  },
  xn = (e, t, n) => {
    const r = new Map(),
      o = { platform: un, ...n },
      i = { ...o.platform, _c: r };
    return (async (e, t, n) => {
      const {
          placement: r = 'bottom',
          strategy: o = 'absolute',
          middleware: i = [],
          platform: a,
        } = n,
        l = i.filter(Boolean),
        c = await (null == a.isRTL ? void 0 : a.isRTL(t));
      let s = await a.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: u, y: d } = vt(s, r, c),
        f = r,
        p = {},
        h = 0;
      for (let m = 0; m < l.length; m++) {
        const { name: n, fn: i } = l[m],
          {
            x: v,
            y: y,
            data: g,
            reset: w,
          } = await i({
            x: u,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: o,
            middlewareData: p,
            rects: s,
            platform: a,
            elements: { reference: e, floating: t },
          });
        ((u = null != v ? v : u),
          (d = null != y ? y : d),
          (p = { ...p, [n]: { ...p[n], ...g } }),
          w &&
            h <= 50 &&
            (h++,
            'object' == typeof w &&
              (w.placement && (f = w.placement),
              w.rects &&
                (s =
                  !0 === w.rects
                    ? await a.getElementRects({ reference: e, floating: t, strategy: o })
                    : w.rects),
              ({ x: u, y: d } = vt(s, f, c))),
            (m = -1)));
      }
      return { x: u, y: d, placement: f, strategy: o, middlewareData: p };
    })(e, t, { ...o, platform: i });
  };
var bn = 'undefined' != typeof document ? e.useLayoutEffect : function () {};
function En(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if ('function' == typeof e && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && 'object' == typeof e) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; 0 !== r--; ) if (!En(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
    for (r = n; 0 !== r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; 0 !== r--; ) {
      const n = o[r];
      if (('_owner' !== n || !e.$$typeof) && !En(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e != e && t != t;
}
function Sn(e) {
  if ('undefined' == typeof window) return 1;
  return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Cn(e, t) {
  const n = Sn(e);
  return Math.round(t * n) / n;
}
function kn(t) {
  const n = e.useRef(t);
  return (
    bn(() => {
      n.current = t;
    }),
    n
  );
}
const Rn = (e) => ({
    name: 'arrow',
    options: e,
    fn(t) {
      const { element: n, padding: r } = 'function' == typeof e ? e(t) : e;
      return n && ((o = n), {}.hasOwnProperty.call(o, 'current'))
        ? null != n.current
          ? gn({ element: n.current, padding: r }).fn(t)
          : {}
        : n
          ? gn({ element: n, padding: r }).fn(t)
          : {};
      var o;
    },
  }),
  Pn = (e, t) => ({ ...pn(e), options: [e, t] }),
  Nn = (e, t) => ({ ...hn(e), options: [e, t] }),
  Mn = (e, t) => ({ ...wn(e), options: [e, t] }),
  An = (e, t) => ({ ...mn(e), options: [e, t] }),
  jn = (e, t) => ({ ...vn(e), options: [e, t] }),
  On = (e, t) => ({ ...yn(e), options: [e, t] }),
  Tn = (e, t) => ({ ...Rn(e), options: [e, t] });
function _n(t) {
  const n = Ln(t),
    r = e.forwardRef((t, r) => {
      const { children: o, ...i } = t,
        a = e.Children.toArray(o),
        l = a.find(In);
      if (l) {
        const t = l.props.children,
          o = a.map((n) =>
            n === l
              ? e.Children.count(t) > 1
                ? e.Children.only(null)
                : e.isValidElement(t)
                  ? t.props.children
                  : null
              : n
          );
        return h.jsx(n, {
          ...i,
          ref: r,
          children: e.isValidElement(t) ? e.cloneElement(t, void 0, o) : null,
        });
      }
      return h.jsx(n, { ...i, ref: r, children: o });
    });
  return ((r.displayName = `${t}.Slot`), r);
}
function Ln(t) {
  const n = e.forwardRef((t, n) => {
    const { children: r, ...o } = t;
    if (e.isValidElement(r)) {
      const t = (function (e) {
          var t, n;
          let r = null == (t = Object.getOwnPropertyDescriptor(e.props, 'ref')) ? void 0 : t.get,
            o = r && 'isReactWarning' in r && r.isReactWarning;
          if (o) return e.ref;
          if (
            ((r = null == (n = Object.getOwnPropertyDescriptor(e, 'ref')) ? void 0 : n.get),
            (o = r && 'isReactWarning' in r && r.isReactWarning),
            o)
          )
            return e.props.ref;
          return e.props.ref || e.ref;
        })(r),
        i = (function (e, t) {
          const n = { ...t };
          for (const r in t) {
            const o = e[r],
              i = t[r];
            /^on[A-Z]/.test(r)
              ? o && i
                ? (n[r] = (...e) => {
                    const t = i(...e);
                    return (o(...e), t);
                  })
                : o && (n[r] = o)
              : 'style' === r
                ? (n[r] = { ...o, ...i })
                : 'className' === r && (n[r] = [o, i].filter(Boolean).join(' '));
          }
          return { ...e, ...n };
        })(o, r.props);
      return (r.type !== e.Fragment && (i.ref = n ? ae(n, t) : t), e.cloneElement(r, i));
    }
    return e.Children.count(r) > 1 ? e.Children.only(null) : null;
  });
  return ((n.displayName = `${t}.SlotClone`), n);
}
var Dn = Symbol('radix.slottable');
function In(t) {
  return (
    e.isValidElement(t) &&
    'function' == typeof t.type &&
    '__radixId' in t.type &&
    t.type.__radixId === Dn
  );
}
var Wn = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ].reduce((t, n) => {
    const r = _n(`Primitive.${n}`),
      o = e.forwardRef((e, t) => {
        const { asChild: o, ...i } = e,
          a = o ? r : n;
        return (
          'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
          h.jsx(a, { ...i, ref: t })
        );
      });
    return ((o.displayName = `Primitive.${n}`), { ...t, [n]: o });
  }, {}),
  Fn = e.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return h.jsx(Wn.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: e.asChild ? n : h.jsx('polygon', { points: '0,0 30,0 15,10' }),
    });
  });
Fn.displayName = 'Arrow';
var Vn = Fn;
function $n(...t) {
  const n = t[0];
  if (1 === t.length) return n;
  const r = () => {
    const r = t.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (t) {
      const o = r.reduce(
        (e, { useScope: n, scopeName: r }) => ({ ...e, ...n(t)[`__scope${r}`] }),
        {}
      );
      return e.useMemo(() => ({ [`__scope${n.scopeName}`]: o }), [o]);
    };
  };
  return ((r.scopeName = n.scopeName), r);
}
function Bn(t) {
  const n = Hn(t),
    r = e.forwardRef((t, r) => {
      const { children: o, ...i } = t,
        a = e.Children.toArray(o),
        l = a.find(qn);
      if (l) {
        const t = l.props.children,
          o = a.map((n) =>
            n === l
              ? e.Children.count(t) > 1
                ? e.Children.only(null)
                : e.isValidElement(t)
                  ? t.props.children
                  : null
              : n
          );
        return h.jsx(n, {
          ...i,
          ref: r,
          children: e.isValidElement(t) ? e.cloneElement(t, void 0, o) : null,
        });
      }
      return h.jsx(n, { ...i, ref: r, children: o });
    });
  return ((r.displayName = `${t}.Slot`), r);
}
function Hn(t) {
  const n = e.forwardRef((t, n) => {
    const { children: r, ...o } = t;
    if (e.isValidElement(r)) {
      const t = (function (e) {
          var t, n;
          let r = null == (t = Object.getOwnPropertyDescriptor(e.props, 'ref')) ? void 0 : t.get,
            o = r && 'isReactWarning' in r && r.isReactWarning;
          if (o) return e.ref;
          if (
            ((r = null == (n = Object.getOwnPropertyDescriptor(e, 'ref')) ? void 0 : n.get),
            (o = r && 'isReactWarning' in r && r.isReactWarning),
            o)
          )
            return e.props.ref;
          return e.props.ref || e.ref;
        })(r),
        i = (function (e, t) {
          const n = { ...t };
          for (const r in t) {
            const o = e[r],
              i = t[r];
            /^on[A-Z]/.test(r)
              ? o && i
                ? (n[r] = (...e) => {
                    const t = i(...e);
                    return (o(...e), t);
                  })
                : o && (n[r] = o)
              : 'style' === r
                ? (n[r] = { ...o, ...i })
                : 'className' === r && (n[r] = [o, i].filter(Boolean).join(' '));
          }
          return { ...e, ...n };
        })(o, r.props);
      return (r.type !== e.Fragment && (i.ref = n ? ae(n, t) : t), e.cloneElement(r, i));
    }
    return e.Children.count(r) > 1 ? e.Children.only(null) : null;
  });
  return ((n.displayName = `${t}.SlotClone`), n);
}
var zn = Symbol('radix.slottable');
function qn(t) {
  return (
    e.isValidElement(t) &&
    'function' == typeof t.type &&
    '__radixId' in t.type &&
    t.type.__radixId === zn
  );
}
var Un = [
  'a',
  'button',
  'div',
  'form',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'select',
  'span',
  'svg',
  'ul',
].reduce((t, n) => {
  const r = Bn(`Primitive.${n}`),
    o = e.forwardRef((e, t) => {
      const { asChild: o, ...i } = e,
        a = o ? r : n;
      return (
        'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
        h.jsx(a, { ...i, ref: t })
      );
    });
  return ((o.displayName = `Primitive.${n}`), { ...t, [n]: o });
}, {});
var Kn = (null == globalThis ? void 0 : globalThis.document) ? e.useLayoutEffect : () => {},
  Yn = (null == globalThis ? void 0 : globalThis.document) ? e.useLayoutEffect : () => {};
var Xn = 'Popper',
  [Zn, Gn] = (function (t, n = []) {
    let r = [];
    const o = () => {
      const n = r.map((t) => e.createContext(t));
      return function (r) {
        const o = (null == r ? void 0 : r[t]) || n;
        return e.useMemo(() => ({ [`__scope${t}`]: { ...r, [t]: o } }), [r, o]);
      };
    };
    return (
      (o.scopeName = t),
      [
        function (n, o) {
          const i = e.createContext(o),
            a = r.length;
          r = [...r, o];
          const l = (n) => {
            var r;
            const { scope: o, children: l, ...c } = n,
              s = (null == (r = null == o ? void 0 : o[t]) ? void 0 : r[a]) || i,
              u = e.useMemo(() => c, Object.values(c));
            return h.jsx(s.Provider, { value: u, children: l });
          };
          return (
            (l.displayName = n + 'Provider'),
            [
              l,
              function (r, l) {
                var c;
                const s = (null == (c = null == l ? void 0 : l[t]) ? void 0 : c[a]) || i,
                  u = e.useContext(s);
                if (u) return u;
                if (void 0 !== o) return o;
                throw new Error(`\`${r}\` must be used within \`${n}\``);
              },
            ]
          );
        },
        $n(o, ...n),
      ]
    );
  })(Xn),
  [Jn, Qn] = Zn(Xn),
  er = (t) => {
    const { __scopePopper: n, children: r } = t,
      [o, i] = e.useState(null);
    return h.jsx(Jn, { scope: n, anchor: o, onAnchorChange: i, children: r });
  };
er.displayName = Xn;
var tr = 'PopperAnchor',
  nr = e.forwardRef((t, n) => {
    const { __scopePopper: r, virtualRef: o, ...i } = t,
      a = Qn(tr, r),
      l = e.useRef(null),
      c = le(n, l),
      s = e.useRef(null);
    return (
      e.useEffect(() => {
        const e = s.current;
        ((s.current = (null == o ? void 0 : o.current) || l.current),
          e !== s.current && a.onAnchorChange(s.current));
      }),
      o ? null : h.jsx(Un.div, { ...i, ref: c })
    );
  });
nr.displayName = tr;
var rr = 'PopperContent',
  [or, ir] = Zn(rr),
  ar = e.forwardRef((t, r) => {
    var o, i, a, l, c, s;
    const {
        __scopePopper: u,
        side: d = 'bottom',
        sideOffset: f = 0,
        align: p = 'center',
        alignOffset: m = 0,
        arrowPadding: v = 0,
        avoidCollisions: y = !0,
        collisionBoundary: g = [],
        collisionPadding: w = 0,
        sticky: x = 'partial',
        hideWhenDetached: b = !1,
        updatePositionStrategy: E = 'optimized',
        onPlaced: S,
        ...C
      } = t,
      k = Qn(rr, u),
      [R, P] = e.useState(null),
      N = le(r, (e) => P(e)),
      [M, A] = e.useState(null),
      j = (function (t) {
        const [n, r] = e.useState(void 0);
        return (
          Yn(() => {
            if (t) {
              r({ width: t.offsetWidth, height: t.offsetHeight });
              const e = new ResizeObserver((e) => {
                if (!Array.isArray(e)) return;
                if (!e.length) return;
                const n = e[0];
                let o, i;
                if ('borderBoxSize' in n) {
                  const e = n.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  ((o = t.inlineSize), (i = t.blockSize));
                } else ((o = t.offsetWidth), (i = t.offsetHeight));
                r({ width: o, height: i });
              });
              return (e.observe(t, { box: 'border-box' }), () => e.unobserve(t));
            }
            r(void 0);
          }, [t]),
          n
        );
      })(M),
      O = (null == j ? void 0 : j.width) ?? 0,
      T = (null == j ? void 0 : j.height) ?? 0,
      _ = d + ('center' !== p ? '-' + p : ''),
      L = 'number' == typeof w ? w : { top: 0, right: 0, bottom: 0, left: 0, ...w },
      D = Array.isArray(g) ? g : [g],
      I = D.length > 0,
      W = { padding: L, boundary: D.filter(ur), altBoundary: I },
      {
        refs: F,
        floatingStyles: V,
        placement: $,
        isPositioned: B,
        middlewareData: H,
      } = (function (t) {
        void 0 === t && (t = {});
        const {
            placement: r = 'bottom',
            strategy: o = 'absolute',
            middleware: i = [],
            platform: a,
            elements: { reference: l, floating: c } = {},
            transform: s = !0,
            whileElementsMounted: u,
            open: d,
          } = t,
          [f, p] = e.useState({
            x: 0,
            y: 0,
            strategy: o,
            placement: r,
            middlewareData: {},
            isPositioned: !1,
          }),
          [h, m] = e.useState(i);
        En(h, i) || m(i);
        const [v, y] = e.useState(null),
          [g, w] = e.useState(null),
          x = e.useCallback((e) => {
            e !== C.current && ((C.current = e), y(e));
          }, []),
          b = e.useCallback((e) => {
            e !== k.current && ((k.current = e), w(e));
          }, []),
          E = l || v,
          S = c || g,
          C = e.useRef(null),
          k = e.useRef(null),
          R = e.useRef(f),
          P = null != u,
          N = kn(u),
          M = kn(a),
          A = kn(d),
          j = e.useCallback(() => {
            if (!C.current || !k.current) return;
            const e = { placement: r, strategy: o, middleware: h };
            (M.current && (e.platform = M.current),
              xn(C.current, k.current, e).then((e) => {
                const t = { ...e, isPositioned: !1 !== A.current };
                O.current &&
                  !En(R.current, t) &&
                  ((R.current = t),
                  n.flushSync(() => {
                    p(t);
                  }));
              }));
          }, [h, r, o, M, A]);
        bn(() => {
          !1 === d &&
            R.current.isPositioned &&
            ((R.current.isPositioned = !1), p((e) => ({ ...e, isPositioned: !1 })));
        }, [d]);
        const O = e.useRef(!1);
        (bn(
          () => (
            (O.current = !0),
            () => {
              O.current = !1;
            }
          ),
          []
        ),
          bn(() => {
            if ((E && (C.current = E), S && (k.current = S), E && S)) {
              if (N.current) return N.current(E, S, j);
              j();
            }
          }, [E, S, j, N, P]));
        const T = e.useMemo(
            () => ({ reference: C, floating: k, setReference: x, setFloating: b }),
            [x, b]
          ),
          _ = e.useMemo(() => ({ reference: E, floating: S }), [E, S]),
          L = e.useMemo(() => {
            const e = { position: o, left: 0, top: 0 };
            if (!_.floating) return e;
            const t = Cn(_.floating, f.x),
              n = Cn(_.floating, f.y);
            return s
              ? {
                  ...e,
                  transform: 'translate(' + t + 'px, ' + n + 'px)',
                  ...(Sn(_.floating) >= 1.5 && { willChange: 'transform' }),
                }
              : { position: o, left: t, top: n };
          }, [o, s, _.floating, f.x, f.y]);
        return e.useMemo(
          () => ({ ...f, update: j, refs: T, elements: _, floatingStyles: L }),
          [f, j, T, _, L]
        );
      })({
        strategy: 'fixed',
        placement: _,
        whileElementsMounted: (...e) => fn(...e, { animationFrame: 'always' === E }),
        elements: { reference: k.anchor },
        middleware: [
          Pn({ mainAxis: f + T, alignmentAxis: m }),
          y && Nn({ mainAxis: !0, crossAxis: !1, limiter: 'partial' === x ? Mn() : void 0, ...W }),
          y && An({ ...W }),
          jn({
            ...W,
            apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
              const { width: o, height: i } = t.reference,
                a = e.floating.style;
              (a.setProperty('--radix-popper-available-width', `${n}px`),
                a.setProperty('--radix-popper-available-height', `${r}px`),
                a.setProperty('--radix-popper-anchor-width', `${o}px`),
                a.setProperty('--radix-popper-anchor-height', `${i}px`));
            },
          }),
          M && Tn({ element: M, padding: v }),
          dr({ arrowWidth: O, arrowHeight: T }),
          b && On({ strategy: 'referenceHidden', ...W }),
        ],
      }),
      [z, q] = fr($),
      U = (function (t) {
        const n = e.useRef(t);
        return (
          e.useEffect(() => {
            n.current = t;
          }),
          e.useMemo(
            () =>
              (...e) => {
                var t;
                return null == (t = n.current) ? void 0 : t.call(n, ...e);
              },
            []
          )
        );
      })(S);
    Kn(() => {
      B && (null == U || U());
    }, [B, U]);
    const K = null == (o = H.arrow) ? void 0 : o.x,
      Y = null == (i = H.arrow) ? void 0 : i.y,
      X = 0 !== (null == (a = H.arrow) ? void 0 : a.centerOffset),
      [Z, G] = e.useState();
    return (
      Kn(() => {
        R && G(window.getComputedStyle(R).zIndex);
      }, [R]),
      h.jsx('div', {
        ref: F.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...V,
          transform: B ? V.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: Z,
          '--radix-popper-transform-origin': [
            null == (l = H.transformOrigin) ? void 0 : l.x,
            null == (c = H.transformOrigin) ? void 0 : c.y,
          ].join(' '),
          ...((null == (s = H.hide) ? void 0 : s.referenceHidden) && {
            visibility: 'hidden',
            pointerEvents: 'none',
          }),
        },
        dir: t.dir,
        children: h.jsx(or, {
          scope: u,
          placedSide: z,
          onArrowChange: A,
          arrowX: K,
          arrowY: Y,
          shouldHideArrow: X,
          children: h.jsx(Un.div, {
            'data-side': z,
            'data-align': q,
            ...C,
            ref: N,
            style: { ...C.style, animation: B ? void 0 : 'none' },
          }),
        }),
      })
    );
  });
ar.displayName = rr;
var lr = 'PopperArrow',
  cr = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  sr = e.forwardRef(function (e, t) {
    const { __scopePopper: n, ...r } = e,
      o = ir(lr, n),
      i = cr[o.placedSide];
    return h.jsx('span', {
      ref: o.onArrowChange,
      style: {
        position: 'absolute',
        left: o.arrowX,
        top: o.arrowY,
        [i]: 0,
        transformOrigin: { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[
          o.placedSide
        ],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[o.placedSide],
        visibility: o.shouldHideArrow ? 'hidden' : void 0,
      },
      children: h.jsx(Vn, { ...r, ref: t, style: { ...r.style, display: 'block' } }),
    });
  });
function ur(e) {
  return null !== e;
}
sr.displayName = lr;
var dr = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(t) {
    var n, r, o;
    const { placement: i, rects: a, middlewareData: l } = t,
      c = 0 !== (null == (n = l.arrow) ? void 0 : n.centerOffset),
      s = c ? 0 : e.arrowWidth,
      u = c ? 0 : e.arrowHeight,
      [d, f] = fr(i),
      p = { start: '0%', center: '50%', end: '100%' }[f],
      h = ((null == (r = l.arrow) ? void 0 : r.x) ?? 0) + s / 2,
      m = ((null == (o = l.arrow) ? void 0 : o.y) ?? 0) + u / 2;
    let v = '',
      y = '';
    return (
      'bottom' === d
        ? ((v = c ? p : `${h}px`), (y = -u + 'px'))
        : 'top' === d
          ? ((v = c ? p : `${h}px`), (y = `${a.floating.height + u}px`))
          : 'right' === d
            ? ((v = -u + 'px'), (y = c ? p : `${m}px`))
            : 'left' === d && ((v = `${a.floating.width + u}px`), (y = c ? p : `${m}px`)),
      { data: { x: v, y: y } }
    );
  },
});
function fr(e) {
  const [t, n = 'center'] = e.split('-');
  return [t, n];
}
var pr = er,
  hr = nr,
  mr = ar,
  vr = sr,
  yr = e.forwardRef((t, n) => {
    var r;
    const { container: i, ...a } = t,
      [l, c] = e.useState(!1);
    Ve(() => c(!0), []);
    const s =
      i ||
      (l && (null == (r = null == globalThis ? void 0 : globalThis.document) ? void 0 : r.body));
    return s ? o.createPortal(h.jsx(ge.div, { ...a, ref: n }), s) : null;
  });
yr.displayName = 'Portal';
var gr = r[' useInsertionEffect '.trim().toString()] || Ve;
function wr({ prop: t, defaultProp: n, onChange: r = () => {}, caller: o }) {
  const [i, a, l] = (function ({ defaultProp: t, onChange: n }) {
      const [r, o] = e.useState(t),
        i = e.useRef(r),
        a = e.useRef(n);
      return (
        gr(() => {
          a.current = n;
        }, [n]),
        e.useEffect(() => {
          var e;
          i.current !== r && (null == (e = a.current) || e.call(a, r), (i.current = r));
        }, [r, i]),
        [r, o, a]
      );
    })({ defaultProp: n, onChange: r }),
    c = void 0 !== t,
    s = c ? t : i;
  {
    const n = e.useRef(void 0 !== t);
    e.useEffect(() => {
      const e = n.current;
      if (e !== c) {
      }
      n.current = c;
    }, [c, o]);
  }
  const u = e.useCallback(
    (e) => {
      var n;
      if (c) {
        const r = (function (e) {
          return 'function' == typeof e;
        })(e)
          ? e(t)
          : e;
        r !== t && (null == (n = l.current) || n.call(l, r));
      } else a(e);
    },
    [c, t, a, l]
  );
  return [s, u];
}
function xr(t) {
  const n = br(t),
    r = e.forwardRef((t, r) => {
      const { children: o, ...i } = t,
        a = e.Children.toArray(o),
        l = a.find(Sr);
      if (l) {
        const t = l.props.children,
          o = a.map((n) =>
            n === l
              ? e.Children.count(t) > 1
                ? e.Children.only(null)
                : e.isValidElement(t)
                  ? t.props.children
                  : null
              : n
          );
        return h.jsx(n, {
          ...i,
          ref: r,
          children: e.isValidElement(t) ? e.cloneElement(t, void 0, o) : null,
        });
      }
      return h.jsx(n, { ...i, ref: r, children: o });
    });
  return ((r.displayName = `${t}.Slot`), r);
}
function br(t) {
  const n = e.forwardRef((t, n) => {
    const { children: r, ...o } = t;
    if (e.isValidElement(r)) {
      const t = (function (e) {
          var t, n;
          let r = null == (t = Object.getOwnPropertyDescriptor(e.props, 'ref')) ? void 0 : t.get,
            o = r && 'isReactWarning' in r && r.isReactWarning;
          if (o) return e.ref;
          if (
            ((r = null == (n = Object.getOwnPropertyDescriptor(e, 'ref')) ? void 0 : n.get),
            (o = r && 'isReactWarning' in r && r.isReactWarning),
            o)
          )
            return e.props.ref;
          return e.props.ref || e.ref;
        })(r),
        i = (function (e, t) {
          const n = { ...t };
          for (const r in t) {
            const o = e[r],
              i = t[r];
            /^on[A-Z]/.test(r)
              ? o && i
                ? (n[r] = (...e) => {
                    const t = i(...e);
                    return (o(...e), t);
                  })
                : o && (n[r] = o)
              : 'style' === r
                ? (n[r] = { ...o, ...i })
                : 'className' === r && (n[r] = [o, i].filter(Boolean).join(' '));
          }
          return { ...e, ...n };
        })(o, r.props);
      return (r.type !== e.Fragment && (i.ref = n ? ae(n, t) : t), e.cloneElement(r, i));
    }
    return e.Children.count(r) > 1 ? e.Children.only(null) : null;
  });
  return ((n.displayName = `${t}.SlotClone`), n);
}
var Er = Symbol('radix.slottable');
function Sr(t) {
  return (
    e.isValidElement(t) &&
    'function' == typeof t.type &&
    '__radixId' in t.type &&
    t.type.__radixId === Er
  );
}
var Cr = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ].reduce((t, n) => {
    const r = xr(`Primitive.${n}`),
      o = e.forwardRef((e, t) => {
        const { asChild: o, ...i } = e,
          a = o ? r : n;
        return (
          'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
          h.jsx(a, { ...i, ref: t })
        );
      });
    return ((o.displayName = `Primitive.${n}`), { ...t, [n]: o });
  }, {}),
  kr = Object.freeze({
    position: 'absolute',
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
  });
e.forwardRef((e, t) => h.jsx(Cr.span, { ...e, ref: t, style: { ...kr, ...e.style } })).displayName =
  'VisuallyHidden';
var Rr = new WeakMap(),
  Pr = new WeakMap(),
  Nr = {},
  Mr = 0,
  Ar = function (e) {
    return e && (e.host || Ar(e.parentNode));
  },
  jr = function (e, t, n, r) {
    var o = (function (e, t) {
      return t
        .map(function (t) {
          if (e.contains(t)) return t;
          var n = Ar(t);
          return n && e.contains(n) ? n : null;
        })
        .filter(function (e) {
          return Boolean(e);
        });
    })(t, Array.isArray(e) ? e : [e]);
    Nr[n] || (Nr[n] = new WeakMap());
    var i = Nr[n],
      a = [],
      l = new Set(),
      c = new Set(o),
      s = function (e) {
        e && !l.has(e) && (l.add(e), s(e.parentNode));
      };
    o.forEach(s);
    var u = function (e) {
      e &&
        !c.has(e) &&
        Array.prototype.forEach.call(e.children, function (e) {
          if (l.has(e)) u(e);
          else
            try {
              var t = e.getAttribute(r),
                o = null !== t && 'false' !== t,
                c = (Rr.get(e) || 0) + 1,
                s = (i.get(e) || 0) + 1;
              (Rr.set(e, c),
                i.set(e, s),
                a.push(e),
                1 === c && o && Pr.set(e, !0),
                1 === s && e.setAttribute(n, 'true'),
                o || e.setAttribute(r, 'true'));
            } catch (d) {}
        });
    };
    return (
      u(t),
      l.clear(),
      Mr++,
      function () {
        (a.forEach(function (e) {
          var t = Rr.get(e) - 1,
            o = i.get(e) - 1;
          (Rr.set(e, t),
            i.set(e, o),
            t || (Pr.has(e) || e.removeAttribute(r), Pr.delete(e)),
            o || e.removeAttribute(n));
        }),
          --Mr || ((Rr = new WeakMap()), (Rr = new WeakMap()), (Pr = new WeakMap()), (Nr = {})));
      }
    );
  },
  Or = function (e, t, n) {
    void 0 === n && (n = 'data-aria-hidden');
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = (function (e) {
        return 'undefined' == typeof document
          ? null
          : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
      })(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live], script'))),
        jr(r, o, n, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  Tr = function () {
    return (
      (Tr =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      Tr.apply(this, arguments)
    );
  };
function _r(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  }
  return n;
}
function Lr(e, t, n) {
  if (n || 2 === arguments.length)
    for (var r, o = 0, i = t.length; o < i; o++)
      (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
  return e.concat(r || Array.prototype.slice.call(t));
}
'function' == typeof SuppressedError && SuppressedError;
var Dr = 'right-scroll-bar-position',
  Ir = 'width-before-scroll-bar';
function Wr(e, t) {
  return ('function' == typeof e ? e(t) : e && (e.current = t), e);
}
var Fr = 'undefined' != typeof window ? e.useLayoutEffect : e.useEffect,
  Vr = new WeakMap();
function $r(t, n) {
  var r,
    o,
    i,
    a =
      ((r = null),
      (o = function (e) {
        return t.forEach(function (t) {
          return Wr(t, e);
        });
      }),
      ((i = e.useState(function () {
        return {
          value: r,
          callback: o,
          facade: {
            get current() {
              return i.value;
            },
            set current(e) {
              var t = i.value;
              t !== e && ((i.value = e), i.callback(e, t));
            },
          },
        };
      })[0]).callback = o),
      i.facade);
  return (
    Fr(
      function () {
        var e = Vr.get(a);
        if (e) {
          var n = new Set(e),
            r = new Set(t),
            o = a.current;
          (n.forEach(function (e) {
            r.has(e) || Wr(e, null);
          }),
            r.forEach(function (e) {
              n.has(e) || Wr(e, o);
            }));
        }
        Vr.set(a, t);
      },
      [t]
    ),
    a
  );
}
function Br(e) {
  return e;
}
function Hr(e) {
  void 0 === e && (e = {});
  var t = (function (e, t) {
    void 0 === t && (t = Br);
    var n = [],
      r = !1;
    return {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (e) {
        var o = t(e, r);
        return (
          n.push(o),
          function () {
            n = n.filter(function (e) {
              return e !== o;
            });
          }
        );
      },
      assignSyncMedium: function (e) {
        for (r = !0; n.length; ) {
          var t = n;
          ((n = []), t.forEach(e));
        }
        n = {
          push: function (t) {
            return e(t);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (e) {
        r = !0;
        var t = [];
        if (n.length) {
          var o = n;
          ((n = []), o.forEach(e), (t = n));
        }
        var i = function () {
            var n = t;
            ((t = []), n.forEach(e));
          },
          a = function () {
            return Promise.resolve().then(i);
          };
        (a(),
          (n = {
            push: function (e) {
              (t.push(e), a());
            },
            filter: function (e) {
              return ((t = t.filter(e)), n);
            },
          }));
      },
    };
  })(null);
  return ((t.options = Tr({ async: !0, ssr: !1 }, e)), t);
}
var zr = function (t) {
  var n = t.sideCar,
    r = _r(t, ['sideCar']);
  if (!n) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
  var o = n.read();
  if (!o) throw new Error('Sidecar medium not found');
  return e.createElement(o, Tr({}, r));
};
function qr(e, t) {
  return (e.useMedium(t), zr);
}
zr.isSideCarExport = !0;
var Ur = Hr(),
  Kr = function () {},
  Yr = e.forwardRef(function (t, n) {
    var r = e.useRef(null),
      o = e.useState({ onScrollCapture: Kr, onWheelCapture: Kr, onTouchMoveCapture: Kr }),
      i = o[0],
      a = o[1],
      l = t.forwardProps,
      c = t.children,
      s = t.className,
      u = t.removeScrollBar,
      d = t.enabled,
      f = t.shards,
      p = t.sideCar,
      h = t.noRelative,
      m = t.noIsolation,
      v = t.inert,
      y = t.allowPinchZoom,
      g = t.as,
      w = void 0 === g ? 'div' : g,
      x = t.gapMode,
      b = _r(t, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noRelative',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      E = p,
      S = $r([r, n]),
      C = Tr(Tr({}, b), i);
    return e.createElement(
      e.Fragment,
      null,
      d &&
        e.createElement(E, {
          sideCar: Ur,
          removeScrollBar: u,
          shards: f,
          noRelative: h,
          noIsolation: m,
          inert: v,
          setCallbacks: a,
          allowPinchZoom: !!y,
          lockRef: r,
          gapMode: x,
        }),
      l
        ? e.cloneElement(e.Children.only(c), Tr(Tr({}, C), { ref: S }))
        : e.createElement(w, Tr({}, C, { className: s, ref: S }), c)
    );
  });
((Yr.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (Yr.classNames = { fullWidth: Ir, zeroRight: Dr }));
function Xr() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = (function () {
    if ('undefined' != typeof __webpack_nonce__) return __webpack_nonce__;
  })();
  return (t && e.setAttribute('nonce', t), e);
}
var Zr = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        var r, o;
        (0 == e &&
          (t = Xr()) &&
          ((o = n),
          (r = t).styleSheet
            ? (r.styleSheet.cssText = o)
            : r.appendChild(document.createTextNode(o)),
          (function (e) {
            (document.head || document.getElementsByTagName('head')[0]).appendChild(e);
          })(t)),
          e++);
      },
      remove: function () {
        !--e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Gr = function () {
    var t,
      n =
        ((t = Zr()),
        function (n, r) {
          e.useEffect(
            function () {
              return (
                t.add(n),
                function () {
                  t.remove();
                }
              );
            },
            [n && r]
          );
        });
    return function (e) {
      var t = e.styles,
        r = e.dynamic;
      return (n(t, r), null);
    };
  },
  Jr = { left: 0, top: 0, right: 0, gap: 0 },
  Qr = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  eo = function (e) {
    if ((void 0 === e && (e = 'margin'), 'undefined' == typeof window)) return Jr;
    var t = (function (e) {
        var t = window.getComputedStyle(document.body),
          n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
          r = t['padding' === e ? 'paddingTop' : 'marginTop'],
          o = t['padding' === e ? 'paddingRight' : 'marginRight'];
        return [Qr(n), Qr(r), Qr(o)];
      })(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
  },
  to = Gr(),
  no = 'data-scroll-locked',
  ro = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      a = e.right,
      l = e.gap;
    return (
      void 0 === n && (n = 'margin'),
      '\n  .'
        .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
        .concat(r, ';\n   padding-right: ')
        .concat(l, 'px ')
        .concat(r, ';\n  }\n  body[')
        .concat(no, '] {\n    overflow: hidden ')
        .concat(r, ';\n    overscroll-behavior: contain;\n    ')
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            'margin' === n &&
              '\n    padding-left: '
                .concat(o, 'px;\n    padding-top: ')
                .concat(i, 'px;\n    padding-right: ')
                .concat(a, 'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ')
                .concat(l, 'px ')
                .concat(r, ';\n    '),
            'padding' === n && 'padding-right: '.concat(l, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          '\n  }\n  \n  .'
        )
        .concat(Dr, ' {\n    right: ')
        .concat(l, 'px ')
        .concat(r, ';\n  }\n  \n  .')
        .concat(Ir, ' {\n    margin-right: ')
        .concat(l, 'px ')
        .concat(r, ';\n  }\n  \n  .')
        .concat(Dr, ' .')
        .concat(Dr, ' {\n    right: 0 ')
        .concat(r, ';\n  }\n  \n  .')
        .concat(Ir, ' .')
        .concat(Ir, ' {\n    margin-right: 0 ')
        .concat(r, ';\n  }\n  \n  body[')
        .concat(no, '] {\n    ')
        .concat('--removed-body-scroll-bar-size', ': ')
        .concat(l, 'px;\n  }\n')
    );
  },
  oo = function () {
    var e = parseInt(document.body.getAttribute(no) || '0', 10);
    return isFinite(e) ? e : 0;
  },
  io = function (t) {
    var n = t.noRelative,
      r = t.noImportant,
      o = t.gapMode,
      i = void 0 === o ? 'margin' : o;
    e.useEffect(function () {
      return (
        document.body.setAttribute(no, (oo() + 1).toString()),
        function () {
          var e = oo() - 1;
          e <= 0 ? document.body.removeAttribute(no) : document.body.setAttribute(no, e.toString());
        }
      );
    }, []);
    var a = e.useMemo(
      function () {
        return eo(i);
      },
      [i]
    );
    return e.createElement(to, { styles: ro(a, !n, i, r ? '' : '!important') });
  },
  ao = !1;
if ('undefined' != typeof window)
  try {
    var lo = Object.defineProperty({}, 'passive', {
      get: function () {
        return ((ao = !0), !0);
      },
    });
    (window.addEventListener('test', lo, lo), window.removeEventListener('test', lo, lo));
  } catch (sa) {
    ao = !1;
  }
var co = !!ao && { passive: !1 },
  so = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      'hidden' !== n[t] &&
      !(
        n.overflowY === n.overflowX &&
        !(function (e) {
          return 'TEXTAREA' === e.tagName;
        })(e) &&
        'visible' === n[t]
      )
    );
  },
  uo = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (('undefined' != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), fo(e, r))) {
        var o = po(e, r);
        if (o[1] > o[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  fo = function (e, t) {
    return 'v' === e
      ? (function (e) {
          return so(e, 'overflowY');
        })(t)
      : (function (e) {
          return so(e, 'overflowX');
        })(t);
  },
  po = function (e, t) {
    return 'v' === e
      ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
      : (function (e) {
          return [e.scrollLeft, e.scrollWidth, e.clientWidth];
        })(t);
    var n;
  },
  ho = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  mo = function (e) {
    return [e.deltaX, e.deltaY];
  },
  vo = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  yo = function (e) {
    return '\n  .block-interactivity-'
      .concat(e, ' {pointer-events: none;}\n  .allow-interactivity-')
      .concat(e, ' {pointer-events: all;}\n');
  },
  go = 0,
  wo = [];
function xo(e) {
  for (var t = null; null !== e; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
  return t;
}
const bo = qr(Ur, function (t) {
  var n = e.useRef([]),
    r = e.useRef([0, 0]),
    o = e.useRef(),
    i = e.useState(go++)[0],
    a = e.useState(Gr)[0],
    l = e.useRef(t);
  (e.useEffect(
    function () {
      l.current = t;
    },
    [t]
  ),
    e.useEffect(
      function () {
        if (t.inert) {
          document.body.classList.add('block-interactivity-'.concat(i));
          var e = Lr([t.lockRef.current], (t.shards || []).map(vo), !0).filter(Boolean);
          return (
            e.forEach(function (e) {
              return e.classList.add('allow-interactivity-'.concat(i));
            }),
            function () {
              (document.body.classList.remove('block-interactivity-'.concat(i)),
                e.forEach(function (e) {
                  return e.classList.remove('allow-interactivity-'.concat(i));
                }));
            }
          );
        }
      },
      [t.inert, t.lockRef.current, t.shards]
    ));
  var c = e.useCallback(function (e, t) {
      if (('touches' in e && 2 === e.touches.length) || ('wheel' === e.type && e.ctrlKey))
        return !l.current.allowPinchZoom;
      var n,
        i = ho(e),
        a = r.current,
        c = 'deltaX' in e ? e.deltaX : a[0] - i[0],
        s = 'deltaY' in e ? e.deltaY : a[1] - i[1],
        u = e.target,
        d = Math.abs(c) > Math.abs(s) ? 'h' : 'v';
      if ('touches' in e && 'h' === d && 'range' === u.type) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (!!p && (p === u || p.contains(u))) return !1;
      var h = uo(d, u);
      if (!h) return !0;
      if ((h ? (n = d) : ((n = 'v' === d ? 'h' : 'v'), (h = uo(d, u))), !h)) return !1;
      if ((!o.current && 'changedTouches' in e && (c || s) && (o.current = n), !n)) return !0;
      var m = o.current || n;
      return (function (e, t, n, r) {
        var o = (function (e, t) {
            return 'h' === e && 'rtl' === t ? -1 : 1;
          })(e, window.getComputedStyle(t).direction),
          i = o * r,
          a = n.target,
          l = t.contains(a),
          c = !1,
          s = i > 0,
          u = 0,
          d = 0;
        do {
          if (!a) break;
          var f = po(e, a),
            p = f[0],
            h = f[1] - f[2] - o * p;
          (p || h) && fo(e, a) && ((u += h), (d += p));
          var m = a.parentNode;
          a = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m;
        } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
        return (((s && Math.abs(u) < 1) || (!s && Math.abs(d) < 1)) && (c = !0), c);
      })(m, t, e, 'h' === m ? c : s);
    }, []),
    s = e.useCallback(function (e) {
      var t = e;
      if (wo.length && wo[wo.length - 1] === a) {
        var r = 'deltaY' in t ? mo(t) : ho(t),
          o = n.current.filter(function (e) {
            return (
              e.name === t.type &&
              (e.target === t.target || t.target === e.shadowParent) &&
              ((n = e.delta), (o = r), n[0] === o[0] && n[1] === o[1])
            );
            var n, o;
          })[0];
        if (o && o.should) t.cancelable && t.preventDefault();
        else if (!o) {
          var i = (l.current.shards || [])
            .map(vo)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(t.target);
            });
          (i.length > 0 ? c(t, i[0]) : !l.current.noIsolation) &&
            t.cancelable &&
            t.preventDefault();
        }
      }
    }, []),
    u = e.useCallback(function (e, t, r, o) {
      var i = { name: e, delta: t, target: r, should: o, shadowParent: xo(r) };
      (n.current.push(i),
        setTimeout(function () {
          n.current = n.current.filter(function (e) {
            return e !== i;
          });
        }, 1));
    }, []),
    d = e.useCallback(function (e) {
      ((r.current = ho(e)), (o.current = void 0));
    }, []),
    f = e.useCallback(function (e) {
      u(e.type, mo(e), e.target, c(e, t.lockRef.current));
    }, []),
    p = e.useCallback(function (e) {
      u(e.type, ho(e), e.target, c(e, t.lockRef.current));
    }, []);
  e.useEffect(function () {
    return (
      wo.push(a),
      t.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
      document.addEventListener('wheel', s, co),
      document.addEventListener('touchmove', s, co),
      document.addEventListener('touchstart', d, co),
      function () {
        ((wo = wo.filter(function (e) {
          return e !== a;
        })),
          document.removeEventListener('wheel', s, co),
          document.removeEventListener('touchmove', s, co),
          document.removeEventListener('touchstart', d, co));
      }
    );
  }, []);
  var h = t.removeScrollBar,
    m = t.inert;
  return e.createElement(
    e.Fragment,
    null,
    m ? e.createElement(a, { styles: yo(i) }) : null,
    h ? e.createElement(io, { noRelative: t.noRelative, gapMode: t.gapMode }) : null
  );
});
var Eo = e.forwardRef(function (t, n) {
  return e.createElement(Yr, Tr({}, t, { ref: n, sideCar: bo }));
});
Eo.classNames = Yr.classNames;
var So = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
  Co = [' ', 'Enter'],
  ko = 'Select',
  [Ro, Po, No] = (function (n) {
    const r = n + 'CollectionProvider',
      [o, i] = (function (t, n = []) {
        let r = [];
        const o = () => {
          const n = r.map((t) => e.createContext(t));
          return function (r) {
            const o = (null == r ? void 0 : r[t]) || n;
            return e.useMemo(() => ({ [`__scope${t}`]: { ...r, [t]: o } }), [r, o]);
          };
        };
        return (
          (o.scopeName = t),
          [
            function (n, o) {
              const i = e.createContext(o),
                a = r.length;
              r = [...r, o];
              const l = (n) => {
                var r;
                const { scope: o, children: l, ...c } = n,
                  s = (null == (r = null == o ? void 0 : o[t]) ? void 0 : r[a]) || i,
                  u = e.useMemo(() => c, Object.values(c));
                return h.jsx(s.Provider, { value: u, children: l });
              };
              return (
                (l.displayName = n + 'Provider'),
                [
                  l,
                  function (r, l) {
                    var c;
                    const s = (null == (c = null == l ? void 0 : l[t]) ? void 0 : c[a]) || i,
                      u = e.useContext(s);
                    if (u) return u;
                    if (void 0 !== o) return o;
                    throw new Error(`\`${r}\` must be used within \`${n}\``);
                  },
                ]
              );
            },
            oe(o, ...n),
          ]
        );
      })(r),
      [a, l] = o(r, { collectionRef: { current: null }, itemMap: new Map() }),
      c = (e) => {
        const { scope: n, children: r } = e,
          o = t.useRef(null),
          i = t.useRef(new Map()).current;
        return h.jsx(a, { scope: n, itemMap: i, collectionRef: o, children: r });
      };
    c.displayName = r;
    const s = n + 'CollectionSlot',
      u = ce(s),
      d = t.forwardRef((e, t) => {
        const { scope: n, children: r } = e,
          o = le(t, l(s, n).collectionRef);
        return h.jsx(u, { ref: o, children: r });
      });
    d.displayName = s;
    const f = n + 'CollectionItemSlot',
      p = 'data-radix-collection-item',
      m = ce(f),
      v = t.forwardRef((e, n) => {
        const { scope: r, children: o, ...i } = e,
          a = t.useRef(null),
          c = le(n, a),
          s = l(f, r);
        return (
          t.useEffect(
            () => (
              s.itemMap.set(a, { ref: a, ...i }),
              () => {
                s.itemMap.delete(a);
              }
            )
          ),
          h.jsx(m, { [p]: '', ref: c, children: o })
        );
      });
    return (
      (v.displayName = f),
      [
        { Provider: c, Slot: d, ItemSlot: v },
        function (e) {
          const r = l(n + 'CollectionConsumer', e);
          return t.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${p}]`));
            return Array.from(r.itemMap.values()).sort(
              (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
            );
          }, [r.collectionRef, r.itemMap]);
        },
        i,
      ]
    );
  })(ko),
  [Mo] = (function (t, n = []) {
    let r = [];
    const o = () => {
      const n = r.map((t) => e.createContext(t));
      return function (r) {
        const o = (null == r ? void 0 : r[t]) || n;
        return e.useMemo(() => ({ [`__scope${t}`]: { ...r, [t]: o } }), [r, o]);
      };
    };
    return (
      (o.scopeName = t),
      [
        function (n, o) {
          const i = e.createContext(o),
            a = r.length;
          r = [...r, o];
          const l = (n) => {
            var r;
            const { scope: o, children: l, ...c } = n,
              s = (null == (r = null == o ? void 0 : o[t]) ? void 0 : r[a]) || i,
              u = e.useMemo(() => c, Object.values(c));
            return h.jsx(s.Provider, { value: u, children: l });
          };
          return (
            (l.displayName = n + 'Provider'),
            [
              l,
              function (r, l) {
                var c;
                const s = (null == (c = null == l ? void 0 : l[t]) ? void 0 : c[a]) || i,
                  u = e.useContext(s);
                if (u) return u;
                if (void 0 !== o) return o;
                throw new Error(`\`${r}\` must be used within \`${n}\``);
              },
            ]
          );
        },
        fe(o, ...n),
      ]
    );
  })(ko, [No, Gn]),
  Ao = Gn(),
  [jo, Oo] = Mo(ko),
  [To, _o] = Mo(ko),
  Lo = (t) => {
    const {
        __scopeSelect: n,
        children: r,
        open: o,
        defaultOpen: i,
        onOpenChange: a,
        value: l,
        defaultValue: c,
        onValueChange: s,
        dir: u,
        name: d,
        autoComplete: f,
        disabled: p,
        required: m,
        form: v,
      } = t,
      y = Ao(n),
      [g, w] = e.useState(null),
      [x, b] = e.useState(null),
      [E, S] = e.useState(!1),
      C = (function (t) {
        const n = e.useContext(pe);
        return t || n || 'ltr';
      })(u),
      [k, R] = wr({ prop: o, defaultProp: i ?? !1, onChange: a, caller: ko }),
      [P, N] = wr({ prop: l, defaultProp: c, onChange: s, caller: ko }),
      M = e.useRef(null),
      A = !g || v || !!g.closest('form'),
      [j, O] = e.useState(new Set()),
      T = Array.from(j)
        .map((e) => e.props.value)
        .join(';');
    return h.jsx(pr, {
      ...y,
      children: h.jsxs(jo, {
        required: m,
        scope: n,
        trigger: g,
        onTriggerChange: w,
        valueNode: x,
        onValueNodeChange: b,
        valueNodeHasChildren: E,
        onValueNodeHasChildrenChange: S,
        contentId: He(),
        value: P,
        onValueChange: N,
        open: k,
        onOpenChange: R,
        dir: C,
        triggerPointerDownPosRef: M,
        disabled: p,
        children: [
          h.jsx(Ro.Provider, {
            scope: n,
            children: h.jsx(To, {
              scope: t.__scopeSelect,
              onNativeOptionAdd: e.useCallback((e) => {
                O((t) => new Set(t).add(e));
              }, []),
              onNativeOptionRemove: e.useCallback((e) => {
                O((t) => {
                  const n = new Set(t);
                  return (n.delete(e), n);
                });
              }, []),
              children: r,
            }),
          }),
          A
            ? h.jsxs(
                Ei,
                {
                  'aria-hidden': !0,
                  required: m,
                  tabIndex: -1,
                  name: d,
                  autoComplete: f,
                  value: P,
                  onChange: (e) => N(e.target.value),
                  disabled: p,
                  form: v,
                  children: [void 0 === P ? h.jsx('option', { value: '' }) : null, Array.from(j)],
                },
                T
              )
            : null,
        ],
      }),
    });
  };
Lo.displayName = ko;
var Do = 'SelectTrigger',
  Io = e.forwardRef((t, n) => {
    const { __scopeSelect: r, disabled: o = !1, ...i } = t,
      a = Ao(r),
      l = Oo(Do, r),
      c = l.disabled || o,
      s = le(n, l.onTriggerChange),
      u = Po(r),
      d = e.useRef('touch'),
      [f, p, m] = Ci((e) => {
        const t = u().filter((e) => !e.disabled),
          n = t.find((e) => e.value === l.value),
          r = ki(t, e, n);
        void 0 !== r && l.onValueChange(r.value);
      }),
      v = (e) => {
        (c || (l.onOpenChange(!0), m()),
          e &&
            (l.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY),
            }));
      };
    return h.jsx(hr, {
      asChild: !0,
      ...a,
      children: h.jsx(ge.button, {
        type: 'button',
        role: 'combobox',
        'aria-controls': l.contentId,
        'aria-expanded': l.open,
        'aria-required': l.required,
        'aria-autocomplete': 'none',
        dir: l.dir,
        'data-state': l.open ? 'open' : 'closed',
        disabled: c,
        'data-disabled': c ? '' : void 0,
        'data-placeholder': Si(l.value) ? '' : void 0,
        ...i,
        ref: s,
        onClick: re(i.onClick, (e) => {
          (e.currentTarget.focus(), 'mouse' !== d.current && v(e));
        }),
        onPointerDown: re(i.onPointerDown, (e) => {
          d.current = e.pointerType;
          const t = e.target;
          (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
            0 === e.button &&
              !1 === e.ctrlKey &&
              'mouse' === e.pointerType &&
              (v(e), e.preventDefault()));
        }),
        onKeyDown: re(i.onKeyDown, (e) => {
          const t = '' !== f.current;
          (e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || p(e.key),
            (t && ' ' === e.key) || (So.includes(e.key) && (v(), e.preventDefault())));
        }),
      }),
    });
  });
Io.displayName = Do;
var Wo = 'SelectValue',
  Fo = e.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: a = '', ...l } = e,
      c = Oo(Wo, n),
      { onValueNodeHasChildrenChange: s } = c,
      u = void 0 !== i,
      d = le(t, c.onValueNodeChange);
    return (
      Ve(() => {
        s(u);
      }, [s, u]),
      h.jsx(ge.span, {
        ...l,
        ref: d,
        style: { pointerEvents: 'none' },
        children: Si(c.value) ? h.jsx(h.Fragment, { children: a }) : i,
      })
    );
  });
Fo.displayName = Wo;
var Vo = e.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return h.jsx(ge.span, { 'aria-hidden': !0, ...o, ref: t, children: r || '▼' });
});
Vo.displayName = 'SelectIcon';
var $o = (e) => h.jsx(yr, { asChild: !0, ...e });
$o.displayName = 'SelectPortal';
var Bo = 'SelectContent',
  Ho = e.forwardRef((t, r) => {
    const o = Oo(Bo, t.__scopeSelect),
      [i, a] = e.useState();
    if (
      (Ve(() => {
        a(new DocumentFragment());
      }, []),
      !o.open)
    ) {
      const e = i;
      return e
        ? n.createPortal(
            h.jsx(qo, {
              scope: t.__scopeSelect,
              children: h.jsx(Ro.Slot, {
                scope: t.__scopeSelect,
                children: h.jsx('div', { children: t.children }),
              }),
            }),
            e
          )
        : null;
    }
    return h.jsx(Yo, { ...t, ref: r });
  });
Ho.displayName = Bo;
var zo = 10,
  [qo, Uo] = Mo(Bo),
  Ko = he('SelectContent.RemoveScroll'),
  Yo = e.forwardRef((t, n) => {
    const {
        __scopeSelect: r,
        position: o = 'item-aligned',
        onCloseAutoFocus: i,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        side: c,
        sideOffset: s,
        align: u,
        alignOffset: d,
        arrowPadding: f,
        collisionBoundary: p,
        collisionPadding: m,
        sticky: v,
        hideWhenDetached: y,
        avoidCollisions: g,
        ...w
      } = t,
      x = Oo(Bo, r),
      [b, E] = e.useState(null),
      [S, C] = e.useState(null),
      k = le(n, (e) => E(e)),
      [R, P] = e.useState(null),
      [N, M] = e.useState(null),
      A = Po(r),
      [j, O] = e.useState(!1),
      T = e.useRef(!1);
    (e.useEffect(() => {
      if (b) return Or(b);
    }, [b]),
      e.useEffect(() => {
        const e = document.querySelectorAll('[data-radix-focus-guard]');
        return (
          document.body.insertAdjacentElement('afterbegin', e[0] ?? Me()),
          document.body.insertAdjacentElement('beforeend', e[1] ?? Me()),
          Ne++,
          () => {
            (1 === Ne &&
              document.querySelectorAll('[data-radix-focus-guard]').forEach((e) => e.remove()),
              Ne--);
          }
        );
      }, []));
    const _ = e.useCallback(
        (e) => {
          const [t, ...n] = A().map((e) => e.ref.current),
            [r] = n.slice(-1),
            o = document.activeElement;
          for (const i of e) {
            if (i === o) return;
            if (
              (null == i || i.scrollIntoView({ block: 'nearest' }),
              i === t && S && (S.scrollTop = 0),
              i === r && S && (S.scrollTop = S.scrollHeight),
              null == i || i.focus(),
              document.activeElement !== o)
            )
              return;
          }
        },
        [A, S]
      ),
      L = e.useCallback(() => _([R, b]), [_, R, b]);
    e.useEffect(() => {
      j && L();
    }, [j, L]);
    const { onOpenChange: D, triggerPointerDownPosRef: I } = x;
    (e.useEffect(() => {
      if (b) {
        let e = { x: 0, y: 0 };
        const t = (t) => {
            var n, r;
            e = {
              x: Math.abs(Math.round(t.pageX) - ((null == (n = I.current) ? void 0 : n.x) ?? 0)),
              y: Math.abs(Math.round(t.pageY) - ((null == (r = I.current) ? void 0 : r.y) ?? 0)),
            };
          },
          n = (n) => {
            (e.x <= 10 && e.y <= 10 ? n.preventDefault() : b.contains(n.target) || D(!1),
              document.removeEventListener('pointermove', t),
              (I.current = null));
          };
        return (
          null !== I.current &&
            (document.addEventListener('pointermove', t),
            document.addEventListener('pointerup', n, { capture: !0, once: !0 })),
          () => {
            (document.removeEventListener('pointermove', t),
              document.removeEventListener('pointerup', n, { capture: !0 }));
          }
        );
      }
    }, [b, D, I]),
      e.useEffect(() => {
        const e = () => D(!1);
        return (
          window.addEventListener('blur', e),
          window.addEventListener('resize', e),
          () => {
            (window.removeEventListener('blur', e), window.removeEventListener('resize', e));
          }
        );
      }, [D]));
    const [W, F] = Ci((e) => {
        const t = A().filter((e) => !e.disabled),
          n = t.find((e) => e.ref.current === document.activeElement),
          r = ki(t, e, n);
        r && setTimeout(() => r.ref.current.focus());
      }),
      V = e.useCallback(
        (e, t, n) => {
          const r = !T.current && !n;
          ((void 0 !== x.value && x.value === t) || r) && (P(e), r && (T.current = !0));
        },
        [x.value]
      ),
      $ = e.useCallback(() => (null == b ? void 0 : b.focus()), [b]),
      B = e.useCallback(
        (e, t, n) => {
          const r = !T.current && !n;
          ((void 0 !== x.value && x.value === t) || r) && M(e);
        },
        [x.value]
      ),
      H = 'popper' === o ? Zo : Xo,
      z =
        H === Zo
          ? {
              side: c,
              sideOffset: s,
              align: u,
              alignOffset: d,
              arrowPadding: f,
              collisionBoundary: p,
              collisionPadding: m,
              sticky: v,
              hideWhenDetached: y,
              avoidCollisions: g,
            }
          : {};
    return h.jsx(qo, {
      scope: r,
      content: b,
      viewport: S,
      onViewportChange: C,
      itemRefCallback: V,
      selectedItem: R,
      onItemLeave: $,
      itemTextRefCallback: B,
      focusSelectedItem: L,
      selectedItemText: N,
      position: o,
      isPositioned: j,
      searchRef: W,
      children: h.jsx(Eo, {
        as: Ko,
        allowPinchZoom: !0,
        children: h.jsx(Te, {
          asChild: !0,
          trapped: x.open,
          onMountAutoFocus: (e) => {
            e.preventDefault();
          },
          onUnmountAutoFocus: re(i, (e) => {
            var t;
            (null == (t = x.trigger) || t.focus({ preventScroll: !0 }), e.preventDefault());
          }),
          children: h.jsx(ke, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: (e) => e.preventDefault(),
            onDismiss: () => x.onOpenChange(!1),
            children: h.jsx(H, {
              role: 'listbox',
              id: x.contentId,
              'data-state': x.open ? 'open' : 'closed',
              dir: x.dir,
              onContextMenu: (e) => e.preventDefault(),
              ...w,
              ...z,
              onPlaced: () => O(!0),
              ref: k,
              style: { display: 'flex', flexDirection: 'column', outline: 'none', ...w.style },
              onKeyDown: re(w.onKeyDown, (e) => {
                const t = e.ctrlKey || e.altKey || e.metaKey;
                if (
                  ('Tab' === e.key && e.preventDefault(),
                  t || 1 !== e.key.length || F(e.key),
                  ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key))
                ) {
                  let t = A()
                    .filter((e) => !e.disabled)
                    .map((e) => e.ref.current);
                  if (
                    (['ArrowUp', 'End'].includes(e.key) && (t = t.slice().reverse()),
                    ['ArrowUp', 'ArrowDown'].includes(e.key))
                  ) {
                    const n = e.target,
                      r = t.indexOf(n);
                    t = t.slice(r + 1);
                  }
                  (setTimeout(() => _(t)), e.preventDefault());
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
Yo.displayName = 'SelectContentImpl';
var Xo = e.forwardRef((t, n) => {
  const { __scopeSelect: r, onPlaced: o, ...i } = t,
    a = Oo(Bo, r),
    l = Uo(Bo, r),
    [c, s] = e.useState(null),
    [u, d] = e.useState(null),
    f = le(n, (e) => d(e)),
    p = Po(r),
    m = e.useRef(!1),
    v = e.useRef(!0),
    { viewport: y, selectedItem: g, selectedItemText: w, focusSelectedItem: x } = l,
    b = e.useCallback(() => {
      if (a.trigger && a.valueNode && c && u && y && g && w) {
        const e = a.trigger.getBoundingClientRect(),
          t = u.getBoundingClientRect(),
          n = a.valueNode.getBoundingClientRect(),
          r = w.getBoundingClientRect();
        if ('rtl' !== a.dir) {
          const o = r.left - t.left,
            i = n.left - o,
            a = e.left - i,
            l = e.width + a,
            s = Math.max(l, t.width),
            u = window.innerWidth - zo,
            d = ne(i, [zo, Math.max(zo, u - s)]);
          ((c.style.minWidth = l + 'px'), (c.style.left = d + 'px'));
        } else {
          const o = t.right - r.right,
            i = window.innerWidth - n.right - o,
            a = window.innerWidth - e.right - i,
            l = e.width + a,
            s = Math.max(l, t.width),
            u = window.innerWidth - zo,
            d = ne(i, [zo, Math.max(zo, u - s)]);
          ((c.style.minWidth = l + 'px'), (c.style.right = d + 'px'));
        }
        const i = p(),
          l = window.innerHeight - 2 * zo,
          s = y.scrollHeight,
          d = window.getComputedStyle(u),
          f = parseInt(d.borderTopWidth, 10),
          h = parseInt(d.paddingTop, 10),
          v = parseInt(d.borderBottomWidth, 10),
          x = f + h + s + parseInt(d.paddingBottom, 10) + v,
          b = Math.min(5 * g.offsetHeight, x),
          E = window.getComputedStyle(y),
          S = parseInt(E.paddingTop, 10),
          C = parseInt(E.paddingBottom, 10),
          k = e.top + e.height / 2 - zo,
          R = l - k,
          P = g.offsetHeight / 2,
          N = f + h + (g.offsetTop + P),
          M = x - N;
        if (N <= k) {
          const e = i.length > 0 && g === i[i.length - 1].ref.current;
          c.style.bottom = '0px';
          const t = u.clientHeight - y.offsetTop - y.offsetHeight,
            n = N + Math.max(R, P + (e ? C : 0) + t + v);
          c.style.height = n + 'px';
        } else {
          const e = i.length > 0 && g === i[0].ref.current;
          c.style.top = '0px';
          const t = Math.max(k, f + y.offsetTop + (e ? S : 0) + P) + M;
          ((c.style.height = t + 'px'), (y.scrollTop = N - k + y.offsetTop));
        }
        ((c.style.margin = `${zo}px 0`),
          (c.style.minHeight = b + 'px'),
          (c.style.maxHeight = l + 'px'),
          null == o || o(),
          requestAnimationFrame(() => (m.current = !0)));
      }
    }, [p, a.trigger, a.valueNode, c, u, y, g, w, a.dir, o]);
  Ve(() => b(), [b]);
  const [E, S] = e.useState();
  Ve(() => {
    u && S(window.getComputedStyle(u).zIndex);
  }, [u]);
  const C = e.useCallback(
    (e) => {
      e && !0 === v.current && (b(), null == x || x(), (v.current = !1));
    },
    [b, x]
  );
  return h.jsx(Go, {
    scope: r,
    contentWrapper: c,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: C,
    children: h.jsx('div', {
      ref: s,
      style: { display: 'flex', flexDirection: 'column', position: 'fixed', zIndex: E },
      children: h.jsx(ge.div, {
        ...i,
        ref: f,
        style: { boxSizing: 'border-box', maxHeight: '100%', ...i.style },
      }),
    }),
  });
});
Xo.displayName = 'SelectItemAlignedPosition';
var Zo = e.forwardRef((e, t) => {
  const { __scopeSelect: n, align: r = 'start', collisionPadding: o = zo, ...i } = e,
    a = Ao(n);
  return h.jsx(mr, {
    ...a,
    ...i,
    ref: t,
    align: r,
    collisionPadding: o,
    style: {
      boxSizing: 'border-box',
      ...i.style,
      '--radix-select-content-transform-origin': 'var(--radix-popper-transform-origin)',
      '--radix-select-content-available-width': 'var(--radix-popper-available-width)',
      '--radix-select-content-available-height': 'var(--radix-popper-available-height)',
      '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
      '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
    },
  });
});
Zo.displayName = 'SelectPopperPosition';
var [Go, Jo] = Mo(Bo, {}),
  Qo = 'SelectViewport',
  ei = e.forwardRef((t, n) => {
    const { __scopeSelect: r, nonce: o, ...i } = t,
      a = Uo(Qo, r),
      l = Jo(Qo, r),
      c = le(n, a.onViewportChange),
      s = e.useRef(0);
    return h.jsxs(h.Fragment, {
      children: [
        h.jsx('style', {
          dangerouslySetInnerHTML: {
            __html:
              '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
          },
          nonce: o,
        }),
        h.jsx(Ro.Slot, {
          scope: r,
          children: h.jsx(ge.div, {
            'data-radix-select-viewport': '',
            role: 'presentation',
            ...i,
            ref: c,
            style: { position: 'relative', flex: 1, overflow: 'hidden auto', ...i.style },
            onScroll: re(i.onScroll, (e) => {
              const t = e.currentTarget,
                { contentWrapper: n, shouldExpandOnScrollRef: r } = l;
              if ((null == r ? void 0 : r.current) && n) {
                const e = Math.abs(s.current - t.scrollTop);
                if (e > 0) {
                  const r = window.innerHeight - 2 * zo,
                    o = parseFloat(n.style.minHeight),
                    i = parseFloat(n.style.height),
                    a = Math.max(o, i);
                  if (a < r) {
                    const o = a + e,
                      i = Math.min(r, o),
                      l = o - i;
                    ((n.style.height = i + 'px'),
                      '0px' === n.style.bottom &&
                        ((t.scrollTop = l > 0 ? l : 0), (n.style.justifyContent = 'flex-end')));
                  }
                }
              }
              s.current = t.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
ei.displayName = Qo;
var ti = 'SelectGroup',
  [ni, ri] = Mo(ti),
  oi = e.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = He();
    return h.jsx(ni, {
      scope: n,
      id: o,
      children: h.jsx(ge.div, { role: 'group', 'aria-labelledby': o, ...r, ref: t }),
    });
  });
oi.displayName = ti;
var ii = 'SelectLabel',
  ai = e.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = ri(ii, n);
    return h.jsx(ge.div, { id: o.id, ...r, ref: t });
  });
ai.displayName = ii;
var li = 'SelectItem',
  [ci, si] = Mo(li),
  ui = e.forwardRef((t, n) => {
    const { __scopeSelect: r, value: o, disabled: i = !1, textValue: a, ...l } = t,
      c = Oo(li, r),
      s = Uo(li, r),
      u = c.value === o,
      [d, f] = e.useState(a ?? ''),
      [p, m] = e.useState(!1),
      v = le(n, (e) => {
        var t;
        return null == (t = s.itemRefCallback) ? void 0 : t.call(s, e, o, i);
      }),
      y = He(),
      g = e.useRef('touch'),
      w = () => {
        i || (c.onValueChange(o), c.onOpenChange(!1));
      };
    if ('' === o)
      throw new Error(
        'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.'
      );
    return h.jsx(ci, {
      scope: r,
      value: o,
      disabled: i,
      textId: y,
      isSelected: u,
      onItemTextChange: e.useCallback((e) => {
        f((t) => t || ((null == e ? void 0 : e.textContent) ?? '').trim());
      }, []),
      children: h.jsx(Ro.ItemSlot, {
        scope: r,
        value: o,
        disabled: i,
        textValue: d,
        children: h.jsx(ge.div, {
          role: 'option',
          'aria-labelledby': y,
          'data-highlighted': p ? '' : void 0,
          'aria-selected': u && p,
          'data-state': u ? 'checked' : 'unchecked',
          'aria-disabled': i || void 0,
          'data-disabled': i ? '' : void 0,
          tabIndex: i ? void 0 : -1,
          ...l,
          ref: v,
          onFocus: re(l.onFocus, () => m(!0)),
          onBlur: re(l.onBlur, () => m(!1)),
          onClick: re(l.onClick, () => {
            'mouse' !== g.current && w();
          }),
          onPointerUp: re(l.onPointerUp, () => {
            'mouse' === g.current && w();
          }),
          onPointerDown: re(l.onPointerDown, (e) => {
            g.current = e.pointerType;
          }),
          onPointerMove: re(l.onPointerMove, (e) => {
            var t;
            ((g.current = e.pointerType),
              i
                ? null == (t = s.onItemLeave) || t.call(s)
                : 'mouse' === g.current && e.currentTarget.focus({ preventScroll: !0 }));
          }),
          onPointerLeave: re(l.onPointerLeave, (e) => {
            var t;
            e.currentTarget === document.activeElement &&
              (null == (t = s.onItemLeave) || t.call(s));
          }),
          onKeyDown: re(l.onKeyDown, (e) => {
            var t;
            ('' !== (null == (t = s.searchRef) ? void 0 : t.current) && ' ' === e.key) ||
              (Co.includes(e.key) && w(), ' ' === e.key && e.preventDefault());
          }),
        }),
      }),
    });
  });
ui.displayName = li;
var di = 'SelectItemText',
  fi = e.forwardRef((t, r) => {
    const { __scopeSelect: o, className: i, style: a, ...l } = t,
      c = Oo(di, o),
      s = Uo(di, o),
      u = si(di, o),
      d = _o(di, o),
      [f, p] = e.useState(null),
      m = le(
        r,
        (e) => p(e),
        u.onItemTextChange,
        (e) => {
          var t;
          return null == (t = s.itemTextRefCallback) ? void 0 : t.call(s, e, u.value, u.disabled);
        }
      ),
      v = null == f ? void 0 : f.textContent,
      y = e.useMemo(
        () => h.jsx('option', { value: u.value, disabled: u.disabled, children: v }, u.value),
        [u.disabled, u.value, v]
      ),
      { onNativeOptionAdd: g, onNativeOptionRemove: w } = d;
    return (
      Ve(() => (g(y), () => w(y)), [g, w, y]),
      h.jsxs(h.Fragment, {
        children: [
          h.jsx(ge.span, { id: u.textId, ...l, ref: m }),
          u.isSelected && c.valueNode && !c.valueNodeHasChildren
            ? n.createPortal(l.children, c.valueNode)
            : null,
        ],
      })
    );
  });
fi.displayName = di;
var pi = 'SelectItemIndicator',
  hi = e.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return si(pi, n).isSelected ? h.jsx(ge.span, { 'aria-hidden': !0, ...r, ref: t }) : null;
  });
hi.displayName = pi;
var mi = 'SelectScrollUpButton',
  vi = e.forwardRef((t, n) => {
    const r = Uo(mi, t.__scopeSelect),
      o = Jo(mi, t.__scopeSelect),
      [i, a] = e.useState(!1),
      l = le(n, o.onScrollButtonChange);
    return (
      Ve(() => {
        if (r.viewport && r.isPositioned) {
          let e = function () {
            const e = t.scrollTop > 0;
            a(e);
          };
          const t = r.viewport;
          return (e(), t.addEventListener('scroll', e), () => t.removeEventListener('scroll', e));
        }
      }, [r.viewport, r.isPositioned]),
      i
        ? h.jsx(wi, {
            ...t,
            ref: l,
            onAutoScroll: () => {
              const { viewport: e, selectedItem: t } = r;
              e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
            },
          })
        : null
    );
  });
vi.displayName = mi;
var yi = 'SelectScrollDownButton',
  gi = e.forwardRef((t, n) => {
    const r = Uo(yi, t.__scopeSelect),
      o = Jo(yi, t.__scopeSelect),
      [i, a] = e.useState(!1),
      l = le(n, o.onScrollButtonChange);
    return (
      Ve(() => {
        if (r.viewport && r.isPositioned) {
          let e = function () {
            const e = t.scrollHeight - t.clientHeight,
              n = Math.ceil(t.scrollTop) < e;
            a(n);
          };
          const t = r.viewport;
          return (e(), t.addEventListener('scroll', e), () => t.removeEventListener('scroll', e));
        }
      }, [r.viewport, r.isPositioned]),
      i
        ? h.jsx(wi, {
            ...t,
            ref: l,
            onAutoScroll: () => {
              const { viewport: e, selectedItem: t } = r;
              e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
            },
          })
        : null
    );
  });
gi.displayName = yi;
var wi = e.forwardRef((t, n) => {
    const { __scopeSelect: r, onAutoScroll: o, ...i } = t,
      a = Uo('SelectScrollButton', r),
      l = e.useRef(null),
      c = Po(r),
      s = e.useCallback(() => {
        null !== l.current && (window.clearInterval(l.current), (l.current = null));
      }, []);
    return (
      e.useEffect(() => () => s(), [s]),
      Ve(() => {
        var e;
        const t = c().find((e) => e.ref.current === document.activeElement);
        null == (e = null == t ? void 0 : t.ref.current) || e.scrollIntoView({ block: 'nearest' });
      }, [c]),
      h.jsx(ge.div, {
        'aria-hidden': !0,
        ...i,
        ref: n,
        style: { flexShrink: 0, ...i.style },
        onPointerDown: re(i.onPointerDown, () => {
          null === l.current && (l.current = window.setInterval(o, 50));
        }),
        onPointerMove: re(i.onPointerMove, () => {
          var e;
          (null == (e = a.onItemLeave) || e.call(a),
            null === l.current && (l.current = window.setInterval(o, 50)));
        }),
        onPointerLeave: re(i.onPointerLeave, () => {
          s();
        }),
      })
    );
  }),
  xi = e.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return h.jsx(ge.div, { 'aria-hidden': !0, ...r, ref: t });
  });
xi.displayName = 'SelectSeparator';
var bi = 'SelectArrow';
e.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e,
    o = Ao(n),
    i = Oo(bi, n),
    a = Uo(bi, n);
  return i.open && 'popper' === a.position ? h.jsx(vr, { ...o, ...r, ref: t }) : null;
}).displayName = bi;
var Ei = e.forwardRef(({ __scopeSelect: t, value: n, ...r }, o) => {
  const i = e.useRef(null),
    a = le(o, i),
    l = (function (t) {
      const n = e.useRef({ value: t, previous: t });
      return e.useMemo(
        () => (
          n.current.value !== t && ((n.current.previous = n.current.value), (n.current.value = t)),
          n.current.previous
        ),
        [t]
      );
    })(n);
  return (
    e.useEffect(() => {
      const e = i.current;
      if (!e) return;
      const t = window.HTMLSelectElement.prototype,
        r = Object.getOwnPropertyDescriptor(t, 'value').set;
      if (l !== n && r) {
        const t = new Event('change', { bubbles: !0 });
        (r.call(e, n), e.dispatchEvent(t));
      }
    }, [l, n]),
    h.jsx(ge.select, { ...r, style: { ...kr, ...r.style }, ref: a, defaultValue: n })
  );
});
function Si(e) {
  return '' === e || void 0 === e;
}
function Ci(t) {
  const n = we(t),
    r = e.useRef(''),
    o = e.useRef(0),
    i = e.useCallback(
      (e) => {
        const t = r.current + e;
        (n(t),
          (function e(t) {
            ((r.current = t),
              window.clearTimeout(o.current),
              '' !== t && (o.current = window.setTimeout(() => e(''), 1e3)));
          })(t));
      },
      [n]
    ),
    a = e.useCallback(() => {
      ((r.current = ''), window.clearTimeout(o.current));
    }, []);
  return (e.useEffect(() => () => window.clearTimeout(o.current), []), [r, i, a]);
}
function ki(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
    o = n ? e.indexOf(n) : -1;
  let i = ((a = e), (l = Math.max(o, 0)), a.map((e, t) => a[(l + t) % a.length]));
  var a, l;
  1 === r.length && (i = i.filter((e) => e !== n));
  const c = i.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
  return c !== n ? c : void 0;
}
Ei.displayName = 'SelectBubbleInput';
var Ri = Lo,
  Pi = Io,
  Ni = Fo,
  Mi = Vo,
  Ai = $o,
  ji = Ho,
  Oi = ei,
  Ti = oi,
  _i = ai,
  Li = ui,
  Di = fi,
  Ii = hi,
  Wi = vi,
  Fi = gi,
  Vi = xi;
function $i(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((null == e || e(r), !1 === n || !r.defaultPrevented)) return null == t ? void 0 : t(r);
  };
}
function Bi(e, t) {
  if ('function' == typeof e) return e(t);
  null != e && (e.current = t);
}
function Hi(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((e) => {
      const r = Bi(e, t);
      return (n || 'function' != typeof r || (n = !0), r);
    });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          const n = r[t];
          'function' == typeof n ? n() : Bi(e[t], null);
        }
      };
  };
}
function zi(...t) {
  return e.useCallback(Hi(...t), t);
}
function qi(t, n) {
  const r = e.createContext(n),
    o = (t) => {
      const { children: n, ...o } = t,
        i = e.useMemo(() => o, Object.values(o));
      return h.jsx(r.Provider, { value: i, children: n });
    };
  return (
    (o.displayName = t + 'Provider'),
    [
      o,
      function (o) {
        const i = e.useContext(r);
        if (i) return i;
        if (void 0 !== n) return n;
        throw new Error(`\`${o}\` must be used within \`${t}\``);
      },
    ]
  );
}
function Ui(t, n = []) {
  let r = [];
  const o = () => {
    const n = r.map((t) => e.createContext(t));
    return function (r) {
      const o = (null == r ? void 0 : r[t]) || n;
      return e.useMemo(() => ({ [`__scope${t}`]: { ...r, [t]: o } }), [r, o]);
    };
  };
  return (
    (o.scopeName = t),
    [
      function (n, o) {
        const i = e.createContext(o),
          a = r.length;
        r = [...r, o];
        const l = (n) => {
          var r;
          const { scope: o, children: l, ...c } = n,
            s = (null == (r = null == o ? void 0 : o[t]) ? void 0 : r[a]) || i,
            u = e.useMemo(() => c, Object.values(c));
          return h.jsx(s.Provider, { value: u, children: l });
        };
        return (
          (l.displayName = n + 'Provider'),
          [
            l,
            function (r, l) {
              var c;
              const s = (null == (c = null == l ? void 0 : l[t]) ? void 0 : c[a]) || i,
                u = e.useContext(s);
              if (u) return u;
              if (void 0 !== o) return o;
              throw new Error(`\`${r}\` must be used within \`${n}\``);
            },
          ]
        );
      },
      Ki(o, ...n),
    ]
  );
}
function Ki(...t) {
  const n = t[0];
  if (1 === t.length) return n;
  const r = () => {
    const r = t.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (t) {
      const o = r.reduce(
        (e, { useScope: n, scopeName: r }) => ({ ...e, ...n(t)[`__scope${r}`] }),
        {}
      );
      return e.useMemo(() => ({ [`__scope${n.scopeName}`]: o }), [o]);
    };
  };
  return ((r.scopeName = n.scopeName), r);
}
var Yi = (null == globalThis ? void 0 : globalThis.document) ? e.useLayoutEffect : () => {},
  Xi = r[' useId '.trim().toString()] || (() => {}),
  Zi = 0;
function Gi(t) {
  const [n, r] = e.useState(Xi());
  return (
    Yi(() => {
      r((e) => e ?? String(Zi++));
    }, [t]),
    t || (n ? `radix-${n}` : '')
  );
}
var Ji = r[' useInsertionEffect '.trim().toString()] || Yi;
function Qi({ prop: t, defaultProp: n, onChange: r = () => {}, caller: o }) {
  const [i, a, l] = (function ({ defaultProp: t, onChange: n }) {
      const [r, o] = e.useState(t),
        i = e.useRef(r),
        a = e.useRef(n);
      return (
        Ji(() => {
          a.current = n;
        }, [n]),
        e.useEffect(() => {
          var e;
          i.current !== r && (null == (e = a.current) || e.call(a, r), (i.current = r));
        }, [r, i]),
        [r, o, a]
      );
    })({ defaultProp: n, onChange: r }),
    c = void 0 !== t,
    s = c ? t : i;
  {
    const n = e.useRef(void 0 !== t);
    e.useEffect(() => {
      const e = n.current;
      if (e !== c) {
      }
      n.current = c;
    }, [c, o]);
  }
  const u = e.useCallback(
    (e) => {
      var n;
      if (c) {
        const r = (function (e) {
          return 'function' == typeof e;
        })(e)
          ? e(t)
          : e;
        r !== t && (null == (n = l.current) || n.call(l, r));
      } else a(e);
    },
    [c, t, a, l]
  );
  return [s, u];
}
function ea(t) {
  const n = ta(t),
    r = e.forwardRef((t, r) => {
      const { children: o, ...i } = t,
        a = e.Children.toArray(o),
        l = a.find(ra);
      if (l) {
        const t = l.props.children,
          o = a.map((n) =>
            n === l
              ? e.Children.count(t) > 1
                ? e.Children.only(null)
                : e.isValidElement(t)
                  ? t.props.children
                  : null
              : n
          );
        return h.jsx(n, {
          ...i,
          ref: r,
          children: e.isValidElement(t) ? e.cloneElement(t, void 0, o) : null,
        });
      }
      return h.jsx(n, { ...i, ref: r, children: o });
    });
  return ((r.displayName = `${t}.Slot`), r);
}
function ta(t) {
  const n = e.forwardRef((t, n) => {
    const { children: r, ...o } = t;
    if (e.isValidElement(r)) {
      const t = (function (e) {
          var t, n;
          let r = null == (t = Object.getOwnPropertyDescriptor(e.props, 'ref')) ? void 0 : t.get,
            o = r && 'isReactWarning' in r && r.isReactWarning;
          if (o) return e.ref;
          if (
            ((r = null == (n = Object.getOwnPropertyDescriptor(e, 'ref')) ? void 0 : n.get),
            (o = r && 'isReactWarning' in r && r.isReactWarning),
            o)
          )
            return e.props.ref;
          return e.props.ref || e.ref;
        })(r),
        i = (function (e, t) {
          const n = { ...t };
          for (const r in t) {
            const o = e[r],
              i = t[r];
            /^on[A-Z]/.test(r)
              ? o && i
                ? (n[r] = (...e) => {
                    const t = i(...e);
                    return (o(...e), t);
                  })
                : o && (n[r] = o)
              : 'style' === r
                ? (n[r] = { ...o, ...i })
                : 'className' === r && (n[r] = [o, i].filter(Boolean).join(' '));
          }
          return { ...e, ...n };
        })(o, r.props);
      return (r.type !== e.Fragment && (i.ref = n ? Hi(n, t) : t), e.cloneElement(r, i));
    }
    return e.Children.count(r) > 1 ? e.Children.only(null) : null;
  });
  return ((n.displayName = `${t}.SlotClone`), n);
}
var na = Symbol('radix.slottable');
function ra(t) {
  return (
    e.isValidElement(t) &&
    'function' == typeof t.type &&
    '__radixId' in t.type &&
    t.type.__radixId === na
  );
}
var oa = [
  'a',
  'button',
  'div',
  'form',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'select',
  'span',
  'svg',
  'ul',
].reduce((t, n) => {
  const r = ea(`Primitive.${n}`),
    o = e.forwardRef((e, t) => {
      const { asChild: o, ...i } = e,
        a = o ? r : n;
      return (
        'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
        h.jsx(a, { ...i, ref: t })
      );
    });
  return ((o.displayName = `Primitive.${n}`), { ...t, [n]: o });
}, {});
function ia(e, t) {
  e && n.flushSync(() => e.dispatchEvent(t));
}
function aa(t) {
  const n = e.useRef(t);
  return (
    e.useEffect(() => {
      n.current = t;
    }),
    e.useMemo(
      () =>
        (...e) => {
          var t;
          return null == (t = n.current) ? void 0 : t.call(n, ...e);
        },
      []
    )
  );
}
var la = (t) => {
  const { present: n, children: r } = t,
    o = (function (t) {
      const [n, r] = e.useState(),
        o = e.useRef(null),
        i = e.useRef(t),
        a = e.useRef('none'),
        l = t ? 'mounted' : 'unmounted',
        [c, s] = (function (t, n) {
          return e.useReducer((e, t) => n[e][t] ?? e, t);
        })(l, {
          mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
          unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
          unmounted: { MOUNT: 'mounted' },
        });
      return (
        e.useEffect(() => {
          const e = ca(o.current);
          a.current = 'mounted' === c ? e : 'none';
        }, [c]),
        Yi(() => {
          const e = o.current,
            n = i.current;
          if (n !== t) {
            const r = a.current,
              o = ca(e);
            if (t) s('MOUNT');
            else if ('none' === o || 'none' === (null == e ? void 0 : e.display)) s('UNMOUNT');
            else {
              s(n && r !== o ? 'ANIMATION_OUT' : 'UNMOUNT');
            }
            i.current = t;
          }
        }, [t, s]),
        Yi(() => {
          if (n) {
            let e;
            const t = n.ownerDocument.defaultView ?? window,
              r = (r) => {
                const a = ca(o.current).includes(CSS.escape(r.animationName));
                if (r.target === n && a && (s('ANIMATION_END'), !i.current)) {
                  const r = n.style.animationFillMode;
                  ((n.style.animationFillMode = 'forwards'),
                    (e = t.setTimeout(() => {
                      'forwards' === n.style.animationFillMode && (n.style.animationFillMode = r);
                    })));
                }
              },
              l = (e) => {
                e.target === n && (a.current = ca(o.current));
              };
            return (
              n.addEventListener('animationstart', l),
              n.addEventListener('animationcancel', r),
              n.addEventListener('animationend', r),
              () => {
                (t.clearTimeout(e),
                  n.removeEventListener('animationstart', l),
                  n.removeEventListener('animationcancel', r),
                  n.removeEventListener('animationend', r));
              }
            );
          }
          s('ANIMATION_END');
        }, [n, s]),
        {
          isPresent: ['mounted', 'unmountSuspended'].includes(c),
          ref: e.useCallback((e) => {
            ((o.current = e ? getComputedStyle(e) : null), r(e));
          }, []),
        }
      );
    })(n),
    i = 'function' == typeof r ? r({ present: o.isPresent }) : e.Children.only(r),
    a = zi(
      o.ref,
      (function (e) {
        var t, n;
        let r = null == (t = Object.getOwnPropertyDescriptor(e.props, 'ref')) ? void 0 : t.get,
          o = r && 'isReactWarning' in r && r.isReactWarning;
        if (o) return e.ref;
        if (
          ((r = null == (n = Object.getOwnPropertyDescriptor(e, 'ref')) ? void 0 : n.get),
          (o = r && 'isReactWarning' in r && r.isReactWarning),
          o)
        )
          return e.props.ref;
        return e.props.ref || e.ref;
      })(i)
    );
  return 'function' == typeof r || o.isPresent ? e.cloneElement(i, { ref: a }) : null;
};
function ca(e) {
  return (null == e ? void 0 : e.animationName) || 'none';
}
la.displayName = 'Presence';
export {
  qr as $,
  Z as A,
  C as B,
  O as C,
  G as D,
  D as E,
  F,
  V as G,
  $ as H,
  Mi as I,
  B as J,
  Hr as K,
  z as L,
  $r as M,
  Y as N,
  Tr as O,
  X as P,
  Dr as Q,
  Ri as R,
  Wi as S,
  J as T,
  Ir as U,
  Oi as V,
  Gr as W,
  Lr as X,
  io as Y,
  te as Z,
  _r as _,
  W as a,
  Or as a0,
  aa as a1,
  zi as a2,
  oa as a3,
  $i as a4,
  ia as a5,
  Yi as a6,
  Hi as a7,
  Ui as a8,
  la as a9,
  qi as aa,
  Qi as ab,
  Gi as ac,
  ee as ad,
  b as ae,
  K as af,
  E as ag,
  q as ah,
  Q as ai,
  H as aj,
  k as b,
  I as c,
  j as d,
  A as e,
  T as f,
  S as g,
  _ as h,
  R as i,
  h as j,
  L as k,
  U as l,
  N as m,
  Pi as n,
  P as o,
  M as p,
  Fi as q,
  Ai as r,
  ji as s,
  _i as t,
  Li as u,
  Ii as v,
  Di as w,
  Vi as x,
  Ni as y,
  Ti as z,
};
