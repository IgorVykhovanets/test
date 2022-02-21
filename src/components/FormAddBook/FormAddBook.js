import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createBook} from "../../store/slices/books.slice";
import './form.add.book.modules.css'

const FormAddBook = () => {

    const [msg, setMsg] = useState(null);

    let {handleSubmit, reset, register, formState: {errors}} = useForm();

    let dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createBook({data}));
        setMsg('Book successfully added')
        reset()
    }

    return (
        <div className={'formAddBook'}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'msg'}>{msg}</div>
                <div className={'inputListElement'}>
                    <input type="text" placeholder={'Title Book'} {...register('title_book', {
                        required: true
                    })}/>
                    <input type="text" placeholder={'Author'} {...register('author', {required: true})}/>
                    <input type="text" placeholder={'Category'} {...register('category', {required: true})}/>
                    <input type="number" placeholder={'ISBN'} {...register('isbn', {
                        required: true, minLength: 11,
                        maxLength: 11,
                    })}/>
                </div>
                <div className={'btnSave'}>
                    <button>s a v e</button>
                </div>
            </form>
        </div>
    );
};

export default FormAddBook;