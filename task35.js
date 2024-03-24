var ints = [5, 10, 15];
console.log("List of integers:");
for (var _i = 0, ints_1 = ints; _i < ints_1.length; _i++) {
    var num = ints_1[_i];
    console.log(num);
}
console.log("\nStatements about each integer:");
for (var _a = 0, ints_2 = ints; _a < ints_2.length; _a++) {
    var num = ints_2[_a];
    console.log("The number ".concat(num, " is a multiple of 5."));
}
console.log("\nAll of these integers are multiples of 5!");
