// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`
    } 
  }
  battleCry() {
      return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if(this.health > 0) {
      return `A Saxon has deid in combat`;
    }
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addviking(viking) {
    this.vikingArmy.push(viking);
  }
  addsaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const randomSaxonIndex = Math.floor(Math.random()* this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomVikingIndex = Math.floor(Math.random()* this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomVikingDmg = randomViking.strength;
    const saxonDamageReceive = randomSaxon.receiveDamage(randomVikingDmg);
    if (randomSaxon.health <= 0){
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return saxonDamageReceive;
  }
  saxonAttack(){
    const randomVikingIndex = Math.floor(Math.random()* this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxonIndex = Math.floor(Math.random()* this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomSaxonDmg = randomSaxon.strength;
    const vikingDamageReceive = randomViking.receiveDamage(randomSaxonDmg);
    if (randomViking.health <= 0){
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return vikingDamageReceive;
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
