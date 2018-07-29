import { expect, assert } from 'chai';

import Bomber from '../main/Bomber';
import Cell from '../main/Cell';

describe('Bomberman', () => {

  it('steps into a cell which is empty then it moves in', () => {
    let bornPlace = new Cell();
    let bomber = new Bomber( bornPlace );
    let here = new Cell();
    
    bomber.stepsIn( here );
    
    assert.equal( bomber.isIn(here), true);
  });
  
});