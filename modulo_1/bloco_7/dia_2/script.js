// 1. CRIANDO UM OBJETO

const person = {
  // entradas = conjunto de chave e valor,
  name: "Cainan",
  lastName: "Coutinho",
  fullName: function() { // em algumas linguagens isso é chamado computed property
    return `${this.name} ${this.lastName}`;
  }
};

// Existem duas formas de acessarmos os valores de uma propriedade
// A primeira é por .
// A segunda é por []
console.log(`Olá, querido ${person.name}!`);
console.log(`Olá, querido ${person["lastName"]}!`);
console.log(`Olá, querido ${person.fullName()}!`);


// CRIAR NOVAS PROPRIEDADES DENTRO DE UM OBJETO
// A primeira é por .
// A segunda é por []

person.address = {
  city: "Itapecerica"
}

person.address["estado"] = "São Paulo";
console.log(person);

// Crie um objeto em que o index vai ser a chave desse objeto e o valor vai ser "XABLAU" para
// todas as entradas
const object = { };
for (let index = 0; index < 10; index += 1) {
  object[index] = "XABLAU";
}

console.table(object);

// {
// 0: "XABLAU" 
// 1: "XABLAU" 
// 2: "XABLAU" 
// 3: "XABLAU" 
// ...
// 9: "XABLAU" 
// }

person.age = 20;
person.wearGlasses = false;

// Conseguimos capturar todas as chaves
console.log("CAPTURANDO TODOS AS CHAVES DE UM OBJETO:")
console.table(Object.keys(person)); // retorna um array com as chaves

// Conseguimos capturar todos os valores
console.log("CAPTURANDO TODOS OS VALORES DE UM OBJETO:")
console.table(Object.values(person)); // retorna um array com os valores

// Conseguimos capturar todas as entradas
console.log("CAPTURANDO TODOS AS ENTRADAS DE UM OBJETO:")
const personEntries = Object.entries(person); // retorna um array com as entradas" [[chave, valor], [chave, valor], ...]

// Conseguimos copiar um valor para um objeto
const car = {
  brand: "BMW",
  model: "Serie 3"
}

Object.assign(person, car);

car.brand = "VW";

console.log(person);

const person1 = {
  name: "Luciano"
};

const person2 = {
  name: "Adriano"
};
const persons = [person1, person2];
let form = [];
for (index in persons) {
  form.push(persons[index]);
}

const createObject = (name, lastName, age) => {
  return 
}

console.log(createObject("Rogerio", "Souza"));
