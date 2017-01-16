// Rotate an nxn matrix by 90 degrees clockwise and in place
// 1 2 3      7 4 1
// 4 5 6  =>  8 5 2
// 7 8 9      9 6 3
// S: O(1)

// Array of arrays each array will be a row and its
// index will be its column
"use strict";

var matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
  
  ];
var matrixOneByOne = [
  [ 1, 2 ],
  [ 3, 4 ]
]

var Rotate = {
  
}

Rotate.run = function ( targetMatrix ){
  
  function swap( a, b ){
    var j = targetMatrix[a[0]][a[1]];
    targetMatrix[a[0]][a[1]] = targetMatrix[b[0]][b[1]];
    targetMatrix[b[0]][b[1]] = j;
  }

    swap([0, 0], [0, 1]);
    swap([0, 0], [1, 1]);
    swap([0, 0], [1, 0]);
    
    return targetMatrix;
}

//debug( matrixOneByOne );
debug( Rotate.run( matrixOneByOne ) );






















// +++++++++++++++++++++++++++++++ Did not work +++++++++++++++++++++++++++++++++++++++

// First corner must increment to last position in its parent array
// Second corner must increment to the last position of the last sibling array
// Third corner must increment to the first position of its parent array
// Fourth corner must increment to te first position of the first array

// Step one: Use recursion to find 

/*
function RotateMatrix( targeMatrix ) {

  var pointer, target;

  for (var i = 0; i < targeMatrix[0].length; i++){
    for

  }


}

debug(RotateMatrix(matrix));

// another dead end:
  var index = 0,
    demensions = targetMatrix.length,
    rowLength = targetMatrix[0].length;

    debug(demensions);
    debug(rowLength);

    // Swap 1
    var temp = targetMatrix [ index ][ 0 ];
    targetMatrix[ index ][ 0 ] = targetMatrix [ index ][ 1 ];
    targetMatrix[ index ][ 1 ] = temp;

    // Swap 2
    temp = targetMatrix [ index ][ 0 ];
    targetMatrix[ index ][ 0 ] = targetMatrix [ index+1 ][ 1 ];
    targetMatrix[ index+1 ][ 1 ] = temp;


    // Swap 3
    temp = targetMatrix [ index ][ 0 ];
    targetMatrix[ index ][ 0 ] = targetMatrix [ index+1 ][ 0 ];
    targetMatrix[ index+1 ][ 0 ] = temp;


//  while ( index < demensions ){
      for ( var i = 0; i < targetMatrix[ index ].length; i++){


      }
      //index++;
//    }

    return targetMatrix;


*/