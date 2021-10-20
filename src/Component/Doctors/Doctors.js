import React from 'react';
import { useEffect, useState } from 'react';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./Doctors.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <h2> Our Special {doctors.length} Doctors</h2>
            <div className="doctors">
                {
                    doctors.map(doctor => <Doctor name={doctor.name}
                        subject={doctor.subject} image={doctor.image}
                        date={doctor.date} time={doctor.time}
                        graduate={doctor.graduate}></Doctor>)
                }



            </div>
            <h4>Thank you For visit our Page</h4>


        </div>
    );
};

function Doctor(props) {
    return (
        <div>
            <div className="doctor-style">
                <img className="photos" src={props.image} alt="" />
                <h4>{props.name}</h4>
                <h5>{props.graduate}</h5>
                <h4>{props.subject}</h4>
                <p>Time : {props.time}</p>
                <p>Date : {props.date}</p>
                <button >Details</button>

            </div>

        </div>

    )
}

export default Doctors;









