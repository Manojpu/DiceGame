let x = Math.floor((Math.random() * 6) + 1);
let y = Math.floor((Math.random() * 6) + 1);

console.log(`Rolling two six-sided dice...`);


var img_player_1 = document.querySelector('.img1');
var img_player_2 = document.querySelector('.img2');

//change images of dices of player 1

if(x==1){
    img_player_1.setAttribute('src','images/dice1.png');
}else if(x==2){
    img_player_1.setAttribute('src','images/dice2.png');
}else if(x==3){
    img_player_1.setAttribute('src','images/dice3.png');
}else if(x==4){
    img_player_1.setAttribute('src','images/dice4.png');
}else if(x==5){
    img_player_1.setAttribute('src','images/dice5.png');
}else if(x==6){
    img_player_1.setAttribute('src','images/dice6.png');
}

//change images of dices of player 2

if(y==1){
    img_player_2.setAttribute('src','images/dice1.png');
}else if(y==2){
    img_player_2.setAttribute('src','images/dice2.png');
}else if(y==3){
    img_player_2.setAttribute('src','images/dice3.png');
}else if(y==4){
    img_player_2.setAttribute('src','images/dice4.png');
}else if(y==5){
    img_player_2.setAttribute('src','images/dice5.png');
}else if(y==6){
    img_player_2.setAttribute('src','images/dice6.png');
}

//Check who is winner
var winner =document.getElementsByTagName('h1')[0];
if(x>y){
    winner.innerHTML = "Player 1 wins! 🚩";
}else if(x<y){
    winner.innerHTML = "Player 2 wins! 🚩";
}else{
    winner.innerHTML = "Draw!";
}