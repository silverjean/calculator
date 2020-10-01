function insert(num) {
    document.calculator.textview.value = document.calculator.textview.value + num;
}

function equal() {
    var sinal = document.calculator.textview.value;
    if (sinal) {
        document.calculator.textview.value = eval(sinal);
    }
}

function clean() {
    document.calculator.textview.value = "";
}