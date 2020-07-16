/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/




const studentList = document.querySelectorAll( '.student-item' );
const page = document.querySelector( '.page' );
const studentListMaxItems = 10;

// Create a function to hide all the students except for the ten you want displayed on a given page.
// loops through the list of names up to 10 and if the element is grater or equal to
//the firstIndex and less or equal to lastIndex display block
//else display none

const showPage = ( list , page ) => {

  let startIndex = ( page * studentListMaxItems ) - studentListMaxItems;
  let endIndex = ( page * studentListMaxItems );
  for ( let i = 0; i < list.length; i += 1 ) {
    if ( i >= startIndex && i < endIndex ) {
      list[i].style.display = 'block';
    } else 
      list[i].style.display = 'none';
  } 

} 


// Create a function that creates and appends functioning pagination links.

const appendPageLinks = ( list ) => {

  let numberOfPages = Math.ceil( list.length / studentListMaxItems );
  let div = document.createElement( 'div' );
  div.className = 'pagination';
  page.appendChild( div ) 
  let ul = document.createElement( 'ul' );
  div.appendChild( ul )

  for ( i = 0; i < numberOfPages; i +=1 ) {
    let li = document.createElement( 'li' ) 
    let a = document.createElement( 'a' ) 
    ul.appendChild( li ) 
    li.appendChild( a ) 
    div.appendChild( ul ) 
    a.href = '#';
    a.textContent = i + 1;
    
    if ( i === 0 ) {
      a.className = 'active';
    } 

  a.addEventListener ( 'click' , (e) => {
    let A = document.querySelectorAll( 'a' );
      
    for (let i = 0; i < A.length; i += 1 ) {
      A[i].className = '';
    }
   
    e.target.className = 'active';
    showPage( list, e.target.textContent )

  }) 

  } 

} 

// Call the showPage function with 'studentlist' and '1' as parameters
// Call the appendPageLinks function and pass the number of list items through as an argument.

showPage(studentList, 1);
appendPageLinks( studentList );


