document.addEventListener('DOMContentLoaded', function() {
    // Botones
    const surpriseBtn = document.getElementById('surprise-btn');
    const poemBtn = document.getElementById('poem-btn');
    const poemContainer = document.getElementById('poem-container');
    
    // Botón de sorpresa
    surpriseBtn.addEventListener('click', function() {
        // Cambiar texto del botón
        surpriseBtn.textContent = '¡Te queremos mucho! ❤';
        
        // Crear confeti
        createConfetti();
        
        // Crear corazones
        createHearts();
    });
    
    // Botón de poema
    poemBtn.addEventListener('click', function() {
        if (poemContainer.style.display === 'block') {
            poemContainer.style.display = 'none';
            poemBtn.textContent = '📜 Poema para papá';
        } else {
            poemContainer.style.display = 'block';
            poemBtn.textContent = '❌ Cerrar poema';
        }
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
            
            // Formas aleatorias
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }
            
            document.body.appendChild(confetti);
            
            // Eliminar después de la animación
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    // Función para crear corazones
    function createHearts() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart-fall';
                heart.innerHTML = '❤';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.fontSize = Math.random() * 20 + 10 + 'px';
                heart.style.animationDuration = Math.random() * 3 + 2 + 's';
                
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 4000);
            }, i * 100);
        }
    }
    
    // Efecto de escritura automática
    const messageText = "Eres nuestro pilar, nuestro apoyo y nuestro mejor ejemplo. Gracias por todo tu amor.";
    let i = 0;
    const speed = 40;
    
    function typeWriter() {
        if (i < messageText.length) {
            document.getElementById("personal-message").textContent += messageText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Iniciar efecto
    setTimeout(typeWriter, 1000);
});
