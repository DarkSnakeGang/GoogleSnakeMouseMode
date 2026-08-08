import fs from "fs";
const code = fs.readFileSync(
  "C:/Users/someo/OneDrive/Desktop/Quick Access/vscode/GoogleSnakeRemix/.cache/snake-game.js",
  "utf8"
).replaceAll(/\$\$/gm, "doubleD");

const needles = [
  "drawImage(this.Ca",
  "context.drawImage(this.Ca",
  ".drawImage(this.Ca.canvas",
  "Qd,ge",
  "Qd, ge",
];
for (const n of needles) {
  let i = code.indexOf(n);
  console.log(n, i);
  if (i >= 0) console.log(code.slice(i - 30, i + 80));
}

// Find end of curve block before if(pb===0)
const idx = code.indexOf("let zc=bc.clone(),Ic=bc.clone()");
const end = code.indexOf("if(pb===0)", idx);
console.log("\ncurve block length", end - idx);
console.log(code.slice(idx, end));
