const express = require('express');
const cors = require('cors');
const pool = require('./db_connection'); // Assuming you have a db.js file that sets up your database connection

const app = express();
app.use(cors());
const PORT = 3000;



// Route to fetch and send movie data as JSON
app.get('/movies', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM movie');
        const movies = result.rows; // Get the rows from the query result
        res.json(movies); // Send the movies JSON array as response
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' }); // Send an error response
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
