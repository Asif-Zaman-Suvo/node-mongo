const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users=['shuvo','shawon','zobayer','sojol','Ragib']

app.get('/', (req, res) =>{

    const fruit={
        products:'ada',
        price:250
    }
    res.send(fruit)
});

app.get('/fruits/banana',(req, res) =>{
    res.send({fruit:'banana',quantity:10000,price:10000})
})

app.get ('/users/:id', (req, res)=>{
    const id= (req.params.id);
    // console.log(req.query.sort)
    const name=users[id];
    res.send({id,name});
})

//post 

app.post('/addUser',(req, res)=>{
    // console.log('data received',req.body);
        const user=req.body;
        user.id=31;
        res.send(user);

})



app.listen(5000 , ()=> console.log('Listening to port no 5000'))