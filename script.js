function calcularIMC() {
    // entrada
    var nome = document.getElementById('nome').value;
    var altura = parseFloat(document.getElementById('altura').value) / 100; 
    var peso = parseFloat(document.getElementById('peso').value);

    
    if (nome && altura && peso) {
        //IMC
        var imc = peso / (altura * altura);

        //classificação
        var classificacao = '';
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }

        //resultados
        document.getElementById('imc').textContent = nome + ', seu IMC é: ' + imc.toFixed(2);
        document.getElementById('classificacao').textContent = 'Classificação: ' + classificacao;
        document.getElementById('resultado').style.display = 'block';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}
