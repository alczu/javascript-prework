clearMessages();

const randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);

let computerMove;
if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'nożyce';
} else if (randomNumber == 3) {
  computerMove = 'papier';
} else {
  computerMove = 'nieznany ruch';
}
console.log('mój ruch: ' + computerMove);

const playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: nożyce, 3: papier.');
console.log('Wpisana odpowiedź to: ' + playerInput);

let playerMove;
if (playerInput == 1) {
  playerMove = 'kamień';
} else if (playerInput == 2) {
  playerMove = 'nożyce';
} else if (playerInput == 3) {
  playerMove = 'papier';
} else {
  playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);
