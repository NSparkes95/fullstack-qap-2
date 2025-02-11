// Description: This file contains the main server code for the math quiz application.
// Author: Nicole Sparkes
// Date:

const express = require('express');
const { getQuestion, isCorrectAnswer } = require('./utils/mathUtilities');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static('public')); // To serve static files (e.g., CSS)


// In-memory data storage
let currentQuestion = getQuestion();
let currentStreak = 0;
let lastStreak = 0;


//Some routes required for full functionality are missing here. Only get routes should be required
app.get('/', (req, res) => {
    res.render('index', { lastStreak });
});

// Quiz page route
app.get('/quiz', (req, res) => {
    if (req.query.new === 'true') {
        currentStreak = 0;
        currentQuestion = getQuestion(); // Generate a new question
    }
    res.render('quiz', { question: currentQuestion.question, streak: currentStreak });
});

//Handles quiz submissions.
app.post('/submit', (req, res) => {
    const userAnswer = parseFloat(req.body.answer);
    const isCorrect = isCorrectAnswer(currentQuestion, userAnswer);

    if (isCorrect) {
        currentStreak++;
        currentQuestion = getQuestion();
        res.redirect(`/quiz`);
    } else {
        lastStreak = currentStreak;
        currentStreak = 0;
        res.redirect('/completion');
    }
});

//Completion page route
app.get('/completion', (req, res) => {
    res.render('completion', { streak: lastStreak });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});