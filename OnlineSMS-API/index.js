const express= require ('express');
const cors = require ('cors');
const pool = require ('./db');
require ('dotenv').config();
// app.use(express.json()); 

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


app.get('/Reviews',async(req,res)=>{
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

// app.get('/:tableName', async (req, res) => {
//   const { tableName } = req.params;
//   try {
//     const result = await pool.query(`SELECT * FROM ${tableName}`);
//     res.json(result.rows);  // <-- seedha array bhej do
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

app.get('/:tableName', async (req, res) => {
  const { tableName } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM ${tableName}`);
    const columns = result.fields.map(field => field.name);
    res.json({
      columns,
      data: result.rows
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.use(express.json()); // make sure this exists before your routes

app.delete('/:table', async (req, res) => {
  const { table } = req.params;
  const { id } = req.body;

  const allowedTables = ['products', 'customers', 'orders']; // whitelist your tables

  if (!allowedTables.includes(table)) {
    return res.status(400).json({ error: 'Invalid table name' });
  }

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  try {
    const result = await pool.query(`DELETE FROM ${table} WHERE id = $1`, [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Record not found' });
    }

    res.json({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error('DELETE error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// app.get('/:tableName', async (req, res) => {
//   const { tableName } = req.params;
//   try {
//     const result = await pool.query(`SELECT * FROM ${tableName}`);
//     const columns = result.fields.map(field => field.name);
//     res.json({
//       columns,
//       data: result.rows
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });
