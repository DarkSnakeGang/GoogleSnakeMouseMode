window.mouseMode = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.mouseMode.runCodeBefore = function() {
  window.mouseX = 176.1;
  window.mouseY = 240.1;
  window.faceAngle = 0;
  window.nextHeadX = 10;
  window.nextHeadY = 10;
  window.aimTrainer = false;

  window.updateMousePos = function(event) {
    let canvasRect = gameCanvasEl.getBoundingClientRect();
    let offsetFromBorder = {x:26,y:26};
    mouseX = event.clientX - canvasRect.left - offsetFromBorder.x;
    mouseY = event.clientY - canvasRect.top - offsetFromBorder.y;
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
        <label for="aim-train" style="line-height:44px;">Aim Trainer?</label>
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

  //lifted tileWidth from apple-snake
  window.tileWidth = code.assertMatch(/[a-z]\.[$a-zA-Z0-9_]{0,8}\.fillRect\([a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,8}\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}),[a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8},[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8},[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\)/)[1];//wa
  
  //Head pos, but not properly lerped. k9. Lifted from apple-snake. SnakeDetails contains lots of different properties of the snake.
  [,window.snakeDetails,window.blockyHeadCoord] = code.assertMatch(/this\.([$a-zA-Z0-9_]{0,8})\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8})=\n?[a-z]\.clone\(\),/);

  window.coordConstructor = code.assertMatch(/new (_\.[$a-zA-Z0-9_]{0,8})\(1,1\)/)[1];

  window.bodyArray = code.assertMatch(/var [a-z]=this\.[$a-zA-Z0-9_]{0,8}\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8})\[0\]\.clone\(\);/)[1];

  //Lifted from apple-snake
  [, window.endPoint, window.controlPoint, window.startPoint] = code.assertMatch(/\(([a-z])\.x,\n?[a-z]\.y\);[a-z]\?this\.[$a-zA-Z0-9_]{0,8}\.quadraticCurveTo\(([a-z])\.x,[a-z]\.y,([$a-zA-Z0-9_]{0,8})\.x,[$a-zA-Z0-9_]{0,8}\.y\)/);//q,m,t 

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

  //Disable the code that affctes the head position based on whether left/right etc is pressed
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

  funcWithBodyLines = assertReplace(funcWithBodyLines,/(\*=this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8};)-1===[a-z]\.x-[$a-zA-Z0-9_]{0,8}\.x\|\|[^]*[a-z]\.y\+=this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\/2\);(if\(0===\n?[a-z]\){)/,
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
  funcWithBodyLines = assertReplace(funcWithBodyLines,/(var [a-z]=this\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\[0\]\.clone\(\);)[^]*&&\([a-z]\.y=0\)\)/,
    `
    $1
    if(aimTrainer) {
      ${segmentCloserToHead}.x += Math.cos(faceAngle);
      ${segmentCloserToHead}.y += Math.sin(faceAngle);
    } else{
      updateFaceCoordsAndRotation(this.${snakeDetails}.${blockyHeadCoord}, this.${snakeDetails}.${tileWidth}, this.${snakeDetails}.${bodyArray});
      ${segmentCloserToHead}.x = nextHeadX;
      ${segmentCloserToHead}.y = nextHeadY;
    }
  `);

  //Prevent wall mode crashing - disable check where animation pauses before bumping a wall.
  funcWithBodyLines = assertReplace(funcWithBodyLines,/if\(![$a-zA-Z0-9_]{0,8}\(this.[$a-zA-Z0-9_]{0,8},15\)\)/,'if(false)');

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
  /}\);this\.reset\(\)/,
  false);

  let [,modeCheck, settingsProperty] = code.assertMatch(/([$a-zA-Z0-9_]{0,8})\(this\.([$a-zA-Z0-9_]{0,8}),6\)/);

  let chosenMode = code.assertMatch(/return 16===[a-z]\.([$a-zA-Z0-9_]{0,8})&&[a-z]\.[$a-zA-Z0-9_]{0,8}\.has\([a-z]\)\?!0/)[1];

  funcWithNewGame = assertReplace(funcWithNewGame, /[$a-zA-Z0-9_]{0,8}\([a-z],16\)&&[$a-zA-Z0-9_]{0,8}\([a-z]\);/,
  `$&if(${modeCheck}(a, 10) || ${modeCheck}(a, 13)){
    let proceed = confirm('This mode will break snake and you will have to refresh the page. Press ok to continue (Not recommended). Press cancel to go back (recommended). Poison mode and statue mode can break snake. Infinity and sokoban are buggy.');
    if(!proceed){
      /*Also set mode back to classic to be safe*/
      a.${chosenMode} = 0;
      return;
    }
  }`);

  code = code.replace(funcWithNewGameOrig, funcWithNewGame);

  return code;
}

////////////////////////////////////////////////////////////////////
//RUNCODEAFTER
////////////////////////////////////////////////////////////////////

window.mouseMode.runCodeAfter = function() {
  window.gameCanvasEl = document.getElementsByClassName('cer0Bd')[0];
  gameCanvasEl.addEventListener('mousemove',updateMousePos);

  setupMenuCheckbox();
}