interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; 
}

function car_info(manufacturer: string, model: string, ...additionalInfo: { [key: string]: any }[]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model,
    };
    additionalInfo.forEach(info => {
        for (const key in info) {
            if (info.hasOwnProperty(key)) {
                car[key] = info[key];
            }
        }
    });
    return car;
}

const myCar: Car = car_info("Toyota", "Camry", {color: "blue"}, {year: 2022});

const car: Car = {
    manufacturer: "",
    model: ""
};
const info: Car = {
    manufacturer: "SomeManufacturer",
    model: "SomeModel"
}; 

const mergedCar = { ...car, ...info };

console.log(mergedCar);
