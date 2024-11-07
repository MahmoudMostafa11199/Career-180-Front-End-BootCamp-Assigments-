/* 
  I use setTimeout to UI Refresh after each exercise
*/

//////////////////////////////////////////////////////////////////////
// Exercise 1
function exercise1() {
  const countV = document.querySelector('.count-vowels');

  function countVowels(str) {
    let count = 0;

    // Way 1
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) count++;
    }
    countV.textContent += count;

    // Way 2
    // for (let i = 0; i < str.length; i++) {
    //   if (
    //     str[i] === 'a' ||
    //     str[i] === 'e' ||
    //     str[i] === 'i' ||
    //     str[i] === 'o' ||
    //     str[i] === 'u'
    //   ) {
    //     count++;
    //   }
    // }
    // countV.textContent += count;
  }
  countVowels(prompt('Enter a string'));
}
setTimeout(() => {
  exercise1();
}, 1000);

//////////////////////////////////////////////////////////////////////
// Exercise 2
function exercise2() {
  const employeesData = document.querySelector('.employee-date');

  // 1) Enter user for employee names and salaries
  let employeeNames = prompt('Enter employees names').split(',');
  let employeeSalaries = prompt(
    `Enter the salaries of the employees in order [${employeeNames}]`
  ).split(',');

  // 2) Validate if the number of names matches the number of salaries
  if (employeeNames.length !== employeeSalaries.length) {
    employeesData.textContent =
      'The number of employees does not match the number of salaries';
  } else {
    // 3) Display the employee data (name and salary)
    employeeNames.forEach((name, i) => {
      let employee = document.createElement('p');
      employee.classList.add(`employee-${i + 1}`);
      employee.textContent = `Name: ${name}, Sallary: ${employeeSalaries[i]}`;
      employeesData.appendChild(employee);
    });

    // 4) Highlight the employee with the highest salary (bold)
    const highestSallary = Math.max(...employeeSalaries);
    const highestIndex = employeeSalaries.indexOf(highestSallary + '');
    document.querySelector(`.employee-${highestIndex + 1}`).style.fontWeight =
      'bold';

    // 5) Search for an employee
    const serachName = prompt('Enter employee name: ');
    let found = false;

    let employeeSearch = document.createElement('p');
    employeeSearch.textContent = 'Search Data ==> ';
    employeesData.appendChild(employeeSearch);

    if (employeeNames.includes(serachName.toLowerCase())) {
      const employeeSearchResult = employeeNames.indexOf(
        serachName.toLowerCase()
      );
      employeeSearch.textContent += `Name: ${employeeNames[employeeSearchResult]}, Sallary: ${employeeSalaries[employeeSearchResult]}`;
    } else {
      employeeSearch.textContent += 'Not Found';
    }
  }
}
setTimeout(() => {
  exercise2();
}, 1000);

//////////////////////////////////////////////////////////////////////
// Exercise 3
function exercise3() {
  const sectionEl = document.querySelector('.exercise-3');

  const namesEl = document.createElement('ul');

  for (let i = 0; i < 5; i++) {
    const name = prompt(`Enter name ${i + 1}`);
    namesEl.innerHTML += `<li>${name}</li>`;
  }

  sectionEl.appendChild(namesEl);
}

//////////////////////////////////////////////////////////////////////
// Exercise 4
function exercise4() {
  // 1) Refer to the previous exercise(3)
  exercise3();

  // 2) Enter student name to search
  const stdName = prompt('Enter student name: ');

  const nameList = document.querySelectorAll('li');
  const resultEl = document.getElementById('result');

  // 3) Search for the student
  let found = false;
  nameList.forEach((name, i) => {
    if (name.textContent.toLowerCase() === stdName.toLowerCase()) {
      resultEl.textContent += `Student found (Index: ${i})`;
      found = true;
    }
  });
  !found && (resultEl.textContent += `Student Not found`);
}
setTimeout(() => {
  exercise4();
}, 1000);

//////////////////////////////////////////////////////////////////////
// Exercise 5
function exercise5GeneratNumber() {
  while (true) {
    const rnd = Math.floor(Math.random() * 6) + 1;
    alert('Random number: ' + rnd);

    const isRight = confirm('Do you want to generate again?');
    if (!isRight) break;
  }
}
setTimeout(() => {
  exercise5GeneratNumber();
}, 1000);

//////////////////////////////////////////////////////////////////////
// Exercise 6
function exercise6() {
  const imgEl = document.querySelector('.img-toggle');
  const btnToggle = document.querySelector('.btn-toggle');

  btnToggle.addEventListener('click', (e) => {
    const isOff = e.target.textContent === 'ON';

    isOff ? (imgEl.src = 'on.jpg') : (imgEl.src = 'off.jpg');
    isOff ? (e.target.textContent = 'OFF') : (e.target.textContent = 'ON');
  });
}
setTimeout(() => {
  exercise6();
}, 1000);
