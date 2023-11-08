function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gameLogic(cChoice, pChoice) {
    let tieMessage = "It's a tie! You both get your cards back"
    let playerWinMessage = "The player wins! The computer loses a " + cChoice + " card and the player gains a " + cChoice + " card";
    let computerWinMessage = "The computer wins! The player loses a " + pChoice + " card and the computer gains a " + pChoice + " card";
    if (cChoice === "rock" && pChoice === "rock") {
        return tieMessage;
    } else if (cChoice === "rock" && pChoice === "paper") {
        pNumRocks++;
        cNumRocks--;
        return playerWinMessage;
    } else if (cChoice === "rock" && pChoice === "scissor") {
        cNumScissors++;
        pNumScissors--;
        return computerWinMessage;
    } else if (cChoice === "paper" && pChoice === "rock") {
        cNumRocks++;
        pNumRocks--;
        return computerWinMessage;
    } else if (cChoice === "paper" && pChoice === "paper") {
        return tieMessage;
    } else if (cChoice === "paper" && pChoice === "scissor") {
        pNumPapers++;
        cNumPapers--;
        return playerWinMessage;
    } else if (cChoice === "scissor" && pChoice === "rock") {
        pNumScissors++;
        cNumScissors--;
        return playerWinMessage;
    } else if (cChoice === "scissor" && pChoice === "paper") {
        cNumPapers++;
        pNumPapers--;
        return computerWinMessage;
    } else if (cChoice === "scissor" && pChoice === "scissor") {
        return tieMessage;
    }
}

function cardPlayed(clicked_id) {
	if ((pNumRocks < 1 && pNumPapers < 1 && pNumScissors < 1) || (cNumRocks < 1 && cNumPapers < 1 && cNumScissors < 1)) {
		addMsg(checkWin);
	} else {
		let cNumber;
		let cChoice = "";
		if (cNumRocks > 0 && cNumPapers > 0 && cNumScissors > 0) {
			cNumber = getRandomInteger(1, 3);
			if (cNumber === 1) {
				cChoice = "rock";
			} else if (cNumber === 2) {
				cChoice = "paper";
			} else {
				cChoice = "scissor";
			}
		} else if (cNumRocks > 0 && cNumPapers > 0 && cNumScissors < 1) {
			cNumber = getRandomInteger(1, 2);
			if (cNumber === 1) {
        	cChoice = "rock";
			} else if (cNumber === 2) {
        	cChoice = "paper";
			}
		} else if (cNumRocks > 0 && cNumPapers < 1 && cNumScissors > 0) {
			cNumber = getRandomInteger(1, 2);
			if (cNumber === 1) {
        	cChoice = "rock";
			} else if (cNumber === 2) {
        	cChoice = "scissor";
			}
		} else if (cNumRocks < 1 && cNumPapers > 0 && cNumScissors > 0) {
			cNumber = getRandomInteger(1, 2);
			if (cNumber === 1) {
        	cChoice = "paper";
			} else if (cNumber === 2) {
        	cChoice = "scissor";
			}
		} else if (cNumRocks > 0 && cNumPapers < 1 && cNumScissors < 1) {
			cChoice = "rock";
		} else if (cNumRocks < 1 && cNumPapers > 0 && cNumScissors < 1) {
			cChoice = "paper";
		} else if (cNumRocks < 1 && cNumPapers < 1 && cNumScissors > 0) {
			cChoice = "scissor";
		}
    	let pChoice = "";
    	if (clicked_id === "pRock") {
			if (pNumRocks > 0) {
				pChoice = "rock";
				addMsg(gameLogic(cChoice, pChoice));
			} else {
				addMsg("You have no more rock cards, pick a different one");
			}
    	} else if (clicked_id === "pPaper") {
			if (pNumPapers > 0) {
				pChoice = "paper";
				addMsg(gameLogic(cChoice, pChoice));
			} else {
				addMsg("You have no more paper cards, pick a different one");
			}
    	} else {
			if (pNumScissors > 0) {
				pChoice = "scissor";
				addMsg(gameLogic(cChoice, pChoice));
			} else {
				addMsg("You have no more scissor cards, pick a different one");
			}
    	}
	}
}

function checkWin() {
	if (pNumRocks < 1 && pNumPapers < 1 && pNumScissors < 1) {
		return "You have run out of cards, you lose!"
	} else if (cNumRocks < 1 && cNumPapers < 1 && cNumScissors < 1) {
		return "The computer has run out of cards, you win!"
	}
}