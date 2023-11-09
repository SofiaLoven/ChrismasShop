import {Outlet} from "react-router-dom"
import Header from "../components/header"
import { getProducts } from "../features/products/productSlice";
import { useDispatch } from "react-redux";

export const Root =()=>{
    let dispatch = useDispatch();
    dispatch(getProducts());

    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}