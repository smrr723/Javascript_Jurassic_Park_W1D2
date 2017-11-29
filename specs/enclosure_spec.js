var assert = require("assert");
var Dinosaur = require("../dinosaur.js");
var Enclosure = require("../enclosure.js");

describe("Enclosure", function(){

   beforeEach("Setup", function(){
      dino002 = new Dinosaur("Raptor", 6, 6);
      dino003 = new Dinosaur("Raptor", 6, 6);
      dino004 = new Dinosaur("Raptor", 6, 6);
      dino005 = new Dinosaur("T-Rex", 1, 1);
      dino006 = new Dinosaur("Triceratops", 1, 1);

      raptorPaddock = new Enclosure()
   })

   it("should start empty", function(){
      assert.strictEqual(raptorPaddock.numberOfDinosaurs(), 0);
   })

   it("should add dinosaur", function(){
      raptorPaddock.addDino(dino002);
      raptorPaddock.addDino(dino003);

      assert.strictEqual(raptorPaddock.numberOfDinosaurs(), 2)
   })

   it("should remove all dinosaurs by type", function(){
      raptorPaddock.addDino(dino002);
      raptorPaddock.addDino(dino003);
      raptorPaddock.addDino(dino004);
      raptorPaddock.removeAll("Raptor");
      assert.strictEqual(raptorPaddock.numberOfDinosaurs(), 0);
   })

   it("should get all dinosaurs with more than one offspring", function(){
      raptorPaddock.addDino(dino002);
      raptorPaddock.addDino(dino003);
      raptorPaddock.addDino(dino004);
      raptorPaddock.addDino(dino005);
      raptorPaddock.addDino(dino006);
      assert.strictEqual(raptorPaddock.moreThanOneOffspring(), 3)
   })
});
