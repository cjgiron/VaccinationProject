import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AgeChart from "../Charts/AgeChart";
import GenderPie from "../Charts/GenderChart";
import DiseasePie from "../Charts/DiseaseChart";
import MedicalCertPie from "../Charts/MedicalCertChart";

let PatientComponent = () =>{

    const user = useSelector((state) => state.userReducer.user);
    
    return (
        <>
            { user.name !== "" ?
            <Fragment>
                <NavLink to="/userAppointments" className="button">My Appointments</NavLink>
                <hr/>
                <h1>{"Patient Statistics"}</h1>
                <hr/>
                <AgeChart/>
                <GenderPie/>
                <DiseasePie/>
                <MedicalCertPie/>
            </Fragment>
            : 
            <p>{"Please login to see these features"}</p>
            }
        </>
    )

}

export default PatientComponent;