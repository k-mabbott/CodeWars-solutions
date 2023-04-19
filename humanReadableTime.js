// Write a function, which takes a non-negative integer 
// (seconds) as input and returns the time in a human-readable 
// format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.
// Date Time
// Mathematics
// Algorithms


function humanReadable (seconds) {
    let mins = 0
    let hours = 0
    let secs = 0
    mins += Math.floor((seconds / 60)%60)
    hours += Math.floor(seconds / 3600)
    secs += seconds % 60;
    hours = hours.toString().padStart(2, '0')
    mins = mins.toString().padStart(2, '0')
    secs = secs.toString().padStart(2, '0')
    return `${hours}:${mins}:${secs}`;
}