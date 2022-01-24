import React, { useRef, useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinUser } from "../../state/user/userActions";


let UserComponent = (props)=>{

    const inputName = useRef("");
    const inputPassword = useRef("");
    const inputAge = useRef(0);
    const inputProfession = useRef("");
    const inputContact = useRef(0);
    const inputAddress = useRef("");
    const inputGender = useRef("");
    const inputDisease = useRef("");
    const inputMedicalCert = useRef("");

    const navigate = useNavigate();

    
    // to make our component subscribe to the store we need to use - useSelector and then
    // select the state with which we want to map our data (mapStateToProps)
    const user = useSelector((state)=>state.userReducer.user);//this also works in async
    // this hook is used to replace map dispatch to props so that we are able to 
    // make our functional component publish the new data
    //this hook is used to do the job of mapDispatchToProps, we need to initialize it and then use it on handler
    const dispatchUserObj = useDispatch();

    // replacemnet of shouldComponentUpdate or componentDidMount or componentWillUnmout
    useEffect(()=>{
        //console.log(user)        
        inputName.current.value = user.name;        
        inputPassword.current.value = user.password;
        inputAge.current.value = user.age;
        inputProfession.current.value = user.profession;
        inputContact.current.value = user.contact;
        inputAddress.current.value = user.address;
        inputGender.current.value = user.gender;
        inputDisease.current.value = user.disease;
        inputMedicalCert.current.value = user.medicalCert;


        //componentWillUnmount
        return function cleanup() {
            //we must avoid doing any data cleanup, it is for javascript functions, callbacks, 
            console.log("useEffect is working as component will unmount, to cleanup the component");
        };
    })

    //submit handler to signinup user
    const handleSubmit = (evt)=>{
        // `current` points to the mounted text input element

        let userObj = {
            name : inputName.current.value,
            password : inputPassword.current.value,
            age : inputAge.current.value,
            profession : inputProfession.current.value,
            contact : inputContact.current.value,
            address : inputAddress.current.value,
            gender : inputGender.current.value,
            disease : inputDisease.current.value,
            medicalCert : inputMedicalCert.current.value,
            paid: user.paid
        }

        
        // this hook is used to replace map dispatch to props so that we are able to 
        // make our functional component publish the new data
        dispatchUserObj(signinUser(userObj)) // now this user will be saved

        navigate('/userAppointments');
        evt.preventDefault();
    }

    return(
        <>
            <h1>Login Page</h1>
            <form className={"form col-md-10 userHook"} onSubmit={handleSubmit}>                
                <label>
                    <b>Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputName} 
                            placeholder="Please enter your name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"}  ref={inputPassword} 
                            placeholder="Please enter a password" maxLength={20} />
                </label>
                <br/>
                <label>
                    <b>Age :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputAge} 
                            placeholder="Please enter your age" maxLength={2}/>
                </label>
                <br/>
                <label>
                    <b>Profession :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputProfession} 
                            placeholder="Please enter your profession" />
                </label>
                <br/>
                <label>
                    <b>Contact :</b>
                    <input type="number" className={"form-control col-md-12"} ref={inputContact} 
                            placeholder="Please enter your contact number" />
                </label>
                <br/>
                <label>
                    <b>Address :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputAddress} 
                            placeholder="Please enter your address" />
                </label>
                <br/>
                <label>
                    <b>Gender :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputGender} 
                            placeholder="Please enter your gender (if you do not wish to answer, type none)" />
                </label>
                <br/>
                <label>
                    <b>Disease :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputDisease} 
                            placeholder="Please enter any disease you may have" />
                </label>
                <br/>
                <label>
                    <b>Medical Certification :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputMedicalCert} 
                            placeholder="Please enter any medical certification you may have" />
                </label>

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Register/Signin" />
            </form>
        </>
    )

}

export default UserComponent;