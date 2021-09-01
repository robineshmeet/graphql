import React, { useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery, addBookQuery, getBooksQuery } from "../queries/queries"

const AddBook = () => {
    const { data, loading } = useQuery(getAuthorsQuery);
    const { refetch } = useQuery(getBooksQuery);
    const [addBook] = useMutation(addBookQuery);

    const [bookValue, setBookValue] = useState({
        name: "",
        genre: "",
        authorId: ""
    })

    const renderAuthorsName = () => {
        if (loading) return <option disabled>Loading...</option>
        else return data.authors.map((author, i) => <option key={author.id} value={author.id}>{author.name}</option>)
    }

    const handleChange = (e) => {
        let obj = { ...bookValue };
        obj[e.target.name] = e.target.value;
        setBookValue({ ...obj })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ variables: { name: bookValue.name, genre: bookValue.genre, authorId: bookValue.authorId } })
        refetch()
    }

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="book-name">Book Name:</label>
                <input id="book-name" type="text" name="name" value={bookValue.name} onChange={handleChange} />
            </div>
            <div className="field">
                <label htmlFor="genre">Genre:</label>
                <input id="genre" type="text" name="genre" value={bookValue.genre} onChange={handleChange} />
            </div>
            <div className="field">
                <label htmlFor="genre">Author:</label>
                <select id="genre" name="authorId" value={bookValue.authorId} onChange={handleChange}>
                    <option value="">Select Author</option>
                    {renderAuthorsName()}
                </select>
            </div>
            <button>+</button>
        </form>
    )
}

export default AddBook
