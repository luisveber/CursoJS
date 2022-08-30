
let nome = prompt('Digite seu Nome Completo');
document.body.innerHTML += 'Hello world';
document.body.innerHTML += `Seu Nome é: <strong> ${nome} </strong> <br />`;
document.body.innerHTML += `Seu Nome completo tem <strong> ${nome.length} </strong> <br />`;
document.body.innerHTML += `A Segunda letra do seu nome é: <strong> ${nome[1]} </strong> <br />`;
document.body.innerHTML += `Qual o primeiro Índice da letra e do seu nome? <strong> ${nome.indexOf('e')} </strong> <br />`;
document.body.innerHTML += `Qual o útimo Índice da letra e do seu nome? <strong> ${nome.lastIndexOf('e')} </strong> <br />`;
document.body.innerHTML += `As tres útimas letras do seu nome são ? <strong> ${nome.slice(-3)} </strong> <br />`;
document.body.innerHTML += `As palavras do seu nome são? <strong> ${nome.split(' ')} </strong> <br />`;
document.body.innerHTML += `Seu nome com letras Maíusculas <strong> ${nome.toUpperCase()} </strong> <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas <strong> ${nome.toLowerCase()} </strong> <br />`;
