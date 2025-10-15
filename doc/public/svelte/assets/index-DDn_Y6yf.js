var Zt = Object.defineProperty;
var Qt = (e, t, n) =>
  t in e ? Zt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var _t = (e, t, n) => Qt(e, typeof t != 'symbol' ? t + '' : t, n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === 'childList')
        for (const a of i.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && l(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function J() {}
function Ht(e) {
  return e();
}
function yt() {
  return Object.create(null);
}
function Z(e) {
  e.forEach(Ht);
}
function Yt(e) {
  return typeof e == 'function';
}
function ot(e, t) {
  return e != e ? t == t : e !== t || (e && typeof e == 'object') || typeof e == 'function';
}
function xt(e) {
  return Object.keys(e).length === 0;
}
function o(e, t) {
  e.appendChild(t);
}
function G(e, t, n) {
  e.insertBefore(t, n || null);
}
function K(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function rt(e, t) {
  for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
}
function u(e) {
  return document.createElement(e);
}
function j(e) {
  return document.createTextNode(e);
}
function _() {
  return j(' ');
}
function Y(e, t, n, l) {
  return (e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l));
}
function h(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function zt(e) {
  return e === '' ? null : +e;
}
function te(e) {
  return Array.from(e.childNodes);
}
function z(e, t) {
  ((t = '' + t), e.data !== t && (e.data = t));
}
function x(e, t) {
  e.value = t ?? '';
}
function Q(e, t, n) {
  e.classList.toggle(t, !!n);
}
let gt;
function ht(e) {
  gt = e;
}
function Kt() {
  if (!gt) throw new Error('Function called outside component initialization');
  return gt;
}
function ee(e) {
  Kt().$$.on_mount.push(e);
}
function Vt(e) {
  Kt().$$.on_destroy.push(e);
}
const ft = [],
  kt = [];
let dt = [];
const Tt = [],
  ne = Promise.resolve();
let vt = !1;
function le() {
  vt || ((vt = !0), ne.then(Gt));
}
function $t(e) {
  dt.push(e);
}
const bt = new Set();
let at = 0;
function Gt() {
  if (at !== 0) return;
  const e = gt;
  do {
    try {
      for (; at < ft.length; ) {
        const t = ft[at];
        (at++, ht(t), oe(t.$$));
      }
    } catch (t) {
      throw ((ft.length = 0), (at = 0), t);
    }
    for (ht(null), ft.length = 0, at = 0; kt.length; ) kt.pop()();
    for (let t = 0; t < dt.length; t += 1) {
      const n = dt[t];
      bt.has(n) || (bt.add(n), n());
    }
    dt.length = 0;
  } while (ft.length);
  for (; Tt.length; ) Tt.pop()();
  ((vt = !1), bt.clear(), ht(e));
}
function oe(e) {
  if (e.fragment !== null) {
    (e.update(), Z(e.before_update));
    const t = e.dirty;
    ((e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach($t));
  }
}
function se(e) {
  const t = [],
    n = [];
  (dt.forEach((l) => (e.indexOf(l) === -1 ? t.push(l) : n.push(l))),
    n.forEach((l) => l()),
    (dt = t));
}
const mt = new Set();
let ct;
function Jt() {
  ct = { r: 0, c: [], p: ct };
}
function Wt() {
  (ct.r || Z(ct.c), (ct = ct.p));
}
function W(e, t) {
  e && e.i && (mt.delete(e), e.i(t));
}
function tt(e, t, n, l) {
  if (e && e.o) {
    if (mt.has(e)) return;
    (mt.add(e),
      ct.c.push(() => {
        (mt.delete(e), l && (n && e.d(1), l()));
      }),
      e.o(t));
  } else l && l();
}
function X(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function st(e) {
  e && e.c();
}
function et(e, t, n) {
  const { fragment: l, after_update: s } = e.$$;
  (l && l.m(t, n),
    $t(() => {
      const i = e.$$.on_mount.map(Ht).filter(Yt);
      (e.$$.on_destroy ? e.$$.on_destroy.push(...i) : Z(i), (e.$$.on_mount = []));
    }),
    s.forEach($t));
}
function nt(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (se(n.after_update),
    Z(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function ie(e, t) {
  (e.$$.dirty[0] === -1 && (ft.push(e), le(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31));
}
function it(e, t, n, l, s, i, a = null, d = [-1]) {
  const $ = gt;
  ht(e);
  const c = (e.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: J,
    not_equal: s,
    bound: yt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || ($ ? $.$$.context : [])),
    callbacks: yt(),
    dirty: d,
    skip_bound: !1,
    root: t.target || $.$$.root,
  });
  a && a(c.root);
  let m = !1;
  if (
    ((c.ctx = n
      ? n(e, t.props || {}, (r, f, ...b) => {
          const g = b.length ? b[0] : f;
          return (
            c.ctx &&
              s(c.ctx[r], (c.ctx[r] = g)) &&
              (!c.skip_bound && c.bound[r] && c.bound[r](g), m && ie(e, r)),
            f
          );
        })
      : []),
    c.update(),
    (m = !0),
    Z(c.before_update),
    (c.fragment = l ? l(c.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const r = te(t.target);
      (c.fragment && c.fragment.l(r), r.forEach(K));
    } else c.fragment && c.fragment.c();
    (t.intro && W(e.$$.fragment), et(e, t.target, t.anchor), Gt());
  }
  ht($);
}
class ut {
  constructor() {
    _t(this, '$$');
    _t(this, '$$set');
  }
  $destroy() {
    (nt(this, 1), (this.$destroy = J));
  }
  $on(t, n) {
    if (!Yt(n)) return J;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      l.push(n),
      () => {
        const s = l.indexOf(n);
        s !== -1 && l.splice(s, 1);
      }
    );
  }
  $set(t) {
    this.$$set && !xt(t) && ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const ue = '4';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(ue);
function pt() {
  let e = null;
  return (
    Vt(() => {
      e && clearTimeout(e);
    }),
    (t, n = 300) => {
      (e && clearTimeout(e),
        (e = setTimeout(() => {
          (t(), (e = null));
        }, n)));
    }
  );
}
function wt(e, t, n) {
  const l = e.slice();
  return ((l[7] = t[n]), l);
}
function Lt(e) {
  let t,
    n = e[7] + '',
    l;
  return {
    c() {
      ((t = u('div')), (l = j(n)), h(t, 'class', 'log-entry'));
    },
    m(s, i) {
      (G(s, t, i), o(t, l));
    },
    p(s, i) {
      i & 4 && n !== (n = s[7] + '') && z(l, n);
    },
    d(s) {
      s && K(t);
    },
  };
}
function ce(e) {
  let t,
    n,
    l,
    s,
    i,
    a,
    d,
    $,
    c,
    m,
    r,
    f,
    b,
    g,
    L,
    F,
    O,
    q,
    H,
    P,
    N,
    E,
    T = X(e[2]),
    p = [];
  for (let k = 0; k < T.length; k += 1) p[k] = Lt(wt(e, T, k));
  return {
    c() {
      ((t = u('div')),
        (n = u('h3')),
        (n.textContent = '⚡ Basic Debounce Test'),
        (l = _()),
        (s = u('p')),
        (s.textContent = 'Test basic debouncing with a 500ms delay.'),
        (i = _()),
        (a = u('div')),
        (d = u('label')),
        ($ = j(`Input:
      `)),
        (c = u('input')),
        (m = _()),
        (r = u('div')),
        (f = u('p')),
        (b = u('strong')),
        (b.textContent = 'Output:'),
        (g = _()),
        (L = j(e[1])),
        (F = _()),
        (O = u('div')),
        (q = u('h4')),
        (q.textContent = 'Logs:'),
        (H = _()),
        (P = u('div')));
      for (let k = 0; k < p.length; k += 1) p[k].c();
      (h(c, 'type', 'text'),
        h(c, 'placeholder', 'Type something...'),
        h(a, 'class', 'test-controls'),
        h(r, 'class', 'test-output'),
        h(P, 'class', 'logs-container'),
        h(O, 'class', 'test-logs'),
        h(t, 'class', 'test-case'));
    },
    m(k, I) {
      (G(k, t, I),
        o(t, n),
        o(t, l),
        o(t, s),
        o(t, i),
        o(t, a),
        o(a, d),
        o(d, $),
        o(d, c),
        x(c, e[0]),
        o(t, m),
        o(t, r),
        o(r, f),
        o(f, b),
        o(f, g),
        o(f, L),
        o(t, F),
        o(t, O),
        o(O, q),
        o(O, H),
        o(O, P));
      for (let C = 0; C < p.length; C += 1) p[C] && p[C].m(P, null);
      N || ((E = [Y(c, 'input', e[4]), Y(c, 'input', e[3])]), (N = !0));
    },
    p(k, [I]) {
      if ((I & 1 && c.value !== k[0] && x(c, k[0]), I & 2 && z(L, k[1]), I & 4)) {
        T = X(k[2]);
        let C;
        for (C = 0; C < T.length; C += 1) {
          const R = wt(k, T, C);
          p[C] ? p[C].p(R, I) : ((p[C] = Lt(R)), p[C].c(), p[C].m(P, null));
        }
        for (; C < p.length; C += 1) p[C].d(1);
        p.length = T.length;
      }
    },
    i: J,
    o: J,
    d(k) {
      (k && K(t), rt(p, k), (N = !1), Z(E));
    },
  };
}
function re(e, t, n) {
  let l = '',
    s = '',
    i = [];
  function a(m) {
    n(2, (i = [...i, `${new Date().toLocaleTimeString()}: ${m}`]));
  }
  const d = pt();
  function $(m) {
    const r = m.target;
    (n(0, (l = r.value)),
      a(`Input changed: "${l}"`),
      d(() => {
        (n(1, (s = l)), a(`Debounced update: "${l}"`));
      }, 500));
  }
  function c() {
    ((l = this.value), n(0, l));
  }
  return [l, s, i, $, c];
}
class Xt extends ut {
  constructor(t) {
    (super(), it(this, t, re, ce, ot, {}));
  }
}
function It(e, t, n) {
  const l = e.slice();
  return ((l[8] = t[n]), l);
}
function Dt(e) {
  let t,
    n = e[8] + '',
    l;
  return {
    c() {
      ((t = u('div')), (l = j(n)), h(t, 'class', 'log-entry'));
    },
    m(s, i) {
      (G(s, t, i), o(t, l));
    },
    p(s, i) {
      i & 4 && n !== (n = s[8] + '') && z(l, n);
    },
    d(s) {
      s && K(t);
    },
  };
}
function ae(e) {
  let t,
    n,
    l,
    s,
    i,
    a,
    d,
    $,
    c,
    m,
    r,
    f,
    b,
    g,
    L,
    F,
    O,
    q,
    H,
    P,
    N,
    E,
    T,
    p,
    k,
    I,
    C,
    R = X(e[2]),
    D = [];
  for (let w = 0; w < R.length; w += 1) D[w] = Dt(It(e, R, w));
  return {
    c() {
      ((t = u('div')),
        (n = u('h3')),
        (n.textContent = '⚡ Rapid Calls Test'),
        (l = _()),
        (s = u('p')),
        (s.textContent = 'Test debouncing with rapid successive calls (10 calls in 500ms).'),
        (i = _()),
        (a = u('div')),
        (d = u('button')),
        (d.textContent = 'Trigger Rapid Calls'),
        ($ = _()),
        (c = u('button')),
        (c.textContent = 'Reset'),
        (m = _()),
        (r = u('div')),
        (f = u('p')),
        (b = u('strong')),
        (b.textContent = 'Immediate Count:'),
        (g = _()),
        (L = j(e[0])),
        (F = _()),
        (O = u('p')),
        (q = u('strong')),
        (q.textContent = 'Debounced Count:'),
        (H = _()),
        (P = j(e[1])),
        (N = _()),
        (E = u('div')),
        (T = u('h4')),
        (T.textContent = 'Logs:'),
        (p = _()),
        (k = u('div')));
      for (let w = 0; w < D.length; w += 1) D[w].c();
      (h(a, 'class', 'test-controls'),
        h(r, 'class', 'test-output'),
        h(k, 'class', 'logs-container'),
        h(E, 'class', 'test-logs'),
        h(t, 'class', 'test-case'));
    },
    m(w, v) {
      (G(w, t, v),
        o(t, n),
        o(t, l),
        o(t, s),
        o(t, i),
        o(t, a),
        o(a, d),
        o(a, $),
        o(a, c),
        o(t, m),
        o(t, r),
        o(r, f),
        o(f, b),
        o(f, g),
        o(f, L),
        o(r, F),
        o(r, O),
        o(O, q),
        o(O, H),
        o(O, P),
        o(t, N),
        o(t, E),
        o(E, T),
        o(E, p),
        o(E, k));
      for (let S = 0; S < D.length; S += 1) D[S] && D[S].m(k, null);
      I || ((C = [Y(d, 'click', e[3]), Y(c, 'click', e[4])]), (I = !0));
    },
    p(w, [v]) {
      if ((v & 1 && z(L, w[0]), v & 2 && z(P, w[1]), v & 4)) {
        R = X(w[2]);
        let S;
        for (S = 0; S < R.length; S += 1) {
          const y = It(w, R, S);
          D[S] ? D[S].p(y, v) : ((D[S] = Dt(y)), D[S].c(), D[S].m(k, null));
        }
        for (; S < D.length; S += 1) D[S].d(1);
        D.length = R.length;
      }
    },
    i: J,
    o: J,
    d(w) {
      (w && K(t), rt(D, w), (I = !1), Z(C));
    },
  };
}
function fe(e, t, n) {
  let l = 0,
    s = 0,
    i = [],
    a = 0;
  function d(r) {
    n(2, (i = [...i, `${new Date().toLocaleTimeString()}: ${r}`]));
  }
  const $ = pt();
  function c() {
    for (let r = 0; r < 10; r++)
      setTimeout(() => {
        (n(0, (l += 1)),
          d(`Immediate count: ${l}`),
          $(() => {
            ((a = a + 1), n(1, (s = a)), d(`Debounced count: ${l}`));
          }, 300));
      }, r * 50);
  }
  function m() {
    (n(0, (l = 0)), n(1, (s = 0)), (a = 0), n(2, (i = [])));
  }
  return [l, s, i, c, m];
}
class de extends ut {
  constructor(t) {
    (super(), it(this, t, fe, ae, ot, {}));
  }
}
function At(e, t, n) {
  const l = e.slice();
  return ((l[8] = t[n]), l);
}
function St(e) {
  let t,
    n = e[8] + '',
    l;
  return {
    c() {
      ((t = u('div')), (l = j(n)), h(t, 'class', 'log-entry'));
    },
    m(s, i) {
      (G(s, t, i), o(t, l));
    },
    p(s, i) {
      i & 8 && n !== (n = s[8] + '') && z(l, n);
    },
    d(s) {
      s && K(t);
    },
  };
}
function pe(e) {
  let t,
    n,
    l,
    s,
    i,
    a,
    d,
    $,
    c,
    m,
    r,
    f,
    b,
    g,
    L,
    F,
    O,
    q,
    H,
    P = e[2] ? 'Yes' : 'No',
    N,
    E,
    T,
    p,
    k,
    I,
    C,
    R,
    D = X(e[3]),
    w = [];
  for (let v = 0; v < D.length; v += 1) w[v] = St(At(e, D, v));
  return {
    c() {
      ((t = u('div')),
        (n = u('h3')),
        (n.textContent = '⚡ Async Function Test'),
        (l = _()),
        (s = u('p')),
        (s.textContent = 'Test debouncing with async functions (simulates API call).'),
        (i = _()),
        (a = u('div')),
        (d = u('label')),
        ($ = j(`Input:
      `)),
        (c = u('input')),
        (m = _()),
        (r = u('div')),
        (f = u('p')),
        (b = u('strong')),
        (b.textContent = 'Result:'),
        (g = _()),
        (L = j(e[1])),
        (F = _()),
        (O = u('p')),
        (q = u('strong')),
        (q.textContent = 'Loading:'),
        (H = _()),
        (N = j(P)),
        (E = _()),
        (T = u('div')),
        (p = u('h4')),
        (p.textContent = 'Logs:'),
        (k = _()),
        (I = u('div')));
      for (let v = 0; v < w.length; v += 1) w[v].c();
      (h(c, 'type', 'text'),
        h(c, 'placeholder', 'Type to trigger async operation...'),
        h(a, 'class', 'test-controls'),
        h(r, 'class', 'test-output'),
        h(I, 'class', 'logs-container'),
        h(T, 'class', 'test-logs'),
        h(t, 'class', 'test-case'));
    },
    m(v, S) {
      (G(v, t, S),
        o(t, n),
        o(t, l),
        o(t, s),
        o(t, i),
        o(t, a),
        o(a, d),
        o(d, $),
        o(d, c),
        x(c, e[0]),
        o(t, m),
        o(t, r),
        o(r, f),
        o(f, b),
        o(f, g),
        o(f, L),
        o(r, F),
        o(r, O),
        o(O, q),
        o(O, H),
        o(O, N),
        o(t, E),
        o(t, T),
        o(T, p),
        o(T, k),
        o(T, I));
      for (let y = 0; y < w.length; y += 1) w[y] && w[y].m(I, null);
      C || ((R = [Y(c, 'input', e[5]), Y(c, 'input', e[4])]), (C = !0));
    },
    p(v, [S]) {
      if (
        (S & 1 && c.value !== v[0] && x(c, v[0]),
        S & 2 && z(L, v[1]),
        S & 4 && P !== (P = v[2] ? 'Yes' : 'No') && z(N, P),
        S & 8)
      ) {
        D = X(v[3]);
        let y;
        for (y = 0; y < D.length; y += 1) {
          const U = At(v, D, y);
          w[y] ? w[y].p(U, S) : ((w[y] = St(U)), w[y].c(), w[y].m(I, null));
        }
        for (; y < w.length; y += 1) w[y].d(1);
        w.length = D.length;
      }
    },
    i: J,
    o: J,
    d(v) {
      (v && K(t), rt(w, v), (C = !1), Z(R));
    },
  };
}
function he(e, t, n) {
  let l = '',
    s = '',
    i = !1,
    a = [];
  function d(r) {
    n(3, (a = [...a, `${new Date().toLocaleTimeString()}: ${r}`]));
  }
  const $ = pt();
  function c(r) {
    const f = r.target;
    (n(0, (l = f.value)),
      d(`Input changed: "${l}"`),
      $(async () => {
        (n(2, (i = !0)),
          d(`Starting async operation for: "${l}"`),
          await new Promise((b) => setTimeout(b, 1e3)),
          n(1, (s = l.toUpperCase())),
          n(2, (i = !1)),
          d(`Async operation completed: "${s}"`));
      }, 500));
  }
  function m() {
    ((l = this.value), n(0, l));
  }
  return [l, s, i, a, c, m];
}
class ge extends ut {
  constructor(t) {
    (super(), it(this, t, he, pe, ot, {}));
  }
}
function Pt(e, t, n) {
  const l = e.slice();
  return ((l[10] = t[n]), l);
}
function Mt(e) {
  let t,
    n = e[10] + '',
    l;
  return {
    c() {
      ((t = u('div')), (l = j(n)), h(t, 'class', 'log-entry'));
    },
    m(s, i) {
      (G(s, t, i), o(t, l));
    },
    p(s, i) {
      i & 8 && n !== (n = s[10] + '') && z(l, n);
    },
    d(s) {
      s && K(t);
    },
  };
}
function me(e) {
  let t,
    n,
    l,
    s,
    i,
    a,
    d,
    $,
    c,
    m,
    r,
    f,
    b,
    g,
    L,
    F,
    O,
    q,
    H,
    P,
    N,
    E,
    T,
    p,
    k,
    I,
    C,
    R,
    D,
    w,
    v,
    S,
    y,
    U,
    M = X(e[3]),
    A = [];
  for (let B = 0; B < M.length; B += 1) A[B] = Mt(Pt(e, M, B));
  return {
    c() {
      ((t = u('div')),
        (n = u('h3')),
        (n.textContent = '⚡ Custom Delay Test'),
        (l = _()),
        (s = u('p')),
        (s.textContent = 'Test debouncing with adjustable delay.'),
        (i = _()),
        (a = u('div')),
        (d = u('label')),
        ($ = j(`Delay (ms):
      `)),
        (c = u('input')),
        (m = _()),
        (r = u('br')),
        (f = _()),
        (b = u('label')),
        (g = j(`Input:
      `)),
        (L = u('input')),
        (F = _()),
        (O = u('div')),
        (q = u('p')),
        (H = u('strong')),
        (H.textContent = 'Output:'),
        (P = _()),
        (N = j(e[1])),
        (E = _()),
        (T = u('p')),
        (p = u('strong')),
        (p.textContent = 'Current Delay:'),
        (k = _()),
        (I = j(e[2])),
        (C = j('ms')),
        (R = _()),
        (D = u('div')),
        (w = u('h4')),
        (w.textContent = 'Logs:'),
        (v = _()),
        (S = u('div')));
      for (let B = 0; B < A.length; B += 1) A[B].c();
      (h(c, 'type', 'number'),
        h(c, 'min', '100'),
        h(c, 'max', '5000'),
        h(c, 'step', '100'),
        h(L, 'type', 'text'),
        h(L, 'placeholder', 'Type something...'),
        h(a, 'class', 'test-controls'),
        h(O, 'class', 'test-output'),
        h(S, 'class', 'logs-container'),
        h(D, 'class', 'test-logs'),
        h(t, 'class', 'test-case'));
    },
    m(B, lt) {
      (G(B, t, lt),
        o(t, n),
        o(t, l),
        o(t, s),
        o(t, i),
        o(t, a),
        o(a, d),
        o(d, $),
        o(d, c),
        x(c, e[2]),
        o(a, m),
        o(a, r),
        o(a, f),
        o(a, b),
        o(b, g),
        o(b, L),
        x(L, e[0]),
        o(t, F),
        o(t, O),
        o(O, q),
        o(q, H),
        o(q, P),
        o(q, N),
        o(O, E),
        o(O, T),
        o(T, p),
        o(T, k),
        o(T, I),
        o(T, C),
        o(t, R),
        o(t, D),
        o(D, w),
        o(D, v),
        o(D, S));
      for (let V = 0; V < A.length; V += 1) A[V] && A[V].m(S, null);
      y ||
        ((U = [Y(c, 'input', e[6]), Y(c, 'input', e[5]), Y(L, 'input', e[7]), Y(L, 'input', e[4])]),
        (y = !0));
    },
    p(B, [lt]) {
      if (
        (lt & 4 && zt(c.value) !== B[2] && x(c, B[2]),
        lt & 1 && L.value !== B[0] && x(L, B[0]),
        lt & 2 && z(N, B[1]),
        lt & 4 && z(I, B[2]),
        lt & 8)
      ) {
        M = X(B[3]);
        let V;
        for (V = 0; V < M.length; V += 1) {
          const Ct = Pt(B, M, V);
          A[V] ? A[V].p(Ct, lt) : ((A[V] = Mt(Ct)), A[V].c(), A[V].m(S, null));
        }
        for (; V < A.length; V += 1) A[V].d(1);
        A.length = M.length;
      }
    },
    i: J,
    o: J,
    d(B) {
      (B && K(t), rt(A, B), (y = !1), Z(U));
    },
  };
}
function _e(e, t, n) {
  let l = '',
    s = '',
    i = 1e3,
    a = [];
  function d(b) {
    n(3, (a = [...a, `${new Date().toLocaleTimeString()}: ${b}`]));
  }
  const $ = pt();
  function c(b) {
    const g = b.target;
    (n(0, (l = g.value)),
      d(`Input changed: "${l}"`),
      $(() => {
        (n(1, (s = l)), d(`Debounced update: "${l}"`));
      }, i));
  }
  function m(b) {
    const g = b.target;
    n(2, (i = Number(g.value)));
  }
  function r() {
    ((i = zt(this.value)), n(2, i));
  }
  function f() {
    ((l = this.value), n(0, l));
  }
  return [l, s, i, a, c, m, r, f];
}
class be extends ut {
  constructor(t) {
    (super(), it(this, t, _e, me, ot, {}));
  }
}
function Ot(e, t, n) {
  const l = e.slice();
  return ((l[9] = t[n]), l);
}
function Et(e, t, n) {
  const l = e.slice();
  return ((l[12] = t[n]), l);
}
function Nt(e) {
  let t,
    n,
    l,
    s,
    i = e[1].query + '',
    a,
    d,
    $,
    c,
    m = X(e[1].results),
    r = [];
  for (let f = 0; f < m.length; f += 1) r[f] = Rt(Et(e, m, f));
  return {
    c() {
      ((t = u('div')),
        (n = u('p')),
        (l = u('strong')),
        (s = j('Search Results for "')),
        (a = j(i)),
        (d = j('":')),
        ($ = _()),
        (c = u('ul')));
      for (let f = 0; f < r.length; f += 1) r[f].c();
    },
    m(f, b) {
      (G(f, t, b), o(t, n), o(n, l), o(l, s), o(l, a), o(l, d), o(t, $), o(t, c));
      for (let g = 0; g < r.length; g += 1) r[g] && r[g].m(c, null);
    },
    p(f, b) {
      if ((b & 2 && i !== (i = f[1].query + '') && z(a, i), b & 2)) {
        m = X(f[1].results);
        let g;
        for (g = 0; g < m.length; g += 1) {
          const L = Et(f, m, g);
          r[g] ? r[g].p(L, b) : ((r[g] = Rt(L)), r[g].c(), r[g].m(c, null));
        }
        for (; g < r.length; g += 1) r[g].d(1);
        r.length = m.length;
      }
    },
    d(f) {
      (f && K(t), rt(r, f));
    },
  };
}
function Rt(e) {
  let t,
    n = e[12] + '',
    l;
  return {
    c() {
      ((t = u('li')), (l = j(n)));
    },
    m(s, i) {
      (G(s, t, i), o(t, l));
    },
    p(s, i) {
      i & 2 && n !== (n = s[12] + '') && z(l, n);
    },
    d(s) {
      s && K(t);
    },
  };
}
function Ut(e) {
  let t;
  return {
    c() {
      ((t = u('p')), (t.innerHTML = '<strong>Loading...</strong>'));
    },
    m(n, l) {
      G(n, t, l);
    },
    d(n) {
      n && K(t);
    },
  };
}
function qt(e) {
  let t,
    n = e[9] + '',
    l;
  return {
    c() {
      ((t = u('div')), (l = j(n)), h(t, 'class', 'log-entry'));
    },
    m(s, i) {
      (G(s, t, i), o(t, l));
    },
    p(s, i) {
      i & 8 && n !== (n = s[9] + '') && z(l, n);
    },
    d(s) {
      s && K(t);
    },
  };
}
function ve(e) {
  let t,
    n,
    l,
    s,
    i,
    a,
    d,
    $,
    c,
    m,
    r,
    f,
    b,
    g,
    L,
    F,
    O,
    q,
    H,
    P = e[1] && Nt(e),
    N = e[2] && Ut(),
    E = X(e[3]),
    T = [];
  for (let p = 0; p < E.length; p += 1) T[p] = qt(Ot(e, E, p));
  return {
    c() {
      ((t = u('div')),
        (n = u('h3')),
        (n.textContent = '⚡ API Simulation Test'),
        (l = _()),
        (s = u('p')),
        (s.textContent = 'Test debouncing with simulated API calls (search functionality).'),
        (i = _()),
        (a = u('div')),
        (d = u('label')),
        ($ = j(`Search:
      `)),
        (c = u('input')),
        (m = _()),
        (r = u('div')),
        P && P.c(),
        (f = _()),
        N && N.c(),
        (b = _()),
        (g = u('div')),
        (L = u('h4')),
        (L.textContent = 'Logs:'),
        (F = _()),
        (O = u('div')));
      for (let p = 0; p < T.length; p += 1) T[p].c();
      (h(c, 'type', 'text'),
        h(c, 'placeholder', 'Type to search...'),
        h(a, 'class', 'test-controls'),
        h(r, 'class', 'test-output'),
        h(O, 'class', 'logs-container'),
        h(g, 'class', 'test-logs'),
        h(t, 'class', 'test-case'));
    },
    m(p, k) {
      (G(p, t, k),
        o(t, n),
        o(t, l),
        o(t, s),
        o(t, i),
        o(t, a),
        o(a, d),
        o(d, $),
        o(d, c),
        x(c, e[0]),
        o(t, m),
        o(t, r),
        P && P.m(r, null),
        o(r, f),
        N && N.m(r, null),
        o(t, b),
        o(t, g),
        o(g, L),
        o(g, F),
        o(g, O));
      for (let I = 0; I < T.length; I += 1) T[I] && T[I].m(O, null);
      q || ((H = [Y(c, 'input', e[5]), Y(c, 'input', e[4])]), (q = !0));
    },
    p(p, [k]) {
      if (
        (k & 1 && c.value !== p[0] && x(c, p[0]),
        p[1] ? (P ? P.p(p, k) : ((P = Nt(p)), P.c(), P.m(r, f))) : P && (P.d(1), (P = null)),
        p[2] ? N || ((N = Ut()), N.c(), N.m(r, null)) : N && (N.d(1), (N = null)),
        k & 8)
      ) {
        E = X(p[3]);
        let I;
        for (I = 0; I < E.length; I += 1) {
          const C = Ot(p, E, I);
          T[I] ? T[I].p(C, k) : ((T[I] = qt(C)), T[I].c(), T[I].m(O, null));
        }
        for (; I < T.length; I += 1) T[I].d(1);
        T.length = E.length;
      }
    },
    i: J,
    o: J,
    d(p) {
      (p && K(t), P && P.d(), N && N.d(), rt(T, p), (q = !1), Z(H));
    },
  };
}
function $e(e, t, n) {
  let l = '',
    s = null,
    i = !1,
    a = [];
  function d(f) {
    n(3, (a = [...a, `${new Date().toLocaleTimeString()}: ${f}`]));
  }
  async function $(f) {
    (d(`API call started for: "${f}"`), await new Promise((g) => setTimeout(g, 800)));
    const b = [`${f} result 1`, `${f} result 2`, `${f} result 3`];
    return { query: f, results: b };
  }
  const c = pt();
  function m(f) {
    const b = f.target;
    (n(0, (l = b.value)),
      d(`Search query changed: "${l}"`),
      c(async () => {
        if (!l.trim()) {
          n(1, (s = null));
          return;
        }
        n(2, (i = !0));
        try {
          (n(1, (s = await $(l))), d(`API call completed for: "${l}"`));
        } catch (g) {
          d(`API call failed: ${g}`);
        } finally {
          n(2, (i = !1));
        }
      }, 300));
  }
  function r() {
    ((l = this.value), n(0, l));
  }
  return [l, s, i, a, m, r];
}
class Ce extends ut {
  constructor(t) {
    (super(), it(this, t, $e, ve, ot, {}));
  }
}
function ye(e) {
  let t, n, l, s, i, a, d, $, c, m, r, f, b;
  return {
    c() {
      ((t = u('div')),
        (n = u('div')),
        (l = u('label')),
        (s = j(`Input (debounced):
      `)),
        (i = u('input')),
        (a = _()),
        (d = u('div')),
        ($ = u('p')),
        (c = u('strong')),
        (c.textContent = 'Debounced Output:'),
        (m = _()),
        (r = j(e[1])),
        h(i, 'type', 'text'),
        h(i, 'placeholder', 'Type to trigger debounced update...'),
        h(n, 'class', 'test-controls'),
        h(d, 'class', 'test-output'),
        h(t, 'class', 'debounce-component'));
    },
    m(g, L) {
      (G(g, t, L),
        o(t, n),
        o(n, l),
        o(l, s),
        o(l, i),
        x(i, e[0]),
        o(t, a),
        o(t, d),
        o(d, $),
        o($, c),
        o($, m),
        o($, r),
        f || ((b = [Y(i, 'input', e[4]), Y(i, 'input', e[2])]), (f = !0)));
    },
    p(g, [L]) {
      (L & 1 && i.value !== g[0] && x(i, g[0]), L & 2 && z(r, g[1]));
    },
    i: J,
    o: J,
    d(g) {
      (g && K(t), (f = !1), Z(b));
    },
  };
}
function ke(e, t, n) {
  let { addLog: l } = t,
    s = '',
    i = '';
  const a = pt();
  (ee(() => {
    l('DebounceComponent mounted');
  }),
    Vt(() => {
      l('DebounceComponent unmounting - cleanup should prevent pending debounced callbacks');
    }));
  function d(c) {
    const m = c.target;
    (n(0, (s = m.value)),
      l(`Input changed: "${s}"`),
      a(() => {
        (console.log('Debounced callback executed'),
          n(1, (i = s)),
          l(`Debounced callback executed: "${s}"`));
      }, 5e3));
  }
  function $() {
    ((s = this.value), n(0, s));
  }
  return (
    (e.$$set = (c) => {
      'addLog' in c && n(3, (l = c.addLog));
    }),
    [s, i, d, l, $]
  );
}
class Te extends ut {
  constructor(t) {
    (super(), it(this, t, ke, ye, ot, { addLog: 3 }));
  }
}
function Bt(e, t, n) {
  const l = e.slice();
  return ((l[6] = t[n]), l);
}
function jt(e) {
  let t, n;
  return (
    (t = new Te({ props: { addLog: e[2] } })),
    {
      c() {
        st(t.$$.fragment);
      },
      m(l, s) {
        (et(t, l, s), (n = !0));
      },
      p: J,
      i(l) {
        n || (W(t.$$.fragment, l), (n = !0));
      },
      o(l) {
        (tt(t.$$.fragment, l), (n = !1));
      },
      d(l) {
        nt(t, l);
      },
    }
  );
}
function Ft(e) {
  let t,
    n = e[6] + '',
    l;
  return {
    c() {
      ((t = u('div')), (l = j(n)), h(t, 'class', 'log-entry'));
    },
    m(s, i) {
      (G(s, t, i), o(t, l));
    },
    p(s, i) {
      i & 2 && n !== (n = s[6] + '') && z(l, n);
    },
    d(s) {
      s && K(t);
    },
  };
}
function we(e) {
  let t,
    n,
    l,
    s,
    i,
    a,
    d,
    $,
    c,
    m,
    r,
    f = e[0] ? 'Component Mounted' : 'Mount Component',
    b,
    g,
    L,
    F = e[0] ? 'Unmount Component' : 'Component Unmounted',
    O,
    q,
    H,
    P,
    N,
    E,
    T,
    p,
    k,
    I,
    C,
    R,
    D,
    w,
    v = e[0] && jt(e),
    S = X(e[1]),
    y = [];
  for (let U = 0; U < S.length; U += 1) y[U] = Ft(Bt(e, S, U));
  return {
    c() {
      ((t = u('div')),
        (n = u('h3')),
        (n.textContent = '⚡ Cleanup Test'),
        (l = _()),
        (s = u('p')),
        (s.textContent =
          'Test that debounced functions are properly cleaned up when components unmount.'),
        (i = _()),
        (a = u('p')),
        (a.innerHTML =
          '<em>Type in the input, then unmount the component before the 5s delay expires.</em>'),
        (d = _()),
        ($ = u('p')),
        ($.innerHTML =
          '<em>The debounced function is called with console.log after 5 seconds.</em>'),
        (c = _()),
        (m = u('div')),
        (r = u('button')),
        (b = j(f)),
        (g = _()),
        (L = u('button')),
        (O = j(F)),
        (H = _()),
        (P = u('button')),
        (P.textContent = 'Clear Logs'),
        (N = _()),
        (E = u('div')),
        v && v.c(),
        (T = _()),
        (p = u('div')),
        (k = u('h4')),
        (k.textContent = 'Logs:'),
        (I = _()),
        (C = u('div')));
      for (let U = 0; U < y.length; U += 1) y[U].c();
      ((r.disabled = e[0]),
        (L.disabled = q = !e[0]),
        h(m, 'class', 'test-controls'),
        h(E, 'class', 'component-container'),
        h(C, 'class', 'logs-container'),
        h(p, 'class', 'test-logs'),
        h(t, 'class', 'test-case'));
    },
    m(U, M) {
      (G(U, t, M),
        o(t, n),
        o(t, l),
        o(t, s),
        o(t, i),
        o(t, a),
        o(t, d),
        o(t, $),
        o(t, c),
        o(t, m),
        o(m, r),
        o(r, b),
        o(m, g),
        o(m, L),
        o(L, O),
        o(m, H),
        o(m, P),
        o(t, N),
        o(t, E),
        v && v.m(E, null),
        o(t, T),
        o(t, p),
        o(p, k),
        o(p, I),
        o(p, C));
      for (let A = 0; A < y.length; A += 1) y[A] && y[A].m(C, null);
      ((R = !0),
        D || ((w = [Y(r, 'click', e[3]), Y(L, 'click', e[4]), Y(P, 'click', e[5])]), (D = !0)));
    },
    p(U, [M]) {
      if (
        ((!R || M & 1) && f !== (f = U[0] ? 'Component Mounted' : 'Mount Component') && z(b, f),
        (!R || M & 1) && (r.disabled = U[0]),
        (!R || M & 1) && F !== (F = U[0] ? 'Unmount Component' : 'Component Unmounted') && z(O, F),
        (!R || (M & 1 && q !== (q = !U[0]))) && (L.disabled = q),
        U[0]
          ? v
            ? (v.p(U, M), M & 1 && W(v, 1))
            : ((v = jt(U)), v.c(), W(v, 1), v.m(E, null))
          : v &&
            (Jt(),
            tt(v, 1, 1, () => {
              v = null;
            }),
            Wt()),
        M & 2)
      ) {
        S = X(U[1]);
        let A;
        for (A = 0; A < S.length; A += 1) {
          const B = Bt(U, S, A);
          y[A] ? y[A].p(B, M) : ((y[A] = Ft(B)), y[A].c(), y[A].m(C, null));
        }
        for (; A < y.length; A += 1) y[A].d(1);
        y.length = S.length;
      }
    },
    i(U) {
      R || (W(v), (R = !0));
    },
    o(U) {
      (tt(v), (R = !1));
    },
    d(U) {
      (U && K(t), v && v.d(), rt(y, U), (D = !1), Z(w));
    },
  };
}
function Le(e, t, n) {
  let l = !0,
    s = [];
  function i(c) {
    n(1, (s = [...s, `${new Date().toLocaleTimeString()}: ${c}`]));
  }
  function a() {
    (n(0, (l = !0)), i('Mounting DebounceComponent'));
  }
  function d() {
    (n(0, (l = !1)), i('Unmounting DebounceComponent'));
  }
  function $() {
    n(1, (s = []));
  }
  return [l, s, i, a, d, $];
}
class Ie extends ut {
  constructor(t) {
    (super(), it(this, t, Le, we, ot, {}));
  }
}
function De(e) {
  let t, n;
  return (
    (t = new Xt({})),
    {
      c() {
        st(t.$$.fragment);
      },
      m(l, s) {
        (et(t, l, s), (n = !0));
      },
      i(l) {
        n || (W(t.$$.fragment, l), (n = !0));
      },
      o(l) {
        (tt(t.$$.fragment, l), (n = !1));
      },
      d(l) {
        nt(t, l);
      },
    }
  );
}
function Ae(e) {
  let t, n;
  return (
    (t = new Ie({})),
    {
      c() {
        st(t.$$.fragment);
      },
      m(l, s) {
        (et(t, l, s), (n = !0));
      },
      i(l) {
        n || (W(t.$$.fragment, l), (n = !0));
      },
      o(l) {
        (tt(t.$$.fragment, l), (n = !1));
      },
      d(l) {
        nt(t, l);
      },
    }
  );
}
function Se(e) {
  let t, n;
  return (
    (t = new Ce({})),
    {
      c() {
        st(t.$$.fragment);
      },
      m(l, s) {
        (et(t, l, s), (n = !0));
      },
      i(l) {
        n || (W(t.$$.fragment, l), (n = !0));
      },
      o(l) {
        (tt(t.$$.fragment, l), (n = !1));
      },
      d(l) {
        nt(t, l);
      },
    }
  );
}
function Pe(e) {
  let t, n;
  return (
    (t = new be({})),
    {
      c() {
        st(t.$$.fragment);
      },
      m(l, s) {
        (et(t, l, s), (n = !0));
      },
      i(l) {
        n || (W(t.$$.fragment, l), (n = !0));
      },
      o(l) {
        (tt(t.$$.fragment, l), (n = !1));
      },
      d(l) {
        nt(t, l);
      },
    }
  );
}
function Me(e) {
  let t, n;
  return (
    (t = new ge({})),
    {
      c() {
        st(t.$$.fragment);
      },
      m(l, s) {
        (et(t, l, s), (n = !0));
      },
      i(l) {
        n || (W(t.$$.fragment, l), (n = !0));
      },
      o(l) {
        (tt(t.$$.fragment, l), (n = !1));
      },
      d(l) {
        nt(t, l);
      },
    }
  );
}
function Oe(e) {
  let t, n;
  return (
    (t = new de({})),
    {
      c() {
        st(t.$$.fragment);
      },
      m(l, s) {
        (et(t, l, s), (n = !0));
      },
      i(l) {
        n || (W(t.$$.fragment, l), (n = !0));
      },
      o(l) {
        (tt(t.$$.fragment, l), (n = !1));
      },
      d(l) {
        nt(t, l);
      },
    }
  );
}
function Ee(e) {
  let t, n;
  return (
    (t = new Xt({})),
    {
      c() {
        st(t.$$.fragment);
      },
      m(l, s) {
        (et(t, l, s), (n = !0));
      },
      i(l) {
        n || (W(t.$$.fragment, l), (n = !0));
      },
      o(l) {
        (tt(t.$$.fragment, l), (n = !1));
      },
      d(l) {
        nt(t, l);
      },
    }
  );
}
function Ne(e) {
  let t, n, l, s, i, a, d, $, c, m, r, f, b, g, L, F, O, q, H, P, N, E, T, p, k, I, C, R, D, w, v;
  const S = [Ee, Oe, Me, Pe, Se, Ae, De],
    y = [];
  function U(M, A) {
    return M[0] === 'basic'
      ? 0
      : M[0] === 'rapid'
        ? 1
        : M[0] === 'async'
          ? 2
          : M[0] === 'delay'
            ? 3
            : M[0] === 'api'
              ? 4
              : M[0] === 'cleanup'
                ? 5
                : 6;
  }
  return (
    (C = U(e)),
    (R = y[C] = S[C](e)),
    {
      c() {
        ((t = u('main')),
          (n = u('nav')),
          (l = u('h2')),
          (l.textContent = 'Test Cases'),
          (s = _()),
          (i = u('ul')),
          (a = u('li')),
          (d = u('button')),
          (d.textContent = 'Basic Debounce'),
          ($ = _()),
          (c = u('li')),
          (m = u('button')),
          (m.textContent = 'Rapid Calls'),
          (r = _()),
          (f = u('li')),
          (b = u('button')),
          (b.textContent = 'Async Functions'),
          (g = _()),
          (L = u('li')),
          (F = u('button')),
          (F.textContent = 'Custom Delay'),
          (O = _()),
          (q = u('li')),
          (H = u('button')),
          (H.textContent = 'API Simulation'),
          (P = _()),
          (N = u('li')),
          (E = u('button')),
          (E.textContent = 'Cleanup Test'),
          (T = _()),
          (p = u('div')),
          (k = u('header')),
          (k.innerHTML =
            '<h1>use-simple-debounce Svelte Manual Tests</h1> <p><img src="/src/assets/svelte-logo.svg" alt="Svelte" class="framework-logo"/> Svelte Implementation</p>'),
          (I = _()),
          R.c(),
          h(d, 'class', 'test-button'),
          Q(d, 'active', e[0] === 'basic'),
          h(m, 'class', 'test-button'),
          Q(m, 'active', e[0] === 'rapid'),
          h(b, 'class', 'test-button'),
          Q(b, 'active', e[0] === 'async'),
          h(F, 'class', 'test-button'),
          Q(F, 'active', e[0] === 'delay'),
          h(H, 'class', 'test-button'),
          Q(H, 'active', e[0] === 'api'),
          h(E, 'class', 'test-button'),
          Q(E, 'active', e[0] === 'cleanup'),
          h(n, 'class', 'sidebar'),
          h(k, 'class', 'page-header'),
          h(p, 'class', 'main-content'),
          h(t, 'class', 'app'));
      },
      m(M, A) {
        (G(M, t, A),
          o(t, n),
          o(n, l),
          o(n, s),
          o(n, i),
          o(i, a),
          o(a, d),
          o(i, $),
          o(i, c),
          o(c, m),
          o(i, r),
          o(i, f),
          o(f, b),
          o(i, g),
          o(i, L),
          o(L, F),
          o(i, O),
          o(i, q),
          o(q, H),
          o(i, P),
          o(i, N),
          o(N, E),
          o(t, T),
          o(t, p),
          o(p, k),
          o(p, I),
          y[C].m(p, null),
          (D = !0),
          w ||
            ((v = [
              Y(d, 'click', e[2]),
              Y(m, 'click', e[3]),
              Y(b, 'click', e[4]),
              Y(F, 'click', e[5]),
              Y(H, 'click', e[6]),
              Y(E, 'click', e[7]),
            ]),
            (w = !0)));
      },
      p(M, [A]) {
        ((!D || A & 1) && Q(d, 'active', M[0] === 'basic'),
          (!D || A & 1) && Q(m, 'active', M[0] === 'rapid'),
          (!D || A & 1) && Q(b, 'active', M[0] === 'async'),
          (!D || A & 1) && Q(F, 'active', M[0] === 'delay'),
          (!D || A & 1) && Q(H, 'active', M[0] === 'api'),
          (!D || A & 1) && Q(E, 'active', M[0] === 'cleanup'));
        let B = C;
        ((C = U(M)),
          C !== B &&
            (Jt(),
            tt(y[B], 1, 1, () => {
              y[B] = null;
            }),
            Wt(),
            (R = y[C]),
            R || ((R = y[C] = S[C](M)), R.c()),
            W(R, 1),
            R.m(p, null)));
      },
      i(M) {
        D || (W(R), (D = !0));
      },
      o(M) {
        (tt(R), (D = !1));
      },
      d(M) {
        (M && K(t), y[C].d(), (w = !1), Z(v));
      },
    }
  );
}
function Re(e, t, n) {
  let l = 'basic';
  function s(r) {
    n(0, (l = r));
  }
  return [
    l,
    s,
    () => s('basic'),
    () => s('rapid'),
    () => s('async'),
    () => s('delay'),
    () => s('api'),
    () => s('cleanup'),
  ];
}
class Ue extends ut {
  constructor(t) {
    (super(), it(this, t, Re, Ne, ot, {}));
  }
}
new Ue({ target: document.getElementById('app') });
