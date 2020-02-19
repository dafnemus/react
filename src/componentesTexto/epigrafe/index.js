import React from 'react';
import './style.css';

function Epigrafe({ text, className}){
    return(
        <p className={"epigrafe " + className}>{text}</p>
    );
};

export default Epigrafe;