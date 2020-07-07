function getHistory (){
    let history = document.querySelector('.history');
    return new String(history.innerText).trim();
}
//console.log(getHistory());

function setHistory(history){
    let historyField = document.querySelector('.history');
    historyField.innerText = new String(history);
}

//setHistory("20*20");

function getScreen(){
    let screen = document.querySelector('#screen-text');
    if (screen) {
        return new String(screen.innerText).trim();
    }
    return new String('');
}

//console.log(getScreen());

function setScreen(screenVal){
    let screenField = document.querySelector('#screen-text');
    screenField.innerText = new String(screenVal);
}
//setScreen(400);

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click',function () {
    setScreen('');
    setHistory('');
});

const changeSignBtn = document.querySelector('#change-sign');
changeSignBtn.addEventListener('click', function () {
    let screenVal = getScreen();
    if (screenVal) {
        //console.log(screenVal);
        let value = Number(screenVal);
        //console.log(value);
        value = -value;
        setScreen(value)
    }
});

const percentBtn = document.querySelector('#percent');
percentBtn.addEventListener('click', function () {
    let screenVal = getScreen();
    if (screenVal) {
        //console.log(screenVal);
        let value = Number(screenVal);
        value = value / 100;
        if (!Number.isInteger(value)) {
            setScreen(value.toFixed(5))
        }else {
            setScreen(value);
        }
    }
});

const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', function() {
    let screenVal = getScreen();
    if (screenVal) {
        setScreen(screenVal.substring(0, screenVal.length-1));
    }
});

const numbers = document.querySelectorAll('.number');
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        let screenVal = getScreen();
        //console.log(numbers[i].innerText);
        setScreen(screenVal + numbers[i].innerText);
    });
}

const dotBtn = document.querySelector('#dot');
dotBtn.addEventListener('click', function () {
    let screenVal = getScreen();
    if (screenVal) {
        console.log(screenVal.indexOf('.'));
        if (screenVal.indexOf('.') == -1) {
            console.log(screenVal + dotBtn.innerText.trim());
            setScreen(screenVal + dotBtn.innerText.trim());
        }
    }
});

const operators = document.querySelectorAll('.operator');
let operatorRegEx = /\u002B|\u2212|\u00D7|\u00F7/;
let operandRegEx = /\d+$/;
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        let screenVal = getScreen();
        console.log(screenVal);
        if (screenVal) {
            console.log(operatorRegEx.test(screenVal));
            console.log(operandRegEx.test(screenVal));
            if (operatorRegEx.test(screenVal) && !operandRegEx.test(screenVal)) {
                setScreen(screenVal.substring(0,screenVal.length-1)+ operators[i].innerText.trim());
            } else {
                setScreen(screenVal + operators[i].innerText.trim());
            }
        }
    });
}

const equals = document.querySelector('#equals');
equals.addEventListener('click', function () {
    let screenVal = getScreen();
    if (screenVal) {
        //animate();
        setHistory(screenVal);
        let val = screenVal;
        val = val.replace(/\u002B/g, '+');
        val = val.replace(/\u2212/g, '-');
        val = val.replace(/\u00F7/g , '/');
        val = val.replace(/\u00D7/g, '*');
        console.log(val);
        let result = eval(val);
        if (Number.isFinite(result)) {
            setScreen(result);
        } else {
            setScreen(0);
        }
        //animate();
    }
});

/*function animate() {
    let textSpan = document.querySelector('#screen-text');
    textSpan.classList.toggle('animate');
}*/
