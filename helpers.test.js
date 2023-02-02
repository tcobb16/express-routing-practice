const {
    findMean,
    findMedian,
    findMode,
  } = require("./helpers");
  
  describe("#findMedian", function(){
    it("finds the median", function(){ 
      expect(findMedian([0,2,4,7,8])).toEqual(4)
    })
  })
  
  describe("#findMean", function () {
    it("finds the mean", function () { 
      expect(findMean([4,6,7,10])).toEqual(6.75)
    })
  })
  
  describe("#findMode", function () {
    it("finds the mode", function () { 
      expect(findMode([2,5,5,5,8,10])).toEqual(5)
    })
  })