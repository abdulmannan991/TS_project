var person = "Abdul Mannan";
console.log("Original: " + person);
        
var lowercaseName = person.toLowerCase();
console.log("Lowercase: " + lowercaseName);

var uppercaseName = person.toUpperCase();
console.log("Uppercase: " + uppercaseName);

var titlecaseName = person.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
console.log("Titlecase: " + titlecaseName);
