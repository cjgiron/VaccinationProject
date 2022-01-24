import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../state/user/userActions";

let HeaderComponent = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let logout = (evt) => {
        dispatch(signOutUser());
        navigate('/user');
        evt.preventDefault()
    }

    return (
        <>
            <h1>Vaccination Application</h1>
            <NavLink to="/admin" className="button">Admin Section</NavLink>
            <NavLink to="/patient" className="button">Patient Section</NavLink>
            <NavLink to="/user" className="button">Login</NavLink>
            <button onClick={logout}>Logout</button>
        </>
    )

}

export default HeaderComponent;