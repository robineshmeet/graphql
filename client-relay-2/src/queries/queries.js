import { graphql } from "react-relay";

const getBooksQuery = graphql`
    Query getBook {
        books {
            name
            genre
            id
        }
    }
`