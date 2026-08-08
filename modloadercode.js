window.mouseMode = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.mouseMode.runCodeBefore = function () {
  if (window.RemixMod) {
    window.RemixMod.runCodeBefore();
  } else if (window.MorePudding) {
    window.MorePudding.runCodeBefore();
  } else if (window.PuddingMod) {
    window.PuddingMod.runCodeBefore();
  }

  window.mouseX = 176.1;
  window.mouseY = 240.1;
  window.faceAngle = 0;
  window.nextHeadX = 10;
  window.nextHeadY = 10;
  window.aimTrainer = false;

  window.mouseCardinalFromAngle = function (angle) {
    const tau = Math.PI * 2;
    const a = ((angle % tau) + tau) % tau;
    const quarter = Math.round(a / (Math.PI / 2)) % 4;
    return ["RIGHT", "DOWN", "LEFT", "UP"][quarter];
  };

  window.mouseSnakeRef = function () {
    const game = window.__remixGame || window.megaWholeSnakeObject;
    if (!game) return null;
    if (game.oa && game.oa.ka) return game.oa;
    if (game.wb && game.wb.oa && game.wb.oa.ka) return game.wb.oa;
    return null;
  };

  window.mouseIsChessActive = function () {
    try {
      if (typeof window.isChessActive === "function" && window.isChessActive()) {
        return true;
      }
      const game = window.__remixGame || window.megaWholeSnakeObject;
      if (game && typeof f7 === "function" && f7(game.settings, 24)) {
        return true;
      }
    } catch (_e) {}
    return false;
  };

  window.mouseSyncDirectionFromAngle = function () {
    const snake = window.mouseSnakeRef();
    if (!snake) return;
    const dir = window.mouseCardinalFromAngle(window.faceAngle);
    snake.direction = dir;
    window.head_dir = dir;
  };

  // --- Chess (mouse): keep Remix behavior 100%. Only bridge fractional heads. ---
  // Remix owns: findApple → score (piece→shield_all / fruit→Oh++), chess_tick_logic,
  // capture_attempt, respawn. We must not reimplement those.
  window.mouseInstallFindApple = function () {
    // Remix findApple uses exact pos == head. Mouse: prefer the apple tagged on
    // collision (do NOT clear here — chess_eating_piece AND the score hook both
    // call findApple in the same eat), else same rounded tile.
    window.findApple = function findApple(headPos, appleArray) {
      if (window.__chessEatenApple) {
        const tagged = window.__chessEatenApple;
        if (appleArray) {
          const ti = appleArray.indexOf(tagged);
          tagged.myIndex = ti >= 0 ? ti : -1;
        } else {
          tagged.myIndex = -1;
        }
        return tagged;
      }
      if (!appleArray || !headPos) return null;
      const rx = Math.round(headPos.x);
      const ry = Math.round(headPos.y);
      for (let index = 0; index < appleArray.length; index++) {
        const element = appleArray[index];
        if (!element || !element.pos) continue;
        if (
          Math.round(element.pos.x) === rx &&
          Math.round(element.pos.y) === ry
        ) {
          element.myIndex = index;
          return element;
        }
      }
      return null;
    };
  };

  window.mousePatchChessForMouse = function () {
    // isChessActive: also detect via settings.ub / blender set (menu edge cases).
    if (typeof window.isChessActive === "function" && !window.isChessActive.__mouse) {
      const origIsChess = window.isChessActive;
      window.isChessActive = function () {
        if (origIsChess()) return true;
        try {
          const g = window.__remixGame || window.megaWholeSnakeObject;
          const s = g && g.settings;
          if (!s || window.CHESS_MODE == null) return false;
          if (s.ub === window.CHESS_MODE) return true;
          if (s.ZSa && s.ZSa.has(window.CHESS_MODE)) return true;
          if (s.Jc && s.Jc.has(window.CHESS_MODE)) return true;
        } catch (_e) {}
        return false;
      };
      window.isChessActive.__mouse = true;
    }

    // Unlock math needs integer head tiles; restore live body ref afterward
    // so Remix score findApple(head_pos[0]) still sees the real head.
    if (typeof window.chess_tick_logic === "function" && !window.chess_tick_logic.__mouse) {
      const origTick = window.chess_tick_logic;
      window.chess_tick_logic = function () {
        // Eat tag is only for the score/length hooks in the previous tick.
        window.__chessEatenApple = null;
        try {
          const g = window.__remixGame || window.megaWholeSnakeObject;
          if (g && g.wa && g.wa.ka) window.appleArray = g.wa.ka;
        } catch (_e) {}
        // Sticky carry: restore piece type if something reset head_state to OPEN.
        if (window.__chessCarrying && window.__chessCarryPiece) {
          if (!window.head_state || window.head_state === "OPEN") {
            window.head_state = window.__chessCarryPiece;
          }
        }
        if (typeof window.faceAngle === "number") {
          window.head_dir = window.mouseCardinalFromAngle(window.faceAngle);
        }
        const snake = window.mouseSnakeRef && window.mouseSnakeRef();
        if (snake && snake.direction && snake.direction !== "NONE") {
          window.head_dir = snake.direction;
        }
        const live = window.head_pos;
        if (live && live[0]) {
          const h = live[0];
          window.head_pos = [{ x: Math.round(h.x), y: Math.round(h.y) }];
          try {
            return origTick.apply(this, arguments);
          } finally {
            window.head_pos = live;
          }
        }
        return origTick.apply(this, arguments);
      };
      window.chess_tick_logic.__mouse = true;
    }

    // capture_attempt: Remix logic with rounded coords; clears sticky carry.
    if (typeof window.capture_attempt === "function" && !window.capture_attempt.__mouse) {
      window.capture_attempt = function capture_attempt(x, y) {
        if (window.head_state === "OPEN") return false;
        if (!window.appleArray) return false;
        x = Math.round(x);
        y = Math.round(y);
        for (let index = 0; index < window.appleArray.length; index++) {
          const apple = window.appleArray[index];
          if (
            apple &&
            apple.isPiece &&
            Math.round(apple.pos.x) === x &&
            Math.round(apple.pos.y) === y &&
            window.head_color != apple.ChessColor
          ) {
            window.head_state = "OPEN";
            window.__chessCarrying = false;
            window.__chessCarryPiece = null;
            if (window.selectedFruit == 22) {
              let randomNumber = Math.floor(Math.random() * 51 + 1) % 52;
              apple.type =
                randomNumber === 22 ? (randomNumber + 1) % 52 : randomNumber;
            } else {
              apple.type = window.selectedFruit;
            }
            apple.isPiece = false;
            window.shield_empty_all();
            if (!window.muted && window.capture_sound) {
              window.capture_sound.play();
            }
            return true;
          }
        }
        return false;
      };
      window.capture_attempt.__mouse = true;
    }

    // Rook/bishop: only real pieces (fruits have no ChessColor and would
    // short-circuit open), and round coords so float heads still line up.
    const pieceList = function () {
      const arr = window.appleArray || [];
      return arr.filter(function (a) {
        return a && a.isPiece && a.pos;
      });
    };

    if (typeof window.rook_open === "function" && !window.rook_open.__mouse) {
      window.rook_open = function rook_open(headPos) {
        if (!headPos) return false;
        const hx = Math.round(headPos.x);
        const hy = Math.round(headPos.y);
        const closest = {
          up: { piece: null, distance: Infinity },
          down: { piece: null, distance: Infinity },
          left: { piece: null, distance: Infinity },
          right: { piece: null, distance: Infinity },
        };
        pieceList().forEach(function (piece) {
          const px = Math.round(piece.pos.x);
          const py = Math.round(piece.pos.y);
          const distance = Math.abs(px - hx) + Math.abs(py - hy);
          if (px === hx && py < hy && distance < closest.up.distance) {
            closest.up = { piece: piece, distance: distance };
          } else if (px === hx && py > hy && distance < closest.down.distance) {
            closest.down = { piece: piece, distance: distance };
          } else if (py === hy && px < hx && distance < closest.left.distance) {
            closest.left = { piece: piece, distance: distance };
          } else if (py === hy && px > hx && distance < closest.right.distance) {
            closest.right = { piece: piece, distance: distance };
          }
        });
        const list = Object.values(closest)
          .map(function (o) {
            return o.piece;
          })
          .filter(Boolean);
        for (let i = 0; i < list.length; i++) {
          const el = list[i];
          if (el.ChessColor != window.head_color) {
            return window.capture_attempt(el.pos.x, el.pos.y);
          }
        }
        return false;
      };
      window.rook_open.__mouse = true;
    }

    if (typeof window.bishop_open === "function" && !window.bishop_open.__mouse) {
      window.bishop_open = function bishop_open(headPos) {
        if (!headPos) return false;
        const hx = Math.round(headPos.x);
        const hy = Math.round(headPos.y);
        const closest = {};
        pieceList().forEach(function (piece) {
          const px = Math.round(piece.pos.x);
          const py = Math.round(piece.pos.y);
          const dx = px - hx;
          const dy = py - hy;
          if (Math.abs(dx) !== Math.abs(dy) || dx === 0) return;
          const direction =
            (dx < 0 ? "left-" : "right-") + (dy < 0 ? "up" : "down");
          const dist = Math.abs(dx) + Math.abs(dy);
          if (!closest[direction] || dist < closest[direction].dist) {
            closest[direction] = { piece: piece, dist: dist };
          }
        });
        const list = Object.values(closest)
          .sort(function (a, b) {
            return a.dist - b.dist;
          })
          .map(function (o) {
            return o.piece;
          });
        for (let i = 0; i < list.length; i++) {
          const el = list[i];
          if (el.ChessColor != window.head_color) {
            return window.capture_attempt(el.pos.x, el.pos.y);
          }
        }
        return false;
      };
      window.bishop_open.__mouse = true;
    }
  };
  // Back-compat name used by runCodeAfter
  window.mousePatchChessGenerous = window.mousePatchChessForMouse;


  // Letterbox of the board onto the visible canvas (updated each render).
  globalThis.leftBorderWidth = 16;
  globalThis.topBorderWidth = 16;

  window.updateMousePos = function (event) {
    const el = window.gameCanvasEl;
    if (!el) return true;
    const canvasRect = el.getBoundingClientRect();
    // CSS size may not match backing-store pixels — scale into game/canvas space.
    const scaleX = (el.width || canvasRect.width) / (canvasRect.width || 1);
    const scaleY = (el.height || canvasRect.height) / (canvasRect.height || 1);
    const xOffsetFromBorder = globalThis.leftBorderWidth ?? 16;
    const yOffsetFromBorder = globalThis.topBorderWidth ?? 16;

    if (!window.screen.orientation || window.screen.orientation.angle === 0) {
      mouseX =
        (event.clientX - canvasRect.left) * scaleX - xOffsetFromBorder;
      mouseY =
        (event.clientY - canvasRect.top) * scaleY - yOffsetFromBorder;
    } else {
      mouseX =
        (canvasRect.bottom - event.clientY) * scaleY - xOffsetFromBorder;
      mouseY =
        (event.clientX - canvasRect.left) * scaleX - yOffsetFromBorder;
    }
    return true;
  };

  window.updateFaceCoordsAndRotation = function (
    blockyHeadCoord,
    tileWidth,
    bodyArray
  ) {
    // Prefer tile-center head in board pixels. Ec is pixel-space only after render;
    // on tick/reset it is often still a tile coord and would break aiming.
    const tileHead = bodyArray[0];
    let headPx = {
      x: tileHead.x * tileWidth + tileWidth / 2,
      y: tileHead.y * tileWidth + tileWidth / 2,
    };
    if (
      blockyHeadCoord &&
      typeof blockyHeadCoord.x === "number" &&
      (Math.abs(blockyHeadCoord.x - tileHead.x) > 2 ||
        Math.abs(blockyHeadCoord.y - tileHead.y) > 2)
    ) {
      // Already in pixel space (post-render Ec).
      headPx = { x: blockyHeadCoord.x, y: blockyHeadCoord.y };
    }

    let headToMouseOffset = {
      x: mouseX - headPx.x,
      y: mouseY - headPx.y,
    };

    let magnitude = Math.sqrt(
      headToMouseOffset.x ** 2 + headToMouseOffset.y ** 2
    );
    if (magnitude < 1e-6) magnitude = 1e-6;

    faceAngle = Math.atan2(headToMouseOffset.y, headToMouseOffset.x);

    // Poison / Burger control-loss: invert + wobble so mouse aim is unreliable.
    const snake = window.mouseSnakeRef();
    let poisoned = !!(snake && snake.Ja > 0);
    if (poisoned) {
      faceAngle += Math.PI;
      faceAngle += Math.sin(Date.now() / 70) * 1.35;
    }

    // Arrow mode (idea 1): stamp a turn-trail on tiles you leave; lock to that dir on arrows.
    // BaF/f7 are module-scoped — use window.mouseBaF / mouseF7 from alterSnakeCode.
    // Rail: once an arrow engages, force that direction until the head has traveled
    // a full tile from the engage point (survives leaving the painted cell + double
    // updateFaceCoords calls from tick/render).
    let arrowLock = null;
    try {
      const game = window.__remixGame || window.megaWholeSnakeObject;
      const snakeForArrow = window.mouseSnakeRef();
      const settings =
        (game && game.settings) ||
        (snakeForArrow && snakeForArrow.settings);
      const hasMode =
        typeof window.mouseSettingsHas === "function"
          ? window.mouseSettingsHas(settings, 16)
          : typeof window.mouseF7 === "function"
            ? window.mouseF7(settings, 16)
            : !!(
                settings &&
                (settings.ub === 16 ||
                  (settings.ZSa && settings.ZSa.has(16)) ||
                  (settings.Jc && settings.Jc.has(16)))
              );
      const arrowBoard =
        (snakeForArrow && snakeForArrow.Tb) ||
        (game && game.Ka) ||
        (game && game.oa && game.oa.Tb);
      const placeArrow =
        typeof window.mouseBaF === "function"
          ? window.mouseBaF
          : typeof BaF === "function"
            ? BaF
            : null;
      const readArrow =
        typeof window.mouseEaF === "function"
          ? window.mouseEaF
          : typeof eaF === "function"
            ? eaF
            : function (board, t) {
                const cell =
                  board && board.ka && board.ka[t.y] && board.ka[t.y][t.x];
                return cell && cell.direction ? cell.direction : "NONE";
              };
      if (hasMode && arrowBoard && bodyArray && bodyArray[0]) {
        const hx = bodyArray[0].x;
        const hy = bodyArray[0].y;
        const tile = {
          x: Math.round(hx),
          y: Math.round(hy),
        };
        const tileKey = tile.x + "," + tile.y;
        const map = {
          RIGHT: 0,
          DOWN: Math.PI / 2,
          LEFT: Math.PI,
          UP: -Math.PI / 2,
        };
        const unit = {
          RIGHT: [1, 0],
          DOWN: [0, 1],
          LEFT: [-1, 0],
          UP: [0, -1],
        };

        const existing = readArrow(arrowBoard, tile);
        const onArrow =
          existing && existing !== "NONE" && map[existing] !== undefined;

        if (!window.mouseArrowRail) window.mouseArrowRail = null;
        let rail = window.mouseArrowRail;

        // Finished the committed tile of travel?
        if (rail) {
          const traveled =
            (hx - rail.startX) * rail.ux + (hy - rail.startY) * rail.uy;
          if (traveled >= rail.need - 1e-6) {
            window.mouseArrowRail = null;
            rail = null;
          }
        }

        // Engage / redirect when on an arrow (or chain onto a different dir).
        if (onArrow && (!rail || rail.dir !== existing)) {
          const u = unit[existing];
          // Rest of the current cell + one full tile — long enough to matter
          // (locking only while round(head) matched the painted cell was ~1 frame).
          let toEdge = 1;
          if (existing === "RIGHT") {
            const f = hx - Math.floor(hx);
            toEdge = f < 1e-9 ? 1 : 1 - f;
          } else if (existing === "LEFT") {
            const f = hx - Math.floor(hx);
            toEdge = f < 1e-9 ? 1 : f;
          } else if (existing === "DOWN") {
            const f = hy - Math.floor(hy);
            toEdge = f < 1e-9 ? 1 : 1 - f;
          } else if (existing === "UP") {
            const f = hy - Math.floor(hy);
            toEdge = f < 1e-9 ? 1 : f;
          }
          rail = {
            dir: existing,
            ux: u[0],
            uy: u[1],
            startX: hx,
            startY: hy,
            need: toEdge + 1,
          };
          window.mouseArrowRail = rail;
        }

        if (rail) {
          faceAngle = map[rail.dir];
          // Same top speed as free mouse; may take 2 ticks to finish the rail.
          const traveled =
            (hx - rail.startX) * rail.ux + (hy - rail.startY) * rail.uy;
          const left = Math.max(rail.need - traveled, 0);
          const step = Math.min(1, left);
          arrowLock = [rail.ux * step, rail.uy * step];
        }

        const dir = window.mouseCardinalFromAngle(faceAngle);
        if (!window.mouseArrowTrail) {
          window.mouseArrowTrail = {
            dir: null,
            tile: null,
            lastStampTile: null,
          };
        }
        const trail = window.mouseArrowTrail;

        // Turn-trail only: stamp when free aim facing changes, at most once per tile.
        // Skip while railed (rail redirect isn't a player turn).
        // (Stamping every tile leave painted the whole path and flooded the board.)
        if (
          placeArrow &&
          !rail &&
          trail.dir &&
          trail.dir !== dir &&
          trail.lastStampTile !== tileKey
        ) {
          try {
            placeArrow(arrowBoard, dir, tile);
          } catch (_spawnErr) {}
          trail.lastStampTile = tileKey;
        }

        trail.dir = dir;
        trail.tile = tileKey;
      } else if (!hasMode) {
        // Left arrow mode — drop trail/rail so nothing leaks into the next run.
        window.mouseArrowTrail = null;
        window.mouseArrowRail = null;
      }
    } catch (_e) {}

    let xDelta;
    let yDelta;
    if (arrowLock) {
      xDelta = arrowLock[0];
      yDelta = arrowLock[1];
    } else if (!aimTrainer) {
      xDelta = headToMouseOffset.x / magnitude;
      yDelta = headToMouseOffset.y / magnitude;
      if (poisoned) {
        // Repel: move opposite the cursor (already inverted angle; keep unit step).
        xDelta = Math.cos(faceAngle);
        yDelta = Math.sin(faceAngle);
      }
    } else {
      xDelta = headToMouseOffset.x / tileWidth;
      yDelta = headToMouseOffset.y / tileWidth;
    }

    nextHeadX = bodyArray[0].x + xDelta;
    nextHeadY = bodyArray[0].y + yDelta;
    window.mouseSyncDirectionFromAngle();
  };

  window.roundClamp = function (value, boardSideLength) {
    let res = Math.round(value);
    res = Math.min(res, boardSideLength - 1);
    res = Math.max(res, 0);
    return res;
  };

  window.setupMenuCheckbox = function () {
    const inject = function () {
      try {
        const existing = document.getElementById("mouse-aim-trainer-settings");
        if (existing) {
          const parent = existing.parentElement;
          const nested =
            parent &&
            parent.classList &&
            parent.classList.contains("form-check");
          if (!nested) return true;
          existing.remove();
        }
        const panel = document.getElementById("settings-popup-pudding");
        if (!panel) return false;

        if (window.pudding_settings && typeof window.pudding_settings.AimTrainer === "boolean") {
          window.aimTrainer = !!window.pudding_settings.AimTrainer;
        }

        // Clean up a lone AimTrainer input from a prior bad inject.
        const stale = document.getElementById("AimTrainer");
        if (stale) stale.remove();

        const row = document.createElement("div");
        row.className = "form-check form-check-inline";
        row.id = "mouse-aim-trainer-settings";
        row.innerHTML =
          '<input class="form-check-input" type="checkbox" role="switch" id="AimTrainer">' +
          '<label class="form-check-label" for="AimTrainer" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;">Aim Trainer</label>';

        // Anchor is the INPUT id — insert after its whole .form-check row, not inside it.
        const anchorInput =
          document.getElementById("DisableRandom") ||
          document.getElementById("RemoveScrollbar") ||
          document.getElementById("TimerSettings") ||
          document.getElementById("CustomBowlFruits");
        const anchorRow =
          (anchorInput && anchorInput.closest(".form-check")) ||
          (anchorInput && anchorInput.parentElement);
        if (anchorRow && anchorRow.parentNode) {
          anchorRow.parentNode.insertBefore(row, anchorRow.nextSibling);
        } else {
          panel.appendChild(row);
        }

        const el = document.getElementById("AimTrainer");
        el.checked = !!window.aimTrainer;
        el.addEventListener("change", function () {
          window.aimTrainer = this.checked;
          try {
            if (window.pudding_settings) {
              window.pudding_settings.AimTrainer = this.checked;
              if (typeof window.saveSettings === "function") window.saveSettings();
            }
          } catch (_e) {}
        });
        return true;
      } catch (err) {
        console.warn("MouseMod: Aim Trainer pudding settings setup failed", err);
        return true;
      }
    };

    if (inject()) return;
    setTimeout(function () {
      if (!inject()) setTimeout(inject, 50);
    }, 0);
  };
};

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.mouseMode.alterSnakeCode = function (code) {
  if (window.RemixMod) {
    code = window.RemixMod.alterSnakeCode(code);
  } else if (window.MorePudding) {
    code = window.MorePudding.alterSnakeCode(code);
  } else if (window.PuddingMod) {
    code = window.PuddingMod.alterSnakeCode(code);
  }

  code = code.replaceAll(/\$\$/gm, "doubleD");

  const step = (name, fn, optional = false) => {
    try {
      return fn();
    } catch (e) {
      console.error(
        "MouseMod PATCH FAIL:",
        name,
        e && e.message,
        optional ? "(optional)" : ""
      );
      if (optional) return null;
      throw e;
    }
  };

  // tileWidth path e.g. "ka.ka" (game.ka.ka / renderer.wb.ka.ka)
  window.tileWidth = step("tileWidth", () =>
    code.assertMatch(
      /[a-z]\.[$a-zA-Z0-9_]{0,8}\.fillRect\([a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,8}\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}),[a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8},[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8},[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\)/
    )[1]
  );

  // snakeDetails e.g. "wb" ; blockyHeadCoord e.g. "oa.Ec"
  step("blockyHead", () => {
    [, window.snakeDetails, window.blockyHeadCoord] = code.assertMatch(
      /this\.([$a-zA-Z0-9_]{0,8})\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8})=\n?[$a-zA-Z0-9_]{0,8}\.clone\(\),/
    );
  });

  window.coordConstructor = step("coordCtor", () =>
    code.assertMatch(/new (_\.[$a-zA-Z0-9_]{0,8})\(1,1\)/)[1]
  );

  // bodyArray e.g. "oa.ka"
  window.bodyArray = step("bodyArray", () =>
    code.assertMatch(
      /this\.[$a-zA-Z0-9_]{0,8}\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8})\[0\]\.clone\(\)/
    )[1]
  );

  // Soft fractional OOB (do NOT round here — rounding near edges false-kills Borderless).
  // Grid indexers below round separately.
  code = step("n7bounds", () =>
    code.assertReplace(
      /n7=function\([a-z],[a-z]\)\{return [a-z]\.x>=0&&[a-z]\.x<[a-z]\.[$a-zA-Z0-9_]{0,8}\.width&&[a-z]\.y>=0&&[a-z]\.y<[a-z]\.[$a-zA-Z0-9_]{0,8}\.height\}/,
      "n7=function(a,b){return b.x>-0.5&&b.x<a.oa.width-0.5&&b.y>-0.5&&b.y<a.oa.height-0.5}"
    )
  );

  // Borderless: never die to OOB (wrap handles it). Tc(a){n7(...)||this.Na()}
  {
    const next = step(
      "oobTc",
      () =>
        code.assertReplace(
          /Tc\(a\)\{n7\(this\.ka,a\)\|\|this\.Na\(\)/,
          "Tc(a){o7(this.settings)||n7(this.ka,a)||this.Na()"
        ),
      true
    );
    if (next) code = next;
  }

  // Tile Map keys must be integers (walls / statue / mines / gates).
  code = step("Z6", () =>
    code.assertReplace(
      /Z6=function\(a\)\{return a\.x<<16\|a\.y\}/,
      "Z6=function(a){return Math.round(a.x)<<16|Math.round(a.y)}"
    )
  );

  // Statue flood-fill board indexing.
  code = step("jdF", () =>
    code.assertReplace(
      /jdF=function\(a,b,c\)\{if\(n7\(a\.ka,c\)&&!a\.oa\.get\(Z6\(c\)\)\)\{var d=b\[c\.y\]\[c\.x\];/,
      "jdF=function(a,b,c){c={x:Math.round(c.x),y:Math.round(c.y)};if(n7(a.ka,c)&&!a.oa.get(Z6(c))){var d=b[c.y][c.x];"
    )
  );

  // Arrow / gate / sokoban / bridge: round before 2D board indexing.
  code = step("eaF", () =>
    code.assertReplace(
      /eaF=function\(a,b\)\{return n7\(a\.oa,b\)\?a\.ka\[b\.y\]\[b\.x\]\.direction:"NONE"\}/,
      'eaF=function(a,b){b={x:Math.round(b.x),y:Math.round(b.y)};return n7(a.oa,b)?a.ka[b.y][b.x].direction:"NONE"}'
    )
  );
  code = step("daF", () =>
    code.assertReplace(
      /daF=function\(a,b\)\{return n7\(a\.oa,b\)\?a\.ka\[b\.y\]\[b\.x\]\.Gh:!1\}/,
      'daF=function(a,b){b={x:Math.round(b.x),y:Math.round(b.y)};return n7(a.oa,b)?a.ka[b.y][b.x].Gh:!1}'
    )
  );
  code = step("BaF", () =>
    code.assertReplace(
      /BaF=function\(a,b,c\)\{var d=a\.ka\[c\.y\]\[c\.x\];/,
      "BaF=function(a,b,c){c={x:Math.round(c.x),y:Math.round(c.y)};if(!a.ka[c.y]||a.ka[c.y][c.x]==null)return;var d=a.ka[c.y][c.x];"
    )
  );
  // Expose arrow helpers to window (module-scoped BaF/f7 are invisible to runCodeBefore).
  code = step("exposeArrowApi", () =>
    code.assertReplace(
      /c\.color=a\)\},CaF=class\{constructor\(a,b,c\)\{this\.settings=a;this\.oa=b;this\.wa=c;this\.ka=\[\]\}/,
      "c.color=a)};window.mouseBaF=BaF;window.mouseEaF=eaF;window.mouseF7=f7;window.mouseSettingsHas=f7;var CaF=class{constructor(a,b,c){this.settings=a;this.oa=b;this.wa=c;this.ka=[]}"
    )
  );
  code = step("i7", () =>
    code.assertReplace(
      /i7=function\(a,b,c\)\{var d=a\.ka\[b\.y\]\[b\.x\];/,
      "i7=function(a,b,c){b={x:Math.round(b.x),y:Math.round(b.y)};if(!n7(a.oa,b))return;var d=a.ka[b.y][b.x];"
    )
  );
  code = step("cbF", () =>
    code.assertReplace(
      /cbF=function\(a,b,c\)\{b=a\.ka\[b\.y\]\[b\.x\];/,
      // Only enter gates when nearly on-tile — fractional heads were snapping/teleporting early.
      "cbF=function(a,b,c){if(Math.abs(b.x-Math.round(b.x))>0.35||Math.abs(b.y-Math.round(b.y))>0.35)return;b={x:Math.round(b.x),y:Math.round(b.y)};if(!a.ka[b.y]||a.ka[b.y][b.x]==null)return;b=a.ka[b.y][b.x];"
    )
  );

  // Gate setActive: round tile before Yfa grid lookup (float head crashed here).
  {
    const next = step(
      "gateSetActive",
      () =>
        code.assertReplace(
          /setActive\(a,b,c\)\{var d=this\.ka\[a\.y\]\[a\.x\]\.Yfa\.get\(b\);/,
          "setActive(a,b,c){a={x:Math.round(a.x),y:Math.round(a.y)};var d=this.ka[a.y]&&this.ka[a.y][a.x];if(!d)return;d=d.Yfa.get(b);"
        ),
      true
    );
    if (next) code = next;
  }

  // Bridge render/activate: round segment coords before oa[y][x].
  {
    const next = step(
      "bridgeOa",
      () =>
        code.assertReplace(
          /\(\(ce=this\.wb\.Fa\.oa\[yc\.y\]\)==null\?0:ce\[yc\.x\]\)/,
          "((ce=this.wb.Fa.oa[Math.round(yc.y)])==null?0:ce[Math.round(yc.x)])"
        ),
      true
    );
    if (next) code = next;
  }
  {
    const next = step(
      "HaF",
      () =>
        code.assertReplace(
          /HaF=function\(a,b\)\{return GaF\(a,b\.x,b\.y,!1\)\}/,
          "HaF=function(a,b){return GaF(a,Math.round(b.x),Math.round(b.y),!1)}"
        ),
      true
    );
    if (next) code = next;
  }
  {
    const next = step(
      "GaF",
      () =>
        code.assertReplace(
          /GaF=function\(a,b,c,d=!1\)\{a=a\.wa\[c\]\[b\];/,
          "GaF=function(a,b,c,d=!1){b=Math.round(b);c=Math.round(c);if(!a.wa[c])return!1;a=a.wa[c][b];"
        ),
      true
    );
    if (next) code = next;
  }
  {
    const next = step(
      "dbF",
      () =>
        code.assertReplace(
          /dbF=function\(a,b,c\)\{b=b\.clone\(\);/,
          "dbF=function(a,b,c){b=b.clone();b.x=Math.round(b.x);b.y=Math.round(b.y);"
        ),
      true
    );
    if (next) code = next;
  }
  {
    const next = step(
      "rbF",
      () =>
        code.assertReplace(
          /rbF=function\(a,b,c\)\{for\(var d;n7\(a\.ka,b\)&&\(\(d=a\.oa\[b\.y\]\[b\.x\]\)==null\?0:d\.Gh\);\)/,
          "rbF=function(a,b,c){b.x=Math.round(b.x);b.y=Math.round(b.y);for(var d;n7(a.ka,b)&&((d=a.oa[b.y]&&a.oa[b.y][b.x])==null?0:d.Gh);)"
        ),
      true
    );
    if (next) code = next;
  }
  {
    const next = step(
      "scF",
      () =>
        code.assertReplace(
          /scF=function\(a,b,c\)\{a\.Aa\.set\(Z6\(b\),c\);a\.wa\[b\.y\]\[b\.x\]\+\+\}/,
          "scF=function(a,b,c){b={x:Math.round(b.x),y:Math.round(b.y)};a.Aa.set(Z6(b),c);a.wa[b.y][b.x]++}"
        ),
      true
    );
    if (next) code = next;
  }
  {
    const next = step(
      "pcF",
      () =>
        code.assertReplace(
          /pcF=function\(a,b\)\{a\.Aa\.delete\(Z6\(b\)\);a\.wa\[b\.y\]\[b\.x\]--\}/,
          "pcF=function(a,b){b={x:Math.round(b.x),y:Math.round(b.y)};a.Aa.delete(Z6(b));a.wa[b.y][b.x]--}"
        ),
      true
    );
    if (next) code = next;
  }

  // Sokoban occupancy: mark rounded body tiles (don't skip fractional segments).
  {
    const next = step(
      "mdFbody",
      () =>
        code.assertReplace(
          /d=b\.ka\[c\],f7\(b\.settings,3\)&&\(d\.x\+d\.y\)%2===0\|\|f7\(b\.settings,11\)&&!b\.wa\[c\]\|\|d\.x%1!==0\|\|d\.y%1!==0\|\|/,
          "d=b.ka[c],d={x:Math.round(d.x),y:Math.round(d.y)},f7(b.settings,3)&&(d.x+d.y)%2===0||f7(b.settings,11)&&!b.wa[c]||"
        ),
      true
    );
    if (next) code = next;
  }

  // Sokoban: generous snoot push; snap to tiles; unlock apples when box hits a goal.
  // (Vanilla unlock lives at the end of gbF — mouse never calls gbF because head.equals fails.)
  {
    const next = step(
      "jbF",
      () =>
        code.assertReplace(
          /jbF=function\(a,b,c,d\)\{b=c\?k7\(a\.ka,b\):b;c=c\?\$6\(a\.Aa\.direction\):a\.Aa\.direction;for\(let h of a\.oa\)if\(h\.Gh&&h\.pos\.equals\(b\)\)\{if\(n\$E\(a\.settings\.ka,h\.sequenceNumber,a\.wa\.wa\)\)\{d\(\);break\}var e=h\.pos\.clone\(\),f=!1;if\(bbF\(a\.settings\)\)\{let k;var g=\(k=cbF\(a\.Fa,h\.pos,c\)\)!=null\?k:f7\(a\.settings,20\)\?dbF\(a\.Ja,\s*h\.pos,c\):void 0;g&&\(e\.x=g\.x,e\.y=g\.y,f=!0\)\}if\(!f\)switch\(c\)\{case "RIGHT":e\.x\+=1;break;case "LEFT":--e\.x;break;case "DOWN":e\.y\+=1;break;case "UP":--e\.y\}f7\(a\.settings,4\)&&j7\(a\.ka,e\);g=n7\(a\.ka,e\)&&a\.ka\.wa\[e\.y\]\[e\.x\]!==10&&HaF\(a\.ka,e\);f=!n7\(a\.ka,e\)&&!f7\(a\.settings,4\)&&f;if\(g\|\|f\)\{f=f7\(a\.settings,7\)&&PaF\(a\.ka\)&&h\.pos\.x===Math\.floor\(a\.ka\.oa\.width\/2\)&&h\.pos\.y===Math\.floor\(a\.ka\.oa\.height\/2\);if\(a\.ka\.wa\[e\.y\]\[e\.x\]!==5&&a\.ka\.wa\[e\.y\]\[e\.x\]!==11&&a\.ka\.wa\[e\.y\]\[e\.x\]!==7&&!f\)switch\(h\.prev=h\.pos\.clone\(\),e=1\/3,a\.Aa\.direction\)\{case "RIGHT":h\.pos\.x\+=\s*e;break;case "LEFT":h\.pos\.x-=e;break;case "DOWN":h\.pos\.y\+=e;break;case "UP":h\.pos\.y-=e\}d\(\)\}else f7\(a\.settings,16\)&&eaF\(a\.Ba,e\)===\$6\(c\)&&daF\(a\.Ba,e\)&&d\(\)\}\}/,
          `jbF=function(a,b,c,d){b=c?k7(a.ka,b):b;b={x:Math.round(b.x),y:Math.round(b.y)};c=(typeof faceAngle==="number"?window.mouseCardinalFromAngle(faceAngle):a.Aa.direction);var __sokoGoal=function(box){for(let g of a.B_){if(Math.round(box.pos.x)===Math.round(g.x)&&Math.round(box.pos.y)===Math.round(g.y)){fbF(a,box);a.B_.delete(g);if(f7(a.settings,7)){var m=k7(a.ka,g);for(let t of a.B_)if(Math.round(t.x)===Math.round(m.x)&&Math.round(t.y)===Math.round(m.y)){a.B_.delete(t);break}}return!0}}return!1};for(let h of a.oa){if(!h.Gh)continue;h.pos.x=Math.round(h.pos.x);h.pos.y=Math.round(h.pos.y);if(__sokoGoal(h))continue;if(Math.hypot(h.pos.x-b.x,h.pos.y-b.y)>=1.75)continue;if(n$E(a.settings.ka,h.sequenceNumber,a.wa.wa))continue;var e=h.pos.clone();switch(c){case "RIGHT":e.x+=1;break;case "LEFT":--e.x;break;case "DOWN":e.y+=1;break;case "UP":--e.y;break;default:continue}f7(a.settings,4)&&j7(a.ka,e);e.x=Math.round(e.x);e.y=Math.round(e.y);var other=false;for(let o of a.oa)if(o!==h&&o.Gh&&Math.round(o.pos.x)===e.x&&Math.round(o.pos.y)===e.y){other=true;break}var cell=a.ka.wa[e.y]&&a.ka.wa[e.y][e.x],destOk=n7(a.ka,e)&&!other&&cell!==10&&!HaF(a.ka,e);if(destOk){h.prev=h.pos.clone();h.pos.x=e.x;h.pos.y=e.y;__sokoGoal(h);}}}`
        ),
      true
    );
    if (next) code = next;
  }

  // Also make vanilla gbF goal check tolerant of any residual float coords.
  {
    const next = step(
      "gbFgoal",
      () =>
        code.assertReplace(
          /for\(let g of a\.B_\)if\(b\.pos\.equals\(g\)\)\{fbF\(a,b\);a\.B_\.delete\(g\);/,
          "for(let g of a.B_)if(Math.round(b.pos.x)===Math.round(g.x)&&Math.round(b.pos.y)===Math.round(g.y)){fbF(a,b);a.B_.delete(g);"
        ),
      true
    );
    if (next) code = next;
  }

  // Sokoban: overlapping a box tile must not kill (push handles it).
  {
    const next = step(
      "sokoNoKill",
      () =>
        code.assertReplace(
          /n7\(this\.wb\.ka,ce\)&&\s*this\.wb\.ka\.wa\[ae\.y\]\[ae\.x\]===7&&HaF\(this\.wb\.ka,ce\)&&\(Xc=!0\)/,
          "false&&(Xc=!0)"
        ),
      true
    );
    if (next) code = next;
  }

  // Borderless: always use fixed camera (same as Borderless+Tally via bcF).
  code = step("bcF", () =>
    code.assertReplace(
      /bcF=function\(a\)\{return f7\(a,4\)&&\(f7\(a,2\)\|\|f7\(a,5\)\|\|f7\(a,\s*19\)\|\|f7\(a,20\)\|\|a\.ka===6\)\}/,
      "bcF=function(a){return f7(a,4)}"
    )
  );

  // Minesweeper: keep vanilla fuse (F2a countdown). Do NOT widen the detonation
  // AcF check — that skipped the timer and exploded as soon as you got near.
  // Arming still uses AcF(...,1) in EcF (works with fractional heads).
  // When the mine explodes with the head in blast radius, die (vanilla d()/e()).

  // Hotdog: spawn 2 fewer front-side neighbor walls (drop forward diagonals).
  {
    const next = step(
      "hotdogFront",
      () =>
        code.assertReplace(
          /IcF=function\(a,b\)\{scF\(a,b,\{pos:b,Cm:!0,T0:!1,Gh:!f7\(a\.settings,11\)\}\);var c=\[new _\.Sd\(b\.x-1,b\.y-1\),new _\.Sd\(b\.x,b\.y-1\),new _\.Sd\(b\.x\+1,b\.y-1\),new _\.Sd\(b\.x-1,b\.y\),new _\.Sd\(b\.x\+1,b\.y\),new _\.Sd\(b\.x-1,b\.y\+1\),new _\.Sd\(b\.x,b\.y\+1\),new _\.Sd\(b\.x\+1,b\.y\+1\)\];if\(f7\(a\.settings,4\)\)for\(var d of c\)j7\(a\.ka,d\);for\(let e of c\)n7\(a\.ka,\s*e\)&&a\.wa\[e\.y\]\[e\.x\]\+\+;/,
          `IcF=function(a,b){scF(a,b,{pos:b,Cm:!0,T0:!1,Gh:!f7(a.settings,11)});var c=[new _.Sd(b.x-1,b.y-1),new _.Sd(b.x,b.y-1),new _.Sd(b.x+1,b.y-1),new _.Sd(b.x-1,b.y),new _.Sd(b.x+1,b.y),new _.Sd(b.x-1,b.y+1),new _.Sd(b.x,b.y+1),new _.Sd(b.x+1,b.y+1)];if(f7(a.settings,4))for(var d of c)j7(a.ka,d);{let __s=window.mouseSnakeRef&&window.mouseSnakeRef(),__dir=__s&&__s.direction,fx=__dir==="RIGHT"?1:__dir==="LEFT"?-1:0,fy=__dir==="DOWN"?1:__dir==="UP"?-1:0;if(fx||fy)c=c.filter(p=>{const dx=p.x-b.x,dy=p.y-b.y;return !(dx&&dy&&dx*fx+dy*fy>0);});}for(let e of c)n7(a.ka,e)&&a.wa[e.y][e.x]++;`
        ),
      true
    );
    if (next) code = next;
  }

  // Shield mode Oba death: e7 → OaF (same as Shield under mouse); else rounded tile.
  // Chess lethality while carrying is the eat-path Na() above — not Oba.has(direction).
  {
    const next = step(
      "shieldTick",
      () =>
        code.assertReplace(
          /\(e7\(this\.settings\)\?OaF\(this\.ka,a,f\.pos\)<1:f\.pos\.equals\(a\)\)&&\(\(g=f\.Oba\)==null\?0:g\.has\(d\)\)&&this\.Na\(\)/,
          "(e7(this.settings)?OaF(this.ka,a,f.pos)<1:(Math.round(f.pos.x)===Math.round(a.x)&&Math.round(f.pos.y)===Math.round(a.y)))&&((g=f.Oba)==null?0:g.has(d))&&this.Na()"
        ),
      true
    );
    if (next) code = next;
  }
  {
    const next = step(
      "shieldRender",
      () =>
        code.assertReplace(
          /ae\.equals\(Qd\.pos\)&&\(\(ge=Qd\.Oba\)==null\?0:ge\.has\(xc\)\)&&\(Xc=!0\)/,
          "Math.round(ae.x)===Math.round(Qd.pos.x)&&Math.round(ae.y)===Math.round(Qd.pos.y)&&((ge=Qd.Oba)==null?0:ge.has(xc))&&(Xc=!0)"
        ),
      true
    );
    if (next) code = next;
  }

  // Disable cardinal head steps (More Menu may respace operators)
  code = step("switchFalse", () => {
    const patterns = [
      /switch\(([a-z])\.direction\)\{case "LEFT":--([a-z])\.x;/,
      /switch\(([a-z])\.direction\)\{case "LEFT":--\s*([a-z])\.x;/,
      /switch\(([a-zA-Z0-9_$]+)\.direction\)\s*\{\s*case "LEFT":\s*--\s*([a-zA-Z0-9_$]+)\.x\s*;/,
      /switch\(([a-zA-Z0-9_$]+)\.direction\)\{case "LEFT":([a-zA-Z0-9_$]+)\.x--/,
    ];
    for (const p of patterns) {
      if (p.test(code)) {
        return code.assertReplace(
          p,
          'switch(false){case "LEFT":--$2.x;'
        );
      }
    }
    const idx = code.search(/case "LEFT":/);
    const hits = [];
    let i = 0,
      from = 0;
    while (i < 5) {
      const j = code.indexOf("switch(", from);
      if (j < 0) break;
      const snip = code.slice(j, j + 80);
      if (snip.includes("direction")) hits.push(snip);
      from = j + 6;
      i++;
    }
    console.error("MouseMod switch debug LEFT@", idx, code.slice(Math.max(0, idx - 60), idx + 100));
    console.error("MouseMod switch(direction) hits", hits);
    throw new Error("no switch(direction) LEFT pattern");
  });

  // After the (disabled) direction switch, inject mouse next-head.
  code = step("injectHead", () => {
    const patterns = [
      /(switch\(false\)\{case "LEFT":[^]*?case "DOWN":([a-z])\.y\+=\n?1,[^]*?\})/,
      /(switch\(false\)\{case "LEFT":[^]*?case "DOWN":([a-zA-Z0-9_$]+)\.y\s*\+=\s*1[^]*?\})/,
    ];
    for (const p of patterns) {
      if (p.test(code)) {
        return code.assertReplace(
          p,
          `$1
  updateFaceCoordsAndRotation(this.${window.blockyHeadCoord}, this.${window.tileWidth}, this.${window.bodyArray});
  $2 = new ${window.coordConstructor}(nextHeadX, nextHeadY);
  `
        );
      }
    }
    const idx = code.indexOf("switch(false)");
    console.error(
      "MouseMod injectHead debug",
      idx,
      code.slice(idx, idx + 350)
    );
    throw new Error("injectHead pattern miss");
  });

  // Force winged-style fruit proximity
  code = step("wingedFruit", () =>
    code.assertReplace(
      /if\(e7\(this\.settings\)\)\{let ([$a-zA-Z0-9_]{0,8})=this\.oa\.ka\[0\]!==void 0/,
      "if(true){let $1=this.oa.ka[0]!==void 0"
    )
  );

  // Tally: non-current (higher index) apples act as walls for fractional heads.
  // Vanilla uses .equals which never hits under mouse.
  {
    const next = step(
      "tallyWallTick",
      () =>
        code.assertReplace(
          /\(e7\(this\.settings\)\?OaF\(this\.ka,a,d\.pos\)<1:d\.pos\.equals\(a\)\)&&n\$E\(this\.settings\.ka,d\.sequenceNumber,this\.wa\.wa\)&&this\.Na\(\)/,
          "Math.hypot(a.x-d.pos.x,a.y-d.pos.y)<1&&n$E(this.settings.ka,d.sequenceNumber,this.wa.wa)&&this.Na()"
        ),
      true
    );
    if (next) code = next;
  }
  {
    const next = step(
      "tallyWallYY",
      () =>
        code.assertReplace(
          /\(f7\(this\.settings,6\)\?OaF\(this\.ka,b,d\.pos\)<1:d\.pos\.equals\(b\)\)&&n\$E\(this\.settings\.ka,d\.sequenceNumber,this\.wa\.wa\)&&this\.Na\(\)/,
          "Math.hypot(b.x-d.pos.x,b.y-d.pos.y)<1&&n$E(this.settings.ka,d.sequenceNumber,this.wa.wa)&&this.Na()"
        ),
      true
    );
    if (next) code = next;
  }
  {
    const next = step(
      "tallyWallRender",
      () =>
        code.assertReplace(
          /Qd\.Gh&&Qd\.pos\.equals\(ae\)&&n\$E\(this\.settings\.ka,Qd\.sequenceNumber,this\.wb\.wa\.wa\)/,
          "Qd.Gh&&Math.hypot(Qd.pos.x-ae.x,Qd.pos.y-ae.y)<1&&n$E(this.settings.ka,Qd.sequenceNumber,this.wb.wa.wa)"
        ),
      true
    );
    if (next) code = next;
  }

  // Key pickup: distance instead of tile equals
  {
    const next = step(
      "keys",
      () =>
        code.assertReplace(
          /\(([a-z]\.Aa\.ka\[0\])\.equals\(([a-z]\.pos)\)\|\|([$a-zA-Z0-9_]{0,8}\([a-z]\.settings,7\))&&([$a-zA-Z0-9_]{0,8}\([a-z]\.Aa,0\))\.equals\([a-z]\.pos\)\)/,
          "(Math.hypot($1.x-$2.x,$1.y-$2.y)<1||$3&&Math.hypot($4.x-$2.x,$4.y-$2.y)<1)"
        ),
      true
    );
    if (next) code = next;
  }

  // Head visual lerp toward mouse next position (renderer: this.wb.*)
  {
    const next = step(
      "headRender",
      () => {
        const re =
          /pb===0\?\(([a-zA-Z0-9_$]+)=this\.([$a-zA-Z0-9_]{0,8})\.([$a-zA-Z0-9_]{0,8})\.([$a-zA-Z0-9_]{0,8})\[0\]\.clone\(\),[\s\S]{0,800}?\):\1=this\.\2\.\3\.\4\[/;
        return code.assertReplace(
          re,
          `pb===0?($1=this.$2.$3.$4[0].clone(),(aimTrainer?($1.x+=Math.cos(faceAngle),$1.y+=Math.sin(faceAngle)):(updateFaceCoordsAndRotation(this.$2.${window.blockyHeadCoord},this.$2.${window.tileWidth},this.$2.$3.$4),$1.x=nextHeadX,$1.y=nextHeadY))):$1=this.$2.$3.$4[`
        );
      },
      true
    );
    if (next) code = next;
  }

  // Offset body curve control points for off-grid segments (full original logic).
  {
    const next = step(
      "curveOffset",
      () => {
        // Neighbor segment vars (v12: yc closer-to-head, kc further).
        let closer = "yc";
        let further = "kc";
        const named = code.match(
          /let ([a-zA-Z0-9_$]+);pb===0\?\(\1=[\s\S]{0,400}?\):[\s\S]{0,80}?let [a-zA-Z0-9_$]+=this\.[\s\S]{0,120}?;([a-zA-Z0-9_$]+);\2=pb===/
        );
        if (named) {
          closer = named[1];
          further = named[2];
        }

        // Replace cardinal-only corner math with fluid blends toward neighboring segments.
        const re =
          /(let ([$a-zA-Z0-9_]+)=([$a-zA-Z0-9_]+)\.clone\(\),([$a-zA-Z0-9_]+)=\3\.clone\(\);\2\.x\*=(this\.[$a-zA-Z0-9_.]+);\2\.y\*=\5;\4\.x\*=\5;\4\.y\*=\5;)[\s\S]*?(?=if\(pb===0\))/;
        return code.assertReplace(
          re,
          `$1
    $2.x+=$5/2;$2.y+=$5/2;$4.x+=$5/2;$4.y+=$5/2;
    {let __near=${closer}.clone();__near.x=${closer}.x*$5+$5/2;__near.y=${closer}.y*$5+$5/2;
     let __far=${further}.clone();__far.x=${further}.x*$5+$5/2;__far.y=${further}.y*$5+$5/2;
     $2.x=$2.x*0.49+__near.x*0.51;$2.y=$2.y*0.49+__near.y*0.51;
     $4.x=$4.x*0.49+__far.x*0.51;$4.y=$4.y*0.49+__far.y*0.51;}
    `
        );
      },
      true
    );
    if (next) code = next;
  }

  // Prevent wall-mode render from pausing the head animation (crashes / snaps).
  {
    const next = step(
      "wallPause",
      () => {
        const patterns = [
          /if\(![$a-zA-Z0-9_]{0,8}\(this\.[$a-zA-Z0-9_]{0,8},17\)\)/,
          /if\(![$a-zA-Z0-9_]{0,8}\(this\.[$a-zA-Z0-9_]{0,8},17\)\)\{/,
          /if\(!o7\(this\.settings\)\)/,
        ];
        for (const p of patterns) {
          if (p.test(code)) return code.assertReplace(p, "if(false)");
        }
        return null;
      },
      true
    );
    if (next) code = next;
  }

  // Body part facing uses faceAngle
  {
    const next = step(
      "faceAngle",
      () =>
        code.assertReplace(
          /case "NONE":case "RIGHT":([a-z])=\n?0\}Math\.abs\(\1-([a-z])\)/,
          'case "NONE":case "RIGHT":$1=0}$1=$2=faceAngle;Math.abs($1-$2)'
        ),
      true
    );
    if (next) code = next;
  }

  // Chess: Remix owns score/lock/respawn. Mouse only bridges fractional heads.
  //
  // wingedFruit already rewrote if(e7) → if(true) for mouse eat proximity.
  // Chess still needs same-tile eat (OaF near-miss → findApple fruit path).
  {
    const next = step(
      "appleEatChessTile",
      () => {
        const patterns = [
          /if\(true\)\{let dg=this\.oa\.ka\[0\]!==void 0&&this\.oa\.ka\[1\]!==void 0&&Wd\.pos!==void 0;\$d=dg&&\(OaF\(this\.ka,this\.oa\.ka\[0\],Wd\.pos\)<1\|\|OaF\(this\.ka,this\.oa\.ka\[1\],Wd\.pos\)<1\);if\(f7\(this\.settings,7\)&&dg\)\{let Cg=m7\(this\.oa,1\);He=OaF\(this\.ka,m7\(this\.oa,0\),Wd\.pos\)<1\|\|OaF\(this\.ka,Cg,Wd\.pos\)<1\}\}/,
          /if\(e7\(this\.settings\)\)\{let dg=this\.oa\.ka\[0\]!==void 0&&this\.oa\.ka\[1\]!==void 0&&Wd\.pos!==void 0;\$d=dg&&\(OaF\(this\.ka,this\.oa\.ka\[0\],Wd\.pos\)<1\|\|OaF\(this\.ka,this\.oa\.ka\[1\],Wd\.pos\)<1\);if\(f7\(this\.settings,7\)&&dg\)\{let Cg=m7\(this\.oa,1\);He=OaF\(this\.ka,m7\(this\.oa,0\),Wd\.pos\)<1\|\|OaF\(this\.ka,Cg,Wd\.pos\)<1\}\}/,
        ];
        const rep =
          "if(true){let dg=this.oa.ka[0]!==void 0&&this.oa.ka[1]!==void 0&&Wd.pos!==void 0;if(window.isChessActive&&window.isChessActive()){$d=!!dg&&Math.round(this.oa.ka[0].x)===Math.round(Wd.pos.x)&&Math.round(this.oa.ka[0].y)===Math.round(Wd.pos.y);if(f7(this.settings,7)&&dg){He=Math.round(m7(this.oa,0).x)===Math.round(Wd.pos.x)&&Math.round(m7(this.oa,0).y)===Math.round(Wd.pos.y)}}else{$d=dg&&(OaF(this.ka,this.oa.ka[0],Wd.pos)<1||OaF(this.ka,this.oa.ka[1],Wd.pos)<1);if(f7(this.settings,7)&&dg){let Cg=m7(this.oa,1);He=OaF(this.ka,m7(this.oa,0),Wd.pos)<1||OaF(this.ka,Cg,Wd.pos)<1}}}";
        for (const p of patterns) {
          if (p.test(code)) return code.assertReplace(p, rep);
        }
        return null;
      },
      true
    );
    if (next) code = next;
  }
  // Non-shield modes: .equals never hits fractional heads.
  {
    const next = step(
      "appleEatProx",
      () =>
        code.assertReplace(
          /else \$d=this\.oa\.ka\[0\]\.equals\(Wd\.pos\),f7\(this\.settings,\s*7\)&&\(He=m7\(this\.oa,0\)\.equals\(Wd\.pos\)\)/,
          "else $d=(Math.round(this.oa.ka[0].x)===Math.round(Wd.pos.x)&&Math.round(this.oa.ka[0].y)===Math.round(Wd.pos.y)),f7(this.settings,7)&&(He=(Math.round(m7(this.oa,0).x)===Math.round(Wd.pos.x)&&Math.round(m7(this.oa,0).y)===Math.round(Wd.pos.y)))"
        ),
      true
    );
    if (next) code = next;
  }

  // Chess eat: while locked/carrying, any eat attempt kills (generous $d||He hitreg).
  // While OPEN, tag Wd and apply piece pickup immediately (don't trust findApple alone).
  {
    const next = step(
      "chessEatLockedDeath",
      () =>
        code.assertReplace(
          /if\(\$d\|\|He\)\{let dg=Wd\.nla/,
          "if($d||He){if(window.isChessActive&&window.isChessActive()&&(window.__chessCarrying||(window.head_state&&window.head_state!=='OPEN'))){this.Na();break;}window.__chessEatenApple=Wd;if(this.wa&&this.wa.ka)window.appleArray=this.wa.ka;if(window.isChessActive&&window.isChessActive()&&Wd.isPiece){window.just_ate='piece';window.head_state=Wd.ChessPiece;window.head_color=Wd.ChessColor;window.__chessCarrying=true;window.__chessCarryPiece=Wd.ChessPiece;if(typeof window.updateTrophySRC==='function')window.updateTrophySRC(Wd.type);if(typeof window.shield_all==='function')window.shield_all();}let dg=Wd.nla"
        ),
      true
    );
    if (next) code = next;
  }

  // Score hook: honor pickup tag / just_ate / sticky carry; never Oh++ a piece.
  {
    const next = step(
      "chessScoreHarden",
      () =>
        code.assertReplace(
          /if\(_ae&&!_ae\.isPiece\)\{window\.just_ate='fruit';this\.Oh\+\+;/,
          "if(window.just_ate!=='piece'&&!window.__chessCarrying&&!(window.__chessEatenApple&&window.__chessEatenApple.isPiece)&&_ae&&!_ae.isPiece){window.just_ate='fruit';this.Oh++;"
        ),
      true
    );
    if (next) code = next;
  }
  {
    const next = step(
      "chessScoreHonorPickup",
      () =>
        code.assertReplace(
          /else if\(_ae&&_ae\.isPiece\)\{window\.just_ate='piece';window\.head_state=_ae\.ChessPiece;window\.updateTrophySRC\(_ae\.type\);window\.head_color=_ae\.ChessColor;window\.shield_all\(\);\}else\{window\.just_ate='fruit';this\.Oh\+\+;/,
          "else if((_ae&&_ae.isPiece)||(window.__chessEatenApple&&window.__chessEatenApple.isPiece)||window.just_ate==='piece'||window.__chessCarrying){window.just_ate='piece';{let _src=(_ae&&_ae.isPiece)?_ae:(window.__chessEatenApple&&window.__chessEatenApple.isPiece?window.__chessEatenApple:null);if(_src&&_src.isPiece){window.head_state=_src.ChessPiece;window.__chessCarryPiece=_src.ChessPiece;window.head_color=_src.ChessColor;if(typeof window.updateTrophySRC==='function')window.updateTrophySRC(_src.type);}window.__chessCarrying=true;if(this.wa&&this.wa.ka)window.appleArray=this.wa.ka;if(typeof window.shield_all==='function')window.shield_all();window.__chessEatenApple=null;}}else{window.just_ate='fruit';this.Oh++;"
        ),
      true
    );
    if (next) code = next;
  }
  // Touch aim
  let touchEventProperty = step(
    "touchProp",
    () =>
      code.assertMatch(
        /[a-z]\.preventDefault\(\);[a-z]=[a-z]\.([$a-zA-Z0-9_]{0,8})\.touches\[0\];/
      )[1],
    true
  );

  if (touchEventProperty) {
    const tm = step(
      "touchmove",
      () =>
        code.assertReplace(
          /([a-z])\.preventDefault\(\);[a-z]=[a-z]\.[$a-zA-Z0-9_]{0,8}\.touches\[0\];/,
          "$& window.updateMousePos($1); return;"
        ),
      true
    );
    if (tm) code = tm;

    const ts = step(
      "touchstart",
      () =>
        code.assertReplace(
          /([a-z])(\.target===\n?[a-zA-Z0-9_$.]+\(\))&&([a-z]\.preventDefault\(\))/,
          `$1$2 && window.updateMousePos($1.${touchEventProperty}.touches[0]) && $3`
        ),
      true
    );
    if (ts) code = ts;
  }

  // Expose game object for startGame / poison / arrows; clear arrow trail between runs.
  code = step("resetState", () =>
    code.assertReplace(
      /\}resetState\(a=!0\)\{/,
      "}resetState(a=!0){window.mouseArrowTrail=null;window.mouseArrowRail=null;window.__chessCarrying=false;window.__chessCarryPiece=null;window.__chessEatenApple=null;globalThis.megaWholeSnakeObject=this;window.__remixGame=this;"
    )
  );

  // Start via turn (v12) — also assign directly so it works even if append marker misses
  code = step("startGameAppend", () =>
    appendCodeWithinSnakeModule(
      code,
      `
    globalThis.startGame = function() {
      const root = globalThis.megaWholeSnakeObject;
      if (!root) return;
      if (typeof root.turn === "function") root.turn("RIGHT");
      else if (root.wb && typeof root.wb.turn === "function") root.wb.turn("RIGHT");
    };
  `,
      true
    )
  );
  // Ensure startGame exists even if module append no-ops
  if (!code.includes("globalThis.startGame")) {
    code += `
;globalThis.startGame=function(){const root=globalThis.megaWholeSnakeObject;if(!root)return;if(typeof root.turn==="function")root.turn("RIGHT");else if(root.wb&&typeof root.wb.turn==="function")root.wb.turn("RIGHT");};
`;
  }

  // Wall / statue / hotdog hitreg: probe rounded tile (not +0.5 float).
  {
    const next = step(
      "wallOffset",
      () =>
        code.assertReplace(
          /([a-z]=this\.Ca\.Ca\()([a-z])(\))/,
          "$1{x:Math.round($2.x),y:Math.round($2.y)}$3"
        ),
      true
    );
    if (next) code = next;
  }

  // Sokoban / occupancy / keys: round ALL .wa[obj.y][obj.x] including nested .pos.
  {
    const next = step(
      "sokoWa",
      () =>
        code.assertReplaceAll(
          /\.wa\[((?:[$a-zA-Z0-9_]+\.)+[$a-zA-Z0-9_]+)\.y\]\[((?:[$a-zA-Z0-9_]+\.)+[$a-zA-Z0-9_]+)\.x\]/g,
          ".wa[Math.round($1.y)][Math.round($2.x)]"
        ),
      true
    );
    if (next) code = next;
  }
  {
    const next = step(
      "sokoWaSimple",
      () =>
        code.assertReplaceAll(
          /\.wa\[([$a-zA-Z0-9_]+)\.y\]\[([$a-zA-Z0-9_]+)\.x\]/g,
          ".wa[Math.round($1.y)][Math.round($2.x)]"
        ),
      true
    );
    if (next) code = next;
  }

  // Gate/bridge tile grids: a.oa[y][x] / Fa.oa[y][x] with float y.
  {
    const next = step(
      "oaIndex",
      () =>
        code.assertReplaceAll(
          /\.oa\[([a-zA-Z0-9_$]+)\.y\]\[([a-zA-Z0-9_$]+)\.x\]/g,
          ".oa[Math.round($1.y)][Math.round($2.x)]"
        ),
      true
    );
    if (next) code = next;
  }

  // Disable self-collisions
  code = step("selfCol", () =>
    code.assertReplaceAll(
      /(\.equals\([a-z]\)&&![a-z])(&&\(this\.[$a-zA-Z0-9_]{0,8}\(\),)/g,
      "$1&&false$2"
    )
  );

  // Board letterbox onto the visible canvas (standard mode).
  // Use \s* so CRLF minified builds still match.
  {
    const next = step(
      "border",
      () =>
        code.assertReplace(
          /let ([$a-zA-Z0-9_]{0,8})=Math\.round\(\(this\.context\.canvas\.width-this\.[$a-zA-Z0-9_]{0,8}\.canvas\.width\)\/2\),([$a-zA-Z0-9_]{0,8})=Math\.round\(\(this\.context\.canvas\.height-this\.[$a-zA-Z0-9_]{0,8}\.canvas\.height\)\/\s*2\);/,
          "$&globalThis.leftBorderWidth=$1;globalThis.topBorderWidth=$2;"
        ),
      true
    );
    if (next) code = next;
  }

  // Source of truth: final blit of the composed board (Ca) onto the context.
  // Do NOT match other context.drawImage calls (wa/Na/etc) — those corrupt borders.
  {
    const next = step(
      "borderDraw",
      () =>
        code.assertReplace(
          /(this\.context\.drawImage\(this\.Ca\.canvas,)([$a-zA-Z0-9_]+),([$a-zA-Z0-9_]+)(\))/,
          "$1$2,$3$4;globalThis.leftBorderWidth=$2;globalThis.topBorderWidth=$3"
        ),
      true
    );
    if (next) code = next;
  }

  // Borderless / infinity: letterbox is inverted; mirror v5 (infini center − inset).
  {
    const next = step(
      "borderless",
      () => {
        const m = code.match(
          /var ([$a-zA-Z0-9_]{0,8})=Math\.round\(this\.[$a-zA-Z0-9_]{0,8}\.canvas\.width\/2-this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.x-2\*this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\),([$a-zA-Z0-9_]{0,8})=Math\.round\(this\.[$a-zA-Z0-9_]{0,8}\.canvas\.height\/2-this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.y-2\*this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\)/
        );
        if (!m) return null;
        const infiniOffsetX = m[1];
        const infiniOffsetY = m[2];
        return code.assertReplace(
          /let ([$a-zA-Z0-9_]{0,8})=\(this\.[$a-zA-Z0-9_]{0,8}\.canvas\.width-this\.context\.canvas\.width\)\/2,([$a-zA-Z0-9_]{0,8})=\(this\.[$a-zA-Z0-9_]{0,8}\.canvas\.height-this\.context\.canvas\.height\)\/2;/,
          `$&globalThis.leftBorderWidth=${infiniOffsetX}-$1;globalThis.topBorderWidth=${infiniOffsetY}-$2;`
        );
      },
      true
    );
    if (next) code = next;
  }

  console.log(
    "MouseMod patches OK",
    window.snakeDetails,
    window.blockyHeadCoord,
    window.tileWidth,
    window.bodyArray
  );
  return code;
};

////////////////////////////////////////////////////////////////////
//RUNCODEAFTER
////////////////////////////////////////////////////////////////////

window.mouseMode.runCodeAfter = function () {
  if (window.RemixMod && typeof window.RemixMod.runCodeAfter === "function") {
    window.RemixMod.runCodeAfter();
  }

  if (typeof globalThis.startGame !== "function") {
    globalThis.startGame = function () {
      const root = globalThis.megaWholeSnakeObject || window.__remixGame;
      if (!root) return;
      if (typeof root.turn === "function") root.turn("RIGHT");
      else if (root.wb && typeof root.wb.turn === "function") root.wb.turn("RIGHT");
    };
  }

  window.gameCanvasEl =
    document.getElementsByClassName("cer0Bd")[0] ||
    document.querySelector("canvas");
  document.body.addEventListener("mousemove", updateMousePos);
  if (gameCanvasEl) {
    gameCanvasEl.addEventListener("click", startGame);
    gameCanvasEl.addEventListener("touchstart", startGame);
  }

  let keySwipeContainer = document.querySelector('[jsname="IoE5Ec"]');
  if (keySwipeContainer) {
    keySwipeContainer.style.visibility = "hidden";
    keySwipeContainer.style.opacity = "0";
  }

  setupMenuCheckbox();

  // After Remix.runCodeAfter: install mouse findApple + unlock rounding.
  if (typeof window.mouseInstallFindApple === "function") {
    window.mouseInstallFindApple();
  }
  if (typeof window.mousePatchChessForMouse === "function") {
    window.mousePatchChessForMouse();
  } else if (typeof window.mousePatchChessGenerous === "function") {
    window.mousePatchChessGenerous();
  }

  try {
    let parent = document.getElementsByClassName("EjCLSb")[0];
    let canvasNode = document.getElementsByClassName("jNB0Ic")[0];
    if (parent) {
      for (const el of [...parent.querySelectorAll("div")]) {
        if ((el.textContent || "").trim() === "Remix Mod") el.remove();
      }
      let modIndicator = document.createElement("div");
      modIndicator.style =
        "position:absolute;font-family:Arial,sans-serif;color:white;font-size:14px;padding-top:4px;padding-left:30px;user-select: none;";
      modIndicator.textContent = "Mouse Mod";
      if (canvasNode) parent.insertBefore(modIndicator, canvasNode);
      else parent.appendChild(modIndicator);
    }
  } catch (_e) {}
};
