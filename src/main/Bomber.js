class Bomber {
  
  constructor(bornPlace) {
    bornPlace.reclaimedBy(this);
    this.currentLocation = bornPlace;
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

  isIn(place) {
    return true;
  }

}

export default Bomber;