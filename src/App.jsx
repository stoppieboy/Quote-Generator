import { useEffect, useState } from 'react'
import './App.css'

function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

function App() {
    
    const [quote, setQuote] = useState(null)
    const [quotes, setQuotes] = useState([])

    
    useEffect(() => {
        fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((json) => {
            setQuote(json[0])
            setQuotes(json)
        })
    },[])

    function getNewQuote() {
        setQuote(getRandomQuote(quotes))
    }

    return (
        <main>
            <h1>Quote Generator</h1>
            <section className="container">
                <button onClick={getNewQuote} id="new-quote">New Quote</button>
                <h3>
                    {quote?.text}
                </h3>
                <i>- {quote?.author}</i>
            </section>
        </main>
    )
}
    
export default App
