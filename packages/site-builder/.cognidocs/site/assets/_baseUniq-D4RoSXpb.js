import {
  aK as r,
  aL as t,
  aA as n,
  aM as e,
  aN as a,
  aO as o,
  az as u,
  aP as c,
  aQ as i,
  aR as f,
  ax as s,
  aS as l,
  aT as b,
  aU as v,
  aV as j,
  aI as y,
  aW as p,
  av as h,
  aX as g,
  aY as d,
  aZ as w,
  a_ as A,
  a$ as _,
  aD as O,
  b0 as m,
  ay as S,
  b1 as x,
  b2 as E,
  b3 as I,
  aC as U,
  aB as k,
  aG as B,
  b4 as D,
} from './MarkdownPage-p1fdV9J8.js';
function M(n) {
  return 'symbol' == typeof n || (r(n) && '[object Symbol]' == t(n));
}
function z(r, t) {
  for (var n = -1, e = null == r ? 0 : r.length, a = Array(e); ++n < e; ) a[n] = t(r[n], n, r);
  return a;
}
var P = e ? e.prototype : void 0,
  C = P ? P.toString : void 0;
function F(r) {
  if ('string' == typeof r) return r;
  if (n(r)) return z(r, F) + '';
  if (M(r)) return C ? C.call(r) : '';
  var t = r + '';
  return '0' == t && 1 / r == -1 / 0 ? '-0' : t;
}
function L() {}
function $(r, t) {
  for (var n = -1, e = null == r ? 0 : r.length; ++n < e && !1 !== t(r[n], n, r); );
  return r;
}
function N(r, t, n, e) {
  for (var a = r.length, o = n + -1; ++o < a; ) if (t(r[o], o, r)) return o;
  return -1;
}
function R(r) {
  return r != r;
}
function V(r, t, n) {
  return t == t
    ? (function (r, t, n) {
        for (var e = n - 1, a = r.length; ++e < a; ) if (r[e] === t) return e;
        return -1;
      })(r, t, n)
    : N(r, R, n);
}
function G(r, t) {
  return !!(null == r ? 0 : r.length) && V(r, t, 0) > -1;
}
function W(r) {
  return u(r) ? a(r) : o(r);
}
var q = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  K = /^\w*$/;
function Q(r, t) {
  if (n(r)) return !1;
  var e = typeof r;
  return (
    !('number' != e && 'symbol' != e && 'boolean' != e && null != r && !M(r)) ||
    K.test(r) ||
    !q.test(r) ||
    (null != t && r in Object(t))
  );
}
var T,
  X,
  Y,
  Z =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  H = /\\(\\)?/g,
  J =
    ((T = function (r) {
      var t = [];
      return (
        46 === r.charCodeAt(0) && t.push(''),
        r.replace(Z, function (r, n, e, a) {
          t.push(e ? a.replace(H, '$1') : n || r);
        }),
        t
      );
    }),
    (X = c(T, function (r) {
      return (500 === Y.size && Y.clear(), r);
    })),
    (Y = X.cache),
    X);
function rr(r) {
  return null == r ? '' : F(r);
}
function tr(r, t) {
  return n(r) ? r : Q(r, t) ? [r] : J(rr(r));
}
function nr(r) {
  if ('string' == typeof r || M(r)) return r;
  var t = r + '';
  return '0' == t && 1 / r == -1 / 0 ? '-0' : t;
}
function er(r, t) {
  for (var n = 0, e = (t = tr(t, r)).length; null != r && n < e; ) r = r[nr(t[n++])];
  return n && n == e ? r : void 0;
}
function ar(r, t) {
  for (var n = -1, e = t.length, a = r.length; ++n < e; ) r[a + n] = t[n];
  return r;
}
var or = e ? e.isConcatSpreadable : void 0;
function ur(r) {
  return n(r) || i(r) || !!(or && r && r[or]);
}
function cr(r, t, n, e, a) {
  var o = -1,
    u = r.length;
  for (n || (n = ur), a || (a = []); ++o < u; ) {
    var c = r[o];
    n(c) ? ar(a, c) : e || (a[a.length] = c);
  }
  return a;
}
function ir(r, t, n, e) {
  var a = -1,
    o = null == r ? 0 : r.length;
  for (e && o && (n = r[++a]); ++a < o; ) n = t(n, r[a], a, r);
  return n;
}
function fr(r, t) {
  for (var n = -1, e = null == r ? 0 : r.length, a = 0, o = []; ++n < e; ) {
    var u = r[n];
    t(u, n, r) && (o[a++] = u);
  }
  return o;
}
function sr() {
  return [];
}
var lr = Object.prototype.propertyIsEnumerable,
  br = Object.getOwnPropertySymbols,
  vr = br
    ? function (r) {
        return null == r
          ? []
          : ((r = Object(r)),
            fr(br(r), function (t) {
              return lr.call(r, t);
            }));
      }
    : sr;
var jr = Object.getOwnPropertySymbols
  ? function (r) {
      for (var t = []; r; ) (ar(t, vr(r)), (r = l(r)));
      return t;
    }
  : sr;
function yr(r, t, e) {
  var a = t(r);
  return n(r) ? a : ar(a, e(r));
}
function pr(r) {
  return yr(r, W, vr);
}
function hr(r) {
  return yr(r, s, jr);
}
var gr = Object.prototype.hasOwnProperty;
var dr = /\w*$/;
var wr = e ? e.prototype : void 0,
  Ar = wr ? wr.valueOf : void 0;
function _r(r, t, n) {
  var e,
    a = r.constructor;
  switch (t) {
    case '[object ArrayBuffer]':
      return b(r);
    case '[object Boolean]':
    case '[object Date]':
      return new a(+r);
    case '[object DataView]':
      return (function (r, t) {
        var n = t ? b(r.buffer) : r.buffer;
        return new r.constructor(n, r.byteOffset, r.byteLength);
      })(r, n);
    case '[object Float32Array]':
    case '[object Float64Array]':
    case '[object Int8Array]':
    case '[object Int16Array]':
    case '[object Int32Array]':
    case '[object Uint8Array]':
    case '[object Uint8ClampedArray]':
    case '[object Uint16Array]':
    case '[object Uint32Array]':
      return v(r, n);
    case '[object Map]':
    case '[object Set]':
      return new a();
    case '[object Number]':
    case '[object String]':
      return new a(r);
    case '[object RegExp]':
      return (function (r) {
        var t = new r.constructor(r.source, dr.exec(r));
        return ((t.lastIndex = r.lastIndex), t);
      })(r);
    case '[object Symbol]':
      return ((e = r), Ar ? Object(Ar.call(e)) : {});
  }
}
var Or = p && p.isMap,
  mr = Or
    ? y(Or)
    : function (t) {
        return r(t) && '[object Map]' == j(t);
      };
var Sr = p && p.isSet,
  xr = Sr
    ? y(Sr)
    : function (t) {
        return r(t) && '[object Set]' == j(t);
      },
  Er = '[object Arguments]',
  Ir = '[object Function]',
  Ur = '[object Object]',
  kr = {};
function Br(r, t, e, a, o, u) {
  var c,
    i = 1 & t,
    l = 2 & t,
    b = 4 & t;
  if (void 0 !== c) return c;
  if (!h(r)) return r;
  var v = n(r);
  if (v) {
    if (
      ((c = (function (r) {
        var t = r.length,
          n = new r.constructor(t);
        return (
          t &&
            'string' == typeof r[0] &&
            gr.call(r, 'index') &&
            ((n.index = r.index), (n.input = r.input)),
          n
        );
      })(r)),
      !i)
    )
      return g(r, c);
  } else {
    var y = j(r),
      p = y == Ir || '[object GeneratorFunction]' == y;
    if (d(r)) return w(r, i);
    if (y == Ur || y == Er || (p && !o)) {
      if (((c = l || p ? {} : A(r)), !i))
        return l
          ? (function (r, t) {
              return f(r, jr(r), t);
            })(
              r,
              (function (r, t) {
                return r && f(t, s(t), r);
              })(c, r)
            )
          : (function (r, t) {
              return f(r, vr(r), t);
            })(
              r,
              (function (r, t) {
                return r && f(t, W(t), r);
              })(c, r)
            );
    } else {
      if (!kr[y]) return o ? r : {};
      c = _r(r, y, i);
    }
  }
  u || (u = new _());
  var m = u.get(r);
  if (m) return m;
  (u.set(r, c),
    xr(r)
      ? r.forEach(function (n) {
          c.add(Br(n, t, e, n, r, u));
        })
      : mr(r) &&
        r.forEach(function (n, a) {
          c.set(a, Br(n, t, e, a, r, u));
        }));
  var S = v ? void 0 : (b ? (l ? hr : pr) : l ? s : W)(r);
  return (
    $(S || r, function (n, a) {
      (S && (n = r[(a = n)]), O(c, a, Br(n, t, e, a, r, u)));
    }),
    c
  );
}
((kr[Er] =
  kr['[object Array]'] =
  kr['[object ArrayBuffer]'] =
  kr['[object DataView]'] =
  kr['[object Boolean]'] =
  kr['[object Date]'] =
  kr['[object Float32Array]'] =
  kr['[object Float64Array]'] =
  kr['[object Int8Array]'] =
  kr['[object Int16Array]'] =
  kr['[object Int32Array]'] =
  kr['[object Map]'] =
  kr['[object Number]'] =
  kr[Ur] =
  kr['[object RegExp]'] =
  kr['[object Set]'] =
  kr['[object String]'] =
  kr['[object Symbol]'] =
  kr['[object Uint8Array]'] =
  kr['[object Uint8ClampedArray]'] =
  kr['[object Uint16Array]'] =
  kr['[object Uint32Array]'] =
    !0),
  (kr['[object Error]'] = kr[Ir] = kr['[object WeakMap]'] = !1));
function Dr(r) {
  var t = -1,
    n = null == r ? 0 : r.length;
  for (this.__data__ = new m(); ++t < n; ) this.add(r[t]);
}
function Mr(r, t) {
  for (var n = -1, e = null == r ? 0 : r.length; ++n < e; ) if (t(r[n], n, r)) return !0;
  return !1;
}
function zr(r, t) {
  return r.has(t);
}
((Dr.prototype.add = Dr.prototype.push =
  function (r) {
    return (this.__data__.set(r, '__lodash_hash_undefined__'), this);
  }),
  (Dr.prototype.has = function (r) {
    return this.__data__.has(r);
  }));
function Pr(r, t, n, e, a, o) {
  var u = 1 & n,
    c = r.length,
    i = t.length;
  if (c != i && !(u && i > c)) return !1;
  var f = o.get(r),
    s = o.get(t);
  if (f && s) return f == t && s == r;
  var l = -1,
    b = !0,
    v = 2 & n ? new Dr() : void 0;
  for (o.set(r, t), o.set(t, r); ++l < c; ) {
    var j = r[l],
      y = t[l];
    if (e) var p = u ? e(y, j, l, t, r, o) : e(j, y, l, r, t, o);
    if (void 0 !== p) {
      if (p) continue;
      b = !1;
      break;
    }
    if (v) {
      if (
        !Mr(t, function (r, t) {
          if (!zr(v, t) && (j === r || a(j, r, n, e, o))) return v.push(t);
        })
      ) {
        b = !1;
        break;
      }
    } else if (j !== y && !a(j, y, n, e, o)) {
      b = !1;
      break;
    }
  }
  return (o.delete(r), o.delete(t), b);
}
function Cr(r) {
  var t = -1,
    n = Array(r.size);
  return (
    r.forEach(function (r, e) {
      n[++t] = [e, r];
    }),
    n
  );
}
function Fr(r) {
  var t = -1,
    n = Array(r.size);
  return (
    r.forEach(function (r) {
      n[++t] = r;
    }),
    n
  );
}
var Lr = e ? e.prototype : void 0,
  $r = Lr ? Lr.valueOf : void 0;
var Nr = Object.prototype.hasOwnProperty;
var Rr = '[object Arguments]',
  Vr = '[object Array]',
  Gr = '[object Object]',
  Wr = Object.prototype.hasOwnProperty;
function qr(r, t, e, a, o, u) {
  var c = n(r),
    i = n(t),
    f = c ? Vr : j(r),
    s = i ? Vr : j(t),
    l = (f = f == Rr ? Gr : f) == Gr,
    b = (s = s == Rr ? Gr : s) == Gr,
    v = f == s;
  if (v && d(r)) {
    if (!d(t)) return !1;
    ((c = !0), (l = !1));
  }
  if (v && !l)
    return (
      u || (u = new _()),
      c || E(r)
        ? Pr(r, t, e, a, o, u)
        : (function (r, t, n, e, a, o, u) {
            switch (n) {
              case '[object DataView]':
                if (r.byteLength != t.byteLength || r.byteOffset != t.byteOffset) return !1;
                ((r = r.buffer), (t = t.buffer));
              case '[object ArrayBuffer]':
                return !(r.byteLength != t.byteLength || !o(new x(r), new x(t)));
              case '[object Boolean]':
              case '[object Date]':
              case '[object Number]':
                return S(+r, +t);
              case '[object Error]':
                return r.name == t.name && r.message == t.message;
              case '[object RegExp]':
              case '[object String]':
                return r == t + '';
              case '[object Map]':
                var c = Cr;
              case '[object Set]':
                var i = 1 & e;
                if ((c || (c = Fr), r.size != t.size && !i)) return !1;
                var f = u.get(r);
                if (f) return f == t;
                ((e |= 2), u.set(r, t));
                var s = Pr(c(r), c(t), e, a, o, u);
                return (u.delete(r), s);
              case '[object Symbol]':
                if ($r) return $r.call(r) == $r.call(t);
            }
            return !1;
          })(r, t, f, e, a, o, u)
    );
  if (!(1 & e)) {
    var y = l && Wr.call(r, '__wrapped__'),
      p = b && Wr.call(t, '__wrapped__');
    if (y || p) {
      var h = y ? r.value() : r,
        g = p ? t.value() : t;
      return (u || (u = new _()), o(h, g, e, a, u));
    }
  }
  return (
    !!v &&
    (u || (u = new _()),
    (function (r, t, n, e, a, o) {
      var u = 1 & n,
        c = pr(r),
        i = c.length;
      if (i != pr(t).length && !u) return !1;
      for (var f = i; f--; ) {
        var s = c[f];
        if (!(u ? s in t : Nr.call(t, s))) return !1;
      }
      var l = o.get(r),
        b = o.get(t);
      if (l && b) return l == t && b == r;
      var v = !0;
      (o.set(r, t), o.set(t, r));
      for (var j = u; ++f < i; ) {
        var y = r[(s = c[f])],
          p = t[s];
        if (e) var h = u ? e(p, y, s, t, r, o) : e(y, p, s, r, t, o);
        if (!(void 0 === h ? y === p || a(y, p, n, e, o) : h)) {
          v = !1;
          break;
        }
        j || (j = 'constructor' == s);
      }
      if (v && !j) {
        var g = r.constructor,
          d = t.constructor;
        g == d ||
          !('constructor' in r) ||
          !('constructor' in t) ||
          ('function' == typeof g && g instanceof g && 'function' == typeof d && d instanceof d) ||
          (v = !1);
      }
      return (o.delete(r), o.delete(t), v);
    })(r, t, e, a, o, u))
  );
}
function Kr(t, n, e, a, o) {
  return (
    t === n ||
    (null == t || null == n || (!r(t) && !r(n)) ? t != t && n != n : qr(t, n, e, a, Kr, o))
  );
}
function Qr(r) {
  return r == r && !h(r);
}
function Tr(r, t) {
  return function (n) {
    return null != n && n[r] === t && (void 0 !== t || r in Object(n));
  };
}
function Xr(r) {
  var t = (function (r) {
    for (var t = W(r), n = t.length; n--; ) {
      var e = t[n],
        a = r[e];
      t[n] = [e, a, Qr(a)];
    }
    return t;
  })(r);
  return 1 == t.length && t[0][2]
    ? Tr(t[0][0], t[0][1])
    : function (n) {
        return (
          n === r ||
          (function (r, t, n, e) {
            var a = n.length,
              o = a;
            if (null == r) return !o;
            for (r = Object(r); a--; ) {
              var u = n[a];
              if (u[2] ? u[1] !== r[u[0]] : !(u[0] in r)) return !1;
            }
            for (; ++a < o; ) {
              var c = (u = n[a])[0],
                i = r[c],
                f = u[1];
              if (u[2]) {
                if (void 0 === i && !(c in r)) return !1;
              } else if (!Kr(f, i, 3, e, new _())) return !1;
            }
            return !0;
          })(n, 0, t)
        );
      };
}
function Yr(r, t) {
  return null != r && t in Object(r);
}
function Zr(r, t, e) {
  for (var a = -1, o = (t = tr(t, r)).length, u = !1; ++a < o; ) {
    var c = nr(t[a]);
    if (!(u = null != r && e(r, c))) break;
    r = r[c];
  }
  return u || ++a != o ? u : !!(o = null == r ? 0 : r.length) && I(o) && U(c, o) && (n(r) || i(r));
}
function Hr(r, t) {
  return null != r && Zr(r, t, Yr);
}
function Jr(r, t) {
  return Q(r) && Qr(t)
    ? Tr(nr(r), t)
    : function (n) {
        var e = (function (r, t, n) {
          var e = null == r ? void 0 : er(r, t);
          return void 0 === e ? n : e;
        })(n, r);
        return void 0 === e && e === t ? Hr(n, r) : Kr(t, e, 3);
      };
}
function rt(r) {
  return Q(r)
    ? ((t = nr(r)),
      function (r) {
        return null == r ? void 0 : r[t];
      })
    : (function (r) {
        return function (t) {
          return er(t, r);
        };
      })(r);
  var t;
}
function tt(r) {
  return 'function' == typeof r
    ? r
    : null == r
      ? k
      : 'object' == typeof r
        ? n(r)
          ? Jr(r[0], r[1])
          : Xr(r)
        : rt(r);
}
function nt(r, t) {
  return r && B(r, t, W);
}
var et,
  at =
    ((et = nt),
    function (r, t) {
      if (null == r) return r;
      if (!u(r)) return et(r, t);
      for (var n = r.length, e = -1, a = Object(r); ++e < n && !1 !== t(a[e], e, a); );
      return r;
    });
function ot(r) {
  return 'function' == typeof r ? r : k;
}
function ut(r, t) {
  return (n(r) ? $ : at)(r, ot(t));
}
function ct(r, t) {
  var n = [];
  return (
    at(r, function (r, e, a) {
      t(r, e, a) && n.push(r);
    }),
    n
  );
}
function it(r, t) {
  return (n(r) ? fr : ct)(r, tt(t));
}
function ft(r) {
  return null == r
    ? []
    : (function (r, t) {
        return z(t, function (t) {
          return r[t];
        });
      })(r, W(r));
}
function st(r) {
  return void 0 === r;
}
function lt(r, t, n, e, a) {
  return (
    a(r, function (r, a, o) {
      n = e ? ((e = !1), r) : t(n, r, a, o);
    }),
    n
  );
}
function bt(r, t, e) {
  var a = n(r) ? ir : lt,
    o = arguments.length < 3;
  return a(r, tt(t), e, o, at);
}
var vt =
  D && 1 / Fr(new D([, -0]))[1] == 1 / 0
    ? function (r) {
        return new D(r);
      }
    : L;
function jt(r, t, n) {
  var e = -1,
    a = G,
    o = r.length,
    u = !0,
    c = [],
    i = c;
  if (o >= 200) {
    var f = t ? null : vt(r);
    if (f) return Fr(f);
    ((u = !1), (a = zr), (i = new Dr()));
  } else i = t ? [] : c;
  r: for (; ++e < o; ) {
    var s = r[e],
      l = t ? t(s) : s;
    if (((s = 0 !== s ? s : 0), u && l == l)) {
      for (var b = i.length; b--; ) if (i[b] === l) continue r;
      (t && i.push(l), c.push(s));
    } else a(i, l, n) || (i !== c && i.push(l), c.push(s));
  }
  return c;
}
export {
  fr as A,
  ct as B,
  Mr as C,
  L as D,
  Dr as S,
  jt as a,
  Br as b,
  cr as c,
  ut as d,
  M as e,
  it as f,
  tt as g,
  N as h,
  st as i,
  at as j,
  W as k,
  z as l,
  Zr as m,
  tr as n,
  er as o,
  ot as p,
  nt as q,
  bt as r,
  Hr as s,
  nr as t,
  rr as u,
  ft as v,
  G as w,
  zr as x,
  V as y,
  hr as z,
};
