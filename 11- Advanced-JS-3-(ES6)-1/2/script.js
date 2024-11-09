////////////////////////////////////////////////////
// All Date functions
////////////////////////////////////////////////////
function allDateFn() {
  const result1 = document.querySelector('.result-1');
  const result2 = document.querySelector('.result-2');
  const result3 = document.querySelector('.result-3');
  const result4 = document.querySelector('.result-4');

  const currentdate = new Date();
  const birthDate = new Date(1999, 10, 1);
  const options = {
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
  };

  // date-fns for calculate age
  const age = dateFns.differenceInYears(currentdate, birthDate);

  result1.innerText = `Current Date: ${currentdate}`;
  result2.innerText = `Current Date: ${new Intl.DateTimeFormat(
    'eg-ae',
    options
  ).format(currentdate)}`;
  result3.innerText = `Birth Date: ${birthDate.toLocaleDateString(
    'ar-eg'
  )}م --  ${birthDate.toLocaleDateString('ar-sa')}`;
  result4.innerText = `Age: ${age} years old`;
}
allDateFn();

////////////////////////////////////////////////////
// Date using Moment JS
////////////////////////////////////////////////////
function dateUsingMoment() {
  const resultMoment1 = document.querySelector('.result-moment-1');
  const resultMoment2 = document.querySelector('.result-moment-2');
  const resultMoment3 = document.querySelector('.result-moment-3');
  const resultMoment4 = document.querySelector('.result-moment-4');
  const resultMoment5 = document.querySelector('.result-moment-5');

  resultMoment1.innerText = `Current Date: ${moment().format(
    'DD MMMM YYYY, h:mm:ss A'
  )}`;
  resultMoment2.innerText = `Current Date: ${moment().format(
    '[Today is ]  dddd'
  )}`;
  resultMoment3.innerText = `Birth Date: ${moment('1999-11-01').format(
    'DD MMMM YYYY'
  )}`;

  moment.locale('ar');

  resultMoment4.innerText = `Age: ${moment([1999, 11, 1]).fromNow()}`;
  // resultMoment5.innerText = `Age: ${moment().diff(moment('1999-11-01'), 'years')} years old`;
}
dateUsingMoment();

let a = 10;
a;
