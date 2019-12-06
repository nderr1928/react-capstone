// import React from 'react'
// import {Card} from 'semantic-ui-react';

// const ShowDrug = (props) => {
//     console.log(props)
//     const mappedSimilarDrugs = props.similarDrugs.map((similarDrug) => {
//         return(
//             <li key={similarDrug.openfda.spl_id}>{similarDrug.openfda.brand_name}</li>
//         )
//     })
//     return(
//         <Card>
//             <Card.Header>
//                 Brand Name: {props.selectedDrug.openfda.brand_name} <br />
//                 Manufacturer: {props.selectedDrug.openfda.manufacturer_name}
//             </Card.Header>
//             <Card.Content>
//                 <ul>
//                     <li>{props.selectedDrug.purpose}</li>
//                     <li>Intake Method: {props.selectedDrug.openfda.route}</li>
//                 </ul>
//             </Card.Content>
//             <Card.Content extra>
//                 <p>Similar products(based on <a href='https://www.goodrx.com/blog/brand-vs-generic-drugs-whats-the-difference/#:~:targetText=Due%20to%20trademark%20laws%2C%20generic,reflux%20disease%2C%20or%20GERD)'>generic name):</a></p>
//                 <ul>
//                     {mappedSimilarDrugs}
//                 </ul>
//             </Card.Content>
//         </Card>
//     )
// }

// export default ShowDrug;