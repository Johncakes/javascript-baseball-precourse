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
        const computerInputList = computerInputNumbers.split('');
        const userInputList = userInputNumbers.split('');

        let strikes = 0;
        let balls = 0;

        userInputList.forEach((num, index) => {
            if (num === computerInputList[index]) {
                strikes++;
            }
            else if (computerInputList.includes(num)) {
                balls++;
            }
        });

        return { strikes, balls };
    }

    const resultOutput = (strikes, balls) => {
        let result = "";

        if (strikes === 3) {
            result = "win";
        } else if (strikes === 0 && balls === 0) {
            result = "낫싱";
        } else {
            result = `${balls}볼 ${strikes}스트라이크`;
        }
        return result;
    }

    const play = (computerInputNumbers, userInputNumbers) =>{
        const { strikes, balls } = countStrikesAndBalls(computerInputNumbers, userInputNumbers);
        return resultOutput(strikes, balls);
    }

    return {userInput, startGame};
}