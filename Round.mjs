class Round {
	#roundId;
	#gameId;
	#memeId;
	#captions;

	constructor(roundId, gameId, memeId) {
		this.#roundId = roundId;
		this.#gameId = gameId;
		this.#memeId = memeId;
		this.#captions = [];
	}
	
}