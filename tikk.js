let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgamebtn = document.querySelector(".new-but");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let trunO = true; //playerX,playerO
const winpattens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    trunO = true;
    enablebox();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box is clicked");
        if (trunO) {
            box.innerText = "O";
            trunO = false;
        } else {
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true; // Disable the clicked box
        checkwinner();
    });
});

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};

const checkwinner = () => {
    for (let pattern of winpattens) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos1val === pos3val) {
                // console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
