class Ninja {
  constructor(nombre) {
    this.nombre = nombre;
    this.salud = 100;
    this.velocidad = 3;
    this.fuerza = 3;
  }

  sayName() {
    console.log(`Mi nombre es ${this.nombre}`);
  }

  showStats() {
    console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
  }

  drinkSake() {
    this.salud += 10;
    console.log(`${this.nombre} ha tomado mate y ha ganado 10 de salud para continuar con el bootcamp. Nueva salud: ${this.salud}`);
  }
}

class Sensei extends Ninja {
  constructor(nombre) {
    super(nombre);
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;
  }

  speakWisdom() {
    super.drinkSake();
    console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
  }
}

// Ejemplo de uso
const ninja1 = new Ninja("Gustavo");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
