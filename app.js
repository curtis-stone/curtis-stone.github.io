const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

app.set('view engine', 'ejs'); // sets express app to view in ejs

app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static("public")); // allows express to load our static files (css, images, etc)
// express will not load every file automatically

app.get("/", function(req, res) {

    // date.getDate comes from required and the getDate exported function on custom module

    res.render("home", {listTitle: "title", newListItems: "items"});
    // changes kindOFDay on EJS template to the resulting logic from switch statement
})

app.get("/projects", function(req, res) {
    res.render("projects");
});

app.listen(3000, function() {
    console.log('Server running on port 3000');
});

