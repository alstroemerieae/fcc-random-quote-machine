import { useState, useEffect } from 'react'

const  QuoteBox= () => {  
  const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  let [quotes, setQuotes] = useState(null)
  let [quoteText, setQuoteText] = useState(null)
  let [quoteAuthor, setQuoteAuthor] = useState(null)
  let [fetchCounter, setFetchCounter] = useState(0)
  const tweetURL = `https://twitter.com/intent/tweet?text=${quoteText}-${quoteAuthor}`

  useEffect(() => {
    fetch(URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        let randomNumber = Math.floor(Math.random() * data.quotes.length)
        setQuotes(quotes)
        setQuoteText(data.quotes[randomNumber].quote)
        setQuoteAuthor(data.quotes[randomNumber].author)
        console.log(`The random generated number is ${randomNumber}`)
        console.log(`The length of the quotes array is ${data.quotes.length}`)
        console.log(`The current quote text is ${quoteText}`)
        console.log(`The current quote author is ${quoteAuthor}`)
        console.log(`The current fetch counter is ${fetchCounter}`)
      })
  }, [fetchCounter]);

  return (
    <div id="quote-box">
      <h1 id="author">{quoteAuthor}</h1>
      <h1 id="text">{quoteText}</h1>
      <div className="button-group">
        <button id="new-quote" className="button" onClick={() => setFetchCounter(fetchCounter + 1)}>Get New Quote</button>
        <a id="tweet-quote" className="button" target="_blank" rel="noreferrer" href={tweetURL}>Tweet Quote</a>
      </div>
    </div>
  );
}

export default QuoteBox;
