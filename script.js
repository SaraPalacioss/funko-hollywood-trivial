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

const user = new User('', 0, 3);
user.name = localStorage.getItem("NAME");

const playerName = document.getElementById('input-name');

const scoreHTML = document.getElementById('score-p');

const alertNoName = document.getElementById('alert-no-name');

const question = document.getElementById('question');
question.innerHTML = '';

const answer1 = document.getElementById('btn1');
answer1.innerHTML = '';

const answer2 = document.getElementById('btn2');
answer2.innerHTML = '';

const answer3 = document.getElementById('btn3');
answer3.innerHTML = '';

const nextBotton = document.getElementById('next1');

const lifesHTML = document.getElementById('life-p');

let currentCharacter = '';

let currentQuestion = 0;

let currentCorrectAnswer = '';

let correctButton = '';

const finishLog = document.getElementById('finish-log');

const button = document.querySelector('button');

const popup = document.querySelector('.popup-wrapper');

const close = document.querySelector('.popup-close');

const getLifes = document.getElementById('get-lifes');

const getLifes2 = document.getElementById('get-lifes2');

const getLifesVideo = document.getElementById('get-life-video');

const questionsAndAnswersArr = [];

const dataBaseArr = [
    ['Julia Roberts', './images/pretty_woman.jpg', '¿Qué nombre tenía este personaje en la película?', ['Susan Parson', 'Gloria Smith', 'Vivian Ward'],'Vivian Ward'],
    ['Geena Davis', './images/barbara.jpg', '¿Recuerdas el nombre de la película en la que aparecía este personaje?', ['Los Goonies', 'Mars Attack', 'Beetlejuice'], 'Beetlejuice'],
    ['Audry Hepburn', './images/audry_hepburn.jpg', '¿Con qué famoso actor se repartía los elogios nuestra querida actriz en esta película?', ['Humphrey Bogart', 'George Peppard', 'Jerry Lee Lewis'], 'George Peppard'],
    ['Michael Keaton', './images/beetlejuice.jpg', '¿Quién interpretaba a este rarísimo personaje?', ['Johnny Deep', 'Alec Baldwin', 'Michael Keaton'], 'Michael Keaton'],
    ['Tom Hanks', './images/forest_gump.jpg', '¿En qué año escuchamos la célebre frase "Tonto es el que hace tonterías"?', ['1994', '1995', '1997'],'1994'],
    ['Marilyn Monroe', './images/marylin_monroe.jpg', '¿Con que nombre de un suculento vegetal era conocida esta actriz?', ['La princesa de las judias', 'La dama de las espinacas', 'La reina de la alcachofa'], 'La reina de la alcachofa'],
    ['Charlize Theron', './images/furiosa.jpg', '¿Cómo se llamaba este personaje?', ['Rabiosa', 'Cabreada', 'Furiosa'],'Furiosa'],
    ['Robert Downey Jr.', './images/iron_man.jpg', '¿Qué es exactamente lo que lleva en la mano?', ['Guantelete de la Galaxia', 'Guantelete del Infinito', 'Guantelete de la eternidad'],'Guantelete del Infinito'],
    ['Jack Nicholson', './images/jack_torrance.jpg', '¿Cómo se llamaba este tipo tan cuerdo?', ['Matt Gorderer', 'Jack Torrance', 'Sloan Kein'],'Jack Torrance'],
    ['Bruce Willis', './images/john_macclane.jpg', '¿En qué película aparece este personaje?', ['Die Hard', 'The Jackal', 'Looper'],'Die Hard'],
    ['Uma Thurman', './images/kill_bill.jpg', '¿Cómo conocimos a esta chica buena?', ['The Bride', 'The Girl', 'The Babe'],'The Bride'],
    ['Al Pacino', './images/michael_corleone.jpg', '¿Cómo se llama el actor que encarnó a este personaje?', ['Robert De Niro', 'Anthony Hopkins', 'Al Pacino'],'Al Pacino'],
    ['Bill Murray', './images/peter-venkman.jpg', '¿En qué año pudimos ver por primera vez al equipo en acción?', ['1979', '1981', '1984'],'1984'],
    ['Kate Winslet', './images/rose.jpg', '¿Cómo consiguió salvarse nuestra protagonista?', ['Subida al trozo de una mesa', 'Subida al trozo de un piano', 'Subida al trozo de una puerta'],'Subida al trozo de una puerta'],
    ['Olivia Newton John', './images/sandy.jpg', '¿A qué instituto iba junto con su querido Danny?', ['Instituto Rydell', 'Instituto Campbell', 'Instituto Cornwell'],'Instituto Rydell'],
    ['Tony Montana', './images/tony_montana.jpg', '¿Qué director llevó al cine esta obra maestra?', ['Francis Ford Coppola', 'Brian de Palma', 'Martin Scorsese'],'Brian de Palma'],
    ['Meryl Streep', './images/wanda.jpg', '¿Qué misión casi imposible le pidió a la pobre Andy Sachs?', ['La copia original del guión de Star Wars Episodio IV', 'Una reunión con Kim Jonng-un', 'El manuscrito de Harry Potter y las reliquias de la muerte'],'El manuscrito de Harry Potter y las reliquias de la muerte'],
    ['Hugh Jackman', './images/wolverine.jpg', '¿Qué material indestructible compone el cuerpo de nuestro adorado Lobezno?', ['Adamantiumn', 'Vibranium', 'Uru'],'Adamantiumn'],
    ['Michael J. Fox', './images/michael_j_fox.jpg', '¿Con quién viajaba en el DeLorean?', ['Dr. John Brown', 'Dr. Emmett Brown', 'Dr. Robert Brown'],'Dr. Emmett Brown'],
    ['Rowan Atkinson', './images/mr-bean.jpg', '¿Cómo se llama este famoso actor británico con tan buen sentido del humor?', ['Rowan Atkinson', 'Robert Pattinson', 'Ronald Dawson'],'Rowan Atkinson']
];


// FUNCTION TO PUSH DATA IN QUESTIONSANDANSWERS ARRAY

function pushQuestionsAndAnswersArr(arr) {   
    for(let i = 0; i < arr.length; i++) {
        questionsAndAnswersArr.push(new QuestionsAndAnswers(arr[i][0] , arr[i][1], arr[i][2], arr[i][3], arr[i][4]));
    }
}

pushQuestionsAndAnswersArr(dataBaseArr);


// START GAME 

function startGame() {
    if(playerName.value) {
        let userName = playerName.value;
        localStorage.setItem("NAME", userName);
        window.location = './index2.html';  
    } else {
        alertNoName.innerHTML = 'POR FAVOR, INTRODUCE UN NOMBRE PARA PODER CONTINUAR';
    }
}


// RANDOM ORDER TO THE QUESTIONS ARRAY

function randomQuestion(arr) {
    arr.sort(function () {return 0.3 - Math.random()});
}


// CORRECT ANSWER CHECKER FUNCTION

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
disableNextBtn();
}


// LOAD RANDOM ORDER QUESTIONS & CORRECT ANSWER CHECKER FUNCTIONS IN INDEX2.HTML

window.onload =  randomQuestion(questionsAndAnswersArr);

window.onload =  setQuestionsAnswersAndImages(questionsAndAnswersArr, currentQuestion);


// ADD SCORE 

const addScore = () => {scoreHTML.innerHTML = ++user.score;}


// SUBSTRACT LIFES 

const substractLifes = (element) => {element.innerHTML = --user.lifes;}

const winOrLoose = (arr) => {
    console.log(currentQuestion)
    console.log(arr.length)
    if (user.lifes === 0) {
        question.innerHTML = `Qué lástima ${user.name}, casi lo consigues`;
        getLifes.innerHTML = `No pasa nada ${user.name},`;
        getLifes2.innerHTML = `¿quieres 3 vidas extra?`;
        getLifesVideo.innerHTML = `Sólo tienes que ver el siguiente video`
        nextBotton.innerHTML = 'Continue';
        popUpBlock();
    } else if (currentQuestion >= arr.length-1) {
        question.style.fontSize = '25px';
        question.style.color = 'black';
        question.innerHTML = `¡Enhorabuena ${user.name}, has ganado!`;
        nextBotton.innerHTML = 'Continue';
    }
}


// GET NEW EXTRA LIFES WATCHING ADD AND CONTINUE GAME 

const gettingLifes = () => {
    user.lifes = 3;
    lifesHTML.innerHTML = user.lifes; 
    nextBotton.innerHTML = 'Next';
    popUpNone();
    nextQuestion(questionsAndAnswersArr);
    disableNextBtn();
}


// RESET GAME 

function resetGame () {
    window.location = './index2.html';
    user.score = 0;
    user.lifes = 3;
    scoreHTML.innerHTML = user.score;
    lifesHTML.innerHTML = user.lifes;  
}


// END GAME 

const endGame = () => {window.location = './index3.html';}


// EVALUATING ANSWERS

const checkResultBtn1 = () => {
    if(correctButton === answer1){
        setColorGreen(answer1);
        addScore()
    } else {
        setColorRed(answer1);
        setColorGreen(correctButton);
        substractLifes(lifesHTML);
    }
    disableBtns();
    enableNextBtn();
    winOrLoose(questionsAndAnswersArr);
}

const checkResultBtn2 = () => {
    if(correctButton === answer2){
        setColorGreen(answer2);
        addScore();
    } else {
        setColorRed(answer2);
        setColorGreen(correctButton);
        substractLifes(lifesHTML);
    }
    disableBtns();
    enableNextBtn();
    winOrLoose(questionsAndAnswersArr);
}

const checkResultBtn3 = () => {
    if(correctButton === answer3){
        setColorGreen(answer3);
        addScore();
    } else {
        setColorRed(answer3);
        setColorGreen(correctButton);
        substractLifes(lifesHTML);
    }
    disableBtns();
    enableNextBtn();
    winOrLoose(questionsAndAnswersArr);
}


// NEXT BUTTON ACTIONS

const nextQuestion = (arr) => {
    currentQuestion++
    if(currentQuestion >= arr.length || user.lifes === 0) {
        console.log(user.lifes)
        console.log(currentQuestion)
        console.log(arr.length)
      endGame();    
    } else {
    setQuestionsAnswersAndImages(arr, currentQuestion);
    enableBtns();
    disableColorsBtn();
    }
}


// ENABLE/DISABLE BUTTONS

const disableBtns = () => {
    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
}

const enableBtns = () => {
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


// SET COLOR TO BUTTONS FOR CORRECT/INCORRECT ANSWERS

const setColorGreen = (_button) => {
    _button.style.backgroundColor = '#00b347';
    _button.style.color = 'white';
}

const setColorRed = (_button) => {
    _button.style.backgroundColor = 'tomato';
    _button.style.color = 'white';
}

const disableColorsBtn = () => {
    answer1.style.backgroundColor = '#FFFFFF';
    answer1.style.color = '#778899';
    answer2.style.backgroundColor = '#FFFFFF';
    answer2.style.color = '#778899';
    answer3.style.backgroundColor = '#FFFFFF';
    answer3.style.color = '#778899';
}


// POP UP FOR GET LIFES/WIN GAME

const popUpBlock = () => {popup.style.display = 'block';}
    
const popUpNone = () => {popup.style.display = 'none';}

close.addEventListener('click', () => {
    popup.style.display = 'none';
});
 
popup.addEventListener('click', e => {
    if(e.target.className === 'popup-wrapper') {
        popup.style.display = 'none';
    }
});