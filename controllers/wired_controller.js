// Dependencies 
let axios = require('axios'); 
let cheerio = require('cheerio'); 
let db = require("../models"); 

// Exports
module.exports = (app) => {
   //Get an Article from Wired
    app.get("/", (req, res) =>  {
      axios.get("https://www.wired.com/most-popular/").then((response) => {
        }) 
    });
  
    
    app.get("/articles", function(req,res){
     
     
    });
  
    
    app.get("/comment/:id", function(req, res) {
        
      
    });
    // Save an Article 
    app.post("/saveArticle", (req,res) => {
          })
    
    //Add a comment
    app.post("/comment", function(req, res) {
    });
    // Delete article from saved 
    app.delete("/article/:id", function(req,res) {
    })
  
    // Delete comment from db
    app.delete("/comment/:id", function(req,res) {
      
    })
  
  } 