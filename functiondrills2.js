function jediName (firstName, lastName) {
    return `${lastName.slice(0, 3)}${firstName.slice(0, 2)}`;
}

console.log(jediName("Bobby", "Labonte"));

function beyond(num) {
    if (num === Infinity) {
        console.log("And beyond");
    }
    else if (isFinite(num) && num > 0) {
        console.log("To infinity");
    }
    else if (isFinite(num) && num < 0) {
        console.log("To negative infinity");
    }
    else if (num === 0) {
        console.log("Staying home");
    }
}
console.log(beyond(0));
console.log(beyond(-5));
console.log(beyond(10));
console.log(beyond(Infinity));

function decode (word) {
    if (word[0] === "a") {
        return word[1];
    }
    if (word[0] === "b") {
        return word[2];
    }
    if (word[0] === "c") {
        return word[3];
    }
    if (word[0] === "d") {
        return word[4];
    }
    else {
        return " ";
    }
}

console.log(decode('craft'));
console.log(decode('block'));
console.log(decode('argon'));
console.log(decode('meter'));
console.log(decode('bells'));
console.log(decode('brown'));
console.log(decode('croon'));
console.log(decode('droop'));
