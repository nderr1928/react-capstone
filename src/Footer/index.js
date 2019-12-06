import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <footer style={{position: 'relative', bottom: '0', height: '40px', width: '100%', border: '2px #809bbb solid', backgroundColor: '#669ad4', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          <nav style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <Link to='/features' style={{color: 'black', textDecoration: 'underline'}}>Features</Link>
              <Link to='/disclaimer' style={{color: 'black', textDecoration: 'underline'}}>Disclaimer</Link>
              <Link to='resources' style={{color: 'black', textDecoration: 'underline'}}>Resources</Link>
          </nav>
        </footer>
    )
}

export default Footer;