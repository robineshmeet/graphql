import React from 'react';
import { useQuery } from "@apollo/client";

import { getBookQuery } from "../queries/queries"

const BookDetail = ({ bookId }) => {
    const { data } = useQuery(getBookQuery, { variables: { id: bookId } });
    console.log(data)

    const renderBookDetails = () => {
        if (data && data.book) {
            return (
                <div>
                    <h2>{data.book.name}</h2>
                    <p>{data.book.genre}</p>
                    <p>{data.book.author.name}</p>
                    <p>All books by this Author</p>
                    <ul className="other-books">
                        {data.book.author.books.map((book) => <li key={book.id}>{book.name}</li>)}
                    </ul>

                </div>
            )
        }
        else {
            return (
                <div>No Book Selected</div>
            )
        }
    }
    return (
        <div id="book-details">
            {renderBookDetails()}
        </div>
    )
}

export default BookDetail
