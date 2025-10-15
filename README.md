# use-simple-debounce

A simple, dependency-free debounce utility for **React**, **Solid**, **Svelte**, **Vue**, and **vanilla JavaScript** with async support.

```tsx
import { useDebounce } from 'use-simple-debounce'; // React
import { createDebounce } from 'use-simple-debounce/solid'; // Solid
import { createDebounce } from 'use-simple-debounce/svelte'; // Svelte
import { useDebounce } from 'use-simple-debounce/vue'; // Vue

// Create a debouncer (defaults to 300ms)
const debounced = useDebounce(); // or createDebounce()

// Use it to debounce any function
debounced(() => { /* debounced for 300ms */ });

// Works with async functions too
debounced(async () => { /* debounced for 300ms */ });
```

## Features

- 🚀 **Simple & Lightweight** - Just 5 lines of code, zero dependencies
- ⚡ **Performance** - Uses native `setTimeout` for reliable debouncing
- 🔒 **TypeScript** - Full TypeScript support with proper types
- 🎯 **Flexible** - Works with sync and async functions, any delay
- 🧹 **Memory Safe** - Automatic cleanup prevents memory leaks
- ⚡ **Async Support** - Handles both synchronous and asynchronous functions
- 🎨 **Multi-Framework** - Supports React, Solid, Svelte, and Vue

## Installation

```bash
npm install use-simple-debounce
```

## Framework Support

### React

```tsx
import { useDebounce } from 'use-simple-debounce';

function SearchComponent() {
  const debouncedSearch = useDebounce(300);

  const handleSearch = (query: string) => {
    debouncedSearch(() => {
      // This will only execute 300ms after the user stops typing
      performSearch(query);
    });
  };

  return (
    <input
      type="text"
      onChange={e => handleSearch(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

### Solid

```tsx
import { createSignal } from 'solid-js';
import { createDebounce } from 'use-simple-debounce/solid';

function SearchComponent() {
  const [query, setQuery] = createSignal('');
  const debouncedSearch = createDebounce(300);

  const handleSearch = (value: string) => {
    setQuery(value);
    debouncedSearch(() => {
      // This will only execute 300ms after the user stops typing
      performSearch(value);
    });
  };

  return (
    <input
      type="text"
      value={query()}
      onInput={e => handleSearch(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

### Svelte

```svelte
<script>
  import { createDebounce } from 'use-simple-debounce/svelte';

  let query = '';
  const debouncedSearch = createDebounce(300);

  function handleSearch(value) {
    query = value;
    debouncedSearch(() => {
      // This will only execute 300ms after the user stops typing
      performSearch(value);
    });
  }
</script>

<input
  type="text"
  bind:value={query}
  on:input={e => handleSearch(e.target.value)}
  placeholder="Search..."
/>
```

### Vue

```vue
<template>
  <input
    v-model="query"
    @input="handleSearch"
    placeholder="Search..."
  />
</template>

<script setup>
import { ref } from 'vue';
import { useDebounce } from 'use-simple-debounce/vue';

const query = ref('');
const debouncedSearch = useDebounce(300);

const handleSearch = () => {
  debouncedSearch(() => {
    // This will be debounced - only executes 300ms after the last call
    performSearch(query.value);
  });
};
</script>
```

### Vanilla JavaScript

```javascript
import { useDebounce } from 'use-simple-debounce/native';

const debouncedSearch = useDebounce(300);

// Get the debounced function and cancel function
const [search, cancel] = debouncedSearch(() => {
  // This will be debounced - only executes 300ms after the last call
  performSearch(query);
});

// To cancel the pending execution
cancel();
```

### Advanced Example

```tsx
import { useDebounce } from 'use-simple-debounce';

function AutoSaveEditor() {
  const [content, setContent] = useState('');
  const debouncedSave = useDebounce(1000); // Save after 1 second of inactivity

  const handleChange = (newContent: string) => {
    setContent(newContent);

    debouncedSave(async () => {
      try {
        await saveToServer(newContent);
        console.log('Auto-saved!');
      } catch (err) {
        console.error('Save failed:', err);
      }
    });
  };

  return (
    <textarea
      value={content}
      onChange={e => handleChange(e.target.value)}
      placeholder="Start typing..."
    />
  );
}
```

### API Search Example

```tsx
import { useDebounce } from 'use-simple-debounce';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const debouncedSearch = useDebounce(300);

  const performSearch = async (searchQuery: string) => {
    const response = await fetch(`/api/search?q=${searchQuery}`);
    const data = await response.json();
    setResults(data.results);
  };

  const handleInputChange = (value: string) => {
    setQuery(value);
    debouncedSearch(() => performSearch(value));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => handleInputChange(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

### API Reference

#### `useDebounce(delay?: number)` / `createDebounce(delay?: number)`

Returns a debounced executor function.

**Parameters:**
- `delay` (optional): Delay in milliseconds before executing the function. Default: `300ms`

**Returns:**
A function that accepts another function to debounce its execution.

**Type:**
```typescript
function useDebounce(delay?: number): (fn: () => void | Promise<void>) => void
function createDebounce(delay?: number): (fn: () => void | Promise<void>) => void
```

**Supported Function Types:**
- Synchronous functions: `() => void`
- Asynchronous functions: `() => Promise<void>`
- Any function that returns void or a Promise<void>

**Framework Usage:**
- **React**: `import { useDebounce } from 'use-simple-debounce'` or `import { useDebounce } from 'use-simple-debounce/react'`
- **Solid**: `import { createDebounce } from 'use-simple-debounce/solid'`
- **Svelte**: `import { createDebounce } from 'use-simple-debounce/svelte'`
- **Vue**: `import { useDebounce } from 'use-simple-debounce/vue'`
- **Vanilla JS**: `import { useDebounce } from 'use-simple-debounce/native'`

## Choosing the Right Delay

### Most Common Delay: `300ms`

The most frequently used delay across React applications is **`300ms`** - it provides the best balance between responsiveness and performance for most user interactions.

### Delay Recommendations by Use Case

| Use Case | Recommended Delay | Reason |
|----------|------------------|---------|
| **Search/Autocomplete** | `300ms` ⭐ | Most common - balances UX with API efficiency |
| **Form Validation** | `300-500ms` | Give users time to finish typing |
| **Auto-save** | `1000-2000ms` | Allow time for continuous editing |
| **Window Resize** | `150-250ms` | Handle rapid resize events smoothly |
| **Scroll Events** | `100-200ms` | Maintain smooth scrolling experience |
| **API Calls** | `300-600ms` | Prevent excessive server requests |

### Quick Reference

- **🟢 Default (300ms)**: General purpose, good starting point
- **🟡 Most Common (300ms)**: Search inputs, form validation, API calls
- **🟠 Slow (1000ms+)**: Auto-save, background tasks
- **🔴 Fast (100ms)**: Scroll, resize, high-frequency events

**Tip**: Start with `300ms` for user input scenarios - it's the sweet spot used by most major applications!

## Why Choose use-simple-debounce?

1. **Zero Dependencies** - No risk of version conflicts or security issues
2. **Universal Compatibility** - Works with React 16.8+, Solid, Svelte, Vue, and vanilla JavaScript
3. **Tiny Bundle Size** - Minimal impact on your app's size
4. **Simple API** - Easy to understand and use across all frameworks
5. **Memory Safe** - Automatic cleanup prevents memory leaks
6. **Multi-Framework** - Same API and behavior across all supported frameworks

## License

MIT © [juji](https://github.com/juji)
## Changelog

### v1.1.0
- 🎉 **Multi-Framework Support**: Added Solid, Svelte, Vue, and vanilla JavaScript implementations
- 📦 **Modular Exports**: Framework-specific entry points for tree-shaking
- 🔧 **Consistent API**: Same debounce function across all frameworks (except native which provides cancellation)
- 📚 **Updated Documentation**: Examples for React, Solid, Svelte, Vue, and vanilla JavaScript

### v1.0.0
- 🎉 **Initial Release**: Simple, dependency-free React debouncing hook
- 🚀 **Zero Dependencies**: No external libraries, works with all React versions
- ⚡ **Async Support**: Handles both sync and async functions with `Promise<void>` types
- 🎯 **Smart Defaults**: 300ms delay (most common usage pattern)
- 📦 **Dual Builds**: ESM + CommonJS with full TypeScript support
- 🔒 **Type Safe**: Complete TypeScript definitions and JSDoc
- 📚 **Rich Documentation**: Usage examples, delay guides, and comparisons
- 🧹 **Memory Safe**: Automatic cleanup prevents memory leaks

## Contributing

Contributions welcome! Please feel free to submit a Pull Request.