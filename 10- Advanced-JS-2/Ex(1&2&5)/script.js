////////////////////////////////////////////////////////////////
// Exercise 1
////////////////////////////////////////////////////////////////
function exercise1() {
  const resultArr = document.querySelector('.result-arrString');
  function arrString(str, format = 'lower') {
    const newArr = str.slice();
    for (let i = 0; i < newArr.length; i++) {
      if (format === 'upper') newArr[i] = newArr[i].toUpperCase();
      if (format === 'lower') newArr[i] = newArr[i].toLowerCase();
    }
    return newArr;
  }
  const arr = ['Mahmoud', 'Mostafa', 'Elshahat'];

  resultArr.innerText = `${arr} => ${arrString(arr)}\n`;
  resultArr.innerText += `${arr} => ${arrString(arr, 'upper')}`;
}
exercise1();

////////////////////////////////////////////////////////////////
// Exercise 2
////////////////////////////////////////////////////////////////
function exercise2() {
  const resultEl = document.querySelector('#result');

  function sumNumber(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
  }
  // resultEl.innerText = `Result: ${sumNumber()}`;
  // resultEl.innerText = `Result: ${sumNumber(1, 2)}`;
  // resultEl.innerText = `Result: ${sumNumber(1)}`;
  resultEl.innerText = `Result: ${sumNumber(1, 2, 3)}`;
}
exercise2();

////////////////////////////////////////////////////////////////
// Exercise 5 Recursion (1)
////////////////////////////////////////////////////////////////
function exercise5_One() {
  const resultSLEl = document.querySelector('.result-string-length');
  // Way 1
  function stringLength(str) {
    if (!str) return 0;

    return 1 + stringLength(str.slice(1));
  }
  const str = 'Mahmoud Mostafa Elshahat';
  resultSLEl.innerText = `${str} = ${stringLength(str)} characters`;
  /*
    // Way 2
    let count = 0;
    function stringLength(str) {
      if (!str) return 0;
      else {
        stringLength(str.slice(1));
        count++;
      }
    }
  const str = 'Mahmoud Mostafa Elshahat';
  stringLength(str);
  resultSLEl.innerText = `${str} = ${count} characters`;
  */
}
exercise5_One();

////////////////////////////////////////////////////////////////
// Exercise 5 Recursion (2)
////////////////////////////////////////////////////////////////
function exercise5_Two() {
  const resultFindMax = document.querySelector('.result-find-max');

  function findMax(arr) {
    if (arr.length === 1) return arr[0];

    const max = findMax(arr.slice(1));

    return arr[0] > max ? arr[0] : max;
  }

  const arrNum = [10, 2, 45, 3, 22, 1];
  resultFindMax.innerText = `[${arrNum.join(', ')}] = ${findMax(
    arrNum
  )} is the max number`;
}
exercise5_Two();

////////////////////////////////////////////////////////////////
// Exercise 5 Recursion (3)
////////////////////////////////////////////////////////////////
function exercise5_Three() {
  const resultPrintArr = document.querySelector('.result-print-arr');

  function printArr(arr) {
    if (!arr.length) return 0;

    resultPrintArr.innerText += ` ${arr[0]}`;

    return printArr(arr.slice(1));
  }

  const arr = [10, 'AboTrika', 45, 'Tamim', 22, 'Fares'];
  printArr(arr);
}
exercise5_Three();

////////////////////////////////////////////////////////////////
// Exercise 5 Recursion (4)
////////////////////////////////////////////////////////////////
function exercise5_Four() {
  const resultCountUp = document.querySelector('.result-count-up');

  let currentNum = 1;
  function countUp(n) {
    if (!n) return;

    resultCountUp.innerText += ` ==> ${currentNum++} `;

    return countUp(n - 1);
  }

  countUp(10);
}
exercise5_Four();

////////////////////////////////////////////////////////////////
// Exercise 5 Recursion (5)
////////////////////////////////////////////////////////////////
function exercise5_Five() {
  const resultParalindromeEl = document.querySelector('.result-paralindrome');

  function isPalindrome(str) {
    if (str.length <= 1) return 1;

    if (str[0] !== str[str.length - 1]) return 0;

    return isPalindrome(str.slice(1, -1));
  }

  const strCheck = 'radar'; // radar is a palindrome
  // const strCheck = 'egypt'; // egypt is not a palindrome

  if (isPalindrome(strCheck))
    resultParalindromeEl.innerText = `${strCheck} is a palindrome`;
  else resultParalindromeEl.innerText = `${strCheck} is not a palindrome`;
}
exercise5_Five();
