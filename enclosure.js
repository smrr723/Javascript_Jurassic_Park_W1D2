var Enclosure = function(name){
   this.dinosaurs = [];
   this.name = name;
}

Enclosure.prototype = {
   addDino: function(dinosaur){
      this.dinosaurs.push(dinosaur);
   },

   removeAll: function(type){
      for(var i = this.dinosaurs.length - 1; i >= 0; i--) {

         if(this.dinosaurs[i].type === type) {
            this.dinosaurs.splice(i, 1);
         }
   }
},
   numberOfDinosaurs: function(){
      return this.dinosaurs.length;
   },
   moreThanOneOffspring: function(){
      var dinoCount = 0;
      for(dino of this.dinosaurs){
         if(dino.currentOffspring > 2){
            dinoCount += 1;
         }
      }
      return dinoCount;

   }
};

module.exports = Enclosure;
