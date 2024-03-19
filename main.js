const display = document.getElementById("display");

display.value = JSON.parse(localStorage.getItem("lastResult")) || "Error 2";

function inputWriter(input) {
    display.value += input;
}

function inputClear() {
    display.value = "";
}

function inputCalculate() {
    try {
        const result = eval(display.value);
        
        display.value = result;

        localStorage.setItem("lastResult", JSON.stringify(result));
        
    } catch(error) {
        display.value = "Error";
    }
}
