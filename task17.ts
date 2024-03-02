

let List = [
    "Ashir",
    "M.Shayan",
    "Hamza",
    "Faraz",
    "Siraj",
    "Nouman"
  ];

// console.log("_______________________________");
//   console.log("New invitation");
// console.log("_______________________________");

// console.log("Dear " + List[0] + ",  I would be happy if you could come to dinner!");
// console.log("Dear " + List[1] + ", I would be delighted if you could join me for dinner!");
// console.log("Dear " + List[2] + ", It would be a pleasure to have you at dinner!");
// console.log("Dear " + List[3] + ", Your presence at dinner would bring me great joy!");
// console.log("Dear " + List[4] + ", Please join me for a wonderful dinner experience!");
// console.log("Dear " + List[5] + ", It would be a pleasure to have you at dinner!");

console.log("_________________________________");
console.log("I only can invite two people's");
console.log("_________________________________");
for (let i = 0; i <= 3; i++) {
    const element = List[i];
    
console.log("_________________________________");
    
    console.log("Sorry for the inconvenience the table is full");
    console.log("_________________________________");

    let removeperson1 = 0;
List.splice(removeperson1,1,); 

console.log(List);
}




console.log("You are still invited for the dinner");

console.log("_________________________________");

for (let i = 2; i <= 3; i++) {
    const element = List[i];
    let removeperson1 = 0;
    List.splice(removeperson1,1,); 
    
    console.log(List);
}
console.log("_________________________________");

console.log("the list is empty because there is no one remaining to invite :)");




