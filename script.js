const countdown = document.getElementById('countdown');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const time = document.getElementById('time');
const actime = document.getElementById('actualtime')
// Funkcja odliczająca czas do końcowego czasu
function updateCountdown() {
  // Ustawienie końcowego czasu odliczania na 21:15
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

  // Jeśli aktualna godzina jest po 21:15, ustaw końcowy czas odliczania na godzinę 21:15 dnia następnego
  if (targetDate < new Date()) {
    targetDate.setDate(targetDate.getDate() + 1);
  }

  // Pobranie aktualnego czasu
  // Obliczenie różnicy pomiędzy aktualnym czasem a końcowym czasem odliczania
  let timeDifference = targetDate.getTime() - currentDate.getTime();
  // Konwersja różnicy czasu na godziny, minuty i sekundy
  let hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
  timeDifference = timeDifference % (1000 * 60 * 60);
  let minutesLeft = Math.floor(timeDifference / (1000 * 60));
  timeDifference = timeDifference % (1000 * 60);
  let secondsLeft = Math.floor(timeDifference / 1000);

  // Ustawienie odpowiednich wartości dla każdej zmiennej w elemencie HTML
  hours.textContent = hoursLeft;
  minutes.textContent = minutesLeft;
  seconds.textContent = secondsLeft;
}

// Wywołanie funkcji odliczającej co 1000 milisekund (1 sekunda)
setInterval(updateCountdown, 1000);
