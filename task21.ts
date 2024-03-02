let carinfo = {
    TeslaModels :{
        "Brand" : "Tesla",
        "Model" : 2022,
        "Color" : "Blue",
        "Electric" : true,
    },
    HondaCivic : {
        brand: "Honda",
        year: 2022,
        color: "Silver",
        electric: false
    }
}

// Example's of calling :)

console.log(carinfo);
console.log(carinfo.TeslaModels);
console.log(carinfo.HondaCivic["brand"]);
