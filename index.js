const express = require('express');
const port = 8000;
const app = express();

app.listen(port,function(err){
    if(err){
        console.log('Error is running on server');
        console.log("hello world!");
    }
    console.log(`server is running on port: ${port}`);
});