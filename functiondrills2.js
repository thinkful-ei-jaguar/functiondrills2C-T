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