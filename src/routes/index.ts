import express from "express";

const routes = express.Router();


routes.get('/images',(req,res)=>{
    res.send("Image loaded successfully")
});

export default routes;
