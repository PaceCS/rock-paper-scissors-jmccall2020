const options = ['Rock', 'Scissors', 'Paper'];
// This function takes in the userChoice and then prints the results to the console.
function playGame(userChoice) {
    console.log('You chose ' + userChoice + '.');
if(userChoice == 'Rock'){
    var a = 2;
}
if(userChoice == 'Scissors'){
    var a = 1;
}
if(userChoice == 'Paper'){
    var a = 0;
}
var b = (Math.floor(Math.random() * 3));
if (b == 2){
    var c = 'Rock';
}
if (b == 1){
    var c = 'Scissors';
}
if (b == 0){
    var c = 'Paper';
}
console.log('The computer chose' + c);
if(a == b){
    document.write('You tied.')
}
else if(a == b + 1 || Math.abs(a - b - 1) == 3){
    document.write(userChoice + 'beats' + c + '. You win');
}
else{
    document.write(c + 'beats' + userChoice + '. You lose.');
}



















module.exports.playGame = playGame;
module.exports.options = options;
