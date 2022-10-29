let min = 1;
let max = 10;
let winNum = 3;
let guess = 5;
const btn=document.querySelector('#btn')
const stock = document.querySelector('.stock')
stock.textContent = `Enter any number between ${min} and ${max}`;
let end = document.querySelector('.endmsg');
//onst end=document.getElementById("endmsg");
//evenlistner
document.querySelector('#btn').addEventListener('click', playgame)
function playgame(e) {
    const input = document.querySelector('.input')
    const inputvalue = input.value;
document.querySelector('.game').addEventListener('mousedown', playagain)
function playagain(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    }
}

//validate
if(inputvalue < min || inputvalue > max){
Setmessage(`enter number between ${min} and ${max}`, 'red');

}   
else {
//winning
if(inputvalue==winNum){
    Setmessage(`${winNum} is correct`, 'green')
input.style.borderColor="green";
input.disabled=true;
btn.value='Play Again';
btn.className+='play-again';
}
//game over wrong
else {
guess--
    
    if(guess===0){
        input.disabled=true;
        Setmessage('You lost, play again', 'red');
        btn.value='Play Again';
        btn.className+='play-again';
    }

   else{
    //clear input
    
        Setmessage(`${inputvalue} is not correct, you have ${guess} guess left `, 'red')
       // input.value='';
   }
}
}

//message function
function Setmessage(msg, clr){
end.style.color= clr;
end.textContent= msg;
//console.log(end.textContent);

}
        e.preventdefault();
}
 