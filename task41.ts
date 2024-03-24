function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

show_magicians(magicians);
