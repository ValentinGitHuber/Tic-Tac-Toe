// Helping functions

// Draw svg line between two divs
export function drawLine(idFrom, idTo) {
    const div1 = document.getElementById('the'+idFrom);
    const div2 = document.getElementById('the'+idTo);
    const svg = document.getElementById('svg');
    let newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('x1', div1.offsetLeft + (div1.offsetWidth/2));
    newLine.setAttribute('y1', div1.offsetTop + (div1.offsetHeight/2));
    newLine.setAttribute('x2', div2.offsetLeft + (div2.offsetWidth/2));
    newLine.setAttribute('y2', div2.offsetTop + (div2.offsetHeight/2));
    svg.appendChild(newLine);
}

// Tic Tac Toe default game board
export function defaultBoard() {
    return new Array(9).fill('');
}

// Tic Tac Toe default game winning combinations
export function winningCombinations() {
    return [
        // Horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        // Vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        // Diagonals
        [0, 4, 8],
        [2, 4, 6]
    ]
}

// Tic Tac Toe default game starting side
export function startingSide() {//include argument if you want random side
    if (arguments[0] != undefined) {
        return Math.random() < 0.5 ? 'X' : 'O';
    } else {
        return 'X'; // Default
    }
}