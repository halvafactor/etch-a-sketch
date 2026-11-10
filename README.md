# etch-a-sketch

continued studies in grids

This is a little JS project for practicing DOM manipulation, events, and some Flexbox skills.

Things I know about but am moving on from: - Color, but not opacity, can get overwritten. So if you toggle on and off
"Randomize Color" and then go back over other squares, they'll fill in at
whatever opacity is saved. This means a full-opacity red square will get
rewritten by a full-opacity random-color square, not a light one, even
though "Fill Color Gradually" is toggled on. A blank square will still
start out light. - I initially made the grid with visible gridlines (borders on the squares),
then deciced that I preferred the look without them. I opted not to include
a way to toggle them on and off.
