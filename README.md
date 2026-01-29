# 🏈 NFL System Stress Test

**BOW Sports Capital - Track 301, Module 2, Lesson 3**

An interactive educational game that evaluates how 5 real NFL organizations respond when volatility hits—injuries, cap crises, coaching drama, media storms. Students predict whether each system bends, breaks, or thrives under stress.

## 🎮 Game Overview

### Core Concept: "Front Office Under Pressure"

Students assess organizational resilience across 5 NFL teams with distinct system profiles:

- **Kansas City Chiefs** - Adaptive, Star-Centric
- **Cleveland Browns** - Fragile, Media-Reactive
- **New England Patriots** - Rigid, Process-Driven
- **Green Bay Packers** - Community-Owned, Stable
- **Baltimore Ravens** - Analytical, Flexible

Each team has 3 stress scenarios (15 total), ranging from minor disruptions to catastrophic failures.

## 🎯 Game Modes

### Tutorial Mode
- Practice with Kansas City Chiefs (3 scenarios)
- See correct answers BEFORE responding
- Learn the framework in a safe environment
- No scoring or claim codes

### Real Mode
- All 5 teams, 15 scenarios
- No hints, no redos
- Scored based on alignment (MATCH/ADJACENT/MISREAD)
- Earn tier-based claim codes (Bronze/Silver/Gold)

## 🏆 Scoring System

### Response Types
- **System Needs This** 🟢 - Stress drives necessary growth
- **System Absorbs This** 🔵 - Business as usual, no strain
- **System is Strained** 🟡 - Survives at the edge of capability
- **System Breaks** 🔴 - System cannot function

### Alignment Types
- **MATCH** (+60 XP) - Correct assessment
- **ADJACENT** (+30 XP) - Close but not quite right
- **MISREAD** (+0 XP) - Incorrect assessment

### Claim Code Tiers

#### 🥇 Gold Tier
- Requirements: 9+ matches, 0 critical misreads
- Code: `L3-301-M2-GOLD-PRESSURE`
- XP: 200

#### 🥈 Silver Tier
- Requirements: 9+ (matches + adjacents), ≤1 critical misread
- Code: `L3-301-M2-SILVER-ANALYST`
- XP: 150

#### 🥉 Bronze Tier
- Requirements: 6+ (matches + adjacents)
- Code: `L3-301-M2-BRONZE-SYSTEMS`
- XP: 100

## 📁 Project Structure

```
301-M2-L3/
├── index.html              # Landing page with mode selection
├── tutorial.html           # Tutorial mode gameplay
├── game.html              # Real mode gameplay
├── css/
│   ├── game.css           # Main styles (mobile-first)
│   └── nfl-theme.css      # NFL team-specific theming
├── js/
│   ├── nfl-scenarios.js   # Scenario database (15 scenarios)
│   ├── scoring.js         # Scoring & claim code logic
│   ├── game-engine.js     # Real mode game logic
│   ├── tutorial.js        # Tutorial mode logic
│   └── ui-controller.js   # UI utilities & animations
└── assets/
    └── logos/             # Team logos (optional)
```

## 🚀 Features

### Mobile-First Responsive Design
- Optimized for mobile devices (< 640px)
- Tablet layout (640-1024px)
- Desktop layout (> 1024px)

### Interactive Elements
- Click or tap choice cards to select
- Keyboard navigation support (1-4 keys, Enter to submit)
- Smooth animations and transitions
- Real-time health meter updates based on stress level

### NFL-Themed Visuals
- Team-specific color schemes
- Stress level indicators (⚠️ Minor, ⚠️⚠️ Moderate, ⚠️⚠️⚠️ Severe)
- Breaking news banners
- System health meters

### Accessibility
- Clear visual feedback for all interactions
- High contrast text and colors
- Keyboard navigation support
- Responsive design for all screen sizes

## 🎓 Learning Objectives

Students will:
1. Understand how organizational structure affects stress response
2. Recognize breaking points vs. growth opportunities
3. Distinguish between systems that absorb, strain, need, or break under pressure
4. Apply systems thinking to real-world sports management scenarios

## 🔧 Technical Details

### No Dependencies
- Pure HTML, CSS, JavaScript
- No frameworks or libraries required
- Works on GitHub Pages out of the box

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox layouts

### Performance
- Lightweight (~50KB total)
- No external API calls
- Instant feedback and transitions

## 📝 Usage Instructions

### For GitHub Pages Deployment

1. Push all files to the `claude/nfl-stress-test-yNt71` branch
2. Enable GitHub Pages in repository settings
3. Set source to the branch: `claude/nfl-stress-test-yNt71`
4. Access at: `https://[username].github.io/301-M2-L3/`

### For Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. No build process required

## 🎨 Customization

### Adding More Teams
1. Add team data to `js/nfl-scenarios.js`
2. Add 3 scenarios per team (levels 1, 2, 3)
3. Add team colors to `css/nfl-theme.css`

### Modifying Scoring
1. Edit tier requirements in `js/scoring.js`
2. Update `calculateTierAndCode()` function
3. Adjust XP values in `evaluateAlignment()`

### Changing Claim Codes
1. Update `CLAIM_CODES` object in `js/nfl-scenarios.js`
2. Codes are hard-coded for security

## 📊 Scenario Quality

All 15 scenarios are:
- Realistic (based on actual NFL situations)
- Well-calibrated (clear correct answers)
- Educational (teach systems thinking concepts)
- Varied (cover all 4 response types)

## 🐛 Known Limitations

- No email integration (GitHub Pages hosting)
- No backend/database (client-side only)
- No persistent storage (progress resets on reload)
- Claim codes are static (no dynamic generation)

## 🤝 Contributing

This is an educational project for BOW Sports Capital students. Modifications should maintain:
- Clear learning objectives
- Accurate sports scenarios
- Fair scoring mechanics
- Accessible design

## 📄 License

Educational use only - BOW Sports Capital © 2026

---

**Ready to test your NFL systems knowledge?** Start with Tutorial Mode to learn the framework, then take on Real Mode to earn your claim code!
