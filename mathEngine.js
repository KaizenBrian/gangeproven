class MathEnginge {
    constructor() {
        this.currentMultiplication = {
        
        }
    }
    

    getNextMultiplication() {
        var firstNumber =this.getRandomIntInclusive(1, 10);
        var secondNumber = this.getRandomIntInclusive(1, 10);
        this.currentMultiplication = {
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            answer: firstNumber * secondNumber
        }
        return this.currentMultiplication;
    }

    getCurrentMultiplication() {
        return this.currentMultiplication;
    }
    
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
}

