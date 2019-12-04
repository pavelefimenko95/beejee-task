import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

export default () =>
    <div className="header">
        <div className="row container">
            <div className="col-8">
                <Link to="/">
                    <Button
                        text="Home"
                        style="dark"
                    />
                </Link>
            </div>
            <div className="col-4">

            </div>
        </div>
    </div>;