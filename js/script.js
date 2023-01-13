var listSave = [
  {
    direc: "tabs/Sparkle.pdf",
    description: "Sparkle-Radwimps",
    gender: "Anime",
    creator: 0,
  },
  {
    direc: "tabs/KATAWARE-DOKI.pdf",
    description: "Kataware Doki-Radwimps",
    gender: "Anime",
    creator: 0,
  },
  {
    direc: "tabs/suzume-no-tojimari.pdf",
    description: "Suzume-Radwimps",
    gender: "Anime",
    creator: 0,
  },
  {
    direc: "tabs/The-Weight-of-the-World.pdf",
    description: "Weight of the world-Nier Automata",
    gender: "Game",
    creator: 0,
  },
  {
    direc: "tabs/City-Ruins.pdf",
    description: "City Ruins-Nier Automata",
    gender: "Game",
    creator: 0,
  },
  {
    direc: "tabs/i-really-want-to-stay-at-your-house.pdf",
    description: "I really want to stay at your house-CyberPunk EdgeRunners",
    gender: "Anime",
    creator: 0,
  },
  {
    direc: "tabs/chainsaw-man-kick-back.pdf",
    description: "Kick back-Chainsaw Man",
    gender: "Anime",
    creator: 0,
  },
  {
    direc: "tabs/Coffin-Dance-TABS.pdf",
    description: "Astronomia (Coffin Dance Meme Song)",
    gender: "POP",
    creator: 0,
  },
];
var list;

var infoCreadores = [
  {
    name: "vvxoFingerstyleTab",
    direc: "https://www.youtube.com/@vvxoFingerstyleTab",
    icon: "img/creators/vvxoFingerstyleTab.png",
  },
];
var gendersList = [
  { type: "Anime", active: false },
  { type: "Game", active: false },
  { type: "POP", active: false },
];
var filter_Gender = false;
var text_Genders = "";

var pos = 0;

function activeGender(i) {
  if (gendersList[i].active == false) {
    gendersList[i].active = true;
    document.getElementById("btn-" + i).classList.add("btnAble");
  } else {
    gendersList[i].active = false;
    document.getElementById("btn-" + i).classList.remove("btnAble");
  }
  loadSite(0);
}


function loadSite(k) {
  pos = k;
  list = listSave;
  filter_Gender = false;
  text_Genders = "";

  verificarFilterGender();
  if (filter_Gender == true) 
    filterGender();

  filterList();
  showList();
}
function verificarFilterGender() {
  for (var i = 0; i < gendersList.length; i++) {
    if (gendersList[i].active == true) {
      text_Genders += gendersList[i].type + " ";
      filter_Gender = true;
    }
  }
}
function filterGender() {
    var nuevaLista = [];
    for (var i = 0; i < list.length; i++) {
      temp = list[i].gender;
      if (text_Genders.includes(temp)) {
        nuevaLista.push(list[i]);
      }
    }
    list = nuevaLista;
}

function filterList() {
  var cad = document.querySelector("#Search").value.toLocaleLowerCase();
  var nuevaLista = [];

  if (cad !== "") {
    for (var i = 0; i < list.length; i++) {
      temp = list[i].description.toLocaleLowerCase();
      if (temp.includes(cad)) {
        nuevaLista.push(list[i]);
      }
    }
    list = nuevaLista;
  }
}


function showList() {
  let text = "";
  var count = 0;
  for (var i = 12 * pos; i < list.length && count < 12; i++) {
    count++;
    text += `
    <a class="${
      i == 0 + 12 * pos
        ? "first"
        : i == list.length - 1 || (pos + 1) * 12 - 1 == i
        ? "last"
        : ""
    }" href=${list[i].direc}>${i + 1}- ${
      list[i].description
    }</a>
        `;
  }
  document.getElementById("collection").innerHTML = text;

  let iterators = "";
  for (var i = 0; i < list.length; i += 12) {
    iterators += `<a class="${
      pos + 1 == 1 + i / 12 ? "pos" : ""
    }" onclick="loadSite(${i / 12})">${1 + i / 12}</a>-`;
  }
  iterators = iterators.substring(0, iterators.length - 1);
  document.getElementById("numbers").innerHTML = iterators;
}

function switchList(i) {
  if (pos + i >= 0 && pos + i < list.length / 12) {
    loadSite(pos + i);
  }
}