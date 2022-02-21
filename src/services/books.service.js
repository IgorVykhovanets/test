import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const booksService = {
    getAll: () => axiosService.get(urls.books).then(books => books.data),
    addBook: (book) => axiosService.post(urls.books, book).then(book => book.data),
    deleteBook: (id) => axiosService.delete(`${urls.books}/${id}`),
    editBook: (id ,book) => axiosService.patch(`${urls.books}/${id}`, book).then(book => book.data)
}