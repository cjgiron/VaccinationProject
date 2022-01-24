import React, { Fragment } from "react";


let AppointmentComponent = ({appointment}) => {


    const appointmentDate = appointment.date;
    const hospital = appointment.hospital;
    const vaccine = appointment.vaccine;

    console.log("appointment.date: ", appointmentDate)

    const readableDate = new Date(appointmentDate);
    console.log("readableDate: ", readableDate.toLocaleString());

    const newDate = new Date();

    console.log("readableDate - newDate: ", readableDate - newDate);

    const difference = newDate - readableDate;

    return (
        <>
            { difference < 0 ?
            <Fragment>
            <div style={{border : "solid black 1px", margin: "10px", padding: "10px"}}>
                <p>{`Appointment Location: ${hospital.name}`}</p>
                <p>{`Time: ${readableDate.toLocaleString()}`}</p>
                <p>{`Address: ${hospital.address}`}</p>
                <p>{`Hospital type: ${hospital.type}`}</p>
                <p>{`Vaccine: ${vaccine.name}`}</p>
                <p>{`${vaccine.doses} dose(s) required`}</p>
                <p>{`Price: $${vaccine.price}`}</p>
            </div>
            </Fragment>
            : <p>{`Patient has been successfully vaccinated with ${vaccine.name} on ${readableDate.toLocaleString()}`}</p>
            }
        </>
    )
}

export default AppointmentComponent;