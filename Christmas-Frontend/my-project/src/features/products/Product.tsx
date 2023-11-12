import { IProduct } from "../../models/IProduct"
import { Link } from "react-router-dom"
import testPicture from '../../assets/images/testBild.jpg'
import style from './Product.module.css'

type ProductProps ={
    id: number;
    produkt: string;
    pris: number;
    beskrivning: string;
    lagerSaldo: number;
}


export const Product =({ id, produkt, pris, beskrivning, lagerSaldo }: ProductProps)=>{
    

    return(
        <Link to={`/products/${id}`} state={{beskrivning, lagerSaldo, produkt, pris}} className={style.link}>
            <div key={id} className={style.card}>
                    <img src={testPicture} alt={produkt} />
                    <div>
                        <strong>{produkt}</strong>
                        <p>Pris: {pris}kr</p>
                    </div>
            </div>
        </Link>
    )
}