import React from 'react'
import {Card} from 'semantic-ui-react';


const SelectedDrug = (props) => {
    console.log('props passed selected drug:', props.result)
    return(
        <React.Fragment>
            <Card.Header>
                Brand Name: {props.result.openfda.brand_name} <br />
                Manufacturer: {props.result.openfda.manufacturer_name}
            </Card.Header>
            <Card.Content>
                <ul>
                    <li>{props.result.purpose}</li>
                    <li>Intake Method: {props.result.route}</li>
                </ul>
            </Card.Content>
       </React.Fragment>
    )
}

export default SelectedDrug;