import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../state/user/userActions";

const AgeChart = () => {

    const users = useSelector((state) => state.userReducer.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    console.log("users: ", users);

    const usersUnder16 = users.filter((user) => user.age < 16);
    console.log("usersUnder16: ", usersUnder16);

    const users16To25 = users.filter((user) => user.age > 16 && user.age < 26);
    console.log("users16To25: ", users16To25);

    const users26To50 = users.filter((user) => user.age > 25 && user.age < 50);
    console.log("users26To50: ", users26To50);

    const users51To75 = users.filter((user) => user.age > 50 && user.age < 76);
    console.log("users51To75: ", users51To75);

    const usersAbove75 = users.filter((user) => user.age > 75);
    console.log("usersAbove75: ", usersAbove75);

const data = [
    {
    age: 'under 16 years',
    patients: usersUnder16.length,
    },
    {
    age: '16-25 years',
    patients: users16To25.length,
    },
    {
    age: '26-50 years',
    patients: users26To50.length,
    },
    {
    age: '51-75 years',
    patients: users51To75.length,
    },
    {
    age: 'above 75 years',
    patients: usersAbove75.length,
    },
];
const config = {
    data,
    xField: 'age',
    yField: 'patients',
    label: {
    position: 'middle',
    style: {
        fill: '#FFFFFF',
        opacity: 0.6,
    },
    },
    xAxis: {
    label: {
        autoHide: true,
        autoRotate: false,
    },
    },
    meta: {
    age: {
        alias: 'Age',
    },
    patients: {
        alias: 'Patients',
    },
    },
};
return (
    <>
    <h3>Age Chart</h3>
    <Column {...config} />
    </>
    );
};


export default AgeChart;