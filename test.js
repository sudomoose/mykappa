const myKappa = require('./src/index.js');

var kappa = new myKappa.Kappa("little kappy", "Kappa");


console.log(kappa.getTypes(", "));
console.log(kappa.getType());
console.log(kappa.idCard);
console.log(kappa.exportData())
kappa.exportDataToFile('./data.json')
