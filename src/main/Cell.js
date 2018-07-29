import Nobody from './Nobody.js';

class Cell {

    constructor(occupant = new Nobody()) {
        this.occupant = occupant;
    }

    releasedBy() {
        this.occupant = new Nobody();
    }

    reclaimedBy(something) {
        this.occupant = this.occupant.bumpsInto(something);
    }

    isEmpty() {
        return this.occupant.isEqual(new Nobody());
    }

    asArray() {
        return [this];
    }

}

export default Cell;