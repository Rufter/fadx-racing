document.addEventListener("animationstart", function(e) {
  if (e.animationName === 'navbarReady') {
    const navbarContainer = e.target.children[0];
    navbarContainer.className = 'navbar-container'; 
    
    const socialsDropdownHTML = `<li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navBarSocialsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="https://fadx-racing.de/script/svg/youtube-filled-svgrepo-com.svg" alt="">
      </a>
      <div class="dropdown-menu" aria-labelledby="navBarSocialsDropdown">
        <a class="dropdown-item discord" href="https://www.twitch.tv/augschi" target="_blank">Twitch</a>
        <a class="dropdown-item discord" href="https://www.youtube.com/channel/UC_s08vFn3FUj2uY5_4CgHYw" target="_blank">YouTube</a>
        <a class="dropdown-item discord" href="https://www.youtube.com/channel/UCo2xmxQ0Sevd_tl8s3DGn0Q/streams" target="_blank">SimRacingKanal</a>
      </div>
    </li>`;

    const userAccountDropdown = document.getElementById('user-account-dropdown');
    userAccountDropdown.insertAdjacentHTML('beforebegin', socialsDropdownHTML); 
  }
}, false);
