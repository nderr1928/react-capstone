import React from 'react';
import {Card} from 'semantic-ui-react';
import {useParams} from 'react-router-dom';

const ShowSearchResults = async (props) => {
    // const {brand_name} = useParams()
    // console.log(brand_name)
    // const searchRequest = async (searchString) => {
    //     if(searchString !== ''){
    //         const response = await fetch(`${process.env.REACT_APP_API_URL}/search/${searchString}`)
    //         const parsedResponse = await response.json()
    //         console.log('function',parsedResponse.results)
    //         return parsedResponse.results
    //     }
    // }
    // const foundResults = await searchRequest(params.brand_name)
    // console.log('foundResults',foundResults)
    // const mappedResults = await foundResults.map((foundResult) => {
    //     return(
    //         <Card key={foundResult.id}>
    //             <Card.Content>
    //                 {foundResult.openfda.brand_name}
    //             </Card.Content>
    //         </Card>
    //     )
    // })
    // let mappedResults = null;
    return(
        <div style={{height: '100%'}}>
            <ul>
                {/* {mappedResults} */}
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>If you do not see what you need, try a more specific search</p>
            </ul>
        </div>
    )
}

export default ShowSearchResults;