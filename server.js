const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes',(req,res) => {
  const strAuthor = req.query.person
  const arrAuthorQuotes = quotes.filter( x => x.person === strAuthor)
  if(strAuthor){
    res.send({quotes : arrAuthorQuotes})
  } else {
    res.send({quotes : quotes});
  }
})

app.get('/api/quotes/random',(req,res) => {
  const randomQuote = getRandomElement(quotes)
  res.send({quote : randomQuote});
})

app.listen(PORT, () => {
    console.log(`Mixed Messages listening at http://localhost:${PORT}`);
  })