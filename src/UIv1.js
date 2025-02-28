import { UI_BUILDER } from "./Ui.js";

export const UIv1 = UI_BUILDER.init();

UIv1.initUI = () => {
    const base = document.getElementById(UIv1.uiElements.board);
    base.classList.add("board");
}

UIv1.drawBoard = (board) => {
    if (board !== undefined) {
        const base = document.getElementById(UIv1.uiElements.board);
        base.innerHTML = '';
        base.style.gridTemplateColumns = `repeat(${board.length}, 100px)`;
        base.style.gridTemplateRows = `repeat(${board.length}, 100px)`;
        let i = 0;
        board.forEach(element => element.forEach((element) => {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.setAttribute("id", i++);
            base.appendChild(tile);
            anime({
                targets: tile,
                opacity: [0, 1],
                duration: (Math.random() * 8000) + 1000,
                easing: 'easeInOutQuad'
            });
        }));
    }
}

UIv1.drawBushes = (board) => {
    if(board !== undefined){
        let row = 0;
        let column = 0;
        board.forEach((elements) =>{elements.forEach((element)=>{
                if(element === 5) tile.style.backgroundColor = "green";
            })
        });
    }
}

UIv1.drawPlayers = (player) => {

}

UIv1.drawBoard();

