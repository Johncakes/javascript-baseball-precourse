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
}