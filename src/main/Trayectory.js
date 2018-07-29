import Bomb from './Bomb';

class Trayectory {

    constructor(steps) {
        this.steps = steps;
        this.bomb = new Bomb();
    }

    swishs() {
        this.steps = this.steps.slice(1);
        return this.bomb.ticks();
    }

}

export default Trayectory;