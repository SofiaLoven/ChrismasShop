import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as fs from 'node:fs';

dotenv.config({path: './config/.env'});
const path = './data/mock-data.json';

const app = express()

app.use(cors());
//app.use('/api/products', products);

//Hämtar alla producter
app.get('/api/products/list', (req, res)=>{
    fs.readFile(path, 'utf8', (err, data)=>{
        if(err){
            res.status(404).json({sucess: false, message: 'Failed to find youre products'});
        }else{
            res.status(200).json({sucess: true, message: 'Products', data: JSON.parse(data)});
        }
    })

})

//Hämtar produkter med visst id
app.get('/api/products/:id', async (req, res)=>{
    const id = req.params.id;
    let product = {};
    fs.readFile(path, 'utf8', (err, data)=>{
        if (data.length > 0) {
          const allProducts = JSON.parse(data);
          product = {
            ...allProducts.products.find((product) => product.id === Number(id)),
          };
        }else{
            throw err; 
        }
    
        if(err){
            res.status(404).json({sucess: false, message: 'Failed to find a product with that id.'});
        }else{
            res.status(200).json({sucess: true, message: `Product with the id: ${id}`, data: product});
        }

    });

})

//Hämtar sökta produkter
app.get('/api/products/search/:query', async (req, res)=>{
    const query = req.params.query;
    let product = {};
    fs.readFile(path, 'utf8', (err, data)=>{
        if (data.length > 0) {
          const allProducts = JSON.parse(data);
          product = {
            ...allProducts.products.filter((product) => product.produkt.toLowerCase().includes(query.toLowerCase())),
          };
        }else{
            throw err; 
        }
    
        if(err){
            res.status(404).json({sucess: false, message: 'Failed to find any product in that search.'});
        }else{
            res.status(200).json({sucess: true, message: `All products that includes ${query}`, data: product});
        }

    });

})

const PORT = 3000 | process.env.PORT

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
