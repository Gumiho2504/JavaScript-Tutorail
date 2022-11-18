let xp = 0;
let health = 100;
let gold = 120;
let currenWeapon = 0;
let fighting;
let monterHealth;
let inventory = ["stick"];
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealth = document.querySelector("#monsterHealth");

const weapons = [
  {
    name: "stick",
    power: 5
  },
  {
    name: "dagger",
    power: 30
  },
  {
    name: "claw hammer",
    power: 50
  },
  {
    name: "sword",
    power: 100
  },
];

const locations = [
  {
    name: "town square",
    "button text": ["Go to store","Go to cave","Fight dragon"],
    "button functions":[goStore,goCave,fightDragon],
    text: "You are in the town square. You see a sign that says \"store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)","Buy weapon (30 gold)","Go to town square"],
    "button functions":[buyHealth,buyWeapon,goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime","Flight fanged beast","Go to town square"],
    "button functions":[fightSlime,fightBeast,goTown],
    text: "You enter the cave. You see some monsters"
  }
]
// initialize buttons
btn1.onclick = goStore;
btn2.onclick = goCave;
btn3.onclick = fightDragon;

function update(location){
  btn1.innerText = location["button text"][0];
  btn2.innerText = location["button text"][1];
  btn3.innerText = location["button text"][2];
  btn1.onclick =location["button functions"][0];
  btn2.onclick = location["button functions"][1];
  btn3.onclick = location["button functions"][2];
  text.innerText = location.text
}

function goTown(){
  update(locations[0]);
}
function goStore(){
  update(locations[1]);
}
function goCave(){
  update(locations[2]);
}

function buyHealth(){
  if(gold >= 10){
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  }else {
    text.innerText = "You don't have enough gold to buy health.";
  }
}
  
function buyWeapon(){
  if (currenWeapon < weapons.length - 1){
    if(gold >= 30){
      gold -= 30;
      currenWeapon ++;
      goldText.innerText = gold;
      newWeapon = weapons[currenWeapon].name;
      text.innerText = "You now have a ." + newWeapon + ".\n";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;

    }else{
      text.innerText = "You do not have enough gold to buy a weapon.";

    }
  }else{
    text.innerText ="You already have the most powerful weapon!";
    btn2.innerText = "Sell weapon for 15 gold";
    btn2.onclick = sellweapon;
  }
  
}
function sellweapon(){
  if(inventory.length > 1){
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currenWeapon + ".";
    text.innerText += " In your inventory you have:" + inventory;
  }else{
    text.innerText = "Don't sell your only weapon!";
  }
}
function fightSlime(){

}
function fightBeast(){

}
function fightDragon(){
  console.log("Fighting to Dragon")
}


