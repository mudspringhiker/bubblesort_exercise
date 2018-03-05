describe('Bubble Sort', function() {

    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
      });

    it('passes this array', function() {
        expect(bubbleSort([1,2,3]).toEqual([1,2,3]));
    });

    it('gives a sorted array', function() {
        expect(bubbleSort([2, 1, 3, 0]).toEqual([0, 1, 2, 3]));
    });
});
