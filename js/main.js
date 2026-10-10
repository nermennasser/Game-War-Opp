function character(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;
  // this.attackBtn = document.getElementById(`${this.name}-attack`);
  // this.makeheathBtn = document.getElementById(`${this.name}-make-health`);
  // this.progress = document.querySelector(`.${this.name}-health span`);
  // this.aliveParg = document.querySelector(`.${this.name}-alive`);
  this.elements = new UIElements(this.name);
}

function UIElements(name) {
  //
  this.attackBtn = document.getElementById(`${name}-attack`);
  this.makeheathBtn = document.getElementById(`${name}-make-health`);
  this.progress = document.querySelector(`.${name}-health span`);
  this.aliveParg = document.querySelector(`.${name}-alive`);
}

character.prototype.attack = function (opponent) {
  if (opponent.health > 0) {
    opponent.health -= this.strength;
  }
  if (opponent.health <= 0) {
    opponent.elements.attackBtn.remove();
    opponent.elements.makeheathBtn.remove();
    opponent.elements.aliveParg.innerHTML = `${opponent.name}is died`;
  }
  opponent.elements.progress.style.width = `${opponent.health}%`;
};
character.prototype.status = function () {
  console.log(`name:${this.name} + " " health${this.health}-health`);
};
character.prototype.behealth = function () {
  if (this.health < 100) {
    this.health += 10;
    this.elements.progress.style.width = `${this.health}%`;
  }
  if (this.health > 100) {
    this.health = 100;
  }
};

///........
let nartoo = new character("nartoo", 10, 100);
let superman = new character("superman", 20, 100);
nartoo.elements.attackBtn.addEventListener("click", function () {
  nartoo.attack(superman);
  superman.status();
});
superman.elements.attackBtn.addEventListener("click", function () {
  superman.attack(nartoo);
  nartoo.status();
});
superman.elements.makeheathBtn.addEventListener("click", function () {
  superman.behealth();
});
nartoo.elements.makeheathBtn.addEventListener("click", function () {
  nartoo.behealth();
});
