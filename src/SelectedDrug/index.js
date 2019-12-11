import React from 'react'
import {Card, Button, Message} from 'semantic-ui-react';
import SaveMedicineForm from '../SaveMedicineForm';


class SelectedDrug extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result: props.result,
            errMsg: null,
            savedMsg: null,
            isSaved: false,
            saveModal: false
        }
    }
    openSaveModal = () => {
        if(this.props.isLogged === true){
            this.setState({
                saveModal: true
            })
        } else{
            // console.log('not logged')
            this.setState({
                errMsg: 'Must be logged in to use this feature.',
                savedMsg: null
            })
        }
    }
    closeSaveModal = () => {
        this.setState({
            saveModal: false
        })
    }
    saveMedicine = async (information) => {
        try{
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/medicines/save`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(information),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            // console.log(response)
            const parsedResponse = await response.json()
            // console.log(parsedResponse)
            if(parsedResponse.status.code === 201){
                this.setState({
                    savedMsg: 'Medicine saved!',
                    isSaved: true,
                    errMsg: null,
                    saveModal: false
                })
            } else{
                console.log('err')
            }
        } catch(err){
            console.log(err)
        }
    }
    alreadySavedMessage = () => {
        // console.log('already saved')
        this.setState({
            savedMsg: null,
            errMsg: 'Medicine already saved. To unsave, return to the homepage and remove it from your saved medication.'
        })
    }
    render(){
        return(
            <React.Fragment>
                <Card.Header>
                    <h5 style={{display: 'inline'}}>{this.state.result.openfda.brand_name}</h5>
                    {this.state.isSaved ? <Button icon='save' floated='right' onClick={this.alreadySavedMessage}></Button> : <Button icon='save outline' floated='right' onClick={this.openSaveModal}></Button>}
                    {this.state.errMsg ? <Message negative>{this.state.errMsg}</Message>: null}
                    {this.state.savedMsg ? <Message positive>{this.state.savedMsg}</Message> : null}
                </Card.Header>
                <Card.Content>
                    <ul>
                        <li>Manufacturer: {this.state.result.openfda.manufacturer_name}</li>
                        <li>Purpose: {this.state.result.purpose}</li>
                        <li>Intake Method: {this.state.result.openfda.route}</li>
                    </ul>
                </Card.Content>
                <SaveMedicineForm open={this.state.saveModal} close={this.closeSaveModal} brand_name={this.state.result.openfda.brand_name} brand_id={this.state.result.openfda.spl_id} handleSubmit={this.saveMedicine} />
           </React.Fragment>
        )
    }
}

export default SelectedDrug;