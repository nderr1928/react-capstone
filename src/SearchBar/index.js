import React from 'react';
import {Input, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class SearchBar extends React.Component{
    constructor(){
        super();
        this.state = {
            searchString: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // searchRequest = async (searchString) => {
    //     if(searchString !== ''){
    //         const response = await fetch(`${process.env.REACT_APP_API_URL}/search/${searchString}`)
    //         const parsedResponse = await response.json()
    //         console.log(parsedResponse.results);
    //         // <Redirect to={{
    //         //     pathname: `/search/${this.state.searchString}`,
    //         //     state: { searchResults: parsedResponse.results }
    //         // }} />
    //         this.props.history.push({
    //             pathname: `/search/${this.state.searchString}`,
    //             state: { searchResults: parsedResponse.results }
    //         })
    //         this.setState({
    //             searchString: ''
    //         })
    //     }
    // }
    render(){
        return(
            <div style={{width: '100%', backgroundColor: '#669ad4', height: '40px', margin: '0', border: '2px #809bbb solid', display:'flex', flexDirection: 'row', justifyContent:'space-around', alignContent: 'center'}}>
                <div>
                    <Input icon='search' iconPosition='left' placeholder='Search medicine' name='searchString' value={this.state.searchString} onChange={this.handleChange}/>
                    <Link to={{
                        pathname: `/search/${this.state.searchString}`,
                    }}>
                        <Button  type='button'>Search</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default SearchBar;