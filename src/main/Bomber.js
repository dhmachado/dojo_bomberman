import Bomb from './Bomb';
import Trayectory from './Trayectory';

class Bomber {
  
  constructor(bornPlace) {
    bornPlace.reclaimedBy(this);
    this.currentLocation = bornPlace;

    this.lives = 100;
  }

  stepsIn(placeToMoveInto) {
    this.stepsOut(this.currentLocation);
    placeToMoveInto.reclaimedBy(this);
    this.currentLocation = placeToMoveInto;
    return this;
  }

  stepsOut(placeToMoveOut) {
    placeToMoveOut.releasedBy(this);
  }

  leavesBomb() {
    return new Bomb(this.currentLocation);
  }

  throwsBomb(targetedCell) {
    return new Trayectory([this.currentLocation, targetedCell]);
  }

  bumpsIntoBagulaa(bagulaa) {
    this.lives = 0;
  }

  isDead() {
    return this.lives <= 0;
  }

  isAlive() {
    return !this.isDead();
  }

  isIn(place) {
    return true;
  }

}

export default Bomber;