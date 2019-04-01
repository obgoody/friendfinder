// Your `apiRoutes.js` file should contain two routes:
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


// Load express module
// const express = require("express");

// Load path module  
const path = require("path");

const friendData = require("../data/friends.js");

module.exports = (app) => {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    
    // Route that leads to the survey page
    // app.get("/api/friends", (req, res) => {
    //     res.send(`get api/friends ${JSON.stringify(req)}`);
    // });
    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
      });


    // A default, catch-all route that leads to `home.html` which displays the home page.
    app.post("/api/friends", (req, res) => {
        res.send(`post api/friends ${req.friendsData}`);
    });


}; 