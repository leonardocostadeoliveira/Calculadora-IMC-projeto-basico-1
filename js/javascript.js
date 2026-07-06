const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('info').classList.remove('hidden');

    if (imc < 18.5) {
        description = 'Cuidado você está abaixo do peso!'
    } else if (imc >= 18.5 && imc <= 25) {
        description = 'Você está na faixa peso ideal';
    } else if (imc > 25 && imc <= 30) {
        description = ' Cuidado você está com sobre peso';
    } else if (imc > 30 && imc <=35) {
        description = 'Ccuidado você está com obsidade Moderada';
    } else if (imc > 35 && imc <= 40) {
        description = 'Cuidado você está com obsidade severa';
    } else {
        description = 'Cuidado você está com obsidade Morbida';
    }

    value.textContent = imc.replace('.',',');
    document.getElementById('description').textContent =  description;
});