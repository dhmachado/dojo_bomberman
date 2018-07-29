import Nobody from './Nobody.js';

class Cell {

    constructor(occupant = new Nobody()) {
        this.occupant = occupant;
    }

    releasedBy(something) {
        this.occupant = new Nobody();
    }

    reclaimedBy(something) {
        this.occupant = this.occupant.bumpsInto(something);
    }

}

export default Cell;