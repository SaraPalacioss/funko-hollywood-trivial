// CHARACTER CLASS: MALE & FEMALE
class QuestionsAndAnswers {
    constructor(image, question, answer) {
        this.image = image;
        this.question = question;
        this.answer = answer;
    }
}

questionsAndAnswersArr = []


const questionsAndAnswers1 = new QuestionsAndAnswers('/images/pretty_woman.jpg','¿Cuál es el nombre que tenía este personaje en la película?',['Bella Swan', 'Clarice Starling', 'Vivian'])
const questionsAndAnswers2 = new QuestionsAndAnswers('/images/pretty_woman.jpg','¿A qué actriz representa el funko de la imagen?',['Julia Roberts', 'Charlize Theron', 'Jessica Chastain'])
const questionsAndAnswers3 = new QuestionsAndAnswers('/images/pretty_woman.jpg','¿Recuerdas el nombre de la película en la que aparecía este personaje?',['Pretty Woman', 'Taxi Driver', 'Oficial y caballero'])


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

let pic = ''


function randomQuestion (arr) {

        arr.sort(function() {return Math.random() - 0.5})
        question.innerHTML = `${arr[0].question}`
        answer1.innerHTML = `${arr[0].answer[0]}`
        answer2.innerHTML = `${arr[0].answer[1]}`
        answer3.innerHTML = `${arr[0].answer[2]}`
        document.getElementById('pic').src=`${arr[0].image}`

      

       
} 

randomQuestion(questionsAndAnswersArr)

let selectAnswer =''









function checkResultBtn1(){
    if(answer1.innerHTML === 'Julia Roberts' || answer1.innerHTML === 'Pretty Woman' ) {
       console.log('true')
    } else {
        console.log('false')
    }
}


function checkResultBtn2(){
    if(answer1.innerHTML === 'Julia Roberts' || answer1.innerHTML === 'Pretty Woman' ) {
       console.log('true')
    } else {
        console.log('false')
    }
    // if(answer2.innerHTML === 'Clarice Starling' || answer2.innerHTML === 'Charlize Theron' || answer2.innerHTML === 'Taxi Driver'){
    //     console.log('false')
    // } else {
    //     console.log('true')
    // }
    // if(answer3.innerHTML === 'Vivian') {
    //     console.log('true')
    // } else {
    //     console.log('false')
    // }

}


