import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../state/user/userActions";

const DiseasePie = () => {

    const users = useSelector((state) => state.userReducer.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    const diseaseUsers = users.filter((user) => user.disease !== 'none' && user.disease !== 'None');

    const nonDiseaseUsers = users.filter((user) => user.disease == 'none' || user.disease == 'None');


const data = [
    {
    type: 'Pre-Existing Disease',
    value: diseaseUsers.length,
    },
    {
    type: 'No Pre-Existing Disease',
    value: nonDiseaseUsers.length,
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
    <h3>Disease Pie Chart</h3>
    <Pie {...config} />;
    </>
    )
};


export default DiseasePie;