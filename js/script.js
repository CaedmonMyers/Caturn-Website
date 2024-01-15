document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.noBgTitle');

    const setFontSize = (span, isHover) => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 1000) {
            // For smaller windows
            span.style.fontSize = isHover ? '9vw' : '6vw'; // Original sizes
        } else {
            // For larger windows
            span.style.fontSize = isHover ? '55px' : '40px'; // Adjust sizes as needed
        }
    };

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

            // Initial font size setting based on window width
            setFontSize(span, false);

            link.appendChild(span);
        });

        link.addEventListener('mouseover', () => {
            Array.from(link.children).forEach((span, i) => {
                setTimeout(() => {
                    span.style.textShadow = '5px 5px 15px #9356F7';
                    setFontSize(span, true);
                }, i * 70);
            });
        });

        link.addEventListener('mouseout', () => {
            Array.from(link.children).forEach((span, i) => {
                setTimeout(() => {
                    span.style.textShadow = 'none';
                    setFontSize(span, false);
                }, i * 70);
            });
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        links.forEach(link => {
            Array.from(link.children).forEach(span => {
                setFontSize(span, false);
            });
        });
    });
});
