import { Columns } from "react-bulma-components"
import { ProductList } from "../features/products/ProductList"
import 'bulma/css/bulma.min.css'


export const Home =()=>{

    return(
        <Columns>
            <h2 className="Heading">Products</h2>
            <Columns.Column>
                < ProductList />
            </Columns.Column>
        </Columns>
    )
}