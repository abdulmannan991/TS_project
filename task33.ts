const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let ordinal;

    if (number === 1) {
        ordinal = "1st";
    } else if (number === 2) {
        ordinal = "2nd";
    } else if (number === 3) {
        ordinal = "3rd";
    } else {
        ordinal = number + "th";
    }

    console.log(ordinal);
}
