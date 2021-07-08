/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];
let avgD6 = 0;

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  return result;
}

const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

// D6 Die - Add Start image

const d6 = document.querySelector('#d6-roll');
d6.src = "./images/start/d6.png";


// D6 x2 Die - Add Start image

const d6Double1 = document.querySelector('#double-d6-roll-1');
d6Double1.src = "./images/start/d6.png";

const d6Double2 = document.querySelector('#double-d6-roll-2');
d6Double2.src = "./images/start/d6.png";

// D12 Die - Add Start Image

const d12 = document.querySelector('#d12-roll');
d12.src = "./images/start/d12.jpeg";

// D20 Die - Add Start Image

const d20 = document.querySelector('#d20-roll');
d20.src = "./images/start/d20.jpg";


// Random D6 roll function

function d6roll() {
  const roll = Math.floor((Math.random() * 6 + 1));
  if (roll == 1) {
    d6.src = "./images/d6/1.png";
  }
  if (roll == 2) {
    d6.src = "./images/d6/2.png";
  }
  if (roll == 3) {
    d6.src = "./images/d6/3.png";
  }
  if (roll == 4) {
    d6.src = "./images/d6/4.png";
  }
  if (roll == 5) {
    d6.src = "./images/d6/5.png";
  }
  if (roll == 6) {
    d6.src = "./images/d6/6.png";
  }
  return roll
}


// Random Double DoubleD6 roll function
const main = document.querySelector('main');

function doubleD6roll1() {
  const roll = Math.floor((Math.random() * 6 + 1));
  if (roll == 1) {
    d6Double1.src = "./images/d6/1.png";
  }
  if (roll == 2) {
    d6Double1.src = "./images/d6/2.png";
  }
  if (roll == 3) {
    d6Double1.src = "./images/d6/3.png";
  }
  if (roll == 4) {
    d6Double1.src = "./images/d6/4.png";
  }
  if (roll == 5) {
    d6Double1.src = "./images/d6/5.png";
  }
  if (roll == 6) {
    d6Double1.src = "./images/d6/6.png";
  }
}

function doubleD6roll2() {
  const roll = Math.floor((Math.random() * 6 + 1));
  if (roll == 1) {
    d6Double2.src = "./images/d6/1.png";
  }
  if (roll == 2) {
    d6Double2.src = "./images/d6/2.png";
  }
  if (roll == 3) {
    d6Double2.src = "./images/d6/3.png";
  }
  if (roll == 4) {
    d6Double2.src = "./images/d6/4.png";
  }
  if (roll == 5) {
    d6Double2.src = "./images/d6/5.png";
  }
  if (roll == 6) {
    d6Double2.src = "./images/d6/6.png";
  }
}


function doubleD6roll() {
  doubleD6roll1();
  doubleD6roll2();
}

/*******************
 * EVENT LISTENERS *
 *******************/

//first part is the event type. second part always function.


///////////////////////



calculateMean

d6.addEventListener('click', function () {
  d6roll()
})


console.log(avgD6);

console.log(sixes);

main.addEventListener('click', function () {
  //code here
})

/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/

// mean function
function calculateMean(arr) {

  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]                              // add all indices and store value
  }

  const output = sum / arr.length;
  return output
}

console.log(calculateMean([4, 8]))


// median function
function calculateMedian(arr) {

  const arrSort = arr.sort();
  const mid = Math.ceil(len / 2);

  const median =
    len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];

  console.log("median: ", median);

}