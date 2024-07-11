let operator = '';
let selectedInput = 'input1';

function setOperator(op) {
    operator = op;
    document.querySelectorAll('.btn-operator').forEach(button => {
        button.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

function clearInputs() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('result').value = '';
    operator = '';
    document.querySelectorAll('.btn-operator').forEach(button => {
        button.classList.remove('selected');
    });
    document.getElementById('result').classList.remove('btn-danger');
}

function calculate() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    let result = '';

    if (isNaN(input1) || isNaN(input2)) {
        result = 'invalid input , select numbers only';
        document.getElementById('result').classList.add('btn-danger');
    } else {
        switch (operator) {
            case '+':
                result = input1 + input2;
                break;
            case '-':
                result = input1 - input2;
                break;
            case '*':
                result = input1 * input2;
                break;
            case '/':
                if (input2 === 0) {
                    result = 'error division by zero';
                    document.getElementById('result').classList.add('btn-danger');
                } else {
                    result = input1 / input2;
                }
                break;
            default:
                result = 'select an operator';
                break;
        }
    }

    document.getElementById('result').value = result;
}

function appendNumber(number) {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');

    if (selectedInput === 'input1') {
        input1.value += number;
    } else {
        input2.value += number;
    }
}

document.getElementById('input1').addEventListener('focus', () => {
    selectedInput = 'input1';
});

document.getElementById('input2').addEventListener('focus', () => {
    selectedInput = 'input2';
});
