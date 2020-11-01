// CHARACTER CLASS: MALE & FEMALE
class QuestionsAndAnswers {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}

questionsAndAnswersArr = []


const questionsAndAnswers1 = new QuestionsAndAnswers('¿Cuál es el nombre que tenía este personaje en la película?',['Bella Swan', 'Clarice Starling', 'Vivian'])
const questionsAndAnswers2 = new QuestionsAndAnswers('¿A qué actriz representa el funko de la imagen?',['Julia Roberts', 'Charlize Theron', 'Jessica Chastain'])
const questionsAndAnswers3 = new QuestionsAndAnswers('¿Recuerdas el nombre de la película en la que aparecía este personaje?',['Pretty Woman', 'Taxi Driver', 'Oficial y caballero'])


questionsAndAnswersArr.push(questionsAndAnswers1)
questionsAndAnswersArr.push(questionsAndAnswers1)
questionsAndAnswersArr.push(questionsAndAnswers1)

// function randomQuestion (arr) {
//     for(let i=0;i<1;i++){
//         arr.sort(function() {return Math.random() - 0.5})
//         console.log(arr[i].actressName)
//         console.log(arr[i].filmName)
//         console.log(arr[i].characterFemaleName)
//     }
    
// } 





// function randomQuestion (arr) {
//     for(let i=0;i<1;i++){
//         arr.sort(function() {return Math.random() - 0.5})
//         console.log(arr[i].actressName)
//         console.log(arr[i].filmName)
//         console.log(arr[i].characterFemaleName)
//     }
    
// }

// const characterFemale1 = new CharacterFemale('/images/pretty_woman.jpg','Julia Roberts','Vivian Ward','Pretty Woman')
// const characterFemale2 = new CharacterFemale('/images/marylin_monroe.jpg','Marilyn Monroe','The Girl','La tentación vive arriba')
// const characterFemale3 = new CharacterFemale('/images/barbara.jpg','Geena Davis','Barbara','Beetlejuice')

// characterFemaleArr.push(characterFemale1);
// characterFemaleArr.push(characterFemale2);
// characterFemaleArr.push(characterFemale3);

// const QuestionFemale1 = new QuestionFemale('¿A qué actriz representa el funko de la imagen?','¿En qué película aparecía este personaje?','¿Cuál es el nombre que tenía este personaje en la película?')
// const QuestionFemale2 = new QuestionFemale('¿De qué famosa actriz se trata?','¿En qué película pudimos ver a este personaje?','¿Cuál es el nombre de este personaje en la película que aparece?')
// const QuestionFemale3 = new QuestionFemale('¿Quién es esta actriz?','¿Recuerdas el nombre de la película en la que aparecía este personaje?','¿En esta famosísima película, cómo se llamaba este personaje?')
// const QuestionFemale4 = new QuestionFemale('¿Quién es esta famosa actriz?','Para nota, ¿sabrías decir cuál era el nombre de la película en la que aparecía este personaje?','Haz memoria, ¿cual era el nombre de este personaje?')

// questionFemaleArr.push(QuestionFemale1);
// questionFemaleArr.push(QuestionFemale2);
// questionFemaleArr.push(QuestionFemale3);
// questionFemaleArr.push(QuestionFemale4);

// const AnswerFemale1 = new AnswerFemale('Susan Sarandon','Sentido y sensibilidad','Bella Swan')
// const AnswerFemale2 = new AnswerFemale('Sharon Stone','Con faldas y a lo loco','Clarice Starling')
// const AnswerFemale3 = new AnswerFemale('Glen Close','Marte','Bella Swan')
// const AnswerFemale4 = new AnswerFemale('Julie Andrews','Los Goonies','Katniss Everdreen')

// answerFemaleArr.push(AnswerFemale1);
// answerFemaleArr.push(AnswerFemale2);
// answerFemaleArr.push(AnswerFemale3);
// answerFemaleArr.push(AnswerFemale4);

// class Character {
//     constructor(image,filmName) {
//         this.image = image;
//         this.filmName = filmName;     
//     }
// }


// class CharacterMale extends Character {
//     constructor(image, actorName, characterMaleName, filmName) {
//         super(image,filmName);
//         this.actorName = actorName;
//         this.characterMaleName = characterMaleName;   
//     }     
// }

// class CharacterFemale extends Character {
//     constructor(image, actressName, characterFemaleName, filmName) {
//         super(image,filmName);
//         this.actressName = actressName;
//         this.characterFemaleName = characterFemaleName;   
//     }  
// }




// // QUESTION CLASS: MALE & FEMALE

// class Question {
//     constructor(filmNameQuestion) {
//         this.filmNameQuestion = filmNameQuestion;
//     }
// }

// class QuestionMale extends Question {
//     constructor(actorNameQuestion, filmNameQuestion, characterMaleNameQuestion) {
//         super(filmNameQuestion)
//         this.actorNameQuestion =  actorNameQuestion;
//         this.characterMaleNameQuestion = characterMaleNameQuestion;
//     }
// }

// class QuestionFemale extends Question {
//     constructor(actressNameQuestion, filmNameQuestion, characterFemaleNameQuestion) {
//         super(filmNameQuestion)
//         this.actressNameQuestion =  actressNameQuestion;
//         this.filmNameQuestion = filmNameQuestion;
//         this.characterFemaleNameQuestion = characterFemaleNameQuestion;
//     }
// }

// // ANSWER CLASS: MALE & FEMALE

// class Answer {
//     constructor(filmNameAnswer) {
//         this.filmNameAnswer = filmNameAnswer;
//     }
// }

// class AnswerMale extends Answer {
//     constructor(actorNameAnswer, filmNameAnswer, characterMaleNameAnswer) {
//         super(filmNameAnswer)
//         this.actorNameAnswer =  actorNameAnswer;
//         this.characterMaleNameAnswer = characterMaleNameAnswer;
//     }
// }

// class AnswerFemale extends Answer {
//     constructor(actressNameAnswer, filmNameAnswer, characterFemaleNameAnswer) {
//         super(filmNameAnswer)
//         this.actressNameAnswer =  actressNameAnswer;
//         this.filmNameAnswer = filmNameAnswer;
//         this.characterFemaleNameAnswer = characterFemaleNameAnswer;
//     }
// }


// FEMALE DATA SECTION: CHARACTERS & QUESTIONS

// characterFemaleArr = []
// questionFemaleArr = []
// answerFemaleArr = []


// const characterFemale1 = new CharacterFemale('/images/pretty_woman.jpg','Julia Roberts','Vivian Ward','Pretty Woman')
// const characterFemale2 = new CharacterFemale('/images/marylin_monroe.jpg','Marilyn Monroe','The Girl','La tentación vive arriba')
// const characterFemale3 = new CharacterFemale('/images/barbara.jpg','Geena Davis','Barbara','Beetlejuice')

// characterFemaleArr.push(characterFemale1);
// characterFemaleArr.push(characterFemale2);
// characterFemaleArr.push(characterFemale3);

// const QuestionFemale1 = new QuestionFemale('¿A qué actriz representa el funko de la imagen?','¿En qué película aparecía este personaje?','¿Cuál es el nombre que tenía este personaje en la película?')
// const QuestionFemale2 = new QuestionFemale('¿De qué famosa actriz se trata?','¿En qué película pudimos ver a este personaje?','¿Cuál es el nombre de este personaje en la película que aparece?')
// const QuestionFemale3 = new QuestionFemale('¿Quién es esta actriz?','¿Recuerdas el nombre de la película en la que aparecía este personaje?','¿En esta famosísima película, cómo se llamaba este personaje?')
// const QuestionFemale4 = new QuestionFemale('¿Quién es esta famosa actriz?','Para nota, ¿sabrías decir cuál era el nombre de la película en la que aparecía este personaje?','Haz memoria, ¿cual era el nombre de este personaje?')

// questionFemaleArr.push(QuestionFemale1);
// questionFemaleArr.push(QuestionFemale2);
// questionFemaleArr.push(QuestionFemale3);
// questionFemaleArr.push(QuestionFemale4);

// const AnswerFemale1 = new AnswerFemale('Susan Sarandon','Sentido y sensibilidad','Bella Swan')
// const AnswerFemale2 = new AnswerFemale('Sharon Stone','Con faldas y a lo loco','Clarice Starling')
// const AnswerFemale3 = new AnswerFemale('Glen Close','Marte','Bella Swan')
// const AnswerFemale4 = new AnswerFemale('Julie Andrews','Los Goonies','Katniss Everdreen')

// answerFemaleArr.push(AnswerFemale1);
// answerFemaleArr.push(AnswerFemale2);
// answerFemaleArr.push(AnswerFemale3);
// answerFemaleArr.push(AnswerFemale4);



// // MALE DATA SECTION: CHARACTERS & QUESTIONS

// const characterMale1 = new CharacterMale('/images/forest_gump.jpg','Tom Hanks','Forrest Gump','Forrest Gump')
// const characterMale2 = new CharacterMale('/images/jack_torrance.jpg','Jack Nicholson','Jack Torrance','El resplandor')
// const characterMale3 = new CharacterMale('/images/john_macclane.jpg','Bruce Willis','John McClane','Jungla de Cristal')

// const questionMale1 = new QuestionMale('¿A qué actor representa el funko de la imagen?','¿En qué película aparecía este personaje?','¿Cuál es el nombre que tenía este personaje en la película?')
// const questionMale2 = new QuestionMale('¿De qué famoso actor se trata?','¿En qué película pudimos ver a este personaje?','¿Cuál es el nombre de este personaje en la película que aparece?')
// const questionMale3 = new QuestionMale('¿De qué actor se trata?','¿Recuerdas el nombre de la película en la que aparecía este personaje?','¿En esta famosísima película, cómo se llamaba este personaje?')
// const questionMale4 = new QuestionMale('¿Quién es este famoso actor?','Para nota, ¿sabrías decir cuál era el nombre de la película en la que aparecía este personaje?','Haz memoria, ¿cual era el nombre de este personaje?')

// const AnswerMale1 = new AnswerMale('Chuck Norris','American Ganster','Marty McFly')
// const AnswerMale2 = new AnswerMale('Silvester Stalone','El club de la lucha','Derek Vinyard')
// const AnswerMale3 = new AnswerMale('Leonardo Di Caprio','Reservois dog','Alex DeLarge')
// const AnswerMale4 = new AnswerMale('Russel Crowe','Aterriza como puedas','Rhett Butler')


// function actressImg (arr) {
//     for(let i=0;i<1;i++){
//     arr.sort(function() {return Math.random() - 0.5})
//         console.log(arr[i].image)
//     }
// }

// function randomActressName (arr) {
//     for(let i=0;i<1;i++){
//         arr.sort(function() {return Math.random() - 0.5})
//         console.log(arr[i].actressName)
//         console.log(arr[i].filmName)
//         console.log(arr[i].characterFemaleName)
//     }
    
// }

// function randomActressQuestion (arr) {
//     for(let i=0;i<1;i++){
//     arr.sort(function() {return Math.random() - 0.5})
//         console.log(arr[i].actressNameQuestion)
//         console.log(arr[i].filmNameQuestion)
//         console.log(arr[i].characterFemaleNameQuestion)   
//     }
// }

// actressImg(characterFemaleArr)

// randomActressName(characterFemaleArr)

// randomActressQuestion(questionFemaleArr)



