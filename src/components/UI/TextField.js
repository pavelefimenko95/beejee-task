import React from 'react';

export default ({input, meta: {touched, error}, ...otherAttributes}) =>
    <div className="text-field">
        <input
            {...input}
            {...otherAttributes}
            type="text"
        />
        <span className="text-field__error text-xs text-error">{touched && error}</span>
    </div>;