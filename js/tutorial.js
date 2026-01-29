// NFL System Stress Test - Tutorial Mode

let tutorialState = {
    mode: 'TUTORIAL',
    currentScenarioIndex: 0,
    scenarios: [],
    selectedChoice: null
};

// Initialize tutorial when page loads
document.addEventListener('DOMContentLoaded', function() {
    tutorialState.scenarios = getTutorialScenarios();
});

function startTutorial() {
    // Hide intro, show first pre-explanation
    showScreen('pre-explanation');
    loadPreExplanation(0);
}

function loadPreExplanation(index) {
    const scenario = tutorialState.scenarios[index];
    tutorialState.currentScenarioIndex = index;

    // Update progress
    const current = index + 1;
    const total = tutorialState.scenarios.length;
    document.getElementById('progress-text').textContent = `${current}/${total}`;

    // Update scenario info
    document.getElementById('scenario-title').textContent = scenario.title;

    // Update stress level badge
    const stressLevelBadge = document.getElementById('stress-level-badge');
    stressLevelBadge.textContent = `Level ${scenario.level}`;
    stressLevelBadge.className = 'stress-level level-' + scenario.level;

    // Update description
    document.getElementById('scenario-description').textContent = scenario.description;

    // Show correct answer preview
    const correctAnswerFormat = formatResponseType(scenario.actual);
    const correctAnswerPreview = document.getElementById('correct-answer-preview');
    correctAnswerPreview.textContent = correctAnswerFormat.text;
    correctAnswerPreview.className = 'answer-badge ' + correctAnswerFormat.class;

    // Show explanation
    document.getElementById('explanation-preview').textContent = scenario.explanation;
}

function showScenario() {
    const scenario = tutorialState.scenarios[tutorialState.currentScenarioIndex];

    // Update team header
    const teamHeader = document.getElementById('team-header');
    teamHeader.className = 'team-header active-chiefs';

    document.getElementById('team-name').textContent = scenario.teamName;
    document.getElementById('team-type').textContent = NFL_SCENARIOS['Chiefs'].type;

    // Update news content
    document.getElementById('news-content').textContent = scenario.description;

    // Update stress level
    const stressIcons = getStressIcons(scenario.level);
    document.getElementById('stress-icons').innerHTML = stressIcons;

    // Update health meter
    const healthPercentage = 100 - (scenario.level * 20);
    document.getElementById('health-bar').style.width = healthPercentage + '%';

    // Reset selection
    tutorialState.selectedChoice = null;
    document.querySelectorAll('.choice-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.getElementById('submit-btn').disabled = true;

    // Set up choice handlers
    setupTutorialChoiceHandlers();

    // Show scenario screen
    showScreen('scenario-screen');
}

function setupTutorialChoiceHandlers() {
    const choiceCards = document.querySelectorAll('.choice-card');

    // Remove old listeners by cloning
    choiceCards.forEach(card => {
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
    });

    // Add new listeners
    const newChoiceCards = document.querySelectorAll('.choice-card');
    newChoiceCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from all cards
            newChoiceCards.forEach(c => c.classList.remove('selected'));

            // Add selected class to clicked card
            this.classList.add('selected');

            // Store selected choice
            tutorialState.selectedChoice = this.getAttribute('data-choice');

            // Enable submit button
            document.getElementById('submit-btn').disabled = false;
        });
    });
}

function getStressIcons(level) {
    const icons = {
        1: '⚠️ MINOR',
        2: '⚠️⚠️ MODERATE',
        3: '⚠️⚠️⚠️ SEVERE'
    };
    return icons[level] || '⚠️';
}

function submitAnswer() {
    if (!tutorialState.selectedChoice) return;

    const scenario = tutorialState.scenarios[tutorialState.currentScenarioIndex];

    // Evaluate the choice
    const alignment = evaluateAlignment(tutorialState.selectedChoice, scenario);

    // Show feedback
    showTutorialFeedback(alignment, scenario);
}

function showTutorialFeedback(alignment, scenario) {
    const feedback = getFeedbackMessage(alignment.type);

    // Update feedback header
    const feedbackHeader = document.getElementById('feedback-header');
    feedbackHeader.className = 'feedback-header ' + feedback.class;

    document.getElementById('feedback-icon').textContent = feedback.icon;
    document.getElementById('feedback-title').textContent = feedback.title;

    // Show chosen answer
    const yourAnswerFormat = formatResponseType(tutorialState.selectedChoice);
    const yourAnswerDisplay = document.getElementById('your-answer-display');
    yourAnswerDisplay.textContent = yourAnswerFormat.text;
    yourAnswerDisplay.className = 'answer-badge ' + yourAnswerFormat.class;

    // Show correct answer
    const correctAnswerFormat = formatResponseType(scenario.actual);
    const correctAnswerDisplay = document.getElementById('correct-answer-display');
    correctAnswerDisplay.textContent = correctAnswerFormat.text;
    correctAnswerDisplay.className = 'answer-badge ' + correctAnswerFormat.class;

    // Show explanation
    document.getElementById('feedback-explanation').textContent = scenario.explanation;

    // Update next button text
    const nextIndex = tutorialState.currentScenarioIndex + 1;
    if (nextIndex < tutorialState.scenarios.length) {
        document.getElementById('next-btn-text').textContent = 'Continue to Next Scenario';
    } else {
        document.getElementById('next-btn-text').textContent = 'Complete Tutorial';
    }

    // Show feedback screen
    showScreen('feedback-screen');
}

function nextScenario() {
    const nextIndex = tutorialState.currentScenarioIndex + 1;

    if (nextIndex < tutorialState.scenarios.length) {
        // Load next pre-explanation
        showScreen('pre-explanation');
        loadPreExplanation(nextIndex);
    } else {
        // Show complete screen
        showScreen('complete-screen');
    }
}

function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen
    document.getElementById(screenId).classList.add('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Formatting helper (uses same function from scoring.js)
function formatResponseType(responseType) {
    const formatted = {
        'System Needs This': {
            text: 'System Needs This',
            class: 'needs',
            icon: '🟢'
        },
        'System Absorbs This': {
            text: 'System Absorbs This',
            class: 'absorbs',
            icon: '🔵'
        },
        'System is Strained': {
            text: 'System is Strained',
            class: 'strained',
            icon: '🟡'
        },
        'System Breaks': {
            text: 'System Breaks',
            class: 'breaks',
            icon: '🔴'
        }
    };

    return formatted[responseType] || formatted['System Absorbs This'];
}
