document.addEventListener('DOMContentLoaded', function() {
    function updateDateTime() {
        const currentDate = new Date().toLocaleDateString('pt-BR', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
        const currentTime = new Date().toLocaleTimeString('pt-BR', {
            hour: '2-digit', minute: '2-digit', second: '2-digit'
        });
        
        document.getElementById('currentDate').innerText = currentDate;
        document.getElementById('currentTime').innerText = currentTime;
        document.getElementById('overlayDateTime').innerHTML = `${currentDate} <br> ${currentTime}`;
    }

    document.getElementById('punchButton').addEventListener('click', function() {
        const overlay = document.getElementById('overlay');
        const overlayContent = document.getElementById('overlayContent');

        overlay.classList.add('visible');
        overlayContent.classList.add('visible');
    });

    document.getElementById('closeButton').addEventListener('click', function() {
        closeOverlay();
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeOverlay();
        }
    });

    function closeOverlay() {
        const overlay = document.getElementById('overlay');
        const overlayContent = document.getElementById('overlayContent');

        overlay.classList.remove('visible');
        overlayContent.classList.remove('visible');
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);  // Atualiza o horário a cada segundo

updateDateTime();
    setInterval(updateDateTime, 1000);
});
