
  $(document).ready(function(){
    loadWeaponButton();
    loadArmorButton();
    loadNameButton();
  });

  //Append buttons and load appropriate Forges on click
  //Weapon Button
  function loadWeaponButton(){
  $('#workSpace').append('<div class="appendedButton fade-in fade-in-one" id="weaponButton" onclick="testing(1)"><span>Weapon</span></div>')
  $('#weaponButton').click(function(){
    //console.log('weapon');
    loadWeaponForge();
  });
  };
  //Armor Button
  function loadArmorButton(){
  $('#workSpace').append('<div class="appendedButton fade-in fade-in-one" id="armorButton" onclick="testing(2)"><span>Armor</span></div>')
  $('#armorButton').click(function(){
    //console.log('armor');
    loadArmorForge();
  })
  };
  //Name Button
  function loadNameButton(){
  $('#workSpace').append('<div class="appendedButton fade-in fade-in-one" id="nameButton" onclick="testing(3)"><span>Name</span></div>')
  $('#nameButton').click(function(){
    //console.log('name');
    loadNameForge();
  })
  };

  //Click on main buttons to load relative Forges --------------------------------
  function testing(x){
    $('#workSpace').empty();
    var buttonNumber = x;
    console.log(buttonNumber)
    if(buttonNumber === 1){
      loadWeaponForge();
    }
    if(buttonNumber === 2){
      loadArmorForge();
    }
    if(buttonNumber === 3){
      loadNameForge();
    }
  }

  //FORGES AND LOADERS BELOW ------------------------------------------------

  //Weapon Forge Loader
  function loadWeaponForge(){
    $('#workSpace').append('<div id="close" class="fade-in fade-in-two">X</div>');
    $('#workSpace').append('<div id="forgeSpace" class="fade-in fade-in-one"><div id="forgeTitle">The Weapon Forge</div><select id="weaponType" class="options"><option selected disabled>Weapon Type</option><option value="sword">Sword</option><option value="dagger">Dagger</option><option value="axe">Axe</option><option value="mace">Mace</option><option value="staff">Staff</option><option value="bow">Bow</option><option value="spear">Spear</option></select><select id="weaponTheme" class="options"><option selected disabled>Theme</option><option value="fierce">Fierce</option><option value="mystical">Mystical</option><option value="comical">Comical</option><option value="evil">Evil</option><option value="virtue">Virtuous</option></select></br><button class="btn btn-primary">Forge!</button><div>');
    //Close Forge
      $('#close').click(function(){
      $('#workSpace').empty();
      loadWeaponButton();
      loadArmorButton();
      loadNameButton();
    });
  }
  //Armor Forge Loader
  function loadArmorForge(){
    $('#workSpace').append('<div id="close" class="fade-in fade-in-two">X</div>');
    $('#workSpace').append('<div id="forgeSpace" class="fade-in fade-in-one"><div id="forgeTitle">The Armor Forge</div><select id="armorType" class="options"><option selected disabled>Armor Type</option><option value="light">Light</option><option value="Medium">Medium</option><option value="heavy">Heavy</option></select><select id="armorPiece" class="options"><option selected disabled>Armor Piece</option><option value="helm">Helm</option><option value="chest">Chest</option><option value="bracers">Bracers</option><option value="cloak">Cloak</option><option value="gloves">Gloves</option><option value="leggings">Leggings</option><option value="boots">Boots</option></select><select id="armorTheme" class="options"><option selected disabled>Theme</option><option value="fierce">Fierce</option><option value="mystical">Mystical</option><option value="comical">Comical</option><option value="evil">Evil</option><option value="virtue">Virtuous</option></select></br><button class="btn btn-primary">Forge!</button><div>');
    //Close Forge
      $('#close').click(function(){
      $('#workSpace').empty();
      loadWeaponButton();
      loadArmorButton();
      loadNameButton();
    });
  }
  //Name Forge Loader
  function loadNameForge(){
    $('#workSpace').append('<div id="close" class="fade-in fade-in-two">X</div>');
    $('#workSpace').append('<div id="forgeSpace" class="fade-in fade-in-one"><div id="forgeTitle">The Name Forge</div><select id="nameRace" class="options"><option selected disabled>Race</option><option value="human">Human</option><option value="elf">Elf</option><option value="dwarf">Dwarf</option><option value="halfling">Halfling</option><option value="orc">Orc</option></select><select id="nameGender" class="options"><option selected disabled>Gender</option><option value="male">Male</option><option value="female">Female</option></select></br><button class="btn btn-primary">Forge!</button><div>');
    //Close Forge
      $('#close').click(function(){
      $('#workSpace').empty();
      loadWeaponButton();
      loadArmorButton();
      loadNameButton();
    });
  }

  //Button Click
  $('.btn').mousedown(function(){

  });
