(function () {
  
  Array.prototype.customBubbleSort = function (callback) {
    let array = this;
    
    function reArrange(outer, inner) {
      [array[outer], array[inner]] = [array[inner], array[outer]]
    };
    
    for (let outer = 0; outer < array.length; outer++) {
      for (let inner = 0; inner < array.length; inner++) {
        callback ? (callback(array[outer], array[inner]) > 0 && reArrange(outer, inner)) :
            (array[outer] < array[inner] && reArrange(outer, inner));
      }
    }
    return array;
  };
  
})();
