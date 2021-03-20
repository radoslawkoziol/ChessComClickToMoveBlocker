/*
 The idea is to disable pointer interactions with the board
 (with the exception of my pieces) when my piece is selected

 Known issues:
 - it won't work if your pieces are on top ("flipped" check
 that is used to determine "my" pieces is wrong in that case)
 */

const WHITE_PIECES = ["wp", "wn", "wb", "wr", "wq", "wk"];
const BLACK_PIECES = ["bp", "bn", "bb", "br", "bq", "bk"];
let isPieceSelected = false;

// Re-enable pointer events for my pieces only
// if enabled for all pieces click to move will
// still work when capturing opponent's piece
const adjustPiecesClickability = (chessBoard) => {
  const isBlack = chessBoard.classList.contains("flipped");

  const myPiecesSelector =
    "." + (isBlack ? BLACK_PIECES.join(",.") : WHITE_PIECES.join(",."));

  const opponentPiecesSelector =
    "." + (isBlack ? WHITE_PIECES.join(",.") : BLACK_PIECES.join(",."));

  Array.from(chessBoard.querySelectorAll(myPiecesSelector)).forEach(
    (piece) => (piece.style.pointerEvents = "all")
  );

  Array.from(chessBoard.querySelectorAll(opponentPiecesSelector)).forEach(
    (piece) => (piece.style.pointerEvents = "inherit")
  );
};

const chessBoardPointerDownHandler = (e, chessBoard) => {
  const chessBoard = document.getElementsByTagName("chess-board")[0];
  const isBlack = chessBoard.classList.contains("flipped");
  const myPieces = isBlack ? BLACK_PIECES : WHITE_PIECES;
  const isMyPiece =
    Array.from(e.target.classList).filter((className) =>
      myPieces.includes(className)
    ).length > 0;

  if (isMyPiece) {
    // do it here, because the board isn't initialized instantly
    // and because you can start a new game on the same board
    adjustPiecesClickability(chessBoard);

    if (!isPieceSelected) {
      chessBoard.style.pointerEvents = "none";
      e.stopPropagation();
    }

    isPieceSelected = true;
  }
};

const parentPointerDownHandler = (chessBoard) => {
  chessBoard.style.pointerEvents = "all";
  isPieceSelected = false;
};

const chessBoardCollection = document.getElementsByTagName("chess-board");
const chessBoardLive = document.getElementById("game-board");

if (chessBoardCollection.length > 0) {
  const chessBoard = chessBoardCollection[0];

  chessBoard.addEventListener("pointerdown", (e) => {
    chessBoardPointerDownHandler(e, chessBoard);
  });

  chessBoard.parentElement.addEventListener("pointerdown", () => {
    parentPointerDownHandler(chessBoard);
  });
} else if (chessBoardLive) {
  console.log("live");

  chessBoardLive.addEventListener("pointerdown", (e) => {
    chessBoardPointerDownHandler(e, chessBoardLive);
  });

  chessBoardLive.parentElement.addEventListener("pointerdown", () => {
    parentPointerDownHandler(chessBoardLive);
  });
}
