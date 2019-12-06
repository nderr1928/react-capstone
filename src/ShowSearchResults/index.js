import React from 'react';
import {Card} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const ShowSearchResults = (props) => {
    console.log("search result props:",props.searchResults)
    if(typeof(props.searchResults) === 'string'){
        return ''
    } else{
        const mappedResults = props.searchResults.map((foundResult) => {
                return(
                    <Card key={foundResult.id} href={`/${foundResult.id}`}>
                        <Card.Content>
                            {foundResult.openfda.brand_name}
                        </Card.Content>
                    </Card>
                )
            })
        return(
            <div style={{height: '100%'}}>
                {mappedResults}
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>If you do not see what you need, try a more specific search</p>
            </div>
        )
    }
}

export default ShowSearchResults;