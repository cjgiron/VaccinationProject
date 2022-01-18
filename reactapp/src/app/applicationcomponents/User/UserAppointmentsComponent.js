import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAppointments } from "../../state/appointment/appointmentActions";
import Appointment from "./AppointmentComponent";


let UserAppointmentsComponent = () => {

    const appointmentsList = useSelector((state) => state.appointmentReducer.appointments);
    const user = useSelector((state) => state.userReducer.user);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAppointments())
    }, [])


    const userAppointments = appointmentsList.filter((appointment) => appointment.user.name === user.name); 
    console.log("userAppointments ", userAppointments);

    return (
        <>
        { user.name !== "" ?
        <Fragment>
            <h1>{`${user.name}'s Appointments`}</h1>
            { userAppointments && userAppointments.length > 0 ?
                userAppointments.map((appointment) => {
                    return <Appointment appointment={appointment} />
                })
            : <p>{"You are not currently scheduled for any appointments"}</p>
            }
        </Fragment>
        : <p>{"Please login to see this feature."}</p>
        }
        </>
    )
}


export default UserAppointmentsComponent;