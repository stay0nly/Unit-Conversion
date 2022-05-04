let result = document.getElementById('result');
let number = 24;
let length = document.getElementById('length');
let volume = document.getElementById('volume');
let mass = document.getElementById('mass');

function calc() {
    let feet = number * 3.281;
    let gallons = number * 3.785;
    let pounds = number * 2.205;
    result.textContent = number;
    length.textContent = number + " meters = " + feet.toFixed(2) + " feet | " + feet.toFixed(2) + " feet = " + number + " meters"
    volume.textContent = number + " liters = " + gallons.toFixed(2) + " gallons | " + gallons.toFixed(2) + " gallons = " + number + " liters"
    mass.textContent = number + " kilos = " + pounds.toFixed(2) + " pounds | " + pounds.toFixed(2) + " pounds = " + number + " kilos"
}

calc();