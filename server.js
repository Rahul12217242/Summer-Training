const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000; // The internal port our app runs on

const NOTES_FILE = path.join(__dirname, 'notes.txt');

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.static(__dirname)); // Serve static files like index.html and style.css

// Endpoint to get all notes
app.get('/notes', (req, res) => {
    if (fs.existsSync(NOTES_FILE)) {
        res.sendFile(NOTES_FILE);
    } else {
        res.send(''); // Send empty string if file doesn't exist
    }
});

// Endpoint to save a new note
app.post('/notes', (req, res) => {
    const newNote = req.body.note + '\n'; // Add a newline after each note
    fs.appendFile(NOTES_FILE, newNote, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Failed to save note.');
        }
        res.status(200).send('Note saved.');
    });
});

app.listen(PORT, () => {
    console.log(`Memo app server listening on port ${PORT}`);
});
