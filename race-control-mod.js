(function () {
    'use strict';

    if (!window.location.href.includes('/race-control')) {
        return;
    }

    const BAN_OVERVIEW_URL = 'https://ban.fadx-racing.de/';
    const REPLACEMENT_ID = 'override-ban-button-container';

    function replaceBanControls() {
        // Already done?
        if (document.getElementById(REPLACEMENT_ID)) return;

        // Find the ban field/button area
        const banButton = document.getElementById('ban');
        const banContextRow = document.querySelector('label[for="BanContext"]')?.closest('.form-group');

        if (!banButton) return; // nichts zu tun, wenn kein Ban-Button da

        // Hide original ban button and context input
        banButton.style.display = 'none';
        if (banContextRow) banContextRow.style.display = 'none';

        // Create replacement container next to Kick area
        // We'll place it where the ban button was
        const container = document.createElement('div');
        container.id = REPLACEMENT_ID;
        container.style.marginTop = '0.5rem';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'flex-start';
        container.style.gap = '4px';

        // Label
        const label = document.createElement('div');
        label.textContent = 'To Ban a driver please use the Blocklist Manager:';
        label.style.fontWeight = '600';
        label.style.marginBottom = '4px';
        container.appendChild(label);

        // New button
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = 'Open Blocklist Manager';
        btn.className = 'btn btn-danger';
        btn.style.padding = '0.6em 1.2em';
        btn.style.fontWeight = '600';
        btn.style.cursor = 'pointer';
        btn.style.borderRadius = '4px';
        btn.addEventListener('click', () => {
            window.open(BAN_OVERVIEW_URL, '_blank', 'noopener');
        });
        container.appendChild(btn);

        // Optional small note
        const note = document.createElement('div');
        note.textContent = 'Use the same Login credentials as for Server Manager'; 
        note.style.fontSize = '0.75em';
        note.style.color = '#888';
        container.appendChild(note);

        // Insert container into DOM: direkt unter dem ursprünglichen Ban-Button-Block
        if (banButton.parentElement) {
            banButton.parentElement.appendChild(container);
        } else {
            // Fallback
            document.body.appendChild(container);
        }
    }

    // Initial retry loop in case of delayed DOM load
    let attempts = 0;
    const maxAttempts = 20;
    const interval = setInterval(() => {
        replaceBanControls();
        attempts++;
        if (document.getElementById(REPLACEMENT_ID) || attempts >= maxAttempts) {
            clearInterval(interval);
        }
    }, 300);

    // MutationObserver as backup (debounced)
    let last = 0;
    const observer = new MutationObserver(() => {
        const now = Date.now();
        if (now - last < 500) return;
        last = now;
        replaceBanControls();
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
