// Inline link animations
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.noBgTitle');

    links.forEach(link => {
        const text = link.textContent;
        link.innerHTML = '';

        Array.from(text).forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.fontFamily = 'inherit';
            span.style.transition = 'inherit';
            span.style.cursor = 'pointer';
            span.style.textShadow = 'none';
            // Use vw unit for fontSize
            span.style.fontSize = '6vw'; // Adjust this value as needed
            link.appendChild(span);
        });

        link.addEventListener('mouseover', () => {
            Array.from(link.children).forEach((span, i) => {
                setTimeout(() => {
                    span.style.textShadow = '5px 5px 15px #9356F7';
                    span.style.fontSize = '9vw';
                    span.style.lineHeight = '50px'; // Adjust to match container height
                }, i * 70);
            });
        });

        link.addEventListener('mouseout', () => {
            Array.from(link.children).forEach((span, i) => {
                setTimeout(() => {
                    span.style.textShadow = 'none';
                    span.style.fontSize = '6vw';
                    span.style.lineHeight = '50px'; // Adjust to match container height
                }, i * 70);
            });
        });
    });
});
