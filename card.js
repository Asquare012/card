// Card Name
let display = document.querySelector("#butt");
let digit = document.querySelector("#fullName");

function card() {
    display.innerHTML = digit.value;
    if (digit.value.length == 0) {
        display.innerHTML = `JANE APPLESEED`;
    }
}

// Card Number
let display2 = document.querySelector("#mid");
let digit2 = document.querySelector("#num");

function cardTwo() {
    display2.innerHTML = digit2.value;
    if (digit2.value.length == 0) {
        display2.innerHTML = `0000 0000 0000 0000`;
    }
}
