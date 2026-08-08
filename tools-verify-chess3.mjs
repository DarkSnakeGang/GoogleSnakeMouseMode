import fs from "fs";

String.prototype.assertReplace = function (re, rep) {
  const out = this.replace(re, rep);
  if (out === String(this)) throw new Error("fail: " + re);
  return out;
};

let code = fs.readFileSync(
  "C:/Users/someo/OneDrive/Desktop/Quick Access/vscode/GoogleSnakeRemix/.cache/snake-game.js",
  "utf8"
);

// Remix chess score
code = code.assertReplace(
  /this\.Oh\+\+;/,
  `if(window.isChessActive&&window.isChessActive()){let _ae=window.findApple(window.head_pos[0],window.appleArray);if(_ae&&!_ae.isPiece){window.just_ate='fruit';this.Oh++;window.burger_fresh&&window.burger_fresh();}else if(_ae&&_ae.isPiece){window.just_ate='piece';window.head_state=_ae.ChessPiece;window.updateTrophySRC(_ae.type);window.head_color=_ae.ChessColor;window.shield_all();}else{window.just_ate='fruit';this.Oh++;window.burger_fresh&&window.burger_fresh();}}else{this.Oh++;window.burger_fresh&&window.burger_fresh();}`
);

// wingedFruit
code = code.assertReplace(
  /if\(e7\(this\.settings\)\)\{let ([$a-zA-Z0-9_]{0,8})=this\.oa\.ka\[0\]!==void 0/,
  "if(true){let $1=this.oa.ka[0]!==void 0"
);

const steps = [];
function step(name, fn) {
  try {
    const n = fn();
    steps.push([name, "OK"]);
    return n;
  } catch (e) {
    steps.push([name, "FAIL"]);
    return null;
  }
}

let c = code;
{
  const next = step("shieldTick", () =>
    c.assertReplace(
      /\(e7\(this\.settings\)\?OaF\(this\.ka,a,f\.pos\)<1:f\.pos\.equals\(a\)\)&&\(\(g=f\.Oba\)==null\?0:g\.has\(d\)\)&&this\.Na\(\)/,
      "(e7(this.settings)?OaF(this.ka,a,f.pos)<1:(Math.round(f.pos.x)===Math.round(a.x)&&Math.round(f.pos.y)===Math.round(a.y)))&&((g=f.Oba)==null?0:(g.has(d)||(window.__chessCarrying&&g.size>=4)))&&this.Na()"
    )
  );
  if (next) c = next;
}
{
  const patterns = [
    /if\(true\)\{let dg=this\.oa\.ka\[0\]!==void 0&&this\.oa\.ka\[1\]!==void 0&&Wd\.pos!==void 0;\$d=dg&&\(OaF\(this\.ka,this\.oa\.ka\[0\],Wd\.pos\)<1\|\|OaF\(this\.ka,this\.oa\.ka\[1\],Wd\.pos\)<1\);if\(f7\(this\.settings,7\)&&dg\)\{let Cg=m7\(this\.oa,1\);He=OaF\(this\.ka,m7\(this\.oa,0\),Wd\.pos\)<1\|\|OaF\(this\.ka,Cg,Wd\.pos\)<1\}\}/,
  ];
  const rep = "CHESS_TILE";
  const next = step("appleEatChessTile", () => {
    for (const p of patterns) {
      if (p.test(c)) return c.assertReplace(p, rep);
    }
    throw new Error("no match");
  });
  if (next) c = next;
}
{
  const next = step("chessEatPickup", () =>
    c.assertReplace(
      /if\(\$d\|\|He\)\{let dg=Wd\.nla/,
      "if($d||He){window.__chessCarrying=true;let dg=Wd.nla"
    )
  );
  if (next) c = next;
}
{
  const next = step("chessScoreHarden", () =>
    c.assertReplace(
      /if\(_ae&&!_ae\.isPiece\)\{window\.just_ate='fruit';this\.Oh\+\+;/,
      "if(window.just_ate!=='piece'&&!window.__chessCarrying&&!(window.__chessEatenApple&&window.__chessEatenApple.isPiece)&&_ae&&!_ae.isPiece){window.just_ate='fruit';this.Oh++;"
    )
  );
  if (next) c = next;
}
{
  const next = step("chessScoreHonorPickup", () =>
    c.assertReplace(
      /else if\(_ae&&_ae\.isPiece\)\{window\.just_ate='piece';window\.head_state=_ae\.ChessPiece;window\.updateTrophySRC\(_ae\.type\);window\.head_color=_ae\.ChessColor;window\.shield_all\(\);\}else\{window\.just_ate='fruit';this\.Oh\+\+;/,
      "else if((_ae&&_ae.isPiece)||window.__chessCarrying){window.just_ate='piece';window.shield_all();}else{window.just_ate='fruit';this.Oh++;"
    )
  );
  if (next) c = next;
}

for (const [n, s] of steps) console.log(n, s);
