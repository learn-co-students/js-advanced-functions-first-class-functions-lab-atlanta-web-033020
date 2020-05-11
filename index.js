// Code your solution in this file
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function() {
  let newArray = drivers.slice(0,2)
  return newArray;
}

const returnLastTwoDrivers = function() {
  let newArray = drivers.slice(2)
  return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multi) {
  return function(num) {
    return num * multi;
  }
}
 
function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
}