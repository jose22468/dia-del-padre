document.addEventListener('DOMContentLoaded', function() {
    // Elementos interactivos
    const surpriseBtn = document.getElementById('surprise-btn');
    const musicBtn = document.getElementById('music-btn');
    const poemBtn = document.getElementById('poem-btn');
    const poemContainer = document.getElementById('poem-container');
    const birthdayAudio = document.getElementById('birthday-audio');
    const familyAudio = document.getElementById('family-audio');
    
    // Configurar audio para que se pueda reproducir después de interacción
    document.body.addEventListener('click', function() {
        birthdayAudio.volume = 0.3;
        familyAudio.volume = 0.5;
    }, { once: true });
    
    // Efecto sorpresa - CORREGIDO
    surpriseBtn.addEventListener('click', function() {
        // Cambiar texto y estilo del botón
        surpriseBtn.innerHTML = '¡Te queremos mucho papá! ❤';
        surpriseBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
        
        // Crear confeti
        createConfetti();
        
        // Crear corazones
        createHearts();
        
        // Reproducir audio
        playAudio(birthdayAudio);
        
        // Animación de agradecimiento
        showThankYouMessage();
    });
    
    // Botón de música - CORREGIDO
    let isMusicPlaying = false;
    musicBtn.addEventListener('click', function() {
        if (isMusicPlaying) {
            familyAudio.pause();
            musicBtn.innerHTML = '🎵 Música especial';
        } else {
            playAudio(familyAudio);
            musicBtn.innerHTML = '🔊 Reproduciendo...';
        }
        isMusicPlaying = !isMusicPlaying;
    });
    
    // Botón de poema - CORREGIDO
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
    
    // Función para reproducir audio
    function playAudio(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play().catch(e => {
            console.log("El audio no pudo reproducirse automáticamente");
            // Mostrar mensaje para el usuario
            alert("Por favor haz clic en cualquier parte de la página primero para habilitar el audio");
        });
    }
    
    // Función para mostrar mensaje de agradecimiento
    function showThankYouMessage() {
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
    }
    
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
                
                if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '50%';
                } else if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '0';
                } else {
                    confetti.style.borderRadius = '10px';
                }
                
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                document.body.appendChild(confetti);
                
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
    
    // Efecto hover para fotos
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
});
