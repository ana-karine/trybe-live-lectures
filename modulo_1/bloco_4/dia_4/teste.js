let estudante = {
  nome: "Joana",
  idade: 43,
  hardSkills: 6,
  softSkills: 5,
  carreiraSkills: 4
}

estudante.cidade = "BH";

estudante["esporte"] = "Corrida";
estudante["nome"] = "João";

estudante.apelidos = ["Apelido1", "Apelido2", "Apelido3"];
estudante.endereco = {
  rua: "Rua sei la o que",
  numero: 401
}

console.log(estudante);

for (let key in estudante) {
  console.log(key + " " + estudante[key]);
}

// Função trybe

function trybe(estudante) {
  let pessoaDesenvolvedora = estudante;

  pessoaDesenvolvedora.hardSkills = 10;
  pessoaDesenvolvedora.softSkills = 10;
  pessoaDesenvolvedora.carreiraSkills = 10;
  pessoaDesenvolvedora.tryber = true;

  return pessoaDesenvolvedora
}

let pessoaDesenvolvedora = trybe(estudante);

console.log(estudante);
console.log('----------------')
console.log(pessoaDesenvolvedora);

// Soma

function soma(a, b) {
  return a + b;
}

let valor1 = 5;
let valor2 = 10;

let valorSomado = soma(valor1, valor2);

// console.log(valorSomado);


// console.log(estudante);
