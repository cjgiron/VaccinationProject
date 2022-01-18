import React, {Component} from "react";

import "./app.css"
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";

import Header from "./commonComponents/headerComponent";
import Footer from "./commonComponents/footerComponent";
import RegisterVaccine from "./applicationcomponents/AdminSection/RegisterVaccineComponent";
import HomeAdmin from "./applicationcomponents/AdminSection/HomeAdminComponent";
import RegisterHospital from "./applicationcomponents/AdminSection/RegisterHospitalComponent";
import Hospitals from "./applicationcomponents/AdminSection/HospitalsComponent";
import User from "./applicationcomponents/User/RegisterUserComponent";
import Appointment from "./applicationcomponents/AdminSection/AppointmentComponent";
import UserAppointments from "./applicationcomponents/User/UserAppointmentsComponent";

export default class AppComponent extends Component {
    constructor(props, context){
        super(props);
    }
    
    render(){
        return( // this is the jsx. this jsx implementation depends on the elements that are present in the react library
            <Router>
                <Header/>
                <Routes>
                    <Route path="/registerVaccine" element={<RegisterVaccine />} />
                    <Route path="/admin" element={<HomeAdmin />} />  
                    <Route path="/registerHospital" element={<RegisterHospital />} />
                    <Route path="/hospitals" element={<Hospitals />} />
                    <Route path="/userAppointments" element={<UserAppointments />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/appointment" element={<Appointment />} />
                </Routes>
                <Footer/>
            </Router>
        )
    } 

}