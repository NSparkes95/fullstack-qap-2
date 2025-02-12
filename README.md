📌 Math Quiz Application
A web-based math quiz that allows users to test their arithmetic skills, track their answer streaks, and view their performance.

📖 Features

✅ Home Page – Start a new quiz, view the last recorded streak.
✅ Quiz Page – Randomly generated math questions (addition, subtraction, multiplication, division).
✅ Answer Validation – Check if the answer is correct and update the streak.
✅ Statistics Page – Display last and current streaks.
✅ In-Memory Data Storage – Keeps track of user scores while the server is running.
✅ Unit Tests – Ensure question generation and answer validation are accurate.

🚀 Installation & Setup

Clone the Repository:
git clone https://github.com/NSparkes95/fullstack-qap-2.git
cd fullstack-qap-2

Install Dependencies:
npm install

Start the Server:
npm start
The app will run on http://localhost:3000

🎮 How to Use

Start the Quiz:
Click "Start New Quiz" on the home page.
A random math question will be displayed.

Submit an Answer:
Enter a numerical response and click Submit.
If correct, the streak increases.
If incorrect, the streak resets.

View Statistics:
Click "View Stats" to check current and past streaks.

Restart Quiz:
Click "Start New Quiz" to generate a new question.
🛠️ Technologies Used

Node.js & Express.js – Backend logic and server.
EJS – Templating for dynamic content.
CSS & HTML – Frontend styling and layout.
JavaScript – Question generation and answer validation.
🧪 Running Tests

Unit tests ensure functionality for question generation and answer validation. Run the tests using:

npm test
📌 Future Improvements

🔹 Add persistent storage (e.g., database).
🔹 Implement user authentication for multi-user support.
🔹 Improve UI with animations.

👨‍💻 Developed by: Nicole Sparkes

