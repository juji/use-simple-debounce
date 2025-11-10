# use-simple-debounce

A simple, dependency-free debounce utility for **React**, **Solid**, **Svelte**, **Vue**, and **vanilla JavaScript** with async support.

For those who like simple things: https://use-simple-debounce.jujiplay.com/

## Features

- 🚀 **Simple & Lightweight** - Just 5 lines of code, zero dependencies
- ⚡ **Performance** - Uses native `setTimeout` for reliable debouncing
- 🔒 **TypeScript** - Full TypeScript support with proper types
- 🎯 **Flexible** - Works with sync and async functions, any delay
- 🧹 **Memory Safe** - Automatic cleanup prevents memory leaks (framework hooks)
- ⚡ **Async Support** - Handles both synchronous and asynchronous functions
- 🎨 **Multi-Framework** - Supports React, Solid, Svelte, Vue, and Vanilla JS
- 🔄 **Cancel Support** - Returns optional cancel function for manual cleanup

## Installation

```bash
npm install use-simple-debounce
```

## ⚠️ Breaking Changes in v3.0.0

**API Change**: The debounce API has been simplified and improved. Instead of creating a debouncer instance and calling it with a function, you now pass the function directly to the debounce creator.

**Migration Guide:**

```typescript
// Old API (v2.x)
const debounced = useDebounce();
debounced(() => performSearch(query), 300);

// New API (v3.x)
const debouncedSearch = useDebounce((query) => performSearch(query), 300);
debouncedSearch(query);
```

The new API is more intuitive and provides better TypeScript support with automatic argument inference.

## Framework Support

### React

```tsx
import { useDebounce } from 'use-simple-debounce';

function SearchComponent() {
  const debouncedSearch = useDebounce((query: string) => performSearch(query), 300);

  const handleSearch = (query: string) => {
    // Optional: cleanup is handled by the library
    const cancel = debouncedSearch(query);
  };

  return (
    <input type="text" onChange={(e) => handleSearch(e.target.value)} placeholder="Search..." />
  );
}
```

### Solid

```tsx
import { createSignal } from 'solid-js';
import { createDebounce } from 'use-simple-debounce/solid';

function SearchComponent() {
  const [query, setQuery] = createSignal('');
  const debouncedSearch = createDebounce((query: string) => performSearch(query), 300);

  const handleSearch = (query: string) => {
    setQuery(query);
    // Optional: cleanup is handled by the library
    const cancel = debouncedSearch(query);
  };

  return (
    <input
      type="text"
      value={query()}
      onInput={(e) => handleSearch(e.target.value)}
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
  const debouncedSearch = createDebounce((value) => performSearch(value), 300);

  function handleInputChange(event) {
    const value = event.target.value;
    query = value;
    // Optional: cleanup is handled by the library
    const cancel = debouncedSearch(value);
  }
</script>

<input
  type="text"
  bind:value={query}
  on:input={handleInputChange}
  placeholder="Search..."
/>
```

### Vue

```vue
<template>
  <input v-model="query" @input="handleInputChange" placeholder="Search..." />
</template>

<script setup>
import { ref } from 'vue';
import { useDebounce } from 'use-simple-debounce/vue';

const query = ref('');
const debouncedSearch = useDebounce((query: string) => performSearch(query), 300);

const handleInputChange = () => {
  // Optional: cleanup is handled by the library
  const cancel = debouncedSearch(query.value);
};
</script>
```

### Vanilla JavaScript

```javascript
import { debounce } from 'use-simple-debounce/vanilla';

const debouncedSearch = debounce((query) => performSearch(query), 300);

function handleSearch(query) {
  // Cleanup (if needed) should be executed manually - no automatic cleanup
  // Example: cancel()
  const cancel = debouncedSearch(query);
}

const input = document.querySelector('input');
input.addEventListener('input', (e) => handleSearch(e.target.value));
```

### Advanced Example

```tsx
import { useDebounce } from 'use-simple-debounce';

function AutoSaveEditor() {
  const [content, setContent] = useState('');
  const debouncedSave = useDebounce(async (newContent: string) => {
    try {
      // Save after 1 second of inactivity
      await saveToServer(newContent);
      console.log('Auto-saved!');
    } catch (err) {
      console.error('Save failed:', err);
    }
  }, 1000);

  const handleChange = (newContent: string) => {
    setContent(newContent);
    // Optional: cleanup is handled by the library
    const cancel = debouncedSave(newContent);
  };

  return (
    <textarea
      value={content}
      onChange={(e) => handleChange(e.target.value)}
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
  const debouncedSearch = useDebounce(async (searchQuery: string) => {
    const response = await fetch(`/api/search?q=${searchQuery}`);
    const data = await response.json();
    setResults(data.results);
  }, 300);

  const handleInputChange = (value: string) => {
    setQuery(value);
    // Optional: cleanup is handled by the library
    const cancel = debouncedSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

### API Reference

#### `debounce()` / `useDebounce()` / `createDebounce()`

Creates a debounced function that accepts arguments and returns an optional cancel function.

**Parameters:**

- `fn: F` - The function to debounce
- `wait?: number` - The delay in milliseconds (default: 300ms)

**Returns:**
A debounced function that accepts the same arguments as the original function and returns an optional cancel function.

**Type:**

```typescript
function debounce<F extends (...args: any[]) => any>(
  fn: F,
  wait?: number
): (...args: Parameters<F>) => (() => void) | undefined;
```

**Framework Usage:**

- **React**: `import { useDebounce } from 'use-simple-debounce'`
- **Solid**: `import { createDebounce } from 'use-simple-debounce/solid'`
- **Svelte**: `import { createDebounce } from 'use-simple-debounce/svelte'`
- **Vue**: `import { useDebounce } from 'use-simple-debounce/vue'`
- **Vanilla JS**: `import { debounce } from 'use-simple-debounce/vanilla'`

**Usage Examples:**

```typescript
// Create debounced function
const debouncedSearch = debounce((query: string) => performSearch(query), 300);

// Call with arguments - returns optional cancel function
const cancel = debouncedSearch('hello world');

// Cancel if needed (optional - cleanup is handled automatically by frameworks)
if (cancel) cancel();
```

## Choosing the Right Delay

### Most Common Delay: `300ms`

The most frequently used delay across React applications is **`300ms`** - it provides the best balance between responsiveness and performance for most user interactions.

### Delay Recommendations by Use Case

| Use Case                | Recommended Delay | Reason                                        |
| ----------------------- | ----------------- | --------------------------------------------- |
| **Search/Autocomplete** | `300ms` ⭐        | Most common - balances UX with API efficiency |
| **Form Validation**     | `300-500ms`       | Give users time to finish typing              |
| **Auto-save**           | `1000-2000ms`     | Allow time for continuous editing             |
| **Window Resize**       | `150-250ms`       | Handle rapid resize events smoothly           |
| **Scroll Events**       | `100-200ms`       | Maintain smooth scrolling experience          |
| **API Calls**           | `300-600ms`       | Prevent excessive server requests             |

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
5. **Memory Safe** - Automatic cleanup prevents memory leaks in framework hooks
6. **TypeScript First** - Excellent TypeScript support with automatic type inference
7. **Cancel Support** - Optional manual cancellation when needed
8. **Multi-Framework** - Same API and behavior across all supported frameworks

## License

MIT © [juji](https://github.com/juji)

## Contributing

Contributions welcome! Please feel free to submit a Pull Request.
