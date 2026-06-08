This folder holds hero media assets used by the app.

Files:
- `hero-low.webm`  — optional low-res WebM used on mobile. Place a mobile-optimized WebM or MP4 here.
- `hero-poster.svg` — poster/fallback image (already present). Replace with a JPG/PNG if desired.

How to add a low-res WebM:
1. Optimize a short clip to ~480p or lower using ffmpeg:
   ffmpeg -i source.mp4 -c:v libvpx-vp9 -b:v 400k -vf scale=854:-2 -an hero-low.webm
2. Copy the resulting file to `public/assets/hero-low.webm`.

The app automatically uses `/assets/hero-low.webm` on small screens when present.
