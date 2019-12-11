import React from 'react';
import {Modal, Form, Button, Message, Header} from 'semantic-ui-react';


class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <Modal open = {this.props.open} dimmer style={{width: '80vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignContent: 'space-around'}}>
                <Header>
                    <h1 style={{textAlign: 'center', display: 'inline'}}>Register</h1>
                    <Button icon='close' onClick={this.props.closeRegister} negative circular style={{padding: '0', margin: 'auto 2px'}} floated='right'></Button>
                </Header>
                <Form style={{width: '100%'}}>
                    <Form.Input
                        icon = 'at'
                        iconPosition = 'left'
                        required
                        placeholder='Email'
                        name='email'
                        type='email'
                        value = {this.state.email}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        icon = 'lock'
                        iconPosition = 'left'
                        required
                        placeholder='Password'
                        name='password'
                        type='password'
                        value = {this.state.password}
                        onChange={this.handleChange}
                    />
                    <Button basic color='green' type='submit' onClick={() => this.props.handleRegister(this.state)}>Register</Button>
                </Form>
                {this.props.errMsg ? <Message negative>{this.props.errMsg}</Message> : null}
            </Modal>
        )
    }
}

export default Register;