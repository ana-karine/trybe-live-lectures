// Guardar a posição da Rainha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

// Guarda a posição da Peça
let posicaoPecaLinha = 7;
let posicaoPecaColuna = 1;

let ataqueBemSucedido = false;

if (posicaoRainhaLinha === posicaoPecaLinha || posicaoRainhaColuna === posicaoPecaColuna) {
  ataqueBemSucedido = true;
}

// Diagonal superior direita
// 4 x 4
for (let i = 1; i < 8; i += 1) {
  let linhaRainha = posicaoRainhaLinha + i;
  let colunaRainha = posicaoRainhaColuna + i;

  if (linhaRainha > 8 || colunaRainha > 8) {
    break;
  }

  if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna) {
    ataqueBemSucedido = true;
  }
}

// Diagonal superior esquerda
// 4 x 4
for (let i = 1; i < 8; i += 1) {
  let linhaRainha = posicaoRainhaLinha + i;
  let colunaRainha = posicaoRainhaColuna - i;

  if (linhaRainha > 8 || colunaRainha < 1) {
    break;
  }

  if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna) {
    ataqueBemSucedido = true;
  }
}

// Diagonal inferior esquerda
// 4 x 4
for (let i = 1; i < 8; i += 1) {
  let linhaRainha = posicaoRainhaLinha - i;
  let colunaRainha = posicaoRainhaColuna - i;

  if (linhaRainha < 1 || colunaRainha < 1) {
    break;
  }

  if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna) {
    ataqueBemSucedido = true;
  }
}

// Diagonal inferior direita
// 4 x 4
for (let i = 1; i < 8; i += 1) {
  let linhaRainha = posicaoRainhaLinha - i;
  let colunaRainha = posicaoRainhaColuna + i;

  if (linhaRainha < 1 || colunaRainha > 8) {
    break;
  }

  if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna) {
    ataqueBemSucedido = true;
  }
}

console.log(ataqueBemSucedido);
