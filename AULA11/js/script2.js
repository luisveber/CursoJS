alert('Mensagem');
let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');
num1 = parseFloat(num1);
num2 = parseFloat(num2);
let soma = num1 + num2;
alert(num1 + num2);
document.body.innerHTML += `A Soma de Numero 1 + Numero 2 é ${soma} <br /> `;