const express = require("express");
const cors = require("cors");
const { destination } = require("./db/db");
const { createDestination, updateDestination } = require("./types/types");
const app = express();

app.use(express.json());
app.use(cors())
let places = [];

app.use((req, res ,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/home', async (req, res) => {
    
    try{
        const destinationData = await destination.find();
        res.json({destination : destinationData});
    }
    catch(error){
        res.status(500).json({msg : "Internal server error : db"})
    }
});


app.post('/post', async (req, res) => {

    const data = req.body;
    const parsedData = createDestination.safeParse(data);
    console.log(data);
    if(!parsedData.success) {
        res.status(411).json({
            msg : "you sent the wrong input"
        });
        return;
    }

    await destination.create({
        title : data.title,
        description : data.description,
        imageLink : data.imageLink,
        location : data.location
    });

    res.json({ msg : "Destination added successfully"});
})

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})