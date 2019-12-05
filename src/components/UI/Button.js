import React from 'react';
import classNames from 'classnames';

export default ({text, style, className}) =>
    <button className={classNames(`button button--${style}`, {[className]: className})}>
        {text}
    </button>;