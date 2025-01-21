import lodash from "lodash";

const holidays = [
{name: "Christmas", date: new Date("2025-11-25")},
{name: "canada day", date: new Date("2025-12-25")},
{name: "april fools", date: new Date("2025-12-25")},
]

let today = new Date ();

holidays.forEach(holidays => {
    let datedifference = holidays.date - today;

    let numDays = Math.cell(datedifference/(1000 * 60 *60 *24))
    console.log(`${holidays.name} is in ${numDays} days` );

});

console.log(lodash.sample(holidays));

console.log(
  lodash.findIndex(holidays, (holiday) => holiday.name === "Christmas")
);
console.log(
  lodash.findIndex(holidays, (holiday) => holiday.name === "April Fools")
);