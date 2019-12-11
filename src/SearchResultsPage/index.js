import React from 'react'
import ShowSearchResults from '../ShowSearchResults'

class SearchResultPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchString: this.props.match.params.brand_name,
            response: '',
            showResults: false,
            noResults: false
        }
    }
    componentDidMount = () => {
        this.searchRequest(this.state.searchString)
        // console.log('search querry:',this.state.searchString)
    }
    searchRequest = async (searchString) => {
        try{
            if(searchString !== ''){
                const response = await fetch(`${process.env.REACT_APP_API_URL}/search/${searchString}`)
                const parsedResponse = await response.json()
                // console.log('function', parsedResponse.results)
                // console.log('function length', parsedResponse.results.length)
                if(parsedResponse.results.length){
                    this.setState({
                        response: parsedResponse.results,
                        showResults: true,
                        noResults: false
                    })
                } else{
                    this.setState({
                        response: '',
                        showResults: false,
                        noResults: true
                    })
                }
                // console.log('search result:', this.state.response)
            } else{
                this.setState({
                    response: 'Cannot search an empty field'
                })
                // console.log('search result:', this.state.response)
            }
        } catch(err){
            // console.log(err)
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1 style={{margin: '0'}}>Results from {this.state.searchString}</h1>
                {this.state.showResults ? <ShowSearchResults searchResults={this.state.response} /> : null}
                {this.state.noResults ? <h3>No results found</h3>: null}
            </React.Fragment>
        )
    }
}

export default SearchResultPage;