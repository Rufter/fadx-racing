document.addEventListener("DOMContentLoaded", function() {
  addClock();
});

function addClock() {
  var clockContent = `
    <li class="nav-item">
      <a class="nav-link" href="#">
        <div id="clock"></div>
      </a>
    </li>
  `;

  var navbarNav = document.querySelector('.navbar-nav.mr-auto');
  navbarNav.insertAdjacentHTML('beforeend', clockContent);

  // Update clock every second
  setInterval(updateClock, 1000);
}

function updateClock() {
  var clockElement = document.getElementById('clock');
  var currentTime = new Date();
  var timeString = currentTime.toLocaleTimeString();

  // Add CSS styles to clockElement
  clockElement.style.color = 'white';

  // Append "Uhr" to timeString
  timeString = 'Time: ' + timeString;

  clockElement.textContent = timeString;
}