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

const ninja1 = new Ninja("Gustavo");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
