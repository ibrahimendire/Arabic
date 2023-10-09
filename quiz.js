// Define the quiz questions and answers
const quizData = [
    {
        question: "Which one is correct word for أَنَا",
        choices: ["شَرِبَ", "شَرِبْتُ", "شَرِبْنَا"],
        correct: 1,
    },
    {
        question: "Which one is correct word for هُوَ",
        choices: ["شَرِبَ", "شَرِبْتُ", "شَرِبْنَا"],
        correct: 0,
    },
    {
        question: "Which one is correct word for نَحْنُ",
        choices: ["شَرِبَ", "شَرِبْتُ", "شَرِبْنَا"],
        correct: 2,
    },
    {
        question: "Which one is correct word for هِيَ",
        choices: ["شَرِبْتِ", "شَرِبْتَ", "شَرِبَتْ"],
        correct: 2,
    },
    {
        question: "Which one is correct word for أَنْتَ",
        choices: ["شَرِبْتِ", "شَرِبْتَ", "شَرِبَتْ"],
        correct: 1,
    },
    {
        question: "Which one is correct word for أَنْتِ",
        choices: ["شَرِبْتِ", "شَرِبْتَ", "شَرِبَتْ"],
        correct: 0,
    },
    {
        question: "Which one is correct word for أَنْتُمَا",
        choices: ["شَرِبَا", "شَرِبَتَا", "شَرِبْتُمَا"],
        correct: 2,
    },
    {
        question: "Which one is correct word for هُمَا(2 boy) ",
        choices: ["شَرِبَا", "شَرِبَتَا", "شَرِبْتُمَا"],
        correct: 0,
    },
    {
        question: "Which one is correct word for أَنْتُمْ",
        choices: ["شَرِبْتُمْ", "شَرِبْتُنَّ", "شَرِبْنَ"],
        correct: 0,
    },
    {
        question: "Which one is correct word for هُمَا(2 girl)",
        choices: ["شَرِبَا", "شَرِبَتَا", "شَرِبْتُمَا"],
        correct: 1,
    },
    {
        question: "Which one is correct word for هُنَّ",
        choices: ["شَرِبْتُمْ", "شَرِبْتُنَّ", "شَرِبْنَ"],
        correct: 2,
    },
    {
        question: "Which one is correct word for أَنْتُنَّ",
        choices: ["شَرِبْتُمْ", "شَرِبْتُنَّ", "شَرِبْنَ"],
        correct: 1,
    },
    {
        question: "Which one is correct word for  هُمْ",
        choices: ["شَرِبْتُمْ", "شَرِبْتُنَّ", "شَرِبُوا"],
        correct: 2,
    },
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const choicesList = document.getElementById("choices-list");
const choiceButtons = document.querySelectorAll(".choice-btn");
const resultText = document.getElementById("result-text");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.textContent = currentQuizData.question;

    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].textContent = currentQuizData.choices[i];
    }
}

function checkAnswer(choice) {
    const currentQuizData = quizData[currentQuestion];

    if (choice === currentQuizData.correct) {
        resultText.textContent = "Correct!";
        score++;
    } else {
        resultText.textContent = "Wrong. The correct answer is: " + currentQuizData.choices[currentQuizData.correct];
    }

    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].disabled = true;
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
        resultText.textContent = "";
        for (let i = 0; i < choiceButtons.length; i++) {
            choiceButtons[i].disabled = false;
        }
        nextButton.style.display = "none";
    } else {
        // Display the final score
        questionText.textContent = "Quiz completed!";
        resultText.textContent = "Your Score: " + score + " out of " + quizData.length;
        choicesList.style.display = "none";
        nextButton.style.display = "none";
    }
}

loadQuestion();
