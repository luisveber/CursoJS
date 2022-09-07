const pessoa = {
    nome: 'Luis',
    sobrenome: 'Veber',
    idade: 35
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// FUNÇÃO COM OBJETOS

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        fala() {
            console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
            console.log(`A minha idade atual é ${this.idade}`);
        },
        incrementaIdade() {
            this.idade++;
        }
    };
}

const pessoa1 = criaPessoa('Luis', 'Veber', 36);
const pessoa2 = criaPessoa('Miguel', 'Henrique', 6);
const pessoa3 = criaPessoa('Guilherme', 'Vidal', 13);
const pessoa4 = criaPessoa('Matheus', 'Commandulli', 18);
const pessoa5 = criaPessoa('Suziane', 'Pinto', 41);


console.log(pessoa1.nome, pessoa1.sobrenome);
pessoa1.fala();
pessoa2.fala();
pessoa3.fala();
pessoa4.fala();
pessoa5.fala();
pessoa5.incrementaIdade();
pessoa5.fala();
