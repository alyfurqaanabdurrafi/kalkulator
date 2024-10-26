function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function calculateTrig(func) {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        switch (func) {
            case 'sin':
                display.value = Math.sin(value).toFixed(4);
                break;
            case 'cos':
                display.value = Math.cos(value).toFixed(4);
                break;
            case 'tan':
                display.value = Math.tan(value).toFixed(4);
                break;
        }
    } else {
        display.value = 'Error';
    }
}
