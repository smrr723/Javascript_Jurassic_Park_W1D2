var assert = require("assert");
var Dinosaur = require('../dinosaur.js')

describe("Dinosaur", function(){

   beforeEach("Setup", function(){
      dino001 = new Dinosaur("T-Rex", 1, 0);
   })

   it("should have a type", function(){
      assert.strictEqual(dino001.type, "T-Rex")
   })

   it("should have number of offspring per year", function(){
      assert.strictEqual(dino001.offspringRate, 1);
   })

})
