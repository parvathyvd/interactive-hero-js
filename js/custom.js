

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


function changeResult(){

    var heading1 = document.getElementById('heading1').value;

    var main = document.getElementsByClassName('heading')[0];

    main.innerHTML = heading1;

    var heading2 = document.getElementById('heading2').value;

    var lead = document.getElementsByClassName('lead')[0];

    lead.innerHTML = heading2;

    var button = document.getElementsByClassName('button')[0];

    var buttonValue = document.getElementById('buttonValue').value;

    button.innerHTML = buttonValue;

    
}

