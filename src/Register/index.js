import React from 'react';
import {Modal, Form, Button, Message, Header} from 'semantic-ui-react';


class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            errMsg: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleRegister = async (e) => {
        e.preventDefault();
        const registerUrl = `${process.env.REACT_APP_API_URL}/api/v1/users/register`;
        const registerResponse = await fetch(registerUrl, {
            method: "POST",
            body: JSON.stringify(this.state),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await registerResponse.json();
		console.log(parsedResponse);

        if(parsedResponse.status.code === 200){
			console.log(parsedResponse.data.id)
			localStorage.setItem('sessionUserId', parsedResponse.data.id)
			this.props.history.push('/home')
        } else{
            this.setState({
                errMsg: parsedResponse.status.message
            })
            console.log(this.state.errMsg)
        }
    }
    render(){
        return(
            <Modal open = {this.props.open} dimmer style={{width: '80vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignContent: 'space-around'}}>
                <Header>
                    <h1 style={{textAlign: 'center', display: 'inline'}}>Register</h1>
                    <Button icon='close' onClick={this.props.closeRegister} negative circular style={{padding: '0', margin: 'auto 2px'}} float='right'></Button>
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
                    <Button basic color='green' type='submit' onClick={this.handleRegister}>Register</Button>
                </Form>
                {this.state.errMsg ? <Message negative>{this.state.errMsg}</Message> : null}
            </Modal>
        )
    }
}

export default Register;