const countdown = document.getElementById('countdown');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const time = document.getElementById('time');
const actime = document.getElementById('actualtime')
function updateCountdown() {
  const currentDate = new Date();
  let ahr = currentDate.getHours();
  let amn = currentDate.getMinutes();
  let asc = currentDate.getSeconds();
  ahr = ahr.toString().padStart(2, '0');
  amn = amn.toString().padStart(2, '0');
  asc = asc.toString().padStart(2, '0');
  const actualtime = ahr + ":" + amn + ":" + asc
  actime.textContent = actualtime;

  if(!time.value) return;
  console.log(time.value)
  let[hour, min] = time.value.split(":");
  const targetDate = new Date();
  targetDate.setHours(hour, min, 0, 0);


  if (targetDate < new Date()) {
    targetDate.setDate(targetDate.getDate() + 1);
  }


  let timeDifference = targetDate.getTime() - currentDate.getTime();

  let hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
  timeDifference = timeDifference % (1000 * 60 * 60);
  let minutesLeft = Math.floor(timeDifference / (1000 * 60));
  timeDifference = timeDifference % (1000 * 60);
  let secondsLeft = Math.floor(timeDifference / 1000);

  hours.textContent = hoursLeft;
  minutes.textContent = minutesLeft;
  seconds.textContent = secondsLeft;
}


setInterval(updateCountdown, 1000);
