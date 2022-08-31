// padrão que o javascript segue para as casas decimais -  IEEE 754-2008

let num1 = 10.583585358;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(num1.toString(2));// Converte o valor em binário
console.log(num1.toFixed(2)); // Mostra a quantidade de casas decimais definidas entre parenteses;
console.log(Number.isInteger(num1));// Verifica se o número é um número inteiro
let temp = num1 * 'Olá';
console.log(temp);
console.log(Number.isNaN(temp)); // Verifica se a variável não é um número e retora true se não, e false se sim;

let num4 = 0.7;
let num5 = 0.1;

num4 += num5;
num4 += num5;
num4 += num5;
//num4 += num5;

console.log(num4);
num4 = parseFloat(num4.toFixed(2));
console.log(num4);
console.log(Number.isInteger(num4));
