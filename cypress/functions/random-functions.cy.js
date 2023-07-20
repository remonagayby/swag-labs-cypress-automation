class Random {

    // generate a random number between 0 and max number - 1
    randomNumber(number) {
        const random = Math.floor(Math.random() * number);
        return random;
    }
   
}

export default Random