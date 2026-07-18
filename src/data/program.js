// Full DiGiovanni 4-Week Ramp program data.
// Each exercise: { name, sets, reps, tempo, load, who, notes, track?, isInterval?, workSec?, restSec? }
//   - track: true     → show weight/reps/RPE logger
//   - isInterval: true → render an interval timer instead of generic rest timer

export const PROGRAM = {
  id: 'ramp',
  name: 'D-Rock & Frank — Explosive Mass Block',
  startDate: '2026-07-20',
  note: "Frank: to add mass you have to eat for it — hit protein (~0.7–1 g/lb bodyweight) and a small calorie surplus every day, especially on lifting days. Sleep 9+ hrs. The trap bar and DB work builds the muscle; the jumps and throws keep you explosive. Train hard, recover harder.",
  weeks: [
    {
      num: 1,
      label: 'BASE',
      blurb: '3 days now. The trap bar is in. Groove the movements, feed the muscle, set baselines.',
      sessions: [
        {
          day: 'MON', date: 'Jul 20', theme: 'Lower Power + Trap Bar Strength',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Both', notes: 'Get warm.' },
              { name: "World's greatest stretch", sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Both', notes: 'Open hips.' },
              { name: 'A-skips + B-skips', sets: 2, reps: '20 yd', tempo: '—', load: 'BW', who: 'Both', notes: 'Knees high, tall posture.' },
              { name: 'Pogo hops', sets: 2, reps: '20', tempo: '—', load: 'BW', who: 'Both', notes: 'Stiff ankles, quick ground contact.' }
            ]},
            { name: 'Frank — Power & Speed', exercises: [
              { name: 'Trap bar jump', sets: 4, reps: '3', tempo: '—', load: 'Light (bar or +10)', who: 'Frank', notes: 'Jump for height. Full triple extension, soft landing.', track: true },
              { name: 'Broad jump', sets: 3, reps: '3', tempo: '—', load: 'BW', who: 'Frank', notes: 'Max distance, full reset between.', track: true },
              { name: '10-yd sprint start', sets: 5, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: 'Tread or outdoors. 3-point stance, walk back.' }
            ]},
            { name: 'Shared Lift — Lower', exercises: [
              { name: 'Trap bar deadlift', sets: 4, reps: '8', tempo: '2-1-1-0', load: 'Moderate', who: 'Both', notes: 'Push the floor away, flat back. RIR 2–3.', track: true },
              { name: 'DB RDL', sets: 3, reps: '10', tempo: '3-0-1-0', load: 'Moderate', who: 'Both', notes: 'Hinge, feel the hamstrings.', track: true },
              { name: 'DB reverse lunge', sets: 3, reps: '10/leg', tempo: 'ctrl', load: 'Moderate', who: 'Both', notes: 'Tall torso, control the step back.', track: true },
              { name: 'Single-leg calf iso-hold', sets: 3, reps: '30s/leg', tempo: 'iso', load: 'BW', who: 'Both', notes: 'Tendon work.' }
            ]},
            { name: 'D-Rock — Conditioning', exercises: [
              { name: 'Peloton bike intervals', sets: 6, reps: '30s on / 90s off', tempo: '—', load: 'Hard', who: 'D-Rock', notes: 'Z4–Z5 effort.', isInterval: true, workSec: 30, restSec: 90 }
            ]},
            { name: 'Shared Core', exercises: [
              { name: 'Pallof press', sets: 3, reps: '10/side', tempo: '2s hold', load: 'Band', who: 'Both', notes: 'Anti-rotation.' },
              { name: 'Dead bug', sets: 3, reps: '8/side', tempo: 'slow', load: 'BW', who: 'Both', notes: 'Ribs down.' },
              { name: 'Side plank', sets: 3, reps: '30s/side', tempo: 'iso', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Cooldown', exercises: [
              { name: 'Couch stretch', sets: 2, reps: '45s/side', tempo: '—', load: '—', who: 'Both', notes: '' },
              { name: '90/90 hip switches', sets: 2, reps: '8/side', tempo: '—', load: '—', who: 'Both', notes: '' }
            ]}
          ]
        },
        {
          day: 'WED', date: 'Jul 22', theme: 'Upper Mass + Rotational Power',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike or tread easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Band pull-aparts', sets: 2, reps: '15', tempo: '—', load: 'Light', who: 'Both', notes: '' },
              { name: 'Shoulder CARs', sets: 2, reps: '5/side', tempo: 'slow', load: 'BW', who: 'Both', notes: '' },
              { name: 'T-spine open book', sets: 2, reps: '6/side', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Rotational Power', exercises: [
              { name: 'Med ball rotational throw', sets: 4, reps: '4/side', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Hips lead, full follow-through.' },
              { name: 'Med ball overhead slam', sets: 3, reps: '6', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Max effort every rep.' },
              { name: 'Med ball chest pass', sets: 3, reps: '5', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Explosive push off the chest.' }
            ]},
            { name: 'Shared Push — Mass', exercises: [
              { name: 'DB bench press', sets: 4, reps: '10', tempo: '2-1-1-0', load: 'Moderate', who: 'Both', notes: 'Full stretch at the bottom, RIR 2.', track: true },
              { name: 'DB incline press', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: 'Upper chest.', track: true },
              { name: 'Seated DB shoulder press', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: 'No back arch.', track: true }
            ]},
            { name: 'Shared Pull — Mass', exercises: [
              { name: 'Single-arm DB row', sets: 4, reps: '10/side', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: 'Full pull, squeeze the back.', track: true },
              { name: 'Bent-over barbell row', sets: 3, reps: '10', tempo: '2-1-1-0', load: 'Moderate', who: 'Both', notes: 'Olympic bar, flat back, pull to belly.', track: true },
              { name: 'Band face pull', sets: 3, reps: '15', tempo: '2s hold', load: 'Band', who: 'Both', notes: 'Rear delt + posture.' }
            ]},
            { name: 'Arms & Core', exercises: [
              { name: 'DB curl', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: 'Frank — grow the guns. Slow negatives, no swing.', track: true },
              { name: 'DB overhead triceps extension', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: 'Full stretch overhead.', track: true },
              { name: 'Plank', sets: 3, reps: '40s', tempo: 'iso', load: 'BW', who: 'Both', notes: 'Ribs down, glutes tight.' }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Jul 24', theme: 'Total-Body Power + Strength',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: "World's greatest stretch", sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'Pogo hops', sets: 2, reps: '20', tempo: '—', load: 'BW', who: 'Both', notes: 'Ankle prep.' },
              { name: 'Band pull-aparts', sets: 2, reps: '15', tempo: '—', load: 'Light', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Explosive', exercises: [
              { name: 'Broad jump', sets: 3, reps: '3', tempo: '—', load: 'BW', who: 'Frank', notes: 'Max distance, stick the landing.', track: true },
              { name: 'Lateral bound + stick', sets: 3, reps: '4/side', tempo: '—', load: 'BW', who: 'Frank', notes: 'Stick 2s, no wobble.' },
              { name: 'Med ball overhead slam', sets: 3, reps: '6', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Whole body into it.' }
            ]},
            { name: 'Shared Lift — Full Body', exercises: [
              { name: 'Goblet squat', sets: 4, reps: '10', tempo: '3-1-1-0', load: 'Moderate', who: 'Both', notes: 'Knees track toes, sit deep.', track: true },
              { name: 'Floor press', sets: 3, reps: '8', tempo: '2-1-1-0', load: 'Moderate', who: 'Both', notes: 'Olympic bar or DBs. Pause on the floor.', track: true },
              { name: 'Trap bar farmer carry', sets: 3, reps: '40 yd', tempo: '—', load: 'Heavy', who: 'Both', notes: 'Grip + traps. Tall posture, no lean.', track: true },
              { name: 'Single-arm DB row', sets: 3, reps: '10/side', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: '', track: true }
            ]},
            { name: 'D-Rock — Conditioning', exercises: [
              { name: 'Rower intervals', sets: 5, reps: '1 min on / 1 off', tempo: '—', load: 'Hard', who: 'D-Rock', notes: 'Z4.', isInterval: true, workSec: 60, restSec: 60 }
            ]},
            { name: 'Anti-Rotation & Core', exercises: [
              { name: 'Suitcase carry', sets: 3, reps: '30 yd/side', tempo: '—', load: 'Mod-heavy DB', who: 'Both', notes: "Don't lean toward the weight.", track: true },
              { name: 'Bird dog', sets: 3, reps: '8/side', tempo: '3s hold', load: 'BW', who: 'Both', notes: '' },
              { name: 'Hollow hold', sets: 3, reps: '20s', tempo: 'iso', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Bike or row sprints', sets: 5, reps: '20s all-out / 40s easy', tempo: '—', load: 'All-out', who: 'Both', notes: 'Compete.', isInterval: true, workSec: 20, restSec: 40 }
            ]}
          ]
        }
      ]
    },
    {
      num: 2,
      label: 'INTENSIFY',
      blurb: 'Add load. Reps hold, intent climbs. Beat Week 1 on the trap bar and the jumps.',
      sessions: [
        {
          day: 'MON', date: 'Jul 27', theme: 'Lower Power + Trap Bar Strength',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: "World's greatest stretch", sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'A-skips + B-skips', sets: 2, reps: '20 yd', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'Pogo + single-leg pogo', sets: 2, reps: '20 + 10/leg', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Power & Speed', exercises: [
              { name: 'Trap bar jump', sets: 5, reps: '3', tempo: '—', load: 'Light-mod', who: 'Frank', notes: 'A touch heavier than Wk1, still fast off the floor.', track: true },
              { name: 'Broad jump', sets: 4, reps: '3', tempo: '—', load: 'BW', who: 'Frank', notes: 'Beat Wk1 distance.', track: true },
              { name: '10-yd flying sprint', sets: 5, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: 'Build up, then sprint through.' }
            ]},
            { name: 'Shared Lift — Lower', exercises: [
              { name: 'Trap bar deadlift', sets: 4, reps: '8', tempo: '2-1-1-0', load: 'Heavier', who: 'Both', notes: 'Beat Wk1 load. RIR 2.', track: true },
              { name: 'DB RDL', sets: 3, reps: '10', tempo: '3-0-1-0', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'DB reverse lunge', sets: 3, reps: '10/leg', tempo: 'ctrl', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Single-leg calf raise', sets: 3, reps: '12/leg', tempo: '3-0-1-0', load: 'DB held', who: 'Both', notes: 'Tendon.' }
            ]},
            { name: 'D-Rock — Conditioning', exercises: [
              { name: 'Peloton bike intervals', sets: 8, reps: '30s on / 90s off', tempo: '—', load: 'Hard', who: 'D-Rock', notes: '+2 rounds vs Wk1.', isInterval: true, workSec: 30, restSec: 90 }
            ]},
            { name: 'Shared Core', exercises: [
              { name: 'Pallof press + hold', sets: 3, reps: '10/side', tempo: 'iso', load: 'Band', who: 'Both', notes: '' },
              { name: 'Weighted dead bug', sets: 3, reps: '8/side', tempo: 'slow', load: 'Light DB', who: 'Both', notes: '' },
              { name: 'Side plank w/ reach', sets: 3, reps: '30s/side', tempo: 'iso', load: 'BW', who: 'Both', notes: '' }
            ]}
          ]
        },
        {
          day: 'WED', date: 'Jul 29', theme: 'Upper Mass + Rotational Power',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike or tread easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Band Y-T-W + pull-aparts', sets: 2, reps: '10', tempo: '—', load: 'Light', who: 'Both', notes: '' },
              { name: 'Shoulder CARs + open book', sets: 2, reps: '5–6', tempo: 'slow', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Rotational Power', exercises: [
              { name: 'Med ball rotational throw', sets: 5, reps: '4/side', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Max velocity, hips drive it.' },
              { name: 'Med ball overhead slam', sets: 4, reps: '6', tempo: '—', load: '10 lb', who: 'Frank', notes: '' },
              { name: 'Med ball shotput throw', sets: 3, reps: '4/side', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Hitting transfer — drive off the back leg.' }
            ]},
            { name: 'Shared Push — Mass', exercises: [
              { name: 'DB bench press', sets: 4, reps: '10', tempo: '2-1-1-0', load: 'Heavier', who: 'Both', notes: 'Beat Wk1. RIR 2.', track: true },
              { name: 'DB incline press', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Seated DB shoulder press', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Heavier', who: 'Both', notes: '', track: true }
            ]},
            { name: 'Shared Pull — Mass', exercises: [
              { name: 'Single-arm DB row', sets: 4, reps: '10/side', tempo: '2-0-1-0', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Bent-over barbell row', sets: 3, reps: '10', tempo: '2-1-1-0', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Band face pull', sets: 3, reps: '15', tempo: '2s hold', load: 'Band', who: 'Both', notes: '' }
            ]},
            { name: 'Arms & Core', exercises: [
              { name: 'DB curl', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Heavier', who: 'Both', notes: 'Slow negatives.', track: true },
              { name: 'DB overhead triceps extension', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Plank', sets: 3, reps: '45s', tempo: 'iso', load: 'BW', who: 'Both', notes: '' }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Jul 31', theme: 'Total-Body Power + Strength',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: "World's greatest stretch", sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'Pogo + skips', sets: 2, reps: '20 + 20 yd', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Explosive', exercises: [
              { name: 'Broad jump', sets: 4, reps: '3', tempo: '—', load: 'BW', who: 'Frank', notes: 'Beat Wk1.', track: true },
              { name: 'Lateral bound + stick', sets: 3, reps: '4/side', tempo: '—', load: 'BW', who: 'Frank', notes: '' },
              { name: 'Med ball overhead slam', sets: 3, reps: '8', tempo: '—', load: '10 lb', who: 'Frank', notes: 'More reps, same intent.' }
            ]},
            { name: 'Shared Lift — Full Body', exercises: [
              { name: 'Goblet squat', sets: 4, reps: '10', tempo: '3-1-1-0', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Floor press', sets: 3, reps: '8', tempo: '2-1-1-0', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Trap bar farmer carry', sets: 3, reps: '40 yd', tempo: '—', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Single-arm DB row', sets: 3, reps: '10/side', tempo: '2-0-1-0', load: 'Heavier', who: 'Both', notes: '', track: true }
            ]},
            { name: 'D-Rock — Conditioning', exercises: [
              { name: 'Rower intervals', sets: 6, reps: '1 min on / 1 off', tempo: '—', load: 'Hard', who: 'D-Rock', notes: '', isInterval: true, workSec: 60, restSec: 60 }
            ]},
            { name: 'Anti-Rotation & Core', exercises: [
              { name: 'Suitcase carry', sets: 3, reps: '40 yd/side', tempo: '—', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'Bird dog w/ reach', sets: 3, reps: '8/side', tempo: '3s hold', load: 'BW', who: 'Both', notes: '' },
              { name: 'Hollow hold', sets: 3, reps: '25s', tempo: 'iso', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Bike or row sprints', sets: 6, reps: '20s all-out / 40s easy', tempo: '—', load: 'All-out', who: 'Both', notes: 'Compete. +1 round.', isInterval: true, workSec: 20, restSec: 40 }
            ]}
          ]
        }
      ]
    },
    {
      num: 3,
      label: 'PEAK',
      blurb: 'Heaviest loads, most power. PRs land here. Eat big, lift hard, jump far.',
      sessions: [
        {
          day: 'MON', date: 'Aug 3', theme: 'Lower Power + Trap Bar Strength',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: "World's greatest stretch", sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'A/B-skips + fast leg', sets: 2, reps: '20 yd', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'Pogo + depth drop', sets: 2, reps: '20 + 5', tempo: '—', load: 'BW', who: 'Both', notes: 'Soft land.' }
            ]},
            { name: 'Frank — Power PEAK', exercises: [
              { name: 'Trap bar jump', sets: 5, reps: '3', tempo: '—', load: 'Moderate', who: 'Frank', notes: 'PR intent — jump tall, stay explosive.', track: true },
              { name: 'Broad jump', sets: 5, reps: '3', tempo: '—', load: 'BW', who: 'Frank', notes: 'PR attempt.', track: true },
              { name: 'Flying 10-yd sprint (timed)', sets: 4, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: 'Time it, record best.', track: true }
            ]},
            { name: 'Shared Lift — Lower', exercises: [
              { name: 'Trap bar deadlift', sets: 5, reps: '5', tempo: '2-1-1-0', load: 'Top set heavy', who: 'Both', notes: 'Strength peak. Frank RIR 3 / DR RIR 2.', track: true },
              { name: 'DB RDL', sets: 3, reps: '8', tempo: '3-0-1-0', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'DB walking lunge', sets: 3, reps: '10/leg', tempo: 'ctrl', load: 'Moderate', who: 'Both', notes: '', track: true },
              { name: 'Single-leg calf raise (slow ecc)', sets: 4, reps: '8/leg', tempo: '4-0-1-0', load: 'DB held', who: 'Both', notes: 'Tendon.' }
            ]},
            { name: 'D-Rock — Conditioning', exercises: [
              { name: 'Peloton bike intervals', sets: 8, reps: '40s on / 80s off', tempo: '—', load: 'Hard', who: 'D-Rock', notes: 'Density up.', isInterval: true, workSec: 40, restSec: 80 }
            ]},
            { name: 'Shared Core', exercises: [
              { name: 'Pallof press + chop', sets: 3, reps: '8/side', tempo: '2s hold', load: 'Band', who: 'Both', notes: '' },
              { name: 'Weighted dead bug', sets: 3, reps: '8/side', tempo: 'slow', load: 'DB', who: 'Both', notes: '' },
              { name: 'Copenhagen plank (assisted)', sets: 3, reps: '20s/side', tempo: 'iso', load: 'BW', who: 'Both', notes: 'Adductor armor.' }
            ]}
          ]
        },
        {
          day: 'WED', date: 'Aug 5', theme: 'Upper Mass + Rotational PEAK',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike or tread easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Band Y-T-W-A', sets: 2, reps: '8 each', tempo: '—', load: 'Light', who: 'Both', notes: '' },
              { name: 'Shoulder CARs + open book', sets: 2, reps: '5–6', tempo: 'slow', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Rotational PEAK', exercises: [
              { name: 'Med ball rotational throw', sets: 5, reps: '5/side', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Max velocity — move your only ball as fast as you can.' },
              { name: 'Med ball overhead slam', sets: 4, reps: '6', tempo: '—', load: '10 lb', who: 'Frank', notes: '' },
              { name: 'Step-back rotational throw', sets: 4, reps: '4/side', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Hitting load transfer.' },
              { name: 'Med ball chest pass', sets: 3, reps: '5', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Explosive.' }
            ]},
            { name: 'Shared Push — Mass', exercises: [
              { name: 'DB bench press', sets: 5, reps: '8', tempo: '2-1-1-0', load: 'Heavy', who: 'Both', notes: 'RIR 2.', track: true },
              { name: 'DB incline press', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Heavy', who: 'Both', notes: '', track: true },
              { name: 'Seated DB shoulder press', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Heavy', who: 'Both', notes: '', track: true }
            ]},
            { name: 'Shared Pull — Mass', exercises: [
              { name: 'Single-arm DB row', sets: 4, reps: '8/side', tempo: '2-1-1-1', load: 'Heavy', who: 'Both', notes: 'Pause at the top.', track: true },
              { name: 'Bent-over barbell row', sets: 3, reps: '8', tempo: '2-1-1-0', load: 'Heavy', who: 'Both', notes: '', track: true },
              { name: 'Band face pull', sets: 3, reps: '15', tempo: '2s hold', load: 'Band', who: 'Both', notes: '' }
            ]},
            { name: 'Arms', exercises: [
              { name: 'DB curl', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Heavy', who: 'Both', notes: 'Last set to failure.', track: true },
              { name: 'DB overhead triceps extension', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Heavy', who: 'Both', notes: '', track: true }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Aug 7', theme: 'Total-Body Power + Strength',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: "World's greatest stretch", sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'Pogo + bounds', sets: 2, reps: '20 + 4/side', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Explosive PEAK', exercises: [
              { name: 'Trap bar jump', sets: 5, reps: '3', tempo: '—', load: 'Moderate', who: 'Frank', notes: 'PR intent.', track: true },
              { name: 'Lateral bound for distance', sets: 3, reps: '4/side', tempo: '—', load: 'BW', who: 'Frank', notes: 'Measure it.', track: true },
              { name: 'Med ball overhead slam', sets: 4, reps: '6', tempo: '—', load: '10 lb', who: 'Frank', notes: '' }
            ]},
            { name: 'Shared Lift — Full Body', exercises: [
              { name: 'Goblet or front-rack squat', sets: 5, reps: '8', tempo: '3-1-1-0', load: 'Top set heavy', who: 'Both', notes: 'RIR 2.', track: true },
              { name: 'Floor press', sets: 4, reps: '6', tempo: '2-1-1-0', load: 'Heavy', who: 'Both', notes: '', track: true },
              { name: 'Trap bar farmer carry', sets: 3, reps: '50 yd', tempo: '—', load: 'Heavy', who: 'Both', notes: 'Longest carry of the block.', track: true },
              { name: 'Single-arm DB row', sets: 3, reps: '8/side', tempo: '2-1-1-0', load: 'Heavy', who: 'Both', notes: '', track: true }
            ]},
            { name: 'D-Rock — Conditioning', exercises: [
              { name: 'Rower or tread intervals', sets: 6, reps: '1 min on / 90s off', tempo: '—', load: 'Very hard', who: 'D-Rock', notes: '', isInterval: true, workSec: 60, restSec: 90 }
            ]},
            { name: 'Anti-Rotation & Core', exercises: [
              { name: 'Suitcase carry', sets: 3, reps: '40 yd/side', tempo: '—', load: 'Heavy DB', who: 'Both', notes: 'Tall posture.', track: true },
              { name: 'Bird dog w/ band', sets: 3, reps: '8/side', tempo: '3s hold', load: 'Band', who: 'Both', notes: '' },
              { name: 'Hollow hold', sets: 3, reps: '30s', tempo: 'iso', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Bike or row sprints', sets: 8, reps: '20s all-out / 40s easy', tempo: '—', load: 'All-out', who: 'Both', notes: 'Compete. Empty the tank.', isInterval: true, workSec: 20, restSec: 40 }
            ]}
          ]
        }
      ]
    },
    {
      num: 4,
      label: 'DELOAD',
      blurb: 'Pull volume back, keep the snap. Recharge — then re-up heavier next block.',
      sessions: [
        {
          day: 'MON', date: 'Aug 10', theme: 'Lower Power + Strength (Deload)',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Dynamic mobility flow', sets: 2, reps: '5 min', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'A-skips + pogos', sets: 2, reps: '20 yd + 20', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Power Maintain', exercises: [
              { name: 'Trap bar jump', sets: 3, reps: '3', tempo: '—', load: 'Light', who: 'Frank', notes: 'Quality over volume — feel snappy, not maxed.' },
              { name: 'Broad jump', sets: 3, reps: '3', tempo: '—', load: 'BW', who: 'Frank', notes: 'Crisp reps.' },
              { name: '10-yd sprint', sets: 3, reps: '1', tempo: '—', load: 'BW', who: 'Frank', notes: '' }
            ]},
            { name: 'Shared Lift — Lower', exercises: [
              { name: 'Trap bar deadlift', sets: 3, reps: '6', tempo: '2-0-1-0', load: 'Wk2 weight', who: 'Both', notes: 'RIR 4 — easy, move fast.', track: true },
              { name: 'DB RDL', sets: 2, reps: '8', tempo: '2-0-1-0', load: 'Wk2 weight', who: 'Both', notes: '', track: true },
              { name: 'DB reverse lunge', sets: 2, reps: '8/leg', tempo: 'ctrl', load: 'Light DB', who: 'Both', notes: '', track: true },
              { name: 'Calf iso-hold', sets: 3, reps: '30s/leg', tempo: 'iso', load: 'BW', who: 'Both', notes: 'Keep tendon stim.' }
            ]},
            { name: 'D-Rock — Conditioning', exercises: [
              { name: 'Peloton bike intervals', sets: 5, reps: '30s on / 90s off', tempo: '—', load: 'Mod-hard', who: 'D-Rock', notes: 'Pull back 30%.', isInterval: true, workSec: 30, restSec: 90 }
            ]},
            { name: 'Shared Core', exercises: [
              { name: 'Pallof press', sets: 3, reps: '10/side', tempo: '2s hold', load: 'Band', who: 'Both', notes: '' },
              { name: 'Side plank', sets: 2, reps: '30s/side', tempo: 'iso', load: 'BW', who: 'Both', notes: '' }
            ]}
          ]
        },
        {
          day: 'WED', date: 'Aug 12', theme: 'Upper Mass + Rotational (Deload)',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike or tread easy', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Band Y-T-W', sets: 2, reps: '8 each', tempo: '—', load: 'Light', who: 'Both', notes: '' },
              { name: 'Shoulder CARs + T-spine', sets: 2, reps: '5/side', tempo: 'slow', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Rotational Maintain', exercises: [
              { name: 'Med ball rotational throw', sets: 3, reps: '4/side', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Feel fast.' },
              { name: 'Med ball overhead slam', sets: 3, reps: '5', tempo: '—', load: '10 lb', who: 'Frank', notes: '' }
            ]},
            { name: 'Shared Push — Reduced', exercises: [
              { name: 'DB bench press', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Wk2 weight', who: 'Both', notes: 'RIR 4.', track: true },
              { name: 'DB incline press', sets: 2, reps: '10', tempo: '2-0-1-0', load: 'Light-mod', who: 'Both', notes: '', track: true }
            ]},
            { name: 'Shared Pull — Reduced', exercises: [
              { name: 'Single-arm DB row', sets: 3, reps: '10/side', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: '', track: true },
              { name: 'Band face pull', sets: 3, reps: '15', tempo: '2s hold', load: 'Band', who: 'Both', notes: '' }
            ]},
            { name: 'Arms', exercises: [
              { name: 'DB curl', sets: 2, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: '', track: true },
              { name: 'DB overhead triceps extension', sets: 2, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: '', track: true }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Aug 14', theme: 'Total-Body Power + Strength (Deload)',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' },
              { name: 'Mobility flow', sets: 2, reps: '5 min', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'Pogo hops', sets: 2, reps: '15', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Explosive Maintain', exercises: [
              { name: 'Broad jump', sets: 3, reps: '3', tempo: '—', load: 'BW', who: 'Frank', notes: 'Quality reps, full recovery.' },
              { name: 'Med ball overhead slam', sets: 3, reps: '5', tempo: '—', load: '10 lb', who: 'Frank', notes: '' },
              { name: 'Lateral bound + stick', sets: 2, reps: '4/side', tempo: '—', load: 'BW', who: 'Frank', notes: '' }
            ]},
            { name: 'Shared Lift — Full Body', exercises: [
              { name: 'Goblet squat', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Wk2 weight', who: 'Both', notes: 'RIR 4 — crisp, not maxed.', track: true },
              { name: 'Floor press', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Light-mod', who: 'Both', notes: 'Move fast.', track: true },
              { name: 'Trap bar farmer carry', sets: 2, reps: '40 yd', tempo: '—', load: 'Moderate', who: 'Both', notes: '', track: true }
            ]},
            { name: 'D-Rock — Conditioning', exercises: [
              { name: 'Zone 2 bike or walk', sets: 1, reps: '30 min', tempo: '—', load: 'Z2', who: 'D-Rock', notes: 'Easy aerobic.' }
            ]},
            { name: 'Core', exercises: [
              { name: 'Suitcase carry', sets: 2, reps: '30 yd/side', tempo: '—', load: 'Moderate', who: 'Both', notes: '', track: true },
              { name: 'Bird dog', sets: 2, reps: '8/side', tempo: '3s hold', load: 'BW', who: 'Both', notes: '' }
            ]}
          ]
        }
      ]
    }
  ]
};

// Logan — Hip Rebuild & Return-to-Run.
// Low-impact, hip-centric, muscle-maintenance program building toward a walk/run test.
export const LOGAN_PROGRAM = {
  id: 'logan',
  name: 'Logan — Hip Rebuild & Return-to-Run',
  startDate: '2026-06-08',
  note: "Cleared with your doctor/PT first (repaired hip + new meds). Eat enough protein (~0.7–1 g/lb) to hold muscle while on tirzepatide. Sharp hip pain = stop and regress.",
  weeks: [
    {
      num: 1,
      label: 'FOUNDATION',
      blurb: 'Learn the movements. Light loads. Wake the hip up.',
      sessions: [
        {
          day: 'MON', date: 'Jun 8', theme: 'Lower Strength + Hip Stability',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Logan', notes: 'Get blood to the hip.' },
              { name: 'Leg swings (front/back + lateral)', sets: 2, reps: '10/side', tempo: '—', load: 'BW', who: 'Logan', notes: 'Controlled, pain-free range.' },
              { name: '90/90 hip switches', sets: 2, reps: '8/side', tempo: 'slow', load: 'BW', who: 'Logan', notes: 'Open the hips.' }
            ]},
            { name: 'Hip Activation', exercises: [
              { name: 'Side-lying clamshell', sets: 2, reps: '12/side', tempo: 'slow', load: 'Band optional', who: 'Logan', notes: 'Feel the side glute, not the low back.' },
              { name: 'Glute bridge', sets: 2, reps: '12', tempo: '2-1-1-0', load: 'BW', who: 'Logan', notes: 'Squeeze at top, ribs down.' },
              { name: 'Banded lateral walk', sets: 2, reps: '10/side', tempo: '—', load: 'Light band', who: 'Logan', notes: 'Stay low, keep band tension.' }
            ]},
            { name: 'Lower Strength', exercises: [
              { name: 'Goblet squat to box', sets: 3, reps: '10', tempo: '3-1-1-0', load: 'Light DB', who: 'Logan', notes: 'Sit to box, control the descent.', track: true },
              { name: 'DB RDL', sets: 3, reps: '10', tempo: '3-0-1-0', load: 'Light', who: 'Logan', notes: 'Hinge, flat back, feel hamstrings.', track: true },
              { name: 'Step-up (low box)', sets: 2, reps: '8/leg', tempo: 'ctrl', load: 'BW or light DB', who: 'Logan', notes: 'Drive through heel, no push-off from bottom foot.', track: true }
            ]},
            { name: 'Calf & Ankle', exercises: [
              { name: 'Standing calf raise', sets: 2, reps: '15', tempo: '2-0-2-0', load: 'BW', who: 'Logan', notes: 'Full range.' },
              { name: 'Tibialis raise', sets: 2, reps: '15', tempo: 'ctrl', load: 'BW', who: 'Logan', notes: 'Shin strength for running.' }
            ]},
            { name: 'Cooldown', exercises: [
              { name: 'Couch stretch', sets: 2, reps: '30s/side', tempo: '—', load: '—', who: 'Logan', notes: 'Gentle.' },
              { name: 'Figure-4 glute stretch', sets: 2, reps: '30s/side', tempo: '—', load: '—', who: 'Logan', notes: '' }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Jun 9', theme: 'Upper Strength + Core',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike or row easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: 'Band pull-aparts', sets: 2, reps: '15', tempo: '—', load: 'Light', who: 'Logan', notes: '' },
              { name: 'Shoulder CARs', sets: 2, reps: '5/side', tempo: 'slow', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Upper Push', exercises: [
              { name: 'DB bench or floor press', sets: 3, reps: '10', tempo: '2-1-1-0', load: 'Moderate', who: 'Logan', notes: 'RIR 3.', track: true },
              { name: 'Seated DB shoulder press', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Light-mod', who: 'Logan', notes: 'No back arch.', track: true }
            ]},
            { name: 'Upper Pull', exercises: [
              { name: 'Single-arm DB row', sets: 3, reps: '10/side', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: 'Flat back, full pull.', track: true },
              { name: 'Band or cable lat pulldown', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true },
              { name: 'Face pull', sets: 2, reps: '15', tempo: '2s hold', load: 'Light', who: 'Logan', notes: 'Posture / rear delt.', track: true }
            ]},
            { name: 'Core', exercises: [
              { name: 'Dead bug', sets: 3, reps: '8/side', tempo: 'slow', load: 'BW', who: 'Logan', notes: 'Ribs down, low back flat.' },
              { name: 'Pallof press', sets: 3, reps: '10/side', tempo: '2s hold', load: 'Band', who: 'Logan', notes: 'Anti-rotation = pelvic control for running.' },
              { name: 'Side plank (knees if needed)', sets: 2, reps: '20s/side', tempo: 'iso', load: 'BW', who: 'Logan', notes: '' }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Jun 11', theme: 'Glutes / Single-Leg + Cardio',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: "World's greatest stretch", sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Ankle rocks', sets: 2, reps: '10/side', tempo: '—', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Hip Activation', exercises: [
              { name: 'Banded monster walk', sets: 2, reps: '10 steps/way', tempo: '—', load: 'Light band', who: 'Logan', notes: '' },
              { name: 'Single-leg glute bridge', sets: 2, reps: '8/leg', tempo: '2-1-1-0', load: 'BW', who: 'Logan', notes: 'Keep hips level.' }
            ]},
            { name: 'Single-Leg & Stability', exercises: [
              { name: 'Split squat (assisted)', sets: 3, reps: '8/leg', tempo: '2-1-1-0', load: 'BW or light DB', who: 'Logan', notes: 'Hold support, vertical shin, pain-free.', track: true },
              { name: 'Single-leg RDL (to support)', sets: 2, reps: '8/leg', tempo: 'slow', load: 'BW or light DB', who: 'Logan', notes: 'Balance + hinge.', track: true },
              { name: 'Lateral step-down (low)', sets: 2, reps: '8/leg', tempo: 'slow', load: 'BW', who: 'Logan', notes: 'Control the knee, tap heel softly.' },
              { name: 'Single-leg balance', sets: 2, reps: '30s/leg', tempo: 'iso', load: 'BW', who: 'Logan', notes: 'Eyes forward; progress to eyes closed.' }
            ]},
            { name: 'Cardio (Zone 2)', exercises: [
              { name: 'Bike or incline walk', sets: 1, reps: '20 min', tempo: '—', load: 'Z2', who: 'Logan', notes: 'Conversational pace. Low impact.' }
            ]},
            { name: 'Cooldown', exercises: [
              { name: 'Pigeon stretch (gentle)', sets: 2, reps: '30s/side', tempo: '—', load: '—', who: 'Logan', notes: '' }
            ]}
          ]
        },
        {
          day: 'SAT', date: 'Jun 13', theme: 'Full-Body Strength + Aerobic Base',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Row or bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: 'Hip airplane (support)', sets: 2, reps: '5/side', tempo: 'slow', load: 'BW', who: 'Logan', notes: 'Hip control.' },
              { name: 'Band pull-aparts', sets: 2, reps: '15', tempo: '—', load: 'Light', who: 'Logan', notes: '' }
            ]},
            { name: 'Full-Body Strength', exercises: [
              { name: 'Trap bar deadlift (light)', sets: 3, reps: '8', tempo: '2-1-1-0', load: 'Light-mod', who: 'Logan', notes: 'Push the floor away, neutral spine.', track: true },
              { name: 'Goblet squat', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Light-mod', who: 'Logan', notes: '', track: true },
              { name: 'Push-up (incline if needed)', sets: 2, reps: '8-10', tempo: '2-1-1-0', load: 'BW', who: 'Logan', notes: 'Whole body tight.', track: true },
              { name: 'Single-arm DB row', sets: 2, reps: '10/side', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true }
            ]},
            { name: 'Core', exercises: [
              { name: 'Bird dog', sets: 3, reps: '8/side', tempo: '3s hold', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Side plank', sets: 2, reps: '20s/side', tempo: 'iso', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Aerobic Base', exercises: [
              { name: 'Bike intervals (easy)', sets: 5, reps: '1 min on / 2 min off', tempo: '—', load: 'Mod', who: 'Logan', notes: 'On = brisk but smooth. Builds the engine for running.', isInterval: true, workSec: 60, restSec: 120 }
            ]}
          ]
        }
      ]
    },
    {
      num: 2,
      label: 'BUILD',
      blurb: 'Add a little load. More single-leg. Longer easy cardio.',
      sessions: [
        {
          day: 'MON', date: 'Jun 15', theme: 'Lower Strength + Hip Stability',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: 'Leg swings', sets: 2, reps: '10/side', tempo: '—', load: 'BW', who: 'Logan', notes: '' },
              { name: '90/90 hip switches', sets: 2, reps: '8/side', tempo: 'slow', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Hip Activation', exercises: [
              { name: 'Banded clamshell', sets: 2, reps: '15/side', tempo: 'slow', load: 'Band', who: 'Logan', notes: '' },
              { name: 'Glute bridge', sets: 3, reps: '12', tempo: '2-1-1-0', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Banded lateral walk', sets: 2, reps: '12/side', tempo: '—', load: 'Light band', who: 'Logan', notes: '' }
            ]},
            { name: 'Lower Strength', exercises: [
              { name: 'Goblet squat', sets: 3, reps: '10', tempo: '3-1-1-0', load: 'Moderate', who: 'Logan', notes: 'Full depth if pain-free.', track: true },
              { name: 'DB RDL', sets: 3, reps: '10', tempo: '3-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true },
              { name: 'Reverse lunge (controlled)', sets: 3, reps: '8/leg', tempo: 'ctrl', load: 'Light DB', who: 'Logan', notes: 'Low impact — step back softly.', track: true },
              { name: 'DB hip thrust', sets: 3, reps: '12', tempo: '2-1-1-0', load: 'Moderate', who: 'Logan', notes: 'Shoulders on bench, chin tucked.', track: true }
            ]},
            { name: 'Calf & Ankle', exercises: [
              { name: 'Single-leg calf raise', sets: 2, reps: '12/leg', tempo: '2-0-2-0', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Tibialis raise', sets: 2, reps: '20', tempo: 'ctrl', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Cooldown', exercises: [
              { name: 'Couch stretch + figure-4', sets: 2, reps: '30s/side', tempo: '—', load: '—', who: 'Logan', notes: '' }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Jun 16', theme: 'Upper Strength + Core',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike or row easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: 'Band pull-aparts + Y-T-W', sets: 2, reps: '10', tempo: '—', load: 'Light', who: 'Logan', notes: '' }
            ]},
            { name: 'Upper Push', exercises: [
              { name: 'DB bench or floor press', sets: 3, reps: '10', tempo: '2-1-1-0', load: 'Mod-heavy', who: 'Logan', notes: 'RIR 2-3.', track: true },
              { name: 'DB incline press', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true },
              { name: 'DB lateral raise', sets: 2, reps: '12', tempo: 'ctrl', load: 'Light', who: 'Logan', notes: '', track: true }
            ]},
            { name: 'Upper Pull', exercises: [
              { name: 'Single-arm DB row', sets: 3, reps: '10/side', tempo: '2-0-1-0', load: 'Mod-heavy', who: 'Logan', notes: '', track: true },
              { name: 'Lat pulldown', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true },
              { name: 'Face pull', sets: 3, reps: '15', tempo: '2s hold', load: 'Light', who: 'Logan', notes: '', track: true }
            ]},
            { name: 'Core', exercises: [
              { name: 'Dead bug', sets: 3, reps: '10/side', tempo: 'slow', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Pallof press', sets: 3, reps: '10/side', tempo: '2s hold', load: 'Band', who: 'Logan', notes: '' },
              { name: 'Side plank', sets: 3, reps: '25s/side', tempo: 'iso', load: 'BW', who: 'Logan', notes: '' }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Jun 18', theme: 'Glutes / Single-Leg + Cardio',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: "World's greatest stretch", sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Hip Activation', exercises: [
              { name: 'Banded monster walk', sets: 2, reps: '12 steps/way', tempo: '—', load: 'Band', who: 'Logan', notes: '' },
              { name: 'Single-leg glute bridge', sets: 3, reps: '8/leg', tempo: '2-1-1-0', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Single-Leg & Stability', exercises: [
              { name: 'Split squat (light DB)', sets: 3, reps: '8/leg', tempo: '2-1-1-0', load: 'Light DB', who: 'Logan', notes: 'Less support than Wk1.', track: true },
              { name: 'Single-leg RDL', sets: 3, reps: '8/leg', tempo: 'slow', load: 'Light DB', who: 'Logan', notes: '', track: true },
              { name: 'Lateral step-down', sets: 3, reps: '8/leg', tempo: 'slow', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Single-leg balance + reach', sets: 2, reps: '40s/leg', tempo: 'iso', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Cardio (Zone 2)', exercises: [
              { name: 'Bike or incline walk', sets: 1, reps: '25 min', tempo: '—', load: 'Z2', who: 'Logan', notes: 'Conversational. Build aerobic base.' }
            ]},
            { name: 'Cooldown', exercises: [
              { name: 'Pigeon stretch (gentle)', sets: 2, reps: '30s/side', tempo: '—', load: '—', who: 'Logan', notes: '' }
            ]}
          ]
        },
        {
          day: 'SAT', date: 'Jun 20', theme: 'Full-Body Strength + Aerobic Base',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Row or bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: 'Hip airplane (support)', sets: 2, reps: '5/side', tempo: 'slow', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Full-Body Strength', exercises: [
              { name: 'Trap bar deadlift', sets: 3, reps: '8', tempo: '2-1-1-0', load: 'Moderate', who: 'Logan', notes: 'RIR 2-3.', track: true },
              { name: 'Goblet squat', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true },
              { name: 'Push-up', sets: 3, reps: '8-10', tempo: '2-1-1-0', load: 'BW', who: 'Logan', notes: '', track: true },
              { name: 'Single-arm DB row', sets: 3, reps: '10/side', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true }
            ]},
            { name: 'Core', exercises: [
              { name: 'Bird dog', sets: 3, reps: '8/side', tempo: '3s hold', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Side plank', sets: 3, reps: '25s/side', tempo: 'iso', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Pallof press', sets: 2, reps: '10/side', tempo: '2s hold', load: 'Band', who: 'Logan', notes: '' }
            ]},
            { name: 'Aerobic Base', exercises: [
              { name: 'Bike intervals', sets: 6, reps: '1 min on / 2 min off', tempo: '—', load: 'Mod', who: 'Logan', notes: '+1 round vs Wk1.', isInterval: true, workSec: 60, restSec: 120 }
            ]}
          ]
        }
      ]
    },
    {
      num: 3,
      label: 'STRENGTHEN',
      blurb: 'Heavier strength. Gentle impact prep to ready the tendons.',
      sessions: [
        {
          day: 'MON', date: 'Jun 22', theme: 'Lower Strength + Hip Stability',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: 'Leg swings + 90/90', sets: 2, reps: '10/side', tempo: '—', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Hip Activation', exercises: [
              { name: 'Banded clamshell', sets: 2, reps: '15/side', tempo: 'slow', load: 'Band', who: 'Logan', notes: '' },
              { name: 'Banded lateral walk', sets: 2, reps: '12/side', tempo: '—', load: 'Band', who: 'Logan', notes: '' },
              { name: 'Single-leg glute bridge', sets: 2, reps: '10/leg', tempo: '2-1-1-0', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Lower Strength', exercises: [
              { name: 'Goblet or front-rack squat', sets: 4, reps: '8', tempo: '3-1-1-0', load: 'Heavier', who: 'Logan', notes: 'RIR 2.', track: true },
              { name: 'DB RDL', sets: 4, reps: '8', tempo: '3-0-1-0', load: 'Heavier', who: 'Logan', notes: '', track: true },
              { name: 'Bulgarian split squat', sets: 3, reps: '8/leg', tempo: '2-1-1-0', load: 'Moderate', who: 'Logan', notes: 'Slow, controlled.', track: true },
              { name: 'DB hip thrust', sets: 3, reps: '10', tempo: '2-1-1-0', load: 'Heavier', who: 'Logan', notes: '', track: true }
            ]},
            { name: 'Impact Prep', exercises: [
              { name: 'Pogo hops (low, soft)', sets: 3, reps: '15', tempo: '—', load: 'BW', who: 'Logan', notes: 'Stiff ankles, quiet landings. Stop if the hip complains.' }
            ]},
            { name: 'Calf & Ankle', exercises: [
              { name: 'Single-leg calf raise', sets: 3, reps: '12/leg', tempo: '2-0-2-0', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Tibialis raise', sets: 3, reps: '20', tempo: 'ctrl', load: 'BW', who: 'Logan', notes: '' }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Jun 23', theme: 'Upper Strength + Core',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike or row easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: 'Band pull-aparts + Y-T-W', sets: 2, reps: '10', tempo: '—', load: 'Light', who: 'Logan', notes: '' }
            ]},
            { name: 'Upper Push', exercises: [
              { name: 'DB bench press', sets: 4, reps: '8', tempo: '2-1-1-0', load: 'Heavier', who: 'Logan', notes: 'RIR 2.', track: true },
              { name: 'Seated DB shoulder press', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Mod-heavy', who: 'Logan', notes: '', track: true },
              { name: 'DB lateral raise', sets: 3, reps: '12', tempo: 'ctrl', load: 'Light', who: 'Logan', notes: '', track: true }
            ]},
            { name: 'Upper Pull', exercises: [
              { name: 'Single-arm DB row', sets: 4, reps: '8/side', tempo: '2-1-1-0', load: 'Heavier', who: 'Logan', notes: 'Pause at top.', track: true },
              { name: 'Lat pulldown', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Heavier', who: 'Logan', notes: '', track: true },
              { name: 'Face pull', sets: 3, reps: '15', tempo: '2s hold', load: 'Light', who: 'Logan', notes: '', track: true }
            ]},
            { name: 'Core', exercises: [
              { name: 'Weighted dead bug', sets: 3, reps: '8/side', tempo: 'slow', load: 'Light DB', who: 'Logan', notes: '' },
              { name: 'Pallof press + hold', sets: 3, reps: '8/side', tempo: 'iso', load: 'Band', who: 'Logan', notes: '' },
              { name: 'Side plank', sets: 3, reps: '30s/side', tempo: 'iso', load: 'BW', who: 'Logan', notes: '' }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Jun 25', theme: 'Glutes / Single-Leg + Impact',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: "World's greatest stretch", sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Hip Activation', exercises: [
              { name: 'Banded monster walk', sets: 2, reps: '12 steps/way', tempo: '—', load: 'Band', who: 'Logan', notes: '' },
              { name: 'Single-leg glute bridge (pause)', sets: 3, reps: '8/leg', tempo: '2-2-1-0', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Single-Leg & Stability', exercises: [
              { name: 'Split squat', sets: 3, reps: '8/leg', tempo: '2-1-1-0', load: 'Heavier', who: 'Logan', notes: '', track: true },
              { name: 'Single-leg RDL', sets: 3, reps: '8/leg', tempo: 'slow', load: 'Moderate', who: 'Logan', notes: '', track: true },
              { name: 'Lateral step-down', sets: 3, reps: '10/leg', tempo: 'slow', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Impact Prep', exercises: [
              { name: 'Double-leg hops in place', sets: 3, reps: '10', tempo: '—', load: 'BW', who: 'Logan', notes: 'Soft, quiet landings.' },
              { name: 'Low line hops (side-to-side)', sets: 2, reps: '10/side', tempo: '—', load: 'BW', who: 'Logan', notes: 'Small amplitude, controlled.' }
            ]},
            { name: 'Cardio (Zone 2)', exercises: [
              { name: 'Bike or incline walk', sets: 1, reps: '25 min', tempo: '—', load: 'Z2', who: 'Logan', notes: '' }
            ]}
          ]
        },
        {
          day: 'SAT', date: 'Jun 27', theme: 'Full-Body Strength + Aerobic Base',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Row or bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: 'Hip airplane (support)', sets: 2, reps: '5/side', tempo: 'slow', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Full-Body Strength', exercises: [
              { name: 'Trap bar deadlift', sets: 4, reps: '6', tempo: '2-1-1-0', load: 'Heavier', who: 'Logan', notes: 'RIR 2.', track: true },
              { name: 'Goblet squat', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Heavier', who: 'Logan', notes: '', track: true },
              { name: 'Push-up', sets: 3, reps: '10', tempo: '2-1-1-0', load: 'BW', who: 'Logan', notes: '', track: true },
              { name: 'Single-arm DB row', sets: 3, reps: '8/side', tempo: '2-0-1-0', load: 'Heavier', who: 'Logan', notes: '', track: true }
            ]},
            { name: 'Core', exercises: [
              { name: 'Bird dog', sets: 3, reps: '8/side', tempo: '3s hold', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Side plank', sets: 3, reps: '30s/side', tempo: 'iso', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Aerobic Base', exercises: [
              { name: 'Bike intervals', sets: 6, reps: '90s on / 90s off', tempo: '—', load: 'Mod-hard', who: 'Logan', notes: 'Density up.', isInterval: true, workSec: 90, restSec: 90 }
            ]}
          ]
        }
      ]
    },
    {
      num: 4,
      label: 'BRIDGE',
      blurb: 'Pull volume back a touch. Test the hip with walk/run — the milestone.',
      sessions: [
        {
          day: 'MON', date: 'Jun 29', theme: 'Lower Strength (Maintain) + Hip',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: 'Leg swings + 90/90', sets: 2, reps: '10/side', tempo: '—', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Hip Activation', exercises: [
              { name: 'Banded clamshell', sets: 2, reps: '15/side', tempo: 'slow', load: 'Band', who: 'Logan', notes: '' },
              { name: 'Banded lateral walk', sets: 2, reps: '12/side', tempo: '—', load: 'Band', who: 'Logan', notes: '' }
            ]},
            { name: 'Lower Strength', exercises: [
              { name: 'Goblet squat', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Wk2-3 weight', who: 'Logan', notes: 'RIR 3 — keep it crisp, not maxed.', track: true },
              { name: 'DB RDL', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true },
              { name: 'Bulgarian split squat', sets: 2, reps: '8/leg', tempo: '2-1-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true },
              { name: 'DB hip thrust', sets: 3, reps: '10', tempo: '2-1-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true }
            ]},
            { name: 'Calf & Ankle', exercises: [
              { name: 'Single-leg calf raise', sets: 3, reps: '12/leg', tempo: '2-0-2-0', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Tibialis raise', sets: 2, reps: '20', tempo: 'ctrl', load: 'BW', who: 'Logan', notes: '' }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Jun 30', theme: 'Upper Strength + Core',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike or row easy', sets: 1, reps: '4 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: 'Band pull-aparts', sets: 2, reps: '15', tempo: '—', load: 'Light', who: 'Logan', notes: '' }
            ]},
            { name: 'Upper Push', exercises: [
              { name: 'DB bench press', sets: 3, reps: '8', tempo: '2-1-1-0', load: 'Moderate', who: 'Logan', notes: 'RIR 3.', track: true },
              { name: 'Seated DB shoulder press', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true }
            ]},
            { name: 'Upper Pull', exercises: [
              { name: 'Single-arm DB row', sets: 3, reps: '8/side', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true },
              { name: 'Lat pulldown', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true },
              { name: 'Face pull', sets: 2, reps: '15', tempo: '2s hold', load: 'Light', who: 'Logan', notes: '', track: true }
            ]},
            { name: 'Core', exercises: [
              { name: 'Dead bug', sets: 3, reps: '8/side', tempo: 'slow', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Pallof press', sets: 3, reps: '10/side', tempo: '2s hold', load: 'Band', who: 'Logan', notes: '' },
              { name: 'Side plank', sets: 2, reps: '30s/side', tempo: 'iso', load: 'BW', who: 'Logan', notes: '' }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Jul 2', theme: 'Walk/Run Test + Glutes',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Brisk walk', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Logan', notes: 'Warm up the legs.' },
              { name: 'Leg swings', sets: 1, reps: '10/side', tempo: '—', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Clamshell + glute bridge', sets: 1, reps: '15 each', tempo: '—', load: 'BW', who: 'Logan', notes: 'Prime the hips.' },
              { name: 'Ankle pogos', sets: 1, reps: '15', tempo: '—', load: 'BW', who: 'Logan', notes: 'Soft.' }
            ]},
            { name: 'Walk/Run Test', exercises: [
              { name: 'Walk/run intervals', sets: 6, reps: '1 min jog / 2 min walk', tempo: '—', load: 'Easy jog', who: 'Logan', notes: 'Jog easy and smooth, land soft. Hip pain = walk it instead. This is a test, not a race.', isInterval: true, workSec: 60, restSec: 120 },
              { name: 'Cooldown walk', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Logan', notes: 'Bring the heart rate down.' }
            ]},
            { name: 'Glutes (light)', exercises: [
              { name: 'Single-leg glute bridge', sets: 2, reps: '10/leg', tempo: '2-1-1-0', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Side plank', sets: 2, reps: '30s/side', tempo: 'iso', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Couch stretch + figure-4', sets: 2, reps: '30s/side', tempo: '—', load: '—', who: 'Logan', notes: '' }
            ]}
          ]
        },
        {
          day: 'SAT', date: 'Jul 4', theme: 'Full-Body Strength + Recovery Cardio',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Row or bike easy', sets: 1, reps: '5 min', tempo: '—', load: 'Easy', who: 'Logan', notes: '' },
              { name: 'Hip airplane (support)', sets: 2, reps: '5/side', tempo: 'slow', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Full-Body Strength', exercises: [
              { name: 'Trap bar deadlift', sets: 3, reps: '6', tempo: '2-1-1-0', load: 'Moderate', who: 'Logan', notes: 'Smooth, RIR 3.', track: true },
              { name: 'Goblet squat', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true },
              { name: 'Push-up', sets: 3, reps: '10', tempo: '2-1-1-0', load: 'BW', who: 'Logan', notes: '', track: true },
              { name: 'Single-arm DB row', sets: 3, reps: '10/side', tempo: '2-0-1-0', load: 'Moderate', who: 'Logan', notes: '', track: true }
            ]},
            { name: 'Core', exercises: [
              { name: 'Bird dog', sets: 3, reps: '8/side', tempo: '3s hold', load: 'BW', who: 'Logan', notes: '' },
              { name: 'Side plank', sets: 2, reps: '30s/side', tempo: 'iso', load: 'BW', who: 'Logan', notes: '' }
            ]},
            { name: 'Recovery Cardio', exercises: [
              { name: 'Bike or incline walk (Z2)', sets: 1, reps: '25 min', tempo: '—', load: 'Z2', who: 'Logan', notes: 'Easy — recover from the run test. Next block: progress the running.' }
            ]}
          ]
        }
      ]
    }
  ]
};

// Program registry + people. Each person maps to the program they follow.
export const PROGRAMS = { ramp: PROGRAM, logan: LOGAN_PROGRAM };

export const PEOPLE = [
  { name: 'D-Rock', programId: 'ramp', dot: 'bg-amber-500' },
  { name: 'Frank', programId: 'ramp', dot: 'bg-red-500' },
  { name: 'Logan', programId: 'logan', dot: 'bg-sky-400' }
];

export const programIdForPerson = (name) =>
  (PEOPLE.find(p => p.name === name) || PEOPLE[0]).programId;

// Helpers
export const exerciseKey = (w, s, b, e) => `w${w}-s${s}-b${b}-e${e}`;

export const getCurrentSession = (program = PROGRAM) => {
  const start = new Date(program.startDate);
  const today = new Date();
  const daysSince = Math.floor((today - start) / 86400000);
  if (daysSince < 0) return { weekIdx: 0, sessionIdx: 0 };
  const weekIdx = Math.min(Math.floor(daysSince / 7), program.weeks.length - 1);
  const dayOfWeek = today.getDay();
  const week = program.weeks[weekIdx];
  const n = week.sessions.length;
  let sessionIdx;
  if (n <= 3) {
    // 3-day (MON/WED/FRI) block: Mon–Tue → 0, Wed–Thu → 1, Fri–Sun → 2.
    if (dayOfWeek === 1 || dayOfWeek === 2) sessionIdx = 0;
    else if (dayOfWeek === 3 || dayOfWeek === 4) sessionIdx = 1;
    else sessionIdx = 2;
  } else {
    // 4-day (MON/TUE/THU/SAT) block.
    if (dayOfWeek >= 1 && dayOfWeek <= 2) sessionIdx = dayOfWeek - 1;
    else if (dayOfWeek >= 3 && dayOfWeek <= 5) sessionIdx = 2;
    else sessionIdx = 3;
  }
  sessionIdx = Math.min(sessionIdx, n - 1);
  return { weekIdx, sessionIdx };
};

export const ytSearchUrl = (name) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(name + ' form demo')}`;
