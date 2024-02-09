document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('popup').style.display = 'block';
});

let noClicks = 0;

document.getElementById('btnYes').addEventListener('click', function() {
  alert("Yay! Happy Valentine's Day!");
  document.getElementById('popup').style.display = 'none';
});

document.getElementById('btnNo').addEventListener('click', function() {
  noClicks++;
  document.getElementById('btnYes').style.fontSize = `${noClicks * 5 + 16}px`;
  
  if (noClicks === 5) {
    document.getElementById('resultText').textContent = 'YES!';
  }
});
