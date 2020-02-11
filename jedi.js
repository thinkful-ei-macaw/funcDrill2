/* eslint-disable no-console */
/* eslint-disable strict */
// first function

function jediName (firstName, lastName) {
  console.log(firstName.substring(0, 3) + lastName.substring(0, 2));
}

jediName('Douglas', 'Miner');

// second function

function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond');
  } else if (num !== Infinity && num > 0) {
    console.log('To infinity');
  } else if (num !== Infinity && num <0) {
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('Staying home');
  }
}

beyond(Infinity);

// third function

function decode(word) {
  if (word[0] === 'a') {
    console.log(word[1]);
  } else if (word[0] === 'b') {
    console.log(word[2]);
  } else if (word[0] === 'c') {
    console.log(word[3]);
  } else if (word[0] === 'd') {
    console.log(word[4]);
  } else {
    console.log(' ');
  }
}

decode('craft');
decode('block');
decode('argon');
decode('meter');
decode('bells');
decode('brown');
decode('croon');
decode('droop');
// shoulda done a for loop


// fourth function

function howManyDays(month, leapYear) {
  let days = 0;
  switch (month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    days = 31;
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    days = 30;
    break;
  case 'February':
    days = 28;
    break;
  }
  days = days === 28 && leapYear ? 29 : days;

  console.log(`${month} has ${days} days`);
}

howManyDays('February', true);

//fifth function

