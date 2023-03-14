const gameSpace = document.querySelector('.gamespace');
const info = document.querySelector('.info');
const resetBtn = document.querySelector('.reset')
let startSquares = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

let turn = "circle";
info.textContent = "Circle Goes First";

function createBoard() {
    startSquares.forEach((_square, index) => {
        const initSquare = document.createElement('div');
        initSquare.classList.add('square');
        initSquare.id = index;
        initSquare.addEventListener('click', startTurn);
        gameSpace.appendChild(initSquare)
    })
}

createBoard();

function startTurn(e) {
    const displayTurn = document.createElement('div');
    displayTurn.classList.add(turn);
    e.target.appendChild(displayTurn);
    turn = turn === "circle" ? "cross" : "circle";
    info.textContent = `Now it's ${turn} turn's.`
    e.target.removeEventListener('click', startTurn)
    checkResult()
}

  const squares = document.querySelectorAll('.square')
function checkResult(){
//   console.log(squares);
winningConditions.forEach(array => {
   const circleWins = array.every(cell => squares[cell].firstChild?.classList.contains('circle'))
   const crossWins = array.every(cell => squares[cell].firstChild?.classList.contains('cross'))
if(circleWins){
    info.textContent = "Circle Wins";
    squares.forEach(square => square.replaceWith(square.cloneNode(true)))
    return
}else if(crossWins){
        info.textContent = "Cross Wins";
        squares.forEach(square => square.replaceWith(square.cloneNode(true)))
        return
}
})

// winningConditions.forEach(array => {
 
//  if(crossWins){
   
//  }
//  })

}

resetBtn.addEventListener('click',()=>{
    location.reload();
});
