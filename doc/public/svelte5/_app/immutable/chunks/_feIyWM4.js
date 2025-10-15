import {
  T as se,
  I as U,
  V as W,
  W as ne,
  D,
  X as H,
  q as P,
  k as p,
  h as g,
  Y as ae,
  Z as E,
  b as re,
  a as ie,
  _ as q,
  H as oe,
  f as d,
  $ as k,
  p as O,
  a0 as R,
  a1 as m,
  a2 as L,
  a3 as le,
  a4 as w,
  A as f,
  a5 as fe,
  a6 as F,
  c as x,
  a7 as ue,
  s as ce,
  a8 as $,
  a9 as he,
  E as _e,
  aa as de,
  ab as pe,
  ac as z,
  ad as ge,
  ae as ve,
  af as X,
  ag as M,
  ah as ye,
  ai as be,
  aj as I,
  d as A,
  ak as me,
  al as Ee,
  am as we,
  an as Te,
  e as Se,
  ao as ke,
  O as Ae,
  ap as Ce,
  aq as Re,
  ar as xe,
  P as De,
  as as T,
  C as Ne,
  at as Oe,
  au as Z,
  av as Fe,
  aw as Pe,
  ax as Me,
  ay as Ie,
  az as Ve,
  aA as Ye,
  aB as qe,
  aC as Be,
  aD as He,
  aE as Le,
} from './CzjAlc6Y.js';
function $e(t) {
  let e = 0,
    s = W(0),
    r;
  return () => {
    se() &&
      (U(s),
      ne(
        () => (
          e === 0 && (r = D(() => t(() => H(s)))),
          (e += 1),
          () => {
            P(() => {
              ((e -= 1), e === 0 && (r?.(), (r = void 0), H(s)));
            });
          }
        )
      ));
  };
}
var je = _e | de | pe;
function Ue(t, e, s) {
  new We(t, e, s);
}
class We {
  parent;
  #n = !1;
  #t;
  #p = g ? p : null;
  #a;
  #u;
  #r;
  #s = null;
  #e = null;
  #i = null;
  #o = null;
  #c = 0;
  #l = 0;
  #h = !1;
  #f = null;
  #v = () => {
    this.#f && ae(this.#f, this.#c);
  };
  #y = $e(
    () => (
      (this.#f = W(this.#c)),
      () => {
        this.#f = null;
      }
    )
  );
  constructor(e, s, r) {
    ((this.#t = e),
      (this.#a = s),
      (this.#u = r),
      (this.parent = E.b),
      (this.#n = !!this.#a.pending),
      (this.#r = re(() => {
        if (((E.b = this), g)) {
          const a = this.#p;
          (ie(), a.nodeType === q && a.data === oe ? this.#m() : this.#b());
        } else {
          try {
            this.#s = d(() => r(this.#t));
          } catch (a) {
            this.error(a);
          }
          this.#l > 0 ? this.#d() : (this.#n = !1);
        }
      }, je)),
      g && (this.#t = p));
  }
  #b() {
    try {
      this.#s = d(() => this.#u(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#n = !1;
  }
  #m() {
    const e = this.#a.pending;
    e &&
      ((this.#e = d(() => e(this.#t))),
      k.enqueue(() => {
        ((this.#s = this.#_(() => (k.ensure(), d(() => this.#u(this.#t))))),
          this.#l > 0
            ? this.#d()
            : (O(this.#e, () => {
                this.#e = null;
              }),
              (this.#n = !1)));
      }));
  }
  is_pending() {
    return this.#n || (!!this.parent && this.parent.is_pending());
  }
  has_pending_snippet() {
    return !!this.#a.pending;
  }
  #_(e) {
    var s = E,
      r = w,
      a = f;
    (R(this.#r), m(this.#r), L(this.#r.ctx));
    try {
      return e();
    } catch (n) {
      return (le(n), null);
    } finally {
      (R(s), m(r), L(a));
    }
  }
  #d() {
    const e = this.#a.pending;
    (this.#s !== null && ((this.#o = document.createDocumentFragment()), ze(this.#s, this.#o)),
      this.#e === null && (this.#e = d(() => e(this.#t))));
  }
  #g(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#g(e);
      return;
    }
    ((this.#l += e),
      this.#l === 0 &&
        ((this.#n = !1),
        this.#e &&
          O(this.#e, () => {
            this.#e = null;
          }),
        this.#o && (this.#t.before(this.#o), (this.#o = null)),
        P(() => {
          k.ensure().flush();
        })));
  }
  update_pending_count(e) {
    (this.#g(e), (this.#c += e), fe.add(this.#v));
  }
  get_effect_pending() {
    return (this.#y(), U(this.#f));
  }
  error(e) {
    var s = this.#a.onerror;
    let r = this.#a.failed;
    if (this.#h || (!s && !r)) throw e;
    (this.#s && (F(this.#s), (this.#s = null)),
      this.#e && (F(this.#e), (this.#e = null)),
      this.#i && (F(this.#i), (this.#i = null)),
      g && (x(this.#p), ue(), x(ce())));
    var a = !1,
      n = !1;
    const i = () => {
      if (a) {
        ge();
        return;
      }
      ((a = !0),
        n && he(),
        k.ensure(),
        (this.#c = 0),
        this.#i !== null &&
          O(this.#i, () => {
            this.#i = null;
          }),
        (this.#n = this.has_pending_snippet()),
        (this.#s = this.#_(() => ((this.#h = !1), d(() => this.#u(this.#t))))),
        this.#l > 0 ? this.#d() : (this.#n = !1));
    };
    var u = w;
    try {
      (m(null), (n = !0), s?.(e, i), (n = !1));
    } catch (c) {
      $(c, this.#r && this.#r.parent);
    } finally {
      m(u);
    }
    r &&
      P(() => {
        this.#i = this.#_(() => {
          this.#h = !0;
          try {
            return d(() => {
              r(
                this.#t,
                () => e,
                () => i
              );
            });
          } catch (c) {
            return ($(c, this.#r.parent), null);
          } finally {
            this.#h = !1;
          }
        });
      });
  }
}
function ze(t, e) {
  for (var s = t.nodes_start, r = t.nodes_end; s !== null; ) {
    var a = s === r ? null : z(s);
    (e.append(s), (s = a));
  }
}
const Xe = ['touchstart', 'touchmove'];
function Ze(t) {
  return Xe.includes(t);
}
const G = new Set(),
  V = new Set();
function rt(t) {
  for (var e = 0; e < t.length; e++) G.add(t[e]);
  for (var s of V) s(t);
}
let j = null;
function C(t) {
  var e = this,
    s = e.ownerDocument,
    r = t.type,
    a = t.composedPath?.() || [],
    n = a[0] || t.target;
  j = t;
  var i = 0,
    u = j === t && t.__root;
  if (u) {
    var c = a.indexOf(u);
    if (c !== -1 && (e === document || e === window)) {
      t.__root = e;
      return;
    }
    var v = a.indexOf(e);
    if (v === -1) return;
    c <= v && (i = c);
  }
  if (((n = a[i] || t.target), n !== e)) {
    ve(t, 'currentTarget', {
      configurable: !0,
      get() {
        return n || s;
      },
    });
    var N = w,
      h = E;
    (m(null), R(null));
    try {
      for (var o, l = []; n !== null; ) {
        var y = n.assignedSlot || n.parentNode || n.host || null;
        try {
          var _ = n['__' + r];
          if (_ != null && (!n.disabled || t.target === n))
            if (X(_)) {
              var [ee, ...te] = _;
              ee.apply(n, [t, ...te]);
            } else _.call(n, t);
        } catch (S) {
          o ? l.push(S) : (o = S);
        }
        if (t.cancelBubble || y === e || y === null) break;
        n = y;
      }
      if (o) {
        for (let S of l)
          queueMicrotask(() => {
            throw S;
          });
        throw o;
      }
    } finally {
      ((t.__root = e), delete t.currentTarget, m(N), R(h));
    }
  }
}
function it(t, e) {
  var s = e == null ? '' : typeof e == 'object' ? e + '' : e;
  s !== (t.__t ??= t.nodeValue) && ((t.__t = s), (t.nodeValue = s + ''));
}
function J(t, e) {
  return K(t, e);
}
function Ge(t, e) {
  (M(), (e.intro = e.intro ?? !1));
  const s = e.target,
    r = g,
    a = p;
  try {
    for (var n = ye(s); n && (n.nodeType !== q || n.data !== be); ) n = z(n);
    if (!n) throw I;
    (A(!0), x(n));
    const i = K(t, { ...e, anchor: n });
    return (A(!1), i);
  } catch (i) {
    if (
      i instanceof Error &&
      i.message
        .split(
          `
`
        )
        .some((u) => u.startsWith('https://svelte.dev/e/'))
    )
      throw i;
    return (
      i !== I && console.warn('Failed to hydrate: ', i),
      e.recover === !1 && me(),
      M(),
      Ee(s),
      A(!1),
      J(t, e)
    );
  } finally {
    (A(r), x(a), ke());
  }
}
const b = new Map();
function K(t, { target: e, anchor: s, props: r = {}, events: a, context: n, intro: i = !0 }) {
  M();
  var u = new Set(),
    c = (h) => {
      for (var o = 0; o < h.length; o++) {
        var l = h[o];
        if (!u.has(l)) {
          u.add(l);
          var y = Ze(l);
          e.addEventListener(l, C, { passive: y });
          var _ = b.get(l);
          _ === void 0
            ? (document.addEventListener(l, C, { passive: y }), b.set(l, 1))
            : b.set(l, _ + 1);
        }
      }
    };
  (c(we(G)), V.add(c));
  var v = void 0,
    N = Te(() => {
      var h = s ?? e.appendChild(Se());
      return (
        Ue(h, { pending: () => {} }, (o) => {
          if (n) {
            Ae({});
            var l = f;
            l.c = n;
          }
          if (
            (a && (r.$$events = a),
            g && Ce(o, null),
            (v = t(o, r) || {}),
            g && ((E.nodes_end = p), p === null || p.nodeType !== q || p.data !== Re))
          )
            throw (xe(), I);
          n && De();
        }),
        () => {
          for (var o of u) {
            e.removeEventListener(o, C);
            var l = b.get(o);
            --l === 0 ? (document.removeEventListener(o, C), b.delete(o)) : b.set(o, l);
          }
          (V.delete(c), h !== s && h.parentNode?.removeChild(h));
        }
      );
    });
  return (Y.set(v, N), v);
}
let Y = new WeakMap();
function Je(t, e) {
  const s = Y.get(t);
  return s ? (Y.delete(t), s(e)) : Promise.resolve();
}
function Ke() {
  return (w === null && Oe(), (w.ac ??= new AbortController()).signal);
}
function Q(t) {
  (f === null && T(),
    Fe && f.l !== null
      ? B(f).m.push(t)
      : Ne(() => {
          const e = D(t);
          if (typeof e == 'function') return e;
        }));
}
function Qe(t) {
  (f === null && T(), Q(() => () => D(t)));
}
function et(t, e, { bubbles: s = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: s, cancelable: r });
}
function tt() {
  const t = f;
  return (
    t === null && T(),
    (e, s, r) => {
      const a = t.s.$$events?.[e];
      if (a) {
        const n = X(a) ? a.slice() : [a],
          i = et(e, s, r);
        for (const u of n) u.call(t.x, i);
        return !i.defaultPrevented;
      }
      return !0;
    }
  );
}
function st(t) {
  (f === null && T(), f.l === null && Z(), B(f).b.push(t));
}
function nt(t) {
  (f === null && T(), f.l === null && Z(), B(f).a.push(t));
}
function B(t) {
  var e = t.l;
  return (e.u ??= { a: [], b: [], m: [] });
}
const ot = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterUpdate: nt,
      beforeUpdate: st,
      createContext: Pe,
      createEventDispatcher: tt,
      createRawSnippet: Me,
      flushSync: Ie,
      getAbortSignal: Ke,
      getAllContexts: Ve,
      getContext: Ye,
      hasContext: qe,
      hydrate: Ge,
      mount: J,
      onDestroy: Qe,
      onMount: Q,
      setContext: Be,
      settled: He,
      tick: Le,
      unmount: Je,
      untrack: D,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
export { Qe as a, ot as b, rt as d, Ge as h, J as m, Q as o, it as s, Je as u };
