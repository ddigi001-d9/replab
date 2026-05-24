# RepLab

Training console for D-Rock & Frank's 4-week ramp. Phone-first PWA. Installable to home screen, works offline, no app store.

## What's in here

- **`src/`** — React app (Vite). Components, hooks, program data.
- **`src/data/program.js`** — the full 4-week program. Edit this file to change exercises, sets, reps, or extend with new weeks.
- **`public/`** — static assets (icons, favicon).
- **`.github/workflows/deploy.yml`** — auto-deploys to GitHub Pages on every push to `main`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploying to GitHub Pages

### One-time setup

1. **Create the repo on GitHub.** Name it `replab` (the `vite.config.js` `base` path expects this). If you name it something else, edit `REPO_NAME` in `vite.config.js`.

2. **Push this code:**

   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/replab.git
   git push -u origin main
   ```

3. **Enable Pages.** In the repo on GitHub → **Settings** → **Pages** → under "Build and deployment", set **Source** to **GitHub Actions**. (Not "Deploy from a branch.")

4. **Wait for the workflow to run.** First push triggers a build. Watch it in the **Actions** tab. Takes ~1 minute. When green, your site is live at:

   ```
   https://YOUR-USERNAME.github.io/replab/
   ```

### From then on

Every `git push` to `main` redeploys automatically. No manual steps.

## Installing on your phone

### iPhone (Safari only — Chrome on iOS won't work for this)

1. Open the URL in Safari.
2. Tap the **Share** button.
3. Scroll down → **Add to Home Screen**.
4. Tap **Add**.

The icon appears on your home screen. Launches fullscreen, no browser bar. Works offline after first load.

### Android (Chrome)

1. Open the URL in Chrome.
2. Tap the **⋮** menu → **Install app** (or **Add to Home screen**).
3. Confirm.

Same behavior as iOS.

## Where your data lives

All workout data is in `localStorage` on your phone. **Each phone has its own log.** If you and Frank both install, you each have separate histories.

If you want shared sync (PRs across devices, see Frank's lifts from your phone), the next iteration is wiring up Firebase or Supabase. ~1 evening of work — let me know.

### Backing up data

Until cloud sync exists, your data is only on this device. To export, open browser DevTools → Application → Local Storage → copy the `replab_state_v1` key. Or wait for the next version with an export button.

## Customizing the program

Edit `src/data/program.js`. The structure is:

```js
{
  num: 1,
  label: 'BASE',
  blurb: 'short tagline shown on the home screen',
  sessions: [
    {
      day: 'MON',
      date: 'May 25',
      theme: 'Lower Power + Speed',
      blocks: [
        {
          name: 'Block name (e.g. Warmup, Frank Power, Shared Lift)',
          exercises: [
            {
              name: 'Exercise name',
              sets: 4,
              reps: '8',
              tempo: '3-1-1-0',  // or '—' for no tempo
              load: 'Moderate',
              who: 'Both' | 'Frank' | 'D-Rock',
              notes: 'cue or reminder',
              track: true,        // optional — show weight/reps/RPE logger
              isInterval: true,   // optional — show interval timer instead of rest timer
              workSec: 30,        // required if isInterval
              restSec: 90         // required if isInterval
            }
          ]
        }
      ]
    }
  ]
}
```

Block names containing "power", "rotational", "agility", "speed", or "finisher" automatically get the red ⚡ treatment to remind you to do them fresh.

Push the change, GitHub rebuilds, your phone gets the update next time you open the app.

## Stack

- Vite + React 18
- Tailwind CSS
- Lucide icons
- `vite-plugin-pwa` (Workbox-based service worker, manifest, offline cache)
- GitHub Pages (free hosting)
- GitHub Actions (auto-deploy on push)

## Known limitations (v1)

- **No cloud sync.** Data is per-device.
- **iOS Safari PWA storage eviction.** If you don't open the app for ~weeks, iOS may purge cached data. Cloud sync fixes this.
- **Form-demo videos** open a YouTube search rather than embedding a specific clip. Intentional — lets you and Frank build a personal video map over time rather than shipping placeholder IDs that might be wrong.
- **Single program loaded.** When the 4-week ramp ends, edit `program.js` to add weeks 5+ or load a new program.

## Roadmap (in priority order)

1. Cloud sync (Firebase) — shared history, survives iOS eviction
2. Export-to-CSV button — drop into the tracking spreadsheet I built you
3. PR detection + celebration — "new top weight on goblet squat!"
4. Per-exercise video map — pin a favorite YouTube clip per movement
5. In-season program template (post-Jun 19 travel season)
