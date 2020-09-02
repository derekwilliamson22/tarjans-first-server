// import the express library
// from node_modules/express
const express = require(`express`);

// go go gadget express!
// makes an app, aka a "server"
const app = express();

// incantation for serving static files
app.use(express.static(`server/public`));

// An endpoint at /hello
// when I get a request at "/hello"
// send back a response of "Hello World!"
app.get(`/hello`, function(req, res){
    res.send(`<h1>Hello World!</h1>`);
});


// a persistence layer
let quotes = [
    { 
      quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', 
      author: 'Emma Watson' 
    },
    { 
      quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', 
      author: 'Scott Adams' 
    },
    { 
      quote: 
      'Intelligence plus character-that is the goal of true education.', 
      author: 'Martin Luther King, Jr.' 
    }
  ];
let i = 0;

function getNextQuote(){
let nextQuote = quotes[i];
// increment index
// get a new quote
i++;

// got back to beginning
if (i >= quotes.length){
    i = 0;
}
return nextQuote;
}


app.get(`/quotes`, function(req, res){
    let nextQuote = getNextQuote();
    res.send(nextQuote);
});

// start up the server
app.listen(3000, function() {
    console.log(`I'm listening on 3000`);
});



