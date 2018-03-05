describe('Bubble Sort', function() {

    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
      });

    it('handles an array with less than two elements', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('sorts an array', function(){
        expect( bubbleSort([2, 1, 3, 0, -3, -5]) ).toEqual( [-5, -3, 0, 1, 2, 3] );
    });
    
});
