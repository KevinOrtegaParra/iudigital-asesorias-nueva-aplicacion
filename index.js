const express = require('express');
const {mongoConnet} = require('./src/databases/config');
const proyectoRoutes = require('./src/routes/proyecto')

const dotenv = require("dotenv").config();
const cors = require('cors');
mongoConnet();

const app = express();
const port = process.env.PORT || 9001;

app.use(cors({
    origin: '*'
}))

app.listen(port,() => console.log("server listenig on sport", port));

//Middleware
app.use(express.json());
app.use('/api/v1/proyecto',proyectoRoutes)

//routes
app.get("/",(req,res)=>{
    res.send("Welcome to my api");
})

app.get("*",(req,res)=>{
    res.status(404).json({
        msj: "No encontrado",
        status: 404
    });
})