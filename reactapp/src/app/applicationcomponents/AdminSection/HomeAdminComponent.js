import React from "react";
import { NavLink } from "react-router-dom";

let HomeAdminComponent = () => {

    return (
        <>
        <div>
            <hr/>
            <NavLink to="/registerVaccine" className="button">Register a Vaccine</NavLink>
            <NavLink to="/hospitals" className="button">Hospitals</NavLink>
            <NavLink to="/registerHospital" className="button" >Register a Hospital</NavLink>
        </div>
        </>
    )
}

export default HomeAdminComponent;