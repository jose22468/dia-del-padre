document.addEventListener('DOMContentLoaded', function() {
    // Elementos interactivos
    const surpriseBtn = document.getElementById('surprise-btn');
    const poemBtn = document.getElementById('poem-btn');
    const poemContainer = document.getElementById('poem-container');
    
    // Efecto sorpresa MEJORADO
    surpriseBtn.addEventListener('click', function() {
        // Cambiar texto y estilo del botón
        surpriseBtn.innerHTML = '¡Te queremos mucho papá! ❤️';
        surpriseBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
        surpriseBtn.classList.remove('animate__pulse');
        
        // Crear confeti MEJORADO
        createConfetti();
        
        // Crear corazones MEJORADO
        createHearts();
        
        // Mensaje flotante
        showFloatingMessage();
    });
    
    // Botón de poema MEJORADO
    poemBtn.addEventListener('click', function() {
        if (poemContainer.style.display === 'block') {
            poemContainer.style.display = 'none';
            poemBtn.innerHTML = '📜 Poema para papá';
        } else {
            poemContainer.style.display = 'block';
            poemBtn.innerHTML = '❌ Cerrar poema';
            poemContainer.classList.add('animate__fadeIn');
        }
    });
    
    // Función para crear confeti MEJORADO
    function createConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff9900'];
        const shapes = ['circle', 'square', 'triangle'];
        
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                
                // Posición aleatoria
                confetti.style.left = Math.random() * 100 + 'vw';
                
                // Color aleatorio
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                // Tamaño aleatorio
                const size = Math.random() * 15 + 5;
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';
                
                // Forma aleatoria
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                if (shape === 'circle') {
                    confetti.style.borderRadius = '50%';
                } else if (shape === 'triangle') {
                    confetti.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
                    confetti.style.backgroundColor = 'transparent';
                    confetti.style.borderLeft = size/2 + 'px solid transparent';
                    confetti.style.borderRight = size/2 + 'px solid transparent';
                    confetti.style.borderBottom = size + 'px solid ' + colors[Math.floor(Math.random() * colors.length)];
                }
                
                // Animación personalizada
                confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                confetti.style.animationDelay = Math.random() * 2 + 's';
                
                document.body.appendChild(confetti);
                
                // Eliminar después de la animación
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, i * 30);
        }
    }
    
    // Función para crear corazones MEJORADO
    function createHearts() {
        const heartColors = ['#ff6b6b', '#ff8e8e', '#ffb3b3', '#ffd8d8'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart-fall';
                heart.innerHTML = '❤️';
                
                // Posición aleatoria
                heart.style.left = Math.random() * 100 + 'vw';
                
                // Tamaño aleatorio
                heart.style.fontSize = Math.random() * 20 + 10 + 'px';
                
                // Color aleatorio
                heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
                
                // Animación personalizada
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
    
    // Función para mostrar mensaje flotante
    function showFloatingMessage() {
        const messages = [
            "¡Eres el mejor papá!",
            "Te queremos mucho",
            "Feliz Día del Padre",
            "Gracias por todo"
        ];
        
        const message = document.createElement('div');
        message.textContent = messages[Math.floor(Math.random() * messages.length)];
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.fontSize = '2.5em';
        message.style.fontFamily = '"Dancing Script", cursive';
        message.style.color = '#ff6b6b';
        message.style.zIndex = '1001';
        message.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
        message.style.animation = 'zoomInOut 3s forwards';
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
    
    // Efecto de máquina de escribir MEJORADO
    const messageText = "En este día tan especial queremos recordarte lo importante que eres para nosotros. Eres nuestro pilar, nuestro apoyo y nuestro ejemplo a seguir. Cada día nos enseñas con tu amor y dedicación lo que significa ser una familia unida.";
    let i = 0;
    const speed = 30;
    const messageElement = document.getElementById("personal-message");
    
    function typeWriter() {
        if (i < messageText.length) {
            // Añadir caracter con efecto aleatorio
            const span = document.createElement('span');
            span.textContent = messageText.charAt(i);
            span.style.opacity = '0';
            span.style.animation = `fadeIn 0.${Math.floor(Math.random() * 5 + 1)}s forwards`;
            messageElement.appendChild(span);
            
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Iniciar efecto después de 1 segundo
    setTimeout(() => {
        messageElement.textContent = "";
        typeWriter();
    }, 1000);
    
    // Efecto hover para fotos MEJORADO
    const photos = document.querySelectorAll('.photo-frame');
    photos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateY(10deg) rotateX(5deg)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
        });
        
        photo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0) rotateX(0)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        });
    });
});
