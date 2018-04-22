var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
   res.send("<h1> Hello World! </h1>");
});

app.listen(3000 , function( ) {
    console.log('Sever Listening on http://localhost:3000/');
});