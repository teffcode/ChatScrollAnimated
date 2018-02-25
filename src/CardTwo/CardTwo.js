import React from 'react';

import manTwo from '../assets/manTwo.png';

import './CardTwo.css';

const CardTwo = ({ classCard, classTop, text }) => (
    <div className={`${classCard} ${classTop}`}>
        <div><p>{text}</p></div>
        <img src={manTwo}/>
    </div>
);

export default CardTwo;