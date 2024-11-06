//////////////////////////////////////////////////////////////////////
// Exercise 3
//////////////////////////////////////////////////////////////////////
const btnToggle = document.querySelector('.btn--toggle');

// Get Theme from Local Storage if exist
const getTheme = localStorage.getItem('theme');
if (getTheme === 'dark') {
  document.body.classList.add('dark');
  btnToggle.innerHTML = '<ion-icon name="sunny"></ion-icon>';
}

btnToggle.addEventListener('click', function (e) {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    // Change Theme to Dark
    localStorage.setItem('theme', 'dark');
    this.innerHTML = '<ion-icon name="sunny"></ion-icon>';
  } else {
    // Change Theme to Light
    localStorage.setItem('theme', 'light');
    this.innerHTML = '<ion-icon name="moon"></ion-icon>';
  }
});
