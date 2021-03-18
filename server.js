const express=require('express');
const app=express();
//for adding json bodies
app.use(express.json());

app.post('/add',(req,res)=>{
    if(req.body.x && req.body.y){
        const {x,y}=req.body;
        const result=Number(x)+Number(y);
        res.send({result});
    }else{
        res.sendStatus(400);
    }
    
})

app.post('/mul',(req,res)=>{
    if(req.body.x && req.body.y){
        const {x,y}=req.body;
        const result=Number(x)*Number(y);
        res.send({result});
    }else{
        res.sendStatus(400);
    }
})

app.post('/sub',(req,res)=>{
    if(req.body.x && req.body.y){
        const {x,y}=req.body;
        const result=Number(x)-Number(y);
        res.send({result});
    }else{
        res.sendStatus(400);
    }
})

app.post('/div',(req,res)=>{
    if(req.body.x && req.body.y){
        const {x,y}=req.body;
        const result=Number(x)/Number(y);
        res.send({result});
    }else{
        res.sendStatus(400);
    }
})


app.listen(process.env.PORT || 9999,()=>{
    console.log("Server Running on port:",(process.env.PORT || 9999) )
})