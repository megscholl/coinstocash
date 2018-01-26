const piggyBank = {
    pennies: 45,
    dimes: 24,
    nickels: 98,
    quarters: 64
};

let coinConvert = {
    pennyMath: .01,
    dimeMath: .1,
    nickelMath: .05,
    quarterMath: .25
}

var dollarPenny = (coinConvert.pennyMath * piggyBank.pennies);
var dollarDime = (coinConvert.dimeMath * piggyBank.dimes);
var dollarNickel = (coinConvert.nickelMath * piggyBank.nickels);
var dollarQuarter = (coinConvert.quarterMath * piggyBank.quarters);


let dollarAmount = (dollarPenny + dollarDime + dollarNickel + dollarQuarter);


console.log("The total dollar amount of my piggy bank is $" + dollarAmount);