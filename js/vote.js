var total_votes = parseInt(localStorage.getItem('bidden')) + parseInt(localStorage.getItem('trump'));


document.getElementById('trumpv').innerHTML = localStorage.getItem('trump');
document.getElementById('biddenv').innerHTML = (localStorage.getItem('bidden'));


document.getElementById('total_votesx').innerHtml = total_votes;
document.getElementById('trump-portion').colSpan = ((parseInt(localStorage.getItem('trump'))/total_votes)*2);
document.getElementById('biden-portion').colSpan = ((parseInt(localStorage.getItem('biden'))/total_votes)*2);
document.getElementById('biden-portion').colSpan = ((parseInt(localStorage.getItem('biden'))/total_votes)*2);

document.getElementById('trump%').innerHTML = ((parseInt(localStorage.getItem('trump'))/total_votes)*100);
document.getElementById('biden%').innerHTML = (100- ((parseInt(localStorage.getItem('trump'))/total_votes)*100) );


function  voteForTrump(){

if (localStorage.getItem('trump') === null) {

localStorage.setItem('trump', 0);  
}
else {
var temp_trump = parseInt(localStorage.getItem('trump'));
var temp_trump1 = temp_trump + 1;


localStorage.setItem('trump', temp_trump1);
document.getElementById('trumpv').innerHTML = temp_trump1;
document.getElementById('total_votesx').innerHtml = total_votes+1;
document.getElementById('trump%').innerHTML = ((parseInt(localStorage.getItem('trump'))/total_votes)*100);
document.getElementById('biden%').innerHTML = (100- ((parseInt(localStorage.getItem('trump'))/total_votes)*100) );

}

}


function  voteForBiden(){
if (localStorage.getItem('bidden') === null) {
localStorage.setItem('bidden', 0);  
}
else {
var temp_bidden = parseInt(localStorage.getItem('bidden'));
var temp_bidden1 = temp_bidden + 1;

localStorage.setItem('bidden', temp_bidden1);
document.getElementById('biddenv').innerHTML = temp_bidden1;
document.getElementById('total_votesx').innterHtml = total_votes+1;
document.getElementById('trump%').innerHTML = ((parseInt(localStorage.getItem('trump'))/total_votes)*100);
document.getElementById('biden%').innerHTML = (100- ((parseInt(localStorage.getItem('trump'))/total_votes)*100) );


}
}

