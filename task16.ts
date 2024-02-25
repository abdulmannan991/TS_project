

let List = [
    "M.Shayan",
    "Faraz",
    "Siraj",
  ];
  console.log("_______________________________");

  
  console.log("Old invitation");
  
  console.log("_______________________________");

  console.log("Dear " + List[0] + ", I would be happy if you could come to dinner!");
  console.log("Dear " + List[1] + ", I would be delighted if you could join me for dinner!");
  console.log("Dear " + List[2] + ", It would be a pleasure to have you at dinner!");

  console.log("_______________________________");
  
  console.log("Hi i found a bigger dinner table");

let FirstPerson = "Ashir";
let MiddlePerson = "Hamza";
let EndPerson = "Nouman";
let IntertionIndex1 = 0;
let IntertionIndex2 = 2;
let IntertionIndex3 = 5;

List.splice(IntertionIndex1, 0, FirstPerson);
List.splice(IntertionIndex2, 0, MiddlePerson);
List.splice(IntertionIndex3, 0, EndPerson);



console.log("_______________________________");
  console.log("New invitation");
console.log("_______________________________");

console.log("Dear " + List[0] + ",  I would be happy if you could come to dinner!");
console.log("Dear " + List[1] + ", I would be delighted if you could join me for dinner!");
console.log("Dear " + List[2] + ", It would be a pleasure to have you at dinner!");
console.log("Dear " + List[3] + ", Your presence at dinner would bring me great joy!");
console.log("Dear " + List[4] + ", Please join me for a wonderful dinner experience!");
console.log("Dear " + List[5] + ", It would be a pleasure to have you at dinner!");