import React from 'react';
import {Header, Button} from 'semantic-ui-react'
import Login from '../Login'
import Register from '../Register';

class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {
            loginModal: false,
            regitserModal: false,
            isLogged: false
        }
    }
    openLogin = () => {
        this.setState({
            loginModal: true
        })
    }
    closeLogin = () => {
        this.setState({
            loginModal: false
        })
    }
    openRegister = () => {
        this.setState({
            registerModal: true
        })
    }
    closeRegister = () => {
        this.setState({
            registerModal: false
        })
    }
    render(){
        return(
                <Header style={{width: '100vw'}}>
                    {this.state.isLogged ? 
                        <Button color='red'>Logout</Button>
                        :
                        <Button.Group floated='right'>
                            <Button onClick={this.openLogin} color='green'>Login</Button>
                            <Button.Or />
                            <Button onClick={this.openRegister} color='blue'>Register</Button>
                        </Button.Group>
                    } 
                    <Login open={this.state.loginModal} closeLogin={this.closeLogin} /> 
                    <Register open={this.state.registerModal} closeRegister={this.closeRegister} />
                </Header>
        )
    }
}

export default NavBar;

