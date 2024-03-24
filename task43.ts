function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}

const originalMagicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

const copiedMagicians: string[] = [...originalMagicians];

const greatMagicians = make_great(copiedMagicians);

console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
