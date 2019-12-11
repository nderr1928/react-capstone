import React from 'react'
import {Modal, Form, Button, Label, Header} from 'semantic-ui-react'

class EditSavedMedicineForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand_name: props.currentMedicine.brand_name,
            drug_id: props.currentMedicine.drug_id,
            dosage: props.currentMedicine.dosage,
            dosage_unit: props.currentMedicine.dosage_unit,
            refill_needed: props.currentMedicine.refill_needed,
            frequency_value: props.currentMedicine.frequency_value,
            frequency_unit: props.currentMedicine.frequency_unit,
            id: props.currentMedicine.id 
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    } 
    componentDidMount = () => {
        // console.log("edit saved modal:",this.state)
    }
    render(){
        return(
            <Modal open={this.props.open}>
                <Form onSubmit={() => this.props.submitEdit(this.state.id, this.state)}>
                    <Header>
                        <Button
                        icon='close'
                        negative
                        circular
                        style={{padding: '0', margin: 'auto 2px', height: '100%'}}
                        floated='right'
                        onClick={this.props.close}
                        ></Button>
                    </Header>
                    <Form.Input 
                        name='brand_name'
                        value={this.state.brand_name}
                        readOnly
                        label='Brand Name'
                    />
                        <Label>
                            Dosage
                        </Label>
                    <Form.Group width='equal'>
                        <Form.Input 
                            name='dosage'
                            value={this.state.dosage}
                            // label='Dosage'
                            onChange={this.handleChange}
                            placeholder='Dosage value'
                            required
                            type='number'
                        />
                        <Form.Input 
                            name='dosage_unit'
                            value={this.state.dosage_unit}
                            onChange={this.handleChange}
                            placeholder='unit, ex- tablets, ml, etc.'
                            required
                            type='text'
                        />
                    </Form.Group>
                        <Label>
                            Frequency
                        </Label>
                    <Form.Group width='equal'>
                        <Form.Input 
                            name='frequency_value'
                            value={this.state.frequency_value}
                            onChange={this.handleChange}
                            placeholder='Frequency value'
                            required
                            type='number'
                        />
                        <Form.Input 
                            name='frequency_unit'
                            value={this.state.frequency_unit}
                            onChange={this.handleChange}
                            placeholder='unit, ex- hour, day, etc.'
                            required
                            type='text'
                        />
                    </Form.Group>
                    <Button>Save</Button>
                </Form>
            </Modal>
        )
    }
}

    


export default EditSavedMedicineForm