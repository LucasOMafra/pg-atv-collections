//chamando a biblioteca
import readlineSync from "readline-sync";

// Inicializa o Set com 10 números inteiros
const numeros: Set<number> = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

// Mostra todos os elementos do Set
console.log("List:");
for (const n of numeros) {
    console.log(n);
}

// Solicita ao usuário um número para busca
const buscar = readlineSync.questionInt("\nDigite o número que você deseja encontrar: ");

// Verifica se o número está presente no Set
if (numeros.has(buscar)) {
    console.log(`\nO número ${buscar} foi encontrado!`);
} else {
    console.log(`\nO número ${buscar} não foi encontrado!`);
}
