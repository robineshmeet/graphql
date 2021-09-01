import React, { useState } from 'react'
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries"
import AddBook from './AddBook';
import BookDetail from './BookDetail';

const BookList = () => {
    const { data, loading } = useQuery(getBooksQuery);
    const [selected, setSelected] = useState("")

    const renderBooks = () => {
        if (loading) return <h1>Loading...</h1>
        else return data.books.map((book, i) => <li key={i} onClick={() => setSelected(book.id)}>{book.name}</li>)
    }

    return (
        <div id="book-list">
            <ul>
                {renderBooks()}
            </ul>
            <BookDetail bookId={selected} />
            <AddBook />
        </div>
    )
}

export default BookList
