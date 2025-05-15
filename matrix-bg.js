// Configuração do efeito Matrix no background
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');

    // Ajusta o tamanho do canvas para a janela
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Caracteres para o efeito Matrix
    const letters = '01';
    const chars = letters.split('');

    // Configura as colunas
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Configura as gotas
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }

    // Função de desenho
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    // Inicia a animação
    setInterval(draw, 50);
});