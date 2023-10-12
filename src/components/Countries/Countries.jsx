import React, { useEffect, useState } from 'react';
import "./Countries.css"
import Country from '../Country/Country';

const Countries = () => {
    const [countries,setCountries]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])


    return (
        <div>
            <h1 className='countries-title'>Hello all countries</h1>
            <h5 className='countries-count'>Total Countries: {countries.length}</h5>

            <div className='countries-details'>
                    {
                        countries.map(country=> <Country 
                            country={country}
                            key={country.cca3}
                            
                            ></Country>)
                    }
            </div>
            
        </div>
    );
};

export default Countries;