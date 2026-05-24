// Full DiGiovanni 4-Week Ramp program data.
// Each exercise: { name, sets, reps, tempo, load, who, notes, track?, isInterval?, workSec?, restSec? }
//   - track: true     → show weight/reps/RPE logger
//   - isInterval: true → render an interval timer instead of generic rest timer

export const PROGRAM = {
  name: 'D-Rock & Frank — 4-Week Ramp',
  startDate: '2026-05-25',
  weeks: [
    {
      num: 1,
      label: 'BASE',
      blurb: 'Volume light. Intent high. Establish baselines.',
      sessions: [
        {
          day: 'MON', date: 'May 25', theme: 'Lower Power + Speed',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike or jump rope easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Both', notes: 'Get warm.' },
              { name: "World's greatest stretch", sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Both', notes: 'Open hips.' },
              { name: 'A-skips + B-skips', sets: 2, reps: '20 yd', tempo: '—', load: 'BW', who: 'Both', notes: 'Knees high, tall posture.' },
              { name: 'Pogo hops', sets: 2, reps: '20', tempo: '—', load: 'BW', who: 'Both', notes: 'Tendon prep — stiff ankles.' }
            ]},
            { name: 'Frank — Power & Speed', exercises: [
              { name: 'Broad jump', sets: 4, reps: '3', tempo: '—', load: 'BW', who: 'Frank', notes: 'Max effort, full reset between.' },
              { name: '10-yd sprint start', sets: 5, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: '3-point stance. Walk back.' },
              { name: 'Lateral bound + stick', sets: 3, reps: '4/side', tempo: '—', load: 'BW', who: 'Frank', notes: 'Stick 2s, no wobble.' }
            ]},
            { name: 'D-Rock — Conditioning', exercises: [
              { name: 'Assault bike intervals', sets: 6, reps: '30s on / 90s off', tempo: '—', load: 'Hard', who: 'D-Rock', notes: 'Z4–Z5 effort.', isInterval: true, workSec: 30, restSec: 90 }
            ]},
            { name: 'Shared Lift', exercises: [
              { name: 'Goblet squat', sets: 4, reps: '8', tempo: '3-1-1-0', load: 'Moderate', who: 'Both', notes: 'Knees track toes.', track: true },
              { name: 'DB RDL', sets: 3, reps: '10', tempo: '3-0-1-0', load: 'Moderate', who: 'Both', notes: 'Hinge. Neutral spine.', track: true },
              { name: 'Walking lunge', sets: 3, reps: '10/leg', tempo: 'ctrl', load: 'BW or DB', who: 'Both', notes: 'Stay tall.', track: true },
              { name: 'Single-leg calf iso-hold', sets: 3, reps: '30s/leg', tempo: 'iso', load: 'BW', who: 'Both', notes: 'Tendon work.' }
            ]},
            { name: 'Cooldown', exercises: [
              { name: 'Couch stretch', sets: 2, reps: '45s/side', tempo: '—', load: '—', who: 'Both', notes: '' },
              { name: '90/90 hip switches', sets: 2, reps: '8/side', tempo: '—', load: '—', who: 'Both', notes: '' }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'May 26', theme: 'Upper Push + Rotational',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Jump rope', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Band pull-aparts', sets: 2, reps: '15', tempo: '—', load: 'Light', who: 'Both', notes: '' },
              { name: 'Shoulder CARs', sets: 2, reps: '5/side', tempo: 'slow', load: 'BW', who: 'Both', notes: '' },
              { name: 'T-spine open book', sets: 2, reps: '6/side', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Rotational', exercises: [
              { name: 'Med ball rotational throw', sets: 4, reps: '4/side', tempo: '—', load: '6–8 lb', who: 'Frank', notes: 'Hips lead, full follow-through.' },
              { name: 'Med ball overhead slam', sets: 3, reps: '5', tempo: '—', load: '8–10 lb', who: 'Frank', notes: 'Max effort.' },
              { name: 'Lateral scoop toss', sets: 3, reps: '4/side', tempo: '—', load: '6–8 lb', who: 'Frank', notes: '' }
            ]},
            { name: 'D-Rock — Push', exercises: [
              { name: 'DB bench press', sets: 4, reps: '10', tempo: '2-1-1-0', load: 'Moderate', who: 'D-Rock', notes: 'RIR 2.', track: true },
              { name: 'DB incline press', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Moderate', who: 'D-Rock', notes: '', track: true }
            ]},
            { name: 'Frank — Push', exercises: [
              { name: 'Push-up (or DB bench)', sets: 3, reps: '10-12', tempo: '2-1-1-0', load: 'BW', who: 'Frank', notes: 'Strict form.', track: true },
              { name: 'Landmine press', sets: 3, reps: '8/side', tempo: '2-0-1-0', load: 'Light-mod', who: 'Frank', notes: 'No lean.', track: true }
            ]},
            { name: 'Shared Core', exercises: [
              { name: 'Pallof press', sets: 3, reps: '10/side', tempo: '2s hold', load: 'Band', who: 'Both', notes: 'Anti-rotation.' },
              { name: 'Dead bug', sets: 3, reps: '8/side', tempo: 'slow', load: 'BW', who: 'Both', notes: 'Ribs down.' },
              { name: 'Side plank', sets: 3, reps: '30s/side', tempo: 'iso', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'D-Rock — Finisher', exercises: [
              { name: 'KB swings', sets: 5, reps: '20', tempo: '—', load: 'Moderate KB', who: 'D-Rock', notes: 'Rest 30s.', track: true }
            ]}
          ]
        },
        {
          day: 'THU', date: 'May 28', theme: 'Lower Strength + Agility',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Hip airplane', sets: 2, reps: '5/side', tempo: 'slow', load: 'BW', who: 'Both', notes: '' },
              { name: 'Ankle rocks', sets: 2, reps: '10/side', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Agility', exercises: [
              { name: 'Ladder: in-in-out-out', sets: 3, reps: '2 passes', tempo: '—', load: 'BW', who: 'Frank', notes: 'Quick feet.' },
              { name: 'Ladder: lateral icky shuffle', sets: 3, reps: '2 passes', tempo: '—', load: 'BW', who: 'Frank', notes: '' },
              { name: '5-10-5 pro agility', sets: 4, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: 'Full rest between.', track: true },
              { name: 'Crossover step + 10yd sprint', sets: 4, reps: '2/side', tempo: '—', load: 'BW', who: 'Frank', notes: 'Outfield read.' }
            ]},
            { name: 'D-Rock — Intervals', exercises: [
              { name: 'Rower or incline tread', sets: 5, reps: '1 min on / 1 off', tempo: '—', load: 'Hard', who: 'D-Rock', notes: 'Z4.', isInterval: true, workSec: 60, restSec: 60 }
            ]},
            { name: 'Shared Lift', exercises: [
              { name: 'Trap bar / DB deadlift', sets: 4, reps: '6', tempo: '2-1-1-0', load: 'Moderate', who: 'Both', notes: 'RIR 2–3.', track: true },
              { name: 'Bulgarian split squat', sets: 3, reps: '8/leg', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: 'Slow eccentric.', track: true },
              { name: 'Nordic hamstring (assisted)', sets: 3, reps: '5', tempo: '5-0-X-0', load: 'BW assisted', who: 'Both', notes: 'Tendon/eccentric work.' },
              { name: 'Tibialis raise', sets: 3, reps: '15', tempo: 'ctrl', load: 'BW', who: 'Both', notes: 'Shin/ankle resilience.' }
            ]}
          ]
        },
        {
          day: 'SAT', date: 'May 30', theme: 'Upper Pull + Conditioning',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Jump rope', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Scap pulls (hang from bar)', sets: 2, reps: '8', tempo: 'slow', load: 'BW', who: 'Both', notes: '' },
              { name: 'Band face pulls', sets: 2, reps: '15', tempo: '—', load: 'Light', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Pull & Tendon', exercises: [
              { name: 'Chin-up (or assisted)', sets: 4, reps: '5–8', tempo: '2-1-1-0', load: 'BW/banded', who: 'Frank', notes: 'Full ROM.', track: true },
              { name: 'Single-arm DB row', sets: 3, reps: '10/side', tempo: '2-0-1-0', load: 'Moderate', who: 'Frank', notes: '', track: true },
              { name: 'Bottoms-up KB carry', sets: 3, reps: '20 yd/side', tempo: '—', load: 'Light KB', who: 'Frank', notes: 'Throwing arm prep.', track: true }
            ]},
            { name: 'D-Rock — Pull', exercises: [
              { name: 'Lat pulldown or pull-up', sets: 4, reps: '10', tempo: '2-0-1-0', load: 'Moderate', who: 'D-Rock', notes: '', track: true },
              { name: 'Chest-supported row', sets: 3, reps: '12', tempo: '2-1-1-0', load: 'Moderate', who: 'D-Rock', notes: '', track: true },
              { name: 'Face pull', sets: 3, reps: '15', tempo: '2s hold', load: 'Light', who: 'D-Rock', notes: 'Posture/rear delt.', track: true }
            ]},
            { name: 'Anti-Rotation', exercises: [
              { name: 'Suitcase carry', sets: 3, reps: '30 yd/side', tempo: '—', load: 'Mod-heavy', who: 'Both', notes: "Don't lean.", track: true },
              { name: 'Bird dog', sets: 3, reps: '8/side', tempo: '3s hold', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Jump rope ladder', sets: 1, reps: '60-50-40-30-20-10s on, 20s off', tempo: '—', load: '—', who: 'Both', notes: 'Compete.' }
            ]}
          ]
        }
      ]
    },
    {
      num: 2,
      label: 'INTENSIFY',
      blurb: 'Add load. Reps drop, intent stays. Beat Week 1.',
      sessions: [
        {
          day: 'MON', date: 'Jun 1', theme: 'Lower Power + Speed',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike or jump rope', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: "World's greatest stretch", sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'A-skips + B-skips', sets: 2, reps: '20 yd', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'Pogo + single-leg pogo', sets: 2, reps: '20 + 10/leg', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Power', exercises: [
              { name: 'Broad jump', sets: 4, reps: '3', tempo: '—', load: 'BW', who: 'Frank', notes: 'Beat Wk1 distance.', track: true },
              { name: '10-yd flying sprint', sets: 5, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: 'Build-up then sprint through.' },
              { name: 'Box jump (low-mod)', sets: 4, reps: '3', tempo: '—', load: 'BW', who: 'Frank', notes: 'Soft land, full hip ext.' },
              { name: 'Lateral bound + stick', sets: 3, reps: '4/side', tempo: '—', load: 'BW', who: 'Frank', notes: '' }
            ]},
            { name: 'D-Rock — Conditioning', exercises: [
              { name: 'Assault bike intervals', sets: 8, reps: '30s on / 90s off', tempo: '—', load: 'Hard', who: 'D-Rock', notes: '+2 rounds vs Wk1.', isInterval: true, workSec: 30, restSec: 90 }
            ]},
            { name: 'Shared Lift', exercises: [
              { name: 'Goblet or front squat', sets: 4, reps: '6', tempo: '3-1-1-0', load: 'Heavier', who: 'Both', notes: 'RIR 2.', track: true },
              { name: 'DB RDL', sets: 3, reps: '8', tempo: '3-0-1-0', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Reverse lunge', sets: 3, reps: '8/leg', tempo: 'ctrl', load: 'Mod DB', who: 'Both', notes: '', track: true },
              { name: 'Single-leg calf raise', sets: 3, reps: '10/leg', tempo: '3-0-1-0', load: 'BW or DB', who: 'Both', notes: 'Tendon.' }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Jun 2', theme: 'Upper Push + Rotational',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Jump rope', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Band Y-T-W + pull-aparts', sets: 2, reps: '10', tempo: '—', load: 'Light', who: 'Both', notes: '' },
              { name: 'Shoulder CARs + open book', sets: 2, reps: '5–6', tempo: 'slow', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Rotational', exercises: [
              { name: 'Med ball rotational throw', sets: 5, reps: '4/side', tempo: '—', load: '8 lb', who: 'Frank', notes: 'Heavier ball.' },
              { name: 'Med ball overhead slam', sets: 4, reps: '5', tempo: '—', load: '10 lb', who: 'Frank', notes: '' },
              { name: 'Med ball shotput throw', sets: 3, reps: '4/side', tempo: '—', load: '8 lb', who: 'Frank', notes: 'Hitting transfer.' }
            ]},
            { name: 'D-Rock — Push', exercises: [
              { name: 'DB bench press', sets: 4, reps: '8', tempo: '2-1-1-0', load: 'Heavier', who: 'D-Rock', notes: 'RIR 2.', track: true },
              { name: 'DB incline press', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Mod-heavy', who: 'D-Rock', notes: '', track: true },
              { name: 'DB lateral raise', sets: 3, reps: '12', tempo: '2-0-1-1', load: 'Light', who: 'D-Rock', notes: '', track: true }
            ]},
            { name: 'Frank — Push', exercises: [
              { name: 'Push-up variations', sets: 4, reps: '8–10', tempo: '2-1-1-0', load: 'BW', who: 'Frank', notes: '' },
              { name: 'Landmine press', sets: 3, reps: '6/side', tempo: '2-0-1-0', load: 'Heavier', who: 'Frank', notes: '', track: true }
            ]},
            { name: 'Shared Core', exercises: [
              { name: 'Pallof press + hold', sets: 3, reps: '8/side + 5s', tempo: 'iso', load: 'Band', who: 'Both', notes: '' },
              { name: 'Weighted dead bug', sets: 3, reps: '8/side', tempo: 'slow', load: 'Light DB', who: 'Both', notes: '' },
              { name: 'Side plank w/ reach', sets: 3, reps: '30s/side', tempo: 'iso', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'D-Rock — Finisher', exercises: [
              { name: 'KB swings', sets: 5, reps: '25', tempo: '—', load: 'Moderate', who: 'D-Rock', notes: 'Rest 30s.', track: true }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Jun 4', theme: 'Lower Strength + Agility',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Hip airplane', sets: 2, reps: '5/side', tempo: 'slow', load: 'BW', who: 'Both', notes: '' },
              { name: 'Ankle rocks + tibialis pulses', sets: 2, reps: '10/side', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Agility', exercises: [
              { name: 'Ladder: ali shuffle', sets: 3, reps: '2 passes', tempo: '—', load: 'BW', who: 'Frank', notes: '' },
              { name: 'Ladder: in-out crossovers', sets: 3, reps: '2 passes', tempo: '—', load: 'BW', who: 'Frank', notes: '' },
              { name: '5-10-5 (timed)', sets: 5, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: 'Record best time.', track: true },
              { name: 'Drop-step + 15yd sprint', sets: 4, reps: '2/side', tempo: '—', load: 'BW', who: 'Frank', notes: 'OF reaction.' }
            ]},
            { name: 'D-Rock — Intervals', exercises: [
              { name: 'Rower or incline tread', sets: 6, reps: '1 on / 1 off', tempo: '—', load: 'Hard', who: 'D-Rock', notes: '', isInterval: true, workSec: 60, restSec: 60 }
            ]},
            { name: 'Shared Lift', exercises: [
              { name: 'Trap bar / DB deadlift', sets: 4, reps: '5', tempo: '2-1-1-0', load: 'Heavier', who: 'Both', notes: 'RIR 2.', track: true },
              { name: 'Bulgarian split squat', sets: 3, reps: '8/leg', tempo: '2-1-1-0', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Nordic hamstring', sets: 3, reps: '5', tempo: '5-0-X-0', load: 'Less assist', who: 'Both', notes: '' },
              { name: 'Tibialis + calf combo', sets: 3, reps: '12 + 15', tempo: 'ctrl', load: 'BW', who: 'Both', notes: '' }
            ]}
          ]
        },
        {
          day: 'SAT', date: 'Jun 6', theme: 'Upper Pull + Conditioning',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Jump rope', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Scap pulls + hollow hold', sets: 2, reps: '8 + 20s', tempo: 'slow', load: 'BW', who: 'Both', notes: '' },
              { name: 'Band face pulls + pull-aparts', sets: 2, reps: '12', tempo: '—', load: 'Light', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Pull & Tendon', exercises: [
              { name: 'Chin-up', sets: 4, reps: '6–8', tempo: '2-1-1-0', load: 'Less band than Wk1', who: 'Frank', notes: '', track: true },
              { name: 'Single-arm DB row', sets: 3, reps: '10/side', tempo: '2-1-1-0', load: 'Heavier', who: 'Frank', notes: '', track: true },
              { name: 'Bottoms-up KB carry', sets: 3, reps: '20 yd/side', tempo: '—', load: 'Moderate KB', who: 'Frank', notes: '', track: true },
              { name: 'Band pull-apart iso', sets: 3, reps: '20s', tempo: 'iso', load: 'Moderate band', who: 'Frank', notes: 'Cuff health.' }
            ]},
            { name: 'D-Rock — Pull', exercises: [
              { name: 'Lat pulldown or pull-up', sets: 4, reps: '8', tempo: '2-0-1-0', load: 'Heavier', who: 'D-Rock', notes: 'RIR 2.', track: true },
              { name: 'Chest-supported row', sets: 3, reps: '10', tempo: '2-1-1-0', load: 'Heavier', who: 'D-Rock', notes: '', track: true },
              { name: 'Face pull + W-press', sets: 3, reps: '12', tempo: '2s hold', load: 'Light', who: 'D-Rock', notes: '', track: true }
            ]},
            { name: 'Anti-Rotation', exercises: [
              { name: 'Suitcase carry', sets: 3, reps: '30 yd/side', tempo: '—', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Bird dog w/ band', sets: 3, reps: '8/side', tempo: '3s hold', load: 'Light band', who: 'Both', notes: '' }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Rope ladder + burpees', sets: 1, reps: '60-50-40-30-20-10s + 5 burpees', tempo: '—', load: '—', who: 'Both', notes: 'Compete.' }
            ]}
          ]
        }
      ]
    },
    {
      num: 3,
      label: 'PEAK',
      blurb: 'Heaviest loads. Most power volume. PRs land here.',
      sessions: [
        {
          day: 'MON', date: 'Jun 8', theme: 'Lower Power + Speed',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike + jump rope', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: "World's greatest stretch", sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'A/B-skips + fast leg', sets: 2, reps: '20 yd', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'Pogo + depth drop', sets: 2, reps: '20 + 5', tempo: '—', load: 'BW', who: 'Both', notes: 'Soft land.' }
            ]},
            { name: 'Frank — Power', exercises: [
              { name: 'Broad jump', sets: 5, reps: '3', tempo: '—', load: 'BW', who: 'Frank', notes: 'PR attempt.', track: true },
              { name: 'Hurdle hops (low)', sets: 4, reps: '5', tempo: '—', load: 'BW', who: 'Frank', notes: 'Stiff ankles.' },
              { name: 'Flying 20-yd sprint', sets: 4, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: 'Time it.', track: true },
              { name: 'Resisted sprint (band/sled)', sets: 3, reps: '10 yd', tempo: '—', load: 'Light resist', who: 'Frank', notes: '' },
              { name: 'Lateral bound for distance', sets: 3, reps: '4/side', tempo: '—', load: 'BW', who: 'Frank', notes: '', track: true }
            ]},
            { name: 'D-Rock — Conditioning', exercises: [
              { name: 'Assault bike intervals', sets: 8, reps: '40s on / 80s off', tempo: '—', load: 'Hard', who: 'D-Rock', notes: 'Density up.', isInterval: true, workSec: 40, restSec: 80 }
            ]},
            { name: 'Shared Lift', exercises: [
              { name: 'Front or goblet squat', sets: 5, reps: '5', tempo: '3-1-1-0', load: 'Top set heavy', who: 'Both', notes: 'RIR 2.', track: true },
              { name: 'DB RDL', sets: 3, reps: '6', tempo: '3-0-1-0', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Walking lunge w/ DB', sets: 3, reps: '10/leg', tempo: 'ctrl', load: 'Moderate', who: 'Both', notes: '', track: true },
              { name: 'Single-leg calf raise (slow ecc)', sets: 4, reps: '8/leg', tempo: '4-0-1-0', load: 'DB held', who: 'Both', notes: 'Tendon.' }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Jun 9', theme: 'Upper Push + Rotational',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Jump rope (double-under attempts)', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Band Y-T-W-A', sets: 2, reps: '8 each', tempo: '—', load: 'Light', who: 'Both', notes: '' },
              { name: 'Shoulder CARs + open book', sets: 2, reps: '5–6', tempo: 'slow', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Rotational PEAK', exercises: [
              { name: 'Rotational med ball throw', sets: 5, reps: '5/side', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Max velocity.', track: true },
              { name: 'Med ball overhead slam', sets: 4, reps: '5', tempo: '—', load: '12 lb', who: 'Frank', notes: '' },
              { name: 'Step-back rotational throw', sets: 4, reps: '4/side', tempo: '—', load: '8–10 lb', who: 'Frank', notes: 'Hitting load transfer.' },
              { name: 'Med ball chest pass', sets: 3, reps: '5', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Explosive.' }
            ]},
            { name: 'D-Rock — Push', exercises: [
              { name: 'DB bench press', sets: 5, reps: '6', tempo: '2-1-1-0', load: 'Heavy', who: 'D-Rock', notes: 'RIR 2.', track: true },
              { name: 'DB incline press', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Mod-heavy', who: 'D-Rock', notes: '', track: true },
              { name: 'DB lateral + front raise', sets: 3, reps: '10 each', tempo: 'ctrl', load: 'Light', who: 'D-Rock', notes: '', track: true }
            ]},
            { name: 'Frank — Push', exercises: [
              { name: 'DB bench or floor press', sets: 4, reps: '6', tempo: '2-1-1-0', load: 'Moderate', who: 'Frank', notes: 'Strict, RIR 2.', track: true },
              { name: 'Landmine press', sets: 3, reps: '6/side', tempo: '2-0-1-0', load: 'Heavier', who: 'Frank', notes: '', track: true }
            ]},
            { name: 'Shared Core', exercises: [
              { name: 'Pallof press + chop', sets: 3, reps: '8/side', tempo: '2s hold', load: 'Moderate band', who: 'Both', notes: '' },
              { name: 'Weighted dead bug', sets: 3, reps: '8/side', tempo: 'slow', load: 'DB', who: 'Both', notes: '' },
              { name: 'Copenhagen plank (assisted)', sets: 3, reps: '20s/side', tempo: 'iso', load: 'BW', who: 'Both', notes: 'Adductor armor.' }
            ]},
            { name: 'D-Rock — Finisher', exercises: [
              { name: 'KB swing + push-up complex', sets: 5, reps: '20 + 10', tempo: '—', load: 'Moderate', who: 'D-Rock', notes: 'Rest 60s.', track: true }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Jun 11', theme: 'Lower Strength + Agility',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Hip airplane + ankle rocks', sets: 2, reps: '5/side', tempo: 'slow', load: 'BW', who: 'Both', notes: '' },
              { name: 'Shuffle, carioca, backpedal', sets: 2, reps: '20 yd ea', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Agility PEAK', exercises: [
              { name: 'L-drill (cone drill)', sets: 5, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: 'Time it, record best.', track: true },
              { name: 'Reactive drop-step', sets: 4, reps: '2/side', tempo: '—', load: 'BW', who: 'Frank', notes: 'DR calls direction.' },
              { name: 'Lateral 5-cone shuffle', sets: 4, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: '' },
              { name: 'Crossover sprint to ball track', sets: 4, reps: '2/side', tempo: '—', load: 'BW + ball', who: 'Frank', notes: 'Game-transfer.' }
            ]},
            { name: 'D-Rock — Intervals', exercises: [
              { name: 'Rower or hill sprint', sets: 6, reps: '1 min on / 90s off', tempo: '—', load: 'Very hard', who: 'D-Rock', notes: '', isInterval: true, workSec: 60, restSec: 90 }
            ]},
            { name: 'Shared Lift', exercises: [
              { name: 'Trap bar deadlift', sets: 5, reps: '4', tempo: '2-1-1-0', load: 'Top set heavy', who: 'Both', notes: 'Frank RIR 3 / DR RIR 2.', track: true },
              { name: 'Bulgarian split squat', sets: 3, reps: '6/leg', tempo: '2-1-1-0', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Nordic hamstring', sets: 4, reps: '5', tempo: '5-0-X-0', load: 'Less assist', who: 'Both', notes: 'Hamstring health = sprint speed.' },
              { name: 'Tibialis + soleus combo', sets: 3, reps: '15 + 12', tempo: 'ctrl', load: 'BW/light', who: 'Both', notes: '' }
            ]}
          ]
        },
        {
          day: 'SAT', date: 'Jun 13', theme: 'Upper Pull + Conditioning',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Jump rope', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Scap pulls + hollow hold', sets: 2, reps: '8 + 20s', tempo: 'slow', load: 'BW', who: 'Both', notes: '' },
              { name: 'Band face pulls', sets: 2, reps: '12', tempo: '—', load: 'Light', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Pull & Tendon', exercises: [
              { name: 'Chin-up (weighted if possible)', sets: 5, reps: '5', tempo: '2-1-1-0', load: 'BW + light DB', who: 'Frank', notes: 'Progressive overload.', track: true },
              { name: 'Single-arm DB row', sets: 3, reps: '8/side', tempo: '2-1-1-1', load: 'Heavier', who: 'Frank', notes: 'Pause at top.', track: true },
              { name: 'Bottoms-up KB carry', sets: 3, reps: '30 yd/side', tempo: '—', load: 'Heavier KB', who: 'Frank', notes: '', track: true },
              { name: 'Band pull-apart iso', sets: 3, reps: '30s', tempo: 'iso', load: 'Moderate band', who: 'Frank', notes: 'Cuff health.' }
            ]},
            { name: 'D-Rock — Pull', exercises: [
              { name: 'Pull-up or lat pulldown', sets: 5, reps: '6', tempo: '2-0-1-0', load: 'Heavy', who: 'D-Rock', notes: 'RIR 2.', track: true },
              { name: 'Chest-supported row', sets: 3, reps: '10', tempo: '2-1-1-0', load: 'Heavier', who: 'D-Rock', notes: '', track: true },
              { name: 'Face pull + Y-raise', sets: 3, reps: '12 + 8', tempo: '2s hold', load: 'Light', who: 'D-Rock', notes: '', track: true }
            ]},
            { name: 'Anti-Rotation', exercises: [
              { name: 'Suitcase carry', sets: 3, reps: '40 yd/side', tempo: '—', load: 'Heavy DB/KB', who: 'Both', notes: 'Tall posture.', track: true },
              { name: 'Bird dog w/ band', sets: 3, reps: '8/side', tempo: '3s hold', load: 'Band', who: 'Both', notes: '' }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Jump rope EMOM', sets: 10, reps: '40 jumps + 5 push-ups/min', tempo: '—', load: '—', who: 'Both', notes: 'Compete.' }
            ]}
          ]
        }
      ]
    },
    {
      num: 4,
      label: 'DELOAD',
      blurb: 'Drop volume, keep intent. Land fresh for Jun 19 travel weekend.',
      sessions: [
        {
          day: 'MON', date: 'Jun 15', theme: 'Lower Power + Speed (Deload)',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Dynamic mobility flow', sets: 2, reps: '5 min', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'A-skips + pogos', sets: 2, reps: '20 yd + 20', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Power Maintain', exercises: [
              { name: 'Broad jump', sets: 3, reps: '3', tempo: '—', load: 'BW', who: 'Frank', notes: 'Quality over volume.' },
              { name: '10-yd sprint', sets: 3, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: 'Feel snappy, not maxed.' },
              { name: 'Lateral bound + stick', sets: 2, reps: '3/side', tempo: '—', load: 'BW', who: 'Frank', notes: '' }
            ]},
            { name: 'D-Rock — Cond. Reduced', exercises: [
              { name: 'Assault bike intervals', sets: 5, reps: '30s on / 90s off', tempo: '—', load: 'Mod-hard', who: 'D-Rock', notes: 'Pull back 30%.', isInterval: true, workSec: 30, restSec: 90 }
            ]},
            { name: 'Shared Lift', exercises: [
              { name: 'Goblet squat', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Wk2 weight', who: 'Both', notes: 'RIR 4 — easy.', track: true },
              { name: 'DB RDL', sets: 2, reps: '8', tempo: '2-0-1-0', load: 'Wk2 weight', who: 'Both', notes: '', track: true },
              { name: 'Walking lunge', sets: 2, reps: '8/leg', tempo: 'ctrl', load: 'Light DB', who: 'Both', notes: '', track: true },
              { name: 'Calf iso-hold', sets: 3, reps: '30s/leg', tempo: 'iso', load: 'BW', who: 'Both', notes: 'Keep tendon stim.' }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Jun 16', theme: 'Upper Push + Rotational (Deload)',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Jump rope easy', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Band Y-T-W', sets: 2, reps: '8 each', tempo: '—', load: 'Light', who: 'Both', notes: '' },
              { name: 'Shoulder CARs + T-spine', sets: 2, reps: '5/side', tempo: 'slow', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Rotational Maintain', exercises: [
              { name: 'Rotational med ball throw', sets: 3, reps: '4/side', tempo: '—', load: '8 lb', who: 'Frank', notes: 'Feel fast.' },
              { name: 'Med ball slam', sets: 3, reps: '4', tempo: '—', load: '10 lb', who: 'Frank', notes: '' }
            ]},
            { name: 'D-Rock — Push Reduced', exercises: [
              { name: 'DB bench press', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Wk2 weight', who: 'D-Rock', notes: 'RIR 4.', track: true },
              { name: 'DB incline press', sets: 2, reps: '10', tempo: '2-0-1-0', load: 'Light-mod', who: 'D-Rock', notes: '', track: true }
            ]},
            { name: 'Frank — Push', exercises: [
              { name: 'Push-up', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'BW', who: 'Frank', notes: 'Clean reps.' },
              { name: 'Landmine press', sets: 2, reps: '8/side', tempo: '2-0-1-0', load: 'Light', who: 'Frank', notes: '', track: true }
            ]},
            { name: 'Core', exercises: [
              { name: 'Pallof press', sets: 3, reps: '10/side', tempo: '2s hold', load: 'Band', who: 'Both', notes: '' },
              { name: 'Side plank', sets: 2, reps: '30s/side', tempo: 'iso', load: 'BW', who: 'Both', notes: '' }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Jun 18', theme: 'Pre-Travel Tune-Up',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Mobility flow', sets: 2, reps: '5 min', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Speed Primer', exercises: [
              { name: 'Crossover step + 10yd sprint', sets: 3, reps: '2/side', tempo: '—', load: 'BW', who: 'Frank', notes: 'Feel quick.' },
              { name: '5-10-5 pro agility', sets: 3, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: 'Light effort.' },
              { name: 'Pogo hops', sets: 3, reps: '15', tempo: '—', load: 'BW', who: 'Frank', notes: 'Ankle prime.' }
            ]},
            { name: 'D-Rock — Conditioning', exercises: [
              { name: 'Zone 2 bike/walk', sets: 1, reps: '30 min', tempo: '—', load: 'Z2', who: 'D-Rock', notes: 'Easy aerobic.' }
            ]},
            { name: 'Shared Light Lift', exercises: [
              { name: 'Trap bar DL', sets: 3, reps: '5', tempo: '2-0-1-0', load: 'Wk1 weight', who: 'Both', notes: 'Move fast, light.', track: true },
              { name: 'Single-arm row', sets: 3, reps: '10/side', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: '', track: true },
              { name: 'Pallof press', sets: 2, reps: '10/side', tempo: '2s hold', load: 'Band', who: 'Both', notes: '' }
            ]},
            { name: 'Tendon Maintenance', exercises: [
              { name: 'Iso calf hold', sets: 2, reps: '30s/leg', tempo: 'iso', load: 'BW', who: 'Both', notes: '' },
              { name: 'Tibialis raise', sets: 2, reps: '15', tempo: 'ctrl', load: 'BW', who: 'Both', notes: '' }
            ]}
          ]
        }
      ]
    }
  ]
};

// Helpers
export const exerciseKey = (w, s, b, e) => `w${w}-s${s}-b${b}-e${e}`;

export const getCurrentSession = () => {
  const start = new Date(PROGRAM.startDate);
  const today = new Date();
  const daysSince = Math.floor((today - start) / 86400000);
  if (daysSince < 0) return { weekIdx: 0, sessionIdx: 0 };
  const weekIdx = Math.min(Math.floor(daysSince / 7), PROGRAM.weeks.length - 1);
  const dayOfWeek = today.getDay();
  let sessionIdx = 0;
  if (dayOfWeek >= 1 && dayOfWeek <= 2) sessionIdx = dayOfWeek - 1;
  else if (dayOfWeek >= 3 && dayOfWeek <= 5) sessionIdx = 2;
  else sessionIdx = 3;
  const week = PROGRAM.weeks[weekIdx];
  sessionIdx = Math.min(sessionIdx, week.sessions.length - 1);
  return { weekIdx, sessionIdx };
};

export const ytSearchUrl = (name) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(name + ' form demo')}`;
