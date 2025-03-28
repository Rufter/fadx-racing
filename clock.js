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

  setInterval(updateClock, 1000);
}

function updateClock() {
  var clockElement = document.getElementById('clock');
  var currentTime = new Date();
  var timeString = currentTime.toLocaleTimeString();

  clockElement.style.color = 'white';
  timeString = 'Time: ' + timeString;
  clockElement.textContent = timeString;
}
