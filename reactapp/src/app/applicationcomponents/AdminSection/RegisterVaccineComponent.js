import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveVaccine } from "../../state/vaccine/vaccineActions";

let RegisterVaccineComponent = () => {
    
    const defaultVaccine = useSelector((state) => state.vaccineReducer.defaultVaccine)

    const dispatch = useDispatch();

    const [name, setName] = useState(defaultVaccine.name);
    const [price, setPrice] = useState(defaultVaccine.price);
    const [type, setType] = useState(defaultVaccine.type);
    const [sideEffects, setSideEffects] = useState(defaultVaccine.sideEffects);
    const [origin, setOrigin] = useState(defaultVaccine.origin);
    const [doses, setDoses] = useState(defaultVaccine.doses);
    const [otherInfo, setOtherInfo] = useState(defaultVaccine.otherInfo);

    let saveVaccineClick = (evt) => {
        let vaccineObj = {name, price, type, sideEffects, origin, doses, otherInfo};

        alert("We are going to save this vaccine - "+ JSON.stringify(vaccineObj));
        dispatch(saveVaccine(vaccineObj));
        evt.preventDefault();
    }


    return (
        <>
            <h2>Register a Vaccine</h2>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Vaccine Name</b>
                        <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                            onChange={(evt)=>setName(evt.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6" value={price} 
                        placeholder="Vaccine Price"
                        onChange={(evt)=>setPrice(evt.target.value)} />
                    </div>

                    <div className="col-md-12">
                        <b>Type </b>
                    <input type="text" className="form-control col-md-6" value={type} 
                        placeholder="Type of vaccine"
                        onChange={(evt)=>setType(evt.target.value)} />
                    </div>

                    <div className="col-md-12">
                        <b>Side Effects </b>
                        <textarea value={sideEffects} maxLength={255} rows="5" cols="30"
                            onChange={(evt) => setSideEffects(evt.target.value)}
                        ></textarea>
                    </div>

                    <div className="col-md-12">
                        <b>Origin</b>
                    <input type="text" className="form-control col-md-6" value={origin} 
                        placeholder="Origin of vaccine"
                        onChange={(evt)=>setOrigin(evt.target.value)} />
                    </div>
                    <div className="col-md-12">
                        <b>Doses Required </b>
                        <input type="number" className="form-control col-md-6" value={doses} 
                        placeholder="Doses Required"
                        onChange={(evt)=>setDoses(evt.target.value)} />
                    </div>
                    <div className="col-md-12">
                        <b>Other Info</b>
                        <textarea value={otherInfo} maxLength={255} rows="5" cols="30"
                            onChange={(evt) => setOtherInfo(evt.target.value)}
                        ></textarea>
                    </div>
                        <input type="button" className={"form-control btn btn-primary col-md-3"} 
                            value={"Save Vaccine"} 
                            onClick={saveVaccineClick}/>
                    </div>
                </section>
        </>
    )
}

export default RegisterVaccineComponent;