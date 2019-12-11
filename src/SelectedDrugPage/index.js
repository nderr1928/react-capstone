import React from 'react'
import {Card} from 'semantic-ui-react';
import SimilarDrugs from '../SimilarDrugs'
import SelectedDrug from '../SelectedDrug'

class SelectedDrugPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDrug: this.props.match.params.id,
            result: '',
            similarDrugs: '',
            showSimilarDrugs: false,
            showSelectedDrug: false,
            errMsg: ''
        }
    }
    componentDidMount = () => {
        this.getSelectedDrugInformation(this.state.selectedDrug)
        // console.log('search querry:',this.state.selectedDrug)
    }
    getSelectedDrugInformation = async (id) => {
        const searchResponse = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.spl_id:${id}&limit=1`)
        // console.log('1', searchResponse)
        if(searchResponse.status === 200){
            const searchParsedResponse = await searchResponse.json()
            // console.log('2',searchParsedResponse.results[0])
            const similarDrugResponse = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.generic_name.exact:${searchParsedResponse.results[0].openfda.generic_name}&limit=5`)
            // console.log('3', similarDrugResponse)
            if(similarDrugResponse.status === 200){
                const similarParsedResponse = await similarDrugResponse.json()
                // console.log('4', similarParsedResponse.results)
                this.setState({
                    result: searchParsedResponse.results[0],
                    similarDrugs: similarParsedResponse,
                    showSelectedDrug: true,
                    showSimilarDrugs: true
                })
                // console.log('result:', this.state.result)
                // console.log('Similar drugs:', this.state.similarDrugs.results)
                // console.log('open fda:', this.state.result.openfda.brand_name)
            }
        }
    }
    render(){
        return(
            <Card centered>
                {this.state.showSelectedDrug ? <SelectedDrug result={this.state.result} isLogged={this.props.isLogged}/> : null}
                {this.state.showSimilarDrugs ? <SimilarDrugs similarDrugs={this.state.similarDrugs}/> : null}
            </Card>
        )
    }
}

export default SelectedDrugPage;