// Code your solution in this file!
function returnFirstTwoDrivers(array) {
    let firstArray = [array[0], array[1]];
    return firstArray;

}

function returnLastTwoDrivers(array) {
    let lastArray = [array[2], array[3]];
    return lastArray;
}


function createFareMultiplier(fareValue) {
    return function multiplier(fareValue) {
        return fareValue * fareValue;
    }
    return multiplier;
}

function fareDoubler(fareValue) {
    return fareValue * 2;
}

function fareTripler(fareValue) {
    return fareValue * 3;
}

function selectDifferentDrivers(arrayOfDrivers, fn) {

    if (fn(arrayOfDrivers) == [arrayOfDrivers[0], arrayOfDrivers[1]])
        return fn(arrayOfDrivers);
    else
        return fn(arrayOfDrivers);
}
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
returnFirstTwoDrivers(drivers);
returnLastTwoDrivers(drivers);
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
createFareMultiplier(5);
fareDoubler(10);
fareTripler(12);
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
