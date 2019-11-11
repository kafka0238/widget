function firstNonRepeatingLetter(s) {
    let lower = s.toLowerCase();
    let firstPosOneChar = lower.split('').reduce( (accumulator, currentValue, currentIndex, array) => {
        if(lower.split(currentValue).length == 2)
            return accumulator ? accumulator : currentIndex;
        return accumulator;
    }, false);
    if(firstPosOneChar === false)
        return '';
    return s[firstPosOneChar];
}