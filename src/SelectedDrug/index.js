import React from 'react'
import {Card, Button, Message} from 'semantic-ui-react';


class SelectedDrug extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result: props.result,
            logged: false,
            errMsg: '',
            savedMsg: '',
            isSaved: false
        }
    }
    componentDidMount = () => {
        // console.log('props passed selected drug:', this.state.result)
        this.checkLogged()
    }
    checkLogged = () => {
        console.log('sessionStorage:',sessionStorage.getItem('sessionUserId'))
        // console.log(typeof(1))
        if(sessionStorage.getItem('sessionUSerId') !== null){
            this.setState({
                logged: true
            })
        } else{
            this.setState({
                logged: false
            })
        }
    }
    sendErrMsg = () => {
        if(this.state.logged === true){
            this.setState({
                savedMsg: 'Medicine saved!',
                isSaved: true
            })
        } else{
            this.setState({
                errMsg: 'Must be logged in to use this feature.'
            })
        }
    }
    render(){
        return(
            <React.Fragment>
                <Card.Header>
                    <h5 style={{display: 'inline'}}>{this.state.result.openfda.brand_name}</h5>
                    {this.state.isSaved ? <Button icon='save' floated='right'></Button> : <Button icon='save outline' floated='right' onClick={this.sendErrMsg}></Button>}
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
           </React.Fragment>
        )
    }
}

export default SelectedDrug;