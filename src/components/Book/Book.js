import React from 'react';

import './book.modules.css'
import {useDispatch} from "react-redux";
import {deleteBookId} from "../../store/slices/books.slice";
import {Link} from "react-router-dom";

const Book = ({book}) => {

    const {id, author, category, title_book, isbn} = book;

    let dispatch = useDispatch();

    return (
        <div>
            <div className={'bookWrap'}>
                <div className={'titleBook'}><h2>Title Book: {title_book}</h2></div>
                <div>Author: {author}</div>
                <div>Category: {category}</div>
                <div>ISBN: {isbn}</div>
                <div className={'actionBtn'}>
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => dispatch(deleteBookId({id}))}>Delete</button>
                    <button type="button" className="btn btn-primary btn-sm"><Link to={`edit-book/${id}`} state={book}>Edit</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Book;