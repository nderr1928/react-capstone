import React from 'react'
import {Card} from 'semantic-ui-react';


const SimilarDrugs = (props) => {
    // console.log('props passed:', props.similarDrugs.results)
    const mappedSimilarDrugs = props.similarDrugs.results.map((similarDrug) => {
        return(
            <li key={similarDrug.openfda.spl_id}><a href={`/${similarDrug.openfda.spl_id}`}>{similarDrug.openfda.brand_name}</a></li>
        )
    })
    return(
        
        <Card.Content extra>
            <p>Similar products(based on <a href='https://www.goodrx.com/blog/brand-vs-generic-drugs-whats-the-difference/#:~:targetText=Due%20to%20trademark%20laws%2C%20generic,reflux%20disease%2C%20or%20GERD)'>generic name):</a></p>
            <ul>
                {mappedSimilarDrugs}
            </ul>
        </Card.Content>
    )
}

export default SimilarDrugs;