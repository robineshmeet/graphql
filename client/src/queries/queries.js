import { gql } from "@apollo/client";

const getBooksQuery = gql`
    query {
        books {
            id
            name
            genre
        }
    }
`

const getAuthorsQuery = gql`
    query {
        authors {
            id
            name
            age
        }
    }
`
const addBookQuery = gql`
    mutation($name: String!,$genre: String!, $authorId : ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`

const getBookQuery = gql`
    query($id:ID!) {
        book(id:$id) {
            name
            genre
            id
            author {
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`

export { getBooksQuery, getAuthorsQuery, addBookQuery, getBookQuery }