/**
 * SearchInput Component
 * 
 * - This component handles user input for search.
 * - It uses a custom useDebounce hook to delay the API call until the user stops typing.
 * - If the debounced value is not empty, it automatically triggers the search.
 * - Also has a button for manual search trigger.
 * 
 * The debouncing avoids unnecessary API calls and improves performance.
 */


import { useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

function SearchInput({ name, setName, onSearch }) {
  const debouncedName = useDebounce(name, 500);

  useEffect(() => {
    if (debouncedName) {
      onSearch();
    }
  }, [debouncedName]); 

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter person's name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '10px', width: '80%', marginRight: '10px' }}
      />
      <button onClick={onSearch} style={{ padding: '10px 20px' }}>
        Search
      </button>
    </div>
  );
}

export default SearchInput;
