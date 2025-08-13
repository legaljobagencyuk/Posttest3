let users = []; // Array to store user data

export default function handler(req, res) {
    // Handle POST request to store user data
    if (req.method === 'POST') {
        const userData = JSON.parse(req.body); // Parse the incoming JSON data
        userData.timestamp = new Date().toISOString(); // Add a timestamp
        users.push(userData); // Store user data in the array
        res.status(200).json({ message: 'User data stored successfully!' }); // Respond with success message
    } 
    // Handle GET request to fetch user data
    else if (req.method === 'GET') {
        const sortedUsers = users.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        res.status(200).json(sortedUsers); // Return sorted user data
    } 
    // Handle unsupported request methods
    else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`); // Respond with method not allowed
    }
}
