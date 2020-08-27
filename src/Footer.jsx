import React from 'react';
import './App.css';

function Footer() {
  
    
    const year = new Date().getFullYear();
  
    return(
    <>
        <div className = "footer">  
        <span> Copyright {year}</span> 
        </div>
    </>

  );
}

export default Footer;