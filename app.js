// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// function createAdder(num) {
//     return function(x) {
//       return x + num;
//     };
//   }
//   let addFive = createAdder(5);
//   console.log(addFive(10));
   

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

//   function searchArray(arr, value) {
//         if (arr.length === 0) {
//       return false;
//     }
    
   
//     if (arr[0] === value) {
//       return true;
//     } else {
//       return searchArray(arr.slice(1), value);
//     }
//   }
//   let arr = [1, 2, 3, 4, 5];
//   console.log(searchArray(arr, 3)); 
//   console.log(searchArray(arr, 6)); 
    
// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// function addParagraph(text) {
    
//     let newParagraph = document.createElement('p');
//     newParagraph.textContent = text; 
//     document.body.appendChild(newParagraph); 
//   }
//   addParagraph('This is a new paragraph.'); 

function addListItem(text) {
    // Get the unordered list element
    let ul = document.querySelector('ul');
  
    // Create a new list item element
    let li = document.createElement('li');
  
    // Set the text content of the new list item
    li.textContent = text;
  
    // Add the new list item to the unordered list
    ul.appendChild(li);
  }
  addListItem('New list item');
  