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
        result.classList.add('baixo-alto');
        descript.classList.add('baixo-alto');
        descript.textContent = 'Você está abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        result.classList.add('ideal');
        descript.textContent = 'Você está com o peso ideal';
        descript.classList.add('ideal');
    } else if (imc >= 25.0 && imc <= 29.9) {
        result.classList.add('medio');
        descript.classList.add('medio');
        descript.textContent = 'Você está com sobrepeso';
    } else if (imc >= 30.0 && imc < 39.9) {
        result.classList.add('baixo-alto');
        descript.classList.add('baixo-alto');
        descript.textContent = 'Você está com obesidade';
    } else {
        result.classList.add('baixo-alto');
        descript.classList.add('baixo-alto');
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

