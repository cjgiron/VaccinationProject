import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveHospital } from "../../state/hospital/hospitalActions";

let RegisterHospitalComponent = () => {

    const defaultHospital = useSelector((state) => state.hospitalReducer.defaultHospital);

    const dispatch = useDispatch();

    const [name, setName] = useState(defaultHospital.name);
    const [address, setAddress] = useState(defaultHospital.address);
    const [type, setType] = useState(defaultHospital.type);
    const charges = defaultHospital.charges;

    let handleSelectChange = (evt) => {
        setType(evt.target.value);
    }

    let saveHospitalClick = (evt) => {
        let hospitalObj = {name, address, type, charges}

        alert("We are going to save this hospital - "+ JSON.stringify(hospitalObj));
        dispatch(saveHospital(hospitalObj))
        evt.preventDefault();
    }



    return (
        <>
            <h2>Register a Hospital</h2>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Hospital Name</b>
                        <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                            onChange={(evt)=>setName(evt.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <b>Address</b>
                        <input type="text" className="form-control col-md-6" value={address} maxLength={25}
                            onChange={(evt)=>setAddress(evt.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <b>Type</b>
                        <select value={type} onChange={handleSelectChange}>
                            <option value="government">Government</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                        <input type="button" className={"form-control btn btn-primary col-md-3"} 
                            value={"Save Hospital"} 
                            onClick={saveHospitalClick}/>
                </div>
            </section>
        </>
    )


}


export default RegisterHospitalComponent;