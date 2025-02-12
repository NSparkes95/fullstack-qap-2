/**
    Description: Generates a random math question and checks if the provided answer is correct
    Author: Nicole Sparkes
    Date:
 */
    function getQuestion() {
        const operators = ['+', '-', '*', '/'];
        const operator = operators[Math.floor(Math.random() * 4)];
        let num1, num2;
    
        // Ensure division is an integer
        if (operator === '/') {
            do {
                num2 = Math.floor(Math.random() * 10) + 1; // Ensure num2 is not 0
            } while (num2 === 0);
            num1 = num2 * (Math.floor(Math.random() * 10) + 1); // Ensure num1 is divisible by num2
        } else {
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * 20) + 1;
        }
    
        return {
            num1,
            operator,
            num2,
            question: `${num1} ${operator} ${num2}`
        };
    }
    
    /**
     * Parses the provided question object and checks whether the provided answer is correct.
     * 
     * @param {Object} questionObj The question object containing num1, operator, and num2
     * @param {number} answer The user's answer
     * @returns {boolean} True if the answer is correct, false otherwise.
     */
    function isCorrectAnswer(questionObj, answer) {
        const { num1, operator, num2 } = questionObj;
        let correctAnswer;
    
        switch (operator) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case '-':
                correctAnswer = num1 - num2;
                break;
            case '*':
                correctAnswer = num1 * num2;
                break;
            case '/':
                correctAnswer = num1 / num2;
                break;
            default:
                throw new Error('Invalid operator');
        }
    
        return parseFloat(answer) === correctAnswer;
    }
    
    module.exports = {
        getQuestion,
        isCorrectAnswer
    };
    