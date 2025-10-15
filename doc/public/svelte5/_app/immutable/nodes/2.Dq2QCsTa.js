import '../chunks/DsnmJJEf.js';
import {
  c as ce,
  h as H,
  ah as We,
  e as we,
  a as Ze,
  b as Ke,
  I as s,
  aK as Xe,
  r as ze,
  H as Ge,
  s as $e,
  d as de,
  k as ie,
  _ as Je,
  aq as Qe,
  f as be,
  i as je,
  g as ee,
  am as ke,
  af as et,
  aU as tt,
  V as De,
  Y as at,
  j as Ae,
  p as nt,
  aY as rt,
  aZ as _e,
  a6 as Se,
  a_ as lt,
  a$ as st,
  ac as it,
  b0 as ot,
  al as vt,
  b1 as ut,
  Z as ct,
  b2 as dt,
  aE as _t,
  D as ft,
  W as pt,
  b3 as gt,
  O as K,
  aV as k,
  aL as ne,
  x as M,
  S as _,
  Q as v,
  R as i,
  y as N,
  w as S,
  P as X,
  aM as $,
  t as bt,
  b4 as ht,
  o as oe,
  u as ve,
} from '../chunks/CzjAlc6Y.js';
import { a as Le, d as q, s as E, o as mt } from '../chunks/_feIyWM4.js';
import { i as Y } from '../chunks/6BIXOepf.js';
import { r as te } from '../chunks/BUzB29vX.js';
function W(a, e) {
  return e;
}
function Tt(a, e, t) {
  for (var n = a.items, r = [], l = e.length, o = 0; o < l; o++) ot(e[o].e, r, !0);
  var u = l > 0 && r.length === 0 && t !== null;
  if (u) {
    var p = t.parentNode;
    (vt(p), p.append(t), n.clear(), O(a, e[0].prev, e[l - 1].next));
  }
  ut(r, () => {
    for (var c = 0; c < l; c++) {
      var C = e[c];
      (u || (n.delete(C.k), O(a, C.prev, C.next)), Se(C.e, !u));
    }
  });
}
function Z(a, e, t, n, r, l = null) {
  var o = a,
    u = { flags: e, items: new Map(), first: null };
  {
    var p = a;
    o = H ? ce(We(p)) : p.appendChild(we());
  }
  H && Ze();
  var c = null,
    C = !1,
    I = new Map(),
    d = Xe(() => {
      var T = t();
      return et(T) ? T : T == null ? [] : ke(T);
    }),
    y,
    h;
  function m() {
    (yt(h, y, u, I, o, r, e, n, t),
      l !== null &&
        (y.length === 0
          ? c
            ? Ae(c)
            : (c = be(() => l(o)))
          : c !== null &&
            nt(c, () => {
              c = null;
            })));
  }
  (Ke(() => {
    ((h ??= ct), (y = s(d)));
    var T = y.length;
    if (C && T === 0) return;
    C = T === 0;
    let D = !1;
    if (H) {
      var x = ze(o) === Ge;
      x !== (T === 0) && ((o = $e()), ce(o), de(!1), (D = !0));
    }
    if (H) {
      for (var g = null, b, f = 0; f < T; f++) {
        if (ie.nodeType === Je && ie.data === Qe) {
          ((o = ie), (D = !0), de(!1));
          break;
        }
        var w = y[f],
          A = n(w, f);
        ((b = he(ie, u, g, null, w, A, f, r, e, t)), u.items.set(A, b), (g = b));
      }
      T > 0 && ce($e());
    }
    if (H) T === 0 && l && (c = be(() => l(o)));
    else if (je()) {
      var P = new Set(),
        R = ee;
      for (f = 0; f < T; f += 1) {
        ((w = y[f]), (A = n(w, f)));
        var U = u.items.get(A) ?? I.get(A);
        (U ? Ee(U, w, f) : ((b = he(null, u, null, null, w, A, f, r, e, t, !0)), I.set(A, b)),
          P.add(A));
      }
      for (const [V, L] of u.items) P.has(V) || R.skipped_effects.add(L.e);
      R.add_callback(m);
    } else m();
    (D && de(!0), s(d));
  }),
    H && (o = ie));
}
function yt(a, e, t, n, r, l, o, u, p) {
  var c = e.length,
    C = t.items,
    I = t.first,
    d = I,
    y,
    h = null,
    m = [],
    T = [],
    D,
    x,
    g,
    b;
  for (b = 0; b < c; b += 1) {
    if (((D = e[b]), (x = u(D, b)), (g = C.get(x)), g === void 0)) {
      var f = n.get(x);
      if (f !== void 0) {
        (n.delete(x), C.set(x, f));
        var w = h ? h.next : d;
        (O(t, h, f), O(t, f, w), fe(f, w, r), (h = f));
      } else {
        var A = d ? d.e.nodes_start : r;
        h = he(A, t, h, h === null ? t.first : h.next, D, x, b, l, o, p);
      }
      (C.set(x, h), (m = []), (T = []), (d = h.next));
      continue;
    }
    if ((Ee(g, D, b), (g.e.f & _e) !== 0 && Ae(g.e), g !== d)) {
      if (y !== void 0 && y.has(g)) {
        if (m.length < T.length) {
          var P = T[0],
            R;
          h = P.prev;
          var U = m[0],
            V = m[m.length - 1];
          for (R = 0; R < m.length; R += 1) fe(m[R], P, r);
          for (R = 0; R < T.length; R += 1) y.delete(T[R]);
          (O(t, U.prev, V.next),
            O(t, h, U),
            O(t, V, P),
            (d = P),
            (h = V),
            (b -= 1),
            (m = []),
            (T = []));
        } else
          (y.delete(g),
            fe(g, d, r),
            O(t, g.prev, g.next),
            O(t, g, h === null ? t.first : h.next),
            O(t, h, g),
            (h = g));
        continue;
      }
      for (m = [], T = []; d !== null && d.k !== x; )
        ((d.e.f & _e) === 0 && (y ??= new Set()).add(d), T.push(d), (d = d.next));
      if (d === null) continue;
      g = d;
    }
    (m.push(g), (h = g), (d = g.next));
  }
  if (d !== null || y !== void 0) {
    for (var L = y === void 0 ? [] : ke(y); d !== null; )
      ((d.e.f & _e) === 0 && L.push(d), (d = d.next));
    var B = L.length;
    if (B > 0) {
      var le = c === 0 ? r : null;
      Tt(t, L, le);
    }
  }
  ((a.first = t.first && t.first.e), (a.last = h && h.e));
  for (var se of n.values()) Se(se.e);
  n.clear();
}
function Ee(a, e, t, n) {
  (at(a.v, e), (a.i = t));
}
function he(a, e, t, n, r, l, o, u, p, c, C) {
  var I = (p & lt) !== 0,
    d = (p & st) === 0,
    y = I ? (d ? tt(r, !1, !1) : De(r)) : r,
    h = (p & rt) === 0 ? o : De(o),
    m = { i: h, v: y, k: l, a: null, e: null, prev: t, next: n };
  try {
    if (a === null) {
      var T = document.createDocumentFragment();
      T.append((a = we()));
    }
    return (
      (m.e = be(() => u(a, y, h, c), H)),
      (m.e.prev = t && t.e),
      (m.e.next = n && n.e),
      t === null ? C || (e.first = m) : ((t.next = m), (t.e.next = m.e)),
      n !== null && ((n.prev = m), (n.e.prev = m.e)),
      m
    );
  } finally {
  }
}
function fe(a, e, t) {
  for (
    var n = a.next ? a.next.e.nodes_start : t, r = e ? e.e.nodes_start : t, l = a.e.nodes_start;
    l !== null && l !== n;

  ) {
    var o = it(l);
    (r.before(l), (l = o));
  }
}
function O(a, e, t) {
  (e === null ? (a.first = t) : ((e.next = t), (e.e.next = t && t.e)),
    t !== null && ((t.prev = e), (t.e.prev = e && e.e)));
}
const Ie = [
  ...` 	
\r\f \v\uFEFF`,
];
function Ct(a, e, t) {
  var n = '' + a;
  if (t) {
    for (var r in t)
      if (t[r]) n = n ? n + ' ' + r : r;
      else if (n.length)
        for (var l = r.length, o = 0; (o = n.indexOf(r, o)) >= 0; ) {
          var u = o + l;
          (o === 0 || Ie.includes(n[o - 1])) && (u === n.length || Ie.includes(n[u]))
            ? (n = (o === 0 ? '' : n.substring(0, o)) + n.substring(u + 1))
            : (o = u);
        }
  }
  return n === '' ? null : n;
}
function j(a, e, t, n, r, l) {
  var o = a.__className;
  if (H || o !== t || o === void 0) {
    var u = Ct(t, n, l);
    ((!H || u !== a.getAttribute('class')) &&
      (u == null ? a.removeAttribute('class') : (a.className = u)),
      (a.__className = t));
  } else if (l && r !== l)
    for (var p in l) {
      var c = !!l[p];
      (r == null || c !== !!r[p]) && a.classList.toggle(p, c);
    }
  return l;
}
function ae(a, e, t = e) {
  var n = new WeakSet();
  (dt(a, 'input', async (r) => {
    var l = r ? a.defaultValue : a.value;
    if (((l = pe(a) ? ge(l) : l), t(l), ee !== null && n.add(ee), await _t(), l !== (l = e()))) {
      var o = a.selectionStart,
        u = a.selectionEnd,
        p = a.value.length;
      if (((a.value = l ?? ''), u !== null)) {
        var c = a.value.length;
        o === u && u === p && c > p
          ? ((a.selectionStart = c), (a.selectionEnd = c))
          : ((a.selectionStart = o), (a.selectionEnd = Math.min(u, c)));
      }
    }
  }),
    ((H && a.defaultValue !== a.value) || (ft(e) == null && a.value)) &&
      (t(pe(a) ? ge(a.value) : a.value), ee !== null && n.add(ee)),
    pt(() => {
      var r = e();
      if (a === document.activeElement) {
        var l = gt ?? ee;
        if (n.has(l)) return;
      }
      (pe(a) && r === ge(a.value)) ||
        (a.type === 'date' && !r && !a.value) ||
        (r !== a.value && (a.value = r ?? ''));
    }));
}
function pe(a) {
  var e = a.type;
  return e === 'number' || e === 'range';
}
function ge(a) {
  return a === '' ? null : +a;
}
function re() {
  let a = null;
  return (
    Le(() => {
      a && clearTimeout(a);
    }),
    (e, t = 300) => {
      (a && clearTimeout(a),
        (a = setTimeout(() => {
          (e(), (a = null));
        }, t)));
    }
  );
}
function $t(a, e, t, n, r) {
  const l = a.target;
  ($(e, l.value, !0),
    t(`Input changed: "${s(e)}"`),
    n(() => {
      ($(r, s(e), !0), t(`Debounced update: "${s(e)}"`));
    }, 500));
}
var Dt = M('<div class="log-entry"> </div>'),
  It = M(
    '<div class="test-case"><h3>⚡ Basic Debounce Test</h3> <p>Test basic debouncing with a 500ms delay.</p> <div class="test-controls"><label>Input: <input type="text" placeholder="Type something..."/></label></div> <div class="test-output"><p><strong>Output:</strong> </p></div> <div class="test-logs"><h4>Logs:</h4> <div class="logs-container"></div></div></div>'
  );
function xe(a, e) {
  K(e, !0);
  let t = k(''),
    n = k(''),
    r = k(ne([]));
  function l(T) {
    $(r, [...s(r), `${new Date().toLocaleTimeString()}: ${T}`], !0);
  }
  const o = re();
  var u = It(),
    p = _(v(u), 4),
    c = v(p),
    C = _(v(c));
  (te(C), (C.__input = [$t, t, l, o, n]), i(c), i(p));
  var I = _(p, 2),
    d = v(I),
    y = _(v(d));
  (i(d), i(I));
  var h = _(I, 2),
    m = _(v(h), 2);
  (Z(
    m,
    21,
    () => s(r),
    W,
    (T, D) => {
      var x = Dt(),
        g = v(x, !0);
      (i(x), N(() => E(g, s(D))), S(T, x));
    }
  ),
    i(m),
    i(h),
    i(u),
    N(() => E(y, ` ${s(n) ?? ''}`)),
    ae(
      C,
      () => s(t),
      (T) => $(t, T)
    ),
    S(a, u),
    X());
}
q(['input']);
function xt(a, e, t, n, r, l) {
  for (let o = 0; o < 10; o++)
    setTimeout(() => {
      ($(e, s(e) + 1),
        t(`Immediate count: ${s(e)}`),
        n(() => {
          ($(r, s(r) + 1), $(l, s(r), !0), t(`Debounced count: ${s(e)}`));
        }, 300));
    }, o * 50);
}
function wt(a, e, t, n, r) {
  ($(e, 0), $(t, 0), $(n, 0), $(r, [], !0));
}
var kt = M('<div class="log-entry"> </div>'),
  At = M(
    '<div class="test-case"><h3>⚡ Rapid Calls Test</h3> <p>Test debouncing with rapid successive calls (10 calls in 500ms).</p> <div class="test-controls"><button>Trigger Rapid Calls</button> <button>Reset</button></div> <div class="test-output"><p><strong>Immediate Count:</strong> </p> <p><strong>Debounced Count:</strong> </p></div> <div class="test-logs"><h4>Logs:</h4> <div class="logs-container"></div></div></div>'
  );
function St(a, e) {
  K(e, !0);
  let t = k(0),
    n = k(0),
    r = k(ne([])),
    l = k(0);
  function o(g) {
    $(r, [...s(r), `${new Date().toLocaleTimeString()}: ${g}`], !0);
  }
  const u = re();
  var p = At(),
    c = _(v(p), 4),
    C = v(c);
  C.__click = [xt, t, o, u, l, n];
  var I = _(C, 2);
  ((I.__click = [wt, t, n, l, r]), i(c));
  var d = _(c, 2),
    y = v(d),
    h = _(v(y));
  i(y);
  var m = _(y, 2),
    T = _(v(m));
  (i(m), i(d));
  var D = _(d, 2),
    x = _(v(D), 2);
  (Z(
    x,
    21,
    () => s(r),
    W,
    (g, b) => {
      var f = kt(),
        w = v(f, !0);
      (i(f), N(() => E(w, s(b))), S(g, f));
    }
  ),
    i(x),
    i(D),
    i(p),
    N(() => {
      (E(h, ` ${s(t) ?? ''}`), E(T, ` ${s(n) ?? ''}`));
    }),
    S(a, p),
    X());
}
q(['click']);
function Lt(a, e, t, n, r, l) {
  const o = a.target;
  ($(e, o.value, !0),
    t(`Input changed: "${s(e)}"`),
    n(async () => {
      ($(r, !0),
        t(`Starting async operation for: "${s(e)}"`),
        await new Promise((u) => setTimeout(u, 1e3)),
        $(l, s(e).toUpperCase(), !0),
        $(r, !1),
        t(`Async operation completed: "${s(l)}"`));
    }, 500));
}
var Et = M('<div class="log-entry"> </div>'),
  Mt = M(
    '<div class="test-case"><h3>⚡ Async Function Test</h3> <p>Test debouncing with async functions (simulates API call).</p> <div class="test-controls"><label>Input: <input type="text" placeholder="Type to trigger async operation..."/></label></div> <div class="test-output"><p><strong>Result:</strong> </p> <p><strong>Loading:</strong> </p></div> <div class="test-logs"><h4>Logs:</h4> <div class="logs-container"></div></div></div>'
  );
function Rt(a, e) {
  K(e, !0);
  let t = k(''),
    n = k(''),
    r = k(!1),
    l = k(ne([]));
  function o(g) {
    $(l, [...s(l), `${new Date().toLocaleTimeString()}: ${g}`], !0);
  }
  const u = re();
  var p = Mt(),
    c = _(v(p), 4),
    C = v(c),
    I = _(v(C));
  (te(I), (I.__input = [Lt, t, o, u, r, n]), i(C), i(c));
  var d = _(c, 2),
    y = v(d),
    h = _(v(y));
  i(y);
  var m = _(y, 2),
    T = _(v(m));
  (i(m), i(d));
  var D = _(d, 2),
    x = _(v(D), 2);
  (Z(
    x,
    21,
    () => s(l),
    W,
    (g, b) => {
      var f = Et(),
        w = v(f, !0);
      (i(f), N(() => E(w, s(b))), S(g, f));
    }
  ),
    i(x),
    i(D),
    i(p),
    N(() => {
      (E(h, ` ${s(n) ?? ''}`), E(T, ` ${s(r) ? 'Yes' : 'No'}`));
    }),
    ae(
      I,
      () => s(t),
      (g) => $(t, g)
    ),
    S(a, p),
    X());
}
q(['input']);
function Nt(a, e, t, n, r, l) {
  const o = a.target;
  ($(e, o.value, !0),
    t(`Input changed: "${s(e)}"`),
    n(() => {
      ($(r, s(e), !0), t(`Debounced update: "${s(e)}"`));
    }, s(l)));
}
function Pt(a, e) {
  const t = a.target;
  $(e, Number(t.value), !0);
}
var Ot = M('<div class="log-entry"> </div>'),
  Ht = M(
    '<div class="test-case"><h3>⚡ Custom Delay Test</h3> <p>Test debouncing with adjustable delay.</p> <div class="test-controls"><label>Delay (ms): <input type="number" min="100" max="5000" step="100"/></label> <br/> <label>Input: <input type="text" placeholder="Type something..."/></label></div> <div class="test-output"><p><strong>Output:</strong> </p> <p><strong>Current Delay:</strong> </p></div> <div class="test-logs"><h4>Logs:</h4> <div class="logs-container"></div></div></div>'
  );
function Ut(a, e) {
  K(e, !0);
  let t = k(''),
    n = k(''),
    r = k(1e3),
    l = k(ne([]));
  function o(f) {
    $(l, [...s(l), `${new Date().toLocaleTimeString()}: ${f}`], !0);
  }
  const u = re();
  var p = Ht(),
    c = _(v(p), 4),
    C = v(c),
    I = _(v(C));
  (te(I), (I.__input = [Pt, r]), i(C));
  var d = _(C, 4),
    y = _(v(d));
  (te(y), (y.__input = [Nt, t, o, u, n, r]), i(d), i(c));
  var h = _(c, 2),
    m = v(h),
    T = _(v(m));
  i(m);
  var D = _(m, 2),
    x = _(v(D));
  (i(D), i(h));
  var g = _(h, 2),
    b = _(v(g), 2);
  (Z(
    b,
    21,
    () => s(l),
    W,
    (f, w) => {
      var A = Ot(),
        P = v(A, !0);
      (i(A), N(() => E(P, s(w))), S(f, A));
    }
  ),
    i(b),
    i(g),
    i(p),
    N(() => {
      (E(T, ` ${s(n) ?? ''}`), E(x, ` ${s(r) ?? ''}ms`));
    }),
    ae(
      I,
      () => s(r),
      (f) => $(r, f)
    ),
    ae(
      y,
      () => s(t),
      (f) => $(t, f)
    ),
    S(a, p),
    X());
}
q(['input']);
function Vt(a, e, t, n, r, l, o) {
  const u = a.target;
  ($(e, u.value, !0),
    t(`Search query changed: "${s(e)}"`),
    n(async () => {
      if (!s(e).trim()) {
        $(r, null);
        return;
      }
      $(l, !0);
      try {
        ($(r, await o(s(e)), !0), t(`API call completed for: "${s(e)}"`));
      } catch (p) {
        t(`API call failed: ${p}`);
      } finally {
        $(l, !1);
      }
    }, 300));
}
var Yt = M('<li> </li>'),
  Bt = M('<div><p><strong> </strong></p> <ul></ul></div>'),
  Ft = M('<p><strong>Loading...</strong></p>'),
  qt = M('<div class="log-entry"> </div>'),
  Wt = M(
    '<div class="test-case"><h3>⚡ API Simulation Test</h3> <p>Test debouncing with simulated API calls (search functionality).</p> <div class="test-controls"><label>Search: <input type="text" placeholder="Type to search..."/></label></div> <div class="test-output"><!> <!></div> <div class="test-logs"><h4>Logs:</h4> <div class="logs-container"></div></div></div>'
  );
function Zt(a, e) {
  K(e, !0);
  let t = k(''),
    n = k(null),
    r = k(!1),
    l = k(ne([]));
  function o(b) {
    $(l, [...s(l), `${new Date().toLocaleTimeString()}: ${b}`], !0);
  }
  async function u(b) {
    (o(`API call started for: "${b}"`), await new Promise((w) => setTimeout(w, 800)));
    const f = [`${b} result 1`, `${b} result 2`, `${b} result 3`];
    return { query: b, results: f };
  }
  const p = re();
  var c = Wt(),
    C = _(v(c), 4),
    I = v(C),
    d = _(v(I));
  (te(d), (d.__input = [Vt, t, o, p, n, r, u]), i(I), i(C));
  var y = _(C, 2),
    h = v(y);
  {
    var m = (b) => {
      var f = Bt(),
        w = v(f),
        A = v(w),
        P = v(A);
      (i(A), i(w));
      var R = _(w, 2);
      (Z(
        R,
        21,
        () => s(n).results,
        W,
        (U, V) => {
          var L = Yt(),
            B = v(L, !0);
          (i(L), N(() => E(B, s(V))), S(U, L));
        }
      ),
        i(R),
        i(f),
        N(() => E(P, `Search Results for "${s(n).query ?? ''}":`)),
        S(b, f));
    };
    Y(h, (b) => {
      s(n) && b(m);
    });
  }
  var T = _(h, 2);
  {
    var D = (b) => {
      var f = Ft();
      S(b, f);
    };
    Y(T, (b) => {
      s(r) && b(D);
    });
  }
  i(y);
  var x = _(y, 2),
    g = _(v(x), 2);
  (Z(
    g,
    21,
    () => s(l),
    W,
    (b, f) => {
      var w = qt(),
        A = v(w, !0);
      (i(w), N(() => E(A, s(f))), S(b, w));
    }
  ),
    i(g),
    i(x),
    i(c),
    ae(
      d,
      () => s(t),
      (b) => $(t, b)
    ),
    S(a, c),
    X());
}
q(['input']);
function Kt(a, e, t, n, r) {
  const l = a.target;
  ($(e, l.value, !0),
    t.addLog(`Input changed: "${s(e)}"`),
    n(() => {
      (console.log('Debounced callback executed'),
        $(r, s(e), !0),
        t.addLog(`Debounced callback executed: "${s(e)}"`));
    }, 5e3));
}
var Xt = M(
  '<div class="debounce-component"><div class="test-controls"><label>Input (debounced): <input type="text" placeholder="Type to trigger debounced update..."/></label></div> <div class="test-output"><p><strong>Debounced Output:</strong> </p></div></div>'
);
function zt(a, e) {
  K(e, !0);
  let t = k(''),
    n = k('');
  const r = re();
  (mt(() => {
    e.addLog('DebounceComponent mounted');
  }),
    Le(() => {
      e.addLog('DebounceComponent unmounting - cleanup should prevent pending debounced callbacks');
    }));
  var l = Xt(),
    o = v(l),
    u = v(o),
    p = _(v(u));
  (te(p), (p.__input = [Kt, t, e, r, n]), i(u), i(o));
  var c = _(o, 2),
    C = v(c),
    I = _(v(C));
  (i(C),
    i(c),
    i(l),
    N(() => E(I, ` ${s(n) ?? ''}`)),
    ae(
      p,
      () => s(t),
      (d) => $(t, d)
    ),
    S(a, l),
    X());
}
q(['input']);
function Gt(a, e, t) {
  ($(e, !0), t('Mounting DebounceComponent'));
}
function Jt(a, e, t) {
  ($(e, !1), t('Unmounting DebounceComponent'));
}
function Qt(a, e) {
  $(e, [], !0);
}
var jt = M('<div class="log-entry"> </div>'),
  ea = M(
    '<div class="test-case"><h3>⚡ Cleanup Test</h3> <p>Test that debounced functions are properly cleaned up when components unmount.</p> <p><em>Type in the input, then unmount the component before the 5s delay expires.</em></p> <p><em>The debounced function is called with console.log after 5 seconds.</em></p> <div class="test-controls"><button> </button> <button> </button> <button>Clear Logs</button></div> <div class="component-container"><!></div> <div class="test-logs"><h4>Logs:</h4> <div class="logs-container"></div></div></div>'
  );
function ta(a, e) {
  K(e, !0);
  let t = k(!0),
    n = k(ne([]));
  function r(D) {
    $(n, [...s(n), `${new Date().toLocaleTimeString()}: ${D}`], !0);
  }
  var l = ea(),
    o = _(v(l), 8),
    u = v(o);
  u.__click = [Gt, t, r];
  var p = v(u, !0);
  i(u);
  var c = _(u, 2);
  c.__click = [Jt, t, r];
  var C = v(c, !0);
  i(c);
  var I = _(c, 2);
  ((I.__click = [Qt, n]), i(o));
  var d = _(o, 2),
    y = v(d);
  {
    var h = (D) => {
      zt(D, { addLog: r });
    };
    Y(y, (D) => {
      s(t) && D(h);
    });
  }
  i(d);
  var m = _(d, 2),
    T = _(v(m), 2);
  (Z(
    T,
    21,
    () => s(n),
    W,
    (D, x) => {
      var g = jt(),
        b = v(g, !0);
      (i(g), N(() => E(b, s(x))), S(D, g));
    }
  ),
    i(T),
    i(m),
    i(l),
    N(() => {
      ((u.disabled = s(t)),
        E(p, s(t) ? 'Component Mounted' : 'Mount Component'),
        (c.disabled = !s(t)),
        E(C, s(t) ? 'Unmount Component' : 'Component Unmounted'));
    }),
    S(a, l),
    X());
}
q(['click']);
var aa = (a, e) => e('basic'),
  na = (a, e) => e('rapid'),
  ra = (a, e) => e('async'),
  la = (a, e) => e('delay'),
  sa = (a, e) => e('api'),
  ia = (a, e) => e('cleanup'),
  oa = M(
    '<main class="app"><nav class="sidebar"><h2>Test Cases</h2> <ul><li><button>Basic Debounce</button></li> <li><button>Rapid Calls</button></li> <li><button>Async Functions</button></li> <li><button>Custom Delay</button></li> <li><button>API Simulation</button></li> <li><button>Cleanup Test</button></li></ul></nav> <div class="main-content"><header class="page-header"><h1>use-simple-debounce Svelte 5 Manual Tests</h1> <p><img src="/src/assets/svelte5-logo.svg" alt="Svelte 5" class="framework-logo"/> Svelte 5 Implementation</p></header> <!></div></main>'
  );
function fa(a) {
  let e = k('basic');
  function t(L) {
    $(e, L, !0);
  }
  var n = oa();
  bt((L) => {
    ht.title = 'Svelte5';
  });
  var r = v(n),
    l = _(v(r), 2),
    o = v(l),
    u = v(o);
  let p;
  ((u.__click = [aa, t]), i(o));
  var c = _(o, 2),
    C = v(c);
  let I;
  ((C.__click = [na, t]), i(c));
  var d = _(c, 2),
    y = v(d);
  let h;
  ((y.__click = [ra, t]), i(d));
  var m = _(d, 2),
    T = v(m);
  let D;
  ((T.__click = [la, t]), i(m));
  var x = _(m, 2),
    g = v(x);
  let b;
  ((g.__click = [sa, t]), i(x));
  var f = _(x, 2),
    w = v(f);
  let A;
  ((w.__click = [ia, t]), i(f), i(l), i(r));
  var P = _(r, 2),
    R = _(v(P), 2);
  {
    var U = (L) => {
        xe(L, {});
      },
      V = (L) => {
        var B = oe(),
          le = ve(B);
        {
          var se = (F) => {
              St(F, {});
            },
            ue = (F) => {
              var me = oe(),
                Me = ve(me);
              {
                var Re = (z) => {
                    Rt(z, {});
                  },
                  Ne = (z) => {
                    var Te = oe(),
                      Pe = ve(Te);
                    {
                      var Oe = (G) => {
                          Ut(G, {});
                        },
                        He = (G) => {
                          var ye = oe(),
                            Ue = ve(ye);
                          {
                            var Ve = (J) => {
                                Zt(J, {});
                              },
                              Ye = (J) => {
                                var Ce = oe(),
                                  Be = ve(Ce);
                                {
                                  var Fe = (Q) => {
                                      ta(Q, {});
                                    },
                                    qe = (Q) => {
                                      xe(Q, {});
                                    };
                                  Y(
                                    Be,
                                    (Q) => {
                                      s(e) === 'cleanup' ? Q(Fe) : Q(qe, !1);
                                    },
                                    !0
                                  );
                                }
                                S(J, Ce);
                              };
                            Y(
                              Ue,
                              (J) => {
                                s(e) === 'api' ? J(Ve) : J(Ye, !1);
                              },
                              !0
                            );
                          }
                          S(G, ye);
                        };
                      Y(
                        Pe,
                        (G) => {
                          s(e) === 'delay' ? G(Oe) : G(He, !1);
                        },
                        !0
                      );
                    }
                    S(z, Te);
                  };
                Y(
                  Me,
                  (z) => {
                    s(e) === 'async' ? z(Re) : z(Ne, !1);
                  },
                  !0
                );
              }
              S(F, me);
            };
          Y(
            le,
            (F) => {
              s(e) === 'rapid' ? F(se) : F(ue, !1);
            },
            !0
          );
        }
        S(L, B);
      };
    Y(R, (L) => {
      s(e) === 'basic' ? L(U) : L(V, !1);
    });
  }
  (i(P),
    i(n),
    N(
      (L, B, le, se, ue, F) => {
        ((p = j(u, 1, 'test-button', null, p, L)),
          (I = j(C, 1, 'test-button', null, I, B)),
          (h = j(y, 1, 'test-button', null, h, le)),
          (D = j(T, 1, 'test-button', null, D, se)),
          (b = j(g, 1, 'test-button', null, b, ue)),
          (A = j(w, 1, 'test-button', null, A, F)));
      },
      [
        () => ({ active: s(e) === 'basic' }),
        () => ({ active: s(e) === 'rapid' }),
        () => ({ active: s(e) === 'async' }),
        () => ({ active: s(e) === 'delay' }),
        () => ({ active: s(e) === 'api' }),
        () => ({ active: s(e) === 'cleanup' }),
      ]
    ),
    S(a, n));
}
q(['click']);
export { fa as component };
