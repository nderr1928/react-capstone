import React from 'react';
import {Header, Button} from 'semantic-ui-react'
import Login from '../Login'
import Register from '../Register';
import {Link} from 'react-router-dom'
// import Account from '../Account';

class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {
            loginModal: false,
            registerModal: false,
            accountModal: false,
            isLogged: false,
            errMsg: ''
        }
    }
    openLogin = () => {
        this.setState({
            loginModal: true
        })
    }
    closeLogin = () => {
        this.setState({
            loginModal: false,
            errMsg: null
        })
    }
    handleLogin = async (information) => {
        const loginUrl = `${process.env.REACT_APP_API_URL}/api/v1/users/login`;
        const loginResponse = await fetch(loginUrl, {
            method: "POST",
            body: JSON.stringify(information),
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
            this.setState({
                errMsg: '',
                isLogged: true
            })
			this.closeLogin()
        } else{
            this.setState({
                errMsg: parsedResponse.status.message
            })
        }
    }
    openRegister = () => {
        this.setState({
            registerModal: true
        })
    }
    closeRegister = () => {
        this.setState({
            registerModal: false,
            errMsg: ''
        })
    }
    handleRegister = async (information) => {
        const registerUrl = `${process.env.REACT_APP_API_URL}/api/v1/users/register`;
        const registerResponse = await fetch(registerUrl, {
            method: "POST",
            body: JSON.stringify(information),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await registerResponse.json();
		console.log(parsedResponse);

        if(parsedResponse.status.code === 201){
			console.log(parsedResponse.data.id)
			localStorage.setItem('sessionUserId', parsedResponse.data.id)
            this.setState({
                errMsg: '',
                isLogged: true
            })
            this.closeRegister()
        } else{
            this.setState({
                errMsg: parsedResponse.status.message
            })
            console.log(this.state.errMsg)
        }
    }
    handleLogout = async () => {
        localStorage.setItem('sessionUserId', null)
        this.setState({
            isLogged: false
        })
    }
    render(){
        return(
            <Header style={{width: '100vw', backgroundColor: '#669ad4', height: '100%', margin: '0', border: '2px #809bbb solid', display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', gridTemplateRows: '1fr'}}>
                <Link to='/'>
                    <h1 style={{margin: '0', gridColumn: '1', gridRow: '1', textAlign: 'center', color: 'black'}}>Title</h1>
                </Link>
                {this.state.isLogged ? 
                    <Button basic secondary floated='right' onClick={this.handleLogout} style={{margin: '2px 2px 2px 0', gridColumn: '3', gridRow: '1'}} fluid>Logout</Button>
                    :
                    <Button.Group style={{margin: '2px 2px 2px 0', gridColumn: '3', gridRow: '1'}}>
                        <Button onClick={this.openLogin} primary>Login</Button>
                        <Button.Or />
                        <Button onClick={this.openRegister} secondary>Register</Button>
                    </Button.Group>
                } 
                <Login open={this.state.loginModal} closeLogin={this.closeLogin} handleLogin={this.handleLogin} errMsg={this.state.errMsg}/> 
                <Register open={this.state.registerModal} closeRegister={this.closeRegister} handleRegister={this.handleRegister} errMsg={this.state.errMsg}/>
            </Header>
        )
    }
}

export default NavBar;

