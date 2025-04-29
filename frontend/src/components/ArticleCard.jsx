function ArticleCard({ article }) {
  return (
    <div style={{
      borderBottom: '1px solid #ddd',
      padding: '16px 0',
    }}>
      <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#1a0dab' }}>
        <h3 style={{ margin: '0 0 6px' }}>{article.title}</h3>
      </a>
      <div style={{ fontSize: '12px', color: '#555' }}>{article.source} • {article.date}</div>
      <p style={{ fontSize: '14px', color: '#4d5156' }}>{article.snippet}</p>
      {article.imageUrl && (
        <a href={article.imageUrl} target="_blank" rel="noopener noreferrer"><img src={article.imageUrl} alt="article" style={{ marginTop: '8px', maxWidth: '100%', borderRadius: '4px' }} /></a>
      )}
    </div>
  );
}

export default ArticleCard;
