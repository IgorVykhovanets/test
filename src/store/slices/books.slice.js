import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {booksService} from "../../services/books.service";

export const getAllBooks = createAsyncThunk(
    'booksSlice/getAllBooks',
    async (_, {rejectedWithValue}) => {
        try {
            const books = booksService.getAll();
            return books;
        } catch (e) {
            rejectedWithValue(e)
        }
    }
);

export const createBook = createAsyncThunk(
    'booksSlice/addBook',
    async ({data}, {dispatch}) => {
        try {
            const newBook = booksService.addBook(data);
            const book = newBook.then(books => books)
            dispatch(addBook({data: book}));
        } catch (e) {
        }
    }
);

export const deleteBookId = createAsyncThunk(
    'booksSlice/deleteBook',
    async ({id}, {dispatch}) => {
        try {
            const deleteBookId = booksService.deleteBook(id);
            dispatch(deleteBook({id}))
        } catch (e){
            console.log(e)
        }
    }
);

export const editBookId = createAsyncThunk(
    'bookSlice/EditBookId',
    async ({id ,data}, {dispatch}) => {
        try {
            const updateBook = booksService.editBook(id, data);
            dispatch(editBook({updateBook}))
        } catch (e) {
            console.log(e)
        }
    }
)

const booksSlice = createSlice({
    name: 'booksSlice',
    initialState: {
        books: []
    },
    reducers: {
        addBook: (state, action) => {
            state.books.push(...action.payload.data);
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload.id);
        },
        editBook: (state, action) => {
            const bookId = state.books.findIndex(book => book.id === action.payload.id);
            state.books[bookId] = action.payload.data;
        }
    },
    extraReducers: {
        [getAllBooks.pending]: (state, action) => {
            console.log('loading');
        },
        [getAllBooks.fulfilled]: (state, action) => {
            state.books = action.payload;
        },
        [getAllBooks.rejected]: (state, action) => {
            console.log(action.payload);
        }
    }

})

export const booksReducer = booksSlice.reducer;
export const {addBook, deleteBook, editBook} = booksSlice.actions;