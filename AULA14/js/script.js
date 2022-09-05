const alunos = ['Luis', 'Maria', 'Joao'];
console.log(alunos);
console.log(alunos[0]);
alunos[alunos.length] = 'Teste';
alunos[alunos.length] = 'Henrique';
alunos[alunos.length] = 'Veber';
console.log(alunos);

alunos.push('TestePush');// adiciona um item ao array no final do mesmo
console.log(alunos);
alunos.unshift('TesteUnshift');//adiciona um item ao array no começo do mesmo
console.log(alunos);
const removido = alunos.pop();//remove o útimo item do array


const removidoshift = alunos.shift();
console.log(alunos);
console.log(removido);
console.log(removidoshift);
console.log(alunos.slice(0, 6));
console.log(typeof alunos);
console.log(alunos instanceof Array);