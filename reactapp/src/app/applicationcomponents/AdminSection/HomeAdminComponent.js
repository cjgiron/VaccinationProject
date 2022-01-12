import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

let HomeAdminComponent = () => {

    const user = useSelector((state) => state.userReducer.user);

    console.log("user.name: ", user.name);

    return (
        <>
        { user.name === 'Admin' ? 
        <Fragment>
            <div>
                <hr/>
                <NavLink to="/registerVaccine" className="button">Register a Vaccine</NavLink>
                <NavLink to="/hospitals" className="button">Hospitals</NavLink>
                <NavLink to="/registerHospital" className="button" >Register a Hospital</NavLink>
                <NavLink to="/appointment" className="button" >Schedule Appointment</NavLink>
            </div>
        </Fragment>
        : <p>You must be Admin to access this page</p>
        } 
        </>
    )
}

export default HomeAdminComponent;