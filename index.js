// console.log("done");

document.getElementById("submit").onclick = function(event) {
    var input = document.getElementById("input").value;
    //   console.log(input);
    document.getElementById("display").innerHTML += input;
    document.getElementById("input").value = "";
};

document.getElementById("addDigits").onclick = function(event) {
    var display = document.getElementById("display").innerHTML;
    //   console.log(display);
    var runningTotal = 0;
    for (var i = 0; i < display.length; i++) {
        //   console.log(display[i]);
        runningTotal += parseInt(display[i]);
    }
    // console.log(runningTotal);
    document.getElementById("display").innerHTML = runningTotal;
};