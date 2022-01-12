import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";


let HeaderComponent = (props) => {


    return (
        <>
            <NavLink to="/admin" className="button">Admin Section</NavLink>
            <NavLink to="/patient" className="button">Patient Section</NavLink>
            <NavLink to="/user" className="button">Login</NavLink>
        </>
    )

}

export default HeaderComponent;