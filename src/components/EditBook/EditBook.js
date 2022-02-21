import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {editBook} from "../../store/slices/books.slice";
import './edit.book.modules.css'

const EditBook = ({book: {id ,author, title_book, category, isbn}}) => {

    const [editMsg, setEditMsg] = useState(null);

    let {handleSubmit, reset, register} = useForm();

    let dispatch = useDispatch();

    const submit = (data) => {
        dispatch(editBook({data: data, id: id}));
        setEditMsg('The book has been successfully edited')
        reset();
    }

    return (
        <div>
            <div className={'lastBookBox'}>
                <div><h2>Title Book: {title_book}</h2></div>
                <div>Author: {author}</div>
                <div>Category: {category}</div>
                <div>ISBN: {isbn}</div>
            </div>
            <div className={'formEditBook'}>
                <form onSubmit={handleSubmit(submit)}>
                    <div className={'msg'}>{editMsg}</div>
                    <div className={'inputListElement'}>
                        <input type="text" placeholder={'Title Book'} {...register('title_book')}/>
                        <input type="text" placeholder={'Author'} {...register('author')}/>
                        <input type="text" placeholder={'Category'} {...register('category')}/>
                        <input type="number" placeholder={'Isbn'} {...register('isbn')}/>
                    </div>
                    <div className={'saveBtn'}>
                        <button>e d i t</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditBook;