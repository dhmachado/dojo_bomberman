import Explosion from './Explosion';

class Bomb {

    constructor(releasePlace) {
        this.releasePlace = releasePlace;
        this.expiration = 2;
    }

    ticks() {
        this.expiration--;
        
        if(this.expiration == 0) {
            return new Explosion(this.releasePlace);
        }

        return this;
    }

}

export default Bomb;