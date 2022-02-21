import React from 'react';
import {useLocation} from "react-router-dom";
import EditBook from "../../components/EditBook/EditBook";

const EditBookPage = () => {

    let {state} = useLocation();

    return (
        <div>
            <EditBook book={state}/>
        </div>
    );
};

export default EditBookPage;