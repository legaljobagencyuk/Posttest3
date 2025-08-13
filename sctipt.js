// Add an event listener to the user form for the submit event
document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create a FormData object from the form
    const formData = new FormData(this);
    // Convert FormData to a plain object
    const data = Object.fromEntries(formData);
    console.log(data); // Log the data to check if it's correct

    try {
        // Send a POST request to the serverless function API with the user data
        const response = await fetch('https://your-vercel-url/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(data), // Convert the data object to a JSON string
        });

        // Check if the response is OK (status code 200)
        if (response.ok) {
            alert('Data submitted successfully!'); // Notify the user of success
        } else {
            throw new Error('Error submitting data: ' + response.statusText); // Throw an error if submission fails
        }
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error:', error);
        alert('Failed to submit data. Please try again later.'); // Notify the user of the error
    }
});
