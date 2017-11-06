module.exports = Kappa;
const fs = require('fs');

function Kappa(n, t) {
  if(["Kappa", "KappaPride", "KappaRoss", "KappaClaus", "KappaWealth"].indexOf(t)) {
    this.type = t;
  } else {
    console.error(`not a type : ${t} is not a type`);
  }
  this.name = n;
  this.age = 0;
  this.photo = "http://i3.kym-cdn.com/photos/images/newsfeed/000/925/494/218.png_large";
  this.types = ["Kappa", "KappaPride", "KappaRoss", "KappaClaus", "KappaWealth"];
  this.idCard = {
    "Name": this.name,
    "Type": this.type,
    "Photo": this.photo
  };
}

Kappa.prototype.setType = function (typeSelection) {
  this.type == typeSelection;
};

Kappa.prototype.getTypes = function (joint) {
  return this.types.join(joint);
};

Kappa.prototype.getType = function () {
  return this.type;
};

Kappa.prototype.exportDataToFile = function (file) {
  fs.writeFile(file, this, 'utf8', (err) => {
    if (err) throw err;
  })
};

Kappa.prototype.exportData = function (file) {
  return this;
};



function prepareExport() {
  let data = {
    "name":this.name,"age":this.age,"photo":this.photo,"type":this.type,"age":this.age
  }
  return data;
}
