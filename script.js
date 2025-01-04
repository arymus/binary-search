const originalPrimeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const selection = primeNumbers[Math.floor(Math.random() * primeNumbers.length)]; // Randomizes a number in the primeNumbers array
console.log("Searching for: " + selection + "..");
console.log(primeNumbers);

function binarySearch() {
    const midPoint = primeNumbers[Math.floor(primeNumbers.length / 2)]; // Stores the item in the middle of the index

    if (selection >= midPoint) {
        primeNumbers.splice(0, Math.floor(primeNumbers.length) / 2); // Cuts out half of the array starting at the index 0, cuts out the first half of the array
        console.log(primeNumbers);
        return primeNumbers;
    } else if (selection <= midPoint) {
        primeNumbers.splice(primeNumbers.indexOf(midPoint), Math.floor(primeNumbers.length) / 2); // Cuts out half of the array starting at the half index, cuts out the second half of the array
        console.log(primeNumbers);
        return primeNumbers;
    }
}

while (primeNumbers.length !== 1) {
    binarySearch(); // Splits the array again and again until there is only one item left, the selected number
}

if (primeNumbers.length == 1) {
    console.log("Number found! Index: " + originalPrimeNumbers.indexOf(selection)); // Outputs text if the number is found
}