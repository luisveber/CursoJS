function saudacao(nome) {
    //console.log(`Bom dia ${nome}`)
    return `Bom dia ${nome}`;
}
const variavel = saudacao('Luis');
console.log(variavel);

function soma(num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(soma(1, 2));
console.log(soma(3, 4));
console.log(soma(5, 6));
console.log(soma(7, 8));

num1 = 2;
num2 = 3;

console.log(soma(num1, num2));
console.log(soma())
console.log(soma('Luis', 12))


//ARROW FUNCTIONS
const raiz = (n) => n ** 0.5;

console.log(raiz(9));

// FUNCTIONS


let num01 = 2.49485838;
let num02 = 3.4556456;

function eNumero(num01, num02) {
    num01 = parseFloat(num01);
    num02 = parseFloat(num02);
    return num01 + num02;
}
num01 = num01.toFixed(2);
num02 = num02.toFixed(2);
console.log(eNumero(num01, num02));