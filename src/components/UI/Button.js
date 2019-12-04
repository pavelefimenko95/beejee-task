import React from 'react';

export default ({text, style}) =>
    <button className={`button button--${style}`}>
        {text}
    </button>;