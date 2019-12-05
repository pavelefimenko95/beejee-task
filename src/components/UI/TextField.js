import React from 'react';
import classNames from 'classnames';

export default ({input, meta: {touched, error}, className, ...otherAttributes}) =>
    <div className={classNames('text-field', {[className]: className})}>
        <input
            {...input}
            {...otherAttributes}
        />
        <span className="text-field__error text-xs text-error">{touched && error}</span>
    </div>;