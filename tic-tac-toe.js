document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";

    const status = document.querySelector("#status");
    const newGameButton = document.querySelector(".btn");
    const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

    squares.forEach(function (square) {
        square.classList.add("square");

	square.addEventListener("mouseover", function () {
	    square.classList.add("hover");

	});

	square.addEventListener("mouseout", function () {
	    square.classList.remove("hover");
	});

        square.addEventListener("click", function () {
	    if (square.textContent !== "") {
 	        return;
	     }
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);



winningCombinations.forEach(function (combination) {
    if (
	squares[combination[0]].classList.contains(currentPlayer) &&
	squares[combination[1]].classList.contains(currentPlayer) &&
	squares[combination[2]].classList.contains(currentPlayer) 
     ) {
	status.textContent = 
	   "Congratulations! " + currentPlayer + " is the winner!";
	status.classList.add("you-won");
	}
});

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });
    });

	newGameButton.addEventListener("click", function () {
    	squares.forEach(function (square) {
        	square.textContent = "";
        	square.classList.remove("X");
        	square.classList.remove("O");
        	square.classList.remove("hover");
    	});

    	currentPlayer = "X";

    	status.textContent =
        	"Move your mouse over a square and click to play an X or an O.";

    	status.classList.remove("you-won");
    });
});

