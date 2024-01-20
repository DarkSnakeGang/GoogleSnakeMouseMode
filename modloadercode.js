window.mouseMode = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.mouseMode.runCodeBefore = function() {
  window.PuddingMod.runCodeBefore();

  window.mouseX = 176.1;
  window.mouseY = 240.1;
  window.faceAngle = 0;
  window.nextHeadX = 10;
  window.nextHeadY = 10;
  window.aimTrainer = false;

  window.updateMousePos = function(event) {
    let canvasRect = gameCanvasEl.getBoundingClientRect();
    if(window.screen.orientation.angle === 0) {
      const xOffsetFromBorder = globalThis.leftBorderWidth ?? 16;
      const yOffsetFromBorder = globalThis.topBorderWidth ?? 16;
  
      mouseX = event.clientX - canvasRect.left - xOffsetFromBorder;
      mouseY = event.clientY - canvasRect.top - yOffsetFromBorder;
    } else {
      //Assume window.screen.orientation.angle === 90, although it's possible this might not be the case?
      //Whole screen is rotated 90 deg, so calculations are a bit different
      const topOfGameOffsetFromBorder = globalThis.leftBorderWidth ?? 16;
      const sidesOfGameOffsetFromBorder = globalThis.topBorderWidth ?? 16;
  
      mouseX = canvasRect.bottom - sidesOfGameOffsetFromBorder - event.clientY;
      mouseY = event.clientX - canvasRect.left - topOfGameOffsetFromBorder;
    }

    return true; //Returns true as convenience for touchstart handling (so we can chain with &&)
  }
  
  //blockyHeadCoord = `this.${blockyHeadCoord}`
  //tileWidth = `this.${tileWidth}`/*usually a.wa*/
  //bodyArray = `this.$1`/*Usually this.Ba*/
  window.updateFaceCoordsAndRotation = function(blockyHeadCoord, tileWidth, bodyArray) {
    let headToMouseOffset = {x:mouseX - blockyHeadCoord.x, y:mouseY - blockyHeadCoord.y};
  
    let magnitude = Math.sqrt(headToMouseOffset.x**2 + headToMouseOffset.y**2);
  
    faceAngle = Math.atan(headToMouseOffset.y/headToMouseOffset.x);
  
    if(headToMouseOffset.x < 0) {
      faceAngle += Math.PI;
    }
  
    if(!aimTrainer) {
      var xDelta = headToMouseOffset.x/magnitude;
      var yDelta = headToMouseOffset.y/magnitude;
    } else{
      var xDelta = headToMouseOffset.x/tileWidth;
      var yDelta = headToMouseOffset.y/tileWidth;
    }
  
    nextHeadX = bodyArray[0].x + xDelta;
    nextHeadY = bodyArray[0].y + yDelta;
  }
  
  //Helper function for rounding and clamping with an upper bound of boardSideLength - 1 and a lower bound of 0.
  window.roundClamp = function(value, boardSideLength) {
    let res = Math.round(value);
    res = Math.min(res, boardSideLength - 1);
    res = Math.max(res, 0);
    return res;
  }
  
  window.setupMenuCheckbox = function() {
    let checkboxHtml = `
      <div id="mouse" style="text-align:center; top: 0px; cursor:default;">
        <label class="form-check-label" for="aim-train" style="height:44px;line-height:44px;opacity:100%;">Aim Trainer?</label>
        <input id="aim-train" type="checkbox">
      </div>
    `;
    let checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'e1XC2b';
    checkboxContainer.innerHTML = checkboxHtml;
    document.getElementsByClassName('sXu3u')[0].appendChild(checkboxContainer);
  
    let snakePopup = document.getElementsByClassName('T7SB3d')[1];
    let popupHeight = window.getComputedStyle(snakePopup,'null').getPropertyValue('height').assertMatch(/\d+/)[0];
    popupHeight = (parseInt(popupHeight) + 44) + 'px';
    snakePopup.style.height = popupHeight;
    
    document.getElementById('aim-train').onchange = function() {
      aimTrainer = this.checked;
    }
  }
}

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.mouseMode.alterSnakeCode = function(code) {
  code = window.PuddingMod.alterSnakeCode(code);
  //lifted tileWidth from apple-snake
  window.tileWidth = code.assertMatch(/[a-z]\.[$a-zA-Z0-9_]{0,8}\.fillRect\([a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,8}\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}),[a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8},[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8},[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\)/)[1];//wa
  
  //Head pos, but not properly lerped. k9. Lifted from apple-snake. SnakeDetails contains lots of different properties of the snake.
  [,window.snakeDetails,window.blockyHeadCoord] = code.assertMatch(/this\.([$a-zA-Z0-9_]{0,8})\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8})=\n?[$a-zA-Z0-9_]{0,8}\.clone\(\),/);

  window.coordConstructor = code.assertMatch(/new (_\.[$a-zA-Z0-9_]{0,8})\(1,1\)/)[1];

  window.bodyArray = code.assertMatch(/[a-z]=\n?this\.[$a-zA-Z0-9_]{0,8}\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8})\[0\]\.clone\(\),"LEFT"/)[1];

  //Start and end point of snake segment for doing corners with quadraticCurveTo
  [, window.endPoint, window.startPoint] = code.assertMatch(/break}}var ([$a-zA-Z0-9_]{0,8})=[$a-zA-Z0-9_]{0,8}\.clone\(\),([$a-zA-Z0-9_]{0,8})=[$a-zA-Z0-9_]{0,8}\.clone\(\);/);

  //Twiddle the out of bounds hitreg to be slightly friendlier. Note the change to strict inequality to disallow -1. Perhaps it would've been better to make a new bounds checking function instead.
  let funcWithBoundsHitReg, funcWithBoundsHitRegOrig;
  //IMPORTANT
  funcWithBoundsHitReg = funcWithBoundsHitRegOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}\.prototype\.[$a-zA-Z0-9_]{0,6}=function\(a\)$|[$a-zA-Z0-9_]{0,8}=function\(a,b\)$/,
  //IMPORTANT - this regex has two different patterns separated by "|", this depends on whether they have the mute update. Same for the bit above
  /return 0<=[a-z]\.x&&[a-z]\.x<this\.[$a-zA-Z0-9_]{0,6}\.width&&0<=[a-z]\.y&&[a-z]\.y<this\.[$a-zA-Z0-9_]{0,6}\.height|return 0<=[a-z]\.x&&[a-z]\.x<[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.width&&0<=[a-z]\.y&&[a-z]\.y<[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.height/,
  //IMPORTANT
  false);

  funcWithBoundsHitReg = assertReplaceAll(funcWithBoundsHitReg, '0<=', '-1<');

  code = code.replace(funcWithBoundsHitRegOrig, funcWithBoundsHitReg);

  //Lifted update function from delete stuff mod
  let funcWithEat, funcWithEatOrig;
  funcWithEat = funcWithEatOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,8}\.tick=function\(\)$/,
  /if\([$a-zA-Z0-9_]{0,8}\|\|\n?[$a-zA-Z0-9_]{0,8}\){var [$a-zA-Z0-9_]{0,8}=\n?[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8};\n?[$a-zA-Z0-9_]{0,8}\|\|\n?\([$a-zA-Z0-9_]{0,8}=\n?!0,[$a-zA-Z0-9_]{0,8}\?[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.play\(\)/,
  false);

  //Set the candidate coord for the next head here so that it gets used in the collision checks and then added to the head of the snake
  funcWithEat = assertReplace(funcWithEat,/case "DOWN":([$a-zA-Z0-9_]{0,8})\.y\+=\n?1,[$a-zA-Z0-9_]{0,8}&&[$a-zA-Z0-9_]{0,8}\.y>=\n?[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.height&&\n?\([$a-zA-Z0-9_]{0,8}\.y=\n?0\)}/,
  `$&
  updateFaceCoordsAndRotation(this.${blockyHeadCoord}, this.${tileWidth}, this.${bodyArray});
  let nextHead = new ${coordConstructor}(nextHeadX, nextHeadY);
  $1 = nextHead;
  `
  );
  
  //Check for apple collisions the same way that winged mode does.
  funcWithEat = assertReplace(funcWithEat,/[$a-zA-Z0-9_]{0,8}\(this\.[$a-zA-Z0-9_]{0,8},6\)\){if\([$a-zA-Z0-9_]{0,8}=1>/,
  'true || $&');

  //Disable the code that affects the head position based on whether left/right etc is pressed
  funcWithEat = assertReplace(funcWithEat,/switch\([$a-zA-Z0-9_]{0,8}\.direction\){/,
  `switch(false){`);

  //check for key collisions the same way winged does. WingedCheck has a signature like wingedCheck(this, headCoord, targetCoord)
  let wingedCheck = funcWithEat.assertMatch(/[$a-zA-Z0-9_]{0,8}=1>([$a-zA-Z0-9_]{0,8})\(this\.[$a-zA-Z0-9_]{0,8},this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\[0\],[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\)/)[1];
  
  code = code.replace(funcWithEatOrig, funcWithEat);

  let funcWithKeyCheck, funcWithKeyCheckOrig;
  funcWithKeyCheck = funcWithKeyCheckOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,8}=function\(a\)$/,
  /a\.keys\.sort\(function/,
  false);

  //Apply wingedCheck $1 is headCoord, $2 is keyCoord, $3 check mode for yin yang, $4 is mirrored snake head coord.
  funcWithKeyCheck = assertReplace(funcWithKeyCheck,/\(([a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\[0\])\.equals\(([a-z]\.[$a-zA-Z0-9_]{0,8})\)\|\|([$a-zA-Z0-9_]{0,8}\([a-z]\.[$a-zA-Z0-9_]{0,8},7\))&&([$a-zA-Z0-9_]{0,8}\([a-z]\.[$a-zA-Z0-9_]{0,8},0\))\.equals\([a-z]\.[$a-zA-Z0-9_]{0,8}\)\)/,
  `(1 > ${wingedCheck}(a,$1,$2) || $3 && 1 > ${wingedCheck}(a,$4,$2))`);

  code = code.replace(funcWithKeyCheckOrig, funcWithKeyCheck);

  let funcWithBodyLines, funcWithBodyLinesOrig;
  funcWithBodyLines = funcWithBodyLinesOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,8}\.prototype\.render=function\(a,b,c\)$/,
    /quadraticCurveTo/,
    false);

  let [,segmentCloserToHead,segmentFurtherFromHead] = funcWithBodyLines.assertMatch(/([a-z])=[a-z]\.clone\(\):\n?([$a-zA-Z0-9_]{0,8})=[a-z]\.clone\(\)/);

  funcWithBodyLines = assertReplace(funcWithBodyLines,/(\*=this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8};)-1===[$a-zA-Z0-9_]{0,8}\.x-[$a-zA-Z0-9_]{0,8}\.x\|\|[^]*[$a-zA-Z0-9_]{0,8}\.y\+=this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\/2\);(if\(0===\n?[a-z]\){)/,
    `$1
    //First bit is ok, but needs a.wa/2's added
    ${startPoint}.x += this.${snakeDetails}.${tileWidth}/2;${startPoint}.y += this.${snakeDetails}.${tileWidth}/2;${endPoint}.x +=this.${snakeDetails}.${tileWidth}/2;${endPoint}.y += this.${snakeDetails}.${tileWidth}/2; //added by me
    //Turn n and l into coords space
    let segmentCloserToHead = ${segmentCloserToHead}.clone(); segmentCloserToHead.x = segmentCloserToHead.x * this.${snakeDetails}.${tileWidth} + this.${snakeDetails}.${tileWidth}/2;segmentCloserToHead.y = segmentCloserToHead.y * this.${snakeDetails}.${tileWidth} + this.${snakeDetails}.${tileWidth}/2;
    let segmentFurtherFromHead = ${segmentFurtherFromHead}.clone();segmentFurtherFromHead.x = segmentFurtherFromHead.x * this.${snakeDetails}.${tileWidth} + this.${snakeDetails}.${tileWidth}/2;segmentFurtherFromHead.y = segmentFurtherFromHead.y * this.${snakeDetails}.${tileWidth} + this.${snakeDetails}.${tileWidth}/2;
    //t should be halfway between the control point and the point closer to the head
    ${endPoint}.x = ${endPoint}.x*0.49 + segmentCloserToHead.x*0.51;
    ${endPoint}.y = ${endPoint}.y*0.49 + segmentCloserToHead.y*0.51;
    //Similiarly q should be halfway between the control point and the point further from the head
    ${startPoint}.x = ${startPoint}.x*0.49 + segmentFurtherFromHead.x*0.51;
    ${startPoint}.y = ${startPoint}.y*0.49 + segmentFurtherFromHead.y*0.51;
  $2`);

  //Make it so that the head gets lerped in the direction that the snake is travelling in
  funcWithBodyLines = assertReplace(funcWithBodyLines,
    /* /(var [a-z]=this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\[0\]\.clone\(\);)[^]*&&\([a-z]\.y=0\)\)/, */
    /([a-z]=\n?this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\[0\]\.clone\(\),)[^]*&&\([a-z]\.y=0\)\)/,
    `
    $1
    (aimTrainer ? 
      (${segmentCloserToHead}.x += Math.cos(faceAngle), ${segmentCloserToHead}.y += Math.sin(faceAngle)) : (
      updateFaceCoordsAndRotation(this.${snakeDetails}.${blockyHeadCoord}, this.${snakeDetails}.${tileWidth}, this.${snakeDetails}.${bodyArray}),
      ${segmentCloserToHead}.x = nextHeadX,
      ${segmentCloserToHead}.y = nextHeadY
    ))
    `
    /*`
    $1
    if(aimTrainer) {
      ${segmentCloserToHead}.x += Math.cos(faceAngle);
      ${segmentCloserToHead}.y += Math.sin(faceAngle);
    } else{
      updateFaceCoordsAndRotation(this.${snakeDetails}.${blockyHeadCoord}, this.${snakeDetails}.${tileWidth}, this.${snakeDetails}.${bodyArray});
      ${segmentCloserToHead}.x = nextHeadX;
      ${segmentCloserToHead}.y = nextHeadY;
    }
    `*/
  );

  //Prevent wall mode crashing - disable check where animation pauses before bumping a wall.
  funcWithBodyLines = assertReplace(funcWithBodyLines,/if\(![$a-zA-Z0-9_]{0,8}\(this.[$a-zA-Z0-9_]{0,8},17\)\)/,'if(false)');

  code = code.replace(funcWithBodyLinesOrig, funcWithBodyLines);

  //Function for body parts
  let funcWithBodyParts, funcWithBodyPartsOrig;
  funcWithBodyParts = funcWithBodyPartsOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,8}=function\(a,b,c,d,e\)$/,
    /case "NONE":case "RIGHT":[a-z]=\n?0}Math\.abs\([a-z]-[a-z]\)/,
    false);

  //Find m,k

  funcWithBodyParts = assertReplace(funcWithBodyParts, /case "NONE":case "RIGHT":[a-z]=\n?0}Math\.abs\(([a-z])-([a-z])\)/,
  `case "NONE":case "RIGHT":$1=0}$1=$2=faceAngle;Math.abs($1-$2)`);

  code = code.replace(funcWithBodyPartsOrig, funcWithBodyParts);

  //Add warning if the game is started with a mode that is broken
  let funcWithNewGame, funcWithNewGameOrig;
  funcWithNewGame = funcWithNewGameOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,8}=function\(\)$/,
  /;this\.reset\(\)/,
  false);

  let [,modeCheck, settingsProperty] = code.assertMatch(/([$a-zA-Z0-9_]{0,8})\(this\.([$a-zA-Z0-9_]{0,8}),6\)/);

  let chosenMode = code.assertMatch(/return 18===[a-z]\.([$a-zA-Z0-9_]{0,8})&&[a-z]\.[$a-zA-Z0-9_]{0,8}\.has\([a-z]\)\?!0/)[1];

  funcWithNewGame = assertReplace(funcWithNewGame, /[$a-zA-Z0-9_]{0,8}\([a-z],18\)&&[$a-zA-Z0-9_]{0,8}\([a-z]\);/,
  `$&if(${modeCheck}(a, 10) || ${modeCheck}(a, 13) || ${modeCheck}(a, 16)){
    let proceed = confirm('This mode will break snake and you will have to refresh the page. Press ok to continue (Not recommended). Press cancel to go back (recommended). Poison mode and statue mode and arrow mode can break snake. Infinity and sokoban are buggy.');
    if(!proceed){
      /*Also set mode back to classic to be safe*/
      a.${chosenMode} = 0;
      return;
    }
  }`);

  code = code.replace(funcWithNewGameOrig, funcWithNewGame);

  //Make it work on mobile
  /* (Commented out as misses first touch)
  code = code.assertReplace(/break ([a-z]);var [a-z]=([a-z])\.clientX-[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.x,[a-z]=[a-z]\.clientY-[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.y;/,
    `$& window.updateMousePos($2); break $1;`);
  */

  let touchEventProperty = code.assertMatch(/[a-z]\.preventDefault\(\);[a-z]=[a-z]\.([$a-zA-Z0-9_]{0,8})\.touches\[0\];/)[1];

  //Update "mouse" position on touchmove
  code = code.assertReplace(/([a-z])\.preventDefault\(\);[a-z]=[a-z]\.[$a-zA-Z0-9_]{0,8}\.touches\[0\];/,
  `$& window.updateMousePos($1); return;`);
    
  //Update mouse position on touchstart, also try to start the game?
  code = code.assertReplace(/([a-z])(\.target===\n?[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\(\))&&([a-z]\.preventDefault\(\))/,
  `$1$2 && window.updateMousePos($1.${touchEventProperty}.touches[0]) && $3`);

  //Set up megaWholeSnake
  let funcWithResetState, funcWithResetStateOrig;
  funcWithResetState = funcWithResetStateOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,8}\.prototype\.resetState=function\(a\)$/,
  /void 0===[a-z]\?!0:[a-z];this\.[$a-zA-Z0-9_]{0,8}\.reset\(a\);/);

  funcWithResetState = assertReplace(funcWithResetState, '{', '{globalThis.megaWholeSnakeObject = this;');

  code = code.replace(funcWithResetStateOrig, funcWithResetState);

  //Function to start game. Slightly hacky. See varied.js line 112
  let startGameFunc = code.match(/([$a-zA-Z0-9_]{0,8})\(this,"UP"\);/)[1];
  
  //Function to start game. Slightly hacky. See varied.js line 522
  code = appendCodeWithinSnakeModule(code, `
    globalThis.startGame = function() {
      ${startGameFunc}(megaWholeSnakeObject, 'START');
    }
  `);

  //Fix collisions with walls being slightly offset
  code = code.assertReplace(/([a-z]=this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.get\([$a-zA-Z0-9_]{0,8}\()([a-z])(\)\))/,
  `$1{x: $2.x + 0.5, y: $2.y + 0.5}$3`);

  //Prevent self-collisions
  code = code.assertReplaceAll(/(\.equals\([a-z]\)&&![a-z])(&&\(this\.[$a-zA-Z0-9_]{0,8}\(\),)/g,
  `$1 && false $2`);

  //Offset stuff below is copied from level editor mod
  //Find out how offset the board is from top left (used for calculating mouse positions)
  code = code.assertReplace(
    /var ([$a-zA-Z0-9_]{0,8})=Math\.round\(\(this\.[$a-zA-Z0-9_]{0,8}\.canvas\.width-this\.[$a-zA-Z0-9_]{0,8}\.canvas\.width\)\/2\),([$a-zA-Z0-9_]{0,8})=Math\.round\(\(this\.context\.canvas\.height-this\.[$a-zA-Z0-9_]{0,8}\.canvas\.height\)\/\n?2\);/,
    "$&globalThis.leftBorderWidth = $1; globalThis.topBorderWidth = $2;"
  );

  //Also figure out offset if it's borderless
  /*code = code.assertReplace(/var ([$a-zA-Z0-9_]{0,8})=Math\.round\(this\.[$a-zA-Z0-9_]{0,8}\.canvas\.width\/2-this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.x-2\*this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\),([$a-zA-Z0-9_]{0,8})=Math\.round\(this\.[$a-zA-Z0-9_]{0,8}\.canvas\.height\/2-this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.y-2\*this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\)/,
  '$&;globalThis.leftBorderWidth = $1, globalThis.topBorderWidth = $2');*/
  let [, infiniOffsetX, infiniOffsetY] = code.match(
    /var ([$a-zA-Z0-9_]{0,8})=Math\.round\(this\.[$a-zA-Z0-9_]{0,8}\.canvas\.width\/2-this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.x-2\*this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\),([$a-zA-Z0-9_]{0,8})=Math\.round\(this\.[$a-zA-Z0-9_]{0,8}\.canvas\.height\/2-this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.y-2\*this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\)/
  );

  code = code.assertReplace(
    /var ([$a-zA-Z0-9_]{0,8})=\(this\.[$a-zA-Z0-9_]{0,8}\.canvas\.width-this\.[$a-zA-Z0-9_]{0,8}\.canvas\.width\)\/2,([$a-zA-Z0-9_]{0,8})=\(this\.[$a-zA-Z0-9_]{0,8}\.canvas\.height-this\.[$a-zA-Z0-9_]{0,8}\.canvas\.height\)\/2;/,
    `$&;globalThis.leftBorderWidth = ${infiniOffsetX} - $1; globalThis.topBorderWidth = ${infiniOffsetY} - $2;`
  );

  return code;
}

////////////////////////////////////////////////////////////////////
//RUNCODEAFTER
////////////////////////////////////////////////////////////////////

window.mouseMode.runCodeAfter = function() {
  window.gameCanvasEl = document.getElementsByClassName('cer0Bd')[0];
  document.body.addEventListener('mousemove',updateMousePos);
  gameCanvasEl.addEventListener('click', startGame);
  gameCanvasEl.addEventListener('touchstart', startGame);

  //Hide keys/swipe "instructions" image as it gets in the way of clicking/touching the game
  let keySwipeContainer = document.querySelector('[jsname="IoE5Ec"]');
  keySwipeContainer.style.visibility = 'hidden';
  keySwipeContainer.style.opacity = '0';

  setupMenuCheckbox();
  
  if (localStorage.getItem('snakeChosenMod') === "mouseMode") {
    let modIndicator = document.createElement('div');
    modIndicator.style='position:absolute;font-family:roboto;color:white;font-size:14px;padding-top:4px;padding-left:30px;user-select: none;';
    modIndicator.textContent = 'Mouse Mod';
    let canvasNode = document.getElementsByClassName('jNB0Ic')[0];
    document.getElementsByClassName('EjCLSb')[0].insertBefore(modIndicator, canvasNode);
  }

}