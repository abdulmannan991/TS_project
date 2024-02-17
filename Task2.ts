var person: string = "Abdul Mannan";


console.log("Original: " + person);

let lowercaseName: string = person.toLowerCase();
console.log("Lowercase: " + lowercaseName);

let uppercaseName: string = person.toUpperCase();
console.log("Uppercase: " + uppercaseName);


let titlecaseName: string = person.replace(/\b\w/g, c => c.toUpperCase());
console.log("Titlecase: " + titlecaseName);
