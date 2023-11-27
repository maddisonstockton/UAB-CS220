function bookFinder() {
    const search = document.getElementById('search').value;
    const resultsContainer = document.getElementById('results');
    
    // This line will clear your previous search results and make it easier to view new results.
    resultsContainer.innerHTML = '';

    //I am requesting access to enter google's api. I used chatGPT for help with prompt "html js access google api books".
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data.items);
        })
        .catch(error => console.error('Error:', error));
}

//This function is going to relay the infomration from the api to our program.
function displayResults(books) {
    const resultsContainer = document.getElementById('results');

    //In the results container we will add a book that will include title and author name with description.
    books.forEach(book => {
        //Creates the book object
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        //initializes the title and crwates a placeholder for the title that is currently being pulled.
        const title = document.createElement('h2');
        title.textContent = book.volumeInfo.title;

        //initializes author and keeps as a placeholder until printed
        const authors = document.createElement('strong');
        authors.textContent = `Authors: ${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}`;

        //imitialiozes description and pulls the description from api
        const description = document.createElement('p');
        description.textContent = `Description: ${book.volumeInfo.description ? book.volumeInfo.description : 'N/A'}`;

        //This code will send all of our information to one place and create a book object with all of its info with it
        bookDiv.appendChild(title);
        bookDiv.appendChild(authors);
        bookDiv.appendChild(description);

        //This will display all of the pulled information together.
        resultsContainer.appendChild(bookDiv);
    });
}