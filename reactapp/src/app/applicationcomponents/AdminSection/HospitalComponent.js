import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHospitals } from "../../state/hospital/hospitalActions";

let HospitalComponent = (props) => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchHospitals()) // we are calling fetchproducts but not adding it to the store.
    },[])


    return (
        <>
            <td>{props.hospital.name}</td>
            <td>{props.hospital.address}</td>
            <td>{props.hospital.type}</td>
        </>
    )
}

export default HospitalComponent;