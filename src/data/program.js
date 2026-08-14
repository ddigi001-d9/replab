// Full DiGiovanni 4-Week Ramp program data.
// Each exercise: { name, sets, reps, tempo, load, who, notes, track?, isInterval?, workSec?, restSec? }
//   - track: true     → show weight/reps/RPE logger
//   - isInterval: true → render an interval timer instead of generic rest timer

export const PROGRAM = {
  id: 'ramp',
  name: 'D-Rock & Frank — 20-Min Power & BJJ',
  startDate: '2026-08-10',
  repeating: true, // auto-advance: after the last week, loop back to Week 1 as a new cycle
  note: "20-min sessions. Mon/Thu build power & mass; Tue/Fri learn BJJ (watch the demo, then drill it). Frank plays libero — volleyball M–F, 90 min — so keep the lifts short and crisp, eat for mass (protein + slight surplus, sleep 9+), and treat BJJ days as skill work + active recovery. Tap 'Watch' on a BJJ move to pull up a demo video.",
  weeks: [
    {
      num: 1,
      label: 'FUNDAMENTALS',
      blurb: '20-min sessions. Lift Mon/Thu, learn BJJ Tue/Fri. Groove the movements, set baselines.',
      sessions: [
        {
          day: 'MON', date: 'Aug 10', theme: 'Power & Mass — Lower',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike + dynamic flow', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: 'Raise the heart rate, open hips + shoulders. Keep it moving — 20-min cap.' }
            ]},
            { name: 'Frank — Power', exercises: [
              { name: 'Trap bar jump', sets: 4, reps: '3', tempo: '—', load: 'Light-mod', who: 'Frank', notes: 'Explosive triple extension, soft landing. Full reset between reps.', track: true }
            ]},
            { name: 'Strength Superset A', exercises: [
              { name: 'Trap bar deadlift', sets: 4, reps: '6', tempo: '2-1-1-0', load: 'Moderate-heavy', who: 'Both', notes: 'Superset with the row — go back-to-back, short rest. RIR 2.', track: true },
              { name: 'Single-arm DB row', sets: 4, reps: '8/side', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: 'Straight into it after the deadlift.', track: true }
            ]},
            { name: 'Strength Superset B', exercises: [
              { name: 'DB bench press', sets: 3, reps: '8', tempo: '2-1-1-0', load: 'Moderate', who: 'Both', notes: 'Superset with the squat. Full stretch at the bottom.', track: true },
              { name: 'Goblet squat', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: 'Short rest — beat the clock.', track: true }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Aug 11', theme: 'BJJ — Movement & Escapes',
          blocks: [
            { name: 'BJJ Warmup', exercises: [
              { name: 'Shrimp (hip escape)', sets: 2, reps: '20 yd', tempo: '—', load: 'BW', who: 'Both', notes: 'Drive off the foot, slide the hips out. The most important movement in BJJ.' },
              { name: 'Bridge + technical stand-up', sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Both', notes: 'Base and posture fundamentals.' }
            ]},
            { name: 'Learn', exercises: [
              { name: 'Watch: BJJ fundamentals — posture, base & frames', sets: 1, reps: '4 min', tempo: '—', load: '—', who: 'Both', notes: 'Watch first, then drill what you saw. Talk through it together.', video: 'bjj fundamentals posture base and frames for beginners' }
            ]},
            { name: 'Drill', exercises: [
              { name: 'Drill: hip escape to guard recovery', sets: 3, reps: '6/side', tempo: 'slow', load: '—', who: 'Both', notes: 'Slow, correct reps beat fast sloppy ones.', track: true }
            ]},
            { name: 'Roll — Positional', exercises: [
              { name: 'Positional: escape the mount (bottom)', sets: 3, reps: '3-min round', tempo: '—', load: '—', who: 'Both', notes: 'Start pinned under mount, work to escape. Reset each round. Tap early, tap often.', isInterval: true, workSec: 180, restSec: 60 }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Aug 13', theme: 'Power & Mass — Upper',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike + band pull-aparts', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: 'Warm the shoulders and mid-back.' }
            ]},
            { name: 'Frank — Rotational Power', exercises: [
              { name: 'Med ball overhead slam', sets: 4, reps: '5', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Whole body into it, max effort each rep.' },
              { name: 'Med ball rotational throw', sets: 3, reps: '4/side', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Hips lead — great transfer to volleyball passing + hitting.' }
            ]},
            { name: 'Strength Superset A', exercises: [
              { name: 'DB bench press', sets: 4, reps: '8', tempo: '2-1-1-0', load: 'Moderate', who: 'Both', notes: 'Superset with the row, short rest. RIR 2.', track: true },
              { name: 'Bent-over barbell row', sets: 4, reps: '8', tempo: '2-1-1-0', load: 'Moderate', who: 'Both', notes: 'Olympic bar, flat back, pull to the belly.', track: true }
            ]},
            { name: 'Strength Superset B', exercises: [
              { name: 'DB reverse lunge', sets: 3, reps: '8/leg', tempo: 'ctrl', load: 'Moderate', who: 'Both', notes: 'Superset with the curl.', track: true },
              { name: 'DB curl', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: 'Grow the guns. Slow negatives, no swing.', track: true }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Aug 14', theme: 'BJJ — Closed Guard',
          blocks: [
            { name: 'BJJ Warmup', exercises: [
              { name: 'Shrimp + bridges', sets: 2, reps: '30s each', tempo: '—', load: 'BW', who: 'Both', notes: 'Prime the hips.' },
              { name: 'Technical stand-up', sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Learn', exercises: [
              { name: 'Watch: closed guard — posture control & breaking grips', sets: 1, reps: '4 min', tempo: '—', load: '—', who: 'Both', notes: 'How to hold someone in closed guard and break their posture.', video: 'closed guard basics posture control breaking grips beginner bjj' }
            ]},
            { name: 'Drill', exercises: [
              { name: 'Drill: closed guard maintenance & posture break', sets: 3, reps: '5/side', tempo: 'slow', load: '—', who: 'Both', notes: 'Feet crossed, break the posture, recover if they stand.', track: true }
            ]},
            { name: 'Roll — Positional', exercises: [
              { name: 'Positional: keep / recover closed guard', sets: 3, reps: '3-min round', tempo: '—', load: '—', who: 'Both', notes: 'Bottom keeps guard closed; top tries to open and pass. Switch each round.', isInterval: true, workSec: 180, restSec: 60 }
            ]}
          ]
        }
      ]
    },
    {
      num: 2,
      label: 'GUARD & SWEEPS',
      blurb: 'Add load on the lifts. On the mat, start turning defense into sweeps.',
      sessions: [
        {
          day: 'MON', date: 'Aug 17', theme: 'Power & Mass — Lower',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike + dynamic flow', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Power', exercises: [
              { name: 'Trap bar jump', sets: 5, reps: '3', tempo: '—', load: 'Light-mod', who: 'Frank', notes: 'A touch heavier than Wk1, still fast off the floor.', track: true }
            ]},
            { name: 'Strength Superset A', exercises: [
              { name: 'Trap bar deadlift', sets: 4, reps: '6', tempo: '2-1-1-0', load: 'Heavier', who: 'Both', notes: 'Beat Wk1 load. Superset with the row.', track: true },
              { name: 'Single-arm DB row', sets: 4, reps: '10/side', tempo: '2-0-1-0', load: 'Heavier', who: 'Both', notes: '', track: true }
            ]},
            { name: 'Strength Superset B', exercises: [
              { name: 'DB bench press', sets: 3, reps: '8', tempo: '2-1-1-0', load: 'Heavier', who: 'Both', notes: 'Superset with the squat.', track: true },
              { name: 'Goblet squat', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Heavier', who: 'Both', notes: '', track: true }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Aug 18', theme: 'BJJ — Scissor Sweep',
          blocks: [
            { name: 'BJJ Warmup', exercises: [
              { name: 'Shrimp + technical stand-up', sets: 2, reps: '20 yd / 5 ea', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'Guard sit-outs', sets: 2, reps: '8/side', tempo: '—', load: 'BW', who: 'Both', notes: 'Hip mobility for sweeps.' }
            ]},
            { name: 'Learn', exercises: [
              { name: 'Watch: scissor sweep from closed guard', sets: 1, reps: '4 min', tempo: '—', load: '—', who: 'Both', notes: 'Off-balance, then chop the legs like scissors.', video: 'scissor sweep from closed guard step by step bjj' }
            ]},
            { name: 'Drill', exercises: [
              { name: 'Drill: scissor sweep', sets: 3, reps: '5/side', tempo: 'ctrl', load: '—', who: 'Both', notes: 'Grip, angle, sweep, come up on top.', track: true }
            ]},
            { name: 'Roll — Positional', exercises: [
              { name: 'Positional: sweep from guard', sets: 3, reps: '3-min round', tempo: '—', load: '—', who: 'Both', notes: 'Bottom tries to sweep and come up; top tries to pass. Switch each round.', isInterval: true, workSec: 180, restSec: 60 }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Aug 20', theme: 'Power & Mass — Upper',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike + band pull-aparts', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Rotational Power', exercises: [
              { name: 'Med ball overhead slam', sets: 5, reps: '5', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Max effort.' },
              { name: 'Med ball rotational throw', sets: 3, reps: '4/side', tempo: '—', load: '10 lb', who: 'Frank', notes: '' }
            ]},
            { name: 'Strength Superset A', exercises: [
              { name: 'DB bench press', sets: 4, reps: '8', tempo: '2-1-1-0', load: 'Heavier', who: 'Both', notes: 'Beat Wk1. Superset with the row.', track: true },
              { name: 'Bent-over barbell row', sets: 4, reps: '8', tempo: '2-1-1-0', load: 'Heavier', who: 'Both', notes: '', track: true }
            ]},
            { name: 'Strength Superset B', exercises: [
              { name: 'DB reverse lunge', sets: 3, reps: '8/leg', tempo: 'ctrl', load: 'Heavier', who: 'Both', notes: '', track: true },
              { name: 'DB curl', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Heavier', who: 'Both', notes: '', track: true }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Aug 21', theme: 'BJJ — Hip Bump & Kimura',
          blocks: [
            { name: 'BJJ Warmup', exercises: [
              { name: 'Shrimp + bridges', sets: 2, reps: '30s each', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'Technical stand-up', sets: 2, reps: '5/side', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Learn', exercises: [
              { name: 'Watch: hip bump sweep + kimura from guard', sets: 1, reps: '4 min', tempo: '—', load: '—', who: 'Both', notes: 'Two attacks off the same setup — when one fails, hit the other.', video: 'hip bump sweep and kimura from closed guard bjj' }
            ]},
            { name: 'Drill', exercises: [
              { name: 'Drill: hip bump → kimura chain', sets: 3, reps: '5/side', tempo: 'ctrl', load: '—', who: 'Both', notes: 'Sit up, bump; if they post, take the kimura grip.', track: true }
            ]},
            { name: 'Roll — Positional', exercises: [
              { name: 'Positional: submit or sweep from guard', sets: 3, reps: '3-min round', tempo: '—', load: '—', who: 'Both', notes: 'Bottom hunts sweep or submission. Switch each round.', isInterval: true, workSec: 180, restSec: 60 }
            ]}
          ]
        }
      ]
    },
    {
      num: 3,
      label: 'PASS & PIN',
      blurb: 'Heaviest lifts of the block — power & mass peak. On the mat, get on top and pass.',
      sessions: [
        {
          day: 'MON', date: 'Aug 24', theme: 'Power & Mass — Lower',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike + dynamic flow', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Power', exercises: [
              { name: 'Trap bar jump', sets: 5, reps: '3', tempo: '—', load: 'Moderate', who: 'Frank', notes: 'PR intent — jump tall, stay explosive.', track: true }
            ]},
            { name: 'Strength Superset A', exercises: [
              { name: 'Trap bar deadlift', sets: 5, reps: '5', tempo: '2-1-1-0', load: 'Top set heavy', who: 'Both', notes: 'Strength peak. Frank RIR 3 / D-Rock RIR 2. Superset with the row.', track: true },
              { name: 'Single-arm DB row', sets: 4, reps: '8/side', tempo: '2-1-1-0', load: 'Heavy', who: 'Both', notes: 'Pause at the top.', track: true }
            ]},
            { name: 'Strength Superset B', exercises: [
              { name: 'DB bench press', sets: 4, reps: '6', tempo: '2-1-1-0', load: 'Heavy', who: 'Both', notes: 'Superset with the squat. RIR 2.', track: true },
              { name: 'Goblet squat', sets: 4, reps: '8', tempo: '2-0-1-0', load: 'Heavy', who: 'Both', notes: '', track: true }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Aug 25', theme: 'BJJ — Knee-Cut Pass',
          blocks: [
            { name: 'BJJ Warmup', exercises: [
              { name: 'Shrimp + technical stand-up', sets: 2, reps: '20 yd / 5 ea', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'Leg pummel / knee slides', sets: 2, reps: '8/side', tempo: '—', load: 'BW', who: 'Both', notes: 'Passing footwork.' }
            ]},
            { name: 'Learn', exercises: [
              { name: 'Watch: knee-cut guard pass', sets: 1, reps: '4 min', tempo: '—', load: '—', who: 'Both', notes: 'Slice the knee across, pin the head, land in side control.', video: 'knee cut guard pass step by step bjj' }
            ]},
            { name: 'Drill', exercises: [
              { name: 'Drill: knee-cut pass to side control', sets: 3, reps: '5/side', tempo: 'ctrl', load: '—', who: 'Both', notes: 'Underhook, kill the leg, cut through.', track: true }
            ]},
            { name: 'Roll — Positional', exercises: [
              { name: 'Positional: pass the guard', sets: 3, reps: '3-min round', tempo: '—', load: '—', who: 'Both', notes: 'Top tries to pass to side control; bottom retains. Switch each round.', isInterval: true, workSec: 180, restSec: 60 }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Aug 27', theme: 'Power & Mass — Upper',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike + band pull-aparts', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Rotational Power', exercises: [
              { name: 'Med ball overhead slam', sets: 5, reps: '5', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Peak power — fast and violent.' },
              { name: 'Med ball rotational throw', sets: 4, reps: '4/side', tempo: '—', load: '10 lb', who: 'Frank', notes: '' }
            ]},
            { name: 'Strength Superset A', exercises: [
              { name: 'Floor press', sets: 5, reps: '5', tempo: '2-1-1-0', load: 'Heavy', who: 'Both', notes: 'Olympic bar or DBs. Pause on the floor. Superset with the row.', track: true },
              { name: 'Bent-over barbell row', sets: 4, reps: '6', tempo: '2-1-1-0', load: 'Heavy', who: 'Both', notes: '', track: true }
            ]},
            { name: 'Strength Superset B', exercises: [
              { name: 'DB walking lunge', sets: 3, reps: '10/leg', tempo: 'ctrl', load: 'Moderate', who: 'Both', notes: '', track: true },
              { name: 'DB curl', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Heavy', who: 'Both', notes: 'Last set to failure.', track: true }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Aug 28', theme: 'BJJ — Side Control Escapes',
          blocks: [
            { name: 'BJJ Warmup', exercises: [
              { name: 'Shrimp + bridges', sets: 2, reps: '30s each', tempo: '—', load: 'BW', who: 'Both', notes: '' },
              { name: 'Framing drill', sets: 2, reps: '8/side', tempo: '—', load: 'BW', who: 'Both', notes: 'Strong frames = escapes.' }
            ]},
            { name: 'Learn', exercises: [
              { name: 'Watch: escaping side control (frames & recover guard)', sets: 1, reps: '4 min', tempo: '—', load: '—', who: 'Both', notes: 'Frame, shrimp, recover guard or get to knees.', video: 'how to escape side control frames recover guard bjj' }
            ]},
            { name: 'Drill', exercises: [
              { name: 'Drill: side control escape to guard', sets: 3, reps: '5/side', tempo: 'ctrl', load: '—', who: 'Both', notes: '', track: true }
            ]},
            { name: 'Roll — Positional', exercises: [
              { name: 'Positional: escape side control', sets: 3, reps: '3-min round', tempo: '—', load: '—', who: 'Both', notes: 'Start pinned, work to escape; top tries to hold and advance. Switch each round.', isInterval: true, workSec: 180, restSec: 60 }
            ]}
          ]
        }
      ]
    },
    {
      num: 4,
      label: 'FLOW & DELOAD',
      blurb: 'Pull the lifts back to recharge — keep the snap. On the mat, tie it together and flow.',
      sessions: [
        {
          day: 'MON', date: 'Aug 31', theme: 'Power & Mass — Lower (Deload)',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike + dynamic flow', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Power', exercises: [
              { name: 'Trap bar jump', sets: 3, reps: '3', tempo: '—', load: 'Light', who: 'Frank', notes: 'Quality over volume — feel snappy, not maxed.' }
            ]},
            { name: 'Strength Superset A', exercises: [
              { name: 'Trap bar deadlift', sets: 3, reps: '5', tempo: '2-0-1-0', load: 'Wk2 weight', who: 'Both', notes: 'RIR 4 — easy, move fast. Superset with the row.', track: true },
              { name: 'Single-arm DB row', sets: 3, reps: '10/side', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: '', track: true }
            ]},
            { name: 'Strength Superset B', exercises: [
              { name: 'DB bench press', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Wk2 weight', who: 'Both', notes: '', track: true },
              { name: 'Goblet squat', sets: 2, reps: '10', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: '', track: true }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Sep 1', theme: 'BJJ — Mount Attacks',
          blocks: [
            { name: 'BJJ Warmup', exercises: [
              { name: 'Shrimp + technical stand-up', sets: 2, reps: '20 yd / 5 ea', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Learn', exercises: [
              { name: 'Watch: mount control + armbar', sets: 1, reps: '4 min', tempo: '—', load: '—', who: 'Both', notes: 'Stay heavy on top, isolate the arm.', video: 'mount control and armbar for beginners bjj' }
            ]},
            { name: 'Drill', exercises: [
              { name: 'Drill: mount → armbar', sets: 3, reps: '5/side', tempo: 'ctrl', load: '—', who: 'Both', notes: 'Control first, then attack. Slow and safe on the arm.', track: true }
            ]},
            { name: 'Roll — Positional', exercises: [
              { name: 'Positional: hold / escape mount', sets: 3, reps: '3-min round', tempo: '—', load: '—', who: 'Both', notes: 'Top keeps mount + attacks; bottom escapes. Switch each round.', isInterval: true, workSec: 180, restSec: 60 }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Sep 3', theme: 'Power & Mass — Upper (Deload)',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Bike + band pull-aparts', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'Both', notes: '' }
            ]},
            { name: 'Frank — Rotational Power', exercises: [
              { name: 'Med ball overhead slam', sets: 3, reps: '5', tempo: '—', load: '10 lb', who: 'Frank', notes: 'Feel fast, not fried.' },
              { name: 'Med ball rotational throw', sets: 2, reps: '4/side', tempo: '—', load: '10 lb', who: 'Frank', notes: '' }
            ]},
            { name: 'Strength Superset A', exercises: [
              { name: 'DB bench press', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Wk2 weight', who: 'Both', notes: 'RIR 4. Superset with the row.', track: true },
              { name: 'Bent-over barbell row', sets: 3, reps: '8', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: '', track: true }
            ]},
            { name: 'Strength Superset B', exercises: [
              { name: 'DB reverse lunge', sets: 2, reps: '8/leg', tempo: 'ctrl', load: 'Moderate', who: 'Both', notes: '', track: true },
              { name: 'DB curl', sets: 2, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'Both', notes: '', track: true }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Sep 4', theme: 'BJJ — Back Control + Flow Roll',
          blocks: [
            { name: 'BJJ Warmup', exercises: [
              { name: 'Shrimp + bridges', sets: 2, reps: '30s each', tempo: '—', load: 'BW', who: 'Both', notes: '' }
            ]},
            { name: 'Learn', exercises: [
              { name: 'Watch: back control — seatbelt & rear naked choke', sets: 1, reps: '4 min', tempo: '—', load: '—', who: 'Both', notes: 'Seatbelt grip, hooks in, finish the choke. Go slow on the neck when drilling.', video: 'back control seatbelt and rear naked choke basics bjj' }
            ]},
            { name: 'Drill', exercises: [
              { name: 'Drill: take the back → RNC', sets: 3, reps: '5/side', tempo: 'ctrl', load: '—', who: 'Both', notes: 'Control the seatbelt before hunting the finish.', track: true }
            ]},
            { name: 'Roll — Flow', exercises: [
              { name: 'Flow roll: tie the block together', sets: 3, reps: '3-min round', tempo: '—', load: '—', who: 'Both', notes: 'Light, playful rounds — move through everything you learned. 30–50% pace.', isInterval: true, workSec: 180, restSec: 60 }
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

// John — Recomp 6 (dumbbell-only, build muscle + lose fat).
// 4 days/week, ~30 min a night. Dumbbells to 45 lb, floor + bodyweight — no bench
// or machines. Short rest + a metabolic finisher drive fat loss; the main lifts
// build muscle. One-time 6-week block (not repeating).
export const JOHN_PROGRAM = {
  id: 'john',
  name: 'John — Recomp 6',
  startDate: '2026-08-10',
  note: "45 and chasing both muscle and fat loss — the recomp play: lift hard for muscle, keep rest short, and finish with a metabolic burst. The kitchen drives the fat loss: slight calorie deficit, high protein (~0.8–1 g/lb of goal bodyweight), 8–10k steps a day, 7+ hrs sleep. 45-lb dumbbells are plenty — when a lift gets easy, add reps, slow the tempo, or cut rest before chasing heavier. Any sharp joint pain = stop and regress.",
  weeks: [
    {
      num: 1,
      label: 'FOUNDATION',
      blurb: 'Learn the movements, moderate loads. Keep rest ~60s so the heart rate stays up.',
      sessions: [
        {
          day: 'MON', date: 'Aug 10', theme: 'Lower Body — Squat',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'March + bodyweight squats + hip openers', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: 'Raise the heart rate, loosen the hips.' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'Goblet squat', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Moderate DB', who: 'John', notes: 'Chest up, sit between the hips. Rest ~60s.', track: true },
              { name: 'DB reverse lunge', sets: 3, reps: '10/leg', tempo: 'ctrl', load: 'Moderate', who: 'John', notes: 'Control the step back, drive through the heel.', track: true },
              { name: 'DB Romanian deadlift', sets: 3, reps: '12', tempo: '3-0-1-0', load: 'Moderate', who: 'John', notes: 'Hinge, soft knees, feel the hamstrings.', track: true },
              { name: 'DB glute bridge (floor)', sets: 3, reps: '15', tempo: '2-1-1-0', load: 'Moderate on hips', who: 'John', notes: 'DB on the hips, squeeze hard at the top.', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'DB thruster burnout', sets: 4, reps: '40s on / 20s off', tempo: '—', load: 'Light-mod', who: 'John', notes: 'Squat to overhead press, nonstop. The fat-burn close.', isInterval: true, workSec: 40, restSec: 20 }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Aug 11', theme: 'Upper Body — Push',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Push-ups + arm circles + shoulder taps', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: 'Warm the shoulders and chest.' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'DB floor press', sets: 3, reps: '12', tempo: '2-1-1-0', load: 'Moderate', who: 'John', notes: 'Press from the floor — pause when the triceps touch down.', track: true },
              { name: 'DB standing overhead press', sets: 3, reps: '10', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: 'Ribs down, no back arch, full lockout.', track: true },
              { name: 'DB lateral raise', sets: 3, reps: '15', tempo: '2-0-1-0', load: 'Light', who: 'John', notes: 'Lead with the elbows, control the way down.', track: true },
              { name: 'DB overhead triceps extension', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: 'Full stretch behind the head.', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Push-up + mountain climber combo', sets: 4, reps: '40s on / 20s off', tempo: '—', load: 'BW', who: 'John', notes: 'Push-ups to near-failure, then climbers. Keep moving.', isInterval: true, workSec: 40, restSec: 20 }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Aug 13', theme: 'Lower Body — Hinge',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'March + bodyweight good mornings + leg swings', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: 'Prime the hips and hamstrings.' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'DB Romanian deadlift', sets: 3, reps: '12', tempo: '3-0-1-0', load: 'Moderate-heavy', who: 'John', notes: 'Main hinge — load the hamstrings and glutes.', track: true },
              { name: 'Split squat (rear foot on chair)', sets: 3, reps: '10/leg', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: 'Rear foot on a chair/couch; if not, do a reverse lunge.', track: true },
              { name: 'DB sumo squat', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: 'Wide stance, toes out, drive the knees out.', track: true },
              { name: 'DB calf raise', sets: 3, reps: '20', tempo: '2-0-2-0', load: 'Moderate', who: 'John', notes: 'Full range, pause at the top.', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'DB swing (hip hinge)', sets: 4, reps: '40s on / 20s off', tempo: '—', load: 'Moderate', who: 'John', notes: 'Snap the hips, not a squat. Big fat-burner.', isInterval: true, workSec: 40, restSec: 20 }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Aug 14', theme: 'Upper Body — Pull',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Arm circles + light DB rows + band-style pull-aparts', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: 'Wake up the back and rear delts.' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'Bent-over DB row', sets: 3, reps: '12', tempo: '2-1-1-0', load: 'Moderate', who: 'John', notes: 'Flat back, pull to the hips, squeeze the shoulder blades.', track: true },
              { name: 'Single-arm DB row', sets: 3, reps: '10/side', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: 'Hand on a knee/chair, full stretch at the bottom.', track: true },
              { name: 'DB rear-delt fly', sets: 3, reps: '15', tempo: '2-0-1-0', load: 'Light', who: 'John', notes: 'Posture + shoulder health.', track: true },
              { name: 'DB hammer curl', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: 'No swing — control it.', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Renegade row + plank hold', sets: 4, reps: '40s on / 20s off', tempo: '—', load: 'Light-mod', who: 'John', notes: 'Row in a plank, hips still. Core + back.', isInterval: true, workSec: 40, restSec: 20 }
            ]}
          ]
        }
      ]
    },
    {
      num: 2,
      label: 'BUILD',
      blurb: 'Add a little volume. Same movements — beat last week by a rep or two.',
      sessions: [
        {
          day: 'MON', date: 'Aug 17', theme: 'Lower Body — Squat',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'March + bodyweight squats + hip openers', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'Goblet squat', sets: 4, reps: '12', tempo: '2-0-1-0', load: 'Moderate DB', who: 'John', notes: 'Add a 4th set this week. Rest ~60s.', track: true },
              { name: 'DB reverse lunge', sets: 3, reps: '12/leg', tempo: 'ctrl', load: 'Moderate', who: 'John', notes: '', track: true },
              { name: 'DB Romanian deadlift', sets: 3, reps: '12', tempo: '3-0-1-0', load: 'Moderate-heavy', who: 'John', notes: '', track: true },
              { name: 'DB glute bridge (floor)', sets: 3, reps: '15', tempo: '2-1-1-0', load: 'Heavier on hips', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'DB thruster burnout', sets: 5, reps: '40s on / 20s off', tempo: '—', load: 'Light-mod', who: 'John', notes: '+1 round vs Wk1.', isInterval: true, workSec: 40, restSec: 20 }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Aug 18', theme: 'Upper Body — Push',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Push-ups + arm circles + shoulder taps', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'DB floor press', sets: 4, reps: '12', tempo: '2-1-1-0', load: 'Moderate', who: 'John', notes: 'Add a 4th set.', track: true },
              { name: 'DB standing overhead press', sets: 3, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true },
              { name: 'DB lateral raise', sets: 3, reps: '15', tempo: '2-0-1-0', load: 'Light', who: 'John', notes: '', track: true },
              { name: 'DB overhead triceps extension', sets: 3, reps: '15', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Push-up + mountain climber combo', sets: 5, reps: '40s on / 20s off', tempo: '—', load: 'BW', who: 'John', notes: '+1 round.', isInterval: true, workSec: 40, restSec: 20 }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Aug 20', theme: 'Lower Body — Hinge',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'March + bodyweight good mornings + leg swings', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'DB Romanian deadlift', sets: 4, reps: '12', tempo: '3-0-1-0', load: 'Moderate-heavy', who: 'John', notes: 'Add a 4th set.', track: true },
              { name: 'Split squat (rear foot on chair)', sets: 3, reps: '12/leg', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true },
              { name: 'DB sumo squat', sets: 3, reps: '15', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true },
              { name: 'DB calf raise', sets: 3, reps: '20', tempo: '2-0-2-0', load: 'Heavier', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'DB swing (hip hinge)', sets: 5, reps: '40s on / 20s off', tempo: '—', load: 'Moderate', who: 'John', notes: '+1 round.', isInterval: true, workSec: 40, restSec: 20 }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Aug 21', theme: 'Upper Body — Pull',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Arm circles + light DB rows + band-style pull-aparts', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'Bent-over DB row', sets: 4, reps: '12', tempo: '2-1-1-0', load: 'Moderate', who: 'John', notes: 'Add a 4th set.', track: true },
              { name: 'Single-arm DB row', sets: 3, reps: '12/side', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true },
              { name: 'DB rear-delt fly', sets: 3, reps: '15', tempo: '2-0-1-0', load: 'Light', who: 'John', notes: '', track: true },
              { name: 'DB hammer curl', sets: 3, reps: '15', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Renegade row + plank hold', sets: 5, reps: '40s on / 20s off', tempo: '—', load: 'Light-mod', who: 'John', notes: '+1 round.', isInterval: true, workSec: 40, restSec: 20 }
            ]}
          ]
        }
      ]
    },
    {
      num: 3,
      label: 'INTENSIFY',
      blurb: 'Slow the lowering phase, cut rest to ~45s. More tension, more burn.',
      sessions: [
        {
          day: 'MON', date: 'Aug 24', theme: 'Lower Body — Squat',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'March + bodyweight squats + hip openers', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'Goblet squat', sets: 4, reps: '12', tempo: '3-1-1-0', load: 'Moderate-heavy', who: 'John', notes: 'Slow 3s down, 1s pause. Rest ~45s.', track: true },
              { name: 'DB reverse lunge', sets: 3, reps: '12/leg', tempo: '3-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true },
              { name: 'DB Romanian deadlift', sets: 4, reps: '10', tempo: '4-0-1-0', load: 'Heavier', who: 'John', notes: 'Really feel the stretch.', track: true },
              { name: 'DB glute bridge (floor)', sets: 3, reps: '15', tempo: '2-2-1-0', load: 'Heavier on hips', who: 'John', notes: '2s squeeze at the top.', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'DB thruster burnout', sets: 5, reps: '40s on / 20s off', tempo: '—', load: 'Moderate', who: 'John', notes: 'Heavier than Wk2.', isInterval: true, workSec: 40, restSec: 20 }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Aug 25', theme: 'Upper Body — Push',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Push-ups + arm circles + shoulder taps', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'DB floor press', sets: 4, reps: '10', tempo: '3-1-1-0', load: 'Heavier', who: 'John', notes: 'Slow down, pause on the floor. Rest ~45s.', track: true },
              { name: 'DB standing overhead press', sets: 4, reps: '10', tempo: '3-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true },
              { name: 'DB lateral raise', sets: 3, reps: '18', tempo: '2-0-1-0', load: 'Light', who: 'John', notes: '', track: true },
              { name: 'DB overhead triceps extension', sets: 3, reps: '15', tempo: '3-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Push-up + mountain climber combo', sets: 5, reps: '45s on / 15s off', tempo: '—', load: 'BW', who: 'John', notes: 'Less rest.', isInterval: true, workSec: 45, restSec: 15 }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Aug 27', theme: 'Lower Body — Hinge',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'March + bodyweight good mornings + leg swings', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'DB Romanian deadlift', sets: 4, reps: '10', tempo: '4-0-1-0', load: 'Heavier', who: 'John', notes: 'Slowest tempo of the block.', track: true },
              { name: 'Split squat (rear foot on chair)', sets: 4, reps: '10/leg', tempo: '3-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true },
              { name: 'DB sumo squat', sets: 3, reps: '15', tempo: '3-1-1-0', load: 'Moderate-heavy', who: 'John', notes: '', track: true },
              { name: 'DB calf raise', sets: 4, reps: '20', tempo: '2-1-2-0', load: 'Heavier', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'DB swing (hip hinge)', sets: 5, reps: '45s on / 15s off', tempo: '—', load: 'Moderate', who: 'John', notes: 'Less rest.', isInterval: true, workSec: 45, restSec: 15 }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Aug 28', theme: 'Upper Body — Pull',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Arm circles + light DB rows + band-style pull-aparts', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'Bent-over DB row', sets: 4, reps: '10', tempo: '3-1-1-0', load: 'Heavier', who: 'John', notes: '1s squeeze at the top. Rest ~45s.', track: true },
              { name: 'Single-arm DB row', sets: 4, reps: '10/side', tempo: '3-0-1-0', load: 'Moderate-heavy', who: 'John', notes: '', track: true },
              { name: 'DB rear-delt fly', sets: 3, reps: '18', tempo: '2-0-1-0', load: 'Light', who: 'John', notes: '', track: true },
              { name: 'DB hammer curl', sets: 3, reps: '12', tempo: '3-0-1-0', load: 'Moderate-heavy', who: 'John', notes: 'Slow negatives.', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Renegade row + plank hold', sets: 5, reps: '45s on / 15s off', tempo: '—', load: 'Light-mod', who: 'John', notes: 'Less rest.', isInterval: true, workSec: 45, restSec: 15 }
            ]}
          ]
        }
      ]
    },
    {
      num: 4,
      label: 'OVERLOAD',
      blurb: 'Highest reps and shortest rest so far. Push each set close to failure (RIR 1–2).',
      sessions: [
        {
          day: 'MON', date: 'Aug 31', theme: 'Lower Body — Squat',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'March + bodyweight squats + hip openers', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'Goblet squat', sets: 4, reps: '15', tempo: '2-0-1-0', load: 'Moderate-heavy', who: 'John', notes: 'Higher reps, rest ~45s. RIR 1–2.', track: true },
              { name: 'DB reverse lunge', sets: 3, reps: '14/leg', tempo: 'ctrl', load: 'Moderate', who: 'John', notes: '', track: true },
              { name: 'DB Romanian deadlift', sets: 4, reps: '12', tempo: '3-0-1-0', load: 'Heavier', who: 'John', notes: '', track: true },
              { name: 'DB glute bridge — 1.5 reps', sets: 3, reps: '12', tempo: 'ctrl', load: 'Heavier on hips', who: 'John', notes: 'Full rep, half rep, that = 1. Brutal squeeze.', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'DB thruster burnout', sets: 6, reps: '40s on / 20s off', tempo: '—', load: 'Moderate', who: 'John', notes: '6 rounds.', isInterval: true, workSec: 40, restSec: 20 }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Sep 1', theme: 'Upper Body — Push',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Push-ups + arm circles + shoulder taps', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'DB floor press', sets: 4, reps: '15', tempo: '2-1-1-0', load: 'Moderate-heavy', who: 'John', notes: 'Rest ~45s, RIR 1–2.', track: true },
              { name: 'DB standing overhead press', sets: 4, reps: '12', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true },
              { name: 'DB lateral raise', sets: 4, reps: '18', tempo: '2-0-1-0', load: 'Light', who: 'John', notes: '', track: true },
              { name: 'DB overhead triceps extension', sets: 3, reps: '18', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Push-up + mountain climber combo', sets: 6, reps: '45s on / 15s off', tempo: '—', load: 'BW', who: 'John', notes: '6 rounds.', isInterval: true, workSec: 45, restSec: 15 }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Sep 3', theme: 'Lower Body — Hinge',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'March + bodyweight good mornings + leg swings', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'DB Romanian deadlift', sets: 4, reps: '12', tempo: '3-0-1-0', load: 'Heavier', who: 'John', notes: 'RIR 1–2.', track: true },
              { name: 'Split squat (rear foot on chair)', sets: 4, reps: '12/leg', tempo: '2-0-1-0', load: 'Moderate-heavy', who: 'John', notes: '', track: true },
              { name: 'DB sumo squat — 1.5 reps', sets: 3, reps: '12', tempo: 'ctrl', load: 'Moderate-heavy', who: 'John', notes: 'Full, half, = 1 rep.', track: true },
              { name: 'DB calf raise', sets: 4, reps: '25', tempo: '2-1-2-0', load: 'Heavier', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'DB swing (hip hinge)', sets: 6, reps: '40s on / 20s off', tempo: '—', load: 'Moderate', who: 'John', notes: '6 rounds.', isInterval: true, workSec: 40, restSec: 20 }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Sep 4', theme: 'Upper Body — Pull',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Arm circles + light DB rows + band-style pull-aparts', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'Bent-over DB row', sets: 4, reps: '15', tempo: '2-1-1-0', load: 'Moderate-heavy', who: 'John', notes: 'RIR 1–2.', track: true },
              { name: 'Single-arm DB row', sets: 4, reps: '12/side', tempo: '2-0-1-0', load: 'Heavier', who: 'John', notes: '', track: true },
              { name: 'DB rear-delt fly', sets: 4, reps: '18', tempo: '2-0-1-0', load: 'Light', who: 'John', notes: '', track: true },
              { name: 'DB hammer curl', sets: 3, reps: '15', tempo: '2-0-1-0', load: 'Moderate-heavy', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Renegade row + plank hold', sets: 6, reps: '45s on / 15s off', tempo: '—', load: 'Light-mod', who: 'John', notes: '6 rounds.', isInterval: true, workSec: 45, restSec: 15 }
            ]}
          ]
        }
      ]
    },
    {
      num: 5,
      label: 'PEAK',
      blurb: 'Densest week. Last set of each lift is an all-out AMRAP — leave nothing.',
      sessions: [
        {
          day: 'MON', date: 'Sep 7', theme: 'Lower Body — Squat',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'March + bodyweight squats + hip openers', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'Goblet squat', sets: 4, reps: '15 (last set AMRAP)', tempo: '2-0-1-0', load: 'Heavier', who: 'John', notes: 'Final set = max clean reps. Rest ~45s.', track: true },
              { name: 'DB reverse lunge', sets: 4, reps: '12/leg', tempo: 'ctrl', load: 'Moderate-heavy', who: 'John', notes: '', track: true },
              { name: 'DB Romanian deadlift', sets: 4, reps: '12 (last set AMRAP)', tempo: '3-0-1-0', load: 'Heavier', who: 'John', notes: '', track: true },
              { name: 'DB glute bridge — 1.5 reps', sets: 3, reps: '15', tempo: 'ctrl', load: 'Heavier on hips', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'DB thruster burnout', sets: 6, reps: '45s on / 15s off', tempo: '—', load: 'Moderate', who: 'John', notes: 'Densest finisher yet.', isInterval: true, workSec: 45, restSec: 15 }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Sep 8', theme: 'Upper Body — Push',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Push-ups + arm circles + shoulder taps', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'DB floor press', sets: 4, reps: '15 (last set AMRAP)', tempo: '2-1-1-0', load: 'Heavier', who: 'John', notes: 'Empty the tank on the last set.', track: true },
              { name: 'DB standing overhead press', sets: 4, reps: '12', tempo: '2-0-1-0', load: 'Moderate-heavy', who: 'John', notes: '', track: true },
              { name: 'DB lateral raise', sets: 4, reps: '20', tempo: '2-0-1-0', load: 'Light', who: 'John', notes: '', track: true },
              { name: 'DB overhead triceps extension', sets: 3, reps: '18 (last set AMRAP)', tempo: '2-0-1-0', load: 'Moderate', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Push-up + mountain climber combo', sets: 6, reps: '45s on / 15s off', tempo: '—', load: 'BW', who: 'John', notes: '', isInterval: true, workSec: 45, restSec: 15 }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Sep 10', theme: 'Lower Body — Hinge',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'March + bodyweight good mornings + leg swings', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'DB Romanian deadlift', sets: 4, reps: '12 (last set AMRAP)', tempo: '3-0-1-0', load: 'Heavier', who: 'John', notes: '', track: true },
              { name: 'Split squat (rear foot on chair)', sets: 4, reps: '12/leg', tempo: '2-0-1-0', load: 'Heavier', who: 'John', notes: '', track: true },
              { name: 'DB sumo squat — 1.5 reps', sets: 3, reps: '15', tempo: 'ctrl', load: 'Heavier', who: 'John', notes: '', track: true },
              { name: 'DB calf raise', sets: 4, reps: '25 (last set AMRAP)', tempo: '2-1-2-0', load: 'Heavier', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'DB swing (hip hinge)', sets: 6, reps: '45s on / 15s off', tempo: '—', load: 'Moderate', who: 'John', notes: '', isInterval: true, workSec: 45, restSec: 15 }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Sep 11', theme: 'Upper Body — Pull',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Arm circles + light DB rows + band-style pull-aparts', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'Bent-over DB row', sets: 4, reps: '15 (last set AMRAP)', tempo: '2-1-1-0', load: 'Heavier', who: 'John', notes: '', track: true },
              { name: 'Single-arm DB row', sets: 4, reps: '12/side', tempo: '2-0-1-0', load: 'Heavier', who: 'John', notes: '', track: true },
              { name: 'DB rear-delt fly', sets: 4, reps: '20', tempo: '2-0-1-0', load: 'Light', who: 'John', notes: '', track: true },
              { name: 'DB hammer curl', sets: 4, reps: '15 (last set AMRAP)', tempo: '2-0-1-0', load: 'Moderate-heavy', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Renegade row + plank hold', sets: 6, reps: '45s on / 15s off', tempo: '—', load: 'Light-mod', who: 'John', notes: '', isInterval: true, workSec: 45, restSec: 15 }
            ]}
          ]
        }
      ]
    },
    {
      num: 6,
      label: 'DELOAD',
      blurb: 'Pull volume way back and recover. Keep it easy (RIR 4) — set up the next block fresh.',
      sessions: [
        {
          day: 'MON', date: 'Sep 14', theme: 'Lower Body — Squat (Deload)',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'March + bodyweight squats + hip openers', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'Goblet squat', sets: 2, reps: '12', tempo: '2-0-1-0', load: 'Wk2 weight', who: 'John', notes: 'Easy, crisp reps. RIR 4. Rest as needed.', track: true },
              { name: 'DB reverse lunge', sets: 2, reps: '10/leg', tempo: 'ctrl', load: 'Light-mod', who: 'John', notes: '', track: true },
              { name: 'DB Romanian deadlift', sets: 2, reps: '12', tempo: '2-0-1-0', load: 'Light-mod', who: 'John', notes: '', track: true },
              { name: 'DB glute bridge (floor)', sets: 2, reps: '15', tempo: '2-1-1-0', load: 'Moderate', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'DB thruster (easy)', sets: 3, reps: '30s on / 30s off', tempo: '—', load: 'Light', who: 'John', notes: 'Easy pace — just move.', isInterval: true, workSec: 30, restSec: 30 }
            ]}
          ]
        },
        {
          day: 'TUE', date: 'Sep 15', theme: 'Upper Body — Push (Deload)',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Push-ups + arm circles + shoulder taps', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'DB floor press', sets: 2, reps: '12', tempo: '2-1-1-0', load: 'Wk2 weight', who: 'John', notes: 'RIR 4.', track: true },
              { name: 'DB standing overhead press', sets: 2, reps: '10', tempo: '2-0-1-0', load: 'Light-mod', who: 'John', notes: '', track: true },
              { name: 'DB lateral raise', sets: 2, reps: '15', tempo: '2-0-1-0', load: 'Light', who: 'John', notes: '', track: true },
              { name: 'DB overhead triceps extension', sets: 2, reps: '12', tempo: '2-0-1-0', load: 'Light-mod', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Push-up + mountain climber (easy)', sets: 3, reps: '30s on / 30s off', tempo: '—', load: 'BW', who: 'John', notes: 'Easy.', isInterval: true, workSec: 30, restSec: 30 }
            ]}
          ]
        },
        {
          day: 'THU', date: 'Sep 17', theme: 'Lower Body — Hinge (Deload)',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'March + bodyweight good mornings + leg swings', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'DB Romanian deadlift', sets: 2, reps: '12', tempo: '2-0-1-0', load: 'Light-mod', who: 'John', notes: 'RIR 4.', track: true },
              { name: 'Split squat (rear foot on chair)', sets: 2, reps: '10/leg', tempo: '2-0-1-0', load: 'Light-mod', who: 'John', notes: '', track: true },
              { name: 'DB sumo squat', sets: 2, reps: '12', tempo: '2-0-1-0', load: 'Light-mod', who: 'John', notes: '', track: true },
              { name: 'DB calf raise', sets: 2, reps: '20', tempo: '2-0-2-0', load: 'Moderate', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'DB swing (easy)', sets: 3, reps: '30s on / 30s off', tempo: '—', load: 'Light-mod', who: 'John', notes: 'Easy pace.', isInterval: true, workSec: 30, restSec: 30 }
            ]}
          ]
        },
        {
          day: 'FRI', date: 'Sep 18', theme: 'Upper Body — Pull (Deload)',
          blocks: [
            { name: 'Warmup', exercises: [
              { name: 'Arm circles + light DB rows + band-style pull-aparts', sets: 1, reps: '3 min', tempo: '—', load: 'Easy', who: 'John', notes: '' }
            ]},
            { name: 'Main Work', exercises: [
              { name: 'Bent-over DB row', sets: 2, reps: '12', tempo: '2-1-1-0', load: 'Wk2 weight', who: 'John', notes: 'RIR 4. Next block: start heavier than Wk1.', track: true },
              { name: 'Single-arm DB row', sets: 2, reps: '10/side', tempo: '2-0-1-0', load: 'Light-mod', who: 'John', notes: '', track: true },
              { name: 'DB rear-delt fly', sets: 2, reps: '15', tempo: '2-0-1-0', load: 'Light', who: 'John', notes: '', track: true },
              { name: 'DB hammer curl', sets: 2, reps: '12', tempo: '2-0-1-0', load: 'Light-mod', who: 'John', notes: '', track: true }
            ]},
            { name: 'Finisher', exercises: [
              { name: 'Renegade row + plank (easy)', sets: 3, reps: '30s on / 30s off', tempo: '—', load: 'Light', who: 'John', notes: 'Easy.', isInterval: true, workSec: 30, restSec: 30 }
            ]}
          ]
        }
      ]
    }
  ]
};

// Program registry + people. Each person maps to the program they follow.
export const PROGRAMS = { ramp: PROGRAM, logan: LOGAN_PROGRAM, john: JOHN_PROGRAM };

export const PEOPLE = [
  { name: 'D-Rock', programId: 'ramp', dot: 'bg-amber-500' },
  { name: 'Frank', programId: 'ramp', dot: 'bg-red-500' },
  { name: 'Logan', programId: 'logan', dot: 'bg-sky-400' },
  { name: 'John', programId: 'john', dot: 'bg-emerald-500' }
];

export const programIdForPerson = (name) =>
  (PEOPLE.find(p => p.name === name) || PEOPLE[0]).programId;

// Helpers
// Set-log key. `cycle` scopes logs per repeat of a repeating program, so each
// new cycle starts with a fresh log instead of showing the last one's checkmarks.
export const exerciseKey = (cycle, w, s, b, e) => `c${cycle}-w${w}-s${s}-b${b}-e${e}`;

const DAY_TO_NUM = { SUN: 0, MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6 };

// Pick the session to surface as "up next": today's session if it's a training
// day, otherwise the next upcoming session this week, wrapping to the first.
// Reads each session's own `day`, so it works for any weekly schedule.
// For a `repeating` program, weekIdx loops and `cycle` counts the repeats;
// otherwise it clamps to the final week (one-time block).
export const getCurrentSession = (program = PROGRAM) => {
  const start = new Date(program.startDate + 'T00:00:00');
  const today = new Date();
  const daysSince = Math.floor((today - start) / 86400000);
  const weeksCount = program.weeks.length;
  if (daysSince < 0) return { cycle: 0, weekIdx: 0, sessionIdx: 0 };
  const totalWeeks = Math.floor(daysSince / 7);
  const cycle = program.repeating ? Math.floor(totalWeeks / weeksCount) : 0;
  const weekIdx = program.repeating ? totalWeeks % weeksCount : Math.min(totalWeeks, weeksCount - 1);
  const week = program.weeks[weekIdx];
  const dayOfWeek = today.getDay();
  const dayNums = week.sessions.map(s => DAY_TO_NUM[s.day] ?? 1);
  let sessionIdx = dayNums.indexOf(dayOfWeek);
  if (sessionIdx === -1) sessionIdx = dayNums.findIndex(d => d > dayOfWeek);
  if (sessionIdx === -1) sessionIdx = 0;
  return { cycle, weekIdx, sessionIdx };
};

// Date shown for a session. Repeating programs compute it from startDate so the
// dates roll forward each cycle; one-time programs use the authored `date`.
export const sessionDate = (program, cycle, weekIdx, session) => {
  const d = new Date(program.startDate + 'T00:00:00');
  const weekday = DAY_TO_NUM[session.day] ?? 1;
  const offset = (cycle * program.weeks.length + weekIdx) * 7 + (weekday - 1);
  d.setDate(d.getDate() + offset);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export const displayDate = (program, cycle, weekIdx, session) =>
  program.repeating ? sessionDate(program, cycle, weekIdx, session) : session.date;

export const ytQueryUrl = (query) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

export const ytSearchUrl = (name) => ytQueryUrl(name + ' form demo');
