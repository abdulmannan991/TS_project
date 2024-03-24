var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function car_info(manufacturer, model) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    additionalInfo.forEach(function (info) {
        for (var key in info) {
            if (info.hasOwnProperty(key)) {
                car[key] = info[key];
            }
        }
    });
    return car;
}
var myCar = car_info("Toyota", "Camry", { color: "blue" }, { year: 2022 });
var car = {
    manufacturer: "",
    model: ""
};
var info = {
    manufacturer: "SomeManufacturer",
    model: "SomeModel"
}; // Make sure 'info' is of type Car
var mergedCar = __assign(__assign({}, car), info);
console.log(mergedCar);
