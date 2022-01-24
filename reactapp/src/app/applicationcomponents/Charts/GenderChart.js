import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../state/user/userActions";

const GenderPie = () => {

    const users = useSelector((state) => state.userReducer.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    const females = users.filter((user) => user.gender == 'female' || user.gender == 'Female');

    const males = users.filter((user) => user.gender == 'male' || user.gender == 'Male');

const data = [
    {
    type: 'Female',
    value: females.length/users.length,
    },
    {
    type: 'Male',
    value: males.length/users.length,
    }
];
const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
    type: 'inner',
    offset: '-30%',
    content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    style: {
        fontSize: 14,
        textAlign: 'center',
    },
    },
    interactions: [
    {
        type: 'element-active',
    },
    ],
};
return (
    <>
    <h3>Gender Pie Chart</h3>
    <Pie {...config} />;
    </>
    )
};


export default GenderPie;