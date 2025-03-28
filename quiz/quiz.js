class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    startQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.displayQuestion();
    }

    displayQuestion() {
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');

        const currentQuestion = this.questions[this.currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answersElement.innerHTML = '';

        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.onclick = () => this.submitAnswer(index);
            answersElement.appendChild(button);
        });
    }

    submitAnswer(selectedIndex) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.answers[selectedIndex].correct) {
            this.score++;
        }

        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
        } else {
            this.getResults();
        }
    }

    getResults() {
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Your score: ${this.score} out of ${this.questions.length}`;
    }
}

export default Quiz;