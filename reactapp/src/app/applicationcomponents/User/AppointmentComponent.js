import React from "react";


let AppointmentComponent = ({appointment}) => {

    const hospital = appointment.hospital;
    const vaccine = appointment.vaccine;

    return (
        <>
            <h1>{hospital.name}</h1>
                <p>{`Address: ${hospital.address}`}</p>
                <p>{`Hospital type:${hospital.type}`}</p>
            <h3>{vaccine.name}</h3>
                <p>{`${vaccine.doses} dose(s) required`}</p>
                <p>{`Price: ${vaccine.price}`}</p>
            <h3>{`Appointment time: ${appointment.date}`}</h3>
        </>
    )
}

export default AppointmentComponent;