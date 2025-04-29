import ArticleCard from './ArticleCard';

function ArticleList({ articles }) {
  if (!articles.length) return <p>No articles found.</p>;

  return (
    <div style={{ display: 'grid', gap: '15px' }}>
      {articles.map((article, idx) => (
        <ArticleCard key={idx} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
