const { generateQuestion, checkAnswer } = require('../../../utils/mathUtilities');

describe('mathUtilities.js', () => {
  describe('generateQuestion()', () => {
    it('generates valid questions', () => {
      const question = generateQuestion();
      expect(question).toMatch(/^\d+ [+\-*/] \d+$/);
    });

    it('ensures division questions have integer results', () => {
      for (let i = 0; i < 20; i++) { // Test multiple cases
        const question = generateQuestion();
        if (question.includes('/')) {
          const [num1, _, num2] = question.split(' ');
          expect(parseInt(num1) % parseInt(num2)).toBe(0);
        }
      }
    });
  });

  describe('checkAnswer()', () => {
    it('validates correct answers', () => {
      expect(checkAnswer('5 + 3', 8)).toBe(true);
      expect(checkAnswer('10 / 2', 5)).toBe(true);
    });

    it('rejects incorrect answers', () => {
      expect(checkAnswer('5 + 3', 7)).toBe(false);
      expect(checkAnswer('10 / 2', 4)).toBe(false);
    });
  });
});