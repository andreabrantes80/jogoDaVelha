// let tabuleiro;
// let board;
// let aviso;
// let jogador;
// let linha;
// let coluna;

// function iniciar() {
//   tabuleiro = [];
//   board = document.getElementById("board");
//   aviso = document.getElementById("aviso");
//   jogador = 1;

//   for (let i = 0; i < 3; i++) {
//     tabuleiro[i] = [];
//     for (let j = 0; j < 3; j++) {
//       tabuleiro[i][j] = 0;
//     }
//   }

//   console.table(tabuleiro);
//   exibir();
// }

// function exibir() {
//   let tabela = '<table cellpadding="10" border="1">';

//   for (let i = 0; i < 3; i++) {
//     tabela += "<tr>";
//     for (let j = 0; j < 3; j++) {
//       switch (tabuleiro[i][j]) {
//         case -1:
//           marcador = "X";
//           break;
//         case 1:
//           marcador = "O";
//           break;
//         default:
//           marcador = "_";
//       }
//       tabela += "<td>" + marcador + "</td>";
//     }

//     tabela += "</tr>";
//   }
//   tabela += "</table>";

//   board.innerHTML = tabela;
// }

// function jogar() {
//   aviso.innerHTML = "Vez do jogador: " + numeroJogador();

//   linha = document.getElementById("linha").value - 1;
//   coluna = document.getElementById("coluna").value - 1;

//   if (tabuleiro[linha][coluna] == 0) {
//     tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1;
//   } else {
//     aviso.innerHTML = "Posição já ocupada!";
//   }

//   console.table(tabuleiro);
//   jogador++;
//   exibir();
//   checar();
// }

// function checar() {
//     //Linha
//   for (let i = 0; i < 3; i++) {
//     let soma = 0;
//     soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];
//     if (soma == 3 || soma == -3) {
//       aviso.innerHTML = "Jogador " + numeroJogador() + " ganhou!";
//     }
//     }
//     //colunas
//   for (let i = 0; i < 3; i++) {
//     let soma = 0;
//     soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];
//     if (soma == 3 || soma == -3) {
//       aviso.innerHTML = "Jogador " + numeroJogador() + " ganhou!";
//     }
//     }
//     //Diagonal

//     soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
//     if (soma == 3 || soma == -3) {
//       aviso.innerHTML = "Jogador " + numeroJogador() + " ganhou!";
//     }

// }

// function numeroJogador() {
//   return (jogador % 2) + 1;
// }

let tabuleiro;
let board;
let aviso;
let jogador;
let linha;
let coluna;

function iniciar() {
  tabuleiro = [];
  board = document.getElementById("board");
  aviso = document.getElementById("aviso");
  jogador = 1;

  for (let i = 0; i < 3; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < 3; j++) {
      tabuleiro[i][j] = 0;
    }
  }

  console.table(tabuleiro);
  exibir();
}

function exibir() {
  let tabela = '<table cellpadding="10" border="1">';

  for (let i = 0; i < 3; i++) {
    tabela += "<tr>";
    for (let j = 0; j < 3; j++) {
      let marcador;
      switch (tabuleiro[i][j]) {
        case -1:
          marcador = "X";
          break;
        case 1:
          marcador = "O";
          break;
        default:
          marcador = "_";
      }
      tabela += `<td onclick="marcarCelula(${i}, ${j})">${marcador}</td>`;
    }
    tabela += "</tr>";
  }
  tabela += "</table>";

  board.innerHTML = tabela;
}

function marcarCelula(i, j) {
  if (tabuleiro[i][j] === 0) {
    tabuleiro[i][j] = numeroJogador() === 1 ? 1 : -1;
    jogador++;
    exibir();
    aviso.innerHTML = "Vez do jogador: " + numeroJogador();
    if (checar()) {
      aviso.innerHTML =
        "Jogador " + (numeroJogador() === 2 ? 1 : 2) + " ganhou!";
    }
  } else {
    aviso.innerHTML = "Posição já ocupada!";
  }
}

function jogar() {
  linha = document.getElementById("linha").value - 1;
  coluna = document.getElementById("coluna").value - 1;

  if (linha >= 0 && linha < 3 && coluna >= 0 && coluna < 3) {
    marcarCelula(linha, coluna);
  } else {
    aviso.innerHTML = "Por favor, insira valores válidos!";
  }
}

function checar() {
  // Linha
  for (let i = 0; i < 3; i++) {
    let soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];
    if (soma === 3 || soma === -3) {
      return true;
    }
  }
  // Colunas
  for (let i = 0; i < 3; i++) {
    let soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];
    if (soma === 3 || soma === -3) {
      return true;
    }
  }
  // Diagonal principal
  let somaDiagonalPrincipal =
    tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
  if (somaDiagonalPrincipal === 3 || somaDiagonalPrincipal === -3) {
    return true;
  }
  // Diagonal secundária
  let somaDiagonalSecundaria =
    tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];
  if (somaDiagonalSecundaria === 3 || somaDiagonalSecundaria === -3) {
    return true;
  }
  return false;
}

function numeroJogador() {
  return (jogador % 2) + 1;
}

function resetar() {
  iniciar();
  aviso.innerHTML = "Vez do Jogador: 1";
}

