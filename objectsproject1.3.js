const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts () {
    return this._courses.desserts;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers - appetizers;
  },
  set mains(mainsIn) {
    this._courses.mains - mains
  },
  set desserts(dessertsIn) {
    this._courses.desserts - desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers, 
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    dish: {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish)
  },
  getRandomDishFromCourses (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Maath.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourses('appetizers')
    const main = this.getRandomDishFromCourses('mains')
    const dessert = this.getRandomDishFromCourses('desserts')
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`
  }
};