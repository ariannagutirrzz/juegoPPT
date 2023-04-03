function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function game(text, choice) {
 
  if (choice == 1) {
    alert(text + "rock 🪨");
  } else if (choice == 2) {
    alert(text + "paper 📄");
  } else if (choice == 3) {
    alert(text + "scissors ✂️");
  } else {
    alert("bad choice");
  }
}
let player = 0;
let pc = 0;
let victories = 0;
let losings = 0;
let ties = 0;

//COMBATE Y ALEATORIEDAD, USO DE LAS FUNCIONES CREADAS AL PRINCIPIO

while (victories < 3 && losings < 3) {
  pc = random(1, 3);
  player = prompt(
    "choose a number, 1 for por rock, 2 for scissors or 3 for paper"
  );

  game("You choosed: ",  player); 
  game("PC choosed: ",  pc);

  if (pc == player) {
    alert("It's a tie");
    ties = ties + 1;
  } else if (
    (player == 1 && pc == 3) ||
    (player == 2 && pc == 1) ||
    (player == 3 && pc == 2)
  ) {
    alert("You win!");
    victories = victories + 1;
  } else {
    alert("You lose!");
    losings = losings + 1;
  }
}
alert(
  "you have won: " +
    victories +
    " you have losed: " +
    losings +
    " you have tied: " +
    ties
);
