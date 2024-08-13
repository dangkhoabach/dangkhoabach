document.addEventListener("DOMContentLoaded", function() {
    const enBtn = document.getElementById('en-btn');
    const viBtn = document.getElementById('vi-btn');

    function getLanguage() {
        return localStorage.getItem('language') || 'en';
    }

    const savedLanguage = getLanguage();
    switchLanguage(savedLanguage);

    enBtn.addEventListener('click', () => {
        NProgress.start();

        switchLanguage('en');

        NProgress.done();
    });

    viBtn.addEventListener('click', () => {
        NProgress.start();

        switchLanguage('vi');
        
        NProgress.done();
    });

    function switchLanguage(language) {
        const languageButtons = document.querySelectorAll('.language-switcher a');

        languageButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        if (language === 'en') {
            enBtn.classList.add('active');
            viBtn.classList.remove('active');
        } else if (language === 'vi') {
            viBtn.classList.add('active');
            enBtn.classList.remove('active');
        }

        localStorage.setItem('language', language);

        const elements = document.querySelectorAll('[data-en], [data-vi]');
        elements.forEach(element => {
            if (language === 'en') {
                element.textContent = element.getAttribute('data-en');
            } else if (language === 'vi') {
                element.textContent = element.getAttribute('data-vi');
            }
        });
    }
});