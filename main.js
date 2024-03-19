const display = document.getElementById("display");

display.value = JSON.parse(localStorage.getItem("lastResult")) || "Calculated Value";

function inputWriter(input) {
    display.value += input;
}

function inputClear() {
    display.value = "Cleared";
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
