// List of current users
var currentUsers = ['Mannan', 'Faraz', 'Rayan', 'Tayyyab', 'Humza'];
// List of new users
var newUsers = ['Nouman', 'Faraz', 'Haseeb', 'Aqib', 'mannan'];
// Convert currentUsers to lowercase for case-insensitive comparison
var currentUsersLower = currentUsers.map(function (user) { return user.toLowerCase(); });
// Loop through newUsers to check for availability
for (var i = 0; i < newUsers.length; i++) {
    var newUser = newUsers[i];
    var newUserLower = newUser.toLowerCase();
    if (currentUsersLower.indexOf(newUserLower) !== -1) {
        console.log("Sorry, the username '".concat(newUser, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
