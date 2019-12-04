import React from 'react';
import {Card, Button} from 'semantic-ui-react';
import NavBar from '../NavBar'

class MainContainer extends React.Component{
    constructor(){
        super();
    }
    componentDidMount = () => {
        
    }
    
    render(){
        return(
            <div>
                <NavBar />
                <h1>Main body</h1>
            </div>
        )
    }
}

export default MainContainer;