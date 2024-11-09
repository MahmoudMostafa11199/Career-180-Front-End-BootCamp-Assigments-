////////////////////////////////////////////////////////
// Exercise 1
////////////////////////////////////////////////////////
function exercise1() {
  const greetingEl = document.querySelector('.result-greeting');
  function greet(name, greeting = 'Hello') {
    return `${greeting} ${name}`;
  }
  greetingEl.innerText = greet('Mahmoud');
}
exercise1();

////////////////////////////////////////////////////////
// Exercise 2
////////////////////////////////////////////////////////
function exercise2() {
  const combineArrEl = document.querySelector('.result-combine-arr');
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [...arr1, ...arr2];
  combineArrEl.innerText = `${arr1} + ${arr2} = ${arr3}`;
}
exercise2();

////////////////////////////////////////////////////////
// Exercise 3
////////////////////////////////////////////////////////
function exercise3() {
  const combineObjEl = document.querySelector('.result-combine-obj');
  const user = {
    name: 'Alice',
    age: 25,
  };
  const location = {
    city: 'Wonderland',
    country: 'Fictional',
  };
  const userDetails = { ...user, ...location };
  combineObjEl.innerText = `${JSON.stringify(user)} + ${JSON.stringify(
    location
  )} = ${JSON.stringify(userDetails)}`;
}
exercise3();

////////////////////////////////////////////////////////
// Exercise 4
////////////////////////////////////////////////////////
function exercise4() {
  const evenNumEl = document.querySelector('.result-even-num');
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNum = nums.filter((num) => num % 2 == 0);
  evenNumEl.innerText = `[${nums}] => Even Number [${evenNum}]`;
}
exercise4();

////////////////////////////////////////////////////////
// Exercise 5
////////////////////////////////////////////////////////
function exercise5() {
  const resultFilterLessThanEl = document.querySelector('.result-less-than');
  function filterLessThan(list, comprisonNumber) {
    return list.filter((num) => num < comprisonNumber);
  }

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = filterLessThan(nums, 5);
  resultFilterLessThanEl.innerText = `[${nums}] => Less than 5 [${result}]`;
}
exercise5();

////////////////////////////////////////////////////////
// Exercise 6
////////////////////////////////////////////////////////
function exercise6() {
  const destractEl = document.querySelector('.result-destract');
  const person = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland',
  };
  const { name: userName, age: userAge, city: userCity } = person;
  destractEl.innerText = `Name: ${userName}, Age: ${userAge}, City: ${userCity}`;
}
exercise6();

////////////////////////////////////////////////////////
// Exercise 8
////////////////////////////////////////////////////////
let uniqueNums;
function exercise8() {
  const resultRemoveDuplicatesEl = document.querySelector(
    '.result-remove-duplicates'
  );
  const nums = [22, 30, 5, 10, 122, 22, 10, 19, 9, 10, 10];
  uniqueNums = new Set(nums);
  resultRemoveDuplicatesEl.innerText = `[${nums}] => Remove Duplicates [${[
    ...uniqueNums,
  ]}]`;
}
exercise8();

////////////////////////////////////////////////////////
// Exercise 9  refer to exercise 8 (Convert Set to Array)
////////////////////////////////////////////////////////
function exercise9() {
  const resultSetArr = document.querySelector('.result-set_arr');
  const convertToArr = [...uniqueNums];
  resultSetArr.innerText = `[${convertToArr}]`;
}
exercise9();

////////////////////////////////////////////////////////
// Exercise 10
////////////////////////////////////////////////////////
function exercise10() {
  const arr = [11, 22, 44, 20, 10, 55];
  const str = 'Mahmoud Mostafa Elshahat';
  console.log(arr.includes(22)); // true
  console.log(arr.includes(0)); // false
  console.log(str.endsWith('Elshahat')); // true
  console.log(str.includes('Mos')); // true
  console.log(str.startsWith('Mahmoud')); // true
  console.log(str.startsWith('Samir')); // false
}
exercise10();
