# etch-a-sketch

This is a little browser-based drawing game that I built to practice DOM manipulation and events. You can
play with it here: https://halvafactor.github.io/etch-a-sketch/ (it doesn't work on mobile because it relies on mouse hover).

I hope it's pretty self-explanatory, but in case it's not: mouse over the screen to "color in" squares. Their
default color is red, but you can toggle on "randomize color" to give each square a random color. If you toggle
on "fill color gradually" squares will start at a low opacity on first mouseover and gradually get darker with
each pass. The default size of the grid is 16 squares per side, but if you click "reset the board" you can set
the size to anything between 1 and 100 squares per side.

I had a lot of fun writing this. The most important things I learned were:

- I was very proud of myself for figuring out the nested loops to create the board, but then initially I coded everything into a gnarly series of nested blocks inside the inner `for` loop, got upset and confused, and then remembered the utility of functions. It was cool to see how the whole program sort of turned "inside out" once I started pulling pieces of the logic out into functions. It now basically defines a bunch of stuff up front, then describes what to do for all the nitpicky little cases (or rules them out), and only in the very last line does it call regular degular `makeGrid`. I'm sure this seems like a little thing to experienced programmers, but it was my first taste of a program having its own logical flow.

- Learning how to pass a JS variable into CSS was a triumph, mostly because I thought "I have no idea how to do this" but then realized I knew the language to use to look it up, and figured it out quickly.

- I discovered the concept of closure when I was trying to make the "fill color gradually" and "randomize color" functions play nice together. I initially set `let shade = 0` in the global scope, which resulted in what seemed to me like totally unpredictable shading that would eventually just jump to full opacity at some arbitrary time. When I finally realized that I was increasing shade _for every future moused over square_ any time I moused over one, it finally clicked that each square needed its _own_ `shade`. I had been kind of idly puzzling over how a function can keep access to variables from its outer scope, so I was pleased to learn that this is indeed a thing and the name for it.

- An actual engineer gave me the tip to compute random colors per square at creation, instead of on hover. This obviated the need to "freeze" a square's color once it got moused over once. It also obviated the bug of having both "randomize color" and "fill color gradually" toggled and it resulting in a subsequent mouseover of a colored-in square giving a lower opacity new color, which would be weird looking behavior. This all meant that I ended up with two captured variables, `color` and `shade`, and the former only gets read while the latter gets rewritten, which is an elegant little parallel for a learning exercise.

There are also some issues I know about but am moving on from:

- Squares that have already been colored in once can change color, if you toggle "randomize color" on or off, but their opacity can never get lighter. This means, if you toggle "randomize color" on and mouse over a full-opacity red square, it will get rewritten by a full-opacity random-color square, not a light one, even if "fill color gradually" is also toggled on.

- I initially made the grid with visible gridlines (borders on the squares), then decided that I preferred the look without them. I opted not to include a way to toggle them on and off.

- parseInt is lenient, so inputs like 5.7 or 12abc will become 5 and 12, respectively, when they should probably cause the program to reprompt the user for an actual number. I looked down that rat hole and decided I was okay with staying outside it.
