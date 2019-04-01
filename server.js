// Load express module
const express = require("express");
const app = express();

// const bodyParser = require("body-parser");
// Load path module  https://nodejs.org/api/path.html
const path = require("path");

// Load chalk module
// const chalk = require("chalk");

// Setup Express

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use(express.static(__dirname + "/api/friends.js"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
