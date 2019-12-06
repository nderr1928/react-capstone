import React from 'react';
import {Card} from 'semantic-ui-react';

const ShowSearchResults = (props) => {
    console.log("search result props:",props.searchResults)
    if(typeof(props.searchResults) === 'string'){
        return ''
    } else{
        const mappedResults = props.searchResults.map((foundResult) => {
                return(
                    <Card key={foundResult.id}>
                        <Card.Content>
                            {foundResult.openfda.brand_name}
                        </Card.Content>
                    </Card>
                )
            })
        return(
            <div style={{height: '100%'}}>
                <ul>
                    {mappedResults}
                    <p style={{textAlign: 'center', fontWeight: 'bold'}}>If you do not see what you need, try a more specific search</p>
                </ul>
            </div>
        )
    }
}

export default ShowSearchResults;