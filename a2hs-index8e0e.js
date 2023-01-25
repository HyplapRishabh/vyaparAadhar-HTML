// Register service worker to control making site work offline
if ('serviceWorker' in navigator && (window.innerWidth < 767)) {
    navigator.serviceWorker
        .register('/a2hs-sw.js')
        .then(() => { console.log('Service Worker Registered'); });
} else {
    if (document.querySelector(".add-to-home") != null) {
        document.querySelector(".add-to-home").remove();
    }
}

// Code to handle install prompt on desktop

let deferredPrompt;
const a2hSection = document.querySelector('.add-to-home');
if (a2hSection != null) {
    a2hSection.style.display = 'none';
}

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen


    const addBtnH2 = document.querySelector('.add-to-home h2');

    if (a2hSection != null && addBtnH2 != null) {
        setTimeout(function () {
            a2hSection.style.display = 'flex';
            
            addBtnH2.addEventListener('click', () => {
                // hide our user interface that shows our A2HS button
                a2hSection.style.display = 'none';
                // Show the prompt
                deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    deferredPrompt = null;
                });
            });

        }, 15 * 1000);
    }
});
