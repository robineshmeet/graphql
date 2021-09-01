async function fetchGraphQL(text, variables) {
    const response = await fetch('http://localhost:8000/graphql', {
        method: 'get',
        
    });

    return await response.json();
}

export default fetchGraphQL;