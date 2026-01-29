// NFL System Stress Test - Scoring & Claim Code Logic

// Evaluate student's choice against the actual response
function evaluateAlignment(choice, scenario) {
    const actual = scenario.actual;
    const allowed = scenario.allowed || [actual];
    const adjacent = scenario.adjacent;
    const isCritical = scenario.isCritical || false;

    // Perfect match
    if (allowed.includes(choice)) {
        return {
            type: 'MATCH',
            xp: 60,
            isCritical: false
        };
    }

    // Adjacent answer (close but not quite right)
    if (adjacent && choice === adjacent) {
        return {
            type: 'ADJACENT',
            xp: 30,
            isCritical: false
        };
    }

    // Misread (wrong answer)
    return {
        type: 'MISREAD',
        xp: 0,
        isCritical: isCritical
    };
}

// Calculate final tier and claim code
function calculateTierAndCode(gameState) {
    const { matches, adjacents, misreads, criticalMisreads } = gameState;

    // Critical misread cap - if you miss 2+ critical scenarios, max out at Bronze
    if (criticalMisreads >= 2) {
        return {
            tier: 'BRONZE',
            tierName: 'Bronze',
            xp: 100,
            code: CLAIM_CODES.BRONZE,
            message: 'You recognized some patterns but missed critical breaking points. Review the scenarios where systems break versus strain.'
        };
    }

    // Gold tier: 9+ perfect matches, 0 critical misreads
    if (matches >= 9 && criticalMisreads === 0) {
        return {
            tier: 'GOLD',
            tierName: 'Gold',
            xp: 200,
            code: CLAIM_CODES.GOLD,
            message: 'You correctly diagnosed how NFL organizations respond under pressure. You identified breaking points and recognized which systems thrive on volatility.'
        };
    }

    // Silver tier: 9+ (matches + adjacents), ≤1 critical misread
    if ((matches + adjacents) >= 9 && criticalMisreads <= 1) {
        return {
            tier: 'SILVER',
            tierName: 'Silver',
            xp: 150,
            code: CLAIM_CODES.SILVER,
            message: 'Strong intuition for system responses with some structural misreads. You understand the framework but occasionally confuse adjacent response types.'
        };
    }

    // Bronze tier: 6+ (matches + adjacents)
    if ((matches + adjacents) >= 6) {
        return {
            tier: 'BRONZE',
            tierName: 'Bronze',
            xp: 100,
            code: CLAIM_CODES.BRONZE,
            message: 'You identified some correct responses and are beginning to recognize system stress patterns. Review the explanations to strengthen your understanding.'
        };
    }

    // No code earned
    return {
        tier: 'NONE',
        tierName: null,
        xp: 0,
        code: null,
        message: 'Review system stress patterns and try again to earn a claim code. Focus on understanding the four response types and how they apply to different organizational structures.'
    };
}

// Get feedback message based on alignment type
function getFeedbackMessage(alignmentType) {
    const messages = {
        'MATCH': {
            title: 'MATCH - Correct Assessment',
            icon: '✅',
            class: 'match'
        },
        'ADJACENT': {
            title: 'ADJACENT - Close Call',
            icon: '⚠️',
            class: 'adjacent'
        },
        'MISREAD': {
            title: 'MISREAD - Incorrect',
            icon: '❌',
            class: 'misread'
        }
    };

    return messages[alignmentType] || messages['MISREAD'];
}

// Format response type for display
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
