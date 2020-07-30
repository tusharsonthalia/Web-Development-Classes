document.write("Hello DOM");
document.getElementById('heading-1').textContent = "Welcome to the Document Object Model demo";
document.getElementById('heading-1').style.color = "red";
var pararaphs = document.getElementsByTagName('p');

for (var i = pararaphs.length - 1; i >= 0; i--) {
    pararaphs[i].style.color = "red";
}
