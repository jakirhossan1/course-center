import React from 'react';
import './Courses.css';

import { useEffect, useState } from 'react/cjs/react.development';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (


        <div>
            <h2> Total Course : {courses.length}</h2>
            <div className="courses">
                {
                    courses.map(course => <Course name={course.name}
                        regular={course.regular}
                        fastrack={course.fastrack}
                        crash={course.crash} img={course.image} ></Course>)
                }



            </div>
            <h4>Thank you For visit our Page</h4>


        </div>
    );
};
function Course(props) {
    return (
        <div>
            <div className="course-style">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBanmXx7_Cl4y-GrGU82W95WUN_o9Q5F412pk383ZqiVeAvZWo_DKXsxL1D_POnN_JXE&usqp=CAU" />
                <h4>{props.name} Course</h4>
                <p>Regular: {props.regular}</p>
                <p>Fastrack : {props.fastrack}</p>
                <p>Crash : {props.crash}</p>
                <button className="btn">Buy Course</button>

            </div>
        </div>
    )
}

export default Courses;