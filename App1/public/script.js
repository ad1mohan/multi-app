console.log("Client Side Logs");

// Get the elements by its ID
const button = document.getElementById('myButton');
const responseElement = document.getElementById('response');

// Add a click event listener to the button
button.addEventListener('click', function() {
    console.log("Requesting App2");
    // Make a request to the server
    fetch('/app2')
    .then(response => response.text())
    .then(data => {
        // Update the content of the webpage with the response data
        responseElement.textContent = data;
      })
      .catch(error => console.error('Error:', error));
  });


