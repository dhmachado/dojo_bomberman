import { expect, assert } from 'chai';

import Bomber from '../main/Bomber';
import Cell from '../main/Cell';
import Brick from '../main/Brick';

describe('Bomberman', () => {

  it('steps into a cell which is empty then it moves in', () => {
    let bomber = new Bomber(new Cell());
    let here = new Cell();
    
    bomber.stepsIn(here);
    
    assert.equal(bomber.isIn(here), true);
  });
  
  it("steps into a cell which is busy with an object then it doesn't move and throw an exception", () => {
    let bomber = new Bomber(new Cell());
    let here = new Cell(new Brick());
    
    assert.throws( () => { bomber.stepsIn(here); });
  });

});