import React from "react";


let HospitalComponent = (props) => {

    return (
        <>
            <td>{props.hospital.name}</td>
            <td>{props.hospital.address}</td>
            <td>{props.hospital.type}</td>
            <td>{props.hospital.charges}</td>
        </>
    )
}

export default HospitalComponent;