function Game(gameId, playerId) {
    this.gameId = gameId;
    this.playerId = playerId;
    this.score = 0;
    this.rounds = undefined;
    this.roundCount = 0;
}

function Meme(memeId) {
    this.memeId = memeId;
    this.picture = undefined;	//TODO: define picture
    this.captions = {};
}

function Player(playerId) {
    this.playerId = playerId;
    this.isLogged = ((playerId) ? true : false);
}

function Round(roundId, gameId, memeId) {
    this.roundId = roundId;
    this.gameId = gameId;
    this.memeId = memeId;
    this.captions = [];
}

// Implement a container object (as a list of multiple objects)
function GenericContainer() {
    this.objCollection = [];

    this.add = (obj) => {
		this.objCollection.push(obj);
	}

    this.retrieve = (property, value) => {
        return this.objCollection.find(item => item[property] === value);
    }

	this.delete = (obj) => {
		this.objCollection = this.objCollection.filter(item => item !== obj);
	}

	this.getAll = () => {
		return this.objCollection;
	}

	this.sortOn = (property, ascending = true) => {
        if (property == undefined) {
            return;
        }

        this.objCollection.sort((a, b) => {
            if (a[property] < b[property]) {
                return ascending ? -1 : 1;
            }
            if (a[property] > b[property]) {
                return ascending ? 1 : -1;
            }
            return 0;
        });
    }
}

const collection = new GenericContainer();
let player7 = new Player(7);
let player2 = new Player(2);
let player3 = new Player(undefined);
let player4 = new Player(4);
let player5 = new Player(undefined);

collection.add(player7);
collection.add(player2);
collection.add(player3);
collection.add(player4);
collection.add(player5);

console.log("Complete collection");
console.log(collection.getAll());

collection.sortOn('playerId');
console.log("Sorted collection");
console.log(collection.getAll());

collection.delete(player2);
console.log("Collection after delete");
console.log(collection.getAll());

let player6 = new Player(6);
collection.add(player6);



