document.addEventListener("DOMContentLoaded", function() {
    const multiServerElements = document.querySelectorAll('.multiserver');
    multiServerElements.forEach(function(serverElement, index) {
        const serverNumber = index;
        const link = document.createElement('a');
        link.href = `/live-timing?server=${serverNumber}`;
        link.textContent = '>>view Live Timings<<';

        const playersElement = serverElement.querySelector('.players');
        if (playersElement) {
            const playersOnline = playersElement.textContent.trim();
            playersElement.innerHTML = '';
            playersElement.appendChild(link);
            playersElement.appendChild(document.createElement('br'));
            playersElement.appendChild(document.createTextNode(playersOnline));
        }
    });
});
