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
    let popupHeight = window.getComputedStyle(snakePopup,'null').getPropertyValue('height').match(/\d+/)[0];
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
  window.tileWidth = code.match(/[a-z]\.[$a-zA-Z0-9_]{0,6}\.fillRect\([a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,6}\.([$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}),[a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6},[a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6},[a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\)/)[1];//wa
  
  //Head pos, but not properly lerped. k9. Lifted from apple-snake. SnakeDetails contains lots of different properties of the snake.
  [,window.snakeDetails,window.blockyHeadCoord] = code.match(/this\.([$a-zA-Z0-9_]{0,6})\.([$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6})=[a-z]\.clone\(\),/);

  window.coordConstructor = swapInSnakeGlobal(code.match(/new (_\.[$a-zA-Z0-9_]{0,6})\(1,1\)/)[1]);

  //let bodyArray = code.match(/var [a-z]=[a-z]\.[$a-zA-Z0-9_]{0,6}\.([$a-zA-Z0-9_]{0,6})\[0\]\.clone\(\);/)[1];
  window.bodyArray = code.match(/var [a-z]=this\.[$a-zA-Z0-9_]{0,6}\.([$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6})\[0\]\.clone\(\);/)[1];

  //Lifted from apple-snake
  [, window.endPoint, window.controlPoint, window.startPoint] = code.match(/\(([a-z])\.x,[a-z]\.y\);[a-z]\?this\.[$a-zA-Z0-9_]{0,6}\.quadraticCurveTo\(([a-z])\.x,[a-z]\.y,([$a-zA-Z0-9_]{0,6})\.x,[$a-zA-Z0-9_]{0,6}\.y\)/);//q,m,t 

  //Twiddle the out of bounds hitreg to be slightly friendlier. Note the change to strict inequality to disallow -1. Perhaps it would've been better to make a new bounds checking function instead.
  let funcWithBoundsHitReg, funcWithBoundsHitRegOrig;
  funcWithBoundsHitReg = funcWithBoundsHitRegOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}\.prototype\.[$a-zA-Z0-9_]{0,6}=function\(a\)$/,
  /return 0<=[a-z]\.x&&[a-z]\.x<this\.[$a-zA-Z0-9_]{0,6}\.width&&0<=[a-z]\.y&&[a-z]\.y<this\.[$a-zA-Z0-9_]{0,6}\.height/,
  false);

  funcWithBoundsHitReg = assertReplaceAll(funcWithBoundsHitReg, '0<=', '-1<');

  code = code.replace(funcWithBoundsHitRegOrig, funcWithBoundsHitReg);

  //Lifted update function from delete stuff mod
  let funcWithEat, funcWithEatOrig;
  funcWithEat = funcWithEatOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}\.tick=function\(\)$/,
  /if\([$a-zA-Z0-9_]{0,6}\|\|\n?[$a-zA-Z0-9_]{0,6}\){var [$a-zA-Z0-9_]{0,6}=\n?[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6};\n?[$a-zA-Z0-9_]{0,6}\|\|\n?\([$a-zA-Z0-9_]{0,6}=\n?!0,[$a-zA-Z0-9_]{0,6}\?[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.play\(\)/,
  false);

  //Set the candidate coord for the next head here so that it gets used in the collision checks and then added to the head of the snake
  funcWithEat = assertReplace(funcWithEat,/case "DOWN":([$a-zA-Z0-9_]{0,6})\.y\+=1,[$a-zA-Z0-9_]{0,6}&&[$a-zA-Z0-9_]{0,6}\.y>=[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.height&&\([$a-zA-Z0-9_]{0,6}\.y=\n?0\)}/,
  `$&
  updateFaceCoordsAndRotation(this.${blockyHeadCoord}, this.${tileWidth}, this.${bodyArray});
  let nextHead = new ${coordConstructor}(nextHeadX, nextHeadY);
  $1 = nextHead;
  `
  );
  
  //Check for apple collisions the same way that winged mode does.
  funcWithEat = assertReplace(funcWithEat,/[$a-zA-Z0-9_]{0,6}\(this\.settings,6\)\){var [$a-zA-Z0-9_]{0,6}=1>/,
  'true || $&');

  //Disable the code that affctes the head position based on whether left/right etc is pressed
  funcWithEat = assertReplace(funcWithEat,/switch\([$a-zA-Z0-9_]{0,6}\.direction\){/,
  `switch(false){`);
  
  //check for key collisions the same way winged does. WingedCheck has a signature like wingedCheck(this, headCoord, targetCoord)
  let wingedCheck = funcWithEat.match(/[$a-zA-Z0-9_]{0,6}=1>([$a-zA-Z0-9_]{0,6})\(this\.[$a-zA-Z0-9_]{0,6},this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\[0\],[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\)/)[1];
  
  code = code.replace(funcWithEatOrig, funcWithEat);

  let funcWithKeyCheck, funcWithKeyCheckOrig;
  funcWithKeyCheck = funcWithKeyCheckOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(a\)$/,
  /a\.keys\.sort\(function/,
  false);

  //Apply wingedCheck $1 is headCoord, $2 is keyCoord, $3 check mode for yin yang, $4 is mirrored snake head coord.
  funcWithKeyCheck = assertReplace(funcWithKeyCheck,/\(([a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\[0\])\.equals\(([a-z]\.[$a-zA-Z0-9_]{0,6})\)\|\|([$a-zA-Z0-9_]{0,6}\([a-z]\.settings,7\))&&([$a-zA-Z0-9_]{0,6}\([a-z]\.[$a-zA-Z0-9_]{0,6},0\))\.equals\([a-z]\.[$a-zA-Z0-9_]{0,6}\)\)/,
  `(1 > ${wingedCheck}(a,$1,$2) || $3 && 1 > ${wingedCheck}(a,$4,$2))`);

  code = code.replace(funcWithKeyCheckOrig, funcWithKeyCheck);

  let funcWithBodyLines, funcWithBodyLinesOrig;
  funcWithBodyLines = funcWithBodyLinesOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}\.prototype\.render=function\(a,b,c\)$/,
    /quadraticCurveTo/,
    false);

  let [,segmentCloserToHead,segmentFurtherFromHead] = funcWithBodyLines.match(/([a-z])=[a-z]\.clone\(\):\n?([$a-zA-Z0-9_]{0,6})=[a-z]\.clone\(\)/);

  funcWithBodyLines = assertReplace(funcWithBodyLines,/(\*=this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6};)-1===[a-z]\.x-[$a-zA-Z0-9_]{0,6}\.x\|\|[^]*[a-z]\.y\+=this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\/2\);(if\(0===[a-z]\){)/,
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
  funcWithBodyLines = assertReplace(funcWithBodyLines,/(var [a-z]=this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\[0\]\.clone\(\);)[^]*&&\([a-z]\.y=0\)\)/,
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
  funcWithBodyLines = assertReplace(funcWithBodyLines,/if\(![$a-zA-Z0-9_]{0,6}\(this.settings,15\)\)/,'if(false)');

  code = code.replace(funcWithBodyLinesOrig, funcWithBodyLines);

  //Function for body parts
  let funcWithBodyParts, funcWithBodyPartsOrig;
  funcWithBodyParts = funcWithBodyPartsOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(a,b,c,d,e\)$/,
    /case "NONE":case "RIGHT":[a-z]=\n?0}Math\.abs\([a-z]-[a-z]\)/,
    false);

  //Find m,k

  funcWithBodyParts = assertReplace(funcWithBodyParts, /case "NONE":case "RIGHT":[a-z]=\n?0}Math\.abs\(([a-z])-([a-z])\)/,
  `case "NONE":case "RIGHT":$1=0}$1=$2=faceAngle;Math.abs($1-$2)`);

  code = code.replace(funcWithBodyPartsOrig, funcWithBodyParts);

  //Add warning if the game is started with a mode that is broken
  let funcWithNewGame, funcWithNewGameOrig;
  funcWithNewGame = funcWithNewGameOrig = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(\)$/,
  /}\);this\.reset\(\)/,
  false);

  let modeCheck = funcWithNewGame.match(/([$a-zA-Z0-9_]{0,6})\(a,16\)/)[1];

  let chosenMode = code.match(/return 16===[a-z]\.([$a-zA-Z0-9_]{0,6})&&[a-z]\.[$a-zA-Z0-9_]{0,6}\.has\([a-z]\)\?!0/)[1];

  funcWithNewGame = assertReplace(funcWithNewGame, /[$a-zA-Z0-9_]{0,6}\([a-z],16\)&&[$a-zA-Z0-9_]{0,6}\([a-z]\);/,
  `$&if(${modeCheck}(this.settings, 10)){
    let proceed = confirm('This mode will break snake and you will have to refresh the page. Press ok to continue (Not recommended). Press cancel to go back (recommended). Poison mode can break snake. Wall+yin+key also crash, but I hope to fix. Infinity and sokoban are buggy.');
    if(!proceed){
      /*Also set mode back to classic to be safe*/
      this.${chosenMode} = 0;
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