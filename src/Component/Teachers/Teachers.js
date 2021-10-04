import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import './Teachers.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('./Teachers.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    return (
        <div>
            <h2> Our Special {teachers.length} Teacher</h2>
            <div className="teachers">
                {
                    teachers.map(teacher => <Teacher name={teacher.name} subject={teacher.subject} image={teacher.image}></Teacher>)
                }



            </div>
            <h4>Thank you For visit our Page</h4>


        </div>
    );
};

function Teacher(props) {
    return (
        <div>
            <div className="teacher-style">
                <img className="photos" src={props.image} />
                <h4>{props.name}</h4>
                <h4>{props.subject}</h4>
                <button >Details</button>

            </div>

        </div>

    )
}

export default Teachers;









