function TopNews(props){
  let news = props.news;
  let listNews = news.map(function(article){
    return<li key={article.id} className="d-flex lh-sm mb-2">
      <img src={article.imgSrc} alt={article.title} className = "me-3 pt-1" />
      <a href={article.link} target="_blank" rel="noreferrer" className="text-decoration-none">{article.title}</a>
    </li>
  } );

  return <ul className="list-unstyled top-articles small">
    {listNews}
  </ul>


}

export default TopNews