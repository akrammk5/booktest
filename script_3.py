
# Create main.js with all interactive features
main_js = '''// Main JavaScript with Snow Effect, Countdown Timer, and Interactive Features

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    initSnowEffect();
    initCountdownTimer();
    initScrollEffects();
    initExitIntent();
});

// Snow Effect
function initSnowEffect() {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return;
    
    const snowflakes = ['❄', '❅', '❆'];
    for (let i = 0; i < 50; i++) {
        createSnowflake(snowContainer, snowflakes);
    }
}

function createSnowflake(container, snowflakes) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    
    const size = Math.random() * 15 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 10;
    
    snowflake.style.fontSize = size + 'px';
    snowflake.style.left = left + '%';
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.animationDelay = delay + 's';
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;
    
    container.appendChild(snowflake);
    
    setTimeout(() => {
        if (snowflake.parentNode) {
            snowflake.remove();
            createSnowflake(container, snowflakes);
        }
    }, (duration + delay) * 1000);
}

// Countdown Timer
function initCountdownTimer() {
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        if (distance < 0) {
            // Reset timer for next 24 hours
            location.reload();
            return;
        }
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update all timer displays
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        
        // Update header timer
        const headerTimer = document.getElementById('headerTimer');
        if (headerTimer) {
            headerTimer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
        
        // Update final timer
        const finalTimer = document.getElementById('finalTimer');
        if (finalTimer) {
            finalTimer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Scroll Effects
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Exit Intent Popup
function initExitIntent() {
    let exitIntentTriggered = false;
    
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 0 && !exitIntentTriggered) {
            exitIntentTriggered = true;
            showExitPopup();
        }
    });
}

function showExitPopup() {
    const popup = document.getElementById('exitPopup');
    if (popup) {
        popup.style.display = 'flex';
    }
}

function closeExitPopup() {
    const popup = document.getElementById('exitPopup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});'''

with open('wintering-well-website/js/main.js', 'w', encoding='utf-8') as f:
    f.write(main_js)

print("✅ Created main.js with all interactive features")
