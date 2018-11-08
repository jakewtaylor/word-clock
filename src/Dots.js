import React from 'react';

import './Dots.css';

const Dot = ({ number, lit }) => (
    <div className={`dot dot-${number} ${lit ? 'lit' : ''}`} />
);

const Dots = ({ light }) => [1, 2, 3, 4].map(n => (
    <Dot number={n} lit={n <= light} key={n} />
));

const Dots__ = ({ light }) => (
    <>
        <div className="dot dot-1" />
        <div className="dot dot-2" />
        <div className="dot dot-3" />
        <div className="dot dot-4" />
    </>
);

export default Dots;
