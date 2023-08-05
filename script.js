const questions = [
  {
    question: 'Which is the largest number?',
    answers: [
      { text: '1', correct: false },
      { text: '2', correct: false },
      { text: '3', correct: false },
      { text: '4', correct: true },
    ],
  },
  {
    question: 'Which is an animal?',
    answers: [
      { text: 'Apple', correct: false },
      { text: 'Glass', correct: false },
      { text: 'Snake', correct: true },
      { text: 'Computer', correct: false },
    ],
  },
  {
    question: 'Which is a planet?',
    answers: [
      { text: 'Earth', correct: true },
      { text: 'Sirius', correct: false },
      { text: 'Altair', correct: false },
      { text: 'Polaris', correct: false },
    ],
  },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answers');
const nextButton = document.getElementById('nextButton');

let newQuestionIndex = 0;
let point = 0;
let answerClicked = false; // Click control

function startQuiz() {
  newQuestionIndex = 0;
  point = 0;
  nextButton.style.display = 'none';
  showQuestions();
}

function showQuestions() {
  let newQuestion = questions[newQuestionIndex];
  let orderQuestion = newQuestionIndex + 1;
  questionElement.innerHTML = orderQuestion + '- ' + newQuestion.question; // Display of questions

  answerButtons.innerHTML = '';

  newQuestion.answers.forEach((answer, index) => {
    //Assigning answers to buttons
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => answerClick(button, answer.correct));
    answerButtons.appendChild(button);
  });
}

function answerClick(button, isCorrect) {
  if (answerClicked) {
    button.style.cursor = 'not-allowed'; //One click permission
    return;
  }

  answerClicked = true;

  if (isCorrect) {
    button.style.backgroundColor = 'green';
    point++; //True-false colors etc.
  } else {
    button.style.backgroundColor = 'red';
  }

  nextButton.style.display = 'block';
}

function showNextQuestion() {
  answerClicked = false;
  newQuestionIndex++;
  if (newQuestionIndex < questions.length) {
    nextButton.style.display = 'none';
    showQuestions();
  } else {
    questionElement.innerHTML =
      'Quiz Finished! Your Point: ' + point + '/' + questions.length; //Result screen
    answerButtons.innerHTML = '';
    nextButton.style.display = 'none';
  }
}

nextButton.addEventListener('click', showNextQuestion);

startQuiz();
