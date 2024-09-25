const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newButton = document.getElementById('new-quote');

let apiQuotes = [];

// Show new quote
function newQuote() {
    //********************************* */
    // pick random quote array local data //

    //********************************** */
    // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // quoteText.textContent = quote.text;
    // authorText.textContent = quote.author;
    // console.log(quote)


    // ******************************/
    // pick random quote array API data 
    // ********************************/

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
    console.log(quote)
   
}
newQuote();

// Quotes in API

async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL); 
        apiQuotes = await response.json();
        console.log(apiQuotes[12])
    }catch(error){
        console.log(`The error is found ${error}`)
    }
}

//  on Load
getQuotes();

