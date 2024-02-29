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
      light_tiles: '#010101',
      dark_tiles: '#000000',
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
    //document.getElementsByClassName('TO4uAe wSwbef')[1].addEventListener('click', toggle_skull_func, false);

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
    // Attempt to get info on which mode it is
    spawn_func_regex = new RegExp(/if\([a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},\n?2\)\)[a-zA-Z0-9_$]{1,8}=!0;else if\([a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},\n?10\)&&[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\)[a-zA-Z0-9_$]{1,8}=\n?!1;else{var [a-zA-Z0-9_$]{1,8}=[a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},6\)\|\|[a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},7\);[a-zA-Z0-9_$]{1,8}=this\.[a-zA-Z0-9_$]{1,8}\([a-zA-Z0-9_$]{1,8},![a-zA-Z0-9_$]{1,8},null\)}/)

    spawn_func_code = code.match(spawn_func_regex)[0]

    is_portal = spawn_func_code.split('(')[1] + "(" + spawn_func_code.split(')')[0].split('(')[2] + ")"
    is_soko = is_portal.replace('2', '9').replace("this", "a");

    // The elegent piece of code that replace the grey pudding with the skull icon
    //console.log("Making soko goals more distinct")
    //console.log("Adding poison trophy as poison apple (click on the trophy at the top bar to toggle)")
    ////console.log(code)

    realism_draw = new RegExp(/switch\(void.*{d/);
    realism_switch = code.match(realism_draw)[0];
    //actual_canvas_regexp = new RegExp(/a.[a-zA-Z0-9_$]{1,8}.canvas,/);
    //actual_canvas = code.match(actual_canvas_regexp)[0]
    realism_path = new RegExp(/switch\(void.*}}/);
    last_path = code.match(realism_path)[0].split('.')[9].split('}')[0]

    get_graphics = realism_switch.split(':')[1].split(')')[0];
nothing =` if(window.pudding_settings.SokoGoals && a.${last_path}.path.includes("box")){
    switch (${get_graphics}) {
        default:
        case 0:
            a.oa.xy = window.distinct_soko_goal;
            break;
        case 1:
            a.Ba.xy = window.distinct_soko_goal_px;
            break;
        case 2:
            a.Ea.xy = window.distinct_soko_goal;
            break;
    }
}`

    window.drawing_apple = true;

    get_apple_stuff = new RegExp(/var.*[a-zA-Z0-9_$]{1,8}\.canvas\:.*\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\);/)
    poison_default = code.match(get_apple_stuff)[0]
    b_graphics = poison_default.split('(')[2].split(')')[0]

    get_apple_code = `
    if(window.pudding_settings.Skull){
        b.type = ${poison_default.split('?')[1].split('=')[1]} ? ${poison_default.split('<')[2].split('?')[0]} - 1 : b.type;
    }
    ${poison_default}
    `

    /*get_apple_code = `
    if(window.pudding_settings.Skull){
        switch (window.graphics_selected) {
            default:
            case 0:
                final_skull = window.skull;
                break;
            case 1:
                final_skull = window.px_skull;
                break;
            case 2:
                final_skull = window.real_skull;
                break;
            case 3:
                switch (${b_graphics}) {
                    default:
                    case 0:
                        final_skull = window.skull;
                        break;
                    case 1:
                        final_skull = window.px_skull;
                        break;
                    case 2:
                        final_skull = window.real_skull;
                        break;
                }
                break;
        }
        b.type = ${poison_default.split('?')[1].split('=')[1]} ? ${poison_default.split('<')[2].split('?')[0]} - 1 : b.type;
        //${poison_default.split('?')[0]} ? ${poison_default.split('?')[1]} ? final_skull : ${poison_default.split(':')[2]}
        ${poison_default}

    }
    else {
        ${poison_default}
    }
     `*/
    code = code.assertReplace(get_apple_stuff, get_apple_code)

    disable_real_grey = new RegExp(/null==\(f=[a-zA-Z0-9_$]{1,8}.[a-zA-Z0-9_$]{1,8}\)\|\|[a-zA-Z0-9_$]{1,8}\(f,b,c,-1\)/)
    real_grey = code.match(disable_real_grey)[0]
    real_grey_path = real_grey.split(')')[0].split('=')[3]

    new_grey_code = `
    if (${real_grey_path} && ${real_grey_path}.path.includes("poison-skull")) {
        ${real_grey.slice(0, -1).slice(0, -1).slice(0, -1)}0)
    }
    else {
        ${real_grey}
    }
    `

    code = code.assertReplace(disable_real_grey,new_grey_code)

    if (window.NepDebug) {
        console.log(code)
    }

    sokondeez = new RegExp(/this\.[a-zA-Z0-9_$]{1,8}=new.*box\..*}/gm)
    sokondeez_code = code.match(sokondeez)[0]

    sokondeez_nuts = `
    window.SokoRef=this;
    window.DefaultSokoGoal=${sokondeez_code.slice(0, -1)}
    window.DistinctSokoFinal=${sokondeez_code.split('=')[1].split('"')[0]} "${window.distinct_soko_goal.src}" ${sokondeez_code.split('"')[2]} "${window.distinct_soko_goal_px.src}" ${sokondeez_code.split('"')[4]}
    `

    code = code.assertReplace(sokondeez, sokondeez_nuts)

    //keep_running = new RegExp(/;if\([a-zA-Z0-9_$]{1,8}\(this.[a-zA-Z0-9_$]{1,8},9\)\)/)
/*
    code = code.assertReplace(keep_running, `;
    if (window.pudding_settings.SokoGoals) {
        window.SokoRef.${sokondeez_code.split('=')[0].split('.')[1]} = window.DistinctSokoFinal;
    }
    else {
        window.SokoRef.${sokondeez_code.split('=')[0].split('.')[1]} = window.DefaultSokoGoal;
    }
    ${code.match(keep_running)[0]}`)
*/
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

    //code = code.assertReplace(/this.Ja.canvas,/, `window.distinct_soko_goal,`)

/*

Generally speaking, there is a "shadow" apple that is just the skull icon
And the code recognizes poison apples and changes their "type" (fruit) to that skull

*/

    //disappear_skull = new RegExp(/this\.[$a-zA-Z0-9_]{0,6}\.drawImage\([a-z],0,\n?0,\n?[$a-zA-Z0-9_]{0,6},[$a-zA-Z0-9_]{0,6}/)
    //dis_skull = code.match(disappear_skull)[0]
    //code = code.assertReplace(disappear_skull, `false && ` + dis_skull)

/*
    pudding_draw = `

    if(window.drawing_apple && (a.${last_path}.path.includes("apple") || a.${last_path}.path.includes("postimg")) ){
        //a.oa.xy = window.skull;
        //debugger

        if(window.pudding_settings.Skull){
            switch (${get_graphics}) {
                default:
                case 0:
                    a.oa.xy = window.skull;
                    break;
                case 1:
                    a.Ba.xy = window.px_skull;
                    break;
                case 2:
                    a.Ea.xy = window.real_skull;
                    break;
            }
        }
        else if(a.${last_path}.path.includes("ghost")){
            switch (${get_graphics}) {
                default:
                case 0:
                    a.oa.xy = window.ghost_skull;
                    break;
                case 1:
                    a.Ba.xy = window.px_ghost_skull;
                    break;
                case 2:
                    a.Ea.xy = window.ghost_skull;
                    break;
            }
        }
    }

    `
*/
    //actual_canvas = code.match(test_regexp)[0]

    // Still need to take into account realism style.

    //code = code.assertReplace(realism_draw, pudding_draw + `;` + realism_switch)


    /*

    draw_skull_func = new RegExp(/return [a-zA-Z0-9_$]{1,8}\(a.[a-zA-Z0-9_$]{1,8}\)\&\&a\.[a-zA-Z0-9_$]{1,8}\?a\.[a-zA-Z0-9_$]{1,8}\.canvas\:a\.[a-zA-Z0-9_$]{1,8}\.canvas},[a-zA-Z0-9_$]{1,8}=function\(\)/gm)
    new_draw_skull = code.match(draw_skull_func)[0].split("}")[0]
    get_pixel = new_draw_skull.split(' ')[1].split('&')[0]
    pudding_skull_xd = `
if(!a.path.includes("key")){
if(window.pudding_settings.SokoGoals && a.path.includes("box")){if(${get_pixel}){return window.distinct_soko_goal_px;}return window.distinct_soko_goal;}
if(window.pudding_settings.Skull && !a.path.includes("box")){if(${get_pixel}){return window.px_skull;}return window.skull;}
if(a.path.includes("ghost")){if(${get_pixel}){return window.px_ghost_skull;}return window.ghost_skull;}
}
${code.match(draw_skull_func)[0].split("}")[0]};}
${code.match(draw_skull_func)[0].split("}")[1]}`

    code = code.assertReplace(draw_skull_func, pudding_skull_xd)

    */


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

    counter_reset_code = `;stats.inputs.game = 0;
    stats.walls.game = 0;
    window.timeKeeper.playing = false;
    window.BootstrapHide();
    stats.plays.session++;
    stats.plays.lifetime++;
    window.timeKeeper.addAttempt(window.timeKeeper.mode, window.timeKeeper.count, window.timeKeeper.speed, window.timeKeeper.size);
    saveStatistics();
    stats.visible = true;
    if((window.CurrentModeNum != 1 && window.CurrentModeNum != 17) && stats.statShown == "walls"){
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




    stop_regex = new RegExp(/stop=function\(a\){/)
    catchError(stop_regex, code)
    save_stats_code = `stop=function(a){saveStatistics();`

    code = code.assertReplace(stop_regex, save_stats_code);

    wall_spawn_regex = new RegExp(/var [a-zA-Z0-9_$]{1,8}=\n?[a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},this\.[a-zA-Z0-9_$]{1,8}\(null,5\)\);/gm)
    catchError(wall_spawn_regex, code)
    wall_pos = code.match(wall_spawn_regex)[0].split('=')[0].split(' ')[1]


    wall_counter_code = `${code.match(wall_spawn_regex)[0]}
    if(${wall_pos}){stats.walls.game++;updateCounterDisplay();}
    `
    if (window.NepDebug) {
        console.log("Wall thing: " + wall_pos)
        console.log("Wall thing 2: " + wall_counter_code)
    }
    code = code.assertReplace(wall_spawn_regex, wall_counter_code);

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
        if (mode != document.getElementById("trophy").children.length - 1) {	//not on blender mode
            modeStr = "";
            for (t = 1; t <= 17; t++) {
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
        if (count > 3 || speed > 2 || size > 2 || typeof window.aimTrainer !== 'undefined' || typeof window.megaWholeSnakeObject !== 'undefined') {
            // More Menu, or Dice, or MouseMode or Level Editor
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

        if (count > 3 || speed > 2 || size > 2 || typeof window.aimTrainer !== 'undefined' || typeof window.megaWholeSnakeObject !== 'undefined') {
            // More Menu, or MouseMode or Level Editor
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
                for (mode = 0; mode < 16; mode++) {
                    modeStr = "00000000000000000".split("");
                    if (mode != 0) {
                        modeStr[mode - 1] = '1';
                    }
                    modeStr = modeStr.join('');

                    for (count = 0; count < 3; count++) {
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
        if (storage["version"] != 2) {
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
                    case 16: gamemode += "Peaceful, "; break;
                    default: gamemode += "Unknown, "; break;
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
            case 3: dialog.appendChild(document.createTextNode("Dice count, ")); break;
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

                minutes = Math.floor(storage[name].time / 60000);
                seconds = Math.floor((storage[name].time - minutes * 60000) / 1000);
                mseconds = storage[name].time - minutes * 60000 - seconds * 1000;
                if (minutes.toString().length < 2) { minutes = "0" + minutes.toString() }
                if (seconds.toString().length < 2) { seconds = "0" + seconds.toString() }
                while (mseconds.toString().length < 3) { mseconds = "0" + mseconds.toString() }
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
                    minutes = Math.floor(time / 60000);
                    seconds = Math.floor((time - minutes * 60000) / 1000);
                    mseconds = time - minutes * 60000 - seconds * 1000;
                    if (minutes.toString().length < 2) { minutes = "0" + minutes.toString() }
                    if (seconds.toString().length < 2) { seconds = "0" + seconds.toString() }
                    while (mseconds.toString().length < 3) { mseconds = "0" + mseconds.toString() }
                    dialog.appendChild(document.createTextNode("Attempts to this point: " + storage[name].att));
                    dialog.appendChild(document.createElement("br"));
                    dialog.appendChild(document.createTextNode("Average: " + minutes + ":" + seconds + ":" + mseconds));
                    dialog.appendChild(document.createElement("br"));
                }
                dialog.appendChild(document.createElement("br"));
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

    func_regex = new RegExp(/[a-zA-Z0-9_$.]{1,40}=function\(\)[^\\]{1,1000}RIGHT":0[\s\S]*?=function/)
    window.catchError(func_regex, code)
    let func = code.match(/[a-zA-Z0-9_$.]{1,40}=function\(\)[^\\]{1,1000}RIGHT":0[\s\S]*?=function/)[0];
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
    scoreFuncVar = func.match(/25\=\=\=\n?[a-zA-Z0-9$]{1,4}/)[0].split('=')[3]; // Assuming he wanted just the "this.score"
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
    if25_regex = new RegExp(/if\(25===/)
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
    new_fruit.push({ // Blackberries
        "Normal": 'https://i.postimg.cc/hPTVGdNX/blackberries.png',
        "Pixel": 'https://i.postimg.cc/RZTf7zS9/px-blackberries.png',
        "Real": "https://i.postimg.cc/RVgCjj3c/blackberries-real.png",
        "Poison_values": 'b,\'#000044\',\'#909090\',50',
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
        "Normal": 'https://i.postimg.cc/BbQf4Vgs/hotdog.png',
        "Pixel": 'https://i.postimg.cc/xTcnz1kL/px-hotdog.png',
        "Real": "https://i.postimg.cc/Y0RcM953/hotdog-real.png",
        "Poison_values": 'b,\'#9b441c\',\'#909090\',30',
    });
    new_fruit.push({ // Pizza
        "Normal": 'https://i.postimg.cc/rwDXKnPj/pizza.png',
        "Pixel": 'https://i.postimg.cc/1tY1RKYq/pixil-frame-0-5.png',
        "Real": "https://i.postimg.cc/D0vyKmjv/pizza-real.png",
        "Poison_values": 'b,\'#FFCF86\',\'#909090\',30',
    });
    new_fruit.push({ // Pacman Ghost
        "Normal": 'https://i.postimg.cc/TP7ZGZGf/pacman-ghost.png',
        "Pixel": 'https://i.postimg.cc/BvtK8fxb/px-pacman-ghost.png',
        "Real": "https://i.postimg.cc/3Nc4x2Ch/ghost-real.png",
        "Poison_values": 'b,\'#FFCF86\',\'#909090\',30',
    });
    new_fruit.push({ // Sonic Rings
        "Normal": 'https://i.postimg.cc/pX1xYGp9/sonic-ring.png',
        "Pixel": 'https://i.postimg.cc/BvzJqWhs/ring-1.png',
        "Real": "https://i.postimg.cc/W3WrCR8H/ring-real.png",
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
    new_fruit.push({ // Mango
        "Normal": 'https://i.postimg.cc/R0NbYNSH/Mango.png',
        "Pixel": 'https://i.postimg.cc/bNny7wv4/mango-px.png',
        "Real": "https://i.postimg.cc/Hsb6V2tP/mango-real.png",
        "Poison_values": 'b,\'#fc8824\',\'#909090\',50',
    });
    new_fruit.push({ // Melon
        "Normal": 'https://i.postimg.cc/8knkL3WN/melon.png',
        "Pixel": 'https://i.postimg.cc/Qt8NqZ0x/pixel-melon.png',
        "Real": "https://i.postimg.cc/kG6h1PKn/melon-real.png",
        "Poison_values": 'b,\'#93ef13\',\'#909090\',50',
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
    new_fruit.push({ // Soccer Ball
        "Normal": 'https://i.postimg.cc/C1yT8vjL/soccer-ball.png',
        "Pixel": 'https://i.postimg.cc/kGDnkN00/pixel-soccer-ball.png',
        "Real": "https://i.postimg.cc/J7cnn0n8/soccer-real.png",
        "Poison_values": 'b,\'#ffffff\',\'#909090\',100',
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
    new_fruit.push({ // Dirt Block
        "Normal": 'https://i.postimg.cc/9FwzBRY4/mc-dirt.png',
        "Pixel": 'https://i.postimg.cc/7ZvhtHKK/mc-dirt-px.png',
        "Real": "https://i.postimg.cc/Z5rR1Gg4/mc-dirt-real.png",
        "Poison_values": 'b,\'#ff3f3f\',\'#909090\',100',
    });
    new_fruit.push({ // Bread
        "Normal": 'https://i.postimg.cc/YSMVtPr1/bread.png',
        "Pixel": 'https://i.postimg.cc/265KZBBy/bread-px.png',
        "Real": "https://i.postimg.cc/sgpqdzrj/bread-real.png",
        "Poison_values": 'b,\'#ff3f3f\',\'#909090\',100',
    });
    new_fruit.push({ // Santa
        "Normal": 'https://i.postimg.cc/kgV7FKDL/santa.png',
        "Pixel": 'https://i.postimg.cc/SN1yMDQW/santa-px.png',
        "Real": "https://i.postimg.cc/FsHrz2vr/santa-rtx.png",
        "Poison_values": 'b,\'#ff3f3f\',\'#909090\',100',
    });


    last_fruit_num = document.querySelector('#apple').children.length - 1;
    // Add fruit to menu
    for (let index = 0; index < new_fruit.length; index++) {
        document.querySelector('#apple').appendChild(uiImage(new_fruit[index].Normal));
    }

    // Secret fruit, can't be selected by menu
    new_fruit.push({ // Golden Apple
        "Normal": 'https://i.postimg.cc/tJqR4tT6/gold-apple.png',
        "Pixel": 'https://i.postimg.cc/MGDg1gBQ/px-gold-apple.png',
        "Real": "https://i.postimg.cc/764WBzhL/golden-real.png",
        "Poison_values": 'b,\'#eaca23\',\'#909090\',20',
    });
    new_fruit.push({ // Cabbage
        "Normal": 'https://i.postimg.cc/j59z8v1m/cabbage.png',
        "Pixel": 'https://i.postimg.cc/FR1ygwT0/cabbage-px.png',
        "Real": "https://i.postimg.cc/yd1GyLFv/cabbage-real.png",
        "Poison_values": 'b,\'#ff3f3f\',\'#909090\',20',
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
    settings_src_regex = new RegExp(/[a-zA-Z0-9_$]{1,8}=function\([a-zA-Z0-9_$]{1,8}\){""!==[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{0,8}\.[a-zA-Z0-9_$]{1,8}&&\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.src=[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{0,8}\.[a-zA-Z0-9_$]{1,8}\);/)
    settings_var = code.match(settings_src_regex)[0].split('.')[0].split('=')[3] // This is usually "a", the variable the function gets, which has settings in it
    settings_itself = code.match(settings_src_regex)[0].split('.')[1] // This is either the word "settings" or whatever google replaced it with that's obfuscated
    settings_src = code.match(settings_src_regex)[0].split('.')[2].split('&')[0] // This is the [] part in a.settings.[] - which has an src link to an image in it
    // ${settings_itself}

    get_graphics = new RegExp(/case "graphics":/);
    code = code.assertReplace(get_graphics, "$& window.graphics_selected=")
    get_fruit = new RegExp(/case "apple":/);
    code = code.assertReplace(get_fruit, "$& window.fruit_selected=")
    fruit_image = code.match(/\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}="/gm)[0].split('(')[1].split('=')[0]
    // Very poorly coded, get back here using this: "https://www.google.com/logos/fnbx/"+(1===
    /*
    // Full function that sets the current fruit icon
    realism_load_image = new RegExp(/if\("apple"===[a-zA-Z0-9_$]{1,8}\|\|"graphics"===[a-zA-Z0-9_$]{1,8}\).*;if/);
    realism_image_code = code.match(realism_load_image)[0];
    realism_image_code = realism_image_code.split(')')[0] + '){' + realism_image_code.split(')')[1] + ')};if'
    //selected_fruit_num = realism_image_code.split('{')[1].split('=')[1].split(';')[0];
    selected_fruit_num = realism_image_code.split('(')[2].split(',')[0];
    //graphics_selected_code = realism_image_code.split('{')[1].split('(')[2].split(')')[0];
    graphics_selected_code = realism_image_code.split(',')[1];

    fruit_image = realism_image_code.split('{')[1].split('=')[0]
    */

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
    }
    `

    rude_insert = new RegExp(/"\.png"\)\)}/gm)
    code = code.assertReplace(rude_insert, `".png")); ${new_realism_code} }`);

    daily_fruit_deathscreen = code.match(/[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.src/)[0]


    rude_insert2 = code.match(/0,[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\)}/)[0]
    code = code.assertReplace(rude_insert2,
        `${rude_insert2.split('}')[0]} ${new_realism_code.replace(fruit_image, daily_fruit_deathscreen)} }`);
    /*
    load_image_func = new RegExp(/if\("apple"===[a-zA-Z0-9_$]{1,8}\|\|"graphics"===[a-zA-Z0-9_$]{1,8}\)[a-zA-Z0-9_$]{1,8}=[a-zA-Z0-9_$]{1,8}\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{0,8}\.[a-zA-Z0-9_$]{1,8}\),\n?[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{0,8}\.[a-zA-Z0-9_$]{1,8}="https:\/\/www\.google\.com\/logos\/fnbx\/"\+\(1===[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{0,8}\.[a-zA-Z0-9_$]{1,8}\?"snake_arcade\/pixel\/[a-zA-Z0-9_$]{1,8}\/px_apple_"\+[a-zA-Z0-9_$]{1,8}\+"\.png":"snake_arcade\/[a-zA-Z0-9_$]{1,8}\/apple_"\+[a-zA-Z0-9_$]{1,8}\+"\.png"\);/)

    // Get all required variables around src for endscreen
    settings_regex = new RegExp(`,\n?[a-zA-Z0-9_$]{1,8}\.${settings_itself}\.[a-zA-Z0-9_$]{1,8}`)
    //debugger
    settings_var = code.match(load_image_func)[0].match(settings_regex)[0].split('.')[0].split(',')[1]
    settings_src = code.match(load_image_func)[0].match(settings_regex)[0].split('.')[2]
    select_fruit_numvar = code.match(load_image_func)[0].match(new RegExp(/\+.\+/))[0].split('+')[1]
    pixel_setting_regex = new RegExp(`case "graphics":[a-zA-Z0-9_$]{1,8}.${settings_itself}.[a-zA-Z0-9_$]{1,8}`);
    pixel_setting = code.match(pixel_setting_regex)[0].split('.')[2]
    // Gets the element that changed, "apple" means fruit here, in endscreen - Unused code here, but may be useful in the future.
    get_changed_var = code.match(load_image_func)[0].split('=')[3].split('|')[0]

    load_code_condensed = ``;

    for (let index = 0; index < window.new_fruit.length; index++) {
        current_fruit = window.new_fruit[index].Normal;
        current_fruit_px = window.new_fruit[index].Pixel;
        load_fruit_template = `
    ,\(${select_fruit_numvar}==${last_fruit_num + 1 + index} && ${settings_var}.${settings_itself}.${pixel_setting} === 0 ? ${settings_var}.${settings_itself}.${settings_src}="${current_fruit}" : {}\)
    ,\(${select_fruit_numvar}==${last_fruit_num + 1 + index} && ${settings_var}.${settings_itself}.${pixel_setting} === 1 ? ${settings_var}.${settings_itself}.${settings_src}="${current_fruit_px}" : {}\)`
        load_code_condensed = load_code_condensed + load_fruit_template;
    }
    load_code_condensed = load_code_condensed + ';';
*/

    //ip_grabber = new RegExp(/=new [a-zA-Z0-9_$]{1,8}\(this.[a-zA-Z0-9_$]{0,8},\"snake_arcade\/[a-zA-Z0-9_$]{1,8}\/apple_\"/)
    get_apple_make_func = new RegExp(/for\(a=0;22>a;a\+\+\)b=new [a-zA-Z0-9_$]{0,8}/)
    //func_name = code.match(ip_grabber)[0].replace("=new ", "").replace(`\(this.${settings_itself},\"snake_arcade\/[a-zA-Z0-9_$]{1,8}\/apple_\"`, "")
    func_name = code.match(get_apple_make_func)[0].split(' ')[1]
    ip_grabber2 = new RegExp(/[a-zA-Z0-9_$]{1,8}\(b,c.[a-zA-Z0-9_$]{1,8},c.target,c.threshold\)/)
    poison_convert = code.match(ip_grabber2)[0].split('(')[0] // replace('\(b,c.base,c.target,c.threshold\)',"") // This function is what makes the poison grey in poison mode
    array_grabber = new RegExp(/c=[a-zA-Z0-9_$]{1,8}\[a\]/)
    array_name = code.match(array_grabber)[0].replace('c=', "").replace('[a]', "")

    add_fruit_array_last_func_regex = new RegExp(/.threshold\),this.[a-zA-Z0-9_$]{1,8}.push\([a-zA-Z0-9_$]{1,8}\)/);

    fruit_array_name = code.match(add_fruit_array_last_func_regex)[0].split('.')[2] // ${fruit_array_name}
    ////console.log(func_name.split('(')[0])
    golden_index = `window.goldenIndex`

    add_fruit = `$&;this.${fruit_array_name}.push(b); // Add dummy for randomizer
  `
    for (let index = 0; index < window.new_fruit.length; index++) {
        current_fruit = window.new_fruit[index].Normal;
        current_fruit_px = window.new_fruit[index].Pixel;
        current_fruit_real = window.new_fruit[index].Real;
        current_fruit_poison_values = window.new_fruit[index].Poison_values; // ${current_fruit_poison_values}
        add_fruit_template = `
    b=new ${func_name.split('(')[0]}(this.${settings_itself},"${current_fruit}",1,this.oa,"${current_fruit_px}","${current_fruit_real}");
    ${poison_convert}(${current_fruit_poison_values});
    this.${fruit_array_name}.push(b);`
        add_fruit = add_fruit + add_fruit_template;
    }


    add_gold = `
  ${golden_index} = this.${fruit_array_name}.length - 2;
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
    shh_grabber = new RegExp(/[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.src=\"https:\/\/www\.google\.com\/logos\/fnbx\/\"\+[a-zA-Z0-9_$]{1,8}\.path/);
    firstvar_name = code.match(shh_grabber)[0].split('.')[0];
    Hr_name = code.match(shh_grabber)[0].split('.')[1];

    new_shh_line = "if(" + firstvar_name + ".path.includes(\"postimg\"))" + firstvar_name + "." + Hr_name + ".src=" + firstvar_name + ".path;else $&";

/*
    Pr_regex = new RegExp(/[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\&\&\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.src=\"https:\/\/www\.google\.com\/logos\/fnbx\/\"\+[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}/)
    Pr_a = code.match(Pr_regex)[0].split('.')[0]
    Pr_ka = code.match(Pr_regex)[0].split('.')[1].split('&')[0]
    Pr_pa = code.match(Pr_regex)[0].split('.')[6] // Where relative path is stored

    load_pixelated_regex = new RegExp(/[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\&\&\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.src=\"https:\/\/www\.google\.com\/logos\/fnbx\/\"\+[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8},[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8},"load",\n?function\(\){[a-zA-Z0-9_$]{1,8}\(a\)}\)\)}/gm)

    pixelated_switch = `switch(${Pr_a}.${Pr_pa}){ `;

    for (let index = 0; index < window.new_fruit.length; index++) {
        current_fruit = window.new_fruit[index].Normal;
        current_fruit_px = window.new_fruit[index].Pixel;
        pixelated_case_template = `
    case '${current_fruit_px}': ${Pr_a}.${Pr_ka}.src = '${current_fruit_px}'; break;`;
        pixelated_switch = pixelated_switch + pixelated_case_template;
    }


    pixelated_switch = pixelated_switch + `
  default: ${Pr_a}.${Pr_ka}.src = "https://www.google.com/logos/fnbx/" + ${Pr_a}.${Pr_pa}; break;
}`;

    new_pixelated_func = `
  if (${Pr_a}.${Pr_ka})
  {
    ${pixelated_switch}
    ${code.match(load_pixelated_regex)[0].split(',')[1].split('(')[0]}(${Pr_a}.${Pr_ka}, "load",
    function() {
        ${code.match(load_pixelated_regex)[0].split('{')[1].split('(')[0]}(${Pr_a})
    });
  }
}
  `

    only_link_regex = new RegExp(/\"https:\/\/www\.google\.com\/logos\/fnbx\/\"\+[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}/)

    //console.log("Adding pixelated images")
    code = code.assertReplace(load_pixelated_regex, new_pixelated_func);
*/
 // THIS ENTIRE CHUNK IS MISSING, WHAT DOES IT DO? it used to fix deathscreen, but it works without it so no need.
    // Fixes a image calls
    //console.log("Adding images")
    code = code.assertReplace(shh_grabber, new_shh_line);

    // Gets the settings value that hold the src for count and apple, also the var it's held in is the same for both.
    //get_count_val1 = code.match(/case "count":[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,4}/)[0].split('.')[0].split(':')[1]
    //get_count_val2 = code.match(/case "count":[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,4}/)[0].split('.')[2]
    //get_apple_val2 = code.match(/case "apple":[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,4}/)[0].split('.')[2]
    //get_speed_val2 = code.match(/case "speed":[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,4}/)[0].split('.')[2]

    // Endscreen related image loading for new fruit - pudding. Keep this last
    // Since it effect load_image_func in a way that would break the other code that relies on it !!
    //console.log("Adding new fruit to endscreen")
    ////console.log(load_image_func)
    ////console.log(code)
    //code = code.assertReplace(load_image_func, code.match(load_image_func)[0].replaceAll(';', load_code_condensed));
    ////console.log(code)
    //debugger

    gold_chance = `* 1000000) + 1) == 426017)` // ${gold_chance}
    super_chance = `* 10000000) + 1) == 4263017)` // ${super_chance}
    free_test = `* 10) + 1) == 6)` // ${free_test}

    apple_info_regex_improved = new RegExp(/[a-zA-Z0-9_$]{1,8}=function\(a,b,c\){a\.[a-zA-Z0-9_$]{1,8}\[b\]\.[a-zA-Z0-9_$]{1,8}=c;/)
    get_ka = code.match(apple_info_regex_improved)[0].split('.')[1].split('[')[0]
    get_pos = code.match(apple_info_regex_improved)[0].split('.')[2].split('=')[0]
    apple_info_regex = new RegExp(`a\.${get_ka}\\\[b\\\]\.${get_pos}`)
    ////console.log(apple_info_regex)

    set_gold = `if(a.${get_ka}[b].type >= ${golden_index} - 1){a.${get_ka}[b].type = a.${get_ka}[b].old_type;}
    if(Math.floor((Math.random() ${gold_chance}{a.${get_ka}[b].old_type = a.${get_ka}[b].type; a.${get_ka}[b].type = ${golden_index} - 1;}
    if(Math.floor((Math.random() ${super_chance}{a.${get_ka}[b].old_type = a.${get_ka}[b].type; a.${get_ka}[b].type = ${golden_index};}
    $&`
    //console.log("Adding 1 in a Million Golden Apple")
    //console.log("Adding 1 in a 10 Million Special Secret")
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

    snake_face_regex = new RegExp(/[a-zA-Z0-9_$]{1,6}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,6}\?\([a-zA-Z0-9_$]{1,6}\.[a-zA-Z0-9_$]{1,6}=[a-zA-Z0-9_$]{1,6}\[0\]\[0\]/)
    catchError(snake_face_regex, code)
    snake_face_code = code.match(snake_face_regex)[0]
    snake_face_code = `${code.match(snake_face_regex)[0].split('=')[0]}=10===${code.match(snake_face_regex)[0].split('?')[0]}? window.rainbowAlts[window.snakeRainbowOverride].set[0] : ${code.match(snake_face_regex)[0].split('=')[1]}`

    //console.log(snake_face_code)
    code = code.assertReplace(snake_face_regex, snake_face_code)
    //code = code.assertReplace(/a\.Yd=qN\[0\]\[1\];/, `a.Yd=10 === a.settings.Aa ? window.rainbowAlts[window.snakeRainbowOverride].set[0] : qN[0][1];`)
    //code = code.assertReplace(code.match(`${default_rainbow_array}\\\[0\\\]`)[0], `window.rainbowAlts[window.snakeRainbowOverride].set[0]`)
    //console.log(code)
    // ["#4E7CF6","#17439F"]
    //code = code.assertReplace(/0===a\.settings\.Aa\|\|/, "")
    //code = code.assertReplace(/0===a\.settings\.Aa\|\|/, "")
    //code = code.assertReplace(/\["#4E7CF6","#17439F"\]/, `["#FFFFFF","#FFFFFF"]`)

    snake_face2_reg = new RegExp(/\|\|10===[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\)[a-zA-Z0-9_$]{1,8}=[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8},[a-zA-Z0-9_$]{1,8}\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}/gm)
    snakeface2code = '&&!window.randomColor&&!window.isRainbow)' + code.match(snake_face2_reg)[0].split(')')[1]
    code = code.assertReplace(snake_face2_reg, snakeface2code)

    rainbow_bool_regex = new RegExp(/10===[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}/g)
    catchError(rainbow_bool_regex, code)

    is_rainbow_matches = code.match(rainbow_bool_regex).length;
    for (let index = 0; index < is_rainbow_matches; index++) {
        const element = code.match(rainbow_bool_regex)[0];
        snake_color_num = element.split('=')[3]
        make_me_different = `10==` + element.split('=')[3]
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


    //code = code.assertReplace(/this\.zd=qN\[0\]\[0\];/,`this.zd=qN[0][0];debugger;`)

    return code;
}
window.SettingsSaver = {};

window.SettingsSaver.make = function () {
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
                SelectedPairs: [0, 1, 2, 3, 4, 5],
                DisableRandom: false,
                randomizeThemeApple: false
            };

            }
         else {
            pudding_settings = JSON.parse(pudding_settings);
        }

        return pudding_settings;
    }
    window.pudding_settings = window.loadSettings();


    window.saveSettings = function () {
        window.pudding_settings.SelectedPairs = window.selected_fruit;
        if (typeof pudding_settings !== 'undefined' && typeof pudding_settings.Skull !== 'undefined' &&
        typeof pudding_settings.SokoGoals !== 'undefined' &&
        typeof pudding_settings.InputDisplay !== 'undefined' &&
        typeof pudding_settings.TopBar !== 'undefined' &&
        typeof pudding_settings.SpeedInfo !== 'undefined' &&
        typeof pudding_settings.PortalPairs !== 'undefined' &&
        typeof pudding_settings.DisableRandom !== 'undefined' &&
        typeof pudding_settings.randomizeThemeApple !== 'undefined'
        ) {
            localStorage.setItem('PuddingSettings', JSON.stringify(pudding_settings));
        }
    }

}

window.SettingsSaver.alterCode = function (code) {
    window.PopulateOptions();
    window.PopulateDropdowns();
    window.PopulateOptions();
    window.PopulateDropdowns();

    reset_regex = new RegExp(/;this\.reset\(\)\}\}/)

    settings_reset_code = `
    saveSettings();
    $&`

    catchError(reset_regex, code)
    code = code.assertReplace(reset_regex, settings_reset_code);


    stop_regex = new RegExp(/stop=function\(a\){/)
    catchError(stop_regex, code)
    save_settings_code = `stop=function(a){saveSettings();`

    code = code.assertReplace(stop_regex, save_settings_code);
    return code;
}
window.SpeedInfo = {};

window.SpeedInfo.make = function () {

    // First game must be CE, the other is the normal game
    const gameIDs = ["o1y9pyk6", "9dow0go1"];
    window.first_time_call =true;
    window.requestsMade = 0;

    function sleepFor(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    window.makeAPIrequest = function (requestURL, callback) {
        // Add id to solve query isssue
        hasQuery = requestURL.includes("?")
        url = requestURL
        if (hasQuery) {
            url += "&"
        }
        else {
            url += "?"
        }
        url += "id=" + new Date().getTime()
        if (window.NepDebug) {
            //console.log(url);
            //console.log("Getting runs..." + window.requestsMade);
        }

        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = function () {
            if (request.status == 200) {
                window.requestsMade += 1;
                let response = JSON.parse(request.response);
                //console.log(response);
                if (callback && typeof callback === "function") {
                    callback(response);
                }
            }
            else if (request.status == 404) {
                console.error("You used the API wrong!");
            }
            else {
                sleepFor(2000);
                makeAPIrequest(requestURL);
            }
        }
        request.send();
    }



    window.getGameDetails = function () {

        makeAPIrequest("https://www.speedrun.com/api/v1/games/" + gameIDs[0] + "/variables", (x) => { window.SpeedrunVaraiblesJson = x });
        makeAPIrequest("https://www.speedrun.com/api/v1/games/" + gameIDs[0] + "/categories?embed=game", (x) => { window.SpeedrunCategoriesJson = x });
        makeAPIrequest("https://www.speedrun.com/api/v1/games/" + gameIDs[0] + "/levels", (x) => { window.SpeedrunLevelsJson = x });

        makeAPIrequest("https://www.speedrun.com/api/v1/games/" + gameIDs[1] + "/variables", (x) => { window.SpeedrunVaraiblesJsonCE = x });
        makeAPIrequest("https://www.speedrun.com/api/v1/games/" + gameIDs[1] + "/categories?embed=game", (x) => { window.SpeedrunCategoriesJsonCE = x });
        makeAPIrequest("https://www.speedrun.com/api/v1/games/" + gameIDs[1] + "/levels", (x) => { window.SpeedrunLevelsJsonCE = x });

        //makeAPIrequest("https://www.speedrun.com/api/v1/games/o1y9pyk6/records?top=1", printMe);


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
        17: { name: "Peaceful" },
        18: { name: "Blender" },
    }

    window.countToTxt = {
        0: { name: "1 Apple" },
        1: { name: "3 Apples" },
        2: { name: "5 Apples" },
        3: { name: "Dice" },
    }

    window.sizeToTxt = {
        0: { name: "Standard" },
        1: { name: "Small" },
        2: { name: "Large" },
    }

    window.speedToTxt = {
        0: { name: "Standard" },
        1: { name: "Fast" },
        2: { name: "Slow" },
    }

    daily_button.addEventListener("click", function() {
        SpeedInfoUpdate()
        EmptyAll()
      });

    window.getRecordSRC = function (level) {

        if(window.daily_challenge){

            EmptyAll();
            return;
        }

        if (!window.pudding_settings.SpeedInfo) {
            // For those that don't want to see speedrun info, to keep the game stable without api calls
            EmptyAll();
            return;
        }

        if (typeof window.SpeedrunVaraiblesJson == "undefined" ||
            typeof window.SpeedrunCategoriesJson == "undefined" ||
            typeof window.SpeedrunLevelsJson == "undefined" ||
            typeof window.SpeedrunVaraiblesJsonCE == "undefined" ||
            typeof window.SpeedrunCategoriesJsonCE == "undefined" ||
            typeof window.SpeedrunLevelsJsonCE == "undefined") {
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
        PEACEFUL = 16
        BLENDER = 17

        // Speed list
        DEFAULT_SPEED = 0
        FAST = 1
        SLOW = 2

        // Count settings
        ONE_APPLE = 0;
        THREE_APPLES = 1;
        FIVE_APPLES = 2;
        DICE = 3;


        let count = window.timeKeeper.getCurrentSetting("count");
        let speed = window.timeKeeper.getCurrentSetting("speed");
        let size = window.timeKeeper.getCurrentSetting("size");
        let mode = window.CurrentModeNum;
        // Implement new method of getting mod that excludes blender

        const highscore_modes = [WALL, PORTAL, KEY, SOKO, POISON, MINESWEEPER, STATUE, SHIELD];

        if (size > 2 || count > 3) {
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
        if (mode == STATUE && level == "H" && speed == SLOW) {
            HandleHighscore("Empty")
            return; // Statue isn't highscore on slow (yet?)
        }

        gameID = speed == SLOW ? gameIDs[1] : gameIDs[0]; // Set gameID to CE if Slow

        Highscore_ID = "";
        variable_IDs = speed != SLOW ? window.SpeedrunVaraiblesJson : window.SpeedrunVaraiblesJsonCE;
        category_IDs = speed != SLOW ? window.SpeedrunCategoriesJson : window.SpeedrunCategoriesJsonCE;
        speed_var_ID = speed_value_ID = ""

        // reset the stuff, blame moterstorm for CE having issues
        multi_value_ID = ""
        size_value_ID = ""
        //debugger
        for (let currentVar = 0; currentVar < variable_IDs["data"].length; currentVar++) {
            if (multi_value_ID == "" && variable_IDs["data"][currentVar].name.includes("Multi")) {
                multi_var_ID = variable_IDs["data"][currentVar].id;
                for (var currentValue in variable_IDs["data"][currentVar].values.values) {
                    if (variable_IDs["data"][currentVar].values.values[currentValue].label == window.countToTxt[count].name) {
                        multi_value_ID = currentValue;
                        break;
                    }
                }
            }

            if (speed_value_ID == "" && variable_IDs["data"][currentVar].name.includes("Speed")) {
                speed_var_ID = variable_IDs["data"][currentVar].id;
                for (var currentValue in variable_IDs["data"][currentVar].values.values) {
                    if (variable_IDs["data"][currentVar].values.values[currentValue].label == window.speedToTxt[speed].name) {
                        speed_value_ID = currentValue;
                        break;
                    }
                }
            }

            if (size_value_ID == "" && variable_IDs["data"][currentVar].name.includes("Board")) {
                size_var_ID = variable_IDs["data"][currentVar].id;
                for (var currentValue in variable_IDs["data"][currentVar].values.values) {
                    if (variable_IDs["data"][currentVar].values.values[currentValue].label == window.sizeToTxt[size].name) {
                        size_value_ID = currentValue;
                        break;
                    }
                }
            }
        }

        catch_multi = "var-" + multi_var_ID + "=" + multi_value_ID
        catch_speed = "&var-" + speed_var_ID + "=" + speed_value_ID
        catch_size = "&var-" + size_var_ID + "=" + size_value_ID

        if (speed_var_ID = "") { // Slow stuff doesn't have speed value when it's high score
            catch_speed = ""
        }

        if (level == "H") {

            for (let index = 0; index < category_IDs["data"].length; index++) {
                if (category_IDs["data"][index].name.includes(window.modeToTxt[mode].name)) {

                    Highscore_ID = category_IDs["data"][index].id;
                    break;
                }
            }

            if (window.NepDebug) {
                //console.log("https://www.speedrun.com/api/v1/leaderboards/" + gameID +
                //    "/category/" + Highscore_ID + "?top=1&" + catch_multi + catch_speed + catch_size)
            }

            makeAPIrequest("https://www.speedrun.com/api/v1/leaderboards/" + gameID +
                "/category/" + Highscore_ID + "?top=1&" + catch_multi + catch_speed + catch_size, HandleHighscore);

            return;
            //makeAPIrequest("https://www.speedrun.com/api/v1/categories/"+Highscore_ID+"/records?top=1&x=7kj63r42-0nwovxdl.mlnmj661-0nwomwdl.xqkkj49q-p854j77l.z19gp0jl", printMe);
        }

        level_IDs = speed != SLOW ? window.SpeedrunLevelsJson : window.SpeedrunLevelsJsonCE;

        for (let index = 0; index < level_IDs["data"].length; index++) {
            if (level_IDs["data"][index].name.includes(window.modeToTxt[mode].name) &&
                level_IDs["data"][index].name.includes(window.speedToTxt[speed].name)) {
                level_ID = level_IDs["data"][index].id;
                break;
            }
        }

        for (let index = 0; index < category_IDs["data"].length; index++) {
            if (category_IDs["data"][index].name.includes(level + " Apples")) {

                category_ID = category_IDs["data"][index].id;
                break;
            }
        }

        src_link_stuff = "https://www.speedrun.com/api/v1/leaderboards/" + gameID + "/level/"

        if (window.NepDebug) {
            //console.log(src_link_stuff + level_ID + "/" + category_ID + "?top=1&" + catch_multi + catch_size)
        }
        switch (level) {
            case "25":
                makeAPIrequest(src_link_stuff + level_ID + "/" + category_ID + "?top=1&" + catch_multi + catch_size, Handle25)
                break;
            case "50":
                if (size == 1 && mode == YINYANG) {
                    Handle50("Empty")
                    break;
                }
                makeAPIrequest(src_link_stuff + level_ID + "/" + category_ID + "?top=1&" + catch_multi + catch_size, Handle50)
                break;
            case "100":
                if (size != 1) {
                    makeAPIrequest(src_link_stuff + level_ID + "/" + category_ID + "?top=1&" + catch_multi + catch_size, Handle100)
                    break;
                }
                Handle100("Empty");
                break;
            case "All":
                makeAPIrequest(src_link_stuff + level_ID + "/" + category_ID + "?top=1&" + catch_multi + catch_size, HandleAll)
                break;
            default:
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

    window.getAllSrc = function () {
        ["25", "50", "100", "All", "H"].forEach(element => {
            getRecordSRC(element);
        });
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

            const milliseconds = Math.round((seconds - wholeSeconds) * 1000);

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

    window.getGameDetails();
    //window.getSomethingSRC();

   // window.speedinfoVisible = false;

    window.SpeedInfoShow = function () {
        const speedinfoBox = document.getElementById('speedinfo-popup-pudding');
        speedinfoBox.style.display = 'block';
        speedinfoBox.style.visibility = 'visible';
        window.pudding_settings.SpeedInfo = true;

        window.SpeedInfoUpdate();
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
        speedinfoBox.style = 'position:absolute;left:100%;z-index:10000;background-color:#4a752c;padding:8px;display:none;border-radius:3px;width:208px;height:584px;top:0px;';
        speedinfoBox.id = 'speedinfo-popup-pudding';
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
        window.SpeedInfoUpdate();
    });

    const playButton = 'NSjDf';
    document.querySelector("[jsname^=\"" + playButton + "\"]").addEventListener("click", (e) => {
        window.SpeedInfoUpdate();
    });

    window.SpeedInfoUpdate = function () {
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
                    case 16: gamemode += "Peaceful, "; break;
                    default: gamemode += "Unknown, "; break;
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

                minutes = Math.floor(storage[name].time / 60000);
                seconds = Math.floor((storage[name].time - minutes * 60000) / 1000);
                mseconds = storage[name].time - minutes * 60000 - seconds * 1000;
                if (minutes.toString().length < 2) { minutes = "0" + minutes.toString() }
                if (seconds.toString().length < 2) { seconds = "0" + seconds.toString() }
                while (mseconds.toString().length < 3) { mseconds = "0" + mseconds.toString() }
                score_label = "ALL" === score ? "All" : score;
                bold.innerHTML = score_label + " Apples: " + minutes + "m" + seconds + "s" + mseconds + "ms";

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
            case 3: return "Dice count, "; break;
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

    speedinfo_reset = `;window.SpeedInfoUpdate();
    if(window.first_time_call){window.getAllSrc();window.first_time_call=false;}
    ;$&`


    catchError(reset_regex, code)
    code = code.assertReplace(reset_regex, speedinfo_reset);

    switch_regex = new RegExp(/switch\(b\){case "apple"/)
    speedinfo_switch = `window.SpeedInfoUpdate();switch(b){case "apple"`
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

  // Code that runs before anything else here, loading variables, etc.
  // Recommended to use "window." for things
  const e = document.createElement('div');
  e.id = 'input-display-container';
  e.style = 'position:absolute;left:-447px;top:530px;z-index:10001;display:block;line-height:normal;';
  window.speedinfoInput.appendChild(e);

  const f = document.createElement('div');
  f.id = 'input-display-container';
  f.style = 'position:absolute;left:-447px;top:460px;z-index:10001;display:block;line-height:normal;';
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
      window.ToggleSpeedInfo();
      window.ToggleSpeedInfo();
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
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_15.png" />
</div>
<br/>
<div id="edit-count">
  <img class="sel" style="cursor: pointer; border: 0.5vh ridge #af4490ff; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v17/count_00.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v17/count_01.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v17/count_02.png" />
  <img class="uns" style="cursor: pointer; border: 0.5vh ridge #00000000; border-radius: 1vh; width: 3.5vh; height: 3.5vh;" src="https://www.google.com/logos/fnbx/snake_arcade/v17/count_03.png" />
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
      /[a-zA-Z0-9_$]{1,8}\n?\.\n?prototype\n?\.\n?reset\n?=\n?function\(\)\n?{\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?\[\];\n?var a\n?=\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?this\n?\.\n?settings[^]*?\)\}\;/
    )[0]

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

    code = code.replace(resetFunction,
      resetFunction.replace(
        'function(){',
        `function(){this.xdddd=[];

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
      /[a-zA-Z0-9_$]{1,8}=function\(a\){a=Math\.floor\(a\);if\(0>=a\)return[^]*?3,"0"\)}/
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
      /if\(25===\n?[a-zA-Z0-9_$]{1,8}\|\|50===[a-zA-Z0-9_$]{1,8}\|\|100===[a-zA-Z0-9_$]{1,8}\)/
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

        /*const c = new Image();
        c.src = 'https://i.postimg.cc/02xshYj1/index.png';
        c.width = c.height = 16;
        c.style = 'cursor:pointer;position:relative;left:-10px;top:30px;';
        c.id = 'input-counter-settings';
*/
        const d = document.createElement('div');
        d.id = 'input-counter-settings-container';
        d.style = 'position:absolute;left:465px;top:45px;z-index:10002;';
        document.getElementsByClassName('sEOCsb')[0].appendChild(d);
        const settingsElement = document.querySelector('#input-counter-settings-container');

        //settingsElement.appendChild(c);
        css_stripped = 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakePudding/main/bootstrap-stripped.css';
        if (window.NepDebug) {
            css_stripped = "http://127.0.0.1:5500/bootstrap-stripped.css"
        }

        window.bootstrap_css = '';
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const data = xhr.responseText;
                    // Use the fetched data as a string
                    //console.log(data); // Or do something else with the data
                    window.bootstrap_css = data;
                    document.getElementsByTagName('style')[0].innerHTML = document.getElementsByTagName('style')[0].innerHTML + window.bootstrap_css;
                } else {
                    console.error('An error occurred while fetching Bootstrap: ', xhr.status);
                }
            }
        };

        xhr.open('GET', css_stripped, true);
        xhr.send();


        const settingsBox = document.createElement('div');
        settingsBox.style = 'position:absolute;left:100%;z-index:10000;background-color:#4a752c;padding:8px;display:none;border-radius:3px;width:208px;height:584px;top:0px;';
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
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" role="switch" id="PortalPairs">
    <label class="form-check-label" for="PortalPairs" style="margin:3px;color:white;font-family:Roboto,Arial,sans-serif;">Custom Portal Pairs</label>
    </div>
<select style="width:95px;margin:3px;background-color:#1155CC;color:white;font-family:Roboto,Arial,sans-serif;display: inline-block; align-items: center; text-align: center;" id="fruitSelect1" class="form-control flex-row">
    <option value="0">Apple</option>
  </select>
  <select style="width:95px;margin:3px;background-color:#1155CC;color:white;font-family:Roboto,Arial,sans-serif;display: inline-block; align-items: center; text-align: center;" id="fruitSelect2" class="form-control flex-row">
  <option value="1">Banana</option>
</select><br>

  <select style="width:95px;margin:3px;background-color:#1155CC;color:white;font-family:Roboto,Arial,sans-serif;display: inline-block; align-items: center; text-align: center;" id="fruitSelect3" class="form-control flex-row">
    <option value="2">Pineapple</option>
  </select>
  <select style="width:95px;margin:3px;background-color:#1155CC;color:white;font-family:Roboto,Arial,sans-serif;display: inline-block; align-items: center; text-align: center;" id="fruitSelect4" class="form-control flex-row">
    <option value="3">Purple Grapes</option>
  </select><br>
  <select style="width:95px;margin:3px;background-color:#1155CC;color:white;font-family:Roboto,Arial,sans-serif;display: inline-block; align-items: center; text-align: center;" id="fruitSelect5" class="form-control flex-row">
    <option value="4">Pumpkin</option>
  </select>
  <select style="width:95px;margin:3px;background-color:#1155CC;color:white;font-family:Roboto,Arial,sans-serif;display: inline-block; align-items: center; text-align: center;" id="fruitSelect6" class="form-control flex-row">
    <option value="5">Onion</option>
  </select>
  <br>

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
        } else
        {
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

        //preselect based on saved settings
        //document.querySelector(`#stat-chooser option[value=${settingsToValues[stats.statShown][stats.statDurationShown]}]`).selected = true;

        document.querySelector(`#stat-chooser option[value=${settingsToValues[stats.statShown][stats.statDurationShown]}]`).selected = true;

        //Listeners to hide/show settings box when clickng the cog, or the X - not anymore! Only back button.
        //document.querySelector('#input-counter-settings').addEventListener('click', showSettingsBox);

        const settingsCloseElements = document.getElementById('settings-close');
        settingsCloseElements.addEventListener('click', window.BootstrapHide);
        //settingsCloseElements[1].addEventListener('click', hideSettingsBox);

        document.getElementById('stat-chooser').onchange = function () {
            stats.statShown = valuesToSettings[this.value].stat;
            stats.statDurationShown = valuesToSettings[this.value].duration;
            document.getElementById('stat-icon').src = getStatIconImageSrc();
            updateCounterDisplay();
        }

        document.getElementById('edit-stat').addEventListener('click', promptToEditStatCount);
        document.getElementById('reset-stats').addEventListener('click', promptToResetStats);
        //document.getElementById('toggle-counter').addEventListener('click', toggleCounter);

        tempID = "time-keeper"; // Inspect element on Timer and take jsname from it
        //document.querySelector("button[jsname^=\"" + tempID + "\"]").addEventListener("click", (e) => {
        //    window.timeKeeper.toggleDialog();
        //});
        TimerID = "yddQF"; // Inspect element on Timer and take jsname from it
        //document.querySelector("div[jsname^=\"" + TimerID + "\"]").addEventListener("click", (e) => {
        //    window.timeKeeper.toggleDialog();
        //});

        //debugger
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
window.CustomPortalPairs = {};

window.CustomPortalPairs.make = function () {

    // Code that runs before anything else here, loading variables, etc.
    // Recommended to use "window." for things
    //window.portal_pairs = false;
    let first_time_portal = true;
    window.toggle_portal_pairs = function toggle_portal_pairs() {
          // this is so that if the input display starts on, it doesnt trigger it to be off, like what normally unchecking the box would do, since I'm using the same function.
          if(first_time_portal){
            first_time_portal=false;
          }
          else
          {window.pudding_settings.PortalPairs = !window.pudding_settings.PortalPairs;}

        for (var i = 1; i <= 6; i++) {
            var selectElement = document.getElementById('fruitSelect' + i.toString());

            selectElement.disabled = !window.pudding_settings.PortalPairs;
        }
        //console.log(window.pudding_settings.PortalPairs)
    }

    window.sortFruit = function (arr) {
        return arr.slice().sort((a, b) => a - b);
    }

    portal_pairs_checkbox = document.getElementById("PortalPairs");
    portal_pairs_checkbox.checked = window.pudding_settings.PortalPairs;
    portal_pairs_checkbox.addEventListener("change", toggle_portal_pairs);
    toggle_portal_pairs();
    // console.log("AAAAAAAAAAAAAAAAAAAA", window.pudding_settings.PortalPairs);

    var fruitToText = {
        0: { name: "Apple", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_00.png" },
        1: { name: "Banana", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_01.png" },
        2: { name: "Pineapple", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_02.png" },
        3: { name: "Purple Grapes", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_03.png" },
        4: { name: "Pumpkin", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_04.png" },
        5: { name: "Onion", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_05.png" },
        6: { name: "Eggplant", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_06.png" },
        7: { name: "Strawberry", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_07.png" },
        8: { name: "Cherry", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_08.png" },
        9: { name: "Carrot", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_09.png" },
        10: { name: "Mushroom", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_10.png" },
        11: { name: "Broccoli", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_11.png" },
        12: { name: "Watermelon", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_12.png" },
        13: { name: "Green Pepper", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_13.png" },
        14: { name: "Kiwi", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_14.png" },
        15: { name: "Lemon", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_15.png" },
        16: { name: "Orange", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_16.png" },
        17: { name: "Peach", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_17.png" },
        18: { name: "Peanut", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_18.png" },
        19: { name: "Raspberries", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_19.png" },
        20: { name: "Tomato", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_20.png" },
        21: { name: "Juniper Berries", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_21.png" },
        22: { name: "Fruit Bowl", image: "https://www.google.com/logos/fnbx/snake_arcade/v17/apple_22.png" },
        23: { name: "Pudding", image: "https://i.postimg.cc/5y7gwwGY/pudding-cr.png" },
        24: { name: "Blue Berries", image: "https://i.postimg.cc/8cmVPfGd/blueberries.png" },
        25: { name: "Red Pepper", image: "https://i.postimg.cc/BQqHMbDc/redpepper.png" },
        26: { name: "Lime", image: "https://i.postimg.cc/k5kWcyFB/lime.png" },
        27: { name: "Black Berries", image: "https://i.postimg.cc/hPTVGdNX/blackberries.png" },
        28: { name: "Green Grapes", image: "https://i.postimg.cc/dQ78zXBm/green-grapes.png" },
        29: { name: "Burger", image: "https://i.postimg.cc/13m2Cr16/burger.png" },
        30: { name: "Cheese", image: "https://i.postimg.cc/zXD1z9d6/trophy-03.png" },
        31: { name: "Fries", image: "https://i.postimg.cc/YCMFFP1Q/french-fries.png" },
        32: { name: "Hotdog", image: "https://i.postimg.cc/BbQf4Vgs/hotdog.png" },
        33: { name: "Pizza", image: "https://i.postimg.cc/rwDXKnPj/pizza.png" },
        34: { name: "Pacman Ghost", image: "https://i.postimg.cc/TP7ZGZGf/pacman-ghost.png" },
        35: { name: "Sonic Ring", image: "https://i.postimg.cc/pX1xYGp9/sonic-ring.png" },
        36: { name: "Steak", image: "https://i.postimg.cc/XYjC4zzf/steak.png" },
        37: { name: "Coconut", image: "https://i.postimg.cc/1XbSVygZ/coconut.png" },
        38: { name: "Poop", image: "https://i.postimg.cc/66719KfJ/poop.png" },
        39: { name: "Egg", image: "https://i.postimg.cc/ZRg1jkrg/egg.png" },
        40: { name: "Mango", image: "https://i.postimg.cc/R0NbYNSH/Mango.png" },
        41: { name: "Melon", image: "https://i.postimg.cc/8knkL3WN/melon.png" },
        42: { name: "Red Banana", image: "https://i.postimg.cc/3JsKcvnq/musa-banana.png" },
        43: { name: "Pear", image: "https://i.postimg.cc/L6Y9DTBf/pear.png" },
        44: { name: "Soccer Ball", image: "https://i.postimg.cc/C1yT8vjL/soccer-ball.png" },
        45: { name: "Jackolantern", image: "https://i.postimg.cc/rwMX5hbg/true-jacko.png" },
        46: { name: "Ice", image: "https://i.postimg.cc/mrL8PJmK/ice.png" },
        47: { name: "Red Pudding", image: "https://i.postimg.cc/15kNH2Y5/pudding-red.png" },
        48: { name: "Dirt Block", image: "https://i.postimg.cc/7ZvhtHKK/mc-dirt-px.png" },
        49: { name: "Bread", image: "https://i.postimg.cc/YSMVtPr1/bread.png" },
        50: { name: "Santa", image: "https://i.postimg.cc/kgV7FKDL/santa.png" }
    };


    window.fruit_options = [];
    //debugger
    window.selected_fruit = window.pudding_settings.SelectedPairs;
    window.onscreen_fruit = [];
    window.offscreen_fruit = [];

    // Code to alter snake code here
    if (window.NepDebug) {
        //console.log(document.querySelector('#apple').children)
        console.log(document.querySelector('#apple').children.length);
        //console.log(window.new_fruit)
        //console.log(code)
    }


    window.PopulateOptions = function PopulateOptions() {
        window.fruit_options = [];

        for (let index = 0; index < document.querySelector('#apple').children.length; index++) {
            if (index == 22) {
                index++; // Skip fruit bowl
            }
            window.fruit_options.push(index);
        }

        for (var i = 1; i <= 6; i++) { // Remove selected fruit from new options
            var otherSelectElement = document.getElementById('fruitSelect' + i);
            var selectedFruitIndex = fruit_options.indexOf(parseInt(otherSelectElement.value));
            if (selectedFruitIndex > -1) {
                fruit_options.splice(selectedFruitIndex, 1);
            }
        }

        window.fruit_options = Array.from(new Set(window.fruit_options));
        window.fruit_options = window.sortFruit(window.fruit_options);
    }



    window.PopulateDropdowns = function PopulateDropdowns() {
        // Populate dropdowns

        for (var i = 1; i <= 6; i++) {
            //debugger
            var selectElement = document.getElementById('fruitSelect' + i);

            var dropdown_fruit = selected_fruit[i - 1];
            var option = document.createElement('option');
            option.value = dropdown_fruit;
            if (typeof (dropdown_fruit) === 'undefined') {
                dropdown_fruit = i - 1;
                option.value = dropdown_fruit;
            }

            option.textContent = fruitToText[dropdown_fruit].name;
            option.setAttribute('data-image', fruitToText[dropdown_fruit].image);
            selectElement.innerHTML = '';
            selectElement.appendChild(option);

            for (var j = 0; j < fruit_options.length; j++) {
                if (fruit_options[j] != dropdown_fruit &&
                    fruit_options.indexOf(parseInt(selected_fruit[0])) == -1
                    && fruit_options.indexOf(parseInt(selected_fruit[1])) == -1
                    && fruit_options.indexOf(parseInt(selected_fruit[2])) == -1
                    && fruit_options.indexOf(parseInt(selected_fruit[3])) == -1
                    && fruit_options.indexOf(parseInt(selected_fruit[4])) == -1
                    && fruit_options.indexOf(parseInt(selected_fruit[5])) == -1
                ) {
                    var fruit = fruit_options[j];
                    var option = document.createElement('option');
                    option.value = fruit;
                    option.textContent = fruitToText[fruit].name;
                    option.setAttribute('data-image', fruitToText[fruit].image);
                    selectElement.appendChild(option);
                }
            }
        }
    }



}

window.CustomPortalPairs.alterCode = function (code) {


    // window.PopulateOptions();
    // window.PopulateDropdowns();

    // PopulateOptions();
    // PopulateDropdowns();


    // Function to handle the selection change
    function handleSelection(index) {
        //var selectElement = document.getElementById('fruitSelect' + index);
        //var selectedOption = selectElement.value;
        window.selected_fruit = [];

        // Update Selected Fruit from all dropdowns
        for (var i = 1; i <= 6; i++) {
            var otherSelectElement = document.getElementById('fruitSelect' + i);
            window.selected_fruit.push(otherSelectElement.value)
        }

        PopulateOptions();
        PopulateDropdowns();
    }


    var selectElement = document.getElementById('fruitSelect1');
    selectElement.addEventListener("click", function () {
        window.fruitSelectID = 1
    });
    var selectElement = document.getElementById('fruitSelect2');
    selectElement.addEventListener("click", function () {
        window.fruitSelectID = 2
    });
    var selectElement = document.getElementById('fruitSelect3');
    selectElement.addEventListener("click", function () {
        window.fruitSelectID = 3
    });
    var selectElement = document.getElementById('fruitSelect4');
    selectElement.addEventListener("click", function () {
        window.fruitSelectID = 4
    });
    var selectElement = document.getElementById('fruitSelect5');
    selectElement.addEventListener("click", function () {
        window.fruitSelectID = 5
    });
    var selectElement = document.getElementById('fruitSelect6');
    selectElement.addEventListener("click", function () {
        window.fruitSelectID = 6
    });

    for (var i = 1; i <= 6; i++) {
        var selectElement = document.getElementById('fruitSelect' + i);
        selectElement.addEventListener("change", function () {
            handleSelection(window.fruitSelectID)
            if (window.NepDebug) {
                console.log(window.selected_fruit)
                console.log(window.fruit_options)
            }
        });
    }

    window.custom_pair_call_counter = 0; // Reset every new game

    reset_regex = new RegExp(/;this\.reset\(\)\}\}/)

    counter_reset_code = `window.custom_pair_call_counter = 0;
    $&`

    code = code.assertReplace(reset_regex, counter_reset_code);
    portal_pairs_regex = new RegExp(/this\.[a-zA-Z0-9_$]{1,8}\[[a-zA-Z0-9_$]{1,8}\]\.[a-zA-Z0-9_$]{1,8}=[a-zA-Z0-9_$]{1,8}\(this\)/)
    catchError(portal_pairs_regex, code) // Third {1,8} here should be "type" - since this is where portal pair type is determined
    apple_array = code.match(portal_pairs_regex)[0].split('.')[1].split('[')[0]
    give_portal_type_func = code.match(portal_pairs_regex)[0].split('=')[1]
    apple_type = code.match(portal_pairs_regex)[0].split('.')[2].split('=')[0]
    apple_index = code.match(portal_pairs_regex)[0].split('[')[1].split(']')[0]
    if (window.NepDebug) {

        console.log("Apple array: " + apple_array)
        console.log("portal type func: " + give_portal_type_func)
        console.log("apple type: " + apple_type)
    }

    window.give_custom_pair = function () {
        window.custom_pair_call_counter = window.custom_pair_call_counter + 1;
        if (window.NepDebug) {
            console.log("Giving fruit: " + selected_fruit[window.custom_pair_call_counter - 1].toString())
        }
        return selected_fruit[window.custom_pair_call_counter - 1]
    }

    portal_pairs_code = `
    if(window.pudding_settings.PortalPairs){this.${apple_array}[${apple_index}].${apple_type} = window.give_custom_pair();
    this.${apple_array}[${apple_index}+1].${apple_type} = this.${apple_array}[${apple_index}].${apple_type};}
    else this.${apple_array}[${apple_index}].${apple_type} = ${give_portal_type_func}
    `

    code = code.assertReplace(portal_pairs_regex, portal_pairs_code);

    // Code to alter snake code here
    if (window.NepDebug) {
        //console.log(document.querySelector('#apple').children)
        console.log(document.querySelector('#apple').children.length);
        //console.log(window.new_fruit)
        //console.log(code)
    }

    portal_dice_regex = new RegExp(/if\([a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},2\)&&0<[a-zA-Z0-9_$]{1,8}\.length\)\{/)
    catchError(portal_dice_regex, code)
    apple_dice_array = code.match(portal_dice_regex)[0].split('<')[1].split('.')[0];
    portal_dice_full_regex = new RegExp(/if\([a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},2\)&&0<[a-zA-Z0-9_$]{1,8}\.length\)\{[^]*type}/gm)
    catchError(portal_dice_full_regex, code)
    portal_pairs_dice_code = code.match(portal_dice_full_regex)[0]

    portal_dice_pairs_code = `
    {

        if(window.pudding_settings.PortalPairs){
            window.custom_pair_call_counter = 0;
            for(var apple_index=0;apple_index<${apple_dice_array}.length;apple_index+=2){
                ${apple_dice_array}[apple_index].${apple_type} = window.give_custom_pair();
                ${apple_dice_array}[apple_index+1].${apple_type} = ${apple_dice_array}[apple_index].${apple_type};
            }
        }
        else {

    `

    portal_pairs_dice_code = portal_pairs_dice_code.assertReplace('type}', 'type}}');
    portal_pairs_dice_code = portal_pairs_dice_code.assertReplace('{', portal_dice_pairs_code);

    code = code.assertReplace(portal_dice_full_regex, portal_pairs_dice_code);

    return code;
}
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
    "CustomPortalPairs"];
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
    modIndicator.textContent = 'Pudding Mod - Google Test Version';
  }
  let canvasNode = document.getElementsByClassName('jNB0Ic')[0];
  document.getElementsByClassName('EjCLSb')[0].insertBefore(modIndicator, canvasNode);
};
window.mouseMode = {};

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.mouseMode.runCodeBefore = function() {
  if(window.PuddingMod) {
    window.PuddingMod.runCodeBefore();
  }

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
  if(window.PuddingMod) {
    code = window.PuddingMod.alterSnakeCode(code);
  }
  //lifted tileWidth from apple-snake
  window.tileWidth = code.assertMatch(/[a-z]\.[$a-zA-Z0-9_]{0,8}\.fillRect\([a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,8}\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}),[a-z]\*[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8},[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8},[a-z]\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8}\)/)[1];//wa

  //Head pos, but not properly lerped. k9. Lifted from apple-snake. SnakeDetails contains lots of different properties of the snake.
  [,window.snakeDetails,window.blockyHeadCoord] = code.assertMatch(/this\.([$a-zA-Z0-9_]{0,8})\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8})=\n?[$a-zA-Z0-9_]{0,8}\.clone\(\),/);

  window.coordConstructor = code.assertMatch(/new (_\.[$a-zA-Z0-9_]{0,8})\(1,1\)/)[1];

  window.bodyArray = code.assertMatch(/[a-z]=\n?this\.[$a-zA-Z0-9_]{0,8}\.([$a-zA-Z0-9_]{0,8}\.[$a-zA-Z0-9_]{0,8})\[0\]\.clone\(\),"LEFT"/)[1];

  //Start and end point of snake segment for doing corners with quadraticCurveTo
  [, window.endPoint, window.startPoint] = code.assertMatch(/continue}var ([$a-zA-Z0-9_]{0,8})=[$a-zA-Z0-9_]{0,8}\.clone\(\),([$a-zA-Z0-9_]{0,8})=[$a-zA-Z0-9_]{0,8}\.clone\(\);/);

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

  code = code.replace(funcWithEatOrig, function() {return funcWithEat});

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
  /this\.reset\(\)\}\}/,
  false);

  let [,modeCheck, settingsProperty] = code.assertMatch(/([$a-zA-Z0-9_]{0,8})\(this\.([$a-zA-Z0-9_]{0,8}),6\)/);

  let chosenMode = code.assertMatch(/return [a-z]\.[$a-zA-Z0-9_]{0,8}\?[a-z]\.[$a-zA-Z0-9_]{0,8}\.has\([a-z]\):18===[a-z]\.([$a-zA-Z0-9_]{0,8})&&[a-z]\.[$a-zA-Z0-9_]{0,8}\.has\([a-z]\)\?!0/)[1];

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

};
