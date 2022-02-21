import React from 'react';
import {NavLink} from "react-router-dom";

import './menu.modules.css'

const Menu = () => {
    return (
        <div className={'menuLinks'}>
            <NavLink to={'/add-book'}>Add Books</NavLink>
            <NavLink to={'/all-books'}>All Books</NavLink>
        </div>
    );
};

export default Menu;