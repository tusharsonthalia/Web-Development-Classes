/*
// function to validate a text form using regular expressions
function validate() {
    var employeeCode = document.getElementById("txt-1").value; // storing the employee code
    var regex = /IIS-/; // regular expression
    if (regex.test(employeeCode)) {
        document.getElementById("label-1").innerHTML = "Valid Name";
        document.getElementById("label-1").style.color = "green";
    }
    else {
        document.getElementById("label-1").innerHTML = "Invalid Name";
        document.getElementById("label-1").style.color = "red";
    }
}
*/
/*
var id = 0;
var seconds = 0;

function printmsg() {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor(seconds / 60) % 60;
    var second = seconds % 60;
    document.getElementById("p1").innerHTML = hours + ":" + minutes + ":" + second;
    seconds++;
}

function start() {
    // id = setTimeout(printmsg, 5000);
    id = setInterval(printmsg, 1000);
}

function stop() {
    // clearTimeout(id);
    clearInterval(id);
}
*/

function replaceString() {
    var regHTML = /HTML/i;
    var a = document.getElementById('p1').innerHTML;
    if (regHTML.test(a)) {
        a = a.replace(regHTML, "JavaScript");
        document.getElementById('p1').innerHTML = "a";
    }
}
