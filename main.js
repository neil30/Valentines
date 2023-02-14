import confetti from 'https://cdn.skypack.dev/canvas-confetti';


function party() {
    confetti();
}

window.onload = function() {
    confetti();
  };

document.getElementById('confetti').addEventListener('click', party)