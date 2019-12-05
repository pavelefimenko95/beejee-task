import React from 'react';
import classNames from 'classnames';

export default ({pageCount, activePage, onPageChange}) =>
    <div className="paginate row">
        {[...new Array(pageCount)].map((item, i) =>
            <div
                key={i}
                onClick={() => onPageChange(i + 1)}
                className={classNames('paginate__number', {'paginate__number--active': i + 1 === activePage})}
            >
                {i + 1}
            </div>
        )}
    </div>;