import React from 'react';
import './Services.css';

import { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (


        <div>
            <h2> Total Service : {services.length}</h2>
            <div className="services">
                {
                    services.map(service => <Service name={service.name}

                        image={service.image} ></Service>)
                }


            </div>
            <h4>Thank you For visit our Page</h4>


        </div>
    );
};
function Service(props) {
    return (
        <div>
            <div className="service-style">
                <img src={props.image} alt="" />
                <h2>{props.name}</h2>

            </div>
        </div>
    )
}

export default Services;