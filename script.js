document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const surpriseBtn = document.getElementById('surprise-btn');
    const poemBtn = document.getElementById('poem-btn');
    const poemContainer = document.getElementById('poem-container');
    
    // 1. Botón de Sorpresa (Confeti)
    surpriseBtn.addEventListener('click', function() {
        surpriseBtn.textContent = '¡Te queremos mucho! ❤';
        createConfetti();
    });
    
    // 2. Botón de Poema - VERSIÓN CORREGIDA Y TESTEADA
    poemBtn.addEventListener('click', function() {
        if (poemContainer.classList.contains('hidden')) {
            // Mostrar
            poemContainer.classList.remove('hidden');
            poemContainer.style.display = 'block';
            poemBtn.textContent = '❌ Cerrar poema';
            poemContainer.classList.add('animate__fadeIn');
        } else {
            // Ocultar
            poemContainer.classList.add('hidden');
            poemContainer.style.display = 'none';
            poemBtn.textContent = '📜 Poema para papá';
        }
    });
    
    // Función de Confeti (opcional)
    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }
    }
});
