// Ter um array com os números da mega sena sorteados de forma aleatória
function getRandomNumberBetween1AndX(maxValue) {
  return Math.ceil(Math.random() * maxValue);
}

function generateMegaSenaNumbers() {
  let megaSenaNumbers = [];
  for (let i = 0; i < 6; i += 1) {
    megaSenaNumbers.push(getRandomNumberBetween1AndX(60));
  }
  return megaSenaNumbers;
}

let megaSenaNumbers = generateMegaSenaNumbers();

let turma7Play = [7, 16, 28, 31, 37, 55];
let turma72Play = [7, 16, 28, 31, 38, 55];
let turma73Play = [7, 17, 28, 31, 37, 55];

let plays = [turma7Play, turma72Play, turma73Play];

function getPlayHits(msNumbers, play) {
  let numberOfHits = 0;

  for (let i = 0; i < play.length; i += 1) {
    let playedNumber = play[i];
    for (let j = 0; j < msNumbers.length; j += 1) {
      let megaSenaNumber = msNumbers[j];
      if(playedNumber === megaSenaNumber) {
        numberOfHits += 1;
      }
    }
  }

  return numberOfHits;
}

// Testa os 3 jogos
for(let indice = 0; indice < plays.length; indice += 1) {
  let currentPlay = plays[indice];
  
  let numberOfHits = getPlayHits(megaSenaNumbers, currentPlay);

  console.log(`Números sorteados: ${megaSenaNumbers}`);
  console.log(`Nossas tentativas: ${currentPlay}`);
  console.log(`Total de acertos: ${numberOfHits}`);
}


