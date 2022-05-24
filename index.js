let unitToConvert = 0;

function convert(unitToConvert) {
let feet = (unitToConvert * 3.2808).toFixed(3);
let meter = (unitToConvert / 3.2808).toFixed(3);
let gallon = (unitToConvert * 0.2641720524).toFixed(3);
let liter = (unitToConvert / 0.2641720524).toFixed(3);
let kilo = (unitToConvert / 2.20462).toFixed(3);
let pound = (unitToConvert * 2.20462).toFixed(3);
document.getElementById("length").textContent = unitToConvert + " meters = " + feet + " feet | " + unitToConvert + " feet = " + meter + " meters";
document.getElementById("volume").textContent = unitToConvert + " liters = " + gallon + " gallons | " + unitToConvert + " gallons = " + liter + " liters";
document.getElementById("mass").textContent = unitToConvert + " kilos = " + pound + "pounds | " + unitToConvert + " pounds = " + kilo + " kilos";
}
