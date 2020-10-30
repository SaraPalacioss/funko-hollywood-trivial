function Character (image, actorName, filmName) {
    this.image = image;
    this.actorName = actorName;
    this.filmName = filmName;     
    }

const character1 = new Character('./images/forest','Johny Deep','Eduard Scissorhands')
const character2 = new Character('./images/eduard_scissorshand.png','Johny Deep','Eduard Scissorhands')


console.log(character1);

