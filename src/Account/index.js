import React from 'react';
import {Modal, Form, Button, Message, Header} from 'semantic-ui-react';


class Account extends React.Component{
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
    handleLogin = async (e) => {
        e.preventDefault();
        const loginUrl = `${process.env.REACT_APP_API_URL}/api/v1/users/login`;
        const loginResponse = await fetch(loginUrl, {
            method: "POST",
            body: JSON.stringify(this.state),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await loginResponse.json();
		console.log(parsedResponse);

        if(parsedResponse.status.code === 200){
			console.log(parsedResponse.data.id)
			localStorage.setItem('sessionUserId', parsedResponse.data.id)
			this.props.history.push('/home')
        } else{
            this.setState({
                errMsg: parsedResponse.status.message
            })
        }
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
                    <Button icon='close' onClick={this.props.closeAccount} negative circular style={{padding: '0'}} float='right'></Button>
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
                        onChange = {this.handleChange}
                    />
                    <Form.Input
                        icon = 'lock'
                        iconPosition = 'left'
                        required
                        placeholder='Password'
                        name='password'
                        type='password'
                        value = {this.state.password}
                        onChange = {this.handleChange}
                    />
                    <Button basic color='green' type='submit' onClick={this.handleLogin}>Login</Button>
                    <Button basic color='green' type='submit' onClick={this.handleRegister}>Register</Button>
                </Form>
                {this.state.errMsg ? <Message negative>{this.state.errMsg}</Message> : null}
            </Modal>
        )
    }
}

export default Account;