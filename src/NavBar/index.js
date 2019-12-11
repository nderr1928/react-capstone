import React from 'react';
import {Header, Button} from 'semantic-ui-react'
import Login from '../Login'
import Register from '../Register';
import {Link} from 'react-router-dom'
// import Account from '../Account';

const NavBar = (props) => {
    return(
        <Header style={{width: '100vw', backgroundColor: '#669ad4', height: '100%', margin: '0', border: '2px #809bbb solid', display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', gridTemplateRows: '1fr'}}>
            <Link to='/'>
                <h1 style={{margin: '0', gridColumn: '1', gridRow: '1', textAlign: 'center', color: 'black'}}>ApotheRx</h1>
            </Link>
            {props.isLogged ? 
                <Button basic secondary floated='right' onClick={props.handleLogout} style={{margin: '2px 2px 2px 0', gridColumn: '3', gridRow: '1'}} fluid>Logout</Button>
                :
                <Button.Group style={{margin: '2px 2px 2px 0', gridColumn: '3', gridRow: '1'}}>
                    <Button onClick={props.openLogin} primary>Login</Button>
                    <Button.Or />
                    <Button onClick={props.openRegister} secondary>Register</Button>
                </Button.Group>
            } 
            <Login open={props.loginModal} closeLogin={props.closeLogin} handleLogin={props.handleLogin} errMsg={props.errMsg}/> 
            <Register open={props.registerModal} closeRegister={props.closeRegister} handleRegister={props.handleRegister} errMsg={props.errMsg}/>
        </Header>
    )
}

export default NavBar;

