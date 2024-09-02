function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Avalia a expressão no display e define o resultado
        display.value = eval(display.value);
    } catch (error) {
        // Se houver um erro na avaliação, exibe um erro
        display.value = 'Error';
    }
}
