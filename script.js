// CHARACTER CLASS: MALE & FEMALE
class QuestionsAndAnswers {
    constructor(character, image, question, answer) {
        this.character = character;
        this.image = image;
        this.question = question;
        this.answer = answer;
    }
}

questionsAndAnswersArr = []


const questionsAndAnswers1 = new QuestionsAndAnswers('Julia Roberts','/images/pretty_woman.jpg','¿Cuál es el nombre que tenía este personaje en la película?',['Bella Swan', 'Clarice Starling', 'Vivian Ward'])
const questionsAndAnswers2 = new QuestionsAndAnswers('Julia Roberts','/images/pretty_woman.jpg','¿A qué actriz representa el funko de la imagen?',['Julia Roberts', 'Charlize Theron', 'Jessica Chastain'])
const questionsAndAnswers3 = new QuestionsAndAnswers('Julia Roberts','/images/pretty_woman.jpg','¿Recuerdas el nombre de la película en la que aparecía este personaje?',['Pretty Woman', 'Taxi Driver', 'Oficial y caballero'])


questionsAndAnswersArr.push(questionsAndAnswers1)
questionsAndAnswersArr.push(questionsAndAnswers2)
questionsAndAnswersArr.push(questionsAndAnswers3)

let question = document.getElementById('question')
question.innerHTML = '';

let answer1 = document.getElementById('btn1')
answer1.innerHTML='';

let answer2= document.getElementById('btn2')
answer2.innerHTML='';

let answer3 = document.getElementById('btn3')
answer3.innerHTML='';

let nextBotton = document.getElementById('next1')

let scoreHTML = document.getElementById('score-p')

let lifesHTML = document.getElementById('life-p')



function randomQuestion (arr) {

        arr.sort(function() {return Math.random() - 0.5})
        question.innerHTML = `${arr[0].question}`
        answer1.innerHTML = `${arr[0].answer[0]}`
        answer2.innerHTML = `${arr[0].answer[1]}`
        answer3.innerHTML = `${arr[0].answer[2]}`
        document.getElementById('pic').src=`${arr[0].image}`

      

       
} 

randomQuestion(questionsAndAnswersArr)



function disableBtns() {
    answer1.disabled = true
    answer2.disabled = true
    answer3.disabled = true
}

function enableBtns() {
    answer1.disabled = false
    answer2.disabled = false
    answer3.disabled = false
}


let character = questionsAndAnswersArr[0].character

let score = 0
let lifes = 5




function checkResultBtn1(){
    switch (character) {
        case 'Julia Roberts':
            if(answer1.innerHTML === 'Julia Roberts' || answer1.innerHTML === 'Pretty Woman' ) {
                scoreHTML.innerHTML = ++score
                
            } else {
                
                substractLifes(lifesHTML)

                
            }
            break;
    }
    disableBtns()
}



function checkResultBtn2(){
    switch (character) {
        case 'Julia Roberts':
            if(answer2.innerHTML === 'Clarice Starling' || answer2.innerHTML === 'Charlize Theron' || answer2.innerHTML === 'Taxi Driver'){
                substractLifes(lifesHTML)
            }
            break;
        
    }
    disableBtns()
}




function checkResultBtn3(){
    switch (character) {
        case 'Julia Roberts':
            if(answer3.innerHTML === 'Vivian Ward'){
                scoreHTML.innerHTML = ++score
                
            } else {
                substractLifes(lifesHTML)
                }
            break;
            
        }
        disableBtns()
    }

 
function resetGame() {
    score = 0
    lifes = 5
    scoreHTML.innerHTML = score
    lifesHTML.innerHTML = lifes
}

function nextBtn(){
   
    randomQuestion(questionsAndAnswersArr)
    enableBtns()
    if(lifes <= 0) {
    resetGame()
    }
}

function substractLifes(element){
    element.innerHTML = --lifes
    if(lifes <= 0) {
        question.innerHTML ='Game Over'
        nextBotton.innerHTML = 'Try again'
    }
}
