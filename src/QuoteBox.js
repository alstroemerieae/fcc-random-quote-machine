import { useState, useEffect } from 'react'

const  QuoteBox= () => {  
  const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  let [quotes, setQuotes] = useState(null)
  let [quoteText, setQuoteText] = useState(null);
  let [quoteAuthor, setQuoteAuthor] = useState(null);
  const tweetURL = `https://twitter.com/intent/tweet?text=${quoteText}-${quoteAuthor}`;

  useEffect(() => {
    fetch(URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setQuotes(data.quotes)
      })
  }, []);

  function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * 102)
    console.log(randomNumber)
    setQuoteText(quotes[randomNumber].author);
    setQuoteAuthor(quotes[randomNumber].quote)
  }

  console.log(quotes)
  console.log(quoteText)
  console.log(quoteAuthor)

  return (
    <div id="quote-box">
      <h1 id="text">{quoteText}</h1>
      <h1 id="author">{quoteAuthor}</h1>
      <button id="new-quote" onClick={getRandomQuote}>Get New Quote</button>
      <a id="tweet-quote" target="_blank" rel="noreferrer" href={tweetURL}>Tweet Quote</a>
    </div>
  );
}

export default QuoteBox;