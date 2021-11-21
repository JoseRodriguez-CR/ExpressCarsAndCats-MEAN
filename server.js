const express = require( 'express' );
const app = express();

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it


app.listen(8000, function() {
    console.log( 'This server is running in port 8000.' );
})