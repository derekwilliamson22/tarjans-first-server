// import the express library
// from node_modules/express
const express = require(`express`);

// go go gadget express!
// makes an app, aka a "server"
const app = express();

// incantation for serving static files
app.use(express.static(`server/public`));

// when I get a request at "/hello"
// send back a response of "Hello World!"
app.get(`/hello`, function(req, res){
    res.send(`<h1>Hello World!</h1>`);
});

// start up the server
app.listen(3000, function() {
    console.log(`I'm listening on 3000`);
});



