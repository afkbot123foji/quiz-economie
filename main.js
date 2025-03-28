import { initOpeningAnimation } from './animations/opening.js';
import { Quiz } from './quiz/quiz.js';

document.addEventListener('DOMContentLoaded', () => {
    initOpeningAnimation();

    const quiz = new Quiz();
    quiz.startQuiz();
});