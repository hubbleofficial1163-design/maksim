// Плавное появление элементов при скролле
document.addEventListener('DOMContentLoaded', function() {
    
    // Настройка наблюдателя за появлением секций
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за элементами секции с инициалами
    const initialsElements = document.querySelectorAll(
        '.initials-container, .venue-image-container, .venue-address, .map-button'
    );
    
    initialsElements.forEach(el => {
        observer.observe(el);
    });
    
    // Наблюдаем за элементами секции с таймингом
    const timelineElements = document.querySelectorAll(
        '.timeline-icons, .timeline-divider, .timeline-text'
    );
    
    timelineElements.forEach(el => {
        observer.observe(el);
    });
    
    // Наблюдаем за элементами секции с палитрой
    const paletteElements = document.querySelectorAll(
        '.palette-images, .palette-text'
    );
    
    paletteElements.forEach(el => {
        observer.observe(el);
    });
    
    // Наблюдаем за элементами секции с подарками
    const giftElements = document.querySelectorAll(
        '.gift-image, .gift-text'
    );
    
    giftElements.forEach(el => {
        observer.observe(el);
    });
    
    // Наблюдаем за секцией с таймером
    const timerSection = document.querySelector('.timer-section');
    if (timerSection) {
        observer.observe(timerSection);
    }
    
    // Наблюдаем за элементами секции с анкетой
    const rsvpElements = document.querySelectorAll(
        '.rsvp-title-image, .rsvp-text, .rsvp-subtitle-image, .rsvp-form, .submit-button'
    );
    
    rsvpElements.forEach(el => {
        observer.observe(el);
    });
    
    // Таймер обратного отсчета
    function updateTimer() {
        const weddingDate = new Date('July 18, 2026 16:00:00').getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
    }
    
    // Запускаем таймер
    updateTimer();
    setInterval(updateTimer, 1000);
    
    console.log('Свадебное приглашение Maksim & Daria загружено');
});
