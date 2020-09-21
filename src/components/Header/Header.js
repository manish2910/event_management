import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ children }) => (
    <Fragment>
        <nav>
            <Link to="/">Event Lists</Link>
            <Link to="/add">Add event</Link>
        </nav>
        {children}
    </Fragment>
)


export default Header;