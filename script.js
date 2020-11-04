// CHARACTER CLASS: MALE & FEMALE
class QuestionsAndAnswers {
    constructor(_character, _image, _question, _answer, _correctAnswer) {
        this.character = _character;
        this.image = _image;
        this.question = _question;
        this.answer = _answer;
        this.correctAnswer = _correctAnswer;
    }
}

class User {
    constructor(_name, _score, _lifes) {
        this.name = _name;
        this.score = _score;
        this.lifes = _lifes;
    }
}

let user = new User('', 0, 5);
user.name = localStorage.getItem("NAME");


let playerName = document.getElementById('input-name');

let scoreHTML = document.getElementById('score-p');

let alertNoName = document.getElementById('alertNoName');

let question = document.getElementById('question');
question.innerHTML = '';

let answer1 = document.getElementById('btn1');
answer1.innerHTML = '';

let answer2 = document.getElementById('btn2');
answer2.innerHTML = '';

let answer3 = document.getElementById('btn3');
answer3.innerHTML = '';

let nextBotton = document.getElementById('next1');

let lifesHTML = document.getElementById('life-p');

let currentCharacter = '';

let currentQuestion = 0;

let currentCorrectAnswer = '';

let correctButton = '';

let finishLog = document.getElementById('finish-log');



const questionsAndAnswersArr = [];

const dataBaseArr = [
    ['Julia Roberts', './images/pretty_woman.jpg', '¿Cuál es el nombre que tenía este personaje en la película?', ['Bella Swan', 'Clarice Starling', 'Vivian Ward'],'Vivian Ward'],
    ['Julia Roberts', './images/pretty_woman.jpg', '¿A qué actriz representa el funko de la imagen?', ['Julia Roberts', 'Charlize Theron', 'Jessica Chastain'], 'Julia Roberts'],
    ['Julia Roberts', './images/pretty_woman.jpg', '¿Recuerdas el nombre de la película en la que aparecía este personaje?', ['Pretty Woman', 'Taxi Driver', 'Oficial y caballero'], 'Pretty Woman'],
    ['Geena Davis', './images/barbara.jpg', '¿Cuál es el nombre que tenía este personaje en la película?', ['Estelle', 'Sharon', 'Barbara'], 'Barbara'],
    ['Geena Davis', './images/barbara.jpg', 'Adivina, adivinanza ¿De qué actriz se trata?', ['Geena Davis', 'Sarah Paulson', 'Emma Thompson'], 'Geena Davis'],
    ['Geena Davis', './images/barbara.jpg', '¿Recuerdas el nombre de la película en la que aparecía este personaje?', ['Los Goonies', 'Mars Attack', 'Beetlejuice'], 'Beetlejuice'],
    ['Marilyn Monroe', './images/marylin_monroe.jpg', '¿Recuerdas el nombre de la película en la que aparecía este personaje?', ['La tentación vive arriba', 'Con faldas y a lo loco', 'Los caballeros las prefieren rubias'], 'La tentación vive arriba'],
    ['Marilyn Monroe', './images/marylin_monroe.jpg', '¿Con que nombre de un suculento vegetal era conocida esta actriz?', ['La princesa de las judias', 'La dama de las calabazas', 'La reina de la alcachofa'], 'La reina de la alcachofa'],
    ['Marilyn Monroe', './images/marylin_monroe.jpg', '¿En qué año nació nuestra rubia de oro?', ['1932', '1926', '1945'],'1926']
];


function pushQuestionsAndAnswersArr(arr) {   
    for(let i = 0; i < arr.length; i++) {
        questionsAndAnswersArr.push(new QuestionsAndAnswers(arr[i][0] , arr[i][1], arr[i][2], arr[i][3], arr[i][4]));
    }
}

pushQuestionsAndAnswersArr(dataBaseArr);


function startGame() {
    if(playerName.value) {
        let userName = playerName.value;
        localStorage.setItem("NAME", userName);
        window.location = './index2.html'
     
    } else {
        alertNoName.innerHTML = 'POR FAVOR, INTRODUCE UN NOMBRE PARA PODER CONTINUAR'
    }
}
function randomQuestion(arr) {
    arr.sort(function () {return 0.5 - Math.random()})
}

function setQuestionsAnswersAndImages(arr, _currentQuestion) {
   
    currentCharacter = arr[_currentQuestion].character;
    currentCorrectAnswer = arr[_currentQuestion].correctAnswer;
   
    question.innerHTML = `${arr[_currentQuestion].question}`;
    answer1.innerHTML = `${arr[_currentQuestion].answer[0]}`;
    answer2.innerHTML = `${arr[_currentQuestion].answer[1]}`;
    answer3.innerHTML = `${arr[_currentQuestion].answer[2]}`;
   
    if(answer1.innerHTML === currentCorrectAnswer) {
        correctButton = answer1;
    }
    if(answer2.innerHTML === currentCorrectAnswer) {
        correctButton = answer2;
    }
    if(answer3.innerHTML === currentCorrectAnswer) {
        correctButton = answer3;
    }
    document.getElementById('pic').src = `${arr[_currentQuestion].image}`;

disableNextBtn()
}

window.onload =  randomQuestion(questionsAndAnswersArr);
window.onload =  setQuestionsAnswersAndImages(questionsAndAnswersArr, currentQuestion)

function checkResultBtn1() {
    switch (currentCharacter) {
        case 'Julia Roberts':
            if (answer1.innerHTML === 'Julia Roberts' || answer1.innerHTML === 'Pretty Woman') {
                addScore();
            } else {
                substractLifes(lifesHTML);
            } 
            break;
        case 'Geena Davis':
            if (answer1.innerHTML === 'Geena Davis') {
                addScore();
            } else {
                substractLifes(lifesHTML);
            }
            break;
        case 'Marilyn Monroe':
            if (answer1.innerHTML === 'La tentación vive arriba') {
                addScore();
            } else {
                substractLifes(lifesHTML);
            }
            break;
    }
    if(correctButton === answer1){
        setColorGreen(answer1);
    } else {
        setColorRed(answer1);
        setColorGreen(correctButton);
    }
    disableBtns();
    enableNextBtn();
}

function checkResultBtn2() {
    switch (currentCharacter) {
        case 'Julia Roberts':
            if (answer2.innerHTML === 'Clarice Starling' || answer2.innerHTML === 'Charlize Theron' || answer2.innerHTML === 'Taxi Driver') {
                substractLifes(lifesHTML);
            }
            break;
        case 'Geena Davis':
            if (answer2.innerHTML === 'Sharon' || answer2.innerHTML === 'Sarah Paulson' || answer2.innerHTML === 'Mars Attack') {
                substractLifes(lifesHTML);
            }
            break;
        case 'Marilyn Monroe':
            if (answer2.innerHTML === 'Con faldas y a la loco' || answer2.innerHTML === '1926') {
                addScore();
            } else {
                substractLifes(lifesHTML);
            }
            break;
    }
    if(correctButton === answer2){
        setColorGreen(answer2);
    } else {
        setColorRed(answer2);
        setColorGreen(correctButton);
    }
    disableBtns();
    enableNextBtn();
}

function checkResultBtn3() {
    switch (currentCharacter) {
        case 'Julia Roberts':
            if (answer3.innerHTML === 'Vivian Ward') {
                addScore();
            } else {
                substractLifes(lifesHTML);
            }
            break;
        case 'Geena Davis':
            if (answer3.innerHTML === 'Beetlejuice' || answer3.innerHTML === 'Barbara') {
                addScore();
            } else {
                substractLifes(lifesHTML);
            }
            break;
        case 'Marilyn Monroe':
            if (answer3.innerHTML === 'La reina de la alcachofa') {
                addScore();
            } else {
                substractLifes(lifesHTML);
            }
            break;
    }
    if(correctButton === answer3){
        setColorGreen(answer3);
    } else {
        setColorRed(answer3);
        setColorGreen(correctButton);
    }
    disableBtns();
    enableNextBtn();
}

function nextQuestion(arr) {
    currentQuestion++
    if(currentQuestion >= arr.length-1 || user.lifes <= 0) {
      endGame();    
    } else {
    setQuestionsAnswersAndImages(arr, currentQuestion)
    enableBtns();
    disableColorsBtn();
    }
}


function disableBtns() {
    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
}

function enableBtns() {
    answer1.disabled = false;
    answer2.disabled = false;
    answer3.disabled = false;
}

function disableNextBtn() {
    nextBotton.disabled = true;
}

function enableNextBtn() {
    nextBotton.disabled = false;
}

function addScore() {
    scoreHTML.innerHTML = ++user.score;
}

function resetGame() {
    window.location = './index2.html';
    user.score = 0;
    user.lifes = 5;
    scoreHTML.innerHTML = user.score;
    lifesHTML.innerHTML = user.lifes;  
}

function substractLifes(element) {
    element.innerHTML = --user.lifes
    if (user.lifes <= 0) {
        question.innerHTML = `Qué lástima ${user.name}, casi lo consigues`
        nextBotton.innerHTML = 'Continue'
    }
}



function setColorGreen(_button) {
    _button.style.backgroundColor = '#00b347';
    _button.style.color = 'white';
}


function setColorRed(_button) {
    _button.style.backgroundColor = 'tomato';
    _button.style.color = 'white';
}

function disableColorsBtn() {
    answer1.style.backgroundColor = '#FFFFFF';
    answer1.style.color = '#778899';
    answer2.style.backgroundColor = '#FFFFFF';
    answer2.style.color = '#778899';
    answer3.style.backgroundColor = '#FFFFFF';
    answer3.style.color = '#778899';
}

function endGame() {
    window.location = './index3.html'; 
}


$(document).ready(function() 
                  {
		 $("#openVideo").fancybox({
           'closeBtn':false,
           'openEffect': 'fade',
           helpers   : { 
   overlay : {closeClick: false} // prevents closing when clicking OUTSIDE fancybox 
  }
         });
        
        //simulamos click y abrimos fancybox
        $("#openVideo").eq(0).trigger("click");
  
        //forzamos play
        document.getElementById('myvideo').play();      
	});

    function popup(URL) {
        day = new Date();
        id = day.getTime();
        eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=640,height=400');");
        }