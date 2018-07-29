import { expect, assert } from 'chai';

import Bomber from '../main/Bomber';
import Cell from '../main/Cell';
import Brick from '../main/Brick';
import Bagulaa from '../main/Bagulaa';

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

  it("steps into a cell which is busy with an enemy then it dies", () => {
    let bomber = new Bomber( new Cell() );
    let here = new Cell( new Bagulaa() );
    
    bomber.stepsIn( here );
    
    assert.equal( bomber.isDead(), true);
    assert.equal( bomber.isAlive(), false);
  });

  it("leaves a boom next to a brick, the boom explotes and the bricks disappears", () => {
    let bomber = new Bomber(new Cell());
    let cellWithBrick = new Cell(new Brick());

    let bomb = bomber.leavesBomb();
    bomb.ticks();
    
    let explotion = bomb.ticks();
    explotion.damages(cellWithBrick);

    assert.isTrue(cellWithBrick.isEmpty());
  });

});