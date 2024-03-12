const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"],
        answer: "Blue Whale"
    },
    {
        question: "Which company developed the Swift programming language?",
        options: ["Google", "Microsoft",  "Apple", "IBM"],
        answer: "Apple"
    },
    
    {
        question: "When was Swift first introduced??",
        options: ["2008", "2010",  "2014", "2016"],
        answer: "2014"
    },
    
    {
        question: "Swift is primarily used for developing applications for which operating systems?",
        options: ["iOS and macOS", "Windows and android",  "Linix and ubantu", "All of the above"],
        answer: "iOS and macOS"
    },

    {
        question: "What programming language did Swift replace as the primary language for iOS and macOS development?",
        options: ["Objective-C", "C++",  "Java", "Python"],
        answer: "Objective-C"
        
    },

    {
        question: "Which of the following is a key feature of Swift that enhances code safety?",
        options: [" Automatic reference counting (ARC)", "Optionals",  "Closures", "Protocol-oriented programming"],
        answer: "Optionals"
    },


    

];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');

function showQuestion(question) {
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert("Quiz Finished!");
        currentQuestionIndex = 0; // Resetting the quiz
        showQuestion(questions[currentQuestionIndex]);
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert("Quiz Finished!");
        currentQuestionIndex = 0; // Resetting the quiz
        showQuestion(questions[currentQuestionIndex]);
    }
});

// Initial display
showQuestion(questions[currentQuestionIndex]);