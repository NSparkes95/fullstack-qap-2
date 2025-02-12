const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static('public')); // To serve static files (e.g., CSS)

// Path to JSON file
const dataFilePath = path.join(__dirname, 'data.json');

// Function to read streak data
const readData = () => {
    if (!fs.existsSync(dataFilePath)) {
        return { lastStreak: 0, currentStreak: 0 };
    }
    const rawData = fs.readFileSync(dataFilePath);
    return JSON.parse(rawData);
};

// Function to write streak data
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Load initial streak data
let streakData = readData();

// 🟢 Route: Home Page
app.get('/', (req, res) => {
    res.render('index', { lastStreak: streakData.lastStreak, currentStreak: streakData.currentStreak });
});

// 🟢 Route: Quiz Page
app.get('/quiz', (req, res) => {
    // Generate a random math question
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = num1 + num2; // Addition question

    res.render('quiz', { num1, num2, correctAnswer, currentStreak: streakData.currentStreak });
});

// 🟢 Route: Handle Quiz Submission
app.post('/quiz', (req, res) => {
    const { answer, correctAnswer } = req.body;
    let userAnswer = parseInt(answer);
    let correct = parseInt(correctAnswer);

    if (userAnswer === correct) {
        streakData.currentStreak++;
        res.send(`<script>alert("Correct!"); window.location.href = "/";</script>`);
    } else {
        streakData.lastStreak = streakData.currentStreak;
        streakData.currentStreak = 0;
        res.send(`<script>alert("Incorrect. The correct answer was ${correct}."); window.location.href = "/";</script>`);
    }

    // Save updated streak data
    writeData(streakData);
});

// 🟢 Route: Data Page
app.get('/data', (req, res) => {
    res.render('data', { lastStreak: streakData.lastStreak, currentStreak: streakData.currentStreak });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
