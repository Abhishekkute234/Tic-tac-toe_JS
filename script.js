let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");

// we have alternate turns
// XOXO...
let turnO = true;
// 2d array
const winnpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

//  to print alternate "X,O" in the boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        } else {
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winnpattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val === pos3Val) {
                
                if(turnO==true){
                    alert("O is a winner");
                }
                else{
                    alert("X is a winner");
                }
            }
            
            
        }
        
    }
    return; 
};


resetbtn.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false; // Re-enable the buttons
    }
    turnO = true; // Reset the turn to O
});
