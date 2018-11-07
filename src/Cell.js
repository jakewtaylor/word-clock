import React from 'react';

import './Cell.css';

const Cell = ({ content, lit = false }) => {
    const classes = ['cell', `width-${content.length}`];

    if (lit) {
        classes.push('lit');
    }

    return content.split('').map((letter, i) => (
        <p className={classes.join(' ')} key={i}>
            {letter.toUpperCase()}
        </p>
    ));
};

export default Cell;
