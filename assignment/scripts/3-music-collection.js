console.log("***** Music Collection *****");

//- Add a function named `addToCollection`. This function should:
//- Take in the album's `title`, `artist`, `yearPublished` as input parameters
//- Create a new object having the above properties
//- Add the new object to the end of the `collection` array
//- Return the newly created object

let collection = [];

let songInfo = {
  title: " ",
  artist: " ",
  yearPublished: " "

};


function addToCollection(title, artist, yearPublished) {
  collection.push({title, artist, yearPublished});
  return songInfo; 
}

addToCollection("Take Care", "Drake", 2007);
addToCollection("Her Loss", "Drake", 2022);
addToCollection("30", "Adele", 2022);
addToCollection("56 Nights", "Future", 2015);
addToCollection("To Young to Die", "Sonder", 2022);
addToCollection("Made In Lagos", "wizkid", 2021);
console.log(collection)

//- Test the `addToCollection` function:
//- Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//- Console.log each album as added using the returned value.
//- After all are added, console.log the `collection` array.

//- Add a function named `showCollection`. This function should:
//- Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//- Console.log the number of items in the array.
//- Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

//- Test the `showCollection` function.

function showCollection(collection) {
  for (i = 0; i < collection.length; i++)
    console.log("Title by Arist " + collection[i].title +   " published in Year " + collection[i].yearPublished);
}
showCollection(collection);
console.log(collection.length);

//console.log(collection.length[i]);

//
//console.log(showCollection[title, 'by' , artist, 'published', yearPublished ])

//- Add a function named `findByArtist`. This function should:
//- Take in `artist` (a string) parameter
//- Create an array to hold any results, empty to start
//- Loop through the `collection` and add any objects with a matching artist to the array.
// - Return the array with the matching results. If no results are found, return an empty array.

//- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

//> When testing your functions, write all tests in the JavaScript file!

function findByArtist(artist) {
  let musicResults = [];

  for (let i = 0; i < collection.length; i++){
    if (collection[i].artist === artist) {
      musicResults.push(collection[i]);
     
    }
}

return musicResults;
}


console.log(findByArtist("Drake"));
console.log (findByArtist("Kanye"));

