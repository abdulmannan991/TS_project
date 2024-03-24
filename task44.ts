function make_sandwich(...items: string[]): void {
    console.log("Sandwich with:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

make_sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
make_sandwich("Ham", "Cheese");
make_sandwich("Peanut Butter", "Jelly", "Banana");
