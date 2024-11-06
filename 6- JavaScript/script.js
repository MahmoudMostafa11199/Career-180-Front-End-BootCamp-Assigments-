console.log('Hello');

////////////////////////////////////////
// Exercise 1
let firstName = prompt('Enter your first name:');
let lastName = prompt('Enter your last name:');

alert(`Welcome ${firstName} ${lastName}`);

//
let age = prompt('Enter your age:');
let statusUser;

if (age >= 1 && age <= 10) {
  statusUser = 'Child';
} else if (age >= 11 && age <= 18) {
  statusUser = 'Teenager';
} else if (age >= 19 && age <= 50) {
  statusUser = 'Grown up';
} else if (age > 50) {
  statusUser = 'Old';
} else {
  statusUser = 'Please enter a valid age.';
}

alert(statusUser);

////////////////////////////////////////
// Exercise 2
let num = prompt('Enter number: ');

if (num % 2 == 0) {
  alert('even');
} else alert('odd');
