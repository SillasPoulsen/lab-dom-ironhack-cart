function blast() {
  let counter = 0;

  let intervalId = setInterval(() => {
    counter++;

    if (counter % 3 === 0 && counter % 5 === 0) {
      console.log('boom bang');
    } else if (counter % 3 === 0) {
      console.log('boom');
    } else if (counter % 5 === 0) {
      console.log('bang');
    } else {
      console.log(counter);
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 15500);
}

blast();
