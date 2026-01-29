// NFL System Stress Test - Game Engine (Real Mode)

let gameState = {
    mode: 'REAL',
    currentScenarioIndex: 0,
    allScenarios: [],
    selectedChoice: null,
    responses: [],
    matches: 0,
    adjacents: 0,
    misreads: 0,
    criticalMisreads: 0,
    totalXP: 0
};

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function initializeGame() {
    // Get all 15 scenarios
    gameState.allScenarios = getAllScenarios();

    // Load first scenario
    loadScenario(0);

    // Set up choice card click handlers
    setupChoiceHandlers();
}

function setupChoiceHandlers() {
    const choiceCards = document.querySelectorAll('.choice-card');

    choiceCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from all cards
            choiceCards.forEach(c => c.classList.remove('selected'));

            // Add selected class to clicked card
            this.classList.add('selected');

            // Store selected choice
            gameState.selectedChoice = this.getAttribute('data-choice');

            // Enable submit button
            document.getElementById('submit-btn').disabled = false;
        });
    });
}

function loadScenario(index) {
    const scenario = gameState.allScenarios[index];
    gameState.currentScenarioIndex = index;

    // Update progress
    updateProgress();

    // Update team header
    const teamHeader = document.getElementById('team-header');
    teamHeader.className = 'team-header active-' + scenario.teamKey.toLowerCase();

    document.getElementById('team-name').textContent = scenario.teamName;
    document.getElementById('team-type').textContent = NFL_SCENARIOS[scenario.teamKey].type;

    // Update scenario info
    document.getElementById('scenario-title').textContent = scenario.title;
    document.getElementById('news-content').textContent = scenario.description;

    // Update stress level
    const stressIcons = getStressIcons(scenario.level);
    document.getElementById('stress-icons').innerHTML = stressIcons;

    // Update health meter based on stress level
    const healthPercentage = 100 - (scenario.level * 20);
    document.getElementById('health-bar').style.width = healthPercentage + '%';

    // Reset selection
    gameState.selectedChoice = null;
    document.querySelectorAll('.choice-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.getElementById('submit-btn').disabled = true;

    // Show scenario screen
    showScreen('scenario-screen');
}

function getStressIcons(level) {
    const icons = {
        1: '⚠️ MINOR',
        2: '⚠️⚠️ MODERATE',
        3: '⚠️⚠️⚠️ SEVERE'
    };
    return icons[level] || '⚠️';
}

function updateProgress() {
    const current = gameState.currentScenarioIndex + 1;
    const total = gameState.allScenarios.length;
    document.getElementById('progress-text').textContent = `${current}/${total}`;
}

function updateScore() {
    document.getElementById('matches-count').textContent = gameState.matches;
    document.getElementById('adjacents-count').textContent = gameState.adjacents;
    document.getElementById('misreads-count').textContent = gameState.misreads;
}

function submitAnswer() {
    if (!gameState.selectedChoice) return;

    const scenario = gameState.allScenarios[gameState.currentScenarioIndex];

    // Evaluate the choice
    const alignment = evaluateAlignment(gameState.selectedChoice, scenario);

    // Update game state
    gameState.responses.push({
        scenario: scenario,
        choice: gameState.selectedChoice,
        alignment: alignment.type,
        xp: alignment.xp
    });

    // Update scores
    if (alignment.type === 'MATCH') {
        gameState.matches++;
    } else if (alignment.type === 'ADJACENT') {
        gameState.adjacents++;
    } else if (alignment.type === 'MISREAD') {
        gameState.misreads++;
        if (alignment.isCritical) {
            gameState.criticalMisreads++;
        }
    }

    gameState.totalXP += alignment.xp;

    updateScore();

    // Show feedback
    showFeedback(alignment, scenario);
}

function showFeedback(alignment, scenario) {
    const feedback = getFeedbackMessage(alignment.type);

    // Update feedback header
    const feedbackHeader = document.getElementById('feedback-header');
    feedbackHeader.className = 'feedback-header ' + feedback.class;

    document.getElementById('feedback-icon').textContent = feedback.icon;
    document.getElementById('feedback-title').textContent = feedback.title;
    document.getElementById('xp-badge').textContent = '+' + alignment.xp + ' XP';

    // Show chosen answer
    const yourAnswerFormat = formatResponseType(gameState.selectedChoice);
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

    // Show feedback screen
    showScreen('feedback-screen');
}

function nextScenario() {
    const nextIndex = gameState.currentScenarioIndex + 1;

    if (nextIndex < gameState.allScenarios.length) {
        // Load next scenario
        loadScenario(nextIndex);
    } else {
        // Show final results
        showFinalResults();
    }
}

function showFinalResults() {
    // Calculate tier and code
    const result = calculateTierAndCode(gameState);

    // Update final score display
    document.getElementById('final-matches').textContent = gameState.matches;
    document.getElementById('final-adjacents').textContent = gameState.adjacents;
    document.getElementById('final-misreads').textContent = gameState.misreads;
    document.getElementById('final-critical').textContent = gameState.criticalMisreads;

    // Show tier or no code section
    if (result.tier !== 'NONE') {
        document.getElementById('tier-section').style.display = 'block';
        document.getElementById('no-code-section').style.display = 'none';

        // Update tier badge
        const tierBadge = document.getElementById('tier-badge');
        const tierIcon = result.tier === 'GOLD' ? '🥇' : result.tier === 'SILVER' ? '🥈' : '🥉';
        tierBadge.textContent = tierIcon + ' ' + result.tierName.toUpperCase();
        tierBadge.className = 'tier-badge ' + result.tier.toLowerCase();

        // Update XP
        document.getElementById('final-xp').textContent = result.xp;

        // Update claim code
        document.getElementById('claim-code').textContent = result.code;

        // Update message
        document.getElementById('tier-message-text').textContent = result.message;
    } else {
        document.getElementById('tier-section').style.display = 'none';
        document.getElementById('no-code-section').style.display = 'block';
    }

    // Show results screen
    showScreen('results-screen');
}

function copyClaimCode() {
    const code = document.getElementById('claim-code').textContent;

    // Copy to clipboard
    navigator.clipboard.writeText(code).then(function() {
        // Show feedback
        const feedback = document.getElementById('copy-feedback');
        feedback.classList.add('show');

        setTimeout(function() {
            feedback.classList.remove('show');
        }, 2000);
    });
}

function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen
    document.getElementById(screenId).classList.add('active');
}

function confirmExit() {
    if (gameState.currentScenarioIndex > 0) {
        return confirm('Are you sure you want to exit? Your progress will be lost.');
    }
    return true;
}
