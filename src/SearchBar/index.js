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