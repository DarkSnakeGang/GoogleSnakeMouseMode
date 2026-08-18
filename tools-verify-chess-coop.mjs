/**
 * Dry-run: Remix chess score inject + mouse chess patches must all apply
 * to cached v13 snake-current.js (same order as alterSnakeCode).
 * Exit 0 = OK, 1 = fail.
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

if (!fs.existsSync(GAME)) fail("missing snake-current.js cache: " + GAME);

let code = fs.readFileSync(GAME, "utf8").replaceAll(/\$\$/gm, "doubleD");
const modSrc = fs.readFileSync(MOD, "utf8");

code = code.assertReplace(
  /a\.Sh\+\+;/,
  `if(window.isChessActive&&window.isChessActive()){let _ae=window.findApple(window.head_pos[0],window.appleArray);if(_ae&&!_ae.isPiece){window.just_ate='fruit';a.Sh++;}else if(_ae&&_ae.isPiece){window.just_ate='piece';window.head_state=_ae.ChessPiece;window.updateTrophySRC(_ae.type);window.head_color=_ae.ChessColor;window.shield_all();}else{window.just_ate='fruit';a.Sh++;}}else{a.Sh++;}`
);

const steps = [];
function step(name, fn) {
  try {
    const next = fn();
    steps.push([name, "OK"]);
    return next;
  } catch (e) {
    steps.push([name, "FAIL"]);
    console.error(name, e.message);
    return null;
  }
}

{
  const next = step("wingedFruit", () =>
    code.assertReplace(
      /if\(d7\(a\.settings\)\)\{var ([$a-zA-Z0-9_]{0,8})=a\.oa\.ka\[0\]!==void 0/,
      "if(true){var $1=a.oa.ka[0]!==void 0"
    )
  );
  if (next) code = next;
  else fail("wingedFruit");
}

{
  const next = step("appleEatChessTile", () => {
    const patterns = [
      /if\(true\)\{var g=a\.oa\.ka\[0\]!==void 0&&a\.oa\.ka\[1\]!==void 0&&d\.pos!==void 0;e=g&&\(F4E\(a\.ka,a\.oa\.ka\[0\],d\.pos\)<1\|\|F4E\(a\.ka,a\.oa\.ka\[1\],d\.pos\)<1\);e7\(a\.settings,7\)&&g&&\(g=l7\(a\.oa,1\),f=F4E\(a\.ka,l7\(a\.oa,0\),d\.pos\)<1\|\|F4E\(a\.ka,g,d\.pos\)<1\)\}/,
      /if\(d7\(a\.settings\)\)\{var g=a\.oa\.ka\[0\]!==void 0&&a\.oa\.ka\[1\]!==void 0&&d\.pos!==void 0;e=g&&\(F4E\(a\.ka,a\.oa\.ka\[0\],d\.pos\)<1\|\|F4E\(a\.ka,a\.oa\.ka\[1\],d\.pos\)<1\);e7\(a\.settings,7\)&&g&&\(g=l7\(a\.oa,1\),f=F4E\(a\.ka,l7\(a\.oa,0\),d\.pos\)<1\|\|F4E\(a\.ka,g,d\.pos\)<1\)\}/,
    ];
    const rep =
      "if(true){var g=a.oa.ka[0]!==void 0&&a.oa.ka[1]!==void 0&&d.pos!==void 0;if(window.isChessActive&&window.isChessActive()){e=!!g&&Math.round(a.oa.ka[0].x)===Math.round(d.pos.x)&&Math.round(a.oa.ka[0].y)===Math.round(d.pos.y);if(e7(a.settings,7)&&g){f=Math.round(l7(a.oa,0).x)===Math.round(d.pos.x)&&Math.round(l7(a.oa,0).y)===Math.round(d.pos.y)}}else{e=g&&(F4E(a.ka,a.oa.ka[0],d.pos)<1||F4E(a.ka,a.oa.ka[1],d.pos)<1);e7(a.settings,7)&&g&&(g=l7(a.oa,1),f=F4E(a.ka,l7(a.oa,0),d.pos)<1||F4E(a.ka,g,d.pos)<1)}}";
    for (const p of patterns) {
      if (p.test(code)) return code.assertReplace(p, rep);
    }
    throw new Error("no pattern");
  });
  if (next) code = next;
  else fail("appleEatChessTile");
}

{
  const next = step("chessEatLockedDeath", () =>
    code.assertReplace(
      /if\(e\|\|f\)\{g=d\.Oka/,
      "if(e||f){if(window.isChessActive&&window.isChessActive()&&(window.__chessCarrying||(window.head_state&&window.head_state!=='OPEN'))){a.Oa();break;}window.__chessEatenApple=d;if(a.wa&&a.wa.ka)window.appleArray=a.wa.ka;if(window.isChessActive&&window.isChessActive()&&d.isPiece){window.just_ate='piece';window.head_state=d.ChessPiece;window.head_color=d.ChessColor;window.__chessCarrying=true;window.__chessCarryPiece=d.ChessPiece;if(typeof window.updateTrophySRC==='function')window.updateTrophySRC(d.type);if(typeof window.shield_all==='function')window.shield_all();}g=d.Oka"
    )
  );
  if (next) code = next;
  else fail("chessEatLockedDeath");
}

{
  const next = step("chessScoreHarden", () =>
    code.assertReplace(
      /if\(_ae&&!_ae\.isPiece\)\{window\.just_ate='fruit';a\.Sh\+\+;/,
      "if(window.just_ate!=='piece'&&!window.__chessCarrying&&!(window.__chessEatenApple&&window.__chessEatenApple.isPiece)&&_ae&&!_ae.isPiece){window.just_ate='fruit';a.Sh++;"
    )
  );
  if (next) code = next;
  else fail("chessScoreHarden");
}

{
  const next = step("chessScoreHonorPickup", () =>
    code.assertReplace(
      /else if\(_ae&&_ae\.isPiece\)\{window\.just_ate='piece';window\.head_state=_ae\.ChessPiece;window\.updateTrophySRC\(_ae\.type\);window\.head_color=_ae\.ChessColor;window\.shield_all\(\);\}else\{window\.just_ate='fruit';a\.Sh\+\+;/,
      "else if((_ae&&_ae.isPiece)||(window.__chessEatenApple&&window.__chessEatenApple.isPiece)||window.just_ate==='piece'||window.__chessCarrying){window.just_ate='piece';{let _src=(_ae&&_ae.isPiece)?_ae:(window.__chessEatenApple&&window.__chessEatenApple.isPiece?window.__chessEatenApple:null);if(_src&&_src.isPiece){window.head_state=_src.ChessPiece;window.__chessCarryPiece=_src.ChessPiece;window.head_color=_src.ChessColor;if(typeof window.updateTrophySRC==='function')window.updateTrophySRC(_src.type);}window.__chessCarrying=true;if(a.wa&&a.wa.ka)window.appleArray=a.wa.ka;if(typeof window.shield_all==='function')window.shield_all();window.__chessEatenApple=null;}}else{window.just_ate='fruit';a.Sh++;"
    )
  );
  if (next) code = next;
  else fail("chessScoreHonorPickup");
}

const needInMod = [
  "__chessCarrying||(window.head_state&&window.head_state!=='OPEN'))){a.Oa();break;}",
  "__chessCarrying=true",
  "just_ate!=='piece'&&!window.__chessCarrying",
  "__chessCarrying=false",
];
for (const s of needInMod) {
  if (!modSrc.includes(s)) fail("modloadercode.js missing: " + s);
}

if (!code.includes("a.Oa();break;")) fail("patched game missing Oa();break");
if (!code.includes("__chessCarrying=true")) fail("patched game missing carrying=true");

for (const [n, s] of steps) console.log(n, s);
console.log("tools-verify-chess-coop: OK");
