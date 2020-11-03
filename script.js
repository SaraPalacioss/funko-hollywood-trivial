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

dataBaseArr = [
    ['Julia Roberts', './images/pretty_woman.jpg', '¿Cuál es el nombre que tenía este personaje en la película?', ['Bella Swan', 'Clarice Starling', 'Vivian Ward']],
    ['Julia Roberts', './images/pretty_woman.jpg', '¿A qué actriz representa el funko de la imagen?', ['Julia Roberts', 'Charlize Theron', 'Jessica Chastain']],
    ['Julia Roberts', './images/pretty_woman.jpg', '¿Recuerdas el nombre de la película en la que aparecía este personaje?', ['Pretty Woman', 'Taxi Driver', 'Oficial y caballero']],
    ['Geena Davis', './images/barbara.jpg', '¿Cuál es el nombre que tenía este personaje en la película?', ['Estelle', 'Sharon', 'Barbara']],
    ['Geena Davis', './images/barbara.jpg', 'Adivina, adivinanza ¿De qué actriz se trata?', ['Geena Davis', 'Sarah Paulson', 'Emma Thompson']],
    ['Geena Davis', './images/barbara.jpg', '¿Recuerdas el nombre de la película en la que aparecía este personaje?', ['Los Goonies', 'Mars Attack', 'Beetlejuice']],
    ['Marilyn Monroe', './images/marylin_monroe.jpg', '¿Recuerdas el nombre de la película en la que aparecía este personaje?', ['La tentación vive arriba', 'Con faldas y a lo loco', 'Los caballeros las prefieren rubias']],
    ['Marilyn Monroe', './images/marylin_monroe.jpg', '¿Con que nombre de un suculento vegetal era conocida esta actriz?', ['La princesa de las judias', 'La dama de las calabazas', 'La reina de la alcachofa']],
    ['Marilyn Monroe', './images/marylin_monroe.jpg', '¿En qué año nació nuestra rubia de oro?', ['1932', '1926', '1945']]

]

function pushQuestionsAndAnswersArr(arr) {   
    for(let i = 0; i < arr.length; i++) {
        questionsAndAnswersArr.push(new QuestionsAndAnswers(arr[i][0] , arr[i][1], arr[i][2], arr[i][3]))
    }
}

pushQuestionsAndAnswersArr(dataBaseArr)

let playerName = document.getElementById('input-name')

let scoreHTML = document.getElementById('score-p')

let alertNoName = document.getElementById('alertNoName')

let question = document.getElementById('question')
question.innerHTML = '';

let answer1 = document.getElementById('btn1')
answer1.innerHTML = '';

let answer2 = document.getElementById('btn2')
answer2.innerHTML = '';

let answer3 = document.getElementById('btn3')
answer3.innerHTML = '';

let nextBotton = document.getElementById('next1')

let lifesHTML = document.getElementById('life-p')

let character = questionsAndAnswersArr[0].character

let score = 0

let lifes = 5

function randomQuestion(arr) {
    arr.sort(function () {
        return Math.random() - 0.5
    })
    character = questionsAndAnswersArr[0].character
    question.innerHTML = `${arr[0].question}`
    answer1.innerHTML = `${arr[0].answer[0]}`
    answer2.innerHTML = `${arr[0].answer[1]}`
    answer3.innerHTML = `${arr[0].answer[2]}`
    document.getElementById('pic').src = `${arr[0].image}`
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

function checkResultBtn1() {
    switch (character) {
        case 'Julia Roberts':
            if (answer1.innerHTML === 'Julia Roberts' || answer1.innerHTML === 'Pretty Woman') {
                addScore();
       
            } else {
                substractLifes(lifesHTML)
            }
            break;
        case 'Geena Davis':
            if (answer1.innerHTML === 'Geena Davis') {
                addScore()
            } else {
                substractLifes(lifesHTML)
            }
            break;
        case 'Marilyn Monroe':
            if (answer1.innerHTML === 'La tentación vive arriba') {
                addScore()
            } else {
                substractLifes(lifesHTML)
            }
            break;
    }
    disableBtns()
}



function checkResultBtn2() {
    switch (character) {
        case 'Julia Roberts':
            if (answer2.innerHTML === 'Clarice Starling' || answer2.innerHTML === 'Charlize Theron' || answer2.innerHTML === 'Taxi Driver') {
                substractLifes(lifesHTML)
                answer1.style.backgroundColor = 'yellow'

            }
            break;
        case 'Geena Davis':
            if (answer2.innerHTML === 'Sharon' || answer2.innerHTML === 'Sarah Paulson' || answer2.innerHTML === 'Mars Attack') {
                substractLifes(lifesHTML)
            }
            break;
        case 'Marilyn Monroe':
            if (answer2.innerHTML === 'Con faldas y a la loco' || answer2.innerHTML === '1926') {
                addScore()
            } else {
                substractLifes(lifesHTML)
            }
            break;

    }
    disableBtns()
}




function checkResultBtn3() {
    switch (character) {
        case 'Julia Roberts':
            if (answer3.innerHTML === 'Vivian Ward') {
                addScore()
            } else {
                substractLifes(lifesHTML)
            }
            break;
        case 'Geena Davis':
            if (answer3.innerHTML === 'Beetlejuice' || answer3.innerHTML === 'Barbara') {
                addScore()
            } else {
                substractLifes(lifesHTML)
            }
            break;
        case 'Marilyn Monroe':
            if (answer3.innerHTML === 'La reina de la alcachofa') {
                addScore()
            } else {
                substractLifes(lifesHTML)
            }
            break;
    }
    disableBtns()
}

function addScore() {
    scoreHTML.innerHTML = ++score
}

function resetGame() {
    score = 0
    lifes = 5
    scoreHTML.innerHTML = score
    lifesHTML.innerHTML = lifes
}

function nextBtn() {

    randomQuestion(questionsAndAnswersArr)
    enableBtns()
    if (lifes <= 0) {
        resetGame()
    }
}

function substractLifes(element) {
    element.innerHTML = --lifes
    if (lifes <= 0) {
        question.innerHTML = 'Game Over'
        nextBotton.innerHTML = 'Try again'
    }
}

function startGame() {
    if(playerName.value) {
        window.location = './index2.html'
    } else {
        alertNoName.innerHTML = 'POR FAVOR, INTRODUCE UN NOMBRE PARA PODER CONTINUAR'
    }
}


function correctAnswer1Color() {
    answer1.style.backgroundColor = '#00b347';
    answer1.style.color = 'white';
}

function correctAnswer2Color() {
    answer2.style.backgroundColor = '#00b347';
    answer2.style.color = 'white';
}

function correctAnswer3Color() {
    answer2.style.backgroundColor = '#00b347';
    answer2.style.color = 'white';
}

function incorrectAnswer1Color() {
    answer1.style.backgroundColor = 'tomato';
    answer1.style.color = 'white';
}

function incorrectAnswer2Color() {
    answer2.style.backgroundColor = 'tomato';
    answer2.style.color = 'white';
}

function incorrectAnswer3Color() {
    answer3.style.backgroundColor = 'tomato';
    answer3.style.color = 'white';
}