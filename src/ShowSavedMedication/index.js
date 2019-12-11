import React from 'react'
import {Card, Header, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const ShowSavedMedication = (props) => {
    // console.log('passed props', props.savedMedicines)
    const mappedMedicines = props.savedMedicines.map((medicine) => {
        // console.log('medicine:', medicine)
        return(
            <Card key={medicine.id}>
                <Header style={{margin: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                    <Button floated='left' icon="edit outline" style={{padding: '10px'}} onClick={() => props.openEditModal(medicine)}></Button>
                    <Link to={{
                        pathname: `/${medicine.drug_id}`
                        }} style={{margin: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignContent: 'center'}}>
                        <h3 style={{textAlign: 'center'}}>{medicine.brand_name}</h3>
                    </Link>
                    <Button color='red' floated='right' icon="trash alternate outline" style={{padding: '10px'}} onClick={() => props.deleteMedicine(medicine.id)}></Button>
                </Header>
                <Card.Content style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                    <h4 style={{margin: ' 5px'}}>Instructions: Take {medicine.dosage} {medicine.dosage_unit} every {medicine.frequency_value} {medicine.frequency_unit}.</h4><br/>
                    <h4 style={{margin: ' 5px'}}>Quantity Remaining: {medicine.quantitiy}</h4><br/>
                    <h4 style={{margin: ' 5px'}}>Last taken: {medicine.last_taken}</h4>
                </Card.Content>
                <Card.Content extra>
                    <Button fluid onClick={() => props.updateTime(medicine.id)}>Take dose</Button>
                </Card.Content>
            </Card>
        )
    }) 
    return(
        <React.Fragment>
            {mappedMedicines}
        </React.Fragment>
        // <h1>medicines</h1>
    )
}

export default ShowSavedMedication;