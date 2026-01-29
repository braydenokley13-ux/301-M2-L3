// NFL System Stress Test - UI Controller
// Additional UI utilities and animations

// Smooth scroll to top when changing screens
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add animation when scenario loads
function animateScenarioLoad() {
    const card = document.querySelector('.scenario-card');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50);
    }
}

// Pulse animation for submit button
function pulseSubmitButton() {
    const btn = document.getElementById('submit-btn');
    if (btn && !btn.disabled) {
        btn.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            btn.style.animation = '';
        }, 500);
    }
}

// Add choice card hover effects enhancement
document.addEventListener('DOMContentLoaded', function() {
    const choiceCards = document.querySelectorAll('.choice-card');

    choiceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('selected')) {
                this.style.transform = 'translateY(-4px)';
            }
        });

        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('selected')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Number keys 1-4 to select choices
    if (e.key >= '1' && e.key <= '4') {
        const choices = document.querySelectorAll('.choice-card');
        const index = parseInt(e.key) - 1;

        if (choices[index]) {
            choices[index].click();
        }
    }

    // Enter to submit
    if (e.key === 'Enter') {
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn && !submitBtn.disabled) {
            submitBtn.click();
        }
    }
});

// Add CSS for pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .screen.active {
        animation: fadeIn 0.3s ease;
    }
`;
document.head.appendChild(style);
