const calc = document.getElementById('calcular');
const limp = document.getElementById('limpar');


calc.addEventListener('click', (e) => {
    e.preventDefault()

    let input_Peso = parseFloat(document.getElementById('peso').value);
    let input_Altura = (document.getElementById('altura').value);
    let descript = document.getElementById('detalhe');
    const imc = (input_Peso / (input_Altura * input_Altura)).toFixed(2);
    let result = document.getElementById('value');
    result.textContent = imc.replace('.', ',');
    
    if (!input_Peso || !input_Altura) {
        result.textContent = '[ERRO]';
        descript.textContent = 'Dados não informados';
    } else if (imc < 18.5) {
        document.getElementById('value').classList.add('grave');
        document.getElementById('detalhe').classList.add('grave');
        descript.textContent = 'Você está abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('value').classList.add('ideal');
        document.getElementById('detalhe').classList.add('ideal');
        descript.textContent = 'Você está com o peso ideal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        document.getElementById('value').classList.add('medio');
        document.getElementById('detalhe').classList.add('medio');
        descript.textContent = 'Você está com sobrepeso';
    } else if (imc >= 30.0 && imc < 39.9) {
        document.getElementById('value').classList.add('grave');
        document.getElementById('detalhe').classList.add('grave');
        descript.textContent = 'Você está com obesidade';
    } else {
        rdocument.getElementById('value').classList.add('grave');
        document.getElementById('detalhe').classList.add('grave');
        descript.textContent = 'Você está com obesidade grave';
    }

    
    document.getElementById('infor').classList.remove('hidden');



    limp.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        document.getElementById('infor').classList.add('hidden');
    });

})

