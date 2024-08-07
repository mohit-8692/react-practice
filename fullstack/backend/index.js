import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("server is connected");
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            name:"joke 1",
            content:"lorem20"
        },
        {
            id:2,
            name:"joke 2",
            content:"lorem30"
        },
        {
            id:3,
            name:"joke 3",
            content:"lorem30"
        }
    ]

    res.send(jokes);
})
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("app is running on port 3000 ")
})