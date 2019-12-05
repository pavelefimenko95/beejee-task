import React from 'react';

export default ({value, options, onChange}) =>
    <select onChange={onChange} className="select">
        {options.map((option, i) =>
            <option key={i} value={option}>{option}</option>
        )}
    </select>;