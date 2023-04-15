console.log("Server Side Logs");
const express = require('express');

const app = express();

const PORT = 8091;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("This response is from App2v2");
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);
