/**
 * Unit checks for Chess+Mouse classifiers (no browser).
 * Exit 0 = OK, 1 = fail.
 */

function findApple(headPos, appleArray, tagged) {
  if (tagged) {
    const ti = appleArray ? appleArray.indexOf(tagged) : -1;
    tagged.myIndex = ti >= 0 ? ti : -1;
    return tagged;
  }
  if (!appleArray || !headPos) return null;
  const rx = Math.round(headPos.x);
  const ry = Math.round(headPos.y);
  for (let i = 0; i < appleArray.length; i++) {
    const el = appleArray[i];
    if (!el || !el.pos) continue;
    if (Math.round(el.pos.x) === rx && Math.round(el.pos.y) === ry) {
      el.myIndex = i;
      return el;
    }
  }
  return null;
}

function shouldDieOnEat(isChess, carrying, head_state) {
  return !!(
    isChess &&
    (carrying || (head_state && head_state !== "OPEN"))
  );
}

function scoreKind(_ae, just_ate, carrying, tagged) {
  const piece =
    (_ae && _ae.isPiece) ||
    (tagged && tagged.isPiece) ||
    just_ate === "piece" ||
    carrying;
  if (piece) return "piece";
  if (_ae && !_ae.isPiece) return "fruit";
  if (!_ae) return "fruit"; // Remix miss path — we must avoid via tag
  return "fruit";
}

function captureAttempt(appleArray, head_state, head_color, x, y) {
  if (head_state === "OPEN") return { ok: false, carrying: true };
  x = Math.round(x);
  y = Math.round(y);
  for (const apple of appleArray) {
    if (
      apple &&
      apple.isPiece &&
      Math.round(apple.pos.x) === x &&
      Math.round(apple.pos.y) === y &&
      head_color != apple.ChessColor
    ) {
      apple.isPiece = false;
      return { ok: true, carrying: false, apple };
    }
  }
  return { ok: false, carrying: true };
}

function rookOpen(appleArray, headPos, head_color) {
  const hx = Math.round(headPos.x);
  const hy = Math.round(headPos.y);
  const pieces = appleArray.filter((a) => a && a.isPiece && a.pos);
  const closest = {
    up: { piece: null, distance: Infinity },
    down: { piece: null, distance: Infinity },
    left: { piece: null, distance: Infinity },
    right: { piece: null, distance: Infinity },
  };
  for (const piece of pieces) {
    const px = Math.round(piece.pos.x);
    const py = Math.round(piece.pos.y);
    const distance = Math.abs(px - hx) + Math.abs(py - hy);
    if (px === hx && py < hy && distance < closest.up.distance)
      closest.up = { piece, distance };
    else if (px === hx && py > hy && distance < closest.down.distance)
      closest.down = { piece, distance };
    else if (py === hy && px < hx && distance < closest.left.distance)
      closest.left = { piece, distance };
    else if (py === hy && px > hx && distance < closest.right.distance)
      closest.right = { piece, distance };
  }
  const list = Object.values(closest)
    .map((o) => o.piece)
    .filter(Boolean);
  for (const el of list) {
    if (el.ChessColor != head_color) {
      return captureAttempt(appleArray, "rook", head_color, el.pos.x, el.pos.y);
    }
  }
  return { ok: false, carrying: true };
}

let failed = 0;
function check(name, cond) {
  if (cond) console.log("OK", name);
  else {
    console.error("FAIL", name);
    failed++;
  }
}

const piece = {
  pos: { x: 5, y: 3 },
  isPiece: true,
  ChessPiece: "rook",
  ChessColor: "w",
};
const fruit = { pos: { x: 1, y: 1 }, isPiece: false };
const fruitOnRay = { pos: { x: 5, y: 5 }, isPiece: false };

check(
  "findApple tag piece",
  findApple({ x: 9, y: 9 }, [fruit, piece], piece) === piece
);
check(
  "findApple rounded on tile",
  findApple({ x: 5.4, y: 3.2 }, [fruit, piece], null) === piece
);
check(
  "findApple near-miss off tile",
  findApple({ x: 4.4, y: 3.2 }, [fruit, piece], null) !== piece
);

check(
  "score piece via tag",
  scoreKind(null, "fruit", false, piece) === "piece"
);
check(
  "score carrying",
  scoreKind({ isPiece: false }, "fruit", true, null) === "piece"
);
check(
  "score fruit OPEN",
  scoreKind(fruit, "fruit", false, fruit) === "fruit"
);

check("die when carrying", shouldDieOnEat(true, true, "rook") === true);
check("die when head_state piece", shouldDieOnEat(true, false, "knight") === true);
check("no die when OPEN", shouldDieOnEat(true, false, "OPEN") === false);
check("no die when not chess", shouldDieOnEat(false, true, "rook") === false);

const enemyCap = {
  pos: { x: 5, y: 7 },
  isPiece: true,
  ChessPiece: "pawn",
  ChessColor: "b",
};
const cap = captureAttempt([piece, enemyCap], "rook", "w", 5.2, 7.1);
check("capture rounded enemy", cap.ok === true && cap.carrying === false);

const enemyRay = {
  pos: { x: 5, y: 7 },
  isPiece: true,
  ChessPiece: "pawn",
  ChessColor: "b",
};
const rook = rookOpen([fruitOnRay, enemyRay, piece], { x: 5.1, y: 3.2 }, "w");
check(
  "rook ignores fruit on ray",
  rook.ok === true && enemyRay.isPiece === false
);

if (failed) {
  console.error("tools-chess-logic: FAILED", failed);
  process.exit(1);
}
console.log("tools-chess-logic: OK");
