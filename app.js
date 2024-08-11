// Access elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// Who goes first
let turnA = true;

// Using 2D array to create winning conditions
let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Fixed pattern 3 from [5,6,7] to [6,7,8]
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnA = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    msg.innerText = ""; // Clear the message text on reset
}

/** Event - clicking */
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");

        /* Add O or X depending on Turn */ 
        if (turnA) {
            box.innerText = "O";
            turnA = false;
        } else {
            box.innerText = "X";
            turnA = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    disableBoxes();
}

const showTie = () => {
    msg.innerText = "Oh no, It's a TIE! You Both Lose!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    let isWinnerFound = false;

    for (let pattern of winningPatterns) {
        let positionOfValue1 = boxes[pattern[0]].innerText;
        let positionOfValue2 = boxes[pattern[1]].innerText;
        let positionOfValue3 = boxes[pattern[2]].innerText;

        if (positionOfValue1 !== "" && positionOfValue2 !== "" && positionOfValue3 !== "") {
            if (positionOfValue1 === positionOfValue2 && positionOfValue2 === positionOfValue3) {
                showWinner(positionOfValue1);
                isWinnerFound = true;
                break;
            }
        }
    }

    // Check for tie if no winner found and all boxes are filled
    if (!isWinnerFound) {
        let allFilled = true;
        for (let box of boxes) {
            if (box.innerText === "") {
                allFilled = false;
                break;
            }
        }

        if (allFilled) {
            showTie();
        }
    }
}

// Event listeners for reset buttons
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
