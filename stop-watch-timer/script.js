const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('milliseconds');

const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('StopBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

const laplist = document.getElementById('laplist');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    interval = setInterval(updateTimer, 10);
    startButton.disabled = true;
    stopButton.disabled = false;
    pauseButton.disabled = false;
    resetButton.disabled = false;
}

function stopTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateTimer();
  addToLapList();
  startButton.disabled = false;
  stopButton.disabled = true;
  pauseButton.disabled = true;
  resetButton.disabled = false;
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
  pauseButton.disabled = true;
  startButton.disabled = false;

}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateTimer();
    startButton.disabled = false;
    laplist.innerHTML = '';
}

function updateTimer() {
    milliseconds++;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    diplayTimer();
}

function diplayTimer() {
    minutesLabel.textContent = formatTime(minutes);
    secondsLabel.textContent = formatTime(seconds);
    millisecondsLabel.textContent = formatTime(milliseconds);
}

function formatTime(time) {
    return time.toString().padStart(2, '0');
}

function addToLapList() {
    const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
    const listItem = document.createElement('li');
    listItem.innerHTML =`<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;
    lapList.appendChild(listItem);
}

