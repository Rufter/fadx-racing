document.addEventListener("animationstart", function(e) {
  if (e.animationName === 'navbarReady') {
    makeNavbarResponsive(e.target);
    addDropdownMenus();
  }
}, false);

function makeNavbarResponsive(element) {
  element.children[0].className = 'navbar-container';
}

function addDropdownMenus() {
  const resourcesDropdownContent = `
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navBarResourcesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="https://fadx-racing.de/script/svg/download.svg" alt="">
      </a>
      <div class="dropdown-menu" aria-labelledby="navBarResourcesDropdown">
        <a class="dropdown-item" href="/tracks">Tracks</a>
        <a class="dropdown-item" href="/cars">Cars</a>
        <div class="dropdown-divider"></div>
        <h4 class="dropdown-header font-italic">Apps</h4>
        <a class="dropdown-item" href="https://acstuff.ru/app/" target="_blank">Content Manager</a>
		<a class="dropdown-item" href="https://dl.fadx-racing.de/downloads/apps/ACSyncTool2.zip" target="_blank">Assetto Corsa Sync Tool</a>
        <a class="dropdown-item" href="https://dl.fadx-racing.de/downloads/apps/RealPenaltyClientApp_v.1.02.00.zip" target="_blank">Real Penalty App</a>
        <a class="dropdown-item" href="acmanager://install?url=https://dl.fadx-racing.de/downloads/apps/SubStanding_v2.13.zip" target="_blank">SubStanding v2.13</a>
        <a class="dropdown-item" href="acmanager://install?url=https://dl.fadx-racing.de/downloads/apps/helicorsa_v7b.zip" target="_blank">Helicorsa v7b</a>
        <a class="dropdown-item" href="acmanager://install?url=https://dl.fadx-racing.de/downloads/apps/CBV_FuelCalc_1-1-1.zip" target="_blank">CBV FuelCalc</a>
        <a class="dropdown-item" href="acmanager://install?url=https://dl.fadx-racing.de/downloads/apps/Fuel_Usage_v1.29.zip" target="_blank">Fuel Usage v1.29</a>
        <a class="dropdown-item" href="https://dl.fadx-racing.de/downloads/apps/SOL2.2.7.rar" target="_blank">SOL 2.2.7</a>
      </div>
    </li>
  `;

  const dropdownContainer = document.createElement('li');
  dropdownContainer.className = 'nav-item dropdown';
  dropdownContainer.innerHTML = resourcesDropdownContent;

  const userAccountDropdown = document.getElementById('user-account-dropdown');
  userAccountDropdown.parentNode.insertBefore(dropdownContainer, userAccountDropdown);
}