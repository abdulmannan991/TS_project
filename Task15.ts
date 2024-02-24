var List = [
  "M.Shayan",
  "Faraz",
  "Siraj",
];

console.log("Dear " + List[0] + ", I would be happy if you could come to dinner!");
console.log("Dear " + List[1] + ", I would be delighted if you could join me for dinner!");
console.log("Dear " + List[2] + ", It would be a pleasure to have you at dinner!");

console.log("\nchange in the guest list\n");

var oldPerson = "Faraz";
var newPerson = "Shahmir";
var indexOfOldPerson = List.indexOf(oldPerson);

if (indexOfOldPerson !== -1) {
  console.log(oldPerson + " can't make it to dinner."); 
  List[indexOfOldPerson] = newPerson;
} 

console.log("Dear " + List[0] + ", I would be happy if you could come to dinner!");
console.log("Dear " + List[1] + ", I would be delighted if you could join me for dinner!");
console.log("Dear " + List[2] + ", It would be a pleasure to have you at dinner!");
