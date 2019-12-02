import React from 'react';
import {Card, Button} from 'semantic-ui-react';
import Login from '../Login';
import NavBar from '../NavBar'

class MainContainer extends React.Component{
    constructor(){
        super();
    }
    // componentDidMount = () => {
    //     this.getPlants()
    // }
    // getPlants = async () => {
    //     try{
    //         const plantsUrl = 'https://trefle.io/api/kingdoms?token=STlRSFd4YkpUMHJnaWxBUXYxcjZ5UT09'
    //         const plantsResponse = await fetch(plantsUrl, {
    //             method: 'GET'
    //         })
    
    //         const parsedResponse = await plantsResponse.json()
    //         console.log(parsedResponse)

    //     } catch(err){
    //         console.log(err)
    //     }
    // }
    
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