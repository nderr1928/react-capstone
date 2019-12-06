import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import MainContainer from './MainContainer'
// import ShowSearchResults from './ShowSearchResults'
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

function App() {
  return (
    <main>
      <NavBar />
      <SearchBar />
      <Switch>
        <Route exact path='/' component = {MainContainer} />
        <Route exact path='/features' component= {MainContainer} />
        <Route exact path='/disclaimer' component= {MainContainer} />
        <Route exact path='/resources' component= {MainContainer} />
        <Route exact path='/search/:brand_name'  render={(props) => <SearchResultsPage {...props}/>}/>
        <Route path='/:id' component={SelectedDrugPage} />
        <Route component = {my404} />
      </Switch>
      <Footer/>
    </main>
  );
}

export default App;
