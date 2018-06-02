


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

    var heroImage = document.getElementsByClassName('heroImage')[0];

   
   
    
}

function changePic1()
{

    var img1 = document.getElementsByClassName('img1')[0];

    var img1Src = img1.src;

    var heroImage = document.getElementsByClassName('heroImage')[0];

    heroImage.src = img1Src;
}
function changePic2()
{
    var img2 = document.getElementsByClassName('img2')[0];

    var img2Src = img2.src;

    var heroImage = document.getElementsByClassName('heroImage')[0];

    heroImage.src = img2Src;


}

