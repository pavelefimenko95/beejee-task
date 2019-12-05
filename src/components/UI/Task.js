import React, { Component } from 'react';
import classNames from 'classnames';
import { FaEdit, FaCheck } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';

export default class Task extends Component {
    state = {
        inputText: '',
        isTextEditable: false
    };

    onTextEdit = text => {
        this.setState({
            inputText: text,
            isTextEditable: true
        });
    };

    onChangeText = e =>
        this.setState({
            inputText: e.target.value
        });

    onTextSubmit = () => {
        this.props.editTask({text: this.state.inputText});
        this.setState({
            isTextEditable: false
        });
    };

    render() {
        let { inputText, isTextEditable } = this.state;
        let { task: {username, email, text, status}, isAuthenticated, editTask } = this.props;

        return (
            <div className="task row">
                <div className=" task__content col-stretch row">
                    <div className="col-stretch">
                        <div className="task__text col-stretch row">
                            {isTextEditable ?
                                <div className="text-field">
                                    <input value={inputText} onChange={this.onChangeText} />
                                </div>
                                :
                                text
                            }
                            {isAuthenticated &&
                                <div className="task__text__icon">
                                    {isTextEditable ?
                                        <FaCheck onClick={this.onTextSubmit} className="text-highlight" />
                                        :
                                        <FaEdit size={20} onClick={() => this.onTextEdit(inputText || text)} className="text-light" />
                                    }
                                </div>
                            }
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
                        {isAuthenticated && status !== 10 &&
                            <div className="task__check-icon-wrapper" onClick={() => editTask({status: 10})}>
                                <div className="task__check-icon-wrapper__icon centralize">
                                    <IoMdCheckmark size={25} />
                                </div>

                            </div>
                        }
                    </div>
                </div>
                <div
                    className={classNames('task__completed-icon centralize', {
                        'task__completed-icon--show': status === 10
                    })}
                >
                    <IoMdCheckmark size={35} />
                </div>
            </div>
        );
    }
}