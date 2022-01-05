const express=require('express');
const app=express();
const cors=require('cors');
const port=5000;

app.use(cors());
app.use(express.json()); 

app.get('/',(req,res)=>{
    res.send('Hello Mr.NodeJs,whats up?');
})

const users=[
    {
        id:0,name:'alim',age:17,address:'saidpur',email:'alimsiddique18@gmail.com'
    },
    {
        id:1,name:'ahnaf',age:18,address:'saidpur',email:'alimsiddique18@gmail.com'
    },
    {
        id:2,name:'shifat',age:16,address:'saidpur',email:'alimsiddique18@gmail.com'
    },
    {
        id:3,name:'preom',age:19,address:'saidpur',email:'alimsiddique18@gmail.com'
    },
    {
        id:4,name:'zaky',age:20,address:'saidpur',email:'alimsiddique18@gmail.com'
    }
]



app.get('/users',(req,res)=>{
    const search=req.query.search;
    console.log(search);
   if(search){
      const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
      res.send(searchResult)
   }else{
    res.send(users)
   }
})


app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    console.log('hit this post',req.body);
    res.json(newUser);
})


app.get('/users/:id',(req,res)=>{
    const index=req.params.id;
    const user=users[index];
    res.send(user)
})

app.listen(port,()=>{
    console.log('listening  your brand new port' , port);
})