import React from 'react';
import {Message} from 'semantic-ui-react';
// import NavBar from '../NavBar';
// import SearchBar from '../SearchBar'
// import ShowSearchResults from '../ShowSearchResults'
// import Footer from '../Footer';
import SelectedDrug from '../SelectedDrug'

class MainContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            searchResults: '',
            showResults: false,
            noResults: false,
            selectedDrug: '',
            showDrugInfo: false,
            similarDrugs: ''
        }
    }
    // componentDidMount = () => {
        
    // }
    // searchRequest = async (searchString) => {
    //     if(searchString !== ''){
    //         try{
    //             const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${searchString}&limit=100`)
    //             if(response.status === 200){
    //                 const parsedResponse = await response.json()
    //                 const responseResult = parsedResponse.results
    //                 console.log(responseResult)
    //                 this.setState({
    //                     searchResults: responseResult,
    //                     noResults: false,
    //                     showResults: true,
    //                     showDrugInfo: false
    //                 })
    //             } else{
    //                 this.setState({
    //                     searchResults: `No results found for ${searchString}`,
    //                     showResults: false,
    //                     noResults: true,
    //                     showDrugInfo: false
    //                 })
    //             }
    //         } catch(err){
    //             console.log(err);
    //         }
    //     }
    // }
    // searchRequest = async (searchString) => {
    //     if(searchString !== ''){
    //         const response = await fetch(`${process.env.REACT_APP_API_URL}/search/${searchString}`)
    //         const parsedResponse = await response.json()
    //         console.log(parsedResponse.results)
    //         this.setState({
    //             searchResults: parsedResponse.results,
    //             noResults: false,
    //             showResults: true,
    //             showDrugInfo: false
    //         })
    //     }

    // }
    getSelectedDrugInformation = async (id) => {
        const searchResponse = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.spl_id:${id}&limit=1`)
        console.log('1', searchResponse)
        if(searchResponse.status === 200){
            const searchParsedResponse = await searchResponse.json()
            console.log('2',searchParsedResponse.results[0])
            const similarDrugResponse = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.generic_name.exact:${searchParsedResponse.results[0].openfda.generic_name}&limit=5`)
            console.log('3', similarDrugResponse)
            if(similarDrugResponse.status === 200){
                const similarParsedResponse = await similarDrugResponse.json()
                console.log('4', similarParsedResponse.results)
                this.setState({
                    selectedDrug: searchParsedResponse.results[0],
                    noResults: false,
                    showResults: false,
                    showDrugInfo: true,
                    similarDrugs: similarParsedResponse.results
                })
            }
        }
    }
    render(){
        return(
            <div>
                {/* <NavBar /> */}
                {/* <SearchBar searchRequest={this.searchRequest} handleEnter={this.onKeyPress}/> */}
                <h1>Main body</h1>
                {/* {this.state.showResults ? <ShowSearchResults searchResults={this.state.searchResults} showDrugInformation={this.getSelectedDrugInformation} /> : null} */}
                {this.state.noResults ? <Message>{this.state.searchResults}</Message> : null}
                {this.state.showDrugInfo ? <SelectedDrug selectedDrug={this.state.selectedDrug} similarDrugs={this.state.similarDrugs} /> : null}
                {/* <Footer /> */}
            </div>
        )
    }
}

export default MainContainer;