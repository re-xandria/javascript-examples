// Using the fetch API to make a GET request to the JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json()) // Returns a Promise object and converts into JSON format
    .then(todos => {
        console.log(todos); 
    }) // Print JSON data to console
    .catch(error => {
        console.error('Error fetching data:', error); 
    }); // Print error if fetch fails
