let op;
function myFunction() {
    let result;
    let inp = Number(document.getElementById("inputTxt").value);
    let outp = Number(document.getElementById("outputTxt").value);
    let selectedIndex = document.getElementById('unitDate').value;
        if (selectedIndex == "+"){
        result = inp + outp;
        }
        else if (selectedIndex == "-"){
        result = inp - outp;
        }
        else if (selectedIndex == "*"){
        result = inp * outp;
        }
        else if (selectedIndex == "/"){
        result = inp / outp;
        }
    document.getElementById("resultTxt")
        .innerHTML = (!isNaN(result) ? result : 'Error! Input number value');
}
