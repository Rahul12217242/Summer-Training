const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const NOTES_FILE = path.join(__dirname, 'notes.txt');

// Middleware to parse JSON bodies and serve static files
app.use(express.json());
app.use(express.static(__dirname));

// Endpoint to get all notes
app.get('/notes', (req, res) => {
    // Add headers to prevent any browser caching of this response
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');

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
