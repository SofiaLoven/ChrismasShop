import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css'

export const ProductList = () =>{
    const { products } = useSelector((store)=>store!.products);

    return(
        <>
        {products.map((product:Product, i:number)=>{
            return (
                <div key={i}>
                    <strong>{product.produkt}</strong>
                </div>
            )
        })}
        </>
    )
}