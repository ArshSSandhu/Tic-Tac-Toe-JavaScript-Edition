/*access elements*/

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

/**who goes first */

/**play A and B */
let turnA = true;

/*Using 2 D array to create winning conditions*/

let winnningPatterns = [
    [0,1,2],
    [3,4,5],
    [5,6,7],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ];


const resetGame = () => {
    turnA = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


 /**event - clicking */

 boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("clicked");

        /*Add O or X depending on Turn*/ 
        if(turnA){
            box.innerText = "O";
            turnA = false;
            
        }
        else{
            /**Player X */
            box.innerText= "X";
            turnA= true;
        }
        box.disabled=true;

        checkWinner();

    })
 })

 const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    disableBoxes();
}

const showTie = () => {
    msg.innerText = "Oh no, It's a TIE ! You Both Lose!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

let isTie = true; 

 const checkWinner = () => {
    isTie = true;

    for (let pattern of winnningPatterns){
    
             let positionOfValue1 = boxes[pattern[0]].innerText;
             let positionOfValue2 = boxes[pattern[1]].innerText;
             let positionOfValue3 = boxes[pattern[2]].innerText;

             if(positionOfValue1!= "" && positionOfValue2!= "" && positionOfValue3!= ""){

               if( positionOfValue1 === positionOfValue2 && positionOfValue2 === positionOfValue3){
                showWinner(positionOfValue1);

               }

             }

    }


  // Check for tie if no winner found and all boxes are filled
  if (isTie) {
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

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)