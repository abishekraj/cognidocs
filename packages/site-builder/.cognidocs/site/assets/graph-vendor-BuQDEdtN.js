import { r as t } from './react-vendor-BI367zWJ.js';
import { j as n } from './ui-vendor-uWBPbD_0.js';
function e(t, n) {
  return null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function r(t, n) {
  return null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function i(t) {
  let n, i, a;
  function u(t, e, r = 0, o = t.length) {
    if (r < o) {
      if (0 !== n(e, e)) return o;
      do {
        const n = (r + o) >>> 1;
        i(t[n], e) < 0 ? (r = n + 1) : (o = n);
      } while (r < o);
    }
    return r;
  }
  return (
    2 !== t.length
      ? ((n = e), (i = (n, r) => e(t(n), r)), (a = (n, e) => t(n) - e))
      : ((n = t === e || t === r ? t : o), (i = t), (a = t)),
    {
      left: u,
      center: function (t, n, e = 0, r = t.length) {
        const i = u(t, n, e, r - 1);
        return i > e && a(t[i - 1], n) > -a(t[i], n) ? i - 1 : i;
      },
      right: function (t, e, r = 0, o = t.length) {
        if (r < o) {
          if (0 !== n(e, e)) return o;
          do {
            const n = (r + o) >>> 1;
            i(t[n], e) <= 0 ? (r = n + 1) : (o = n);
          } while (r < o);
        }
        return r;
      },
    }
  );
}
function o() {
  return 0;
}
const a = i(e).right;
i(function (t) {
  return null === t ? NaN : +t;
}).center;
class u extends Map {
  constructor(t, n = h) {
    if (
      (super(),
      Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: n } }),
      null != t)
    )
      for (const [e, r] of t) this.set(e, r);
  }
  get(t) {
    return super.get(s(this, t));
  }
  has(t) {
    return super.has(s(this, t));
  }
  set(t, n) {
    return super.set(
      (function ({ _intern: t, _key: n }, e) {
        const r = n(e);
        return t.has(r) ? t.get(r) : (t.set(r, e), e);
      })(this, t),
      n
    );
  }
  delete(t) {
    return super.delete(
      (function ({ _intern: t, _key: n }, e) {
        const r = n(e);
        t.has(r) && ((e = t.get(r)), t.delete(r));
        return e;
      })(this, t)
    );
  }
}
function s({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function h(t) {
  return null !== t && 'object' == typeof t ? t.valueOf() : t;
}
const c = Math.sqrt(50),
  l = Math.sqrt(10),
  f = Math.sqrt(2);
function p(t, n, e) {
  const r = (n - t) / Math.max(0, e),
    i = Math.floor(Math.log10(r)),
    o = r / Math.pow(10, i),
    a = o >= c ? 10 : o >= l ? 5 : o >= f ? 2 : 1;
  let u, s, h;
  return (
    i < 0
      ? ((h = Math.pow(10, -i) / a),
        (u = Math.round(t * h)),
        (s = Math.round(n * h)),
        u / h < t && ++u,
        s / h > n && --s,
        (h = -h))
      : ((h = Math.pow(10, i) * a),
        (u = Math.round(t / h)),
        (s = Math.round(n / h)),
        u * h < t && ++u,
        s * h > n && --s),
    s < u && 0.5 <= e && e < 2 ? p(t, n, 2 * e) : [u, s, h]
  );
}
function _(t, n, e) {
  return p((t = +t), (n = +n), (e = +e))[2];
}
function y(t, n, e) {
  e = +e;
  const r = (n = +n) < (t = +t),
    i = r ? _(n, t, e) : _(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function d(t, n) {
  let e;
  if (void 0 === n) for (const r of t) null != r && (e < r || (void 0 === e && r >= r)) && (e = r);
  else {
    let r = -1;
    for (let i of t) null != (i = n(i, ++r, t)) && (e < i || (void 0 === e && i >= i)) && (e = i);
  }
  return e;
}
function g(t, n) {
  let e;
  if (void 0 === n) for (const r of t) null != r && (e > r || (void 0 === e && r >= r)) && (e = r);
  else {
    let r = -1;
    for (let i of t) null != (i = n(i, ++r, t)) && (e > i || (void 0 === e && i >= i)) && (e = i);
  }
  return e;
}
function v(t) {
  return t;
}
var m = 1e-6;
function x(t) {
  return 'translate(' + t + ',0)';
}
function w(t) {
  return 'translate(0,' + t + ')';
}
function b(t) {
  return (n) => +t(n);
}
function M(t, n) {
  return (
    (n = Math.max(0, t.bandwidth() - 2 * n) / 2),
    t.round() && (n = Math.round(n)),
    (e) => +t(e) + n
  );
}
function k() {
  return !this.__axis;
}
function N(t, n) {
  var e = [],
    r = null,
    i = null,
    o = 6,
    a = 6,
    u = 3,
    s = 'undefined' != typeof window && window.devicePixelRatio > 1 ? 0 : 0.5,
    h = 1 === t || 4 === t ? -1 : 1,
    c = 4 === t || 2 === t ? 'x' : 'y',
    l = 1 === t || 3 === t ? x : w;
  function f(f) {
    var p = null == r ? (n.ticks ? n.ticks.apply(n, e) : n.domain()) : r,
      _ = null == i ? (n.tickFormat ? n.tickFormat.apply(n, e) : v) : i,
      y = Math.max(o, 0) + u,
      d = n.range(),
      g = +d[0] + s,
      x = +d[d.length - 1] + s,
      w = (n.bandwidth ? M : b)(n.copy(), s),
      N = f.selection ? f.selection() : f,
      T = N.selectAll('.domain').data([null]),
      A = N.selectAll('.tick').data(p, n).order(),
      E = A.exit(),
      S = A.enter().append('g').attr('class', 'tick'),
      $ = A.select('line'),
      C = A.select('text');
    ((T = T.merge(
      T.enter().insert('path', '.tick').attr('class', 'domain').attr('stroke', 'currentColor')
    )),
      (A = A.merge(S)),
      ($ = $.merge(
        S.append('line')
          .attr('stroke', 'currentColor')
          .attr(c + '2', h * o)
      )),
      (C = C.merge(
        S.append('text')
          .attr('fill', 'currentColor')
          .attr(c, h * y)
          .attr('dy', 1 === t ? '0em' : 3 === t ? '0.71em' : '0.32em')
      )),
      f !== N &&
        ((T = T.transition(f)),
        (A = A.transition(f)),
        ($ = $.transition(f)),
        (C = C.transition(f)),
        (E = E.transition(f)
          .attr('opacity', m)
          .attr('transform', function (t) {
            return isFinite((t = w(t))) ? l(t + s) : this.getAttribute('transform');
          })),
        S.attr('opacity', m).attr('transform', function (t) {
          var n = this.parentNode.__axis;
          return l((n && isFinite((n = n(t))) ? n : w(t)) + s);
        })),
      E.remove(),
      T.attr(
        'd',
        4 === t || 2 === t
          ? a
            ? 'M' + h * a + ',' + g + 'H' + s + 'V' + x + 'H' + h * a
            : 'M' + s + ',' + g + 'V' + x
          : a
            ? 'M' + g + ',' + h * a + 'V' + s + 'H' + x + 'V' + h * a
            : 'M' + g + ',' + s + 'H' + x
      ),
      A.attr('opacity', 1).attr('transform', function (t) {
        return l(w(t) + s);
      }),
      $.attr(c + '2', h * o),
      C.attr(c, h * y).text(_),
      N.filter(k)
        .attr('fill', 'none')
        .attr('font-size', 10)
        .attr('font-family', 'sans-serif')
        .attr('text-anchor', 2 === t ? 'start' : 4 === t ? 'end' : 'middle'),
      N.each(function () {
        this.__axis = w;
      }));
  }
  return (
    (f.scale = function (t) {
      return arguments.length ? ((n = t), f) : n;
    }),
    (f.ticks = function () {
      return ((e = Array.from(arguments)), f);
    }),
    (f.tickArguments = function (t) {
      return arguments.length ? ((e = null == t ? [] : Array.from(t)), f) : e.slice();
    }),
    (f.tickValues = function (t) {
      return arguments.length ? ((r = null == t ? null : Array.from(t)), f) : r && r.slice();
    }),
    (f.tickFormat = function (t) {
      return arguments.length ? ((i = t), f) : i;
    }),
    (f.tickSize = function (t) {
      return arguments.length ? ((o = a = +t), f) : o;
    }),
    (f.tickSizeInner = function (t) {
      return arguments.length ? ((o = +t), f) : o;
    }),
    (f.tickSizeOuter = function (t) {
      return arguments.length ? ((a = +t), f) : a;
    }),
    (f.tickPadding = function (t) {
      return arguments.length ? ((u = +t), f) : u;
    }),
    (f.offset = function (t) {
      return arguments.length ? ((s = +t), f) : s;
    }),
    f
  );
}
function T(t) {
  return N(1, t);
}
function A(t) {
  return N(3, t);
}
var E = { value: () => {} };
function S() {
  for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
    if (!(t = arguments[n] + '') || t in r || /[\s.]/.test(t))
      throw new Error('illegal type: ' + t);
    r[t] = [];
  }
  return new $(r);
}
function $(t) {
  this._ = t;
}
function C(t, n) {
  for (var e, r = 0, i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value;
}
function z(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      ((t[r] = E), (t = t.slice(0, r).concat(t.slice(r + 1))));
      break;
    }
  return (null != e && t.push({ name: n, value: e }), t);
}
$.prototype = S.prototype = {
  constructor: $,
  on: function (t, n) {
    var e,
      r,
      i = this._,
      o =
        ((r = i),
        (t + '')
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = '',
              e = t.indexOf('.');
            if ((e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))), t && !r.hasOwnProperty(t)))
              throw new Error('unknown type: ' + t);
            return { type: t, name: n };
          })),
      a = -1,
      u = o.length;
    if (!(arguments.length < 2)) {
      if (null != n && 'function' != typeof n) throw new Error('invalid callback: ' + n);
      for (; ++a < u; )
        if ((e = (t = o[a]).type)) i[e] = z(i[e], t.name, n);
        else if (null == n) for (e in i) i[e] = z(i[e], t.name, null);
      return this;
    }
    for (; ++a < u; ) if ((e = (t = o[a]).type) && (e = C(i[e], t.name))) return e;
  },
  copy: function () {
    var t = {},
      n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new $(t);
  },
  call: function (t, n) {
    if ((e = arguments.length - 2) > 0)
      for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
    for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i);
  },
  apply: function (t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  },
};
var D = 'http://www.w3.org/1999/xhtml';
const U = {
  svg: 'http://www.w3.org/2000/svg',
  xhtml: D,
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xmlns: 'http://www.w3.org/2000/xmlns/',
};
function P(t) {
  var n = (t += ''),
    e = n.indexOf(':');
  return (
    e >= 0 && 'xmlns' !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
    U.hasOwnProperty(n) ? { space: U[n], local: t } : t
  );
}
function q(t) {
  return function () {
    var n = this.ownerDocument,
      e = this.namespaceURI;
    return e === D && n.documentElement.namespaceURI === D
      ? n.createElement(t)
      : n.createElementNS(e, t);
  };
}
function Y(t) {
  return function () {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function j(t) {
  var n = P(t);
  return (n.local ? Y : q)(n);
}
function H() {}
function F(t) {
  return null == t
    ? H
    : function () {
        return this.querySelector(t);
      };
}
function X() {
  return [];
}
function L(t) {
  return null == t
    ? X
    : function () {
        return this.querySelectorAll(t);
      };
}
function O(t) {
  return function () {
    return null == (n = t.apply(this, arguments)) ? [] : Array.isArray(n) ? n : Array.from(n);
    var n;
  };
}
function R(t) {
  return function () {
    return this.matches(t);
  };
}
function I(t) {
  return function (n) {
    return n.matches(t);
  };
}
var B = Array.prototype.find;
function V() {
  return this.firstElementChild;
}
var W = Array.prototype.filter;
function Z() {
  return Array.from(this.children);
}
function G(t) {
  return new Array(t.length);
}
function Q(t, n) {
  ((this.ownerDocument = t.ownerDocument),
    (this.namespaceURI = t.namespaceURI),
    (this._next = null),
    (this._parent = t),
    (this.__data__ = n));
}
function J(t, n, e, r, i, o) {
  for (var a, u = 0, s = n.length, h = o.length; u < h; ++u)
    (a = n[u]) ? ((a.__data__ = o[u]), (r[u] = a)) : (e[u] = new Q(t, o[u]));
  for (; u < s; ++u) (a = n[u]) && (i[u] = a);
}
function K(t, n, e, r, i, o, a) {
  var u,
    s,
    h,
    c = new Map(),
    l = n.length,
    f = o.length,
    p = new Array(l);
  for (u = 0; u < l; ++u)
    (s = n[u]) &&
      ((p[u] = h = a.call(s, s.__data__, u, n) + ''), c.has(h) ? (i[u] = s) : c.set(h, s));
  for (u = 0; u < f; ++u)
    ((h = a.call(t, o[u], u, o) + ''),
      (s = c.get(h)) ? ((r[u] = s), (s.__data__ = o[u]), c.delete(h)) : (e[u] = new Q(t, o[u])));
  for (u = 0; u < l; ++u) (s = n[u]) && c.get(p[u]) === s && (i[u] = s);
}
function tt(t) {
  return t.__data__;
}
function nt(t) {
  return 'object' == typeof t && 'length' in t ? t : Array.from(t);
}
function et(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function rt(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function it(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ot(t, n) {
  return function () {
    this.setAttribute(t, n);
  };
}
function at(t, n) {
  return function () {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function ut(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function st(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function ht(t) {
  return (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView;
}
function ct(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function lt(t, n, e) {
  return function () {
    this.style.setProperty(t, n, e);
  };
}
function ft(t, n, e) {
  return function () {
    var r = n.apply(this, arguments);
    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function pt(t, n) {
  return t.style.getPropertyValue(n) || ht(t).getComputedStyle(t, null).getPropertyValue(n);
}
function _t(t) {
  return function () {
    delete this[t];
  };
}
function yt(t, n) {
  return function () {
    this[t] = n;
  };
}
function dt(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    null == e ? delete this[t] : (this[t] = e);
  };
}
function gt(t) {
  return t.trim().split(/^|\s+/);
}
function vt(t) {
  return t.classList || new mt(t);
}
function mt(t) {
  ((this._node = t), (this._names = gt(t.getAttribute('class') || '')));
}
function xt(t, n) {
  for (var e = vt(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function wt(t, n) {
  for (var e = vt(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function bt(t) {
  return function () {
    xt(this, t);
  };
}
function Mt(t) {
  return function () {
    wt(this, t);
  };
}
function kt(t, n) {
  return function () {
    (n.apply(this, arguments) ? xt : wt)(this, t);
  };
}
function Nt() {
  this.textContent = '';
}
function Tt(t) {
  return function () {
    this.textContent = t;
  };
}
function At(t) {
  return function () {
    var n = t.apply(this, arguments);
    this.textContent = null == n ? '' : n;
  };
}
function Et() {
  this.innerHTML = '';
}
function St(t) {
  return function () {
    this.innerHTML = t;
  };
}
function $t(t) {
  return function () {
    var n = t.apply(this, arguments);
    this.innerHTML = null == n ? '' : n;
  };
}
function Ct() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function zt() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Dt() {
  return null;
}
function Ut() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Pt() {
  var t = this.cloneNode(!1),
    n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function qt() {
  var t = this.cloneNode(!0),
    n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Yt(t) {
  return function () {
    var n = this.__on;
    if (n) {
      for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
        ((e = n[r]),
          (t.type && e.type !== t.type) || e.name !== t.name
            ? (n[++i] = e)
            : this.removeEventListener(e.type, e.listener, e.options));
      ++i ? (n.length = i) : delete this.__on;
    }
  };
}
function jt(t, n, e) {
  return function () {
    var r,
      i = this.__on,
      o = (function (t) {
        return function (n) {
          t.call(this, n, this.__data__);
        };
      })(n);
    if (i)
      for (var a = 0, u = i.length; a < u; ++a)
        if ((r = i[a]).type === t.type && r.name === t.name)
          return (
            this.removeEventListener(r.type, r.listener, r.options),
            this.addEventListener(r.type, (r.listener = o), (r.options = e)),
            void (r.value = n)
          );
    (this.addEventListener(t.type, o, e),
      (r = { type: t.type, name: t.name, value: n, listener: o, options: e }),
      i ? i.push(r) : (this.__on = [r]));
  };
}
function Ht(t, n, e) {
  var r = ht(t),
    i = r.CustomEvent;
  ('function' == typeof i
    ? (i = new i(n, e))
    : ((i = r.document.createEvent('Event')),
      e
        ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
        : i.initEvent(n, !1, !1)),
    t.dispatchEvent(i));
}
function Ft(t, n) {
  return function () {
    return Ht(this, t, n);
  };
}
function Xt(t, n) {
  return function () {
    return Ht(this, t, n.apply(this, arguments));
  };
}
((Q.prototype = {
  constructor: Q,
  appendChild: function (t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function (t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function (t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function (t) {
    return this._parent.querySelectorAll(t);
  },
}),
  (mt.prototype = {
    add: function (t) {
      this._names.indexOf(t) < 0 &&
        (this._names.push(t), this._node.setAttribute('class', this._names.join(' ')));
    },
    remove: function (t) {
      var n = this._names.indexOf(t);
      n >= 0 && (this._names.splice(n, 1), this._node.setAttribute('class', this._names.join(' ')));
    },
    contains: function (t) {
      return this._names.indexOf(t) >= 0;
    },
  }));
var Lt = [null];
function Ot(t, n) {
  ((this._groups = t), (this._parents = n));
}
function Rt() {
  return new Ot([[document.documentElement]], Lt);
}
function It(t) {
  return 'string' == typeof t
    ? new Ot([[document.querySelector(t)]], [document.documentElement])
    : new Ot([[t]], Lt);
}
function Bt(t, n, e) {
  ((t.prototype = n.prototype = e), (e.constructor = t));
}
function Vt(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Wt() {}
Ot.prototype = Rt.prototype = {
  constructor: Ot,
  select: function (t) {
    'function' != typeof t && (t = F(t));
    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
      for (var o, a, u = n[i], s = u.length, h = (r[i] = new Array(s)), c = 0; c < s; ++c)
        (o = u[c]) &&
          (a = t.call(o, o.__data__, c, u)) &&
          ('__data__' in o && (a.__data__ = o.__data__), (h[c] = a));
    return new Ot(r, this._parents);
  },
  selectAll: function (t) {
    t = 'function' == typeof t ? O(t) : L(t);
    for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
      for (var a, u = n[o], s = u.length, h = 0; h < s; ++h)
        (a = u[h]) && (r.push(t.call(a, a.__data__, h, u)), i.push(a));
    return new Ot(r, i);
  },
  selectChild: function (t) {
    return this.select(
      null == t
        ? V
        : (function (t) {
            return function () {
              return B.call(this.children, t);
            };
          })('function' == typeof t ? t : I(t))
    );
  },
  selectChildren: function (t) {
    return this.selectAll(
      null == t
        ? Z
        : (function (t) {
            return function () {
              return W.call(this.children, t);
            };
          })('function' == typeof t ? t : I(t))
    );
  },
  filter: function (t) {
    'function' != typeof t && (t = R(t));
    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
      for (var o, a = n[i], u = a.length, s = (r[i] = []), h = 0; h < u; ++h)
        (o = a[h]) && t.call(o, o.__data__, h, a) && s.push(o);
    return new Ot(r, this._parents);
  },
  data: function (t, n) {
    if (!arguments.length) return Array.from(this, tt);
    var e,
      r = n ? K : J,
      i = this._parents,
      o = this._groups;
    'function' != typeof t &&
      ((e = t),
      (t = function () {
        return e;
      }));
    for (
      var a = o.length, u = new Array(a), s = new Array(a), h = new Array(a), c = 0;
      c < a;
      ++c
    ) {
      var l = i[c],
        f = o[c],
        p = f.length,
        _ = nt(t.call(l, l && l.__data__, c, i)),
        y = _.length,
        d = (s[c] = new Array(y)),
        g = (u[c] = new Array(y));
      r(l, f, d, g, (h[c] = new Array(p)), _, n);
      for (var v, m, x = 0, w = 0; x < y; ++x)
        if ((v = d[x])) {
          for (x >= w && (w = x + 1); !(m = g[w]) && ++w < y; );
          v._next = m || null;
        }
    }
    return (((u = new Ot(u, i))._enter = s), (u._exit = h), u);
  },
  enter: function () {
    return new Ot(this._enter || this._groups.map(G), this._parents);
  },
  exit: function () {
    return new Ot(this._exit || this._groups.map(G), this._parents);
  },
  join: function (t, n, e) {
    var r = this.enter(),
      i = this,
      o = this.exit();
    return (
      'function' == typeof t ? (r = t(r)) && (r = r.selection()) : (r = r.append(t + '')),
      null != n && (i = n(i)) && (i = i.selection()),
      null == e ? o.remove() : e(o),
      r && i ? r.merge(i).order() : i
    );
  },
  merge: function (t) {
    for (
      var n = t.selection ? t.selection() : t,
        e = this._groups,
        r = n._groups,
        i = e.length,
        o = r.length,
        a = Math.min(i, o),
        u = new Array(i),
        s = 0;
      s < a;
      ++s
    )
      for (var h, c = e[s], l = r[s], f = c.length, p = (u[s] = new Array(f)), _ = 0; _ < f; ++_)
        (h = c[_] || l[_]) && (p[_] = h);
    for (; s < i; ++s) u[s] = e[s];
    return new Ot(u, this._parents);
  },
  selection: function () {
    return this;
  },
  order: function () {
    for (var t = this._groups, n = -1, e = t.length; ++n < e; )
      for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0; )
        (r = i[o]) &&
          (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), (a = r));
    return this;
  },
  sort: function (t) {
    function n(n, e) {
      return n && e ? t(n.__data__, e.__data__) : !n - !e;
    }
    t || (t = et);
    for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
      for (var a, u = e[o], s = u.length, h = (i[o] = new Array(s)), c = 0; c < s; ++c)
        (a = u[c]) && (h[c] = a);
      h.sort(n);
    }
    return new Ot(i, this._parents).order();
  },
  call: function () {
    var t = arguments[0];
    return ((arguments[0] = this), t.apply(null, arguments), this);
  },
  nodes: function () {
    return Array.from(this);
  },
  node: function () {
    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
      for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
        var a = r[i];
        if (a) return a;
      }
    return null;
  },
  size: function () {
    let t = 0;
    for (const n of this) ++t;
    return t;
  },
  empty: function () {
    return !this.node();
  },
  each: function (t) {
    for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
      for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)
        (i = o[a]) && t.call(i, i.__data__, a, o);
    return this;
  },
  attr: function (t, n) {
    var e = P(t);
    if (arguments.length < 2) {
      var r = this.node();
      return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
    }
    return this.each(
      (null == n
        ? e.local
          ? it
          : rt
        : 'function' == typeof n
          ? e.local
            ? st
            : ut
          : e.local
            ? at
            : ot)(e, n)
    );
  },
  style: function (t, n, e) {
    return arguments.length > 1
      ? this.each((null == n ? ct : 'function' == typeof n ? ft : lt)(t, n, null == e ? '' : e))
      : pt(this.node(), t);
  },
  property: function (t, n) {
    return arguments.length > 1
      ? this.each((null == n ? _t : 'function' == typeof n ? dt : yt)(t, n))
      : this.node()[t];
  },
  classed: function (t, n) {
    var e = gt(t + '');
    if (arguments.length < 2) {
      for (var r = vt(this.node()), i = -1, o = e.length; ++i < o; )
        if (!r.contains(e[i])) return !1;
      return !0;
    }
    return this.each(('function' == typeof n ? kt : n ? bt : Mt)(e, n));
  },
  text: function (t) {
    return arguments.length
      ? this.each(null == t ? Nt : ('function' == typeof t ? At : Tt)(t))
      : this.node().textContent;
  },
  html: function (t) {
    return arguments.length
      ? this.each(null == t ? Et : ('function' == typeof t ? $t : St)(t))
      : this.node().innerHTML;
  },
  raise: function () {
    return this.each(Ct);
  },
  lower: function () {
    return this.each(zt);
  },
  append: function (t) {
    var n = 'function' == typeof t ? t : j(t);
    return this.select(function () {
      return this.appendChild(n.apply(this, arguments));
    });
  },
  insert: function (t, n) {
    var e = 'function' == typeof t ? t : j(t),
      r = null == n ? Dt : 'function' == typeof n ? n : F(n);
    return this.select(function () {
      return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
    });
  },
  remove: function () {
    return this.each(Ut);
  },
  clone: function (t) {
    return this.select(t ? qt : Pt);
  },
  datum: function (t) {
    return arguments.length ? this.property('__data__', t) : this.node().__data__;
  },
  on: function (t, n, e) {
    var r,
      i,
      o = (function (t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = '',
              e = t.indexOf('.');
            return (e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))), { type: t, name: n });
          });
      })(t + ''),
      a = o.length;
    if (!(arguments.length < 2)) {
      for (u = n ? jt : Yt, r = 0; r < a; ++r) this.each(u(o[r], n, e));
      return this;
    }
    var u = this.node().__on;
    if (u)
      for (var s, h = 0, c = u.length; h < c; ++h)
        for (r = 0, s = u[h]; r < a; ++r)
          if ((i = o[r]).type === s.type && i.name === s.name) return s.value;
  },
  dispatch: function (t, n) {
    return this.each(('function' == typeof n ? Xt : Ft)(t, n));
  },
  [Symbol.iterator]: function* () {
    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
      for (var r, i = t[n], o = 0, a = i.length; o < a; ++o) (r = i[o]) && (yield r);
  },
};
var Zt = 0.7,
  Gt = 1 / Zt,
  Qt = '\\s*([+-]?\\d+)\\s*',
  Jt = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  Kt = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  tn = /^#([0-9a-f]{3,8})$/,
  nn = new RegExp(`^rgb\\(${Qt},${Qt},${Qt}\\)$`),
  en = new RegExp(`^rgb\\(${Kt},${Kt},${Kt}\\)$`),
  rn = new RegExp(`^rgba\\(${Qt},${Qt},${Qt},${Jt}\\)$`),
  on = new RegExp(`^rgba\\(${Kt},${Kt},${Kt},${Jt}\\)$`),
  an = new RegExp(`^hsl\\(${Jt},${Kt},${Kt}\\)$`),
  un = new RegExp(`^hsla\\(${Jt},${Kt},${Kt},${Jt}\\)$`),
  sn = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
function hn() {
  return this.rgb().formatHex();
}
function cn() {
  return this.rgb().formatRgb();
}
function ln(t) {
  var n, e;
  return (
    (t = (t + '').trim().toLowerCase()),
    (n = tn.exec(t))
      ? ((e = n[1].length),
        (n = parseInt(n[1], 16)),
        6 === e
          ? fn(n)
          : 3 === e
            ? new dn(
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                ((15 & n) << 4) | (15 & n),
                1
              )
            : 8 === e
              ? pn((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (255 & n) / 255)
              : 4 === e
                ? pn(
                    ((n >> 12) & 15) | ((n >> 8) & 240),
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (240 & n),
                    (((15 & n) << 4) | (15 & n)) / 255
                  )
                : null)
      : (n = nn.exec(t))
        ? new dn(n[1], n[2], n[3], 1)
        : (n = en.exec(t))
          ? new dn((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
          : (n = rn.exec(t))
            ? pn(n[1], n[2], n[3], n[4])
            : (n = on.exec(t))
              ? pn((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
              : (n = an.exec(t))
                ? bn(n[1], n[2] / 100, n[3] / 100, 1)
                : (n = un.exec(t))
                  ? bn(n[1], n[2] / 100, n[3] / 100, n[4])
                  : sn.hasOwnProperty(t)
                    ? fn(sn[t])
                    : 'transparent' === t
                      ? new dn(NaN, NaN, NaN, 0)
                      : null
  );
}
function fn(t) {
  return new dn((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
}
function pn(t, n, e, r) {
  return (r <= 0 && (t = n = e = NaN), new dn(t, n, e, r));
}
function _n(t) {
  return (
    t instanceof Wt || (t = ln(t)),
    t ? new dn((t = t.rgb()).r, t.g, t.b, t.opacity) : new dn()
  );
}
function yn(t, n, e, r) {
  return 1 === arguments.length ? _n(t) : new dn(t, n, e, null == r ? 1 : r);
}
function dn(t, n, e, r) {
  ((this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r));
}
function gn() {
  return `#${wn(this.r)}${wn(this.g)}${wn(this.b)}`;
}
function vn() {
  const t = mn(this.opacity);
  return `${1 === t ? 'rgb(' : 'rgba('}${xn(this.r)}, ${xn(this.g)}, ${xn(this.b)}${1 === t ? ')' : `, ${t})`}`;
}
function mn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function xn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function wn(t) {
  return ((t = xn(t)) < 16 ? '0' : '') + t.toString(16);
}
function bn(t, n, e, r) {
  return (
    r <= 0 ? (t = n = e = NaN) : e <= 0 || e >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN),
    new kn(t, n, e, r)
  );
}
function Mn(t) {
  if (t instanceof kn) return new kn(t.h, t.s, t.l, t.opacity);
  if ((t instanceof Wt || (t = ln(t)), !t)) return new kn();
  if (t instanceof kn) return t;
  var n = (t = t.rgb()).r / 255,
    e = t.g / 255,
    r = t.b / 255,
    i = Math.min(n, e, r),
    o = Math.max(n, e, r),
    a = NaN,
    u = o - i,
    s = (o + i) / 2;
  return (
    u
      ? ((a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4),
        (u /= s < 0.5 ? o + i : 2 - o - i),
        (a *= 60))
      : (u = s > 0 && s < 1 ? 0 : a),
    new kn(a, u, s, t.opacity)
  );
}
function kn(t, n, e, r) {
  ((this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r));
}
function Nn(t) {
  return (t = (t || 0) % 360) < 0 ? t + 360 : t;
}
function Tn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function An(t, n, e) {
  return (
    255 *
    (t < 60 ? n + ((e - n) * t) / 60 : t < 180 ? e : t < 240 ? n + ((e - n) * (240 - t)) / 60 : n)
  );
}
(Bt(Wt, ln, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hn,
  formatHex: hn,
  formatHex8: function () {
    return this.rgb().formatHex8();
  },
  formatHsl: function () {
    return Mn(this).formatHsl();
  },
  formatRgb: cn,
  toString: cn,
}),
  Bt(
    dn,
    yn,
    Vt(Wt, {
      brighter(t) {
        return (
          (t = null == t ? Gt : Math.pow(Gt, t)),
          new dn(this.r * t, this.g * t, this.b * t, this.opacity)
        );
      },
      darker(t) {
        return (
          (t = null == t ? Zt : Math.pow(Zt, t)),
          new dn(this.r * t, this.g * t, this.b * t, this.opacity)
        );
      },
      rgb() {
        return this;
      },
      clamp() {
        return new dn(xn(this.r), xn(this.g), xn(this.b), mn(this.opacity));
      },
      displayable() {
        return (
          -0.5 <= this.r &&
          this.r < 255.5 &&
          -0.5 <= this.g &&
          this.g < 255.5 &&
          -0.5 <= this.b &&
          this.b < 255.5 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      hex: gn,
      formatHex: gn,
      formatHex8: function () {
        return `#${wn(this.r)}${wn(this.g)}${wn(this.b)}${wn(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
      },
      formatRgb: vn,
      toString: vn,
    })
  ),
  Bt(
    kn,
    function (t, n, e, r) {
      return 1 === arguments.length ? Mn(t) : new kn(t, n, e, null == r ? 1 : r);
    },
    Vt(Wt, {
      brighter(t) {
        return (
          (t = null == t ? Gt : Math.pow(Gt, t)),
          new kn(this.h, this.s, this.l * t, this.opacity)
        );
      },
      darker(t) {
        return (
          (t = null == t ? Zt : Math.pow(Zt, t)),
          new kn(this.h, this.s, this.l * t, this.opacity)
        );
      },
      rgb() {
        var t = (this.h % 360) + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < 0.5 ? e : 1 - e) * n,
          i = 2 * e - r;
        return new dn(
          An(t >= 240 ? t - 240 : t + 120, i, r),
          An(t, i, r),
          An(t < 120 ? t + 240 : t - 120, i, r),
          this.opacity
        );
      },
      clamp() {
        return new kn(Nn(this.h), Tn(this.s), Tn(this.l), mn(this.opacity));
      },
      displayable() {
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      formatHsl() {
        const t = mn(this.opacity);
        return `${1 === t ? 'hsl(' : 'hsla('}${Nn(this.h)}, ${100 * Tn(this.s)}%, ${100 * Tn(this.l)}%${1 === t ? ')' : `, ${t})`}`;
      },
    })
  ));
const En = Math.PI / 180,
  Sn = 180 / Math.PI,
  $n = 0.96422,
  Cn = 0.82521,
  zn = 4 / 29,
  Dn = 6 / 29,
  Un = 3 * Dn * Dn,
  Pn = Dn * Dn * Dn;
function qn(t) {
  if (t instanceof Yn) return new Yn(t.l, t.a, t.b, t.opacity);
  if (t instanceof On) return Rn(t);
  t instanceof dn || (t = _n(t));
  var n,
    e,
    r = Xn(t.r),
    i = Xn(t.g),
    o = Xn(t.b),
    a = jn((0.2225045 * r + 0.7168786 * i + 0.0606169 * o) / 1);
  return (
    r === i && i === o
      ? (n = e = a)
      : ((n = jn((0.4360747 * r + 0.3850649 * i + 0.1430804 * o) / $n)),
        (e = jn((0.0139322 * r + 0.0971045 * i + 0.7141733 * o) / Cn))),
    new Yn(116 * a - 16, 500 * (n - a), 200 * (a - e), t.opacity)
  );
}
function Yn(t, n, e, r) {
  ((this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r));
}
function jn(t) {
  return t > Pn ? Math.pow(t, 1 / 3) : t / Un + zn;
}
function Hn(t) {
  return t > Dn ? t * t * t : Un * (t - zn);
}
function Fn(t) {
  return 255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
}
function Xn(t) {
  return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function Ln(t, n, e, r) {
  return 1 === arguments.length
    ? (function (t) {
        if (t instanceof On) return new On(t.h, t.c, t.l, t.opacity);
        if ((t instanceof Yn || (t = qn(t)), 0 === t.a && 0 === t.b))
          return new On(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * Sn;
        return new On(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
      })(t)
    : new On(t, n, e, null == r ? 1 : r);
}
function On(t, n, e, r) {
  ((this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r));
}
function Rn(t) {
  if (isNaN(t.h)) return new Yn(t.l, 0, 0, t.opacity);
  var n = t.h * En;
  return new Yn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
}
(Bt(
  Yn,
  function (t, n, e, r) {
    return 1 === arguments.length ? qn(t) : new Yn(t, n, e, null == r ? 1 : r);
  },
  Vt(Wt, {
    brighter(t) {
      return new Yn(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    },
    darker(t) {
      return new Yn(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    },
    rgb() {
      var t = (this.l + 16) / 116,
        n = isNaN(this.a) ? t : t + this.a / 500,
        e = isNaN(this.b) ? t : t - this.b / 200;
      return new dn(
        Fn(
          3.1338561 * (n = $n * Hn(n)) - 1.6168667 * (t = 1 * Hn(t)) - 0.4906146 * (e = Cn * Hn(e))
        ),
        Fn(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
        Fn(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
        this.opacity
      );
    },
  })
),
  Bt(
    On,
    Ln,
    Vt(Wt, {
      brighter(t) {
        return new On(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
      },
      darker(t) {
        return new On(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
      },
      rgb() {
        return Rn(this).rgb();
      },
    })
  ));
const In = (t) => () => t;
function Bn(t, n) {
  return function (e) {
    return t + e * n;
  };
}
function Vn(t) {
  return 1 === (t = +t)
    ? Wn
    : function (n, e) {
        return e - n
          ? (function (t, n, e) {
              return (
                (t = Math.pow(t, e)),
                (n = Math.pow(n, e) - t),
                (e = 1 / e),
                function (r) {
                  return Math.pow(t + r * n, e);
                }
              );
            })(n, e, t)
          : In(isNaN(n) ? e : n);
      };
}
function Wn(t, n) {
  var e = n - t;
  return e ? Bn(t, e) : In(isNaN(t) ? n : t);
}
const Zn = (function t(n) {
  var e = Vn(n);
  function r(t, n) {
    var r = e((t = yn(t)).r, (n = yn(n)).r),
      i = e(t.g, n.g),
      o = e(t.b, n.b),
      a = Wn(t.opacity, n.opacity);
    return function (n) {
      return ((t.r = r(n)), (t.g = i(n)), (t.b = o(n)), (t.opacity = a(n)), t + '');
    };
  }
  return ((r.gamma = t), r);
})(1);
function Gn(t, n) {
  n || (n = []);
  var e,
    r = t ? Math.min(n.length, t.length) : 0,
    i = n.slice();
  return function (o) {
    for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;
    return i;
  };
}
function Qn(t, n) {
  var e,
    r = n ? n.length : 0,
    i = t ? Math.min(r, t.length) : 0,
    o = new Array(i),
    a = new Array(r);
  for (e = 0; e < i; ++e) o[e] = ie(t[e], n[e]);
  for (; e < r; ++e) a[e] = n[e];
  return function (t) {
    for (e = 0; e < i; ++e) a[e] = o[e](t);
    return a;
  };
}
function Jn(t, n) {
  var e = new Date();
  return (
    (t = +t),
    (n = +n),
    function (r) {
      return (e.setTime(t * (1 - r) + n * r), e);
    }
  );
}
function Kn(t, n) {
  return (
    (t = +t),
    (n = +n),
    function (e) {
      return t * (1 - e) + n * e;
    }
  );
}
function te(t, n) {
  var e,
    r = {},
    i = {};
  for (e in ((null !== t && 'object' == typeof t) || (t = {}),
  (null !== n && 'object' == typeof n) || (n = {}),
  n))
    e in t ? (r[e] = ie(t[e], n[e])) : (i[e] = n[e]);
  return function (t) {
    for (e in r) i[e] = r[e](t);
    return i;
  };
}
var ne = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  ee = new RegExp(ne.source, 'g');
function re(t, n) {
  var e,
    r,
    i,
    o = (ne.lastIndex = ee.lastIndex = 0),
    a = -1,
    u = [],
    s = [];
  for (t += '', n += ''; (e = ne.exec(t)) && (r = ee.exec(n)); )
    ((i = r.index) > o && ((i = n.slice(o, i)), u[a] ? (u[a] += i) : (u[++a] = i)),
      (e = e[0]) === (r = r[0])
        ? u[a]
          ? (u[a] += r)
          : (u[++a] = r)
        : ((u[++a] = null), s.push({ i: a, x: Kn(e, r) })),
      (o = ee.lastIndex));
  return (
    o < n.length && ((i = n.slice(o)), u[a] ? (u[a] += i) : (u[++a] = i)),
    u.length < 2
      ? s[0]
        ? (function (t) {
            return function (n) {
              return t(n) + '';
            };
          })(s[0].x)
        : (function (t) {
            return function () {
              return t;
            };
          })(n)
      : ((n = s.length),
        function (t) {
          for (var e, r = 0; r < n; ++r) u[(e = s[r]).i] = e.x(t);
          return u.join('');
        })
  );
}
function ie(t, n) {
  var e,
    r,
    i = typeof n;
  return null == n || 'boolean' === i
    ? In(n)
    : ('number' === i
        ? Kn
        : 'string' === i
          ? (e = ln(n))
            ? ((n = e), Zn)
            : re
          : n instanceof ln
            ? Zn
            : n instanceof Date
              ? Jn
              : ((r = n),
                !ArrayBuffer.isView(r) || r instanceof DataView
                  ? Array.isArray(n)
                    ? Qn
                    : ('function' != typeof n.valueOf && 'function' != typeof n.toString) ||
                        isNaN(n)
                      ? te
                      : Kn
                  : Gn))(t, n);
}
function oe(t, n) {
  return (
    (t = +t),
    (n = +n),
    function (e) {
      return Math.round(t * (1 - e) + n * e);
    }
  );
}
var ae,
  ue = 180 / Math.PI,
  se = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function he(t, n, e, r, i, o) {
  var a, u, s;
  return (
    (a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
    (s = t * e + n * r) && ((e -= t * s), (r -= n * s)),
    (u = Math.sqrt(e * e + r * r)) && ((e /= u), (r /= u), (s /= u)),
    t * r < n * e && ((t = -t), (n = -n), (s = -s), (a = -a)),
    {
      translateX: i,
      translateY: o,
      rotate: Math.atan2(n, t) * ue,
      skewX: Math.atan(s) * ue,
      scaleX: a,
      scaleY: u,
    }
  );
}
function ce(t, n, e, r) {
  function i(t) {
    return t.length ? t.pop() + ' ' : '';
  }
  return function (o, a) {
    var u = [],
      s = [];
    return (
      (o = t(o)),
      (a = t(a)),
      (function (t, r, i, o, a, u) {
        if (t !== i || r !== o) {
          var s = a.push('translate(', null, n, null, e);
          u.push({ i: s - 4, x: Kn(t, i) }, { i: s - 2, x: Kn(r, o) });
        } else (i || o) && a.push('translate(' + i + n + o + e);
      })(o.translateX, o.translateY, a.translateX, a.translateY, u, s),
      (function (t, n, e, o) {
        t !== n
          ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
            o.push({ i: e.push(i(e) + 'rotate(', null, r) - 2, x: Kn(t, n) }))
          : n && e.push(i(e) + 'rotate(' + n + r);
      })(o.rotate, a.rotate, u, s),
      (function (t, n, e, o) {
        t !== n
          ? o.push({ i: e.push(i(e) + 'skewX(', null, r) - 2, x: Kn(t, n) })
          : n && e.push(i(e) + 'skewX(' + n + r);
      })(o.skewX, a.skewX, u, s),
      (function (t, n, e, r, o, a) {
        if (t !== e || n !== r) {
          var u = o.push(i(o) + 'scale(', null, ',', null, ')');
          a.push({ i: u - 4, x: Kn(t, e) }, { i: u - 2, x: Kn(n, r) });
        } else (1 === e && 1 === r) || o.push(i(o) + 'scale(' + e + ',' + r + ')');
      })(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, s),
      (o = a = null),
      function (t) {
        for (var n, e = -1, r = s.length; ++e < r; ) u[(n = s[e]).i] = n.x(t);
        return u.join('');
      }
    );
  };
}
var le = ce(
    function (t) {
      const n = new ('function' == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + '');
      return n.isIdentity ? se : he(n.a, n.b, n.c, n.d, n.e, n.f);
    },
    'px, ',
    'px)',
    'deg)'
  ),
  fe = ce(
    function (t) {
      return null == t
        ? se
        : (ae || (ae = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
          ae.setAttribute('transform', t),
          (t = ae.transform.baseVal.consolidate())
            ? he((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
            : se);
    },
    ', ',
    ')',
    ')'
  );
const pe =
  ((_e = function (t, n) {
    var e = n - t;
    return e
      ? Bn(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
      : In(isNaN(t) ? n : t);
  }),
  function (t, n) {
    var e = _e((t = Ln(t)).h, (n = Ln(n)).h),
      r = Wn(t.c, n.c),
      i = Wn(t.l, n.l),
      o = Wn(t.opacity, n.opacity);
    return function (n) {
      return ((t.h = e(n)), (t.c = r(n)), (t.l = i(n)), (t.opacity = o(n)), t + '');
    };
  });
var _e,
  ye,
  de,
  ge = 0,
  ve = 0,
  me = 0,
  xe = 0,
  we = 0,
  be = 0,
  Me = 'object' == typeof performance && performance.now ? performance : Date,
  ke =
    'object' == typeof window && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (t) {
          setTimeout(t, 17);
        };
function Ne() {
  return we || (ke(Te), (we = Me.now() + be));
}
function Te() {
  we = 0;
}
function Ae() {
  this._call = this._time = this._next = null;
}
function Ee(t, n, e) {
  var r = new Ae();
  return (r.restart(t, n, e), r);
}
function Se() {
  ((we = (xe = Me.now()) + be), (ge = ve = 0));
  try {
    !(function () {
      (Ne(), ++ge);
      for (var t, n = ye; n; ) ((t = we - n._time) >= 0 && n._call.call(void 0, t), (n = n._next));
      --ge;
    })();
  } finally {
    ((ge = 0),
      (function () {
        var t,
          n,
          e = ye,
          r = 1 / 0;
        for (; e; )
          e._call
            ? (r > e._time && (r = e._time), (t = e), (e = e._next))
            : ((n = e._next), (e._next = null), (e = t ? (t._next = n) : (ye = n)));
        ((de = t), Ce(r));
      })(),
      (we = 0));
  }
}
function $e() {
  var t = Me.now(),
    n = t - xe;
  n > 1e3 && ((be -= n), (xe = t));
}
function Ce(t) {
  ge ||
    (ve && (ve = clearTimeout(ve)),
    t - we > 24
      ? (t < 1 / 0 && (ve = setTimeout(Se, t - Me.now() - be)), me && (me = clearInterval(me)))
      : (me || ((xe = Me.now()), (me = setInterval($e, 1e3))), (ge = 1), ke(Se)));
}
function ze(t, n, e) {
  var r = new Ae();
  return (
    (n = null == n ? 0 : +n),
    r.restart(
      (e) => {
        (r.stop(), t(e + n));
      },
      n,
      e
    ),
    r
  );
}
Ae.prototype = Ee.prototype = {
  constructor: Ae,
  restart: function (t, n, e) {
    if ('function' != typeof t) throw new TypeError('callback is not a function');
    ((e = (null == e ? Ne() : +e) + (null == n ? 0 : +n)),
      this._next || de === this || (de ? (de._next = this) : (ye = this), (de = this)),
      (this._call = t),
      (this._time = e),
      Ce());
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Ce());
  },
};
var De = S('start', 'end', 'cancel', 'interrupt'),
  Ue = [];
function Pe(t, n, e, r, i, o) {
  var a = t.__transition;
  if (a) {
    if (e in a) return;
  } else t.__transition = {};
  !(function (t, n, e) {
    var r,
      i = t.__transition;
    function o(t) {
      ((e.state = 1), e.timer.restart(a, e.delay, e.time), e.delay <= t && a(t - e.delay));
    }
    function a(o) {
      var h, c, l, f;
      if (1 !== e.state) return s();
      for (h in i)
        if ((f = i[h]).name === e.name) {
          if (3 === f.state) return ze(a);
          4 === f.state
            ? ((f.state = 6),
              f.timer.stop(),
              f.on.call('interrupt', t, t.__data__, f.index, f.group),
              delete i[h])
            : +h < n &&
              ((f.state = 6),
              f.timer.stop(),
              f.on.call('cancel', t, t.__data__, f.index, f.group),
              delete i[h]);
        }
      if (
        (ze(function () {
          3 === e.state && ((e.state = 4), e.timer.restart(u, e.delay, e.time), u(o));
        }),
        (e.state = 2),
        e.on.call('start', t, t.__data__, e.index, e.group),
        2 === e.state)
      ) {
        for (e.state = 3, r = new Array((l = e.tween.length)), h = 0, c = -1; h < l; ++h)
          (f = e.tween[h].value.call(t, t.__data__, e.index, e.group)) && (r[++c] = f);
        r.length = c + 1;
      }
    }
    function u(n) {
      for (
        var i =
            n < e.duration
              ? e.ease.call(null, n / e.duration)
              : (e.timer.restart(s), (e.state = 5), 1),
          o = -1,
          a = r.length;
        ++o < a;
      )
        r[o].call(t, i);
      5 === e.state && (e.on.call('end', t, t.__data__, e.index, e.group), s());
    }
    function s() {
      for (var r in ((e.state = 6), e.timer.stop(), delete i[n], i)) return;
      delete t.__transition;
    }
    ((i[n] = e), (e.timer = Ee(o, 0, e.time)));
  })(t, e, {
    name: n,
    index: r,
    group: i,
    on: De,
    tween: Ue,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: 0,
  });
}
function qe(t, n) {
  var e = je(t, n);
  if (e.state > 0) throw new Error('too late; already scheduled');
  return e;
}
function Ye(t, n) {
  var e = je(t, n);
  if (e.state > 3) throw new Error('too late; already running');
  return e;
}
function je(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error('transition not found');
  return e;
}
function He(t, n) {
  var e, r;
  return function () {
    var i = Ye(this, t),
      o = i.tween;
    if (o !== e)
      for (var a = 0, u = (r = e = o).length; a < u; ++a)
        if (r[a].name === n) {
          (r = r.slice()).splice(a, 1);
          break;
        }
    i.tween = r;
  };
}
function Fe(t, n, e) {
  var r, i;
  if ('function' != typeof e) throw new Error();
  return function () {
    var o = Ye(this, t),
      a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: n, value: e }, s = 0, h = i.length; s < h; ++s)
        if (i[s].name === n) {
          i[s] = u;
          break;
        }
      s === h && i.push(u);
    }
    o.tween = i;
  };
}
function Xe(t, n, e) {
  var r = t._id;
  return (
    t.each(function () {
      var t = Ye(this, r);
      (t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }),
    function (t) {
      return je(t, r).value[n];
    }
  );
}
function Le(t, n) {
  var e;
  return ('number' == typeof n ? Kn : n instanceof ln ? Zn : (e = ln(n)) ? ((n = e), Zn) : re)(
    t,
    n
  );
}
function Oe(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function Re(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ie(t, n, e) {
  var r,
    i,
    o = e + '';
  return function () {
    var a = this.getAttribute(t);
    return a === o ? null : a === r ? i : (i = n((r = a), e));
  };
}
function Be(t, n, e) {
  var r,
    i,
    o = e + '';
  return function () {
    var a = this.getAttributeNS(t.space, t.local);
    return a === o ? null : a === r ? i : (i = n((r = a), e));
  };
}
function Ve(t, n, e) {
  var r, i, o;
  return function () {
    var a,
      u,
      s = e(this);
    if (null != s)
      return (a = this.getAttribute(t)) === (u = s + '')
        ? null
        : a === r && u === i
          ? o
          : ((i = u), (o = n((r = a), s)));
    this.removeAttribute(t);
  };
}
function We(t, n, e) {
  var r, i, o;
  return function () {
    var a,
      u,
      s = e(this);
    if (null != s)
      return (a = this.getAttributeNS(t.space, t.local)) === (u = s + '')
        ? null
        : a === r && u === i
          ? o
          : ((i = u), (o = n((r = a), s)));
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ze(t, n) {
  var e, r;
  function i() {
    var i = n.apply(this, arguments);
    return (
      i !== r &&
        (e =
          (r = i) &&
          (function (t, n) {
            return function (e) {
              this.setAttributeNS(t.space, t.local, n.call(this, e));
            };
          })(t, i)),
      e
    );
  }
  return ((i._value = n), i);
}
function Ge(t, n) {
  var e, r;
  function i() {
    var i = n.apply(this, arguments);
    return (
      i !== r &&
        (e =
          (r = i) &&
          (function (t, n) {
            return function (e) {
              this.setAttribute(t, n.call(this, e));
            };
          })(t, i)),
      e
    );
  }
  return ((i._value = n), i);
}
function Qe(t, n) {
  return function () {
    qe(this, t).delay = +n.apply(this, arguments);
  };
}
function Je(t, n) {
  return (
    (n = +n),
    function () {
      qe(this, t).delay = n;
    }
  );
}
function Ke(t, n) {
  return function () {
    Ye(this, t).duration = +n.apply(this, arguments);
  };
}
function tr(t, n) {
  return (
    (n = +n),
    function () {
      Ye(this, t).duration = n;
    }
  );
}
var nr = Rt.prototype.constructor;
function er(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
var rr = 0;
function ir(t, n, e, r) {
  ((this._groups = t), (this._parents = n), (this._name = e), (this._id = r));
}
function or() {
  return ++rr;
}
var ar = Rt.prototype;
ir.prototype = {
  constructor: ir,
  select: function (t) {
    var n = this._name,
      e = this._id;
    'function' != typeof t && (t = F(t));
    for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
      for (var u, s, h = r[a], c = h.length, l = (o[a] = new Array(c)), f = 0; f < c; ++f)
        (u = h[f]) &&
          (s = t.call(u, u.__data__, f, h)) &&
          ('__data__' in u && (s.__data__ = u.__data__),
          (l[f] = s),
          Pe(l[f], n, e, f, l, je(u, e)));
    return new ir(o, this._parents, n, e);
  },
  selectAll: function (t) {
    var n = this._name,
      e = this._id;
    'function' != typeof t && (t = L(t));
    for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
      for (var s, h = r[u], c = h.length, l = 0; l < c; ++l)
        if ((s = h[l])) {
          for (
            var f, p = t.call(s, s.__data__, l, h), _ = je(s, e), y = 0, d = p.length;
            y < d;
            ++y
          )
            (f = p[y]) && Pe(f, n, e, y, p, _);
          (o.push(p), a.push(s));
        }
    return new ir(o, a, n, e);
  },
  selectChild: ar.selectChild,
  selectChildren: ar.selectChildren,
  filter: function (t) {
    'function' != typeof t && (t = R(t));
    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
      for (var o, a = n[i], u = a.length, s = (r[i] = []), h = 0; h < u; ++h)
        (o = a[h]) && t.call(o, o.__data__, h, a) && s.push(o);
    return new ir(r, this._parents, this._name, this._id);
  },
  merge: function (t) {
    if (t._id !== this._id) throw new Error();
    for (
      var n = this._groups,
        e = t._groups,
        r = n.length,
        i = e.length,
        o = Math.min(r, i),
        a = new Array(r),
        u = 0;
      u < o;
      ++u
    )
      for (var s, h = n[u], c = e[u], l = h.length, f = (a[u] = new Array(l)), p = 0; p < l; ++p)
        (s = h[p] || c[p]) && (f[p] = s);
    for (; u < r; ++u) a[u] = n[u];
    return new ir(a, this._parents, this._name, this._id);
  },
  selection: function () {
    return new nr(this._groups, this._parents);
  },
  transition: function () {
    for (
      var t = this._name, n = this._id, e = or(), r = this._groups, i = r.length, o = 0;
      o < i;
      ++o
    )
      for (var a, u = r[o], s = u.length, h = 0; h < s; ++h)
        if ((a = u[h])) {
          var c = je(a, n);
          Pe(a, t, e, h, u, {
            time: c.time + c.delay + c.duration,
            delay: 0,
            duration: c.duration,
            ease: c.ease,
          });
        }
    return new ir(r, this._parents, t, e);
  },
  call: ar.call,
  nodes: ar.nodes,
  node: ar.node,
  size: ar.size,
  empty: ar.empty,
  each: ar.each,
  on: function (t, n) {
    var e = this._id;
    return arguments.length < 2
      ? je(this.node(), e).on.on(t)
      : this.each(
          (function (t, n, e) {
            var r,
              i,
              o = (function (t) {
                return (t + '')
                  .trim()
                  .split(/^|\s+/)
                  .every(function (t) {
                    var n = t.indexOf('.');
                    return (n >= 0 && (t = t.slice(0, n)), !t || 'start' === t);
                  });
              })(n)
                ? qe
                : Ye;
            return function () {
              var a = o(this, t),
                u = a.on;
              (u !== r && (i = (r = u).copy()).on(n, e), (a.on = i));
            };
          })(e, t, n)
        );
  },
  attr: function (t, n) {
    var e = P(t),
      r = 'transform' === e ? fe : Le;
    return this.attrTween(
      t,
      'function' == typeof n
        ? (e.local ? We : Ve)(e, r, Xe(this, 'attr.' + t, n))
        : null == n
          ? (e.local ? Re : Oe)(e)
          : (e.local ? Be : Ie)(e, r, n)
    );
  },
  attrTween: function (t, n) {
    var e = 'attr.' + t;
    if (arguments.length < 2) return (e = this.tween(e)) && e._value;
    if (null == n) return this.tween(e, null);
    if ('function' != typeof n) throw new Error();
    var r = P(t);
    return this.tween(e, (r.local ? Ze : Ge)(r, n));
  },
  style: function (t, n, e) {
    var r = 'transform' == (t += '') ? le : Le;
    return null == n
      ? this.styleTween(
          t,
          (function (t, n) {
            var e, r, i;
            return function () {
              var o = pt(this, t),
                a = (this.style.removeProperty(t), pt(this, t));
              return o === a ? null : o === e && a === r ? i : (i = n((e = o), (r = a)));
            };
          })(t, r)
        ).on('end.style.' + t, er(t))
      : 'function' == typeof n
        ? this.styleTween(
            t,
            (function (t, n, e) {
              var r, i, o;
              return function () {
                var a = pt(this, t),
                  u = e(this),
                  s = u + '';
                return (
                  null == u && (this.style.removeProperty(t), (s = u = pt(this, t))),
                  a === s ? null : a === r && s === i ? o : ((i = s), (o = n((r = a), u)))
                );
              };
            })(t, r, Xe(this, 'style.' + t, n))
          ).each(
            (function (t, n) {
              var e,
                r,
                i,
                o,
                a = 'style.' + n,
                u = 'end.' + a;
              return function () {
                var s = Ye(this, t),
                  h = s.on,
                  c = null == s.value[a] ? o || (o = er(n)) : void 0;
                ((h === e && i === c) || (r = (e = h).copy()).on(u, (i = c)), (s.on = r));
              };
            })(this._id, t)
          )
        : this.styleTween(
            t,
            (function (t, n, e) {
              var r,
                i,
                o = e + '';
              return function () {
                var a = pt(this, t);
                return a === o ? null : a === r ? i : (i = n((r = a), e));
              };
            })(t, r, n),
            e
          ).on('end.style.' + t, null);
  },
  styleTween: function (t, n, e) {
    var r = 'style.' + (t += '');
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (null == n) return this.tween(r, null);
    if ('function' != typeof n) throw new Error();
    return this.tween(
      r,
      (function (t, n, e) {
        var r, i;
        function o() {
          var o = n.apply(this, arguments);
          return (
            o !== i &&
              (r =
                (i = o) &&
                (function (t, n, e) {
                  return function (r) {
                    this.style.setProperty(t, n.call(this, r), e);
                  };
                })(t, o, e)),
            r
          );
        }
        return ((o._value = n), o);
      })(t, n, null == e ? '' : e)
    );
  },
  text: function (t) {
    return this.tween(
      'text',
      'function' == typeof t
        ? (function (t) {
            return function () {
              var n = t(this);
              this.textContent = null == n ? '' : n;
            };
          })(Xe(this, 'text', t))
        : (function (t) {
            return function () {
              this.textContent = t;
            };
          })(null == t ? '' : t + '')
    );
  },
  textTween: function (t) {
    var n = 'text';
    if (arguments.length < 1) return (n = this.tween(n)) && n._value;
    if (null == t) return this.tween(n, null);
    if ('function' != typeof t) throw new Error();
    return this.tween(
      n,
      (function (t) {
        var n, e;
        function r() {
          var r = t.apply(this, arguments);
          return (
            r !== e &&
              (n =
                (e = r) &&
                (function (t) {
                  return function (n) {
                    this.textContent = t.call(this, n);
                  };
                })(r)),
            n
          );
        }
        return ((r._value = t), r);
      })(t)
    );
  },
  remove: function () {
    return this.on(
      'end.remove',
      ((t = this._id),
      function () {
        var n = this.parentNode;
        for (var e in this.__transition) if (+e !== t) return;
        n && n.removeChild(this);
      })
    );
    var t;
  },
  tween: function (t, n) {
    var e = this._id;
    if (((t += ''), arguments.length < 2)) {
      for (var r, i = je(this.node(), e).tween, o = 0, a = i.length; o < a; ++o)
        if ((r = i[o]).name === t) return r.value;
      return null;
    }
    return this.each((null == n ? He : Fe)(e, t, n));
  },
  delay: function (t) {
    var n = this._id;
    return arguments.length
      ? this.each(('function' == typeof t ? Qe : Je)(n, t))
      : je(this.node(), n).delay;
  },
  duration: function (t) {
    var n = this._id;
    return arguments.length
      ? this.each(('function' == typeof t ? Ke : tr)(n, t))
      : je(this.node(), n).duration;
  },
  ease: function (t) {
    var n = this._id;
    return arguments.length
      ? this.each(
          (function (t, n) {
            if ('function' != typeof n) throw new Error();
            return function () {
              Ye(this, t).ease = n;
            };
          })(n, t)
        )
      : je(this.node(), n).ease;
  },
  easeVarying: function (t) {
    if ('function' != typeof t) throw new Error();
    return this.each(
      (function (t, n) {
        return function () {
          var e = n.apply(this, arguments);
          if ('function' != typeof e) throw new Error();
          Ye(this, t).ease = e;
        };
      })(this._id, t)
    );
  },
  end: function () {
    var t,
      n,
      e = this,
      r = e._id,
      i = e.size();
    return new Promise(function (o, a) {
      var u = { value: a },
        s = {
          value: function () {
            0 === --i && o();
          },
        };
      (e.each(function () {
        var e = Ye(this, r),
          i = e.on;
        (i !== t && ((n = (t = i).copy())._.cancel.push(u), n._.interrupt.push(u), n._.end.push(s)),
          (e.on = n));
      }),
        0 === i && o());
    });
  },
  [Symbol.iterator]: ar[Symbol.iterator],
};
var ur = {
  time: null,
  delay: 0,
  duration: 250,
  ease: function (t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  },
};
function sr(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
  return e;
}
((Rt.prototype.interrupt = function (t) {
  return this.each(function () {
    !(function (t, n) {
      var e,
        r,
        i,
        o = t.__transition,
        a = !0;
      if (o) {
        for (i in ((n = null == n ? null : n + ''), o))
          (e = o[i]).name === n
            ? ((r = e.state > 2 && e.state < 5),
              (e.state = 6),
              e.timer.stop(),
              e.on.call(r ? 'interrupt' : 'cancel', t, t.__data__, e.index, e.group),
              delete o[i])
            : (a = !1);
        a && delete t.__transition;
      }
    })(this, t);
  });
}),
  (Rt.prototype.transition = function (t) {
    var n, e;
    t instanceof ir
      ? ((n = t._id), (t = t._name))
      : ((n = or()), ((e = ur).time = Ne()), (t = null == t ? null : t + ''));
    for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
      for (var a, u = r[o], s = u.length, h = 0; h < s; ++h)
        (a = u[h]) && Pe(a, t, n, h, u, e || sr(a, n));
    return new ir(r, this._parents, t, n);
  }));
const hr = Math.PI,
  cr = 2 * hr,
  lr = 1e-6,
  fr = cr - lr;
function pr(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n) this._ += arguments[n] + t[n];
}
class _r {
  constructor(t) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ''),
      (this._append =
        null == t
          ? pr
          : (function (t) {
              let n = Math.floor(t);
              if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
              if (n > 15) return pr;
              const e = 10 ** n;
              return function (t) {
                this._ += t[0];
                for (let n = 1, r = t.length; n < r; ++n)
                  this._ += Math.round(arguments[n] * e) / e + t[n];
              };
            })(t)));
  }
  moveTo(t, n) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}`;
  }
  closePath() {
    null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
  }
  quadraticCurveTo(t, n, e, r) {
    this._append`Q${+t},${+n},${(this._x1 = +e)},${(this._y1 = +r)}`;
  }
  bezierCurveTo(t, n, e, r, i, o) {
    this._append`C${+t},${+n},${+e},${+r},${(this._x1 = +i)},${(this._y1 = +o)}`;
  }
  arcTo(t, n, e, r, i) {
    if (((t = +t), (n = +n), (e = +e), (r = +r), (i = +i) < 0))
      throw new Error(`negative radius: ${i}`);
    let o = this._x1,
      a = this._y1,
      u = e - t,
      s = r - n,
      h = o - t,
      c = a - n,
      l = h * h + c * c;
    if (null === this._x1) this._append`M${(this._x1 = t)},${(this._y1 = n)}`;
    else if (l > lr)
      if (Math.abs(c * u - s * h) > lr && i) {
        let f = e - o,
          p = r - a,
          _ = u * u + s * s,
          y = f * f + p * p,
          d = Math.sqrt(_),
          g = Math.sqrt(l),
          v = i * Math.tan((hr - Math.acos((_ + l - y) / (2 * d * g))) / 2),
          m = v / g,
          x = v / d;
        (Math.abs(m - 1) > lr && this._append`L${t + m * h},${n + m * c}`,
          this
            ._append`A${i},${i},0,0,${+(c * f > h * p)},${(this._x1 = t + x * u)},${(this._y1 = n + x * s)}`);
      } else this._append`L${(this._x1 = t)},${(this._y1 = n)}`;
    else;
  }
  arc(t, n, e, r, i, o) {
    if (((t = +t), (n = +n), (o = !!o), (e = +e) < 0)) throw new Error(`negative radius: ${e}`);
    let a = e * Math.cos(r),
      u = e * Math.sin(r),
      s = t + a,
      h = n + u,
      c = 1 ^ o,
      l = o ? r - i : i - r;
    (null === this._x1
      ? this._append`M${s},${h}`
      : (Math.abs(this._x1 - s) > lr || Math.abs(this._y1 - h) > lr) && this._append`L${s},${h}`,
      e &&
        (l < 0 && (l = (l % cr) + cr),
        l > fr
          ? this
              ._append`A${e},${e},0,1,${c},${t - a},${n - u}A${e},${e},0,1,${c},${(this._x1 = s)},${(this._y1 = h)}`
          : l > lr &&
            this
              ._append`A${e},${e},0,${+(l >= hr)},${c},${(this._x1 = t + e * Math.cos(i))},${(this._y1 = n + e * Math.sin(i))}`));
  }
  rect(t, n, e, r) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}h${(e = +e)}v${+r}h${-e}Z`;
  }
  toString() {
    return this._;
  }
}
function yr(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf('e')) < 0) return null;
  var e,
    r = t.slice(0, e);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
}
function dr(t) {
  return (t = yr(Math.abs(t))) ? t[1] : NaN;
}
var gr,
  vr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function mr(t) {
  if (!(n = vr.exec(t))) throw new Error('invalid format: ' + t);
  var n;
  return new xr({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10],
  });
}
function xr(t) {
  ((this.fill = void 0 === t.fill ? ' ' : t.fill + ''),
    (this.align = void 0 === t.align ? '>' : t.align + ''),
    (this.sign = void 0 === t.sign ? '-' : t.sign + ''),
    (this.symbol = void 0 === t.symbol ? '' : t.symbol + ''),
    (this.zero = !!t.zero),
    (this.width = void 0 === t.width ? void 0 : +t.width),
    (this.comma = !!t.comma),
    (this.precision = void 0 === t.precision ? void 0 : +t.precision),
    (this.trim = !!t.trim),
    (this.type = void 0 === t.type ? '' : t.type + ''));
}
function wr(t, n) {
  var e = yr(t, n);
  if (!e) return t + '';
  var r = e[0],
    i = e[1];
  return i < 0
    ? '0.' + new Array(-i).join('0') + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
      : r + new Array(i - r.length + 2).join('0');
}
((mr.prototype = xr.prototype),
  (xr.prototype.toString = function () {
    return (
      this.fill +
      this.align +
      this.sign +
      this.symbol +
      (this.zero ? '0' : '') +
      (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) +
      (this.comma ? ',' : '') +
      (void 0 === this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) +
      (this.trim ? '~' : '') +
      this.type
    );
  }));
const br = {
  '%': (t, n) => (100 * t).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + '',
  d: function (t) {
    return Math.abs((t = Math.round(t))) >= 1e21
      ? t.toLocaleString('en').replace(/,/g, '')
      : t.toString(10);
  },
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => wr(100 * t, n),
  r: wr,
  s: function (t, n) {
    var e = yr(t, n);
    if (!e) return t + '';
    var r = e[0],
      i = e[1],
      o = i - (gr = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
      a = r.length;
    return o === a
      ? r
      : o > a
        ? r + new Array(o - a + 1).join('0')
        : o > 0
          ? r.slice(0, o) + '.' + r.slice(o)
          : '0.' + new Array(1 - o).join('0') + yr(t, Math.max(0, n + o - 1))[0];
  },
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16),
};
function Mr(t) {
  return t;
}
var kr,
  Nr,
  Tr,
  Ar = Array.prototype.map,
  Er = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
function Sr(t) {
  var n,
    e,
    r =
      void 0 === t.grouping || void 0 === t.thousands
        ? Mr
        : ((n = Ar.call(t.grouping, Number)),
          (e = t.thousands + ''),
          function (t, r) {
            for (
              var i = t.length, o = [], a = 0, u = n[0], s = 0;
              i > 0 &&
              u > 0 &&
              (s + u + 1 > r && (u = Math.max(1, r - s)),
              o.push(t.substring((i -= u), i + u)),
              !((s += u + 1) > r));
            )
              u = n[(a = (a + 1) % n.length)];
            return o.reverse().join(e);
          }),
    i = void 0 === t.currency ? '' : t.currency[0] + '',
    o = void 0 === t.currency ? '' : t.currency[1] + '',
    a = void 0 === t.decimal ? '.' : t.decimal + '',
    u =
      void 0 === t.numerals
        ? Mr
        : (function (t) {
            return function (n) {
              return n.replace(/[0-9]/g, function (n) {
                return t[+n];
              });
            };
          })(Ar.call(t.numerals, String)),
    s = void 0 === t.percent ? '%' : t.percent + '',
    h = void 0 === t.minus ? '−' : t.minus + '',
    c = void 0 === t.nan ? 'NaN' : t.nan + '';
  function l(t) {
    var n = (t = mr(t)).fill,
      e = t.align,
      l = t.sign,
      f = t.symbol,
      p = t.zero,
      _ = t.width,
      y = t.comma,
      d = t.precision,
      g = t.trim,
      v = t.type;
    ('n' === v ? ((y = !0), (v = 'g')) : br[v] || (void 0 === d && (d = 12), (g = !0), (v = 'g')),
      (p || ('0' === n && '=' === e)) && ((p = !0), (n = '0'), (e = '=')));
    var m = '$' === f ? i : '#' === f && /[boxX]/.test(v) ? '0' + v.toLowerCase() : '',
      x = '$' === f ? o : /[%p]/.test(v) ? s : '',
      w = br[v],
      b = /[defgprs%]/.test(v);
    function M(t) {
      var i,
        o,
        s,
        f = m,
        M = x;
      if ('c' === v) ((M = w(t) + M), (t = ''));
      else {
        var k = (t = +t) < 0 || 1 / t < 0;
        if (
          ((t = isNaN(t) ? c : w(Math.abs(t), d)),
          g &&
            (t = (function (t) {
              t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                switch (t[r]) {
                  case '.':
                    i = n = r;
                    break;
                  case '0':
                    (0 === i && (i = r), (n = r));
                    break;
                  default:
                    if (!+t[r]) break t;
                    i > 0 && (i = 0);
                }
              return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
            })(t)),
          k && 0 === +t && '+' !== l && (k = !1),
          (f = (k ? ('(' === l ? l : h) : '-' === l || '(' === l ? '' : l) + f),
          (M = ('s' === v ? Er[8 + gr / 3] : '') + M + (k && '(' === l ? ')' : '')),
          b)
        )
          for (i = -1, o = t.length; ++i < o; )
            if (48 > (s = t.charCodeAt(i)) || s > 57) {
              ((M = (46 === s ? a + t.slice(i + 1) : t.slice(i)) + M), (t = t.slice(0, i)));
              break;
            }
      }
      y && !p && (t = r(t, 1 / 0));
      var N = f.length + t.length + M.length,
        T = N < _ ? new Array(_ - N + 1).join(n) : '';
      switch ((y && p && ((t = r(T + t, T.length ? _ - M.length : 1 / 0)), (T = '')), e)) {
        case '<':
          t = f + t + M + T;
          break;
        case '=':
          t = f + T + t + M;
          break;
        case '^':
          t = T.slice(0, (N = T.length >> 1)) + f + t + M + T.slice(N);
          break;
        default:
          t = T + f + t + M;
      }
      return u(t);
    }
    return (
      (d =
        void 0 === d
          ? 6
          : /[gprs]/.test(v)
            ? Math.max(1, Math.min(21, d))
            : Math.max(0, Math.min(20, d))),
      (M.toString = function () {
        return t + '';
      }),
      M
    );
  }
  return {
    format: l,
    formatPrefix: function (t, n) {
      var e = l((((t = mr(t)).type = 'f'), t)),
        r = 3 * Math.max(-8, Math.min(8, Math.floor(dr(n) / 3))),
        i = Math.pow(10, -r),
        o = Er[8 + r / 3];
      return function (t) {
        return e(i * t) + o;
      };
    },
  };
}
function $r(t) {
  var n = 0,
    e = t.children,
    r = e && e.length;
  if (r) for (; --r >= 0; ) n += e[r].value;
  else n = 1;
  t.value = n;
}
function Cr(t, n) {
  t instanceof Map ? ((t = [void 0, t]), void 0 === n && (n = Dr)) : void 0 === n && (n = zr);
  for (var e, r, i, o, a, u = new qr(t), s = [u]; (e = s.pop()); )
    if ((i = n(e.data)) && (a = (i = Array.from(i)).length))
      for (e.children = i, o = a - 1; o >= 0; --o)
        (s.push((r = i[o] = new qr(i[o]))), (r.parent = e), (r.depth = e.depth + 1));
  return u.eachBefore(Pr);
}
function zr(t) {
  return t.children;
}
function Dr(t) {
  return Array.isArray(t) ? t[1] : null;
}
function Ur(t) {
  (void 0 !== t.data.value && (t.value = t.data.value), (t.data = t.data.data));
}
function Pr(t) {
  var n = 0;
  do {
    t.height = n;
  } while ((t = t.parent) && t.height < ++n);
}
function qr(t) {
  ((this.data = t), (this.depth = this.height = 0), (this.parent = null));
}
function Yr() {
  return 0;
}
function jr(t) {
  return function () {
    return t;
  };
}
function Hr(t) {
  ((t.x0 = Math.round(t.x0)),
    (t.y0 = Math.round(t.y0)),
    (t.x1 = Math.round(t.x1)),
    (t.y1 = Math.round(t.y1)));
}
function Fr(t, n, e, r, i) {
  for (var o, a = t.children, u = -1, s = a.length, h = t.value && (r - n) / t.value; ++u < s; )
    (((o = a[u]).y0 = e), (o.y1 = i), (o.x0 = n), (o.x1 = n += o.value * h));
}
function Xr(t, n, e, r, i) {
  for (var o, a = t.children, u = -1, s = a.length, h = t.value && (i - e) / t.value; ++u < s; )
    (((o = a[u]).x0 = n), (o.x1 = r), (o.y0 = e), (o.y1 = e += o.value * h));
}
((kr = Sr({ thousands: ',', grouping: [3], currency: ['$', ''] })),
  (Nr = kr.format),
  (Tr = kr.formatPrefix),
  (qr.prototype = Cr.prototype =
    {
      constructor: qr,
      count: function () {
        return this.eachAfter($r);
      },
      each: function (t, n) {
        let e = -1;
        for (const r of this) t.call(n, r, ++e, this);
        return this;
      },
      eachAfter: function (t, n) {
        for (var e, r, i, o = this, a = [o], u = [], s = -1; (o = a.pop()); )
          if ((u.push(o), (e = o.children))) for (r = 0, i = e.length; r < i; ++r) a.push(e[r]);
        for (; (o = u.pop()); ) t.call(n, o, ++s, this);
        return this;
      },
      eachBefore: function (t, n) {
        for (var e, r, i = this, o = [i], a = -1; (i = o.pop()); )
          if ((t.call(n, i, ++a, this), (e = i.children)))
            for (r = e.length - 1; r >= 0; --r) o.push(e[r]);
        return this;
      },
      find: function (t, n) {
        let e = -1;
        for (const r of this) if (t.call(n, r, ++e, this)) return r;
      },
      sum: function (t) {
        return this.eachAfter(function (n) {
          for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0; )
            e += r[i].value;
          n.value = e;
        });
      },
      sort: function (t) {
        return this.eachBefore(function (n) {
          n.children && n.children.sort(t);
        });
      },
      path: function (t) {
        for (
          var n = this,
            e = (function (t, n) {
              if (t === n) return t;
              var e = t.ancestors(),
                r = n.ancestors(),
                i = null;
              ((t = e.pop()), (n = r.pop()));
              for (; t === n; ) ((i = t), (t = e.pop()), (n = r.pop()));
              return i;
            })(n, t),
            r = [n];
          n !== e;
        )
          ((n = n.parent), r.push(n));
        for (var i = r.length; t !== e; ) (r.splice(i, 0, t), (t = t.parent));
        return r;
      },
      ancestors: function () {
        for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
        return n;
      },
      descendants: function () {
        return Array.from(this);
      },
      leaves: function () {
        var t = [];
        return (
          this.eachBefore(function (n) {
            n.children || t.push(n);
          }),
          t
        );
      },
      links: function () {
        var t = this,
          n = [];
        return (
          t.each(function (e) {
            e !== t && n.push({ source: e.parent, target: e });
          }),
          n
        );
      },
      copy: function () {
        return Cr(this).eachBefore(Ur);
      },
      [Symbol.iterator]: function* () {
        var t,
          n,
          e,
          r,
          i = this,
          o = [i];
        do {
          for (t = o.reverse(), o = []; (i = t.pop()); )
            if ((yield i, (n = i.children))) for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
        } while (o.length);
      },
    }));
const Lr = (function t(n) {
  function e(t, e, r, i, o) {
    !(function (t, n, e, r, i, o) {
      for (
        var a,
          u,
          s,
          h,
          c,
          l,
          f,
          p,
          _,
          y,
          d,
          g = [],
          v = n.children,
          m = 0,
          x = 0,
          w = v.length,
          b = n.value;
        m < w;
      ) {
        ((s = i - e), (h = o - r));
        do {
          c = v[x++].value;
        } while (!c && x < w);
        for (
          l = f = c, d = c * c * (y = Math.max(h / s, s / h) / (b * t)), _ = Math.max(f / d, d / l);
          x < w;
          ++x
        ) {
          if (
            ((c += u = v[x].value),
            u < l && (l = u),
            u > f && (f = u),
            (d = c * c * y),
            (p = Math.max(f / d, d / l)) > _)
          ) {
            c -= u;
            break;
          }
          _ = p;
        }
        (g.push((a = { value: c, dice: s < h, children: v.slice(m, x) })),
          a.dice
            ? Fr(a, e, r, i, b ? (r += (h * c) / b) : o)
            : Xr(a, e, r, b ? (e += (s * c) / b) : i, o),
          (b -= c),
          (m = x));
      }
    })(n, t, e, r, i, o);
  }
  return (
    (e.ratio = function (n) {
      return t((n = +n) > 1 ? n : 1);
    }),
    e
  );
})((1 + Math.sqrt(5)) / 2);
function Or() {
  var t = Lr,
    n = !1,
    e = 1,
    r = 1,
    i = [0],
    o = Yr,
    a = Yr,
    u = Yr,
    s = Yr,
    h = Yr;
  function c(t) {
    return (
      (t.x0 = t.y0 = 0),
      (t.x1 = e),
      (t.y1 = r),
      t.eachBefore(l),
      (i = [0]),
      n && t.eachBefore(Hr),
      t
    );
  }
  function l(n) {
    var e = i[n.depth],
      r = n.x0 + e,
      c = n.y0 + e,
      l = n.x1 - e,
      f = n.y1 - e;
    (l < r && (r = l = (r + l) / 2),
      f < c && (c = f = (c + f) / 2),
      (n.x0 = r),
      (n.y0 = c),
      (n.x1 = l),
      (n.y1 = f),
      n.children &&
        ((e = i[n.depth + 1] = o(n) / 2),
        (r += h(n) - e),
        (c += a(n) - e),
        (l -= u(n) - e) < r && (r = l = (r + l) / 2),
        (f -= s(n) - e) < c && (c = f = (c + f) / 2),
        t(n, r, c, l, f)));
  }
  return (
    (c.round = function (t) {
      return arguments.length ? ((n = !!t), c) : n;
    }),
    (c.size = function (t) {
      return arguments.length ? ((e = +t[0]), (r = +t[1]), c) : [e, r];
    }),
    (c.tile = function (n) {
      return arguments.length
        ? ((t = (function (t) {
            if ('function' != typeof t) throw new Error();
            return t;
          })(n)),
          c)
        : t;
    }),
    (c.padding = function (t) {
      return arguments.length ? c.paddingInner(t).paddingOuter(t) : c.paddingInner();
    }),
    (c.paddingInner = function (t) {
      return arguments.length ? ((o = 'function' == typeof t ? t : jr(+t)), c) : o;
    }),
    (c.paddingOuter = function (t) {
      return arguments.length
        ? c.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t)
        : c.paddingTop();
    }),
    (c.paddingTop = function (t) {
      return arguments.length ? ((a = 'function' == typeof t ? t : jr(+t)), c) : a;
    }),
    (c.paddingRight = function (t) {
      return arguments.length ? ((u = 'function' == typeof t ? t : jr(+t)), c) : u;
    }),
    (c.paddingBottom = function (t) {
      return arguments.length ? ((s = 'function' == typeof t ? t : jr(+t)), c) : s;
    }),
    (c.paddingLeft = function (t) {
      return arguments.length ? ((h = 'function' == typeof t ? t : jr(+t)), c) : h;
    }),
    c
  );
}
function Rr(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
  }
  return this;
}
const Ir = Symbol('implicit');
function Br() {
  var t = new u(),
    n = [],
    e = [],
    r = Ir;
  function i(i) {
    let o = t.get(i);
    if (void 0 === o) {
      if (r !== Ir) return r;
      t.set(i, (o = n.push(i) - 1));
    }
    return e[o % e.length];
  }
  return (
    (i.domain = function (e) {
      if (!arguments.length) return n.slice();
      ((n = []), (t = new u()));
      for (const r of e) t.has(r) || t.set(r, n.push(r) - 1);
      return i;
    }),
    (i.range = function (t) {
      return arguments.length ? ((e = Array.from(t)), i) : e.slice();
    }),
    (i.unknown = function (t) {
      return arguments.length ? ((r = t), i) : r;
    }),
    (i.copy = function () {
      return Br(n, e).unknown(r);
    }),
    Rr.apply(i, arguments),
    i
  );
}
function Vr() {
  var t,
    n,
    e = Br().unknown(void 0),
    r = e.domain,
    i = e.range,
    o = 0,
    a = 1,
    u = !1,
    s = 0,
    h = 0,
    c = 0.5;
  function l() {
    var e = r().length,
      l = a < o,
      f = l ? a : o,
      p = l ? o : a;
    ((t = (p - f) / Math.max(1, e - s + 2 * h)),
      u && (t = Math.floor(t)),
      (f += (p - f - t * (e - s)) * c),
      (n = t * (1 - s)),
      u && ((f = Math.round(f)), (n = Math.round(n))));
    var _ = (function (t, n, e) {
      ((t = +t),
        (n = +n),
        (e = (i = arguments.length) < 2 ? ((n = t), (t = 0), 1) : i < 3 ? 1 : +e));
      for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i; )
        o[r] = t + r * e;
      return o;
    })(e).map(function (n) {
      return f + t * n;
    });
    return i(l ? _.reverse() : _);
  }
  return (
    delete e.unknown,
    (e.domain = function (t) {
      return arguments.length ? (r(t), l()) : r();
    }),
    (e.range = function (t) {
      return arguments.length ? (([o, a] = t), (o = +o), (a = +a), l()) : [o, a];
    }),
    (e.rangeRound = function (t) {
      return (([o, a] = t), (o = +o), (a = +a), (u = !0), l());
    }),
    (e.bandwidth = function () {
      return n;
    }),
    (e.step = function () {
      return t;
    }),
    (e.round = function (t) {
      return arguments.length ? ((u = !!t), l()) : u;
    }),
    (e.padding = function (t) {
      return arguments.length ? ((s = Math.min(1, (h = +t))), l()) : s;
    }),
    (e.paddingInner = function (t) {
      return arguments.length ? ((s = Math.min(1, t)), l()) : s;
    }),
    (e.paddingOuter = function (t) {
      return arguments.length ? ((h = +t), l()) : h;
    }),
    (e.align = function (t) {
      return arguments.length ? ((c = Math.max(0, Math.min(1, t))), l()) : c;
    }),
    (e.copy = function () {
      return Vr(r(), [o, a]).round(u).paddingInner(s).paddingOuter(h).align(c);
    }),
    Rr.apply(l(), arguments)
  );
}
function Wr(t) {
  return +t;
}
var Zr = [0, 1];
function Gr(t) {
  return t;
}
function Qr(t, n) {
  return (n -= t = +t)
    ? function (e) {
        return (e - t) / n;
      }
    : ((e = isNaN(n) ? NaN : 0.5),
      function () {
        return e;
      });
  var e;
}
function Jr(t, n, e) {
  var r = t[0],
    i = t[1],
    o = n[0],
    a = n[1];
  return (
    i < r ? ((r = Qr(i, r)), (o = e(a, o))) : ((r = Qr(r, i)), (o = e(o, a))),
    function (t) {
      return o(r(t));
    }
  );
}
function Kr(t, n, e) {
  var r = Math.min(t.length, n.length) - 1,
    i = new Array(r),
    o = new Array(r),
    u = -1;
  for (t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse())); ++u < r; )
    ((i[u] = Qr(t[u], t[u + 1])), (o[u] = e(n[u], n[u + 1])));
  return function (n) {
    var e = a(t, n, 1, r) - 1;
    return o[e](i[e](n));
  };
}
function ti(t, n) {
  return n
    .domain(t.domain())
    .range(t.range())
    .interpolate(t.interpolate())
    .clamp(t.clamp())
    .unknown(t.unknown());
}
function ni() {
  var t,
    n,
    e,
    r,
    i,
    o,
    a = Zr,
    u = Zr,
    s = ie,
    h = Gr;
  function c() {
    var t,
      n,
      e,
      s = Math.min(a.length, u.length);
    return (
      h !== Gr &&
        ((t = a[0]),
        (n = a[s - 1]),
        t > n && ((e = t), (t = n), (n = e)),
        (h = function (e) {
          return Math.max(t, Math.min(n, e));
        })),
      (r = s > 2 ? Kr : Jr),
      (i = o = null),
      l
    );
  }
  function l(n) {
    return null == n || isNaN((n = +n)) ? e : (i || (i = r(a.map(t), u, s)))(t(h(n)));
  }
  return (
    (l.invert = function (e) {
      return h(n((o || (o = r(u, a.map(t), Kn)))(e)));
    }),
    (l.domain = function (t) {
      return arguments.length ? ((a = Array.from(t, Wr)), c()) : a.slice();
    }),
    (l.range = function (t) {
      return arguments.length ? ((u = Array.from(t)), c()) : u.slice();
    }),
    (l.rangeRound = function (t) {
      return ((u = Array.from(t)), (s = oe), c());
    }),
    (l.clamp = function (t) {
      return arguments.length ? ((h = !!t || Gr), c()) : h !== Gr;
    }),
    (l.interpolate = function (t) {
      return arguments.length ? ((s = t), c()) : s;
    }),
    (l.unknown = function (t) {
      return arguments.length ? ((e = t), l) : e;
    }),
    function (e, r) {
      return ((t = e), (n = r), c());
    }
  );
}
function ei() {
  return ni()(Gr, Gr);
}
function ri(t, n, e, r) {
  var i,
    o = y(t, n, e);
  switch ((r = mr(null == r ? ',f' : r)).type) {
    case 's':
      var a = Math.max(Math.abs(t), Math.abs(n));
      return (
        null != r.precision ||
          isNaN(
            (i = (function (t, n) {
              return Math.max(
                0,
                3 * Math.max(-8, Math.min(8, Math.floor(dr(n) / 3))) - dr(Math.abs(t))
              );
            })(o, a))
          ) ||
          (r.precision = i),
        Tr(r, a)
      );
    case '':
    case 'e':
    case 'g':
    case 'p':
    case 'r':
      null != r.precision ||
        isNaN(
          (i = (function (t, n) {
            return ((t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, dr(n) - dr(t)) + 1);
          })(o, Math.max(Math.abs(t), Math.abs(n))))
        ) ||
        (r.precision = i - ('e' === r.type));
      break;
    case 'f':
    case '%':
      null != r.precision ||
        isNaN(
          (i = (function (t) {
            return Math.max(0, -dr(Math.abs(t)));
          })(o))
        ) ||
        (r.precision = i - 2 * ('%' === r.type));
  }
  return Nr(r);
}
function ii(t) {
  var n = t.domain;
  return (
    (t.ticks = function (t) {
      var e = n();
      return (function (t, n, e) {
        if (!((e = +e) > 0)) return [];
        if ((t = +t) === (n = +n)) return [t];
        const r = n < t,
          [i, o, a] = r ? p(n, t, e) : p(t, n, e);
        if (!(o >= i)) return [];
        const u = o - i + 1,
          s = new Array(u);
        if (r)
          if (a < 0) for (let h = 0; h < u; ++h) s[h] = (o - h) / -a;
          else for (let h = 0; h < u; ++h) s[h] = (o - h) * a;
        else if (a < 0) for (let h = 0; h < u; ++h) s[h] = (i + h) / -a;
        else for (let h = 0; h < u; ++h) s[h] = (i + h) * a;
        return s;
      })(e[0], e[e.length - 1], null == t ? 10 : t);
    }),
    (t.tickFormat = function (t, e) {
      var r = n();
      return ri(r[0], r[r.length - 1], null == t ? 10 : t, e);
    }),
    (t.nice = function (e) {
      null == e && (e = 10);
      var r,
        i,
        o = n(),
        a = 0,
        u = o.length - 1,
        s = o[a],
        h = o[u],
        c = 10;
      for (h < s && ((i = s), (s = h), (h = i), (i = a), (a = u), (u = i)); c-- > 0; ) {
        if ((i = _(s, h, e)) === r) return ((o[a] = s), (o[u] = h), n(o));
        if (i > 0) ((s = Math.floor(s / i) * i), (h = Math.ceil(h / i) * i));
        else {
          if (!(i < 0)) break;
          ((s = Math.ceil(s * i) / i), (h = Math.floor(h * i) / i));
        }
        r = i;
      }
      return t;
    }),
    t
  );
}
function oi() {
  var t = ei();
  return (
    (t.copy = function () {
      return ti(t, oi());
    }),
    Rr.apply(t, arguments),
    ii(t)
  );
}
const ai = new Date(),
  ui = new Date();
function si(t, n, e, r) {
  function i(n) {
    return (t((n = 0 === arguments.length ? new Date() : new Date(+n))), n);
  }
  return (
    (i.floor = (n) => (t((n = new Date(+n))), n)),
    (i.ceil = (e) => (t((e = new Date(e - 1))), n(e, 1), t(e), e)),
    (i.round = (t) => {
      const n = i(t),
        e = i.ceil(t);
      return t - n < e - t ? n : e;
    }),
    (i.offset = (t, e) => (n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t)),
    (i.range = (e, r, o) => {
      const a = [];
      if (((e = i.ceil(e)), (o = null == o ? 1 : Math.floor(o)), !(e < r && o > 0))) return a;
      let u;
      do {
        (a.push((u = new Date(+e))), n(e, o), t(e));
      } while (u < e && e < r);
      return a;
    }),
    (i.filter = (e) =>
      si(
        (n) => {
          if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
        },
        (t, r) => {
          if (t >= t)
            if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
            else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
        }
      )),
    e &&
      ((i.count = (n, r) => (ai.setTime(+n), ui.setTime(+r), t(ai), t(ui), Math.floor(e(ai, ui)))),
      (i.every = (t) => (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? i.filter(r ? (n) => r(n) % t === 0 : (n) => i.count(0, n) % t === 0)
            : i
          : null
      ))),
    i
  );
}
const hi = si(
  () => {},
  (t, n) => {
    t.setTime(+t + n);
  },
  (t, n) => n - t
);
((hi.every = (t) => (
  (t = Math.floor(t)),
  isFinite(t) && t > 0
    ? t > 1
      ? si(
          (n) => {
            n.setTime(Math.floor(n / t) * t);
          },
          (n, e) => {
            n.setTime(+n + e * t);
          },
          (n, e) => (e - n) / t
        )
      : hi
    : null
)),
  hi.range);
const ci = 1e3,
  li = 6e4,
  fi = 36e5,
  pi = 864e5,
  _i = 6048e5,
  yi = 2592e6,
  di = 31536e6,
  gi = si(
    (t) => {
      t.setTime(t - t.getMilliseconds());
    },
    (t, n) => {
      t.setTime(+t + n * ci);
    },
    (t, n) => (n - t) / ci,
    (t) => t.getUTCSeconds()
  );
gi.range;
const vi = si(
  (t) => {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * ci);
  },
  (t, n) => {
    t.setTime(+t + n * li);
  },
  (t, n) => (n - t) / li,
  (t) => t.getMinutes()
);
vi.range;
si(
  (t) => {
    t.setUTCSeconds(0, 0);
  },
  (t, n) => {
    t.setTime(+t + n * li);
  },
  (t, n) => (n - t) / li,
  (t) => t.getUTCMinutes()
).range;
const mi = si(
  (t) => {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * ci - t.getMinutes() * li);
  },
  (t, n) => {
    t.setTime(+t + n * fi);
  },
  (t, n) => (n - t) / fi,
  (t) => t.getHours()
);
mi.range;
si(
  (t) => {
    t.setUTCMinutes(0, 0, 0);
  },
  (t, n) => {
    t.setTime(+t + n * fi);
  },
  (t, n) => (n - t) / fi,
  (t) => t.getUTCHours()
).range;
const xi = si(
  (t) => t.setHours(0, 0, 0, 0),
  (t, n) => t.setDate(t.getDate() + n),
  (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * li) / pi,
  (t) => t.getDate() - 1
);
xi.range;
const wi = si(
  (t) => {
    t.setUTCHours(0, 0, 0, 0);
  },
  (t, n) => {
    t.setUTCDate(t.getUTCDate() + n);
  },
  (t, n) => (n - t) / pi,
  (t) => t.getUTCDate() - 1
);
wi.range;
function bi(t) {
  return si(
    (n) => {
      (n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)), n.setHours(0, 0, 0, 0));
    },
    (t, n) => {
      t.setDate(t.getDate() + 7 * n);
    },
    (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * li) / _i
  );
}
si(
  (t) => {
    t.setUTCHours(0, 0, 0, 0);
  },
  (t, n) => {
    t.setUTCDate(t.getUTCDate() + n);
  },
  (t, n) => (n - t) / pi,
  (t) => Math.floor(t / pi)
).range;
const Mi = bi(0),
  ki = bi(1),
  Ni = bi(2),
  Ti = bi(3),
  Ai = bi(4),
  Ei = bi(5),
  Si = bi(6);
function $i(t) {
  return si(
    (n) => {
      (n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)), n.setUTCHours(0, 0, 0, 0));
    },
    (t, n) => {
      t.setUTCDate(t.getUTCDate() + 7 * n);
    },
    (t, n) => (n - t) / _i
  );
}
(Mi.range, ki.range, Ni.range, Ti.range, Ai.range, Ei.range, Si.range);
const Ci = $i(0),
  zi = $i(1),
  Di = $i(2),
  Ui = $i(3),
  Pi = $i(4),
  qi = $i(5),
  Yi = $i(6);
(Ci.range, zi.range, Di.range, Ui.range, Pi.range, qi.range, Yi.range);
const ji = si(
  (t) => {
    (t.setDate(1), t.setHours(0, 0, 0, 0));
  },
  (t, n) => {
    t.setMonth(t.getMonth() + n);
  },
  (t, n) => n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear()),
  (t) => t.getMonth()
);
ji.range;
si(
  (t) => {
    (t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0));
  },
  (t, n) => {
    t.setUTCMonth(t.getUTCMonth() + n);
  },
  (t, n) => n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear()),
  (t) => t.getUTCMonth()
).range;
const Hi = si(
  (t) => {
    (t.setMonth(0, 1), t.setHours(0, 0, 0, 0));
  },
  (t, n) => {
    t.setFullYear(t.getFullYear() + n);
  },
  (t, n) => n.getFullYear() - t.getFullYear(),
  (t) => t.getFullYear()
);
((Hi.every = (t) =>
  isFinite((t = Math.floor(t))) && t > 0
    ? si(
        (n) => {
          (n.setFullYear(Math.floor(n.getFullYear() / t) * t),
            n.setMonth(0, 1),
            n.setHours(0, 0, 0, 0));
        },
        (n, e) => {
          n.setFullYear(n.getFullYear() + e * t);
        }
      )
    : null),
  Hi.range);
const Fi = si(
  (t) => {
    (t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0));
  },
  (t, n) => {
    t.setUTCFullYear(t.getUTCFullYear() + n);
  },
  (t, n) => n.getUTCFullYear() - t.getUTCFullYear(),
  (t) => t.getUTCFullYear()
);
((Fi.every = (t) =>
  isFinite((t = Math.floor(t))) && t > 0
    ? si(
        (n) => {
          (n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
            n.setUTCMonth(0, 1),
            n.setUTCHours(0, 0, 0, 0));
        },
        (n, e) => {
          n.setUTCFullYear(n.getUTCFullYear() + e * t);
        }
      )
    : null),
  Fi.range);
const [Xi, Li] = (function (t, n, e, r, o, a) {
  const u = [
    [gi, 1, ci],
    [gi, 5, 5e3],
    [gi, 15, 15e3],
    [gi, 30, 3e4],
    [a, 1, li],
    [a, 5, 3e5],
    [a, 15, 9e5],
    [a, 30, 18e5],
    [o, 1, fi],
    [o, 3, 108e5],
    [o, 6, 216e5],
    [o, 12, 432e5],
    [r, 1, pi],
    [r, 2, 1728e5],
    [e, 1, _i],
    [n, 1, yi],
    [n, 3, 7776e6],
    [t, 1, di],
  ];
  function s(n, e, r) {
    const o = Math.abs(e - n) / r,
      a = i(([, , t]) => t).right(u, o);
    if (a === u.length) return t.every(y(n / di, e / di, r));
    if (0 === a) return hi.every(Math.max(y(n, e, r), 1));
    const [s, h] = u[o / u[a - 1][2] < u[a][2] / o ? a - 1 : a];
    return s.every(h);
  }
  return [
    function (t, n, e) {
      const r = n < t;
      r && ([t, n] = [n, t]);
      const i = e && 'function' == typeof e.range ? e : s(t, n, e),
        o = i ? i.range(t, +n + 1) : [];
      return r ? o.reverse() : o;
    },
    s,
  ];
})(Hi, ji, Mi, xi, mi, vi);
function Oi(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return (n.setFullYear(t.y), n);
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function Ri(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return (n.setUTCFullYear(t.y), n);
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Ii(t, n, e) {
  return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
}
var Bi,
  Vi,
  Wi = { '-': '', _: ' ', 0: '0' },
  Zi = /^\s*\d+/,
  Gi = /^%/,
  Qi = /[\\^$*+?|[\]().{}]/g;
function Ji(t, n, e) {
  var r = t < 0 ? '-' : '',
    i = (r ? -t : t) + '',
    o = i.length;
  return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
}
function Ki(t) {
  return t.replace(Qi, '\\$&');
}
function to(t) {
  return new RegExp('^(?:' + t.map(Ki).join('|') + ')', 'i');
}
function no(t) {
  return new Map(t.map((t, n) => [t.toLowerCase(), n]));
}
function eo(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 1));
  return r ? ((t.w = +r[0]), e + r[0].length) : -1;
}
function ro(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 1));
  return r ? ((t.u = +r[0]), e + r[0].length) : -1;
}
function io(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 2));
  return r ? ((t.U = +r[0]), e + r[0].length) : -1;
}
function oo(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 2));
  return r ? ((t.V = +r[0]), e + r[0].length) : -1;
}
function ao(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 2));
  return r ? ((t.W = +r[0]), e + r[0].length) : -1;
}
function uo(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 4));
  return r ? ((t.y = +r[0]), e + r[0].length) : -1;
}
function so(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 2));
  return r ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length) : -1;
}
function ho(t, n, e) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
  return r ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), e + r[0].length) : -1;
}
function co(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 1));
  return r ? ((t.q = 3 * r[0] - 3), e + r[0].length) : -1;
}
function lo(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 2));
  return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
}
function fo(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 2));
  return r ? ((t.d = +r[0]), e + r[0].length) : -1;
}
function po(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 3));
  return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
}
function _o(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 2));
  return r ? ((t.H = +r[0]), e + r[0].length) : -1;
}
function yo(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 2));
  return r ? ((t.M = +r[0]), e + r[0].length) : -1;
}
function go(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 2));
  return r ? ((t.S = +r[0]), e + r[0].length) : -1;
}
function vo(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 3));
  return r ? ((t.L = +r[0]), e + r[0].length) : -1;
}
function mo(t, n, e) {
  var r = Zi.exec(n.slice(e, e + 6));
  return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
}
function xo(t, n, e) {
  var r = Gi.exec(n.slice(e, e + 1));
  return r ? e + r[0].length : -1;
}
function wo(t, n, e) {
  var r = Zi.exec(n.slice(e));
  return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
}
function bo(t, n, e) {
  var r = Zi.exec(n.slice(e));
  return r ? ((t.s = +r[0]), e + r[0].length) : -1;
}
function Mo(t, n) {
  return Ji(t.getDate(), n, 2);
}
function ko(t, n) {
  return Ji(t.getHours(), n, 2);
}
function No(t, n) {
  return Ji(t.getHours() % 12 || 12, n, 2);
}
function To(t, n) {
  return Ji(1 + xi.count(Hi(t), t), n, 3);
}
function Ao(t, n) {
  return Ji(t.getMilliseconds(), n, 3);
}
function Eo(t, n) {
  return Ao(t, n) + '000';
}
function So(t, n) {
  return Ji(t.getMonth() + 1, n, 2);
}
function $o(t, n) {
  return Ji(t.getMinutes(), n, 2);
}
function Co(t, n) {
  return Ji(t.getSeconds(), n, 2);
}
function zo(t) {
  var n = t.getDay();
  return 0 === n ? 7 : n;
}
function Do(t, n) {
  return Ji(Mi.count(Hi(t) - 1, t), n, 2);
}
function Uo(t) {
  var n = t.getDay();
  return n >= 4 || 0 === n ? Ai(t) : Ai.ceil(t);
}
function Po(t, n) {
  return ((t = Uo(t)), Ji(Ai.count(Hi(t), t) + (4 === Hi(t).getDay()), n, 2));
}
function qo(t) {
  return t.getDay();
}
function Yo(t, n) {
  return Ji(ki.count(Hi(t) - 1, t), n, 2);
}
function jo(t, n) {
  return Ji(t.getFullYear() % 100, n, 2);
}
function Ho(t, n) {
  return Ji((t = Uo(t)).getFullYear() % 100, n, 2);
}
function Fo(t, n) {
  return Ji(t.getFullYear() % 1e4, n, 4);
}
function Xo(t, n) {
  var e = t.getDay();
  return Ji((t = e >= 4 || 0 === e ? Ai(t) : Ai.ceil(t)).getFullYear() % 1e4, n, 4);
}
function Lo(t) {
  var n = t.getTimezoneOffset();
  return (n > 0 ? '-' : ((n *= -1), '+')) + Ji((n / 60) | 0, '0', 2) + Ji(n % 60, '0', 2);
}
function Oo(t, n) {
  return Ji(t.getUTCDate(), n, 2);
}
function Ro(t, n) {
  return Ji(t.getUTCHours(), n, 2);
}
function Io(t, n) {
  return Ji(t.getUTCHours() % 12 || 12, n, 2);
}
function Bo(t, n) {
  return Ji(1 + wi.count(Fi(t), t), n, 3);
}
function Vo(t, n) {
  return Ji(t.getUTCMilliseconds(), n, 3);
}
function Wo(t, n) {
  return Vo(t, n) + '000';
}
function Zo(t, n) {
  return Ji(t.getUTCMonth() + 1, n, 2);
}
function Go(t, n) {
  return Ji(t.getUTCMinutes(), n, 2);
}
function Qo(t, n) {
  return Ji(t.getUTCSeconds(), n, 2);
}
function Jo(t) {
  var n = t.getUTCDay();
  return 0 === n ? 7 : n;
}
function Ko(t, n) {
  return Ji(Ci.count(Fi(t) - 1, t), n, 2);
}
function ta(t) {
  var n = t.getUTCDay();
  return n >= 4 || 0 === n ? Pi(t) : Pi.ceil(t);
}
function na(t, n) {
  return ((t = ta(t)), Ji(Pi.count(Fi(t), t) + (4 === Fi(t).getUTCDay()), n, 2));
}
function ea(t) {
  return t.getUTCDay();
}
function ra(t, n) {
  return Ji(zi.count(Fi(t) - 1, t), n, 2);
}
function ia(t, n) {
  return Ji(t.getUTCFullYear() % 100, n, 2);
}
function oa(t, n) {
  return Ji((t = ta(t)).getUTCFullYear() % 100, n, 2);
}
function aa(t, n) {
  return Ji(t.getUTCFullYear() % 1e4, n, 4);
}
function ua(t, n) {
  var e = t.getUTCDay();
  return Ji((t = e >= 4 || 0 === e ? Pi(t) : Pi.ceil(t)).getUTCFullYear() % 1e4, n, 4);
}
function sa() {
  return '+0000';
}
function ha() {
  return '%';
}
function ca(t) {
  return +t;
}
function la(t) {
  return Math.floor(+t / 1e3);
}
function fa(t) {
  return new Date(t);
}
function pa(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function _a(t, n, e, r, i, o, a, u, s, h) {
  var c = ei(),
    l = c.invert,
    f = c.domain,
    p = h('.%L'),
    _ = h(':%S'),
    y = h('%I:%M'),
    d = h('%I %p'),
    g = h('%a %d'),
    v = h('%b %d'),
    m = h('%B'),
    x = h('%Y');
  function w(t) {
    return (
      s(t) < t
        ? p
        : u(t) < t
          ? _
          : a(t) < t
            ? y
            : o(t) < t
              ? d
              : r(t) < t
                ? i(t) < t
                  ? g
                  : v
                : e(t) < t
                  ? m
                  : x
    )(t);
  }
  return (
    (c.invert = function (t) {
      return new Date(l(t));
    }),
    (c.domain = function (t) {
      return arguments.length ? f(Array.from(t, pa)) : f().map(fa);
    }),
    (c.ticks = function (n) {
      var e = f();
      return t(e[0], e[e.length - 1], null == n ? 10 : n);
    }),
    (c.tickFormat = function (t, n) {
      return null == n ? w : h(n);
    }),
    (c.nice = function (t) {
      var e = f();
      return (
        (t && 'function' == typeof t.range) || (t = n(e[0], e[e.length - 1], null == t ? 10 : t)),
        t
          ? f(
              (function (t, n) {
                var e,
                  r = 0,
                  i = (t = t.slice()).length - 1,
                  o = t[r],
                  a = t[i];
                return (
                  a < o && ((e = r), (r = i), (i = e), (e = o), (o = a), (a = e)),
                  (t[r] = n.floor(o)),
                  (t[i] = n.ceil(a)),
                  t
                );
              })(e, t)
            )
          : c
      );
    }),
    (c.copy = function () {
      return ti(c, _a(t, n, e, r, i, o, a, u, s, h));
    }),
    c
  );
}
function ya() {
  return Rr.apply(
    _a(Xi, Li, Hi, ji, Mi, xi, mi, vi, gi, Vi).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
    arguments
  );
}
!(function (t) {
  ((Bi = (function (t) {
    var n = t.dateTime,
      e = t.date,
      r = t.time,
      i = t.periods,
      o = t.days,
      a = t.shortDays,
      u = t.months,
      s = t.shortMonths,
      h = to(i),
      c = no(i),
      l = to(o),
      f = no(o),
      p = to(a),
      _ = no(a),
      y = to(u),
      d = no(u),
      g = to(s),
      v = no(s),
      m = {
        a: function (t) {
          return a[t.getDay()];
        },
        A: function (t) {
          return o[t.getDay()];
        },
        b: function (t) {
          return s[t.getMonth()];
        },
        B: function (t) {
          return u[t.getMonth()];
        },
        c: null,
        d: Mo,
        e: Mo,
        f: Eo,
        g: Ho,
        G: Xo,
        H: ko,
        I: No,
        j: To,
        L: Ao,
        m: So,
        M: $o,
        p: function (t) {
          return i[+(t.getHours() >= 12)];
        },
        q: function (t) {
          return 1 + ~~(t.getMonth() / 3);
        },
        Q: ca,
        s: la,
        S: Co,
        u: zo,
        U: Do,
        V: Po,
        w: qo,
        W: Yo,
        x: null,
        X: null,
        y: jo,
        Y: Fo,
        Z: Lo,
        '%': ha,
      },
      x = {
        a: function (t) {
          return a[t.getUTCDay()];
        },
        A: function (t) {
          return o[t.getUTCDay()];
        },
        b: function (t) {
          return s[t.getUTCMonth()];
        },
        B: function (t) {
          return u[t.getUTCMonth()];
        },
        c: null,
        d: Oo,
        e: Oo,
        f: Wo,
        g: oa,
        G: ua,
        H: Ro,
        I: Io,
        j: Bo,
        L: Vo,
        m: Zo,
        M: Go,
        p: function (t) {
          return i[+(t.getUTCHours() >= 12)];
        },
        q: function (t) {
          return 1 + ~~(t.getUTCMonth() / 3);
        },
        Q: ca,
        s: la,
        S: Qo,
        u: Jo,
        U: Ko,
        V: na,
        w: ea,
        W: ra,
        x: null,
        X: null,
        y: ia,
        Y: aa,
        Z: sa,
        '%': ha,
      },
      w = {
        a: function (t, n, e) {
          var r = p.exec(n.slice(e));
          return r ? ((t.w = _.get(r[0].toLowerCase())), e + r[0].length) : -1;
        },
        A: function (t, n, e) {
          var r = l.exec(n.slice(e));
          return r ? ((t.w = f.get(r[0].toLowerCase())), e + r[0].length) : -1;
        },
        b: function (t, n, e) {
          var r = g.exec(n.slice(e));
          return r ? ((t.m = v.get(r[0].toLowerCase())), e + r[0].length) : -1;
        },
        B: function (t, n, e) {
          var r = y.exec(n.slice(e));
          return r ? ((t.m = d.get(r[0].toLowerCase())), e + r[0].length) : -1;
        },
        c: function (t, e, r) {
          return k(t, n, e, r);
        },
        d: fo,
        e: fo,
        f: mo,
        g: so,
        G: uo,
        H: _o,
        I: _o,
        j: po,
        L: vo,
        m: lo,
        M: yo,
        p: function (t, n, e) {
          var r = h.exec(n.slice(e));
          return r ? ((t.p = c.get(r[0].toLowerCase())), e + r[0].length) : -1;
        },
        q: co,
        Q: wo,
        s: bo,
        S: go,
        u: ro,
        U: io,
        V: oo,
        w: eo,
        W: ao,
        x: function (t, n, r) {
          return k(t, e, n, r);
        },
        X: function (t, n, e) {
          return k(t, r, n, e);
        },
        y: so,
        Y: uo,
        Z: ho,
        '%': xo,
      };
    function b(t, n) {
      return function (e) {
        var r,
          i,
          o,
          a = [],
          u = -1,
          s = 0,
          h = t.length;
        for (e instanceof Date || (e = new Date(+e)); ++u < h; )
          37 === t.charCodeAt(u) &&
            (a.push(t.slice(s, u)),
            null != (i = Wi[(r = t.charAt(++u))])
              ? (r = t.charAt(++u))
              : (i = 'e' === r ? ' ' : '0'),
            (o = n[r]) && (r = o(e, i)),
            a.push(r),
            (s = u + 1));
        return (a.push(t.slice(s, u)), a.join(''));
      };
    }
    function M(t, n) {
      return function (e) {
        var r,
          i,
          o = Ii(1900, void 0, 1);
        if (k(o, t, (e += ''), 0) != e.length) return null;
        if ('Q' in o) return new Date(o.Q);
        if ('s' in o) return new Date(1e3 * o.s + ('L' in o ? o.L : 0));
        if (
          (n && !('Z' in o) && (o.Z = 0),
          'p' in o && (o.H = (o.H % 12) + 12 * o.p),
          void 0 === o.m && (o.m = 'q' in o ? o.q : 0),
          'V' in o)
        ) {
          if (o.V < 1 || o.V > 53) return null;
          ('w' in o || (o.w = 1),
            'Z' in o
              ? ((i = (r = Ri(Ii(o.y, 0, 1))).getUTCDay()),
                (r = i > 4 || 0 === i ? zi.ceil(r) : zi(r)),
                (r = wi.offset(r, 7 * (o.V - 1))),
                (o.y = r.getUTCFullYear()),
                (o.m = r.getUTCMonth()),
                (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
              : ((i = (r = Oi(Ii(o.y, 0, 1))).getDay()),
                (r = i > 4 || 0 === i ? ki.ceil(r) : ki(r)),
                (r = xi.offset(r, 7 * (o.V - 1))),
                (o.y = r.getFullYear()),
                (o.m = r.getMonth()),
                (o.d = r.getDate() + ((o.w + 6) % 7))));
        } else
          ('W' in o || 'U' in o) &&
            ('w' in o || (o.w = 'u' in o ? o.u % 7 : 'W' in o ? 1 : 0),
            (i = 'Z' in o ? Ri(Ii(o.y, 0, 1)).getUTCDay() : Oi(Ii(o.y, 0, 1)).getDay()),
            (o.m = 0),
            (o.d =
              'W' in o
                ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                : o.w + 7 * o.U - ((i + 6) % 7)));
        return 'Z' in o ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), Ri(o)) : Oi(o);
      };
    }
    function k(t, n, e, r) {
      for (var i, o, a = 0, u = n.length, s = e.length; a < u; ) {
        if (r >= s) return -1;
        if (37 === (i = n.charCodeAt(a++))) {
          if (((i = n.charAt(a++)), !(o = w[i in Wi ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0))
            return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }
      return r;
    }
    return (
      (m.x = b(e, m)),
      (m.X = b(r, m)),
      (m.c = b(n, m)),
      (x.x = b(e, x)),
      (x.X = b(r, x)),
      (x.c = b(n, x)),
      {
        format: function (t) {
          var n = b((t += ''), m);
          return (
            (n.toString = function () {
              return t;
            }),
            n
          );
        },
        parse: function (t) {
          var n = M((t += ''), !1);
          return (
            (n.toString = function () {
              return t;
            }),
            n
          );
        },
        utcFormat: function (t) {
          var n = b((t += ''), x);
          return (
            (n.toString = function () {
              return t;
            }),
            n
          );
        },
        utcParse: function (t) {
          var n = M((t += ''), !0);
          return (
            (n.toString = function () {
              return t;
            }),
            n
          );
        },
      }
    );
  })(t)),
    (Vi = Bi.format),
    Bi.parse,
    Bi.utcFormat,
    Bi.utcParse);
})({
  dateTime: '%x, %X',
  date: '%-m/%-d/%Y',
  time: '%-I:%M:%S %p',
  periods: ['AM', 'PM'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
});
const da = (function (t) {
  for (var n = (t.length / 6) | 0, e = new Array(n), r = 0; r < n; )
    e[r] = '#' + t.slice(6 * r, 6 * ++r);
  return e;
})('4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab');
function ga(t) {
  return function () {
    return t;
  };
}
const va = Math.abs,
  ma = Math.atan2,
  xa = Math.cos,
  wa = Math.max,
  ba = Math.min,
  Ma = Math.sin,
  ka = Math.sqrt,
  Na = 1e-12,
  Ta = Math.PI,
  Aa = Ta / 2,
  Ea = 2 * Ta;
function Sa(t) {
  return t >= 1 ? Aa : t <= -1 ? -Aa : Math.asin(t);
}
function $a(t) {
  let n = 3;
  return (
    (t.digits = function (e) {
      if (!arguments.length) return n;
      if (null == e) n = null;
      else {
        const t = Math.floor(e);
        if (!(t >= 0)) throw new RangeError(`invalid digits: ${e}`);
        n = t;
      }
      return t;
    }),
    () => new _r(n)
  );
}
function Ca(t) {
  return t.innerRadius;
}
function za(t) {
  return t.outerRadius;
}
function Da(t) {
  return t.startAngle;
}
function Ua(t) {
  return t.endAngle;
}
function Pa(t) {
  return t && t.padAngle;
}
function qa(t, n, e, r, i, o, a) {
  var u = t - e,
    s = n - r,
    h = (a ? o : -o) / ka(u * u + s * s),
    c = h * s,
    l = -h * u,
    f = t + c,
    p = n + l,
    _ = e + c,
    y = r + l,
    d = (f + _) / 2,
    g = (p + y) / 2,
    v = _ - f,
    m = y - p,
    x = v * v + m * m,
    w = i - o,
    b = f * y - _ * p,
    M = (m < 0 ? -1 : 1) * ka(wa(0, w * w * x - b * b)),
    k = (b * m - v * M) / x,
    N = (-b * v - m * M) / x,
    T = (b * m + v * M) / x,
    A = (-b * v + m * M) / x,
    E = k - d,
    S = N - g,
    $ = T - d,
    C = A - g;
  return (
    E * E + S * S > $ * $ + C * C && ((k = T), (N = A)),
    { cx: k, cy: N, x01: -c, y01: -l, x11: k * (i / w - 1), y11: N * (i / w - 1) }
  );
}
function Ya() {
  var t = Ca,
    n = za,
    e = ga(0),
    r = null,
    i = Da,
    o = Ua,
    a = Pa,
    u = null,
    s = $a(h);
  function h() {
    var h,
      c,
      l,
      f = +t.apply(this, arguments),
      p = +n.apply(this, arguments),
      _ = i.apply(this, arguments) - Aa,
      y = o.apply(this, arguments) - Aa,
      d = va(y - _),
      g = y > _;
    if ((u || (u = h = s()), p < f && ((c = p), (p = f), (f = c)), p > Na))
      if (d > Ea - Na)
        (u.moveTo(p * xa(_), p * Ma(_)),
          u.arc(0, 0, p, _, y, !g),
          f > Na && (u.moveTo(f * xa(y), f * Ma(y)), u.arc(0, 0, f, y, _, g)));
      else {
        var v,
          m,
          x = _,
          w = y,
          b = _,
          M = y,
          k = d,
          N = d,
          T = a.apply(this, arguments) / 2,
          A = T > Na && (r ? +r.apply(this, arguments) : ka(f * f + p * p)),
          E = ba(va(p - f) / 2, +e.apply(this, arguments)),
          S = E,
          $ = E;
        if (A > Na) {
          var C = Sa((A / f) * Ma(T)),
            z = Sa((A / p) * Ma(T));
          ((k -= 2 * C) > Na
            ? ((b += C *= g ? 1 : -1), (M -= C))
            : ((k = 0), (b = M = (_ + y) / 2)),
            (N -= 2 * z) > Na
              ? ((x += z *= g ? 1 : -1), (w -= z))
              : ((N = 0), (x = w = (_ + y) / 2)));
        }
        var D = p * xa(x),
          U = p * Ma(x),
          P = f * xa(M),
          q = f * Ma(M);
        if (E > Na) {
          var Y,
            j = p * xa(w),
            H = p * Ma(w),
            F = f * xa(b),
            X = f * Ma(b);
          if (d < Ta)
            if (
              (Y = (function (t, n, e, r, i, o, a, u) {
                var s = e - t,
                  h = r - n,
                  c = a - i,
                  l = u - o,
                  f = l * s - c * h;
                if (!(f * f < Na))
                  return [t + (f = (c * (n - o) - l * (t - i)) / f) * s, n + f * h];
              })(D, U, F, X, j, H, P, q))
            ) {
              var L = D - Y[0],
                O = U - Y[1],
                R = j - Y[0],
                I = H - Y[1],
                B =
                  1 /
                  Ma(
                    ((l = (L * R + O * I) / (ka(L * L + O * O) * ka(R * R + I * I))) > 1
                      ? 0
                      : l < -1
                        ? Ta
                        : Math.acos(l)) / 2
                  ),
                V = ka(Y[0] * Y[0] + Y[1] * Y[1]);
              ((S = ba(E, (f - V) / (B - 1))), ($ = ba(E, (p - V) / (B + 1))));
            } else S = $ = 0;
        }
        (N > Na
          ? $ > Na
            ? ((v = qa(F, X, D, U, p, $, g)),
              (m = qa(j, H, P, q, p, $, g)),
              u.moveTo(v.cx + v.x01, v.cy + v.y01),
              $ < E
                ? u.arc(v.cx, v.cy, $, ma(v.y01, v.x01), ma(m.y01, m.x01), !g)
                : (u.arc(v.cx, v.cy, $, ma(v.y01, v.x01), ma(v.y11, v.x11), !g),
                  u.arc(
                    0,
                    0,
                    p,
                    ma(v.cy + v.y11, v.cx + v.x11),
                    ma(m.cy + m.y11, m.cx + m.x11),
                    !g
                  ),
                  u.arc(m.cx, m.cy, $, ma(m.y11, m.x11), ma(m.y01, m.x01), !g)))
            : (u.moveTo(D, U), u.arc(0, 0, p, x, w, !g))
          : u.moveTo(D, U),
          f > Na && k > Na
            ? S > Na
              ? ((v = qa(P, q, j, H, f, -S, g)),
                (m = qa(D, U, F, X, f, -S, g)),
                u.lineTo(v.cx + v.x01, v.cy + v.y01),
                S < E
                  ? u.arc(v.cx, v.cy, S, ma(v.y01, v.x01), ma(m.y01, m.x01), !g)
                  : (u.arc(v.cx, v.cy, S, ma(v.y01, v.x01), ma(v.y11, v.x11), !g),
                    u.arc(
                      0,
                      0,
                      f,
                      ma(v.cy + v.y11, v.cx + v.x11),
                      ma(m.cy + m.y11, m.cx + m.x11),
                      g
                    ),
                    u.arc(m.cx, m.cy, S, ma(m.y11, m.x11), ma(m.y01, m.x01), !g)))
              : u.arc(0, 0, f, M, b, g)
            : u.lineTo(P, q));
      }
    else u.moveTo(0, 0);
    if ((u.closePath(), h)) return ((u = null), h + '' || null);
  }
  return (
    (h.centroid = function () {
      var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
        r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Ta / 2;
      return [xa(r) * e, Ma(r) * e];
    }),
    (h.innerRadius = function (n) {
      return arguments.length ? ((t = 'function' == typeof n ? n : ga(+n)), h) : t;
    }),
    (h.outerRadius = function (t) {
      return arguments.length ? ((n = 'function' == typeof t ? t : ga(+t)), h) : n;
    }),
    (h.cornerRadius = function (t) {
      return arguments.length ? ((e = 'function' == typeof t ? t : ga(+t)), h) : e;
    }),
    (h.padRadius = function (t) {
      return arguments.length
        ? ((r = null == t ? null : 'function' == typeof t ? t : ga(+t)), h)
        : r;
    }),
    (h.startAngle = function (t) {
      return arguments.length ? ((i = 'function' == typeof t ? t : ga(+t)), h) : i;
    }),
    (h.endAngle = function (t) {
      return arguments.length ? ((o = 'function' == typeof t ? t : ga(+t)), h) : o;
    }),
    (h.padAngle = function (t) {
      return arguments.length ? ((a = 'function' == typeof t ? t : ga(+t)), h) : a;
    }),
    (h.context = function (t) {
      return arguments.length ? ((u = null == t ? null : t), h) : u;
    }),
    h
  );
}
function ja(t) {
  return 'object' == typeof t && 'length' in t ? t : Array.from(t);
}
function Ha(t) {
  this._context = t;
}
function Fa(t) {
  return new Ha(t);
}
function Xa(t) {
  return t[0];
}
function La(t) {
  return t[1];
}
function Oa(t, n) {
  var e = ga(!0),
    r = null,
    i = Fa,
    o = null,
    a = $a(u);
  function u(u) {
    var s,
      h,
      c,
      l = (u = ja(u)).length,
      f = !1;
    for (null == r && (o = i((c = a()))), s = 0; s <= l; ++s)
      (!(s < l && e((h = u[s]), s, u)) === f && ((f = !f) ? o.lineStart() : o.lineEnd()),
        f && o.point(+t(h, s, u), +n(h, s, u)));
    if (c) return ((o = null), c + '' || null);
  }
  return (
    (t = 'function' == typeof t ? t : void 0 === t ? Xa : ga(t)),
    (n = 'function' == typeof n ? n : void 0 === n ? La : ga(n)),
    (u.x = function (n) {
      return arguments.length ? ((t = 'function' == typeof n ? n : ga(+n)), u) : t;
    }),
    (u.y = function (t) {
      return arguments.length ? ((n = 'function' == typeof t ? t : ga(+t)), u) : n;
    }),
    (u.defined = function (t) {
      return arguments.length ? ((e = 'function' == typeof t ? t : ga(!!t)), u) : e;
    }),
    (u.curve = function (t) {
      return arguments.length ? ((i = t), null != r && (o = i(r)), u) : i;
    }),
    (u.context = function (t) {
      return arguments.length ? (null == t ? (r = o = null) : (o = i((r = t))), u) : r;
    }),
    u
  );
}
function Ra(t, n) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Ia(t) {
  return t;
}
function Ba() {
  var t = Ia,
    n = Ra,
    e = null,
    r = ga(0),
    i = ga(Ea),
    o = ga(0);
  function a(a) {
    var u,
      s,
      h,
      c,
      l,
      f = (a = ja(a)).length,
      p = 0,
      _ = new Array(f),
      y = new Array(f),
      d = +r.apply(this, arguments),
      g = Math.min(Ea, Math.max(-Ea, i.apply(this, arguments) - d)),
      v = Math.min(Math.abs(g) / f, o.apply(this, arguments)),
      m = v * (g < 0 ? -1 : 1);
    for (u = 0; u < f; ++u) (l = y[(_[u] = u)] = +t(a[u], u, a)) > 0 && (p += l);
    for (
      null != n
        ? _.sort(function (t, e) {
            return n(y[t], y[e]);
          })
        : null != e &&
          _.sort(function (t, n) {
            return e(a[t], a[n]);
          }),
        u = 0,
        h = p ? (g - f * m) / p : 0;
      u < f;
      ++u, d = c
    )
      ((s = _[u]),
        (c = d + ((l = y[s]) > 0 ? l * h : 0) + m),
        (y[s] = { data: a[s], index: u, value: l, startAngle: d, endAngle: c, padAngle: v }));
    return y;
  }
  return (
    (a.value = function (n) {
      return arguments.length ? ((t = 'function' == typeof n ? n : ga(+n)), a) : t;
    }),
    (a.sortValues = function (t) {
      return arguments.length ? ((n = t), (e = null), a) : n;
    }),
    (a.sort = function (t) {
      return arguments.length ? ((e = t), (n = null), a) : e;
    }),
    (a.startAngle = function (t) {
      return arguments.length ? ((r = 'function' == typeof t ? t : ga(+t)), a) : r;
    }),
    (a.endAngle = function (t) {
      return arguments.length ? ((i = 'function' == typeof t ? t : ga(+t)), a) : i;
    }),
    (a.padAngle = function (t) {
      return arguments.length ? ((o = 'function' == typeof t ? t : ga(+t)), a) : o;
    }),
    a
  );
}
Ha.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, n);
    }
  },
};
class Va {
  constructor(t, n) {
    ((this._context = t), (this._x = n));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n));
        break;
      case 1:
        this._point = 2;
      default:
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              n,
              t,
              n
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + n) / 2),
              t,
              this._y0,
              t,
              n
            );
    }
    ((this._x0 = t), (this._y0 = n));
  }
}
function Wa(t) {
  return new Va(t, !0);
}
function Za(t) {
  return new Va(t, !1);
}
function Ga() {}
function Qa(t, n, e) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + n) / 6,
    (t._y0 + 4 * t._y1 + e) / 6
  );
}
function Ja(t) {
  this._context = t;
}
function Ka(t) {
  return new Ja(t);
}
function tu(t) {
  this._context = t;
}
function nu(t) {
  return new tu(t);
}
function eu(t) {
  this._context = t;
}
function ru(t) {
  return new eu(t);
}
function iu(t, n) {
  ((this._basis = new Ja(t)), (this._beta = n));
}
((Ja.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        Qa(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
    }
    ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6));
      default:
        Qa(this, t, n);
    }
    ((this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n));
  },
}),
  (tu.prototype = {
    areaStart: Ga,
    areaEnd: Ga,
    lineStart: function () {
      ((this._x0 =
        this._x1 =
        this._x2 =
        this._x3 =
        this._x4 =
        this._y0 =
        this._y1 =
        this._y2 =
        this._y3 =
        this._y4 =
          NaN),
        (this._point = 0));
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          (this._context.moveTo(this._x2, this._y2), this._context.closePath());
          break;
        case 2:
          (this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
            this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
            this._context.closePath());
          break;
        case 3:
          (this.point(this._x2, this._y2),
            this.point(this._x3, this._y3),
            this.point(this._x4, this._y4));
      }
    },
    point: function (t, n) {
      switch (((t = +t), (n = +n), this._point)) {
        case 0:
          ((this._point = 1), (this._x2 = t), (this._y2 = n));
          break;
        case 1:
          ((this._point = 2), (this._x3 = t), (this._y3 = n));
          break;
        case 2:
          ((this._point = 3),
            (this._x4 = t),
            (this._y4 = n),
            this._context.moveTo(
              (this._x0 + 4 * this._x1 + t) / 6,
              (this._y0 + 4 * this._y1 + n) / 6
            ));
          break;
        default:
          Qa(this, t, n);
      }
      ((this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n));
    },
  }),
  (eu.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
    },
    lineEnd: function () {
      ((this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
        (this._line = 1 - this._line));
    },
    point: function (t, n) {
      switch (((t = +t), (n = +n), this._point)) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var e = (this._x0 + 4 * this._x1 + t) / 6,
            r = (this._y0 + 4 * this._y1 + n) / 6;
          this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
          break;
        case 3:
          this._point = 4;
        default:
          Qa(this, t, n);
      }
      ((this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n));
    },
  }),
  (iu.prototype = {
    lineStart: function () {
      ((this._x = []), (this._y = []), this._basis.lineStart());
    },
    lineEnd: function () {
      var t = this._x,
        n = this._y,
        e = t.length - 1;
      if (e > 0)
        for (var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, s = -1; ++s <= e; )
          ((r = s / e),
            this._basis.point(
              this._beta * t[s] + (1 - this._beta) * (i + r * a),
              this._beta * n[s] + (1 - this._beta) * (o + r * u)
            ));
      ((this._x = this._y = null), this._basis.lineEnd());
    },
    point: function (t, n) {
      (this._x.push(+t), this._y.push(+n));
    },
  }));
const ou = (function t(n) {
  function e(t) {
    return 1 === n ? new Ja(t) : new iu(t, n);
  }
  return (
    (e.beta = function (n) {
      return t(+n);
    }),
    e
  );
})(0.85);
function au(t, n, e) {
  t._context.bezierCurveTo(
    t._x1 + t._k * (t._x2 - t._x0),
    t._y1 + t._k * (t._y2 - t._y0),
    t._x2 + t._k * (t._x1 - n),
    t._y2 + t._k * (t._y1 - e),
    t._x2,
    t._y2
  );
}
function uu(t, n) {
  ((this._context = t), (this._k = (1 - n) / 6));
}
uu.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        au(this, this._x1, this._y1);
    }
    ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n));
        break;
      case 1:
        ((this._point = 2), (this._x1 = t), (this._y1 = n));
        break;
      case 2:
        this._point = 3;
      default:
        au(this, t, n);
    }
    ((this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = t),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = n));
  },
};
const su = (function t(n) {
  function e(t) {
    return new uu(t, n);
  }
  return (
    (e.tension = function (n) {
      return t(+n);
    }),
    e
  );
})(0);
function hu(t, n) {
  ((this._context = t), (this._k = (1 - n) / 6));
}
hu.prototype = {
  areaStart: Ga,
  areaEnd: Ga,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._x5 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
      this._y5 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        (this._context.moveTo(this._x3, this._y3), this._context.closePath());
        break;
      case 2:
        (this._context.lineTo(this._x3, this._y3), this._context.closePath());
        break;
      case 3:
        (this.point(this._x3, this._y3),
          this.point(this._x4, this._y4),
          this.point(this._x5, this._y5));
    }
  },
  point: function (t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0:
        ((this._point = 1), (this._x3 = t), (this._y3 = n));
        break;
      case 1:
        ((this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = n)));
        break;
      case 2:
        ((this._point = 3), (this._x5 = t), (this._y5 = n));
        break;
      default:
        au(this, t, n);
    }
    ((this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = t),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = n));
  },
};
const cu = (function t(n) {
  function e(t) {
    return new hu(t, n);
  }
  return (
    (e.tension = function (n) {
      return t(+n);
    }),
    e
  );
})(0);
function lu(t, n) {
  ((this._context = t), (this._k = (1 - n) / 6));
}
lu.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._line
            ? this._context.lineTo(this._x2, this._y2)
            : this._context.moveTo(this._x2, this._y2));
        break;
      case 3:
        this._point = 4;
      default:
        au(this, t, n);
    }
    ((this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = t),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = n));
  },
};
const fu = (function t(n) {
  function e(t) {
    return new lu(t, n);
  }
  return (
    (e.tension = function (n) {
      return t(+n);
    }),
    e
  );
})(0);
function pu(t, n, e) {
  var r = t._x1,
    i = t._y1,
    o = t._x2,
    a = t._y2;
  if (t._l01_a > Na) {
    var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
      s = 3 * t._l01_a * (t._l01_a + t._l12_a);
    ((r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / s),
      (i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / s));
  }
  if (t._l23_a > Na) {
    var h = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
      c = 3 * t._l23_a * (t._l23_a + t._l12_a);
    ((o = (o * h + t._x1 * t._l23_2a - n * t._l12_2a) / c),
      (a = (a * h + t._y1 * t._l23_2a - e * t._l12_2a) / c));
  }
  t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2);
}
function _u(t, n) {
  ((this._context = t), (this._alpha = n));
}
_u.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
      (this._l01_a =
        this._l12_a =
        this._l23_a =
        this._l01_2a =
        this._l12_2a =
        this._l23_2a =
        this._point =
          0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
    }
    ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (t, n) {
    if (((t = +t), (n = +n), this._point)) {
      var e = this._x2 - t,
        r = this._y2 - n;
      this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)));
    }
    switch (this._point) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        pu(this, t, n);
    }
    ((this._l01_a = this._l12_a),
      (this._l12_a = this._l23_a),
      (this._l01_2a = this._l12_2a),
      (this._l12_2a = this._l23_2a),
      (this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = t),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = n));
  },
};
const yu = (function t(n) {
  function e(t) {
    return n ? new _u(t, n) : new uu(t, 0);
  }
  return (
    (e.alpha = function (n) {
      return t(+n);
    }),
    e
  );
})(0.5);
function du(t, n) {
  ((this._context = t), (this._alpha = n));
}
du.prototype = {
  areaStart: Ga,
  areaEnd: Ga,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._x5 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
      this._y5 =
        NaN),
      (this._l01_a =
        this._l12_a =
        this._l23_a =
        this._l01_2a =
        this._l12_2a =
        this._l23_2a =
        this._point =
          0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        (this._context.moveTo(this._x3, this._y3), this._context.closePath());
        break;
      case 2:
        (this._context.lineTo(this._x3, this._y3), this._context.closePath());
        break;
      case 3:
        (this.point(this._x3, this._y3),
          this.point(this._x4, this._y4),
          this.point(this._x5, this._y5));
    }
  },
  point: function (t, n) {
    if (((t = +t), (n = +n), this._point)) {
      var e = this._x2 - t,
        r = this._y2 - n;
      this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)));
    }
    switch (this._point) {
      case 0:
        ((this._point = 1), (this._x3 = t), (this._y3 = n));
        break;
      case 1:
        ((this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = n)));
        break;
      case 2:
        ((this._point = 3), (this._x5 = t), (this._y5 = n));
        break;
      default:
        pu(this, t, n);
    }
    ((this._l01_a = this._l12_a),
      (this._l12_a = this._l23_a),
      (this._l01_2a = this._l12_2a),
      (this._l12_2a = this._l23_2a),
      (this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = t),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = n));
  },
};
const gu = (function t(n) {
  function e(t) {
    return n ? new du(t, n) : new hu(t, 0);
  }
  return (
    (e.alpha = function (n) {
      return t(+n);
    }),
    e
  );
})(0.5);
function vu(t, n) {
  ((this._context = t), (this._alpha = n));
}
vu.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
      (this._l01_a =
        this._l12_a =
        this._l23_a =
        this._l01_2a =
        this._l12_2a =
        this._l23_2a =
        this._point =
          0));
  },
  lineEnd: function () {
    ((this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (t, n) {
    if (((t = +t), (n = +n), this._point)) {
      var e = this._x2 - t,
        r = this._y2 - n;
      this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._line
            ? this._context.lineTo(this._x2, this._y2)
            : this._context.moveTo(this._x2, this._y2));
        break;
      case 3:
        this._point = 4;
      default:
        pu(this, t, n);
    }
    ((this._l01_a = this._l12_a),
      (this._l12_a = this._l23_a),
      (this._l01_2a = this._l12_2a),
      (this._l12_2a = this._l23_2a),
      (this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = t),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = n));
  },
};
const mu = (function t(n) {
  function e(t) {
    return n ? new vu(t, n) : new lu(t, 0);
  }
  return (
    (e.alpha = function (n) {
      return t(+n);
    }),
    e
  );
})(0.5);
function xu(t) {
  this._context = t;
}
function wu(t) {
  return new xu(t);
}
function bu(t) {
  return t < 0 ? -1 : 1;
}
function Mu(t, n, e) {
  var r = t._x1 - t._x0,
    i = n - t._x1,
    o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
    a = (e - t._y1) / (i || (r < 0 && -0)),
    u = (o * i + a * r) / (r + i);
  return (bu(o) + bu(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) || 0;
}
function ku(t, n) {
  var e = t._x1 - t._x0;
  return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
}
function Nu(t, n, e) {
  var r = t._x0,
    i = t._y0,
    o = t._x1,
    a = t._y1,
    u = (o - r) / 3;
  t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a);
}
function Tu(t) {
  this._context = t;
}
function Au(t) {
  this._context = new Eu(t);
}
function Eu(t) {
  this._context = t;
}
function Su(t) {
  return new Tu(t);
}
function $u(t) {
  return new Au(t);
}
function Cu(t) {
  this._context = t;
}
function zu(t) {
  var n,
    e,
    r = t.length - 1,
    i = new Array(r),
    o = new Array(r),
    a = new Array(r);
  for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n)
    ((i[n] = 1), (o[n] = 4), (a[n] = 4 * t[n] + 2 * t[n + 1]));
  for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n)
    ((e = i[n] / o[n - 1]), (o[n] -= e), (a[n] -= e * a[n - 1]));
  for (i[r - 1] = a[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (a[n] - i[n + 1]) / o[n];
  for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
  return [i, o];
}
function Du(t) {
  return new Cu(t);
}
function Uu(t, n) {
  ((this._context = t), (this._t = n));
}
function Pu(t) {
  return new Uu(t, 0.5);
}
function qu(t) {
  return new Uu(t, 0);
}
function Yu(t) {
  return new Uu(t, 1);
}
function ju(t, n, e) {
  ((this.k = t), (this.x = n), (this.y = e));
}
((xu.prototype = {
  areaStart: Ga,
  areaEnd: Ga,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (t, n) {
    ((t = +t),
      (n = +n),
      this._point ? this._context.lineTo(t, n) : ((this._point = 1), this._context.moveTo(t, n)));
  },
}),
  (Tu.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0));
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          Nu(this, this._t0, ku(this, this._t0));
      }
      ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
        (this._line = 1 - this._line));
    },
    point: function (t, n) {
      var e = NaN;
      if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
        switch (this._point) {
          case 0:
            ((this._point = 1),
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n));
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            ((this._point = 3), Nu(this, ku(this, (e = Mu(this, t, n))), e));
            break;
          default:
            Nu(this, this._t0, (e = Mu(this, t, n)));
        }
        ((this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n),
          (this._t0 = e));
      }
    },
  }),
  ((Au.prototype = Object.create(Tu.prototype)).point = function (t, n) {
    Tu.prototype.point.call(this, n, t);
  }),
  (Eu.prototype = {
    moveTo: function (t, n) {
      this._context.moveTo(n, t);
    },
    closePath: function () {
      this._context.closePath();
    },
    lineTo: function (t, n) {
      this._context.lineTo(n, t);
    },
    bezierCurveTo: function (t, n, e, r, i, o) {
      this._context.bezierCurveTo(n, t, r, e, o, i);
    },
  }),
  (Cu.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      ((this._x = []), (this._y = []));
    },
    lineEnd: function () {
      var t = this._x,
        n = this._y,
        e = t.length;
      if (e)
        if (
          (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]),
          2 === e)
        )
          this._context.lineTo(t[1], n[1]);
        else
          for (var r = zu(t), i = zu(n), o = 0, a = 1; a < e; ++o, ++a)
            this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
      ((this._line || (0 !== this._line && 1 === e)) && this._context.closePath(),
        (this._line = 1 - this._line),
        (this._x = this._y = null));
    },
    point: function (t, n) {
      (this._x.push(+t), this._y.push(+n));
    },
  }),
  (Uu.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      ((this._x = this._y = NaN), (this._point = 0));
    },
    lineEnd: function () {
      (0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
        (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
        this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line)));
    },
    point: function (t, n) {
      switch (((t = +t), (n = +n), this._point)) {
        case 0:
          ((this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n));
          break;
        case 1:
          this._point = 2;
        default:
          if (this._t <= 0) (this._context.lineTo(this._x, n), this._context.lineTo(t, n));
          else {
            var e = this._x * (1 - this._t) + t * this._t;
            (this._context.lineTo(e, this._y), this._context.lineTo(e, n));
          }
      }
      ((this._x = t), (this._y = n));
    },
  }),
  (ju.prototype = {
    constructor: ju,
    scale: function (t) {
      return 1 === t ? this : new ju(this.k * t, this.x, this.y);
    },
    translate: function (t, n) {
      return (0 === t) & (0 === n)
        ? this
        : new ju(this.k, this.x + this.k * t, this.y + this.k * n);
    },
    apply: function (t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    },
    applyX: function (t) {
      return t * this.k + this.x;
    },
    applyY: function (t) {
      return t * this.k + this.y;
    },
    invert: function (t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    },
    invertX: function (t) {
      return (t - this.x) / this.k;
    },
    invertY: function (t) {
      return (t - this.y) / this.k;
    },
    rescaleX: function (t) {
      return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    },
    rescaleY: function (t) {
      return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    },
    toString: function () {
      return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
    },
  }),
  ju.prototype);
var Hu = { value: () => {} };
function Fu() {
  for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
    if (!(t = arguments[n] + '') || t in r || /[\s.]/.test(t))
      throw new Error('illegal type: ' + t);
    r[t] = [];
  }
  return new Xu(r);
}
function Xu(t) {
  this._ = t;
}
function Lu(t, n) {
  for (var e, r = 0, i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value;
}
function Ou(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      ((t[r] = Hu), (t = t.slice(0, r).concat(t.slice(r + 1))));
      break;
    }
  return (null != e && t.push({ name: n, value: e }), t);
}
Xu.prototype = Fu.prototype = {
  constructor: Xu,
  on: function (t, n) {
    var e,
      r,
      i = this._,
      o =
        ((r = i),
        (t + '')
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = '',
              e = t.indexOf('.');
            if ((e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))), t && !r.hasOwnProperty(t)))
              throw new Error('unknown type: ' + t);
            return { type: t, name: n };
          })),
      a = -1,
      u = o.length;
    if (!(arguments.length < 2)) {
      if (null != n && 'function' != typeof n) throw new Error('invalid callback: ' + n);
      for (; ++a < u; )
        if ((e = (t = o[a]).type)) i[e] = Ou(i[e], t.name, n);
        else if (null == n) for (e in i) i[e] = Ou(i[e], t.name, null);
      return this;
    }
    for (; ++a < u; ) if ((e = (t = o[a]).type) && (e = Lu(i[e], t.name))) return e;
  },
  copy: function () {
    var t = {},
      n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new Xu(t);
  },
  call: function (t, n) {
    if ((e = arguments.length - 2) > 0)
      for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
    for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i);
  },
  apply: function (t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  },
};
var Ru = 'http://www.w3.org/1999/xhtml';
const Iu = {
  svg: 'http://www.w3.org/2000/svg',
  xhtml: Ru,
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xmlns: 'http://www.w3.org/2000/xmlns/',
};
function Bu(t) {
  var n = (t += ''),
    e = n.indexOf(':');
  return (
    e >= 0 && 'xmlns' !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
    Iu.hasOwnProperty(n) ? { space: Iu[n], local: t } : t
  );
}
function Vu(t) {
  return function () {
    var n = this.ownerDocument,
      e = this.namespaceURI;
    return e === Ru && n.documentElement.namespaceURI === Ru
      ? n.createElement(t)
      : n.createElementNS(e, t);
  };
}
function Wu(t) {
  return function () {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Zu(t) {
  var n = Bu(t);
  return (n.local ? Wu : Vu)(n);
}
function Gu() {}
function Qu(t) {
  return null == t
    ? Gu
    : function () {
        return this.querySelector(t);
      };
}
function Ju() {
  return [];
}
function Ku(t) {
  return null == t
    ? Ju
    : function () {
        return this.querySelectorAll(t);
      };
}
function ts(t) {
  return function () {
    return null == (n = t.apply(this, arguments)) ? [] : Array.isArray(n) ? n : Array.from(n);
    var n;
  };
}
function ns(t) {
  return function () {
    return this.matches(t);
  };
}
function es(t) {
  return function (n) {
    return n.matches(t);
  };
}
var rs = Array.prototype.find;
function is() {
  return this.firstElementChild;
}
var os = Array.prototype.filter;
function as() {
  return Array.from(this.children);
}
function us(t) {
  return new Array(t.length);
}
function ss(t, n) {
  ((this.ownerDocument = t.ownerDocument),
    (this.namespaceURI = t.namespaceURI),
    (this._next = null),
    (this._parent = t),
    (this.__data__ = n));
}
function hs(t, n, e, r, i, o) {
  for (var a, u = 0, s = n.length, h = o.length; u < h; ++u)
    (a = n[u]) ? ((a.__data__ = o[u]), (r[u] = a)) : (e[u] = new ss(t, o[u]));
  for (; u < s; ++u) (a = n[u]) && (i[u] = a);
}
function cs(t, n, e, r, i, o, a) {
  var u,
    s,
    h,
    c = new Map(),
    l = n.length,
    f = o.length,
    p = new Array(l);
  for (u = 0; u < l; ++u)
    (s = n[u]) &&
      ((p[u] = h = a.call(s, s.__data__, u, n) + ''), c.has(h) ? (i[u] = s) : c.set(h, s));
  for (u = 0; u < f; ++u)
    ((h = a.call(t, o[u], u, o) + ''),
      (s = c.get(h)) ? ((r[u] = s), (s.__data__ = o[u]), c.delete(h)) : (e[u] = new ss(t, o[u])));
  for (u = 0; u < l; ++u) (s = n[u]) && c.get(p[u]) === s && (i[u] = s);
}
function ls(t) {
  return t.__data__;
}
function fs(t) {
  return 'object' == typeof t && 'length' in t ? t : Array.from(t);
}
function ps(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function _s(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function ys(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ds(t, n) {
  return function () {
    this.setAttribute(t, n);
  };
}
function gs(t, n) {
  return function () {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function vs(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function ms(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function xs(t) {
  return (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView;
}
function ws(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function bs(t, n, e) {
  return function () {
    this.style.setProperty(t, n, e);
  };
}
function Ms(t, n, e) {
  return function () {
    var r = n.apply(this, arguments);
    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ks(t, n) {
  return t.style.getPropertyValue(n) || xs(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Ns(t) {
  return function () {
    delete this[t];
  };
}
function Ts(t, n) {
  return function () {
    this[t] = n;
  };
}
function As(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    null == e ? delete this[t] : (this[t] = e);
  };
}
function Es(t) {
  return t.trim().split(/^|\s+/);
}
function Ss(t) {
  return t.classList || new $s(t);
}
function $s(t) {
  ((this._node = t), (this._names = Es(t.getAttribute('class') || '')));
}
function Cs(t, n) {
  for (var e = Ss(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function zs(t, n) {
  for (var e = Ss(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Ds(t) {
  return function () {
    Cs(this, t);
  };
}
function Us(t) {
  return function () {
    zs(this, t);
  };
}
function Ps(t, n) {
  return function () {
    (n.apply(this, arguments) ? Cs : zs)(this, t);
  };
}
function qs() {
  this.textContent = '';
}
function Ys(t) {
  return function () {
    this.textContent = t;
  };
}
function js(t) {
  return function () {
    var n = t.apply(this, arguments);
    this.textContent = null == n ? '' : n;
  };
}
function Hs() {
  this.innerHTML = '';
}
function Fs(t) {
  return function () {
    this.innerHTML = t;
  };
}
function Xs(t) {
  return function () {
    var n = t.apply(this, arguments);
    this.innerHTML = null == n ? '' : n;
  };
}
function Ls() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Os() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Rs() {
  return null;
}
function Is() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Bs() {
  var t = this.cloneNode(!1),
    n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Vs() {
  var t = this.cloneNode(!0),
    n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ws(t) {
  return function () {
    var n = this.__on;
    if (n) {
      for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
        ((e = n[r]),
          (t.type && e.type !== t.type) || e.name !== t.name
            ? (n[++i] = e)
            : this.removeEventListener(e.type, e.listener, e.options));
      ++i ? (n.length = i) : delete this.__on;
    }
  };
}
function Zs(t, n, e) {
  return function () {
    var r,
      i = this.__on,
      o = (function (t) {
        return function (n) {
          t.call(this, n, this.__data__);
        };
      })(n);
    if (i)
      for (var a = 0, u = i.length; a < u; ++a)
        if ((r = i[a]).type === t.type && r.name === t.name)
          return (
            this.removeEventListener(r.type, r.listener, r.options),
            this.addEventListener(r.type, (r.listener = o), (r.options = e)),
            void (r.value = n)
          );
    (this.addEventListener(t.type, o, e),
      (r = { type: t.type, name: t.name, value: n, listener: o, options: e }),
      i ? i.push(r) : (this.__on = [r]));
  };
}
function Gs(t, n, e) {
  var r = xs(t),
    i = r.CustomEvent;
  ('function' == typeof i
    ? (i = new i(n, e))
    : ((i = r.document.createEvent('Event')),
      e
        ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
        : i.initEvent(n, !1, !1)),
    t.dispatchEvent(i));
}
function Qs(t, n) {
  return function () {
    return Gs(this, t, n);
  };
}
function Js(t, n) {
  return function () {
    return Gs(this, t, n.apply(this, arguments));
  };
}
((ss.prototype = {
  constructor: ss,
  appendChild: function (t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function (t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function (t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function (t) {
    return this._parent.querySelectorAll(t);
  },
}),
  ($s.prototype = {
    add: function (t) {
      this._names.indexOf(t) < 0 &&
        (this._names.push(t), this._node.setAttribute('class', this._names.join(' ')));
    },
    remove: function (t) {
      var n = this._names.indexOf(t);
      n >= 0 && (this._names.splice(n, 1), this._node.setAttribute('class', this._names.join(' ')));
    },
    contains: function (t) {
      return this._names.indexOf(t) >= 0;
    },
  }));
var Ks = [null];
function th(t, n) {
  ((this._groups = t), (this._parents = n));
}
function nh() {
  return new th([[document.documentElement]], Ks);
}
function eh(t) {
  return 'string' == typeof t
    ? new th([[document.querySelector(t)]], [document.documentElement])
    : new th([[t]], Ks);
}
function rh(t, n) {
  if (
    ((t = (function (t) {
      let n;
      for (; (n = t.sourceEvent); ) t = n;
      return t;
    })(t)),
    void 0 === n && (n = t.currentTarget),
    n)
  ) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return (
        (r.x = t.clientX),
        (r.y = t.clientY),
        [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
      );
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
th.prototype = nh.prototype = {
  constructor: th,
  select: function (t) {
    'function' != typeof t && (t = Qu(t));
    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
      for (var o, a, u = n[i], s = u.length, h = (r[i] = new Array(s)), c = 0; c < s; ++c)
        (o = u[c]) &&
          (a = t.call(o, o.__data__, c, u)) &&
          ('__data__' in o && (a.__data__ = o.__data__), (h[c] = a));
    return new th(r, this._parents);
  },
  selectAll: function (t) {
    t = 'function' == typeof t ? ts(t) : Ku(t);
    for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
      for (var a, u = n[o], s = u.length, h = 0; h < s; ++h)
        (a = u[h]) && (r.push(t.call(a, a.__data__, h, u)), i.push(a));
    return new th(r, i);
  },
  selectChild: function (t) {
    return this.select(
      null == t
        ? is
        : (function (t) {
            return function () {
              return rs.call(this.children, t);
            };
          })('function' == typeof t ? t : es(t))
    );
  },
  selectChildren: function (t) {
    return this.selectAll(
      null == t
        ? as
        : (function (t) {
            return function () {
              return os.call(this.children, t);
            };
          })('function' == typeof t ? t : es(t))
    );
  },
  filter: function (t) {
    'function' != typeof t && (t = ns(t));
    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
      for (var o, a = n[i], u = a.length, s = (r[i] = []), h = 0; h < u; ++h)
        (o = a[h]) && t.call(o, o.__data__, h, a) && s.push(o);
    return new th(r, this._parents);
  },
  data: function (t, n) {
    if (!arguments.length) return Array.from(this, ls);
    var e,
      r = n ? cs : hs,
      i = this._parents,
      o = this._groups;
    'function' != typeof t &&
      ((e = t),
      (t = function () {
        return e;
      }));
    for (
      var a = o.length, u = new Array(a), s = new Array(a), h = new Array(a), c = 0;
      c < a;
      ++c
    ) {
      var l = i[c],
        f = o[c],
        p = f.length,
        _ = fs(t.call(l, l && l.__data__, c, i)),
        y = _.length,
        d = (s[c] = new Array(y)),
        g = (u[c] = new Array(y));
      r(l, f, d, g, (h[c] = new Array(p)), _, n);
      for (var v, m, x = 0, w = 0; x < y; ++x)
        if ((v = d[x])) {
          for (x >= w && (w = x + 1); !(m = g[w]) && ++w < y; );
          v._next = m || null;
        }
    }
    return (((u = new th(u, i))._enter = s), (u._exit = h), u);
  },
  enter: function () {
    return new th(this._enter || this._groups.map(us), this._parents);
  },
  exit: function () {
    return new th(this._exit || this._groups.map(us), this._parents);
  },
  join: function (t, n, e) {
    var r = this.enter(),
      i = this,
      o = this.exit();
    return (
      'function' == typeof t ? (r = t(r)) && (r = r.selection()) : (r = r.append(t + '')),
      null != n && (i = n(i)) && (i = i.selection()),
      null == e ? o.remove() : e(o),
      r && i ? r.merge(i).order() : i
    );
  },
  merge: function (t) {
    for (
      var n = t.selection ? t.selection() : t,
        e = this._groups,
        r = n._groups,
        i = e.length,
        o = r.length,
        a = Math.min(i, o),
        u = new Array(i),
        s = 0;
      s < a;
      ++s
    )
      for (var h, c = e[s], l = r[s], f = c.length, p = (u[s] = new Array(f)), _ = 0; _ < f; ++_)
        (h = c[_] || l[_]) && (p[_] = h);
    for (; s < i; ++s) u[s] = e[s];
    return new th(u, this._parents);
  },
  selection: function () {
    return this;
  },
  order: function () {
    for (var t = this._groups, n = -1, e = t.length; ++n < e; )
      for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0; )
        (r = i[o]) &&
          (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), (a = r));
    return this;
  },
  sort: function (t) {
    function n(n, e) {
      return n && e ? t(n.__data__, e.__data__) : !n - !e;
    }
    t || (t = ps);
    for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
      for (var a, u = e[o], s = u.length, h = (i[o] = new Array(s)), c = 0; c < s; ++c)
        (a = u[c]) && (h[c] = a);
      h.sort(n);
    }
    return new th(i, this._parents).order();
  },
  call: function () {
    var t = arguments[0];
    return ((arguments[0] = this), t.apply(null, arguments), this);
  },
  nodes: function () {
    return Array.from(this);
  },
  node: function () {
    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
      for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
        var a = r[i];
        if (a) return a;
      }
    return null;
  },
  size: function () {
    let t = 0;
    for (const n of this) ++t;
    return t;
  },
  empty: function () {
    return !this.node();
  },
  each: function (t) {
    for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
      for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)
        (i = o[a]) && t.call(i, i.__data__, a, o);
    return this;
  },
  attr: function (t, n) {
    var e = Bu(t);
    if (arguments.length < 2) {
      var r = this.node();
      return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
    }
    return this.each(
      (null == n
        ? e.local
          ? ys
          : _s
        : 'function' == typeof n
          ? e.local
            ? ms
            : vs
          : e.local
            ? gs
            : ds)(e, n)
    );
  },
  style: function (t, n, e) {
    return arguments.length > 1
      ? this.each((null == n ? ws : 'function' == typeof n ? Ms : bs)(t, n, null == e ? '' : e))
      : ks(this.node(), t);
  },
  property: function (t, n) {
    return arguments.length > 1
      ? this.each((null == n ? Ns : 'function' == typeof n ? As : Ts)(t, n))
      : this.node()[t];
  },
  classed: function (t, n) {
    var e = Es(t + '');
    if (arguments.length < 2) {
      for (var r = Ss(this.node()), i = -1, o = e.length; ++i < o; )
        if (!r.contains(e[i])) return !1;
      return !0;
    }
    return this.each(('function' == typeof n ? Ps : n ? Ds : Us)(e, n));
  },
  text: function (t) {
    return arguments.length
      ? this.each(null == t ? qs : ('function' == typeof t ? js : Ys)(t))
      : this.node().textContent;
  },
  html: function (t) {
    return arguments.length
      ? this.each(null == t ? Hs : ('function' == typeof t ? Xs : Fs)(t))
      : this.node().innerHTML;
  },
  raise: function () {
    return this.each(Ls);
  },
  lower: function () {
    return this.each(Os);
  },
  append: function (t) {
    var n = 'function' == typeof t ? t : Zu(t);
    return this.select(function () {
      return this.appendChild(n.apply(this, arguments));
    });
  },
  insert: function (t, n) {
    var e = 'function' == typeof t ? t : Zu(t),
      r = null == n ? Rs : 'function' == typeof n ? n : Qu(n);
    return this.select(function () {
      return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
    });
  },
  remove: function () {
    return this.each(Is);
  },
  clone: function (t) {
    return this.select(t ? Vs : Bs);
  },
  datum: function (t) {
    return arguments.length ? this.property('__data__', t) : this.node().__data__;
  },
  on: function (t, n, e) {
    var r,
      i,
      o = (function (t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = '',
              e = t.indexOf('.');
            return (e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))), { type: t, name: n });
          });
      })(t + ''),
      a = o.length;
    if (!(arguments.length < 2)) {
      for (u = n ? Zs : Ws, r = 0; r < a; ++r) this.each(u(o[r], n, e));
      return this;
    }
    var u = this.node().__on;
    if (u)
      for (var s, h = 0, c = u.length; h < c; ++h)
        for (r = 0, s = u[h]; r < a; ++r)
          if ((i = o[r]).type === s.type && i.name === s.name) return s.value;
  },
  dispatch: function (t, n) {
    return this.each(('function' == typeof n ? Js : Qs)(t, n));
  },
  [Symbol.iterator]: function* () {
    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
      for (var r, i = t[n], o = 0, a = i.length; o < a; ++o) (r = i[o]) && (yield r);
  },
};
const ih = { passive: !1 },
  oh = { capture: !0, passive: !1 };
function ah(t) {
  t.stopImmediatePropagation();
}
function uh(t) {
  (t.preventDefault(), t.stopImmediatePropagation());
}
function sh(t) {
  var n = t.document.documentElement,
    e = eh(t).on('dragstart.drag', uh, oh);
  'onselectstart' in n
    ? e.on('selectstart.drag', uh, oh)
    : ((n.__noselect = n.style.MozUserSelect), (n.style.MozUserSelect = 'none'));
}
function hh(t, n) {
  var e = t.document.documentElement,
    r = eh(t).on('dragstart.drag', null);
  (n &&
    (r.on('click.drag', uh, oh),
    setTimeout(function () {
      r.on('click.drag', null);
    }, 0)),
    'onselectstart' in e
      ? r.on('selectstart.drag', null)
      : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect));
}
const ch = (t) => () => t;
function lh(
  t,
  {
    sourceEvent: n,
    subject: e,
    target: r,
    identifier: i,
    active: o,
    x: a,
    y: u,
    dx: s,
    dy: h,
    dispatch: c,
  }
) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: u, enumerable: !0, configurable: !0 },
    dx: { value: s, enumerable: !0, configurable: !0 },
    dy: { value: h, enumerable: !0, configurable: !0 },
    _: { value: c },
  });
}
function fh(t) {
  return !t.ctrlKey && !t.button;
}
function ph() {
  return this.parentNode;
}
function _h(t, n) {
  return null == n ? { x: t.x, y: t.y } : n;
}
function yh() {
  return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function dh(t, n, e) {
  ((t.prototype = n.prototype = e), (e.constructor = t));
}
function gh(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function vh() {}
lh.prototype.on = function () {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
var mh = 0.7,
  xh = 1 / mh,
  wh = '\\s*([+-]?\\d+)\\s*',
  bh = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  Mh = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  kh = /^#([0-9a-f]{3,8})$/,
  Nh = new RegExp(`^rgb\\(${wh},${wh},${wh}\\)$`),
  Th = new RegExp(`^rgb\\(${Mh},${Mh},${Mh}\\)$`),
  Ah = new RegExp(`^rgba\\(${wh},${wh},${wh},${bh}\\)$`),
  Eh = new RegExp(`^rgba\\(${Mh},${Mh},${Mh},${bh}\\)$`),
  Sh = new RegExp(`^hsl\\(${bh},${Mh},${Mh}\\)$`),
  $h = new RegExp(`^hsla\\(${bh},${Mh},${Mh},${bh}\\)$`),
  Ch = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
function zh() {
  return this.rgb().formatHex();
}
function Dh() {
  return this.rgb().formatRgb();
}
function Uh(t) {
  var n, e;
  return (
    (t = (t + '').trim().toLowerCase()),
    (n = kh.exec(t))
      ? ((e = n[1].length),
        (n = parseInt(n[1], 16)),
        6 === e
          ? Ph(n)
          : 3 === e
            ? new jh(
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                ((15 & n) << 4) | (15 & n),
                1
              )
            : 8 === e
              ? qh((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (255 & n) / 255)
              : 4 === e
                ? qh(
                    ((n >> 12) & 15) | ((n >> 8) & 240),
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (240 & n),
                    (((15 & n) << 4) | (15 & n)) / 255
                  )
                : null)
      : (n = Nh.exec(t))
        ? new jh(n[1], n[2], n[3], 1)
        : (n = Th.exec(t))
          ? new jh((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
          : (n = Ah.exec(t))
            ? qh(n[1], n[2], n[3], n[4])
            : (n = Eh.exec(t))
              ? qh((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
              : (n = Sh.exec(t))
                ? Rh(n[1], n[2] / 100, n[3] / 100, 1)
                : (n = $h.exec(t))
                  ? Rh(n[1], n[2] / 100, n[3] / 100, n[4])
                  : Ch.hasOwnProperty(t)
                    ? Ph(Ch[t])
                    : 'transparent' === t
                      ? new jh(NaN, NaN, NaN, 0)
                      : null
  );
}
function Ph(t) {
  return new jh((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
}
function qh(t, n, e, r) {
  return (r <= 0 && (t = n = e = NaN), new jh(t, n, e, r));
}
function Yh(t, n, e, r) {
  return 1 === arguments.length
    ? ((i = t) instanceof vh || (i = Uh(i)),
      i ? new jh((i = i.rgb()).r, i.g, i.b, i.opacity) : new jh())
    : new jh(t, n, e, null == r ? 1 : r);
  var i;
}
function jh(t, n, e, r) {
  ((this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r));
}
function Hh() {
  return `#${Oh(this.r)}${Oh(this.g)}${Oh(this.b)}`;
}
function Fh() {
  const t = Xh(this.opacity);
  return `${1 === t ? 'rgb(' : 'rgba('}${Lh(this.r)}, ${Lh(this.g)}, ${Lh(this.b)}${1 === t ? ')' : `, ${t})`}`;
}
function Xh(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Lh(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Oh(t) {
  return ((t = Lh(t)) < 16 ? '0' : '') + t.toString(16);
}
function Rh(t, n, e, r) {
  return (
    r <= 0 ? (t = n = e = NaN) : e <= 0 || e >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN),
    new Bh(t, n, e, r)
  );
}
function Ih(t) {
  if (t instanceof Bh) return new Bh(t.h, t.s, t.l, t.opacity);
  if ((t instanceof vh || (t = Uh(t)), !t)) return new Bh();
  if (t instanceof Bh) return t;
  var n = (t = t.rgb()).r / 255,
    e = t.g / 255,
    r = t.b / 255,
    i = Math.min(n, e, r),
    o = Math.max(n, e, r),
    a = NaN,
    u = o - i,
    s = (o + i) / 2;
  return (
    u
      ? ((a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4),
        (u /= s < 0.5 ? o + i : 2 - o - i),
        (a *= 60))
      : (u = s > 0 && s < 1 ? 0 : a),
    new Bh(a, u, s, t.opacity)
  );
}
function Bh(t, n, e, r) {
  ((this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r));
}
function Vh(t) {
  return (t = (t || 0) % 360) < 0 ? t + 360 : t;
}
function Wh(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Zh(t, n, e) {
  return (
    255 *
    (t < 60 ? n + ((e - n) * t) / 60 : t < 180 ? e : t < 240 ? n + ((e - n) * (240 - t)) / 60 : n)
  );
}
(dh(vh, Uh, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: zh,
  formatHex: zh,
  formatHex8: function () {
    return this.rgb().formatHex8();
  },
  formatHsl: function () {
    return Ih(this).formatHsl();
  },
  formatRgb: Dh,
  toString: Dh,
}),
  dh(
    jh,
    Yh,
    gh(vh, {
      brighter(t) {
        return (
          (t = null == t ? xh : Math.pow(xh, t)),
          new jh(this.r * t, this.g * t, this.b * t, this.opacity)
        );
      },
      darker(t) {
        return (
          (t = null == t ? mh : Math.pow(mh, t)),
          new jh(this.r * t, this.g * t, this.b * t, this.opacity)
        );
      },
      rgb() {
        return this;
      },
      clamp() {
        return new jh(Lh(this.r), Lh(this.g), Lh(this.b), Xh(this.opacity));
      },
      displayable() {
        return (
          -0.5 <= this.r &&
          this.r < 255.5 &&
          -0.5 <= this.g &&
          this.g < 255.5 &&
          -0.5 <= this.b &&
          this.b < 255.5 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      hex: Hh,
      formatHex: Hh,
      formatHex8: function () {
        return `#${Oh(this.r)}${Oh(this.g)}${Oh(this.b)}${Oh(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
      },
      formatRgb: Fh,
      toString: Fh,
    })
  ),
  dh(
    Bh,
    function (t, n, e, r) {
      return 1 === arguments.length ? Ih(t) : new Bh(t, n, e, null == r ? 1 : r);
    },
    gh(vh, {
      brighter(t) {
        return (
          (t = null == t ? xh : Math.pow(xh, t)),
          new Bh(this.h, this.s, this.l * t, this.opacity)
        );
      },
      darker(t) {
        return (
          (t = null == t ? mh : Math.pow(mh, t)),
          new Bh(this.h, this.s, this.l * t, this.opacity)
        );
      },
      rgb() {
        var t = (this.h % 360) + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < 0.5 ? e : 1 - e) * n,
          i = 2 * e - r;
        return new jh(
          Zh(t >= 240 ? t - 240 : t + 120, i, r),
          Zh(t, i, r),
          Zh(t < 120 ? t + 240 : t - 120, i, r),
          this.opacity
        );
      },
      clamp() {
        return new Bh(Vh(this.h), Wh(this.s), Wh(this.l), Xh(this.opacity));
      },
      displayable() {
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      formatHsl() {
        const t = Xh(this.opacity);
        return `${1 === t ? 'hsl(' : 'hsla('}${Vh(this.h)}, ${100 * Wh(this.s)}%, ${100 * Wh(this.l)}%${1 === t ? ')' : `, ${t})`}`;
      },
    })
  ));
const Gh = (t) => () => t;
function Qh(t) {
  return 1 === (t = +t)
    ? Jh
    : function (n, e) {
        return e - n
          ? (function (t, n, e) {
              return (
                (t = Math.pow(t, e)),
                (n = Math.pow(n, e) - t),
                (e = 1 / e),
                function (r) {
                  return Math.pow(t + r * n, e);
                }
              );
            })(n, e, t)
          : Gh(isNaN(n) ? e : n);
      };
}
function Jh(t, n) {
  var e = n - t;
  return e
    ? (function (t, n) {
        return function (e) {
          return t + e * n;
        };
      })(t, e)
    : Gh(isNaN(t) ? n : t);
}
const Kh = (function t(n) {
  var e = Qh(n);
  function r(t, n) {
    var r = e((t = Yh(t)).r, (n = Yh(n)).r),
      i = e(t.g, n.g),
      o = e(t.b, n.b),
      a = Jh(t.opacity, n.opacity);
    return function (n) {
      return ((t.r = r(n)), (t.g = i(n)), (t.b = o(n)), (t.opacity = a(n)), t + '');
    };
  }
  return ((r.gamma = t), r);
})(1);
function tc(t, n) {
  return (
    (t = +t),
    (n = +n),
    function (e) {
      return t * (1 - e) + n * e;
    }
  );
}
var nc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  ec = new RegExp(nc.source, 'g');
function rc(t, n) {
  var e,
    r,
    i,
    o = (nc.lastIndex = ec.lastIndex = 0),
    a = -1,
    u = [],
    s = [];
  for (t += '', n += ''; (e = nc.exec(t)) && (r = ec.exec(n)); )
    ((i = r.index) > o && ((i = n.slice(o, i)), u[a] ? (u[a] += i) : (u[++a] = i)),
      (e = e[0]) === (r = r[0])
        ? u[a]
          ? (u[a] += r)
          : (u[++a] = r)
        : ((u[++a] = null), s.push({ i: a, x: tc(e, r) })),
      (o = ec.lastIndex));
  return (
    o < n.length && ((i = n.slice(o)), u[a] ? (u[a] += i) : (u[++a] = i)),
    u.length < 2
      ? s[0]
        ? (function (t) {
            return function (n) {
              return t(n) + '';
            };
          })(s[0].x)
        : (function (t) {
            return function () {
              return t;
            };
          })(n)
      : ((n = s.length),
        function (t) {
          for (var e, r = 0; r < n; ++r) u[(e = s[r]).i] = e.x(t);
          return u.join('');
        })
  );
}
var ic,
  oc = 180 / Math.PI,
  ac = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function uc(t, n, e, r, i, o) {
  var a, u, s;
  return (
    (a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
    (s = t * e + n * r) && ((e -= t * s), (r -= n * s)),
    (u = Math.sqrt(e * e + r * r)) && ((e /= u), (r /= u), (s /= u)),
    t * r < n * e && ((t = -t), (n = -n), (s = -s), (a = -a)),
    {
      translateX: i,
      translateY: o,
      rotate: Math.atan2(n, t) * oc,
      skewX: Math.atan(s) * oc,
      scaleX: a,
      scaleY: u,
    }
  );
}
function sc(t, n, e, r) {
  function i(t) {
    return t.length ? t.pop() + ' ' : '';
  }
  return function (o, a) {
    var u = [],
      s = [];
    return (
      (o = t(o)),
      (a = t(a)),
      (function (t, r, i, o, a, u) {
        if (t !== i || r !== o) {
          var s = a.push('translate(', null, n, null, e);
          u.push({ i: s - 4, x: tc(t, i) }, { i: s - 2, x: tc(r, o) });
        } else (i || o) && a.push('translate(' + i + n + o + e);
      })(o.translateX, o.translateY, a.translateX, a.translateY, u, s),
      (function (t, n, e, o) {
        t !== n
          ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
            o.push({ i: e.push(i(e) + 'rotate(', null, r) - 2, x: tc(t, n) }))
          : n && e.push(i(e) + 'rotate(' + n + r);
      })(o.rotate, a.rotate, u, s),
      (function (t, n, e, o) {
        t !== n
          ? o.push({ i: e.push(i(e) + 'skewX(', null, r) - 2, x: tc(t, n) })
          : n && e.push(i(e) + 'skewX(' + n + r);
      })(o.skewX, a.skewX, u, s),
      (function (t, n, e, r, o, a) {
        if (t !== e || n !== r) {
          var u = o.push(i(o) + 'scale(', null, ',', null, ')');
          a.push({ i: u - 4, x: tc(t, e) }, { i: u - 2, x: tc(n, r) });
        } else (1 === e && 1 === r) || o.push(i(o) + 'scale(' + e + ',' + r + ')');
      })(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, s),
      (o = a = null),
      function (t) {
        for (var n, e = -1, r = s.length; ++e < r; ) u[(n = s[e]).i] = n.x(t);
        return u.join('');
      }
    );
  };
}
var hc = sc(
    function (t) {
      const n = new ('function' == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + '');
      return n.isIdentity ? ac : uc(n.a, n.b, n.c, n.d, n.e, n.f);
    },
    'px, ',
    'px)',
    'deg)'
  ),
  cc = sc(
    function (t) {
      return null == t
        ? ac
        : (ic || (ic = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
          ic.setAttribute('transform', t),
          (t = ic.transform.baseVal.consolidate())
            ? uc((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
            : ac);
    },
    ', ',
    ')',
    ')'
  );
function lc(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
const fc = (function t(n, e, r) {
  function i(t, i) {
    var o,
      a,
      u = t[0],
      s = t[1],
      h = t[2],
      c = i[0],
      l = i[1],
      f = i[2],
      p = c - u,
      _ = l - s,
      y = p * p + _ * _;
    if (y < 1e-12)
      ((a = Math.log(f / h) / n),
        (o = function (t) {
          return [u + t * p, s + t * _, h * Math.exp(n * t * a)];
        }));
    else {
      var d = Math.sqrt(y),
        g = (f * f - h * h + r * y) / (2 * h * e * d),
        v = (f * f - h * h - r * y) / (2 * f * e * d),
        m = Math.log(Math.sqrt(g * g + 1) - g),
        x = Math.log(Math.sqrt(v * v + 1) - v);
      ((a = (x - m) / n),
        (o = function (t) {
          var r,
            i = t * a,
            o = lc(m),
            c =
              (h / (e * d)) *
              (o * ((r = n * i + m), ((r = Math.exp(2 * r)) - 1) / (r + 1)) -
                (function (t) {
                  return ((t = Math.exp(t)) - 1 / t) / 2;
                })(m));
          return [u + c * p, s + c * _, (h * o) / lc(n * i + m)];
        }));
    }
    return ((o.duration = (1e3 * a * n) / Math.SQRT2), o);
  }
  return (
    (i.rho = function (n) {
      var e = Math.max(0.001, +n),
        r = e * e;
      return t(e, r, r * r);
    }),
    i
  );
})(Math.SQRT2, 2, 4);
var pc,
  _c,
  yc = 0,
  dc = 0,
  gc = 0,
  vc = 0,
  mc = 0,
  xc = 0,
  wc = 'object' == typeof performance && performance.now ? performance : Date,
  bc =
    'object' == typeof window && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (t) {
          setTimeout(t, 17);
        };
function Mc() {
  return mc || (bc(kc), (mc = wc.now() + xc));
}
function kc() {
  mc = 0;
}
function Nc() {
  this._call = this._time = this._next = null;
}
function Tc(t, n, e) {
  var r = new Nc();
  return (r.restart(t, n, e), r);
}
function Ac() {
  ((mc = (vc = wc.now()) + xc), (yc = dc = 0));
  try {
    !(function () {
      (Mc(), ++yc);
      for (var t, n = pc; n; ) ((t = mc - n._time) >= 0 && n._call.call(void 0, t), (n = n._next));
      --yc;
    })();
  } finally {
    ((yc = 0),
      (function () {
        var t,
          n,
          e = pc,
          r = 1 / 0;
        for (; e; )
          e._call
            ? (r > e._time && (r = e._time), (t = e), (e = e._next))
            : ((n = e._next), (e._next = null), (e = t ? (t._next = n) : (pc = n)));
        ((_c = t), Sc(r));
      })(),
      (mc = 0));
  }
}
function Ec() {
  var t = wc.now(),
    n = t - vc;
  n > 1e3 && ((xc -= n), (vc = t));
}
function Sc(t) {
  yc ||
    (dc && (dc = clearTimeout(dc)),
    t - mc > 24
      ? (t < 1 / 0 && (dc = setTimeout(Ac, t - wc.now() - xc)), gc && (gc = clearInterval(gc)))
      : (gc || ((vc = wc.now()), (gc = setInterval(Ec, 1e3))), (yc = 1), bc(Ac)));
}
function $c(t, n, e) {
  var r = new Nc();
  return (
    (n = null == n ? 0 : +n),
    r.restart(
      (e) => {
        (r.stop(), t(e + n));
      },
      n,
      e
    ),
    r
  );
}
Nc.prototype = Tc.prototype = {
  constructor: Nc,
  restart: function (t, n, e) {
    if ('function' != typeof t) throw new TypeError('callback is not a function');
    ((e = (null == e ? Mc() : +e) + (null == n ? 0 : +n)),
      this._next || _c === this || (_c ? (_c._next = this) : (pc = this), (_c = this)),
      (this._call = t),
      (this._time = e),
      Sc());
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Sc());
  },
};
var Cc = Fu('start', 'end', 'cancel', 'interrupt'),
  zc = [];
function Dc(t, n, e, r, i, o) {
  var a = t.__transition;
  if (a) {
    if (e in a) return;
  } else t.__transition = {};
  !(function (t, n, e) {
    var r,
      i = t.__transition;
    function o(t) {
      ((e.state = 1), e.timer.restart(a, e.delay, e.time), e.delay <= t && a(t - e.delay));
    }
    function a(o) {
      var h, c, l, f;
      if (1 !== e.state) return s();
      for (h in i)
        if ((f = i[h]).name === e.name) {
          if (3 === f.state) return $c(a);
          4 === f.state
            ? ((f.state = 6),
              f.timer.stop(),
              f.on.call('interrupt', t, t.__data__, f.index, f.group),
              delete i[h])
            : +h < n &&
              ((f.state = 6),
              f.timer.stop(),
              f.on.call('cancel', t, t.__data__, f.index, f.group),
              delete i[h]);
        }
      if (
        ($c(function () {
          3 === e.state && ((e.state = 4), e.timer.restart(u, e.delay, e.time), u(o));
        }),
        (e.state = 2),
        e.on.call('start', t, t.__data__, e.index, e.group),
        2 === e.state)
      ) {
        for (e.state = 3, r = new Array((l = e.tween.length)), h = 0, c = -1; h < l; ++h)
          (f = e.tween[h].value.call(t, t.__data__, e.index, e.group)) && (r[++c] = f);
        r.length = c + 1;
      }
    }
    function u(n) {
      for (
        var i =
            n < e.duration
              ? e.ease.call(null, n / e.duration)
              : (e.timer.restart(s), (e.state = 5), 1),
          o = -1,
          a = r.length;
        ++o < a;
      )
        r[o].call(t, i);
      5 === e.state && (e.on.call('end', t, t.__data__, e.index, e.group), s());
    }
    function s() {
      for (var r in ((e.state = 6), e.timer.stop(), delete i[n], i)) return;
      delete t.__transition;
    }
    ((i[n] = e), (e.timer = Tc(o, 0, e.time)));
  })(t, e, {
    name: n,
    index: r,
    group: i,
    on: Cc,
    tween: zc,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: 0,
  });
}
function Uc(t, n) {
  var e = qc(t, n);
  if (e.state > 0) throw new Error('too late; already scheduled');
  return e;
}
function Pc(t, n) {
  var e = qc(t, n);
  if (e.state > 3) throw new Error('too late; already running');
  return e;
}
function qc(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error('transition not found');
  return e;
}
function Yc(t, n) {
  var e,
    r,
    i,
    o = t.__transition,
    a = !0;
  if (o) {
    for (i in ((n = null == n ? null : n + ''), o))
      (e = o[i]).name === n
        ? ((r = e.state > 2 && e.state < 5),
          (e.state = 6),
          e.timer.stop(),
          e.on.call(r ? 'interrupt' : 'cancel', t, t.__data__, e.index, e.group),
          delete o[i])
        : (a = !1);
    a && delete t.__transition;
  }
}
function jc(t, n) {
  var e, r;
  return function () {
    var i = Pc(this, t),
      o = i.tween;
    if (o !== e)
      for (var a = 0, u = (r = e = o).length; a < u; ++a)
        if (r[a].name === n) {
          (r = r.slice()).splice(a, 1);
          break;
        }
    i.tween = r;
  };
}
function Hc(t, n, e) {
  var r, i;
  if ('function' != typeof e) throw new Error();
  return function () {
    var o = Pc(this, t),
      a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: n, value: e }, s = 0, h = i.length; s < h; ++s)
        if (i[s].name === n) {
          i[s] = u;
          break;
        }
      s === h && i.push(u);
    }
    o.tween = i;
  };
}
function Fc(t, n, e) {
  var r = t._id;
  return (
    t.each(function () {
      var t = Pc(this, r);
      (t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }),
    function (t) {
      return qc(t, r).value[n];
    }
  );
}
function Xc(t, n) {
  var e;
  return ('number' == typeof n ? tc : n instanceof Uh ? Kh : (e = Uh(n)) ? ((n = e), Kh) : rc)(
    t,
    n
  );
}
function Lc(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function Oc(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Rc(t, n, e) {
  var r,
    i,
    o = e + '';
  return function () {
    var a = this.getAttribute(t);
    return a === o ? null : a === r ? i : (i = n((r = a), e));
  };
}
function Ic(t, n, e) {
  var r,
    i,
    o = e + '';
  return function () {
    var a = this.getAttributeNS(t.space, t.local);
    return a === o ? null : a === r ? i : (i = n((r = a), e));
  };
}
function Bc(t, n, e) {
  var r, i, o;
  return function () {
    var a,
      u,
      s = e(this);
    if (null != s)
      return (a = this.getAttribute(t)) === (u = s + '')
        ? null
        : a === r && u === i
          ? o
          : ((i = u), (o = n((r = a), s)));
    this.removeAttribute(t);
  };
}
function Vc(t, n, e) {
  var r, i, o;
  return function () {
    var a,
      u,
      s = e(this);
    if (null != s)
      return (a = this.getAttributeNS(t.space, t.local)) === (u = s + '')
        ? null
        : a === r && u === i
          ? o
          : ((i = u), (o = n((r = a), s)));
    this.removeAttributeNS(t.space, t.local);
  };
}
function Wc(t, n) {
  var e, r;
  function i() {
    var i = n.apply(this, arguments);
    return (
      i !== r &&
        (e =
          (r = i) &&
          (function (t, n) {
            return function (e) {
              this.setAttributeNS(t.space, t.local, n.call(this, e));
            };
          })(t, i)),
      e
    );
  }
  return ((i._value = n), i);
}
function Zc(t, n) {
  var e, r;
  function i() {
    var i = n.apply(this, arguments);
    return (
      i !== r &&
        (e =
          (r = i) &&
          (function (t, n) {
            return function (e) {
              this.setAttribute(t, n.call(this, e));
            };
          })(t, i)),
      e
    );
  }
  return ((i._value = n), i);
}
function Gc(t, n) {
  return function () {
    Uc(this, t).delay = +n.apply(this, arguments);
  };
}
function Qc(t, n) {
  return (
    (n = +n),
    function () {
      Uc(this, t).delay = n;
    }
  );
}
function Jc(t, n) {
  return function () {
    Pc(this, t).duration = +n.apply(this, arguments);
  };
}
function Kc(t, n) {
  return (
    (n = +n),
    function () {
      Pc(this, t).duration = n;
    }
  );
}
var tl = nh.prototype.constructor;
function nl(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
var el = 0;
function rl(t, n, e, r) {
  ((this._groups = t), (this._parents = n), (this._name = e), (this._id = r));
}
function il() {
  return ++el;
}
var ol = nh.prototype;
rl.prototype = {
  constructor: rl,
  select: function (t) {
    var n = this._name,
      e = this._id;
    'function' != typeof t && (t = Qu(t));
    for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
      for (var u, s, h = r[a], c = h.length, l = (o[a] = new Array(c)), f = 0; f < c; ++f)
        (u = h[f]) &&
          (s = t.call(u, u.__data__, f, h)) &&
          ('__data__' in u && (s.__data__ = u.__data__),
          (l[f] = s),
          Dc(l[f], n, e, f, l, qc(u, e)));
    return new rl(o, this._parents, n, e);
  },
  selectAll: function (t) {
    var n = this._name,
      e = this._id;
    'function' != typeof t && (t = Ku(t));
    for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
      for (var s, h = r[u], c = h.length, l = 0; l < c; ++l)
        if ((s = h[l])) {
          for (
            var f, p = t.call(s, s.__data__, l, h), _ = qc(s, e), y = 0, d = p.length;
            y < d;
            ++y
          )
            (f = p[y]) && Dc(f, n, e, y, p, _);
          (o.push(p), a.push(s));
        }
    return new rl(o, a, n, e);
  },
  selectChild: ol.selectChild,
  selectChildren: ol.selectChildren,
  filter: function (t) {
    'function' != typeof t && (t = ns(t));
    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
      for (var o, a = n[i], u = a.length, s = (r[i] = []), h = 0; h < u; ++h)
        (o = a[h]) && t.call(o, o.__data__, h, a) && s.push(o);
    return new rl(r, this._parents, this._name, this._id);
  },
  merge: function (t) {
    if (t._id !== this._id) throw new Error();
    for (
      var n = this._groups,
        e = t._groups,
        r = n.length,
        i = e.length,
        o = Math.min(r, i),
        a = new Array(r),
        u = 0;
      u < o;
      ++u
    )
      for (var s, h = n[u], c = e[u], l = h.length, f = (a[u] = new Array(l)), p = 0; p < l; ++p)
        (s = h[p] || c[p]) && (f[p] = s);
    for (; u < r; ++u) a[u] = n[u];
    return new rl(a, this._parents, this._name, this._id);
  },
  selection: function () {
    return new tl(this._groups, this._parents);
  },
  transition: function () {
    for (
      var t = this._name, n = this._id, e = il(), r = this._groups, i = r.length, o = 0;
      o < i;
      ++o
    )
      for (var a, u = r[o], s = u.length, h = 0; h < s; ++h)
        if ((a = u[h])) {
          var c = qc(a, n);
          Dc(a, t, e, h, u, {
            time: c.time + c.delay + c.duration,
            delay: 0,
            duration: c.duration,
            ease: c.ease,
          });
        }
    return new rl(r, this._parents, t, e);
  },
  call: ol.call,
  nodes: ol.nodes,
  node: ol.node,
  size: ol.size,
  empty: ol.empty,
  each: ol.each,
  on: function (t, n) {
    var e = this._id;
    return arguments.length < 2
      ? qc(this.node(), e).on.on(t)
      : this.each(
          (function (t, n, e) {
            var r,
              i,
              o = (function (t) {
                return (t + '')
                  .trim()
                  .split(/^|\s+/)
                  .every(function (t) {
                    var n = t.indexOf('.');
                    return (n >= 0 && (t = t.slice(0, n)), !t || 'start' === t);
                  });
              })(n)
                ? Uc
                : Pc;
            return function () {
              var a = o(this, t),
                u = a.on;
              (u !== r && (i = (r = u).copy()).on(n, e), (a.on = i));
            };
          })(e, t, n)
        );
  },
  attr: function (t, n) {
    var e = Bu(t),
      r = 'transform' === e ? cc : Xc;
    return this.attrTween(
      t,
      'function' == typeof n
        ? (e.local ? Vc : Bc)(e, r, Fc(this, 'attr.' + t, n))
        : null == n
          ? (e.local ? Oc : Lc)(e)
          : (e.local ? Ic : Rc)(e, r, n)
    );
  },
  attrTween: function (t, n) {
    var e = 'attr.' + t;
    if (arguments.length < 2) return (e = this.tween(e)) && e._value;
    if (null == n) return this.tween(e, null);
    if ('function' != typeof n) throw new Error();
    var r = Bu(t);
    return this.tween(e, (r.local ? Wc : Zc)(r, n));
  },
  style: function (t, n, e) {
    var r = 'transform' == (t += '') ? hc : Xc;
    return null == n
      ? this.styleTween(
          t,
          (function (t, n) {
            var e, r, i;
            return function () {
              var o = ks(this, t),
                a = (this.style.removeProperty(t), ks(this, t));
              return o === a ? null : o === e && a === r ? i : (i = n((e = o), (r = a)));
            };
          })(t, r)
        ).on('end.style.' + t, nl(t))
      : 'function' == typeof n
        ? this.styleTween(
            t,
            (function (t, n, e) {
              var r, i, o;
              return function () {
                var a = ks(this, t),
                  u = e(this),
                  s = u + '';
                return (
                  null == u && (this.style.removeProperty(t), (s = u = ks(this, t))),
                  a === s ? null : a === r && s === i ? o : ((i = s), (o = n((r = a), u)))
                );
              };
            })(t, r, Fc(this, 'style.' + t, n))
          ).each(
            (function (t, n) {
              var e,
                r,
                i,
                o,
                a = 'style.' + n,
                u = 'end.' + a;
              return function () {
                var s = Pc(this, t),
                  h = s.on,
                  c = null == s.value[a] ? o || (o = nl(n)) : void 0;
                ((h === e && i === c) || (r = (e = h).copy()).on(u, (i = c)), (s.on = r));
              };
            })(this._id, t)
          )
        : this.styleTween(
            t,
            (function (t, n, e) {
              var r,
                i,
                o = e + '';
              return function () {
                var a = ks(this, t);
                return a === o ? null : a === r ? i : (i = n((r = a), e));
              };
            })(t, r, n),
            e
          ).on('end.style.' + t, null);
  },
  styleTween: function (t, n, e) {
    var r = 'style.' + (t += '');
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (null == n) return this.tween(r, null);
    if ('function' != typeof n) throw new Error();
    return this.tween(
      r,
      (function (t, n, e) {
        var r, i;
        function o() {
          var o = n.apply(this, arguments);
          return (
            o !== i &&
              (r =
                (i = o) &&
                (function (t, n, e) {
                  return function (r) {
                    this.style.setProperty(t, n.call(this, r), e);
                  };
                })(t, o, e)),
            r
          );
        }
        return ((o._value = n), o);
      })(t, n, null == e ? '' : e)
    );
  },
  text: function (t) {
    return this.tween(
      'text',
      'function' == typeof t
        ? (function (t) {
            return function () {
              var n = t(this);
              this.textContent = null == n ? '' : n;
            };
          })(Fc(this, 'text', t))
        : (function (t) {
            return function () {
              this.textContent = t;
            };
          })(null == t ? '' : t + '')
    );
  },
  textTween: function (t) {
    var n = 'text';
    if (arguments.length < 1) return (n = this.tween(n)) && n._value;
    if (null == t) return this.tween(n, null);
    if ('function' != typeof t) throw new Error();
    return this.tween(
      n,
      (function (t) {
        var n, e;
        function r() {
          var r = t.apply(this, arguments);
          return (
            r !== e &&
              (n =
                (e = r) &&
                (function (t) {
                  return function (n) {
                    this.textContent = t.call(this, n);
                  };
                })(r)),
            n
          );
        }
        return ((r._value = t), r);
      })(t)
    );
  },
  remove: function () {
    return this.on(
      'end.remove',
      ((t = this._id),
      function () {
        var n = this.parentNode;
        for (var e in this.__transition) if (+e !== t) return;
        n && n.removeChild(this);
      })
    );
    var t;
  },
  tween: function (t, n) {
    var e = this._id;
    if (((t += ''), arguments.length < 2)) {
      for (var r, i = qc(this.node(), e).tween, o = 0, a = i.length; o < a; ++o)
        if ((r = i[o]).name === t) return r.value;
      return null;
    }
    return this.each((null == n ? jc : Hc)(e, t, n));
  },
  delay: function (t) {
    var n = this._id;
    return arguments.length
      ? this.each(('function' == typeof t ? Gc : Qc)(n, t))
      : qc(this.node(), n).delay;
  },
  duration: function (t) {
    var n = this._id;
    return arguments.length
      ? this.each(('function' == typeof t ? Jc : Kc)(n, t))
      : qc(this.node(), n).duration;
  },
  ease: function (t) {
    var n = this._id;
    return arguments.length
      ? this.each(
          (function (t, n) {
            if ('function' != typeof n) throw new Error();
            return function () {
              Pc(this, t).ease = n;
            };
          })(n, t)
        )
      : qc(this.node(), n).ease;
  },
  easeVarying: function (t) {
    if ('function' != typeof t) throw new Error();
    return this.each(
      (function (t, n) {
        return function () {
          var e = n.apply(this, arguments);
          if ('function' != typeof e) throw new Error();
          Pc(this, t).ease = e;
        };
      })(this._id, t)
    );
  },
  end: function () {
    var t,
      n,
      e = this,
      r = e._id,
      i = e.size();
    return new Promise(function (o, a) {
      var u = { value: a },
        s = {
          value: function () {
            0 === --i && o();
          },
        };
      (e.each(function () {
        var e = Pc(this, r),
          i = e.on;
        (i !== t && ((n = (t = i).copy())._.cancel.push(u), n._.interrupt.push(u), n._.end.push(s)),
          (e.on = n));
      }),
        0 === i && o());
    });
  },
  [Symbol.iterator]: ol[Symbol.iterator],
};
var al = {
  time: null,
  delay: 0,
  duration: 250,
  ease: function (t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  },
};
function ul(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
  return e;
}
function sl(t, n, e, r) {
  if (isNaN(n) || isNaN(e)) return t;
  var i,
    o,
    a,
    u,
    s,
    h,
    c,
    l,
    f,
    p = t._root,
    _ = { data: r },
    y = t._x0,
    d = t._y0,
    g = t._x1,
    v = t._y1;
  if (!p) return ((t._root = _), t);
  for (; p.length; )
    if (
      ((h = n >= (o = (y + g) / 2)) ? (y = o) : (g = o),
      (c = e >= (a = (d + v) / 2)) ? (d = a) : (v = a),
      (i = p),
      !(p = p[(l = (c << 1) | h)]))
    )
      return ((i[l] = _), t);
  if (((u = +t._x.call(null, p.data)), (s = +t._y.call(null, p.data)), n === u && e === s))
    return ((_.next = p), i ? (i[l] = _) : (t._root = _), t);
  do {
    ((i = i ? (i[l] = new Array(4)) : (t._root = new Array(4))),
      (h = n >= (o = (y + g) / 2)) ? (y = o) : (g = o),
      (c = e >= (a = (d + v) / 2)) ? (d = a) : (v = a));
  } while ((l = (c << 1) | h) == (f = ((s >= a) << 1) | (u >= o)));
  return ((i[f] = p), (i[l] = _), t);
}
function hl(t, n, e, r, i) {
  ((this.node = t), (this.x0 = n), (this.y0 = e), (this.x1 = r), (this.y1 = i));
}
function cl(t) {
  return t[0];
}
function ll(t) {
  return t[1];
}
function fl(t, n, e) {
  var r = new pl(null == n ? cl : n, null == e ? ll : e, NaN, NaN, NaN, NaN);
  return null == t ? r : r.addAll(t);
}
function pl(t, n, e, r, i, o) {
  ((this._x = t),
    (this._y = n),
    (this._x0 = e),
    (this._y0 = r),
    (this._x1 = i),
    (this._y1 = o),
    (this._root = void 0));
}
function _l(t) {
  for (var n = { data: t.data }, e = n; (t = t.next); ) e = e.next = { data: t.data };
  return n;
}
((nh.prototype.interrupt = function (t) {
  return this.each(function () {
    Yc(this, t);
  });
}),
  (nh.prototype.transition = function (t) {
    var n, e;
    t instanceof rl
      ? ((n = t._id), (t = t._name))
      : ((n = il()), ((e = al).time = Mc()), (t = null == t ? null : t + ''));
    for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
      for (var a, u = r[o], s = u.length, h = 0; h < s; ++h)
        (a = u[h]) && Dc(a, t, n, h, u, e || ul(a, n));
    return new rl(r, this._parents, t, n);
  }));
var yl = (fl.prototype = pl.prototype);
function dl(t) {
  return function () {
    return t;
  };
}
function gl(t) {
  return 1e-6 * (t() - 0.5);
}
function vl(t) {
  return t.x + t.vx;
}
function ml(t) {
  return t.y + t.vy;
}
function xl(t) {
  return t.index;
}
function wl(t, n) {
  var e = t.get(n);
  if (!e) throw new Error('node not found: ' + n);
  return e;
}
((yl.copy = function () {
  var t,
    n,
    e = new pl(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
    r = this._root;
  if (!r) return e;
  if (!r.length) return ((e._root = _l(r)), e);
  for (t = [{ source: r, target: (e._root = new Array(4)) }]; (r = t.pop()); )
    for (var i = 0; i < 4; ++i)
      (n = r.source[i]) &&
        (n.length
          ? t.push({ source: n, target: (r.target[i] = new Array(4)) })
          : (r.target[i] = _l(n)));
  return e;
}),
  (yl.add = function (t) {
    const n = +this._x.call(null, t),
      e = +this._y.call(null, t);
    return sl(this.cover(n, e), n, e, t);
  }),
  (yl.addAll = function (t) {
    var n,
      e,
      r,
      i,
      o = t.length,
      a = new Array(o),
      u = new Array(o),
      s = 1 / 0,
      h = 1 / 0,
      c = -1 / 0,
      l = -1 / 0;
    for (e = 0; e < o; ++e)
      isNaN((r = +this._x.call(null, (n = t[e])))) ||
        isNaN((i = +this._y.call(null, n))) ||
        ((a[e] = r),
        (u[e] = i),
        r < s && (s = r),
        r > c && (c = r),
        i < h && (h = i),
        i > l && (l = i));
    if (s > c || h > l) return this;
    for (this.cover(s, h).cover(c, l), e = 0; e < o; ++e) sl(this, a[e], u[e], t[e]);
    return this;
  }),
  (yl.cover = function (t, n) {
    if (isNaN((t = +t)) || isNaN((n = +n))) return this;
    var e = this._x0,
      r = this._y0,
      i = this._x1,
      o = this._y1;
    if (isNaN(e)) ((i = (e = Math.floor(t)) + 1), (o = (r = Math.floor(n)) + 1));
    else {
      for (var a, u, s = i - e || 1, h = this._root; e > t || t >= i || r > n || n >= o; )
        switch (
          ((u = ((n < r) << 1) | (t < e)), ((a = new Array(4))[u] = h), (h = a), (s *= 2), u)
        ) {
          case 0:
            ((i = e + s), (o = r + s));
            break;
          case 1:
            ((e = i - s), (o = r + s));
            break;
          case 2:
            ((i = e + s), (r = o - s));
            break;
          case 3:
            ((e = i - s), (r = o - s));
        }
      this._root && this._root.length && (this._root = h);
    }
    return ((this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = o), this);
  }),
  (yl.data = function () {
    var t = [];
    return (
      this.visit(function (n) {
        if (!n.length)
          do {
            t.push(n.data);
          } while ((n = n.next));
      }),
      t
    );
  }),
  (yl.extent = function (t) {
    return arguments.length
      ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
      : isNaN(this._x0)
        ? void 0
        : [
            [this._x0, this._y0],
            [this._x1, this._y1],
          ];
  }),
  (yl.find = function (t, n, e) {
    var r,
      i,
      o,
      a,
      u,
      s,
      h,
      c = this._x0,
      l = this._y0,
      f = this._x1,
      p = this._y1,
      _ = [],
      y = this._root;
    for (
      y && _.push(new hl(y, c, l, f, p)),
        null == e ? (e = 1 / 0) : ((c = t - e), (l = n - e), (f = t + e), (p = n + e), (e *= e));
      (s = _.pop());
    )
      if (!(!(y = s.node) || (i = s.x0) > f || (o = s.y0) > p || (a = s.x1) < c || (u = s.y1) < l))
        if (y.length) {
          var d = (i + a) / 2,
            g = (o + u) / 2;
          (_.push(
            new hl(y[3], d, g, a, u),
            new hl(y[2], i, g, d, u),
            new hl(y[1], d, o, a, g),
            new hl(y[0], i, o, d, g)
          ),
            (h = ((n >= g) << 1) | (t >= d)) &&
              ((s = _[_.length - 1]),
              (_[_.length - 1] = _[_.length - 1 - h]),
              (_[_.length - 1 - h] = s)));
        } else {
          var v = t - +this._x.call(null, y.data),
            m = n - +this._y.call(null, y.data),
            x = v * v + m * m;
          if (x < e) {
            var w = Math.sqrt((e = x));
            ((c = t - w), (l = n - w), (f = t + w), (p = n + w), (r = y.data));
          }
        }
    return r;
  }),
  (yl.remove = function (t) {
    if (isNaN((o = +this._x.call(null, t))) || isNaN((a = +this._y.call(null, t)))) return this;
    var n,
      e,
      r,
      i,
      o,
      a,
      u,
      s,
      h,
      c,
      l,
      f,
      p = this._root,
      _ = this._x0,
      y = this._y0,
      d = this._x1,
      g = this._y1;
    if (!p) return this;
    if (p.length)
      for (;;) {
        if (
          ((h = o >= (u = (_ + d) / 2)) ? (_ = u) : (d = u),
          (c = a >= (s = (y + g) / 2)) ? (y = s) : (g = s),
          (n = p),
          !(p = p[(l = (c << 1) | h)]))
        )
          return this;
        if (!p.length) break;
        (n[(l + 1) & 3] || n[(l + 2) & 3] || n[(l + 3) & 3]) && ((e = n), (f = l));
      }
    for (; p.data !== t; ) if (((r = p), !(p = p.next))) return this;
    return (
      (i = p.next) && delete p.next,
      r
        ? (i ? (r.next = i) : delete r.next, this)
        : n
          ? (i ? (n[l] = i) : delete n[l],
            (p = n[0] || n[1] || n[2] || n[3]) &&
              p === (n[3] || n[2] || n[1] || n[0]) &&
              !p.length &&
              (e ? (e[f] = p) : (this._root = p)),
            this)
          : ((this._root = i), this)
    );
  }),
  (yl.removeAll = function (t) {
    for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
    return this;
  }),
  (yl.root = function () {
    return this._root;
  }),
  (yl.size = function () {
    var t = 0;
    return (
      this.visit(function (n) {
        if (!n.length)
          do {
            ++t;
          } while ((n = n.next));
      }),
      t
    );
  }),
  (yl.visit = function (t) {
    var n,
      e,
      r,
      i,
      o,
      a,
      u = [],
      s = this._root;
    for (s && u.push(new hl(s, this._x0, this._y0, this._x1, this._y1)); (n = u.pop()); )
      if (!t((s = n.node), (r = n.x0), (i = n.y0), (o = n.x1), (a = n.y1)) && s.length) {
        var h = (r + o) / 2,
          c = (i + a) / 2;
        ((e = s[3]) && u.push(new hl(e, h, c, o, a)),
          (e = s[2]) && u.push(new hl(e, r, c, h, a)),
          (e = s[1]) && u.push(new hl(e, h, i, o, c)),
          (e = s[0]) && u.push(new hl(e, r, i, h, c)));
      }
    return this;
  }),
  (yl.visitAfter = function (t) {
    var n,
      e = [],
      r = [];
    for (
      this._root && e.push(new hl(this._root, this._x0, this._y0, this._x1, this._y1));
      (n = e.pop());
    ) {
      var i = n.node;
      if (i.length) {
        var o,
          a = n.x0,
          u = n.y0,
          s = n.x1,
          h = n.y1,
          c = (a + s) / 2,
          l = (u + h) / 2;
        ((o = i[0]) && e.push(new hl(o, a, u, c, l)),
          (o = i[1]) && e.push(new hl(o, c, u, s, l)),
          (o = i[2]) && e.push(new hl(o, a, l, c, h)),
          (o = i[3]) && e.push(new hl(o, c, l, s, h)));
      }
      r.push(n);
    }
    for (; (n = r.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1);
    return this;
  }),
  (yl.x = function (t) {
    return arguments.length ? ((this._x = t), this) : this._x;
  }),
  (yl.y = function (t) {
    return arguments.length ? ((this._y = t), this) : this._y;
  }));
const bl = 4294967296;
function Ml(t) {
  return t.x;
}
function kl(t) {
  return t.y;
}
var Nl = Math.PI * (3 - Math.sqrt(5));
function Tl(t) {
  var n,
    e = 1,
    r = 0.001,
    i = 1 - Math.pow(r, 1 / 300),
    o = 0,
    a = 0.6,
    u = new Map(),
    s = Tc(l),
    h = Fu('tick', 'end'),
    c = (function () {
      let t = 1;
      return () => (t = (1664525 * t + 1013904223) % bl) / bl;
    })();
  function l() {
    (f(), h.call('tick', n), e < r && (s.stop(), h.call('end', n)));
  }
  function f(r) {
    var s,
      h,
      c = t.length;
    void 0 === r && (r = 1);
    for (var l = 0; l < r; ++l)
      for (
        e += (o - e) * i,
          u.forEach(function (t) {
            t(e);
          }),
          s = 0;
        s < c;
        ++s
      )
        (null == (h = t[s]).fx ? (h.x += h.vx *= a) : ((h.x = h.fx), (h.vx = 0)),
          null == h.fy ? (h.y += h.vy *= a) : ((h.y = h.fy), (h.vy = 0)));
    return n;
  }
  function p() {
    for (var n, e = 0, r = t.length; e < r; ++e) {
      if (
        (((n = t[e]).index = e),
        null != n.fx && (n.x = n.fx),
        null != n.fy && (n.y = n.fy),
        isNaN(n.x) || isNaN(n.y))
      ) {
        var i = 10 * Math.sqrt(0.5 + e),
          o = e * Nl;
        ((n.x = i * Math.cos(o)), (n.y = i * Math.sin(o)));
      }
      (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
    }
  }
  function _(n) {
    return (n.initialize && n.initialize(t, c), n);
  }
  return (
    null == t && (t = []),
    p(),
    (n = {
      tick: f,
      restart: function () {
        return (s.restart(l), n);
      },
      stop: function () {
        return (s.stop(), n);
      },
      nodes: function (e) {
        return arguments.length ? ((t = e), p(), u.forEach(_), n) : t;
      },
      alpha: function (t) {
        return arguments.length ? ((e = +t), n) : e;
      },
      alphaMin: function (t) {
        return arguments.length ? ((r = +t), n) : r;
      },
      alphaDecay: function (t) {
        return arguments.length ? ((i = +t), n) : +i;
      },
      alphaTarget: function (t) {
        return arguments.length ? ((o = +t), n) : o;
      },
      velocityDecay: function (t) {
        return arguments.length ? ((a = 1 - t), n) : 1 - a;
      },
      randomSource: function (t) {
        return arguments.length ? ((c = t), u.forEach(_), n) : c;
      },
      force: function (t, e) {
        return arguments.length > 1 ? (null == e ? u.delete(t) : u.set(t, _(e)), n) : u.get(t);
      },
      find: function (n, e, r) {
        var i,
          o,
          a,
          u,
          s,
          h = 0,
          c = t.length;
        for (null == r ? (r = 1 / 0) : (r *= r), h = 0; h < c; ++h)
          (a = (i = n - (u = t[h]).x) * i + (o = e - u.y) * o) < r && ((s = u), (r = a));
        return s;
      },
      on: function (t, e) {
        return arguments.length > 1 ? (h.on(t, e), n) : h.on(t);
      },
    })
  );
}
const Al = (t) => () => t;
function El(t, { sourceEvent: n, target: e, transform: r, dispatch: i }) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    target: { value: e, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i },
  });
}
function Sl(t, n, e) {
  ((this.k = t), (this.x = n), (this.y = e));
}
Sl.prototype = {
  constructor: Sl,
  scale: function (t) {
    return 1 === t ? this : new Sl(this.k * t, this.x, this.y);
  },
  translate: function (t, n) {
    return (0 === t) & (0 === n) ? this : new Sl(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function (t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function (t) {
    return t * this.k + this.x;
  },
  applyY: function (t) {
    return t * this.k + this.y;
  },
  invert: function (t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function (t) {
    return (t - this.x) / this.k;
  },
  invertY: function (t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function (t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function (t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function () {
    return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
  },
};
var $l = new Sl(1, 0, 0);
function Cl(t) {
  t.stopImmediatePropagation();
}
function zl(t) {
  (t.preventDefault(), t.stopImmediatePropagation());
}
function Dl(t) {
  return !((t.ctrlKey && 'wheel' !== t.type) || t.button);
}
function Ul() {
  var t = this;
  return t instanceof SVGElement
    ? (t = t.ownerSVGElement || t).hasAttribute('viewBox')
      ? [
          [(t = t.viewBox.baseVal).x, t.y],
          [t.x + t.width, t.y + t.height],
        ]
      : [
          [0, 0],
          [t.width.baseVal.value, t.height.baseVal.value],
        ]
    : [
        [0, 0],
        [t.clientWidth, t.clientHeight],
      ];
}
function Pl() {
  return this.__zoom || $l;
}
function ql(t) {
  return -t.deltaY * (1 === t.deltaMode ? 0.05 : t.deltaMode ? 1 : 0.002) * (t.ctrlKey ? 10 : 1);
}
function Yl() {
  return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function jl(t, n, e) {
  var r = t.invertX(n[0][0]) - e[0][0],
    i = t.invertX(n[1][0]) - e[1][0],
    o = t.invertY(n[0][1]) - e[0][1],
    a = t.invertY(n[1][1]) - e[1][1];
  return t.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)
  );
}
Sl.prototype;
var Hl = {
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
const Fl = (n, e) => {
    const r = t.forwardRef(
      (
        {
          color: r = 'currentColor',
          size: i = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: a,
          children: u,
          ...s
        },
        h
      ) => {
        return t.createElement(
          'svg',
          {
            ref: h,
            ...Hl,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: a ? (24 * Number(o)) / Number(i) : o,
            className: `lucide lucide-${((c = n), c.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase())}`,
            ...s,
          },
          [...e.map(([n, e]) => t.createElement(n, e)), ...((Array.isArray(u) ? u : [u]) || [])]
        );
        var c;
      }
    );
    return ((r.displayName = `${n}`), r);
  },
  Xl = Fl('Maximize', [
    ['path', { d: 'M8 3H5a2 2 0 0 0-2 2v3', key: '1dcmit' }],
    ['path', { d: 'M21 8V5a2 2 0 0 0-2-2h-3', key: '1e4gt3' }],
    ['path', { d: 'M3 16v3a2 2 0 0 0 2 2h3', key: 'wsl5sc' }],
    ['path', { d: 'M16 21h3a2 2 0 0 0 2-2v-3', key: '18trek' }],
  ]),
  Ll = Fl('Minus', [['path', { d: 'M5 12h14', key: '1ays0h' }]]),
  Ol = Fl('Plus', [
    ['path', { d: 'M5 12h14', key: '1ays0h' }],
    ['path', { d: 'M12 5v14', key: 's699le' }],
  ]);
var Rl = ({ data: e }) => {
    const r = t.useRef(null),
      i = t.useRef(null),
      [, o] = t.useState(1),
      a = Array.isArray(e.nodes)
        ? e.nodes.map((t) => ({ ...t }))
        : Object.values(e.nodes).map((t) => ({ ...t })),
      u = e.edges.map((t) => ({ source: t.source || t.from, target: t.target || t.to }));
    return (
      t.useEffect(() => {
        if (!r.current || !i.current || 0 === a.length) return;
        const t = i.current.clientWidth,
          n = i.current.clientHeight;
        eh(r.current).selectAll('*').remove();
        const e = eh(r.current).attr('width', t).attr('height', n).attr('viewBox', [0, 0, t, n]),
          s = e.append('g'),
          h = (function () {
            var t,
              n,
              e,
              r = Dl,
              i = Ul,
              o = jl,
              a = ql,
              u = Yl,
              s = [0, 1 / 0],
              h = [
                [-1 / 0, -1 / 0],
                [1 / 0, 1 / 0],
              ],
              c = 250,
              l = fc,
              f = Fu('start', 'zoom', 'end'),
              p = 0,
              _ = 10;
            function y(t) {
              t.property('__zoom', Pl)
                .on('wheel.zoom', b, { passive: !1 })
                .on('mousedown.zoom', M)
                .on('dblclick.zoom', k)
                .filter(u)
                .on('touchstart.zoom', N)
                .on('touchmove.zoom', T)
                .on('touchend.zoom touchcancel.zoom', A)
                .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
            }
            function d(t, n) {
              return (n = Math.max(s[0], Math.min(s[1], n))) === t.k ? t : new Sl(n, t.x, t.y);
            }
            function g(t, n, e) {
              var r = n[0] - e[0] * t.k,
                i = n[1] - e[1] * t.k;
              return r === t.x && i === t.y ? t : new Sl(t.k, r, i);
            }
            function v(t) {
              return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
            }
            function m(t, n, e, r) {
              t.on('start.zoom', function () {
                x(this, arguments).event(r).start();
              })
                .on('interrupt.zoom end.zoom', function () {
                  x(this, arguments).event(r).end();
                })
                .tween('zoom', function () {
                  var t = this,
                    o = arguments,
                    a = x(t, o).event(r),
                    u = i.apply(t, o),
                    s = null == e ? v(u) : 'function' == typeof e ? e.apply(t, o) : e,
                    h = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                    c = t.__zoom,
                    f = 'function' == typeof n ? n.apply(t, o) : n,
                    p = l(c.invert(s).concat(h / c.k), f.invert(s).concat(h / f.k));
                  return function (t) {
                    if (1 === t) t = f;
                    else {
                      var n = p(t),
                        e = h / n[2];
                      t = new Sl(e, s[0] - n[0] * e, s[1] - n[1] * e);
                    }
                    a.zoom(null, t);
                  };
                });
            }
            function x(t, n, e) {
              return (!e && t.__zooming) || new w(t, n);
            }
            function w(t, n) {
              ((this.that = t),
                (this.args = n),
                (this.active = 0),
                (this.sourceEvent = null),
                (this.extent = i.apply(t, n)),
                (this.taps = 0));
            }
            function b(t, ...n) {
              if (r.apply(this, arguments)) {
                var e = x(this, n).event(t),
                  i = this.__zoom,
                  u = Math.max(s[0], Math.min(s[1], i.k * Math.pow(2, a.apply(this, arguments)))),
                  c = rh(t);
                if (e.wheel)
                  ((e.mouse[0][0] === c[0] && e.mouse[0][1] === c[1]) ||
                    (e.mouse[1] = i.invert((e.mouse[0] = c))),
                    clearTimeout(e.wheel));
                else {
                  if (i.k === u) return;
                  ((e.mouse = [c, i.invert(c)]), Yc(this), e.start());
                }
                (zl(t),
                  (e.wheel = setTimeout(function () {
                    ((e.wheel = null), e.end());
                  }, 150)),
                  e.zoom('mouse', o(g(d(i, u), e.mouse[0], e.mouse[1]), e.extent, h)));
              }
            }
            function M(t, ...n) {
              if (!e && r.apply(this, arguments)) {
                var i = t.currentTarget,
                  a = x(this, n, !0).event(t),
                  u = eh(t.view)
                    .on(
                      'mousemove.zoom',
                      function (t) {
                        if ((zl(t), !a.moved)) {
                          var n = t.clientX - c,
                            e = t.clientY - l;
                          a.moved = n * n + e * e > p;
                        }
                        a.event(t).zoom(
                          'mouse',
                          o(g(a.that.__zoom, (a.mouse[0] = rh(t, i)), a.mouse[1]), a.extent, h)
                        );
                      },
                      !0
                    )
                    .on(
                      'mouseup.zoom',
                      function (t) {
                        (u.on('mousemove.zoom mouseup.zoom', null),
                          hh(t.view, a.moved),
                          zl(t),
                          a.event(t).end());
                      },
                      !0
                    ),
                  s = rh(t, i),
                  c = t.clientX,
                  l = t.clientY;
                (sh(t.view), Cl(t), (a.mouse = [s, this.__zoom.invert(s)]), Yc(this), a.start());
              }
            }
            function k(t, ...n) {
              if (r.apply(this, arguments)) {
                var e = this.__zoom,
                  a = rh(t.changedTouches ? t.changedTouches[0] : t, this),
                  u = e.invert(a),
                  s = e.k * (t.shiftKey ? 0.5 : 2),
                  l = o(g(d(e, s), a, u), i.apply(this, n), h);
                (zl(t),
                  c > 0
                    ? eh(this).transition().duration(c).call(m, l, a, t)
                    : eh(this).call(y.transform, l, a, t));
              }
            }
            function N(e, ...i) {
              if (r.apply(this, arguments)) {
                var o,
                  a,
                  u,
                  s,
                  h = e.touches,
                  c = h.length,
                  l = x(this, i, e.changedTouches.length === c).event(e);
                for (Cl(e), a = 0; a < c; ++a)
                  ((s = [(s = rh((u = h[a]), this)), this.__zoom.invert(s), u.identifier]),
                    l.touch0
                      ? l.touch1 || l.touch0[2] === s[2] || ((l.touch1 = s), (l.taps = 0))
                      : ((l.touch0 = s), (o = !0), (l.taps = 1 + !!t)));
                (t && (t = clearTimeout(t)),
                  o &&
                    (l.taps < 2 &&
                      ((n = s[0]),
                      (t = setTimeout(function () {
                        t = null;
                      }, 500))),
                    Yc(this),
                    l.start()));
              }
            }
            function T(t, ...n) {
              if (this.__zooming) {
                var e,
                  r,
                  i,
                  a,
                  u = x(this, n).event(t),
                  s = t.changedTouches,
                  c = s.length;
                for (zl(t), e = 0; e < c; ++e)
                  ((i = rh((r = s[e]), this)),
                    u.touch0 && u.touch0[2] === r.identifier
                      ? (u.touch0[0] = i)
                      : u.touch1 && u.touch1[2] === r.identifier && (u.touch1[0] = i));
                if (((r = u.that.__zoom), u.touch1)) {
                  var l = u.touch0[0],
                    f = u.touch0[1],
                    p = u.touch1[0],
                    _ = u.touch1[1],
                    y = (y = p[0] - l[0]) * y + (y = p[1] - l[1]) * y,
                    v = (v = _[0] - f[0]) * v + (v = _[1] - f[1]) * v;
                  ((r = d(r, Math.sqrt(y / v))),
                    (i = [(l[0] + p[0]) / 2, (l[1] + p[1]) / 2]),
                    (a = [(f[0] + _[0]) / 2, (f[1] + _[1]) / 2]));
                } else {
                  if (!u.touch0) return;
                  ((i = u.touch0[0]), (a = u.touch0[1]));
                }
                u.zoom('touch', o(g(r, i, a), u.extent, h));
              }
            }
            function A(t, ...r) {
              if (this.__zooming) {
                var i,
                  o,
                  a = x(this, r).event(t),
                  u = t.changedTouches,
                  s = u.length;
                for (
                  Cl(t),
                    e && clearTimeout(e),
                    e = setTimeout(function () {
                      e = null;
                    }, 500),
                    i = 0;
                  i < s;
                  ++i
                )
                  ((o = u[i]),
                    a.touch0 && a.touch0[2] === o.identifier
                      ? delete a.touch0
                      : a.touch1 && a.touch1[2] === o.identifier && delete a.touch1);
                if ((a.touch1 && !a.touch0 && ((a.touch0 = a.touch1), delete a.touch1), a.touch0))
                  a.touch0[1] = this.__zoom.invert(a.touch0[0]);
                else if (
                  (a.end(),
                  2 === a.taps && ((o = rh(o, this)), Math.hypot(n[0] - o[0], n[1] - o[1]) < _))
                ) {
                  var h = eh(this).on('dblclick.zoom');
                  h && h.apply(this, arguments);
                }
              }
            }
            return (
              (y.transform = function (t, n, e, r) {
                var i = t.selection ? t.selection() : t;
                (i.property('__zoom', Pl),
                  t !== i
                    ? m(t, n, e, r)
                    : i.interrupt().each(function () {
                        x(this, arguments)
                          .event(r)
                          .start()
                          .zoom(null, 'function' == typeof n ? n.apply(this, arguments) : n)
                          .end();
                      }));
              }),
              (y.scaleBy = function (t, n, e, r) {
                y.scaleTo(
                  t,
                  function () {
                    return this.__zoom.k * ('function' == typeof n ? n.apply(this, arguments) : n);
                  },
                  e,
                  r
                );
              }),
              (y.scaleTo = function (t, n, e, r) {
                y.transform(
                  t,
                  function () {
                    var t = i.apply(this, arguments),
                      r = this.__zoom,
                      a = null == e ? v(t) : 'function' == typeof e ? e.apply(this, arguments) : e,
                      u = r.invert(a),
                      s = 'function' == typeof n ? n.apply(this, arguments) : n;
                    return o(g(d(r, s), a, u), t, h);
                  },
                  e,
                  r
                );
              }),
              (y.translateBy = function (t, n, e, r) {
                y.transform(
                  t,
                  function () {
                    return o(
                      this.__zoom.translate(
                        'function' == typeof n ? n.apply(this, arguments) : n,
                        'function' == typeof e ? e.apply(this, arguments) : e
                      ),
                      i.apply(this, arguments),
                      h
                    );
                  },
                  null,
                  r
                );
              }),
              (y.translateTo = function (t, n, e, r, a) {
                y.transform(
                  t,
                  function () {
                    var t = i.apply(this, arguments),
                      a = this.__zoom,
                      u = null == r ? v(t) : 'function' == typeof r ? r.apply(this, arguments) : r;
                    return o(
                      $l
                        .translate(u[0], u[1])
                        .scale(a.k)
                        .translate(
                          'function' == typeof n ? -n.apply(this, arguments) : -n,
                          'function' == typeof e ? -e.apply(this, arguments) : -e
                        ),
                      t,
                      h
                    );
                  },
                  r,
                  a
                );
              }),
              (w.prototype = {
                event: function (t) {
                  return (t && (this.sourceEvent = t), this);
                },
                start: function () {
                  return (
                    1 === ++this.active && ((this.that.__zooming = this), this.emit('start')),
                    this
                  );
                },
                zoom: function (t, n) {
                  return (
                    this.mouse && 'mouse' !== t && (this.mouse[1] = n.invert(this.mouse[0])),
                    this.touch0 && 'touch' !== t && (this.touch0[1] = n.invert(this.touch0[0])),
                    this.touch1 && 'touch' !== t && (this.touch1[1] = n.invert(this.touch1[0])),
                    (this.that.__zoom = n),
                    this.emit('zoom'),
                    this
                  );
                },
                end: function () {
                  return (
                    0 === --this.active && (delete this.that.__zooming, this.emit('end')),
                    this
                  );
                },
                emit: function (t) {
                  var n = eh(this.that).datum();
                  f.call(
                    t,
                    this.that,
                    new El(t, {
                      sourceEvent: this.sourceEvent,
                      target: y,
                      transform: this.that.__zoom,
                      dispatch: f,
                    }),
                    n
                  );
                },
              }),
              (y.wheelDelta = function (t) {
                return arguments.length ? ((a = 'function' == typeof t ? t : Al(+t)), y) : a;
              }),
              (y.filter = function (t) {
                return arguments.length ? ((r = 'function' == typeof t ? t : Al(!!t)), y) : r;
              }),
              (y.touchable = function (t) {
                return arguments.length ? ((u = 'function' == typeof t ? t : Al(!!t)), y) : u;
              }),
              (y.extent = function (t) {
                return arguments.length
                  ? ((i =
                      'function' == typeof t
                        ? t
                        : Al([
                            [+t[0][0], +t[0][1]],
                            [+t[1][0], +t[1][1]],
                          ])),
                    y)
                  : i;
              }),
              (y.scaleExtent = function (t) {
                return arguments.length ? ((s[0] = +t[0]), (s[1] = +t[1]), y) : [s[0], s[1]];
              }),
              (y.translateExtent = function (t) {
                return arguments.length
                  ? ((h[0][0] = +t[0][0]),
                    (h[1][0] = +t[1][0]),
                    (h[0][1] = +t[0][1]),
                    (h[1][1] = +t[1][1]),
                    y)
                  : [
                      [h[0][0], h[0][1]],
                      [h[1][0], h[1][1]],
                    ];
              }),
              (y.constrain = function (t) {
                return arguments.length ? ((o = t), y) : o;
              }),
              (y.duration = function (t) {
                return arguments.length ? ((c = +t), y) : c;
              }),
              (y.interpolate = function (t) {
                return arguments.length ? ((l = t), y) : l;
              }),
              (y.on = function () {
                var t = f.on.apply(f, arguments);
                return t === f ? y : t;
              }),
              (y.clickDistance = function (t) {
                return arguments.length ? ((p = (t = +t) * t), y) : Math.sqrt(p);
              }),
              (y.tapDistance = function (t) {
                return arguments.length ? ((_ = +t), y) : _;
              }),
              y
            );
          })()
            .scaleExtent([0.1, 4])
            .on('zoom', (t) => {
              (s.attr('transform', t.transform.toString()), o(t.transform.k));
            });
        e.call(h);
        const c = Tl(a)
            .force(
              'link',
              (function (t) {
                var n,
                  e,
                  r,
                  i,
                  o,
                  a,
                  u = xl,
                  s = function (t) {
                    return 1 / Math.min(i[t.source.index], i[t.target.index]);
                  },
                  h = dl(30),
                  c = 1;
                function l(r) {
                  for (var i = 0, u = t.length; i < c; ++i)
                    for (var s, h, l, f, p, _, y, d = 0; d < u; ++d)
                      ((h = (s = t[d]).source),
                        (f = (l = s.target).x + l.vx - h.x - h.vx || gl(a)),
                        (p = l.y + l.vy - h.y - h.vy || gl(a)),
                        (f *= _ = (((_ = Math.sqrt(f * f + p * p)) - e[d]) / _) * r * n[d]),
                        (p *= _),
                        (l.vx -= f * (y = o[d])),
                        (l.vy -= p * y),
                        (h.vx += f * (y = 1 - y)),
                        (h.vy += p * y));
                }
                function f() {
                  if (r) {
                    var a,
                      s,
                      h = r.length,
                      c = t.length,
                      l = new Map(r.map((t, n) => [u(t, n, r), t]));
                    for (a = 0, i = new Array(h); a < c; ++a)
                      (((s = t[a]).index = a),
                        'object' != typeof s.source && (s.source = wl(l, s.source)),
                        'object' != typeof s.target && (s.target = wl(l, s.target)),
                        (i[s.source.index] = (i[s.source.index] || 0) + 1),
                        (i[s.target.index] = (i[s.target.index] || 0) + 1));
                    for (a = 0, o = new Array(c); a < c; ++a)
                      ((s = t[a]),
                        (o[a] = i[s.source.index] / (i[s.source.index] + i[s.target.index])));
                    ((n = new Array(c)), p(), (e = new Array(c)), _());
                  }
                }
                function p() {
                  if (r) for (var e = 0, i = t.length; e < i; ++e) n[e] = +s(t[e], e, t);
                }
                function _() {
                  if (r) for (var n = 0, i = t.length; n < i; ++n) e[n] = +h(t[n], n, t);
                }
                return (
                  null == t && (t = []),
                  (l.initialize = function (t, n) {
                    ((r = t), (a = n), f());
                  }),
                  (l.links = function (n) {
                    return arguments.length ? ((t = n), f(), l) : t;
                  }),
                  (l.id = function (t) {
                    return arguments.length ? ((u = t), l) : u;
                  }),
                  (l.iterations = function (t) {
                    return arguments.length ? ((c = +t), l) : c;
                  }),
                  (l.strength = function (t) {
                    return arguments.length
                      ? ((s = 'function' == typeof t ? t : dl(+t)), p(), l)
                      : s;
                  }),
                  (l.distance = function (t) {
                    return arguments.length
                      ? ((h = 'function' == typeof t ? t : dl(+t)), _(), l)
                      : h;
                  }),
                  l
                );
              })(u)
                .id((t) => t.id)
                .distance(100)
            )
            .force(
              'charge',
              (function () {
                var t,
                  n,
                  e,
                  r,
                  i,
                  o = dl(-30),
                  a = 1,
                  u = 1 / 0,
                  s = 0.81;
                function h(e) {
                  var i,
                    o = t.length,
                    a = fl(t, Ml, kl).visitAfter(l);
                  for (r = e, i = 0; i < o; ++i) ((n = t[i]), a.visit(f));
                }
                function c() {
                  if (t) {
                    var n,
                      e,
                      r = t.length;
                    for (i = new Array(r), n = 0; n < r; ++n)
                      ((e = t[n]), (i[e.index] = +o(e, n, t)));
                  }
                }
                function l(t) {
                  var n,
                    e,
                    r,
                    o,
                    a,
                    u = 0,
                    s = 0;
                  if (t.length) {
                    for (r = o = a = 0; a < 4; ++a)
                      (n = t[a]) &&
                        (e = Math.abs(n.value)) &&
                        ((u += n.value), (s += e), (r += e * n.x), (o += e * n.y));
                    ((t.x = r / s), (t.y = o / s));
                  } else {
                    (((n = t).x = n.data.x), (n.y = n.data.y));
                    do {
                      u += i[n.data.index];
                    } while ((n = n.next));
                  }
                  t.value = u;
                }
                function f(t, o, h, c) {
                  if (!t.value) return !0;
                  var l = t.x - n.x,
                    f = t.y - n.y,
                    p = c - o,
                    _ = l * l + f * f;
                  if ((p * p) / s < _)
                    return (
                      _ < u &&
                        (0 === l && (_ += (l = gl(e)) * l),
                        0 === f && (_ += (f = gl(e)) * f),
                        _ < a && (_ = Math.sqrt(a * _)),
                        (n.vx += (l * t.value * r) / _),
                        (n.vy += (f * t.value * r) / _)),
                      !0
                    );
                  if (!(t.length || _ >= u)) {
                    (t.data !== n || t.next) &&
                      (0 === l && (_ += (l = gl(e)) * l),
                      0 === f && (_ += (f = gl(e)) * f),
                      _ < a && (_ = Math.sqrt(a * _)));
                    do {
                      t.data !== n &&
                        ((p = (i[t.data.index] * r) / _), (n.vx += l * p), (n.vy += f * p));
                    } while ((t = t.next));
                  }
                }
                return (
                  (h.initialize = function (n, r) {
                    ((t = n), (e = r), c());
                  }),
                  (h.strength = function (t) {
                    return arguments.length
                      ? ((o = 'function' == typeof t ? t : dl(+t)), c(), h)
                      : o;
                  }),
                  (h.distanceMin = function (t) {
                    return arguments.length ? ((a = t * t), h) : Math.sqrt(a);
                  }),
                  (h.distanceMax = function (t) {
                    return arguments.length ? ((u = t * t), h) : Math.sqrt(u);
                  }),
                  (h.theta = function (t) {
                    return arguments.length ? ((s = t * t), h) : Math.sqrt(s);
                  }),
                  h
                );
              })().strength(-300)
            )
            .force(
              'center',
              (function (t, n) {
                var e,
                  r = 1;
                function i() {
                  var i,
                    o,
                    a = e.length,
                    u = 0,
                    s = 0;
                  for (i = 0; i < a; ++i) ((u += (o = e[i]).x), (s += o.y));
                  for (u = (u / a - t) * r, s = (s / a - n) * r, i = 0; i < a; ++i)
                    (((o = e[i]).x -= u), (o.y -= s));
                }
                return (
                  null == t && (t = 0),
                  null == n && (n = 0),
                  (i.initialize = function (t) {
                    e = t;
                  }),
                  (i.x = function (n) {
                    return arguments.length ? ((t = +n), i) : t;
                  }),
                  (i.y = function (t) {
                    return arguments.length ? ((n = +t), i) : n;
                  }),
                  (i.strength = function (t) {
                    return arguments.length ? ((r = +t), i) : r;
                  }),
                  i
                );
              })(t / 2, n / 2)
            )
            .force(
              'collide',
              (function (t) {
                var n,
                  e,
                  r,
                  i = 1,
                  o = 1;
                function a() {
                  for (var t, a, s, h, c, l, f, p = n.length, _ = 0; _ < o; ++_)
                    for (a = fl(n, vl, ml).visitAfter(u), t = 0; t < p; ++t)
                      ((s = n[t]),
                        (l = e[s.index]),
                        (f = l * l),
                        (h = s.x + s.vx),
                        (c = s.y + s.vy),
                        a.visit(y));
                  function y(t, n, e, o, a) {
                    var u = t.data,
                      p = t.r,
                      _ = l + p;
                    if (!u) return n > h + _ || o < h - _ || e > c + _ || a < c - _;
                    if (u.index > s.index) {
                      var y = h - u.x - u.vx,
                        d = c - u.y - u.vy,
                        g = y * y + d * d;
                      g < _ * _ &&
                        (0 === y && (g += (y = gl(r)) * y),
                        0 === d && (g += (d = gl(r)) * d),
                        (g = ((_ - (g = Math.sqrt(g))) / g) * i),
                        (s.vx += (y *= g) * (_ = (p *= p) / (f + p))),
                        (s.vy += (d *= g) * _),
                        (u.vx -= y * (_ = 1 - _)),
                        (u.vy -= d * _));
                    }
                  }
                }
                function u(t) {
                  if (t.data) return (t.r = e[t.data.index]);
                  for (var n = (t.r = 0); n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r);
                }
                function s() {
                  if (n) {
                    var r,
                      i,
                      o = n.length;
                    for (e = new Array(o), r = 0; r < o; ++r)
                      ((i = n[r]), (e[i.index] = +t(i, r, n)));
                  }
                }
                return (
                  'function' != typeof t && (t = dl(null == t ? 1 : +t)),
                  (a.initialize = function (t, e) {
                    ((n = t), (r = e), s());
                  }),
                  (a.iterations = function (t) {
                    return arguments.length ? ((o = +t), a) : o;
                  }),
                  (a.strength = function (t) {
                    return arguments.length ? ((i = +t), a) : i;
                  }),
                  (a.radius = function (n) {
                    return arguments.length
                      ? ((t = 'function' == typeof n ? n : dl(+n)), s(), a)
                      : t;
                  }),
                  a
                );
              })().radius(30)
            ),
          l = s
            .append('g')
            .selectAll('line')
            .data(u)
            .join('line')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .attr('stroke-width', 1.5),
          f = s
            .append('g')
            .selectAll('g')
            .data(a)
            .join('g')
            .call(
              (function () {
                var t,
                  n,
                  e,
                  r,
                  i = fh,
                  o = ph,
                  a = _h,
                  u = yh,
                  s = {},
                  h = Fu('start', 'drag', 'end'),
                  c = 0,
                  l = 0;
                function f(t) {
                  t.on('mousedown.drag', p)
                    .filter(u)
                    .on('touchstart.drag', d)
                    .on('touchmove.drag', g, ih)
                    .on('touchend.drag touchcancel.drag', v)
                    .style('touch-action', 'none')
                    .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
                }
                function p(a, u) {
                  if (!r && i.call(this, a, u)) {
                    var s = m(this, o.call(this, a, u), a, u, 'mouse');
                    s &&
                      (eh(a.view).on('mousemove.drag', _, oh).on('mouseup.drag', y, oh),
                      sh(a.view),
                      ah(a),
                      (e = !1),
                      (t = a.clientX),
                      (n = a.clientY),
                      s('start', a));
                  }
                }
                function _(r) {
                  if ((uh(r), !e)) {
                    var i = r.clientX - t,
                      o = r.clientY - n;
                    e = i * i + o * o > l;
                  }
                  s.mouse('drag', r);
                }
                function y(t) {
                  (eh(t.view).on('mousemove.drag mouseup.drag', null),
                    hh(t.view, e),
                    uh(t),
                    s.mouse('end', t));
                }
                function d(t, n) {
                  if (i.call(this, t, n)) {
                    var e,
                      r,
                      a = t.changedTouches,
                      u = o.call(this, t, n),
                      s = a.length;
                    for (e = 0; e < s; ++e)
                      (r = m(this, u, t, n, a[e].identifier, a[e])) && (ah(t), r('start', t, a[e]));
                  }
                }
                function g(t) {
                  var n,
                    e,
                    r = t.changedTouches,
                    i = r.length;
                  for (n = 0; n < i; ++n) (e = s[r[n].identifier]) && (uh(t), e('drag', t, r[n]));
                }
                function v(t) {
                  var n,
                    e,
                    i = t.changedTouches,
                    o = i.length;
                  for (
                    r && clearTimeout(r),
                      r = setTimeout(function () {
                        r = null;
                      }, 500),
                      n = 0;
                    n < o;
                    ++n
                  )
                    (e = s[i[n].identifier]) && (ah(t), e('end', t, i[n]));
                }
                function m(t, n, e, r, i, o) {
                  var u,
                    l,
                    p,
                    _ = h.copy(),
                    y = rh(o || e, n);
                  if (
                    null !=
                    (p = a.call(
                      t,
                      new lh('beforestart', {
                        sourceEvent: e,
                        target: f,
                        identifier: i,
                        active: c,
                        x: y[0],
                        y: y[1],
                        dx: 0,
                        dy: 0,
                        dispatch: _,
                      }),
                      r
                    ))
                  )
                    return (
                      (u = p.x - y[0] || 0),
                      (l = p.y - y[1] || 0),
                      function e(o, a, h) {
                        var d,
                          g = y;
                        switch (o) {
                          case 'start':
                            ((s[i] = e), (d = c++));
                            break;
                          case 'end':
                            (delete s[i], --c);
                          case 'drag':
                            ((y = rh(h || a, n)), (d = c));
                        }
                        _.call(
                          o,
                          t,
                          new lh(o, {
                            sourceEvent: a,
                            subject: p,
                            target: f,
                            identifier: i,
                            active: d,
                            x: y[0] + u,
                            y: y[1] + l,
                            dx: y[0] - g[0],
                            dy: y[1] - g[1],
                            dispatch: _,
                          }),
                          r
                        );
                      }
                    );
                }
                return (
                  (f.filter = function (t) {
                    return arguments.length ? ((i = 'function' == typeof t ? t : ch(!!t)), f) : i;
                  }),
                  (f.container = function (t) {
                    return arguments.length ? ((o = 'function' == typeof t ? t : ch(t)), f) : o;
                  }),
                  (f.subject = function (t) {
                    return arguments.length ? ((a = 'function' == typeof t ? t : ch(t)), f) : a;
                  }),
                  (f.touchable = function (t) {
                    return arguments.length ? ((u = 'function' == typeof t ? t : ch(!!t)), f) : u;
                  }),
                  (f.on = function () {
                    var t = h.on.apply(h, arguments);
                    return t === h ? f : t;
                  }),
                  (f.clickDistance = function (t) {
                    return arguments.length ? ((l = (t = +t) * t), f) : Math.sqrt(l);
                  }),
                  f
                );
              })()
                .on('start', function (t, n) {
                  t.active || c.alphaTarget(0.3).restart();
                  ((n.fx = n.x), (n.fy = n.y));
                })
                .on('drag', function (t, n) {
                  ((n.fx = t.x), (n.fy = t.y));
                })
                .on('end', function (t, n) {
                  t.active || c.alphaTarget(0);
                  ((n.fx = null), (n.fy = null));
                })
            );
        (f
          .append('circle')
          .attr('r', 8)
          .attr('fill', (t) => ('component' === t.type ? '#f59e0b' : '#3b82f6'))
          .attr('stroke', '#fff')
          .attr('stroke-width', 1.5),
          f
            .append('text')
            .text((t) => t.id.split('/').pop())
            .attr('x', 12)
            .attr('y', 4)
            .style('font-size', '10px')
            .style('fill', 'var(--text-primary, #333)')
            .style('pointer-events', 'none'),
          f.append('title').text((t) => t.id),
          c.on('tick', () => {
            (l
              .attr('x1', (t) => t.source.x)
              .attr('y1', (t) => t.source.y)
              .attr('x2', (t) => t.target.x)
              .attr('y2', (t) => t.target.y),
              f.attr('transform', (t) => `translate(${t.x},${t.y})`));
          }));
      }, [e]),
      n.jsxs('div', {
        ref: i,
        style: {
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--bg-secondary, #fafafa)',
        },
        children: [
          n.jsx('svg', { ref: r, style: { width: '100%', height: '100%' } }),
          n.jsxs('div', {
            style: {
              position: 'absolute',
              bottom: 20,
              right: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            },
            children: [
              n.jsx('button', { style: Il, title: 'Zoom In', children: n.jsx(Ol, { size: 16 }) }),
              n.jsx('button', { style: Il, title: 'Zoom Out', children: n.jsx(Ll, { size: 16 }) }),
              n.jsx('button', { style: Il, title: 'Fit', children: n.jsx(Xl, { size: 16 }) }),
            ],
          }),
          n.jsx('div', {
            style: {
              position: 'absolute',
              top: 20,
              left: 20,
              background: 'var(--bg-primary, white)',
              padding: '8px',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            },
            children: n.jsxs('div', {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: '0.8rem',
                color: 'var(--text-secondary, #666)',
              },
              children: [
                n.jsx('span', {
                  style: { width: 10, height: 10, borderRadius: '50%', background: '#3b82f6' },
                }),
                ' ',
                'File',
                n.jsx('span', {
                  style: { width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' },
                }),
                ' ',
                'Component',
              ],
            }),
          }),
        ],
      })
    );
  },
  Il = {
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
export {
  mi as A,
  vi as B,
  gi as C,
  Rl as D,
  hi as E,
  T as F,
  da as G,
  qu as H,
  Yu as I,
  Pu as J,
  Du as K,
  $u as L,
  Su as M,
  wu as N,
  Fa as O,
  yu as P,
  mu as Q,
  gu as R,
  su as S,
  fu as T,
  cu as U,
  ou as V,
  Za as W,
  Wa as X,
  ru as Y,
  nu as Z,
  Ba as a,
  Vr as b,
  Oa as c,
  Ya as d,
  Ka as e,
  Nr as f,
  ya as g,
  Cr as h,
  d as i,
  pe as j,
  A as k,
  oi as l,
  g as m,
  Vi as n,
  Br as o,
  ji as p,
  Mi as q,
  Si as r,
  It as s,
  Or as t,
  Ei as u,
  Ai as v,
  Ti as w,
  Ni as x,
  ki as y,
  xi as z,
};
