##How we store comments

Likes are stored per Card component as useState and will be increments in the set function when the like button is clicked.
The same way, Comments are stores per Card component in useState as arrays.
But arrays are mutable in javascript so we create a new copy array and add the new comment each time a new comment is added
[...oldComments, newComment]
