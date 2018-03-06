describe('Split Array function', function() {

    it('is able to split an array into two halves', function(){
        expect( split([ 1,2, 3, 4, 5]) ).toEqual( [ [1, 2, 3], [4, 5]] );
      });

});

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
       expect( merge( [4], [3] ) ).toEqual( [3, 4] );
    });

    it('is able to merge two sorted arrays into one sorted array', function(){
      expect( merge( [2, 4], [1, 3] ) ).toEqual( [1, 2, 3, 4] );
   });

  describe('Mergesort function', function() {
    it('is able to sort elements in an array', function() {
      expect( mergeSort([4, 7, 3, 1, 9, 5, 2])).toEqual([1, 2, 3, 4, 5, 7, 9]);
    });
  });
});
