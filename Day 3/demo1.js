function averageScore() {
    var score1, score2, score3;
    score1 = parseFloat(prompt("Enter the first score"));
    score2 = parseFloat(prompt("Enter the second score"));
    score3 = parseFloat(prompt("Enter the third score"));
    return (score1 + score2 + score3) / 3
}

var mikeScore = averageScore();
var johnScore = averageScore();
var maryScore = averageScore();

switch(mikeScore, johnScore, maryScore) {
    case mikeScore > johnScore && mikeScore > maryScore:
        console.log("Mike's average score, ", mikeScore, "is the highest");
    case johnScore > mikeScore && johnScore > maryScore:
        console.log("John's average score,", johnScore, "is the highest");
    case maryScore > johnScore && maryScore > mikeScore:
        console.log("John's average score,", johnScore, "is the highest");
        // console.log("Mary's average score," maryScore, "is the highest");
    default:
        console.log("It's a draw!");
}
