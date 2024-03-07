document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.textContent = 'Cambia Tema';
    toggleThemeButton.classList.add('toggle-theme');
    document.body.appendChild(toggleThemeButton);

    toggleThemeButton.addEventListener('click', function() {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.setAttribute('data-theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
        }
    });

    // Qui continueremo a gestire il bilancio, il salvadanaio, e così via.
});
