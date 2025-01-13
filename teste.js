// function calculaProduto(a, b = 2, c = 1) {
//   return a * b * c;
// }

// const resulCalculo = calculaProduto(2, 4);
// console.log(`Resultado do calulo ${resulCalculo}`);

// const resulCalculo2 = calculaProduto(1, 2, 3);
// console.log(`Resultado do calulo ${resulCalculo2}`);

// const resulCalculo3 = calculaProduto(2, undefined, 5);
// console.log(`Resultado do calulo ${resulCalculo3}`);

// const estudanteReprovou = (notaFinal, faltas) => {
//   if (notaFinal < 7 && faltas > 4) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(`Você reprovou? ${estudanteReprovou(8, 6)}`);

// const exibeNome = (nome) => {
//   return nome;
// };
// console.log(exibeNome("Caroline"));

// const exibeNome2 = (nome) => nome; //Quando se tem apenas uma linha de codigo, pode fazer de forma reduzida como está ai!!

// Função de calculadora simples

// function saudacao(nome) {
//     return nome
// }
// console.log( `Olá ${saudacao('Maya')}, tudo bem?`);

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Qual é o seu nome? ', (nome) => {
//     rl.question('Qual é a sua idade? ', (idade) => {
//         if (idade >= 18 ) {
//             console.log(`Olá ${nome}, tudo bem? vi aqui você tem ${{idade}}, ja é maior de idade né?!.`)
//         } else {
//             console.log(`${nome}, você é menor de idade.`);
//         }
//         rl.close();
//     });
// });

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Dig ', (palavra) => {
//     const normalizado = palavra.toLowerCase().replace(/[\W_]/g, '');
//     const ehPalindromo = normalizado === normalizado.split('').reverse().join('');

//     console.log(ehPalindromo);

//     });

// function numeros(n1, n2, n3) {
//   let maior;
//   if (n1 >= n2 && n1 >= n3) {
//     maior = n1;
//   } else if (n2 >= n1 && n2 >= n3) {
//     maior = n2;
//   } else {
//     maior = n3;
//   }
//   return maior;
// }
// const numeroMaior = numeros(48, 18, 38);
// console.log(`O número maior é ${numeroMaior}`);

function calculePotencia() {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Digite o número da base: ", (base) => {
    rl.question("Agora digite a potência: ", (expoente) => {
      const baseNumero = parseFloat(base);
      const expoenteNumero = parseFloat(expoente);

      const result = Math.pow(baseNumero, expoenteNumero);

      console.log(
        `O resultado de ${baseNumero} elevado a ${expoenteNumero} é ${result}`
      );

      rl.close;
    });
  });
}

calculePotencia();
