//chamando a biblioteca
import readlineSync from "readline-sync";;

// Array com 10 números
const numeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("\nNúmeros cadastrados:");
for (let numero of numeros) {
    console.log(numero);
}

// Entrada do usuário
let buscar = readlineSync.questionInt("\nDigite o número que você deseja encontrar: ");

// Verifica se o número existe
let posicao: number = numeros.indexOf(buscar);

if (posicao !== -1) {
    console.log(`\nO número ${buscar} está localizado na posição: ${posicao}`);
} else {
    console.log(`\nO número ${buscar} não foi encontrado!`);
}
