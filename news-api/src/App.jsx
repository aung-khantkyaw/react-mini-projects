import React, { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b6dbca53c6b441bfbd69143887a4f941')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNews(data.articles); // Assuming 'articles' is the key containing the news items
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <h1>News</h1>
      <div className="news-container">
        {news.map((item, index) => (
          <div key={index} className="news-card">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            {item.urlToImage && <img src={item.urlToImage} alt="News" />}
            <p>Author: {item.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
