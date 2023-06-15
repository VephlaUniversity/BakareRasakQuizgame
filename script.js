const questions = [
{
    question: "what is the full meaning of HTML?",
    answers:[
        { option: "a", text: "Hyper Text Markup Language", correct: true},
        { option: "b", text: "Hyperlink Mark up language", correct: false},
        { option: "c", text: "Home tool Mark up language", correct: false},
        { option: "d", text: "Hype test Marking up language", correct: false},
    ]
 },
 {
    question: "Who is the father of HTML?",
    answers:[
        { option: "a", text: "Rasmus Lerdorf", correct: false},
        { option: "b", text: "Tim Berners-lee", correct: true},
        { option: "c", text: "Brendan Eich", correct: false},
        { option: "d", text: "Sergey Brin", correct: false},
    ]
 },
 {
    question: "Which is used to read an HTML page and render it?",
    answers:[
        { option: "a", text: "Web server", correct: false},
        { option: "b", text: "Web network", correct: false},
        { option: "c", text: "Web browser", correct: true},
        { option: "d", text: "Web matrix", correct: false},
    ]
 },
 {
    question: "Which character is used to indicate an end tag?",
    answers:[
        { option: "a", text: "|", correct: false},
        { option: "b", text: "}", correct: false},
        { option: "c", text: ">", correct: false},
        { option: "d", text: "/", correct: true},
    ]
 },
 {
    question: "Which is used to create Web Pages?",
    answers:[
        { option: "a", text: "C++", correct: false},
        { option: "b", text: "Java", correct: false},
        { option: "c", text: "HTML", correct: true},
        { option: "d", text: "Python", correct: false},
    ]
 },
 {
    question: "HTML tags are used to describe document ___",
    answers:[
        { option: "a", text: "definition", correct: false},
        { option: "b", text: "content", correct: true},
        { option: "c", text: "language", correct: false},
        { option: "d", text: "model", correct: false},
    ]
 },
 {
    question: "Block elements are normally displayed without starting a new line",
    answers:[
        { option: "a", text: "True", correct: false},
        { option: "b", text: "False", correct: true},
        { option: "c", text: "Maybe", correct: false},
        { option: "d", text: " dont know", correct: false},
    ]
 },
 {
    question: "In HTML, which attribute is used to specify that an input field must be filled out?",
    answers:[
        { option: "a", text: "placeholder", correct: false},
        { option: "b", text: "Validate", correct: false},
        { option: "c", text: "input type", correct: false},
        { option: "d", text: "required", correct: true},
    ]
 },
 {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answers:[
        { option: "a", text: "title", correct: false},
        { option: "b", text: "alt", correct: true},
        { option: "c", text: "src", correct: false},
        { option: "d", text: "jpeg", correct: false},
    ]
 },
 {
    question: " HTML document can contain ___.",
    answers:[
        { option: "a", text: "Tags", correct: false},
        { option: "b", text: "Plain Text", correct: false},
        { option: "c", text: "Attributes", correct: false},
        { option: "d", text: "All the above", correct: true},
    ]
   },
 ];
 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");
 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQestion();
}

function showQestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML ='{' + answer.option + '} ' +  answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
    
   }); 
}
function resetstate(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
  nextButton.style.display = "block";
}
function showScore(){
    resetstate();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"

}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
});
startQuiz();