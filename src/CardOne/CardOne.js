import React from 'react';

import manOne from '../assets/manOne.png';

import './CardOne.css';

const CardOne = ({ classCard, classTop, text }) => (
    <div className={`${classCard} ${classTop}`}>
        <img src={manOne}/>
        <div><p>{text}</p></div>
    </div>
);

export default CardOne;