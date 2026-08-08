/**
 * Dry-run: Remix chess score inject + mouse chess patches must all apply
 * to cached v12 snake-game.js (same order as alterSnakeCode).
 * Exit 0 = OK, 1 = fail.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GAME =
  "C:/Users/someo/OneDrive/Desktop/Quick Access/vscode/GoogleSnakeRemix/.cache/snake-game.js";
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

if (!fs.existsSync(GAME)) fail("missing snake-game.js cache: " + GAME);

let code = fs.readFileSync(GAME, "utf8");
const modSrc = fs.readFileSync(MOD, "utf8");

// --- Remix chess score (as Remix does) ---
code = code.assertReplace(
  /this\.Oh\+\+;/,
  `if(window.isChessActive&&window.isChessActive()){let _ae=window.findApple(window.head_pos[0],window.appleArray);if(_ae&&!_ae.isPiece){window.just_ate='fruit';this.Oh++;}else if(_ae&&_ae.isPiece){window.just_ate='piece';window.head_state=_ae.ChessPiece;window.updateTrophySRC(_ae.type);window.head_color=_ae.ChessColor;window.shield_all();}else{window.just_ate='fruit';this.Oh++;}}else{this.Oh++;}`
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

// wingedFruit
{
  const next = step("wingedFruit", () =>
    code.assertReplace(
      /if\(e7\(this\.settings\)\)\{let ([$a-zA-Z0-9_]{0,8})=this\.oa\.ka\[0\]!==void 0/,
      "if(true){let $1=this.oa.ka[0]!==void 0"
    )
  );
  if (next) code = next;
  else fail("wingedFruit");
}

// appleEatChessTile (same patterns as modloadercode)
{
  const next = step("appleEatChessTile", () => {
    const patterns = [
      /if\(true\)\{let dg=this\.oa\.ka\[0\]!==void 0&&this\.oa\.ka\[1\]!==void 0&&Wd\.pos!==void 0;\$d=dg&&\(OaF\(this\.ka,this\.oa\.ka\[0\],Wd\.pos\)<1\|\|OaF\(this\.ka,this\.oa\.ka\[1\],Wd\.pos\)<1\);if\(f7\(this\.settings,7\)&&dg\)\{let Cg=m7\(this\.oa,1\);He=OaF\(this\.ka,m7\(this\.oa,0\),Wd\.pos\)<1\|\|OaF\(this\.ka,Cg,Wd\.pos\)<1\}\}/,
      /if\(e7\(this\.settings\)\)\{let dg=this\.oa\.ka\[0\]!==void 0&&this\.oa\.ka\[1\]!==void 0&&Wd\.pos!==void 0;\$d=dg&&\(OaF\(this\.ka,this\.oa\.ka\[0\],Wd\.pos\)<1\|\|OaF\(this\.ka,this\.oa\.ka\[1\],Wd\.pos\)<1\);if\(f7\(this\.settings,7\)&&dg\)\{let Cg=m7\(this\.oa,1\);He=OaF\(this\.ka,m7\(this\.oa,0\),Wd\.pos\)<1\|\|OaF\(this\.ka,Cg,Wd\.pos\)<1\}\}/,
    ];
    const rep =
      "if(true){let dg=this.oa.ka[0]!==void 0&&this.oa.ka[1]!==void 0&&Wd.pos!==void 0;if(window.isChessActive&&window.isChessActive()){$d=!!dg&&Math.round(this.oa.ka[0].x)===Math.round(Wd.pos.x)&&Math.round(this.oa.ka[0].y)===Math.round(Wd.pos.y);if(f7(this.settings,7)&&dg){He=Math.round(m7(this.oa,0).x)===Math.round(Wd.pos.x)&&Math.round(m7(this.oa,0).y)===Math.round(Wd.pos.y)}}else{$d=dg&&(OaF(this.ka,this.oa.ka[0],Wd.pos)<1||OaF(this.ka,this.oa.ka[1],Wd.pos)<1);if(f7(this.settings,7)&&dg){let Cg=m7(this.oa,1);He=OaF(this.ka,m7(this.oa,0),Wd.pos)<1||OaF(this.ka,Cg,Wd.pos)<1}}}";
    for (const p of patterns) {
      if (p.test(code)) return code.assertReplace(p, rep);
    }
    throw new Error("no pattern");
  });
  if (next) code = next;
  else fail("appleEatChessTile");
}

// locked eat → death, then OPEN pickup (must match modloadercode.js)
{
  const next = step("chessEatLockedDeath", () =>
    code.assertReplace(
      /if\(\$d\|\|He\)\{let dg=Wd\.nla/,
      "if($d||He){if(window.isChessActive&&window.isChessActive()&&(window.__chessCarrying||(window.head_state&&window.head_state!=='OPEN'))){this.Na();break;}window.__chessEatenApple=Wd;if(this.wa&&this.wa.ka)window.appleArray=this.wa.ka;if(window.isChessActive&&window.isChessActive()&&Wd.isPiece){window.just_ate='piece';window.head_state=Wd.ChessPiece;window.head_color=Wd.ChessColor;window.__chessCarrying=true;window.__chessCarryPiece=Wd.ChessPiece;if(typeof window.updateTrophySRC==='function')window.updateTrophySRC(Wd.type);if(typeof window.shield_all==='function')window.shield_all();}let dg=Wd.nla"
    )
  );
  if (next) code = next;
  else fail("chessEatLockedDeath");
}

{
  const next = step("chessScoreHarden", () =>
    code.assertReplace(
      /if\(_ae&&!_ae\.isPiece\)\{window\.just_ate='fruit';this\.Oh\+\+;/,
      "if(window.just_ate!=='piece'&&!window.__chessCarrying&&!(window.__chessEatenApple&&window.__chessEatenApple.isPiece)&&_ae&&!_ae.isPiece){window.just_ate='fruit';this.Oh++;"
    )
  );
  if (next) code = next;
  else fail("chessScoreHarden");
}

{
  const next = step("chessScoreHonorPickup", () =>
    code.assertReplace(
      /else if\(_ae&&_ae\.isPiece\)\{window\.just_ate='piece';window\.head_state=_ae\.ChessPiece;window\.updateTrophySRC\(_ae\.type\);window\.head_color=_ae\.ChessColor;window\.shield_all\(\);\}else\{window\.just_ate='fruit';this\.Oh\+\+;/,
      "else if((_ae&&_ae.isPiece)||(window.__chessEatenApple&&window.__chessEatenApple.isPiece)||window.just_ate==='piece'||window.__chessCarrying){window.just_ate='piece';{let _src=(_ae&&_ae.isPiece)?_ae:(window.__chessEatenApple&&window.__chessEatenApple.isPiece?window.__chessEatenApple:null);if(_src&&_src.isPiece){window.head_state=_src.ChessPiece;window.__chessCarryPiece=_src.ChessPiece;window.head_color=_src.ChessColor;if(typeof window.updateTrophySRC==='function')window.updateTrophySRC(_src.type);}window.__chessCarrying=true;if(this.wa&&this.wa.ka)window.appleArray=this.wa.ka;if(typeof window.shield_all==='function')window.shield_all();window.__chessEatenApple=null;}}else{window.just_ate='fruit';this.Oh++;"
    )
  );
  if (next) code = next;
  else fail("chessScoreHonorPickup");
}

// Source must contain the same inject (modloadercode is source of truth)
const needInMod = [
  "__chessCarrying||(window.head_state&&window.head_state!=='OPEN'))){this.Na();break;}",
  "__chessCarrying=true",
  "just_ate!=='piece'&&!window.__chessCarrying",
  "__chessCarrying=false",
];
for (const s of needInMod) {
  if (!modSrc.includes(s)) fail("modloadercode.js missing: " + s);
}

// Patched game code must contain death-on-eat
if (!code.includes("this.Na();break;")) fail("patched game missing Na();break");
if (!code.includes("__chessCarrying=true")) fail("patched game missing carrying=true");

for (const [n, s] of steps) console.log(n, s);
console.log("tools-verify-chess-coop: OK");
