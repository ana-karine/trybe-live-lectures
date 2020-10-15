const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Faça um algoritmo que imprima todos os numeros

// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// for (index in numbers) {
//   console.log(numbers[index]);
// }

numbers.forEach((number) => {
  console.log(number);
});


const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

// Faça um algoritmo que imprima todos os nomes da família Simpson

const variable = users.forEach((element) => {
  console.log(element.firstName);
});


const alphabet = ["a", "b", "c"];

alphabet.forEach((character) => {
  console.log(character);
});
