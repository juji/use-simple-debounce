var Vt = Array.isArray,
  Gt = Array.prototype.indexOf,
  qn = Array.from,
  Qe = Object.defineProperty,
  _e = Object.getOwnPropertyDescriptor,
  Kt = Object.getOwnPropertyDescriptors,
  $t = Object.prototype,
  Wt = Array.prototype,
  ut = Object.getPrototypeOf,
  et = Object.isExtensible;
const Xt = () => {};
function Un(e) {
  return e();
}
function Zt(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function ot() {
  var e,
    t,
    n = new Promise((r, s) => {
      ((e = r), (t = s));
    });
  return { promise: n, resolve: e, reject: t };
}
const A = 2,
  Ue = 4,
  Ae = 8,
  ne = 16,
  L = 32,
  re = 64,
  ct = 128,
  O = 256,
  ge = 512,
  b = 1024,
  N = 2048,
  $ = 4096,
  B = 8192,
  fe = 16384,
  He = 32768,
  Be = 65536,
  tt = 1 << 17,
  _t = 1 << 18,
  ye = 1 << 19,
  vt = 1 << 20,
  Me = 1 << 21,
  Re = 1 << 22,
  z = 1 << 23,
  ve = Symbol('$state'),
  Hn = Symbol('legacy props'),
  Bn = Symbol(''),
  se = new (class extends Error {
    name = 'StaleReactionError';
    message = 'The reaction that called `getAbortSignal()` was re-run or destroyed';
  })(),
  Se = 3,
  Ve = 8;
function zt(e) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
function Jt() {
  throw new Error('https://svelte.dev/e/missing_context');
}
function Qt() {
  throw new Error('https://svelte.dev/e/async_derived_orphan');
}
function en(e) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function tn() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function nn(e) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function rn() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function Gn() {
  throw new Error('https://svelte.dev/e/get_abort_signal_outside_reaction');
}
function Kn() {
  throw new Error('https://svelte.dev/e/hydration_failed');
}
function $n(e) {
  throw new Error('https://svelte.dev/e/lifecycle_legacy_only');
}
function Wn(e) {
  throw new Error('https://svelte.dev/e/props_invalid_value');
}
function sn() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function an() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function fn() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
function Xn() {
  throw new Error('https://svelte.dev/e/svelte_boundary_reset_onerror');
}
const Zn = 1,
  zn = 2,
  Jn = 16,
  Qn = 1,
  er = 2,
  tr = 4,
  nr = 8,
  rr = 16,
  ln = 1,
  un = 2,
  dt = '[',
  on = '[!',
  cn = ']',
  Ge = {},
  E = Symbol(),
  sr = 'http://www.w3.org/1999/xhtml';
function Ke(e) {
  console.warn('https://svelte.dev/e/hydration_mismatch');
}
function ar() {
  console.warn('https://svelte.dev/e/svelte_boundary_reset_noop');
}
let m = !1;
function Ee(e) {
  m = e;
}
let h;
function I(e) {
  if (e === null) throw (Ke(), Ge);
  return (h = e);
}
function ht() {
  return I(j(h));
}
function ir(e) {
  if (m) {
    if (j(h) !== null) throw (Ke(), Ge);
    h = e;
  }
}
function fr(e = 1) {
  if (m) {
    for (var t = e, n = h; t--; ) n = j(n);
    h = n;
  }
}
function lr(e = !0) {
  for (var t = 0, n = h; ; ) {
    if (n.nodeType === Ve) {
      var r = n.data;
      if (r === cn) {
        if (t === 0) return n;
        t -= 1;
      } else (r === dt || r === on) && (t += 1);
    }
    var s = j(n);
    (e && n.remove(), (n = s));
  }
}
function ur(e) {
  if (!e || e.nodeType !== Ve) throw (Ke(), Ge);
  return e.data;
}
function pt(e) {
  return e === this.v;
}
function _n(e, t) {
  return e != e
    ? t == t
    : e !== t || (e !== null && typeof e == 'object') || typeof e == 'function';
}
function yt(e) {
  return !_n(e, this.v);
}
let ke = !1;
function or() {
  ke = !0;
}
let g = null;
function be(e) {
  g = e;
}
function cr() {
  const e = {};
  return [() => (hn(e) || Jt(), vn(e)), (t) => dn(e, t)];
}
function vn(e) {
  return Oe().get(e);
}
function dn(e, t) {
  return (Oe().set(e, t), t);
}
function hn(e) {
  return Oe().has(e);
}
function _r() {
  return Oe();
}
function vr(e, t = !1, n) {
  g = { p: g, c: null, e: null, s: e, x: null, l: ke && !t ? { s: null, u: null, $: [] } : null };
}
function dr(e) {
  var t = g,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) Nt(r);
  }
  return ((g = t.p), {});
}
function we() {
  return !ke || (g !== null && g.l === null);
}
function Oe(e) {
  return (g === null && zt(), (g.c ??= new Map(pn(g) || void 0)));
}
function pn(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null) return n;
    t = t.p;
  }
  return null;
}
let Z = [];
function wt() {
  var e = Z;
  ((Z = []), Zt(e));
}
function yn(e) {
  if (Z.length === 0 && !de) {
    var t = Z;
    queueMicrotask(() => {
      t === Z && wt();
    });
  }
  Z.push(e);
}
function wn() {
  for (; Z.length > 0; ) wt();
}
const mn = new WeakMap();
function gn(e) {
  var t = _;
  if (t === null) return ((c.f |= z), e);
  if ((t.f & He) === 0) {
    if ((t.f & ct) === 0) throw (!t.parent && e instanceof Error && mt(e), e);
    t.b.error(e);
  } else Te(e, t);
}
function Te(e, t) {
  for (; t !== null; ) {
    if ((t.f & ct) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw (e instanceof Error && mt(e), e);
}
function mt(e) {
  const t = mn.get(e);
  t && (Qe(e, 'message', { value: t.message }), Qe(e, 'stack', { value: t.stack }));
}
const me = new Set();
let w = null,
  Pe = null,
  C = null,
  nt = new Set(),
  P = [],
  Ne = null,
  Fe = !1,
  de = !1;
class Q {
  current = new Map();
  #n = new Map();
  #r = new Set();
  #e = 0;
  #l = null;
  #s = [];
  #a = [];
  #t = [];
  #i = [];
  #u = [];
  #o = [];
  skipped_effects = new Set();
  process(t) {
    ((P = []), (Pe = null), this.apply());
    for (const a of t) this.#c(a);
    if (this.#e === 0) {
      var n = C;
      this.#_();
      var r = this.#a,
        s = this.#t;
      ((this.#a = []),
        (this.#t = []),
        (this.#i = []),
        (Pe = this),
        (w = null),
        (C = n),
        rt(r),
        rt(s),
        (Pe = null),
        this.#l?.resolve());
    } else (this.#f(this.#a), this.#f(this.#t), this.#f(this.#i));
    C = null;
    for (const a of this.#s) pe(a);
    this.#s = [];
  }
  #c(t) {
    t.f ^= b;
    for (var n = t.first; n !== null; ) {
      var r = n.f,
        s = (r & (L | re)) !== 0,
        a = s && (r & b) !== 0,
        f = a || (r & B) !== 0 || this.skipped_effects.has(n);
      if (!f && n.fn !== null) {
        s
          ? (n.f ^= b)
          : (r & Ue) !== 0
            ? this.#t.push(n)
            : (r & b) === 0 &&
              ((r & Re) !== 0 && n.b?.is_pending()
                ? this.#s.push(n)
                : Ce(n) && ((n.f & ne) !== 0 && this.#i.push(n), pe(n)));
        var u = n.first;
        if (u !== null) {
          n = u;
          continue;
        }
      }
      var i = n.parent;
      for (n = n.next; n === null && i !== null; ) ((n = i.next), (i = i.parent));
    }
  }
  #f(t) {
    for (const n of t) (((n.f & N) !== 0 ? this.#u : this.#o).push(n), x(n, b));
    t.length = 0;
  }
  capture(t, n) {
    (this.#n.has(t) || this.#n.set(t, n), this.current.set(t, t.v), C?.set(t, t.v));
  }
  activate() {
    w = this;
  }
  deactivate() {
    ((w = null), (C = null));
  }
  flush() {
    if (P.length > 0) {
      if ((this.activate(), je(), w !== null && w !== this)) return;
    } else this.#e === 0 && this.#_();
    this.deactivate();
    for (const t of nt) if ((nt.delete(t), t(), w !== null)) break;
  }
  #_() {
    for (const t of this.#r) t();
    if ((this.#r.clear(), me.size > 1)) {
      this.#n.clear();
      let t = !0;
      for (const n of me) {
        if (n === this) {
          t = !1;
          continue;
        }
        const r = [];
        for (const [a, f] of this.current) {
          if (n.current.has(a))
            if (t && f !== n.current.get(a)) n.current.set(a, f);
            else continue;
          r.push(a);
        }
        if (r.length === 0) continue;
        const s = [...n.current.keys()].filter((a) => !this.current.has(a));
        if (s.length > 0) {
          for (const a of r) gt(a, s);
          if (P.length > 0) {
            ((w = n), n.apply());
            for (const a of P) n.#c(a);
            ((P = []), n.deactivate());
          }
        }
      }
      w = null;
    }
    me.delete(this);
  }
  increment() {
    this.#e += 1;
  }
  decrement() {
    this.#e -= 1;
    for (const t of this.#u) (x(t, N), ee(t));
    for (const t of this.#o) (x(t, $), ee(t));
    this.flush();
  }
  add_callback(t) {
    this.#r.add(t);
  }
  settled() {
    return (this.#l ??= ot()).promise;
  }
  static ensure() {
    if (w === null) {
      const t = (w = new Q());
      (me.add(w),
        de ||
          Q.enqueue(() => {
            w === t && t.flush();
          }));
    }
    return w;
  }
  static enqueue(t) {
    yn(t);
  }
  apply() {}
}
function En(e) {
  var t = de;
  de = !0;
  try {
    var n;
    for (e && (w !== null && je(), (n = e())); ; ) {
      if ((wn(), P.length === 0 && (w?.flush(), P.length === 0))) return ((Ne = null), n);
      je();
    }
  } finally {
    de = t;
  }
}
function je() {
  var e = ae;
  Fe = !0;
  try {
    var t = 0;
    for (it(!0); P.length > 0; ) {
      var n = Q.ensure();
      if (t++ > 1e3) {
        var r, s;
        bn();
      }
      (n.process(P), U.clear());
    }
  } finally {
    ((Fe = !1), it(e), (Ne = null));
  }
}
function bn() {
  try {
    rn();
  } catch (e) {
    Te(e, Ne);
  }
}
let X = null;
function rt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (
        (r.f & (fe | B)) === 0 &&
        Ce(r) &&
        ((X = []),
        pe(r),
        r.deps === null &&
          r.first === null &&
          r.nodes_start === null &&
          (r.teardown === null && r.ac === null ? It(r) : (r.fn = null)),
        X?.length > 0)
      ) {
        U.clear();
        for (const s of X) pe(s);
        X = [];
      }
    }
    X = null;
  }
}
function gt(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      (r & A) !== 0 ? gt(n, t) : (r & (Re | ne)) !== 0 && Et(n, t) && (x(n, N), ee(n));
    }
}
function Et(e, t) {
  if (e.deps !== null) {
    for (const n of e.deps) if (t.includes(n) || ((n.f & A) !== 0 && Et(n, t))) return !0;
  }
  return !1;
}
function ee(e) {
  for (var t = (Ne = e); t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Fe && t === _ && (n & ne) !== 0) return;
    if ((n & (re | L)) !== 0) {
      if ((n & b) === 0) return;
      t.f ^= b;
    }
  }
  P.push(t);
}
function Tn(e, t, n) {
  const r = we() ? $e : Rn;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var s = w,
    a = _,
    f = xn(),
    u = m;
  Promise.all(t.map((i) => An(i)))
    .then((i) => {
      f();
      try {
        n([...e.map(r), ...i]);
      } catch (l) {
        (a.f & fe) === 0 && Te(l, a);
      }
      (u && Ee(!1), s?.deactivate(), Le());
    })
    .catch((i) => {
      Te(i, a);
    });
}
function xn() {
  var e = _,
    t = c,
    n = g,
    r = w,
    s = m;
  if (s) var a = h;
  return function () {
    (ie(e), K(t), be(n), r?.activate(), s && (Ee(!0), I(a)));
  };
}
function Le() {
  (ie(null), K(null), be(null));
}
function $e(e) {
  var t = A | N,
    n = c !== null && (c.f & A) !== 0 ? c : null;
  return (
    _ === null || (n !== null && (n.f & O) !== 0) ? (t |= O) : (_.f |= ye),
    {
      ctx: g,
      deps: null,
      effects: null,
      equals: pt,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: E,
      wv: 0,
      parent: n ?? _,
      ac: null,
    }
  );
}
function An(e, t) {
  let n = _;
  n === null && Qt();
  var r = n.b,
    s = void 0,
    a = Xe(E),
    f = !c,
    u = new Map();
  return (
    Cn(() => {
      var i = ot();
      s = i.promise;
      try {
        Promise.resolve(e()).then(i.resolve, i.reject).then(Le);
      } catch (y) {
        (i.reject(y), Le());
      }
      var l = w,
        o = r.is_pending();
      f &&
        (r.update_pending_count(1),
        o || (l.increment(), u.get(l)?.reject(se), u.delete(l), u.set(l, i)));
      const v = (y, d = void 0) => {
        if ((o || l.activate(), d)) d !== se && ((a.f |= z), Ye(a, d));
        else {
          ((a.f & z) !== 0 && (a.f ^= z), Ye(a, y));
          for (const [p, ue] of u) {
            if ((u.delete(p), p === l)) break;
            ue.reject(se);
          }
        }
        f && (r.update_pending_count(-1), o || l.decrement());
      };
      i.promise.then(v, (y) => v(null, y || 'unknown'));
    }),
    Ot(() => {
      for (const i of u.values()) i.reject(se);
    }),
    new Promise((i) => {
      function l(o) {
        function v() {
          o === s ? i(a) : l(s);
        }
        o.then(v, v);
      }
      l(s);
    })
  );
}
function hr(e) {
  const t = $e(e);
  return (jt(t), t);
}
function Rn(e) {
  const t = $e(e);
  return ((t.equals = yt), t);
}
function bt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) G(t[n]);
  }
}
function Sn(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & A) === 0) return t;
    t = t.parent;
  }
  return null;
}
function We(e) {
  var t,
    n = _;
  ie(Sn(e));
  try {
    (bt(e), (t = Ut(e)));
  } finally {
    ie(n);
  }
  return t;
}
function Tt(e) {
  var t = We(e);
  if ((e.equals(t) || ((e.v = t), (e.wv = Yt())), !le))
    if (C !== null) C.set(e, e.v);
    else {
      var n = (q || (e.f & O) !== 0) && e.deps !== null ? $ : b;
      x(e, n);
    }
}
const U = new Map();
function Xe(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: pt, rv: 0, wv: 0 };
  return n;
}
function Y(e, t) {
  const n = Xe(e);
  return (jt(n), n);
}
function pr(e, t = !1, n = !0) {
  const r = Xe(e);
  return (t || (r.equals = yt), ke && n && g !== null && g.l !== null && (g.l.s ??= []).push(r), r);
}
function W(e, t, n = !1) {
  c !== null &&
    (!D || (c.f & tt) !== 0) &&
    we() &&
    (c.f & (A | ne | Re | tt)) !== 0 &&
    !F?.includes(e) &&
    fn();
  let r = n ? oe(t) : t;
  return Ye(e, r);
}
function Ye(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    (le ? U.set(e, t) : U.set(e, n), (e.v = t));
    var r = Q.ensure();
    (r.capture(e, n),
      (e.f & A) !== 0 && ((e.f & N) !== 0 && We(e), x(e, (e.f & O) === 0 ? b : $)),
      (e.wv = Yt()),
      xt(e, N),
      we() &&
        _ !== null &&
        (_.f & b) !== 0 &&
        (_.f & (L | re)) === 0 &&
        (k === null ? jn([e]) : k.push(e)));
  }
  return t;
}
function Ie(e) {
  W(e, e.v + 1);
}
function xt(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = we(), s = n.length, a = 0; a < s; a++) {
      var f = n[a],
        u = f.f;
      if (!(!r && f === _)) {
        var i = (u & N) === 0;
        (i && x(f, t),
          (u & A) !== 0 ? xt(f, $) : i && ((u & ne) !== 0 && X !== null && X.push(f), ee(f)));
      }
    }
}
function oe(e) {
  if (typeof e != 'object' || e === null || ve in e) return e;
  const t = ut(e);
  if (t !== $t && t !== Wt) return e;
  var n = new Map(),
    r = Vt(e),
    s = Y(0),
    a = J,
    f = (u) => {
      if (J === a) return u();
      var i = c,
        l = J;
      (K(null), lt(a));
      var o = u();
      return (K(i), lt(l), o);
    };
  return (
    r && n.set('length', Y(e.length)),
    new Proxy(e, {
      defineProperty(u, i, l) {
        (!('value' in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) &&
          sn();
        var o = n.get(i);
        return (
          o === void 0
            ? (o = f(() => {
                var v = Y(l.value);
                return (n.set(i, v), v);
              }))
            : W(o, l.value, !0),
          !0
        );
      },
      deleteProperty(u, i) {
        var l = n.get(i);
        if (l === void 0) {
          if (i in u) {
            const o = f(() => Y(E));
            (n.set(i, o), Ie(s));
          }
        } else (W(l, E), Ie(s));
        return !0;
      },
      get(u, i, l) {
        if (i === ve) return e;
        var o = n.get(i),
          v = i in u;
        if (
          (o === void 0 &&
            (!v || _e(u, i)?.writable) &&
            ((o = f(() => {
              var d = oe(v ? u[i] : E),
                p = Y(d);
              return p;
            })),
            n.set(i, o)),
          o !== void 0)
        ) {
          var y = ce(o);
          return y === E ? void 0 : y;
        }
        return Reflect.get(u, i, l);
      },
      getOwnPropertyDescriptor(u, i) {
        var l = Reflect.getOwnPropertyDescriptor(u, i);
        if (l && 'value' in l) {
          var o = n.get(i);
          o && (l.value = ce(o));
        } else if (l === void 0) {
          var v = n.get(i),
            y = v?.v;
          if (v !== void 0 && y !== E)
            return { enumerable: !0, configurable: !0, value: y, writable: !0 };
        }
        return l;
      },
      has(u, i) {
        if (i === ve) return !0;
        var l = n.get(i),
          o = (l !== void 0 && l.v !== E) || Reflect.has(u, i);
        if (l !== void 0 || (_ !== null && (!o || _e(u, i)?.writable))) {
          l === void 0 &&
            ((l = f(() => {
              var y = o ? oe(u[i]) : E,
                d = Y(y);
              return d;
            })),
            n.set(i, l));
          var v = ce(l);
          if (v === E) return !1;
        }
        return o;
      },
      set(u, i, l, o) {
        var v = n.get(i),
          y = i in u;
        if (r && i === 'length')
          for (var d = l; d < v.v; d += 1) {
            var p = n.get(d + '');
            p !== void 0 ? W(p, E) : d in u && ((p = f(() => Y(E))), n.set(d + '', p));
          }
        if (v === void 0)
          (!y || _e(u, i)?.writable) && ((v = f(() => Y(void 0))), W(v, oe(l)), n.set(i, v));
        else {
          y = v.v !== E;
          var ue = f(() => oe(l));
          W(v, ue);
        }
        var ze = Reflect.getOwnPropertyDescriptor(u, i);
        if ((ze?.set && ze.set.call(o, l), !y)) {
          if (r && typeof i == 'string') {
            var Je = n.get('length'),
              De = Number(i);
            Number.isInteger(De) && De >= Je.v && W(Je, De + 1);
          }
          Ie(s);
        }
        return !0;
      },
      ownKeys(u) {
        ce(s);
        var i = Reflect.ownKeys(u).filter((v) => {
          var y = n.get(v);
          return y === void 0 || y.v !== E;
        });
        for (var [l, o] of n) o.v !== E && !(l in u) && i.push(l);
        return i;
      },
      setPrototypeOf() {
        an();
      },
    })
  );
}
var st, kn, At, Rt, St;
function yr() {
  if (st === void 0) {
    ((st = window), (kn = document), (At = /Firefox/.test(navigator.userAgent)));
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    ((Rt = _e(t, 'firstChild').get),
      (St = _e(t, 'nextSibling').get),
      et(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      et(n) && (n.__t = void 0));
  }
}
function V(e = '') {
  return document.createTextNode(e);
}
function te(e) {
  return Rt.call(e);
}
function j(e) {
  return St.call(e);
}
function wr(e, t) {
  if (!m) return te(e);
  var n = te(h);
  if (n === null) n = h.appendChild(V());
  else if (t && n.nodeType !== Se) {
    var r = V();
    return (n?.before(r), I(r), r);
  }
  return (I(n), n);
}
function mr(e, t = !1) {
  if (!m) {
    var n = te(e);
    return n instanceof Comment && n.data === '' ? j(n) : n;
  }
  if (t && h?.nodeType !== Se) {
    var r = V();
    return (h?.before(r), I(r), r);
  }
  return h;
}
function gr(e, t = 1, n = !1) {
  let r = m ? h : e;
  for (var s; t--; ) ((s = r), (r = j(r)));
  if (!m) return r;
  if (n && r?.nodeType !== Se) {
    var a = V();
    return (r === null ? s?.after(a) : r.before(a), I(a), a);
  }
  return (I(r), r);
}
function Er(e) {
  e.textContent = '';
}
function br() {
  return !1;
}
let at = !1;
function On() {
  at ||
    ((at = !0),
    document.addEventListener(
      'reset',
      (e) => {
        Promise.resolve().then(() => {
          if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
        });
      },
      { capture: !0 }
    ));
}
function Ze(e) {
  var t = c,
    n = _;
  (K(null), ie(null));
  try {
    return e();
  } finally {
    (K(t), ie(n));
  }
}
function Tr(e, t, n, r = n) {
  e.addEventListener(t, () => Ze(n));
  const s = e.__on_r;
  (s
    ? (e.__on_r = () => {
        (s(), r(!0));
      })
    : (e.__on_r = () => r(!0)),
    On());
}
function kt(e) {
  (_ === null && c === null && nn(),
    c !== null && (c.f & O) !== 0 && _ === null && tn(),
    le && en());
}
function Nn(e, t) {
  var n = t.last;
  n === null ? (t.last = t.first = e) : ((n.next = e), (e.prev = n), (t.last = e));
}
function M(e, t, n, r = !0) {
  var s = _;
  s !== null && (s.f & B) !== 0 && (e |= B);
  var a = {
    ctx: g,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | N,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s,
    b: s && s.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null,
  };
  if (n)
    try {
      (pe(a), (a.f |= He));
    } catch (i) {
      throw (G(a), i);
    }
  else t !== null && ee(a);
  if (r) {
    var f = a;
    if (
      (n &&
        f.deps === null &&
        f.teardown === null &&
        f.nodes_start === null &&
        f.first === f.last &&
        (f.f & ye) === 0 &&
        (f = f.first),
      f !== null &&
        ((f.parent = s), s !== null && Nn(f, s), c !== null && (c.f & A) !== 0 && (e & re) === 0))
    ) {
      var u = c;
      (u.effects ??= []).push(f);
    }
  }
  return a;
}
function xr() {
  return c !== null && !D;
}
function Ot(e) {
  const t = M(Ae, null, !1);
  return (x(t, b), (t.teardown = e), t);
}
function Ar(e) {
  kt();
  var t = _.f,
    n = !c && (t & L) !== 0 && (t & He) === 0;
  if (n) {
    var r = g;
    (r.e ??= []).push(e);
  } else return Nt(e);
}
function Nt(e) {
  return M(Ue | vt, e, !1);
}
function Rr(e) {
  return (kt(), M(Ae | vt, e, !0));
}
function Sr(e) {
  Q.ensure();
  const t = M(re | ye, e, !0);
  return (n = {}) =>
    new Promise((r) => {
      n.outro
        ? Mn(t, () => {
            (G(t), r(void 0));
          })
        : (G(t), r(void 0));
    });
}
function kr(e) {
  return M(Ue, e, !1);
}
function Cn(e) {
  return M(Re | ye, e, !0);
}
function Or(e, t = 0) {
  return M(Ae | t, e, !0);
}
function Nr(e, t = [], n = []) {
  Tn(t, n, (r) => {
    M(Ae, () => e(...r.map(ce)), !0);
  });
}
function Ct(e, t = 0) {
  var n = M(ne | t, e, !0);
  return n;
}
function Dn(e, t = !0) {
  return M(L | ye, e, !0, t);
}
function Dt(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = le,
      r = c;
    (ft(!0), K(null));
    try {
      t.call(null);
    } finally {
      (ft(n), K(r));
    }
  }
}
function Pt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null &&
      Ze(() => {
        s.abort(se);
      });
    var r = n.next;
    ((n.f & re) !== 0 ? (n.parent = null) : G(n, t), (n = r));
  }
}
function Pn(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    ((t.f & L) === 0 && G(t), (t = n));
  }
}
function G(e, t = !0) {
  var n = !1;
  ((t || (e.f & _t) !== 0) &&
    e.nodes_start !== null &&
    e.nodes_end !== null &&
    (In(e.nodes_start, e.nodes_end), (n = !0)),
    Pt(e, t && !n),
    xe(e, 0),
    x(e, fe));
  var r = e.transitions;
  if (r !== null) for (const a of r) a.stop();
  Dt(e);
  var s = e.parent;
  (s !== null && s.first !== null && It(e),
    (e.next =
      e.prev =
      e.teardown =
      e.ctx =
      e.deps =
      e.fn =
      e.nodes_start =
      e.nodes_end =
      e.ac =
        null));
}
function In(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : j(e);
    (e.remove(), (e = n));
  }
}
function It(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  (n !== null && (n.next = r),
    r !== null && (r.prev = n),
    t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n)));
}
function Mn(e, t) {
  var n = [];
  (Mt(e, n, !0),
    Fn(n, () => {
      (G(e), t && t());
    }));
}
function Fn(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var s of e) s.out(r);
  } else t();
}
function Mt(e, t, n) {
  if ((e.f & B) === 0) {
    if (((e.f ^= B), e.transitions !== null))
      for (const f of e.transitions) (f.is_global || n) && t.push(f);
    for (var r = e.first; r !== null; ) {
      var s = r.next,
        a = (r.f & Be) !== 0 || (r.f & L) !== 0;
      (Mt(r, t, a ? n : !1), (r = s));
    }
  }
}
function Cr(e) {
  Ft(e, !0);
}
function Ft(e, t) {
  if ((e.f & B) !== 0) {
    ((e.f ^= B), (e.f & b) === 0 && (x(e, N), ee(e)));
    for (var n = e.first; n !== null; ) {
      var r = n.next,
        s = (n.f & Be) !== 0 || (n.f & L) !== 0;
      (Ft(n, s ? t : !1), (n = r));
    }
    if (e.transitions !== null) for (const a of e.transitions) (a.is_global || t) && a.in();
  }
}
let ae = !1;
function it(e) {
  ae = e;
}
let le = !1;
function ft(e) {
  le = e;
}
let c = null,
  D = !1;
function K(e) {
  c = e;
}
let _ = null;
function ie(e) {
  _ = e;
}
let F = null;
function jt(e) {
  c !== null && (F === null ? (F = [e]) : F.push(e));
}
let T = null,
  R = 0,
  k = null;
function jn(e) {
  k = e;
}
let Lt = 1,
  he = 0,
  J = he;
function lt(e) {
  J = e;
}
let q = !1;
function Yt() {
  return ++Lt;
}
function Ce(e) {
  var t = e.f;
  if ((t & N) !== 0) return !0;
  if ((t & $) !== 0) {
    var n = e.deps,
      r = (t & O) !== 0;
    if (n !== null) {
      var s,
        a,
        f = (t & ge) !== 0,
        u = r && _ !== null && !q,
        i = n.length;
      if ((f || u) && (_ === null || (_.f & fe) === 0)) {
        var l = e,
          o = l.parent;
        for (s = 0; s < i; s++)
          ((a = n[s]), (f || !a?.reactions?.includes(l)) && (a.reactions ??= []).push(l));
        (f && (l.f ^= ge), u && o !== null && (o.f & O) === 0 && (l.f ^= O));
      }
      for (s = 0; s < i; s++) if (((a = n[s]), Ce(a) && Tt(a), a.wv > e.wv)) return !0;
    }
    (!r || (_ !== null && !q)) && x(e, b);
  }
  return !1;
}
function qt(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !F?.includes(e))
    for (var s = 0; s < r.length; s++) {
      var a = r[s];
      (a.f & A) !== 0 ? qt(a, t, !1) : t === a && (n ? x(a, N) : (a.f & b) !== 0 && x(a, $), ee(a));
    }
}
function Ut(e) {
  var t = T,
    n = R,
    r = k,
    s = c,
    a = q,
    f = F,
    u = g,
    i = D,
    l = J,
    o = e.f;
  ((T = null),
    (R = 0),
    (k = null),
    (q = (o & O) !== 0 && (D || !ae || c === null)),
    (c = (o & (L | re)) === 0 ? e : null),
    (F = null),
    be(e.ctx),
    (D = !1),
    (J = ++he),
    e.ac !== null &&
      (Ze(() => {
        e.ac.abort(se);
      }),
      (e.ac = null)));
  try {
    e.f |= Me;
    var v = e.fn,
      y = v(),
      d = e.deps;
    if (T !== null) {
      var p;
      if ((xe(e, R), d !== null && R > 0))
        for (d.length = R + T.length, p = 0; p < T.length; p++) d[R + p] = T[p];
      else e.deps = d = T;
      if (!q || ((o & A) !== 0 && e.reactions !== null))
        for (p = R; p < d.length; p++) (d[p].reactions ??= []).push(e);
    } else d !== null && R < d.length && (xe(e, R), (d.length = R));
    if (we() && k !== null && !D && d !== null && (e.f & (A | $ | N)) === 0)
      for (p = 0; p < k.length; p++) qt(k[p], e);
    return (
      s !== null && s !== e && (he++, k !== null && (r === null ? (r = k) : r.push(...k))),
      (e.f & z) !== 0 && (e.f ^= z),
      y
    );
  } catch (ue) {
    return gn(ue);
  } finally {
    ((e.f ^= Me), (T = t), (R = n), (k = r), (c = s), (q = a), (F = f), be(u), (D = i), (J = l));
  }
}
function Ln(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Gt.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? (n = t.reactions = null) : ((n[r] = n[s]), n.pop());
    }
  }
  n === null &&
    (t.f & A) !== 0 &&
    (T === null || !T.includes(t)) &&
    (x(t, $), (t.f & (O | ge)) === 0 && (t.f ^= ge), bt(t), xe(t, 0));
}
function xe(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) Ln(e, n[r]);
}
function pe(e) {
  var t = e.f;
  if ((t & fe) === 0) {
    x(e, b);
    var n = _,
      r = ae;
    ((_ = e), (ae = !0));
    try {
      ((t & ne) !== 0 ? Pn(e) : Pt(e), Dt(e));
      var s = Ut(e);
      ((e.teardown = typeof s == 'function' ? s : null), (e.wv = Lt));
      var a;
    } finally {
      ((ae = r), (_ = n));
    }
  }
}
async function Dr() {
  (await Promise.resolve(), En());
}
function Pr() {
  return Q.ensure().settled();
}
function ce(e) {
  var t = e.f,
    n = (t & A) !== 0;
  if (c !== null && !D) {
    var r = _ !== null && (_.f & fe) !== 0;
    if (!r && !F?.includes(e)) {
      var s = c.deps;
      if ((c.f & Me) !== 0)
        e.rv < he &&
          ((e.rv = he),
          T === null && s !== null && s[R] === e
            ? R++
            : T === null
              ? (T = [e])
              : (!q || !T.includes(e)) && T.push(e));
      else {
        (c.deps ??= []).push(e);
        var a = e.reactions;
        a === null ? (e.reactions = [c]) : a.includes(c) || a.push(c);
      }
    }
  } else if (n && e.deps === null && e.effects === null) {
    var f = e,
      u = f.parent;
    u !== null && (u.f & O) === 0 && (f.f ^= O);
  }
  if (le) {
    if (U.has(e)) return U.get(e);
    if (n) {
      f = e;
      var i = f.v;
      return ((((f.f & b) === 0 && f.reactions !== null) || Ht(f)) && (i = We(f)), U.set(f, i), i);
    }
  } else if (n) {
    if (((f = e), C?.has(f))) return C.get(f);
    Ce(f) && Tt(f);
  }
  if (C?.has(e)) return C.get(e);
  if ((e.f & z) !== 0) throw e.v;
  return e.v;
}
function Ht(e) {
  if (e.v === E) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps) if (U.has(t) || ((t.f & A) !== 0 && Ht(t))) return !0;
  return !1;
}
function Ir(e) {
  var t = D;
  try {
    return ((D = !0), e());
  } finally {
    D = t;
  }
}
const Yn = -7169;
function x(e, t) {
  e.f = (e.f & Yn) | t;
}
function Mr(e) {
  if (!(typeof e != 'object' || !e || e instanceof EventTarget)) {
    if (ve in e) qe(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == 'object' && n && ve in n && qe(n);
      }
  }
}
function qe(e, t = new Set()) {
  if (typeof e == 'object' && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    (t.add(e), e instanceof Date && e.getTime());
    for (let r in e)
      try {
        qe(e[r], t);
      } catch {}
    const n = ut(e);
    if (
      n !== Object.prototype &&
      n !== Array.prototype &&
      n !== Map.prototype &&
      n !== Set.prototype &&
      n !== Date.prototype
    ) {
      const r = Kt(n);
      for (let s in r) {
        const a = r[s].get;
        if (a)
          try {
            a.call(e);
          } catch {}
      }
    }
  }
}
let S;
function Fr() {
  S = void 0;
}
function jr(e) {
  let t = null,
    n = m;
  var r;
  if (m) {
    for (
      t = h, S === void 0 && (S = te(document.head));
      S !== null && (S.nodeType !== Ve || S.data !== dt);

    )
      S = j(S);
    S === null ? Ee(!1) : (S = I(j(S)));
  }
  m || (r = document.head.appendChild(V()));
  try {
    Ct(() => e(r), _t);
  } finally {
    n && (Ee(!0), (S = h), I(t));
  }
}
function Bt(e) {
  var t = document.createElement('template');
  return ((t.innerHTML = e.replaceAll('<!>', '<!---->')), t.content);
}
function H(e, t) {
  var n = _;
  n.nodes_start === null && ((n.nodes_start = e), (n.nodes_end = t));
}
function Lr(e, t) {
  var n = (t & ln) !== 0,
    r = (t & un) !== 0,
    s,
    a = !e.startsWith('<!>');
  return () => {
    if (m) return (H(h, null), h);
    s === void 0 && ((s = Bt(a ? e : '<!>' + e)), n || (s = te(s)));
    var f = r || At ? document.importNode(s, !0) : s.cloneNode(!0);
    if (n) {
      var u = te(f),
        i = f.lastChild;
      H(u, i);
    } else H(f, f);
    return f;
  };
}
function Yr(e = '') {
  if (!m) {
    var t = V(e + '');
    return (H(t, t), t);
  }
  var n = h;
  return (n.nodeType !== Se && (n.before((n = V())), I(n)), H(n, n), n);
}
function qr() {
  if (m) return (H(h, null), h);
  var e = document.createDocumentFragment(),
    t = document.createComment(''),
    n = V();
  return (e.append(t, n), H(t, n), e);
}
function Ur(e, t) {
  if (m) {
    ((_.nodes_end = h), ht());
    return;
  }
  e !== null && e.before(t);
}
function Hr(e, t, ...n) {
  var r = e,
    s = Xt,
    a;
  (Ct(() => {
    s !== (s = t()) && (a && (G(a), (a = null)), (a = Dn(() => s(r, ...n))));
  }, Be),
    m && (r = h));
}
function Br(e) {
  return (t, ...n) => {
    var r = e(...n),
      s;
    if (m) ((s = h), ht());
    else {
      var a = r.render().trim(),
        f = Bt(a);
      ((s = te(f)), t.before(s));
    }
    const u = r.setup?.(s);
    (H(s, s), typeof u == 'function' && Ot(u));
  };
}
export {
  Q as $,
  g as A,
  Rr as B,
  Ar as C,
  Ir as D,
  Be as E,
  Zt as F,
  Un as G,
  on as H,
  ce as I,
  Mr as J,
  $e as K,
  Bn as L,
  or as M,
  sr as N,
  vr as O,
  dr as P,
  wr as Q,
  ir as R,
  gr as S,
  xr as T,
  E as U,
  Xe as V,
  Or as W,
  Ie as X,
  Ye as Y,
  _ as Z,
  Ve as _,
  ht as a,
  Jn as a$,
  ie as a0,
  K as a1,
  be as a2,
  gn as a3,
  c as a4,
  nt as a5,
  G as a6,
  fr as a7,
  Te as a8,
  Xn as a9,
  vn as aA,
  hn as aB,
  dn as aC,
  Pr as aD,
  Dr as aE,
  kr as aF,
  ve as aG,
  _e as aH,
  Wn as aI,
  tr as aJ,
  Rn as aK,
  oe as aL,
  W as aM,
  le as aN,
  fe as aO,
  nr as aP,
  er as aQ,
  Qn as aR,
  rr as aS,
  Hn as aT,
  pr as aU,
  Y as aV,
  hr as aW,
  Yr as aX,
  zn as aY,
  B as aZ,
  Zn as a_,
  ye as aa,
  ct as ab,
  j as ac,
  ar as ad,
  Qe as ae,
  Vt as af,
  yr as ag,
  te as ah,
  dt as ai,
  Ge as aj,
  Kn as ak,
  Er as al,
  qn as am,
  Sr as an,
  Fr as ao,
  H as ap,
  cn as aq,
  Ke as ar,
  zt as as,
  Gn as at,
  $n as au,
  ke as av,
  cr as aw,
  Br as ax,
  En as ay,
  _r as az,
  Ct as b,
  Mt as b0,
  Fn as b1,
  Tr as b2,
  Pe as b3,
  kn as b4,
  _n as b5,
  I as c,
  Ee as d,
  V as e,
  Dn as f,
  w as g,
  m as h,
  br as i,
  Cr as j,
  h as k,
  On as l,
  ut as m,
  Kt as n,
  qr as o,
  Mn as p,
  yn as q,
  ur as r,
  lr as s,
  jr as t,
  mr as u,
  Hr as v,
  Ur as w,
  Lr as x,
  Nr as y,
  Xt as z,
};
