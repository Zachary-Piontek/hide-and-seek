
export function getRandomItem(array) {
    const random = Math.floor(Math.random() * array.length);
    const item = array[random];
    return item;
}

export function score(guess, spot) {
    // *** Implement score function ***
    // See test/tests.js for tests you need to 
    if (guess === spot) {
        return 1;
    }
    return 0;
    // make pass!
}
