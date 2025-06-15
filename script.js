document.addEventListener('DOMContentLoaded', function() {
    // Elementos interactivos
    const surpriseBtn = document.getElementById('surprise-btn');
    const musicBtn = document.getElementById('music-btn');
    const poemBtn = document.getElementById('poem-btn');
    const poemContainer = document.getElementById('poem-container');
    const birthdayAudio = document.getElementById('birthday-audio');
    const familyAudio = document.getElementById('family-audio');
    
    // Efecto sorpresa
    surpriseBtn.addEventListener('click', function() {
        // Cambiar texto y estilo del botón
        surpriseBtn.innerHTML = '¡Te queremos mucho papá! ❤';
        surpriseBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
        
        // Crear confeti
        createConfetti();
        
        // Crear corazones
        createHearts();
        
        // Reproducir audio
        birthdayAudio.play().catch(e => console.log("Audio no pudo reproducirse automáticamente"));
        
        // Animación de agradecimiento
        const thankYou = document.createElement('div');
        thankYou.textContent = 'Gracias por ser nuestro papá';
        thankYou.style.position = 'fixed';
        thankYou.style.top = '50%';
        thankYou.style.left = '50%';
        thankYou.style.transform = 'translate(-50%, -50%)';
        thankYou.style.fontSize = '2.5em';
        thankYou.style.fontFamily = '"Dancing Script", cursive';
        thankYou.style.color = '#ff6b6b';
        thankYou.style.zIndex = '1001';
        thankYou.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
        thankYou.style.animation = 'zoomInOut 3s forwards';
        document.body.appendChild(thankYou);
        
        setTimeout(() => {
            thankYou.remove();
        }, 3000);
    });
    
    // Botón de música
    musicBtn.addEventListener('click', function() {
        if (familyAudio.paused) {
            familyAudio.play();
            musicBtn.innerHTML = '🔊 Música especial';
        } else {
            familyAudio.pause();
            musicBtn.innerHTML = '🎵 Música especial';
        }
    });
    
    // Botón de poema
    poemBtn.addEventListener('click', function() {
        if (poemContainer.style.display === 'block') {
            poemContainer.style.display = 'none';
            poemBtn.innerHTML = '📜 Poema para papá';
        } else {
            poemContainer.style.display = 'block';
            poemBtn.innerHTML = '❌ Cerrar poema';
            poemContainer.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
    
    // Efecto al pasar el ratón sobre las fotos
    const photos = document.querySelectorAll('.photo-frame');
    photos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
        });
        
        photo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        });
    });
    
    // Función para crear confeti
    function createConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff9900'];
        
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = Math.random() * 15 + 5 + 'px';
                confetti.style.height = confetti.style.width;
                confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                confetti.style.animationDelay = Math.random() * 2 + 's';
                
                // Formas aleatorias
                if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '50%';
                } else if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '0';
                } else {
                    confetti.style.borderRadius = '10px';
                }
                
                // Rotación aleatoria
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                
                document.body.appendChild(confetti);
                
                // Eliminar después de la animación
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, i * 30);
        }
    }
    
    // Función para crear corazones
    function createHearts() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart-fall';
                heart.innerHTML = '❤';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.fontSize = Math.random() * 20 + 10 + 'px';
                heart.style.animationDuration = Math.random() * 3 + 2 + 's';
                heart.style.animationDelay = Math.random() * 2 + 's';
                
                document.body.appendChild(heart);
                
                // Eliminar después de la animación
                setTimeout(() => {
                    heart.remove();
                }, 4000);
            }, i * 100);
        }
    }
    
    // Efecto de máquina de escribir para el mensaje
    const messageText = "En este día tan especial queremos recordarte lo importante que eres para nosotros. Eres nuestro pilar, nuestro apoyo y nuestro ejemplo a seguir. Cada día nos enseñas con tu amor y dedicación lo que significa ser una familia unida.";
    let i = 0;
    const speed = 30;
    
    function typeWriter() {
        if (i < messageText.length) {
            document.getElementById("personal-message").textContent += messageText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Iniciar efecto después de 1 segundo
    setTimeout(() => {
        document.getElementById("personal-message").textContent = "";
        typeWriter();
    }, 1000);
    
    // Efecto de nieve (opcional)
    function createSnow() {
        const snow = document.createElement('div');
        snow.className = 'snow';
        snow.style.left = Math.random() * 100 + 'vw';
        snow.style.animationDuration = Math.random() * 5 + 5 + 's';
        snow.style.opacity = Math.random();
        snow.style.width = snow.style.height = Math.random() * 10 + 5 + 'px';
        document.body.appendChild(snow);
        
        setTimeout(() => {
            snow.remove();
        }, 10000);
    }
    
    // Crear nieve cada cierto tiempo
    setInterval(createSnow, 300);
});
