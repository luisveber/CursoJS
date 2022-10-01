const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const NivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${NivelImc}).`
    setResultado(msg, true);

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'SobrePeso', 'Obesidado Grau I', 'Obesidade Grau II', 'Obesidade Grau III'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 34.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function criaP() {
    const p = document.createElement('p');
    return p;
}
function setResultado(msg, IsValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if(IsValid) {
        p.classList.add('p-resultado');
    } else {
        p.classList.add('p-resultado-bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}