import { Button } from 'react-bootstrap';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, img, Description } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        // navigate(/service/${id});
    }
    return (
       <div className='container'>
            <div className='service text-white'>
        
        <div className='text-center'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p><small>{Description}</small></p>
            {/* <button onClick={() => navigateToServiceDetail(id)} className='btn btn-warning'>See More</button> */}
        </div>
    </div>
       </div>
           
          
       
    );
};

export default Service;