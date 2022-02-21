import React from 'react';

import Menu from "../../components/Menu/Menu";
import {Outlet} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default HomePage;