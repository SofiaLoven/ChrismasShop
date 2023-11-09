import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const product: Product = { id: 0, produkt: '', pris: 0, beskrivning: '', lagerSaldo: 0 };
type State = Object

export const getProducts = createAsyncThunk("productSlice/getProducts", async():Promise<Product>=>{
    let response = await axios.get('http://localhost:3003/api/products/list');
    //console.log(response.data);
    return response.data.data.products;
})

const productSlice = createSlice({
    name: "productSlice",
    initialState:{
        products: [{product}],
        status: null,
    },
    reducers:{
        hello: (state, action)=>{
            console.log('Hello there');
        },
        getProducts: async () =>{}
    },
    extraReducers:{
        [getProducts.pending]:(state, action)=>{
            state.status = 'Loading';
        },
        [getProducts.fulfilled]:(state, action)=>{
            state.products = action.payload;
            console.log(state.products);
            state.status = 'Sucess';
        },
        [getProducts.rejected]:(state, action)=>{
            state.status = 'Failed';
        }
    }
})

export const{ hello } = productSlice.actions;
export default productSlice.reducer;