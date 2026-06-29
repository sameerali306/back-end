import express from 'express'

const app=express();
app.get('/',(req,res)=>{
    res.send('server is ready..');

})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"the first joke",
            description:"hahaha"
        },
        {
            id:2,
            title:"the second joke",
            description:"hello"
        },
        {
            id:3,
            title:"the third joke",
            description:"hi"
        },
        {
            id:4,
            title:"the fourth joke",
            description:"lalalala"
        }
    ]
    res.send(jokes)
})

const port=process.env.PORT ||5000;

app.listen(port,()=>{
    console.log(`server run at http://localhost:${port}`);
    
})
