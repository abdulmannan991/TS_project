var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Paris", "Germany", "Skardu", "Hunza", "Kashmir"];
console.log("Original Order :", places);
console.log("Alphabetic order :", __spreadArray([], places, true).sort());
console.log("Unchanged order :", places);
console.log("Reverse order :", __spreadArray([], places, true).reverse());
console.log("Unchanged order :", places);
console.log("Sort Alphabetic order :", __spreadArray([], places, true).sort());
console.log("Sort Alphabetic reverse order :", __spreadArray([], places, true).reverse());
