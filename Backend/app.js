import express from "express";
import cors from "cors";
// const express = require('express');

const app = express();
const PORT = 7777;
app.use(cors());



app.get('/', (req, res) => {
    res.send("Hey there!");

})

// AJAX //

// Fetch API 
//let promise = fetch('url',[options]) - get , post ,put
//promise.status -- 200 - success
//promise.ok -- boolean value -- true or false -> 200-299 -> true 
//promise.json(), promise.text()
//postman

app.get('/userData', async(req,res)=>{
    try {
        const data = await fetchData();
        if(data){
            res.json(data);
        }
        else{
            console.log("undefined....")
        }
        
    } catch (error) {
        console.log(error);
    }
})

const fetchData = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response.status);
        console.log(response.ok);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}
fetchData();



const start = async () => {
    try {
        await app.listen(PORT, () => {
            console.log("server is up and running......", PORT);

        })

    } catch (error) {
        console.log(error);
    }

}
start();
