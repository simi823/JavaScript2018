/**
 * Change the code below so that when I do this:
 * ```
 * getCarBrand();
 * ```
 * it will return "Nissan"
 */
var car = {
  brand: "Nissan",
  getBrand: function() {
    return this.brand;
  }
};
var getCarBrand = car.getBrand;

/**
 * Change the code below so that when I do this:
 * ```
 * motorcycle.getMotorcyleBrand();
 * ```
 * it will return "Harley Davidson"
 */
var motorcycle = {
  brand: "Harley Davidson",
  getMotorcyleBrand: function() {
    var closure = function() {
      return this.brand;
    };
    return closure();
  }
};

module.exports = {
  getCarBrand,
  motorcycle
};
