import React from 'react';
import {Header, Button, Search} from 'semantic-ui-react'
import Login from '../Login'
import Register from '../Register';
import Account from '../Account';

class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {
            loginModal: false,
            registerModal: false,
            accountModal: false,
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
    openAccount = () => {
        this.setState({
            accountModal: true
        })
    }
    closeAccount = () => {
        this.setState({
            accountModal: false
        })
    }
    render(){
        return(
            <Header style={{width: '100vw', backgroundColor: '#669ad4', height: '100%', margin: '0', border: '2px #809bbb solid', display: 'grid', gridTemplateColumns: '1fr 3fr 1fr', gridTemplateRows: '1fr'}}>
                <h1 style={{margin: '0', display: 'inline', gridColumn: '1', gridRow: '1', alignSelf: 'center'}}>Title</h1>
                <div style={{width: '100%', backgroundColor: '#669ad4', height: '40px', margin: '0', border: '2px #809bbb solid', gridColumn: '2', gridRow: '1', alignContent: 'center'}}>
                    <Search style={{margin: '0', display: 'inline'}} />
                    <Button>Browse all</Button>
                </div>
                {this.state.isLogged ? 
                    <Button basic secondary floated='right'>Logout</Button>
                    :
                    // <Button onClick={this.openAccount} floated='right' style={{margin: 'auto 2px auto 0'}} secondary>Login/Register</Button>
                    <Button.Group style={{margin: '2px 2px 2px 0', gridColumn: '3', gridRow: '1'}}>
                        <Button onClick={this.openLogin} primary>Login</Button>
                        <Button.Or />
                        <Button onClick={this.openRegister} secondary>Register</Button>
                    </Button.Group>
                } 
                <Login open={this.state.loginModal} closeLogin={this.closeLogin} /> 
                <Register open={this.state.registerModal} closeRegister={this.closeRegister} />
                {/* <Account open={this.state.accountModal} closeAccount={this.closeAccount} /> */}
            </Header>
        )
    }
}

export default NavBar;

