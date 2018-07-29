import Nobody from './Nobody.js';

class Cell {

    constructor() {
        this.occupant = new Nobody();
    }

    releasedBy(something) {
        this.occupant = new Nobody();
    }

    reclaimedBy(something) {
        this.occupant = this.occupant.bumpsInto(something);
    }

}

export default Cell;