# use-simple-debounce

A simple, dependency-free React hook for debouncing function execution. No external dependencies, works with all React versions.

```tsx
import { useDebounce } from 'use-simple-debounce';

// Create a debouncer (defaults to 300ms)
const debounced = useDebounce();

// Use it to debounce any function
debounced(() => { /* this executes after 300ms */ });

// Works with async functions too
debounced(async () => { /* this executes after 300ms */ });
```

## Features

- 🚀 **Simple & Lightweight** - Just 5 lines of code, zero dependencies
- ⚡ **Performance** - Uses native `setTimeout` for reliable debouncing
- 🔒 **TypeScript** - Full TypeScript support with proper types
- 🎯 **Flexible** - Works with sync and async functions, any delay
- 🧹 **Memory Safe** - Automatic cleanup prevents memory leaks
- ⚡ **Async Support** - Handles both synchronous and asynchronous functions

## Installation

```bash
npm install use-simple-debounce
```

## Usage

### Basic Example

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

#### `useDebounce(delay?: number)`

Returns a debounced executor function.

**Parameters:**
- `delay` (optional): Delay in milliseconds before executing the function. Default: `300ms`

**Returns:**
A function that accepts another function to debounce its execution.

**Type:**
```typescript
function useDebounce(delay?: number): (fn: () => void | Promise<void>) => void
```

**Supported Function Types:**
- Synchronous functions: `() => void`
- Asynchronous functions: `() => Promise<void>`
- Any function that returns void or a Promise<void>

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
2. **Universal Compatibility** - Works with React 16.8+ and beyond
3. **Tiny Bundle Size** - Minimal impact on your app's size
4. **Simple API** - Easy to understand and use
5. **Memory Safe** - Automatic cleanup prevents memory leaks

## License

MIT © [juji](https://github.com/juji)
## Changelog

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