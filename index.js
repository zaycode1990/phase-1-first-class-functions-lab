//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers  = drivers => (drivers.slice(0,2))
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))
const returnLastTwoDrivers = drivers => (drivers.slice(-2))


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

createFareMultiplier = (int) => {return (fare)=>{return int*fare};}

function fareDoubler(fare){return fare * 2}

function fareTripler(fare){return fare * 3}

function selectDifferentDrivers(arrayOfDrivers, selector) {
   console.log(arrayOfDrivers,selector) 
   //const arrayOfDrivers = (function(){return [returnFirstTwoDrivers,returnLastTwoDrivers]})
    return selector(arrayOfDrivers)
}

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'],returnFirstTwoDrivers))