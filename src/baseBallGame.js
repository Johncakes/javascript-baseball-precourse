export default function BaseballGame(){
    let pitchNumber = "";
    const generateRandomNum= () => {
        const digits = new Set();

        while (digits.size< 3) {
            const randomDigit = MissionUtils.Random.pickNumberInRange(0, 9);
            digits.add(randomDigit);
        } 

        return [...digits].join(''); 
    }
    // Leaving this for future development possibilities 
    const startGame = () => {
        pitchNumber = generateRandomNum();
        console.log("ans : " + pitchNumber); // Developer log
    }

    const userInput = (userInput) => {
        if (checkValidInput(userInput)){
            return play(pitchNumber, userInput);
        }
        throw new Error("Invalid input");
    }

    const checkValidInput = (userInput) => {
    }

    const countStrikesAndBalls = (computerInputNumbers, userInputNumbers) => {
    }

    const resultOutput = (strikes, balls) => {
    }

    const play = (computerInputNumbers, userInputNumbers) =>{
        const { strikes, balls } = countStrikesAndBalls(computerInputNumbers, userInputNumbers);
        return resultOutput(strikes, balls);
    }

    return {userInput, startGame};
}