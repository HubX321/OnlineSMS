const express= require ('express');
const cors = require ('cors');
const pool = require ('./db');
require ('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async (req,res)=>{ 
    try {
        res.json('WELCOME TO STUDENT API');
    }
    catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Cart',async(req,res)=>{
    try{
const result = await pool.query ('select * from cart')
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
})

app.get('/Cart_items',async(req,res)=>{
    try{
const result = await pool.query ('select * from cart_items ')
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
})


app.get('/Categories',async(req,res)=>{
    try{
const result = await pool.query ('select * from categories')
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
})



app.get('/Customers',async(req,res)=>{
    try{
const result = await pool.query ('select * from customers ')
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
})


app.get('/Order_items',async(req,res)=>{
    try{
const result = await pool.query ('select * from order_items ')
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
})



app.get('/Orders',async(req,res)=>{
    try{
const result = await pool.query ('select * from orders ')
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
})


app.get('/Payment',async(req,res)=>{
    try{
const result = await pool.query ('select * from payments ')
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
})


app.get('/Products',async(req,res)=>{
    try{
const result = await pool.query ('select * from products ')
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
})


app.get('/Reviewa',async(req,res)=>{
    try{
const result = await pool.query ('select * from reviews ')
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
})


app.get('/Shippers',async(req,res)=>{
    try{
const result = await pool.query ('select * from shippers ')
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
})




const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Successfully...Running on PORT ${PORT}`);
});


