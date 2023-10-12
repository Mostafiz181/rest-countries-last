import React from 'react';
import "./Country.css"

const Country = (props) => {

    const {name,area,population,flags,region}=props.country;

    console.log(props.country)

    return (
        <div className='country-details'>
            <h3>Country Name: {name.common}</h3>
            <h4>Total Area: {area}</h4>
            <h5>Total Population: {population}</h5>
            <img className='img' src={flags.png} alt="" />
            <h2>Region: {region}</h2>
            
        </div>
    );
};

export default Country;