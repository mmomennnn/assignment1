var createCounter = function(init) {
  const reset = init
    var o={
      value : init,
      increment : function(){
        this.value++;
      },
      decrement : function(){
        this.value--;
      },
      reset : function(){
        this.value=reset;
      }
    }
   return o; 
};
const counter = createCounter(0);
console.log(counter.increment()); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0