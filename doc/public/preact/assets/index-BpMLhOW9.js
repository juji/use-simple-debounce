(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) o(_);
  new MutationObserver((_) => {
    for (const r of _)
      if (r.type === 'childList')
        for (const s of r.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(_) {
    const r = {};
    return (
      _.integrity && (r.integrity = _.integrity),
      _.referrerPolicy && (r.referrerPolicy = _.referrerPolicy),
      _.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : _.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    );
  }
  function o(_) {
    if (_.ep) return;
    _.ep = !0;
    const r = n(_);
    fetch(_.href, r);
  }
})();
var G,
  m,
  Se,
  I,
  ue,
  xe,
  Ae,
  Ee,
  ce,
  ee,
  te,
  F = {},
  Fe = [],
  Je = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  K = Array.isArray;
function D(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function le(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Xe(e, t, n) {
  var o,
    _,
    r,
    s = {};
  for (r in t) r == 'key' ? (o = t[r]) : r == 'ref' ? (_ = t[r]) : (s[r] = t[r]);
  if (
    (arguments.length > 2 && (s.children = arguments.length > 3 ? G.call(arguments, 2) : n),
    typeof e == 'function' && e.defaultProps != null)
  )
    for (r in e.defaultProps) s[r] === void 0 && (s[r] = e.defaultProps[r]);
  return O(e, s, o, _, null);
}
function O(e, t, n, o, _) {
  var r = {
    type: e,
    props: t,
    key: n,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: _ ?? ++Se,
    __i: -1,
    __u: 0,
  };
  return (_ == null && m.vnode != null && m.vnode(r), r);
}
function J(e) {
  return e.children;
}
function q(e, t) {
  ((this.props = e), (this.context = t));
}
function S(e, t) {
  if (t == null) return e.__ ? S(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == 'function' ? S(e) : null;
}
function Me(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Me(e);
  }
}
function de(e) {
  ((!e.__d && (e.__d = !0) && I.push(e) && !j.__r++) || ue != m.debounceRendering) &&
    ((ue = m.debounceRendering) || xe)(j);
}
function j() {
  for (var e, t, n, o, _, r, s, a = 1; I.length; )
    (I.length > a && I.sort(Ae),
      (e = I.shift()),
      (a = I.length),
      e.__d &&
        ((n = void 0),
        (o = void 0),
        (_ = (o = (t = e).__v).__e),
        (r = []),
        (s = []),
        t.__P &&
          (((n = D({}, o)).__v = o.__v + 1),
          m.vnode && m.vnode(n),
          ie(
            t.__P,
            n,
            o,
            t.__n,
            t.__P.namespaceURI,
            32 & o.__u ? [_] : null,
            r,
            _ ?? S(o),
            !!(32 & o.__u),
            s
          ),
          (n.__v = o.__v),
          (n.__.__k[n.__i] = n),
          Oe(r, n, s),
          (o.__e = o.__ = null),
          n.__e != _ && Me(n))));
  j.__r = 0;
}
function Ue(e, t, n, o, _, r, s, a, h, i, p) {
  var l,
    d,
    u,
    f,
    k,
    N,
    v,
    g = (o && o.__k) || Fe,
    L = t.length;
  for (h = Ze(n, t, g, h, L), l = 0; l < L; l++)
    (u = n.__k[l]) != null &&
      ((d = u.__i == -1 ? F : g[u.__i] || F),
      (u.__i = l),
      (N = ie(e, u, d, _, r, s, a, h, i, p)),
      (f = u.__e),
      u.ref && d.ref != u.ref && (d.ref && se(d.ref, null, u), p.push(u.ref, u.__c || f, u)),
      k == null && f != null && (k = f),
      (v = !!(4 & u.__u)) || d.__k === u.__k
        ? (h = Re(u, h, e, v))
        : typeof u.type == 'function' && N !== void 0
          ? (h = N)
          : f && (h = f.nextSibling),
      (u.__u &= -7));
  return ((n.__e = k), h);
}
function Ze(e, t, n, o, _) {
  var r,
    s,
    a,
    h,
    i,
    p = n.length,
    l = p,
    d = 0;
  for (e.__k = new Array(_), r = 0; r < _; r++)
    (s = t[r]) != null && typeof s != 'boolean' && typeof s != 'function'
      ? ((h = r + d),
        ((s = e.__k[r] =
          typeof s == 'string' ||
          typeof s == 'number' ||
          typeof s == 'bigint' ||
          s.constructor == String
            ? O(null, s, null, null, null)
            : K(s)
              ? O(J, { children: s }, null, null, null)
              : s.constructor == null && s.__b > 0
                ? O(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
                : s).__ = e),
        (s.__b = e.__b + 1),
        (a = null),
        (i = s.__i = Qe(s, n, h, l)) != -1 && (l--, (a = n[i]) && (a.__u |= 2)),
        a == null || a.__v == null
          ? (i == -1 && (_ > p ? d-- : _ < p && d++), typeof s.type != 'function' && (s.__u |= 4))
          : i != h && (i == h - 1 ? d-- : i == h + 1 ? d++ : (i > h ? d-- : d++, (s.__u |= 4))))
      : (e.__k[r] = null);
  if (l)
    for (r = 0; r < p; r++)
      (a = n[r]) != null && (2 & a.__u) == 0 && (a.__e == o && (o = S(a)), Be(a, a));
  return o;
}
function Re(e, t, n, o) {
  var _, r;
  if (typeof e.type == 'function') {
    for (_ = e.__k, r = 0; _ && r < _.length; r++) _[r] && ((_[r].__ = e), (t = Re(_[r], t, n, o)));
    return t;
  }
  e.__e != t &&
    (o && (t && e.type && !t.parentNode && (t = S(e)), n.insertBefore(e.__e, t || null)),
    (t = e.__e));
  do t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Qe(e, t, n, o) {
  var _,
    r,
    s,
    a = e.key,
    h = e.type,
    i = t[n],
    p = i != null && (2 & i.__u) == 0;
  if ((i === null && e.key == null) || (p && a == i.key && h == i.type)) return n;
  if (o > (p ? 1 : 0)) {
    for (_ = n - 1, r = n + 1; _ >= 0 || r < t.length; )
      if (
        (i = t[(s = _ >= 0 ? _-- : r++)]) != null &&
        (2 & i.__u) == 0 &&
        a == i.key &&
        h == i.type
      )
        return s;
  }
  return -1;
}
function he(e, t, n) {
  t[0] == '-'
    ? e.setProperty(t, n ?? '')
    : (e[t] = n == null ? '' : typeof n != 'number' || Je.test(t) ? n : n + 'px');
}
function R(e, t, n, o, _) {
  var r, s;
  e: if (t == 'style')
    if (typeof n == 'string') e.style.cssText = n;
    else {
      if ((typeof o == 'string' && (e.style.cssText = o = ''), o))
        for (t in o) (n && t in n) || he(e.style, t, '');
      if (n) for (t in n) (o && n[t] == o[t]) || he(e.style, t, n[t]);
    }
  else if (t[0] == 'o' && t[1] == 'n')
    ((r = t != (t = t.replace(Ee, '$1'))),
      (s = t.toLowerCase()),
      (t = s in e || t == 'onFocusOut' || t == 'onFocusIn' ? s.slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + r] = n),
      n
        ? o
          ? (n.u = o.u)
          : ((n.u = ce), e.addEventListener(t, r ? te : ee, r))
        : e.removeEventListener(t, r ? te : ee, r));
  else {
    if (_ == 'http://www.w3.org/2000/svg') t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
    else if (
      t != 'width' &&
      t != 'height' &&
      t != 'href' &&
      t != 'list' &&
      t != 'form' &&
      t != 'tabIndex' &&
      t != 'download' &&
      t != 'rowSpan' &&
      t != 'colSpan' &&
      t != 'role' &&
      t != 'popover' &&
      t in e
    )
      try {
        e[t] = n ?? '';
        break e;
      } catch {}
    typeof n == 'function' ||
      (n == null || (n === !1 && t[4] != '-')
        ? e.removeAttribute(t)
        : e.setAttribute(t, t == 'popover' && n == 1 ? '' : n));
  }
}
function pe(e) {
  return function (t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = ce++;
      else if (t.t < n.u) return;
      return n(m.event ? m.event(t) : t);
    }
  };
}
function ie(e, t, n, o, _, r, s, a, h, i) {
  var p,
    l,
    d,
    u,
    f,
    k,
    N,
    v,
    g,
    L,
    H,
    M,
    A,
    ae,
    U,
    E,
    X,
    w = t.type;
  if (t.constructor != null) return null;
  (128 & n.__u && ((h = !!(32 & n.__u)), (r = [(a = t.__e = n.__e)])), (p = m.__b) && p(t));
  e: if (typeof w == 'function')
    try {
      if (
        ((v = t.props),
        (g = 'prototype' in w && w.prototype.render),
        (L = (p = w.contextType) && o[p.__c]),
        (H = p ? (L ? L.props.value : p.__) : o),
        n.__c
          ? (N = (l = t.__c = n.__c).__ = l.__E)
          : (g
              ? (t.__c = l = new w(v, H))
              : ((t.__c = l = new q(v, H)), (l.constructor = w), (l.render = tt)),
            L && L.sub(l),
            (l.props = v),
            l.state || (l.state = {}),
            (l.context = H),
            (l.__n = o),
            (d = l.__d = !0),
            (l.__h = []),
            (l._sb = [])),
        g && l.__s == null && (l.__s = l.state),
        g &&
          w.getDerivedStateFromProps != null &&
          (l.__s == l.state && (l.__s = D({}, l.__s)),
          D(l.__s, w.getDerivedStateFromProps(v, l.__s))),
        (u = l.props),
        (f = l.state),
        (l.__v = t),
        d)
      )
        (g &&
          w.getDerivedStateFromProps == null &&
          l.componentWillMount != null &&
          l.componentWillMount(),
          g && l.componentDidMount != null && l.__h.push(l.componentDidMount));
      else {
        if (
          (g &&
            w.getDerivedStateFromProps == null &&
            v !== u &&
            l.componentWillReceiveProps != null &&
            l.componentWillReceiveProps(v, H),
          (!l.__e &&
            l.shouldComponentUpdate != null &&
            l.shouldComponentUpdate(v, l.__s, H) === !1) ||
            t.__v == n.__v)
        ) {
          for (
            t.__v != n.__v && ((l.props = v), (l.state = l.__s), (l.__d = !1)),
              t.__e = n.__e,
              t.__k = n.__k,
              t.__k.some(function (P) {
                P && (P.__ = t);
              }),
              M = 0;
            M < l._sb.length;
            M++
          )
            l.__h.push(l._sb[M]);
          ((l._sb = []), l.__h.length && s.push(l));
          break e;
        }
        (l.componentWillUpdate != null && l.componentWillUpdate(v, l.__s, H),
          g &&
            l.componentDidUpdate != null &&
            l.__h.push(function () {
              l.componentDidUpdate(u, f, k);
            }));
      }
      if (((l.context = H), (l.props = v), (l.__P = e), (l.__e = !1), (A = m.__r), (ae = 0), g)) {
        for (
          l.state = l.__s, l.__d = !1, A && A(t), p = l.render(l.props, l.state, l.context), U = 0;
          U < l._sb.length;
          U++
        )
          l.__h.push(l._sb[U]);
        l._sb = [];
      } else
        do
          ((l.__d = !1), A && A(t), (p = l.render(l.props, l.state, l.context)), (l.state = l.__s));
        while (l.__d && ++ae < 25);
      ((l.state = l.__s),
        l.getChildContext != null && (o = D(D({}, o), l.getChildContext())),
        g && !d && l.getSnapshotBeforeUpdate != null && (k = l.getSnapshotBeforeUpdate(u, f)),
        (E = p),
        p != null && p.type === J && p.key == null && (E = qe(p.props.children)),
        (a = Ue(e, K(E) ? E : [E], t, n, o, _, r, s, a, h, i)),
        (l.base = t.__e),
        (t.__u &= -161),
        l.__h.length && s.push(l),
        N && (l.__E = l.__ = null));
    } catch (P) {
      if (((t.__v = null), h || r != null))
        if (P.then) {
          for (t.__u |= h ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
          ((r[r.indexOf(a)] = null), (t.__e = a));
        } else {
          for (X = r.length; X--; ) le(r[X]);
          ne(t);
        }
      else ((t.__e = n.__e), (t.__k = n.__k), P.then || ne(t));
      m.__e(P, t, n);
    }
  else
    r == null && t.__v == n.__v
      ? ((t.__k = n.__k), (t.__e = n.__e))
      : (a = t.__e = et(n.__e, t, n, o, _, r, s, h, i));
  return ((p = m.diffed) && p(t), 128 & t.__u ? void 0 : a);
}
function ne(e) {
  (e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(ne));
}
function Oe(e, t, n) {
  for (var o = 0; o < n.length; o++) se(n[o], n[++o], n[++o]);
  (m.__c && m.__c(t, e),
    e.some(function (_) {
      try {
        ((e = _.__h),
          (_.__h = []),
          e.some(function (r) {
            r.call(_);
          }));
      } catch (r) {
        m.__e(r, _.__v);
      }
    }));
}
function qe(e) {
  return typeof e != 'object' || e == null || (e.__b && e.__b > 0)
    ? e
    : K(e)
      ? e.map(qe)
      : D({}, e);
}
function et(e, t, n, o, _, r, s, a, h) {
  var i,
    p,
    l,
    d,
    u,
    f,
    k,
    N = n.props,
    v = t.props,
    g = t.type;
  if (
    (g == 'svg'
      ? (_ = 'http://www.w3.org/2000/svg')
      : g == 'math'
        ? (_ = 'http://www.w3.org/1998/Math/MathML')
        : _ || (_ = 'http://www.w3.org/1999/xhtml'),
    r != null)
  ) {
    for (i = 0; i < r.length; i++)
      if ((u = r[i]) && 'setAttribute' in u == !!g && (g ? u.localName == g : u.nodeType == 3)) {
        ((e = u), (r[i] = null));
        break;
      }
  }
  if (e == null) {
    if (g == null) return document.createTextNode(v);
    ((e = document.createElementNS(_, g, v.is && v)),
      a && (m.__m && m.__m(t, r), (a = !1)),
      (r = null));
  }
  if (g == null) N === v || (a && e.data == v) || (e.data = v);
  else {
    if (((r = r && G.call(e.childNodes)), (N = n.props || F), !a && r != null))
      for (N = {}, i = 0; i < e.attributes.length; i++) N[(u = e.attributes[i]).name] = u.value;
    for (i in N)
      if (((u = N[i]), i != 'children')) {
        if (i == 'dangerouslySetInnerHTML') l = u;
        else if (!(i in v)) {
          if ((i == 'value' && 'defaultValue' in v) || (i == 'checked' && 'defaultChecked' in v))
            continue;
          R(e, i, null, u, _);
        }
      }
    for (i in v)
      ((u = v[i]),
        i == 'children'
          ? (d = u)
          : i == 'dangerouslySetInnerHTML'
            ? (p = u)
            : i == 'value'
              ? (f = u)
              : i == 'checked'
                ? (k = u)
                : (a && typeof u != 'function') || N[i] === u || R(e, i, u, N[i], _));
    if (p)
      (a || (l && (p.__html == l.__html || p.__html == e.innerHTML)) || (e.innerHTML = p.__html),
        (t.__k = []));
    else if (
      (l && (e.innerHTML = ''),
      Ue(
        t.type == 'template' ? e.content : e,
        K(d) ? d : [d],
        t,
        n,
        o,
        g == 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : _,
        r,
        s,
        r ? r[0] : n.__k && S(n, 0),
        a,
        h
      ),
      r != null)
    )
      for (i = r.length; i--; ) le(r[i]);
    a ||
      ((i = 'value'),
      g == 'progress' && f == null
        ? e.removeAttribute('value')
        : f != null &&
          (f !== e[i] || (g == 'progress' && !f) || (g == 'option' && f != N[i])) &&
          R(e, i, f, N[i], _),
      (i = 'checked'),
      k != null && k != e[i] && R(e, i, k, N[i], _));
  }
  return e;
}
function se(e, t, n) {
  try {
    if (typeof e == 'function') {
      var o = typeof e.__u == 'function';
      (o && e.__u(), (o && t == null) || (e.__u = e(t)));
    } else e.current = t;
  } catch (_) {
    m.__e(_, n);
  }
}
function Be(e, t, n) {
  var o, _;
  if (
    (m.unmount && m.unmount(e),
    (o = e.ref) && ((o.current && o.current != e.__e) || se(o, null, t)),
    (o = e.__c) != null)
  ) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        m.__e(r, t);
      }
    o.base = o.__P = null;
  }
  if ((o = e.__k))
    for (_ = 0; _ < o.length; _++) o[_] && Be(o[_], t, n || typeof e.type != 'function');
  (n || le(e.__e), (e.__c = e.__ = e.__e = void 0));
}
function tt(e, t, n) {
  return this.constructor(e, n);
}
function nt(e, t, n) {
  var o, _, r, s;
  (t == document && (t = document.documentElement),
    m.__ && m.__(e, t),
    (_ = (o = !1) ? null : t.__k),
    (r = []),
    (s = []),
    ie(
      t,
      (e = t.__k = Xe(J, null, [e])),
      _ || F,
      F,
      t.namespaceURI,
      _ ? null : t.firstChild ? G.call(t.childNodes) : null,
      r,
      _ ? _.__e : t.firstChild,
      o,
      s
    ),
    Oe(r, e, s));
}
((G = Fe.slice),
  (m = {
    __e: function (e, t, n, o) {
      for (var _, r, s; (t = t.__); )
        if ((_ = t.__c) && !_.__)
          try {
            if (
              ((r = _.constructor) &&
                r.getDerivedStateFromError != null &&
                (_.setState(r.getDerivedStateFromError(e)), (s = _.__d)),
              _.componentDidCatch != null && (_.componentDidCatch(e, o || {}), (s = _.__d)),
              s)
            )
              return (_.__E = _);
          } catch (a) {
            e = a;
          }
      throw e;
    },
  }),
  (Se = 0),
  (q.prototype.setState = function (e, t) {
    var n;
    ((n = this.__s != null && this.__s != this.state ? this.__s : (this.__s = D({}, this.state))),
      typeof e == 'function' && (e = e(D({}, n), this.props)),
      e && D(n, e),
      e != null && this.__v && (t && this._sb.push(t), de(this)));
  }),
  (q.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), de(this));
  }),
  (q.prototype.render = J),
  (I = []),
  (xe = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
  (Ae = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (j.__r = 0),
  (Ee = /(PointerCapture)$|Capture$/i),
  (ce = 0),
  (ee = pe(!1)),
  (te = pe(!0)));
var _t = 0;
function c(e, t, n, o, _, r) {
  t || (t = {});
  var s,
    a,
    h = t;
  if ('ref' in h) for (a in ((h = {}), t)) a == 'ref' ? (s = t[a]) : (h[a] = t[a]);
  var i = {
    type: e,
    props: h,
    key: n,
    ref: s,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --_t,
    __i: -1,
    __u: 0,
    __source: _,
    __self: r,
  };
  if (typeof e == 'function' && (s = e.defaultProps)) for (a in s) h[a] === void 0 && (h[a] = s[a]);
  return (m.vnode && m.vnode(i), i);
}
var z,
  $,
  Z,
  fe,
  V = 0,
  We = [],
  C = m,
  me = C.__b,
  ve = C.__r,
  ge = C.diffed,
  ye = C.__c,
  be = C.unmount,
  $e = C.__;
function je(e, t) {
  (C.__h && C.__h($, e, V || t), (V = 0));
  var n = $.__H || ($.__H = { __: [], __h: [] });
  return (e >= n.__.length && n.__.push({}), n.__[e]);
}
function y(e) {
  return ((V = 1), ot(ze, e));
}
function ot(e, t, n) {
  var o = je(z++, 2);
  if (
    ((o.t = e),
    !o.__c &&
      ((o.__ = [
        ze(void 0, t),
        function (a) {
          var h = o.__N ? o.__N[0] : o.__[0],
            i = o.t(h, a);
          h !== i && ((o.__N = [i, o.__[1]]), o.__c.setState({}));
        },
      ]),
      (o.__c = $),
      !$.__f))
  ) {
    var _ = function (a, h, i) {
      if (!o.__c.__H) return !0;
      var p = o.__c.__H.__.filter(function (d) {
        return !!d.__c;
      });
      if (
        p.every(function (d) {
          return !d.__N;
        })
      )
        return !r || r.call(this, a, h, i);
      var l = o.__c.props !== a;
      return (
        p.forEach(function (d) {
          if (d.__N) {
            var u = d.__[0];
            ((d.__ = d.__N), (d.__N = void 0), u !== d.__[0] && (l = !0));
          }
        }),
        (r && r.call(this, a, h, i)) || l
      );
    };
    $.__f = !0;
    var r = $.shouldComponentUpdate,
      s = $.componentWillUpdate;
    (($.componentWillUpdate = function (a, h, i) {
      if (this.__e) {
        var p = r;
        ((r = void 0), _(a, h, i), (r = p));
      }
      s && s.call(this, a, h, i);
    }),
      ($.shouldComponentUpdate = _));
  }
  return o.__N || o.__;
}
function rt(e) {
  return (
    (V = 5),
    ct(function () {
      return { current: e };
    }, [])
  );
}
function ct(e, t) {
  var n = je(z++, 7);
  return (st(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__);
}
function lt() {
  for (var e; (e = We.shift()); )
    if (e.__P && e.__H)
      try {
        (e.__H.__h.forEach(B), e.__H.__h.forEach(_e), (e.__H.__h = []));
      } catch (t) {
        ((e.__H.__h = []), C.__e(t, e.__v));
      }
}
((C.__b = function (e) {
  (($ = null), me && me(e));
}),
  (C.__ = function (e, t) {
    (e && t.__k && t.__k.__m && (e.__m = t.__k.__m), $e && $e(e, t));
  }),
  (C.__r = function (e) {
    (ve && ve(e), (z = 0));
    var t = ($ = e.__c).__H;
    (t &&
      (Z === $
        ? ((t.__h = []),
          ($.__h = []),
          t.__.forEach(function (n) {
            (n.__N && (n.__ = n.__N), (n.u = n.__N = void 0));
          }))
        : (t.__h.forEach(B), t.__h.forEach(_e), (t.__h = []), (z = 0))),
      (Z = $));
  }),
  (C.diffed = function (e) {
    ge && ge(e);
    var t = e.__c;
    (t &&
      t.__H &&
      (t.__H.__h.length &&
        ((We.push(t) !== 1 && fe === C.requestAnimationFrame) ||
          ((fe = C.requestAnimationFrame) || it)(lt)),
      t.__H.__.forEach(function (n) {
        (n.u && (n.__H = n.u), (n.u = void 0));
      })),
      (Z = $ = null));
  }),
  (C.__c = function (e, t) {
    (t.some(function (n) {
      try {
        (n.__h.forEach(B),
          (n.__h = n.__h.filter(function (o) {
            return !o.__ || _e(o);
          })));
      } catch (o) {
        (t.some(function (_) {
          _.__h && (_.__h = []);
        }),
          (t = []),
          C.__e(o, n.__v));
      }
    }),
      ye && ye(e, t));
  }),
  (C.unmount = function (e) {
    be && be(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (o) {
        try {
          B(o);
        } catch (_) {
          t = _;
        }
      }),
      (n.__H = void 0),
      t && C.__e(t, n.__v));
  }));
var Ce = typeof requestAnimationFrame == 'function';
function it(e) {
  var t,
    n = function () {
      (clearTimeout(o), Ce && cancelAnimationFrame(t), setTimeout(e));
    },
    o = setTimeout(n, 35);
  Ce && (t = requestAnimationFrame(n));
}
function B(e) {
  var t = $,
    n = e.__c;
  (typeof n == 'function' && ((e.__c = void 0), n()), ($ = t));
}
function _e(e) {
  var t = $;
  ((e.__c = e.__()), ($ = t));
}
function st(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (n, o) {
      return n !== e[o];
    })
  );
}
function ze(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
var Ve;
((Ve = {
  __e: function (e, t, n, o) {
    for (var _, r, s; (t = t.__); )
      if ((_ = t.__c) && !_.__)
        try {
          if (
            ((r = _.constructor) &&
              r.getDerivedStateFromError != null &&
              (_.setState(r.getDerivedStateFromError(e)), (s = _.__d)),
            _.componentDidCatch != null && (_.componentDidCatch(e, o || {}), (s = _.__d)),
            s)
          )
            return (_.__E = _);
        } catch (a) {
          e = a;
        }
    throw e;
  },
}),
  typeof Promise == 'function' && Promise.prototype.then.bind(Promise.resolve()));
var Y,
  T,
  Q,
  Ne,
  oe = 0,
  Ye = [],
  b = Ve,
  Te = b.__b,
  ke = b.__r,
  we = b.diffed,
  De = b.__c,
  Le = b.unmount,
  He = b.__;
function Ge(e, t) {
  (b.__h && b.__h(T, e, oe || t), (oe = 0));
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return (e >= n.__.length && n.__.push({}), n.__[e]);
}
function at(e, t) {
  var n = Ge(Y++, 3);
  !b.__s && Ke(n.__H, t) && ((n.__ = e), (n.u = t), T.__H.__h.push(n));
}
function ut(e) {
  return (
    (oe = 5),
    dt(function () {
      return { current: e };
    }, [])
  );
}
function dt(e, t) {
  var n = Ge(Y++, 7);
  return (Ke(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__);
}
function ht() {
  for (var e; (e = Ye.shift()); )
    if (e.__P && e.__H)
      try {
        (e.__H.__h.forEach(W), e.__H.__h.forEach(re), (e.__H.__h = []));
      } catch (t) {
        ((e.__H.__h = []), b.__e(t, e.__v));
      }
}
((b.__b = function (e) {
  ((T = null), Te && Te(e));
}),
  (b.__ = function (e, t) {
    (e && t.__k && t.__k.__m && (e.__m = t.__k.__m), He && He(e, t));
  }),
  (b.__r = function (e) {
    (ke && ke(e), (Y = 0));
    var t = (T = e.__c).__H;
    (t &&
      (Q === T
        ? ((t.__h = []),
          (T.__h = []),
          t.__.forEach(function (n) {
            (n.__N && (n.__ = n.__N), (n.u = n.__N = void 0));
          }))
        : (t.__h.forEach(W), t.__h.forEach(re), (t.__h = []), (Y = 0))),
      (Q = T));
  }),
  (b.diffed = function (e) {
    we && we(e);
    var t = e.__c;
    (t &&
      t.__H &&
      (t.__H.__h.length &&
        ((Ye.push(t) !== 1 && Ne === b.requestAnimationFrame) ||
          ((Ne = b.requestAnimationFrame) || pt)(ht)),
      t.__H.__.forEach(function (n) {
        (n.u && (n.__H = n.u), (n.u = void 0));
      })),
      (Q = T = null));
  }),
  (b.__c = function (e, t) {
    (t.some(function (n) {
      try {
        (n.__h.forEach(W),
          (n.__h = n.__h.filter(function (o) {
            return !o.__ || re(o);
          })));
      } catch (o) {
        (t.some(function (_) {
          _.__h && (_.__h = []);
        }),
          (t = []),
          b.__e(o, n.__v));
      }
    }),
      De && De(e, t));
  }),
  (b.unmount = function (e) {
    Le && Le(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (o) {
        try {
          W(o);
        } catch (_) {
          t = _;
        }
      }),
      (n.__H = void 0),
      t && b.__e(t, n.__v));
  }));
var Ie = typeof requestAnimationFrame == 'function';
function pt(e) {
  var t,
    n = function () {
      (clearTimeout(o), Ie && cancelAnimationFrame(t), setTimeout(e));
    },
    o = setTimeout(n, 35);
  Ie && (t = requestAnimationFrame(n));
}
function W(e) {
  var t = T,
    n = e.__c;
  (typeof n == 'function' && ((e.__c = void 0), n()), (T = t));
}
function re(e) {
  var t = T;
  ((e.__c = e.__()), (T = t));
}
function Ke(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (n, o) {
      return n !== e[o];
    })
  );
}
function x() {
  const e = ut(null);
  return (
    at(
      () => () => {
        e.current && clearTimeout(e.current);
      },
      []
    ),
    (t, n = 300) => {
      (e.current && clearTimeout(e.current),
        (e.current = setTimeout(() => {
          (t(), (e.current = null));
        }, n)));
    }
  );
}
function Pe() {
  const [e, t] = y(''),
    [n, o] = y(''),
    [_, r] = y([]),
    s = (i) => {
      r((p) => [...p, `${new Date().toLocaleTimeString()}: ${i}`]);
    },
    a = x();
  return c('div', {
    className: 'test-case',
    children: [
      c('h3', { children: '⚡ Basic Debounce Test' }),
      c('p', { children: 'Test basic debouncing with a 500ms delay.' }),
      c('div', {
        className: 'test-controls',
        children: c('label', {
          children: [
            'Input:',
            c('input', {
              type: 'text',
              value: e,
              onInput: (i) => {
                const l = i.target.value;
                (t(l),
                  s(`Input changed: "${l}"`),
                  a(() => {
                    (o(l), s(`Debounced update: "${l}"`));
                  }, 500));
              },
              placeholder: 'Type something...',
            }),
          ],
        }),
      }),
      c('div', {
        className: 'test-output',
        children: c('p', { children: [c('strong', { children: 'Output:' }), ' ', n] }),
      }),
      c('div', {
        className: 'test-logs',
        children: [
          c('h4', { children: 'Logs:' }),
          c('div', {
            className: 'logs-container',
            children: _.map((i, p) => c('div', { className: 'log-entry', children: i }, p)),
          }),
        ],
      }),
    ],
  });
}
function ft() {
  const [e, t] = y(0),
    [n, o] = y(0),
    [_, r] = y([]),
    s = (l) => {
      r((d) => [...d, `${new Date().toLocaleTimeString()}: ${l}`]);
    },
    a = x(),
    h = rt(0);
  return c('div', {
    className: 'test-case',
    children: [
      c('h3', { children: '⚡ Rapid Calls Test' }),
      c('p', { children: 'Test debouncing with rapid successive calls (10 calls in 500ms).' }),
      c('div', {
        className: 'test-controls',
        children: [
          c('button', {
            onClick: () => {
              for (let l = 0; l < 10; l++)
                setTimeout(() => {
                  t((d) => {
                    const u = d + 1;
                    return (
                      s(`Immediate count: ${u}`),
                      a(() => {
                        ((h.current = h.current + 1), o(h.current), s(`Debounced count: ${u}`));
                      }, 300),
                      u
                    );
                  });
                }, l * 50);
            },
            children: 'Trigger Rapid Calls',
          }),
          c('button', {
            onClick: () => {
              (t(0), o(0), (h.current = 0), r([]));
            },
            children: 'Reset',
          }),
        ],
      }),
      c('div', {
        className: 'test-output',
        children: [
          c('p', { children: [c('strong', { children: 'Immediate Count:' }), ' ', e] }),
          c('p', { children: [c('strong', { children: 'Debounced Count:' }), ' ', n] }),
        ],
      }),
      c('div', {
        className: 'test-logs',
        children: [
          c('h4', { children: 'Logs:' }),
          c('div', {
            className: 'logs-container',
            children: _.map((l, d) => c('div', { className: 'log-entry', children: l }, d)),
          }),
        ],
      }),
    ],
  });
}
function mt() {
  const [e, t] = y(''),
    [n, o] = y(''),
    [_, r] = y(!1),
    [s, a] = y([]),
    h = (l) => {
      a((d) => [...d, `${new Date().toLocaleTimeString()}: ${l}`]);
    },
    i = x();
  return c('div', {
    className: 'test-case',
    children: [
      c('h3', { children: '⚡ Async Test' }),
      c('p', {
        children: 'Test debouncing with async functions (simulates API call with 1s delay).',
      }),
      c('div', {
        className: 'test-controls',
        children: c('label', {
          children: [
            'Input:',
            c('input', {
              type: 'text',
              value: e,
              onInput: (l) => {
                const u = l.target.value;
                (t(u),
                  h(`Input changed: "${u}"`),
                  i(async () => {
                    (r(!0),
                      h(`Starting async operation for: "${u}"`),
                      await new Promise((k) => setTimeout(k, 1e3)));
                    const f = u.toUpperCase();
                    (o(f), r(!1), h(`Async operation completed: "${f}"`));
                  }, 500));
              },
              placeholder: 'Type to trigger async operation...',
            }),
          ],
        }),
      }),
      c('div', {
        className: 'test-output',
        children: [
          c('p', { children: [c('strong', { children: 'Result:' }), ' ', n] }),
          c('p', { children: [c('strong', { children: 'Loading:' }), ' ', _ ? 'Yes' : 'No'] }),
        ],
      }),
      c('div', {
        className: 'test-logs',
        children: [
          c('h4', { children: 'Logs:' }),
          c('div', {
            className: 'logs-container',
            children: s.map((l, d) => c('div', { className: 'log-entry', children: l }, d)),
          }),
        ],
      }),
    ],
  });
}
function vt() {
  const [e, t] = y(''),
    [n, o] = y(''),
    [_, r] = y(1e3),
    [s, a] = y([]),
    h = (d) => {
      a((u) => [...u, `${new Date().toLocaleTimeString()}: ${d}`]);
    },
    i = x();
  return c('div', {
    className: 'test-case',
    children: [
      c('h3', { children: '⚡ Custom Delay Test' }),
      c('p', { children: 'Test debouncing with adjustable delay.' }),
      c('div', {
        className: 'test-controls',
        children: [
          c('label', {
            children: [
              'Delay (ms):',
              c('input', {
                type: 'number',
                value: _,
                onInput: (d) => {
                  const u = d.target;
                  r(Number(u.value));
                },
                min: '100',
                max: '5000',
                step: '100',
              }),
            ],
          }),
          c('br', {}),
          c('label', {
            children: [
              'Input:',
              c('input', {
                type: 'text',
                value: e,
                onInput: (d) => {
                  const f = d.target.value;
                  (t(f),
                    h(`Input changed: "${f}"`),
                    i(() => {
                      (o(f), h(`Debounced update: "${f}"`));
                    }, _));
                },
                placeholder: 'Type something...',
              }),
            ],
          }),
        ],
      }),
      c('div', {
        className: 'test-output',
        children: [
          c('p', { children: [c('strong', { children: 'Output:' }), ' ', n] }),
          c('p', { children: [c('strong', { children: 'Current Delay:' }), ' ', _, 'ms'] }),
        ],
      }),
      c('div', {
        className: 'test-logs',
        children: [
          c('h4', { children: 'Logs:' }),
          c('div', {
            className: 'logs-container',
            children: s.map((d, u) => c('div', { className: 'log-entry', children: d }, u)),
          }),
        ],
      }),
    ],
  });
}
function gt() {
  const [e, t] = y(''),
    [n, o] = y([]),
    [_, r] = y(!1),
    [s, a] = y([]),
    h = (d) => {
      a((u) => [...u, `${new Date().toLocaleTimeString()}: ${d}`]);
    },
    i = x(),
    p = async (d) => {
      if (!d.trim()) {
        o([]);
        return;
      }
      (r(!0), h(`Searching for: "${d}"`));
      try {
        await new Promise((f) => setTimeout(f, 500));
        const u = [`${d} result 1`, `${d} result 2`, `${d} result 3`];
        (o(u), h(`Found ${u.length} results`));
      } catch (u) {
        h(`Search failed: ${u}`);
      } finally {
        r(!1);
      }
    };
  return c('div', {
    className: 'test-case',
    children: [
      c('h3', { children: '⚡ API Simulation Test' }),
      c('p', { children: 'Test debouncing with simulated API calls (300ms delay).' }),
      c('div', {
        className: 'test-controls',
        children: c('label', {
          children: [
            'Search:',
            c('input', {
              type: 'text',
              value: e,
              onInput: (d) => {
                const f = d.target.value;
                (t(f), i(() => p(f), 300));
              },
              placeholder: 'Type to search...',
            }),
          ],
        }),
      }),
      c('div', {
        className: 'test-output',
        children: [
          c('p', { children: [c('strong', { children: 'Loading:' }), ' ', _ ? 'Yes' : 'No'] }),
          c('div', {
            className: 'results',
            children: [
              c('h4', { children: 'Results:' }),
              n.length === 0 && !_ && e && c('p', { children: 'No results found' }),
              c('ul', { children: n.map((d, u) => c('li', { children: d }, u)) }),
            ],
          }),
        ],
      }),
      c('div', {
        className: 'test-logs',
        children: [
          c('h4', { children: 'Logs:' }),
          c('div', {
            className: 'logs-container',
            children: s.map((d, u) => c('div', { className: 'log-entry', children: d }, u)),
          }),
        ],
      }),
    ],
  });
}
function yt({ addLog: e }) {
  const [t, n] = y(''),
    [o, _] = y(''),
    r = x();
  return c('div', {
    className: 'debounce-component',
    children: [
      c('div', {
        className: 'test-controls',
        children: c('label', {
          children: [
            'Input (debounced):',
            c('input', {
              type: 'text',
              value: t,
              onInput: (a) => {
                const i = a.target.value;
                (n(i),
                  e(`Input changed: "${i}"`),
                  r(() => {
                    (console.log('Debounced callback executed'),
                      _(i),
                      e(`Debounced callback executed: "${i}"`));
                  }, 5e3));
              },
              placeholder: 'Type to trigger debounced update...',
            }),
          ],
        }),
      }),
      c('div', {
        className: 'test-output',
        children: c('p', { children: [c('strong', { children: 'Debounced Output:' }), ' ', o] }),
      }),
    ],
  });
}
function bt() {
  const [e, t] = y(!0),
    [n, o] = y([]),
    _ = (h) => {
      o((i) => [...i, `${new Date().toLocaleTimeString()}: ${h}`]);
    };
  return c('div', {
    className: 'test-case',
    children: [
      c('h3', { children: '⚡ Cleanup Test' }),
      c('p', {
        children: 'Test that debounced functions are properly cleaned up when components unmount.',
      }),
      c('p', {
        children: c('em', {
          children: 'Type in the input, then unmount the component before the 5s delay expires.',
        }),
      }),
      c('p', {
        children: c('em', {
          children: 'The debounced function is called with console.log after 5 seconds.',
        }),
      }),
      c('div', {
        className: 'test-controls',
        children: [
          c('button', {
            onClick: () => {
              (t(!0), _('Mounting DebounceComponent'));
            },
            disabled: e,
            children: e ? 'Component Mounted' : 'Mount Component',
          }),
          c('button', {
            onClick: () => {
              (t(!1), _('Unmounting DebounceComponent'));
            },
            disabled: !e,
            children: e ? 'Unmount Component' : 'Component Unmounted',
          }),
          c('button', {
            onClick: () => {
              o([]);
            },
            children: 'Clear Logs',
          }),
        ],
      }),
      c('div', { className: 'component-container', children: e && c(yt, { addLog: _ }) }),
      c('div', {
        className: 'test-logs',
        children: [
          c('h4', { children: 'Logs:' }),
          c('div', {
            className: 'logs-container',
            children: n.map((h, i) => c('div', { className: 'log-entry', children: h }, i)),
          }),
        ],
      }),
    ],
  });
}
function $t() {
  const [e, t] = y('basic');
  return c('div', {
    className: 'app',
    children: [
      c('nav', {
        className: 'sidebar',
        children: [
          c('h2', { children: 'Test Cases' }),
          c('ul', {
            children: [
              c('li', {
                children: c('button', {
                  className: `test-button ${e === 'basic' ? 'active' : ''}`,
                  onClick: () => t('basic'),
                  children: 'Basic Debounce',
                }),
              }),
              c('li', {
                children: c('button', {
                  className: `test-button ${e === 'rapid' ? 'active' : ''}`,
                  onClick: () => t('rapid'),
                  children: 'Rapid Calls',
                }),
              }),
              c('li', {
                children: c('button', {
                  className: `test-button ${e === 'async' ? 'active' : ''}`,
                  onClick: () => t('async'),
                  children: 'Async Functions',
                }),
              }),
              c('li', {
                children: c('button', {
                  className: `test-button ${e === 'delay' ? 'active' : ''}`,
                  onClick: () => t('delay'),
                  children: 'Custom Delay',
                }),
              }),
              c('li', {
                children: c('button', {
                  className: `test-button ${e === 'api' ? 'active' : ''}`,
                  onClick: () => t('api'),
                  children: 'API Simulation',
                }),
              }),
              c('li', {
                children: c('button', {
                  className: `test-button ${e === 'cleanup' ? 'active' : ''}`,
                  onClick: () => t('cleanup'),
                  children: 'Cleanup Test',
                }),
              }),
            ],
          }),
        ],
      }),
      c('main', {
        className: 'main-content',
        children: [
          c('header', {
            className: 'page-header',
            children: [
              c('h1', { children: 'use-simple-debounce Preact Manual Tests' }),
              c('p', {
                children: [
                  c('img', {
                    src: '/src/assets/preact-logo.svg',
                    alt: 'Preact',
                    className: 'framework-logo',
                  }),
                  ' Preact Implementation',
                ],
              }),
            ],
          }),
          (() => {
            switch (e) {
              case 'basic':
                return c(Pe, {});
              case 'rapid':
                return c(ft, {});
              case 'async':
                return c(mt, {});
              case 'delay':
                return c(vt, {});
              case 'api':
                return c(gt, {});
              case 'cleanup':
                return c(bt, {});
              default:
                return c(Pe, {});
            }
          })(),
        ],
      }),
    ],
  });
}
nt(c($t, {}), document.getElementById('app'));
