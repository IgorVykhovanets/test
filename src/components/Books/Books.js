import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllBooks} from "../../store/slices/books.slice";
import Book from "../Book/Book";
import './book.modules.css'

const Books = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBooks());
    },[])

    let {books} = useSelector(state => state['booksReducer']);


    return (
        <div className={'booksListWrap'}>
            {books.map(book => <Book key={book.id} book={book}/>)}
        </div>
    );
};

export default Books;