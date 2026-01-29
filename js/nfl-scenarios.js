// NFL System Stress Test - Scenario Database
// 5 NFL teams with 3 stress levels each (15 total scenarios)

const NFL_SCENARIOS = {
  "Chiefs": {
    team: "Kansas City Chiefs",
    shortName: "Chiefs",
    color: "#E31837",
    secondaryColor: "#FFB81C",
    type: "Adaptive, Star-Centric",
    pattern: "Thrives with challenge, strains if star injured",
    scenarios: [
      {
        level: 1,
        title: "WR1 Injury - 3 Weeks Out",
        description: "Starting wide receiver suffers ankle sprain in practice. Expected to miss 3 weeks including two divisional matchups. Depth chart shows promising second-year player as replacement.",
        actual: "System Absorbs This",
        allowed: ["System Absorbs This"],
        adjacent: null,
        explanation: "Chiefs' offensive scheme is built around Mahomes' ability to elevate role players. With Kelce still healthy and Andy Reid's play-calling flexibility, the system easily adapts to WR depth changes.",
        actualSummary: "Star-centric offense masks role-player losses.",
        adjacentSummary: null,
        isCritical: false
      },
      {
        level: 2,
        title: "Multiple Key Injuries + Playoff Pressure",
        description: "Mahomes suffers ankle injury (questionable). Three starting offensive linemen ruled out. Playoff game in 5 days against division rival. Backup tackles never started together.",
        actual: "System is Strained",
        allowed: ["System is Strained", "System Absorbs This"],
        adjacent: "System Absorbs This",
        explanation: "Star-dependent systems strain when the star is compromised AND supporting structure fails. The Chiefs survive but are operating at the edge of their capability. One more shock could break them.",
        actualSummary: "System survives but operates at edge of failure.",
        adjacentSummary: "Some argue Chiefs' coaching excellence can still absorb this level of adversity.",
        isCritical: false
      },
      {
        level: 3,
        title: "Catastrophic Simultaneous Collapse",
        description: "Mahomes tears ACL in Week 1. Team is $40M over projected cap for next season. GM Brett Veach suddenly fired mid-season amid front office conflict. Coach on hot seat.",
        actual: "System Breaks",
        allowed: ["System Breaks"],
        adjacent: null,
        explanation: "No system survives simultaneous structural (star player), financial (cap crisis), and leadership (GM fired) collapse. This represents complete organizational failure.",
        actualSummary: "Complete organizational failure across all dimensions.",
        adjacentSummary: null,
        isCritical: true
      }
    ]
  },

  "Browns": {
    team: "Cleveland Browns",
    shortName: "Browns",
    color: "#311D00",
    secondaryColor: "#FF3C00",
    type: "Fragile, Media-Reactive",
    pattern: "Breaks under pressure repeatedly",
    scenarios: [
      {
        level: 1,
        title: "QB Controversy + Media Scrutiny",
        description: "Starting QB throws 3 interceptions in primetime loss. Local media demands backup QB start. Social media explodes. Front office schedules 'emergency' press conference.",
        actual: "System is Strained",
        allowed: ["System is Strained"],
        adjacent: "System Breaks",
        explanation: "Media-reactive organizations amplify normal football adversity into organizational crises. The Browns' history of instability means even manageable situations create strain.",
        actualSummary: "Reactive culture turns normal adversity into crisis.",
        adjacentSummary: "Some argue this level of media pressure causes the Browns to break entirely.",
        isCritical: false
      },
      {
        level: 2,
        title: "Losing Streak + Front Office Conflict",
        description: "Team loses 5 straight games. Leaked reports of coach-GM conflict over personnel decisions. Owner publicly questions coaching decisions. Locker room 'fractured' per sources.",
        actual: "System Breaks",
        allowed: ["System Breaks"],
        adjacent: null,
        explanation: "Fragile systems break when external pressure (losing) combines with internal dysfunction (leadership conflict). The Browns lack the structural stability to absorb this.",
        actualSummary: "Fragile structure cannot handle dual external/internal pressure.",
        adjacentSummary: null,
        isCritical: true
      },
      {
        level: 3,
        title: "New Ownership + Complete Rebuild",
        description: "New ownership group takes over. Clean slate: new GM, new coach, new QB, $80M in cap space. Culture reset mandated. Multi-year rebuild plan announced.",
        actual: "System Needs This",
        allowed: ["System Needs This"],
        adjacent: null,
        explanation: "Broken systems need destruction to rebuild correctly. The Browns' pattern of dysfunction can only be fixed by complete organizational reset, not incremental change.",
        actualSummary: "Broken systems require complete reset to fix underlying issues.",
        adjacentSummary: null,
        isCritical: false
      }
    ]
  },

  "Patriots": {
    team: "New England Patriots",
    shortName: "Patriots",
    color: "#002244",
    secondaryColor: "#C60C30",
    type: "Rigid, Process-Driven",
    pattern: "Absorbs most stress, but needs control",
    scenarios: [
      {
        level: 1,
        title: "Key Defensive Injury Mid-Season",
        description: "Starting linebacker tears ACL. Defense loses play-caller and veteran leader. Next man up from practice squad. Three weeks until playoffs.",
        actual: "System Absorbs This",
        allowed: ["System Absorbs This"],
        adjacent: null,
        explanation: "Process-driven systems like the Belichick-era Patriots excel at absorbing individual player losses. 'Next man up' isn't a slogan—it's systematic depth development.",
        actualSummary: "Process-driven depth chart absorbs single-position loss.",
        adjacentSummary: null,
        isCritical: false
      },
      {
        level: 2,
        title: "Loss of Control - Coordinator Poached",
        description: "Offensive coordinator hired as head coach elsewhere. Takes two position coaches with him. Patriots lose offensive play-calling identity. Belichick must delegate more than he's comfortable with.",
        actual: "System is Strained",
        allowed: ["System is Strained"],
        adjacent: null,
        explanation: "Rigid systems strain when forced to operate outside their comfort zone. Belichick's need for control clashes with forced delegation. System survives but uncomfortably.",
        actualSummary: "Control-based systems strain when forced to delegate.",
        adjacentSummary: null,
        isCritical: false
      },
      {
        level: 3,
        title: "Forced Evolution - Abandon 'Patriot Way'",
        description: "Post-Brady era: Three straight losing seasons. League has adapted to Patriots' scheme. Young players reject 'old school' culture. Must modernize or become irrelevant.",
        actual: "System Needs This",
        allowed: ["System Needs This"],
        adjacent: "System is Strained",
        explanation: "Rigid systems that refuse to evolve eventually need external pressure to force adaptation. The Patriots must embrace discomfort or face permanent decline.",
        actualSummary: "Rigid systems need pressure to evolve or face irrelevance.",
        adjacentSummary: "Some argue this level of change strains the system without breaking it.",
        isCritical: false
      }
    ]
  },

  "Packers": {
    team: "Green Bay Packers",
    shortName: "Packers",
    color: "#203731",
    secondaryColor: "#FFB612",
    type: "Community-Owned, Stable",
    pattern: "Needs some stress to evolve, otherwise stagnant",
    scenarios: [
      {
        level: 1,
        title: "Comfortable Season - No Adversity",
        description: "Everything goes right: QB plays well, no major injuries, easy schedule, playoffs secured by Week 14. Team coasts. No urgency, no growth challenges.",
        actual: "System Needs This",
        allowed: ["System Needs This"],
        adjacent: null,
        explanation: "Overly stable systems stagnate without challenges. The Packers' community ownership structure prevents radical change, so they need external pressure to drive improvement.",
        actualSummary: "Stable systems need adversity to avoid complacency.",
        adjacentSummary: null,
        isCritical: false
      },
      {
        level: 2,
        title: "Aaron Rodgers Drama - Again",
        description: "Star QB publicly criticizes front office during offseason. Trade rumors swirl. Media circus for 3 months. Organization must manage public conflict while planning for season.",
        actual: "System Absorbs This",
        allowed: ["System Absorbs This"],
        adjacent: null,
        explanation: "The Packers have absorbed this exact scenario multiple times. Community ownership provides stability that weathers star player drama without organizational panic.",
        actualSummary: "Stable governance absorbs familiar star player drama.",
        adjacentSummary: null,
        isCritical: false
      },
      {
        level: 3,
        title: "Complete Front Office Overhaul Mandated",
        description: "Community shareholders vote to fire entire front office and coaching staff simultaneously. No succession plan. Season starts in 4 months. Complete institutional knowledge loss.",
        actual: "System Breaks",
        allowed: ["System Breaks"],
        adjacent: null,
        explanation: "Stable systems break when their core stability mechanism (continuity) is destroyed. Losing all institutional knowledge at once creates chaos that even community ownership can't absorb.",
        actualSummary: "Stability-based systems break when continuity is destroyed.",
        adjacentSummary: null,
        isCritical: true
      }
    ]
  },

  "Ravens": {
    team: "Baltimore Ravens",
    shortName: "Ravens",
    color: "#241773",
    secondaryColor: "#9E7C0C",
    type: "Analytical, Flexible",
    pattern: "Consistently absorbs, bends but doesn't break",
    scenarios: [
      {
        level: 1,
        title: "Starting RB Injury - Scheme Adaptation",
        description: "Franchise-tagged RB tears ACL in Week 3. Leads league in rushing. Backup is unproven rookie. Run-heavy scheme must adapt quickly.",
        actual: "System Absorbs This",
        allowed: ["System Absorbs This"],
        adjacent: null,
        explanation: "Analytical systems like the Ravens' front office are built for adaptation. They'll shift to different run concepts or lean more on Lamar Jackson's rushing ability seamlessly.",
        actualSummary: "Analytical systems adapt scheme to available personnel.",
        adjacentSummary: null,
        isCritical: false
      },
      {
        level: 2,
        title: "Lamar Jackson Contract Standoff",
        description: "Star QB wants record contract. Negotiations stall. Public tension. Season approaches with no deal. Media predicts disaster.",
        actual: "System Absorbs This",
        allowed: ["System Absorbs This"],
        adjacent: null,
        explanation: "The Ravens' analytical, emotion-neutral approach keeps contract drama from becoming organizational chaos. They've planned for every scenario and don't react to media pressure.",
        actualSummary: "Data-driven culture stays calm during high-profile negotiations.",
        adjacentSummary: null,
        isCritical: false
      },
      {
        level: 3,
        title: "Coaching Staff Exodus + Cap Penalties",
        description: "Head coach and both coordinators hired away. Five assistant coaches leave. Simultaneously hit with $25M in unexpected cap penalties. Must rebuild coaching staff while cutting key veterans.",
        actual: "System is Strained",
        allowed: ["System is Strained"],
        adjacent: "System Breaks",
        explanation: "Even flexible systems strain under simultaneous leadership loss and financial constraints. The Ravens survive due to strong GM and organizational process, but it's uncomfortable.",
        actualSummary: "Flexible systems strain under dual coaching/financial crisis.",
        adjacentSummary: "Some argue losing this much leadership simultaneously breaks even strong systems.",
        isCritical: false
      }
    ]
  }
};

// Claim codes - hard-coded tiers
const CLAIM_CODES = {
  BRONZE: "L3-301-M2-BRONZE-SYSTEMS",
  SILVER: "L3-301-M2-SILVER-ANALYST",
  GOLD: "L3-301-M2-GOLD-PRESSURE"
};

// Helper function to get all scenarios in order
function getAllScenarios() {
  const teams = ["Chiefs", "Browns", "Patriots", "Packers", "Ravens"];
  const allScenarios = [];

  teams.forEach(teamKey => {
    const team = NFL_SCENARIOS[teamKey];
    team.scenarios.forEach((scenario, idx) => {
      allScenarios.push({
        teamKey,
        teamName: team.team,
        teamColor: team.color,
        scenarioIndex: idx,
        ...scenario
      });
    });
  });

  return allScenarios;
}

// Helper function to get tutorial scenarios (just Chiefs)
function getTutorialScenarios() {
  const team = NFL_SCENARIOS["Chiefs"];
  return team.scenarios.map((scenario, idx) => ({
    teamKey: "Chiefs",
    teamName: team.team,
    teamColor: team.color,
    scenarioIndex: idx,
    ...scenario
  }));
}
