var Greetings = ["Mannan", "Admin", "Shayan", "Faraz", "Siraj"];
for (var i = 0; i < Greetings.length; i++) {
    var element = Greetings[i];
    if (element == "Admin") {
        console.log(" Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello!", element + ":-thank you for logging in again.");
    }
}
