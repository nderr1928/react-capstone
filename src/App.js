import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import MainContainer from './MainContainer'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import Footer from './Footer'
import SearchResultsPage from './SearchResultsPage'
import SelectedDrugPage from './SelectedDrugPage'

const my404 = () => {
  return(
    <div>
      <h1>Error!</h1>
    </div>
  )
}

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			loginModal: false,
            registerModal: false,
			isLogged: false,
			errMsg: null
		}
	}
	componentDidMount = () => {
		this.checkLogged()
	}
	checkLogged = () => {
        // console.log(sessionStorage.getItem('sessionUserId').toString())
        // console.log(sessionStorage.getItem('sessionUserId').toString() !== 'null')
        if(sessionStorage.getItem('sessionUserId')){
			this.setState({
				isLogged: true
			})
		} else{
			this.setState({
				isLogged: false
			})
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

        if(parsedResponse.status.code === 200){
            sessionStorage.setItem('sessionUserId', parsedResponse.data.id)
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

        if(parsedResponse.status.code === 201){
			sessionStorage.setItem('sessionUserId', parsedResponse.data.id)
            this.setState({
                errMsg: '',
                isLogged: true
            })
            this.closeRegister()
        } else{
            this.setState({
                errMsg: parsedResponse.status.message
            })
        }
	}
	handleLogout = async () => {
        sessionStorage.removeItem('sessionUserId')
        // const logoutUser = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/logout`)
        this.setState({
			isLogged: false,
			errMsg: null
        })
    }
	render(){
		return (
		  <main>
			<NavBar handleLogin={this.handleLogin} handleRegister={this.handleRegister} 
				handleLogout={this.handleLogout} isLogged={this.state.isLogged} 
				errMsg={this.state.errMsg} loginModal={this.state.loginModal} 
				registerModal={this.state.registerModal} openLogin={this.openLogin}
				closeLogin={this.closeLogin} openRegister={this.openRegister}
				closeRegister={this.closeRegister}
			/>
			<SearchBar />
			<Switch>
			  <Route exact path='/' render={(props) => <MainContainer {...props} isLogged={this.state.isLogged}/>} />
			  <Route exact path='/features' component= {MainContainer} />
			  <Route exact path='/disclaimer' component= {MainContainer} />
			  <Route exact path='/resources' component= {MainContainer} />
			  <Route exact path='/search/:brand_name' render={(props) => <SearchResultsPage {...props}/>}/>
			  <Route path='/:id' render={(props) => <SelectedDrugPage {...props} isLogged={this.state.isLogged}/>} />
			  <Route component = {my404} />
			</Switch>
			<Footer/>
		  </main>
		)
	}
}

export default App;
