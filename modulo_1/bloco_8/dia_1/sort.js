const characters = ["D", "C", "B", "A"];

console.log("Antes de ordenar:")
console.log(characters);

characters.sort();

console.log("Depois de ordenar:")
console.log(characters);

console.log("-----------")

const scores = [1, 10, 2, 21];
console.log("Antes de ordenar:");
console.log(scores);

scores.sort((value1, value2) => {
  // Se o value1 é maior que o value2, retorne um número positivo
  // Se o value2 é maior que o value1, retorne um número negativo
  // Se o value1 for igual ao value2, retorne 0
  return value1 - value2;
});

console.log("Depois de ordenar:")
console.log(scores);
