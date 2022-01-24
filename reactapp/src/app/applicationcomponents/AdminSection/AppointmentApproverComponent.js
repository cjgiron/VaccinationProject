import React, { useState, useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAppointment } from "../../state/appointment/appointmentActions";
import { fetchHospitals } from "../../state/hospital/hospitalActions";
import { fetchUsers } from "../../state/user/userActions";
import { fetchVaccines } from "../../state/vaccine/vaccineActions";
import Datetime from 'react-datetime';



let AppointmentApproverComponent = () => {

    const userList = useSelector((state) => state.userReducer.users);
    const hospitalList = useSelector((state) => state.hospitalReducer.hospitals);
    const vaccineList = useSelector((state) => state.vaccineReducer.vaccines);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchHospitals());
        dispatch(fetchVaccines());
    }, [])



    const [userid, setUserid] = useState("default user id");
    const [hospitalid, setHospitalid] = useState("default hospital id");
    const [vaccineid, setVaccineid] = useState("default vaccine id");
    const [myDate, setMyDate] = useState("");

    let handleUserChange = (evt) => {
        setUserid(evt.target.value);
    }

    let handleHospitalChange = (evt) => {
        setHospitalid(evt.target.value);
    }

    let handleVaccineChange = (evt) => {
        setVaccineid(evt.target.value);
    }

    let handleDateTimeChange = (date) => {
        setMyDate(date);
    }

    let saveAppointmentClick = (evt) => {
        let user;
        for(let i = 0; i < userList.length; i++) {
            if(userList[i]._id === userid) {
                user = userList[i];
            }
        }

        let hospital;
        for(let i = 0; i < hospitalList.length; i++) {
            if(hospitalList[i]._id === hospitalid) {
                hospital = hospitalList[i];
            }
        }

        let vaccine;
        for(let i = 0; i < vaccineList.length; i++) {
            if(vaccineList[i]._id === vaccineid) {
                vaccine = vaccineList[i];
            }
        }


        const appointmentObj = {
            user: user,
            hospital: hospital,
            vaccine: vaccine,
            date: myDate
        }
        alert("We are going to save this appointment - "+ JSON.stringify(appointmentObj));
        dispatch(saveAppointment(appointmentObj));
        evt.preventDefault();
    }

    return (
        <>
            <h2>Appointment Approver Screen</h2>
            <b>User</b>
            <select value={userid} onChange={handleUserChange}>
                <option value={"dummyid"}>Choose a User</option>
                {userList.map((user) => (
                <option value={user._id}>{user.name}</option>
                ))}
            </select>
            <b>Hospital</b>
            <select value={hospitalid} onChange={handleHospitalChange}>
                <option value={"dummyid"}>Choose a Hospital</option>
                {hospitalList.map((hospital) => (
                <option value={hospital._id}>{hospital.name}</option>
                ))}
            </select>
            <b>Vaccine</b>
            <select value={vaccineid} onChange={handleVaccineChange}>
                <option value={"dummyid"}>Choose a Vaccine</option>
                {vaccineList.map((vaccine) => (
                <option value={vaccine._id}>{vaccine.name}</option>
                ))}
            </select>
            <b>Select Date and Time</b>
            <Datetime format="dd-MMM-yy hh:mm a" locale='en' onChange={handleDateTimeChange}/>

            <input type="button" className={"form-control btn btn-primary col-md-3"} 
                value={"Save Appointment"} 
                onClick={saveAppointmentClick}/>
        </>
    )
}

export default AppointmentApproverComponent;