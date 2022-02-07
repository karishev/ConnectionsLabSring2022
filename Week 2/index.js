let board = document.getElementById("board");
let numbers = document.getElementById("numbers");
let eraseBtn = document.getElementById("erase");
let endofthegame = document.querySelector(".endtile");
let block = 0;
let checkifchanged = 0;
let missing = 0;
let cells;
let current = 0;
let currentIndex = 0;
let currentNum = 0;

let grid = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

let answer = [
  [3, 1, 6, 5, 7, 8, 4, 9, 2],
  [5, 2, 9, 1, 3, 4, 7, 6, 8],
  [4, 8, 7, 6, 2, 9, 5, 3, 1],
  [2, 6, 3, 4, 1, 5, 9, 8, 7],
  [9, 7, 4, 8, 6, 3, 1, 2, 5],
  [8, 5, 1, 7, 9, 2, 6, 4, 3],
  [1, 3, 8, 9, 4, 7, 2, 5, 6],
  [6, 9, 2, 3, 5, 1, 8, 7, 4],
  [7, 4, 5, 2, 8, 6, 3, 1, 9],
];
window.addEventListener("DOMContentLoaded", (event) => {
  let countRow = 1;
  for (let rowNum = 0; rowNum < 9; rowNum++) {
    let num = createCell(rowNum + 1, 0, 0);
    num.className = "clickable";

    numbers.appendChild(num);

    let row = document.createElement("div");
    row.className = "sudokuRow";
    let countCol = 1;
    for (let col = 0; col < 9; col++) {
      let cell = createCell(grid[rowNum][col], rowNum + 1, col + 1);
      cell.classList.add("normal");

      if (countCol % 3 == 0) cell.classList.add("atBorderRight");
      if (countRow % 3 == 0) cell.classList.add("atBorderBottom");
      if (countRow % 3 == 1) cell.classList.add("atBorderTop");
      if (countCol % 3 == 1) cell.classList.add("atBorderLeft");

      row.appendChild(cell);
      countCol++;
    }
    board.appendChild(row);
    countRow++;
  }
  cells = document.querySelectorAll(".cell");
  for (let index = 0; index < cells.length; index++) {
    cells[index].onclick = function () {
      if (block != 1) {
        if (current != 0) {
          deleteDirections(currentIndex);
          current.classList.remove("chosen");
          hideduplicates(current);
          currentNum = current.innerHTML;
        }
        possibleDirections(cells[index], index);

        if (cells[index].innerHTML != " ") {
          showallduplicates(cells[index]);
        } else {
          cells[index].classList.add("chosen");
        }
        current = cells[index];
        currentIndex = index;
        currentNum = current.innerHTML;
      }
    };
  }

  clickable = document.querySelectorAll(".clickable");
  for (let i = 1; i < 10; i++) {
    let knum = ".a" + i;
    let pickedd = document.querySelectorAll(knum);
    if (pickedd.length == 9) {
      clickable[i - 1].style.visibility = "hidden";
    }
  }

  for (let index = 0; index < clickable.length; index++) {
    clickable[index].onclick = function () {
      if (
        (block != 1 && current.innerHTML == " ") ||
        current.style.color === "rgb(178, 130, 233)" ||
        current.style.color === "red"
      ) {
        if (current.style.color == "rgb(178, 130, 233)") checkifchanged = 1;
        hideduplicates(current);
        if (numofcells(current) == 9) {
          clickable[current.innerHTML - 1].style.visibility = "visible";
        }
        if (current.innerHTML != " ")
          current.classList.remove("a" + current.innerHTML);
        current.innerHTML = index + 1;

        current.classList.add("a" + (index + 1));

        showallduplicates(current);
        checker(current);
        if (checkifchanged == 1 && current.style.color == "red") missing++;
        checkifchanged = 0;
        if (numofcells(current) == 9) {
          clickable[index].style.visibility = "hidden";
          console.log("yes");
        }
      }
    };
  }

  eraseBtn.onclick = function () {
    if (
      (block != 1 && current.style.color === "rgb(178, 130, 233)") ||
      current.style.color === "red"
    ) {
      if (current.style.color == "rgb(178, 130, 233)") missing++;
      hideduplicates(current);
      current.classList.remove("a" + current.innerHTML);
      clickable[current.innerHTML - 1].style.visibility = "visible";
      current.innerHTML = " ";
      current.classList.remove("wrong");
      current.classList.add("chosen");
    }
  };
});

function createCell(inside, row, col) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.classList.add("a" + inside);
  cell.classList.add("r" + row);
  cell.classList.add("c" + col);
  cell.classList.add("ind" + ((row - 1) * 9 + col));

  if (inside !== 0) cell.innerHTML = inside;
  else {
    cell.innerHTML = " ";
    missing++;
  }
  return cell;
}

function showallduplicates(given) {
  let num = given.innerHTML;
  let knum = ".a" + num;
  let picked = document.querySelectorAll(knum);
  picked.forEach((element) => {
    element.classList.add("chosen");
  });
}

function numofcells(given) {
  let num = given.innerHTML;
  let knum = ".a" + num;
  let picked = document.querySelectorAll(knum);
  return picked.length;
}

function hideduplicates(given) {
  let num = given.innerHTML;
  let knum = ".a" + num;
  let picked = document.querySelectorAll(knum);
  picked.forEach((element) => {
    element.classList.remove("chosen");
  });
}

function possibleDirections(given, index) {
  row = Math.floor(index / 9) + 1;
  col = (index % 9) + 1;
  let allRows = document.querySelectorAll(".r" + row);
  let allCols = document.querySelectorAll(".c" + col);
  allCols.forEach((element) => {
    element.classList.add("transChosen");
  });
  allRows.forEach((element) => {
    element.classList.add("transChosen");
  });
  threeonthree(index);
  given.classList.remove("transChosen");
}

function deleteDirections(index) {
  row = Math.floor(index / 9) + 1;
  col = (index % 9) + 1;
  let allRows = document.querySelectorAll(".r" + row);
  let allCols = document.querySelectorAll(".c" + col);
  allCols.forEach((element) => {
    element.classList.remove("transChosen");
  });
  allRows.forEach((element) => {
    element.classList.remove("transChosen");
  });
  deleteSquare(index);
}

function threeonthree(index) {
  row = Math.floor(index / 9);
  col = index % 9;
  rowSquare = Math.floor(row / 3);
  colSquare = Math.floor(col / 3);
  rowInd = rowSquare * 3 + 1;
  colInd = colSquare * 3 + 1;
  for (let kk = 0; kk < 3; kk++) {
    for (let k = 0; k < 3; k++) {
      let ch = document.querySelector(
        ".ind" + ((rowInd + kk - 1) * 9 + (colInd + k))
      );
      ch.classList.add("transChosen");
    }
  }
}

function deleteSquare(index) {
  row = Math.floor(index / 9);
  col = index % 9;
  rowSquare = Math.floor(row / 3);
  colSquare = Math.floor(col / 3);
  rowInd = rowSquare * 3 + 1;
  colInd = colSquare * 3 + 1;
  for (let kk = 0; kk < 3; kk++) {
    for (let k = 0; k < 3; k++) {
      let ch = document.querySelector(
        ".ind" + ((rowInd + kk - 1) * 9 + (colInd + k))
      );
      ch.classList.remove("transChosen");
    }
  }
}

function checker(given) {
  row = Math.floor(currentIndex / 9);
  col = currentIndex % 9;
  if (current.innerHTML == answer[row][col]) {
    given.style.color = "rgb(178, 130, 233)";
    given.classList.remove("wrong");
    missing--;
    if (missing === 0) {
      block = 1;
      hideduplicates(current);
      deleteDirections(currentIndex);
      endofthegame.style.animation = "endofthegame 1s linear 0.2s 2 forwards";
    //   nextThing();
    }
  } else {
    given.style.color = "red";
    given.classList.add("wrong");
  }
}

// function nextThing() {
//   let newpart = document.createElement("div");
//   newpart.innerHTML =
//     "Welcome to the next part, please try to guess the password.";
// }
