class Player {
	#playerId;
	#isLogged;

	#gameHistory;
	#totalScore;

	constructor(playerId) {
		this.#playerId = playerId;
		this.#isLogged = this.#playerId ?? false;
	}
	
}