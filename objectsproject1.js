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
};
