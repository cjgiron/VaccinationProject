import React, { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAppointments } from "../../state/appointment/appointmentActions";
import Appointment from "./AppointmentComponent";
import { updateHospitalCharge } from "../../state/hospital/hospitalActions";
import { useNavigate } from "react-router-dom";
import { fetchHospitals } from "../../state/hospital/hospitalActions";
import { updateUserPaid } from "../../state/user/userActions";


let UserAppointmentsComponent = () => {

    const appointmentsList = useSelector((state) => state.appointmentReducer.appointments);
    const user = useSelector((state) => state.userReducer.user);
    const hospitals = useSelector((state)=> state.hospitalReducer.newHospitals);
    

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(fetchAppointments());
        dispatch(fetchHospitals());
    }, [])


    const userAppointments = appointmentsList.filter((appointment) => appointment.user.name === user.name);
    
    var total = 0;
    var hospitalName = "";
    var hospitalId = "";
    var charges = 0;

    for(var i = 0; i < userAppointments.length; i++) {
        if (i < 1) {
            hospitalName = userAppointments[i].hospital.name;
            hospitalId = userAppointments[i].hospital._id;
            charges = userAppointments[i].hospital.charges;
        }
    }

    for (var i = 0; i < userAppointments.length; i++) {
        var subTotal = userAppointments[i].vaccine.price;
        total += subTotal;
    }

    console.log("hospitalName: ", hospitalName);
    console.log("hospitalId: ", hospitalId);
    console.log("hospitals: ", hospitals);

    const handleClick = (hospId, theCharges, uid) => {

        // dispatch(updateUserPaid(uid));
        
        navigate('/payment');
    }


    return (
        <>
        { user.name ?
            <Fragment>
            <h1>{`${user.name}'s Appointments`}</h1>
            { userAppointments && userAppointments.length > 0 ?
                userAppointments.map((appointment) => {
                    return <Appointment appointment={appointment} />
                })
            : <p>{"You are not currently scheduled for any appointments"}</p>
            }
            { !user.paid ? 
                <Fragment>
                <h3>{`Total Charges: $${total}`}</h3>
                <button onClick={() => handleClick(hospitalId, charges, user._id)}>Pay Charges</button>
                </Fragment>
            : <p>{"Charges have been paid"}</p>
            }
            </Fragment>
            : <p>{"Please login to see this feature."}</p>
        }
        </>
    )
}


export default UserAppointmentsComponent;