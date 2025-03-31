document.addEventListener("DOMContentLoaded", function() {
    // Dynamisch CSS hinzufügen
    const style = document.createElement('style');
    style.textContent = `
        .multiserver-dropdown .multiserver {
            height: 90px;
            background-color: #f0f0f0;
            margin: 10px;
            padding: 5px;
            border: 1px solid #ccc;
        }
        .multiserver a {
            color: #007bff;
            text-decoration: none;
        }
        .multiserver a:hover {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);

    // Funktion zum Hinzufügen von Links und Spieleranzahl
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
