window.Core = {};

window.Core.make = function () {

    /// Code inspired by fishes, aka copy-pasted
    window.uiImage = function (src) {
        let img = new Image();
        img.src = src;
        img.classList.add('DqMRee');
        img.classList.add('SsAred'); // Hardcoded, need to figure out what this is and how to make it dynamic or something.
        return img;
    };

    //document.body.style.overflow = 'hidden'; // Hide scroll bar

    window.escapeRegex = function (string) {
        return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    window.graphics_selected = 0;

    daily_button = document.querySelector('[jsname="Prvkrf"]');
    window.daily_challenge = false

    // Options for the Intersection Observer
    var options = {
        root: null, // Use the viewport as the root
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    // Callback function to handle intersection changes
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // The element is now visible
                window.daily_challenge = false;
            }
        });
    }

    // Create an Intersection Observer
    var observer = new IntersectionObserver(handleIntersection, options);

    // Start observing the button
    observer.observe(daily_button);

    daily_button.addEventListener("click", function() {
        window.daily_challenge = true;
        window.first_time_call = true;
      });

}

window.Core.alterCode = function (code) {

    if (code.match(/loaded_/) !== null) {
        console.log(code);
        console.log("Google experiment detected, please provide the above text to Yarmiplay by pressing copy ^^^");
        window.loaded_code = true;
      }
      else {
        window.loaded_code = false;
      }

    return code;
}
window.Theme = {};

window.Theme.make = function () {

  // style for all pudding sidebar overlays
  window.puddingSidebarStyle = 'position:absolute;left:100%;z-index:10000;background-color:#4a752c;padding:8px;display:block;border-radius:3px;width:220px;height:584px;top:0px;';

  let advancedSettings = JSON.parse(localStorage.getItem('snakeAdvancedSettings')) ?? {};

  window.themes = [
    {
      name: 'Default Sun',
      light_tiles: '#aad751',
      dark_tiles: '#a2d149',
      shadow: '#94bd46',
      border: '#578a34',
      key_block_sign_color: '#38640e',
      real_top_bar: '#4a752c',
      endscreen_background: '#4dc1f9',
      sep_color: '#7eccfa',
      topbar_color: '#3a91bb',
      buttons_color: '#1155CC',
      bg_color: '#4dc1f9',
      bottom_color: '#4dc1f9'
    },
    {
      name: 'Official Dark',
      light_tiles: '#494351',
      dark_tiles: '#443e4c',
      shadow: '#3d3644',
      border: '#2c2730',
      key_block_sign_color: '#453d4d',
      real_top_bar: '#262428',
      endscreen_background: '#2a2640',
      sep_color: '#363438',
      topbar_color: '#111111',
      buttons_color: '#111111',
      bg_color: '#262428',
      bottom_color: '#262428'
    },
    {
      name: 'Snow',
      light_tiles: '#deeced',
      dark_tiles: '#d1e4e6',
      shadow: '#b9d4d5',
      border: '#879fa1',
      key_block_sign_color: '#506486',
      real_top_bar: '#75898a',
      endscreen_background: '#8cbfd9',
      sep_color: '#85999a',
      topbar_color: '#677f91',
      buttons_color: '#677f91',
      bg_color: '#75898a',
      bottom_color: '#75898a'
    },
    {
      name: 'Volcano',
      light_tiles: '#6e3535',
      dark_tiles: '#673232',
      shadow: '#633131',
      border: '#a33e3e',
      key_block_sign_color: '#642b2b',
      real_top_bar: '#762d2d',
      endscreen_background: '#292e4c',
      sep_color: '#863d3d',
      topbar_color: '#a33e3e',
      buttons_color: '#a33e3e',
      bg_color: '#762d2d',
      bottom_color: '#762d2d'
    },
    {
      name: 'Desert',
      light_tiles: '#f2d78c',
      dark_tiles: '#eccd79',
      shadow: '#e6c770',
      border: '#977b26',
      key_block_sign_color: '#594d26',
      real_top_bar: '#725e1d',
      endscreen_background: '#5fb7e3',
      sep_color: '#826e2d',
      topbar_color: '#977b26',
      buttons_color: '#977b26',
      bg_color: '#725e1d',
      bottom_color: '#725e1d'
    },
    {
      name: 'Official Jungle',
      light_tiles: '#3f5543',
      dark_tiles: '#3b4f3f',
      shadow: '#334737',
      border: '#253227',
      key_block_sign_color: '#354b38',
      real_top_bar: '#202822',
      endscreen_background: '#2b375a',
      sep_color: '#303832',
      topbar_color: '#253227',
      buttons_color: '#253227',
      bg_color: '#202822',
      bottom_color: '#202822'
    },
    {
      name: 'Pool',
      light_tiles: '#b4d0f9',
      dark_tiles: '#a3c5f5',
      shadow: '#94baf0',
      border: '#275ba5',
      key_block_sign_color: '#11325f',
      real_top_bar: '#1d457c',
      endscreen_background: '#42a5f0',
      sep_color: '#2d558c',
      topbar_color: '#275ba5',
      buttons_color: '#1155CC',
      bg_color: '#1d457c',
      bottom_color: '#1d457c'
    },
    {
      name: 'Space',
      light_tiles: '#432c68',
      dark_tiles: '#3d285d',
      shadow: '#3a2956',
      border: '#604096',
      key_block_sign_color: '#3f305a',
      real_top_bar: '#432a6f',
      endscreen_background: '#32224f',
      sep_color: '#533a7f',
      topbar_color: '#604096',
      buttons_color: '#604096',
      bg_color: '#432a6f',
      bottom_color: '#432a6f'
    },
    {
      name: "Globe",
      sep_color: '#7eccfa',
      topbar_color: '#3a91bb',
      real_top_bar: '#4a752c',
      buttons_color: '#1155CC',
      bg_color: '#4dc1f9',
      bottom_color: '#4dc1f9'
    },
    {
      name: 'True Dark',
      light_tiles: '#1D1D1D',
      dark_tiles: '#161616',
      shadow: '#111111',
      border: '#000000',
      key_block_sign_color: '#1D1D1D',
      real_top_bar: '#111111',
      endscreen_background: '#000000',
      sep_color: '#212121',
      topbar_color: '#000000',
      buttons_color: '#000000',
      bg_color: '#111111',
      bottom_color: '#111111'
    },
    {
      name: 'Planeptune',
      light_tiles: '#d0b4f9',
      dark_tiles: '#c5a3f5',
      shadow: '#ba94f0',
      border: '#5b27a5',
      key_block_sign_color: '#32115f',
      real_top_bar: '#451d7c',
      endscreen_background: '#a542f0',
      sep_color: '#6b37b5',
      topbar_color: '#5b27a5',
      buttons_color: '#5b27a5',
      bg_color: '#a542f0',
      bottom_color: '#a542f0'
    },
    {
      name: 'Lastation',
      light_tiles: '#0050b0',
      dark_tiles: '#0059b9',
      shadow: '#003478',
      border: '#000c30',
      key_block_sign_color: '#0050b0',
      real_top_bar: '#000220',
      endscreen_background: '#000C30',
      sep_color: '#101230',
      topbar_color: '#01055C',
      buttons_color: '#01055C',
      bg_color: '#000c30',
      bottom_color: '#000c30'
    },
    {
      name: 'Pacman',
      light_tiles: '#1D1D1D',
      dark_tiles: '#161616',
      shadow: '#000000',
      border: '#0805c6',
      key_block_sign_color: '#000000',
      real_top_bar: '#080576',
      endscreen_background: '#000000',
      sep_color: '#000000',
      topbar_color: '#0805c6',
      buttons_color: '#0605a6',
      bg_color: '#000000',
      bottom_color: '#000000'
    },
    {
      name: 'Sonic',
      light_tiles: '#B25900',
      dark_tiles: '#A05000',
      shadow: '#333333',
      border: '#124f00',
      key_block_sign_color: '#0f81d8',
      real_top_bar: '#2bb800',
      endscreen_background: '#0f81d8',
      sep_color: '#1f91e8',
      topbar_color: '#124f00',
      buttons_color: '#124f00',
      bg_color: '#0f81d8',
      bottom_color: '#0f81d8'
    },
    {
      name: 'Jungle',
      light_tiles: '#499D43',
      dark_tiles: '#36982F',
      shadow: '#336E2B',
      border: '#335B36',
      key_block_sign_color: '#36982F',
      real_top_bar: '#476C42',
      endscreen_background: '#13867E',
      sep_color: '#47724C',
      topbar_color: '#133B26',
      buttons_color: '#133B26',
      bg_color: '#37623C',
      bottom_color: '#37623C'
    },
    {
      name: 'Pudding',
      light_tiles: '#ffef4f',
      dark_tiles: '#ffdf3f',
      shadow: '#dfbf1f',
      border: '#a55229',
      key_block_sign_color: '#ffdf3f',
      real_top_bar: '#853209',
      endscreen_background: '#853209',
      sep_color: '#efcf2f',
      topbar_color: '#752209',
      buttons_color: '#752209',
      bg_color: '#dfbf1f',
      bottom_color: '#dfbf1f'
    },
    {
      name: 'Ice',
      light_tiles: '#57DDFF',
      dark_tiles: '#57D5F4',
      shadow: '#57B0C7',
      border: '#006080',
      key_block_sign_color: '#57D5F4',
      real_top_bar: '#00495C',
      endscreen_background: '#00E1E6',
      sep_color: '#10C1C6',
      topbar_color: '#00293C',
      buttons_color: '#00293C',
      bg_color: '#00B1B6',
      bottom_color: '#00B1B6'
    },
    {
      name: "ModLoader",
      light_tiles: advancedSettings.themeCol1 ?? '#1D1D1D',
      dark_tiles: advancedSettings.themeCol2 ?? '#161616',
      shadow: advancedSettings.themeCol3 ?? '#111111',
      border: advancedSettings.themeCol4 ?? '#000000',
      key_block_sign_color: advancedSettings.themeCol5 ?? '#1D1D1D',
      real_top_bar: advancedSettings.themeCol6 ?? '#111111',
      endscreen_background: advancedSettings.themeCol7 ?? '#000000',
      sep_color: '#7eccfa',
      topbar_color: '#3a91bb',
      buttons_color: '#1155CC',
      bg_color: '#4dc1f9',
      bottom_color: '#4dc1f9'
    }

  ];

  for (let src of [
    'https://i.postimg.cc/R0R1ZMNx/dark-night.png',
    'https://i.postimg.cc/t4bxfYzt/planeptune.png',
    'https://i.postimg.cc/T2rc2X5Y/Lastation-Logo.png',
    'https://i.postimg.cc/C53WfD61/pacman.png',
    'https://i.postimg.cc/8PLc5bjq/sonic-theme.png',
    'https://i.postimg.cc/6Q2DyGbK/jungle.png',
    'https://i.postimg.cc/5y7gwwGY/pudding-cr.png',
    'https://i.postimg.cc/1XqLvbhJ/Ice2.png',
    'https://i.postimg.cc/HLr5YJmb/modloader-icon.png',
    'https://i.postimg.cc/cCr9LrNZ/neptune-planet.png',
  ]) document.querySelector('#theme').appendChild(uiImage(src));

}

window.Theme.alterCode = function (code) {
  /*light tiles
    dark tiles
    shadow
    border
    key block sign color
    top bar
    endscreen background*/
  //console.log("Adding new themes")

  // Settings topbar: zFl3vb
  // Settings background: wXSCdb
  // Settings buttons: FL0z2d

  window.ui_topbar = document.getElementsByClassName('zFl3vb');
  window.ui_background = document.getElementsByClassName('sXu3u');
  window.ui_buttons = document.getElementsByClassName('FL0z2d');
  window.ui_topbar.style = '';
  window.ui_background.style = '';
  window.ui_buttons.style = '';
  window.ui_sep = document.getElementsByClassName('e1XC2b');
  window.ui_sep.style = '';
  window.ui_bottom = document.getElementsByClassName('T7SB3d');
  window.ui_bottom.style = '';

  window.boot_button = document.getElementsByClassName('btn');
  window.boot_check = document.getElementsByClassName('form-check-input');
  window.boot_dropdown = document.getElementsByClassName('form-control');
  window.input_button = document.getElementsByClassName('input-button');

  window.real_topbar_color = "#4a752c";
  window.button_color = "#1155CC";

  // ChatGPT wrote this crap
  function getAttributesByName(themeName) {
    const theme = window.themes.find((theme) => theme.name === themeName);
    if (theme) {
      const { name, set_theme, ...attributes } = theme;
      return attributes;
    }
    return null; // Return null if theme doesn't exist
  }

  window.setTheme = function (theme_name) {

    loop_array = [
      { loop_on: window.ui_sep, attribute: "borderBottomColor", color: "sep_color" },
      { loop_on: window.ui_topbar, attribute: "background", color: "topbar_color" },
      { loop_on: window.ui_buttons, attribute: "background", color: "buttons_color" },
      { loop_on: window.input_button, attribute: "background", color: "buttons_color" },
      { loop_on: window.ui_background, attribute: "background", color: "bg_color" },
      { loop_on: window.ui_bottom, attribute: "background", color: "bottom_color" },
      { loop_on: window.boot_button, attribute: "backgroundColor", color: "buttons_color" },
      { loop_on: window.boot_check, attribute: "backgroundColor", color: "buttons_color" },
      { loop_on: window.boot_dropdown, attribute: "backgroundColor", color: "buttons_color" },
    ]

    const themeAttributes = getAttributesByName(theme_name);
    if (themeAttributes) {
      // Extract individual attribute values using destructuring
      // ChatGPT wrote this crap
      var {
        light_tiles,
        dark_tiles,
        shadow,
        border,
        key_block_sign_color,
        real_top_bar,
        endscreen_background,
        sep_color,
        topbar_color,
        buttons_color,
        bg_color,
        bottom_color,
      } = themeAttributes;
    }

    for (let element of loop_array) {
      for (let h of element["loop_on"]) {
        eval("h.style." + element["attribute"] + " = " + element["color"] + ";")
      }
    }

    document.getElementById('settings-popup-pudding').style.background = real_top_bar;
    document.getElementById('speedinfo-popup-pudding').style.background = real_top_bar;
    const portalPanel = document.getElementById('fruit-bowl-popup-pudding') || document.getElementById('portal-pairs-popup-pudding');
    if (portalPanel) {
      portalPanel.style.background = real_top_bar;
      portalPanel.style.backgroundColor = real_top_bar;
    }

    window.real_topbar_color = real_top_bar;
    window.button_color = buttons_color;

    if (theme_name != "Globe") {
      window.snake.setCustomTheme(light_tiles, dark_tiles, shadow, border, key_block_sign_color, real_top_bar, endscreen_background)
    }
    else {
      window.snake.clearCustomTheme();
    }

    if (localStorage.getItem('snakeChosenMod') === "VisibilityMod" || window.isVisi) {
      document.getElementById('delete-stuff-draggable').style.backgroundColor = border;
      document.getElementById('delete-stuff-draggable').style.borderColor = border;

      document.getElementById('drag-handle').style.borderColor = border;

      document.getElementById('visi-title').style.backgroundColor = real_top_bar;
      document.getElementById('visi-boxes').style.backgroundColor = real_top_bar;
      document.getElementById('flash-snake-timing').style.backgroundColor = buttons_color;

    }


  }

  window.getRandomThemeName = function getRandomThemeName() {
    const filteredThemes = window.themes.filter((theme) => theme.name !== 'Globe' && theme.name !== 'ModLoader');
    const randomIndex = Math.floor(Math.random() * filteredThemes.length);
    return filteredThemes[randomIndex].name;
  }

  window.randomTheme = false;

  code = code.assertReplace(/case "theme":/, `case "theme":
  if(d<window.themes.length){window.randomTheme = false;window.setTheme(window.themes[d].name);}
  else{window.randomTheme = true;window.setTheme(window.getRandomThemeName());};
  `)

  reset_regex = new RegExp(/;this\.reset\(\)\}\}/)

  set_on_reset = `;
  if(window.randomTheme){window.setTheme(window.getRandomThemeName());}
  $&`
  code = code.assertReplace(reset_regex, set_on_reset)
  return code;
}
window.DistinctVisual = {};

window.DistinctVisual.make = function () {

    window.toggle_skull_func = function toggle_skull_func() {
        window.pudding_settings.Skull = !window.pudding_settings.Skull;
    }

    window.toggle_soko_goal = function toggle_soko_goal() {
        window.pudding_settings.SokoGoals = !window.pudding_settings.SokoGoals;
    }

    function i(src) {
        let img = new Image();
        img.src = src;
        img.crossOrigin = 'Anonymous';
        img.width = img.height = 128;
        return img;
    }

    window.skull = i('https://www.google.com/logos/fnbx/snake_arcade/v12/trophy_10.png');
    window.px_skull = i('https://www.google.com/logos/fnbx/snake_arcade/pixel/px_trophy_10.png');
    window.real_skull = i('https://i.postimg.cc/prstgqbL/poison-skull.png');
    window.ghost_skull = i('https://i.postimg.cc/DZqL146Z/poison-ghost.png');
    window.px_ghost_skull = i('https://i.postimg.cc/cLF34LtP/px-poison-ghost.png');

    // window.skull_toggle = false;
    // window.soko_toggle = true;

    window.distinct_soko_goal = new Image();
    window.distinct_soko_goal.src = 'https://i.postimg.cc/x11nt4Pb/box-distinct-soko-goals.png';
    window.distinct_soko_goal.currentSrc = 'https://i.postimg.cc/x11nt4Pb/box-distinct-soko-goals.png';
    window.distinct_soko_goal.crossOrigin = "Anonymous";

    window.distinct_soko_goal_px = new Image();
    window.distinct_soko_goal_px.src = 'https://i.postimg.cc/NFnWqP35/px-box-red.png';
    window.distinct_soko_goal_px.currentSrc = 'https://i.postimg.cc/NFnWqP35/px-box-red.png';
    window.distinct_soko_goal_px.crossOrigin = "Anonymous";

}

window.DistinctVisual.alterCode = function (code) {

    realism_draw = new RegExp(/function\(a,b\){switch.*{d/);
    catchError(realism_draw, code);
    realism_switch = code.match(realism_draw)[0];

    realism_path = new RegExp(/function\(a,b\){switch.*}}/);
    catchError(realism_path, code);
    last_path = code.match(realism_path)[0].split('.')[9].split('}')[0]

    get_graphics = realism_switch.split(':')[1].split(')')[0];

    window.drawing_apple = true;

    get_apple_stuff = new RegExp(/(?:let|const|var).*[a-zA-Z0-9_$]{1,8}\.canvas\:.*\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\);/)
    catchError(get_apple_stuff, code);
    poison_default = code.match(get_apple_stuff)[0]
    b_graphics = poison_default.split('(')[2].split(')')[0]

    get_apple_code = `
    if(window.pudding_settings.Skull){
        b.type = ${poison_default.split('?')[1].split('=')[1]} ? ${poison_default.split('<')[1].split('?')[0]} - 1 : b.type;
    }
    ${poison_default}
    `

    code = code.assertReplace(get_apple_stuff, get_apple_code)

    disable_real_grey = new RegExp(/\(f=[a-zA-Z0-9_$]{1,8}.[a-zA-Z0-9_$]{1,8}\)==null\|\|[a-zA-Z0-9_$]{1,8}\(f,b,c,-1\)/)
    catchError(disable_real_grey, code);
    real_grey = code.match(disable_real_grey)[0]
    real_grey_path = real_grey.split(')')[0].split('=')[1]

    new_grey_code = `
    if (${real_grey_path} && ${real_grey_path}.path.includes("poison-skull")) {
        ${real_grey.slice(0, -1).slice(0, -1).slice(0, -1)}0)
    }
    else {
        ${real_grey}
    }
    `

    code = code.assertReplace(disable_real_grey, new_grey_code)

    // Match only the box goal creation. v12 puts the sequence.png creation on the
    // same line just before it, which a greedy match swallows — that truncated the
    // rebuilt call and grabbed the sequence property instead of the box one.
    sokondeez = new RegExp(/this\.[a-zA-Z0-9_$]{1,8}=new [a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},"[^"]*box[^"]*",\d+,this\.[a-zA-Z0-9_$]{1,8},"[^"]*"\)/)
    catchError(sokondeez, code);
    sokondeez_code = code.match(sokondeez)[0]

    sokondeez_nuts = `
    window.SokoRef=this;
    window.DefaultSokoGoal=${sokondeez_code};
    window.DistinctSokoFinal=${sokondeez_code.split('=')[1].split('"')[0]} "${window.distinct_soko_goal.src}" ${sokondeez_code.split('"')[2]} "${window.distinct_soko_goal_px.src}" ${sokondeez_code.split('"')[4]}
    `

    code = code.assertReplace(sokondeez, sokondeez_nuts)

    reset_regex = new RegExp(/;this\.reset\(\)\}\}/)

    set_on_reset = `;
    if (window.pudding_settings.SokoGoals) {
        window.SokoRef.${sokondeez_code.split('=')[0].split('.')[1]} = window.DistinctSokoFinal;
    }
    else {
        window.SokoRef.${sokondeez_code.split('=')[0].split('.')[1]} = window.DefaultSokoGoal;
    }
    $&`
    code = code.assertReplace(reset_regex, set_on_reset)

    return code;
}
window.Counter = {};

window.Counter.make = function () {
    window.loadStatistics = function () {
        let stats = localStorage.getItem('inputCounterMod');
        if (stats === null) {
            stats = {
                visible: true,
                statShown: 'inputs',
                statDurationShown: 'game',
                inputs: {
                    game: 0,
                    session: 0,
                    lifetime: 0
                },
                plays: {
                    session: 0,
                    lifetime: 0
                },
                apples: {
                    session: 0,
                    lifetime: 0
                }
            };
        } else {
            stats = JSON.parse(stats);
        }

        if (typeof stats.apples === 'undefined') {
            stats.apples = {
                session: 0,
                lifetime: 0
            }
        }

        //Make sure these get reset
        stats.inputs.game = 0;
        stats.inputs.session = 0;
        stats.plays.session = 0;
        stats.apples.session = 0;
        stats.visible = true;

        stats.walls = {
            game: 0
        };

        stats.hide = {
            count: ""
        };

        return stats;
    }
    window.stats = window.loadStatistics();
    window.saveStatistics = function () {
        if (typeof stats !== 'undefined' &&
            typeof stats.statShown !== 'undefined' &&
            typeof stats.statDurationShown !== 'undefined' &&
            typeof stats.inputs !== 'undefined' &&
            typeof stats.plays !== 'undefined' &&
            typeof stats.inputs.game !== 'undefined' &&
            typeof stats.inputs.session !== 'undefined' &&
            typeof stats.inputs.lifetime !== 'undefined' &&
            typeof stats.plays.session !== 'undefined' &&
            typeof stats.plays.lifetime !== 'undefined' &&
            typeof stats.apples.session !== 'undefined' &&
            typeof stats.apples.lifetime !== 'undefined' &&
            typeof stats.visible !== 'undefined'
        ) {
            localStorage.setItem('inputCounterMod', JSON.stringify(stats));
        }
    }
    window.updateCounterDisplay = function () {
        divList.innerHTML = stats[stats.statShown][stats.statDurationShown];
    }
    window.promptToResetStats = function () {
        let userResponse = prompt('Type DELETE to reset all stats. Cannot be undone');
        if (userResponse === 'DELETE') {
            localStorage.removeItem('inputCounterMod');
            stats = {
                visible: true,
                statShown: 'inputs',
                statDurationShown: 'game',
                inputs: {
                    game: 0,
                    session: 0,
                    lifetime: 0
                },
                plays: {
                    session: 0,
                    lifetime: 0
                },
                apples: {
                    session: 0,
                    lifetime: 0
                }
            };
            saveStatistics();
            updateCounterDisplay();
            alert('All stats have been reset');
        } else {
            alert('Did not reset all stats');
        }
    }

    window.promptToEditStatCount = function () {
        if (stats.statShown === 'hide' || stats.statShown === 'walls') {
            alert(`Not changing stat for "hide" or "walls"`)
            return;
        }
        let userResponse = prompt(`Change the stat count for "${stats.statShown} - ${stats.statDurationShown}"? This won't change any of the other stats. Current value: ${stats[stats.statShown][stats.statDurationShown]}`, stats[stats.statShown][stats.statDurationShown]);
        userResponse = parseInt(userResponse, 10);
        if (isNaN(userResponse)) {
            alert('Invalid - did not change stat count');
        } else {
            stats[stats.statShown][stats.statDurationShown] = userResponse;
            saveStatistics();
            updateCounterDisplay();
            alert(`Changed stat count to ${userResponse}`);
        }
    }

    window.getStatIconImageSrc = function () {
        switch (stats.statShown) {
            case 'hide':
                return "https://i.postimg.cc/bNFfLPCn/Empty.png"
            case 'walls':
                return "https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_01.png"
            case 'apples':
                return "https://www.google.com/logos/fnbx/snake_arcade/v3/apple_00.png"
            case 'plays':
                return "https://fonts.gstatic.com/s/i/googlematerialicons/play_arrow/v6/white-24dp/2x/gm_play_arrow_white_24dp.png"
            default:
                return "https://www.google.com/logos/fnbx/snake_arcade/keys.svg"
        }
    }

    window.setCounter = function () {
        //stats.visible = !stats.visible;
        if (stats.visible) {
            document.getElementById('stat-icon').style.display = 'inline';
            document.getElementById('counter-num').style.display = 'inherit';
            //document.getElementById('toggle-counter').innerHTML = 'Hide counter';
        }
        else {
            document.getElementById('stat-icon').style.display = 'none';
            document.getElementById('counter-num').style.display = 'none';
            //document.getElementById('toggle-counter').innerHTML = 'Show counter';
        }
        saveStatistics();
    }

}

window.Counter.alterCode = function (code) {

    reset_regex = new RegExp(/;this\.reset\(\)\}\}/)
    window.wallCoords = [];

    counter_reset_code = `;stats.inputs.game = 0;
    stats.walls.game = 0;
    window.wallCoords = [];
    window.timeKeeper.playing = false;
    window.BootstrapHide();
    stats.plays.session++;
    stats.plays.lifetime++;
    window.timeKeeper.addAttempt(window.timeKeeper.mode, window.timeKeeper.count, window.timeKeeper.speed, window.timeKeeper.size);
    saveStatistics();
    stats.visible = true;
    if((window.CurrentModeNum != 1 && window.CurrentModeNum != 19) && stats.statShown == "walls"){
        stats.visible = false;
    }
    window.setCounter();
    updateCounterDisplay();
    $&`

    catchError(reset_regex, code)
    code = code.assertReplace(reset_regex, counter_reset_code);

    window.IncrementCounter = function(){

        if(!window.timeKeeper.playing)
        {
            window.timeKeeper.start();
            window.timeKeeper.playing = true;
        }

        stats.inputs.game++;
        stats.inputs.session++;
        stats.inputs.lifetime++;
        stats.statShown === 'inputs' && updateCounterDisplay();

    }


    document.addEventListener('keydown', (event)=> {
        if(!event.repeat)
        {
            if ((event.key === 'ArrowRight') || (event.code === 'KeyD')){
                window.IncrementCounter();
            }
            else if (event.key === 'ArrowLeft'|| (event.code === 'KeyA'))
            {
                window.IncrementCounter();
            }
            else if (event.key === 'ArrowDown'|| (event.code === 'KeyS'))
            {
                window.IncrementCounter();
            }
            else if (event.key === 'ArrowUp'|| (event.code === 'KeyW'))
            {
                window.IncrementCounter();
            }
        }
    }
      );




    stop_regex = new RegExp(/stop\(a\){/)
    catchError(stop_regex, code)
    save_stats_code = `stop\(a\){saveStatistics();`
    

    code = code.assertReplace(stop_regex, save_stats_code);

    wall_spawn_regex = new RegExp(/(?:let|const|var) [a-zA-Z0-9_$]{1,8}=\n?[a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},this\.[a-zA-Z0-9_$]{1,8}\(null,5\)\);/gm)
    catchError(wall_spawn_regex, code)
    wall_pos = code.match(wall_spawn_regex)[0].split('=')[0].split(' ')[1]

    wall_counter_code = `${code.match(wall_spawn_regex)[0]}
    if(${wall_pos}){stats.walls.game++;
    window.wallCoords.push([${wall_pos}.x, ${wall_pos}.y]);
    updateCounterDisplay();}
    `
    if (window.NepDebug) {
        console.log("Wall thing: " + wall_pos)
        console.log("Wall thing 2: " + wall_counter_code)
    }
    code = code.assertReplace(wall_spawn_regex, wall_counter_code);
    

    window.coordinatesToBoardString = function coordinatesToBoardString(coordinates) {
        if(window.timeKeeper.getCurrentSetting("size") != 1)
            return false;

        // Initialize an array of 90 tiles, all initialized to '1' (empty)
        let board = Array(90).fill('1');

        // Set '2' (wall) for each coordinate in the list
        coordinates.forEach(coord => {
            let [x, y] = coord;
            let index = y * 10 + x; // Calculate the index in the 1D array
            board[index] = '2'; // Set '2' at the calculated index
        });

        // Join the array into a single string of 90 characters
        return board.join('');
    }

    let death_wall_icon = document.querySelector('[jsname="LpoWPe"]');

    death_wall_icon.addEventListener("click", function () {
        pattern_string = window.coordinatesToBoardString(window.wallCoords)
        if(pattern_string){
            navigator.clipboard.writeText("pattern " + pattern_string);
        }
    });
    

    return code;
}
window.TimeKeeper = {};

window.TimeKeeper.make = function () {

    /*
    storage:
    att-modeStr-count-speed-size : number of attempts of this mode
    25-modeStr-count-speed-size: {time: time of 25 score, date: date of 25 score, att: number of attempts that reached 25 score, sum: total time of all attempts that reached 25 score}
    50, 100 and ALL idem.
    H-modeStr-count-speed-size: {high: highscore of this mode, time: time of the highscore run, date: date of the highscore run, sum: total score of all attempts}
*/
    window.timeKeeper = {};
    window.timeKeeper.debug = false;
    //called on every apple
    window.timeKeeper.gotApple = function (time, score) {
        stats.apples.session++;
        stats.apples.lifetime++;
        updateCounterDisplay();
        if (window.pudding_settings.randomizeThemeApple) {
            window.setTheme(window.getRandomThemeName());
        }
        if(window.daily_challenge) {
            return;
        }
        if (window.timeKeeper.debug) {
            //console.log("got Apple %s, %s", time, score);
        }
        if (localStorage.getItem('snakeChosenMod') != "PuddingMod"){
            return;
        }
        window.timeKeeper.lastAppleDate = new Date();
        window.timeKeeper.lastAppleTime = time;
        //save time
        if (score == 25 || score == 50 || score == 100) {
            if (window.timeKeeper.debug) {
                //console.log("Saving PB for %s Ticks, %s Apples", time, score);
            }
            window.timeKeeper.savePB(time, score, window.timeKeeper.mode, window.timeKeeper.count, window.timeKeeper.speed, window.timeKeeper.size);
        }
    }

    //called when you get all apples
    window.timeKeeper.gotAll = function (time, score) {
        if(window.daily_challenge) {
            return;
        }
        if (window.timeKeeper.debug) {
            //console.log("got All %s, %s", time, score);
        }
        if (localStorage.getItem('snakeChosenMod') != "PuddingMod"){
            return;
        }
        window.timeKeeper.savePB(time, "ALL", window.timeKeeper.mode, window.timeKeeper.count, window.timeKeeper.speed, window.timeKeeper.size);
    }

    //called when you're dead, every time.
    window.timeKeeper.death = function (time, score) {
        if (window.timeKeeper.debug) {
            //console.log("death %s, %s", time, score);
        }
        if (localStorage.getItem('snakeChosenMod') != "PuddingMod"){
            return;
        }
        if (window.timeKeeper.playing) {
            window.timeKeeper.playing = false;
            window.timeKeeper.saveScore(time, score, window.timeKeeper.mode, window.timeKeeper.count, window.timeKeeper.speed, window.timeKeeper.size);
        }
    }

    //called when you start gamed d
    window.timeKeeper.start = function () {
        if (window.timeKeeper.debug) {
            //console.log("start");
        }
        window.timeKeeper.playing = true;
        //save current settings
        window.timeKeeper.mode = window.timeKeeper.getCurrentMode();
        window.timeKeeper.count = window.timeKeeper.getCurrentSetting("count");
        window.timeKeeper.speed = window.timeKeeper.getCurrentSetting("speed");
        window.timeKeeper.size = window.timeKeeper.getCurrentSetting("size");
    }

    window.timeKeeper.getCurrentMode = function () {
        element = "";
        for (i of document.querySelectorAll('img')) {
            if (i.src.includes('random.png')) {
                element = i;
            }
        }
        counter = -1;
        modeStr = "";
        for (child of element.parentElement.parentElement.parentElement.children) {
            counter++;
            if (counter == 0) { continue; };
            if (child.firstElementChild.classList.length > 1 && child.firstElementChild.children.length > 0) {
                modeStr += "1";
            }
            else {
                modeStr += "0";
            }
        }

        let mode = window.timeKeeper.getCurrentSetting("trophy");
        let trophyCount = document.getElementById("trophy").children.length;
        if (mode != trophyCount - 1) {	//not on blender mode
            modeStr = "";
            // Bits cover every trophy except Classic (0) and Blender (last)
            for (t = 1; t < trophyCount - 1; t++) {
                if (t == mode) {
                    modeStr += "1";
                }
                else {
                    modeStr += "0";
                }
            }
        }
        return modeStr
    }

    //get the current setting, name = 'count', 'speed', 'size' or 'trophy'
    window.timeKeeper.getCurrentSetting = function (name) {
        let getSelectedIndex = function (name) {
            let elementList = document.getElementById(name);
            let number = 0;
            let classNames = [];
            let notUnique = "";
            for (element of elementList.children) {
                if (classNames.indexOf(element.className) == -1) {
                    classNames.push(element.className);
                }
                else {
                    notUnique = element.className;
                    break;
                }
            }
            for (element of elementList.children) {
                if (element.className != notUnique) {
                    return number;
                }
                number++;
            }
            return 0;
        }

        if(name != 'trophy'){
            return eval(window[name + '_var'])
        }

        return getSelectedIndex(name);
    }

    //save highscore
    window.timeKeeper.saveScore = function (time, score, mode, count, speed, size) {
        // count > 6 = beyond Tally (MoreMenu / custom); also skip MouseMode / Level Editor
        if (count > 6 || speed > 2 || size > 2 || typeof window.aimTrainer !== 'undefined' || typeof window.megaWholeSnakeObject !== 'undefined') {
            return;
        }
        if (typeof (window.timeKeeper.lastAppleDate) == "undefined") {
            window.timeKeeper.lastAppleDate = new Date();
        }
        if (typeof (window.timeKeeper.lastAppleTime) == "undefined") {
            window.timeKeeper.lastAppleTime = time;
        }

        time = Math.floor(time);
        let storage = localStorage.getItem("snake_timeKeeper");
        storage = JSON.parse(storage);
        let name = "H" + "-" + mode + "-" + count + "-" + speed + "-" + size;
        //if undefined, save new high
        if (typeof (storage[name]) == "undefined") {
            storage[name] = { "high": score, "time": window.timeKeeper.lastAppleTime, "date": window.timeKeeper.lastAppleDate, "sum": score };
        }
        else {
            //increase sum
            storage[name].sum += score;
            if (score > storage[name].high || (score == storage[name].high && time < storage[name].time)) {
                //save new pb
                storage[name].high = score;
                storage[name].time = window.timeKeeper.lastAppleTime;
                storage[name].date = window.timeKeeper.lastAppleDate;
            }
        }
        localStorage.setItem("snake_timeKeeper", JSON.stringify(storage));
    }

    //save 25, 50, 100 or 'ALL' score
    window.timeKeeper.savePB = function (time, score, mode, count, speed, size) {
        // count > 6 = beyond Tally (MoreMenu / custom); also skip MouseMode / Level Editor
        if (count > 6 || speed > 2 || size > 2 || typeof window.aimTrainer !== 'undefined' || typeof window.megaWholeSnakeObject !== 'undefined') {
            return;
        }

        time = Math.floor(time);
        let storage = localStorage.getItem("snake_timeKeeper");
        storage = JSON.parse(storage);
        let name = score.toString() + "-" + mode + "-" + count + "-" + speed + "-" + size;

        //if undefined, save new pb
        if (typeof (storage[name]) == "undefined") {
            storage[name] = { "time": time, "date": new Date(), "att": 1, "sum": time };
        }
        else {
            //increase attempt
            if (typeof (storage[name].att) == "undefined") { storage[name].att = 0 };
            storage[name].att += 1;
            //increase sum
            if (typeof (storage[name].sum) == "undefined") { storage[name].sum = 0 };
            storage[name].sum += time;
            if (time < storage[name].time) {		//only pb when lower time then stored
                storage[name] = { "time": time, "date": new Date(), "att": storage[name].att, "sum": storage[name].sum };
            }
        }

        localStorage.setItem("snake_timeKeeper", JSON.stringify(storage));
    }

    //function to add attempt to localStorage
    window.timeKeeper.addAttempt = function (mode, count, speed, size) {
        let storage = localStorage.getItem("snake_timeKeeper");
        storage = JSON.parse(storage);
        let name = "att" + "-" + mode + "-" + count + "-" + speed + "-" + size;
        if (typeof (storage[name]) == "undefined") {
            storage[name] = 1;
        }
        else {
            storage[name] += 1;
        }
        localStorage.setItem("snake_timeKeeper", JSON.stringify(storage));
    }

    window.timeKeeper.setAttempts = function (attempts) {
        if (isNaN(attempts)) {
            //console.log(attempts.toString() + " is not a number!");
            return;
        }
        let storage = localStorage.getItem("snake_timeKeeper");
        storage = JSON.parse(storage);
        mode = window.timeKeeper.getCurrentMode()
        count = window.timeKeeper.getCurrentSetting("count");
        speed = window.timeKeeper.getCurrentSetting("speed");
        size = window.timeKeeper.getCurrentSetting("size");
        let name = "att" + "-" + mode + "-" + count + "-" + speed + "-" + size;
        storage[name] = {};
        storage[name] = attempts;
        localStorage.setItem("snake_timeKeeper", JSON.stringify(storage));
    }

    window.timeKeeper.setPB = function (time, score, attempts, average) {
        if (isNaN(time)) {
            //console.log(time.toString() + " is not a number!");
            return;
        }
        if (score != 25 && score != 50 && score != 100 && score != "ALL") {
            //console.log(score + " has to be 25, 50, 100 or \"ALL\"!");
            return;
        }
        if (isNaN(attempts)) {
            //console.log(attempts.toString() + " is not a number!");
            return;
        }
        if (isNaN(average)) {
            //console.log(average.toString() + " is not a number!");
            return;
        }
        let storage = localStorage.getItem("snake_timeKeeper");
        storage = JSON.parse(storage);
        mode = window.timeKeeper.getCurrentMode()
        count = window.timeKeeper.getCurrentSetting("count");
        speed = window.timeKeeper.getCurrentSetting("speed");
        size = window.timeKeeper.getCurrentSetting("size");
        let name = score.toString() + "-" + mode + "-" + count + "-" + speed + "-" + size;
        storage[name] = {};
        storage[name].time = time;
        storage[name].date = new Date();
        storage[name].att = attempts;
        storage[name].sum = Math.round(average * attempts);
        localStorage.setItem("snake_timeKeeper", JSON.stringify(storage));
    }

    window.timeKeeper.setScore = function (highscore, time, average) {
        if (isNaN(highscore)) {
            //console.log(highscore.toString() + " is not a number!");
            return;
        }
        if (isNaN(time)) {
            //console.log(time.toString() + " is not a number!");
            return;
        }
        if (isNaN(average)) {
            //console.log(average.toString() + " is not a number!");
            return;
        }
        let storage = localStorage.getItem("snake_timeKeeper");
        storage = JSON.parse(storage);
        mode = window.timeKeeper.getCurrentMode()
        count = window.timeKeeper.getCurrentSetting("count");
        speed = window.timeKeeper.getCurrentSetting("speed");
        size = window.timeKeeper.getCurrentSetting("size");
        let name = "H" + "-" + mode + "-" + count + "-" + speed + "-" + size;
        storage[name] = {};
        storage[name].high = highscore;
        storage[name].time = time;
        storage[name].date = new Date();
        storage[name].sum = average * storage["att" + "-" + mode + "-" + count + "-" + speed + "-" + size];
        localStorage.setItem("snake_timeKeeper", JSON.stringify(storage));
    }

    //generate storage if it doesn't exist, or import from old file format.
    window.timeKeeper.makeStorage = function () {
        let storage = localStorage.getItem("snake_timeKeeper");
        if (storage == null) {
            storage = {};
            storage["version"] = 2;

            //try to read version 1 to new storage type
            old_pbs = localStorage.getItem("snake_pbs");
            if (old_pbs != null) {
                old_pbs = JSON.parse(old_pbs);
                //console.log("Converting local storage to new storage type");
                for (mode = 0; mode < 20; mode++) {
                    modeStr = "00000000000000000000".split("");
                    if (mode != 0) {
                        modeStr[mode - 1] = '1';
                    }
                    modeStr = modeStr.join('');

                    for (count = 0; count < 5; count++) {
                        for (speed = 0; speed < 3; speed++) {
                            for (size = 0; size < 3; size++) {
                                for (let score of ["25", "50", "100", "ALL", "att"]) {
                                    let name = score + "-" + mode + "-" + count + "-" + speed + "-" + size;
                                    if (typeof (old_pbs[name]) != "undefined") {
                                        //console.log(name, old_pbs[name]);
                                        newName = score + "-" + modeStr + "-" + count + "-" + speed + "-" + size;
                                        storage[newName] = old_pbs[name];
                                    }

                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            storage = JSON.parse(storage);
        }

        // v2 (20-bit modeStr) -> v3 (21-bit): insert Bridge bit before Peaceful
        if (storage["version"] == 2) {
            const migrated = { version: 3 };
            for (const key of Object.keys(storage)) {
                if (key === "version") continue;
                const parts = key.split("-");
                if (parts.length >= 5 && /^[01]{20}$/.test(parts[1])) {
                    const modeStr = parts[1];
                    const newModeStr = modeStr.slice(0, 19) + "0" + modeStr.slice(19);
                    migrated[parts[0] + "-" + newModeStr + "-" + parts.slice(2).join("-")] = storage[key];
                } else {
                    migrated[key] = storage[key];
                }
            }
            storage = migrated;
        }

        if (storage["version"] != 3) {
            alert("Something went wrong with you localStorage!");
        }
        localStorage.setItem("snake_timeKeeper", JSON.stringify(storage));
    }

    window.timeKeeper.dialogActive = false;

    //generate and show the dialog
    window.timeKeeper.showDialog = function () {

        //make dialog
        window.timeKeeper.dialogActive = true;
        document.getElementById('time-keeper').innerHTML = 'Hide Details';

        //dialog = document.createElement("dialog");
        dialog = document.createElement("div");

        dialog.setAttribute("open", "");
        dialog.setAttribute("id", "timeKeeperDialog");

        let count = window.timeKeeper.getCurrentSetting("count");
        let speed = window.timeKeeper.getCurrentSetting("speed");
        let size = window.timeKeeper.getCurrentSetting("size");
        let modeStr = window.timeKeeper.getCurrentMode("size");
        //change modeStr to gamemode
        counter = 0
        var gamemode = "";
        for (t of modeStr) {
            if (t == 1) {
                if(window.isBridge){
                    switch (counter) {
                        case 0: gamemode += "Wall, "; break;
                        case 1: gamemode += "Portal, "; break;
                        case 2: gamemode += "Cheese, "; break;
                        case 3: gamemode += "Borderless, "; break;
                        case 4: gamemode += "Twin, "; break;
                        case 5: gamemode += "Winged, "; break;
                        case 6: gamemode += "YinYang, "; break;
                        case 7: gamemode += "Key, "; break;
                        case 8: gamemode += "Sokoban, "; break;
                        case 9: gamemode += "Poison, "; break;
                        case 10: gamemode += "Dimension, "; break;
                        case 11: gamemode += "Minesweeper, "; break;
                        case 12: gamemode += "Statue, "; break;
                        case 13: gamemode += "Light, "; break;
                        case 14: gamemode += "Shield, "; break;
                        case 15: gamemode += "Arrow, "; break;
                        case 16: gamemode += "Hotdog, "; break;
                        case 17: gamemode += "Magnet, "; break;
                        case 18: gamemode += "Gate, "; break;
                        case 19: gamemode += "Bridge, "; break;
                        case 20: gamemode += "Peaceful, "; break;
                        default: gamemode += "Unknown, "; break;
                    }
                }else{
                    switch (counter) {
                        case 0: gamemode += "Wall, "; break;
                        case 1: gamemode += "Portal, "; break;
                        case 2: gamemode += "Cheese, "; break;
                        case 3: gamemode += "Borderless, "; break;
                        case 4: gamemode += "Twin, "; break;
                        case 5: gamemode += "Winged, "; break;
                        case 6: gamemode += "YinYang, "; break;
                        case 7: gamemode += "Key, "; break;
                        case 8: gamemode += "Sokoban, "; break;
                        case 9: gamemode += "Poison, "; break;
                        case 10: gamemode += "Dimension, "; break;
                        case 11: gamemode += "Minesweeper, "; break;
                        case 12: gamemode += "Statue, "; break;
                        case 13: gamemode += "Light, "; break;
                        case 14: gamemode += "Shield, "; break;
                        case 15: gamemode += "Arrow, "; break;
                        case 16: gamemode += "Hotdog, "; break;
                        case 17: gamemode += "Magnet, "; break;
                        case 18: gamemode += "Gate, "; break;
                        case 19: gamemode += "Skip, "; break;
                        case 20: gamemode += "Peaceful, "; break;
                        default: gamemode += "Unknown, "; break;
                    }
                }
            }
            counter++;
        }
        if (gamemode == "") {
            gamemode = "Classic, ";
        }
        gamemode = gamemode.substring(0, gamemode.lastIndexOf(","));

        //add level information
        bold = document.createElement('u');
        textnode = document.createTextNode("Speed Info Details");
        bold.style = 'color:white;font-family:Roboto,Arial;'
        //textnode.style = 'color:white;font-family:Arial;'
        bold.appendChild(textnode);
        //buttonClose.style = 'color:white;background:black'; font-family:roboto;
        dialog.appendChild(bold);
        dialog.appendChild(document.createElement("br"));
        dialog.appendChild(document.createTextNode("Mode: " + gamemode));
        dialog.appendChild(document.createElement("br"));
        switch (count) {
            case 0: dialog.appendChild(document.createTextNode("1 Apple, ")); break;
            case 1: dialog.appendChild(document.createTextNode("3 Apples, ")); break;
            case 2: dialog.appendChild(document.createTextNode("5 Apples, ")); break;
            case 3: dialog.appendChild(document.createTextNode("10 Apples, ")); break;
            case 4: dialog.appendChild(document.createTextNode("Dice count, ")); break;
            case 5: dialog.appendChild(document.createTextNode("Bomb count, ")); break;
            case 6: dialog.appendChild(document.createTextNode("Tally count, ")); break;
            default: dialog.appendChild(document.createTextNode("MoreMenu Apples, ")); break;
        }
        switch (speed) {
            case 0: dialog.appendChild(document.createTextNode("Normal speed, ")); break;
            case 1: dialog.appendChild(document.createTextNode("Fast speed, ")); break;
            case 2: dialog.appendChild(document.createTextNode("Slow speed, ")); break;
            default: dialog.appendChild(document.createTextNode("MoreMenu speed, ")); break;

        }
        switch (size) {
            case 0: dialog.appendChild(document.createTextNode("Normal size")); break;
            case 1: dialog.appendChild(document.createTextNode("Small size")); break;
            case 2: dialog.appendChild(document.createTextNode("Large size")); break;
            default: dialog.appendChild(document.createTextNode("MoreMenu size")); break;
        }
        //dialog.style = 'border-radius: 10px;'

        //add stats
        dialog.appendChild(document.createElement("br"));
        dialog.appendChild(document.createElement("br"));
        storage = JSON.parse(localStorage["snake_timeKeeper"]);
        let totalAttempts = 0;

        for (let score of ["att", "25", "50", "100", "ALL", "H"]) {
            let name = score + "-" + modeStr + "-" + count + "-" + speed + "-" + size;
            if (typeof (storage[name]) != "undefined") {

                bold = document.createElement('span');
                switch (score) {
                    case "25": bold.appendChild(document.createTextNode("25 Apples:")); break;
                    case "50": bold.appendChild(document.createTextNode("50 Apples:")); break;
                    case "100": bold.appendChild(document.createTextNode("100 Apples:")); break;
                    case "ALL": bold.appendChild(document.createTextNode("All Apples:")); break;
                    case "att": bold.appendChild(document.createTextNode("Total Attempts: ")); break;
                    case "H": bold.appendChild(document.createTextNode("Highscore: ")); break;
                    default: break;
                }
                dialog.appendChild(bold);

                if (score == "att") {
                    totalAttempts = storage[name];
                    dialog.appendChild(document.createTextNode(totalAttempts));
                    dialog.appendChild(document.createElement("br"));
                }
                else if (score == "H") {
                    dialog.appendChild(document.createTextNode(storage[name].high));
                }

                dialog.appendChild(document.createElement("br"));

                if (score == "att")
                    continue;

                hours = Math.floor(storage[name].time / 3600000);
                minutes = String(Math.floor((storage[name].time-hours*3600000) / 60000)).padStart(2, "0");
                seconds = String(Math.floor((storage[name].time - minutes * 60000-hours*3600000) / 1000)).padStart(2, "0");
                mseconds = String(storage[name].time - minutes * 60000 - seconds * 1000-hours*3600000).padStart(3, "0");
                if(hours==0){
                    if (score != "H") {
                        dialog.appendChild(document.createTextNode("Best Time: " + minutes + ":" + seconds + ":" + mseconds));
                        dialog.appendChild(document.createElement("br"));
                        dialog.appendChild(document.createTextNode("Achieved on: " + new Date(storage[name].date).toString()));
                        dialog.appendChild(document.createElement("br"));
                    }
                    else {
                        dialog.appendChild(document.createTextNode("Duration: " + minutes + ":" + seconds + ":" + mseconds));
                        dialog.appendChild(document.createElement("br"));
                        dialog.appendChild(document.createTextNode("Achieved on: " + new Date(storage[name].date).toString()));
                        dialog.appendChild(document.createElement("br"));
                        dialog.appendChild(document.createTextNode("Average score: " + (Math.round(100 * (storage[name].sum / totalAttempts)) / 100).toString()));
                        dialog.appendChild(document.createElement("br"));
                    }
                    if (storage[name].att != undefined && storage[name].sum != undefined) {
                        let time = Math.floor(storage[name].sum / storage[name].att);
                        hours = Math.floor(storage[name].time / 3600000)
                        minutes = String(Math.floor((time - hours * 3600000) / 60000)).padStart(2, "0");
                        seconds = String(Math.floor((time - minutes * 60000-hours*3600000) / 1000)).padStart(2, "0");
                        mseconds = String(time - minutes * 60000 - seconds * 1000-hours*3600000).padStart(3, "0");
                        dialog.appendChild(document.createTextNode("Attempts to this point: " + storage[name].att));
                        dialog.appendChild(document.createElement("br"));
                        dialog.appendChild(document.createTextNode("Average: " + minutes + ":" + seconds + ":" + mseconds));
                        dialog.appendChild(document.createElement("br"));
                    }
                    dialog.appendChild(document.createElement("br"));
                }else{
                    if (score != "H") {
                        dialog.appendChild(document.createTextNode("Best Time: " + hours + ":" + minutes + ":" + seconds + ":" + mseconds));
                        dialog.appendChild(document.createElement("br"));
                        dialog.appendChild(document.createTextNode("Achieved on: " + new Date(storage[name].date).toString()));
                        dialog.appendChild(document.createElement("br"));
                    }
                    else {
                        dialog.appendChild(document.createTextNode("Duration: " + hours + ":" + minutes + ":" + seconds + ":" + mseconds));
                        dialog.appendChild(document.createElement("br"));
                        dialog.appendChild(document.createTextNode("Achieved on: " + new Date(storage[name].date).toString()));
                        dialog.appendChild(document.createElement("br"));
                        dialog.appendChild(document.createTextNode("Average score: " + (Math.round(100 * (storage[name].sum / totalAttempts)) / 100).toString()));
                        dialog.appendChild(document.createElement("br"));
                    }
                    if (storage[name].att != undefined && storage[name].sum != undefined) {
                        let time = Math.floor(storage[name].sum / storage[name].att);
                        hours = Math.floor(storage[name].time / 3600000)
                        minutes = String(Math.floor((time - hours * 3600000) / 60000)).padStart(2, "0");
                        seconds = String(Math.floor((time - minutes * 60000-hours*3600000) / 1000)).padStart(2, "0");
                        mseconds = String(time - minutes * 60000 - seconds * 1000-hours*3600000).padStart(3, "0");
                        dialog.appendChild(document.createTextNode("Attempts to this point: " + storage[name].att));
                        dialog.appendChild(document.createElement("br"));
                        dialog.appendChild(document.createTextNode("Average: " + hours + ":" + minutes + ":" + seconds + ":" + mseconds));
                        dialog.appendChild(document.createElement("br"));
                    }
                    dialog.appendChild(document.createElement("br"));
                }
            }
        }

        //buttonClose
        //dialog.appendChild(document.createElement("br"));
        buttonClose = document.createElement("button");
        buttonClose.appendChild(document.createTextNode("Close"));
        buttonClose.addEventListener("click", (e) => {
            window.timeKeeper.toggleDialog();
        });

        buttonClose.style = 'color:white;background-color:' + window.button_color+';';
        buttonClose.className = 'btn';
        dialog.appendChild(buttonClose);

        //buttonExport
        buttonExport = document.createElement("button");
        buttonExport.appendChild(document.createTextNode("Export"));
        buttonExport.addEventListener("click", function () {
            download("timeKeeper - " + new Date().toString() + ".txt", "To import: open snake -> open console -> paste the following:\nlocalStorage[\"snake_timeKeeper\"]='" + localStorage["snake_timeKeeper"] + "'");
        });
        //dialog.appendChild(buttonExport); // Disabled export button, I don't want this.

        //add dialog
        div = document.querySelector("body");
        dialog.setAttribute("style", "outline: none;border-radius: 10px;z-index:10100;background:"+window.real_topbar_color+";color:white;font-family:Roboto,Arial;");
        dialog.style.outline = "none";
        dialog.classList.add("custom-dialog");

        div.insertBefore(dialog, div.firstChild)


    };

    //Function to find the snake code, and apply changes.
    window.timeKeeper.setup = function () {
        //just make storage, this used to also alter snake code
        window.timeKeeper.makeStorage();
        return;
    }

    //console.log("Enabling TimeKeeper")
    window.timeKeeper.setup();

    window.timeKeeper.hideDialog = function () {
        //remove dialog when click on ok
        child = document.getElementById("timeKeeperDialog");
        child.parentElement.removeChild(child);
        window.timeKeeper.dialogActive = false;
        document.getElementById('time-keeper').innerHTML = 'Show Details';

    }

    window.timeKeeper.toggleDialog = function () {
        if (window.timeKeeper.dialogActive) {
            window.timeKeeper.hideDialog();
        }
        else {
            window.timeKeeper.showDialog();
        }
    }

    /*
    tempID = "time-keeper"; // Inspect element on Timer and take jsname from it
    document.querySelector("button[jsname^=\"" + tempID + "\"]").addEventListener("click", (e) => {
        window.timeKeeper.toggleDialog();
    });
    TimerID = "yddQF"; // Inspect element on Timer and take jsname from it
    document.querySelector("div[jsname^=\"" + TimerID + "\"]").addEventListener("click", (e) => {
        window.timeKeeper.toggleDialog();
    });
    */
}

window.TimeKeeper.alterCode = function (code) {
    // TimeKeeper stuff start
    //change stepfunction to run gotApple(), gotAll() and death()

    // This is the full tick function
    func_regex = new RegExp(/tick\(\){[^\\]{1,4000}light=Math.max[\s\S]*?=function/)
    window.catchError(func_regex, code)
    let func = code.match(/tick\(\){[^\\]{1,4000}light=Math.max[\s\S]*?=function/)[0];
    StartOfNext = func.substring(func.lastIndexOf(";"), func.length);
    func = func.substring(0, func.lastIndexOf(";"));
    if (window.NepDebug) {
        console.log(func);
    }
    //let modeFunc = func.match(/1}\);[^%]{0,10}/)[0];
    //let modeFunc = func.match(/[a-zA-Z0-9$]{1,4}\([a-zA-Z0-9$]{1,4}.[a-zA-Z0-9$]{1,8},11\)&&/)[0];

    //modeFunc = modeFunc.substring(modeFunc.indexOf("(") + 1, modeFunc.lastIndexOf("("));
    //modeFunc = modeFunc.split('(')[0];
    //scoreFunc = func.match(/25\!\=\=this.[a-zA-Z0-9$]{1,4}/)[0]; // Need to figure this out
    scoreFuncVar = func.match(/[a-zA-Z0-9$]{1,4}\=\=\=\n?25/)[0].split('=')[0]; // Assuming he wanted just the "this.score"
    scoreFunc = func.match(`${window.escapeRegex(scoreFuncVar.replace('\n', ''))}=\n?this.[a-zA-Z0-9$]{1,6}`)[0].split('=')[1]
    ////console.log(scoreFunc)
    //scoreFunc = scoreFunc.substring(scoreFunc.indexOf("this."),scoreFunc.size);
    //timeFunc = func.match(/this.[a-zA-Z0-9$]{1,6}\*this.[a-zA-Z0-9$]{1,6}/)[0];
    // Now has weird vars that obfuscate, it's "this.ticks" * "this.{1,4}"
    timeFunc = func.match(/\([a-zA-Z0-9$]{1,6}\*[a-zA-Z0-9$]{1,6}\)/)[0];
    ticksVar = timeFunc.split('(')[1].split("*")[0];
    tickLengthVar = timeFunc.split("*")[1].split(')')[0];
    realTicks = func.match(`${escapeRegex(ticksVar)}=this.[a-zA-Z0-9$]{1,6}`)[0].split('=')[1];
    realTickLength = func.match(`${escapeRegex(tickLengthVar)}=this.[a-zA-Z0-9$]{1,6}`)[0].split('=')[1];
    realTimeFunc = `${realTicks}*${realTickLength}`;
    timeFunc = realTimeFunc;
    ////console.log(timeFunc)
    //ownFuncIndex = func.indexOf(func.match(/!1}\);\([^%]{0,10}/)[0])+5; // No idea how this ever worked
    ownFunc = "window.timeKeeper.gotApple(Math.floor(" + timeFunc + ")," + scoreFunc + ");"
    //func = func.slice(0, ownFuncIndex) + ownFunc + func.slice(ownFuncIndex); // Cool but no, just going to insert before the if 25 50 100 instead
    if25_regex = new RegExp(/if\([a-zA-Z0-9$]{1,4}\=\=\=\n?25/)
    ownFuncIndex = func.indexOf(func.match(if25_regex)[0]);
    func = func.slice(0, ownFuncIndex) + ownFunc + func.slice(ownFuncIndex);
    ////console.log(func);



    //change all apples to run gotAll()
    func = func.slice(0, func.indexOf("WIN.play()") + 11) + "window.timeKeeper.gotAll(Math.floor(" + timeFunc + ")," + scoreFunc + ")," + func.slice(func.indexOf("WIN.play()") + 11);

    death = func.match(/if\(this.[a-zA-Z0-9$]{1,4}\|\|this.[a-zA-Z0-9$]{1,4}\)/)[0];
    death = death.slice(death.indexOf("(") + 1, death.indexOf("|"));
    func = func.slice(0, func.indexOf("{") + 1) + "if(" + death + "){window.timeKeeper.death(Math.floor(" + timeFunc + ")," + scoreFunc + ");}" + func.slice(func.indexOf("{") + 1)
    //eval(func)

    code = code.assertReplace(func_regex, func + StartOfNext);

    ////console.log(code)

    //change start function to run gameStart() - The "start" here fails, but this section is required for the code to work -- not anymore, fixed it earlier.

    //func_regex = new RegExp(/[a-zA-Z0-9_$]{1,6}=function\(a,b\){if\(!\(a.[a-zA-Z0-9$]{1,4}[^\\]*?=function/)
    //func = code.match(/[a-zA-Z0-9_$]{1,6}=function\(a,b\){if\(!\(a.[a-zA-Z0-9$]{1,4}[^\\]*?=function/)[0];
    //StartOfNext = func.substring(func.lastIndexOf(";"), func.length);
    //func = func.substring(0, func.lastIndexOf(";"));
    //step = timeFunc.substring(0, timeFunc.indexOf("*"));
    //step = "a" + step.slice(step.indexOf("."));

    //func = func.slice(0, func.indexOf("{") + 1) + "if(" + step + "==0){window.timeKeeper.start();}" + func.slice(func.indexOf("{") + 1);
    //eval(func)
    //code = code.assertReplace(func_regex, func + StartOfNext);

    //add eventhandler to click on time
    //let id = code.match(/function\(a\){if\(\!a.[a-zA-Z0-9]{1,4}&&[^"]*?"[^"]*?"/)[0];
    //id = id.substring(id.indexOf("\"")+1, id.lastIndexOf("\""));
    //let id = code.match(/"[^"]{1,9}"[^"]{1,200}"00:00:000/)[0]; // Whatever this crap gives is the wrong thing sadly
    //window.TimerID = id.substring(1, id.indexOf("\"",2));
    //document.querySelector("div[jsname^=\""+id+"\"]").addEventListener("click",(e)=>{
    //	window.timeKeeper.showDialog();
    //});

    // TimeKeeper stuff end
    ////console.log(code)
    // Counter stuff
    return code;
}
window.Fruit = {};

window.Fruit.make = function () {

    // Code that runs before anything else here, loading variables, etc.
    // Recommended to use "window." for things
    window.new_fruit = [];

    new_fruit.push({ // Pudding
        "Normal": 'https://i.postimg.cc/5y7gwwGY/pudding-cr.png',
        "Pixel": 'https://i.postimg.cc/25nt4bX4/pudding-px.png',
        "Real": "https://i.postimg.cc/G2dDKJFp/pudding-real.png",
        "Poison_values": 'b,\'#eaca23\',\'#909090\',10',
    });
    new_fruit.push({ // Blueberries
        "Normal": 'https://i.postimg.cc/8cmVPfGd/blueberries.png',
        "Pixel": 'https://i.postimg.cc/Hkh1xCqN/px-blueberries.png',
        "Real": "https://i.postimg.cc/C19fhMVW/blueberries-real.png",
        "Poison_values": 'b,\'#2323ea\',\'#909090\',30',
    });
    new_fruit.push({ // Red Pepper
        "Normal": 'https://i.postimg.cc/BQqHMbDc/redpepper.png',
        "Pixel": 'https://i.postimg.cc/02BWLrzt/red-pepper-px.png',
        "Real": "https://i.postimg.cc/FHYFmYvp/real-red-pepper.png",
        "Poison_values": 'b,\'#910a22\',\'#909090\',20',
    });
    new_fruit.push({ // Lime
        "Normal": 'https://i.postimg.cc/k5kWcyFB/lime.png',
        "Pixel": 'https://i.postimg.cc/8cqg53Jr/px-lime.png',
        "Real": "https://i.postimg.cc/LXFmtS7M/lime-real.png",
        "Poison_values": 'b,\'#93ef13\',\'#909090\',70',
    });
    new_fruit.push({ // Green Grapes
        "Normal": 'https://i.postimg.cc/dQ78zXBm/green-grapes.png',
        "Pixel": 'https://i.postimg.cc/J79bmqYw/px-green-grapes.png',
        "Real": "https://i.postimg.cc/Ssknfc2d/green-grapes-real.png",
        "Poison_values": 'b,\'#93ef13\',\'#909090\',10',
    });
    new_fruit.push({ // Burger
        "Normal": 'https://i.postimg.cc/13m2Cr16/burger.png',
        "Pixel": 'https://i.postimg.cc/fW3Vjz67/px-burger.png',
        "Real": "https://i.postimg.cc/NjLY46Xk/burger-real.png",
        "Poison_values": 'b,\'#D99E82\',\'#D3D3D3\',40',
    });
    new_fruit.push({ // Cheese
        "Normal": 'https://i.postimg.cc/zXD1z9d6/trophy-03.png',
        "Pixel": 'https://i.postimg.cc/kMvmdnyW/px-trophy-03.png',
        "Real": "https://i.postimg.cc/BvK3WJM8/cheese-real.png",
        "Poison_values": 'b,\'#eaca23\',\'#909090\',30',
    });
    new_fruit.push({ // Fries
        "Normal": 'https://i.postimg.cc/YCMFFP1Q/french-fries.png',
        "Pixel": 'https://i.postimg.cc/MKDTCpQj/px-fries.png',
        "Real": "https://i.postimg.cc/cHBVZCYJ/fries-real.png",
        "Poison_values": 'b,\'#ffc107\',\'#909090\',30',
    });
    new_fruit.push({ // Hotdog
        "Normal": 'https://i.postimg.cc/bwYq44f1/hotdog.png',
        "Pixel": 'https://i.postimg.cc/zXFJt86J/px-trophy-17.png',
        "Real": "https://i.postimg.cc/Y0RcM953/hotdog-real.png",
        "Poison_values": 'b,\'#9b441c\',\'#909090\',30',
    });
    new_fruit.push({ // Pizza
        "Normal": 'https://i.postimg.cc/rwDXKnPj/pizza.png',
        "Pixel": 'https://i.postimg.cc/1tY1RKYq/pixil-frame-0-5.png',
        "Real": "https://i.postimg.cc/D0vyKmjv/pizza-real.png",
        "Poison_values": 'b,\'#FFCF86\',\'#909090\',30',
    });
    new_fruit.push({ // Steak
        "Normal": 'https://i.postimg.cc/J4n1dBsP/steak2.png',
        "Pixel": 'https://i.postimg.cc/cHmsNT56/steak-px.png',
        "Real": "https://i.postimg.cc/QxHZCjyX/steak-real.png",
        "Poison_values": 'b,\'#D99E82\',\'#909090\',70',
    });
    new_fruit.push({ // Coconut
        "Normal": 'https://i.postimg.cc/1XbSVygZ/coconut.png',
        "Pixel": 'https://i.postimg.cc/qBF45x1Z/coconut-px.png',
        "Real": "https://i.postimg.cc/25SY0gKJ/coconut-real.png",
        "Poison_values": 'b,\'#6d4c41\',\'#909090\',20',
    });
    new_fruit.push({ // These apples are shit
        "Normal": 'https://i.postimg.cc/66719KfJ/poop.png',
        "Pixel": 'https://i.postimg.cc/T2ZN1sty/poop-px.png',
        "Real": "https://i.postimg.cc/8c19z6kZ/poop-real.png",
        "Poison_values": 'b,\'#6d4c41\',\'#909090\',50',
    });
    new_fruit.push({ // Egg
        "Normal": 'https://i.postimg.cc/R0fR8mtv/egg.png',
        "Pixel": 'https://i.postimg.cc/pd0Nh5yP/px-egg.png',
        "Real": "https://i.postimg.cc/ncX0G22k/egg-real.png",
        "Poison_values": 'b,\'#e7dfa4\',\'#909090\',50',
    });
    new_fruit.push({ // Musa Banana
        "Normal": 'https://i.postimg.cc/3JsKcvnq/musa-banana.png',
        "Pixel": 'https://i.postimg.cc/bwSh0wPR/pixel-musa-banana.png',
        "Real": "https://i.postimg.cc/9QyN36bL/banana-musa.png",
        "Poison_values": 'b,\'#910a22\',\'#909090\',50',
    });
    new_fruit.push({ // Pear
        "Normal": 'https://i.postimg.cc/L6Y9DTBf/pear.png',
        "Pixel": 'https://i.postimg.cc/RZp3PRWz/pixel-pear.png',
        "Real": "https://i.postimg.cc/63dDtXTY/pear-real.png",
        "Poison_values": 'b,\'#93ef13\',\'#909090\',50',
    });
    new_fruit.push({ // Jacko
        "Normal": 'https://i.postimg.cc/rwMX5hbg/true-jacko.png',
        "Pixel": 'https://i.postimg.cc/Pfy42QXc/jacko-px.png',
        "Real": "https://i.postimg.cc/6qMfqtbw/jacko-real.png",
        "Poison_values": 'b,\'#fc8824\',\'#909090\',25',
    });
    new_fruit.push({ // Ice
        "Normal": 'https://i.postimg.cc/mrL8PJmK/ice.png',
        "Pixel": 'https://i.postimg.cc/hG2MTsw-v/ice-px.png',
        "Real": "https://i.postimg.cc/VLWDDqkh/ice-real.png",
        "Poison_values": 'b,\'#19ddf4\',\'#909090\',50',
    });
    new_fruit.push({ // Red Pudding
        "Normal": 'https://i.postimg.cc/15kNH2Y5/pudding-red.png',
        "Pixel": 'https://i.postimg.cc/C5rrFjzV/red-pudding-px.png',
        "Real": "https://i.postimg.cc/pTCF6hCJ/redpudding-real.png",
        "Poison_values": 'b,\'#ff3f3f\',\'#909090\',20',
    });
    new_fruit.push({ // Cabbage
        "Normal": 'https://i.postimg.cc/j59z8v1m/cabbage.png',
        "Pixel": 'https://i.postimg.cc/FR1ygwT0/cabbage-px.png',
        "Real": "https://i.postimg.cc/yd1GyLFv/cabbage-real.png",
        "Poison_values": 'b,\'#ff3f3f\',\'#909090\',20',
    });
    new_fruit.push({ // Heart
        "Normal": 'https://i.postimg.cc/8PGLRXCb/heart.png',
        "Pixel": 'https://i.postimg.cc/v8fW6wGB/pixel-heart.png',
        "Real": "https://i.postimg.cc/3NXmMmtp/real-heart.png",
        "Poison_values": 'b,\'#ff3f3f\',\'#909090\',20',
    });

    last_fruit_num = document.querySelector('#apple').children.length - 1;
    // Add fruit to menu
    for (let index = 0; index < new_fruit.length; index++) {
        document.querySelector('#apple').appendChild(uiImage(new_fruit[index].Normal));
    }

    // Secret fruit, can't be selected by menu
    // Order matters: Apple, Cherry, Strawberry, Carrot, Watermelon (then Skull)
    new_fruit.push({ // Golden Apple — 1 in 1m
        "Normal": 'https://i.postimg.cc/tJqR4tT6/gold-apple.png',
        "Pixel": 'https://i.postimg.cc/MGDg1gBQ/px-gold-apple.png',
        "Real": "https://i.postimg.cc/764WBzhL/golden-real.png",
        "Poison_values": 'b,\'#eaca23\',\'#909090\',20',
    });
    new_fruit.push({ // Golden Cherry — 1 in 5m
        "Normal": 'https://i.postimg.cc/sXDXkRP7/gold-cherry.png',
        "Pixel": 'https://i.postimg.cc/3RJRsHjG/px-gold-cherry.png',
        "Real": "https://i.postimg.cc/MTKTC80R/real-gold-cherry.png",
        "Poison_values": 'b,\'#eaca23\',\'#909090\',20',
    });
    new_fruit.push({ // Golden Strawberry — 1 in 10m
        "Normal": 'https://i.postimg.cc/CxLDtZkB/golden-strawberry.png',
        "Pixel": 'https://i.postimg.cc/9Q8TjWYx/px-golden-strawberry.png',
        "Real": "https://i.postimg.cc/tCzW2dZG/real-golden-strawberry.png",
        "Poison_values": 'b,\'#ff3f3f\',\'#909090\',20',
    });
    new_fruit.push({ // Golden Carrot — 1 in 50m
        "Normal": 'https://i.postimg.cc/g0Kjt0hv/gold-carrot.png',
        "Pixel": 'https://i.postimg.cc/yNTxpNRP/gold-px-carrot.png',
        "Real": "https://i.postimg.cc/s2JxH2Wm/gold-real-carrot.png",
        "Poison_values": 'b,\'#fc8824\',\'#909090\',20',
    });
    new_fruit.push({ // Golden Watermelon — 1 in 100m
        "Normal": 'https://i.postimg.cc/0NCjXNSc/gold-watermelon-1.png',
        "Pixel": 'https://i.postimg.cc/25xy95Wx/gold-px-watermelon-1.png',
        "Real": "https://i.postimg.cc/k5yGY5Sw/gold-real-watermelon-1.png",
        "Poison_values": 'b,\'#93ef13\',\'#909090\',20',
    });

    // Only used for Distinct Poison Skulls

    new_fruit.push({ // Skull
        "Normal": 'snake_arcade/v12/trophy_10.png',
        "Pixel": 'snake_arcade/pixel/px_trophy_10.png',
        "Real": "https://i.postimg.cc/prstgqbL/poison-skull.png",
        "Poison_values": 'b,\'#000000\',\'#000000\',0',
    });


}

window.Fruit.alterCode = function (code) {

    // Code to alter snake code here

    // Regex for a function that sets the src for count (I think)
    settings_src_regex = new RegExp(/[a-zA-Z0-9_$]{1,8}=function\([a-zA-Z0-9_$]{1,8}\){[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{0,8}\.[a-zA-Z0-9_$]{1,8}!==""&&/)
    settings_var = code.match(settings_src_regex)[0].split('.')[0].split('{')[1] // This is usually "a", the variable the function gets, which has settings in it
    settings_itself = code.match(settings_src_regex)[0].split('.')[1] // This is either the word "settings" or whatever google replaced it with that's obfuscated
    settings_src = code.match(settings_src_regex)[0].split('.')[2].split('!')[0] // This is the [] part in a.settings.[] - which has an src link to an image in it
    // ${settings_itself}

    get_graphics = new RegExp(/case "graphics":/);
    code = code.assertReplace(get_graphics, "$& window.graphics_selected=")
    get_fruit = new RegExp(/case "apple":/);
    code = code.assertReplace(get_fruit, "$& window.fruit_selected=")
    fruit_image = code.match(/\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}=`/gm)[0].split('(')[1].split('=')[0]

    new_realism_code = `
    if(window.fruit_selected >= ${last_fruit_num + 1}){
        fruit_index = window.fruit_selected - ${last_fruit_num + 1};
        switch (window.graphics_selected) {
            default:
            case 0:
                window.current_fruit_img = window.new_fruit[fruit_index].Normal;
                break;
            case 1:
                window.current_fruit_img = window.new_fruit[fruit_index].Pixel;
                break;
            case 2:
                window.current_fruit_img = window.new_fruit[fruit_index].Real;
        }
                
        ${fruit_image} = window.current_fruit_img;
        document.querySelector('[jsname="Jesp7b"]').src = window.current_fruit_img;
    }
    `
    
    rude_insert = new RegExp(/trophy_\${b}\.png`}`\)}/gm);
    code = code.assertReplace(rude_insert, "trophy_\${b}\.png`}`\); " + `${new_realism_code}` + " }");

    deathscreen_fruit = new RegExp(`\\(a.[a-zA-Z0-9_$]{1,8},${fruit_image}\\);`, 'g')
    code.match(deathscreen_fruit).forEach(element => {
        code.assertReplace(element, element + new_realism_code);
    });
    
    image_check = new RegExp(/b!==a\.src&&\(a\.src=b\)/gm)
    code = code.assertReplace(image_check, code.match(image_check)[0] + new_realism_code.replace(`${fruit_image} = window.current_fruit_img;`, ''))

    // Derive fruit ctor + image-cache prop (v11: S6/oa, v12: c7/ka — this.oa is the fruit array on v12)
    get_apple_make_func = new RegExp(/for\(a=0;a<24;a\+\+\)b=new ([a-zA-Z0-9_$]{1,8})\(this\.[a-zA-Z0-9_$]{1,8},[\s\S]*?,1,this\.([a-zA-Z0-9_$]{1,8}),/)
    apple_make_match = code.match(get_apple_make_func)
    func_name = apple_make_match[1]
    image_cache_name = apple_make_match[2]
    ip_grabber2 = new RegExp(/[a-zA-Z0-9_$]{1,8}\(b,c.[a-zA-Z0-9_$]{1,8},c.target,c.threshold\)/)
    poison_convert = code.match(ip_grabber2)[0].split('(')[0] // This function is what makes the poison grey in poison mode
    array_grabber = new RegExp(/c=[a-zA-Z0-9_$]{1,8}\[a\]/)
    array_name = code.match(array_grabber)[0].replace('c=', "").replace('[a]', "")

    add_fruit_array_last_func_regex = new RegExp(/.threshold\),this.[a-zA-Z0-9_$]{1,8}.push\([a-zA-Z0-9_$]{1,8}\)/);

    fruit_array_name = code.match(add_fruit_array_last_func_regex)[0].split('.')[2] // ${fruit_array_name}
    golden_index = `window.goldenIndex`

    add_fruit = `$&;this.${fruit_array_name}.push(b); // Add dummy for randomizer
  `
    for (let index = 0; index < window.new_fruit.length; index++) {
        current_fruit = window.new_fruit[index].Normal;
        current_fruit_px = window.new_fruit[index].Pixel;
        current_fruit_real = window.new_fruit[index].Real;
        current_fruit_poison_values = window.new_fruit[index].Poison_values; // ${current_fruit_poison_values}
        add_fruit_template = `
    b=new ${func_name}(this.${settings_itself},"${current_fruit}",1,this.${image_cache_name},"${current_fruit_px}","${current_fruit_real}");
    ${poison_convert}(${current_fruit_poison_values});
    this.${fruit_array_name}.push(b);`
        add_fruit = add_fruit + add_fruit_template;
    }


    add_gold = `
  ${golden_index} = this.${fruit_array_name}.length - 6; // Golden Apple (first of 5 secrets; Skull is last)
  `

    add_fruit = add_fruit + add_gold;

    // lots of hardcoded shit here, fix it later
    // call to func2 is what makes pudding poison grey, double push is to make the pudding load later on, janky workaround but works so I'll take it
    //console.log("Adding new fruit to stack")
    code = code.assertReplace(add_fruit_array_last_func_regex, add_fruit);

    // Too lazy to clean this code, it's "good enough" to leave untouched for now
    // Basically, adds an if statement anywhere fruit image is search to compensate for pudding existing
    // The if statements are janky and get be condensed
    // This fixes errors in console but doesn't "change" anything in-game
    shh_grabber = new RegExp(/[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.src=`https:\/\/www.google.com\/logos\/fnbx\/\${a\.path}`/);
    firstvar_name = code.match(shh_grabber)[0].split('.')[0];
    Hr_name = code.match(shh_grabber)[0].split('.')[1];

    new_shh_line = "if(" + firstvar_name + ".path.includes(\"postimg\"))" + firstvar_name + "." + Hr_name + ".src=" + firstvar_name + ".path;else $&";

    code = code.assertReplace(shh_grabber, new_shh_line);

    // Secret fruit rarities (checked later → rarer overwrites if both hit)
    gold_chance = `* 1000000) + 1) == 426017)` // Apple 1m
    cherry_chance = `* 5000000) + 1) == 421017)` // Cherry 5m
    super_chance = `* 10000000) + 1) == 4263018)` // Strawberry 10m
    carrot_chance = `* 50000000) + 1) == 4263019)` // Carrot 50m
    melon_chance = `* 100000000) + 1) == 4263217)` // Watermelon 100m

    apple_info_regex_improved = new RegExp(/[a-zA-Z0-9_$]{1,8}=function\(a,b,c\){a\.[a-zA-Z0-9_$]{1,8}\[b\]\.[a-zA-Z0-9_$]{1,8}=c;/)
    get_ka = code.match(apple_info_regex_improved)[0].split('.')[1].split('[')[0]
    get_pos = code.match(apple_info_regex_improved)[0].split('.')[2].split('=')[0]
    apple_info_regex = new RegExp(`a\.${get_ka}\\\[b\\\]\.${get_pos}`)

    // goldenIndex = Apple; +1 Cherry; +2 Strawberry; +3 Carrot; +4 Watermelon
    set_gold = `if(a.${get_ka}[b].type >= ${golden_index} && a.${get_ka}[b].type <= ${golden_index} + 4){a.${get_ka}[b].type = a.${get_ka}[b].old_type;}
    if(Math.floor((Math.random() ${gold_chance}{a.${get_ka}[b].old_type = a.${get_ka}[b].type; a.${get_ka}[b].type = ${golden_index};}
    if(Math.floor((Math.random() ${cherry_chance}{a.${get_ka}[b].old_type = a.${get_ka}[b].type; a.${get_ka}[b].type = ${golden_index} + 1;}
    if(Math.floor((Math.random() ${super_chance}{a.${get_ka}[b].old_type = a.${get_ka}[b].type; a.${get_ka}[b].type = ${golden_index} + 2;}
    if(Math.floor((Math.random() ${carrot_chance}{a.${get_ka}[b].old_type = a.${get_ka}[b].type; a.${get_ka}[b].type = ${golden_index} + 3;}
    if(Math.floor((Math.random() ${melon_chance}{a.${get_ka}[b].old_type = a.${get_ka}[b].type; a.${get_ka}[b].type = ${golden_index} + 4;}
    $&`
    code = code.assertReplace(apple_info_regex, set_gold)

    return code;
}
window.TopBar = {};

window.TopBar.make = function () {

  // Code that runs before anything else here, loading variables, etc.
  // Recommended to use "window." for things
  window.getImgFromElement = function getImgFromElement(element) {
    return element.replace('class=', '').replace('width=', '').replace('height=', '').split('=')[1].split('"')[1];
  }

 // window.topbar_icons = true;
  window.count_setting = 0;
  window.speed_setting = 0;

  window.toggle_topbar_icons = function () {
    window.pudding_settings.TopBar = !window.pudding_settings.TopBar;
  }

}

window.TopBar.alterCode = function (code) {

  window.count_img_arr = Array.from(document.querySelector('#count').children).map(el=>el.src);
  window.speed_img_arr = Array.from(document.querySelector('#speed').children).map(el=>el.src);

  count_regex = new RegExp(/case "count"\:[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}/)
  speed_regex = new RegExp(/case "speed"\:[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}/)
  size_regex = new RegExp(/case "size"\:[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}/)

  count_ref = code.match(count_regex)[0].split('.')[2]
  speed_ref = code.match(speed_regex)[0].split('.')[2]
  size_ref = code.match(size_regex)[0].split('.')[2]

  settings_reference = code.match(count_regex)[0].split(':')[1].split('.')[0] + '.' + code.match(count_regex)[0].split('.')[1]

  //set_count_code = `$&${count_var}=`
  //set_speed_code = `$&${speed_var}=`

  code = code.assertReplace(/switch\(b\){case "apple"\:/, `window.set_ref = ${settings_reference}; $&`);

  count_var = `window.set_ref.${count_ref}`
  speed_var = `window.set_ref.${speed_ref}`
  size_var = `window.set_ref.${size_ref}`


  //code = code.assertReplace(count_regex, set_count_code);
  //code = code.assertReplace(speed_regex, set_speed_code);

  fruit_jsname = document.querySelector('[src$="apple_00.png"]').getAttribute("jsname")
  fruit_src = `document.querySelector('[jsname="${fruit_jsname}"]').src `

  window.mute_divs = document.querySelectorAll('[aria-label="Mute"]');
  window.mute_default_innerHTML = [window.mute_divs[0].innerHTML, window.mute_divs[1].innerHTML]
  window.mute_speed_element = document.createElement('img');
  window.mute_speed_element.classList.add('EFcTud')
  window.mute_speed_element.src = "https://www.google.com/logos/fnbx/snake_arcade/v3/speed_00.png"
  window.mute_speed_element.style.padding = '0px';
  window.mute_speed_copy = window.mute_speed_element.cloneNode(true);

  window.control_mute_img = function control_mute_img(TopBar, SpeedSrc) {
    if (TopBar) {
      for (let index = 0; index < window.mute_divs.length; index++) {
        const element = window.mute_divs[index];
        element.innerHTML = ''
      }
      window.mute_speed_element.src = SpeedSrc
      window.mute_speed_copy.src = SpeedSrc
      window.mute_divs[0].appendChild(window.mute_speed_element)
      window.mute_divs[1].appendChild(window.mute_speed_copy)
      return;
    }
    for (let index = 0; index < window.mute_divs.length; index++) {
      const element = window.mute_divs[index];
      element.innerHTML = window.mute_default_innerHTML[index]
    }
  }

  reset_regex = new RegExp(/;this\.reset\(\)\}\}/)

  set_on_reset = `;
  if (window.pudding_settings.TopBar && !window.daily_challenge) {
    ${fruit_src} = window.count_img_arr[${count_var}]
  }
  window.control_mute_img(window.pudding_settings.TopBar, window.speed_img_arr[${speed_var}])
  if(window.daily_challenge){
    window.control_mute_img(false, window.speed_img_arr[${speed_var}])
  }
  $&`
  code = code.assertReplace(reset_regex, set_on_reset)

  window.set_ref = {};
  eval(speed_var + `=0`)
  eval(count_var + `=0`)
  eval(size_var + `=0`)

  return code;
}
window.SnakeColor = {};

window.SnakeColor.make = function () {

    // Code that runs before anything else here, loading variables, etc.
    // Recommended to use "window." for things

}

window.SnakeColor.alterCode = function (code) {
try{
    // Code to alter snake code here
    snake_colors_regex = new RegExp(/[a-zA-Z0-9_$]{1,6}[^]?=[^]?\[\["#4E7CF6","#17439F"\][^]*?\]\]/);
    yinyang_colors_regex = new RegExp(/\[5,4,7,7,1,2,0,3,9,8,0,14,15,15,11,\n?12,17,16\]/)

    snake_colors = [];

    snake_colors.push({ // Black 18
        "Icon": 'https://i.postimg.cc/3x9SPxYJ/dark.png',
        "Colors": '["#222222","#000000"]',
        "YinYang": '9',
    });
    snake_colors.push({ // Neon Red 19
        "Icon": 'https://i.postimg.cc/0yy5gnLg/red.png',
        "Colors": '["#FF0000","#FF0000"]',
        "YinYang": '21',
    });
    snake_colors.push({ // Neon Blue 20
        "Icon": 'https://i.postimg.cc/dtvt6w6V/blue.png',
        "Colors": '["#0000FF","#0000FF"]',
        "YinYang": '6',
    });
    snake_colors.push({ // Neon Green 21
        "Icon": 'https://i.postimg.cc/KvNcsw-pr/green.png',
        "Colors": '["#00FF00","#00FF00"]',
        "YinYang": '19',
    });
    snake_colors.push({ // White Black 22
        "Icon": 'https://i.postimg.cc/RFRbz7k8/white-black.png',
        "Colors": '["#FFFFFF","#000000"]',
        "YinYang": '23',
    });
    snake_colors.push({ // Black White 23
        "Icon": 'https://i.postimg.cc/vTZ281Mm/black-white.png',
        "Colors": '["#222222","#FFFFFF"]',
        "YinYang": '22',
    });
    snake_colors.push({ // Nep Purple 24
        "Icon": 'https://i.postimg.cc/t4bxfYzt/planeptune.png',
        "Colors": '["#6759B9", "#5B50B0"]',
        "YinYang": '25',
    });
    snake_colors.push({ // Noire Blue 25
        "Icon": 'https://i.postimg.cc/T2rc2X5Y/Lastation-Logo.png',
        "Colors": '["#0059b9", "#0050b0"]',
        "YinYang": '24',
    });
    snake_colors.push({ // Pitch Black 26
        "Icon": 'https://i.postimg.cc/R0R1ZMNx/dark-night.png',
        "Colors": '["#000000","#000000"]',
        "YinYang": '9',
    });
    snake_colors.push({ // Purple Heart 27
        "Icon": 'https://i.postimg.cc/8zCJj2JH/nep-color.png',
        "Colors": '["#ffaaff","#ff77ff"]',
        "YinYang": '24',
    });
    snake_colors.push({ // Brown 28
        "Icon": 'https://i.postimg.cc/fLWFTZGj/brown-snake.png',
        "Colors": '["#964B00","#7B3F00"]',
        "YinYang": '6',
    });
    snake_colors.push({ // Extra Brown 29
        "Icon": 'https://i.postimg.cc/nh5XvPCt/browner-snake.png',
        "Colors": '["#4B2D08","#1B1D08"]',
        "YinYang": '6',
    });
    snake_colors.push({ // Gold 30
        "Icon": 'https://i.postimg.cc/qvWmwKmt/gold-snake.png',
        "Colors": '["#b59b1d","#947f19"]',
        "YinYang": '31',
    });
    snake_colors.push({ // Silver 31
        "Icon": 'https://i.postimg.cc/jjNMFj9M/silver-snake.png',
        "Colors": '["#87868c","#555652"]',
        "YinYang": '30',
    });
    snake_colors.push({ // Dark Teal 32
        "Icon": 'https://i.postimg.cc/mD2Cqq88/dark-teal.png',
        "Colors": '["#667da4","#4c5a73"]',
        "YinYang": '30',
    });
    snake_colors.push({ // Hotpink 33
        "Icon": 'https://i.postimg.cc/HLgZb9pz/hotpink.png',
        "Colors": '["#bd2862","#a72356"]',
        "YinYang": '34',
    });
    snake_colors.push({ // Navy Blue 34
        "Icon": 'https://i.postimg.cc/wMZFMhfh/navy-blue.png',
        "Colors": '["#000080","#000080"]',
        "YinYang": '33',
    });

    colors_build = code.match(snake_colors_regex)[0].replace(']]', ']');
    yinyang_colors_build = code.match(yinyang_colors_regex)[0].replace(']', '');

    document.querySelector('#color').removeChild(document.querySelector('#color').lastChild);

    for (let index = 0; index < snake_colors.length; index++) {
        document.querySelector('#color').appendChild(uiImage(snake_colors[index].Icon));
        colors_build = colors_build + ',' + snake_colors[index].Colors;
        yinyang_colors_build = yinyang_colors_build + ',' + snake_colors[index].YinYang;

    }

    window.regularColors = document.querySelector('#color').children.length;

    window.rainbowAlts = {
        0: { name: "Default Rainbow", set: ['#4E7CF6', '#5499C7', '#AF7AC5', '#E74C3C', '#F39C12', '#CCC31C', '#27AE60',], icon: "https://www.google.com/logos/fnbx/snake_arcade/v5/color_10.png", yinyang: 10 },
        1: { name: "Pride", set: ['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787',], icon: "https://i.postimg.cc/htQpV5jn/pride.png", yinyang: 8 },
        2: { name: "Bisexual", set: ['#D60270','#D60270', '#9B4F96', '#0038A8','#0038A8',], icon: "https://i.postimg.cc/L6xjhB3p/bi.png", yinyang: 5 },
        3: { name: "Transgender", set: ['#55CDFC','#55CDFC', '#ffffff','#ffffff', '#F7A8B8','#F7A8B8',], icon: "https://i.postimg.cc/qqWqCLQm/trans.png", yinyang: 9 },
        4: { name: "Pansexual", set: ['#FF1B8D', '#FF1B8D', '#FFDA00','#FFDA00', '#1BB3FF','#1BB3FF',], icon: "https://i.postimg.cc/FH3d32M0/pan.png", yinyang: 5 },
        5: { name: "Asexual", set: ['#000000', '#a3a3a3', '#ffffff', '#810082',], icon: "https://i.postimg.cc/6QCPs5DT/asexual.png", yinyang: 4 },
        6: { name: "Aromantic", set: ['#3AA63F', '#A8D47A', '#FFFFFF', '#AAAAAA', '#000000',], icon: "https://i.postimg.cc/L6fQgs8D/aromantic.png", yinyang: 4 },
        7: { name: "Intersex", set: ['#FFDA00','#FFDA00', '#7A00AC','#7A00AC',], icon: "https://i.postimg.cc/D04Y7rZQ/intersex.png", yinyang: 3 },
        8: { name: "Lesbian", set: ['#D62900', '#FF9B55', '#FFFFFF', '#D461A6', '#A50062',], icon: "https://i.postimg.cc/sfBVMbGm/lesbian.png", yinyang: 1 },
        9: { name: "Non-binary", set: ['#000000', '#fff433', '#ffffff', '#9b59d0',], icon: "https://i.postimg.cc/gk2kYrqw/nonbinary.png", yinyang: 3 },
        10: { name: "Monochrome", set: ['#808080', '#9E9E9E', '#808080', '#616161',], icon: "https://i.postimg.cc/QNw9nQr8/monochrome.png", yinyang: 0 },
        11: { name: "Catalonia", set: ['#0f47af', '#ffffff', '#0f47af' ,'#ffd700', '#cc0000', '#ffd700', '#cc0000'], icon: "https://i.postimg.cc/HLNtB0mF/catalonia-Snake.png", yinyang: 10 },
    }

    for (var j = 1; j < Object.keys(window.rainbowAlts).length; j++) {
        document.querySelector('#color').appendChild(uiImage(window.rainbowAlts[j].icon));
    }

    window.allColorsLength = document.querySelector('#color').children.length;

    //console.log(document.querySelector('#color').children.length)

    // Add the rainbow snake color option back
    document.querySelector('#color').appendChild(uiImage('https://www.google.com/logos/fnbx/snake_arcade/v5/color_18.png'));

    colors_build = colors_build + ']';
    yinyang_colors_build = yinyang_colors_build + ']';

    //console.log("Adding new snake colors")
    catchError(snake_colors_regex, code)
    catchError(yinyang_colors_regex, code)

    code = code.assertReplace(snake_colors_regex, colors_build)
    code = code.assertReplace(yinyang_colors_regex, yinyang_colors_build)

    if (window.rainbowSnake === undefined) {
        window.rainbowSnake = ['#4E7CF6', '#5499C7', '#AF7AC5', '#E74C3C', '#F39C12', '#CCC31C', '#27AE60',];
    }
    if (window.rainbowYinYang === undefined) {
        window.rainbowYinYang = ['#808080', '#9E9E9E', '#808080', '#616161',];
    }

    default_rainbow_regex = new RegExp(/[a-zA-Z0-9_$]{1,6}[^]?=[^]?"#4E7CF6 #5499C7 #AF7AC5 #E74C3C #F39C12 #CCC31C #27AE60"\.split\(" "\)/)
    default_rainbow_array = code.match(default_rainbow_regex)[0].split('=')[0]

    yinyang_rainbow_regex = new RegExp(/[a-zA-Z0-9_$]{1,6}[^]?=[^]?\["#808080","#9E9E9E","#808080","#616161"\]/)
    yinyang_rainbow_array = code.match(yinyang_rainbow_regex)[0].split('=')[0]

    window.isRainbow = false;

    color_regex = new RegExp(/case "color"\:/)
    color_get_code = `case "color":
    window.isRainbow = false;
    window.randomColor = d==window.allColorsLength ? true : false;
    if(d!=window.allColorsLength && (d==10 || d>window.regularColors-1)){
        if(d!=10){window.snakeRainbowOverride = (d - (window.regularColors)) + 1;}
        else{window.snakeRainbowOverride=0}
        window.isRainbow = true;
    }`
    catchError(color_regex, code)

    code = code.assertReplace(color_regex, color_get_code);

    rainbow_usage_regex = new RegExp(`{var [a-zA-Z0-9_$]{1,6}\\\=[a-zA-Z0-9_$]{1,6}\\\?[a-zA-Z0-9_$]{1,6}\\:${window.escapeRegex(default_rainbow_array)}\\\;`)
    catchError(rainbow_usage_regex, code)
    if (window.NepDebug) {
        console.log(code.match(rainbow_usage_regex)[0])
    }

    window.snakeRainbowOverride = 0;

    rainbow_code = `{
    ${default_rainbow_array} = window.rainbowAlts[window.snakeRainbowOverride].set;
    ${yinyang_rainbow_array} = window.rainbowAlts[window.rainbowAlts[window.snakeRainbowOverride].yinyang].set;
    ${code.match(rainbow_usage_regex)[0].split('{')[1]}
    `

    code = code.assertReplace(rainbow_usage_regex, rainbow_code)

    // https://www.google.com/logos/fnbx/snake_arcade/v5/color_10.png

    snake_face_regex = new RegExp(/[a-zA-Z0-9_$]{1,6}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,6}=?=?=?1?0?\?\([a-zA-Z0-9_$]{1,6}\.[a-zA-Z0-9_$]{1,6}=[a-zA-Z0-9_$]{1,6}\[0\]\[0\]/)
    catchError(snake_face_regex, code)
    snake_face_code = code.match(snake_face_regex)[0]
    snake_face_code = `window.isRainbow ? ${code.match(snake_face_regex)[0].split('?')[1].split('=')[0]}= window.isRainbow ? window.rainbowAlts[window.snakeRainbowOverride].set[0] : ${code.match(snake_face_regex)[0].replace("===10","").split('?')[1].split('=')[1]}`

    //console.log(snake_face_code)
    code = code.assertReplace(snake_face_regex, snake_face_code)
    //code = code.assertReplace(/a\.Yd=qN\[0\]\[1\];/, `a.Yd=10 === a.settings.Aa ? window.rainbowAlts[window.snakeRainbowOverride].set[0] : qN[0][1];`)
    //code = code.assertReplace(code.match(`${default_rainbow_array}\\\[0\\\]`)[0], `window.rainbowAlts[window.snakeRainbowOverride].set[0]`)
    //console.log(code)
    // ["#4E7CF6","#17439F"]
    //code = code.assertReplace(/0===a\.settings\.Aa\|\|/, "")
    //code = code.assertReplace(/0===a\.settings\.Aa\|\|/, "")
    //code = code.assertReplace(/\["#4E7CF6","#17439F"\]/, `["#FFFFFF","#FFFFFF"]`)

    snake_face2_reg = new RegExp(/\|\|1?0?=?=?=?[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}=?=?=?=1?0?\)[a-zA-Z0-9_$]{1,8}=[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8},[a-zA-Z0-9_$]{1,8}\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}/gm)
    snakeface2code = '&&!window.randomColor&&!window.isRainbow)' + code.match(snake_face2_reg)[0].split(')')[1]
    code = code.assertReplace(snake_face2_reg, snakeface2code)

    rainbow_bool_regex = new RegExp(/[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}===10/g)
    catchError(rainbow_bool_regex, code)

    is_rainbow_matches = code.match(rainbow_bool_regex).length;
    for (let index = 0; index < is_rainbow_matches; index++) {
        const element = code.match(rainbow_bool_regex)[0];
        snake_color_num = element.split('=')[0]
        make_me_different = element.split('=')[0] + `==10`
        new_rainbow_bool = make_me_different + `||window.isRainbow`
        code = code.assertReplace(element, new_rainbow_bool)

    }

    random_color_super_regex = new RegExp(/else{[a-zA-Z0-9_$]{1,8}=[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8};var c=a.[a-zA-Z0-9_$]{1,8}.[a-zA-Z0-9_$]{1,8}.[a-zA-Z0-9_$]{1,8};/)

    random_color_super_reset = `$&
    if(window.randomColor){window.isRainbow = window.getRandomBoolean() ? window.getRandomBoolean() : false;}
    if(window.randomColor&&window.isRainbow){
        window.snakeRainbowOverride = getRandomInt(0, Object.keys(window.rainbowAlts).length-1);
        c = window.rainbowAlts[window.snakeRainbowOverride].set[0];
    }`

    catchError(random_color_super_regex, code)
    code = code.assertReplace(random_color_super_regex, random_color_super_reset);

    //rainbow_bool_code = code.match(rainbow_bool_regex)[0] + "||window.isRainbow"
    //code = code.assertReplaceAll(rainbow_bool_regex, rainbow_bool_code)

    function PopulateSnakeColorsDropdown() {
        // Populate dropdown

        var selectElement = document.getElementById('snakePride');
        selectElement.addEventListener("change", function () {
            window.snakeRainbowOverride = document.getElementById('snakePride').value;
            if (window.NepDebug) {
                console.log(window.snakeRainbowOverride)
            }
        });
        for (var j = 1; j < Object.keys(window.rainbowAlts).length; j++) {
            var color = window.rainbowAlts[j];
            var option = document.createElement('option');
            option.value = j;
            option.textContent = color.name;
            selectElement.appendChild(option);
        }

    }

    PopulateSnakeColorsDropdown()

    // This fixes gate color issue, hardcoded is a poor choice but it works
    // Better search: /a=_....\(a\)/ -> 3 dots should match some function name that sets gate color or something similar
    code = code.assertReplace(/a=_.([a-zA-Z0-9_$]{1,8})\(a\);a=parseInt/,`
        if (typeof a === 'undefined') {
            a = "#4E7CF6";
        }
        a=_.$1(a);a=parseInt`);
        console.log("spawn yay");
}catch(error){
    console.error("error in running counter: "+error);
}

    //code = code.assertReplace(/this\.zd=qN\[0\]\[0\];/,`this.zd=qN[0][0];debugger;`)

    return code;
}
window.SettingsSaver = {};

window.SettingsSaver.make = function () {
    const COUNT_KEYS = ["0", "1", "2", "3", "4", "5", "6"];
    const COUNT_MINIMA = { 0: 1, 1: 3, 2: 5, 3: 10, 4: 6, 5: 24, 6: 5 };

    function defaultPoolForCount(count) {
        const min = COUNT_MINIMA[count] || 1;
        const pool = [];
        for (let i = 0; pool.length < min; i++) {
            if (i === 24) continue; // skip fruit bowl
            pool.push(i);
        }
        return pool;
    }

    function migrateSelectedPairsByCount(settings) {
        if (settings.SelectedPairsByCount && typeof settings.SelectedPairsByCount === "object") {
            for (const key of COUNT_KEYS) {
                if (!Array.isArray(settings.SelectedPairsByCount[key])) {
                    settings.SelectedPairsByCount[key] = defaultPoolForCount(Number(key));
                }
            }
            return settings;
        }

        const legacy = Array.isArray(settings.SelectedPairs) ? settings.SelectedPairs.map(Number) : null;
        settings.SelectedPairsByCount = {};
        for (const key of COUNT_KEYS) {
            const count = Number(key);
            const min = COUNT_MINIMA[count];
            // Seed each count with only its own minimum slice of the old shared list
            const seed = legacy ? legacy.slice(0, min) : defaultPoolForCount(count);
            const pool = Array.from(new Set(seed.map(Number).filter((n) => !isNaN(n) && n !== 24)));
            for (let i = 0; pool.length < min; i++) {
                if (i === 24) continue;
                if (!pool.includes(i)) pool.push(i);
            }
            settings.SelectedPairsByCount[key] = pool;
        }
        return settings;
    }

    window.loadSettings = function () {
        let pudding_settings = localStorage.getItem('PuddingSettings');
        if (pudding_settings === null) {
            pudding_settings = {
                Skull: false,
                SokoGoals: true,
                InputDisplay: false,
                TopBar: true,
                SpeedInfo: false,
                PortalPairs: false,
                AlwaysUniqueFruit: false,
                SelectedPairs: defaultPoolForCount(0),
                SelectedPairsByCount: {},
                DisableRandom: false,
                randomizeThemeApple: false,
                ScrollBar: false
            };
            for (const key of COUNT_KEYS) {
                pudding_settings.SelectedPairsByCount[key] = defaultPoolForCount(Number(key));
            }
        } else {
            pudding_settings = JSON.parse(pudding_settings);
            if (typeof pudding_settings.PortalPairs !== 'boolean') {
                pudding_settings.PortalPairs = false;
            }
            if (typeof pudding_settings.AlwaysUniqueFruit !== 'boolean') {
                pudding_settings.AlwaysUniqueFruit = false;
            }
            if (typeof pudding_settings.ScrollBar !== 'boolean') {
                pudding_settings.ScrollBar = false;
            }
            pudding_settings = migrateSelectedPairsByCount(pudding_settings);
            pudding_settings.SelectedPairs = pudding_settings.SelectedPairsByCount["0"];
        }

        return pudding_settings;
    }
    window.pudding_settings = window.loadSettings();

    window.saveSettings = function () {
        const s = window.pudding_settings;
        if (typeof s !== 'undefined' &&
            typeof s.Skull !== 'undefined' &&
            typeof s.SokoGoals !== 'undefined' &&
            typeof s.InputDisplay !== 'undefined' &&
            typeof s.TopBar !== 'undefined' &&
            typeof s.SpeedInfo !== 'undefined' &&
            typeof s.PortalPairs !== 'undefined' &&
            typeof s.DisableRandom !== 'undefined' &&
            typeof s.randomizeThemeApple !== 'undefined'
        ) {
            localStorage.setItem('PuddingSettings', JSON.stringify(s));
        }
    }
}

window.SettingsSaver.alterCode = function (code) {
    reset_regex = new RegExp(/;this\.reset\(\)\}\}/)

    settings_reset_code = `
    saveSettings();
    $&`

    catchError(reset_regex, code)
    code = code.assertReplace(reset_regex, settings_reset_code);

    stop_regex = new RegExp(/stop\(a\){/)
    catchError(stop_regex, code)
    save_settings_code = `stop\(a\){saveSettings();`

    code = code.assertReplace(stop_regex, save_settings_code);
    return code;
}
window.SpeedInfo = {};

window.SpeedInfo.make = function () {

    window.isBridge = (Math.floor((Math.random()* 50) + 1) != 32);

    // First game must be CE, the other is the normal game
    const gameIDs = ["o1y9pyk6", "9dow0go1"];
    window.first_time_call = true;
    window.requestsMade = 0;

    // FastSnakeStats runs-derived WR timelines (preferred over legacy daily/ snapshots)
    const FASTSNAKE_BASE = "https://raw.githubusercontent.com/DarkSnakeGang/FastSnakeStats/refs/heads/main/time-travel-cache";
    const RUNS_DATES_URL = `${FASTSNAKE_BASE}/metadata/available-dates-runs.json`;
    const TIMELINES_URL = `${FASTSNAKE_BASE}/runs-derived/wr-timelines.json`;
    const CACHE_STALE_THRESHOLD = 3 * 60 * 60 * 1000; // 3 hours

    let timelinesData = null;
    let runsDatesMeta = null;
    let lastTimelinesUpdate = 0;
    let timelinesPromise = null;

    function sleepFor(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function getJSON(url) {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
        return res.json();
    }

    // Binary search: latest WR snapshot on or before `date` (same as FastSnakeStats GitHubCacheFetcher)
    function wrAsOf(timeline, date) {
        if (!timeline || !timeline.length) return [];
        let lo = 0;
        let hi = timeline.length - 1;
        let best = -1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (timeline[mid].d <= date) {
                best = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return best >= 0 ? timeline[best].runs : [];
    }

    function expandCompactRun(r, date) {
        const isGuest = r.g || String(r.p).indexOf("guest:") === 0;
        return {
            id: r.id,
            date: date,
            weblink: r.w,
            times: { primary: r.t, primary_t: r.pt },
            players: {
                data: [
                    isGuest
                        ? {
                            rel: "guest",
                            name: r.n,
                            "name-style": r.ns || {
                                style: "solid",
                                color: { dark: "#9e9e9e", light: "#9e9e9e" },
                            },
                        }
                        : {
                            rel: "user",
                            id: r.p,
                            names: { international: r.n },
                            weblink: "https://www.speedrun.com/user/" + r.p,
                            "name-style": r.ns || undefined,
                        },
                ],
            },
            values: {},
        };
    }

    async function loadRunsDerived() {
        if (
            timelinesData &&
            runsDatesMeta &&
            Date.now() - lastTimelinesUpdate < CACHE_STALE_THRESHOLD
        ) {
            const date = runsDatesMeta.availableDates[runsDatesMeta.availableDates.length - 1];
            return { timelines: timelinesData, date };
        }
        if (timelinesPromise) return timelinesPromise;

        timelinesPromise = (async () => {
            if (window.NepDebug) {
                console.log("Loading FastSnakeStats runs-derived timelines...");
            }
            const [dates, timelines] = await Promise.all([
                getJSON(RUNS_DATES_URL),
                getJSON(TIMELINES_URL),
            ]);
            if (!dates.availableDates || !dates.availableDates.length) {
                throw new Error("No available dates in runs-derived metadata");
            }
            if (!timelines.boards) {
                throw new Error("runs-derived timelines missing boards");
            }
            runsDatesMeta = dates;
            timelinesData = timelines;
            lastTimelinesUpdate = Date.now();
            window.requestsMade += 2;
            const date = dates.availableDates[dates.availableDates.length - 1];
            if (window.NepDebug) {
                console.log(`Runs-derived ready as of ${date} (${Object.keys(timelines.boards).length} boards)`);
            }
            return { timelines, date };
        })().finally(() => {
            timelinesPromise = null;
        });

        return timelinesPromise;
    }

    // Look up one category key as of the latest runs-derived date
    async function getRecordForKey(cacheKey) {
        const { timelines, date } = await loadRunsDerived();
        const top = wrAsOf(timelines.boards[cacheKey], date);
        return {
            date,
            success: top.length > 0,
            runs: top.map((r) => expandCompactRun(r, date)),
        };
    }

    // Preload timelines (startup / legacy hooks)
    async function getLatestCacheData() {
        const { timelines, date } = await loadRunsDerived();
        return { date, source: "runs-derived", boards: timelines.boards };
    }

    // Legacy function for compatibility (now uses runs-derived)
    window.makeAPIrequest = function (requestURL, callback) {
        if (window.NepDebug) {
            console.log("Legacy API request called, using runs-derived instead");
        }
        getLatestCacheData().then(data => {
            if (callback && typeof callback === "function") {
                callback(data);
            }
        }).catch(error => {
            if (window.NepDebug) {
                console.error("Runs-derived fetch failed:", error);
            }
            if (callback && typeof callback === "function") {
                callback({ data: { runs: [] } });
            }
        });
    }

    // Legacy function for compatibility
    window.getGameDetails = function () {
        if (window.NepDebug) {
            console.log("getGameDetails called - using runs-derived instead");
        }
        getLatestCacheData().catch(error => {
            if (window.NepDebug) {
                console.error("Failed to initialize runs-derived data:", error);
            }
        });
    }

    window.modeToTxt = {
        0: { name: "Classic" },
        1: { name: "Wall" },
        2: { name: "Portal" },
        3: { name: "Cheese" },
        4: { name: "Borderless" },
        5: { name: "Twin" },
        6: { name: "Winged" },
        7: { name: "Yin Yang" },
        8: { name: "Key" },
        9: { name: "Sokoban" },
        10: { name: "Poison" },
        11: { name: "Dimension" },
        12: { name: "Minesweeper" },
        13: { name: "Statue" },
        14: { name: "Light" },
        15: { name: "Shield" },
        16: { name: "Arrow" },
        17: { name: "Hotdog" },
        18: { name: "Magnet" },
        19: { name: "Gate" },
        20: { name: "Bridge" },
        21: { name: "Peaceful" },
        22: { name: "Blender" },
    }

    window.countToTxt = {
        0: { name: "1 Apple" },
        1: { name: "3 Apples" },
        2: { name: "5 Apples" },
        3: { name: "10 Apples" },
        4: { name: "Dice" },
        5: { name: "Bomb" },
        6: { name: "Tally" },
    }

    window.sizeToTxt = {
        0: { name: "Standard" },
        1: { name: "Small" },
        2: { name: "Large" },
    }

    window.speedToTxt = {
        0: { name: "Normal" },
        1: { name: "Fast" },
        2: { name: "Slow" },
    }

    daily_button.addEventListener("click", function() {
        SpeedInfoUpdate().catch(e=>console.error('SpeedInfoUpdate error:',e))
        EmptyAll()
      });

    window.getRecordSRC = async function (level) {

        if(window.daily_challenge){
            EmptyAll();
            return;
        }

        if (!window.pudding_settings.SpeedInfo) {
            // For those that don't want to see speedrun info, to keep the game stable without api calls
            EmptyAll();
            return;
        }

        // Modes list
        CLASSIC = 0
        WALL = 1
        PORTAL = 2
        CHEESE = 3
        BORDERLESS = 4
        TWIN = 5
        WINGED = 6
        YINYANG = 7
        KEY = 8
        SOKO = 9
        POISON = 10
        DIMENSION = 11
        MINESWEEPER = 12
        STATUE = 13
        LIGHT = 14
        SHIELD = 15
        ARROW = 16
        HOTDOG = 17
        MAGNET = 18
        GATE = 19
        BRIDGE = 20
        PEACEFUL = 21
        BLENDER = 22

        // Speed list
        DEFAULT_SPEED = 0
        FAST = 1
        SLOW = 2

        // Count settings
        ONE_APPLE = 0;
        THREE_APPLES = 1;
        FIVE_APPLES = 2;
        TEN_APPLES = 3;
        DICE = 4;
        BOMB = 5;


        let count = window.timeKeeper.getCurrentSetting("count");
        let speed = window.timeKeeper.getCurrentSetting("speed");
        let size = window.timeKeeper.getCurrentSetting("size");
        let mode = window.CurrentModeNum;

        const highscore_modes = [WALL, PORTAL, KEY, SOKO, POISON, MINESWEEPER, STATUE, SHIELD, HOTDOG, GATE, CHEESE, BRIDGE];

        // > 6 = beyond Tally (MoreMenu / custom counts)
        if (size > 2 || count > 6) {
            EmptyAll();
            return;
        }
        if (mode == BLENDER) {
            EmptyAll();
            return;
        }
        if (!highscore_modes.includes(mode) && level == "H") {
            HandleHighscore("Empty")
            return;
        }

        // Build cache key based on FastSnakeStats format
        const modeName = window.modeToTxt[mode].name;
        const countName = window.countToTxt[count].name;
        const speedName = window.speedToTxt[speed].name;
        const sizeName = window.sizeToTxt[size].name;
        
        // Determine category name
        let categoryName;
        if (level === "H") {
            categoryName = "High Score";
        } else {
            categoryName = level + " Apples";
        }

        // Build the cache key in FastSnakeStats format
        const cacheKey = `${countName}|${speedName}|${sizeName}|${modeName}|${categoryName}`;

        if (window.NepDebug) {
            console.log(`Looking for runs-derived key: ${cacheKey}`);
        }

        let recordData;
        try {
            recordData = await getRecordForKey(cacheKey);
        } catch (error) {
            if (window.NepDebug) {
                console.error("Failed to get runs-derived record:", error);
            }
            EmptyAll();
            return;
        }

        if (window.NepDebug) {
            console.log(`Record data for key ${cacheKey}:`, recordData);
        }

        if (!recordData || !recordData.success || !recordData.runs || recordData.runs.length === 0) {
            if (window.NepDebug) {
                console.log(`No successful runs found for key: ${cacheKey}`);
            }
            if (level === "H") {
                HandleHighscore("Empty");
            } else {
                switch (level) {
                    case "25": Handle25("Empty"); break;
                    case "50": Handle50("Empty"); break;
                    case "100": Handle100("Empty"); break;
                    case "All": HandleAll("Empty"); break;
                    default: break;
                }
            }
            return;
        }

        // Runs are already expanded objects from runs-derived timelines
        const bestRun = recordData.runs[0];

        if (!bestRun || !bestRun.times || !bestRun.times.primary || !bestRun.weblink) {
            if (window.NepDebug) {
                console.log(`Invalid run data structure for key: ${cacheKey}`, bestRun);
            }
            if (level === "H") {
                HandleHighscore("Empty");
            } else {
                switch (level) {
                    case "25": Handle25("Empty"); break;
                    case "50": Handle50("Empty"); break;
                    case "100": Handle100("Empty"); break;
                    case "All": HandleAll("Empty"); break;
                    default: break;
                }
            }
            return;
        }

        const runData = {
            data: {
                runs: [{
                    run: {
                        times: { primary: bestRun.times.primary },
                        weblink: bestRun.weblink
                    }
                }]
            }
        };

        switch (level) {
            case "H": HandleHighscore(runData); break;
            case "25": Handle25(runData); break;
            case "50": Handle50(runData); break;
            case "100": Handle100(runData); break;
            case "All": HandleAll(runData); break;
            default:
                if (window.NepDebug) {
                    console.warn(`No handler found for level: ${level}`);
                }
                break;
        }

    }

    //window.getRecordSRC("H");

    function EmptyAll() {
        emp = "Empty"
        Handle25(emp);
        Handle50(emp);
        Handle100(emp);
        HandleAll(emp);
        HandleHighscore(emp);
    }

    window.getAllSrc = async function () {
        const levels = ["25", "50", "100", "All", "H"];
        for (const element of levels) {
            await getRecordSRC(element);
        }
    }

    function Handle25(response) {
        if (response == "Empty") {
            document.getElementById('25src').innerHTML = ` `
            return;
        }

        if (typeof response["data"]["runs"][0] == "undefined") {
            document.getElementById('25src').innerHTML = `25 Apples: None`
            return;
        }

        world_record = convertTime(response["data"]["runs"][0]["run"]["times"]["primary"]);

        document.getElementById('25src').innerHTML = `25 Apples: <a target="_blank" style="text-decoration: none;color:#ADD8E6 !important;" href="` + response["data"]["runs"][0]["run"].weblink + `">` + world_record + `</a>`

        //document.getElementById('Hsrc').href = response["data"]["runs"][0]["run"].weblink
        if (window.NepDebug) {
            //console.log("Found 25 apples " + world_record + " " + response["data"]["runs"][0]["run"].weblink)
        }
    }
    function Handle50(response) {
        if (response == "Empty") {
            document.getElementById('50src').innerHTML = ` `
            return;
        }

        if (typeof response["data"]["runs"][0] == "undefined") {
            document.getElementById('50src').innerHTML = `50 Apples: None`
            return;
        }
        world_record = convertTime(response["data"]["runs"][0]["run"]["times"]["primary"]);

        document.getElementById('50src').innerHTML = `50 Apples: <a target="_blank" style="text-decoration: none;color:#ADD8E6 !important;" href="` + response["data"]["runs"][0]["run"].weblink + `">` + world_record + `</a>`
    }
    function Handle100(response) {
        if (response == "Empty") {
            document.getElementById('100src').innerHTML = ` `
            return;
        }

        if (typeof response["data"]["runs"][0] == "undefined") {
            document.getElementById('100src').innerHTML = `100 Apples: None`
            return;
        }
        world_record = convertTime(response["data"]["runs"][0]["run"]["times"]["primary"]);

        document.getElementById('100src').innerHTML = `100 Apples: <a target="_blank" style="text-decoration: none;color:#ADD8E6 !important;" href="` + response["data"]["runs"][0]["run"].weblink + `">` + world_record + `</a>`
    }
    function HandleAll(response) {
        if (response == "Empty") {
            document.getElementById('Allsrc').innerHTML = ` `
            return;
        }

        if (typeof response["data"]["runs"][0] == "undefined") {
            document.getElementById('Allsrc').innerHTML = `All Apples: None`
            return;
        }
        world_record = convertTime(response["data"]["runs"][0]["run"]["times"]["primary"]);

        document.getElementById('Allsrc').innerHTML = `All Apples: <a target="_blank" style="text-decoration: none;color:#ADD8E6 !important;" href="` + response["data"]["runs"][0]["run"].weblink + `">` + world_record + `</a>`
    }

    function HandleHighscore(response) {

        if (response == "Empty") {
            document.getElementById('Hsrc').innerHTML = ` `
            return;
        }

        if (typeof response["data"]["runs"][0] == "undefined") {
            document.getElementById('Hsrc').innerHTML = `Highscore: None`
            return;
        }

        highscore = parseInt(response["data"]["runs"][0]["run"]["times"]["primary"].toString().split('.')[1]).toString();
        world_record = highscore + " Apples";

        document.getElementById('Hsrc').innerHTML = `Highscore: <a target="_blank" style="text-decoration: none;color:#ADD8E6 !important;" href="` + response["data"]["runs"][0]["run"].weblink + `">` + world_record + `</a>`
        //document.getElementById('Hsrc').href = response["data"]["runs"][0]["run"].weblink
        if (window.NepDebug) {
            //console.log("Found highscore " + highscore + " " + response["data"]["runs"][0]["run"].weblink)
        }
    }

    // This shit was generated by ChatGPT
    function convertTime(duration) {
        const regex = /PT(?:(\d+)H)?(?:(\d+)M)?([\d.]+)S/;
        const matches = duration.match(regex);

        let convertedTime = '';

        if (matches[1]) {
            convertedTime += matches[1] + 'h';
        }

        if (matches[2]) {
            convertedTime += matches[2] + 'm';
        }

        const seconds = parseFloat(matches[3]);

        if (seconds > 0 || convertedTime === '') {
            const wholeSeconds = Math.floor(seconds);
            convertedTime += wholeSeconds + 's';

            const milliseconds = String(Math.round((seconds - wholeSeconds) * 1000)).padStart(3, "0");

            if (milliseconds > 0) {
                convertedTime += milliseconds + 'ms';
            }
        }

        if (convertedTime.includes('h')) {
            convertedTime = convertedTime.split('s')[0] + "s";
        }

        return convertedTime;
    }

    function countOccurrences(str, char) {
        const regex = new RegExp(char, "g");
        const matches = str.match(regex);
        return matches ? matches.length : 0;
    }

    // Prefetch runs-derived timelines on startup
    getLatestCacheData().catch(error => {
        if (window.NepDebug) {
            console.error("Failed to initialize runs-derived data:", error);
        }
    });

   // window.speedinfoVisible = false;

    window.SpeedInfoShow = function () {
        const speedinfoBox = document.getElementById('speedinfo-popup-pudding');
        speedinfoBox.style.display = 'block';
        speedinfoBox.style.visibility = 'visible';
        window.pudding_settings.SpeedInfo = true;

        window.SpeedInfoUpdate().catch(e=>console.error('SpeedInfoUpdate error:',e));
    }

    window.SpeedInfoHide = function () {
        const speedinfoBox = document.getElementById('speedinfo-popup-pudding');
        speedinfoBox.style.display = 'block';
        speedinfoBox.style.visibility = 'hidden';
        window.pudding_settings.SpeedInfo = false;
        document.getElementById('AlwaysOnTimeKeeper').checked = false;
    }

    window.SpeedInfoSetup = function () {

        const d = document.createElement('div');
        d.id = 'speedinfo-container';
        d.style = 'position:absolute;left:465px;top:45px;z-index:10000;';
        document.getElementsByClassName('sEOCsb')[0].appendChild(d);
        const speedinfoElement = document.querySelector('#speedinfo-container');


        const speedinfoBox = document.createElement('div');
        speedinfoBox.style = window.puddingSidebarStyle;
        speedinfoBox.id = 'speedinfo-popup-pudding';
        speedinfoBox.style.visibility = 'hidden';
        window.speedinfoInput = speedinfoBox;
        speedinfoBox.innerHTML = `

        <span style="text-decoration: underline;color:white;font-family:Roboto,Arial,sans-serif;display:flex; justify-content: center; align-items: center; text-align: center;">Speed Info</span>
        <label id="mode-selected" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <label id="mode-selected2" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <label id="25" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <label id="50" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <label id="100" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <label id="ALL" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <label id="H" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <label id="att" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <span style="display:flex; justify-content: center; align-items: center; text-align: center;">
        <button class="btn" style="margin:3px;color:white;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;justify-content: center; align-items: center; text-align: center;" id="time-keeper" jsname="time-keeper">Show Details</button>
        </span>
        <br>

        <span style="text-decoration: underline;color:white;font-family:Roboto,Arial,sans-serif;display:flex; justify-content: center; align-items: center; text-align: center;">SRC World Records</span>
        <label id="25src" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <label id="50src" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <label id="100src" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <label id="Allsrc" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <label id="Hsrc" class="form-check-label" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;"></label><br>
        <br>
  <button class="btn" style="display:none;margin:3px;color:white;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;" id="speedinfo-close" jsname="speedinfo-close">Close</button>

  `;

  document.getElementsByClassName('sEOCsb')[0].appendChild(speedinfoBox);

        const speedinfoCloseElements = document.getElementById('speedinfo-close');
        speedinfoCloseElements.addEventListener('click', window.SpeedInfoHide);
        //speedinfoCloseElements[1].addEventListener('click', hideSettingsBox);


        //document.getElementById('toggle-counter').addEventListener('click', toggleCounter);

        tempID = "time-keeper"; // Inspect element on Timer and take jsname from it
        document.querySelector("button[jsname^=\"" + tempID + "\"]").addEventListener("click", (e) => {
            if(!window.daily_challenge){
                window.timeKeeper.toggleDialog();
            }
        });

        //debugger
    }

    window.SpeedInfoSetup();

    window.ToggleSpeedInfo = function () {

          window.pudding_settings.SpeedInfo = !window.pudding_settings.SpeedInfo;

        if (window.pudding_settings.SpeedInfo) {
            // Show it
            window.SpeedInfoShow();
        }
        else {
            // Hide it
            window.SpeedInfoHide();
        }
    }

    //Listeners to hide/show speedinfo box
    const backButton = 'p17HVe';
    document.querySelector("[class^=\"" + backButton + "\"]").addEventListener("click", (e) => {
        window.SpeedInfoUpdate().catch(e=>console.error('SpeedInfoUpdate error:',e));
    });

    const playButton = 'NSjDf';
    document.querySelector("[jsname^=\"" + playButton + "\"]").addEventListener("click", (e) => {
        window.SpeedInfoUpdate().catch(e=>console.error('SpeedInfoUpdate error:',e));
    });

    window.SpeedInfoUpdate = async function () {
        // Mainly for TimeKeeper, runs when "play" is clicked
        let count = window.timeKeeper.getCurrentSetting("count");
        let speed = window.timeKeeper.getCurrentSetting("speed");
        let size = window.timeKeeper.getCurrentSetting("size");
        let modeStr = window.timeKeeper.getCurrentMode("size");
        storage = JSON.parse(localStorage["snake_timeKeeper"]);

        //change modeStr to gamemode
        var counter = 0
        var gamemode = "";
        for (t of modeStr) {
            if (t == 1) {

                if(window.isBridge){
                    switch (counter) {
                        case 0: gamemode += "Wall, "; break;
                        case 1: gamemode += "Portal, "; break;
                        case 2: gamemode += "Cheese, "; break;
                        case 3: gamemode += "Borderless, "; break;
                        case 4: gamemode += "Twin, "; break;
                        case 5: gamemode += "Winged, "; break;
                        case 6: gamemode += "YinYang, "; break;
                        case 7: gamemode += "Key, "; break;
                        case 8: gamemode += "Sokoban, "; break;
                        case 9: gamemode += "Poison, "; break;
                        case 10: gamemode += "Dimension, "; break;
                        case 11: gamemode += "Minesweeper, "; break;
                        case 12: gamemode += "Statue, "; break;
                        case 13: gamemode += "Light, "; break;
                        case 14: gamemode += "Shield, "; break;
                        case 15: gamemode += "Arrow, "; break;
                        case 16: gamemode += "Hotdog, "; break;
                        case 17: gamemode += "Magnet, "; break;
                        case 18: gamemode += "Gate, "; break;
                        case 19: gamemode += "Bridge, "; break;
                        case 20: gamemode += "Peaceful, "; break;
                        default: gamemode += "Unknown, "; break;
                    }
                }else{
                    switch (counter) {
                        case 0: gamemode += "Wall, "; break;
                        case 1: gamemode += "Portal, "; break;
                        case 2: gamemode += "Cheese, "; break;
                        case 3: gamemode += "Borderless, "; break;
                        case 4: gamemode += "Twin, "; break;
                        case 5: gamemode += "Winged, "; break;
                        case 6: gamemode += "YinYang, "; break;
                        case 7: gamemode += "Key, "; break;
                        case 8: gamemode += "Sokoban, "; break;
                        case 9: gamemode += "Skull, "; break;
                        case 10: gamemode += "Dimension, "; break;
                        case 11: gamemode += "Minesweeper, "; break;
                        case 12: gamemode += "Statue, "; break;
                        case 13: gamemode += "Light, "; break;
                        case 14: gamemode += "Shield, "; break;
                        case 15: gamemode += "Arrow, "; break;
                        case 16: gamemode += "Hotdog, "; break;
                        case 17: gamemode += "Magnet, "; break;
                        case 18: gamemode += "Gate, "; break;
                        case 19: gamemode += "Skip, "; break;
                        case 20: gamemode += "Peaceful, "; break;
                        default: gamemode += "Unknown, "; break;
                    }
                }
            }
            counter++;
        }
        if (gamemode == "") {
            gamemode = "Classic, ";
        }
        //gamemode = gamemode.substring(0, gamemode.lastIndexOf(","));
        mode_label = document.getElementById("mode-selected");
        mode_label2 = document.getElementById("mode-selected2");

        mode_label.innerHTML = gamemode + window.HandleCount(count).substring(0, window.HandleCount(count).lastIndexOf(","));
        mode_label2.innerHTML = window.HandleSpeed(speed) + window.HandleSize(size);

        //dialog = document.getElementById("speedinfo-popup-pudding");

        for (let score of ["att", "25", "50", "100", "ALL", "H"]) {
            let name = score + "-" + modeStr + "-" + count + "-" + speed + "-" + size;
            bold = document.getElementById(score);
            if(window.daily_challenge) {
                bold.innerHTML = '';
                continue;
            }

            if (typeof (storage[name]) != "undefined") {

                if (score == "att") {
                    totalAttempts = storage[name];
                    bold.innerHTML = "Total Attempts: " + totalAttempts;
                    continue;
                }
                else if (score == "H") {
                    bold.innerHTML = "Highscore: " + storage[name].high;
                    continue;
                }

                hours = Math.floor(storage[name].time / 3600000);
                minutes = String(Math.floor((storage[name].time / 60000)-hours*60)).padStart(2, "0");
                seconds = String(Math.floor((storage[name].time - minutes * 60000-hours*3600000) / 1000)).padStart(2, "0");
                mseconds = String(storage[name].time - minutes * 60000 - seconds * 1000-hours*3600000).padStart(3, "0");
                score_label = "ALL" === score ? "All" : score;
                if(hours==0){
                    bold.innerHTML = score_label + " Apples: " + minutes + "m" + seconds + "s" + mseconds + "ms";
                }else{
                    bold.innerHTML = score_label + " Apples: " + hours + "h" + minutes + "m" + seconds + "s" + mseconds + "ms";
                }

            }
            else {
                bold.innerHTML = "";
            }
        }

        if(window.daily_challenge) {
            mode_label.innerHTML = 'Daily Challenge'
            mode_label2.innerHTML = '(TimeKeeper disabled)'
        }

    }

    window.HandleCount = function (count) {
        switch (count) {
            case 0: return "1 Apple, "; break;
            case 1: return "3 Apples, "; break;
            case 2: return "5 Apples, "; break;
            case 3: return "10 Apples, "; break;
            case 4: return "Dice count, "; break;
            case 5: return "Bomb count, "; break;
            case 6: return "Tally count, "; break;
            default: return "MoreMenu Apples, "; break;
        }
    }
    window.HandleSpeed = function (speed) {
        switch (speed) {
            case 0: return "Normal speed, "; break;
            case 1: return "Fast speed, "; break;
            case 2: return "Slow speed, "; break;
            default: return "MoreMenu speed, "; break;

        }
    }
    window.HandleSize = function (size) {
        switch (size) {
            case 0: return "Normal size"; break;
            case 1: return "Small size"; break;
            case 2: return "Large size"; break;
            default: return "MoreMenu size"; break;
        }
    }

}

window.SpeedInfo.alterCode = function (code) {
    
    reset_regex = new RegExp(/;this\.reset\(\)\}\}/)

    speedinfo_reset = `;window.SpeedInfoUpdate().catch(e=>console.error('SpeedInfoUpdate error:',e));
    if(window.first_time_call){window.getAllSrc().catch(e=>console.error('getAllSrc error:',e));window.first_time_call=false;}
    ;$&`


    catchError(reset_regex, code)
    code = code.assertReplace(reset_regex, speedinfo_reset);

    switch_regex = new RegExp(/switch\(b\){case "apple"/)
    speedinfo_switch = `window.SpeedInfoUpdate().catch(e=>console.error('SpeedInfoUpdate error:',e));switch(b){case "apple"`
    code = code.assertReplace(switch_regex, speedinfo_switch);

    window.CurrentModeNum = 0;
    mode_regex = new RegExp(/case "trophy"\:/)
    mode_get_code = `case "trophy":window.CurrentModeNum = `
    code = code.assertReplace(mode_regex, mode_get_code);

    /*
    count_regex = new RegExp(/case "count"\:/)
    count_get_code = `case "count":window.getAllSrc();`
    code = code.assertReplace(mode_regex, count_get_code);

    speed_regex = new RegExp(/case "speed"\:/)
    speed_get_code = `case "speed":window.getAllSrc();`
    code = code.assertReplace(speed_regex, speed_get_code);

    size_regex = new RegExp(/case "size"\:/)
    size_get_code = `case "size":window.getAllSrc();`
    code = code.assertReplace(size_regex, size_get_code);
    */

    return code;
}
window.InputDisplay = {};

window.InputDisplay.make = function () {

  let displayPosition = parseInt((window.puddingSidebarStyle.split(';').find(style => style.trim().startsWith('width')) ? window.puddingSidebarStyle.split(';').find(style => style.trim().startsWith('width')).split(':')[1].trim() : null),10);

  // Code that runs before anything else here, loading variables, etc.
  // Recommended to use "window." for things
  const e = document.createElement('div');
  e.id = 'input-display-container';
  e.style = `position:absolute;left:${(-553+displayPosition/2)}px;top:530px;z-index:10001;display:block;line-height:normal;`;
  window.speedinfoInput.appendChild(e);

  const f = document.createElement('div');
  f.id = 'input-display-container2';
  f.style = `position:absolute;left:${(-553+displayPosition/2)}px;top:460px;z-index:10001;display:block;line-height:normal;width: 0;height: 0;`;
  window.speedinfoInput.appendChild(f);

  const InpBox = document.querySelector('#input-display-container');

  const LeftButton = document.createElement('div');
  LeftButton.style = 'position:absolute;left:460px;top"450px;z-index:10001;width:200px;';
  LeftButton.innerHTML = '<div class="input-button" id="left-button-id" style="border-radius: 10px;font-size:40px;color:white;display:none;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;vertical-align:middle;padding-bottom:12px;padding-right:10px;padding-left:10px;">←</div>'
  InpBox.appendChild(LeftButton);

  const DownButton = document.createElement('div');
  DownButton.style = 'position:absolute;left:530px;top"452px;z-index:10001;width:200px;';
  DownButton.innerHTML = '<div class="input-button" id="down-button-id" style="border-radius: 10px;font-size:40px;color:white;display:none;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;vertical-align:middle;padding-bottom:10px;padding-top:2px;padding-right:21px;padding-left:21px;">↓</div>'
  InpBox.appendChild(DownButton);

  const RightButton = document.createElement('div');
  RightButton.style = 'position:absolute;left:601px;top"550px;z-index:10001;width:200px;';
  RightButton.innerHTML = '<div class="input-button" id="right-button-id" style="border-radius: 10px;font-size:40px;color:white;display:none;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;vertical-align:middle;padding-bottom:12px;padding-right:10px;padding-left:10px;">→</div>'
  InpBox.appendChild(RightButton);

  const TopButton = document.createElement('div');
  TopButton.style = 'position:relative;left:530px;top"152px;z-index:10001;width:200px;';
  TopButton.innerHTML = '<div class="input-button" id="top-button-id" style="border-radius: 10px;font-size:40px;color:white;display:none;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;vertical-align:middle;padding-bottom:10px;padding-top:2px;padding-right:21px;padding-left:21px;">↑</div>'
  f.appendChild(TopButton);

  let first_time_checker = true;
  window.toggle_input_display = function toggle_input_display() {
    // this is so that if the input display starts on, it doesnt trigger it to be off, like what normally unchecking the box would do, since I'm using the same function.
    if(first_time_checker){
      first_time_checker=false;
    }
    else
    {window.pudding_settings.InputDisplay = !window.pudding_settings.InputDisplay;}
    //console.log("hmmm");
    if (window.pudding_settings.InputDisplay) {
      document.getElementById('left-button-id').style.display = 'inline-block';
      document.getElementById('down-button-id').style.display = 'inline-block';
      document.getElementById('right-button-id').style.display = 'inline-block';
      document.getElementById('top-button-id').style.display = 'inline-block';

      document.getElementById('left-button-id').style.visibility = 'visible';
      document.getElementById('down-button-id').style.visibility = 'visible';
      document.getElementById('right-button-id').style.visibility = 'visible';
      document.getElementById('top-button-id').style.visibility = 'visible';
    }
    else {
      document.getElementById('left-button-id').style.display = 'none';
      document.getElementById('down-button-id').style.display = 'none';
      document.getElementById('right-button-id').style.display = 'none';
      document.getElementById('top-button-id').style.display = 'none';
    }
  }
  window.LightInputOn = function (direction) {
    //console.log(incrementColor(window.button_color))
    if (window.button_color == "#FFFFFF" || window.button_color == "white") {
      document.getElementById(direction).style.backgroundColor = "#999999"
    }
    document.getElementById(direction).style.backgroundColor = incrementColor(window.button_color);
  }

  window.LightInputOff= function (direction) {

    document.getElementById(direction).style.backgroundColor = window.button_color;

  }

  function incrementColor(hexColor) {
    return '#' + hexColor.slice(1).replace(/../g, char => {
      const incrementedValue = parseInt(char, 16) + 32;
      return incrementedValue > 255 ? 'FF' : incrementedValue.toString(16).padStart(2, '0');
    });
  }
}
window.InputDisplay.alterCode = function (code) {

  // Code to alter snake code here
  document.addEventListener('keydown', (event)=> {

    if (event.key === 'ArrowRight' || (event.code === 'KeyD')){

      window.LightInputOn("right-button-id");
      //console.log('aaaaaas')
    }
    else if (event.key === 'ArrowLeft'|| (event.code === 'KeyA'))
    {
      window.LightInputOn("left-button-id");
    }
    else if (event.key === 'ArrowDown'|| (event.code === 'KeyS'))
    {
      window.LightInputOn("down-button-id");
    }
    else if (event.key === 'ArrowUp'|| (event.code === 'KeyW'))
    {
      window.LightInputOn("top-button-id");
    }

  });

  document.addEventListener('keyup', (event)=> {
    if ((event.key === 'ArrowRight') || (event.code === 'KeyD')){

      window.LightInputOff("right-button-id");
    }
    else if (event.key === 'ArrowLeft'|| (event.code === 'KeyA'))
    {
      window.LightInputOff("left-button-id");
    }
    else if (event.key === 'ArrowDown'|| (event.code === 'KeyS'))
    {
      window.LightInputOff("down-button-id");
    }
    else if (event.key === 'ArrowUp'|| (event.code === 'KeyW'))
    {
      window.LightInputOff("top-button-id");
    }
  });
  return code;
}

// const arrayIndices = n => Array(n).fill().map((q, i) => i)

// const [classic, wall, portal, cheese, infinity, twin, winged, yinyang, key, sokoban, poison, dimension, minesweeper, statue, light, peaceful] = arrayIndices(16)
// const [one, three, five, dice] = arrayIndices(4)
// const [normal, fast, slow] = arrayIndices(3)
// const [standard, small, large] = arrayIndices(3)


function hexToRgb(hex) {
  hex = hex.replace('#', '');
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
  };
}
function rgbToHex(rgb) {
  let hex = '#';
  hex += rgb.r.toString(16).padStart(2, '0');
  hex += rgb.g.toString(16).padStart(2, '0');
  hex += rgb.b.toString(16).padStart(2, '0');
  return hex;
}


window.Timer = {
  make: function() {
    window.getSelected = function(selector, selectedClass = 'DqMRee tuJOWd') {
      return (
        [...document.querySelector(selector).children].map(
          (q, i) => [q, i]
        ).filter(
          ([q,]) => q.className === selectedClass
        )[0] || [0, 0]
      )[1]
    }

    String.prototype.color = function(c) { return `<span style="color:${c}">${this.toString()}</span>` }

    Number.prototype.timeFormat = function() {
      const time = +this

      const hours   = Math.floor(time / 3600)
      const minutes = Math.floor((time / 60) % 60)
      const seconds = Math.floor(time % 60)
      const millis  = Math.floor((time % 1).toFixed(4) * 1000)

      let out = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2,'0')}.${millis.toString().padStart(3, '0')}`
      out = out.slice(out.search(/[^0:]/))

      return (out[0] === '.' ? '0' : '') + out
    }
    String.prototype.timeFormat = function() {
      return (+this).timeFormat()
    }

    window._splits = []

    window._cat = 3

    localStorage._snake_timer_format = localStorage._snake_timer_format ?? 1
    window._format = localStorage._snake_timer_format

    localStorage._snake_show_delta = localStorage._snake_show_delta ?? 0
    window._showDelta = +localStorage._snake_show_delta

    localStorage._snake_pb = localStorage._snake_pb ?? '{}'
    window._pb = JSON.parse(localStorage._snake_pb)

    // Bridge inserted before Peaceful: old mode index 20 (Peaceful) -> 21
    if (!localStorage._snake_pb_bridge_migrated) {
      if (window._pb[20] && !window._pb[21]) {
        window._pb[21] = window._pb[20];
        delete window._pb[20];
        localStorage._snake_pb = JSON.stringify(window._pb);
      }
      localStorage._snake_pb_bridge_migrated = '1';
    }


    localStorage._snake_aheadg  = localStorage._snake_aheadg  ?? '#008010'
    localStorage._snake_aheadl  = localStorage._snake_aheadl  ?? '#53dd87'
    localStorage._snake_behindg = localStorage._snake_behindg ?? '#dd3333'
    localStorage._snake_behindl = localStorage._snake_behindl ?? '#a00000'

    const nullFormats = [
      '-:--:--:---',
        '--:--:---',
         '-:--:---',
           '--:---',
            '-:---',
      '-:--:--.---',
        '--:--.---',
         '-:--.---',
           '--.---',
            '-.---',
    ]
    localStorage._snake_null_split = localStorage._snake_null_split ?? nullFormats[_format]


    const timerSplitDiv = document.getElementsByClassName('Jc72He rc48Qb')[0]
    const deltaDiv = document.createElement('div')
    deltaDiv.id = 'timerDelta'
    deltaDiv.innerHTML = '-'.color('white')
    timerSplitDiv.appendChild(deltaDiv)
    if(!_showDelta) deltaDiv.style.display = 'none'

    // const realTimerDiv = document.getElementsByClassName('Jc72He gmwAbc')[0]
    // realTimerDiv.style.position = 'relative'
    // if(_showDelta) realTimerDiv.style.bottom = window.location.href.includes('fbx') ? '9px' : '13px'

    // const wholeTimerDiv = document.getElementsByClassName('A2vT0')[0]
    // wholeTimerDiv.style.cursor = 'pointer'


    window.editTimer = function() {
      // console.warn(window.themes)

      let editBox = document.getElementById('edit-box')
      if(editBox) {
        editBox.remove()
      } else {
        const theme = window.themes[getSelected('#theme', 'DqMRee tuJOWd') || getSelected('#theme', 'tuJOWd')]

        editBox = document.createElement('div')
        editBox.id = 'edit-box'
        editBox.style = `
          background-color: ${theme.real_top_bar ?? '#aaaaff'};
          border-radius: 0.5vw;
          position: absolute;
          height: 93vh;
          z-index: 1000000;
          top: 30px;
          left: 50%;
          backdrop-filter: blur(5px);
          text-align: center;
          padding: 4px;
          transform: translate(-50%, 0);
          box-shadow: 0px 0px 8px rgba(0,0,0,0.4);
          border: 1px solid ${theme.topbar_color ?? '#4444dd'};
          font-size: 2.5vh;
          color: #ffffff;
          width: 50vw;
          font-family: Roboto,Arial,sans-serif;
          overflow-y: auto;
        `
        editBox.innerHTML = `
        <span id="close-box" style="
        position: absolute;
        top: 10px;
        right: 15px;
        cursor: pointer;
        color: #ffffff;
        font-size: 0.9em;
      ">&#x2715</span>
</br>
<label class="form-check-label" style="font-size: 3.5vh">
        Custom Timer/Splits Settings
      </label> </br>
</br>

<div id="edit-mode">
  <img class="sel" style="cursor: pointer; border: 0.5vh ridge #af4490ff; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_00.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_01.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_02.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_03.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_04.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_05.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_06.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_07.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_08.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_09.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_10.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_11.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_12.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_13.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_14.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v17/trophy_15.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v18/trophy_16.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v19/trophy_17.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v20/trophy_18.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v21/trophy_19.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v22/trophy_20.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_15.png" />
</div>
<br/>
<div id="edit-count">
  <img class="sel" style="cursor: pointer; border: 0.5vh ridge #af4490ff; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v17/count_00.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v17/count_01.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v17/count_02.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v18/count_03.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v18/count_04.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v18/count_05.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v19/count_06.png" />
</div>
<br/>
<div id="edit-speed">
  <img class="sel" style="cursor: pointer; border: 0.5vh ridge #af4490ff; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v3/speed_00.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v3/speed_01.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v3/speed_02.png" />
</div>
<br/>
<div id="edit-size">
  <img class="sel" style="cursor: pointer; border: 0.5vh ridge #af4490ff; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v4/size_00.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v4/size_01.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v4/size_02.png" />
</div>
<br/>

<div id="edit-cat">
  <img class="uns" style="background-color: #ffffff55; cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://i.postimg.cc/d1R1Y648/25.png" />
  <img class="uns" style="background-color: #ffffff55; cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://i.postimg.cc/7hmZC6vh/50.png" />
  <img class="uns" style="background-color: #ffffff55; cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://i.postimg.cc/qqk7MK5W/100.png" />
  <img class="sel" style="background-color: #ffffff55; cursor: pointer; border: 0.5vh ridge #af4490ff; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://i.postimg.cc/52j6Cw2V/all.png" />
</div>

<br/>
<div id="edit-times" style="left:0px;">
  <div>
      <label class="form-check-label" for="edit-25"> 25</label>
      <input class="text-input" size="9" name="edit-25" id="edit-25" type="text" style="font-family:Consolas;" />
  </div>
  <div>
      <label class="form-check-label" for="edit-50"> 50</label>
      <input class="text-input" size="9" name="edit-50" id="edit-50" type="text" style="font-family:Consolas;" />
  </div>
  <div>
      <label class="form-check-label" for="edit-100">100</label>
      <input class="text-input" size="9" name="edit-100" id="edit-100" type="text" style="font-family:Consolas;" />
  </div>
  <div>
      <label class="form-check-label" for="edit-ALL">ALL</label>
      <input class="text-input" size="9" name="edit-ALL" id="edit-ALL" type="text" style="font-family:Consolas;" />
  </div>
</div>

<div id="edit-customsplit" style="border-top:0px solid black">

</div>

<div id="edit-split">
  <label class="form-check-label" for="edit-splitscore">New Split</label>
  <input class="text-input" size="6" name="edit-splitscore" id="edit-splitscore" type="number" placeholder="Score" />
  <button class="btn" style="margin:3px;color:white;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;" id="edit-addsplit">Add</button>
</div>
<div id="edit-customsplit" style="border-top:0px solid black">
</br>
<label class="form-check-label" style="flex:center;">Timer Format</label>
<select class="form-control" id="edit-format" style="flex:center;">
    <option value="0">0:00:00:000</option>
    <option value="1">  00:00:000</option>
    <option value="2">   0:00:000</option>
    <option value="3">     00:000</option>
    <option value="4">      0:000</option>
    <option value="5">0:00:00.000</option>
    <option value="6">  00:00.000</option>
    <option value="7">   0:00.000</option>
    <option value="8">     00.000</option>
    <option value="9">      0.000</option>
  </select>
<br/>
<input class="form-check-input" style="width: 1.5em; height: 1.5em;" type="checkbox" checked="true" name="edit-delta" id="edit-delta" />
<label class="form-check-label" for="edit-delta">Show Delta</label>
<br/>
<br/>
<label class="form-check-label" for="edit-aheadg">Ahead (gaining time)</label>
<input class="text-input" style="margin: 0; padding: 0; border: 0; width: 6vh; height: 3vh;" name="edit-aheadg" id="edit-aheadg" type="color" />
<label class="form-check-label" for="edit-aheadl">Ahead (losing time)</label>
<input class="text-input" style="margin: 0; padding: 0; border: 0; width: 6vh; height: 3vh;" name="edit-aheadl" id="edit-aheadl" type="color" />
<br/>
<label class="form-check-label" for="edit-behindg">Behind (gaining time)</label>
<input class="text-input" style="margin: 0; padding: 0; border: 0; width: 6vh; height: 3vh;" name="edit-behindg" id="edit-behindg" type="color" />
<label class="form-check-label" for="edit-behindl">Behind (losing time)</label>
<input class="text-input" style="margin: 0; padding: 0; border: 0; width: 6vh; height: 3vh;" name="edit-behindl" id="edit-behindl" type="color" />

</div>
        `
        document.body.appendChild(editBox)
        document.getElementById('close-box').addEventListener('click', function() { document.getElementById('edit-box').remove() })

        const toggleDelta = document.getElementById('edit-delta')
        toggleDelta.checked = +_showDelta
        toggleDelta.addEventListener('change', function() {
          window._showDelta = +toggleDelta.checked
          localStorage._snake_show_delta = _showDelta

          if(_showDelta) {
            deltaDiv.style.display = ''
            // realTimerDiv.style.bottom = window.location.href.includes('fbx') ? '9px' : '13px'
          } else {
            deltaDiv.style.display = 'none'
            // realTimerDiv.style.bottom = '0px'
          }
        })


        const formatSelect = document.getElementById('edit-format')
        formatSelect.value = _format
        formatSelect.addEventListener('change', function() {
          window._format = +formatSelect.value
          localStorage._snake_timer_format = _format
          localStorage._snake_null_split = nullFormats[window._format]
        })

        const customSplitSectionDiv = document.getElementById('edit-customsplit')
        const newSplitInput = document.getElementById('edit-splitscore')
        newSplitInput.addEventListener('keydown', function() {
          setTimeout(function() {
            newSplitInput.value = newSplitInput.value.replace(/\D/g, '')
          }, 1)
        })
        document.getElementById('edit-addsplit').addEventListener('click', function() {
          const splitScore = document.getElementById('edit-splitscore').value
          if(!+splitScore) return

          const splitDiv = document.createElement('div')

          const splitName = `edit-${splitScore}`

          const splitLabel = document.createElement('label')
          splitLabel.for = splitName
          splitLabel.innerText = splitScore.toString().padStart(3, ' ') + ' '

          const splitInput = document.createElement('input')
          splitInput.className = 'text-input'
          splitInput.id = splitInput.name = splitName
          splitInput.size = 9
          splitInput.type = 'text'


          const splitDeleteButton = document.createElement('button')
          splitDeleteButton.innerText = 'Delete'
          splitDeleteButton.className = 'btn'
          splitDeleteButton.addEventListener('click', function() {
            splitDiv.remove()

            const _mode  = getSelected('#edit-mode',  'sel')
            const _count = getSelected('#edit-count', 'sel')
            const _speed = getSelected('#edit-speed', 'sel')
            const _size  = getSelected('#edit-size',  'sel')

            window._cat  = getSelected('#edit-cat',  'sel')

            delete _pb[_mode][_count][_speed][_size][_cat][splitScore]
            localStorage._snake_pb = JSON.stringify(_pb)
            while(_splits.includes(+splitScore)) {
              _splits.splice(_splits.indexOf(+splitScore), 1)
            }
          })

          if(!window._splits.includes(+splitScore)) window._splits.push(+splitScore)

          function handleChange() {
            const val = splitInput.value.split(':')
            let time = 0
            for(let i = 1; i <= val.length; i++) {
              let s = i === 1 ? 1 : i === 2 ? 60 : i === 3 ? 3600 : 0
              time += s * +val.at(-i)
            }


            const key = splitInput.name.replace('edit-', '')
            splitInput.className = 'text-input'

            const _mode  = getSelected('#edit-mode',  'sel')
            const _count = getSelected('#edit-count', 'sel')
            const _speed = getSelected('#edit-speed', 'sel')
            const _size  = getSelected('#edit-size',  'sel')

            window._cat  = getSelected('#edit-cat',   'sel')

            if(!_pb[_mode]) _pb[_mode] = {}
            if(!_pb[_mode][_count]) _pb[_mode][_count] = {}
            if(!_pb[_mode][_count][_speed]) _pb[_mode][_count][_speed] = {}
            if(!_pb[_mode][_count][_speed][_size]) _pb[_mode][_count][_speed][_size] = {}
            if(!_pb[_mode][_count][_speed][_size][_cat]) _pb[_mode][_count][_speed][_size][_cat] = {}
            _pb[_mode][_count][_speed][_size][_cat][key] = time || ''

            localStorage._snake_pb = JSON.stringify(_pb)


            splitInput.value = time === 0 ? '' : time.timeFormat()
          }
          handleChange()

          splitInput.addEventListener('keydown', function(evt) {
            if(evt.key === 'Escape' || evt.key === 'Enter') handleChange()

            setTimeout(function() {
              splitInput.value = splitInput.value.replace(/[^\d.:]/g, '')
            }, 1)
          })
          splitInput.addEventListener('change', handleChange)

          splitDiv.appendChild(splitLabel)
          splitDiv.appendChild(splitInput)
          splitDiv.appendChild(splitDeleteButton )

          customSplitSectionDiv.appendChild(splitDiv)

        })

        const divs = ['edit-mode', 'edit-count', 'edit-speed', 'edit-size'].map(q => document.getElementById(q))
        const selectors = ['#trophy', '#count', '#speed', '#size']
        for(let j = 0; j < 4; j++) {
          let temp = [...document.querySelector(selectors[j]).children]
          temp.forEach((q, i) => {
            if(_r = divs[j].children[i]) {
              _r.style.border = i === getSelected(selectors[j]) ? '0.5vh ridge #af4490ff' : '0.5vh ridge #00000000'
              _r.className = i === getSelected(selectors[j]) ? 'sel' : 'uns'
            }
          })
        }

        const cats = [...document.getElementById('edit-cat').children]
        cats.forEach((q, i) => {
          q.style.border = i === _cat ? '0.5vh ridge #af4490ff' : '0.5vh ridge #00000000'
          q.className = i === _cat ? 'sel' : 'uns'
        })


        for(const inp of document.getElementById('edit-times').children) {
          const el = inp.children[1]

          function handleChange() {
            const val = el.value.split(':')
            let time = 0
            for(let i = 1; i <= val.length; i++) {
              let s = i === 1 ? 1 : i === 2 ? 60 : i === 3 ? 3600 : 0
              time += s * +val.at(-i)
            }

            const key = el.name.replace('edit-', '')

            const _mode  = getSelected('#edit-mode',  'sel')
            const _count = getSelected('#edit-count', 'sel')
            const _speed = getSelected('#edit-speed', 'sel')
            const _size  = getSelected('#edit-size',  'sel')

            window._cat  = getSelected('#edit-cat',   'sel')

            if(!_pb[_mode]) _pb[_mode] = {}
            if(!_pb[_mode][_count]) _pb[_mode][_count] = {}
            if(!_pb[_mode][_count][_speed]) _pb[_mode][_count][_speed] = {}
            if(!_pb[_mode][_count][_speed][_size]) _pb[_mode][_count][_speed][_size] = {}
            if(!_pb[_mode][_count][_speed][_size][_cat]) _pb[_mode][_count][_speed][_size][_cat] = {}
            _pb[_mode][_count][_speed][_size][_cat][key] = time || ''

            localStorage._snake_pb = JSON.stringify(_pb)


            el.value = time === 0 ? '' : time.timeFormat()
          }

          el.addEventListener('keydown', function(evt) {
            if(evt.key === 'Escape' || evt.key === 'Enter') handleChange()

            setTimeout(function() {
              el.value = el.value.replace(/[^\d.:]/g, '')
            }, 1)
          })

          el.addEventListener('change', handleChange)
        }

        function updateToMode() {

          const _mode  = getSelected('#edit-mode',  'sel')
          const _count = getSelected('#edit-count', 'sel')
          const _speed = getSelected('#edit-speed', 'sel')
          const _size  = getSelected('#edit-size',  'sel')

          window._cat  = getSelected('#edit-cat',   'sel')

          const time = _pb[_mode] && _pb[_mode][_count] && _pb[_mode][_count][_speed] && _pb[_mode][_count][_speed][_size] && _pb[_mode][_count][_speed][_size][_cat] ? _pb[_mode][_count][_speed][_size][_cat] : {}

          for(const inp of document.getElementById('edit-times').children) {
            const el = inp.children[1]
            const key = el.name.replace('edit-', '')


            el.value = time[key] ? time[key].timeFormat() : ''

          }

          for(let i = customSplitSectionDiv.children.length - 1; i >= 0; i--) {
            customSplitSectionDiv.removeChild(customSplitSectionDiv.children[i])
          }

          for(const [_splitName, _splitTime] of Object.entries(time)) {
            if(!['25', '50', '100', 'ALL'].includes(_splitName)) {
              const splitDiv = document.createElement('div')
              const splitName = `edit-${_splitName}`

              const splitLabel = document.createElement('label')
              splitLabel.for = splitName
              splitLabel.innerText = _splitName.padStart(3, ' ') + ' '

              const splitInput = document.createElement('input')
              splitInput.id = splitInput.name = splitName
              splitInput.size = 9
              splitInput.type = 'text'
              splitInput.className = 'text-input'
              splitInput.value = +_splitTime ? _splitTime.timeFormat() : ''

              const splitDeleteButton = document.createElement('button')
              // splitDeleteButton.id = `delete-${splitName}`
              splitDeleteButton.innerText = 'Delete'
              splitDeleteButton.className = 'btn'
              splitDeleteButton.addEventListener('click', function() {
                splitDiv.remove()
                delete time[_splitName]
                delete _pb[_mode][_count][_speed][_size][_cat][_splitName]
                localStorage._snake_pb = JSON.stringify(_pb)
                while(window._splits.includes(+_splitName)) {
                  window._splits.splice(window._splits.indexOf(+_splitName), 1)
                }
              })

              if(!window._splits.includes(+_splitName)) window._splits.push(+_splitName)


              function handleChange() {
                const val = splitInput.value.split(':')
                let time = 0
                for(let i = 1; i <= val.length; i++) {
                  let s = i === 1 ? 1 : i === 2 ? 60 : i === 3 ? 3600 : 0
                  time += s * +val.at(-i)
                }

                const key = splitInput.name.replace('edit-', '')


                const _mode  = getSelected('#edit-mode',  'sel')
                const _count = getSelected('#edit-count', 'sel')
                const _speed = getSelected('#edit-speed', 'sel')
                const _size  = getSelected('#edit-size',  'sel')

                window._cat  = getSelected('#edit-cat',   'sel')

                if(!_pb[_mode]) _pb[_mode] = {}
                if(!_pb[_mode][_count]) _pb[_mode][_count] = {}
                if(!_pb[_mode][_count][_speed]) _pb[_mode][_count][_speed] = {}
                if(!_pb[_mode][_count][_speed][_size]) _pb[_mode][_count][_speed][_size] = {}
                if(!_pb[_mode][_count][_speed][_size][_cat]) _pb[_mode][_count][_speed][_size][_cat] = {}
                _pb[_mode][_count][_speed][_size][_cat][key] = time || ''

                localStorage._snake_pb = JSON.stringify(_pb)

                splitInput.value = time === 0 ? '' : time.timeFormat()
              }
              handleChange()

              splitInput.addEventListener('keydown', function(evt) {
                if(evt.key === 'Escape' || evt.key === 'Enter') handleChange()

                setTimeout(function() {
                  splitInput.value = splitInput.value.replace(/[^\d.:]/g, '')
                }, 1)
              })
              splitInput.addEventListener('change', handleChange)


              splitDiv.appendChild(splitLabel)
              splitDiv.appendChild(splitInput)
              splitDiv.appendChild(splitDeleteButton)

              customSplitSectionDiv.appendChild(splitDiv)

            }
          }
        }
        updateToMode()


        for(const id of ['edit-mode', 'edit-count', 'edit-speed', 'edit-size', 'edit-cat'])
          for(const opt of document.getElementById(id).children) {
            opt.addEventListener('click', function() {
              for(const opt1 of document.getElementById(id).children) {
                opt1.style.border = '0.5vh ridge #00000000'
                opt1.className = 'uns'
              }
              opt.style.border = '0.5vh ridge #af4490ff'
              opt.className = 'sel'

              updateToMode()
            })
          }



        for(const subid of ['aheadg', 'aheadl', 'behindg', 'behindl']) {
          // console.log(localStorage[subid])
          const el = document.getElementById(`edit-${subid}`)
          el.value = localStorage[`_snake_${subid}`]
          el.addEventListener('change', function() {
            localStorage[`_snake_${subid}`] = el.value
          })
        }





      }
    }





  },
  alterCode: function(code) {

    code = code.replace('"--:--:---"', 'localStorage._snake_null_split')
    code = code.replace('"25"', 'Math.min(25, ...(window._splits.length === 0 ? [25] : window._splits)) || 25')

    const resetFunction = code.match(
      /reset\(\)\n?{\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?\[\];\n?var a\n?=\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?this\n?\.\n?settings[^]*?\)\}\;/
    )[0]

    /*
    const modeKey = resetFunction.match(
      /0===this\.settings\.[a-zA-Z0-9_$]{1,8}/
    )[0].replace('0===this.settings.', '')
    const countKey = resetFunction.match(
      /2===this\.settings\.[a-zA-Z0-9_$]{1,8}/
    )[0].replace('2===this.settings.', '')
    const speedKey = code.match(
      /0!==a\.settings\.[a-zA-Z0-9_$]{1,8}\?-10:0/
    )[0].replace('0!==a.settings.', '').replace('?-10:0', '')
    const sizeKey = resetFunction.match(
      /1!==this\.settings\.[a-zA-Z0-9_$]{1,8}/
    )[0].replace('1!==this.settings.', '')
*/

    code = code.replace(resetFunction,
      resetFunction.replace(
        'reset(){',
        `reset(){this.xdddd=[];

          const _mode  = getSelected('#trophy')
          const _count = getSelected('#count')
          const _speed = getSelected('#speed')
          const _size  = getSelected('#size')

          window._run = {}
          window._run[_mode] = {}
          window._run[_mode][_count] = {}
          window._run[_mode][_count][_speed] = {}
          window._run[_mode][_count][_speed][_size] = {}
          window._run[_mode][_count][_speed][_size][_cat] = {}


          if(!window._pb) window._pb = {}
          if(!window._pb[_mode]) window._pb[_mode] = {}
          if(!window._pb[_mode][_count]) window._pb[_mode][_count] = {}
          if(!window._pb[_mode][_count][_speed]) window._pb[_mode][_count][_speed] = {}
          if(!window._pb[_mode][_count][_speed][_size]) window._pb[_mode][_count][_speed][_size] = {}
          if(!window._pb[_mode][_count][_speed][_size][_cat]) window._pb[_mode][_count][_speed][_size][_cat] = {}

          for(let __ind = window._splits.length - 1; __ind >= 0; __ind--) {
            if(!window._pb[_mode][_count][_speed][_size][_cat][window._splits[__ind]]) {
              window._splits.splice(__ind, 1)
            }
          }

          for(let __key of Object.keys(window._pb[_mode][_count][_speed][_size][_cat])) {
            if(!['25','50','100','ALL'].includes(__key) && !window._splits.includes(+__key)) {
              window._splits.push(+__key)
            }
          }


          const deltaDiv = document.getElementById('timerDelta')
          deltaDiv.innerHTML = '-'.color('white')

          window._lastDelta = 0

        `
      )
    )


    const timeFormatFunction = code.match(
      /[a-zA-Z0-9_$]{1,8}=function\(a\){a=Math\.floor\(a\);if\(a<=0\)return[^]*?3,"0"\)}/
    )[0]


    code = code.replace(timeFormatFunction,
      timeFormatFunction.replace(
        'function(a){',
        `window._flj = function(a) {
          const _splitTimeDiv = document.getElementsByClassName('Jc72He rc48Qb')[0].children[1]
          _splitTimeDiv.innerHTML = _splitTimeDiv.innerHTML.trimStart()
        `
      ).replace(
        '"00:00:000"',
        `['0:00:00:000', '00:00:000', '0:00:000', '00:000', '0:000', '0:00:00.000', '00:00.000', '0:00.000', '00.000', '0.000'][_format]`
      ).replace(
        'if(600<=b)return"9:59:59:999";',
        ''
      ).replace(
        'return(0===c?"":c.toString()+":")+(b%60).toString().padStart(2,"0")+":"+(Math.floor(a/1E3)%60).toString().padStart(2,"0")+":"+(a%1E3).toString().padStart(3,"0")',
        `
        const _hours = c === 0 ? "" : c.toString() + ":"
        const _minutes = b % 60
        const _seconds = (Math.floor(a / 1E3) % 60).toString()
        const _millis = (a % 1E3).toString().padStart(3, "0")
        return [
          c.toString() + ":" + _minutes.toString().padStart(2,"0") + ":" + _seconds.padStart(2,"0") + ":" + _millis,
          _hours + _minutes.toString().padStart(2,"0") + ":" + _seconds.padStart(2,"0") + ":" + _millis,
          _hours + _minutes.toString().padStart(2,_hours ? "0" : " ") + ":" + _seconds.padStart(2,"0") + ":" + _millis,
          _hours + (_minutes ? _minutes.toString().padStart(2,_hours ? "0" : " ") + ":" : _hours ? "00:" : "   ") + _seconds.padStart(2,"0") + ":" + _millis,
          _hours + (_minutes ? _minutes.toString().padStart(2,_hours ? "0" : " ") + ":" : _hours ? "00:" : "   ") + _seconds.padStart(2,_hours || _minutes ? "0" : " ") + ":" + _millis,

          c.toString() + ":" + _minutes.toString().padStart(2,"0") + ":" + _seconds.padStart(2,"0") + "." + _millis,
          _hours + _minutes.toString().padStart(2,"0") + ":" + _seconds.padStart(2,"0") + "." + _millis,
          _hours + _minutes.toString().padStart(2,_hours ? "0" : " ") + ":" + _seconds.padStart(2,"0") + "." + _millis,
          _hours + (_minutes ? _minutes.toString().padStart(2,_hours ? "0" : " ") + ":" : _hours ? "00:" : "   ") + _seconds.padStart(2,"0") + "." + _millis,
          _hours + (_minutes ? _minutes.toString().padStart(2,_hours ? "0" : " ") + ":" : _hours ? "00:" : "   ") + _seconds.padStart(2,_hours || _minutes ? "0" : " ") + "." + _millis,
        ][_format]`
      )
    )

    const stuffBlock = code.match(
      /[a-zA-Z0-9_$]{1,8}=this\.header,[a-zA-Z0-9_$]{1,8}=\n?this\.[a-zA-Z0-9_$]{1,8},[a-zA-Z0-9_$]{1,8}=this\.ticks,[a-zA-Z0-9_$]{1,8}=this\.[a-zA-Z0-9_$]{1,8};/
    )[0]
    const score = stuffBlock.match(/header,[a-zA-Z0-9_$]{1,8}=\n?this\.[a-zA-Z0-9_$]{1,8}/)[0].replace(/header,[a-zA-Z0-9_$]{1,8}=/,'')
    const ticks = stuffBlock.match(/[a-zA-Z0-9_$]{1,8}=this\.ticks/)[0].replace(/[a-zA-Z0-9_$]{1,8}=/,'')
    const dt    = stuffBlock.match(/ticks,[a-zA-Z0-9_$]{1,8}=this\.[a-zA-Z0-9_$]{1,8}/)[0].replace(/ticks,[a-zA-Z0-9_$]{1,8}=/,'')



    const splitStuff = code.match(
      /if\(2?5?=?=?=?\n?[a-zA-Z0-9_$]{1,8}=?=?=?2?5?\|\|5?0?=?=?=?[a-zA-Z0-9_$]{1,8}=?=?=?5?0?\|\|1?0?0?=?=?=?[a-zA-Z0-9_$]{1,8}=?=?=?1?0?0?\)/
    )[0]

    code = code.replace(
      splitStuff,
      `
      if([25, 50, 100].includes(${score}) || window._splits.includes(${score})) {
        const deltaDiv = document.getElementById('timerDelta')
        const _mode  = getSelected('#trophy')
        const _count = getSelected('#count')
        const _speed = getSelected('#speed')
        const _size  = getSelected('#size')

        const _split = ${ticks} * ${dt} * 1e-3

        window._run[_mode][_count][_speed][_size][_cat][${score}] = _split

        if(window._pb[_mode][_count][_speed][_size][_cat][${score}]) {
          const _delta = _split - window._pb[_mode][_count][_speed][_size][_cat][${score}]
          const _absDeltaString = Math.abs(_delta).timeFormat()
          if(_delta !== 0)
            deltaDiv.innerHTML = ((_delta < 0 ? '-' : '+') + _absDeltaString).color(
              localStorage[
                _delta > 0 ?
                  _delta > _lastDelta ? '_snake_behindl' : '_snake_behindg'
                :
                  _delta > _lastDelta ? '_snake_aheadl'  : '_snake_aheadg'
              ]
            )
          else
            deltaDiv.innerHTML = '-'.color('white')



          window._lastDelta = _delta
        } else {
          deltaDiv.innerHTML = '-'.color('white')
        }

        if(
          (
            (${score} === 25  && _cat === 0) ||
            (${score} === 50  && _cat === 1) ||
            (${score} === 100 && _cat === 2)
          ) && (
            !window._pb[_mode][_count][_speed][_size][_cat][${score}] ||
            _split - window._pb[_mode][_count][_speed][_size][_cat][${score}] < 0
          )
        ) {
          window._pb[_mode][_count][_speed][_size][_cat] = window._run[_mode][_count][_speed][_size][_cat]
          localStorage._snake_pb = JSON.stringify(window._pb)
        }





      }


      if([25, 50, 100].includes(${score}) || window._splits.includes(${score}))

      `
    )

    const winStuff = code.match(
      /_\.[a-zA-Z0-9_$]{1,8}\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8},"ALL"\);/
    )[0]

    code = code.replace(
      winStuff,
      `
      ${winStuff}
      const deltaDiv = document.getElementById('timerDelta')
      const _mode  = getSelected('#trophy')
      const _count = getSelected('#count')
      const _speed = getSelected('#speed')
      const _size  = getSelected('#size')

      const _time = ${ticks} * ${dt} * 1e-3

      let _delta = NaN

      window._run[_mode][_count][_speed][_size][_cat]['ALL'] = _time
      if(window._pb[_mode][_count][_speed][_size][_cat]['ALL']) {
        _delta = _time - window._pb[_mode][_count][_speed][_size][_cat]['ALL']
        const _absDeltaString = Math.abs(_delta).timeFormat()
        if(_delta !== 0)
          deltaDiv.innerHTML = ((_delta < 0 ? '-' : '+') + _absDeltaString).color(
            localStorage[
              _delta > 0 ?
                _delta > _lastDelta ? '_snake_behindl' : '_snake_behindg'
              :
                _delta > _lastDelta ? '_snake_aheadl'  : '_snake_aheadg'
            ]
          )
        else
          deltaDiv.innerHTML = '-'.color('white')
      } else {
        deltaDiv.innerHTML = '-'.color('white')
      }

      if(_delta < 0 || isNaN(_delta)) {
        window._pb[_mode][_count][_speed][_size][_cat] = window._run[_mode][_count][_speed][_size][_cat]
        localStorage._snake_pb = JSON.stringify(window._pb)
      }



      `
    )

    return code
  }
}
window.BootstrapMenu = {};

window.BootstrapMenu.make = function () {

    window.bootstrapVisible = false;

    window.BootstrapShow = function () {
        const settingsBox = document.getElementById('settings-popup-pudding');
        settingsBox.style.display = 'block';
        settingsBox.style.visibility = 'visible';
        window.bootstrapVisible = true;

    }

    window.BootstrapHide = function () {
        const settingsBox = document.getElementById('settings-popup-pudding');
        settingsBox.style.visibility = 'hidden';
        if (typeof window.PortalPairsPanelHide === "function") {
            window.PortalPairsPanelHide();
        }
        if (window.bootstrapVisible && typeof window.getAllSrc != "undefined") {
            window.getAllSrc();
        }
        window.bootstrapVisible = false;

    }

    random_button_jsname = 'qycu7d' // Hardcoded because I'm lazy

    // Get the button by its jsname attribute
    window.random_button = document.querySelector(`[jsname="${random_button_jsname}"]`);

    // Disable the button
    window.ToggleRandom = function () {
        window.pudding_settings.DisableRandom = !window.pudding_settings.DisableRandom;
        if (window.pudding_settings.DisableRandom) {
            // Disable it
            random_button.style.pointerEvents = 'none';
        }
        else {
            // Enable it
            random_button.style.pointerEvents = 'auto';
        }
    }

    window.ToggleScrollbar = function () {
        window.pudding_settings.ScrollBar = !window.pudding_settings.ScrollBar;
        if (window.pudding_settings.ScrollBar) {
            // Disable it
            document.body.style.overflow = 'hidden';
        }
        else {
            // Enable it
            document.body.style.overflow = '';
        }
    }


    window.BootstrapSetup = function () {

        const a = new Image();
        a.src = getStatIconImageSrc();
        a.id = 'stat-icon';
        a.width = a.height = 25;
        a.style = 'position:relative;left:200px;top:70px;';
        window.divList = document.createElement('div');
        divList.class = 'counter-num'
        divList.style = 'width:25px;z-index:5;position:relative;left:230px;top:45px;font-size:14px;font-family:Roboto,Arial,sans-serif;color:white;font-size:14px;line-height: normal;'
        divList.id = 'counter-num'

        document.getElementsByClassName('sEOCsb')[0].appendChild(a);
        document.getElementsByClassName('sEOCsb')[0].appendChild(divList);

        const d = document.createElement('div');
        d.id = 'input-counter-settings-container';
        d.style = 'position:absolute;left:465px;top:45px;z-index:10002;';
        document.getElementsByClassName('sEOCsb')[0].appendChild(d);

        const css_stripped = window.NepDebug
            ? "http://127.0.0.1:5500/bootstrap-stripped.css"
            : 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakePudding/main/bootstrap-stripped.css';

        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                const cssText = xhr.responseText;
                window.bootstrap_css = cssText;

                const styleElement = document.getElementsByTagName('style')[0];
                if (styleElement) {
                    styleElement.innerHTML = styleElement.innerHTML + cssText;
                }

                let styleElnew = document.getElementById('custom-style');
                if (!styleElnew) {
                    styleElnew = document.createElement('style');
                    styleElnew.id = 'custom-style';
                    document.head.appendChild(styleElnew);
                    styleElnew.innerHTML = cssText;
                }
            } else {
                console.error('Failed to load Bootstrap CSS:', xhr.status, xhr.statusText);
            }
        };

        xhr.onerror = function () {
            console.error('Network error while loading Bootstrap CSS');
        };

        xhr.ontimeout = function () {
            console.error('Timeout while loading Bootstrap CSS');
        };

        xhr.timeout = 10000;
        xhr.open('GET', css_stripped, true);
        xhr.send();

        const settingsBox = document.createElement('div');
        settingsBox.style = window.puddingSidebarStyle;
        settingsBox.style.display = 'none';
        settingsBox.id = 'settings-popup-pudding';
        settingsBox.innerHTML = `

        <script src="https://code.jquery.com/jquery-3.7.0.slim.js" integrity="sha256-7GO+jepT9gJe9LB4XFf8snVOjX3iYNb0FHYr5LI1N5c=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

        <span style="color:white;font-family:Roboto,Arial,sans-serif;display:flex; justify-content: center; align-items: center; text-align: center;">Pudding Mod Settings</span>

    <select style="margin-top:3px;margin-bottom:3px;margin-left: auto; margin-right: auto;background-color:#1155CC;color:white;font-family:Roboto,Arial,sans-serif;display:flex; justify-content: center; align-items: center; text-align: center; align:center;" id="stat-chooser" class="form-control">
        <option value="inputGame">Count game inputs</option>
        <option value="inputSession">Count session inputs</option>
        <option value="inputLifetime">Count lifetime inputs</option>
        <option value="playsSession">Count session resets</option>
        <option value="playsLifetime">Count lifetime resets</option>
        <option value="applesSession">Count fruit session</option>
        <option value="applesLifetime">Count fruit lifetime</option>
        <option value="wallsGame">Count walls</option>
        <option value="hideCount">Hide counter</option>
    </select>

  <button class="btn" style="margin:3px;color:white;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;" id="edit-stat">Edit stat</button>
  <button class="btn" style="margin:3px;color:white;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;" id="reset-stats">Reset stats</button><br>
  <button class="btn" style="display:none;margin:3px;color:white;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;" id="time-keeper" jsname="time-keeper">Show TimeKeeper</button>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" role="switch" id="SkullPoisonFruit">
    <label class="form-check-label" for="SkullPoisonFruit" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;">Skull Poison Fruit</label>
    </div>
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" role="switch" id="DistinctSokoGoals">
    <label class="form-check-label" for="DistinctSokoGoals" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;">Distinct Soko Goals</label>
    </div>
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" role="switch" id="InputDisplay">
    <label class="form-check-label" for="InputDisplay" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;">Input Display</label>
    </div>
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" role="switch" id="TopBarIcons">
    <label class="form-check-label" for="TopBarIcons" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;">Top Bar Icons</label>
    </div>
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" role="switch" id="AlwaysOnTimeKeeper">
    <label class="form-check-label" for="AlwaysOnTimeKeeper" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;">Show SpeedInfo</label>
    </div>
    <button class="btn" style="margin:3px;color:white;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;" id="TimerSettings">Timer settings</button><br>
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" role="switch" id="DisableRandom">
    <label class="form-check-label" for="DisableRandom" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;">Disable Randomizer</label>
    </div>
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" role="switch" id="RemoveScrollbar">
    <label class="form-check-label" for="RemoveScrollbar" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;">Remove Scrollbar</label>
    </div>
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" role="switch" id="EatThemeRandomizer">
    <label class="form-check-label" for="EatThemeRandomizer" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;" id="EatThemeRandomizer2">"Dragon Fruit"</label>
    </div>
  <button class="btn" style="margin:3px;color:white;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;" id="ResetKeybind">Reset Key: Shift</button><br>
  <button type="button" class="btn" style="margin:3px;color:white;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;" id="CustomBowlFruits" onclick="window.TogglePortalPairsPanel&&window.TogglePortalPairsPanel()">Custom Bowl Fruits</button><br>
    </div>

<select style="display:none;margin:3px;background-color:#1155CC;color:white;font-family:Roboto,Arial,sans-serif; align-items: center; text-align: center;" id="snakePride" class="form-control flex-row">
  <option value="0">Default Rainbow</option>
</select>

  <button class="btn" style="display:none;margin:3px;color:white;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;" id="settings-close" jsname="settings-close">Close</button>

  <br>
  <button class="btn" style="margin:3px;color:white;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;" id="ScrollLeftBtn">Scroll Left</button><br>

  `;

  document.getElementsByClassName('sEOCsb')[0].appendChild(settingsBox);

        timer_settings = document.getElementById("TimerSettings");
        timer_settings.addEventListener("click", window.editTimer);

        ScrollLeftBtn = document.getElementById("ScrollLeftBtn");
        ScrollLeftBtn.style.display = 'none';

        EatThemeRandomizer = document.getElementById("EatThemeRandomizer");
        EatThemeRandomizer2 = document.getElementById("EatThemeRandomizer2");
        EatThemeRandomizer.checked = window.pudding_settings.randomizeThemeApple;
        EatThemeRandomizer.addEventListener("change", function() {
            window.pudding_settings.randomizeThemeApple = !window.pudding_settings.randomizeThemeApple;
        });


        skull_checkbox = document.getElementById("SkullPoisonFruit");
        skull_checkbox.checked = window.pudding_settings.Skull;
        skull_checkbox.addEventListener("change", toggle_skull_func);

        soko_checkbox = document.getElementById("DistinctSokoGoals");
        soko_checkbox.checked = window.pudding_settings.SokoGoals;
        soko_checkbox.addEventListener("change", toggle_soko_goal);

        input_checkbox = document.getElementById("InputDisplay");
        input_checkbox.addEventListener("change", toggle_input_display);
        input_checkbox.checked = window.pudding_settings.InputDisplay;
        toggle_input_display();

        topbar_checkbox = document.getElementById("TopBarIcons");
        topbar_checkbox.addEventListener("change", window.toggle_topbar_icons);
        topbar_checkbox.checked = window.pudding_settings.TopBar;

        speedinfo_checkbox = document.getElementById("AlwaysOnTimeKeeper");
        speedinfo_checkbox.addEventListener("change", window.ToggleSpeedInfo);
        speedinfo_checkbox.checked = window.pudding_settings.SpeedInfo;

        randombtn_checkbox = document.getElementById("DisableRandom");
        randombtn_checkbox.addEventListener("change", window.ToggleRandom);
        randombtn_checkbox.checked = window.pudding_settings.DisableRandom;

        if (window.pudding_settings.DisableRandom) {
            // Disable it
            random_button.style.pointerEvents = 'none';
        }
        else {
            // Enable it
            random_button.style.pointerEvents = 'auto';
        }

        scrollbtn_checkbox = document.getElementById("RemoveScrollbar");
        scrollbtn_checkbox.addEventListener("change", window.ToggleScrollbar);
        scrollbtn_checkbox.checked = window.pudding_settings.ScrollBar;

        if (window.pudding_settings.ScrollBar) {
            // Disable it
            document.body.style.overflow = 'hidden';
        }
        else {
            // Enable it
            document.body.style.overflow = '';
        }

        if (localStorage.getItem('snakeChosenMod') === "PuddingMod" || window.NepDebug) {
            EatThemeRandomizer.style.display = 'none';
            EatThemeRandomizer2.style.display = 'none';
            EatThemeRandomizer.checked = false;
            window.pudding_settings.randomizeThemeApple = false;
            EatThemeRandomizer.parentElement.style.display = 'none';
        } else
        {
            EatThemeRandomizer.parentElement.style.display = 'block';
            console.log("Disabling SpeedInfo")
            speedinfo_checkbox.disabled = true;
            speedinfo_checkbox.checked = false;
            window.SpeedInfoHide();
        }

        if(window.isSnakeMobileVersion){
            speedinfo_checkbox.disabled = true;
            speedinfo_checkbox.checked = false;
            window.SpeedInfoHide();

            input_checkbox.disabled = true;
            ScrollLeftBtn.style.display = '';
            ScrollLeftBtn.addEventListener("click", function () {
                document.documentElement.scrollLeft -= 800;
            });
        }

        let settingsToValues = {
            inputs: {
                game: 'inputGame',
                session: 'inputSession',
                lifetime: 'inputLifetime'
            },
            plays: {
                session: 'playsSession',
                lifetime: 'playsLifetime'
            },
            apples: {
                session: 'applesSession',
                lifetime: 'applesLifetime'
            },
            walls: {
                game: 'wallsGame'
            },
            hide: {
                count: 'hideCount'
            }
        }

        let valuesToSettings = {
            inputGame: { stat: 'inputs', duration: 'game' },
            inputSession: { stat: 'inputs', duration: 'session' },
            inputLifetime: { stat: 'inputs', duration: 'lifetime' },
            playsSession: { stat: 'plays', duration: 'session' },
            playsLifetime: { stat: 'plays', duration: 'lifetime' },
            applesSession: { stat: 'apples', duration: 'session' },
            applesLifetime: { stat: 'apples', duration: 'lifetime' },
            wallsGame: { stat: 'walls', duration: 'game' },
            hideCount: { stat: 'hide', duration: 'count' },
        }

        document.querySelector(`#stat-chooser option[value=${settingsToValues[stats.statShown][stats.statDurationShown]}]`).selected = true;

        const settingsCloseElements = document.getElementById('settings-close');
        settingsCloseElements.addEventListener('click', window.BootstrapHide);

        document.getElementById('stat-chooser').onchange = function () {
            stats.statShown = valuesToSettings[this.value].stat;
            stats.statDurationShown = valuesToSettings[this.value].duration;
            document.getElementById('stat-icon').src = getStatIconImageSrc();
            updateCounterDisplay();
        }

        document.getElementById('edit-stat').addEventListener('click', promptToEditStatCount);
        document.getElementById('reset-stats').addEventListener('click', promptToResetStats);
    }

    window.BootstrapSetup();

    window.ToggleBootstrap = function () {
        if (!window.bootstrapVisible) {
            // Show it
            window.BootstrapShow();
        }
        else {
            // Hide it
            window.BootstrapHide();
        }
    }

    //Listeners to hide/show settings box
    const settingsButton = 'iyH4Cb';
    document.querySelector("div[jsname^=\"" + settingsButton + "\"]").addEventListener("click", (e) => {
        window.BootstrapShow();
        if (window.isSnakeMobileVersion) {
            window.enableScrollMobile();
            if (localStorage.getItem('snakeChosenMod') === "VisibilityMod") {
                document.getElementById('delete-stuff-popup').hidden = false;
            }
        }
    });

    const backButton = 'p17HVe';
    document.querySelector("[class^=\"" + backButton + "\"]").addEventListener("click", (e) => {
        window.BootstrapHide();
        if (window.isSnakeMobileVersion) {
            if (localStorage.getItem('snakeChosenMod') === "VisibilityMod") {
                document.getElementById('delete-stuff-popup').hidden = true;
            }
        }
    });

    const playButton = 'NSjDf';
    document.querySelector("[jsname^=\"" + playButton + "\"]").addEventListener("click", (e) => {
        window.BootstrapHide();
        if (window.isSnakeMobileVersion) {
            if (localStorage.getItem('snakeChosenMod') === "VisibilityMod") {
                document.getElementById('delete-stuff-popup').hidden = true;
            }
        }
    });


    // Function to enable horizontal scroll
    window.enableScrollMobile = function () {
        // Enable scroll by setting overflow to auto
        document.body.style.overflowX = 'auto';
        document.documentElement.scrollLeft = document.documentElement.scrollWidth;
    }

}

window.BootstrapMenu.alterCode = function (code) {
    if(window.pudding_settings.SpeedInfo)
    {
        window.SpeedInfoShow();
    }
    return code;
}
window.ResetKey = {}

window.ResetKey.make = function (){
  keybind_settings = document.getElementById("ResetKeybind"); // keybind changer

  // Code for reset key
  let keybinds = JSON.parse(localStorage.getItem("keybinds")) || {};
  function setupKeybindPicker(buttonId, keybindType) {
      const button = document.getElementById(buttonId);
      if(!keybinds[keybindType]){
          keybinds[keybindType] = "Shift";
      }
      button.textContent = `Reset Key: ${keybinds[keybindType]}`;

      button.addEventListener("click", () => {
          button.textContent = "Press any key...";
          document.addEventListener("keydown", function handler(e) {
          keybinds[keybindType] = e.key;
          button.textContent = `Reset Key: ${e.key}`;
          localStorage.setItem("keybinds", JSON.stringify(keybinds));
          document.removeEventListener("keydown", handler);
          });
      });
  }

  // Apply to each bind
  setupKeybindPicker("ResetKeybind", "resetKey");
}

window.ResetKey.alterCode = function(code){
  document.addEventListener('keydown', function(e){
    let keybinds = JSON.parse(localStorage.getItem("keybinds")) || {};
    let resetButton = document.getElementById('ResetKeybind');
    let isSettingKeybind = resetButton && resetButton.textContent === "Press any key...";
    if(!(isSettingKeybind || window.timeKeeper.dialogActive || document.getElementById('edit-box'))){
        if(e.key === keybinds["resetKey"]){
            const keydownEvent = new KeyboardEvent('keydown', {
                keyCode: 27
            });
            document.dispatchEvent(keydownEvent);
            document.querySelector('[jsname="NSjDf"]').click();
        }
    }
  });
  return code
}
// Hold the first game tick until the board has visually rendered once.
// Four hooks: render() stamps lastFrameTime; reset() stamps resetTime and
// drains a delayed key; the key handler queues early inputs until then.

window.RenderDelayFix = {};

window.RenderDelayFix.make = function () {
  window.lastFrameTime = 0;
  window.resetTime = 0;
  window.oldResetTime = 0;
  window.delayedKeyStorage = false;
  window.keyObject = false;
  window.stuffKeys = ()=>{};
}

window.RenderDelayFix.alterCode = function (code) {
  code = assertReplace(
    code,
    /render\s*\(\s*a\s*,\s*b\s*\)\s*\{\s*this\.([a-zA-Z0-9_$]{1,8})\.([a-zA-Z0-9_$]{1,8})\s*&&/,
    "render(a,b){window.lastFrameTime=Date.now();if(window.resetTime!=window.oldResetTime){window.oldResetTime=window.resetTime;}this.$1.$2&&"
  );
  // Capture all three props — v11 uses Bb.oa.oa, v12 uses wb.ka.ka
  code = assertReplace(
    code,
    /reset\s*\(\s*\)\s*\{\s*this\.([a-zA-Z0-9_$]{1,8})\.([a-zA-Z0-9_$]{1,8})\.([a-zA-Z0-9_$]{1,8})\s*=\s*0\s*;/,
    "reset(){window.resetTime=Date.now();setTimeout(()=>{if(delayedKeyStorage){stuffKeys.call(keyObject,delayedKeyStorage);delayedKeyStorage=false;keyObject=false}},20);this.$1.$2.$3=0;"
  );
  code = assertReplace(
    code,
    /([a-zA-Z0-9_$]{1,8})\s*\(\s*a\s*\)\s*\{\s*if\s*\(\s*!this\.closed\s*\)\s*\{/,
    "$1=window.stuffKeys=function(a){if(!this.closed){if(window.resetTime<window.lastFrameTime){"
  );
  code = assertReplace(
    code,
    /a\.preventDefault\s*\(\s*\)\s*\}\s*\}\}/,
    "a.preventDefault()}}else{delayedKeyStorage=a;keyObject=this}}};"
  );
  return code;
}
window.CustomBowl = {};

window.CustomBowl.make = function () {
    const FRUIT_BOWL_INDEX = 24;
    const COUNT_MINIMA = {
        0: 1,  // 1a
        1: 3,  // 3a
        2: 5,  // 5a
        3: 10, // 10a
        4: 6,  // dice
        5: 24, // bomb
        6: 5   // tally
    };
    const BOWL_SPRITE = "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_22.png";

    window.custom_pair_call_counter = 0;
    window.__portalAppleArrayName = window.__portalAppleArrayName || "ka";
    window.__customBowlCountOverride = null;

    function getCountIndex() {
        if (typeof window.__customBowlCountOverride === "number" && !isNaN(window.__customBowlCountOverride)) {
            return window.__customBowlCountOverride;
        }
        if (window.timeKeeper && typeof window.timeKeeper.getCurrentSetting === "function") {
            const c = window.timeKeeper.getCurrentSetting("count");
            if (typeof c === "number" && !isNaN(c)) return c;
        }
        if (typeof window.count_var !== "undefined") {
            const c = Number(window.count_var);
            if (!isNaN(c)) return c;
        }
        return 0;
    }

    window.getPortalPairMinimum = function () {
        const count = getCountIndex();
        return COUNT_MINIMA.hasOwnProperty(count) ? COUNT_MINIMA[count] : 1;
    };

    function countKey(count) {
        return String(count);
    }

    function defaultPoolForCount(count) {
        const min = COUNT_MINIMA.hasOwnProperty(count) ? COUNT_MINIMA[count] : 1;
        return normalizePool([], min);
    }

    function normalizePool(pool, min) {
        let next = Array.isArray(pool) ? pool.map(Number).filter((n) => !isNaN(n) && n !== FRUIT_BOWL_INDEX) : [];
        next = Array.from(new Set(next));
        if (next.length < min) {
            for (let i = 0; i < 64 && next.length < min; i++) {
                if (i === FRUIT_BOWL_INDEX) continue;
                if (!next.includes(i)) next.push(i);
            }
        }
        return next;
    }

    function ensurePairsByCountStore() {
        if (!window.pudding_settings.SelectedPairsByCount || typeof window.pudding_settings.SelectedPairsByCount !== "object") {
            window.pudding_settings.SelectedPairsByCount = {};
        }
        for (const c of Object.keys(COUNT_MINIMA)) {
            const key = countKey(c);
            if (!Array.isArray(window.pudding_settings.SelectedPairsByCount[key])) {
                window.pudding_settings.SelectedPairsByCount[key] = defaultPoolForCount(Number(c));
            }
        }
    }

    function getPoolForCurrentCount(minOverride) {
        ensurePairsByCountStore();
        const count = getCountIndex();
        const key = countKey(count);
        const min = Math.max(window.getPortalPairMinimum(), minOverride || 0);
        const pool = normalizePool(window.pudding_settings.SelectedPairsByCount[key], min);
        window.pudding_settings.SelectedPairsByCount[key] = pool;
        window.pudding_settings.SelectedPairs = pool;
        return pool;
    }

    function setPoolForCurrentCount(pool) {
        ensurePairsByCountStore();
        const count = getCountIndex();
        const key = countKey(count);
        const min = window.getPortalPairMinimum();
        const next = normalizePool(pool, min);
        window.pudding_settings.SelectedPairsByCount[key] = next;
        window.pudding_settings.SelectedPairs = next;
        return next;
    }

    function ensurePoolMeetsMinimum() {
        return getPoolForCurrentCount();
    }

    function getAppleList(appleManager) {
        if (!appleManager) return null;
        const key = window.__portalAppleArrayName || "ka";
        if (Array.isArray(appleManager[key])) return appleManager[key];
        if (Array.isArray(appleManager.ka)) return appleManager.ka;
        return null;
    }

    // Types currently visible on the board (type < 0 = slot being reassigned, not showing).
    function typesOnBoard(appleManager) {
        const showing = new Set();
        const apples = getAppleList(appleManager);
        if (!apples) return showing;
        for (const apple of apples) {
            if (!apple) continue;
            const t = Number(apple.type);
            if (!isNaN(t) && t >= 0) showing.add(t);
        }
        return showing;
    }

    function isCustomBowlActive(settings) {
        if (!(window.pudding_settings && window.pudding_settings.PortalPairs && settings)) return false;
        const prop = window.__fruitBowlSettingProp || "Ka";
        return Number(settings[prop]) === 24;
    }

    function syncCountOverride(settings) {
        if (settings && typeof settings.ka === "number" && !isNaN(settings.ka)) {
            window.__customBowlCountOverride = settings.ka;
        }
    }

    /**
     * Roll a fruit from the custom bowl pool.
     * Unique (pool − showing) when portal OR AlwaysUniqueFruit is on.
     * Portal always uses unique logic; the checkbox enables it for other modes.
     * If allowed is empty, fall back to full pool (re-roll eaten type when board is full).
     */
    window.pickCustomPortalType = function (appleManager, isPortal) {
        syncCountOverride(appleManager && appleManager.settings);
        try {
            const pool = ensurePoolMeetsMinimum();
            if (!pool.length) return 0;
            const useUnique = !!isPortal ||
                !!(window.pudding_settings && window.pudding_settings.AlwaysUniqueFruit);
            if (!useUnique) {
                return pool[Math.floor(Math.random() * pool.length)];
            }
            const showing = typesOnBoard(appleManager);
            const available = pool.filter((t) => !showing.has(t));
            const source = available.length > 0 ? available : pool;
            return source[Math.floor(Math.random() * source.length)];
        } finally {
            window.__customBowlCountOverride = null;
        }
    };

    // Portal-only full board assign: clear slots, then roll with showing-list rules.
    window.assignCustomPortalPairTypes = function (appleManager) {
        if (!appleManager || !isCustomBowlActive(appleManager.settings)) return false;
        const apples = getAppleList(appleManager);
        if (!apples || apples.length < 2) return false;

        for (let i = 0; i < apples.length; i++) apples[i].type = -1;

        for (let i = 0; i < apples.length; i += 2) {
            const t = window.pickCustomPortalType(appleManager, true);
            apples[i].type = t;
            if (apples[i + 1]) apples[i + 1].type = t;
        }
        return true;
    };

    // Portal-only safety: if two pairs share a type, re-roll with showing-list rules.
    window.enforceUniquePortalFruitTypes = function (appleManager) {
        if (!appleManager || !isCustomBowlActive(appleManager.settings)) return;
        const apples = getAppleList(appleManager);
        if (!apples || apples.length < 2) return;

        const seen = new Set();
        for (let i = 0; i < apples.length; i += 2) {
            const a0 = apples[i];
            const a1 = apples[i + 1];
            let t = Number(a0 && a0.type);
            if (isNaN(t) || t < 0 || seen.has(t)) {
                if (a0) a0.type = -1;
                if (a1) a1.type = -1;
                t = window.pickCustomPortalType(appleManager, true);
                if (a0) a0.type = t;
                if (a1) a1.type = t;
            } else if (a1 && Number(a1.type) !== t) {
                a1.type = t;
            }
            seen.add(t);
        }
    };

    window.give_custom_pair = function () {
        return window.pickCustomPortalType(null, true);
    };
    window.startCustomBowlDeal = function () { /* no-op */ };
    window.endCustomBowlDeal = function () { /* no-op */ };

    function getFruitSrc(index) {
        const apple = document.querySelector("#apple");
        if (apple && apple.children[index] && apple.children[index].src) {
            return apple.children[index].src;
        }
        if (index < FRUIT_BOWL_INDEX) {
            const ver = index >= 22 ? "v18" : "v17";
            const num = String(index).padStart(2, "0");
            return `https://www.google.com/logos/fnbx/snake_arcade/${ver}/apple_${num}.png`;
        }
        return BOWL_SPRITE;
    }

    function buildFruitOptions() {
        const apple = document.querySelector("#apple");
        const options = [];
        if (!apple) return options;
        for (let i = 0; i < apple.children.length; i++) {
            if (i === FRUIT_BOWL_INDEX) continue;
            options.push(i);
        }
        return options;
    }

    function updateStatusLabel() {
        const el = document.getElementById("fruit-bowl-status");
        if (!el) return;
        const pool = getPoolForCurrentCount();
        const min = window.getPortalPairMinimum();
        el.textContent = `Selected ${pool.length} / min ${min}`;
    }

    function renderFruitGrid() {
        const grid = document.getElementById("fruit-bowl-grid");
        if (!grid) return;
        const pool = new Set(ensurePoolMeetsMinimum());
        const options = buildFruitOptions();
        const min = window.getPortalPairMinimum();
        grid.innerHTML = "";

        const rowSize = 6;
        for (let i = 0; i < options.length; i += rowSize) {
            const row = document.createElement("div");
            row.style = "display:flex;flex-wrap:nowrap;gap:8px;margin-bottom:8px;justify-content:center;";
            options.slice(i, i + rowSize).forEach((fruitIndex) => {
                const selected = pool.has(fruitIndex);
                const cell = document.createElement("div");
                cell.className = "blender_icon" + (selected ? " blender_icon_on" : "");
                cell.style = "width:52px;height:52px;padding-bottom:0;flex:0 0 52px;display:flex;align-items:center;justify-content:center;cursor:pointer;";
                cell.dataset.fruit = String(fruitIndex);
                cell.title = `Fruit ${fruitIndex}`;

                const img = document.createElement("img");
                img.className = "blender_icon_img" + (selected ? " blender_icon_img_selected" : "");
                img.src = getFruitSrc(fruitIndex);
                img.draggable = false;
                img.style = "width:44px;height:44px;max-width:100%;";
                cell.appendChild(img);

                cell.addEventListener("click", function () {
                    if (!window.pudding_settings.PortalPairs) return;
                    const current = getPoolForCurrentCount().slice();
                    const idx = current.indexOf(fruitIndex);
                    if (idx >= 0) {
                        if (current.length <= min) return;
                        current.splice(idx, 1);
                    } else {
                        current.push(fruitIndex);
                    }
                    setPoolForCurrentCount(current.sort((a, b) => a - b));
                    if (typeof window.saveSettings === "function") window.saveSettings();
                    renderFruitGrid();
                    updateStatusLabel();
                });

                row.appendChild(cell);
            });
            grid.appendChild(row);
        }
        updateStatusLabel();
    }

    function syncPanelEnabledState() {
        const toggle = document.getElementById("fruit-bowl-enable");
        if (toggle) toggle.checked = !!window.pudding_settings.PortalPairs;
        const uniqueToggle = document.getElementById("fruit-bowl-always-unique");
        if (uniqueToggle) uniqueToggle.checked = !!window.pudding_settings.AlwaysUniqueFruit;
        const grid = document.getElementById("fruit-bowl-grid");
        if (grid) {
            grid.style.opacity = window.pudding_settings.PortalPairs ? "1" : "0.45";
            grid.style.pointerEvents = window.pudding_settings.PortalPairs ? "auto" : "none";
        }
    }

    // Theme background is applied separately via applyPanelTheme (Theme.js sets real_topbar_color).
    const PANEL_STYLE =
        "position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:100000;" +
        "padding:18px 20px 16px;display:none;border-radius:8px;" +
        "width:min(480px,92vw);min-width:280px;height:auto;min-height:320px;max-height:min(720px,88vh);" +
        "overflow-x:hidden;overflow-y:auto;visibility:hidden;box-sizing:border-box;" +
        "box-shadow:0 12px 36px rgba(0,0,0,0.5);border:2px solid rgba(255,255,255,0.18);";

    const BACKDROP_STYLE =
        "position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:99999;" +
        "background:rgba(0,0,0,0.45);display:none;visibility:hidden;";

    function applyPanelTheme(panel) {
        if (!panel) return;
        const color = window.real_topbar_color || "#4a752c";
        panel.style.background = color;
        panel.style.backgroundColor = color;
    }

    function getPanelHost() {
        return document.body;
    }

    function ensureUi() {
        const host = getPanelHost();
        if (!host) return;

        document.querySelectorAll("#fruit-bowl-settings-icon").forEach((el) => el.remove());

        // If an old tiny in-game panel exists, rebuild it.
        const existing = document.getElementById("fruit-bowl-popup-pudding");
        if (existing && existing.parentElement !== host) {
            existing.remove();
            const oldBd = document.getElementById("fruit-bowl-backdrop-pudding");
            if (oldBd) oldBd.remove();
        }

        const legacy = document.getElementById("portal-pairs-popup-pudding");
        if (legacy) legacy.remove();

        let backdrop = document.getElementById("fruit-bowl-backdrop-pudding");
        if (!backdrop) {
            backdrop = document.createElement("div");
            backdrop.id = "fruit-bowl-backdrop-pudding";
            backdrop.style.cssText = BACKDROP_STYLE;
            backdrop.addEventListener("click", function () {
                window.PortalPairsPanelHide();
            });
            host.appendChild(backdrop);
        } else if (backdrop.parentElement !== host) {
            host.appendChild(backdrop);
        }

        let panel = document.getElementById("fruit-bowl-popup-pudding");
        if (!panel) {
            panel = document.createElement("div");
            panel.id = "fruit-bowl-popup-pudding";
            panel.style.cssText = PANEL_STYLE;
            panel.innerHTML = `
                <div style="color:white;font-family:Roboto,Arial,sans-serif;text-align:center;margin-bottom:14px;font-size:18px;font-weight:bold;letter-spacing:0.2px;">Fruit Bowl Settings</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap;margin:0 auto 12px;width:100%;">
                    <div style="display:flex;align-items:center;gap:8px;">
                        <input class="form-check-input" type="checkbox" role="switch" id="fruit-bowl-enable" style="margin:0;float:none;position:static;">
                        <label class="form-check-label" for="fruit-bowl-enable" style="margin:0;color:white;font-family:Roboto,Arial,sans-serif;font-size:14px;line-height:1.2;">Enable custom fruit bowl</label>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px;">
                        <input class="form-check-input" type="checkbox" role="switch" id="fruit-bowl-always-unique" style="margin:0;float:none;position:static;">
                        <label class="form-check-label" for="fruit-bowl-always-unique" style="margin:0;color:white;font-family:Roboto,Arial,sans-serif;font-size:14px;line-height:1.2;">Always Unique Fruit</label>
                    </div>
                </div>
                <div id="fruit-bowl-status" style="color:#dce8c8;font-family:Roboto,Arial,sans-serif;font-size:13px;margin:0 0 12px 0;text-align:center;"></div>
                <div id="fruit-bowl-grid" style="padding:4px 0 8px;display:flex;flex-direction:column;align-items:center;"></div>
                <button type="button" class="btn" style="margin-top:8px;color:white;background-color:#1155CC;font-family:Roboto,Arial,sans-serif;width:100%;padding:8px 12px;font-size:14px;" id="fruit-bowl-close">Close</button>
            `;
            host.appendChild(panel);
            applyPanelTheme(panel);

            document.getElementById("fruit-bowl-enable").addEventListener("change", function () {
                window.pudding_settings.PortalPairs = !!this.checked;
                ensurePoolMeetsMinimum();
                if (typeof window.saveSettings === "function") window.saveSettings();
                syncPanelEnabledState();
                renderFruitGrid();
            });
            document.getElementById("fruit-bowl-always-unique").addEventListener("change", function () {
                window.pudding_settings.AlwaysUniqueFruit = !!this.checked;
                if (typeof window.saveSettings === "function") window.saveSettings();
                syncPanelEnabledState();
            });
            document.getElementById("fruit-bowl-close").addEventListener("click", function () {
                window.PortalPairsPanelHide();
            });
        } else {
            if (panel.parentElement !== host) host.appendChild(panel);
            const shown = !!window.portalPairsPanelVisible;
            panel.style.cssText = PANEL_STYLE + (shown
                ? "display:block;visibility:visible;"
                : "display:none;visibility:hidden;");
            applyPanelTheme(panel);
            backdrop.style.cssText = BACKDROP_STYLE + (shown
                ? "display:block;visibility:visible;"
                : "display:none;visibility:hidden;");
        }

        syncPanelEnabledState();
        renderFruitGrid();
    }

    window.PortalPairsPanelShow = function () {
        ensureUi();
        try { ensurePoolMeetsMinimum(); } catch (e) { /* settings may still be loading */ }
        syncPanelEnabledState();
        renderFruitGrid();
        const panel = document.getElementById("fruit-bowl-popup-pudding");
        const backdrop = document.getElementById("fruit-bowl-backdrop-pudding");
        if (panel) {
            panel.style.display = "block";
            panel.style.visibility = "visible";
            applyPanelTheme(panel);
        }
        if (backdrop) {
            backdrop.style.display = "block";
            backdrop.style.visibility = "visible";
        }
        window.portalPairsPanelVisible = true;
    };

    window.PortalPairsPanelHide = function () {
        const panel = document.getElementById("fruit-bowl-popup-pudding");
        const backdrop = document.getElementById("fruit-bowl-backdrop-pudding");
        if (panel) {
            panel.style.display = "none";
            panel.style.visibility = "hidden";
        }
        if (backdrop) {
            backdrop.style.display = "none";
            backdrop.style.visibility = "hidden";
        }
        window.portalPairsPanelVisible = false;
    };

    window.TogglePortalPairsPanel = function () {
        if (window.portalPairsPanelVisible) window.PortalPairsPanelHide();
        else window.PortalPairsPanelShow();
    };

    window.CustomBowlSyncUi = function () {
        if (!window.portalPairsPanelVisible) return;
        ensurePoolMeetsMinimum();
        syncPanelEnabledState();
        renderFruitGrid();
    };

    setTimeout(function () {
        try { ensurePoolMeetsMinimum(); } catch (e) { /* ignore */ }
        ensureUi();
        window.PortalPairsPanelHide();
    }, 0);
};

window.CustomBowl.alterCode = function (code) {
    const reset_regex = new RegExp(/;this\.reset\(\)\}\}/);
    catchError(reset_regex, code);
    code = code.assertReplace(reset_regex, `window.custom_pair_call_counter=0;$&`);

    code = code.assertReplace(
        /case "apple":/,
        `case "apple":setTimeout(function(){window.CustomBowlSyncUi&&window.CustomBowlSyncUi()},0);`
    );
    code = code.assertReplace(
        /case "count":/,
        `case "count":setTimeout(function(){window.CustomBowlSyncUi&&window.CustomBowlSyncUi()},0);`
    );

    const aaf_regex = /([a-zA-Z0-9_$]{1,8})=function\(a\)\{if\(a\.settings\.([a-zA-Z0-9_$]{1,8})===24\)\{/;
    catchError(aaf_regex, code);
    const aaf_match = code.match(aaf_regex);
    const aaf_name = aaf_match[1];
    const fruit_setting = aaf_match[2];

    const baf_regex = /([a-zA-Z0-9_$]{1,8})=function\(a\)\{if\(([a-zA-Z0-9_$]{1,8})\(a\.settings,2\)\)\{var b=\s*Math\.floor\(48\/a\.([a-zA-Z0-9_$]{1,8})\.length\);/;
    catchError(baf_regex, code);
    const baf_match = code.match(baf_regex);
    const baf_name = baf_match[1];
    const portal_check = baf_match[2];
    const apple_array = baf_match[3];
    window.__portalAppleArrayName = apple_array;
    window.__fruitBowlSettingProp = fruit_setting;

    // Portal init: clear + roll from (pool − showing) pair by pair.
    code = code.assertReplace(
        baf_regex,
        `${baf_name}=function(a){` +
        `if(${portal_check}(a.settings,2)&&window.assignCustomPortalPairTypes&&window.assignCustomPortalPairTypes(a))return;` +
        `if(${portal_check}(a.settings,2)){var b=Math.floor(48/a.${apple_array}.length);`
    );

    // Custom bowl pick: portal → showing-list uniqueness; other modes → random from pool.
    code = code.assertReplace(
        aaf_regex,
        `${aaf_name}=function(a){` +
        `if(window.pudding_settings&&window.pudding_settings.PortalPairs&&a.settings.${fruit_setting}===24){` +
        `return window.pickCustomPortalType(a,${portal_check}(a.settings,2));}` +
        `if(a.settings.${fruit_setting}===24){`
    );

    // Before in-place portal retype, drop the eaten pair from "showing" (type=-1).
    const inplace_regex = new RegExp(
        `Ni&&\\(this\\.wa\\.ka\\[vd\\]\\.type=${aaf_name}\\(this\\.wa\\),this\\.wa\\.ka\\[Ok\\]\\.type=this\\.wa\\.ka\\[vd\\]\\.type\\)`
    );
    catchError(inplace_regex, code);
    code = code.assertReplace(
        inplace_regex,
        `Ni&&(this.wa.ka[vd].type=-1,this.wa.ka[Ok].type=-1,this.wa.ka[vd].type=${aaf_name}(this.wa),this.wa.ka[Ok].type=this.wa.ka[vd].type)`
    );

    const refill_regex = new RegExp(
        `if\\(([a-zA-Z0-9_$]{1,8})\\(a\\.settings,2\\)&&b\\.length>0\\)for\\(b\\[0\\]\\.type=${aaf_name}\\(a\\.([a-zA-Z0-9_$]{1,8})\\),b\\[1\\]\\.type=b\\[0\\]\\.type,a=2;a<b\\.length;a\\+=2\\)b\\[a\\]\\.type=\\(b\\[a-2\\]\\.type\\+1\\)%24,b\\[a\\+1\\]\\.type=b\\[a\\]\\.type`
    );
    catchError(refill_regex, code);
    const refill_match = code.match(refill_regex);
    const mode_check = refill_match[1];
    const apple_mgr_prop = refill_match[2];

    const refill_replacement =
        `if(${mode_check}(a.settings,2)&&b.length>0){` +
        `if(window.pudding_settings&&window.pudding_settings.PortalPairs&&a.settings.${fruit_setting}===24&&window.assignCustomPortalPairTypes){` +
        `window.assignCustomPortalPairTypes(a.${apple_mgr_prop});` +
        `}else for(b[0].type=${aaf_name}(a.${apple_mgr_prop}),b[1].type=b[0].type,a=2;a<b.length;a+=2)b[a].type=(b[a-2].type+1)%24,b[a+1].type=b[a].type;` +
        `window.enforceUniquePortalFruitTypes&&window.enforceUniquePortalFruitTypes(a.${apple_mgr_prop})` +
        `}`;

    code = code.assertReplace(refill_regex, refill_replacement);

    // Enforce after baF without breaking if/else (comma expression).
    code = code.assertReplace(
        new RegExp(`${baf_name}\\(this\\)`),
        `(${baf_name}(this),window.enforceUniquePortalFruitTypes&&window.enforceUniquePortalFruitTypes(this))`
    );
    const bafArgRegex = new RegExp(`${baf_name}\\(a\\.([a-zA-Z0-9_$]{1,8})\\)`);
    catchError(bafArgRegex, code);
    const bafArgProp = code.match(bafArgRegex)[1];
    code = code.assertReplace(
        bafArgRegex,
        `(${baf_name}(a.${bafArgProp}),window.enforceUniquePortalFruitTypes&&window.enforceUniquePortalFruitTypes(a.${bafArgProp}))`
    );

    return code;
};
window.PuddingMod = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.PuddingMod.runCodeBefore = function () {
  window.isVisi = false;

  console.log("Thank you for loading Yarmiplay's Pudding Mod! Hope you enjoy :)");
  console.log("Please provide feedback and report bugs in #snake-modding in the Official Google Snake Discord");
  console.log("Google Snake SRC Discord link: https://discord.gg/dDuCTm62EZ");

  window.getRandomBoolean = function () {
    return Math.random() < 0.5;
  }

  window.getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  window.escapeRegex = function escapeRegex(string) {
      return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  window.loadCode = function loadAndRunCodeSynchronous(url) {
    let req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.onload = function () {
      if (this.status === 200) {
        (1, eval)(this.responseText);
      } else {
        console.log(`Loading selected mod returned non-200 status. Received: ${this.status}`);
      }
    };
    req.onerror = function (event) {
      console.error(`Error when attempting to retrieve mod code from ${url}`);
      console.log(event);
    };
    req.send();
  }

  window.NepDebug = false;
  if (localStorage.getItem('snakeChosenMod') === "customUrl") {
    console.log("Detect customUrl - enabling debug mode and printing initial code")
    window.NepDebug = true;
  }

  window.catchError = function catchError(culprit_regex, code) {
    try {
      something = code.match(culprit_regex)[0];
    } catch (e) {
      console.log("I caught it!")
      console.log(culprit_regex)
      console.log(code)
      throw e
    }
    return false;
  }

  //Style differently depending on if snake is centered.
  let isSnakeCentered = !window.location.href.includes('fbx');
  let advancedSettings = JSON.parse(localStorage.getItem('snakeAdvancedSettings')) ?? {};
  if (advancedSettings.hasOwnProperty('fbxCentered') && advancedSettings.fbxCentered) {
    isSnakeCentered = true;
  }

  //if (!isSnakeCentered) {
    // Move menu so it doesn't overlap panels
    //document.getElementsByClassName('bZUgDf')[0].style.width = '50%';
  //}

  window.Libraries = [
    "Core",
    "Theme",
    "DistinctVisual",
    "Counter",
    "TimeKeeper",
    "Fruit",
    "TopBar",
    "SnakeColor",
    "SettingsSaver",
    "SpeedInfo",
    "InputDisplay",
    "Timer",
    "BootstrapMenu",
    "ResetKey",
    "RenderDelayFix",
    "CustomBowl",
  ];
  console.log("Enabling Pudding Mod");

  libUrlPrefix = window.NepDebug ? "http://127.0.0.1:5500/Libraries/" : "https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakePudding/main/Libraries/";
  window.Libraries.forEach(LibName => {
    console.log("Loading library: " + LibName)
    eval("window." + LibName + ".make();")
  });


};

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.PuddingMod.alterSnakeCode = function (code) {
  if (window.NepDebug) {
    console.log(code)
  }


  code = code.replaceAll(/\$\$/gm, `doubleD`)
  code = code.replaceAll(/\$\&/gm, `$ &`)

  //code = code.assertReplaceAll(/\$i/gm, `something_i`)

  window.Libraries.forEach(LibName => {
    console.log("Alter code with library: " + LibName)
    eval("code = window." + LibName + ".alterCode(code);")
  });

  console.log("Done, enjoy Pudding Mod!");

  if (window.NepDebug) {
    console.log(code)
  }

  return code;
};

////////////////////////////////////////////////////////////////////
//RUNCODEAFTER
////////////////////////////////////////////////////////////////////

window.PuddingMod.runCodeAfter = function () {
  let modIndicator = document.createElement('div');
  modIndicator.style = 'position:absolute;font-family:Roboto,Arial,sans-serif;color:white;font-size:14px;padding-top:4px;padding-left:30px;user-select: none;';
  modIndicator.textContent = 'Pudding Mod';
  if (window.loaded_code) {
    // commented out cuz i dont want it to annoy people since its now the official version
    //modIndicator.textContent = 'Pudding Mod - Google Test Version';
  }
  let canvasNode = document.getElementsByClassName('jNB0Ic')[0];
  document.getElementsByClassName('EjCLSb')[0].insertBefore(modIndicator, canvasNode);

};

window.moreMenu = {
  runCodeBefore: () => {
    window.uiImage = src => {
      let img = new Image()
      img.src = src
      img.width = 40
      img.height = 40
      img.class = 'DqMRee SsAred'
      return img
    }

  
    for(let src of [
      'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Micro.png?raw=true',
      'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Tiny.png?raw=true',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAABYElEQVRoQ+2Y2w7DIAxD1///6E2VRsUYJXZuFIm9AuHEMSzleC38OxZmf214oXrvZtxNMEugAtWL0QLX/JY9f3SwBGLgz31G81VHLwq+B1NXw7LvFdsSRKOkZs1tVTY8aNilbeNqmVOwTNssC+9umUzl3VXf8OC5WVb5EL9n2CYMPBPeciVPaw9CvF6ysSiCgIV9iFhtg7Q0oR8lFuUR+HrOKBGVEzLh3ROZBS99aUGWfhI8a0NTS0xv5r1ghvLIFQvl+SR4OikGvhec3XDU67CxKM+3wTVNF/JQBQsKT6xevMo1RislvJrR8Rj4E7r3L8nEmKZ8D54Br9ePHmfhmPDE792l8Xm59qS1qbbRJn63LhQ+w+9QT6NpQe9aWrQCroeVybL1q+TfUdfoclg18PXGjEelZJlYlzBoyaFGaTBJgpPGu6E3PFAWSVlp/NHKA/n/T8myjQpOWrThJYWixj+UTlgwJgIXFAAAAABJRU5ErkJggg==',
      'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Super%20Big.png?raw=true',
      'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Too%20Big.png?raw=true',
      'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Humongous.png?raw=true',
      'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Too%20Big.png?raw=true',
      'https://github.com/carlgustavh/GoogleSnakeCustomMenuStuffImages/blob/main/Way%20Too%20Big.png?raw=true'
    ]) document.querySelector('#size').appendChild(uiImage(src))
  
    for(let src of [
      'https://i.postimg.cc/bNYJfjyZ/Turtle-Bunny.png',
      'https://i.postimg.cc/GtdppWvS/Lightning.png',
      'https://i.postimg.cc/L43XWspd/Snail.png',
      'https://i.postimg.cc/brgwSmTY/Lightning-Snail.png',
      'https://i.postimg.cc/yN3xpXVn/Desert-Bus.png',
      'https://i.postimg.cc/dVLVDmTv/Bullet.png',
      'https://i.postimg.cc/4N83JFyB/Red-Bullet.png',
      'https://i.postimg.cc/MpNKBMyB/Purple-Bullet.png',
      'https://i.postimg.cc/qRdJmPDM/Blue-Bullet.png',
      'https://i.postimg.cc/fL4LGtys/Eternal.png',
      'https://i.postimg.cc/LXzX29g1/Fire-Bunny.png'
    ]) document.querySelector('#speed').appendChild(uiImage(src))
  
    for(let src of [
      'https://i.postimg.cc/cJx1Lt2W/13-cr.png',
      'https://i.postimg.cc/HWq26Bdv/25.png',
      'https://i.postimg.cc/c4fc2wJx/40.png',
      'https://i.postimg.cc/50sStLRc/87.png',
      'https://i.postimg.cc/YCkxH041/Apple-Bomb.png',
      'https://i.postimg.cc/wMx20pWL/Nuke.png'
    ]) document.querySelector('#count').appendChild(uiImage(src))
  },
  alterSnakeCode: code => {
    const resetFunction = code.match(
      /reset\n?\(\n?\)\n?{\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?\[\];[^]*?!1\n?\)\n?}/
    )[0]
  
    const selectedAppleCount = resetFunction.match(
      /this\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?!==\n?0/
    )[0].replace(/!==\n?0/, '').replace(/\n/g, '')
  
    const applePlacementStem = resetFunction.match(
      /this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?push\n?\(\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?this\n?,/
    )[0]
    const appleArray = applePlacementStem.match(/this\n?\.\n?[a-zA-Z0-9_$]{1,8}/)[0]
  
    const checkBadMode = code.match(
      /[a-zA-Z0-9_$]{1,8}\n?=\n?function\n?\(a\)\n?{\n?return [a-zA-Z0-9_$]{1,8}\n?\(\n?a\n?,\n?2\n?\)\n?\|\|\n?[a-zA-Z0-9_$]{1,8}\n?\(a\n?,\n?8\n?\)\n?\|\|\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?a\n?,\n?9\n?\)\n?\|\|\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?a\n?,\n?10\n?\)\n?}/
    )[0].match(/[a-zA-Z0-9_$]{1,8}/)[0]
    const isModeSelected = code.match(
      /[a-zA-Z0-9_$]{1,8}\n?=\n?function\n?\(\n?a\n?,\n?b\n?\)\n?{\n?return a\.[a-zA-Z0-9_$]{1,8}\?a\.[a-zA-Z0-9_$]{1,8}\.has\(b\):[^]*?===\n?b\n?}/
    )[0].match(/[a-zA-Z0-9_$]{1,8}/)[0]
  
  
    code = code.assertReplace(resetFunction,
      resetFunction.assertReplace(
        'if(a)',
        `
        if(${selectedAppleCount} > 6) {

          if(!${checkBadMode}(this.settings)) {
            if(${selectedAppleCount} === 7) {
              ${applePlacementStem} +1, +2))
              ${applePlacementStem} -1, +2))
              ${applePlacementStem} -3, +2))
              ${applePlacementStem} +0, +1))
              ${applePlacementStem} -2, +1))
              ${applePlacementStem} +1, +0))
              ${applePlacementStem} -1, +0))
              ${applePlacementStem} -3, +0))
              ${applePlacementStem} +0, -1))
              ${applePlacementStem} -2, -1))
              ${applePlacementStem} +1, -2))
              ${applePlacementStem} -1, -2))
              ${applePlacementStem} -3, -2))
            } else if(${selectedAppleCount} === 8) {
              ${applePlacementStem} +1, +2))
              ${applePlacementStem} +0, +2))
              ${applePlacementStem} -1, +2))
              ${applePlacementStem} -2, +2))
              ${applePlacementStem} -3, +2))
              ${applePlacementStem} +1, +1))
              ${applePlacementStem} +0, +1))
              ${applePlacementStem} -1, +1))
              ${applePlacementStem} -2, +1))
              ${applePlacementStem} -3, +1))
              ${applePlacementStem} +1, +0))
              ${applePlacementStem} +0, +0))
              ${applePlacementStem} -1, +0))
              ${applePlacementStem} -2, +0))
              ${applePlacementStem} -3, +0))
              ${applePlacementStem} +1, -1))
              ${applePlacementStem} +0, -1))
              ${applePlacementStem} -1, -1))
              ${applePlacementStem} -2, -1))
              ${applePlacementStem} -3, -1))
              ${applePlacementStem} +1, -2))
              ${applePlacementStem} +0, -2))
              ${applePlacementStem} -1, -2))
              ${applePlacementStem} -2, -2))
              ${applePlacementStem} -3, -2))
            } else if(${selectedAppleCount} === 9) {
              ${applePlacementStem} +1, +2))
              ${applePlacementStem} +0, +2))
              ${applePlacementStem} -1, +2))
              ${applePlacementStem} -2, +2))
              ${applePlacementStem} -3, +2))
              ${applePlacementStem} +1, +1))
              ${applePlacementStem} +0, +1))
              ${applePlacementStem} -1, +1))
              ${applePlacementStem} -2, +1))
              ${applePlacementStem} -3, +1))
              ${applePlacementStem} +1, +0))
              ${applePlacementStem} +0, +0))
              ${applePlacementStem} -1, +0))
              ${applePlacementStem} -2, +0))
              ${applePlacementStem} -3, +0))
              ${applePlacementStem} +1, -1))
              ${applePlacementStem} +0, -1))
              ${applePlacementStem} -1, -1))
              ${applePlacementStem} -2, -1))
              ${applePlacementStem} -3, -1))
              ${applePlacementStem} +1, -2))
              ${applePlacementStem} +0, -2))
              ${applePlacementStem} -1, -2))
              ${applePlacementStem} -2, -2))
              ${applePlacementStem} -3, -2))
              ${applePlacementStem} -3, -3))
              ${applePlacementStem} -2, -3))
              ${applePlacementStem} -1, -3))
              ${applePlacementStem} +0, -3))
              ${applePlacementStem} +1, -3))
              ${applePlacementStem} +2, -2))
              ${applePlacementStem} +2, -1))
              ${applePlacementStem} +2, +0))
              ${applePlacementStem} +2, +1))
              ${applePlacementStem} +2, +2))
              ${applePlacementStem} +1, +3))
              ${applePlacementStem} +0, +3))
              ${applePlacementStem} -1, +3))
              ${applePlacementStem} -2, +3))
              ${applePlacementStem} -3, +3))
            } else if(${selectedAppleCount} === 10) {
              for(let dy = -4; dy <= 4; dy++)
                for(let dx = -7; dx <= 2; dx++)
                  ${applePlacementStem} dx, dy))
            } else if(${selectedAppleCount} === 11) {
              for(let i = 0; i < 200; i++)
                ${applePlacementStem} -1, +0))
            } else if(${selectedAppleCount} === 12) {
              for(let i = 0; i < 10000; i++)
                ${applePlacementStem} -1, +0))
            } else
              ${applePlacementStem} +100000, +1))
  
          } else {

            if(${selectedAppleCount} < 12) {
              const count = (
                ${selectedAppleCount} === 6
                  ? 13
                : ${selectedAppleCount} === 7
                  ? 25
                : ${selectedAppleCount} === 8
                  ? 40
                : ${selectedAppleCount} === 9
                  ? 87
                : ${selectedAppleCount} === 10
                  ? 200
                : 0
              )
              for(let dx = 0; dx < count; dx++)
                for(const dy of [-4, 4])
                  ${applePlacementStem} -count + dx, dy))
            } else {
              for(let i = 0; i < 20000; i++)
                ${applePlacementStem} +0, +0))
            }
          }
        } else if(a)
        `
      ).assertReplace(
        /!1\n?\)\n?}/,
        `!1)
          if(${isModeSelected}(this.settings, 2) && ${selectedAppleCount} > 7) {
            for(let __i___ = 0; __i___ < ${appleArray}.length; __i___ += 2) {
              ${appleArray}[__i___].type = ${appleArray}[__i___ + 1].type = Math.floor(Math.random() * 24)
            }
          }
  
        }`
      )
    )
  
  
    const tileLengthSetLine = code.match(
      /this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?\(\n?d\n?\.\n?isMobile\n?\?\n?175\n?:\n?135\n?\)\n?\*\n?a\n?;/
    )[0]
    const selectedSpeed = code.match(
      /switch\n?\(\n?d\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?{\n?case(\n? \n?|\n)1\n?:\n?a\n?=\n?\.66/
    )[0].match(
      /d\n?\.\n?[a-zA-Z0-9_$]{1,8}/
    )[0].replace('d', 'this.settings')
  
    const tickFunction = code.match(
      /tick\n?\(\n?\)\n?{\n?[^]*?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?keys\n?,\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?,\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?}\n?}\n?}\n?}/
    )[0]
    const replacePoint = tickFunction.match(
      /\.5\n?:\n?1\.25\n?\);\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\+\+;/
    )[0]
  
    window.bunnyTurtleSpeed = 1.33
    window.lightningSnailSpeed = 1.85
  
    code = code.assertReplace(tickFunction,
      tickFunction.replaceAll(
        '&&', ' && '
      ).replace(
        replacePoint,
        replacePoint
         + `
          window.bunnyTurtleSpeed = Math.random() < .5 ? .66 : 1.33
          window.lightningSnailSpeed = Math.random() < .5 ? .45 : 1.85
          let speedMultiplier
          switch(${selectedSpeed}) {
            case 1:
              speedMultiplier = .66
              break
            case 2:
              speedMultiplier = 1.33
              break
            case 3:
              speedMultiplier = window.bunnyTurtleSpeed
              break
            case 4:
              speedMultiplier = .45
              break
            case 5:
              speedMultiplier = 1.85
              break
            case 6:
              speedMultiplier = window.lightningSnailSpeed
              break
            case 7:
              speedMultiplier = 18.5
              break
            case 8:
              speedMultiplier = .35
              break
            case 9:
              speedMultiplier = .25
              break
            case 10:
              speedMultiplier = .15
              break
            case 11:
              speedMultiplier = .05
              break
            case 12:
              speedMultiplier = 26640
              break
            case 13:
              speedMultiplier = .00001
              break
            default:
              speedMultiplier = 1
              break
          }
          ${tileLengthSetLine.replace(/\*\n?a/, '* speedMultiplier').replace('d.isMobile', 'this.settings.isMobile')}
        `
      )
    )
  
    const resetFunction1 = code.match(
      /reset\n?\(\n?\)\n?{\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?null[^]*?\.66[^]*?!0\n?\)\n?\)\n?}/
    )[0]
  
    code = code.assertReplace(resetFunction1,
      resetFunction1.assertReplace(
        /{case 1:a=\.66[^}]*?1}/,
        `{
          case 1:
            a = .66
            break a
          case 2:
            a = 1.33                       
            break a
          case 3:
            a = window.bunnyTurtleSpeed    
            break a
          case 4:
            a = .45                        
            break a
          case 5:
            a = 1.85                       
            break a
          case 6:
            a = window.lightningSnailSpeed 
            break a
          case 7:
            a = 18.5                       
            break a
          case 8:
            a = .35                        
            break a
          case 9:
            a = .25                        
            break a
          case 10:
            a = .15                        
            break a
          case 11:
            a = .05                        
            break a
          case 12:
            a = 26640                      
            break a
          case 13:
            a = .00001                     
            break a
          default:
            a = 1                          
            break a
        }`
      )
    );
  
    const speedIconFunction = code.match(
      /[a-zA-Z0-9_$]{1,8}\n?=\n?function\n?\(a\)\n?{\n?var b\n?=\n?a\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?===\n?1\n?;\n?a\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?clearRect\n?\(\n?0\n?,\n?0\n?,\n?[^]*?\n?0\n?\)\n?,\n?0\n?,\n?c\n?,\n?a\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?}/
    )[0]
    const canvWidth = speedIconFunction.match(
      /var c\n?=\n?a\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?width/
    )[0].assertReplace(/var c\n?=/, '')
    const canv = speedIconFunction.match(
      /a\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?render/g
    )[1].assertReplace(/.\n?render/, '')
    const selectedSpeed1 = speedIconFunction.match(
      /a\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?===\n?1/g
    )[1].assertReplace(/\n?===\n?1/, '')
  
    code = code.assertReplace(speedIconFunction,
      speedIconFunction.assertReplace(
        '&&', '?'
      ).assertReplace(
        /\)\n?\)\n?;/,
        `)) : ${selectedSpeed1} !== 0 && (${canv}.context.drawImage(document.querySelector('#speed').children[${selectedSpeed1}], ${canvWidth} - 80, d.y - 80, 80, 80));`
      )
    )
  
  
    const sizeHandleFunction = code.match(
      /[a-zA-Z0-9_$]{1,8}\n?\(\n?\)\n?{\n?var(\n|\n? \n?)a\n?=\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\("JI3Aqc[^]*?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?}\n?}/
    )[0]
    const selectedSize = sizeHandleFunction.match(
      /switch\n?\(\n?this\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?{\n?case 2\n?:/
    )[0].match(/this\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}/)[0]
    const sizeHold = sizeHandleFunction.match(
      /[a-zA-Z0-9_$]\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?new(\n? \n?|\n)_\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?Math\n?\.\n?floor\n?\(\n?[a-zA-Z0-9_$]\n?\/\n?[a-zA-Z0-9_$]\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?,\n?Math\n?\.\n?floor\n?\(\n?[a-zA-Z0-9_$]\n?\/\n?[a-zA-Z0-9_$]\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?\)\n?[^]*?;/
    )[0]
    const sizeHolder = sizeHold.match(/[a-zA-Z0-9_$]\n?\.\n?[a-zA-Z0-9_$]{1,8}/)[0]
    const dim = sizeHold.match(/[a-zA-Z0-9_$]\n?\/\n?[a-zA-Z0-9_$]\n?\.\n?[a-zA-Z0-9_$]{1,8}/)[0].replace(/[a-zA-Z0-9_$]\n?\//, '')
    const e = sizeHandleFunction.match(/[a-zA-Z0-9_$]\n?=\n?512/)[0][0]
  
    code = code.assertReplace(sizeHandleFunction,
      sizeHandleFunction
      .assertReplace(
        `Math.floor(Math.sqrt(${e}))`, `Math.max(1, Math.floor(Math.sqrt(${e})))`
      )
      .assertReplace(
        /new(\n|\n? \n?)_\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?Math\n?\.\n?floor[^]*?\)\n?\)/,
        `
        {
          width:  ${selectedSize} === 3 ? 5 : ${selectedSize} === 4 ? 7 : ${selectedSize} === 5 ? 12 : Math.floor(a / ${dim}),
          height: ${selectedSize} === 3 ? 4 : ${selectedSize} === 4 ? 6 : ${selectedSize} === 5 ? 11 : Math.floor(c / ${dim})
        }
        `
      )
      .assertReplace(
        `default:${e}=256}`,
        `
        case 3:
          ${e} = 20
          break
        case 4:
          ${e} = 42
          break
        case 5:
          ${e} = 132
          break
        case 6:
          ${e} = 1200
          break
        case 7:
          ${e} = 3600
          break
        case 8:
          ${e} = 9700
          break
        case 9:
          ${e} = 25000
          break
        case 10:
          ${e} = 318000
          break
        default:
          ${e} = 256
        }
        `
      )
      .assertReplace(
        /21\n?\)\n?}/,
        `
          21)
          break
        case 3:
          ${sizeHolder} = { width: 5, height: 4 }
          break
        case 4:
          ${sizeHolder} = { width: 7, height: 6 }
          break
        case 5:
          ${sizeHolder} = { width: 12, height: 11 }
          break
        case 6:
          ${sizeHolder} = { width: 37, height: 32 }
          break
        case 7:
          ${sizeHolder} = { width: 64, height: 56 }
          break
        case 8:
          ${sizeHolder} = { width: 105, height: 92 }
          break
        case 9:
          ${sizeHolder} = { width: 168, height: 147 }
          break
        case 10:
          ${sizeHolder} = { width: 600, height: 530 }
          break
        }
        if(this.settings.isMobile && [3, 4, 5].includes(${selectedSize})) {
          let squareSize = a / ${sizeHolder}.width
          if(squareSize * ${sizeHolder}.height > c)
            squareSize = c / ${sizeHolder}.height
          squareSize *= .98
          if(squareSize > 1) squareSize = ~~squareSize
          ${dim} = squareSize
          if(window.innerWidth / window.innerHeight < .55) {
            squareSize *= window.innerWidth / window.innerHeight * 1.75
            if(squareSize > 1) squareSize = ~~squareSize
            ${dim} = squareSize
          }
        }
        `
      )
    )
    
  
    const menuUpdateFunction = code.match(
      /[a-zA-Z0-9_$]{1,8}\n?\(\n?\)\n?{\n?if\n?\(\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?this\n?\)\n?\)\n?[^]*?"thso6e"\n?\)\n?}\n?}/
    )[0]
    const selectedAppleCount1 = `([...document.querySelector('#count').children].indexOf(document.querySelector('#count').getElementsByClassName('tuJOWd')[0]))`
  
  
    code = code.assertReplace(
      menuUpdateFunction,
      menuUpdateFunction.assertReplace(
        '}}',
        `}
          const appleCountDisplay = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0]
  
          // [...appleCountDisplay.children].forEach((e, i) => i > 1 && (appleCountDisplay.removeChild(appleCountDisplay.children[i])))
          for(let i = 2; i < appleCountDisplay.children.length; i++) {
            appleCountDisplay.removeChild(appleCountDisplay.children[i])
          }

          if(${selectedAppleCount1} > 3) {
            const __src = document.querySelector('#count').children[${selectedAppleCount1}].src
            const __img = window.uiImage(__src)
            __img.style.position = 'relative'
            __img.style.left = '50px'
            appleCountDisplay.appendChild(__img)
          }
        } 
        `
      )
    )
  
  
    const pixelIssueFunction = code.match(
      /[a-zA-Z0-9_$]{1,8}\n?=\n?function\n?\(\n?a\n?\)\n?{\n?var(\n| )b\n?=\n?a\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?;\n?if[^]*?10\n?}\n?}\n?}/
    )[0]
    const pixelIssueB = pixelIssueFunction.match(
      /var(\n| )b\n?=\n?a\n?\.\n?[a-zA-Z0-9_$]{1,8}/
    )[0].replace(/var(\n| )b\n?=\n?/, '')
    const boardDimensions = pixelIssueFunction.match(
      /b\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?height/
    )[0].replace('b', pixelIssueB).replace(/\n?\.\n?height/, '')
    const boardThing = pixelIssueFunction.match(
      /b\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\[\n?d\n?\.\n?y\n?\]\n?\[\n?d\n?\.\n?x\n?\]/
    )[0].replace(/\n?\[\n?d\n?\.\n?y\n?\]\n?\[\n?d\n?\.\n?x\n?\]/, '')
    code = code.assertReplaceAll(
      RegExp(`${boardThing}\\n?\\[\\n?c\\n?\\.\\n?y\\n?\\]\\n?\\[\\n?c\\n?\\.\\n?x\\n?\\]\\n?=\\n?e`, 'g'),
      `c.y >= 0 && c.y < ${boardDimensions}.height && c.x >= 0 && c.x < ${boardDimensions}.width && (${boardThing}[c.y][c.x] = e)`
    )
  
  
    code = code.assertReplace(
      /switch\n?\(\n?Math\n?\.\n?floor\n?\(\n?Math\n?\.\n?random\n?\(\n?\)\n?\*\n?6\n?\)\n?\)\n?{\n?default\n?:\n?case[^}]*?}/,
      'h = Math.floor(12 * Math.random());'
    ).assertReplace(
      /f\n?=\n?Math\n?\.\n?random\n?\(\n?\)\n?<\n?\.25\n?\?\n?Math\n?\.\n?random\n?\(\n?\)\n?<\n?\.25\n?\?\n?2\n?:\n?1\n?:\n?0/,
      'f = Math.floor(14 * Math.random())'
    ).assertReplace(
      /g\n?=\n?Math\n?\.\n?random\n?\(\n?\)\n?<\n?\.25\n?\?\n?Math\n?\.\n?random\n?\(\n?\)\n?<\n?\.25\n?\?\n?2\n?:\n?1\n?:\n?0/,
      'g = Math.floor(11 * Math.random())'
    )
  
  
  
    const appleTypeChosen = code.match(
      /for\n?\(\n?a\n?=\n?a\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}/
    )[0].match(/a\n?\.\n?settings\n?\.\n?[a-zA-Z0-9_$]{1,8}/)[0]

    code = code.assertReplace(
      RegExp(`for\\n?\\(\\n?a\\n?=\\n?${appleTypeChosen}\\n?;\\n?c\\.has\\n?\\(\\n?a\\n?\\)\\n?;\\n?\\)`),
      `for(a = ${appleTypeChosen}, __i = 0; c.has(a) && __i < 24; __i++)`
    )

    // pause mod code
    const pauseCondition = code.match(
      /\(\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\.\n?direction\n?!==\n?"NONE"\n?\|\|\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?\)\n?\)/
    )[0]

    code = code.assertReplace(
      pauseCondition,
      `(${pauseCondition} && !window.pauseGame)`
    )
  
  
    return code
  },
  runCodeAfter: () => {
    const modIndicator = document.createElement('div')
    modIndicator.style = `
      position: absolute;
      font-family: Roboto, Arial, sans-serif;
      color: white;
      font-size: 14px;
      padding-top: 4px;
      padding-left: 30px;
      user-select: none;
    `
    modIndicator.textContent = 'More Menu Mod'
    const canvasNode = document.getElementsByClassName('jNB0Ic')[0]
    document.getElementsByClassName('EjCLSb')[0].insertBefore(modIndicator, canvasNode)

    // pause mod code
    document.addEventListener('keydown', evt => {
      if(evt.code === 'KeyQ') {
        window.pauseGame = !window.pauseGame

        const pausedDarkOverlayDiv = document.getElementsByClassName('wjOYOd')[0]
        const menuDiv = pausedDarkOverlayDiv.children[0]

        if(window.pauseGame) {
          pausedDarkOverlayDiv.style.visibility = "visible"
          pausedDarkOverlayDiv.style.opacity = 1
          menuDiv.style.visibility = "hidden"
        } else {
          setTimeout(() => {
            if(!window.pauseGame) {
              menuDiv.style.visibility = "visible"
            }
          }, 500)
          pausedDarkOverlayDiv.style.visibility = "hidden"
          pausedDarkOverlayDiv.style.opacity = 0
        }
      }
    })
  }
}
window.VisibilityModCode = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.VisibilityModCode.runCodeBefore = function () {
  window.catchError = function catchError(culprit_regex, code) {
    try {
      something = code.match(culprit_regex)[0];
    } catch (e) {
      console.log("I caught it!")
      if (window.NepDebug) {
        console.log(culprit_regex)
        console.log(code)
      }
      return true;
    } return false;

  }

  function loadAndRunCodeSynchronous(url) {
    let req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.onload = function () {
      if (this.status === 200) {
        (1, eval)(this.responseText);
      } else {
        console.log(`Loading selected mod returned non-200 status. Received: ${this.status}`);
      }
    };
    req.onerror = function (event) {
      console.error(`Error when attempting to retrieve mod code from ${url}`);
      console.log(event);
    };
    req.send();
  }

  //loadAndRunCodeSynchronous('https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakePudding/main/PuddingMod.js');
  //window.PuddingMod.runCodeBefore();

  console.log("Enabling Visibility Mod");

  window.checkboxes = {
    checkboxStatuses: {
      leftEye: true, rightEye: true, body: true, snoot: true, nose: true,
      lightTiles: true, darkTiles: true, eatAnimation: true, fruit: true, poison: true, shadow: true,
      border: true, die: true, lumps: true, portals: true, flashSnake: false, shadowIncluded: true,
      keys: true, walls: true, locks: true, hotdogWalls: true, sokobanBox: true, sokobanGoal: true,
      mines: true, statue: true, brokenStatue: true, mineRadius: true, tongue: true,
      bridges: true, arrows: true, gates: true, shields: true,
      lightSnake: true, lightFruit: true,
    },
  };

  // The game builds the shadow as a silhouette of the sprite layer partway through a frame, so
  // anything we skip drawing would lose its shadow too. When Shadow Included is off, that part of
  // the frame runs twice: once with every silhouette gate forced open (what the shadow is taken
  // from), then the sprite layer is rewound and drawn again honouring the checkboxes. When it is
  // on, hidden parts simply are not drawn and their shadows go with them.
  window.visiFullPass = false;
  window.visiShadowScratch = null;
  window.visiShadowPassKeys = ['body', 'fruit', 'poison', 'lumps', 'leftEye', 'rightEye', 'snoot', 'nose',
    'eatAnimation', 'tongue', 'die', 'keys', 'sokobanBox'];

  window.visiBeginShadowPass = function visiBeginShadowPass(renderer, isInfinity) {
    window.visiFullPass = false;

    //Infinity mode composites the shadow from wrapped copies further down the frame, so the rewind
    //point here would land in the wrong place.
    let statuses = window.checkboxes.checkboxStatuses;
    if (isInfinity || !statuses.shadow || statuses.shadowIncluded) { return; }

    let anyHidden = false;
    for (let i = 0; i < window.visiShadowPassKeys.length; i++) {
      if (!statuses[window.visiShadowPassKeys[i]]) { anyHidden = true; break; }
    }
    if (!anyHidden) { return; }

    let source = renderer.ka.canvas;
    let scratch = window.visiShadowScratch;
    if (!scratch) {
      scratch = window.visiShadowScratch = document.createElement('canvas').getContext('2d');
    }
    if (scratch.canvas.width !== source.width || scratch.canvas.height !== source.height) {
      scratch.canvas.width = source.width;
      scratch.canvas.height = source.height;
    }
    scratch.setTransform(1, 0, 0, 1, 0, 0);
    scratch.globalAlpha = 1;
    scratch.globalCompositeOperation = 'copy';
    scratch.drawImage(source, 0, 0);
    scratch.globalCompositeOperation = 'source-over';

    window.visiFullPass = true;
  };

  window.visiEndShadowPass = function visiEndShadowPass(renderer) {
    if (!window.visiFullPass) { return false; }
    window.visiFullPass = false;

    let ctx = renderer.ka;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'copy';
    ctx.drawImage(window.visiShadowScratch.canvas, 0, 0);
    ctx.restore();
    return true;
  };

  // Border is also painted as CSS background-color on the canvas chrome; keep handles so the
  // checkbox can toggle it live without restarting.
  window.visiBorderEls = [];
  window.visiBorderColor = "";
  window.applyVisiBorder = function applyVisiBorder() {
    let color = window.checkboxes.checkboxStatuses.border ? (window.visiBorderColor || "") : "transparent";
    for (let i = 0; i < window.visiBorderEls.length; i++) {
      let el = window.visiBorderEls[i];
      if (el && el.style) { el.style.backgroundColor = color; }
    }
  };

  window.flashSnakeStatus = { flashCount: 0, currentlyFlashingSnake: false, durationMillisecond: 1000 };

  window.dragHandler = {
    dragItem: null,
    dragContainer: null,
    dragObject: null,
    active: false,
    currentX: 0,
    currentY: 0,
    initialX: 0,
    initialY: 0,
    xOffset: 0,
    yOffset: 0,
    dragStart: (e) => {
      if (e.target === window.dragHandler.dragItem) {
        window.dragHandler.initialX = e.clientX - window.dragHandler.xOffset;
        window.dragHandler.initialY = e.clientY - window.dragHandler.yOffset;
        window.dragHandler.active = true;
      }
    },
    dragEnd: (e) => {
      window.dragHandler.initialX = window.dragHandler.currentX;
      window.dragHandler.initialY = window.dragHandler.currentY;
      window.dragHandler.active = false;
    },
    drag: (e) => {
      if (window.dragHandler.active) {

        //Enforce coordinates being within viewport
        let restrictedClientX = Math.max(Math.min(e.clientX, window.innerWidth - 5), 5);
        let restrictedClientY = Math.max(Math.min(e.clientY, window.innerHeight - 5), 5);

        e.preventDefault();
        window.dragHandler.currentX = restrictedClientX - window.dragHandler.initialX;
        window.dragHandler.currentY = restrictedClientY - window.dragHandler.initialY;
        window.dragHandler.xOffset = window.dragHandler.currentX;
        window.dragHandler.yOffset = window.dragHandler.currentY;

        window.dragHandler.setTranslate(window.dragHandler.currentX, window.dragHandler.currentY, window.dragHandler.dragObject);
      }
    },
    setTranslate: function (xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    },
    initialiseDragHandler: function () {
      this.dragItem = document.getElementById('drag-handle');
      this.dragContainer = window;
      this.dragObject = document.getElementById('delete-stuff-draggable');

      //If it isn't fbx snake, then start at the left edge
      if (!/fbx\?fbx=snake_arcade/.test(document.location.href)) {
        this.dragObject.style.left = '5px';
      }

      this.dragContainer.addEventListener("mousedown", this.dragStart, false);
      this.dragContainer.addEventListener("mouseup", this.dragEnd, false);
      this.dragContainer.addEventListener("mousemove", this.drag, false);
    }
  };

  function setupEventListeners() {
    document.getElementById('delete-stuff-close').onclick = function () {
      document.getElementById('delete-stuff-popup').hidden = true;
    };

    document.addEventListener('keydown', function (event) {
      if (event.key == 'i') {
        document.getElementById('delete-stuff-popup').hidden = !document.getElementById('delete-stuff-popup').hidden;
      }
    });

    document.getElementById('left-eye').onchange = function () {
      window.checkboxes.checkboxStatuses.leftEye = this.checked;
    }

    document.getElementById('right-eye').onchange = function () {
      window.checkboxes.checkboxStatuses.rightEye = this.checked;
    }

    document.getElementById('snake-body').onchange = function () {
      window.checkboxes.checkboxStatuses.body = this.checked;
    }

    document.getElementById('snoot').onchange = function () {
      window.checkboxes.checkboxStatuses.snoot = this.checked;
    }

    document.getElementById('nose').onchange = function () {
      window.checkboxes.checkboxStatuses.nose = this.checked;
    }

    document.getElementById('light-tiles').onchange = function () {
      window.checkboxes.checkboxStatuses.lightTiles = this.checked;
    }

    document.getElementById('dark-tiles').onchange = function () {
      window.checkboxes.checkboxStatuses.darkTiles = this.checked;
    }

    document.getElementById('eat-animation').onchange = function () {
      window.checkboxes.checkboxStatuses.eatAnimation = this.checked;
    }

    document.getElementById('tongue').onchange = function () {
      window.checkboxes.checkboxStatuses.tongue = this.checked;
    }
    document.getElementById('fruit').onchange = function () {
      window.checkboxes.checkboxStatuses.fruit = this.checked;
    }
    document.getElementById('poison').onchange = function () {
      window.checkboxes.checkboxStatuses.poison = this.checked;
    }
    document.getElementById('shadow').onchange = function () {
      window.checkboxes.checkboxStatuses.shadow = this.checked;
    }
    document.getElementById('border').onchange = function () {
      window.checkboxes.checkboxStatuses.border = this.checked;
      window.applyVisiBorder();
    }
    document.getElementById('die').onchange = function () {
      window.checkboxes.checkboxStatuses.die = this.checked;
    }
    document.getElementById('lumps').onchange = function () {
      window.checkboxes.checkboxStatuses.lumps = this.checked;
    }
    document.getElementById('portals').onchange = function () {
      window.checkboxes.checkboxStatuses.portals = this.checked;
    }
    document.getElementById('flash-snake').onchange = function () {
      window.checkboxes.checkboxStatuses.flashSnake = this.checked;
    }
    //Handle dropdown for controlling duration of snake flashes
    document.getElementById('flash-snake-timing').onchange = function () {
      window.flashSnakeStatus.durationMillisecond = this.value;
    }
    document.getElementById('shadow-included').onchange = function () {
      window.checkboxes.checkboxStatuses.shadowIncluded = this.checked;
    }
    document.getElementById('keys').onchange = function () {
      window.checkboxes.checkboxStatuses.keys = this.checked;
    }
    document.getElementById('walls').onchange = function () {
      window.checkboxes.checkboxStatuses.walls = this.checked;
    }
    document.getElementById('locks').onchange = function () {
      window.checkboxes.checkboxStatuses.locks = this.checked;
    }
    document.getElementById('hotdog-walls').onchange = function () {
      window.checkboxes.checkboxStatuses.hotdogWalls = this.checked;
    }
    document.getElementById('sokoban-box').onchange = function () {
      window.checkboxes.checkboxStatuses.sokobanBox = this.checked;
    }
    document.getElementById('sokoban-goal').onchange = function () {
      window.checkboxes.checkboxStatuses.sokobanGoal = this.checked;
    }
    document.getElementById('mines').onchange = function () {
      window.checkboxes.checkboxStatuses.mines = this.checked;
      if (this.checked) {
        eval("window.MinesRef." + window.minesDefined + "=window.DefaultMines;")
      }
      else {
        eval("window.MinesRef." + window.minesDefined + "=window.NoMines;")
      }
    }
    document.getElementById('mine-radius').onchange = function () {
      window.checkboxes.checkboxStatuses.mineRadius = this.checked;
    }
    document.getElementById('broken-statue').onchange = function () {
      window.checkboxes.checkboxStatuses.brokenStatue = this.checked;
    }
    document.getElementById('statue').onchange = function () {
      window.checkboxes.checkboxStatuses.statue = this.checked;
    }
    document.getElementById('bridges').onchange = function () {
      window.checkboxes.checkboxStatuses.bridges = this.checked;
    }
    document.getElementById('arrows').onchange = function () {
      window.checkboxes.checkboxStatuses.arrows = this.checked;
    }
    document.getElementById('gates').onchange = function () {
      window.checkboxes.checkboxStatuses.gates = this.checked;
    }
    document.getElementById('shields').onchange = function () {
      window.checkboxes.checkboxStatuses.shields = this.checked;
    }
    document.getElementById('light-snake').onchange = function () {
      window.checkboxes.checkboxStatuses.lightSnake = this.checked;
    }
    document.getElementById('light-fruit').onchange = function () {
      window.checkboxes.checkboxStatuses.lightFruit = this.checked;
    }
    document.getElementById('spin').onchange = spinHandler;
  }

  function injectInitialHtml() {
    let initialHtml =
      `<div id="delete-stuff-popup" style="margin:0px;position:fixed;z-index:9001;width:100%;">
  <div id="delete-stuff-draggable" style="width: 370px; background-color: rgb(87, 138, 52); z-index: 9002; border-color: rgb(87, 138, 52); border-style: solid; border-width: 4px; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px; position: fixed; left: 5px; top: 5px;border-width: 0px;">
    <div id="drag-handle" style="width: 22px; height: 22px; background-color: rgb(77, 193, 249); position: absolute; border-top-left-radius: 10px; border-bottom-right-radius: 18px; border-right: 3px solid rgb(87, 138, 52); border-bottom: 3px solid rgb(87, 138, 52); cursor: move; border-top-color: rgb(87, 138, 52); border-left-color: rgb(87, 138, 52);"></div>
    <div style="padding:10px;width:350px;margin:0;">
      <div id="visi-title" class="form-check-label" style="text-align: center; padding: 5px; background-color: rgb(74, 117, 44); color: white; font-size: 20px;">Visibility Mod</div>
      <div id="visi-boxes" style="background-color: rgb(74, 117, 44); margin-top: 5px; padding: 0px 0px 10px;">
        <!--Begin test area-->
        <!--Snake body Section-->
        <div style="box-sizing: border-box;padding:5px;margin: 0px;width: 45%;display:inline-block;float:left">
          <ul style="list-style-type: none;padding:5px;margin-top:0;margin-bottom:0">
            <li>
              <label class="form-check-label"><input class="form-check-input" id="left-eye" type="checkbox" checked>Left Eye</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="right-eye" type="checkbox" checked>Right Eye</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="snoot" type="checkbox" checked>Snoot</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="nose" type="checkbox" checked>Nostrils</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="snake-body" type="checkbox" checked>Body</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="lumps" type="checkbox" checked>Lumps</label>
            </li>
          </ul>
        </div>
        <div style="box-sizing: border-box;padding:5px;margin: 0px;width: 55%;display:inline-block;float:right;">
          <ul style="list-style-type: none;padding:5px;margin-top:0;margin-bottom:0">
            <li>
              <label class="form-check-label"><input class="form-check-input" id="eat-animation" type="checkbox" checked>Eat Anim.</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="tongue" type="checkbox" checked>Tongue</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="die" type="checkbox" checked>Die Anim.</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="shadow" type="checkbox" checked>Shadow</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="shadow-included" type="checkbox" checked>Shadow Included</label>
            </li>
          </ul>
        </div>
        <hr style="clear:both;width:90%;margin-bottom:0">
        <!--Background Section-->
        <div style="box-sizing: border-box;padding:5px;margin: 0px;width: 50%;display:inline-block;float:left">
          <ul style="list-style-type: none;padding:5px;margin-top:0;margin-bottom:0">
            <li>
              <label class="form-check-label"><input class="form-check-input" id="light-tiles" type="checkbox" checked>Light Tiles</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="dark-tiles" type="checkbox" checked>Dark Tiles</label>
            </li>
          </ul>
        </div>
        <div style="box-sizing: border-box;padding:5px;margin: 0px;width: 50%;display:inline-block;float:right;">
          <ul style="list-style-type: none;padding:5px;margin-top:0;margin-bottom:0">
            <li>
              <label class="form-check-label"><input class="form-check-input" id="border" type="checkbox" checked>Border</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="spin" type="checkbox">Spin</label>
            </li>
          </ul>
        </div>
        <hr style="clear:both;width:90%;margin-bottom:0">
        <!--Fruits Section-->
        <div style="box-sizing: border-box;padding:5px;margin: 0px;width: 45%;display:inline-block;float:left">
          <ul style="list-style-type: none;padding:5px;margin-top:0;margin-bottom:0">
            <li>
              <label class="form-check-label"><input class="form-check-input" id="fruit" type="checkbox" checked>Fruit</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="poison" type="checkbox" checked>Poison</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="portals" type="checkbox" checked>Portals</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="keys" type="checkbox" checked>Keys</label>
            </li>
            <li>
            <label class="form-check-label"><input class="form-check-input" id="statue" type="checkbox" checked>Statue</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="mines" type="checkbox" checked>Mines</label>
            </li>
          </ul>
        </div>
        <div style="box-sizing: border-box;padding:5px;margin: 0px;width: 55%;display:inline-block;float:right;">
          <ul style="list-style-type: none;padding:5px;margin-top:0;margin-bottom:0">
            <li>
              <label class="form-check-label"><input class="form-check-input" id="walls" type="checkbox" checked>Walls</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="locks" type="checkbox" checked>Locks</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="sokoban-box" type="checkbox" checked>Sokobox</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="sokoban-goal" type="checkbox" checked>Sokogoal</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="broken-statue" type="checkbox" checked>Cracks</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="mine-radius" type="checkbox" checked>Mine Radius</label>
            </li>
          </ul>
        </div>
        <hr style="clear:both;width:90%;margin-bottom:0">
        <!--Newer modes Section-->
        <div style="box-sizing: border-box;padding:5px;margin: 0px;width: 45%;display:inline-block;float:left">
          <ul style="list-style-type: none;padding:5px;margin-top:0;margin-bottom:0">
            <li>
              <label class="form-check-label"><input class="form-check-input" id="bridges" type="checkbox" checked>Bridges</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="arrows" type="checkbox" checked>Arrows</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="gates" type="checkbox" checked>Gates</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="shields" type="checkbox" checked>Shields</label>
            </li>
          </ul>
        </div>
        <div style="box-sizing: border-box;padding:5px;margin: 0px;width: 55%;display:inline-block;float:right;">
          <ul style="list-style-type: none;padding:5px;margin-top:0;margin-bottom:0">
            <li>
              <label class="form-check-label"><input class="form-check-input" id="hotdog-walls" type="checkbox" checked>Hotdog Walls</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="light-snake" type="checkbox" checked>Light Snake</label>
            </li>
            <li>
              <label class="form-check-label"><input class="form-check-input" id="light-fruit" type="checkbox" checked>Light Fruit</label>
            </li>
          </ul>
        </div>
        <hr style="clear:both;width:90%;margin-bottom:0">
        <!--Flash Section-->
        <div style="box-sizing: border-box;padding:5px;margin: 0px;width: 45%;display:inline-block;float:left">
          <ul style="list-style-type: none;padding:5px;margin-top:0;margin-bottom:0">
            <li>
              <label class="form-check-label"><input class="form-check-input" id="flash-snake" type="checkbox">Flash eat</label>
            </li>
          </ul>
        </div>
        <div style="box-sizing: border-box;padding:2px;margin: 0px;width: 55%;display:inline-block;">
          <label class="form-check-label" style="padding-top:5px;display:inline-block;float:left;">Flash time:</label>
            <select id="flash-snake-timing" style="margin-top: 9px; margin-right: 10px;background-color:#1155CC;color:white;font-family:Roboto,Arial,sans-serif;display:flex; justify-content: space-evenly; align-items: center; text-align: center;border-radius:0.375rem;float:right;">
              <option value="20">0.05s</option>
              <option value="200">0.2s</option>
              <option value="500">0.5s</option>
              <option value="1000" selected="">1s</option>
              <option value="2000">2s</option>
              <option value="3000">3s</option>
            </select>
        </div>
        <!--End test area-->
        <div style="text-align:center; clear:both" class="form-check-label"><a id="delete-stuff-close" href="#">Close</a> (Press i to show again)</div>
      </div>

    </div>

  </div>
</div>
<template id="tooltiptemplate">
  <div style="position:relative;display:inline-block;color: white;float:right;border: 1px solid white;border-radius:50%;width:1em;height:1em;text-align:center;font-family:Roboto,Arial,sans-serif;line-height:1em;" class="tooltip">
  ?
  <div style="position:absolute;top:0;left:120%;background-color:black;color:white;border-radius:0.5em;padding:0.5em;font-weight:normal;box-shadow:0 3px 10px rgba(0,0,0,0.4);width:110px;z-index:9003;visibility:hidden;opacity:0;transition: opacity 0.8s;" class="tooltiptext">
  </div>
  </div>
</template>`;

    let intialElement = document.createElement('div');
    intialElement.style.backgroundColor = 'transparent';
    intialElement.style.position = 'fixed';
    intialElement.style.zIndex = '9001';
    intialElement.innerHTML = initialHtml;

    document.getElementsByTagName('body')[0].prepend(intialElement);
  };

  function setupCss() {
    let customStyle = document.createElement('style');
    customStyle.type = 'text/css';
    customStyle.innerHTML = `.tooltip:hover .tooltiptext:not(:hover){visibility:visible!important;opacity:1!important;}
  #drag-handle:hover{background-color:rgb(17, 85, 204)!important;}
  #delete-stuff-popup label,#delete-stuff-popup div{user-select:none;}

  :root {--rotation-period: 30s;}
  .cer0Bd[data-spin='true']{animation: spin var(--rotation-period) linear infinite;}
  .cer0Bd[data-spin='x']{animation: spinx var(--rotation-period) linear infinite;}
  @keyframes spin { 100% { transform:rotate(360deg); } }
  @keyframes spinx { 100% { transform:rotateX(360deg); } }
  `;
    document.getElementsByTagName('head')[0].appendChild(customStyle);
  }

  function addTooltip(id, helpText) {
    let tooltipTemplate = document.getElementById('tooltiptemplate').content;
    let tooltipToInsert = tooltipTemplate.cloneNode(true);
    tooltipToInsert.querySelector('.tooltiptext').textContent = helpText;
    document.getElementById(id).parentElement.parentElement.appendChild(tooltipToInsert);
  }

  function loadTooltips() {
    let tooltipText = {
      'left-eye': "Left eye of snake. Looks towards the nearest fruit.",
      'right-eye': "Right eye of snake. Looks towards the nearest fruit.",
      'snoot': "Filled circle at the tip of the snake's head.",
      'nose': "The small nostril dots under the eyes.",
      'snake-body': "The lines and curves that make up the snake's body.",
      'lumps': "The swallowed fruit that pass through the snake.",
      'eat-animation': "The snake's mouth animation when eating fruit.",
      'tongue': "Animation when the snake sticks out it's tongue.",
      'die': "Animation when the snake dies. Also used in sokoban mode.",
      'shadow': "Toggles the snake/fruit/key shadow layer. Off = no shadows at all. Default colour is dark green.",
      'shadow-included': "When on (default), hiding something also removes that part's shadow. When off, hiding something still keeps its shadow.",
      'light-tiles': "The light tiles used for the background. You may need to restart (press esc and then play) for this to take effect. This is actually just a big rectangle that the dark tiles get drawn on top of. Has a glitchy visual effect when removed.",
      'dark-tiles': "The dark tiles used for the background. You may need to restart (press esc and then play) for this to take effect. These are individually drawn squares that get drawn on top of the light tile background.",
      'border': "The dark green border around the board (canvas fill and chrome background).",
      'fruit': "Regular fruit. Poison fruit is controlled separately.",
      'poison': "Poison fruit in poison mode.",
      'portals': "The portals that can be found in portal mode.",
      'keys': "The keys that can be found in key mode.",
      'walls': "The walls that can be found in wall mode.",
      'locks': "The locks that can be found in key mode (wall blocks with lock icons).",
      'hotdog-walls': "The side walls that spawn along the snake in hotdog mode.",
      'sokoban-box': "The box that can be found in the mode where you push around a box into a goal.",
      'sokoban-goal': "The goal that can be found in the mode where you push around a box into a goal.",
      'flash-snake': "When this setting is turned on, the snake will briefly show whenever a fruit is eaten. The amount of time it shows for is controlled by the Flash Time setting. This only has a noticable effect if parts of the snake are hidden to begin with.",
      'mines': "The mines (flags) in minesweeper mode.",
      'statue': "The statue in statue mode. Including broken statue.",
      'broken-statue': "The broken statues in statue mode.",
      'spin': "Spin the entire board.",
      'mine-radius': "The mine's radius in minesweeper mode. Dashed lines. Also includes confetti from explosion.",
      'bridges': "Bridge tiles and the dashed bridge path in bridge mode.",
      'arrows': "Direction arrows painted on the board in arrow mode.",
      'gates': "Dashed gate rectangles in gate mode.",
      'shields': "Directional shield bars drawn on fruit in shield mode.",
      'light-snake': "The glow around the snake's head in light mode.",
      'light-fruit': "The glow around apples in light mode.",
    };

    for (let inputElementId in tooltipText) {
      addTooltip(inputElementId, tooltipText[inputElementId]);
    }
  }

  function spinHandler() {
    let canvasElement = document.getElementsByClassName('cer0Bd')[0];
    if (!this.checked) {
      canvasElement.dataset.spin = 'false';
    } else {
      let r = document.querySelector(':root');
      let promptResponse = prompt('How many seconds should a spin take? Enter a number', '30');
      promptResponse = parseFloat(promptResponse);
      if (isNaN(promptResponse) || promptResponse <= 0) {
        alert('Invalid value entered. Defaulting to 30');
        r.style.setProperty('--rotation-period', '30s');
      } else {
        alert(`Spinning every ${promptResponse} seconds.`);
        r.style.setProperty('--rotation-period', promptResponse + 's');
      }
      let spinAroundZ = confirm('Spin around z axis?');//Spin around x or z axis.
      canvasElement.dataset.spin = spinAroundZ ? 'true' : 'x';
    }
  }

  injectInitialHtml();
  setupCss();
  loadTooltips();
  setupEventListeners();
  window.dragHandler.initialiseDragHandler();

}

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.VisibilityModCode.alterSnakeCode = function (code) {

  //code = window.PuddingMod.alterSnakeCode(code);
  let deleteModDebug = false;
  if (localStorage.getItem('snakeChosenMod') === "customUrl") {
    console.log("Detected customUrl - enabling debug mode and printing initial code")
    deleteModDebug = true;
    console.log(code)
  }
  window.snakeScale = { tailStart: 1, tailEnd: 1, face: 1, eyes: 1 };

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

  function swapInMainClassPrototype(mainClass, functionText) {
    functionText = assertReplace(functionText, /^[$a-zA-Z0-9_]{0,6}/, `${mainClass}.prototype`);
    return functionText;
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
    if (!(regex instanceof RegExp)) {
      throw new Error('Failed to find match using string argument. No more details available');
    }

    //see if removing line breaks works - in that case we can give a more useful error message
    let oneLineText = baseText.replaceAll(/\n/g, '');
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
    for (let breakableChar of ["%", "&", "\\*", "\\+", ",", "-", "\\/", ":", ";", "<", "=", ">", "\\?", "{", "\\|", "}"]) {
      for (let pos = regexSource.indexOf(breakableChar); pos !== -1; pos = regexSource.indexOf(breakableChar, pos + 1)) {
        //Remake the regex with a new line at the candidate position
        let candidateRegexSource = `${regexSource.slice(0, pos + breakableChar.length)}\\n?${regexSource.slice(pos + breakableChar.length)}`;
        let candidateRegex;

        try {
          candidateRegex = new RegExp(candidateRegexSource, regexFlags);
        } catch (err) {
          continue;
        }

        //See if the new regex works
        let testReplaceResult = candidateRegex.test(baseText);
        if (testReplaceResult) {
          //Success we found the working regex! Give descriptive error message to user and log suggested regex with new line in correct place
          console.log(`Suggested regex improvement:
  ${candidateRegex}`);
          throw new Error('Suggested improvement found! Error with line break, failed to find match for regex. See logged output for regex to use instead that should hopefully fix this.');
        }
      }
    }

    throw new Error('Line break error! Failed to failed to find match for regex - most likely caused by a new line break. No suggestions provided');
  }

  window.brieflyShowSnake = function brieflyShowSnake() {
    if (window.flashSnakeStatus.flashCount < 0) {
      throw new Error('Error with flashing snake');
    }
    window.flashSnakeStatus.flashCount++;
    window.flashSnakeStatus.currentlyFlashingSnake = true;

    //Clear flashed snake after a duration
    setTimeout(
      function () {
        window.flashSnakeStatus.flashCount--; if (window.flashSnakeStatus.flashCount === 0) { window.flashSnakeStatus.currentlyFlashingSnake = false; }
      },
      window.flashSnakeStatus.durationMillisecond
    );
  }

  //Function for body parts
  //let rightEyeRegex = /(\([a-z]\?[a-z]\.[$a-zA-Z0-9_]{0,6}:[a-z]\.[$a-zA-Z0-9_]{0,6}\)\.render\([a-z],\n?[a-z],\n?[a-z],\n?[a-z]\.[$a-zA-Z0-9_]{0,6},\n?[a-z])(\),)/;
  let rightEyeRegex = /(\([a-z]\?[a-z]\.[$a-zA-Z0-9_]{0,6}:[a-z]\.[$a-zA-Z0-9_]{0,6}\)\.render\([a-z],\n?[a-z],\n?[a-z],\n?[a-z],\n?[a-z]\*[a-z])(\),)/;

  if (deleteModDebug) {
    console.log(code)
  }

  let funcWithBodyParts_Origin = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(a,b,c,d,e\)$/,
    rightEyeRegex,
    deleteModDebug);

  let funcWithBodyParts = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(a,b,c,d,e\)$/,
    rightEyeRegex,
    deleteModDebug);

  //Die anim. The dying face is die.png, which the sprite class instantiates three times:
  //normal, mirrored, and a recoloured copy used while the snake is fading. Gate all of them.
  let dieSpriteProps = [];
  code.replace(/this\.([$a-zA-Z0-9_]{1,6})=new [$a-zA-Z0-9_]{1,6}\([$a-zA-Z0-9_.]{1,20},\n?"[^"]*die\.png"/g,
    function (whole, prop) {
      if (dieSpriteProps.indexOf(prop) === -1) { dieSpriteProps.push(prop); }
      return whole;
    });
  if (dieSpriteProps.length === 0) {
    throw new Error('Visibility mod: could not find the die.png sprite properties');
  }

  let dieGateCount = 0;
  funcWithBodyParts = funcWithBodyParts.replace(
    /(?:\([$a-zA-Z0-9_]{1,6}\?[$a-zA-Z0-9_]{1,6}\.([$a-zA-Z0-9_]{1,6}):[$a-zA-Z0-9_]{1,6}\.([$a-zA-Z0-9_]{1,6})\)|[$a-zA-Z0-9_]{1,6}\.([$a-zA-Z0-9_]{1,6}))\.render\(/g,
    function (whole, ternaryLeft, ternaryRight, plain) {
      let usesDieSprite = [ternaryLeft, ternaryRight, plain].some(function (prop) {
        return prop && dieSpriteProps.indexOf(prop) !== -1;
      });
      if (!usesDieSprite) { return whole; }
      dieGateCount++;
      return '(window.flashSnakeStatus.currentlyFlashingSnake || window.checkboxes.checkboxStatuses.die || window.visiFullPass) && ' + whole;
    });
  if (dieGateCount === 0) {
    throw new Error('Visibility mod: could not gate any die.png renders');
  }

  //Left/Right Eye. Both eyes come from the same sprite, drawn back to back in one comma expression
  funcWithBodyParts = assertReplace(funcWithBodyParts, /(\(([$a-zA-Z0-9_]{0,6}\?[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}:[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6})\)\.render\([$a-zA-Z0-9_]{0,6},\n?[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},\n?[$a-zA-Z0-9_*]{0,6})(\)),(\(\2\)\.render\([$a-zA-Z0-9_]{0,6},\n?[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},\n?[$a-zA-Z0-9_*]{0,6})(\))/,
    '(window.flashSnakeStatus.currentlyFlashingSnake || window.checkboxes.checkboxStatuses.leftEye || window.visiFullPass) && $1 * window.snakeScale.eyes $3,' +
    '(window.flashSnakeStatus.currentlyFlashingSnake || window.checkboxes.checkboxStatuses.rightEye || window.visiFullPass) && $4 * window.snakeScale.eyes $5');

  //Eye offsets
  funcWithBodyParts = assertReplaceAll(funcWithBodyParts, /[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\+=\n?Math\.(?:cos|sin)\([$a-zA-Z0-9_]{0,6}[+-][$a-zA-Z0-9_]{0,6}\)\*[$a-zA-Z0-9_]{0,6}/g,
    '$& * window.snakeScale.eyes');

  //Eat / Nostrils share eat.png. Resting frame (d3===0) is nostrils; any other frame is the mouth.
  let eatSpriteProps = [];
  code.replace(/this\.([$a-zA-Z0-9_]{1,6})=new [$a-zA-Z0-9_]{1,6}\([$a-zA-Z0-9_.]{1,20},\n?"[^"]*eat\.png"/g,
    function (whole, prop) {
      if (eatSpriteProps.indexOf(prop) === -1) { eatSpriteProps.push(prop); }
      return whole;
    });
  if (eatSpriteProps.length === 0) {
    throw new Error('Visibility mod: could not find the eat.png sprite properties');
  }

  let eatGateCount = 0;
  funcWithBodyParts = funcWithBodyParts.replace(
    /(?:\([$a-zA-Z0-9_]{1,6}\?[$a-zA-Z0-9_]{1,6}\.([$a-zA-Z0-9_]{1,6}):[$a-zA-Z0-9_]{1,6}\.([$a-zA-Z0-9_]{1,6})\)|[$a-zA-Z0-9_]{1,6}\.([$a-zA-Z0-9_]{1,6}))\.render\(Math\.floor\(([$a-zA-Z0-9_.]{1,12})\)/g,
    function (whole, ternaryLeft, ternaryRight, plain, frameExpr) {
      let usesEatSprite = [ternaryLeft, ternaryRight, plain].some(function (prop) {
        return prop && eatSpriteProps.indexOf(prop) !== -1;
      });
      if (!usesEatSprite) { return whole; }
      eatGateCount++;
      return '(window.flashSnakeStatus.currentlyFlashingSnake||window.visiFullPass||(Math.floor(' + frameExpr + ')===0?window.checkboxes.checkboxStatuses.nose:window.checkboxes.checkboxStatuses.eatAnimation))&&' + whole;
    });
  if (eatGateCount === 0) {
    throw new Error('Visibility mod: could not gate any eat.png renders');
  }

  //Tongue
  funcWithBodyParts = assertReplace(funcWithBodyParts, /(\([$a-zA-Z0-9_]{0,6}\?[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}:[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\)\.render\([$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6})(\)\))/,
    '(window.checkboxes.checkboxStatuses.tongue || window.visiFullPass) && $1 * window.snakeScale.face $2');

  //Snoot
  funcWithBodyParts = assertReplace(funcWithBodyParts, /[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.fill\(\)/,
    '(window.flashSnakeStatus.currentlyFlashingSnake || window.checkboxes.checkboxStatuses.snoot || window.visiFullPass) && $&');

  //Snoot scale
  funcWithBodyParts = assertReplace(funcWithBodyParts, /\.4/, 'window.snakeScale.face * 0.4');

  //eval(funcWithBodyParts);

  //Function for fruit (ES6 class method render(a,b) on v12+)
  let fruitRegex = /this\.[$a-zA-Z0-9_]{0,6}\.drawImage\([$a-zA-Z0-9_]{0,6},0,0,[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},-[$a-zA-Z0-9_]{0,6}\/2,-[$a-zA-Z0-9_]{0,6}\/2,[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\)/;

  let funcWithFruit_Origin = findFunctionInCode(code, /render\([$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\)$/,
    fruitRegex,
    deleteModDebug);

  let funcWithFruit = findFunctionInCode(code, /render\([$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\)$/,
    fruitRegex,
    deleteModDebug);

  //Regular fruit vs poison fruit. `nla` marks the poisonous half of the fruit set in poison mode.
  funcWithFruit = assertReplace(funcWithFruit, fruitRegex,
    '(window.visiFullPass || (b.nla ? window.checkboxes.checkboxStatuses.poison : window.checkboxes.checkboxStatuses.fruit)) && $&');

  //Mirrored copy (in twin/infinity layouts), using the same poison marker.
  funcWithFruit = assertReplace(funcWithFruit, /this\.[$a-zA-Z0-9_]{0,6}\.drawImage\([$a-zA-Z0-9_]{0,6},0,0,[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},-\([$a-zA-Z0-9_]{0,6}\/2\),-\([$a-zA-Z0-9_]{0,6}\/2\),[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\)/,
    '(window.visiFullPass || (b.nla ? window.checkboxes.checkboxStatuses.poison : window.checkboxes.checkboxStatuses.fruit)) && $&');

  //For compatitibilty, also change this code for animatedSnakeColours
  /*
  //Commented out until I find a new way to do animated Snake Colours
  funcWithFruit = assertReplaceAll(funcWithFruit,'"#578A34"', '((typeof animateSnakeGlobals !== "undefined" && animateSnakeGlobals.voice.isBorderSet) ? animateSnakeGlobals.voice.borderColour : "#578A34")');
  */

  //eval(funcWithFruit);


  // Walls / locks (ES6 class render(a) over Ca.Aa values)
  let wallInsideRegex = /this\.[$a-zA-Z0-9_]{0,6}\.Ca\.Aa\.values\(\)/;

  let funcWithRenderWall_Origin = findFunctionInCode(code, /render\([$a-zA-Z0-9_]{0,6}\)$/,
    wallInsideRegex,
    deleteModDebug);

  let funcWithRenderWall = findFunctionInCode(code, /render\([$a-zA-Z0-9_]{0,6}\)$/,
    wallInsideRegex,
    deleteModDebug);

  //for walls / locks / hotdog walls (same renderer; distinguished by k.ez and k.XNa)
  funcWithRenderWall = assertReplace(funcWithRenderWall, /this\.[$a-zA-Z0-9_]{0,6}\.fillRect\([$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\)/,
    '(k.ez?window.checkboxes.checkboxStatuses.hotdogWalls:(k.XNa!==void 0&&k.XNa>=0?window.checkboxes.checkboxStatuses.locks:window.checkboxes.checkboxStatuses.walls))&&$&');

  //lock icon on wall
  funcWithRenderWall = assertReplace(funcWithRenderWall, /this\.[$a-zA-Z0-9_]{0,6}\.drawImage\([$a-zA-Z0-9_]{0,6}\(this\.[$a-zA-Z0-9_]{0,6}\)\.[$a-zA-Z0-9_]{0,6}\.canvas,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\*128,0,128,128,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}-[$a-zA-Z0-9_]{0,6}\/2,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}-[$a-zA-Z0-9_]{0,6}\/2,[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\)/,
    'window.checkboxes.checkboxStatuses.locks && $&');


  //Sokoban box (TaF-style helper)
  let sokobanInsideRegex = /[$a-zA-Z0-9_]{0,6}\([a-z]\.settings,7\)&&![a-z]\)\{[a-z]=new/;

  let funcWithSokoban_Origin = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\([$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\)$/,
    sokobanInsideRegex,
    deleteModDebug);

  let funcWithSokoban = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\([$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\)$/,
    sokobanInsideRegex,
    deleteModDebug);

  //Sokoban mirrored
  funcWithSokoban = assertReplace(funcWithSokoban, /[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.drawImage\([$a-zA-Z0-9_]{0,6}\([$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\)\.[$a-zA-Z0-9_]{0,6}\.canvas,128,0,128,128,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}-[$a-zA-Z0-9_]{0,6}\/2,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}-[$a-zA-Z0-9_]{0,6}\/2,[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\)/,
    '(window.checkboxes.checkboxStatuses.sokobanBox || window.visiFullPass) && $&');

  //Sokoban normal
  funcWithSokoban = assertReplace(funcWithSokoban, /[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.drawImage\([$a-zA-Z0-9_]{0,6}\([$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\)\.[$a-zA-Z0-9_]{0,6}\.canvas,0,0,128,128,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}-[$a-zA-Z0-9_]{0,6}\/2,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}-[$a-zA-Z0-9_]{0,6}\/2,[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\)/,
    '(window.checkboxes.checkboxStatuses.sokobanBox || window.visiFullPass) && $&');

  //  eval(funcWithSokoban);

  SokoGoalRegex = /[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.drawImage\([$a-zA-Z0-9_]{0,6}\([$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\)\.[$a-zA-Z0-9_]{0,6}\.canvas,[$a-zA-Z0-9_]{0,6}\*128,0,128,128,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}-[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\/2\+[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}-[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\/2\+[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\)/

  //Sokoban goal func
  let funcWithSokobanGoal_Origin = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(a,b,c,d,e\)$/,
    SokoGoalRegex,
    deleteModDebug);

  let funcWithSokobanGoal = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(a,b,c,d,e\)$/,
    SokoGoalRegex,
    deleteModDebug);

  //Sokoban goal
  funcWithSokobanGoal = assertReplace(funcWithSokobanGoal, SokoGoalRegex,
    'window.checkboxes.checkboxStatuses.sokobanGoal && $&');

  //eval(funcWithSokobanGoal);


  //Shadow
  let funcWithShadow_Origin = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\([$a-zA-Z0-9_]{0,6}\)$/, /destination-atop/, deleteModDebug);

  let funcWithShadow = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\([$a-zA-Z0-9_]{0,6}\)$/, /destination-atop/, deleteModDebug);

  funcWithShadow = assertReplace(funcWithShadow, /[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.globalCompositeOperation="destination-atop";/, 'if(!window.checkboxes.checkboxStatuses.shadow){return}$&')


  //Normal background (i.e not on infinity)

  let funcWithBackground_Origin = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(a\)$/,
    /[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.fillRect\(0,0,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.canvas\.width,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.canvas\.height\);for/,
    deleteModDebug);

  let funcWithBackground = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\(a\)$/,
    /[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.fillRect\(0,0,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.canvas\.width,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.canvas\.height\);for/,
    deleteModDebug);

  funcWithBackground = assertReplace(funcWithBackground, /[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.fillRect\(0,0,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.canvas\.width,[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.canvas\.height\);/,
    'if(window.checkboxes.checkboxStatuses.lightTiles){$&}');

  funcWithBackground = assertReplace(funcWithBackground, /[a-z]\.[$a-zA-Z0-9_]{0,6}\.fillRect\([a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6},[a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6},[a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6},[a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\)/,
    'window.checkboxes.checkboxStatuses.darkTiles && $&');

  //eval(funcWithBackground);

  let funcWithMiscRendering_Origin = findFunctionInCode(code, /render\(a,b\)$/,
    /this\.context\.fillRect\(0,0,this\.context\.canvas\.width,this\.context\.canvas\.height\);/,
    deleteModDebug);

  let funcWithMiscRendering = findFunctionInCode(code, /render\(a,b\)$/,
    /this\.context\.fillRect\(0,0,this\.context\.canvas\.width,this\.context\.canvas\.height\);/,
    deleteModDebug);

  //Background for infinity is also contained in funcWithFruit
  //For outer wall. This is the full canvas fill that everything else is drawn on top of
  funcWithMiscRendering = assertReplace(funcWithMiscRendering, /this\.context\.fillRect\(0,0,this\.context\.canvas\.width,this\.context\.canvas\.height\);/,
    'window.checkboxes.checkboxStatuses.border && $&');

  //Border strips drawn around the board on mobile layouts
  funcWithMiscRendering = assertReplaceAll(funcWithMiscRendering, /this\.context\.fillRect\((?!0,0,this\.context\.canvas\.width,this\.context\.canvas\.height\))[^)]*\)/g,
    'window.checkboxes.checkboxStatuses.border && $&');

  //For light tiles (infinity). The infinity board renders through a local alias rather than `this`
  funcWithMiscRendering = assertReplace(funcWithMiscRendering, /(?<![$a-zA-Z0-9_.])(?!this\.)[$a-zA-Z0-9_]{1,6}\.context\.fillRect\(0,0,[$a-zA-Z0-9_]{1,6}\.context\.canvas\.width,[$a-zA-Z0-9_]{1,6}\.context\.canvas\.height\);/,
    'window.checkboxes.checkboxStatuses.lightTiles && $&');

  //For dark tiles (infinity)
  funcWithMiscRendering = assertReplace(funcWithMiscRendering, /[$a-zA-Z0-9_]{1,6}\.context\.fillRect\([$a-zA-Z0-9_]{1,6}\*[$a-zA-Z0-9_.]{1,24}-[$a-zA-Z0-9_]{1,6}\.x\+[$a-zA-Z0-9_]{1,6}\.x,[$a-zA-Z0-9_]{1,6}\*[$a-zA-Z0-9_.]{1,24}-[$a-zA-Z0-9_]{1,6}\.y\+[$a-zA-Z0-9_]{1,6}\.y,[$a-zA-Z0-9_.]{1,24},[$a-zA-Z0-9_.]{1,24}\)/,
    'window.checkboxes.checkboxStatuses.darkTiles && $&');

  //Light mode: snake-head glow (TbF) vs apple glow (fruit list loop)
  funcWithMiscRendering = assertReplaceAll(funcWithMiscRendering, /TbF\(/g,
    'window.checkboxes.checkboxStatuses.lightSnake&&TbF(');

  funcWithMiscRendering = assertReplace(funcWithMiscRendering, /(for\(let [$a-zA-Z0-9_]{1,6} of [$a-zA-Z0-9_]{1,6}\.wb\.wa\.ka\)\{)/,
    'if(window.checkboxes.checkboxStatuses.lightFruit)$1');

  //Inline active bridges/gates drawn in the compositor (not only via helper functions)
  funcWithMiscRendering = assertReplaceAll(funcWithMiscRendering, /f7\(this\.settings,20\)/g,
    'f7(this.settings,20)&&window.checkboxes.checkboxStatuses.bridges');
  funcWithMiscRendering = assertReplaceAll(funcWithMiscRendering, /f7\(this\.settings,19\)/g,
    'f7(this.settings,19)&&window.checkboxes.checkboxStatuses.gates');

  //Snake, fruit, keys and boxes are drawn into the sprite layer, and the shadow is taken straight
  //off that layer's silhouette. When Shadow Included is off and something is hidden, duplicating
  //that stretch keeps a complete silhouette for the shadow while the visible pass honours the
  //checkboxes. Everything in the stretch only paints the sprite layer, so running it twice has no
  //other effect.
  let shadowFnName = funcWithShadow_Origin.match(/^([$a-zA-Z0-9_]{1,6})=function/)[1];
  let sceneRegionRegex = new RegExp(
    '(this\\.[$a-zA-Z0-9_]{1,6}\\.render\\(a,b,[$a-zA-Z0-9_]{1,6}\\(this\\)\\);[\\s\\S]*?)' +
    '(f7\\(this\\.settings,4\\)\\|\\|' + shadowFnName.replace(/\$/g, '\\$') + '\\(this\\);)');

  funcWithMiscRendering = assertReplace(funcWithMiscRendering, sceneRegionRegex,
    'window.visiBeginShadowPass(this,f7(this.settings,4));$1$2if(window.visiEndShadowPass(this)){$1}');

  //eval(funcWithMiscRendering);

  let funcWithLockRendering_Origin = findFunctionInCode(code, /render\(\)$/,
    /this\.[$a-zA-Z0-9_]{0,6}\.hb\.particles/,
    false);

  let funcWithLockRendering = findFunctionInCode(code, /render\(\)$/,
    /this\.[$a-zA-Z0-9_]{0,6}\.hb\.particles/,
    false);

  //background for falling lock piece
  funcWithLockRendering = assertReplace(funcWithLockRendering, /this\.[$a-zA-Z0-9_]{0,6}\.fillRect\(-\(this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\/2\)\*[$a-zA-Z0-9_]{0,6},-\(this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\/2\)\*[$a-zA-Z0-9_]{0,6},this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\*[$a-zA-Z0-9_]{0,6},this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\*[$a-zA-Z0-9_]{0,6}\)/,
    'window.checkboxes.checkboxStatuses.locks && $&');

  //lock icon and sokoban icon falling
  funcWithLockRendering = assertReplace(funcWithLockRendering, /(drawImage\()([a-z]\.type===\n?0\?)([$a-zA-Z0-9_]{0,6}\(this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\)\.[$a-zA-Z0-9_]{0,6}\.canvas):([$a-zA-Z0-9_]{0,6}\(this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\)\.[$a-zA-Z0-9_]{0,6}\.canvas)/,
    '$1$2(window.checkboxes.checkboxStatuses.locks ? $3 : new Image()) : (window.checkboxes.checkboxStatuses.sokobanBox ? $4 : new Image())');

  //eval(funcWithLockRendering);

  let funcWithKeyRendering_Origin = findFunctionInCode(code, /render\([$a-zA-Z0-9_]{0,6}\)$/,
    /this\.[$a-zA-Z0-9_]{0,6}\.drawImage\(this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\(\),128\*[a-z]\.type,0,128,128,/,
    deleteModDebug);

  let funcWithKeyRendering = findFunctionInCode(code, /render\([$a-zA-Z0-9_]{0,6}\)$/,
    /this\.[$a-zA-Z0-9_]{0,6}\.drawImage\(this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\(\),128\*[a-z]\.type,0,128,128,/,
    deleteModDebug);

  //keys
  funcWithKeyRendering = assertReplace(funcWithKeyRendering, /this\.[$a-zA-Z0-9_]{0,6}\.drawImage\(this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\(\),128\*[a-z]\.type,0,128,128,[a-z]\.[a-z]-[a-z]\/2,[a-z]\.[a-z]-[a-z]\/2,[a-z],[a-z]\)/,
    '(window.checkboxes.checkboxStatuses.keys || window.visiFullPass) && $&');

  //keys upside down
  funcWithKeyRendering = assertReplace(funcWithKeyRendering, /this\.[$a-zA-Z0-9_]{0,6}\.drawImage\(this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\(\),128\*[a-z]\.type,0,128,128,-\([a-z]\/2\),-\([a-z]\/2\),[a-z],[a-z]\)/,
    '(window.checkboxes.checkboxStatuses.keys || window.visiFullPass) && $&');


  //eval(funcWithKeyRendering);

  let funcWithBodyLines_Origin = findFunctionInCode(code, /render\(a,b,c\)$/,
    /quadraticCurveTo/,
    deleteModDebug);
  let funcWithBodyLines = findFunctionInCode(code, /render\(a,b,c\)$/,
    /quadraticCurveTo/,
    deleteModDebug);

if(window.NepDebug){
  console.log(funcWithBodyLines)
}

  //Lumps get drawn two different ways depending on the mode: normally as a circle wider than
  //the body stroke, and in modes that skip those circles as a bulge in the stroke width.

  //Circle version, the only arc that gets its own fillStyle before being filled
  funcWithBodyLines = assertReplace(funcWithBodyLines, /(this\.[$a-zA-Z0-9_]{0,6}\.beginPath\(\),this\.[$a-zA-Z0-9_]{0,6}\.arc\([$a-zA-Z0-9_]{0,6}\.x,[$a-zA-Z0-9_]{0,6}\.y,[$a-zA-Z0-9_]{0,6},0,2\*Math\.PI\),)(this\.[$a-zA-Z0-9_]{0,6}\.fill\(\))/,
    '$1(window.flashSnakeStatus.currentlyFlashingSnake || window.checkboxes.checkboxStatuses.lumps || window.visiFullPass) && $2');

  //Stroke width version, the only place the body line width is scaled after being set
  funcWithBodyLines = assertReplace(funcWithBodyLines, /(this\.[$a-zA-Z0-9_]{0,6}\.lineWidth\*=[$a-zA-Z0-9_]{1,6};)/,
    'if(window.flashSnakeStatus.currentlyFlashingSnake || window.checkboxes.checkboxStatuses.lumps || window.visiFullPass){$1}');

  funcWithBodyLines = assertReplaceAll(funcWithBodyLines, /[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.lineTo\(\n?[$a-zA-Z0-9_]{0,6}\.x,\n?[$a-zA-Z0-9_]{0,6}\.y\)/g,
    '(window.flashSnakeStatus.currentlyFlashingSnake || window.checkboxes.checkboxStatuses.body || window.visiFullPass) && $&');

  funcWithBodyLines = assertReplaceAll(funcWithBodyLines, /[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.quadraticCurveTo\(\n?[$a-zA-Z0-9_]{0,6}\.x,\n?[$a-zA-Z0-9_]{0,6}\.y,\n?[$a-zA-Z0-9_]{0,6}\.x,\n?[$a-zA-Z0-9_]{0,6}\.y\)/g,
    '(window.flashSnakeStatus.currentlyFlashingSnake || window.checkboxes.checkboxStatuses.body || window.visiFullPass) && $&');

  //Body scale
  //funcWithBodyLines = assertReplace(funcWithBodyLines, /\.8/, '(window.snakeScale.tailStart * 0.8)');
  //funcWithBodyLines = assertReplace(funcWithBodyLines, /\.4/, '(window.snakeScale.tailEnd * 0.4)');


  //eval(funcWithBodyLines);

  //Portals
  let portalInsideRegex = /Math\.cos\([$a-zA-Z0-9_]{0,6}\*2\*Math\.PI\)/;

  let funcWithPortals_Origin = findFunctionInCode(code, /render\([$a-zA-Z0-9_]{0,6}\)$/,
    portalInsideRegex,
    deleteModDebug);

  let funcWithPortals = findFunctionInCode(code, /render\([$a-zA-Z0-9_]{0,6}\)$/,
    portalInsideRegex,
    deleteModDebug);

  funcWithPortals = assertReplaceAll(funcWithPortals, /[$a-zA-Z0-9_]{0,6}\.fill\(\)/g,
    'window.checkboxes.checkboxStatuses.portals && $&');

  //eval(funcWithPortals);

  //For flashing snake body when we eat an apple
  let eatInsideRegex = /if\([$a-zA-Z0-9_]{0,6}\|\|[$a-zA-Z0-9_]{0,6}\){(?:var|let|const) [$a-zA-Z0-9_]{0,6}=[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6};[$a-zA-Z0-9_]{0,6}\|\|\([$a-zA-Z0-9_]{0,6}=!0/;

  let funcWithEat_Origin = findFunctionInCode(code, /tick\(\)$/,
    eatInsideRegex,
    deleteModDebug);

  let funcWithEat = findFunctionInCode(code, /tick\(\)$/,
    eatInsideRegex,
    deleteModDebug);

  funcWithEat = assertReplace(funcWithEat, /if\([$a-zA-Z0-9_]{0,6}\|\|[$a-zA-Z0-9_]{0,6}\){/,
    '$& window.checkboxes.checkboxStatuses.flashSnake && window.brieflyShowSnake();');

  //funcWithEat = swapInMainClassPrototype(mainClass, funcWithEat);
  //eval(funcWithEat);

  //Mine radius: the dashed red circle plus its fading blast preview. Both are helper calls
  //shaped `helper(renderer, centre, offsetX, offsetY, radius)`, once for the board and once per
  //wrapped copy in infinity mode.
  let mineRadiusInsideRegex = /strokeStyle="#f23606"/;

  let funcWithMineRadius_Origin = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\([$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\)$/,
    mineRadiusInsideRegex,
    deleteModDebug);

  let funcWithMineRadius = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}=function\([$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}\)$/,
    mineRadiusInsideRegex,
    deleteModDebug);

  funcWithMineRadius = assertReplaceAll(funcWithMineRadius, /[$a-zA-Z0-9_]{1,6}\([$a-zA-Z0-9_]{1,6},[$a-zA-Z0-9_]{1,6},(?:0,0|[$a-zA-Z0-9_]{1,6}\.x,[$a-zA-Z0-9_]{1,6}\.y),[$a-zA-Z0-9_]{1,6}\)/g,
    'window.checkboxes.checkboxStatuses.mineRadius && $&');

  //Arrows (mode 16): triangle/stroke tiles (zaF)
  let arrowsFnMatch = code.match(/([$a-zA-Z0-9_]{1,6})=function\(([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6})\)\{[$a-zA-Z0-9_.]{1,6}\.ka\.save\(\)/);
  if (!arrowsFnMatch) {
    throw new Error('Visibility mod: could not find arrow tile drawer (zaF)');
  }
  let arrowsFnName = arrowsFnMatch[1];
  code = assertReplace(code, new RegExp(arrowsFnName + '=function\\(([$a-zA-Z0-9_,]+)\\)\\{'),
    arrowsFnName + '=function($1){if(!window.checkboxes.checkboxStatuses.arrows)return;');

  //Shields (mode 15): directional bars on fruit via S$E
  let shieldsFnMatch = code.match(/([$a-zA-Z0-9_$]{1,6})=function\(([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6})=!1\)\{var [$a-zA-Z0-9_]{1,6}=Math\.round\([$a-zA-Z0-9_.]{1,20}\/5\)/);
  if (!shieldsFnMatch) {
    throw new Error('Visibility mod: could not find shield drawer (S$E)');
  }
  let shieldsFnName = shieldsFnMatch[1];
  code = assertReplace(code, new RegExp(shieldsFnName.replace(/\$/g, '\\$') + '=function\\(([$a-zA-Z0-9_=!,]+)\\)\\{'),
    shieldsFnName + '=function($1){if(!window.checkboxes.checkboxStatuses.shields)return;');

  //Gates (mode 19): BbF dashed rectangles
  let gatesFnMatch = code.match(/([$a-zA-Z0-9_]{1,6})=function\(([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6})\)\{for\(let [$a-zA-Z0-9_]{1,6} of [$a-zA-Z0-9_.]{1,20}\.Yfa\)/);
  if (!gatesFnMatch) {
    throw new Error('Visibility mod: could not find gate drawer (BbF)');
  }
  let gatesFnName = gatesFnMatch[1];
  code = assertReplace(code, new RegExp(gatesFnName + '=function\\(([$a-zA-Z0-9_,]+)\\)\\{'),
    gatesFnName + '=function($1){if(!window.checkboxes.checkboxStatuses.gates)return;');

  //Bridges (mode 20): obF static tiles
  let bridgesFnMatch = code.match(/([$a-zA-Z0-9_]{1,6})=function\(([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6}),([$a-zA-Z0-9_]{1,6})\)\{[$a-zA-Z0-9_]{1,6}\.ka\.save\(\);[$a-zA-Z0-9_]{1,6}===0&&[$a-zA-Z0-9_]{1,6}===0\|\|/);
  if (!bridgesFnMatch) {
    throw new Error('Visibility mod: could not find bridge drawer (obF)');
  }
  let bridgesFnName = bridgesFnMatch[1];
  code = assertReplace(code, new RegExp(bridgesFnName + '=function\\(([$a-zA-Z0-9_,]+)\\)\\{'),
    bridgesFnName + '=function($1){if(!window.checkboxes.checkboxStatuses.bridges)return;');

  //Border chrome CSS background-color (same palette index as the canvas border fill)
  code = assertReplaceAll(code,
    /_\.on\(([$a-zA-Z0-9_.()]{1,40}),"background-color",([$a-zA-Z0-9_]{1,6}\([$a-zA-Z0-9_.]{1,20},[$a-zA-Z0-9_.]{1,20},3\))\)/g,
    '($1&&window.visiBorderEls.push($1),window.visiBorderColor=$2,_.on($1,"background-color",window.checkboxes.checkboxStatuses.border?$2:"transparent"))'
  );

    // Mines
    /*
  let funcWithMines_Origin = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}\.prototype\.render=function\(a\)$/,
    /7/,
    deleteModDebug);

  let funcWithMines = findFunctionInCode(code, /[$a-zA-Z0-9_]{0,6}\.prototype\.render=function\(a\)$/,
    /7/,
    deleteModDebug);

    funcWithMines = assertReplaceAll(funcWithMines, /a.Aa.drawImage\(a.oa.canvas,0,a.ka.ka.ka\/6\)/g,
    'window.checkboxes.checkboxStatuses.mines && $&');
*/

    // Statue Cracks (best-effort — pattern may be absent on some builds)
  if (!window.catchError(/[a-z]\.[$a-zA-Z0-9_]{0,6}\.drawImage\([a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\(\),[a-z]\.[$a-zA-Z0-9_]{0,6}\*[a-z],0,[a-z],[a-z],-[a-z]\/2,-[a-z]\/2,[a-z],[a-z]\),[a-z]\.[$a-zA-Z0-9_]{0,6}\.globalAlpha=[a-z]\)/g, code)) {
  code = code.assertReplace(/[a-z]\.[$a-zA-Z0-9_]{0,6}\.drawImage\([a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\(\),[a-z]\.[$a-zA-Z0-9_]{0,6}\*[a-z],0,[a-z],[a-z],-[a-z]\/2,-[a-z]\/2,[a-z],[a-z]\),[a-z]\.[$a-zA-Z0-9_]{0,6}\.globalAlpha=[a-z]\)/g,
     'window.checkboxes.checkboxStatuses.brokenStatue && $&')
  }

     // Statue (including cracks)
  code = code.assertReplace(/[$a-zA-Z0-9_]{0,6}\(this,[a-z],[a-z],[a-z]\.[$a-zA-Z0-9_]{0,6}\.angle,[a-z]\.[$a-zA-Z0-9_]{0,6}\)/g,
     `window.checkboxes.checkboxStatuses.statue && $&`)



  minesDefinition_Origin = code.match(/this\.[a-zA-Z0-9_$]{1,8}=new [a-zA-Z0-9_$]{1,8}\(this.[a-zA-Z0-9_$]{1,8},"snake_arcade\/mine\.png\",10,this\.[a-zA-Z0-9_$]{1,8},"snake_arcade\/pixel\/px_mine\.png\"\)/g)[0]

  window.minesDefined = minesDefinition_Origin.split('=')[0].split('.')[1]
  window.minesEmptySrc = 'https://i.postimg.cc/LhKWc2Wb/Empty.png'
  minesDefinition_NewCode = `${minesDefinition_Origin};
    window.MinesRef=this;
    window.DefaultMines=${minesDefinition_Origin}
    window.NoMines=${minesDefinition_Origin.split('=')[1].split('"')[0]} "${window.minesEmptySrc}" ${minesDefinition_Origin.split('"')[2]} "${window.minesEmptySrc}" ${minesDefinition_Origin.split('"')[4]}
    `

/*
  mineRadiusWidth_Origin = code.match(/[a-z]\.[$a-zA-Z0-9_]{0,6}\.lineWidth=[a-z]\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\/12;/)[0]
  mineRadiusWidth = mineRadiusWidth_Origin;

  mineRadiusWidth_Code = `
  if(window.checkboxes.checkboxStatuses.mineRadius) {
    ${mineRadiusWidth_Origin}
  }
  else {
    ${mineRadiusWidth_Origin.split('=')[0]}=0;
  }
  `
  */
  //code = code.assertReplace(/[$a-zA-Z0-9_]{0,6}\(this,[a-z],[a-z],[a-z]\.[$a-zA-Z0-9_]{0,6}\.angle,[a-z]\.[$a-zA-Z0-9_]{0,6}\)/g,
  //   `window.checkboxes.checkboxStatuses.mines && $&`)

  //code = code.assertReplace(mineRadiusWidth_Origin, mineRadiusWidth_Code)
  code = code.assertReplace(minesDefinition_Origin, minesDefinition_NewCode)
  code = code.assertReplace(funcWithMineRadius_Origin, funcWithMineRadius)
  code = code.assertReplace(funcWithFruit_Origin, funcWithFruit)
  code = code.assertReplace(funcWithBodyParts_Origin, funcWithBodyParts)
  code = code.assertReplace(funcWithRenderWall_Origin, funcWithRenderWall)
  code = code.assertReplace(funcWithSokoban_Origin, funcWithSokoban)
  code = code.assertReplace(funcWithSokobanGoal_Origin, funcWithSokobanGoal)
  code = code.assertReplace(funcWithShadow_Origin, funcWithShadow)
  code = code.assertReplace(funcWithBackground_Origin, funcWithBackground)
  code = code.assertReplace(funcWithMiscRendering_Origin, funcWithMiscRendering)
  code = code.assertReplace(funcWithLockRendering_Origin, funcWithLockRendering)
  code = code.assertReplace(funcWithKeyRendering_Origin, funcWithKeyRendering)
  code = code.assertReplace(funcWithBodyLines_Origin, funcWithBodyLines)
  code = code.assertReplace(funcWithPortals_Origin, funcWithPortals)
  code = code.assertReplace(funcWithEat_Origin, funcWithEat)

  // Disables statue break animation
  if (!window.catchError(/[$a-zA-Z0-9_]{0,6}\(this\.[$a-zA-Z0-9_]{0,6},[a-z],new _\.[$a-zA-Z0-9_]{0,6}\([a-z],[a-z]\),[a-z],[a-z]\.[$a-zA-Z0-9_]{0,6}\)/g, code)) {
  code = code.assertReplace(/[$a-zA-Z0-9_]{0,6}\(this\.[$a-zA-Z0-9_]{0,6},[a-z],new _\.[$a-zA-Z0-9_]{0,6}\([a-z],[a-z]\),[a-z],[a-z]\.[$a-zA-Z0-9_]{0,6}\)/g,
     `window.checkboxes.checkboxStatuses.statue && $&`)
  }

  // Disable minesweeper break animation
  if (!window.catchError(/[a-z]=_\.[$a-zA-Z0-9_]{0,6}\(this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\);for\([a-z]=a\.next\(\);/, code)) {
  code = code.assertReplace(/[a-z]=_\.[$a-zA-Z0-9_]{0,6}\(this\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\.[$a-zA-Z0-9_]{0,6}\);for\([a-z]=a\.next\(\);/,
  `$& window.checkboxes.checkboxStatuses.mineRadius &&`)
  }

  //console.log(code)
  window.isVisi = true;

  return code;
}

window.VisibilityModCode.runCodeAfter = function () {

};window.MorePudding = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.MorePudding.runCodeBefore = function() {

  /*
    function loadAndRunCodeSynchronous(url) {
        let req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.onload = function() {
          if(this.status === 200) {
            (1,eval)(this.responseText);
          } else {
            console.log(`Loading selected mod returned non-200 status. Received: ${this.status}`);
          }
        };
        req.onerror = function(event) {
          console.error(`Error when attempting to retrieve mod code from ${url}`);
          console.log(event);
        };
        req.send();
      }
*/
    //loadAndRunCodeSynchronous('https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakePudding/main/PuddingMod.js');
    //loadAndRunCodeSynchronous('https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeCustomMenuStuff/main/modloadercode.js');

    console.log("Enabling Pudding Mod");
    window.PuddingMod.runCodeBefore();
    window.VisibilityModCode.runCodeBefore();
    window.moreMenu.runCodeBefore();

}

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.MorePudding.alterSnakeCode = function(code) {
  return window.moreMenu.alterSnakeCode(window.VisibilityModCode.alterSnakeCode(window.PuddingMod.alterSnakeCode(code)));
}


window.MorePudding.runCodeAfter = function() {
  //window.moreMenu.runCodeAfter();
  let modIndicator = document.createElement('div');
  modIndicator.style='position:absolute;font-family:roboto;color:white;font-size:14px;padding-top:4px;padding-left:30px;user-select: none;';
  modIndicator.textContent = 'More Pudding Mod';
  let canvasNode = document.getElementsByClassName('jNB0Ic')[0];
  document.getElementsByClassName('EjCLSb')[0].insertBefore(modIndicator, canvasNode);
};

window.CandyMod = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.CandyMod.runCodeBefore = function () {
  // MoreMenu intentionally omitted until it supports v12.
  // Future: window.moreMenu.runCodeBefore();

  console.log("Adding Candy Mode (v12)");

  window.CANDY_ICON = "https://i.postimg.cc/rsSFx6gg/candy.png";

  window.uiImage =
    window.uiImage ||
    function (src) {
      let img = new Image();
      img.src = src;
      img.classList.add("DqMRee");
      img.classList.add("SsAred");
      return img;
    };

  document.querySelector("#trophy").appendChild(uiImage(window.CANDY_ICON));
  window.CANDY_MODE = document.querySelector("#trophy").children.length - 1;

  let trophyEl = document.querySelector('img[src$="trophy_00.png"]');
  if (trophyEl) {
    let trophy_jsname = trophyEl.getAttribute("jsname");
    window.trophy_src =
      window.trophy_src ||
      `document.querySelector('img[jsname="${trophy_jsname}"]').src `;
  }

  window.candy_blending = false;

  window.toggle_candy_blender = function () {
    window.candy_blending = !window.candy_blending;
    window.correct_candy_selection();
  };

  window.correct_candy_selection = function correct_candy_selection() {
    let el = document.getElementById("remix-candy-blend");
    if (!el) return;
    if (window.candy_blending) {
      el.setAttribute("class", "vuOknd lH9Ipd blender_icon blender_icon_on");
      el.innerHTML =
        `<img class="DEvgAc FMN3L blender_icon_img blender_icon_img_selected" src="` +
        window.CANDY_ICON +
        `" alt="">`;
    } else {
      el.setAttribute("class", "vuOknd blender_icon");
      el.innerHTML =
        `<img class="DEvgAc blender_icon_img" src="` +
        window.CANDY_ICON +
        `" alt="">`;
    }
  };

  window.add_candy_blender_toggle = function add_candy_blender_toggle() {
    if (document.getElementById("remix-candy-blend")) return;
    if (!window.populateRemixBlenderSlot) return;
    window.populateRemixBlenderSlot({
      id: "remix-candy-blend",
      slotIndex: 0,
      icon: window.CANDY_ICON,
      ariaLabel: "Toggle Candy in Blender",
      onToggle: window.toggle_candy_blender,
    });
    window.correct_candy_selection();
  };

  window.add_candy_blender_toggle();
};

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.CandyMod.alterSnakeCode = function (code) {
  // MoreMenu intentionally omitted until it supports v12.
  // Future: code = window.moreMenu.alterSnakeCode(code);

  console.log("Coding Candy Mode into the game (v12)");

  window.updateCandyTrophySRC = function updateCandyTrophySRC() {
    if (window.trophy_src) {
      eval(window.trophy_src + `= window.CANDY_ICON`);
    }
  };

  window.isCandyActive = function isCandyActive() {
    return (
      window.CurrentModeNum === window.CANDY_MODE ||
      (window.CurrentModeNum === 22 && window.candy_blending)
    );
  };

  // Death-screen / header trophy URL for custom candy mode
  let deathscreen_trophy = new RegExp(
    /a\.settings\.Zb=`https:\/\/www\.google\.com\/logos\/fnbx\/\$\{a\.settings\.Ba===1\?`snake_arcade\/pixel\/v22\/px_trophy_\$\{b\}\.png`:`snake_arcade\/v22\/trophy_\$\{b\}\.png`\}`/
  );
  // `b` here is j$E(a.settings.ob) — a zero-padded string, so compare against the
  // raw numeric mode id instead.
  if (code.match(deathscreen_trophy)) {
    code = code.assertReplace(
      deathscreen_trophy,
      `a.settings.Zb=(a.settings.ob===window.CANDY_MODE)?window.CANDY_ICON:(a.settings.ob===window.CHESS_MODE)?window.CHESS_ICON:\`https://www.google.com/logos/fnbx/\${a.settings.Ba===1?\`snake_arcade/pixel/v22/px_trophy_\${b}.png\`:\`snake_arcade/v22/trophy_\${b}.png\`}\``
    );
  }

  // Blender's mode summary strip builds trophy_NN.png per selected mode; custom
  // modes have no such file, so point them at their own icons.
  let blender_mode_icons = new RegExp(
    /m\$E\(d,`https:\/\/www\.google\.com\/logos\/fnbx\/\$\{`snake_arcade\/v22\/trophy_\$\{j\$E\(c\)\}\.png`\}`\)/
  );
  if (code.match(blender_mode_icons)) {
    code = code.assertReplace(
      blender_mode_icons,
      `m$E(d,(c===window.CANDY_MODE)?window.CANDY_ICON:(c===window.CHESS_MODE)?window.CHESS_ICON:\`https://www.google.com/logos/fnbx/\${\`snake_arcade/v22/trophy_\${j$E(c)}.png\`}\`)`
    );
  }

  // Refresh topbar trophy when starting a candy game
  let reset_regex = new RegExp(/a\.ub=a\.ob;a\.ka=a\.Ca;/);
  if (code.match(reset_regex)) {
    code = code.assertReplace(
      reset_regex,
      `a.ub=a.ob;a.ka=a.Ca;if(window.CurrentModeNum===window.CANDY_MODE){window.updateCandyTrophySRC();}`
    );
  }

  // +1..+6 extra length on candy (and blender with candy toggle)
  let candy_logic = new RegExp(
    /f7\(this\.settings,3\)\?this\.oa\.Ta\+=2:this\.oa\.Ta\+=1;/
  );
  let candy_match = code.match(candy_logic);
  if (candy_match) {
    let snake_length = candy_match[0].split("+=")[0].split("?")[1] || "this.oa.Ta";
    // Prefer the +=1 target: this.oa.Ta
    snake_length = "this.oa.Ta";
    let candy_logic_set = `${candy_match[0]}
    if(window.isCandyActive && window.isCandyActive()) {
        ${snake_length} += Math.floor(Math.random() * 6);
    }
    `;
    code = code.assertReplace(candy_logic, candy_logic_set);
  } else {
    console.error("CandyMod: failed to find length increment regex");
  }

  // Inject candy/chess into blender mode set builder
  let blender_foreach = new RegExp(
    /a\.Ta\.forEach\(\(c,d\)=>\{_\.zm\(c,"lH9Ipd"\)&&b\.push\(d\)\}\)/
  );
  if (code.match(blender_foreach)) {
    code = code.assertReplace(
      blender_foreach,
      `a.Ta.forEach((c,d)=>{_.zm(c,"lH9Ipd")&&b.push(d)});if(window.candy_blending&&window.CANDY_MODE!=null)b.push(window.CANDY_MODE);if(window.chess_blending&&window.CHESS_MODE!=null)b.push(window.CHESS_MODE)`
    );
  } else {
    console.error("CandyMod: failed to find blender forEach regex");
  }

  // Map custom blender panel icons into Ta with correct mode ids.
  // Must stay an expression (ternary false-branch) — a bare {let ...} block is a SyntaxError.
  let ta_fallback = new RegExp(
    /this\.Ta\.set\(22,e\),this\.kl\.set\(e,22\)/
  );
  if (code.match(ta_fallback)) {
    code = code.assertReplace(
      ta_fallback,
      `((function(el){var s=el.children[0]&&el.children[0].src||"",m=22;if(window.CANDY_MODE!=null&&s.indexOf("rsSFx6gg")>=0)m=window.CANDY_MODE;else if(window.CHESS_MODE!=null&&s.indexOf("ZqK0CB95")>=0)m=window.CHESS_MODE;this.Ta.set(m,el);this.kl.set(el,m);}).call(this,e))`
    );
  }

  return code;
};

////////////////////////////////////////////////////////////////////
//RUNCODEAFTER
////////////////////////////////////////////////////////////////////

window.CandyMod.runCodeAfter = function () {
  window.add_candy_blender_toggle && window.add_candy_blender_toggle();
};

window.ChessMod = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.ChessMod.runCodeBefore = function () {
  console.log("Adding Chess Mode (v12, independent mode)");

  window.CHESS_ICON = "https://i.postimg.cc/ZqK0CB95/bn.png";

  window.uiImage =
    window.uiImage ||
    function (src) {
      let img = new Image();
      img.src = src;
      img.classList.add("DqMRee");
      img.classList.add("SsAred");
      return img;
    };

  // Inject chess piece fruits into Pudding's new_fruit (hidden from fruit picker)
  window.injectChessFruits = function injectChessFruits() {
    if (!window.new_fruit || window._chessFruitsInjected) return;
    window._chessFruitsInjected = true;

    let pieces = [
      { Normal: "https://i.postimg.cc/NG8bwZw7/bb.png", Pixel: "https://i.postimg.cc/zvbZcVNz/Chess-bishop.png", Real: "https://i.postimg.cc/NG8bwZw7/bb.png" },
      { Normal: "https://i.postimg.cc/zGNyYP8W/bk.png", Pixel: "https://i.postimg.cc/tRwHVtdY/Chess-king.png", Real: "https://i.postimg.cc/zGNyYP8W/bk.png" },
      { Normal: "https://i.postimg.cc/ZqK0CB95/bn.png", Pixel: "https://i.postimg.cc/rwC6bBBr/Chess-knight.png", Real: "https://i.postimg.cc/ZqK0CB95/bn.png" },
      { Normal: "https://i.postimg.cc/fLVLfGf4/bp.png", Pixel: "https://i.postimg.cc/jjxVr8Tk/Chess-pawn.png", Real: "https://i.postimg.cc/fLVLfGf4/bp.png" },
      { Normal: "https://i.postimg.cc/g0SjRzRq/bq.png", Pixel: "https://i.postimg.cc/J4XC3DKK/Chess-queen.png", Real: "https://i.postimg.cc/g0SjRzRq/bq.png" },
      { Normal: "https://i.postimg.cc/fL1b288V/br.png", Pixel: "https://i.postimg.cc/CLTmFLXt/Chess-Rook.png", Real: "https://i.postimg.cc/fL1b288V/br.png" },
      { Normal: "https://i.postimg.cc/nc4L2YBL/wb.png", Pixel: "https://i.postimg.cc/QtnZmcRY/Chess-bishop-white.png", Real: "https://i.postimg.cc/nc4L2YBL/wb.png" },
      { Normal: "https://i.postimg.cc/4ytxrp0B/wk.png", Pixel: "https://i.postimg.cc/vTJFFb8W/Chess-king-white.png", Real: "https://i.postimg.cc/4ytxrp0B/wk.png" },
      { Normal: "https://i.postimg.cc/ncbzqws5/wn.png", Pixel: "https://i.postimg.cc/VkcQKfVw/chess-knight-white.png", Real: "https://i.postimg.cc/ncbzqws5/wn.png" },
      { Normal: "https://i.postimg.cc/VsbvrcNn/wp.png", Pixel: "https://i.postimg.cc/vBTp4ccr/chess-pawn-white.png", Real: "https://i.postimg.cc/VsbvrcNn/wp.png" },
      { Normal: "https://i.postimg.cc/mgTg5zyy/wq.png", Pixel: "https://i.postimg.cc/JhPf7b47/chess-queen-white.png", Real: "https://i.postimg.cc/mgTg5zyy/wq.png" },
      { Normal: "https://i.postimg.cc/kgwg3Jj3/wr.png", Pixel: "https://i.postimg.cc/xCZBMnzW/chess-rook-white.png", Real: "https://i.postimg.cc/kgwg3Jj3/wr.png" },
    ];

    // last_fruit_num is set by Pudding Fruit.make (vanilla menu count - 1)
    let base = typeof last_fruit_num !== "undefined" ? last_fruit_num : document.querySelector("#apple").children.length - 1;

    // Pudding addresses its own trailing entries by offset from the end of the
    // array: goldenIndex = length - 6 (the five secret golden fruits) and the
    // skull poison sprite = length - 1. Appending after them silently rebinds
    // both to chess pieces, so slot the pieces in ahead of that tail instead.
    let secretTail = 6;
    let insertAt = window.new_fruit.length - secretTail;
    let skull = window.new_fruit[window.new_fruit.length - 1];
    if (insertAt < 0 || !skull || !/poison-skull/.test(skull.Real || "")) {
      console.error("ChessMod: Pudding secret-fruit tail not found, appending at end");
      insertAt = window.new_fruit.length;
    }
    let startType = base + 1 + insertAt;

    for (let i = 0; i < pieces.length; i++) {
      pieces[i].Poison_values = "b,'#eaca23','#909090',20";
    }
    window.new_fruit.splice(insertAt, 0, ...pieces);

    // Order pushed: bbishop, bking, bknight, bpawn, bqueen, brook, wbishop, wking, wknight, wpawn, wqueen, wrook
    window.bbishop = startType;
    window.bking = startType + 1;
    window.bknight = startType + 2;
    window.bpawn = startType + 3;
    window.bqueen = startType + 4;
    window.brook = startType + 5;
    window.wbishop = startType + 6;
    window.wking = startType + 7;
    window.wknight = startType + 8;
    window.wpawn = startType + 9;
    window.wqueen = startType + 10;
    window.wrook = startType + 11;

    console.log("Chess fruits injected, wrook=", window.wrook);
  };

  // Pudding already ran Fruit.make in its runCodeBefore when called from Remix.
  // Remix calls MorePudding (Pudding → Visibility → MoreMenu) then Chess, so
  // new_fruit and the Visibility panel both exist by now.
  if (window.new_fruit) {
    window.injectChessFruits();
  }

  // Adds a "Chess Pieces" row to the Visibility panel that MorePudding bundles,
  // so pieces can be hidden without hiding ordinary fruit.
  window.addChessVisibilityToggle = function addChessVisibilityToggle() {
    if (!window.checkboxes || !window.checkboxes.checkboxStatuses) return;
    let statuses = window.checkboxes.checkboxStatuses;
    if (statuses.chessPieces === undefined) statuses.chessPieces = true;

    // Pieces are drawn in the same pass as fruit, so the shadow silhouette pass
    // has to know about the key too or hidden pieces keep their shadows.
    if (Array.isArray(window.visiShadowPassKeys) && !window.visiShadowPassKeys.includes("chessPieces")) {
      let at = window.visiShadowPassKeys.indexOf("poison");
      window.visiShadowPassKeys.splice(at < 0 ? window.visiShadowPassKeys.length : at + 1, 0, "chessPieces");
    }

    if (document.getElementById("chess-pieces")) return;
    let lightFruit = document.getElementById("light-fruit");
    if (!lightFruit) return;
    let row = lightFruit.closest("li");
    if (!row || !row.parentElement) return;

    let item = document.createElement("li");
    item.innerHTML =
      '<label class="form-check-label"><input class="form-check-input" id="chess-pieces" type="checkbox">Chess Pieces</label>';
    row.parentElement.insertBefore(item, row.nextSibling);

    let box = item.querySelector("#chess-pieces");
    box.checked = statuses.chessPieces;
    box.onchange = function () {
      window.checkboxes.checkboxStatuses.chessPieces = this.checked;
    };

    let template = document.getElementById("tooltiptemplate");
    if (template) {
      let tooltip = template.content.cloneNode(true);
      tooltip.querySelector(".tooltiptext").textContent =
        "Chess pieces spawned by Chess mode. Uncheck to hide pieces while keeping normal fruit visible.";
      box.parentElement.parentElement.appendChild(tooltip);
    }
  };

  window.addChessVisibilityToggle();

  // Own trophy slot (do not wipe other modes / do not steal Shield)
  document.querySelector("#trophy").appendChild(uiImage(window.CHESS_ICON));
  window.CHESS_MODE = document.querySelector("#trophy").children.length - 1;

  let trophyEl = document.querySelector('img[src$="trophy_00.png"]');
  if (trophyEl) {
    let trophy_jsname = trophyEl.getAttribute("jsname");
    window.trophy_src =
      window.trophy_src ||
      `document.querySelector('img[jsname="${trophy_jsname}"]').src `;
  }

  // Capture sound
  fetch(
    "https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeRemix/main/ChessCapture.mp3"
  )
    .then(function (response) {
      return response.arrayBuffer();
    })
    .then(function (buffer) {
      window.capture_sound = new Audio();
      window.capture_sound.src = URL.createObjectURL(new Blob([buffer]));
    })
    .catch(function () {
      // Fallback to Chess repo URL while Remix audio may not be published yet
      fetch(
        "https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeChess/main/ChessCapture.mp3"
      )
        .then(function (r) {
          return r.arrayBuffer();
        })
        .then(function (buffer) {
          window.capture_sound = new Audio();
          window.capture_sound.src = URL.createObjectURL(new Blob([buffer]));
        })
        .catch(function (err) {
          console.error("Error loading chess capture sound:", err);
        });
    });

  window.chess_blending = false;

  window.toggle_chess_blender = function () {
    window.chess_blending = !window.chess_blending;
    window.correct_chess_selection();
  };

  window.correct_chess_selection = function correct_chess_selection() {
    let el = document.getElementById("remix-chess-blend");
    if (!el) return;
    if (window.chess_blending) {
      el.setAttribute("class", "vuOknd lH9Ipd blender_icon blender_icon_on");
      el.innerHTML =
        `<img class="DEvgAc FMN3L blender_icon_img blender_icon_img_selected" src="` +
        window.CHESS_ICON +
        `" alt="">`;
    } else {
      el.setAttribute("class", "vuOknd blender_icon");
      el.innerHTML =
        `<img class="DEvgAc blender_icon_img" src="` +
        window.CHESS_ICON +
        `" alt="">`;
    }
  };

  window.add_chess_blender_toggle = function add_chess_blender_toggle() {
    if (document.getElementById("remix-chess-blend")) return;
    if (!window.populateRemixBlenderSlot) return;
    window.populateRemixBlenderSlot({
      id: "remix-chess-blend",
      slotIndex: 1,
      icon: window.CHESS_ICON,
      ariaLabel: "Toggle Chess in Blender",
      onToggle: window.toggle_chess_blender,
    });
    window.correct_chess_selection();
  };

  window.add_chess_blender_toggle();
};

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.ChessMod.alterSnakeCode = function (code) {
  console.log("Coding Chess Mode into the game (v12)");

  // Ensure fruits exist if alter runs in odd order
  if (window.new_fruit && !window._chessFruitsInjected) {
    window.injectChessFruits();
  }

  // Visibility gates fruit drawing on one checkbox for everything that is not
  // poison. Split pieces out of that branch so the Chess Pieces row applies.
  // Both the normal and the twin/infinity mirrored draw carry the same guard.
  let fruitGate =
    "(window.visiFullPass || (b.nla ? window.checkboxes.checkboxStatuses.poison : window.checkboxes.checkboxStatuses.fruit))";
  if (code.includes(fruitGate)) {
    code = code.replaceAll(
      fruitGate,
      "(window.visiFullPass || (b.nla ? window.checkboxes.checkboxStatuses.poison : (b.isPiece ? window.checkboxes.checkboxStatuses.chessPieces : window.checkboxes.checkboxStatuses.fruit)))"
    );
  } else {
    console.error("ChessMod: failed to find Visibility fruit gate for chess pieces");
  }

  window.PiecesDict = {
    [window.wrook]: "https://i.postimg.cc/kgwg3Jj3/wr.png",
    [window.wqueen]: "https://i.postimg.cc/mgTg5zyy/wq.png",
    [window.wpawn]: "https://i.postimg.cc/VsbvrcNn/wp.png",
    [window.wknight]: "https://i.postimg.cc/ncbzqws5/wn.png",
    [window.wking]: "https://i.postimg.cc/4ytxrp0B/wk.png",
    [window.wbishop]: "https://i.postimg.cc/nc4L2YBL/wb.png",
    [window.brook]: "https://i.postimg.cc/fL1b288V/br.png",
    [window.bqueen]: "https://i.postimg.cc/g0SjRzRq/bq.png",
    [window.bpawn]: "https://i.postimg.cc/fLVLfGf4/bp.png",
    [window.bknight]: "https://i.postimg.cc/ZqK0CB95/bn.png",
    [window.bking]: "https://i.postimg.cc/zGNyYP8W/bk.png",
    [window.bbishop]: "https://i.postimg.cc/NG8bwZw7/bb.png",
  };

  window.updateTrophySRC = function updateTrophySRC(type) {
    if (!window.trophy_src) return;
    if (typeof type === "undefined") {
      eval(window.trophy_src + `= window.CHESS_ICON`);
    } else {
      eval(window.trophy_src + `= window.PiecesDict[` + type + `]`);
    }
  };

  window.isChessActive = function isChessActive() {
    return (
      window.CurrentModeNum === window.CHESS_MODE ||
      (window.CurrentModeNum === 22 && window.chess_blending)
    );
  };

  window.head_pos = [{ y: 0, x: 0 }];
  window.head_dir = "RIGHT";
  window.head_state = "OPEN";
  window.head_color = "NONE";
  window.color_turn = "w";
  window.just_ate = "fruit";
  window.appleArray = [];
  window.selectedFruit = 0;
  window.dice_doubler = 1;
  window.muted = false;

  // Shield field name on apple objects in v12
  window.chess_shield_field = "Oba";

  window.shield_all = function shield_all() {
    if (!window.appleArray) return;
    // Original Chess: lock EVERY apple (fruit and pieces) while carrying a piece
    window.appleArray.forEach(function (apple) {
      apple[window.chess_shield_field] = new Set([
        "UP",
        "DOWN",
        "LEFT",
        "RIGHT",
      ]);
    });
  };

  window.shield_empty_all = function shield_empty_all() {
    if (!window.appleArray) return;
    window.appleArray.forEach(function (apple) {
      apple[window.chess_shield_field] = undefined;
    });
  };

  // Original order: shield_all first, then unlock attempts; OPEN empties shields
  window.chess_tick_logic = function chess_tick_logic() {
    if (!window.isChessActive()) return;

    window.shield_all();
    switch (window.head_state) {
      case "pawn":
        window.pawn_open(window.head_pos[0]);
        break;
      case "rook":
        window.rook_open(window.head_pos[0]);
        break;
      case "bishop":
        window.bishop_open(window.head_pos[0]);
        break;
      case "knight":
        window.knight_open(window.head_pos[0]);
        break;
      case "king":
        window.king_open(window.head_pos[0]);
        break;
      case "queen":
        if (!window.rook_open(window.head_pos[0])) {
          window.bishop_open(window.head_pos[0]);
        }
        break;
      case "OPEN":
      default:
        window.shield_empty_all();
        break;
    }
  };

  window.capture_attempt = function capture_attempt(x, y) {
    // Unlock is not eat: convert exactly one opposite piece to fruit, then OPEN.
    if (window.head_state === "OPEN") return false;
    for (let index = 0; index < window.appleArray.length; index++) {
      let apple = window.appleArray[index];
      if (
        apple.isPiece &&
        apple.pos.x == x &&
        apple.pos.y == y &&
        window.head_color != apple.ChessColor
      ) {
        window.head_state = "OPEN";
        if (window.selectedFruit == 22) {
          let randomNumber = Math.floor(Math.random() * 51 + 1) % 52;
          let finalResult =
            randomNumber === 22 ? (randomNumber + 1) % 52 : randomNumber;
          apple.type = finalResult;
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

  window.capture_loop = function capture_loop(headPos, possibleMoves) {
    for (let index = 0; index < possibleMoves.length; index++) {
      let element = possibleMoves[index];
      if (
        window.capture_attempt(headPos.x + element.dx, headPos.y - element.dy)
      ) {
        break;
      }
    }
  };

  window.pawn_open = function pawn_open(headPos) {
    window.capture_loop(headPos, [
      { dx: -1, dy: -1 },
      { dx: -1, dy: 1 },
      { dx: 1, dy: 1 },
      { dx: 1, dy: -1 },
    ]);
  };

  window.king_open = function king_open(headPos) {
    window.capture_loop(headPos, [
      { dx: -1, dy: -1 },
      { dx: -1, dy: 1 },
      { dx: 1, dy: 1 },
      { dx: 1, dy: -1 },
      { dx: 0, dy: -1 },
      { dx: -1, dy: 0 },
      { dx: 1, dy: 0 },
      { dx: 0, dy: 1 },
    ]);
  };

  window.knight_open = function knight_open(headPos) {
    window.capture_loop(headPos, [
      { dx: -1, dy: 2 },
      { dx: -2, dy: 1 },
      { dx: -2, dy: -1 },
      { dx: -1, dy: -2 },
      { dx: 2, dy: 1 },
      { dx: 1, dy: 2 },
      { dx: 1, dy: -2 },
      { dx: 2, dy: -1 },
    ]);
  };

  function getClosestPiecesToRook(rookPos, pieces) {
    const closestPieces = {
      up: { piece: null, distance: Infinity },
      down: { piece: null, distance: Infinity },
      left: { piece: null, distance: Infinity },
      right: { piece: null, distance: Infinity },
    };

    pieces.forEach(function (piece) {
      const distance =
        Math.abs(piece.pos.x - rookPos.x) + Math.abs(piece.pos.y - rookPos.y);

      if (
        piece.pos.x === rookPos.x &&
        piece.pos.y < rookPos.y &&
        distance < closestPieces.up.distance
      ) {
        closestPieces.up = { piece: piece, distance: distance };
      } else if (
        piece.pos.x === rookPos.x &&
        piece.pos.y > rookPos.y &&
        distance < closestPieces.down.distance
      ) {
        closestPieces.down = { piece: piece, distance: distance };
      } else if (
        piece.pos.y === rookPos.y &&
        piece.pos.x < rookPos.x &&
        distance < closestPieces.left.distance
      ) {
        closestPieces.left = { piece: piece, distance: distance };
      } else if (
        piece.pos.y === rookPos.y &&
        piece.pos.x > rookPos.x &&
        distance < closestPieces.right.distance
      ) {
        closestPieces.right = { piece: piece, distance: distance };
      }
    });

    return Object.values(closestPieces)
      .map(function (o) {
        return o.piece;
      })
      .filter(function (piece) {
        return piece !== null;
      });
  }

  window.rook_open = function rook_open(headPos) {
    let closestPieces = getClosestPiecesToRook(headPos, window.appleArray);
    for (let index = 0; index < closestPieces.length; index++) {
      let element = closestPieces[index];
      if (element.ChessColor != window.head_color) {
        return window.capture_attempt(element.pos.x, element.pos.y);
      }
    }
    return false;
  };

  function getDistance(dx, dy) {
    return Math.abs(dx) + Math.abs(dy);
  }

  function getClosestPiecesToBishop(bishopPos, pieces) {
    const closestPieces = {};

    pieces.forEach(function (piece) {
      const dx = piece.pos.x - bishopPos.x;
      const dy = piece.pos.y - bishopPos.y;

      if (Math.abs(dx) === Math.abs(dy)) {
        const direction =
          (dx < 0 ? "left-" : "right-") + (dy < 0 ? "up" : "down");

        if (
          !closestPieces[direction] ||
          getDistance(dx, dy) <
            getDistance(
              closestPieces[direction].pos.x - bishopPos.x,
              closestPieces[direction].pos.y - bishopPos.y
            )
        ) {
          closestPieces[direction] = piece;
        }
      }
    });

    return Object.values(closestPieces).sort(function (a, b) {
      return (
        getDistance(a.pos.x - bishopPos.x, a.pos.y - bishopPos.y) -
        getDistance(b.pos.x - bishopPos.x, b.pos.y - bishopPos.y)
      );
    });
  }

  window.bishop_open = function bishop_open(headPos) {
    let closestPieces = getClosestPiecesToBishop(headPos, window.appleArray);
    for (let index = 0; index < closestPieces.length; index++) {
      let element = closestPieces[index];
      if (element.ChessColor != window.head_color) {
        return window.capture_attempt(element.pos.x, element.pos.y);
      }
    }
    return false;
  };

  window.getRandomPiece = function getRandomPiece() {
    const randomNumber = Math.floor(Math.random() * 16) + 1;
    if (randomNumber <= 8) return "pawn";
    if (randomNumber <= 10) return "knight";
    if (randomNumber <= 12) return "bishop";
    if (randomNumber <= 14) return "rook";
    if (randomNumber === 15) return "queen";
    return "king";
  };

  window.SwitchTurn = function SwitchTurn() {
    window.color_turn = window.color_turn == "b" ? "w" : "b";
  };

  window.randomize_pieces = function randomize_pieces() {
    for (let index = 0; index < window.appleArray.length; index++) {
      let element = window.appleArray[index];
      element.ChessPiece = window.getRandomPiece();
      element.ChessColor = window.color_turn;
      element.isPiece = true;
      element.type = window[window.color_turn + element.ChessPiece];
      window.SwitchTurn();
    }
  };

  window.findApple = function findApple(headPos, appleArray) {
    for (let index = 0; index < appleArray.length; index++) {
      let element = appleArray[index];
      if (element.pos.x == headPos.x && element.pos.y == headPos.y) {
        element.myIndex = index;
        return element;
      }
    }
    return null;
  };

  // --- Legal spawn helpers (board bounds, snake, fruits/pieces) ---
  window.chess_pos_key = function chess_pos_key(pos) {
    if (!pos || pos.x == null || pos.y == null) return null;
    return (pos.x << 16) | (pos.y & 65535);
  };

  window.chess_board_size = function chess_board_size(board) {
    const box = board && board.oa;
    if (!box) return null;
    return { width: box.width | 0, height: box.height | 0 };
  };

  window.chess_in_bounds = function chess_in_bounds(board, pos) {
    const size = window.chess_board_size(board);
    if (!size || !pos || pos.x == null || pos.y == null) return false;
    return (
      pos.x >= 0 &&
      pos.y >= 0 &&
      pos.x < size.width &&
      pos.y < size.height
    );
  };

  // Occupied keys: snake segments + every apple except skipIndexes.
  window.chess_occupied_keys = function chess_occupied_keys(
    game,
    apples,
    skipIndexes
  ) {
    const keys = new Set();
    const skip =
      skipIndexes instanceof Set
        ? skipIndexes
        : new Set(skipIndexes || []);
    if (game && game.oa && Array.isArray(game.oa.ka)) {
      for (let i = 0; i < game.oa.ka.length; i++) {
        const seg = game.oa.ka[i];
        const k = window.chess_pos_key(seg);
        if (k != null) keys.add(k);
      }
    }
    const list = apples || [];
    for (let i = 0; i < list.length; i++) {
      if (skip.has(i)) continue;
      const k = window.chess_pos_key(list[i] && list[i].pos);
      if (k != null) keys.add(k);
    }
    return keys;
  };

  window.chess_is_legal_spawn = function chess_is_legal_spawn(
    board,
    pos,
    occupiedKeys
  ) {
    if (!window.chess_in_bounds(board, pos)) return false;
    if (!occupiedKeys) return true;
    const k = window.chess_pos_key(pos);
    return k == null || !occupiedKeys.has(k);
  };

  // Native Tb bans cells with l7(board, head, cell) <= 3 when portal/shield
  // spawn (b===2). Chess enables shield via f7(..., 15), so new piece spawns
  // must keep the same head radius. Start-layout (iaF) positions are exempt.
  window.chess_spawn_radius = 3;

  window.chess_spawn_dist = function chess_spawn_dist(board, from, to) {
    if (!from || !to) return Infinity;
    if (typeof l7 === "function" && board) {
      try {
        return l7(board, from, to);
      } catch (_e) {}
    }
    return Math.abs(from.x - to.x) + Math.abs(from.y - to.y);
  };

  window.chess_outside_spawn_radius = function chess_outside_spawn_radius(
    game,
    pos,
    maxDist
  ) {
    if (!pos || pos.x == null || pos.y == null) return false;
    const limit =
      maxDist == null ? window.chess_spawn_radius : maxDist;
    const snake = game && game.oa;
    const head = snake && snake.ka && snake.ka[0];
    if (!head) return true;
    const board = game.ka || (game.wa && game.wa.oa) || null;
    if (window.chess_spawn_dist(board, head, pos) <= limit) return false;
    // Twin snake: also ban the head-radius mirror, matching Tb.
    if (
      snake &&
      snake.settings &&
      typeof f7 === "function" &&
      f7(snake.settings, 7) &&
      typeof k7 === "function" &&
      board
    ) {
      try {
        const twin = k7(board, pos);
        if (
          twin &&
          window.chess_spawn_dist(board, head, twin) <= limit
        ) {
          return false;
        }
      } catch (_e) {}
    }
    return true;
  };

  window.chess_make_pos = function chess_make_pos(x, y) {
    if (typeof _ !== "undefined" && _ && typeof _.Sd === "function") {
      return new _.Sd(x, y);
    }
    return { x: x, y: y };
  };

  // Prefer native freePos/Tb (spawn radius); validate; fall back to board scan
  // that still enforces the same head radius (never unrestricted).
  window.chess_find_legal_spawn = function chess_find_legal_spawn(
    board,
    freePos,
    occupiedKeys,
    excludeRef
  ) {
    const game = window.__remixGame;
    const ok = function (p) {
      return (
        p &&
        window.chess_is_legal_spawn(board, p, occupiedKeys) &&
        window.chess_outside_spawn_radius(game, p)
      );
    };
    if (typeof freePos === "function" && board) {
      for (let attempt = 0; attempt < 12; attempt++) {
        const p = freePos(board, excludeRef || null, 2);
        if (ok(p)) return p;
      }
    }
    if (game && typeof game.Tb === "function") {
      for (let attempt = 0; attempt < 8; attempt++) {
        const p = game.Tb(excludeRef || null, 2);
        if (ok(p)) return p;
      }
    }
    const size = window.chess_board_size(board);
    if (!size || size.width <= 0 || size.height <= 0) return null;
    const total = size.width * size.height;
    const start = Math.floor(Math.random() * total);
    for (let n = 0; n < total; n++) {
      const i = (start + n) % total;
      const x = i % size.width;
      const y = (i / size.width) | 0;
      const pos = window.chess_make_pos(x, y);
      if (ok(pos)) return pos;
    }
    return null;
  };

  window.chess_assign_piece = function chess_assign_piece(el) {
    el.ChessPiece = window.getRandomPiece();
    el.ChessColor = window.color_turn;
    el.isPiece = true;
    el.type = window[window.color_turn + el.ChessPiece];
    el.Oba = undefined;
    window.SwitchTurn();
  };

  // Drop or relocate any apple whose cell is off-board / on snake / overlapping.
  // Returns false if the list had to shrink to stay even and legal.
  window.chess_sanitize_spawns = function chess_sanitize_spawns(
    mgr,
    freePos,
    fromIndex
  ) {
    if (!mgr || !mgr.ka) return true;
    const board = mgr.oa;
    const game = window.__remixGame;
    const start = fromIndex == null ? 0 : fromIndex;
    let ok = true;
    for (let i = start; i < mgr.ka.length; i++) {
      const el = mgr.ka[i];
      if (!el || !el.pos) continue;
      const occ = window.chess_occupied_keys(game, mgr.ka, new Set([i]));
      if (window.chess_is_legal_spawn(board, el.pos, occ)) continue;
      const fixed = window.chess_find_legal_spawn(board, freePos, occ, null);
      if (!fixed) {
        mgr.ka.splice(i, 1);
        i--;
        ok = false;
        continue;
      }
      if (typeof el.pos.clone === "function" && fixed.clone) {
        el.pos = fixed.clone();
      } else {
        el.pos.x = fixed.x;
        el.pos.y = fixed.y;
      }
    }
    window.appleArray = mgr.ka;
    return ok;
  };

  // Fruit eat: the game removes the eaten fruit (we skip its reposition), and this
  // spawns exactly 2 new pieces. All-or-nothing: if either cell is unavailable
  // under the spawn radius, neither spawns. Returns how many were added.
  window.chess_fruit_respawn = function chess_fruit_respawn(
    mgr,
    makeApple,
    freePos,
    pickType
  ) {
    if (!mgr || !mgr.ka) return 0;
    if (typeof makeApple !== "function") return 0;
    const board = mgr.oa;
    const game = window.__remixGame;
    window.appleArray = mgr.ka;

    const occ = window.chess_occupied_keys(game, mgr.ka, new Set());
    const posA = window.chess_find_legal_spawn(board, freePos, occ, null);
    if (!posA) return 0;
    const keyA = window.chess_pos_key(posA);
    occ.add(keyA);
    const posB = window.chess_find_legal_spawn(board, freePos, occ, null);
    if (!posB || window.chess_pos_key(posB) === keyA) return 0;

    const mk = function (pos) {
      let dup = makeApple(mgr, 0, 0);
      if (typeof pos.clone === "function") {
        dup.pos = pos.clone();
      } else {
        dup.pos.x = pos.x;
        dup.pos.y = pos.y;
      }
      if (typeof pickType === "function") dup.type = pickType(mgr);
      // Cm is the game's spawn-in animation flag (cleared by manager refresh()).
      dup.Cm = true;
      dup.cM = 0;
      dup.nD = 0;
      window.chess_assign_piece(dup);
      return dup;
    };
    mgr.ka.push(mk(posA), mk(posB));

    // Re-validate the committed pair; drop both together if anything is off.
    const iA = mgr.ka.length - 2;
    const iB = mgr.ka.length - 1;
    const occA = window.chess_occupied_keys(game, mgr.ka, new Set([iA]));
    const occB = window.chess_occupied_keys(game, mgr.ka, new Set([iB]));
    const okA =
      window.chess_is_legal_spawn(board, mgr.ka[iA].pos, occA) &&
      window.chess_outside_spawn_radius(game, mgr.ka[iA].pos);
    const okB =
      window.chess_is_legal_spawn(board, mgr.ka[iB].pos, occB) &&
      window.chess_outside_spawn_radius(game, mgr.ka[iB].pos);
    const same =
      window.chess_pos_key(mgr.ka[iA].pos) ===
      window.chess_pos_key(mgr.ka[iB].pos);
    if (!okA || !okB || same) {
      mgr.ka.splice(iA, 2);
      window.appleArray = mgr.ka;
      return 0;
    }
    window.appleArray = mgr.ka;
    return 2;
  };

  // Convert newly spawned apples (trailing count from qaF) into alternating pieces.
  // Relocate illegal cells; drop what cannot be placed; keep an even count.
  window.chess_convert_new_apples = function chess_convert_new_apples(mgr, added) {
    if (!mgr || !mgr.ka || !added || added <= 0) return;
    window.appleArray = mgr.ka;
    let start = mgr.ka.length - added;
    for (let i = start; i < mgr.ka.length; i++) {
      window.chess_assign_piece(mgr.ka[i]);
    }
    // Prefer native freePos via game.Tb when sanitizing qaF results.
    const freePos =
      window.__remixGame && typeof window.__remixGame.Tb === "function"
        ? function (board, excl, radius) {
            return window.__remixGame.Tb(excl, radius);
          }
        : null;
    window.chess_sanitize_spawns(mgr, freePos, start);
    window.appleArray = mgr.ka;
  };

  // True while the snake head is standing on a chess piece (checked live, before
  // the score hook splices it out of appleArray).
  window.chess_eating_piece = function chess_eating_piece() {
    if (!window.isChessActive || !window.isChessActive()) return false;
    if (!window.head_pos || !window.appleArray) return false;
    let apple = window.findApple(window.head_pos[0], window.appleArray);
    return !!(apple && apple.isPiece);
  };

  // --- Code patches for v12 ---

  // Make Chess activate Shield physics via f7(..., 15)
  let f7_regex = new RegExp(
    /f7=function\(a,b\)\{return a\.Qa\?a\.Jc\.has\(b\):a\.ub===22&&a\.ZSa\.has\(b\)\?!0:a\.ub===b\}/
  );
  if (code.match(f7_regex)) {
    code = code.assertReplace(
      f7_regex,
      `f7=function(a,b){var r=a.Qa?a.Jc.has(b):a.ub===22&&a.ZSa.has(b)?!0:a.ub===b;if(!r&&b===15&&window.CHESS_MODE!=null){if(a.ub===window.CHESS_MODE)return!0;if(a.ub===22&&a.ZSa&&a.ZSa.has(window.CHESS_MODE))return!0;}return r}`
    );
  } else {
    console.error("ChessMod: failed to patch f7");
  }

  // Inject into game tick: track head + run chess unlock logic BEFORE other updates.
  // Visibility may have already patched this tick(); keep the matcher loose.
  // Also expose __remixGame for the Playwright harness.
  let tick_regex = /\}tick\(\)\{/;
  if (code.match(/\}tick\(\)\{var a=this\.Aa,b=this\.lj;/)) {
    code = code.assertReplace(
      /\}tick\(\)\{var a=this\.Aa,b=this\.lj;/,
      `}tick(){window.__remixGame=this;if(window.isChessActive&&window.isChessActive()){try{window.head_pos=this.oa.ka;window.head_dir=this.oa.direction;window.appleArray=this.wa.ka;window.chess_tick_logic();}catch(_ce){console.error("ChessMod: tick failed",_ce);}}var a=this.Aa,b=this.lj;`
    );
  } else if (code.match(tick_regex)) {
    code = code.assertReplace(
      tick_regex,
      `}tick(){window.__remixGame=this;if(window.isChessActive&&window.isChessActive()){try{window.head_pos=this.oa.ka;window.head_dir=this.oa.direction;window.appleArray=this.wa.ka;window.chess_tick_logic();}catch(_e){}}`
    );
  } else {
    console.error("ChessMod: failed to find tick()");
  }

  // On apple manager reset: chess state + Portal pair layout (iaF force).
  // Pudding prepends timer code to reset(){ so we must NOT match reset(){this.ka=[] —
  // only the inner this.ka=[] / iaF line that still exists after Pudding.
  if (code.match(/this\.ka=\[\];var a=iaF\(this\.settings\)/)) {
    code = code.assertReplace(
      /this\.ka=\[\];var a=iaF\(this\.settings\)/,
      `this.ka=[];window.appleArray=this.ka;window.head_dir="RIGHT";window.head_state="OPEN";window.head_color="NONE";window.color_turn="w";window.just_ate="fruit";var a=iaF(this.settings)||!!(window.isChessActive&&window.isChessActive())`
    );
  } else if (code.match(/var a=iaF\(this\.settings\)/)) {
    code = code.assertReplace(
      /var a=iaF\(this\.settings\)/,
      `var a=iaF(this.settings)||!!(window.isChessActive&&window.isChessActive())`
    );
  } else {
    console.error("ChessMod: failed to find iaF apple-layout flag");
  }

  // After shield Oba init on reset: turn the apples into alternating pieces, start OPEN
  // Note: Pudding rewrites $$E -> doubleDE before this runs
  let after_shield_init = new RegExp(
    /if\(f7\(this\.settings,15\)\)for\(let q of this\.ka\)q\.Oba=doubleDE\(this,q\.pos\);/
  );
  if (code.match(after_shield_init)) {
    code = code.assertReplace(
      after_shield_init,
      `if(f7(this.settings,15))for(let q of this.ka)q.Oba=doubleDE(this,q.pos);if(window.isChessActive&&window.isChessActive()){try{window.appleArray=this.ka;window.randomize_pieces();window.shield_empty_all();}catch(_ce){console.error("ChessMod: reset failed",_ce);}}`
    );
  } else {
    console.error("ChessMod: failed to find shield init on reset");
  }

  // Collision cleanup: remove doomed apples in pairs while chess (keep even count)
  let pair_splice = new RegExp(
    /f7\(this\.settings,2\)\?n%2===0\?\(this\.ka\.splice\(n,2\),n--\):\(this\.ka\.splice\(n-\s*1,2\),n-=2\)/
  );
  if (code.match(pair_splice)) {
    code = code.assertReplace(
      pair_splice,
      `(f7(this.settings,2)||(window.isChessActive&&window.isChessActive()))?n%2===0?(this.ka.splice(n,2),n--):(this.ka.splice(n-1,2),n-=2)`
    );
  } else {
    console.error("ChessMod: failed to find pair-splice on reset");
  }

  // Portal pair-spawn in qaF: include chess so fruit eats / dice / bomb double via all-or-nothing pairs
  let qaf_pair = new RegExp(
    /f7\(a\.settings,\s*2\)&&!f\?/
  );
  if (code.match(qaf_pair)) {
    code = code.assertReplace(
      qaf_pair,
      `(f7(a.settings,2)||(window.isChessActive&&window.isChessActive()))&&!f?`
    );
  } else {
    console.error("ChessMod: failed to find qaF portal pair condition");
  }

  // After qaF adds apples (+ optional shields), convert new ones to chess pieces
  let qaf_after_oba = new RegExp(
    /g=a\.ka\.length-g;if\(e!==void 0\)for\(c=0;c<g;c\+\+\)a\.ka\[a\.ka\.length-1-c\]\.sequenceNumber=e;if\(f7\(a\.settings,15\)\)for\(e=0;e<g;e\+\+\)c=a\.ka\[a\.ka\.length-1-e\],c\.Oba=doubleDE\(a,c\.pos\);/
  );
  if (code.match(qaf_after_oba)) {
    code = code.assertReplace(
      qaf_after_oba,
      `g=a.ka.length-g;if(e!==void 0)for(c=0;c<g;c++)a.ka[a.ka.length-1-c].sequenceNumber=e;if(f7(a.settings,15))for(e=0;e<g;e++)c=a.ka[a.ka.length-1-e],c.Oba=doubleDE(a,c.pos);if(window.isChessActive&&window.isChessActive()&&g>0){window.chess_convert_new_apples(a,g);}`
    );
  } else {
    console.error("ChessMod: failed to find qaF trailing convert hook");
  }

  // Track selected fruit
  let case_apple = new RegExp(/case "apple":/);
  if (code.match(case_apple)) {
    code = code.assertReplace(
      case_apple,
      `case "apple":window.selectedFruit=d;`
    );
  }

  // Mute tracking
  let muted = new RegExp(/this\.muted=!this\.muted;/);
  if (code.match(muted)) {
    code = code.assertReplace(
      muted,
      `this.muted=!this.muted;window.muted=this.muted;`
    );
  }

  // Do NOT multiply dice roll by 2 — Portal pairing already doubles (R apples -> 2R pieces).

  // Score / eat: pieces never score; fruit scores; native qaF pairing handles respawn pieces
  let score_regex = new RegExp(/this\.Oh\+\+;/);
  if (code.match(score_regex)) {
    code = code.assertReplace(
      score_regex,
      `if(window.isChessActive&&window.isChessActive()){let _ae=window.findApple(window.head_pos[0],window.appleArray);if(_ae&&!_ae.isPiece){window.just_ate='fruit';this.Oh++;}else if(_ae&&_ae.isPiece){window.just_ate='piece';window.head_state=_ae.ChessPiece;window.updateTrophySRC(_ae.type);window.head_color=_ae.ChessColor;window.shield_all();}else{window.just_ate='fruit';this.Oh++;}}else{this.Oh++;}`
    );
  } else {
    console.error("ChessMod: failed to find score increment");
  }

  // Don't grow when eating a chess piece. This runs before the score hook, so the
  // piece is still in appleArray and can be detected live.
  let snakeLength = new RegExp(
    /f7\(this\.settings,3\)\?this\.oa\.Ta\+=2:this\.oa\.Ta\+=1;/
  );
  if (code.match(snakeLength)) {
    code = code.assertReplace(
      snakeLength,
      `f7(this.settings,3)?this.oa.Ta+=2:this.oa.Ta+=1;if(window.chess_eating_piece&&window.chess_eating_piece()){this.oa.Ta-=f7(this.settings,3)?2:1;}`
    );
  }

  // Also block Candy's random length bonus on chess piece pickup
  let candy_len_bonus = new RegExp(
    /if\(window\.isCandyActive && window\.isCandyActive\(\)\) \{\s*this\.oa\.Ta \+= Math\.floor\(Math\.random\(\) \* 6\);\s*\}/
  );
  if (code.match(candy_len_bonus)) {
    code = code.assertReplace(
      candy_len_bonus,
      `if(window.isCandyActive && window.isCandyActive() && !(window.chess_eating_piece&&window.chess_eating_piece())) {this.oa.Ta += Math.floor(Math.random() * 6);}`
    );
  }

  // Prevent native shield clear from fighting chess shields:
  // f7(this.settings,15)&&(maF(this.wa,Wd),...)
  let shield_clear = new RegExp(
    /f7\(this\.settings,15\)&&\(maF\(this\.wa,([a-zA-Z0-9_$]+)\),/
  );
  if (code.match(shield_clear)) {
    code = code.assertReplace(
      shield_clear,
      `f7(this.settings,15)&&!(window.isChessActive&&window.isChessActive())&&(maF(this.wa,$1),`
    );
  }

  // Chess never uses the native reposition (Mn): Xh=!1 makes the game splice the
  // eaten apple, so a piece eat removes only that piece and a fruit eat spawns
  // exactly 2 fresh pieces through chess_fruit_respawn.
  // Dice (ka 4), Tally (ka 6) and pre-first-explosion Bomb (ka 5) keep their own
  // refills, which the game fires when the board empties; Key/Soko spawn elsewhere.
  let spawn = new RegExp(
    /else\{let Ni=e7\(this\.settings\)\|\|f7\(this\.settings,7\);Xh=this\.Mn\(vd,!Ni,null\)\}/
  );
  if (code.match(spawn)) {
    code = code.assertReplace(
      spawn,
      `else{if(window.isChessActive&&window.isChessActive()){Xh=!1;if(window.just_ate==='fruit'&&!(this.settings.ka===4||this.settings.ka===6||(this.settings.ka===5&&!this.hc)||f7(this.settings,8)||f7(this.settings,9))){window.chess_fruit_respawn(this.wa,h7,oaF,aaF);}}else{let Ni=e7(this.settings)||f7(this.settings,7);Xh=this.Mn(vd,!Ni,null);}}`
    );
  } else {
    console.error("ChessMod: failed to find Mn respawn path");
  }

  // Tally wave refill (sdF) spawns 5 slots; Chess needs 10 pieces per wave.
  // Each slot gets its own tally index, so we raise the slot count instead of
  // routing through iaF pairing — paired slots share one sequence number, and
  // since every Chess eat advances the tally counter the twin would never
  // become edible again. Fewer than 10 spawn when the board has no room.
  let tally_wave = new RegExp(
    /var b=f7\(a\.settings,11\)\?10:5;a\.wa\.wa=1;/
  );
  if (code.match(tally_wave)) {
    code = code.assertReplace(
      tally_wave,
      `var b=(f7(a.settings,11)||(window.isChessActive&&window.isChessActive()))?10:5;a.wa.wa=1;`
    );
  } else {
    console.error("ChessMod: failed to find tally wave size");
  }

  // New piece placement after fruit eaten — handled by qaF pair spawn + chess_convert_new_apples

  // On play start with chess: set trophy icon (dice_doubler unused; pairing doubles)
  let play_start = new RegExp(/a\.ub=a\.ob;a\.ka=a\.Ca;/);
  if (code.indexOf("updateCandyTrophySRC") >= 0) {
    code = code.assertReplace(
      /if\(window\.CurrentModeNum===window\.CANDY_MODE\)\{window\.updateCandyTrophySRC\(\);\}/,
      `if(window.CurrentModeNum===window.CANDY_MODE){window.updateCandyTrophySRC();}if(window.CurrentModeNum===window.CHESS_MODE){window.updateTrophySRC();}`
    );
  } else if (code.match(play_start)) {
    code = code.assertReplace(
      play_start,
      `a.ub=a.ob;a.ka=a.Ca;if(window.CurrentModeNum===window.CHESS_MODE){window.updateTrophySRC();}`
    );
  }

  return code;
};

////////////////////////////////////////////////////////////////////
//RUNCODEAFTER
////////////////////////////////////////////////////////////////////

window.ChessMod.runCodeAfter = function () {
  window.add_chess_blender_toggle && window.add_chess_blender_toggle();
};

window.BurgerMod = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.BurgerMod.runCodeBefore = function () {
  console.log("Adding Burger Mode (v12)");

  window.BURGER_ICON = "https://i.postimg.cc/13m2Cr16/burger.png";

  window.uiImage =
    window.uiImage ||
    function (src) {
      let img = new Image();
      img.src = src;
      img.classList.add("DqMRee");
      img.classList.add("SsAred");
      return img;
    };

  document.querySelector("#trophy").appendChild(uiImage(window.BURGER_ICON));
  window.BURGER_MODE = document.querySelector("#trophy").children.length - 1;

  let trophyEl = document.querySelector('img[src$="trophy_00.png"]');
  if (trophyEl) {
    let trophy_jsname = trophyEl.getAttribute("jsname");
    window.trophy_src =
      window.trophy_src ||
      `document.querySelector('img[jsname="${trophy_jsname}"]').src `;
  }

  window.burger_blending = false;

  window.toggle_burger_blender = function () {
    window.burger_blending = !window.burger_blending;
    window.correct_burger_selection();
  };

  window.correct_burger_selection = function correct_burger_selection() {
    let el = document.getElementById("remix-burger-blend");
    if (!el) return;
    if (window.burger_blending) {
      el.setAttribute("class", "vuOknd lH9Ipd blender_icon blender_icon_on");
      el.innerHTML =
        `<img class="DEvgAc FMN3L blender_icon_img blender_icon_img_selected" src="` +
        window.BURGER_ICON +
        `" alt="">`;
    } else {
      el.setAttribute("class", "vuOknd blender_icon");
      el.innerHTML =
        `<img class="DEvgAc blender_icon_img" src="` +
        window.BURGER_ICON +
        `" alt="">`;
    }
  };

  window.add_burger_blender_toggle = function add_burger_blender_toggle() {
    if (document.getElementById("remix-burger-blend")) return;
    if (!window.populateRemixBlenderSlot) return;
    window.populateRemixBlenderSlot({
      id: "remix-burger-blend",
      slotIndex: 2,
      icon: window.BURGER_ICON,
      ariaLabel: "Toggle Burger in Blender",
      onToggle: window.toggle_burger_blender,
    });
    window.correct_burger_selection();
  };

  window.add_burger_blender_toggle();
};

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.BurgerMod.alterSnakeCode = function (code) {
  console.log("Coding Burger Mode into the game (v12)");

  window.isBurgerActive = function isBurgerActive() {
    return (
      window.CurrentModeNum === window.BURGER_MODE ||
      (window.CurrentModeNum === 22 && window.burger_blending)
    );
  };

  window.updateBurgerTrophySRC = function updateBurgerTrophySRC() {
    if (window.trophy_src) {
      eval(window.trophy_src + `= window.BURGER_ICON`);
    }
  };

  window.burger_fruits_eaten = 0;

  window.burger_board_box = function burger_board_box() {
    const g = window.__remixGame;
    if (!g) return null;
    const box =
      (g.ka && g.ka.oa) ||
      (g.wa && g.wa.oa && g.wa.oa.oa) ||
      (g.oa && g.oa.oa);
    if (!box) return null;
    return { width: box.width | 0, height: box.height | 0 };
  };

  // Body-segment count (not Ta growth queue). Used by timers and late-game.
  window.burger_snake_length = function burger_snake_length(game) {
    const g = game || window.__remixGame;
    if (g && g.oa && g.oa.ka) return g.oa.ka.length | 0;
    // Apple manager uses .Aa for the snake reference.
    if (g && g.Aa && g.Aa.ka) return g.Aa.ka.length | 0;
    return 0;
  };

  // No stagger. Base is corner-to-corner (W+H) − 7. Timer grows +1 with
  // snake length until half the board, then shrinks −1 per segment after that.
  window.burger_timer_roll = function burger_timer_roll(game) {
    const box = window.burger_board_box();
    if (!box || box.width <= 0 || box.height <= 0) return 25;
    const base = box.width + box.height - 7;
    const half = Math.floor((box.width * box.height) / 2);
    const L = window.burger_snake_length(game);
    const delta = L <= half ? L : 2 * half - L;
    return Math.max(1, base + delta);
  };

  window.burger_assign_timer = function burger_assign_timer(apple, game) {
    if (!apple || apple.nla) return;
    const t = window.burger_timer_roll(game);
    apple.burgerTimer = t;
    apple.burgerTimerMax = t;
    apple.burgerGrey = 0;
  };

  window.burger_assign_timers_all = function burger_assign_timers_all(
    apples,
    game
  ) {
    if (!apples) return;
    for (let i = 0; i < apples.length; i++) {
      window.burger_assign_timer(apples[i], game);
    }
  };

  // Cache greyscale on the apple (updated from tick, every 3 ticks). Draw
  // reads apple.burgerGrey only — no per-frame math or canvas.filter.
  window.burger_update_grey = function burger_update_grey(apple) {
    if (!apple || apple.nla || !(apple.burgerTimerMax > 0)) {
      if (apple) apple.burgerGrey = 0;
      return;
    }
    const elapsed = Math.max(
      0,
      apple.burgerTimerMax - Math.max(0, apple.burgerTimer | 0)
    );
    const stepped = Math.floor(elapsed / 3) * 3;
    apple.burgerGrey =
      stepped <= 0
        ? 0
        : Math.min(100, Math.floor((stepped / apple.burgerTimerMax) * 100));
  };

  window.burger_fresh_count = function burger_fresh_count(apples) {
    let n = 0;
    if (!apples) return 0;
    for (let i = 0; i < apples.length; i++) {
      if (apples[i] && !apples[i].nla) n++;
    }
    return n;
  };

  // Returns how many poisons were removed from below `beforeIndex`, so callers
  // holding an index into mgr.ka can shift it back by that much.
  window.burger_clear_all_poisons = function burger_clear_all_poisons(
    mgr,
    beforeIndex
  ) {
    if (!mgr || !mgr.ka) return 0;
    const limit = beforeIndex == null ? mgr.ka.length : beforeIndex;
    let removedBefore = 0;
    for (let i = mgr.ka.length - 1; i >= 0; i--) {
      if (mgr.ka[i] && mgr.ka[i].nla) {
        mgr.ka.splice(i, 1);
        if (i < limit) removedBefore++;
      }
    }
    return removedBefore;
  };

  window.burger_head_neighbor_keys = function burger_head_neighbor_keys(game) {
    const keys = new Set();
    const head = game && game.oa && game.oa.ka && game.oa.ka[0];
    if (!head) return keys;
    const pts = [
      [head.x, head.y - 1],
      [head.x, head.y + 1],
      [head.x - 1, head.y],
      [head.x + 1, head.y],
    ];
    for (let i = 0; i < pts.length; i++) {
      keys.add((pts[i][0] << 16) | (pts[i][1] & 65535));
    }
    return keys;
  };

  window.burger_late_game = function burger_late_game(game) {
    const box = window.burger_board_box();
    if (!box) return false;
    const L = window.burger_snake_length(game);
    return L >= box.width * box.height - 5;
  };

  // Pick a legal free cell for a new fresh fruit. Returns null if none.
  window.burger_find_spawn_pos = function burger_find_spawn_pos(game) {
    if (!game || typeof game.Tb !== "function") return null;
    const board = game.ka;
    const box = board && board.oa;
    if (!box) return null;
    const late = window.burger_late_game(game);
    const banned = late ? window.burger_head_neighbor_keys(game) : null;
    const keyOf = function (p) {
      return (p.x << 16) | (p.y & 65535);
    };
    // Prefer native free-cell picker (spawn radius / occupancy), then filter.
    for (let attempt = 0; attempt < 24; attempt++) {
      const p = game.Tb(null, 2);
      if (!p) break;
      if (
        p.x >= 0 &&
        p.y >= 0 &&
        p.x < box.width &&
        p.y < box.height &&
        (!banned || !banned.has(keyOf(p)))
      ) {
        return p;
      }
    }
    // Exhaustive scan fallback (still respect late-game ban).
    const occupied = new Set();
    if (game.oa && game.oa.ka) {
      for (let i = 0; i < game.oa.ka.length; i++) {
        const s = game.oa.ka[i];
        if (s) occupied.add(keyOf(s));
      }
    }
    if (game.wa && game.wa.ka) {
      for (let i = 0; i < game.wa.ka.length; i++) {
        const a = game.wa.ka[i];
        if (a && a.pos) occupied.add(keyOf(a.pos));
      }
    }
    const candidates = [];
    for (let x = 0; x < box.width; x++) {
      for (let y = 0; y < box.height; y++) {
        const k = (x << 16) | (y & 65535);
        if (occupied.has(k)) continue;
        if (banned && banned.has(k)) continue;
        candidates.push(
          typeof _ !== "undefined" && _.Sd ? new _.Sd(x, y) : { x: x, y: y }
        );
      }
    }
    if (!candidates.length) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
  };

  window.burger_trigger_win = function burger_trigger_win(game) {
    if (!game || game.lj) return;
    try {
      if (typeof ybF !== "undefined" && ybF.WIN) ybF.WIN.play();
    } catch (_e) {}
    game.ub = true;
    game.lj = true;
    try {
      if (typeof vdF === "function") vdF(game.menu, 1400, game.Oh);
    } catch (_e2) {}
  };

  // Type index of Pudding's skull sprite, the one its "Skull Poison Fruit"
  // setting swaps poisons to. Pudding maps new_fruit[i] to last_fruit_num+1+i.
  window.burger_skull_type = function burger_skull_type() {
    const fruits = window.new_fruit;
    if (!Array.isArray(fruits)) return null;
    const base =
      typeof last_fruit_num !== "undefined"
        ? last_fruit_num
        : document.querySelector("#apple").children.length - 1;
    for (let i = 0; i < fruits.length; i++) {
      if (fruits[i] && /poison-skull/.test(fruits[i].Real || "")) {
        return base + 1 + i;
      }
    }
    return null;
  };

  window.burger_make_poison = function burger_make_poison(apple, game) {
    if (!apple) return;
    // Poison keeps the fruit's original max as its lifetime — no grey indicator.
    const life = apple.burgerTimerMax | 0;
    apple.nla = true;
    apple.burgerGrey = 0;
    if (life > 0) {
      apple.burgerTimer = life;
      apple.burgerTimerMax = life;
    } else {
      const t = window.burger_timer_roll(game);
      apple.burgerTimer = t;
      apple.burgerTimerMax = t;
    }
    // nla alone only greys the fruit out, and Pudding's skull swap is behind a
    // user setting. Burger always wants the skull, so set the type directly.
    const skull = window.burger_skull_type();
    if (skull != null) apple.type = skull;
    else console.error("BurgerMod: could not resolve Pudding skull fruit type");
  };

  window.burger_spawn_fresh = function burger_spawn_fresh(game, sequenceNumber) {
    const pos = window.burger_find_spawn_pos(game);
    if (!pos) return false;
    const mgr = game.wa;
    if (!mgr) return false;
    // Prefer native qaF (sets Cm animation, type, etc.) with no-pairing flag.
    // Pass sequenceNumber through so Tally replacements stay on the open index.
    if (typeof window.__qaF === "function") {
      const before = mgr.ka.length;
      window.__qaF(mgr, pos, void 0, true, sequenceNumber, true);
      if (mgr.ka.length > before) {
        const last = mgr.ka[mgr.ka.length - 1];
        last.nla = false;
        if (sequenceNumber !== undefined) last.sequenceNumber = sequenceNumber;
        window.burger_assign_timer(last, game);
        return true;
      }
    }
    if (typeof window.__h7 === "function") {
      const apple = window.__h7(mgr, 0, 0);
      if (typeof pos.clone === "function") apple.pos = pos.clone();
      else {
        apple.pos.x = pos.x;
        apple.pos.y = pos.y;
      }
      apple.Cm = true;
      apple.nla = false;
      apple.Gh = true;
      if (sequenceNumber !== undefined) apple.sequenceNumber = sequenceNumber;
      if (typeof window.__aaF === "function") apple.type = window.__aaF(mgr);
      window.burger_assign_timer(apple, game);
      mgr.ka.push(apple);
      return true;
    }
    return false;
  };

  // Expire one fresh apple to poison, then try to spawn a replacement.
  window.burger_expire_apple = function burger_expire_apple(game, apple) {
    const seq = apple && apple.sequenceNumber;
    window.burger_make_poison(apple, game);
    const spawned = window.burger_spawn_fresh(game, seq);
    const freshLeft = window.burger_fresh_count(game.wa.ka);
    if (!spawned && freshLeft === 0) {
      window.burger_trigger_win(game);
    }
  };

  // Poison timer ran out — just remove it (no replacement, no indicator).
  window.burger_despawn_poison = function burger_despawn_poison(game, apple) {
    if (!game || !game.wa || !game.wa.ka || !apple) return;
    const i = game.wa.ka.indexOf(apple);
    if (i >= 0) game.wa.ka.splice(i, 1);
  };

  window.burger_apple_timer_eligible = function burger_apple_timer_eligible(
    game,
    apple
  ) {
    if (!apple) return false;
    // Poisons always count down (no tally gate, no grey overlay).
    if (apple.nla) return true;
    // Tally: only the current index ages for fresh fruit.
    if (game.settings && game.settings.ka === 6) {
      const cur = game.wa ? game.wa.wa : 1;
      if (apple.sequenceNumber !== undefined && apple.sequenceNumber !== cur) {
        return false;
      }
    }
    return true;
  };

  window.burger_tick_logic = function burger_tick_logic() {
    if (!window.isBurgerActive || !window.isBurgerActive()) return;
    const game = window.__remixGame;
    if (!game || !game.wa || !game.wa.ka || game.lj) return;
    const apples = game.wa.ka;
    const toExpire = [];
    for (let i = 0; i < apples.length; i++) {
      const a = apples[i];
      if (!window.burger_apple_timer_eligible(game, a)) continue;
      if (a.burgerTimer == null) {
        if (a.nla) {
          const t = window.burger_timer_roll(game);
          a.burgerTimer = t;
          a.burgerTimerMax = t;
        } else {
          window.burger_assign_timer(a, game);
        }
      }
      // Already at zero: resolve once, never keep decrementing past it.
      if ((a.burgerTimer | 0) <= 0) {
        a.burgerTimer = 0;
        toExpire.push(a);
        continue;
      }
      a.burgerTimer = (a.burgerTimer | 0) - 1;
      if (a.burgerTimer <= 0) {
        a.burgerTimer = 0;
        if (!a.nla) a.burgerGrey = 100;
        toExpire.push(a);
      } else if (!a.nla && (a.burgerTimerMax - a.burgerTimer) % 3 === 0) {
        // Only refresh the cached overlay every 3 ticks (fresh fruit only).
        window.burger_update_grey(a);
      }
    }
    for (let i = 0; i < toExpire.length; i++) {
      if (game.lj) break;
      const a = toExpire[i];
      if (apples.indexOf(a) < 0) continue;
      if (a.nla) window.burger_despawn_poison(game, a);
      else window.burger_expire_apple(game, a);
    }
  };

  // Poisons are no longer cleared on fresh eat — they keep their own timers.
  // Still clear the eaten slot's timer so Mn's reused apple gets a new roll.
  window.burger_on_fresh_eaten = function burger_on_fresh_eaten(
    game,
    eatenIndex
  ) {
    if (!game || !game.wa) return eatenIndex;
    window.just_ate = "fruit";
    window.burger_fruits_eaten = (window.burger_fruits_eaten | 0) + 1;
    const eaten = game.wa.ka[eatenIndex | 0];
    if (eaten && !eaten.nla) {
      eaten.burgerTimer = null;
      eaten.burgerTimerMax = null;
      eaten.burgerGrey = 0;
    }
    return eatenIndex | 0;
  };

  window.burger_after_respawn = function burger_after_respawn(game) {
    if (!game || !game.wa) return;
    // Only apples that still lack a timer (the Mn-reused eaten slot, or a brand
    // new spawn) get a roll. Existing countdowns are left alone.
    for (let i = 0; i < game.wa.ka.length; i++) {
      const a = game.wa.ka[i];
      if (a && !a.nla && a.burgerTimer == null) {
        window.burger_assign_timer(a, game);
      }
    }
  };

  // --- Patches ---

  // Burger patches the output of every earlier mod, so when one stops matching
  // it helps to see the exact text it was matched against.
  if (window.RemixDebug) window.__remixPreBurgerCode = code;

  // Extend Chess-patched f7 (or raw) so Burger activates Poison mode (10).
  if (
    code.match(
      /f7=function\(a,b\)\{var r=a\.Qa\?a\.Jc\.has\(b\):a\.ub===22&&a\.ZSa\.has\(b\)\?!0:a\.ub===b;if\(!r&&b===15&&window\.CHESS_MODE!=null\)/
    )
  ) {
    code = code.assertReplace(
      /f7=function\(a,b\)\{var r=a\.Qa\?a\.Jc\.has\(b\):a\.ub===22&&a\.ZSa\.has\(b\)\?!0:a\.ub===b;if\(!r&&b===15&&window\.CHESS_MODE!=null\)\{if\(a\.ub===window\.CHESS_MODE\)return!0;if\(a\.ub===22&&a\.ZSa&&a\.ZSa\.has\(window\.CHESS_MODE\)\)return!0;\}return r\}/,
      `f7=function(a,b){var r=a.Qa?a.Jc.has(b):a.ub===22&&a.ZSa.has(b)?!0:a.ub===b;if(!r&&b===15&&window.CHESS_MODE!=null){if(a.ub===window.CHESS_MODE)return!0;if(a.ub===22&&a.ZSa&&a.ZSa.has(window.CHESS_MODE))return!0;}if(!r&&b===10&&window.BURGER_MODE!=null){if(a.ub===window.BURGER_MODE)return!0;if(a.ub===22&&a.ZSa&&a.ZSa.has(window.BURGER_MODE))return!0;}return r}`
    );
  } else if (
    code.match(
      /f7=function\(a,b\)\{return a\.Qa\?a\.Jc\.has\(b\):a\.ub===22&&a\.ZSa\.has\(b\)\?!0:a\.ub===b\}/
    )
  ) {
    code = code.assertReplace(
      /f7=function\(a,b\)\{return a\.Qa\?a\.Jc\.has\(b\):a\.ub===22&&a\.ZSa\.has\(b\)\?!0:a\.ub===b\}/,
      `f7=function(a,b){var r=a.Qa?a.Jc.has(b):a.ub===22&&a.ZSa.has(b)?!0:a.ub===b;if(!r&&b===10&&window.BURGER_MODE!=null){if(a.ub===window.BURGER_MODE)return!0;if(a.ub===22&&a.ZSa&&a.ZSa.has(window.BURGER_MODE))return!0;}return r}`
    );
  } else {
    console.error("BurgerMod: failed to patch f7 for poison mode");
  }

  // Classic layout: iaF must ignore Burger's f7(10).
  if (code.match(/iaF=function\(a\)\{return f7\(a,2\)\|\|f7\(a,8\)\|\|f7\(a,9\)\|\|f7\(a,10\)\}/)) {
    code = code.assertReplace(
      /iaF=function\(a\)\{return f7\(a,2\)\|\|f7\(a,8\)\|\|f7\(a,9\)\|\|f7\(a,10\)\}/,
      `iaF=function(a){return f7(a,2)||f7(a,8)||f7(a,9)||(f7(a,10)&&!(window.isBurgerActive&&window.isBurgerActive()))}`
    );
  } else {
    console.error("BurgerMod: failed to patch iaF");
  }

  // Suppress Poison's paF auto-poison twin spawn for Burger.
  if (code.match(/f7\(a\.settings,10\)&&!f&&paF\(a\)/)) {
    code = code.assertReplace(
      /f7\(a\.settings,10\)&&!f&&paF\(a\)/,
      `f7(a.settings,10)&&!f&&!(window.isBurgerActive&&window.isBurgerActive())&&paF(a)`
    );
  } else {
    console.error("BurgerMod: failed to patch paF gate");
  }

  // Native Poison pairs every other apple as poison at game start / after some
  // spawns (uaF). That is exactly the "5a starts with 2 poisons" bug. Gate every
  // call site and the function itself.
  {
    const uaFCalls = code.match(
      /f7\((?:this|a)\.settings,10\)\s*&&\s*uaF\((?:this|a)\.wa\)/g
    );
    if (uaFCalls && uaFCalls.length) {
      code = code.replace(
        /f7\((this|a)\.settings,10\)\s*&&\s*uaF\(\1\.wa\)/g,
        `f7($1.settings,10)&&!(window.isBurgerActive&&window.isBurgerActive())&&uaF($1.wa)`
      );
    } else {
      console.error("BurgerMod: failed to patch uaF call sites");
    }
  }
  if (
    code.match(
      /uaF=function\(a\)\{for\(let b=0;b\+1<a\.ka\.length;b\+=2\)\{let c=Math\.random\(\)<\.5;\s*a\.ka\[b\]\.nla=c;a\.ka\[b\+1\]\.nla=!c\}\}/
    )
  ) {
    code = code.assertReplace(
      /uaF=function\(a\)\{for\(let b=0;b\+1<a\.ka\.length;b\+=2\)\{let c=Math\.random\(\)<\.5;\s*a\.ka\[b\]\.nla=c;a\.ka\[b\+1\]\.nla=!c\}\}/,
      `uaF=function(a){if(window.isBurgerActive&&window.isBurgerActive())return;for(let b=0;b+1<a.ka.length;b+=2){let c=Math.random()<.5;a.ka[b].nla=c;a.ka[b+1].nla=!c}};window.__uaF=uaF`
    );
  } else {
    console.error("BurgerMod: failed to patch uaF function");
  }

  // Portal-pair path inside qaF also flips nla on the new pair under Poison.
  if (
    code.match(
      /f7\(a\.settings,10\)&&\(c=Math\.random\(\)<\.5,a\.ka\[a\.ka\.length-1\]\.nla=c,a\.ka\[a\.ka\.length-2\]\.nla=!c\)/
    )
  ) {
    code = code.assertReplace(
      /f7\(a\.settings,10\)&&\(c=Math\.random\(\)<\.5,a\.ka\[a\.ka\.length-1\]\.nla=c,a\.ka\[a\.ka\.length-2\]\.nla=!c\)/,
      `f7(a.settings,10)&&!(window.isBurgerActive&&window.isBurgerActive())&&(c=Math.random()<.5,a.ka[a.ka.length-1].nla=c,a.ka[a.ka.length-2].nla=!c)`
    );
  } else {
    console.error("BurgerMod: failed to patch qaF nla pair");
  }

  // Native Poison also top-ups poisons after a fresh eat (keep ≥ half poisoned).
  // Burger piles poisons only via timers, so disable that refill.
  // Only the paF call is rewritten: MoreMenu respaces the operators in this
  // statement, so matching the whole `if` verbatim is too brittle.
  const poisonTopUp =
    /(for\(let Ok of hd\.ka\)Ok\.nla\s*&&\s*Ni\+\+;Ni<hd\.ka\.length\/2\s*&&\s*)paF\(hd\)/;
  if (code.match(poisonTopUp)) {
    code = code.assertReplace(
      poisonTopUp,
      `$1!(window.isBurgerActive&&window.isBurgerActive())&&paF(hd)`
    );
  } else {
    console.error("BurgerMod: failed to patch poison top-up paF");
  }

  // Tick: run burger aging after chess hook (match Chess-injected tick).
  if (
    code.match(
      /\}tick\(\)\{window\.__remixGame=this;if\(window\.isChessActive&&window\.isChessActive\(\)\)\{try\{window\.head_pos=this\.oa\.ka;window\.head_dir=this\.oa\.direction;window\.appleArray=this\.wa\.ka;window\.chess_tick_logic\(\);\}catch\(_ce\)\{console\.error\("ChessMod: tick failed",_ce\);\}\}var a=this\.Aa,b=this\.lj;/
    )
  ) {
    code = code.assertReplace(
      /\}tick\(\)\{window\.__remixGame=this;if\(window\.isChessActive&&window\.isChessActive\(\)\)\{try\{window\.head_pos=this\.oa\.ka;window\.head_dir=this\.oa\.direction;window\.appleArray=this\.wa\.ka;window\.chess_tick_logic\(\);\}catch\(_ce\)\{console\.error\("ChessMod: tick failed",_ce\);\}\}var a=this\.Aa,b=this\.lj;/,
      `}tick(){window.__remixGame=this;if(window.isChessActive&&window.isChessActive()){try{window.head_pos=this.oa.ka;window.head_dir=this.oa.direction;window.appleArray=this.wa.ka;window.chess_tick_logic();}catch(_ce){console.error("ChessMod: tick failed",_ce);}}if(window.isBurgerActive&&window.isBurgerActive()){try{window.burger_tick_logic();}catch(_be){console.error("BurgerMod: tick failed",_be);}}var a=this.Aa,b=this.lj;`
    );
  } else if (code.match(/\}tick\(\)\{window\.__remixGame=this;/)) {
    code = code.assertReplace(
      /\}tick\(\)\{window\.__remixGame=this;/,
      `}tick(){window.__remixGame=this;if(window.isBurgerActive&&window.isBurgerActive()){try{window.burger_tick_logic();}catch(_be){}}`
    );
  } else {
    console.error("BurgerMod: failed to find tick()");
  }

  // After apple reset / shield init (Chess may have already appended): assign burger timers.
  // Hook the end of apple manager reset via shield init line (post-Pudding doubleDE).
  if (
    code.match(
      /if\(f7\(this\.settings,15\)\)for\(let q of this\.ka\)q\.Oba=doubleDE\(this,q\.pos\);if\(window\.isChessActive&&window\.isChessActive\(\)\)/
    )
  ) {
    code = code.assertReplace(
      /if\(f7\(this\.settings,15\)\)for\(let q of this\.ka\)q\.Oba=doubleDE\(this,q\.pos\);if\(window\.isChessActive&&window\.isChessActive\(\)\)\{try\{window\.appleArray=this\.ka;window\.randomize_pieces\(\);window\.shield_empty_all\(\);\}catch\(_ce\)\{console\.error\("ChessMod: reset failed",_ce\);\}\}/,
      `if(f7(this.settings,15))for(let q of this.ka)q.Oba=doubleDE(this,q.pos);if(window.isChessActive&&window.isChessActive()){try{window.appleArray=this.ka;window.randomize_pieces();window.shield_empty_all();}catch(_ce){console.error("ChessMod: reset failed",_ce);}}if(window.isBurgerActive&&window.isBurgerActive()){try{window.burger_fruits_eaten=0;window.burger_assign_timers_all(this.ka);}catch(_be){console.error("BurgerMod: reset failed",_be);}}`
    );
  } else if (
    code.match(
      /if\(f7\(this\.settings,15\)\)for\(let q of this\.ka\)q\.Oba=doubleDE\(this,q\.pos\);/
    )
  ) {
    code = code.assertReplace(
      /if\(f7\(this\.settings,15\)\)for\(let q of this\.ka\)q\.Oba=doubleDE\(this,q\.pos\);/,
      `if(f7(this.settings,15))for(let q of this.ka)q.Oba=doubleDE(this,q.pos);if(window.isBurgerActive&&window.isBurgerActive()){try{window.burger_fruits_eaten=0;window.burger_assign_timers_all(this.ka);}catch(_be){}}`
    );
  } else {
    console.error("BurgerMod: failed to find reset timer hook");
  }

  // Also assign timers when no shield mode (classic reset without Oba loop).
  // After settings.ka===6 tally init on reset:
  if (code.match(/this\.settings\.ka===6&&\(kaF\(this\),this\.Ca=!1\)\}/)) {
    code = code.assertReplace(
      /this\.settings\.ka===6&&\(kaF\(this\),this\.Ca=!1\)\}/,
      `this.settings.ka===6&&(kaF(this),this.Ca=!1);if(window.isBurgerActive&&window.isBurgerActive()){try{window.burger_fruits_eaten=0;window.burger_assign_timers_all(this.ka);}catch(_be){}}}`
    );
  }

  // After qaF adds apples: assign timers to new non-poison ones.
  // Chess may have appended chess_convert; match either form.
  if (
    code.match(
      /if\(window\.isChessActive&&window\.isChessActive\(\)&&g>0\)\{window\.chess_convert_new_apples\(a,g\);\}/
    )
  ) {
    code = code.assertReplace(
      /if\(window\.isChessActive&&window\.isChessActive\(\)&&g>0\)\{window\.chess_convert_new_apples\(a,g\);\}/,
      `if(window.isChessActive&&window.isChessActive()&&g>0){window.chess_convert_new_apples(a,g);}if(window.isBurgerActive&&window.isBurgerActive()&&g>0){for(let _bi=a.ka.length-g;_bi<a.ka.length;_bi++){if(a.ka[_bi]&&!a.ka[_bi].nla)window.burger_assign_timer(a.ka[_bi]);}}`
    );
  } else if (
    code.match(
      /g=a\.ka\.length-g;if\(e!==void 0\)for\(c=0;c<g;c\+\+\)a\.ka\[a\.ka\.length-1-c\]\.sequenceNumber=e;if\(f7\(a\.settings,15\)\)for\(e=0;e<g;e\+\+\)c=a\.ka\[a\.ka\.length-1-e\],c\.Oba=doubleDE\(a,c\.pos\);/
    )
  ) {
    code = code.assertReplace(
      /g=a\.ka\.length-g;if\(e!==void 0\)for\(c=0;c<g;c\+\+\)a\.ka\[a\.ka\.length-1-c\]\.sequenceNumber=e;if\(f7\(a\.settings,15\)\)for\(e=0;e<g;e\+\+\)c=a\.ka\[a\.ka\.length-1-e\],c\.Oba=doubleDE\(a,c\.pos\);/,
      `g=a.ka.length-g;if(e!==void 0)for(c=0;c<g;c++)a.ka[a.ka.length-1-c].sequenceNumber=e;if(f7(a.settings,15))for(e=0;e<g;e++)c=a.ka[a.ka.length-1-e],c.Oba=doubleDE(a,c.pos);if(window.isBurgerActive&&window.isBurgerActive()&&g>0){for(let _bi=a.ka.length-g;_bi<a.ka.length;_bi++){if(a.ka[_bi]&&!a.ka[_bi].nla)window.burger_assign_timer(a.ka[_bi]);}}`
    );
  } else {
    console.error("BurgerMod: failed to find qaF trailing hook");
  }

  // Fresh eat: clear poisons + bump eat count BEFORE score side-effects finish / before Mn.
  // Hook at this.Oh++ — Chess may have replaced it; handle both.

  // Clearing poisons splices game.wa.ka, so the eat loop's index has to be
  // corrected in place. Its name is minified, so read it off the saF call that
  // sits in the same statement (native Poison already decrements it there).
  const appleIndexMatch = code.match(
    /f7\(this\.settings,10\)\s*&&\s*saF\(this\.wa,([a-zA-Z0-9_$]{1,6}),[a-zA-Z0-9_$]{1,6},this\.Jc\.bind\(this\)\)\s*&&\s*\1--/
  );
  const idx = appleIndexMatch && appleIndexMatch[1];
  if (!idx) {
    console.error("BurgerMod: failed to find eat-loop apple index variable");
  }
  const onFreshEaten = idx
    ? `if(window.isBurgerActive&&window.isBurgerActive())${idx}=window.burger_on_fresh_eaten(this,${idx});`
    : `if(window.isBurgerActive&&window.isBurgerActive())window.burger_on_fresh_eaten(this);`;

  if (
    code.match(
      /if\(window\.isChessActive&&window\.isChessActive\(\)\)\{let _ae=window\.findApple\(window\.head_pos\[0\],window\.appleArray\);if\(_ae&&!_ae\.isPiece\)\{window\.just_ate='fruit';this\.Oh\+\+;\}else if\(_ae&&_ae\.isPiece\)\{window\.just_ate='piece';window\.head_state=_ae\.ChessPiece;window\.updateTrophySRC\(_ae\.type\);window\.head_color=_ae\.ChessColor;window\.shield_all\(\);\}else\{window\.just_ate='fruit';this\.Oh\+\+;\}\}else\{this\.Oh\+\+;\}/
    )
  ) {
    code = code.assertReplace(
      /if\(window\.isChessActive&&window\.isChessActive\(\)\)\{let _ae=window\.findApple\(window\.head_pos\[0\],window\.appleArray\);if\(_ae&&!_ae\.isPiece\)\{window\.just_ate='fruit';this\.Oh\+\+;\}else if\(_ae&&_ae\.isPiece\)\{window\.just_ate='piece';window\.head_state=_ae\.ChessPiece;window\.updateTrophySRC\(_ae\.type\);window\.head_color=_ae\.ChessColor;window\.shield_all\(\);\}else\{window\.just_ate='fruit';this\.Oh\+\+;\}\}else\{this\.Oh\+\+;\}/,
      `if(window.isChessActive&&window.isChessActive()){let _ae=window.findApple(window.head_pos[0],window.appleArray);if(_ae&&!_ae.isPiece){window.just_ate='fruit';this.Oh++;${onFreshEaten}}else if(_ae&&_ae.isPiece){window.just_ate='piece';window.head_state=_ae.ChessPiece;window.updateTrophySRC(_ae.type);window.head_color=_ae.ChessColor;window.shield_all();}else{window.just_ate='fruit';this.Oh++;${onFreshEaten}}}else{this.Oh++;${onFreshEaten}}`
    );
  } else if (code.match(/this\.Oh\+\+;/)) {
    code = code.assertReplace(
      /this\.Oh\+\+;/,
      `this.Oh++;${onFreshEaten}`
    );
  } else {
    console.error("BurgerMod: failed to find score hook");
  }

  // After Mn / chess fruit respawn path, re-assign timers on new apples.
  if (
    code.match(
      /else\{if\(window\.isChessActive&&window\.isChessActive\(\)\)\{Xh=!1;if\(window\.just_ate==='fruit'&&!\(this\.settings\.ka===4\|\|this\.settings\.ka===6\|\|\(this\.settings\.ka===5&&!this\.hc\)\|\|f7\(this\.settings,8\)\|\|f7\(this\.settings,9\)\)\)\{window\.chess_fruit_respawn\(this\.wa,h7,oaF,aaF\);\}\}else\{let Ni=e7\(this\.settings\)\|\|f7\(this\.settings,7\);Xh=this\.Mn\(vd,!Ni,null\);\}\}/
    )
  ) {
    code = code.assertReplace(
      /else\{if\(window\.isChessActive&&window\.isChessActive\(\)\)\{Xh=!1;if\(window\.just_ate==='fruit'&&!\(this\.settings\.ka===4\|\|this\.settings\.ka===6\|\|\(this\.settings\.ka===5&&!this\.hc\)\|\|f7\(this\.settings,8\)\|\|f7\(this\.settings,9\)\)\)\{window\.chess_fruit_respawn\(this\.wa,h7,oaF,aaF\);\}\}else\{let Ni=e7\(this\.settings\)\|\|f7\(this\.settings,7\);Xh=this\.Mn\(vd,!Ni,null\);\}\}/,
      `else{if(window.isChessActive&&window.isChessActive()){Xh=!1;if(window.just_ate==='fruit'&&!(this.settings.ka===4||this.settings.ka===6||(this.settings.ka===5&&!this.hc)||f7(this.settings,8)||f7(this.settings,9))){window.chess_fruit_respawn(this.wa,h7,oaF,aaF);}}else{let Ni=e7(this.settings)||f7(this.settings,7);Xh=this.Mn(vd,!Ni,null);}if(window.isBurgerActive&&window.isBurgerActive()&&window.just_ate==='fruit'){window.burger_after_respawn(this);}}`
    );
  }

  // Aging overlay on fruit drawImage.
  // Expression-safe (Visibility leaves this call after `&&`). Dark circle from
  // the tick-cached burgerGrey — never canvas.filter. Near expiry it reads as a
  // near-black disk so the poison transition is obvious.
  if (code.match(/this\.ka\.drawImage\(f,0,0,g,g,-d\/2,-d\/2,d,d\);/)) {
    code = code.assertReplace(
      /this\.ka\.drawImage\(f,0,0,g,g,-d\/2,-d\/2,d,d\);/,
      `(this.ka.drawImage(f,0,0,g,g,-d/2,-d/2,d,d),b&&!b.nla&&b.burgerGrey>0&&(this.ka.globalAlpha=Math.min(.85,b.burgerGrey/110),this.ka.fillStyle="#1a1a1a",this.ka.beginPath(),this.ka.arc(0,0,d*.32,0,6.283185307179586),this.ka.fill(),this.ka.globalAlpha=1));`
    );
  } else {
    console.error("BurgerMod: failed to find fruit drawImage for greyscale");
  }

  // Deathscreen / blender icons: extend Candy/Chess patches.
  if (code.indexOf("window.BURGER_MODE)?window.BURGER_ICON") < 0) {
    if (code.indexOf("window.CHESS_MODE)?window.CHESS_ICON") >= 0) {
      code = code.assertReplace(
        /\(a\.settings\.ob===window\.CANDY_MODE\)\?window\.CANDY_ICON:\(a\.settings\.ob===window\.CHESS_MODE\)\?window\.CHESS_ICON:/,
        `(a.settings.ob===window.CANDY_MODE)?window.CANDY_ICON:(a.settings.ob===window.CHESS_MODE)?window.CHESS_ICON:(a.settings.ob===window.BURGER_MODE)?window.BURGER_ICON:`
      );
      code = code.assertReplace(
        /\(c===window\.CANDY_MODE\)\?window\.CANDY_ICON:\(c===window\.CHESS_MODE\)\?window\.CHESS_ICON:/,
        `(c===window.CANDY_MODE)?window.CANDY_ICON:(c===window.CHESS_MODE)?window.CHESS_ICON:(c===window.BURGER_MODE)?window.BURGER_ICON:`
      );
    }
  }

  // Blender forEach: add burger
  if (
    code.match(
      /if\(window\.candy_blending&&window\.CANDY_MODE!=null\)b\.push\(window\.CANDY_MODE\);if\(window\.chess_blending&&window\.CHESS_MODE!=null\)b\.push\(window\.CHESS_MODE\)/
    )
  ) {
    code = code.assertReplace(
      /if\(window\.candy_blending&&window\.CANDY_MODE!=null\)b\.push\(window\.CANDY_MODE\);if\(window\.chess_blending&&window\.CHESS_MODE!=null\)b\.push\(window\.CHESS_MODE\)/,
      `if(window.candy_blending&&window.CANDY_MODE!=null)b.push(window.CANDY_MODE);if(window.chess_blending&&window.CHESS_MODE!=null)b.push(window.CHESS_MODE);if(window.burger_blending&&window.BURGER_MODE!=null)b.push(window.BURGER_MODE)`
    );
  }

  // Ta fallback: recognize burger icon
  if (code.indexOf("13m2Cr16") < 0 && code.indexOf("ZqK0CB95") >= 0) {
    code = code.assertReplace(
      /else if\(window\.CHESS_MODE!=null&&s\.indexOf\("ZqK0CB95"\)>=0\)m=window\.CHESS_MODE;/,
      `else if(window.CHESS_MODE!=null&&s.indexOf("ZqK0CB95")>=0)m=window.CHESS_MODE;else if(window.BURGER_MODE!=null&&s.indexOf("13m2Cr16")>=0)m=window.BURGER_MODE;`
    );
  }

  // Play start trophy
  if (code.indexOf("updateBurgerTrophySRC") < 0) {
    if (code.indexOf("updateCandyTrophySRC") >= 0) {
      // Chess may have appended CHESS update already
      if (code.indexOf("CurrentModeNum===window.CHESS_MODE") >= 0) {
        code = code.assertReplace(
          /if\(window\.CurrentModeNum===window\.CHESS_MODE\)\{window\.updateTrophySRC\(\);\}/,
          `if(window.CurrentModeNum===window.CHESS_MODE){window.updateTrophySRC();}if(window.CurrentModeNum===window.BURGER_MODE){window.updateBurgerTrophySRC();}`
        );
      } else {
        code = code.assertReplace(
          /if\(window\.CurrentModeNum===window\.CANDY_MODE\)\{window\.updateCandyTrophySRC\(\);\}/,
          `if(window.CurrentModeNum===window.CANDY_MODE){window.updateCandyTrophySRC();}if(window.CurrentModeNum===window.BURGER_MODE){window.updateBurgerTrophySRC();}`
        );
      }
    }
  }

  // Expose apple helpers after their definitions complete (assignment form).
  if (code.match(/h7=function\(a,b,c\)\{b=new _\.Sd/)) {
    code = code.assertReplace(
      /h7=function\(a,b,c\)\{b=new _\.Sd/,
      `h7=function(a,b,c){window.__h7=h7;window.__aaF=aaF;window.__qaF=qaF;b=new _.Sd`
    );
  } else {
    console.error("BurgerMod: failed to expose h7/qaF");
  }

  return code;
};

////////////////////////////////////////////////////////////////////
//RUNCODEAFTER
////////////////////////////////////////////////////////////////////

window.BurgerMod.runCodeAfter = function () {
  window.add_burger_blender_toggle && window.add_burger_blender_toggle();
};

window.CatSpeed = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.CatSpeed.runCodeBefore = function () {
  window.CAT_SPEED_MULT = 0.85;
  window.CAT_SPEED_ICON =
    "https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeIcons/main/Speeds/Cat.png";

  window.uiImage =
    window.uiImage ||
    function (src) {
      const img = new Image();
      img.src = src;
      img.width = 40;
      img.height = 40;
      img.classList.add("DqMRee");
      img.classList.add("SsAred");
      return img;
    };

  const speedRoot = document.querySelector("#speed");
  if (speedRoot && !window._catSpeedIconInserted) {
    // Append after all MoreMenu speeds so we never shift their case indices.
    const cat = window.uiImage(window.CAT_SPEED_ICON);
    cat.alt = "Cat Speed";
    speedRoot.appendChild(cat);
    window._catSpeedIconInserted = true;
    window.CAT_SPEED_INDEX = [...speedRoot.children].indexOf(cat);
  }

  if (typeof window.CAT_SPEED_INDEX !== "number") {
    window.CAT_SPEED_INDEX = speedRoot ? speedRoot.children.length - 1 : 14;
  }

  if (window.speed_img_arr && document.querySelector("#speed")) {
    window.speed_img_arr = Array.from(
      document.querySelector("#speed").children
    ).map((el) => el.src);
  }

  if (!window.speedToTxt) window.speedToTxt = {};
  window.speedToTxt[window.CAT_SPEED_INDEX] = { name: "Cat" };

  if (typeof window.HandleSpeed === "function" && !window.HandleSpeed.__catPatched) {
    const orig = window.HandleSpeed;
    window.HandleSpeed = function (speed) {
      if (speed === window.CAT_SPEED_INDEX) return "Cat speed, ";
      return orig(speed);
    };
    window.HandleSpeed.__catPatched = true;
  }
};

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.CatSpeed.alterSnakeCode = function (code) {
  const catIdx =
    typeof window.CAT_SPEED_INDEX === "number" ? window.CAT_SPEED_INDEX : 14;

  // MoreMenu owns cases 3..13. Append Cat as the next case only — no shifting.
  const tickSwitch = code.match(
    /let speedMultiplier\s*;?\s*switch\([^)]+\)\s*\{[\s\S]*?default:\s*speedMultiplier\s*=\s*1\s*;?\s*break\s*;?\s*\}/
  );
  if (!tickSwitch) {
    console.error("CatSpeed: failed to find speedMultiplier switch");
    return code;
  }

  let body = tickSwitch[0];
  const catCaseTick = new RegExp(
    "case\\s+" + catIdx + ":\\s*speedMultiplier\\s*=\\s*window\\.CAT_SPEED_MULT"
  );
  if (!catCaseTick.test(body)) {
    body = body.replace(
      /default:\s*speedMultiplier\s*=\s*1\s*;?\s*break\s*;?/,
      `case ${catIdx}:
              speedMultiplier = window.CAT_SPEED_MULT || .85
              break
            default:
              speedMultiplier = 1
              break`
    );
  }
  if (!catCaseTick.test(body)) {
    console.error("CatSpeed: failed to inject case " + catIdx + " into tick switch");
  } else {
    code = code.assertReplace(tickSwitch[0], body);
  }

  // Reset-path speed switch (MoreMenu uses `break a`).
  const resetSwitch = code.match(
    /case 1:\s*a\s*=\s*\.66[\s\S]*?default:\s*a\s*=\s*1[\s\S]*?break a\s*\}/
  );
  if (resetSwitch) {
    let rb = resetSwitch[0];
    const catCaseReset = new RegExp(
      "case\\s+" + catIdx + ":\\s*a\\s*=\\s*window\\.CAT_SPEED_MULT"
    );
    if (!catCaseReset.test(rb)) {
      rb = rb.replace(
        /default:\s*a\s*=\s*1[\s\S]*?break a/,
        `case ${catIdx}:
            a = window.CAT_SPEED_MULT || .85
            break a
          default:
            a = 1
            break a`
      );
    }
    if (!catCaseReset.test(rb)) {
      console.error("CatSpeed: failed to inject case " + catIdx + " into reset switch");
    } else {
      code = code.assertReplace(resetSwitch[0], rb);
    }
  } else {
    console.error("CatSpeed: failed to find reset speed switch");
  }

  return code;
};

window.DiceCounts = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.DiceCounts.runCodeBefore = function () {
  window.NATIVE_DICE_ICON =
    "https://www.google.com/logos/fnbx/snake_arcade/v18/count_04.png";

  // Hue-rotate the red native dice → blue/green. Preserve lightness & white pips.
  window.remixHueShiftDiceIcon = function remixHueShiftDiceIcon(hueRotateDeg, done) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
      try {
        const c = document.createElement("canvas");
        c.width = 40;
        c.height = 40;
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, 40, 40);
        const imageData = ctx.getImageData(0, 0, 40, 40);
        const d = imageData.data;

        function rgbToHsl(r, g, b) {
          r /= 255;
          g /= 255;
          b /= 255;
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const l = (max + min) / 2;
          if (max === min) return [0, 0, l];
          const delta = max - min;
          const s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
          let h;
          if (max === r) h = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
          else if (max === g) h = ((b - r) / delta + 2) / 6;
          else h = ((r - g) / delta + 4) / 6;
          return [h, s, l];
        }

        function hslToRgb(h, s, l) {
          if (s === 0) {
            const v = Math.round(l * 255);
            return [v, v, v];
          }
          function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          }
          const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          const p = 2 * l - q;
          return [
            Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
            Math.round(hue2rgb(p, q, h) * 255),
            Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
          ];
        }

        const delta = (((hueRotateDeg % 360) + 360) % 360) / 360;
        for (let i = 0; i < d.length; i += 4) {
          if (d[i + 3] < 8) continue;
          const hsl = rgbToHsl(d[i], d[i + 1], d[i + 2]);
          // Keep white pips / near-gray outlines untouched.
          if (hsl[1] < 0.12 || hsl[2] > 0.88) continue;
          const rgb = hslToRgb((hsl[0] + delta) % 1, hsl[1], hsl[2]);
          d[i] = rgb[0];
          d[i + 1] = rgb[1];
          d[i + 2] = rgb[2];
        }

        ctx.putImageData(imageData, 0, 0);
        done(c.toDataURL("image/png"));
      } catch (e) {
        console.error("DiceCounts: hue shift failed", e);
        done(window.NATIVE_DICE_ICON);
      }
    };
    img.onerror = function () {
      done(window.NATIVE_DICE_ICON);
    };
    img.src = window.NATIVE_DICE_ICON;
  };

  // Black dice: crush body to near-black, keep white pips.
  window.remixBlackenDiceIcon = function remixBlackenDiceIcon(done) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
      try {
        const c = document.createElement("canvas");
        c.width = 40;
        c.height = 40;
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, 40, 40);
        const imageData = ctx.getImageData(0, 0, 40, 40);
        const d = imageData.data;

        function rgbToHsl(r, g, b) {
          r /= 255;
          g /= 255;
          b /= 255;
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const l = (max + min) / 2;
          if (max === min) return [0, 0, l];
          const delta = max - min;
          const s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
          let h;
          if (max === r) h = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
          else if (max === g) h = ((b - r) / delta + 2) / 6;
          else h = ((r - g) / delta + 4) / 6;
          return [h, s, l];
        }

        function hslToRgb(h, s, l) {
          if (s === 0) {
            const v = Math.round(l * 255);
            return [v, v, v];
          }
          function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          }
          const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          const p = 2 * l - q;
          return [
            Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
            Math.round(hue2rgb(p, q, h) * 255),
            Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
          ];
        }

        for (let i = 0; i < d.length; i += 4) {
          if (d[i + 3] < 8) continue;
          const hsl = rgbToHsl(d[i], d[i + 1], d[i + 2]);
          if (hsl[1] < 0.12 || hsl[2] > 0.88) continue;
          const l = Math.max(0.06, Math.min(0.22, hsl[2] * 0.35));
          const rgb = hslToRgb(hsl[0], 0.04, l);
          d[i] = rgb[0];
          d[i + 1] = rgb[1];
          d[i + 2] = rgb[2];
        }

        ctx.putImageData(imageData, 0, 0);
        done(c.toDataURL("image/png"));
      } catch (e) {
        console.error("DiceCounts: blacken failed", e);
        done(window.NATIVE_DICE_ICON);
      }
    };
    img.onerror = function () {
      done(window.NATIVE_DICE_ICON);
    };
    img.src = window.NATIVE_DICE_ICON;
  };

  window.remixEnsureBlackDiceSettings = function remixEnsureBlackDiceSettings() {
    if (!window.pudding_settings || typeof window.pudding_settings !== "object") {
      window.pudding_settings = {};
    }
    let min = Number(window.pudding_settings.BlackDiceMin);
    let max = Number(window.pudding_settings.BlackDiceMax);
    if (!Number.isFinite(min)) min = 6;
    if (!Number.isFinite(max)) max = 24;
    min = Math.max(1, Math.min(10000, Math.floor(min)));
    max = Math.max(1, Math.min(10000, Math.floor(max)));
    if (min > max) {
      const t = min;
      min = max;
      max = t;
    }
    window.pudding_settings.BlackDiceMin = min;
    window.pudding_settings.BlackDiceMax = max;
    return { min: min, max: max };
  };

  window.remixBlackDiceRoll = function remixBlackDiceRoll() {
    const range = window.remixEnsureBlackDiceSettings();
    return (
      range.min + Math.floor(Math.random() * (range.max - range.min + 1))
    );
  };

  window.uiImage =
    window.uiImage ||
    function (src) {
      const img = new Image();
      img.src = src;
      img.width = 40;
      img.height = 40;
      img.classList.add("DqMRee");
      img.classList.add("SsAred");
      return img;
    };

  window.remixIsColoredDice = function remixIsColoredDice(ka) {
    return (
      ka === window.BLUE_DICE_COUNT ||
      ka === window.GREEN_DICE_COUNT ||
      ka === window.BLACK_DICE_COUNT
    );
  };

  window.remixIsDiceLike = function remixIsDiceLike(ka) {
    return ka === 4 || window.remixIsColoredDice(ka);
  };

  window.remixColoredDiceRoll = function remixColoredDiceRoll(ka) {
    if (ka === window.BLUE_DICE_COUNT) {
      return 1 + Math.floor(Math.random() * 12);
    }
    if (ka === window.GREEN_DICE_COUNT) {
      return 4 + Math.floor(Math.random() * 6);
    }
    if (ka === window.BLACK_DICE_COUNT) {
      return window.remixBlackDiceRoll();
    }
    return null;
  };

  window.remixDiceSpawnCount = function remixDiceSpawnCount(ka, fallback) {
    const rolled = window.remixColoredDiceRoll(ka);
    return rolled == null ? fallback : rolled;
  };

  window.remixTopBarCountIcon = function remixTopBarCountIcon(src) {
    const img = document.createElement("img");
    img.src = src;
    // Match native scoreboard count sprites (not menu uiImage 40×40).
    img.className = "XUtzXd WwRsj LaTyvd";
    img.draggable = false;
    return img;
  };

  window.remixRefreshCountImgArr = function remixRefreshCountImgArr() {
    const root = document.querySelector("#count");
    if (!root) return;
    window.count_img_arr = Array.from(root.children).map(function (el) {
      return el.src;
    });
  };

  window.remixRefreshHudCountIcon = function remixRefreshHudCountIcon(index, url) {
    if (typeof index !== "number" || !url) return;
    if (window.count_img_arr) {
      window.count_img_arr[index] = url;
    } else {
      window.remixRefreshCountImgArr();
    }

    let selected = -1;
    try {
      const ka =
        window.__remixGame && window.__remixGame.settings
          ? window.__remixGame.settings.ka
          : null;
      if (typeof ka === "number") selected = ka;
    } catch (_e) {}
    try {
      const root = document.querySelector("#count");
      if (root) {
        const fromDom = [...root.children].findIndex(function (c) {
          return ((c.className || "") + "").indexOf("tuJOWd") >= 0;
        });
        if (fromDom >= 0) selected = fromDom;
      }
    } catch (_e2) {}
    if (selected !== index) return;

    try {
      const disp = document.body.getElementsByClassName("UJhXPd wSwbef EWyEF")[0];
      if (disp) {
        let target = null;
        for (let i = 0; i < disp.children.length; i++) {
          const child = disp.children[i];
          if (!child || child.tagName !== "IMG") continue;
          const cls = child.className || "";
          const src = child.src || "";
          const isCountSprite =
            cls.indexOf("WwRsj") >= 0 ||
            cls.indexOf("DqMRee") >= 0 ||
            /count_\d+/.test(src) ||
            src.indexOf("data:image") === 0;
          if (!isCountSprite) continue;
          if (!target) {
            target = child;
            child.src = url;
            child.className = "XUtzXd WwRsj LaTyvd";
            child.style.display = "";
            child.style.left = "";
            child.style.position = "";
            child.removeAttribute("width");
            child.removeAttribute("height");
          } else {
            // Native scoreboard keeps extra count_* sprites; hide them for colored dice.
            child.style.display = "none";
          }
        }
        if (!target && window.remixTopBarCountIcon) {
          disp.appendChild(window.remixTopBarCountIcon(url));
        }
      }
    } catch (_e4) {}
  };

  if (window._remixDiceCountsInserted) return;

  const countRoot = document.querySelector("#count");
  if (!countRoot) return;

  window.remixEnsureBlackDiceSettings();

  const blueImg = window.uiImage(window.NATIVE_DICE_ICON);
  blueImg.alt = "Blue Dice";
  const greenImg = window.uiImage(window.NATIVE_DICE_ICON);
  greenImg.alt = "Green Dice";
  const blackImg = window.uiImage(window.NATIVE_DICE_ICON);
  blackImg.alt = "Black Dice";
  countRoot.appendChild(blueImg);
  countRoot.appendChild(greenImg);
  countRoot.appendChild(blackImg);
  window.BLUE_DICE_COUNT = [...countRoot.children].indexOf(blueImg);
  window.GREEN_DICE_COUNT = [...countRoot.children].indexOf(greenImg);
  window.BLACK_DICE_COUNT = [...countRoot.children].indexOf(blackImg);
  window._remixDiceCountsInserted = true;

  // Native dice ~hue 11°. Rotate to blue (~215°) / green (~125°); blacken for Black.
  // TopBar snapshots count_img_arr at alter-time (still red) — refresh on tint.
  window.remixHueShiftDiceIcon(204, function (url) {
    blueImg.src = url;
    window.remixRefreshHudCountIcon(window.BLUE_DICE_COUNT, url);
  });
  window.remixHueShiftDiceIcon(114, function (url) {
    greenImg.src = url;
    window.remixRefreshHudCountIcon(window.GREEN_DICE_COUNT, url);
  });
  window.remixBlackenDiceIcon(function (url) {
    blackImg.src = url;
    window.remixRefreshHudCountIcon(window.BLACK_DICE_COUNT, url);
  });

  function onColoredDiceSelected() {
    const idx = [...countRoot.children].indexOf(this);
    if (!window.remixIsColoredDice(idx)) return;
    const src = this.src;
    if (src) window.remixRefreshHudCountIcon(idx, src);
  }
  blueImg.addEventListener("click", onColoredDiceSelected);
  greenImg.addEventListener("click", onColoredDiceSelected);
  blackImg.addEventListener("click", onColoredDiceSelected);

  window.remixRefreshCountImgArr();

  if (!window.countToTxt) window.countToTxt = {};
  window.countToTxt[window.BLUE_DICE_COUNT] = { name: "Blue Dice" };
  window.countToTxt[window.GREEN_DICE_COUNT] = { name: "Green Dice" };
  window.countToTxt[window.BLACK_DICE_COUNT] = { name: "Black Dice" };

  if (
    typeof window.HandleCount === "function" &&
    !window.HandleCount.__dicePatched
  ) {
    const orig = window.HandleCount;
    window.HandleCount = function (count) {
      if (count === window.BLUE_DICE_COUNT) return "Blue Dice, ";
      if (count === window.GREEN_DICE_COUNT) return "Green Dice, ";
      if (count === window.BLACK_DICE_COUNT) return "Black Dice, ";
      return orig(count);
    };
    window.HandleCount.__dicePatched = true;
  }

  // Black Dice spawn range UI lives in main Pudding Settings (not Custom Bowl).
  window.remixSyncBlackDiceSettingsUi = function remixSyncBlackDiceSettingsUi() {
    const range = window.remixEnsureBlackDiceSettings();
    const minEl = document.getElementById("black-dice-min");
    const maxEl = document.getElementById("black-dice-max");
    if (minEl) minEl.value = String(range.min);
    if (maxEl) maxEl.value = String(range.max);
  };

  window.remixInjectBlackDiceSettingsUi = function remixInjectBlackDiceSettingsUi() {
    if (document.getElementById("black-dice-settings")) {
      window.remixSyncBlackDiceSettingsUi();
      return;
    }
    const settingsRoot =
      document.getElementsByClassName("sEOCsb")[0] ||
      document.getElementById("settings-box") ||
      null;
    if (!settingsRoot) return;

    window.remixEnsureBlackDiceSettings();
    const block = document.createElement("div");
    block.id = "black-dice-settings";
    block.style.cssText =
      "margin:6px 3px;padding:8px 10px;border-radius:6px;" +
      "background:rgba(0,0,0,0.18);border:1px solid rgba(255,255,255,0.14);" +
      "color:white;font-family:Roboto,Arial,sans-serif;";
    block.innerHTML =
      '<div style="font-size:14px;font-weight:bold;margin-bottom:4px;">Black Dice spawn range</div>' +
      '<div style="font-size:12px;opacity:0.85;margin-bottom:8px;">Fruits spawned when the last apple is eaten (1–10000)</div>' +
      '<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">' +
      '<label style="font-size:13px;margin:0;">Min ' +
      '<input id="black-dice-min" type="number" min="1" max="10000" step="1" ' +
      'style="width:5.5em;margin-left:6px;padding:3px 6px;border-radius:4px;border:1px solid #ccc;" />' +
      "</label>" +
      '<label style="font-size:13px;margin:0;">Max ' +
      '<input id="black-dice-max" type="number" min="1" max="10000" step="1" ' +
      'style="width:5.5em;margin-left:6px;padding:3px 6px;border-radius:4px;border:1px solid #ccc;" />' +
      "</label>" +
      "</div>";

    const anchor =
      document.getElementById("TimerSettings") ||
      document.getElementById("CustomBowlFruits");
    if (anchor && anchor.parentElement) {
      if (anchor.nextSibling) {
        anchor.parentElement.insertBefore(block, anchor.nextSibling);
      } else {
        anchor.parentElement.appendChild(block);
      }
    } else {
      settingsRoot.appendChild(block);
    }

    function commit() {
      const minEl = document.getElementById("black-dice-min");
      const maxEl = document.getElementById("black-dice-max");
      if (!minEl || !maxEl) return;
      window.pudding_settings.BlackDiceMin = Number(minEl.value);
      window.pudding_settings.BlackDiceMax = Number(maxEl.value);
      window.remixEnsureBlackDiceSettings();
      window.remixSyncBlackDiceSettingsUi();
      if (typeof window.saveSettings === "function") window.saveSettings();
    }
    document.getElementById("black-dice-min").addEventListener("change", commit);
    document.getElementById("black-dice-max").addEventListener("change", commit);
    window.remixSyncBlackDiceSettingsUi();
  };

  setTimeout(function () {
    window.remixInjectBlackDiceSettingsUi();
  }, 0);
};

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.DiceCounts.alterSnakeCode = function (code) {
  // Narrow MoreMenu custom layouts to indices 7..12 so blue/green don't
  // hit the off-board fallthrough. Then handle colored-dice start placement.
  if (code.match(/if\(([a-zA-Z0-9_$.]+) > 6\) \{/)) {
    code = code.assertReplace(
      /if\(([a-zA-Z0-9_$.]+) > 6\) \{/,
      "if($1 > 6 && $1 <= 12) {"
    );
  } else {
    console.error("DiceCounts: failed to narrow MoreMenu count > 6 gate");
  }

  // After MoreMenu's `} else if(a)` — start colored dice with one apple.
  const countGate = code.match(/if\(([a-zA-Z0-9_$.]+) > 6 && \1 <= 12\)/);
  const stemMatch = code.match(
    /(this\.[a-zA-Z0-9_$]{1,8}\.push\([a-zA-Z0-9_$]{1,8}\(this,)/
  );
  if (countGate && stemMatch && code.match(/\} else if\(a\)/)) {
    const countExpr = countGate[1];
    const stem = stemMatch[1];
    code = code.assertReplace(
      /\} else if\(a\)/,
      `} else if(window.remixIsColoredDice&&window.remixIsColoredDice(${countExpr})) {
          ${stem} +0, +0));
        } else if(a)`
    );
  } else {
    console.error("DiceCounts: failed to inject colored-dice start placement");
  }

  // Native last-apple refill for Dice is NOT Mn — Mn early-returns for dice-like
  // counts. Refill is: ka===4 ? … || (tdF(this, roll), play) : tally…
  // Extend that path so blue/green roll 1–12 / 4–9 via tdF.
  const diceRefill = code.match(
    /this\.settings\.ka===4\?odF\(this\)!==0\|\|ecF\(this\.settings\)\s*&&\s*rdF\(this\)<=0\|\|\(tdF\(this,Math\.ceil\(Math\.random\(\)\*6\)\),odF\(this\)>0\s*&&\s*([a-zA-Z0-9_$.]+)\.play\(\)\)/
  );
  if (diceRefill) {
    const sound = diceRefill[1];
    code = code.assertReplace(
      diceRefill[0],
      `(this.settings.ka===4||(window.remixIsColoredDice&&window.remixIsColoredDice(this.settings.ka)))?odF(this)!==0||ecF(this.settings) && rdF(this)<=0||(tdF(this,this.settings.ka===4?Math.ceil(Math.random()*6):(window.remixColoredDiceRoll(this.settings.ka)||1)),odF(this)>0 && ${sound}.play())`
    );
  } else {
    console.error("DiceCounts: failed to find native dice tdF refill path");
  }

  // Mn still early-returns for dice-like; keep spawn-count wrap for safety on
  // any non-dice path that might still call Mn with a count.
  if (code.match(/Xh=this\.Mn\(vd,!Ni,null\)/)) {
    code = code.assertReplace(
      /Xh=this\.Mn\(vd,!Ni,null\)/g,
      `Xh=this.Mn(window.remixDiceSpawnCount?window.remixDiceSpawnCount(this.settings.ka,vd):vd,!Ni,null)`
    );
  }

  // Chess dice-like gates (skip chess_fruit_respawn for dice/tally/bomb…).
  if (code.match(/this\.settings\.ka===4\|\|this\.settings\.ka===6/)) {
    code = code.assertReplace(
      /this\.settings\.ka===4\|\|this\.settings\.ka===6/g,
      `(window.remixIsDiceLike?window.remixIsDiceLike(this.settings.ka):this.settings.ka===4)||this.settings.ka===6`
    );
  }

  // MoreMenu appends window.uiImage for count>3 — menu-sized, wrong for HUD.
  if (code.includes("const __img = window.uiImage(__src)")) {
    code = code.assertReplace(
      "const __img = window.uiImage(__src)",
      "const __img = (window.remixTopBarCountIcon||window.uiImage)(__src)"
    );
    // Drop the menu-only positioning hack when our scoreboard icon is used.
    code = code.replace(
      /__img\.style\.position = 'relative'\s*;\s*__img\.style\.left = '50px'\s*;/g,
      "if(__img.className.indexOf('WwRsj')<0){__img.style.position='relative';__img.style.left='50px';}"
    );
  } else {
    console.error("DiceCounts: failed to patch MoreMenu scoreboard count icon");
  }

  // TopBar fruit icon uses count_img_arr snapshotted before async hue-tint.
  // Prefer live #count src so blue/green stay correct after tint + on reset.
  const topBarFruit = code.match(
    /if\s*\(\s*window\.pudding_settings\.TopBar\s*&&\s*!window\.daily_challenge\s*\)\s*\{\s*([^=;\n]+)=\s*window\.count_img_arr\[([^\]]+)\]/
  );
  if (topBarFruit) {
    code = code.assertReplace(
      topBarFruit[0],
      `if (window.pudding_settings.TopBar && !window.daily_challenge) {
    ${topBarFruit[1].trim()}=(document.querySelector("#count").children[${topBarFruit[2]}]&&document.querySelector("#count").children[${topBarFruit[2]}].src)||window.count_img_arr[${topBarFruit[2]}]`
    );
  }

  return code;
};

window.RemixSpeedInfo = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

// Pudding's BootstrapMenu disables SpeedInfo unless snakeChosenMod is
// "PuddingMod". Remix keeps the toggle usable, but only Chess / Burger show
// real SpeedInfo data — every other mode shows a switch prompt.
//
// TimeKeeper's mode bit → name switch only knows Wall…Peaceful, so Remix
// trophies rendered as "Unknown". We also fix getCurrentMode: Pudding treated
// the last trophy as Blender, but Remix appends Candy/Chess/Burger after it.
//
// Timer settings (#edit-mode) is hardcoded Classic…Peaceful; we add only
// Candy/Chess/Burger (index-aligned; gaps stay hidden so PB keys match).
window.RemixSpeedInfo.runCodeBefore = function () {
  window.remixNativeBlenderMode = 22;

  window.remixSpeedInfoAllowed = function remixSpeedInfoAllowed() {
    return !!(
      (window.isChessActive && window.isChessActive()) ||
      (window.isBurgerActive && window.isBurgerActive())
    );
  };

  window.remixSpeedInfoEnsureModeLabels = function remixSpeedInfoEnsureModeLabels() {
    if (!window.modeToTxt) window.modeToTxt = {};
    if (window.CANDY_MODE != null) {
      window.modeToTxt[window.CANDY_MODE] = { name: "Candy" };
    }
    if (window.CHESS_MODE != null) {
      window.modeToTxt[window.CHESS_MODE] = { name: "Chess" };
    }
    if (window.BURGER_MODE != null) {
      window.modeToTxt[window.BURGER_MODE] = { name: "Burger" };
    }
  };

  const VANILLA_BRIDGE = [
    "Wall",
    "Portal",
    "Cheese",
    "Borderless",
    "Twin",
    "Winged",
    "YinYang",
    "Key",
    "Sokoban",
    "Poison",
    "Dimension",
    "Minesweeper",
    "Statue",
    "Light",
    "Shield",
    "Arrow",
    "Hotdog",
    "Magnet",
    "Gate",
    "Bridge",
    "Peaceful",
  ];
  const VANILLA_SKIP = VANILLA_BRIDGE.slice();
  VANILLA_SKIP[19] = "Skip";

  window.remixTimeKeeperNameForBit = function remixTimeKeeperNameForBit(
    bitIndex
  ) {
    const trophyId = bitIndex + 1;
    if (window.CANDY_MODE != null && trophyId === window.CANDY_MODE) {
      return "Candy";
    }
    if (window.CHESS_MODE != null && trophyId === window.CHESS_MODE) {
      return "Chess";
    }
    if (window.BURGER_MODE != null && trophyId === window.BURGER_MODE) {
      return "Burger";
    }
    if (trophyId === window.remixNativeBlenderMode) return "Blender";
    const names = window.isBridge ? VANILLA_BRIDGE : VANILLA_SKIP;
    if (bitIndex >= 0 && bitIndex < names.length) return names[bitIndex];
    return "Unknown";
  };

  // Build "Wall, Chess, " style label (trailing comma+space, matching Pudding).
  window.remixTimeKeeperFormatGamemode = function remixTimeKeeperFormatGamemode(
    modeStr
  ) {
    modeStr = modeStr || "";
    const trophyMode =
      typeof window.CurrentModeNum === "number"
        ? window.CurrentModeNum
        : typeof window.timeKeeper.getCurrentSetting === "function"
          ? window.timeKeeper.getCurrentSetting("trophy")
          : 0;

    if (trophyMode === window.remixNativeBlenderMode) {
      let gamemode = "";
      const vanillaLen = Math.min(modeStr.length, 21);
      for (let i = 0; i < vanillaLen; i++) {
        if (modeStr.charAt(i) === "1") {
          gamemode += window.remixTimeKeeperNameForBit(i) + ", ";
        }
      }
      if (window.candy_blending) gamemode += "Candy, ";
      if (window.chess_blending) gamemode += "Chess, ";
      if (window.burger_blending) gamemode += "Burger, ";
      if (!gamemode) gamemode = "Classic, ";
      return gamemode;
    }

    let gamemode = "";
    for (let i = 0; i < modeStr.length; i++) {
      if (modeStr.charAt(i) === "1") {
        gamemode += window.remixTimeKeeperNameForBit(i) + ", ";
      }
    }
    if (!gamemode) gamemode = "Classic, ";
    return gamemode;
  };

  window.remixSpeedInfoApplyModeLabel = function remixSpeedInfoApplyModeLabel() {
    const modeLabel = document.getElementById("mode-selected");
    if (!modeLabel || typeof window.HandleCount !== "function") return;
    const count = window.timeKeeper.getCurrentSetting("count");
    const modeStr = window.timeKeeper.getCurrentMode();
    const gamemode = window.remixTimeKeeperFormatGamemode(modeStr);
    const countTxt = window.HandleCount(count);
    modeLabel.innerHTML =
      gamemode + countTxt.substring(0, countTxt.lastIndexOf(","));
  };

  window.remixSpeedInfoShowSwitchMessage = function remixSpeedInfoShowSwitchMessage() {
    const set = function (id, html) {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    };
    set("mode-selected", "Switch to PuddingMod");
    set("mode-selected2", "");
    for (const id of [
      "25",
      "50",
      "100",
      "ALL",
      "H",
      "att",
      "25src",
      "50src",
      "100src",
      "Allsrc",
      "Hsrc",
    ]) {
      set(id, "");
    }
  };

  window.remixSpeedInfoEnableCheckbox = function remixSpeedInfoEnableCheckbox() {
    if (window.isSnakeMobileVersion) return;
    const cb = document.getElementById("AlwaysOnTimeKeeper");
    if (!cb) return;

    cb.disabled = false;

    let want = !!(window.pudding_settings && window.pudding_settings.SpeedInfo);
    try {
      const raw = JSON.parse(localStorage.getItem("PuddingSettings") || "null");
      if (raw && raw.SpeedInfo) want = true;
    } catch (_e) {}

    if (want) {
      if (window.pudding_settings) window.pudding_settings.SpeedInfo = true;
      cb.checked = true;
      const box = document.getElementById("speedinfo-popup-pudding");
      if (box) {
        box.style.display = "block";
        box.style.visibility = "visible";
      }
    }
  };

  // Fix mode bitstring: Blender is always trophy 22, not "last child".
  if (
    window.timeKeeper &&
    typeof window.timeKeeper.getCurrentMode === "function" &&
    !window.timeKeeper.getCurrentMode.__remixPatched
  ) {
    window.timeKeeper.getCurrentMode = function remixGetCurrentMode() {
      const blenderId = window.remixNativeBlenderMode;
      // CurrentModeNum is updated on trophy change (and by the harness); prefer it
      // over the DOM trophy index so labels stay correct during play.
      const mode =
        typeof window.CurrentModeNum === "number"
          ? window.CurrentModeNum
          : window.timeKeeper.getCurrentSetting("trophy");
      const trophyRoot = document.getElementById("trophy");
      const trophyCount = trophyRoot ? trophyRoot.children.length : 0;

      if (mode === blenderId) {
        let element = null;
        for (const img of document.querySelectorAll("img")) {
          if (img.src && img.src.includes("random.png")) {
            element = img;
            break;
          }
        }
        let modeStr = "";
        if (
          element &&
          element.parentElement &&
          element.parentElement.parentElement &&
          element.parentElement.parentElement.parentElement
        ) {
          let counter = -1;
          for (const child of element.parentElement.parentElement.parentElement
            .children) {
            counter++;
            if (counter === 0) continue;
            const inner = child.firstElementChild;
            if (
              inner &&
              inner.classList.length > 1 &&
              inner.children.length > 0
            ) {
              modeStr += "1";
            } else {
              modeStr += "0";
            }
          }
        }
        modeStr += window.candy_blending ? "1" : "0";
        modeStr += window.chess_blending ? "1" : "0";
        modeStr += window.burger_blending ? "1" : "0";
        return modeStr;
      }

      // One bit per trophy after Classic (includes Blender + Remix modes).
      let modeStr = "";
      for (let t = 1; t < trophyCount; t++) {
        modeStr += t === mode ? "1" : "0";
      }
      return modeStr;
    };
    window.timeKeeper.getCurrentMode.__remixPatched = true;
  }

  if (
    window.timeKeeper &&
    typeof window.timeKeeper.showDialog === "function" &&
    !window.timeKeeper.showDialog.__remixPatched
  ) {
    const origShow = window.timeKeeper.showDialog;
    window.timeKeeper.showDialog = function remixShowDialog() {
      origShow.apply(this, arguments);
      const dialog = document.getElementById("timeKeeperDialog");
      if (!dialog) return;
      const nice = window
        .remixTimeKeeperFormatGamemode(window.timeKeeper.getCurrentMode())
        .replace(/,\s*$/, "");
      for (let i = 0; i < dialog.childNodes.length; i++) {
        const node = dialog.childNodes[i];
        if (
          node.nodeType === 3 &&
          typeof node.textContent === "string" &&
          node.textContent.indexOf("Mode: ") === 0
        ) {
          node.textContent = "Mode: " + nice;
          break;
        }
      }
    };
    window.timeKeeper.showDialog.__remixPatched = true;
  }

  if (
    typeof window.SpeedInfoUpdate === "function" &&
    !window.SpeedInfoUpdate.__remixGated
  ) {
    const origUpdate = window.SpeedInfoUpdate;
    window.SpeedInfoUpdate = async function remixSpeedInfoUpdate() {
      if (!window.pudding_settings || !window.pudding_settings.SpeedInfo) {
        return;
      }
      if (!window.remixSpeedInfoAllowed()) {
        window.remixSpeedInfoShowSwitchMessage();
        return;
      }
      window.remixSpeedInfoEnsureModeLabels();
      const result = await origUpdate.apply(this, arguments);
      window.remixSpeedInfoApplyModeLabel();
      return result;
    };
    window.SpeedInfoUpdate.__remixGated = true;
  }

  if (typeof window.getAllSrc === "function" && !window.getAllSrc.__remixGated) {
    const origAll = window.getAllSrc;
    window.getAllSrc = async function remixGetAllSrc() {
      if (!window.pudding_settings || !window.pudding_settings.SpeedInfo) {
        return;
      }
      if (!window.remixSpeedInfoAllowed()) {
        window.remixSpeedInfoShowSwitchMessage();
        return;
      }
      window.remixSpeedInfoEnsureModeLabels();
      return origAll.apply(this, arguments);
    };
    window.getAllSrc.__remixGated = true;
  }

  if (
    typeof window.getRecordSRC === "function" &&
    !window.getRecordSRC.__remixGated
  ) {
    const origRec = window.getRecordSRC;
    window.getRecordSRC = async function remixGetRecordSRC(level) {
      if (!window.pudding_settings || !window.pudding_settings.SpeedInfo) {
        return;
      }
      if (!window.remixSpeedInfoAllowed()) {
        window.remixSpeedInfoShowSwitchMessage();
        return;
      }
      window.remixSpeedInfoEnsureModeLabels();
      return origRec.apply(this, arguments);
    };
    window.getRecordSRC.__remixGated = true;
  }

  // Timer settings (#edit-mode) is hardcoded Classic…Peaceful. Append only
  // Candy / Chess / Burger. Hidden placeholders fill index gaps (e.g. Blender)
  // so getSelected indices still match mode ids for PB storage.
  window.remixEnsureTimerEditModes = function remixEnsureTimerEditModes() {
    window.remixSpeedInfoEnsureModeLabels();
    const editMode = document.getElementById("edit-mode");
    if (!editMode) return;

    const unsBorder = "0.5vh ridge #00000000";
    const selBorder = "0.5vh ridge #af4490ff";
    const baseStyle =
      "cursor: pointer; border-radius: 1vh; width: 3.5vh; height: 3.5vh;";

    const remixModes = [
      {
        id: window.CANDY_MODE,
        icon: window.CANDY_ICON,
        name: "Candy",
      },
      {
        id: window.CHESS_MODE,
        icon: window.CHESS_ICON,
        name: "Chess",
      },
      {
        id: window.BURGER_MODE,
        icon: window.BURGER_ICON,
        name: "Burger",
      },
    ].filter(function (m) {
      return typeof m.id === "number" && m.icon;
    });
    if (!remixModes.length) return;

    const byId = {};
    for (const m of remixModes) byId[m.id] = m;
    const maxId = Math.max.apply(
      null,
      remixModes.map(function (m) {
        return m.id;
      })
    );

    function refreshTimesFromMode() {
      const countSel =
        document.querySelector("#edit-count .sel") ||
        document.querySelector("#edit-count img");
      if (countSel) countSel.click();
    }

    function paintSelection(selectedIdx) {
      for (let i = 0; i < editMode.children.length; i++) {
        const c = editMode.children[i];
        const on = i === selectedIdx;
        c.style.border = on ? selBorder : unsBorder;
        c.className = on ? "sel" : "uns";
      }
    }

    function selectModeImg(img) {
      const idx = [...editMode.children].indexOf(img);
      paintSelection(idx);
      refreshTimesFromMode();
    }

    function ensureSlot(i) {
      const want = byId[i];
      let img = editMode.children[i];
      if (want) {
        if (!img) {
          img = document.createElement("img");
          editMode.appendChild(img);
        }
        img.className = img.className === "sel" ? "sel" : "uns";
        img.style.cssText =
          baseStyle +
          " border: " +
          (img.className === "sel" ? selBorder : unsBorder) +
          ";";
        img.style.display = "";
        img.src = want.icon;
        img.alt = want.name;
        img.removeAttribute("data-remix-placeholder");
        if (!img.__remixModeClick) {
          img.addEventListener("click", function () {
            selectModeImg(img);
          });
          img.__remixModeClick = true;
        }
        return;
      }

      // Gap (e.g. Blender at 22): keep index alignment, do not show an icon.
      if (!img) {
        img = document.createElement("img");
        img.className = "uns";
        img.setAttribute("data-remix-placeholder", "1");
        img.alt = "";
        img.style.display = "none";
        editMode.appendChild(img);
      } else if (
        img.getAttribute("data-remix-placeholder") === "1" ||
        i === window.remixNativeBlenderMode
      ) {
        img.setAttribute("data-remix-placeholder", "1");
        img.style.display = "none";
        img.alt = "";
        img.removeAttribute("src");
      }
    }

    for (let i = editMode.children.length; i <= maxId; i++) {
      ensureSlot(i);
    }
    // Re-apply for slots that already existed from a prior open / old mirror.
    for (const m of remixModes) ensureSlot(m.id);
    if (typeof window.remixNativeBlenderMode === "number") {
      ensureSlot(window.remixNativeBlenderMode);
    }

    const live =
      typeof window.CurrentModeNum === "number"
        ? window.CurrentModeNum
        : typeof window.getSelected === "function"
          ? window.getSelected("#trophy")
          : 0;
    if (byId[live] && editMode.children[live]) {
      paintSelection(live);
    }
  };

  if (
    typeof window.editTimer === "function" &&
    !window.editTimer.__remixModes
  ) {
    const origEdit = window.editTimer;
    window.editTimer = function remixEditTimer() {
      const opening = !document.getElementById("edit-box");
      origEdit.apply(this, arguments);
      if (opening && document.getElementById("edit-box")) {
        window.remixEnsureTimerEditModes();
        const countSel = document.querySelector("#edit-count .sel");
        if (countSel) countSel.click();
      }
    };
    window.editTimer.__remixModes = true;
  }

  // BootstrapMenu binds click to the pre-wrap editTimer reference — rebind.
  window.remixBindTimerSettingsButton = function remixBindTimerSettingsButton() {
    const btn = document.getElementById("TimerSettings");
    if (!btn || btn.__remixEditBound) return;
    const fresh = btn.cloneNode(true);
    btn.parentNode.replaceChild(fresh, btn);
    fresh.addEventListener("click", function () {
      window.editTimer();
    });
    fresh.__remixEditBound = true;
  };
  window.remixBindTimerSettingsButton();

  window.remixSpeedInfoEnableCheckbox();
  if (
    window.pudding_settings &&
    window.pudding_settings.SpeedInfo &&
    typeof window.SpeedInfoUpdate === "function"
  ) {
    window.SpeedInfoUpdate().catch(function (e) {
      console.error("RemixSpeedInfo: initial update failed", e);
    });
  }
};

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.RemixSpeedInfo.alterSnakeCode = function (code) {
  if (code.match(/case "trophy":window\.CurrentModeNum = /)) {
    code = code.assertReplace(
      /case "trophy":window\.CurrentModeNum = /,
      `case "trophy":setTimeout(function(){window.SpeedInfoUpdate&&window.SpeedInfoUpdate().catch(function(e){console.error("RemixSpeedInfo: trophy update failed",e);});},0);window.CurrentModeNum = `
    );
  } else {
    console.error("RemixSpeedInfo: failed to find trophy CurrentModeNum hook");
  }
  return code;
};

////////////////////////////////////////////////////////////////////
//RUNCODEAFTER
////////////////////////////////////////////////////////////////////

window.RemixSpeedInfo.runCodeAfter = function () {
  window.remixBindTimerSettingsButton && window.remixBindTimerSettingsButton();
  window.remixSpeedInfoEnableCheckbox && window.remixSpeedInfoEnableCheckbox();
  if (
    window.pudding_settings &&
    window.pudding_settings.SpeedInfo &&
    typeof window.SpeedInfoUpdate === "function"
  ) {
    window.SpeedInfoUpdate().catch(function () {});
  }
};

window.RemixMod = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

// MorePudding bundles Pudding + Visibility + MoreMenu and runs them in that
// order. Fall back to the individual mods if a build ever ships without it.
window.remixBaseRunCodeBefore = function remixBaseRunCodeBefore() {
  if (window.MorePudding) {
    window.MorePudding.runCodeBefore();
    return;
  }
  window.PuddingMod.runCodeBefore();
  window.VisibilityModCode.runCodeBefore();
};

window.remixBaseAlterSnakeCode = function remixBaseAlterSnakeCode(code) {
  if (window.MorePudding) return window.MorePudding.alterSnakeCode(code);
  code = window.PuddingMod.alterSnakeCode(code);
  return window.VisibilityModCode.alterSnakeCode(code);
};

window.RemixMod.runCodeBefore = function () {
  // Shared Blender placement: fill existing empty cells after Peaceful (trophy_21).
  // The list is cached per panel because claiming a cell drops its "empty"
  // marker class — rescanning would renumber the slots for every later mode,
  // which used to leave the third mode with no slot at all.
  window.claimPeacefulFollowSlot = function claimPeacefulFollowSlot(slotIndex) {
    let panel = document.querySelector(".PWIidc");
    if (!panel) return null;

    let cached = window.remixBlenderSlots;
    if (!cached || cached.panel !== panel) {
      let peacefulImg = panel.querySelector('img[src$="trophy_21.png"]');
      if (!peacefulImg) return null;
      let outer =
        (peacefulImg.closest &&
          peacefulImg.closest(".vuOknd") &&
          peacefulImg.closest(".vuOknd").parentElement) ||
        (peacefulImg.parentElement && peacefulImg.parentElement.parentElement);
      if (!outer || outer.parentElement !== panel) return null;
      let empties = [];
      let sib = outer.nextElementSibling;
      while (sib) {
        let inner = sib.querySelector(":scope > .vuOknd");
        if (inner && inner.classList.contains("oBBKec")) {
          empties.push(inner);
        }
        sib = sib.nextElementSibling;
      }
      cached = window.remixBlenderSlots = { panel: panel, slots: empties };
    }

    return cached.slots[slotIndex] || null;
  };

  window.populateRemixBlenderSlot = function populateRemixBlenderSlot(opts) {
    if (!opts || !opts.id) return null;
    let existing = document.getElementById(opts.id);
    if (existing) return existing;
    let slot = window.claimPeacefulFollowSlot(opts.slotIndex);
    if (!slot) return null;
    slot.id = opts.id;
    slot.setAttribute("aria-label", opts.ariaLabel || "Toggle game mode");
    slot.setAttribute("role", "button");
    slot.setAttribute("tabindex", "0");
    slot.classList.remove("oBBKec");
    slot.setAttribute("class", "vuOknd blender_icon");
    slot.innerHTML =
      `<img class="DEvgAc blender_icon_img" src="` + opts.icon + `" alt="">`;
    let onToggle = opts.onToggle;
    slot.addEventListener("click", function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      if (onToggle) onToggle();
    });
    slot.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        ev.stopPropagation();
        if (onToggle) onToggle();
      }
    });
    return slot;
  };

  window.remixBaseRunCodeBefore();
  // Modes claim their trophy slots after MorePudding (incl. MoreMenu) has
  // finished adding its own, so their ids land at the end.
  window.CandyMod.runCodeBefore();
  window.ChessMod.runCodeBefore();
  window.BurgerMod.runCodeBefore();
  window.CatSpeed.runCodeBefore();
  window.DiceCounts.runCodeBefore();
  // After Chess/Burger helpers exist: re-enable SpeedInfo and gate its data.
  window.RemixSpeedInfo.runCodeBefore();
};

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.RemixMod.alterSnakeCode = function (code) {
  code = window.remixBaseAlterSnakeCode(code);
  // Candy → Chess → Burger (Burger builds on Chess-patched tick/f7/score)
  code = window.CandyMod.alterSnakeCode(code);
  code = window.ChessMod.alterSnakeCode(code);
  code = window.BurgerMod.alterSnakeCode(code);
  code = window.CatSpeed.alterSnakeCode(code);
  code = window.DiceCounts.alterSnakeCode(code);
  code = window.RemixSpeedInfo.alterSnakeCode(code);
  return code;
};

////////////////////////////////////////////////////////////////////
//RUNCODEAFTER
////////////////////////////////////////////////////////////////////

window.RemixMod.runCodeAfter = function () {
  // Re-ensure blender toggles exist after DOM settles
  window.CandyMod.runCodeAfter && window.CandyMod.runCodeAfter();
  window.ChessMod.runCodeAfter && window.ChessMod.runCodeAfter();
  window.BurgerMod.runCodeAfter && window.BurgerMod.runCodeAfter();
  window.RemixSpeedInfo.runCodeAfter && window.RemixSpeedInfo.runCodeAfter();

  let modIndicator = document.createElement("div");
  modIndicator.style =
    "position:absolute;font-family:Arial,sans-serif;color:white;font-size:14px;padding-top:4px;padding-left:30px;user-select: none;";
  modIndicator.textContent = "Remix Mod";
  let canvasNode = document.getElementsByClassName("jNB0Ic")[0];
  let parent = document.getElementsByClassName("EjCLSb")[0];
  if (parent && canvasNode) {
    parent.insertBefore(modIndicator, canvasNode);
  }
};


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

