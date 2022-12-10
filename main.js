//Create a quiz class
class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    guess(answer){
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            //If is correct add points to score
            this.score++;
        }
        //Go to the next question
        this.questionIndex++
    }
    //When the quiz finish
    isEnded(){
        return this.questionIndex === this.questions.lenght
    }

}

//Create question class
class Question{
    constructor(text,choices,answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice){
        return this.answer === choice
    }
}

// Display Quesiton
function displayQuestion(){
    if(Quiz.isEnded){
        showScores()
    }else{
        let questionElement = document.getElementById()
        questionElement.innerHTML = quiz.getQuestionIndex().questionInd
    }
}