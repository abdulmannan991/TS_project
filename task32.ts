
const currentUsers: string[] = ['Mannan', 'Faraz', 'Rayan', 'Tayyyab', 'Humza'];


const newUsers: string[] = ['Nouman', 'Faraz', 'Haseeb', 'Aqib', 'mannan'];


const currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

for (let i = 0; i < newUsers.length; i++) {
    const newUser = newUsers[i];
    const newUserLower = newUser.toLowerCase();
    if (currentUsersLower.indexOf(newUserLower) !== -1) {
        console.log(`Sorry, the username '${newUser}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}
