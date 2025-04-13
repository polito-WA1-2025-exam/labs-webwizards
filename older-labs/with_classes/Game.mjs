class Game {
	#gameId;
	#playerId;
	#score;

	#rounds;
	#roundCount;

	constructor(gameId, playerId) {
		this.#gameId = gameId;
		this.#playerId = playerId;
		this.#score = 0;
		this.#rounds = undefined;
		this.#roundCount = 0;
	}
	
}