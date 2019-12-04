import React from 'react';
import classNames from 'classnames';
import { IoMdCheckmark } from 'react-icons/io';

export default ({task: {username, email, text, status}}) =>
    <div className="task row">
        <div className=" task__content col-stretch row">
            <div className="col-stretch">
                <div className="task__text col-stretch">
                    {text}
                </div>
                <div className="col-12 row text-sm">
                    <div className="task__name">
                        <span className="text-light">User name: </span>&nbsp;
                        {username}
                    </div>
                    <div className="task__email">
                        <span className="text-light">User email: </span>&nbsp;
                        {email}
                    </div>
                </div>
            </div>
            <div className="col-1 centralize">
                <div className="task__check-icon-wrapper">
                    <div className="task__check-icon-wrapper__icon centralize">
                        <IoMdCheckmark size={25} />
                    </div>
                </div>
            </div>
        </div>
        <div
            className={classNames('task__completed-icon centralize', {
                'task__completed-icon--show': status === 10
            })}
        >
            <IoMdCheckmark size={35} />
        </div>
    </div>;