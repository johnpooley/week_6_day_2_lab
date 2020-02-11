const assert = require('assert')
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('Decorator', function() {

  let decorator;
  let paint1;
  let paint2;
  let room1;
  let room2;

  beforeEach(function(){
    decorator = new Decorator();
    paint1 = new Paint(4);
    paint2 = new Paint(2);
    room1 = new Room(1);
    room2 = new Room(5);
  });

  it('should start with no stock', function(){
    const actual = decorator.paint_stock;
    assert.deepEqual(actual, []);
  });

  it('should be able to add a can of paint to paint stock', function(){
    decorator.addPaint(paint1);
    const actual = decorator.paint_stock;
    assert.deepEqual(actual, [paint1]);
  });

  it('should be able to calculate the total quanitity of paint in stock', function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    const actual = decorator.stockCount();
    assert.strictEqual(actual, 6);
  });

  it('should be able to calculate if it has enough paint for a room', function(){
    decorator.addPaint(paint1);
    const actual = decorator.hasEnoughPaint(room1);
    assert.strictEqual(actual, 'yes');
  })
  it('should return no if it has too little stock', function(){
    decorator.addPaint(paint1);
    const actual = decorator.hasEnoughPaint(room2);
    assert.strictEqual(actual, 'no');
  })
it('should be able to mark a room as painted', function(){
  decorator.addPaint(paint1);
  const roomTest = decorator.hasEnoughPaint(room1);
  decorator.paintsRoom(roomTest, room1);
    const actual = room1.painted;
  assert.strictEqual(actual, true)
})

});
