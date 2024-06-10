/*access elements*/

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

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

        const checkWinner = () => {
            for (let pattern of winnningPatterns){
                console.log(pattern[0], pattern[1],pattern[2]);
                console.log(
                    boxes[pattern[0]].innerText,
                     boxes[pattern[1]].innerText, 
                     boxes[pattern[2]].innerText);

                     let positionOfValue1 = boxes[pattern[0]].innerText;
                     let positionOfValue2 = boxes[pattern[1]].innerText;
                     let positionOfValue3 = boxes[pattern[2]].innerText;

            }
        }
    })
 })