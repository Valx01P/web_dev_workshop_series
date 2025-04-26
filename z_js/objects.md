```js
const identify_conflicts = (venue1_schedule, venue2_schedule) => {
    let res = {}
    for (let vendor of Object.keys(venue1_schedule)) {
        if (venue1_schedule[vendor] === venue2_schedule[vendor]) res[vendor] = venue1_schedule[vendor]
    }
    return res
}

let venue1_schedule = {
    "Stromae": "9:00 PM",
    "Janelle Monáe": "8:00 PM",
    "HARDY": "7:00 PM",
    "Bruce Springsteen": "6:00 PM"
}

let venue2_schedule = {
    "Stromae": "9:00 PM",
    "Janelle Monáe": "10:30 PM",
    "HARDY": "7:00 PM",
    "Wizkid": "6:00 PM"
}

console.log(identify_conflicts(venue1_schedule, venue2_schedule))
```