console.log("" == "0"); // false, both strings, compared as-is
// (transitivity broken) -> coerced


// Best Practice 
// === fixes it
console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false 