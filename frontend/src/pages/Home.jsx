/**
 * This is the main Home component for the news search feature.
 * 
 * It lets users type in a search term and fetches news articles based on that.
 * To avoid hitting the API unnecessarily, there's a simple in-memory cache using useRef.
 * 
 * When nothing is searched, the UI is centered.
 * Once a search is done, the layout shifts up to show results.
 * 
 * Components used:
 * - SearchInput: for entering search terms
 * - ArticleList: displays the fetched articles
 * - Loader: shows a spinner while data is being fetched
 * 
 * Just a straightforward UI with a little optimization.
 */


import { useState, useRef } from 'react';
import { searchNews } from '../api/newsApi';
import SearchInput from '../components/SearchInput';
import ArticleList from '../components/ArticleList';
import Loader from '../components/Loader';

function Home() {
  const [name, setName] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const cacheRef = useRef({}); 

  const handleSearch = async () => {
    const trimmedName = name.trim().toLowerCase();
    if (!trimmedName) return;
    if (cacheRef.current[trimmedName]) {
      setArticles(cacheRef.current[trimmedName]);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await searchNews(trimmedName);
      const fetchedArticles = data.news || [];
      cacheRef.current[trimmedName] = fetchedArticles; 
      setArticles(fetchedArticles);
    } catch (err) {
      setError('Failed to fetch news.');
    }

    setLoading(false);
  };

  const isInitial = articles.length === 0 && !loading && !error;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isInitial ? 'center' : 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        maxWidth: '800px',
        margin: 'auto',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
        <h1>News Search</h1>
        <SearchInput name={name} setName={setName} onSearch={handleSearch} />
      </div>

      {loading && <Loader />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {articles.length > 0 && <ArticleList articles={articles} />}
    </div>
  );
}

export default Home;
