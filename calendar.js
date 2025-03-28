
//Trigger page tweaks with css animation trigger. 
document.addEventListener("animationstart", function(e) {
    if (e.animationName == 'navbarReady') {
e.target.children[0].className = 'navbar-container'; //Make navbar width responsive
        document.getElementById('user-account-dropdown').insertAdjacentHTML('beforebegin','<a href="https://fadx-racing.de/race-calendar" target="_blank"><img src="https://fadx-racing.de/script/svg/calendar-22-svgrepo-com.svg" alt=""></img></a></div>'); //Add resources and socials dropdowns
        
    }
}, false);