document.addEventListener('DOMContentLoaded', function() {
    // Elementos interactivos
    const surpriseBtn = document.getElementById('surprise-btn');
    const musicBtn = document.getElementById('music-btn');
    const poemBtn = document.getElementById('poem-btn');
    const poemContainer = document.getElementById('poem-container');
    const birthdayAudio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-happy-birthday-to-you-880.mp3');
    const familyAudio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3');
    
    // Configurar audios
    birthdayAudio.volume = 0.5;
    familyAudio.volume = 0.5;
    birthdayAudio.preload = 'auto';
    familyAudio.preload = 'auto';
    
    // Variable para controlar el estado de la música
    let isMusicPlaying = false;
    
    // Habilitar audio con el primer clic en cualquier parte de la página
    const enableAudio = () => {
        document.body.removeEventListener('click', enableAudio);
        // Reproducir y pausar inmediatamente para "desbloquear"
        birthdayAudio.play().then(() => {
            birthdayAudio.pause();
            birthdayAudio.currentTime = 0;
        }).catch(e => console.log("Audio desbloqueado"));
        
        familyAudio.play().then(() => {
            familyAudio.pause();
            familyAudio.currentTime = 0;
        }).catch(e => console.log("Audio desbloqueado"));
    };
    
    document.body.addEventListener('click', enableAudio);
    
    // Efecto sorpresa
    surpriseBtn.addEventListener('click', function() {
        surpriseBtn.innerHTML = '¡Te queremos mucho papá! ❤';
        surpriseBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
        
        createConfetti();
        createHearts();
        
        // Reproducir audio con manejo de errores
        playAudio(birthdayAudio, '🎵 Audio de felicitación');
    });
    
    // Botón de música
    musicBtn.addEventListener('click', function() {
        if (isMusicPlaying) {
            familyAudio.pause();
            musicBtn.innerHTML = '🎵 Música especial';
        } else {
            playAudio(familyAudio, '🎵 Música familiar');
            musicBtn.innerHTML = '🔊 Reproduciendo...';
        }
        isMusicPlaying = !isMusicPlaying;
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
    
    // Función mejorada para reproducir audio
    function playAudio(audioElement, successMsg = '') {
        audioElement.currentTime = 0;
        audioElement.play()
            .then(() => {
                if (successMsg) console.log(successMsg + " reproducido");
            })
            .catch(e => {
                console.error("Error al reproducir:", e);
                // Mostrar instrucciones al usuario
                alert("Para escuchar el audio:\n1. Haz clic primero en cualquier parte de la página\n2. Vuelve a hacer clic en el botón");
            });
    }
    
    // Resto de tus funciones (createConfetti, createHearts, typeWriter, etc...)
    // ... [mantén el resto de tus funciones igual]
    
    // Efecto de máquina de escribir
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
    
    setTimeout(() => {
        document.getElementById("personal-message").textContent = "";
        typeWriter();
    }, 1000);
});
