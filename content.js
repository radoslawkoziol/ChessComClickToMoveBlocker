const chessBoardHandler = (e) => {
  const chessBoard = document.getElementsByTagName('chess-board')[0]

  if (chessBoard.getElementsByClassName('highlight').length === 3) {
    window.lazyChessCom = true
    chessBoard.style.pointerEvents = 'none'
  }
}

const sectionHandler = () => {
  if (window.lazyChessCom) {
    window.lazyChessCom = false
  } else {
    const chessBoard = document.getElementsByTagName('chess-board')[0]
    chessBoard.style.pointerEvents = 'all'
  }
}

const chessBoardHandler2 = (e) => {
  const chessBoard = document.getElementById('game-board');

  if (chessBoard.getElementsByClassName('selection-square').length > 0) {
    window.lazyChessCom = true
    chessBoard.style.pointerEvents = 'none'
  }
}

const sectionHandler2 = () => {
  if (window.lazyChessCom) {
    window.lazyChessCom = false
  } else {
    const chessBoard = document.getElementById('game-board');
    chessBoard.style.pointerEvents = 'all'
  }
}

// const chessBoardCollection = document.getElementsByTagName('chess-board');
//
// if (chessBoardCollection.length > 0) {
//   chessBoardCollection[0].addEventListener('click', chessBoardHandler)
//   const layoutBoardSection = document.getElementsByClassName('layout-board-section');
//   const boardLayoutMain = document.getElementById('board-layout-main');
//   if (layoutBoardSection.length > 0) {
//     layoutBoardSection[0].addEventListener('click', sectionHandler)
//   } else if (boardLayoutMain) {
//     boardLayoutMain.addEventListener('click', sectionHandler)
//
//   }
// }

const gameBoard = document.getElementById('game-board');
gameBoard.addEventListener('click', chessBoardHandler2);
const boardLayoutMain = document.getElementById('board-layout-main');
boardLayoutMain.addEventListener('click', sectionHandler2)
