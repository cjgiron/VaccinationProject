import React, {Fragment, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import HospitalComponent from "./HospitalComponent";
import { fetchHospitals } from "../../state/hospital/hospitalActions"; 

let HospitalsComponent = () => {

    const hospitalList = useSelector((state) => state.hospitalReducer.hospitals);

    const dispatch = useDispatch();

    //componentDidMount : by initializing the parameters as dependency
    // useEffect(()=>{
    //     dispatch(fetchHospitals()) // we are calling fetchproducts but not adding it to the store.
    // },[])


    return (
        <>
            <h2>Hospitals</h2>
            { hospitalList && hospitalList.length > 0 ? 
                <Fragment>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hospitalList.map(hospital =>{
                                    return <tr><HospitalComponent hospital={hospital} key={hospital._id} /></tr>
                                })
                            }
                        </tbody>
                    </table>
                </Fragment>
                : "There are currently no hospitals on file"
            }
        </>
    )
}

export default HospitalsComponent;