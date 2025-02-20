/*
The following recursive code will cause a stack overflow if the array "somelist" is too large. How can you fix this and still retain the recursive pattern?

var somelist = readVeryLongList();

var nextItem = function() {

   var item = somelist.pop();

   if (item) {

       // process the list item...

       nextItem();

   }

};

*/

