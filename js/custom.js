

var playerA = 1.50;
var playerB = 2.43;

var ageA = 32;
var ageB =24;

var scoreA = playerA + (5* ageA);
console.log(scoreA);
var scoreB = playerB + (5* ageB);
console.log(scoreB);

if(scoreA > scoreB)
{
    console.log('scoreA wins');
}
else if(scoreB > scoreA)
{
    console.log('scoreB wins');
}
else{
    console.log('They are equal');
}