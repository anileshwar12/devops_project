const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


const quotes = [
"Push yourself, because no one else is going to do it for you.",
"Great things never come from comfort zones.",
"Dream it. Wish it. Do it.",
"Success doesn’t just find you. You have to go out and get it.",
"Don’t stop when you’re tired. Stop when you’re done.",
"It always seems impossible until it’s done."
];


// Serve static frontend (public folder)
app.use(express.static(path.join(__dirname, 'public')));


// API endpoint
app.get('/quote', (req, res) => {
const idx = Math.floor(Math.random() * quotes.length);
res.json({ quote: quotes[idx] });
});


// Fallback to index.html for single-page usage
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
console.log(`🚀 Quotes API running on port ${PORT}`);
});