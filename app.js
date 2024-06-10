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
        console.log("clicked")
    })
 })