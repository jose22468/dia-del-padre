document.addEventListener('DOMContentLoaded', function() {
    // Personalización - puedes cambiar estos valores
    const personalMessage = "Eres mi héroe, mi guía y mi mejor ejemplo. Gracias por todo tu amor y apoyo incondicional.";
    const yourName = "Tu hijo/a";
    const photoUrl = ""; // Aquí puedes poner la URL de una foto de tu padre
    
    // Configurar los elementos personalizados
    document.getElementById('personal-message').textContent = personalMessage;
    document.getElementById('your-name').textContent = yourName;
    
    if (photoUrl) {
        document.getElementById('father-photo').src = photoUrl;
    } else {
        document.getElementById('father-photo').alt = "Foto de papá (aquí iría tu foto)";
        document.getElementById('father-photo').style.backgroundColor = "#f0f0f0";
    }
    
    // Botón de sorpresa
    const surpriseBtn = document.getElementById('surprise-btn');
    surpriseBtn.addEventListener('click', function() {
        createConfetti();
        surpriseBtn.textContent = "¡Feliz Día del Padre!";
        surpriseBtn.style.backgroundColor = "#ff6b6b";
        
        // Reproducir sonido (opcional)
        const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-happy-birthday-to-you-880.mp3');
        audio.play().catch(e => console.log("No se pudo reproducir el audio"));
    });
    
    // Función para crear confeti
    function createConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            document.body.appendChild(confetti);
            
            // Eliminar el confeti después de la animación
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
});
