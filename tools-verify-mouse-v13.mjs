/**
 * Dry-run Mouse v13 patches against cached snake-current.js.
 * Does not run Remix; required mouse FIND regexes must still match raw/post-$$ game code.
 * Chess score patches are checked after a Remix-shaped a.Sh++ inject.
 * Exit 0 = OK.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GAME =
  "C:/Users/someo/OneDrive/Desktop/Quick Access/vscode/GoogleSnakeRemix/.cache/snake-current.js";
const MOD = path.join(__dirname, "modloadercode.js");

String.prototype.assertReplace = function (re, rep) {
  const out = this.replace(re, rep);
  if (out === String(this)) throw new Error("assertReplace missed: " + re);
  return out;
};

function fail(msg) {
  console.error("FAIL:", msg);
  process.exit(1);
}

if (!fs.existsSync(GAME)) fail("missing snake-current.js: " + GAME);

let code = fs.readFileSync(GAME, "utf8").replaceAll(/\$\$/gm, "doubleD");
const modSrc = fs.readFileSync(MOD, "utf8");

const required = [
  ["m7bounds", /m7=function\([a-z],[a-z]\)\{return [a-z]\.x>=0&&[a-z]\.x<[a-z]\.[$a-zA-Z0-9_]{0,8}\.width&&[a-z]\.y>=0&&[a-z]\.y<[a-z]\.[$a-zA-Z0-9_]{0,8}\.height\}/],
  ["Y6", /Y6=function\(a\)\{return a\.x<<16\|a\.y\}/],
  ["j7E", /j7E=function\(a,b,c\)\{if\(m7\(a\.ka,c\)&&!a\.oa\.get\(Y6\(c\)\)\)\{var d=b\[c\.y\]\[c\.x\];/],
  ["U3E", /U3E=function\(a,b\)\{return m7\(a\.oa,b\)\?a\.ka\[b\.y\]\[b\.x\]\.direction:"NONE"\}/],
  ["T3E", /T3E=function\(a,b\)\{return m7\(a\.oa,b\)\?a\.ka\[b\.y\]\[b\.x\]\.Lh:!1\}/],
  ["s4E", /s4E=function\(a,b,c\)\{var d=a\.ka\[c\.y\]\[c\.x\];/],
  ["exposeArrowApi", /c\.color=a\)\},t4E=class\{constructor\(a,b,c\)\{this\.settings=a;this\.oa=b;this\.wa=c;this\.ka=\[\]\}/],
  ["h7", /h7=function\(a,b,c\)\{var d=a\.ka\[b\.y\]\[b\.x\];/],
  ["U4E", /U4E=function\(a,b,c\)\{b=a\.ka\[b\.y\]\[b\.x\];/],
  ["W5E", /W5E=function\(a\)\{return e7\(a,4\)&&\(e7\(a,2\)\|\|e7\(a,5\)\|\|e7\(a,\s*19\)\|\|e7\(a,20\)\|\|a\.ka===6\)\}/],
  ["switch LEFT", /switch\(([a-zA-Z0-9_$]+)\.direction\)\{case "LEFT":--([a-zA-Z0-9_$]+)\.x;/],
  ["wingedFruit", /if\(d7\(a\.settings\)\)\{var ([$a-zA-Z0-9_]{0,8})=a\.oa\.ka\[0\]!==void 0/],
  ["resetState", /\}resetState\(a=!0\)\{/],
  ["tileWidth", /[a-z]\.[$a-zA-Z0-9_]{0,8}\.fillRect\([a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,8}\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}),[a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8},[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8},[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\)/],
  ["blockyHead", /this\.([$a-zA-Z0-9_]{0,8})\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8})=\n?[$a-zA-Z0-9_]{0,8}\.clone\(\),/],
  ["coordCtor", /new (_\.[$a-zA-Z0-9_]{0,8})\(1,1\)/],
  ["bodyArray", /this\.[$a-zA-Z0-9_]{0,8}\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8})\[0\]\.clone\(\)/],
];

let failed = 0;
for (const [name, re] of required) {
  if (re.test(code)) console.log("OK", name);
  else {
    console.error("MISS", name);
    failed++;
  }
}

code = code.assertReplace(
  /if\(d7\(a\.settings\)\)\{var ([$a-zA-Z0-9_]{0,8})=a\.oa\.ka\[0\]!==void 0/,
  "if(true){var $1=a.oa.ka[0]!==void 0"
);
console.log("OK wingedFruit apply");

const chessTile =
  /if\(true\)\{var g=a\.oa\.ka\[0\]!==void 0&&a\.oa\.ka\[1\]!==void 0&&d\.pos!==void 0;e=g&&\(F4E\(a\.ka,a\.oa\.ka\[0\],d\.pos\)<1\|\|F4E\(a\.ka,a\.oa\.ka\[1\],d\.pos\)<1\);e7\(a\.settings,7\)&&g&&\(g=l7\(a\.oa,1\),f=F4E\(a\.ka,l7\(a\.oa,0\),d\.pos\)<1\|\|F4E\(a\.ka,g,d\.pos\)<1\)\}/;
if (!chessTile.test(code)) {
  console.error("MISS appleEatChessTile after wingedFruit");
  failed++;
} else {
  code = code.assertReplace(
    chessTile,
    "if(true){var g=a.oa.ka[0]!==void 0&&a.oa.ka[1]!==void 0&&d.pos!==void 0;if(window.isChessActive&&window.isChessActive()){e=!!g&&Math.round(a.oa.ka[0].x)===Math.round(d.pos.x)&&Math.round(a.oa.ka[0].y)===Math.round(d.pos.y);if(e7(a.settings,7)&&g){f=Math.round(l7(a.oa,0).x)===Math.round(d.pos.x)&&Math.round(l7(a.oa,0).y)===Math.round(d.pos.y)}}else{e=g&&(F4E(a.ka,a.oa.ka[0],d.pos)<1||F4E(a.ka,a.oa.ka[1],d.pos)<1);e7(a.settings,7)&&g&&(g=l7(a.oa,1),f=F4E(a.ka,l7(a.oa,0),d.pos)<1||F4E(a.ka,g,d.pos)<1)}}"
  );
  console.log("OK appleEatChessTile apply");
}

code = code.assertReplace(
  /if\(e\|\|f\)\{g=d\.Oka/,
  "if(e||f){if(window.isChessActive&&window.isChessActive()&&(window.__chessCarrying||(window.head_state&&window.head_state!=='OPEN'))){a.Oa();break;}window.__chessEatenApple=d;g=d.Oka"
);
console.log("OK chessEatLockedDeath apply");

code = code.assertReplace(
  /a\.Sh\+\+;/,
  `if(window.isChessActive&&window.isChessActive()){let _ae=window.findApple(window.head_pos[0],window.appleArray);if(_ae&&!_ae.isPiece){window.just_ate='fruit';a.Sh++;}else if(_ae&&_ae.isPiece){window.just_ate='piece';window.head_state=_ae.ChessPiece;window.updateTrophySRC(_ae.type);window.head_color=_ae.ChessColor;window.shield_all();}else{window.just_ate='fruit';a.Sh++;}}else{a.Sh++;}`
);
code = code.assertReplace(
  /if\(_ae&&!_ae\.isPiece\)\{window\.just_ate='fruit';a\.Sh\+\+;/,
  "if(window.just_ate!=='piece'&&!window.__chessCarrying&&!(window.__chessEatenApple&&window.__chessEatenApple.isPiece)&&_ae&&!_ae.isPiece){window.just_ate='fruit';a.Sh++;"
);
code = code.assertReplace(
  /else if\(_ae&&_ae\.isPiece\)\{window\.just_ate='piece';window\.head_state=_ae\.ChessPiece;window\.updateTrophySRC\(_ae\.type\);window\.head_color=_ae\.ChessColor;window\.shield_all\(\);\}else\{window\.just_ate='fruit';a\.Sh\+\+;/,
  "else if((_ae&&_ae.isPiece)||(window.__chessEatenApple&&window.__chessEatenApple.isPiece)||window.just_ate==='piece'||window.__chessCarrying){window.just_ate='piece';window.__chessCarrying=true;}else{window.just_ate='fruit';a.Sh++;"
);
console.log("OK chess score harden/honor");

const needInMod = [
  "a.Oa();break;",
  "__chessCarrying=true",
  "just_ate!=='piece'&&!window.__chessCarrying",
  "__chessCarrying=false",
  "m7=function(a,b){return b.x>-0.5",
  "Y6=function(a){return Math.round(a.x)",
  "window.mouseSettingsHas=e7",
];
for (const s of needInMod) {
  if (!modSrc.includes(s)) {
    console.error("modloadercode.js missing:", s);
    failed++;
  } else console.log("OK mod src", s.slice(0, 40));
}

if (!code.includes("a.Oa();break;")) {
  console.error("patched game missing a.Oa();break");
  failed++;
}

if (failed) {
  console.error("tools-verify-mouse-v13: FAILED", failed);
  process.exit(1);
}
console.log("tools-verify-mouse-v13: OK");
