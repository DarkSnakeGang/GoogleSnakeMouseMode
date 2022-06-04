//Search for unshift and sneak stuff in there

//Also need to get coords from mouse

//get the canvas Element

let gameCanvasEl = document.getElementsByClassName('cer0Bd')[0];
var mouseX = 176.1;
var mouseY = 240.1;
var faceAngle = 0;
var nextHeadX = 10;
var nextHeadY = 10;

gameCanvasEl.addEventListener('mousemove',updateMousePos);

let aimTrainer = false;

function updateMousePos(event) {
  let canvasRect = gameCanvasEl.getBoundingClientRect();
  let offsetFromBorder = {x:26,y:26};
  mouseX = event.clientX - canvasRect.left - offsetFromBorder.x;
  mouseY = event.clientY - canvasRect.top - offsetFromBorder.y;
}

//blockyHeadCoord = `this.${blockyHeadCoord}`
//tileWidth = `this.${tileWidth}`/*usually a.wa*/
//bodyArray = `this.$1`/*Usually this.Ba*/
function updateFaceCoordsAndRotation(blockyHeadCoord, tileWidth, bodyArray) {
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
function roundClamp(value, boardSideLength) {
  let res = Math.round(value);
  res = Math.min(res, boardSideLength - 1);
  res = Math.max(res, 0);
  return res;
}

function setupMenuCheckbox() {
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

//Find something like for the headpos b9: s_Kg
//x: 303.99999999999994
//y: 191.28888888888886

//Then use different to work out what to offset
//ie.
// this.Ba.unshift(new s_Kg(Math.floor(Math.random()*10),Math.floor(Math.random()*10)));

/*
let headToMouseOffset = {x:mouseX - a.b9.x, y:mouseY - a.b9.y};

let magnitude = Math.sqrt(headToMouseOffset.x**2 + headToMouseOffset.y**2);

let xDelta = a.wa * headToMouseOffset.x/magnitude;
let yDelta = a.wa * headToMouseOffset.y/magnitude;

let nextHeadX = a.Ba[0].x + xDelta;
let nextHeadY = a.Ba[0].y + yDelta;
let nextHead = new Kg(nextHeadX, nextHeadY);

this.Ba.unshift(nextHead);
*/

window.snake.pythagoras = function () {
  const scripts = document.body.getElementsByTagName('script');
  for (let script of scripts) {
    if (script.src == "" || script.src.indexOf('apis.google.com') != -1) {
      continue;
    }
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function () {
      if (this.responseText.indexOf('trophy') !== -1)
        processCode(this.responseText);
    };
    req.send();
  }

};

function processCode(code) {
  setupMenuCheckbox();

  //lifted tileWidth from apple-snake
  let tileWidth = code.match(/[a-z]\.[$a-zA-Z0-9_]{0,6}\.fillRect\([a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,6}\.([$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}),[a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6},[a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6},[a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\)/)[1];//wa
  
  //Head pos, but not properly lerped. k9. Lifted from apple-snake. SnakeDetails contains lots of different properties of the snake.
  let [,snakeDetails,blockyHeadCoord] = code.match(/this\.([$a-zA-Z0-9_]{0,6})\.([$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6})=[a-z]\.clone\(\),/);
  //let blockyHeadCoord = code.match(/this\.[$a-zA-Z0-9_]{0,6}=this\.[$a-zA-Z0-9_]{0,6}\[2\];this\.[$a-zA-Z0-9_]{0,6}=this\.[$a-zA-Z0-9_]{0,6}\[2\];this\.([$a-zA-Z0-9_]{0,6})=this\.[$a-zA-Z0-9_]{0,6}\[0\];/)[1];

  let coordConstructor = code.match(/new ([$a-zA-Z0-9_]{0,6})\(1,1\)/)[1];

  //let bodyArray = code.match(/var [a-z]=[a-z]\.[$a-zA-Z0-9_]{0,6}\.([$a-zA-Z0-9_]{0,6})\[0\]\.clone\(\);/)[1];
  let bodyArray = code.match(/var [a-z]=this\.[$a-zA-Z0-9_]{0,6}\.([$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6})\[0\]\.clone\(\);/)[1];

  //Lifted from apple-snake
  //let [, endPoint, controlPoint, startPoint] = code.match(/\(([a-z])\.y\+\n?[a-z]\.y\)\/2\*\(1-[xy]\)\);a\.[$a-zA-Z0-9_]{0,6}\.quadraticCurveTo\(([a-z])\.x,[a-z]\.y,([a-z])\.x,[a-z]\.y\)}/);//q,m,t 
  let [, endPoint, controlPoint, startPoint] = code.match(/\(([a-z])\.y\+\n?[a-z]\.y\)\/2\*\(1-[a-z]\)\);this\.[$a-zA-Z0-9_]{0,6}\.quadraticCurveTo\(([a-z])\.x,[a-z]\.y,([a-z])\.x,[a-z]\.y\)}/);//q,m,t 

  //Twiddle the out of bounds hitreg to be slightly friendlier. Note the change to strict inequality to disallow -1. Perhaps it would've been better to make a new bounds checking function instead.
  let funcWithBoundsHitReg = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(a,b\)$/,
  /return 0<=[a-z]\.x&&[a-z]\.x<[a-z]\.[$a-zA-Z0-9_]{0,6}\.width&&0<=[a-z]\.y&&[a-z]\.y<[a-z]\.[$a-zA-Z0-9_]{0,6}\.height/,
  false);

  let boardDimensions = funcWithBoundsHitReg.match(/[a-z]\.x<[a-z]\.([$a-zA-Z0-9_]{0,6})\.width/)[1];

  funcWithBoundsHitReg = assertReplaceAll(funcWithBoundsHitReg, '0<=', '-1<');

  eval(funcWithBoundsHitReg);

  //Lifted update function from delete stuff mod
  let funcWithEat = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}\.prototype\.tick=function\(\)$/,
  /if\([$a-zA-Z0-9_]{0,6}\|\|[$a-zA-Z0-9_]{0,6}\){var [$a-zA-Z0-9_]{0,6}=[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6};[$a-zA-Z0-9_]{0,6}\|\|\([$a-zA-Z0-9_]{0,6}=!0,[$a-zA-Z0-9_]{0,6}\?[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.play\(\)/,
  false);

  //Set the candidate coord for the next head here so that it gets used in the collision checks and then added to the head of the snake
  funcWithEat = assertReplace(funcWithEat,/case "DOWN":([$a-zA-Z0-9_]{0,6})\.y\+=1,[$a-zA-Z0-9_]{0,6}&&[$a-zA-Z0-9_]{0,6}\.y>=[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.height&&\([$a-zA-Z0-9_]{0,6}\.y=0\)}/,
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
  wingedCheck = funcWithEat.match(/[$a-zA-Z0-9_]{0,6}=1>([$a-zA-Z0-9_]{0,6})\(this\.[$a-zA-Z0-9_]{0,6},this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\[0\],[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\)/)[1];
  
  //Apply wingedCheck $1 is headCoord, $2 is keyCoord, $3 check mode for yin yang, $4 is mirrored snake head coord.
  /*funcWithEat = assertReplace(funcWithEat, /if\((this\.[$a-zA-Z0-9_]{0,6}\[0\])\.equals\(([a-z]\.[$a-zA-Z0-9_]{0,6})\)\|\|([$a-zA-Z0-9_]{0,6}\(this.settings,7\))&&([$a-zA-Z0-9_]{0,6}\(this,0\))\.equals\([a-z]\.[$a-zA-Z0-9_]{0,6}\)\)/,
  `if(1 > ${wingedCheck}(this,$1,$2) || $3 && 1 > ${wingedCheck}(this,$4,$2))`);*/
  
  /*
  //UNNEEDED NOW? Check relies on map instead of array indexing
  //Stop yin-yang etc crashing, by rounding invalid coords
  let headCandidate = funcWithEat.match(/case "DOWN":([$a-zA-Z0-9_]{0,6})\.y\+=1,/)[1];
  let yangHeadCandidate = funcWithEat.match(/var ([$a-zA-Z0-9_]{0,6})=new [$a-zA-Z0-9_]{0,6}\(this\.[$a-zA-Z0-9_]{0,6}\.width-1/)[1];
  funcWithEat = assertReplaceAll(funcWithEat, new RegExp(`\\[((?:${yangHeadCandidate}|${headCandidate})\\.x)\\]`,'g'),`[roundClamp($1, this.${boardDimensions}.width)]`);
  funcWithEat = assertReplaceAll(funcWithEat, new RegExp(`\\[((?:${yangHeadCandidate}|${headCandidate})\\.y)\\]`,'g'),`[roundClamp($1, this.${boardDimensions}.height)]`);
  */

  eval(funcWithEat);

  funcWithKeyCheck = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(a,b\)$/,
  /a\.keys\.sort\(function/,
  false);

  //Apply wingedCheck $1 is headCoord, $2 is keyCoord, $3 check mode for yin yang, $4 is mirrored snake head coord.
  funcWithKeyCheck = assertReplace(funcWithKeyCheck,/\(([a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\[0\])\.equals\(([a-z]\.[$a-zA-Z0-9_]{0,6})\)\|\|([$a-zA-Z0-9_]{0,6}\([a-z]\.settings,7\))&&([$a-zA-Z0-9_]{0,6}\([a-z]\.[$a-zA-Z0-9_]{0,6},0\))\.equals\([a-z]\.[$a-zA-Z0-9_]{0,6}\)\)/,
  `(1 > ${wingedCheck}(a,$1,$2) || $3 && 1 > ${wingedCheck}(a,$4,$2))`);

  eval(funcWithKeyCheck);
  
  //Make the swallowed key go to correct place
  let funcWithSwallowKey = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}\.prototype\.[$a-zA-Z0-9_]{0,6}=function\(a,b\)$/,
  /this\.[$a-zA-Z0-9_]{0,6}\.keys\.splice\([a-z],1\)/,
  false);

  funcWithSwallowKey = assertReplace(funcWithSwallowKey,
    /!(this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\[0\])\.equals\(([a-z]\.[$a-zA-Z0-9_]{0,6})\)/,
    `!(1 > ${wingedCheck}(this,$1,$2))`);

  eval(funcWithSwallowKey);
  
  //Make the swallowed apple go on the correct snake
  //UNNEEDED?
  /*funcWithEat = assertReplace(funcWithEat, /([$a-zA-Z0-9_]{0,6}):!(this\.[$a-zA-Z0-9_]{0,6}\[0\])\.equals\(([a-z]\.[$a-zA-Z0-9_]{0,6})\)/,
  `$1: !${wingedCheck}(this,$2,$3)`);*/

  /*
  //UNNEEDED? Code moved to funcWithEat?
  //Stop yin yang (And some other modes) from crashing. Round coords for head etc when doing checks.
  let funcWithChecks = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(a,b\)$/,
  /[a-z]=[a-z]\.[$a-zA-Z0-9_]{0,6}\[[a-z]\.y\]\[[a-z]\.x\]\.[$a-zA-Z0-9_]{0,6}\|\|![$a-zA-Z0-9_]{0,6}\([a-z].settings,11\),/,
  false);

  funcWithChecks = assertReplaceAll(funcWithChecks, /\[([a-z]\.x)\]/g,`[roundClamp($1, a.${boardDimensions}.width)]`);
  funcWithChecks = assertReplaceAll(funcWithChecks, /\[([a-z]\.y)\]/g,`[roundClamp($1, a.${boardDimensions}.height)]`);

  eval(funcWithChecks);
  */

  let funcWithBodyLines = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}\.prototype\.render=function\(a,b,c,d\)$/,
    /quadraticCurveTo/,
    false);

  let [,segmentCloserToHead,segmentFurtherFromHead] = funcWithBodyLines.match(/([a-z])=[a-z]\.clone\(\):\n?([a-z])=[a-z]\.clone\(\)/);

  funcWithBodyLines = assertReplace(funcWithBodyLines,/(\*=this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6};)-1===[a-z]\.x-[a-z]\.x\|\|[^]*[a-z]\.y\+=this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\/2\);(if\(0===[a-z]\){)/,
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
  funcWithBodyLines = assertReplace(funcWithBodyLines,/if\(![$a-zA-Z0-9_]{0,6}\(this.settings,13\)\)/,'if(false)');

  eval(funcWithBodyLines);

  //Function for body parts
  let funcWithBodyParts = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(a,b,c,d,e,f\)$/,
    /case "NONE":case "RIGHT":[a-z]=\n?0}Math\.abs\([a-z]-[a-z]\)/,
    false);

  //Find m,k

  funcWithBodyParts = assertReplace(funcWithBodyParts, /case "NONE":case "RIGHT":[a-z]=\n?0}Math\.abs\(([a-z])-([a-z])\)/,
  `case "NONE":case "RIGHT":$1=0}$1=$2=faceAngle;Math.abs($1-$2)`);

  eval(funcWithBodyParts);

  //Add warning if the game is started with a mode that is broken
  let funcWithNewGame = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(\)$/,
  /this\.reset\(\)/,
  false);

  let modeCheck = funcWithNewGame.match(/([$a-zA-Z0-9_]{0,6})\(a,14\)/)[1];

  let chosenMode = code.match(/return 14===[a-z]\.([$a-zA-Z0-9_]{0,6})&&[a-z]\.[$a-zA-Z0-9_]{0,6}\.has\([a-z]\)\?!0/)[1];

  funcWithNewGame = assertReplace(funcWithNewGame, /[$a-zA-Z0-9_]{0,6}\([a-z],14\)&&[$a-zA-Z0-9_]{0,6}\([a-z]\);/,
  `$&if(${modeCheck}(this.settings, 10)){
    let proceed = confirm('This mode will break snake and you will have to refresh the page. Press ok to continue (Not recommended). Press cancel to go back (recommended). Poison mode can break snake. Wall+yin+key also crash, but I hope to fix. Infinity and sokoban are buggy.');
    if(!proceed){
      /*Also set mode back to classic to be safe*/
      this.${chosenMode} = 0;
      return;
    }
  }`);

  eval(funcWithNewGame);
}

/*
This function will search for a function/method in some code and return this function as a string

code will usually be the snake source code

functionSignature will be regex matching the beginning of the function/method (must end in $),
for example if we are trying to find a function like s_xD = function(a, b, c, d, e) {......}
then put functionSignature = /[$a-zA-Z0-9_]{0,6}=function\(a,b,c,d,e\)$/

somethingInsideFunction will be regex matching something in the function
for example if we are trying to find a function like s_xD = function(a, b, c, d, e) {...a.Xa&&10!==a.Qb...}
then put somethingInsideFunction = /a\.[$a-zA-Z0-9_]{0,6}&&10!==a\.[$a-zA-Z0-9_]{0,6}/
*/
function findFunctionInCode(code, functionSignature, somethingInsideFunction, logging = false) {
  let functionSignatureSource = functionSignature.source;
  let functionSignatureFlags = functionSignature.flags;//Probably empty string

  /*Check functionSignature ends in $*/
  if (functionSignatureSource[functionSignatureSource.length - 1] !== "$") {
    throw new Error("functionSignature regex should end in $");
  }

  /*Allow line breaks after commas or =. This is bit sketchy, but should be ok as findFunctionInCode is used in a quite limited way*/
  functionSignatureSource.replaceAll(/,|=/g,'$&\\n?');
  functionSignature = new RegExp(functionSignatureSource, functionSignatureFlags);

  /*get the position of somethingInsideFunction*/
  let indexWithinFunction = code.search(somethingInsideFunction);
  if (indexWithinFunction == -1) {
    console.log("%cCouldn't find a match for somethingInsideFunction", "color:red;");
    diagnoseRegexError(code, somethingInsideFunction);
  }

  /*expand outwards from somethingInsideFunction until we get to the function signature, then count brackets
  to find the end of the function*/
  startIndex = 0;
  for (let i = indexWithinFunction; i >= 0; i--) {
    let startOfCode = code.substring(0, i);
    startIndex = startOfCode.search(functionSignature);
    if (startIndex !== -1) {
      break;
    }
    if (i == 0) {
      throw new Error("Couldn't find function signature");
    }
  }

  let bracketCount = 0;
  let foundFirstBracket = false;
  let endIndex = 0;
  /*Use bracket counting to find the whole function*/
  let codeLength = code.length;
  for (let i = startIndex; i <= codeLength; i++) {
    if (!foundFirstBracket && code[i] == "{") {
      foundFirstBracket = true;
    }

    if (code[i] == "{") {
      bracketCount++;
    }
    if (code[i] == "}") {
      bracketCount--;
    }
    if (foundFirstBracket && bracketCount == 0) {
      endIndex = i;
      break;
    }

    if (i == codeLength) {
      throw new Error("Couldn't pair up brackets");
    }
  }

  let fullFunction = code.substring(startIndex, endIndex + 1);

  /*throw error if fullFunction doesn't contain something inside function - i.e. function signature was wrong*/
  if (fullFunction.search(somethingInsideFunction) === -1) {
    throw new Error("Function signature does not belong to the same function as somethingInsideFunction");
  }

  if (logging) {
    console.log(fullFunction);
  }

  return fullFunction;
}

/*
Same as replace, but throws an error if nothing is changed
*/
function assertReplace(baseText, regex, replacement) {
  if (typeof baseText !== 'string') {
    throw new Error('String argument expected for assertReplace');
  }
  let outputText = baseText.replace(regex, replacement);

  //Throw warning if nothing is replaced
  if (baseText === outputText) {
    diagnoseRegexError(baseText, regex);
  }

  return outputText;
}

/*
Same as replaceAll, but throws an error if nothing is changed
*/
function assertReplaceAll(baseText, regex, replacement) {
  if (typeof baseText !== 'string') {
    throw new Error('String argument expected for assertReplace');
  }
  let outputText = baseText.replaceAll(regex, replacement);

  //Throw warning if nothing is replaced
  if (baseText === outputText) {
    diagnoseRegexError(baseText, regex);
  }

  return outputText;
}

function diagnoseRegexError(baseText, regex) {  
  if(!(regex instanceof RegExp)) {
    throw new Error('Failed to find match using string argument. No more details available');
  }

  //see if removing line breaks works - in that case we can give a more useful error message
  let oneLineText = baseText.replaceAll(/\n/g,'');
  let res = regex.test(oneLineText);

  //If line breaks don't solve the issue then throw a general error
  if (!res) {
    throw new Error('Failed to find match for regex.');
  }

  //Try to suggest correct regex to use for searching
  let regexSource = regex.source;
  let regexFlags = regex.flags;

  //Look at all the spots where line breaks might occur and try adding \n? there to see if it makes a difference
  //It might be easier to just crudely brute force putting \n? at each possible index?
  for(let breakableChar of ["%","&","\\*","\\+",",","-","\\/",":",";","<","=",">","\\?","{","\\|","}"]) {
    for(let pos = regexSource.indexOf(breakableChar); pos !== -1; pos = regexSource.indexOf(breakableChar, pos + 1)) {
      //Remake the regex with a new line at the candidate position
      let candidateRegexSource = `${regexSource.slice(0,pos + breakableChar.length)}\\n?${regexSource.slice(pos + breakableChar.length)}`;
      let candidateRegex;
      
      try{
        candidateRegex = new RegExp(candidateRegexSource, regexFlags);
      } catch(err) {
        continue;
      }

      //See if the new regex works
      let testReplaceResult = candidateRegex.test(baseText);
      if(testReplaceResult) {
        //Success we found the working regex! Give descriptive error message to user and log suggested regex with new line in correct place
        console.log(`Suggested regex improvement:
${candidateRegex}`);
        throw new Error('Suggested improvement found! Error with line break, failed to find match for regex. See logged output for regex to use instead that should hopefully fix this.');
      }
    }
  }

  throw new Error('Line break error! Failed to failed to find match for regex - most likely caused by a new line break. No suggestions provided');
}

snake.pythagoras();