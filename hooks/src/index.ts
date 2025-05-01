import { Express } from "express";

const app: Express = require("express")();



app.post("/hooks/catch/:userID/:zapID/", (req, res) => {
   const userID = req.params.userID;
   const zapID = req.params.zapID;
  
   //store a db i n new triggred
});
