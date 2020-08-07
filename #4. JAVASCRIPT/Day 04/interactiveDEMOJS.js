// function for button click event

function buttonClick() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var gender = document.getElementById('gender').value;

    if (username == "Tushar" && password == "Tushar") {
        document.getElementById('h1').innerHTML = "Hi " + username + ", Welcome to DOM Lecture";
        document.getElementById('h1').style.color = "red";
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
        document.getElementById('gender').value = "";
        console.log(gender);
    }
    else {
        document.getElementById('h1').innerHTML = "Hi, please try again.........";
        document.getElementById('h1').style.color = "red";
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    }

}
