import BaseBallGame from "./baseBallGame.js";
import View from "./view.js";

const baseBallGame = BaseBallGame();
const view = View({
    onSubmit: (userInput) => {
        try {
            const result = baseBallGame.userInput(userInput);
            if (result === "win"){
                view.gameWinView();
            }
            else{
                view.updateView(result);
            }
        } catch (error) {
            view.errorView();
        }
        
    },
    onRestart: () => {
        baseBallGame.startGame();
        view.gameStartView();
    }
});

view.gameStartView();
baseBallGame.startGame();
