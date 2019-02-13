class Profesor {
  constructor(name, age) {
    this.name = name;
    this.edad = age;
  }
  soyElProfe() {
    console.log("Soy el profe " + this.name);
  }
  get edadMinima() {
    return 12;
  }
  get edad() {
    return this._age;
  }
  set edad(value) {
    if (value < this.edadMinima) {
      console.log("Demasiado joven para dar clase");
    } else {
      this._age = value;
    }
  }
}

const profesor1 = new Profesor("marcos", 8);
console.log(profesor1.edad);
console.log(profesor1.edadMinima);
profesor1.edad = 11;
