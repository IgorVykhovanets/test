import React from 'react';

import Books from "../../components/Books/Books";
import {Outlet} from "react-router-dom";

const AllBooksPage = () => {
    return (
        <div>
            <Books/>
            <Outlet/>
        </div>
    );
};

export default AllBooksPage;