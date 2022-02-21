import React from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css'
import HomePage from "./pages/HomePage/HomePage";
import AllBooksPage from "./pages/AllBooksPage/AllBooksPage";
import AddBookPage from "./pages/AddBookPage/AddBookPage";
import EditBookPage from "./pages/EditBookPage/EditBookPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route path={'/all-books'} element={<AllBooksPage/>}/>
                    <Route path={'all-books/edit-book/:id'} element={<EditBookPage/>}/>
                    <Route path={'/add-book'} element={<AddBookPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;