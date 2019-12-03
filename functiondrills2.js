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

function daysInMonth(month, leapYear = false) {
    switch(month) {
        case "September":
        case "April":
        case "June":
        case "November":
            console.log(`${month} has 30 days.`);
        break;

        case "January":
        case "July":
        case "August":
        case "October":
        case "March":
        case "December":
            console.log(`${month} has 31 days.`);
        break;

        case "February":
            if (leapYear === true) {
              console.log(`${month} has 29 days.`);
            }
            else {
              console.log(`${month} has 28 days.`);
            }
        break; 
    
    default: 
      console.log("Must provide a valid month"); 
    }
}

console.log(daysInMonth("September"));
console.log(daysInMonth("August"));
console.log(daysInMonth("February", true)); 
console.log(daysInMonth("February", false));
console.log(daysInMonth("Dog"));

function rockPaperScissors (num) {
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (num !== 1 && num !== 2 && num !== 3) {
        throw new Error("Must enter 1, 2, or 3");
    }
    if (randomNo > num) {
        return 'The computer wins!';
    }
    if (randomNo < num) {
        return 'Yay, you win!';
    }
    if (num === randomNo) {
        return 'tie';
    }
}

console.log(rockPaperScissors(1));
console.log(rockPaperScissors(3));
console.log(rockPaperScissors(2));
console.log(rockPaperScissors(23));
