const doorImage1 = document.getElementById('door1');

const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath ='https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
let currentlyPlaying = true;

let numCloseDoors = 3;
const startButton = document.getElementById('start');
let openDoor1;
let openDoor2;
let openDoor3;

const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

const playDoor = (door) => {
  numCloseDoors--;
  if(numCloseDoors === 0) {
    gameOver('win');
  } else if(isBot(door)) {
    gameOver('lose');
  }
};

const randomChoreDoorGenerator= () => {
  const choreDoor = Math.floor(Math.random() * numCloseDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
};

door1.onclick = () => {
  if (currentlyPlaying && !isClicked(door1)) {
    doorImage1.src = openDoor1;
    playDoor(door1);
  }
};
door2.onclick = () => {
  if (currentlyPlaying && !isClicked(door2)) {
    doorImage2.src = openDoor2;
    playDoor(door2);
  }
};
door3.onclick = () => {
  if (currentlyPlaying && !isClicked(door3)) {
    doorImage3.src = openDoor3;
    playDoor(door3);
  }
};

startButton.onclick = () => {
  if(!currentlyPlaying) {
    startRound();
  };
};

const startRound = () => {
  numCloseDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
};

startRound();


