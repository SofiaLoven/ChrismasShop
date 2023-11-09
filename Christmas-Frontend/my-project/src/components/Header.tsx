import 'bulma/css/bulma.min.css';
import { Heading, Columns  } from 'react-bulma-components'

const Header =()=>{

    return(
        <Columns>
            <Columns.Column>
                <Heading>The Winter Store</Heading>
            </Columns.Column>
            <Columns.Column>
                <Heading subtitle>Buy all youre christmas and new years items here</Heading>
            </Columns.Column>
        </Columns>
    )
}

export default Header;