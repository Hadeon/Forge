
$(document).ready(function () {
  loadWeaponButton();
  loadArmorButton();
  loadNameButton();
});

//Append buttons and load appropriate Forges on click
//Weapon Button
function loadWeaponButton() {
  $('#workSpace').append('<div class="appendedButton fade-in fade-in-one" id="weaponButton" onclick="testing(1)"><span>Weapon</span></div>')
  $('#weaponButton').click(function () {
    //console.log('weapon');
    loadWeaponForge();
  });
};
//Armor Button
function loadArmorButton() {
  $('#workSpace').append('<div class="appendedButton fade-in fade-in-one" id="armorButton" onclick="testing(2)"><span>Armor</span></div>')
  $('#armorButton').click(function () {
    //console.log('armor');
    loadArmorForge();
  })
};
//Name Button
function loadNameButton() {
  $('#workSpace').append('<div class="appendedButton fade-in fade-in-one" id="nameButton" onclick="testing(3)"><span>Name</span></div>')
  $('#nameButton').click(function () {
    //console.log('name');
    loadNameForge();
  })
};

//Click on main buttons to load relative Forges --------------------------------
function testing(x) {
  $('#workSpace').empty();
  var buttonNumber = x;
  console.log(buttonNumber)
  if (buttonNumber === 1) {
    loadWeaponForge();
  }
  if (buttonNumber === 2) {
    loadArmorForge();
  }
  if (buttonNumber === 3) {
    loadNameForge();
  }
}

//FORGES AND LOADERS BELOW ------------------------------------------------

//Weapon Forge Loader
function loadWeaponForge() {
  $('#workSpace').append('<div id="close" class="fade-in fade-in-two">X</div>');
  $('#workSpace').append('<div id="forgeSpace" class="fade-in fade-in-one"><div id="forgeTitle">The Weapon Forge</div><select id="weaponType" class="options"><option selected disabled>Weapon Type</option><option value="sword">Sword</option><option value="dagger">Dagger</option><option value="axe">Axe</option><option value="mace">Mace</option><option value="staff">Staff</option><option value="bow">Bow</option><option value="spear">Spear</option></select><select id="weaponTheme" class="options"><option selected disabled>Theme</option><option value="fierce">Fierce</option><option value="mystical">Mystical</option><option value="comical">Comical</option><option value="evil">Evil</option><option value="virtue">Virtuous</option></select></br><button id="forgeButton" class="btn btn-primary">Forge!</button><div id="resultField"><h3 id="result"></h3></div><div>');
  //Close Forge
  $('#close').click(function () {
    $('#workSpace').empty();
    loadWeaponButton();
    loadArmorButton();
    loadNameButton();
  });
  //Fucking hell --------------------------------------------------------------------------------

  //Library of weapon titles & moods above

  var weapons = {
    'sword': ['Blade of ', 'razor', 'Razor of ', 'Foil of ', 'foil', 'Sword of ',
      'brand', 'bane', 'Cutlass of ', 'steel', 'edge', 'slayer', 'reaver', 'thorn',
      'shear', 'cutter', 'Falchion of ', 'rend', 'needle', 'slicer', 'stinger', 'end',
      'soul', 'eater', 'bender', 'song', 'bringer', 'Bane of ', 'Slayer of ', 'hunter',
      'Reaper of ', 'Bringer of ', 'Harbinger of ', 'scale', 'weaver', 'fang', 'talon'],

    'dagger': ['Dagger of ', 'Knife of ', 'Schiv of ', 'edge', 'cleaver', 'razor',
      'rend', 'thorn', 'spine', 'carver', 'needle', 'scar', 'skinner', 'Dirk of ',
      'splinter', 'sting', 'kiss', 'soul', 'eater', 'song', 'bringer', 'Bane of ',
      'hunter', 'ender', 'Reaper of ', 'Bringer of ', 'Harbinger of ', 'weaver', 'fang',
      'talon', 'tooth'],

    'spear': ['Spear of ', 'guard', 'spike', 'pike', 'spear', 'Halberd of ', 'lance',
      'Harpoon of ', 'Javelin of ', 'piercer', 'eternity', 'eternal ', 'destiny', 'ender',
      'fall', 'glaive', 'eater', 'bane', 'Conquerer of ', 'Slayer of ', 'slayer', 'Lance of',
      'vanquisher', 'song', 'bringer', 'Bane of ', 'hunter', 'Piercer of ', 'Reaper of ',
      'Bringer of ', 'Harbinger of ', 'tail', 'thorn', 'razor', 'Impaler of '],

    'axe': ['Axe of ', 'rend', 'Hatchet of ', 'splitter', 'breaker', 'fear', 'bane',
      'cleaver', 'slayer', 'mar', 'shear', 'carver', 'maim', 'strike', 'harvester',
      'cutter', 'axe', 'Betrayer', 'The Carver', 'eater', 'Conqueror of ', 'mourn',
      'bringer', 'Bane of ', 'fall', 'ender', 'killer', 'edge', 'Edge of ', 'Reaper of ',
      'Bringer of ', 'Harbinger of ', 'scale', "Cleaver of ", 'chopper'],

    'mace': ['Mace of ', 'Star of ', 'star', 'mace', 'crusher', 'Cudgel of ', 'club',
      'rod', 'maul', 'mauler', 'pummel', 'breaker', 'bruiser', 'iron', 'harvester',
      'killer', 'strike', 'Punisher of ', 'skull', 'shatterer', 'quake', 'Breaker of ',
      'fall', 'death', 'fist', 'Fist of ', 'eater', 'bane', 'Conquerer of ', 'mourn',
      'bringer', 'Bane of ', 'ender', 'Maul of ', 'Crusher of ', 'Reaper of ', 'Bringer of ',
      'Harbinger of ', 'scale', 'cudgel', 'end', 'rend'],

    'bow': ['Bow of ', 'arrow', 'bolt', 'kiss', 'piercer', 'string', 'Reach of ',
      'reach', 'arm', 'wind', 'shot', 'arch', 'Hand of ', 'Arm of ', 'aim', 'feather',
      'reaver', 'harvester', 'curve', 'whisper', 'wisp', 'Curve of ', 'song',
      'bane', 'killer', 'eye', 'Bane of ', 'Reaper of ', 'Bringer of ', 'Harbinger of ',
      'bringer', 'caller', 'silence', 'Killer of ', 'Eye of ', 'Arm of '],

    'staff': ['Staff of ', 'maker', 'Pole of ', 'Rod of ', 'rod', 'holder', 'Caster of ',
      'guard', 'caster', 'warden', 'binder', 'vex', 'Vexer of ', 'hex', 'wind', 'spirit',
      'boon', 'kiss', 'caller', 'speaker', 'light', 'flare', 'spire', 'breaker', 'bender',
      'song', 'shaper', 'The Reckoning of ', 'warden', 'bringer', 'Bane of ', 'Summoner of ',
      'Reaper of ', 'Bringer of ', 'Harbinger of ', 'wisp', 'snare']
  };
  var pres = {
    'good': ['Sin', 'Sun', 'God', 'Holy', 'Blessed', 'Glimmer', 'Devil', 'Demon', 'Sky',
      'Star', 'Orc', 'Daemon', 'Law', 'Vale', 'Divine', 'Black', 'Hell', 'Righteous',
      'Truth', 'Aegis', 'Aether', 'Ether', 'Justice', "God's ", 'Fire', 'Flame', 'Gleam',
      'Hope', 'Virtue', "The Lord's ", 'Angel',],
    'evil': ["Hell's ", 'Light', 'Angel', 'Death', 'Blood', 'Sin', 'Pain', 'Void', 'Abyss',
      'Shadow', 'Night', 'Fang', 'Nightmare', 'Gore', 'Demon', 'Warg', 'Doom', 'Grim',
      "Death's ", 'Oblivion', 'Suffer', 'Fire', 'Flame', 'Flesh', 'Skull', 'Torment', 'Widow', 'Ice',
      'Chill', 'Scum', 'Filth', 'Spider', 'Rot', 'Famine', 'Brood', 'Gut'],
    'funny': ['Shit', 'Mule', 'Lily', 'Cow', 'Weak', 'Sauce', 'Ox', 'Bunny', 'Useless',
      'What', 'Who', 'Why', 'How', 'That', 'Kitten', 'Puppy', 'Moose', 'Haron', 'Salmon',
      'Fish', 'Apple', 'Pear', 'Foot', 'Finger', 'Happy', 'Derp', 'Dumb', 'Trump', 'Potato',
      'Cat', 'Dog', 'Fingernail', 'Fat', 'Flatulence', 'Constipation', 'Ugly', 'Redneck', "Alcoholic's ",
      'Turtle'],
    'fierce': ['Blood', 'Bone', 'Gore', 'Death', 'Fire', 'Flame', 'Ice', 'Chill', 'Titan',
      'Giant', 'Troll', 'God', 'Beast', 'Legend', 'Hope', 'King', "King's ", "Lord's ",
      'Phantom', 'Ghost', 'Worm', 'Dragon', "Dragon's ", 'Lion', 'Eternity', 'Skull',
      'Flesh', 'Wild', 'Storm', "Warrior's ", 'Wolf', 'Tiger', 'Pack', 'Wild', 'Warrior',
      'Venom', 'Spider', 'Char'],
    'mystical': ['Aegis', 'Mage', 'Wisdom', 'Mind', 'Soul', 'Ether', 'Arcane', 'Elf',
      'Wild', 'Forest', 'Water', 'Ocean', 'River', 'Elm', 'Pine', 'Wood', 'Mountain', 'World',
      'Earth', 'Sky', 'Cloud', 'Storm', 'Thunder', 'Lightning', 'Fire', 'Elemental',],
    'Charming': []
  };
  var posts = {
    'good': ['Heaven', 'Holiness', 'The Sky', 'Stars', 'The Holy', 'The Sun', 'The Shining',
      'The Blessed', 'God', 'The Light', 'Justice', 'Righteousness', 'Judgement', 'Sin',
      'The Just', 'The Divine', 'Hope', 'The Angels', 'The Flame', 'The Holy Fire', "God's Eye", 'Blessings'],
    'evil': ['The Sadistic', 'Hell', 'Satan', 'Orckin', 'The Black', 'The Abyss', 'The Void',
      'Nightmares', 'Torment', 'The Apocalypse', 'The Damned', 'Suffering', 'Filth', 'Hearts',
      'Souls', 'The Unclean', 'Ash', 'Oblivion', 'Skulls', 'Bones', 'Blood', 'Death', 'Gore', 'Rot', 'Decay', 'Famine',
      'Widows', 'The Dead', 'Bloodlust', 'The Fallen'],
    'funny': ['Derp', 'The Fish', 'Salmon', 'Kittens', 'Puppies', 'Feet', 'Dirty Socks',
      'The Elderly', 'Farts', 'Someone', 'Somebody', 'Something', 'Awesomesauce', 'Failure',
      'Pointlessness', 'Uselessness', 'Stupidity', 'Ted Cruz', 'Donald Trump', 'Constipation',
      'Tripping', 'Sheep-herding', 'Mice', 'Turtles'],
    'fierce': ['Blood', 'Bone', 'Kings', "Lords", 'Strength', 'Mountains', 'Thunder',
      'Legends', 'Wolves', 'Hunters', 'The Hunt', 'The Wild', 'Lions', 'The Bear',
      'The Dragon', 'Foes', 'Ash', 'Fire', 'Flame', 'Burning', 'The Untamed', 'The Warrior'],
    'Mystical': ['Aegis', 'Intellect', 'The Aether', 'The Arcane', 'Wisdom', 'God',
      'The Mind', 'The Soul', 'The Eternal', 'Enigmas', 'The Elements', 'Beyond', 'The Wild',
      'The Wise', 'The Cunning'],
    'Charming': []
  };

  //Variables for Selected Values to load append to

  var weaponType = '';
  var weaponTheme = '';

  //Weapon Type Selection

  $('#weaponType').on('change', function () {
    weaponType = (this.value);
    console.log(weaponType);
  });

  //Weapon Theme Selection

  $('#weaponTheme').on('change', function () {
    weaponTheme = (this.value);
  });

  //Randomly generate on click

  $('#forgeButton').on('click',
    function () {
      $("#resultField").empty();
      var wpnn = weapons[weaponType][Math.floor(Math.random() * weapons[weaponType].length)];
      var pre = pres[weaponTheme][Math.floor(Math.random() * pres[weaponTheme].length)];
      var post = posts[weaponTheme][Math.floor(Math.random() * posts[weaponTheme].length)];
      var result = '';
      if (wpnn[0] == wpnn[0].toUpperCase() && wpnn[-1] != ' ') {
        result = wpnn + post;
      }
      if (wpnn[0] == wpnn[0].toLowerCase()) {
        result = pre + wpnn;
      }
      $('#resultField').append(result)
    }
  );

  //--------------------------------------------------------------------------------------
  //Need to reformat the logic
}
//Armor Forge Loader
function loadArmorForge() {
  $('#workSpace').append('<div id="close" class="fade-in fade-in-two">X</div>');
  $('#workSpace').append('<div id="forgeSpace" class="fade-in fade-in-one"><div id="forgeTitle">The Armor Forge</div><select id="armorType" class="options"><option selected disabled>Armor Type</option><option value="light">Light</option><option value="Medium">Medium</option><option value="heavy">Heavy</option></select><select id="armorPiece" class="options"><option selected disabled>Armor Piece</option><option value="helm">Helm</option><option value="chest">Chest</option><option value="bracers">Bracers</option><option value="cloak">Cloak</option><option value="gloves">Gloves</option><option value="leggings">Leggings</option><option value="boots">Boots</option></select><select id="armorTheme" class="options"><option selected disabled>Theme</option><option value="fierce">Fierce</option><option value="mystical">Mystical</option><option value="comical">Comical</option><option value="evil">Evil</option><option value="virtue">Virtuous</option></select></br><button id="forgeButton" class="btn btn-primary">Forge!</button><h2 id="result"></h2><div>');
  //Close Forge
  $('#close').click(function () {
    $('#workSpace').empty();
    loadWeaponButton();
    loadArmorButton();
    loadNameButton();
  });
}
//Name Forge Loader
function loadNameForge() {
  $('#workSpace').append('<div id="close" class="fade-in fade-in-two">X</div>');
  $('#workSpace').append('<div id="forgeSpace" class="fade-in fade-in-one"><div id="forgeTitle">The Name Forge</div><select id="nameRace" class="options"><option selected disabled>Race</option><option value="human">Human</option><option value="elf">Elf</option><option value="dwarf">Dwarf</option><option value="halfling">Halfling</option><option value="orc">Orc</option></select><select id="nameGender" class="options"><option selected disabled>Gender</option><option value="male">Male</option><option value="female">Female</option></select></br><button id="forgeButton" class="btn btn-primary">Forge!</button><div id="resultField"><h2 id="result"></h2></div></div>');
  //Close Forge
  $('#close').click(function () {
    $('#workSpace').empty();
    loadWeaponButton();
    loadArmorButton();
    loadNameButton();
  });
  //Library of Naming Conventions ---------------------------------------------------------------------
  // Prefixes for First Names
  humanPre = {
    'male': ['Thom', 'Ja', 'Te', 'Ar', 'Ed', 'Bre', 'Bra', 'Ben', 'Ry', 'Ch', 'Der', 'Mich', 'Dam', 'Eric', 'Jan', 'Bar', 'Cha', 'Mit', 'Wil', 'Ell', 'Nic', 'Aar', 'Ad', 'Rhyn', 'Jae', 'Dor', 'Alla', 'Al', 'Era', 'Ave', 'Pal', 'Paul'],
    'female': ['Mer', 'Dar', 'Jan', 'Mar', 'Nat', 'El', 'Dan', 'Ka', 'Cai', 'Lau', 'Lou', 'Den', 'San', 'Zan', 'Van']
  };
  elfPre = {
    'male': ['Aes', 'Rel', 'Cae', 'Aed', 'Var', 'Del', 'Fal', 'Ol', 'Erv', 'Er', 'Ry', 'Rae', 'Cav', 'Err', 'Par', 'Far', 'Zole', 'Am', 'Al', 'Corv'],
    'female': ['Bel', 'Aeo', 'Cae', 'Aer', 'Sae', 'Sar', 'Car', 'Orl', 'Del', 'Dae', 'Yen', 'Vyn', 'Syl', 'Sorv', 'Shae', 'Esp']
  };
  orcPre = {
    'male': ['Korg', 'Ag', 'Bol', 'Bac', 'Mag', 'Norg', 'Kad', 'Gal', 'Dor', 'Dol', 'Ro', 'So', 'Mog', 'Ug', 'Cro', 'Lug'],
    'female': ['NULL']
  };
  dwarfPre = {
    'male': ['NULL'],
    'female': ['NULL']
  };
  halfingPre = {
    'male': ['NULL'],
    'female': ['NULL']
  };
  // Suffixes for First Names
  humanPost = {
    'male': ['mon', 'son', 'sen', 'en', 'aer', 'on', 'ek', 'ed', 'mir', 'ir', 'id', 'ron', 'don', 'den', 'car', 'nir', 'vir', 'sir', 'thar', 'then', 'essa', 'mond', 'mend', 'don', 'den', 'len', 'car', 'card', 'ward', 'thar', 'dar'],
    'female': ['elle', 'ella', 'el', 'ette', 'ta', 'ya', 'ie', 'lyn', 'lin', 'anne', 'esse', 'sha', 'sa', 'ra', 'tha', 'emma', 'line', 'leen', 'essa', 'alle', 'rella', 'etta', 'lyse']
  };
  elfPost = {
    'male': ['ylon', 'lynar', 'thyr', 'asyn', 'aer', 'vyn', 'sar', 'rem', 'vyr', 'siir', 'viir', 'diir', 'thiir'],
    'female': ['wyn', 'lyn', 'vyn', 'lya', 'lys', 'ryn', 'rel', 'yn', 'ael', 'raene', 'thyll', 'liin', 'elyon', 'viis']
  };
  orcPost = {
    'male': ['gesh', 'gath', 'mar', 'geth', 'nnar', 'plath', 'gavar', 'ug', 'lug', 'og', 'bog', 'omag', 'zag', 'zig', 'zan'],
    'female': ['NULL']
  };
  dwarfPost = {
    'male': ['NULL'],
    'female': ['NULL']
  };
  halfingPost = {
    'male': ['NULL'],
    'female': ['NULL']
  };

  //Variables for Selected Values to load append to

  var  gender;
  var racePrefix;
  var raceSuffix;

  //Weapon Type Selection

  $('#nameGender').on('change', function () {
    gender = (this.value);
    console.log(gender);
  });

  //Weapon Theme Selection

  $('#nameRace').on('change', function () {
    if (this.value === 'human') {
      racePrefix = humanPre;
      raceSuffix = humanPost;
    };
    if (this.value === 'elf') {
      racePrefix = elfPre;
      raceSuffix = elfPost;
    };
    if (this.value === 'orc') {
      racePrefix = orcPre;
      raceSuffix = orcPost;
    };
    if (this.value === 'dwarf') {
      racePrefix = dwarfPre;
      raceSuffix = dwarfPost;
    };
    if (this.value === 'halfling') {
      racePrefix = halflingPre;
      raceSuffix = halflingPost;
    };
  });

  //Randomly generate on click

  $('#forgeButton').on('click',
    function () {
      $("#resultField").empty();
      var racePre = racePrefix[gender][Math.floor(Math.random() * racePrefix[gender].length)];
      var racePost = raceSuffix[gender][Math.floor(Math.random() * raceSuffix[gender].length)];
      var result = racePre + racePost;
      console.log(result);
      $('#resultField').append(result)
    }
  );
};

//Button Click Change Color
$('#forgeButton').mousedown(function () {

});

$('#forgeButton').mouseup(function () {

});