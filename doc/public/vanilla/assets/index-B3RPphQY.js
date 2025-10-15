(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) s(t);
  new MutationObserver((t) => {
    for (const o of t)
      if (o.type === 'childList')
        for (const l of o.addedNodes) l.tagName === 'LINK' && l.rel === 'modulepreload' && s(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(t) {
    const o = {};
    return (
      t.integrity && (o.integrity = t.integrity),
      t.referrerPolicy && (o.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : t.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function s(t) {
    if (t.ep) return;
    t.ep = !0;
    const o = n(t);
    fetch(t.href, o);
  }
})();
function T() {
  let i;
  return (e, n = 300) => (
    clearTimeout(i),
    (i = setTimeout(() => e(), n)),
    () => {
      clearTimeout(i);
    }
  );
}
function q(i) {
  const e = document.createElement('input');
  ((e.type = 'text'), (e.placeholder = 'Type something...'));
  const n = document.createElement('p');
  n.textContent = 'Output: ';
  const s = document.createElement('div');
  s.className = 'logs-container';
  const t = [];
  function o(C) {
    (t.push(`${new Date().toLocaleTimeString()}: ${C}`),
      (s.innerHTML = t.map((h) => `<div class="log-entry">${h}</div>`).join('')));
  }
  const l = T();
  e.addEventListener('input', (C) => {
    const a = C.target.value;
    (o(`Input changed: "${a}"`),
      l(() => {
        ((n.textContent = `Output: ${a}`), o(`Debounced update: "${a}"`));
      }, 500));
  });
  const c = document.createElement('div');
  c.className = 'test-case';
  const p = document.createElement('h3');
  ((p.textContent = '⚡ Basic Debounce Test'), c.appendChild(p));
  const g = document.createElement('p');
  ((g.textContent = 'Test basic debouncing with a 500ms delay.'), c.appendChild(g));
  const u = document.createElement('div');
  u.className = 'test-controls';
  const r = document.createElement('label');
  ((r.textContent = 'Input:'), r.appendChild(e), u.appendChild(r), c.appendChild(u));
  const b = document.createElement('div');
  ((b.className = 'test-output'), b.appendChild(n), c.appendChild(b));
  const d = document.createElement('div');
  d.className = 'test-logs';
  const v = document.createElement('h4');
  ((v.textContent = 'Logs:'),
    d.appendChild(v),
    d.appendChild(s),
    c.appendChild(d),
    i.appendChild(c));
}
function M(i) {
  const e = document.createElement('input');
  ((e.type = 'text'), (e.placeholder = 'Type to search...'));
  const n = document.createElement('div'),
    s = document.createElement('span');
  ((s.className = 'loading'), (s.textContent = 'Searching...'), (s.style.display = 'none'));
  const t = document.createElement('div');
  t.className = 'logs-container';
  let o = null,
    l = !1;
  const c = [];
  function p(a) {
    (c.push(`${new Date().toLocaleTimeString()}: ${a}`),
      (t.innerHTML = c.map((m) => `<div class="log-entry">${m}</div>`).join('')));
  }
  async function g(a) {
    (p(`API call started for: "${a}"`), await new Promise((y) => setTimeout(y, 800)));
    const m = [`${a} result 1`, `${a} result 2`, `${a} result 3`];
    return { query: a, results: m };
  }
  const u = T();
  e.addEventListener('input', (a) => {
    const y = a.target.value;
    (p(`Search query changed: "${y}"`),
      u(async () => {
        if (!y.trim()) {
          ((o = null), r());
          return;
        }
        ((l = !0), b());
        try {
          ((o = await g(y)), p(`API call completed for: "${y}"`));
        } catch (L) {
          p(`API call failed: ${L}`);
        } finally {
          ((l = !1), b(), r());
        }
      }, 300));
  });
  function r() {
    o
      ? (n.innerHTML = `
        <p><strong>Search Results for "${o.query}":</strong></p>
        <ul>
          ${o.results.map((a) => `<li>${a}</li>`).join('')}
        </ul>
      `)
      : (n.innerHTML = '');
  }
  function b() {
    s.style.display = l ? 'inline' : 'none';
  }
  const d = document.createElement('div');
  ((d.className = 'test-case'),
    (d.innerHTML = `
    <h3>⚡ API Simulation Test</h3>
    <p>Test debouncing with simulated API calls (search functionality).</p>
    <div class="test-controls">
      <label>
        Search:
      </label>
    </div>
    <div class="test-output">
    </div>
    <div class="test-logs">
      <h4>Logs:</h4>
    </div>
  `));
  const v = d.querySelector('label');
  (v.appendChild(e),
    v.appendChild(s),
    d.querySelector('.test-output').appendChild(n),
    d.querySelector('.test-logs').appendChild(t),
    i.appendChild(d));
}
function w(i) {
  const e = document.createElement('input');
  ((e.type = 'text'), (e.placeholder = 'Type to trigger async operation...'));
  const n = document.createElement('p');
  n.textContent = 'Result: ';
  const s = document.createElement('span');
  ((s.className = 'loading'), (s.textContent = 'Loading...'), (s.style.display = 'none'));
  const t = document.createElement('div');
  t.className = 'logs-container';
  let o = !1;
  const l = [];
  function c(v) {
    (l.push(`${new Date().toLocaleTimeString()}: ${v}`),
      (t.innerHTML = l.map((C) => `<div class="log-entry">${C}</div>`).join('')));
  }
  const p = T();
  e.addEventListener('input', (v) => {
    const h = v.target.value;
    (c(`Input changed: "${h}"`),
      p(async () => {
        ((o = !0),
          g(),
          c(`Starting async operation for: "${h}"`),
          await new Promise((m) => setTimeout(m, 1e3)));
        const a = h.toUpperCase();
        ((n.textContent = `Result: ${a}`), (o = !1), g(), c(`Async operation completed: "${a}"`));
      }, 500));
  });
  function g() {
    s.style.display = o ? 'inline' : 'none';
  }
  const u = document.createElement('div');
  ((u.className = 'test-case'),
    (u.innerHTML = `
    <h3>⚡ Async Function Test</h3>
    <p>Test debouncing with async functions (simulates API call).</p>
    <div class="test-controls">
      <label>
        Input:
      </label>
    </div>
    <div class="test-output">
    </div>
    <div class="test-logs">
      <h4>Logs:</h4>
    </div>
  `));
  const r = u.querySelector('label');
  (r.appendChild(e),
    r.appendChild(s),
    u.querySelector('.test-output').appendChild(n),
    u.querySelector('.test-logs').appendChild(t),
    i.appendChild(u));
}
function H(i) {
  const e = document.createElement('input');
  ((e.type = 'text'), (e.placeholder = 'Type something...'));
  const n = document.createElement('input');
  ((n.type = 'number'), (n.value = '1000'), (n.min = '100'), (n.max = '5000'), (n.step = '100'));
  const s = document.createElement('p');
  s.textContent = 'Output: ';
  const t = document.createElement('p');
  t.textContent = 'Current Delay: 1000ms';
  const o = document.createElement('div');
  o.className = 'logs-container';
  let l = 1e3;
  const c = [];
  function p(h) {
    (c.push(`${new Date().toLocaleTimeString()}: ${h}`),
      (o.innerHTML = c.map((a) => `<div class="log-entry">${a}</div>`).join('')));
  }
  const g = T();
  (e.addEventListener('input', (h) => {
    const m = h.target.value;
    (p(`Input changed: "${m}"`),
      g(() => {
        ((s.textContent = `Output: ${m}`), p(`Debounced update: "${m}"`));
      }, l));
  }),
    n.addEventListener('input', (h) => {
      const a = h.target;
      ((l = Number(a.value)), (t.textContent = `Current Delay: ${l}ms`));
    }));
  const u = document.createElement('div');
  ((u.className = 'test-case'),
    (u.innerHTML = `
    <h3>⚡ Custom Delay Test</h3>
    <p>Test debouncing with adjustable delay.</p>
    <div class="test-controls">
      <label>
        Delay (ms):
      </label>
      <br />
      <label>
        Input:
      </label>
    </div>
    <div class="test-output">
    </div>
    <div class="test-logs">
      <h4>Logs:</h4>
    </div>
  `));
  const r = u.querySelectorAll('label'),
    b = r[0],
    d = r[1];
  (b.appendChild(n), d.appendChild(e));
  const v = u.querySelector('.test-output');
  (v.appendChild(s),
    v.appendChild(t),
    u.querySelector('.test-logs').appendChild(o),
    i.appendChild(u));
}
function A(i) {
  const e = document.createElement('button');
  ((e.type = 'button'), (e.textContent = 'Trigger Rapid Calls'));
  const n = document.createElement('button');
  ((n.type = 'button'), (n.textContent = 'Reset'));
  const s = document.createElement('p');
  s.textContent = 'Immediate Count: 0';
  const t = document.createElement('p');
  t.textContent = 'Debounced Count: 0';
  const o = document.createElement('div');
  o.className = 'logs-container';
  let l = 0,
    c = 0;
  const p = [];
  function g(C) {
    (p.push(`${new Date().toLocaleTimeString()}: ${C}`),
      (o.innerHTML = p.map((h) => `<div class="log-entry">${h}</div>`).join('')));
  }
  const u = T();
  (e.addEventListener('click', () => {
    for (let C = 0; C < 10; C++)
      setTimeout(() => {
        ((l += 1),
          (s.textContent = `Immediate Count: ${l}`),
          g(`Immediate count: ${l}`),
          u(() => {
            ((c += 1), (t.textContent = `Debounced Count: ${c}`), g(`Debounced count: ${c}`));
          }, 300));
      }, C * 50);
  }),
    n.addEventListener('click', () => {
      ((l = 0),
        (c = 0),
        (s.textContent = 'Immediate Count: 0'),
        (t.textContent = 'Debounced Count: 0'),
        (p.length = 0),
        (o.innerHTML = ''));
    }));
  const r = document.createElement('div');
  ((r.className = 'test-case'),
    (r.innerHTML = `
    <h3>⚡ Rapid Calls Test</h3>
    <p>Test debouncing with rapid successive calls (10 calls in 500ms).</p>
    <div class="test-controls">
    </div>
    <div class="test-output">
    </div>
    <div class="test-logs">
      <h4>Logs:</h4>
    </div>
  `));
  const b = r.querySelector('.test-controls');
  (b.appendChild(e), b.appendChild(n));
  const d = r.querySelector('.test-output');
  (d.appendChild(s),
    d.appendChild(t),
    r.querySelector('.test-logs').appendChild(o),
    i.appendChild(r));
}
function P(i) {
  const e = document.createElement('button');
  ((e.type = 'button'), (e.textContent = 'Mount Component'));
  const n = document.createElement('button');
  ((n.type = 'button'), (n.textContent = 'Unmount Component'), (n.disabled = !0));
  const s = document.createElement('button');
  ((s.type = 'button'), (s.textContent = 'Clear Logs'));
  const t = document.createElement('div');
  t.className = 'component-container';
  const o = document.createElement('div');
  o.className = 'logs-container';
  let l = !1,
    c = null;
  const p = [];
  function g(a) {
    (p.push(`${new Date().toLocaleTimeString()}: ${a}`),
      (o.innerHTML = p.map((m) => `<div class="log-entry">${m}</div>`).join('')));
  }
  function u() {
    const a = document.createElement('div');
    a.className = 'debounce-component';
    const m = document.createElement('input');
    ((m.type = 'text'), (m.placeholder = 'Type to trigger debounced update...'));
    const y = document.createElement('p');
    y.textContent = 'Debounced Output: ';
    const L = document.createElement('label');
    ((L.textContent = 'Input (debounced): '), L.appendChild(m));
    const E = document.createElement('div');
    ((E.className = 'test-controls'), E.appendChild(L));
    const D = document.createElement('div');
    ((D.className = 'test-output'), D.appendChild(y), a.appendChild(E), a.appendChild(D));
    const I = T();
    return (
      m.addEventListener('input', (N) => {
        const $ = N.target.value;
        (g(`Input changed: "${$}"`),
          (c = I(() => {
            (console.log('Debounced callback executed'),
              (y.textContent = `Debounced Output: ${$}`),
              g(`Debounced callback executed: "${$}"`));
          }, 5e3)));
      }),
      { component: a, input: m, output: y }
    );
  }
  function r() {
    if (l) return;
    (g('Mounting DebounceComponent'), (l = !0), (e.disabled = !0), (n.disabled = !1));
    const { component: a } = u();
    t.appendChild(a);
  }
  function b() {
    l &&
      (g('Unmounting DebounceComponent'),
      (l = !1),
      (e.disabled = !1),
      (n.disabled = !0),
      c && (c(), (c = null)),
      (t.innerHTML = ''));
  }
  (e.addEventListener('click', r),
    n.addEventListener('click', b),
    s.addEventListener('click', () => {
      ((p.length = 0), (o.innerHTML = ''));
    }));
  const d = document.createElement('div');
  ((d.className = 'test-case'),
    (d.innerHTML = `
    <h3>⚡ Cleanup Test</h3>
    <p>Test that debounced functions are properly cleaned up when components unmount.</p>
    <p><em>Type in the input, then unmount the component before the 5s delay expires.</em></p>
    <p><em>The debounced function is called with console.log after 5 seconds.</em></p>
    <div class="test-controls">
    </div>
    <div class="component-container">
    </div>
    <div class="test-logs">
      <h4>Logs:</h4>
    </div>
  `));
  const v = d.querySelector('.test-controls');
  (v.appendChild(e),
    v.appendChild(n),
    v.appendChild(s),
    d.querySelector('.component-container').appendChild(t),
    d.querySelector('.test-logs').appendChild(o),
    i.appendChild(d));
}
document.querySelector('#app').innerHTML = `
  <div class="app">
    <nav class="sidebar">
      <h2>Test Cases</h2>
      <ul>
        <li>
          <button class="test-button active" data-test="basic">
            Basic Debounce
          </button>
        </li>
        <li>
          <button class="test-button" data-test="rapid">
            Rapid Calls
          </button>
        </li>
        <li>
          <button class="test-button" data-test="async">
            Async Functions
          </button>
        </li>
        <li>
          <button class="test-button" data-test="delay">
            Custom Delay
          </button>
        </li>
        <li>
          <button class="test-button" data-test="api">
            API Simulation
          </button>
        </li>
        <li>
          <button class="test-button" data-test="cleanup">
            Cleanup Test
          </button>
        </li>
      </ul>
    </nav>

    <div class="main-content">
      <header class="page-header">
        <h1>use-simple-debounce Vanilla Manual Tests</h1>
        <p><img src="/src/assets/vanilla-logo.svg" alt="Vanilla JS" class="framework-logo" /> Vanilla JavaScript Implementation</p>
      </header>

      <div id="test-container">
        <!-- Test components will be inserted here -->
      </div>
    </div>
  </div>
`;
let x = 'basic';
const f = document.querySelector('#test-container');
function k(i) {
  (document.querySelectorAll('.test-button').forEach((e) => {
    e.classList.remove('active');
  }),
    document.querySelector(`[data-test="${i}"]`).classList.add('active'),
    (f.innerHTML = ''),
    (x = i),
    S(i));
}
function S(i) {
  switch (i) {
    case 'basic':
      q(f);
      break;
    case 'api':
      M(f);
      break;
    case 'async':
      w(f);
      break;
    case 'delay':
      H(f);
      break;
    case 'rapid':
      A(f);
      break;
    case 'cleanup':
      P(f);
      break;
  }
}
document.addEventListener('click', (i) => {
  const e = i.target;
  if (e.classList.contains('test-button')) {
    const n = e.getAttribute('data-test');
    n && k(n);
  }
});
S(x);
