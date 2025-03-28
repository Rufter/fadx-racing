document.addEventListener("DOMContentLoaded", function() {
    const multiServerElements = document.querySelectorAll('.multiserver');
    multiServerElements.forEach(function(serverElement, index) {
        const serverNumber = index;
        const link = document.createElement('a');
        link.href = `/live-timing?server=${serverNumber}`;
        link.textContent = '>>view Live Timings<<';

        const playersElement = serverElement.querySelector('.players');
        if (playersElement) {
            // Speichere den Textinhalt der Elemente 'players' und leere sie
            const playersOnline = playersElement.textContent.trim();
            playersElement.innerHTML = '';

            // Füge zuerst den Link und dann den Text für die Spieleranzahl hinzu
            playersElement.appendChild(link);
            playersElement.appendChild(document.createElement('br')); // Füge eine Zeilenumbruch hinzu
            playersElement.appendChild(document.createTextNode(playersOnline));
        }
    });
});