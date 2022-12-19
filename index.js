let priceOutput;
let timeitem = 1;

function updatePricing() {
    var selectElement = document.querySelector('#size');
    let output = selectElement.value;
    document.querySelector('#pricingData').textContent = output;

    if (output === "3in x 5in") {
        priceOutput = 1.00;
    } else if (output === '6in x 6in') {
        priceOutput = 3.00;
    } else if (output === '1ft x 1ft') {
        priceOutput = 5.00;
    } else if (output === '5ft x 1ft') {
        priceOutput = 26.00;
    } else if (output === '5ft x 2ft') {
        priceOutput = 51.50;
    } else if (output === '5ft x 3ft') {
        priceOutput = 77.00;
    } else if (output === '5ft x 4ft') {
        priceOutput = 101.00;
    } else if (output === '5ft x 5ft') {
        priceOutput = 125.00;
    } else if (output === '5ft x 6ft') {
        priceOutput = 149.00;
    } else if (output === '5ft x 7ft') {
        priceOutput = 173.50;
    } else if (output === '5ft x 8ft') {
        priceOutput = 196.50;
    } else if (output === '5ft x 9ft') {
        priceOutput = 220.50;
    } else if (output === '5ft x 10ft') {
        priceOutput = 242.00;
    } else if (output === '5ft x 12ft') {
        priceOutput = 287.00;
    } else if (output === '5ft x 15ft') {
        priceOutput = 356.00;
    } else if (output === '5ft x 20ft') {
        priceOutput = 471.50;
    } else if (output === '5ft x 25ft') {
        priceOutput = 586.00;
    } else if (output === '5ft x 30ft') {
        priceOutput = 690.00;
    } else if (output === '5ft x 35ft') {
        priceOutput = 799.00;
    } else if (output === '5ft x 40ft') {
        priceOutput = 903.00;
    } else if (output === '5ft x 45ft') {
        priceOutput = 1002.00;
    } else if (output === '5ft x 50ft') {
        priceOutput = 1102.50;
    } else if (output === '5ft x 55ft') {
        priceOutput = 1184.00;
    } else if (output === '5ft x 60ft') {
        priceOutput = 1260.00;
    } else if (output === '5ft x 65ft') {
        priceOutput = 1328.00;
    } else if (output === '5ft x 75ft') {
        priceOutput = 1426.00;
    } else {
        priceOutput = "please select option"
    }
    let cost = priceOutput * 1;

    document.getElementById("pricing").innerHTML = cost.toFixed(2);
}
updatePricing();

document.getElementById('size').addEventListener('change', function() {
    var item = document.getElementById("pricing");
    updatePricing(item, updatePricing());
});

console.log(typeof cost);
console.log(typeof pricing);
console.log(typeof output);
console.log(typeof timeitem);
console.log(typeof priceOutput);