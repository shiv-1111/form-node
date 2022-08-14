const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const fs = require('fs');
app.use(bodyparser.json());

app.get('/form',(req,res)=>{
    res.sendFile('views/index.html',{root:__dirname})
    // res.send(console.log('successful'))
})

app.post('/login', (req, res)=>{
    console.log(req.body);
    fs.appendFile('register.txt',JSON.stringify(req.body), 
    (err) => {
        if (err) {
            console.log("Unsuccessfull !")
        }
        else{
            console.log("Successfull !")
        }
    });
    res.send('received');
});  

app.listen(8000,() => console.log("Server started!"));