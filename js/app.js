/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections= document.querySelectorAll('section'); //get all the sections in html file
let myDocFrag = document.createDocumentFragment(); 
let list = document.getElementById('navbar__list'); // get the ul element in the navbar
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// make a function to detect which section in the viewport
function active(elm){
    let rect = elm.getBoundingClientRect();
    let pos = rect.top;
    return (pos>=-100 && pos<=400);
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (const section of sections){
  const newSection = document.createElement('li');
  const newAnchor = document.createElement('a');
  const secName = section.getAttribute('data-nav');
  const secId = section.getAttribute('id');
  newSection.innerHTML=`<a href=#${secId} id="link_${secId}" class="menu__link"> ${secName}</a>`;
  myDocFrag.appendChild(newSection);
};
list.appendChild(myDocFrag);

// Add class 'active' to section when near top of viewport

// make a function to make the status of section and menu link active or not avtive
function toggleActiveState(){
 for (const section of sections){
const itemId=section.getAttribute('id');
    if (active(section)){
            section.classList.add('your-active-class');
            document.getElementById(`link_${itemId}`).classList.add('active__link');
            document.getElementById(`link_${itemId}`).classList.remove('menu__link');
 }else{
    section.classList.remove('your-active-class'); 
    document.getElementById(`link_${itemId}`).classList.remove('active__link');
    document.getElementById(`link_${itemId}`).classList.add('menu__link');
  };
 }
};
window.addEventListener('scroll',toggleActiveState);


// Scroll to anchor ID using scrollTO event
const links = document.getElementsByClassName('menu__link');
for (const link of links){
    link.addEventListener('click',function(event){
    event.preventDefault();
    const selectedLink= document.querySelector(`${link.getAttribute('href')}`);
    selectedLink.scrollIntoView( { behavior:"smooth" , block :"center"} );
});   
};
/**
 * End Main Functions
 * 
*/



