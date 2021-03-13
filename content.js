const chessBoardHandler = (e) => {
  const chessBoard = document.getElementsByTagName('chess-board')[0]
  let isSquareHighlighted = chessBoard.querySelectorAll('.highlight').length !== 0;
  let isMoveHintVisible = chessBoard.querySelectorAll('.hint').length !== 0;

  if (isSquareHighlighted || isMoveHintVisible) {
    window.chessComSquareClicked = true;
    chessBoard.style.pointerEvents = 'none'
  }
}

const sectionHandler = () => {
  if (window.chessComSquareClicked) {
    window.chessComSquareClicked = false
  } else {
    const chessBoard = document.getElementsByTagName('chess-board')[0]
    chessBoard.style.pointerEvents = 'all'
  }
}

document.getElementsByTagName('chess-board')[0].addEventListener('click', chessBoardHandler)
document.getElementById('board-layout-main').addEventListener('click', sectionHandler)