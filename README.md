# Mouse Mode For Google Snake

Control the snake with your mouse. Move with full freedom without being confined to the grid.
Toggle **Aim Trainer** in Pudding Settings to make the snake jump straight to the cursor.

Built on **Remix Mod** (More Pudding + Candy / Chess / Burger) for game **v13**.

## How to install

### Mod Loader (when registered)

See [Google Snake Mod Loader](https://github.com/DarkSnakeGang/GoogleSnakeModLoader).

### Custom URL (v13 / current)

On [googlesnakemods.com/v/current/](https://googlesnakemods.com/v/current/), load this raw file as a custom mod URL:

`https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeMouseMode/main/MouseMod.js`

Use custom mod name `mouseMode`.

### Older game versions

- Branch [`v12`](https://github.com/DarkSnakeGang/GoogleSnakeMouseMode/tree/v12) freezes the Remix-based Mouse build for GSM v12.
- Branch [`v5`](https://github.com/DarkSnakeGang/GoogleSnakeMouseMode/tree/v5) freezes the previous Pudding-based Mouse build for GSM v4/v5.

## Build

Requires Python 3:

```bash
python MouseBuilder.py
```

Downloads `RemixMod.js` from [GoogleSnakeRemix](https://github.com/DarkSnakeGang/GoogleSnakeRemix) and appends [`modloadercode.js`](modloadercode.js) → [`MouseMod.js`](MouseMod.js).

## Concept

Everything Remix provides (themes, visibility, more menu, Candy / Chess / Burger, etc.), except the snake itself is steered by the mouse toward the cursor with continuous (non-tile) movement.
