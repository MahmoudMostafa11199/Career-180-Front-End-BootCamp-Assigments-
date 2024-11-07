console.log('Hello');

////////////////////////////////////////
// Exercise 1
let dayNumber = prompt('Enter a number from (1 - 7):');
let day;
switch (dayNumber) {
  case '1':
    day = '1= Satarday';
    break;
  case '2':
    day = '2= Sunday';
    break;
  case '3':
    day = '3= Monday';
    break;
  case '4':
    day = '4= Tuesday';
    break;
  case '5':
    day = '5= Wednesday';
    break;
  case '6':
    day = '6= Thursday';
    break;
  case '7':
    day = '7= Friday';
    break;

  default:
    day = 'Please enter a number from (1 - 7)';
    break;
}
alert(day);

////////////////////////////////////////
// Exercise 2
let names = [];
let arr = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

// For Loop to enter 5 names
for (let i = 0; i < 5; i++) {
  names.push(prompt(`Enter name (${i + 1}): `));
}

let searchName = prompt('Enter name to search: ');
let found = false;

// For Loop to search
for (let i = 0; i < names.length; i++) {
  if (names[i] === searchName) {
    alert(arr[i]);
    found = true;
  }
}
found ? null : alert('The name is not found');

////////////////////////////////////////
// Exercise 3
let text = prompt('Enter a string:');
alert(`"${text}"  ${text.split(' ').length} words`);
