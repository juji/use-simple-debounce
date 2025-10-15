(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === 'childList')
        for (const r of i.addedNodes) r.tagName === 'LINK' && r.rel === 'modulepreload' && l(r);
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
const _e = !1,
  me = (e, t) => e === t,
  W = { equals: me };
let ae = pe;
const M = 1,
  X = 2,
  de = { owned: null, cleanups: null, context: null, owner: null };
var x = null;
let ne = null,
  Ce = null,
  S = null,
  I = null,
  k = null,
  z = 0;
function Se(e, t) {
  const n = S,
    l = x,
    s = e.length === 0,
    i = t === void 0 ? l : t,
    r = s ? de : { owned: null, cleanups: null, context: i ? i.context : null, owner: i },
    o = s ? e : () => e(() => ee(() => F(r)));
  ((x = r), (S = null));
  try {
    return G(o, !0);
  } finally {
    ((S = n), (x = l));
  }
}
function _(e, t) {
  t = t ? Object.assign({}, W, t) : W;
  const n = { value: e, observers: null, observerSlots: null, comparator: t.equals || void 0 },
    l = (s) => (typeof s == 'function' && (s = s(n.value)), ge(n, s));
  return [fe.bind(n), l];
}
function P(e, t, n) {
  const l = ie(e, t, !1, M);
  V(l);
}
function ye(e, t, n) {
  ae = De;
  const l = ie(e, t, !1, M);
  ((l.user = !0), k ? k.push(l) : V(l));
}
function xe(e, t, n) {
  n = n ? Object.assign({}, W, n) : W;
  const l = ie(e, t, !0, 0);
  return (
    (l.observers = null),
    (l.observerSlots = null),
    (l.comparator = n.equals || void 0),
    V(l),
    fe.bind(l)
  );
}
function ee(e) {
  if (S === null) return e();
  const t = S;
  S = null;
  try {
    return e();
  } finally {
    S = t;
  }
}
function we(e) {
  ye(() => ee(e));
}
function Te(e) {
  return (x === null || (x.cleanups === null ? (x.cleanups = [e]) : x.cleanups.push(e)), e);
}
function fe() {
  if (this.sources && this.state)
    if (this.state === M) V(this);
    else {
      const e = I;
      ((I = null), G(() => Z(this), !1), (I = e));
    }
  if (S) {
    const e = this.observers ? this.observers.length : 0;
    (S.sources
      ? (S.sources.push(this), S.sourceSlots.push(e))
      : ((S.sources = [this]), (S.sourceSlots = [e])),
      this.observers
        ? (this.observers.push(S), this.observerSlots.push(S.sources.length - 1))
        : ((this.observers = [S]), (this.observerSlots = [S.sources.length - 1])));
  }
  return this.value;
}
function ge(e, t, n) {
  let l = e.value;
  return (
    (!e.comparator || !e.comparator(l, t)) &&
      ((e.value = t),
      e.observers &&
        e.observers.length &&
        G(() => {
          for (let s = 0; s < e.observers.length; s += 1) {
            const i = e.observers[s],
              r = ne && ne.running;
            (r && ne.disposed.has(i),
              (r ? !i.tState : !i.state) && (i.pure ? I.push(i) : k.push(i), i.observers && he(i)),
              r || (i.state = M));
          }
          if (I.length > 1e6) throw ((I = []), new Error());
        }, !1)),
    t
  );
}
function V(e) {
  if (!e.fn) return;
  F(e);
  const t = z;
  Le(e, e.value, t);
}
function Le(e, t, n) {
  let l;
  const s = x,
    i = S;
  S = x = e;
  try {
    l = e.fn(t);
  } catch (r) {
    return (
      e.pure && ((e.state = M), e.owned && e.owned.forEach(F), (e.owned = null)),
      (e.updatedAt = n + 1),
      $e(r)
    );
  } finally {
    ((S = i), (x = s));
  }
  (!e.updatedAt || e.updatedAt <= n) &&
    (e.updatedAt != null && 'observers' in e ? ge(e, l) : (e.value = l), (e.updatedAt = n));
}
function ie(e, t, n, l = M, s) {
  const i = {
    fn: e,
    state: l,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: x,
    context: x ? x.context : null,
    pure: n,
  };
  return (x === null || (x !== de && (x.owned ? x.owned.push(i) : (x.owned = [i]))), i);
}
function Y(e) {
  if (e.state === 0) return;
  if (e.state === X) return Z(e);
  if (e.suspense && ee(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < z); ) e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--)
    if (((e = t[n]), e.state === M)) V(e);
    else if (e.state === X) {
      const l = I;
      ((I = null), G(() => Z(e, t[0]), !1), (I = l));
    }
}
function G(e, t) {
  if (I) return e();
  let n = !1;
  (t || (I = []), k ? (n = !0) : (k = []), z++);
  try {
    const l = e();
    return (Ae(n), l);
  } catch (l) {
    (n || (k = null), (I = null), $e(l));
  }
}
function Ae(e) {
  if ((I && (pe(I), (I = null)), e)) return;
  const t = k;
  ((k = null), t.length && G(() => ae(t), !1));
}
function pe(e) {
  for (let t = 0; t < e.length; t++) Y(e[t]);
}
function De(e) {
  let t,
    n = 0;
  for (t = 0; t < e.length; t++) {
    const l = e[t];
    l.user ? (e[n++] = l) : Y(l);
  }
  for (t = 0; t < n; t++) Y(e[t]);
}
function Z(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const l = e.sources[n];
    if (l.sources) {
      const s = l.state;
      s === M ? l !== t && (!l.updatedAt || l.updatedAt < z) && Y(l) : s === X && Z(l, t);
    }
  }
}
function he(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || ((n.state = X), n.pure ? I.push(n) : k.push(n), n.observers && he(n));
  }
}
function F(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(),
        l = e.sourceSlots.pop(),
        s = n.observers;
      if (s && s.length) {
        const i = s.pop(),
          r = n.observerSlots.pop();
        l < s.length && ((i.sourceSlots[r] = l), (s[l] = i), (n.observerSlots[l] = r));
      }
    }
  if (e.tOwned) {
    for (t = e.tOwned.length - 1; t >= 0; t--) F(e.tOwned[t]);
    delete e.tOwned;
  }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) F(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function Ie(e) {
  return e instanceof Error
    ? e
    : new Error(typeof e == 'string' ? e : 'Unknown error', { cause: e });
}
function $e(e, t = x) {
  throw Ie(e);
}
function R(e, t) {
  return ee(() => e(t || {}));
}
const le = (e) => xe(() => e());
function Ee(e, t, n) {
  let l = n.length,
    s = t.length,
    i = l,
    r = 0,
    o = 0,
    u = t[s - 1].nextSibling,
    a = null;
  for (; r < s || o < i; ) {
    if (t[r] === n[o]) {
      (r++, o++);
      continue;
    }
    for (; t[s - 1] === n[i - 1]; ) (s--, i--);
    if (s === r) {
      const p = i < l ? (o ? n[o - 1].nextSibling : n[i - o]) : u;
      for (; o < i; ) e.insertBefore(n[o++], p);
    } else if (i === o) for (; r < s; ) ((!a || !a.has(t[r])) && t[r].remove(), r++);
    else if (t[r] === n[i - 1] && n[o] === t[s - 1]) {
      const p = t[--s].nextSibling;
      (e.insertBefore(n[o++], t[r++].nextSibling), e.insertBefore(n[--i], p), (t[s] = n[i]));
    } else {
      if (!a) {
        a = new Map();
        let g = o;
        for (; g < i; ) a.set(n[g], g++);
      }
      const p = a.get(t[r]);
      if (p != null)
        if (o < p && p < i) {
          let g = r,
            c = 1,
            f;
          for (; ++g < s && g < i && !((f = a.get(t[g])) == null || f !== p + c); ) c++;
          if (c > p - o) {
            const d = t[r];
            for (; o < p; ) e.insertBefore(n[o++], d);
          } else e.replaceChild(n[o++], t[r++]);
        } else r++;
      else t[r++].remove();
    }
  }
}
const re = '_$DX_DELEGATE';
function Oe(e, t, n, l = {}) {
  let s;
  return (
    Se((i) => {
      ((s = i), t === document ? e() : h(t, e(), t.firstChild ? null : void 0, n));
    }, l.owner),
    () => {
      (s(), (t.textContent = ''));
    }
  );
}
function L(e, t, n, l) {
  let s;
  const i = () => {
      const o = document.createElement('template');
      return ((o.innerHTML = e), o.content.firstChild);
    },
    r = () => (s || (s = i())).cloneNode(!0);
  return ((r.cloneNode = r), r);
}
function B(e, t = window.document) {
  const n = t[re] || (t[re] = new Set());
  for (let l = 0, s = e.length; l < s; l++) {
    const i = e[l];
    n.has(i) || (n.add(i), t.addEventListener(i, Pe));
  }
}
function U(e, t) {
  t == null ? e.removeAttribute('class') : (e.className = t);
}
function h(e, t, n, l) {
  if ((n !== void 0 && !l && (l = []), typeof t != 'function')) return Q(e, t, l, n);
  P((s) => Q(e, t(), s, n), l);
}
function Pe(e) {
  let t = e.target;
  const n = `$$${e.type}`,
    l = e.target,
    s = e.currentTarget,
    i = (u) => Object.defineProperty(e, 'target', { configurable: !0, value: u }),
    r = () => {
      const u = t[n];
      if (u && !t.disabled) {
        const a = t[`${n}Data`];
        if ((a !== void 0 ? u.call(t, a, e) : u.call(t, e), e.cancelBubble)) return;
      }
      return (
        t.host && typeof t.host != 'string' && !t.host._$host && t.contains(e.target) && i(t.host),
        !0
      );
    },
    o = () => {
      for (; r() && (t = t._$host || t.parentNode || t.host); );
    };
  if (
    (Object.defineProperty(e, 'currentTarget', {
      configurable: !0,
      get() {
        return t || document;
      },
    }),
    e.composedPath)
  ) {
    const u = e.composedPath();
    i(u[0]);
    for (let a = 0; a < u.length - 2 && ((t = u[a]), !!r()); a++) {
      if (t._$host) {
        ((t = t._$host), o());
        break;
      }
      if (t.parentNode === s) break;
    }
  } else o();
  i(l);
}
function Q(e, t, n, l, s) {
  for (; typeof n == 'function'; ) n = n();
  if (t === n) return n;
  const i = typeof t,
    r = l !== void 0;
  if (((e = (r && n[0] && n[0].parentNode) || e), i === 'string' || i === 'number')) {
    if (i === 'number' && ((t = t.toString()), t === n)) return n;
    if (r) {
      let o = n[0];
      (o && o.nodeType === 3 ? o.data !== t && (o.data = t) : (o = document.createTextNode(t)),
        (n = j(e, n, l, o)));
    } else n !== '' && typeof n == 'string' ? (n = e.firstChild.data = t) : (n = e.textContent = t);
  } else if (t == null || i === 'boolean') n = j(e, n, l);
  else {
    if (i === 'function')
      return (
        P(() => {
          let o = t();
          for (; typeof o == 'function'; ) o = o();
          n = Q(e, o, n, l);
        }),
        () => n
      );
    if (Array.isArray(t)) {
      const o = [],
        u = n && Array.isArray(n);
      if (se(o, t, n, s)) return (P(() => (n = Q(e, o, n, l, !0))), () => n);
      if (o.length === 0) {
        if (((n = j(e, n, l)), r)) return n;
      } else u ? (n.length === 0 ? ue(e, o, l) : Ee(e, n, o)) : (n && j(e), ue(e, o));
      n = o;
    } else if (t.nodeType) {
      if (Array.isArray(n)) {
        if (r) return (n = j(e, n, l, t));
        j(e, n, null, t);
      } else
        n == null || n === '' || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function se(e, t, n, l) {
  let s = !1;
  for (let i = 0, r = t.length; i < r; i++) {
    let o = t[i],
      u = n && n[e.length],
      a;
    if (!(o == null || o === !0 || o === !1))
      if ((a = typeof o) == 'object' && o.nodeType) e.push(o);
      else if (Array.isArray(o)) s = se(e, o, u) || s;
      else if (a === 'function')
        if (l) {
          for (; typeof o == 'function'; ) o = o();
          s = se(e, Array.isArray(o) ? o : [o], Array.isArray(u) ? u : [u]) || s;
        } else (e.push(o), (s = !0));
      else {
        const p = String(o);
        u && u.nodeType === 3 && u.data === p ? e.push(u) : e.push(document.createTextNode(p));
      }
  }
  return s;
}
function ue(e, t, n = null) {
  for (let l = 0, s = t.length; l < s; l++) e.insertBefore(t[l], n);
}
function j(e, t, n, l) {
  if (n === void 0) return (e.textContent = '');
  const s = l || document.createTextNode('');
  if (t.length) {
    let i = !1;
    for (let r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (s !== o) {
        const u = o.parentNode === e;
        !i && !r ? (u ? e.replaceChild(s, o) : e.insertBefore(s, n)) : u && o.remove();
      } else i = !0;
    }
  } else e.insertBefore(s, n);
  return [s];
}
function q() {
  let e = null;
  return (t, n = 300) => {
    (e && clearTimeout(e),
      (e = setTimeout(() => {
        (t(), (e = null));
      }, n)));
  };
}
var Ne = L(
    '<div class=test-case><h3>⚡ Basic Debounce Test</h3><p>Test basic debouncing with a 500ms delay.</p><div class=test-controls><label>Input:<input type=text placeholder="Type something..."></label></div><div class=test-output><p><strong>Output:</strong> </p></div><div class=test-logs><h4>Logs:</h4><div class=logs-container>'
  ),
  Re = L('<div class=log-entry>');
function ce() {
  const [e, t] = _(''),
    [n, l] = _(''),
    [s, i] = _([]),
    r = (a) => {
      i((p) => [...p, `${new Date().toLocaleTimeString()}: ${a}`]);
    },
    o = q(),
    u = (a) => {
      const g = a.target.value;
      (t(g),
        r(`Input changed: "${g}"`),
        o(() => {
          (l(g), r(`Debounced update: "${g}"`));
        }, 500));
    };
  return (() => {
    var a = Ne(),
      p = a.firstChild,
      g = p.nextSibling,
      c = g.nextSibling,
      f = c.firstChild,
      d = f.firstChild,
      $ = d.nextSibling,
      T = c.nextSibling,
      A = T.firstChild,
      w = A.firstChild;
    w.nextSibling;
    var C = T.nextSibling,
      b = C.firstChild,
      v = b.nextSibling;
    return (
      ($.$$input = u),
      h(A, n, null),
      h(v, () =>
        s().map((y) =>
          (() => {
            var m = Re();
            return (h(m, y), m);
          })()
        )
      ),
      P(() => ($.value = e())),
      a
    );
  })();
}
B(['input']);
var ke = L(
    '<div class=test-case><h3>⚡ Rapid Calls Test</h3><p>Test debouncing with rapid successive calls (10 calls in 500ms).</p><div class=test-controls><button>Trigger Rapid Calls</button><button>Reset</button></div><div class=test-output><p><strong>Immediate Count:</strong> </p><p><strong>Debounced Count:</strong> </p></div><div class=test-logs><h4>Logs:</h4><div class=logs-container>'
  ),
  Me = L('<div class=log-entry>');
function Be() {
  const [e, t] = _(0),
    [n, l] = _(0),
    [s, i] = _([]),
    [r, o] = _(0),
    u = (c) => {
      i((f) => [...f, `${new Date().toLocaleTimeString()}: ${c}`]);
    },
    a = q(),
    p = () => {
      for (let c = 0; c < 10; c++)
        setTimeout(() => {
          t((f) => {
            const d = f + 1;
            return (
              u(`Immediate count: ${d}`),
              a(() => {
                (o(($) => $ + 1), l(r()), u(`Debounced count: ${d}`));
              }, 300),
              d
            );
          });
        }, c * 50);
    },
    g = () => {
      (t(0), l(0), o(0), i([]));
    };
  return (() => {
    var c = ke(),
      f = c.firstChild,
      d = f.nextSibling,
      $ = d.nextSibling,
      T = $.firstChild,
      A = T.nextSibling,
      w = $.nextSibling,
      C = w.firstChild,
      b = C.firstChild;
    b.nextSibling;
    var v = C.nextSibling,
      y = v.firstChild;
    y.nextSibling;
    var m = w.nextSibling,
      D = m.firstChild,
      O = D.nextSibling;
    return (
      (T.$$click = p),
      (A.$$click = g),
      h(C, e, null),
      h(v, n, null),
      h(O, () =>
        s().map((E) =>
          (() => {
            var N = Me();
            return (h(N, E), N);
          })()
        )
      ),
      c
    );
  })();
}
B(['click']);
var Ue = L(
    '<div class=test-case><h3>⚡ Async Function Test</h3><p>Test debouncing with async functions (simulates API call).</p><div class=test-controls><label>Input:<input type=text placeholder="Type to trigger async operation..."></label></div><div class=test-output><p><strong>Result:</strong> </p><p><strong>Loading:</strong> </p></div><div class=test-logs><h4>Logs:</h4><div class=logs-container>'
  ),
  je = L('<div class=log-entry>');
function qe() {
  const [e, t] = _(''),
    [n, l] = _(''),
    [s, i] = _(!1),
    [r, o] = _([]),
    u = (g) => {
      o((c) => [...c, `${new Date().toLocaleTimeString()}: ${g}`]);
    },
    a = q(),
    p = (g) => {
      const f = g.target.value;
      (t(f),
        u(`Input changed: "${f}"`),
        a(async () => {
          (i(!0),
            u(`Starting async operation for: "${f}"`),
            await new Promise(($) => setTimeout($, 1e3)));
          const d = f.toUpperCase();
          (l(d), i(!1), u(`Async operation completed: "${d}"`));
        }, 500));
    };
  return (() => {
    var g = Ue(),
      c = g.firstChild,
      f = c.nextSibling,
      d = f.nextSibling,
      $ = d.firstChild,
      T = $.firstChild,
      A = T.nextSibling,
      w = d.nextSibling,
      C = w.firstChild,
      b = C.firstChild;
    b.nextSibling;
    var v = C.nextSibling,
      y = v.firstChild;
    y.nextSibling;
    var m = w.nextSibling,
      D = m.firstChild,
      O = D.nextSibling;
    return (
      (A.$$input = p),
      h(C, n, null),
      h(v, () => (s() ? 'Yes' : 'No'), null),
      h(O, () =>
        r().map((E) =>
          (() => {
            var N = je();
            return (h(N, E), N);
          })()
        )
      ),
      P(() => (A.value = e())),
      g
    );
  })();
}
B(['input']);
var Fe = L(
    '<div class=test-case><h3>⚡ Custom Delay Test</h3><p>Test debouncing with adjustable delay.</p><div class=test-controls><label>Delay (ms):<input type=number min=100 max=5000 step=100></label><br><label>Input:<input type=text placeholder="Type something..."></label></div><div class=test-output><p><strong>Output:</strong> </p><p><strong>Current Delay:</strong> <!>ms</p></div><div class=test-logs><h4>Logs:</h4><div class=logs-container>'
  ),
  Ve = L('<div class=log-entry>');
function Ge() {
  const [e, t] = _(''),
    [n, l] = _(''),
    [s, i] = _(1e3),
    [r, o] = _([]),
    u = (c) => {
      o((f) => [...f, `${new Date().toLocaleTimeString()}: ${c}`]);
    },
    a = q(),
    p = (c) => {
      const d = c.target.value;
      (t(d),
        u(`Input changed: "${d}"`),
        a(() => {
          (l(d), u(`Debounced update: "${d}"`));
        }, s()));
    },
    g = (c) => {
      const f = c.target;
      i(Number(f.value));
    };
  return (() => {
    var c = Fe(),
      f = c.firstChild,
      d = f.nextSibling,
      $ = d.nextSibling,
      T = $.firstChild,
      A = T.firstChild,
      w = A.nextSibling,
      C = T.nextSibling,
      b = C.nextSibling,
      v = b.firstChild,
      y = v.nextSibling,
      m = $.nextSibling,
      D = m.firstChild,
      O = D.firstChild;
    O.nextSibling;
    var E = D.nextSibling,
      N = E.firstChild,
      H = N.nextSibling,
      J = H.nextSibling;
    J.nextSibling;
    var te = m.nextSibling,
      K = te.firstChild,
      be = K.nextSibling;
    return (
      (w.$$input = g),
      (y.$$input = p),
      h(D, n, null),
      h(E, s, J),
      h(be, () =>
        r().map((ve) =>
          (() => {
            var oe = Ve();
            return (h(oe, ve), oe);
          })()
        )
      ),
      P(() => (w.value = s())),
      P(() => (y.value = e())),
      c
    );
  })();
}
B(['input']);
var He = L(
    '<div class=test-case><h3>⚡ API Simulation Test</h3><p>Test debouncing with simulated API calls (search functionality).</p><div class=test-controls><label>Search:<input type=text placeholder="Type to search..."></label></div><div class=test-output></div><div class=test-logs><h4>Logs:</h4><div class=logs-container>'
  ),
  Je = L('<div><p><strong>Search Results for "<!>":</strong></p><ul>'),
  Ke = L('<li>'),
  We = L('<p><strong>Loading...'),
  Xe = L('<div class=log-entry>');
function Ye() {
  const [e, t] = _(''),
    [n, l] = _(null),
    [s, i] = _(!1),
    [r, o] = _([]),
    u = (c) => {
      o((f) => [...f, `${new Date().toLocaleTimeString()}: ${c}`]);
    },
    a = async (c) => {
      (u(`API call started for: "${c}"`), await new Promise((d) => setTimeout(d, 800)));
      const f = [`${c} result 1`, `${c} result 2`, `${c} result 3`];
      return { query: c, results: f };
    },
    p = q(),
    g = (c) => {
      const d = c.target.value;
      (t(d),
        u(`Search query changed: "${d}"`),
        p(async () => {
          if (!d.trim()) {
            l(null);
            return;
          }
          i(!0);
          try {
            const $ = await a(d);
            (l($), u(`API call completed for: "${d}"`));
          } catch ($) {
            u(`API call failed: ${$}`);
          } finally {
            i(!1);
          }
        }, 300));
    };
  return (() => {
    var c = He(),
      f = c.firstChild,
      d = f.nextSibling,
      $ = d.nextSibling,
      T = $.firstChild,
      A = T.firstChild,
      w = A.nextSibling,
      C = $.nextSibling,
      b = C.nextSibling,
      v = b.firstChild,
      y = v.nextSibling;
    return (
      (w.$$input = g),
      h(
        C,
        (() => {
          var m = le(() => !!n());
          return () =>
            m() &&
            (() => {
              var D = Je(),
                O = D.firstChild,
                E = O.firstChild,
                N = E.firstChild,
                H = N.nextSibling;
              H.nextSibling;
              var J = O.nextSibling;
              return (
                h(E, () => n().query, H),
                h(J, () =>
                  n().results.map((te) =>
                    (() => {
                      var K = Ke();
                      return (h(K, te), K);
                    })()
                  )
                ),
                D
              );
            })();
        })(),
        null
      ),
      h(
        C,
        (() => {
          var m = le(() => !!s());
          return () => m() && We();
        })(),
        null
      ),
      h(y, () =>
        r().map((m) =>
          (() => {
            var D = Xe();
            return (h(D, m), D);
          })()
        )
      ),
      P(() => (w.value = e())),
      c
    );
  })();
}
B(['input']);
var Ze = L(
    '<div class=debounce-component><div class=test-controls><label>Input (debounced):<input type=text placeholder="Type to trigger debounced update..."></label></div><div class=test-output><p><strong>Debounced Output:</strong> '
  ),
  Qe = L(
    '<div class=test-case><h3>⚡ Cleanup Test</h3><p>Test that debounced functions are properly cleaned up when components unmount.</p><p><em>Type in the input, then unmount the component before the 5s delay expires.</em></p><p><em>The debounced function is called with console.log after 5 seconds.</em></p><div class=test-controls><button></button><button></button><button>Clear Logs</button></div><div class=component-container></div><div class=test-logs><h4>Logs:</h4><div class=logs-container>'
  ),
  ze = L('<div class=log-entry>');
function et(e) {
  const [t, n] = _(''),
    [l, s] = _(''),
    i = q();
  (we(() => {
    e.addLog('DebounceComponent mounted');
  }),
    Te(() => {
      e.addLog('DebounceComponent unmounting - cleanup should prevent pending debounced callbacks');
    }));
  const r = (o) => {
    const a = o.target.value;
    (n(a),
      e.addLog(`Input changed: "${a}"`),
      i(() => {
        (console.log('Debounced callback executed'),
          s(a),
          e.addLog(`Debounced callback executed: "${a}"`));
      }, 5e3));
  };
  return (() => {
    var o = Ze(),
      u = o.firstChild,
      a = u.firstChild,
      p = a.firstChild,
      g = p.nextSibling,
      c = u.nextSibling,
      f = c.firstChild,
      d = f.firstChild;
    return (d.nextSibling, (g.$$input = r), h(f, l, null), P(() => (g.value = t())), o);
  })();
}
function tt() {
  const [e, t] = _(!0),
    [n, l] = _([]),
    s = (u) => {
      l((a) => [...a, `${new Date().toLocaleTimeString()}: ${u}`]);
    },
    i = () => {
      (t(!0), s('Mounting DebounceComponent'));
    },
    r = () => {
      (t(!1), s('Unmounting DebounceComponent'));
    },
    o = () => {
      l([]);
    };
  return (() => {
    var u = Qe(),
      a = u.firstChild,
      p = a.nextSibling,
      g = p.nextSibling,
      c = g.nextSibling,
      f = c.nextSibling,
      d = f.firstChild,
      $ = d.nextSibling,
      T = $.nextSibling,
      A = f.nextSibling,
      w = A.nextSibling,
      C = w.firstChild,
      b = C.nextSibling;
    return (
      (d.$$click = i),
      h(d, () => (e() ? 'Component Mounted' : 'Mount Component')),
      ($.$$click = r),
      h($, () => (e() ? 'Unmount Component' : 'Component Unmounted')),
      (T.$$click = o),
      h(
        A,
        (() => {
          var v = le(() => !!e());
          return () => v() && R(et, { addLog: s });
        })()
      ),
      h(b, () =>
        n().map((v) =>
          (() => {
            var y = ze();
            return (h(y, v), y);
          })()
        )
      ),
      P(
        (v) => {
          var y = e(),
            m = !e();
          return (y !== v.e && (d.disabled = v.e = y), m !== v.t && ($.disabled = v.t = m), v);
        },
        { e: void 0, t: void 0 }
      ),
      u
    );
  })();
}
B(['input', 'click']);
var nt = L(
  '<div class=app><nav class=sidebar><h2>Test Cases</h2><ul><li><button>Basic Debounce</button></li><li><button>Rapid Calls</button></li><li><button>Async Functions</button></li><li><button>Custom Delay</button></li><li><button>API Simulation</button></li><li><button>Cleanup Test</button></li></ul></nav><main class=main-content><header class=page-header><h1>use-simple-debounce Solid Manual Tests</h1><p><img src=/src/assets/solid-logo.svg alt=Solid class=framework-logo> SolidJS Implementation'
);
function lt() {
  const [e, t] = _('basic'),
    n = () => {
      switch (e()) {
        case 'basic':
          return R(ce, {});
        case 'rapid':
          return R(Be, {});
        case 'async':
          return R(qe, {});
        case 'delay':
          return R(Ge, {});
        case 'api':
          return R(Ye, {});
        case 'cleanup':
          return R(tt, {});
        default:
          return R(ce, {});
      }
    };
  return (() => {
    var l = nt(),
      s = l.firstChild,
      i = s.firstChild,
      r = i.nextSibling,
      o = r.firstChild,
      u = o.firstChild,
      a = o.nextSibling,
      p = a.firstChild,
      g = a.nextSibling,
      c = g.firstChild,
      f = g.nextSibling,
      d = f.firstChild,
      $ = f.nextSibling,
      T = $.firstChild,
      A = $.nextSibling,
      w = A.firstChild,
      C = s.nextSibling;
    return (
      C.firstChild,
      (u.$$click = () => t('basic')),
      (p.$$click = () => t('rapid')),
      (c.$$click = () => t('async')),
      (d.$$click = () => t('delay')),
      (T.$$click = () => t('api')),
      (w.$$click = () => t('cleanup')),
      h(C, n, null),
      P(
        (b) => {
          var v = `test-button ${e() === 'basic' ? 'active' : ''}`,
            y = `test-button ${e() === 'rapid' ? 'active' : ''}`,
            m = `test-button ${e() === 'async' ? 'active' : ''}`,
            D = `test-button ${e() === 'delay' ? 'active' : ''}`,
            O = `test-button ${e() === 'api' ? 'active' : ''}`,
            E = `test-button ${e() === 'cleanup' ? 'active' : ''}`;
          return (
            v !== b.e && U(u, (b.e = v)),
            y !== b.t && U(p, (b.t = y)),
            m !== b.a && U(c, (b.a = m)),
            D !== b.o && U(d, (b.o = D)),
            O !== b.i && U(T, (b.i = O)),
            E !== b.n && U(w, (b.n = E)),
            b
          );
        },
        { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }
      ),
      l
    );
  })();
}
B(['click']);
Oe(() => R(lt, {}), document.getElementById('root'));
