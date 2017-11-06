module.exports = Kappa;

function Kappa(n) {
  this.name = n;
  this.age = 0;
  this.type = 'default';
  this.timeTypeSet = 0;
  this.picture = "http://i3.kym-cdn.com/photos/images/newsfeed/000/925/494/218.png_large";
  this.types = ["Kappa", "KappaPride", "KappaRoss", "KappaClaus", "KappaWealth"];
  this.maxAvailableType = 0;
}

Kappa.prototype.setType = function (type) {

};
