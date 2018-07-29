class Explosion {

    constructor(epicenter) {
        this.epicenter = epicenter;
    }

    damages(cellsAffected) {
        cellsAffected.asArray().forEach(cell => { cell.releasedBy(); });;
    }

}

export default Explosion;