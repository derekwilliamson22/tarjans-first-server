// import the express library
// from node_modules/express
const express = require(`express`);

// go go gadget express!
// makes an app, aka a "server"
const app = express();

// start up the server
app.listen(3000, function() {
    console.log(`I'm listening`);
});



