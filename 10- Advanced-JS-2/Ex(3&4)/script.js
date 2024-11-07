////////////////////////////////////////////////////////////////
// Exercise 3
////////////////////////////////////////////////////////////////
function exercise3() {
  const boxEl = document.querySelector('#target');
  const grow = document.querySelector('.grow');
  const shrink = document.querySelector('.shrink');
  const fadeOut = document.querySelector('.fade-out');
  const fadeIn = document.querySelector('.fade-in');

  // to get the initial style width of the target
  let initStyleSize = parseInt(
    getComputedStyle(boxEl).getPropertyValue('width')
  );

  // to get the initial style opacity of the target
  let initStyleOpacity = parseFloat(
    getComputedStyle(boxEl).getPropertyValue('opacity')
  );

  function changeSizeFn(direction) {
    const sizeInterval = setInterval(function () {
      if (direction === 'grow') {
        // to check if the boxElStyleWidth is equal to 500px then stop the interval
        if (initStyleSize >= 500) {
          clearInterval(sizeInterval);
          return;
        }
        initStyleSize += 10;
      }
      if (direction === 'shrink') {
        // to check if the boxElStyleWidth is equal to 50px then stop the interval
        if (initStyleSize <= 50) {
          clearInterval(sizeInterval);
          return;
        }
        initStyleSize -= 10;
      }

      boxEl.style.width = initStyleSize + 'px';
      boxEl.style.height = initStyleSize + 'px';
    }, 100);
  }

  function changeOpacityFn(direction) {
    const fadeInterval = setInterval(function () {
      if (direction === 'in') {
        // to check if the boxElStyleOpacity is equal to 0 then stop the interval
        if (initStyleOpacity >= 1) {
          clearInterval(fadeInterval);
          return;
        }
        initStyleOpacity += 0.1;
      }

      if (direction === 'out') {
        // to check if the boxElStyleOpacity is equal to 0 then stop the interval
        if (initStyleOpacity <= 0) {
          clearInterval(fadeInterval);
          return;
        }
        initStyleOpacity -= 0.1;
      }

      boxEl.style.opacity = initStyleOpacity;
    }, 100);
  }

  // Event Listeners
  grow.addEventListener('click', function () {
    changeSizeFn('grow');
  });
  shrink.addEventListener('click', function () {
    changeSizeFn('shrink');
  });

  fadeOut.addEventListener('click', function () {
    changeOpacityFn('out');
  });

  fadeIn.addEventListener('click', function () {
    changeOpacityFn('in');
  });
}
exercise3();

////////////////////////////////////////////////////////////////
// Exercise 4
////////////////////////////////////////////////////////////////
function exercise4() {
  const timerEl = document.querySelector('#timer');
  const btnTimer = document.querySelector('.btn-timer');

  let count = 0;
  let timerInterval = null;

  function timerFn() {
    if (!timerInterval) {
      // Start the timer
      btnTimer.innerText = 'Stop Timer';
      timerInterval = setInterval(function () {
        count++;
        timerEl.innerText = `Timer : ${count}`;
      }, 1000);
    } else {
      // Stop the timer
      clearInterval(timerInterval);
      btnTimer.innerText = 'Start Timer';
      timerInterval = null;
    }
  }

  // Event Listener
  btnTimer.addEventListener('click', timerFn);
}
exercise4();
