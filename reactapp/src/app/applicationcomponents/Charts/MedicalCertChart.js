import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../state/user/userActions";

const MedicalCertPie = () => {

    const users = useSelector((state) => state.userReducer.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    const medicalCertUsers = users.filter((user) => user.medicalCert !== 'none' && user.medicalCert !== 'None' && user.medicalCert !== 'N/A');

    const nonMedicalCertUsers = users.filter((user) => user.medicalCert == 'none' || user.medicalCert == 'None' || user.medicalCert == 'N/A');


const data = [
    {
    type: 'Possesses a Medical Certification',
    value: medicalCertUsers.length,
    },
    {
    type: 'Does Not Possess a Medical Certification',
    value: nonMedicalCertUsers.length,
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
    <h3>Medical Certification Pie Chart</h3>
    <Pie {...config} />;
    </>
    )
};


export default MedicalCertPie;