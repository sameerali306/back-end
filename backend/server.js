import express from 'express';
const app = express();

// 1. Root route - Send a text response back to the browser
app.use(express.static('dist'))
// app.get('/', (req, res) => {
//     console.log('hello your server is running');
//     res.send('Server is up and running!'); // Added res.send()
// });

// 2. Jokes route - Return the array as JSON
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 2,
            joke: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 3,
            joke: "Why did the bicycle fall over? Because it was two-tired!"
        },
        {
            id: 4,
            joke: "Why did the tomato turn red? Because it saw the salad dressing!"
        }
    ];

    res.json(jokes); // Added res.json()
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});