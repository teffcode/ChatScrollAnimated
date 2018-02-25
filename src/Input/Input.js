import React from 'react';

import arrow from '../assets/arrow.png'

import './Input.css';

const Input = ({ classInput }) => (
    <input label='Write...' className={classInput}/>
);

export default Input;