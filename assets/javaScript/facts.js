"use strict";

let dogContainer = document.querySelector('.dog-facts'); 
let galleryImg = document.querySelector('slider-container');

// Adding event listener to form
let form = document.forms['form']; 
form.addEventListener('submit', function(e){

  getFacts(e); 
})

function getFacts(e){

  e.preventDefault(); 
  let num = form['number'].value; 
    
  // Display section with facts  
  let mainContainer = document.querySelector('aside');
  mainContainer.style.display = "block"; 
  //removing any previous facts
  let removeList = document.querySelectorAll('ol li');
  removeList.forEach(item => item.remove());


  // getting data from API

  let request = new XMLHttpRequest();

  request.open('GET', `https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=${num}`, true)

  request.onload = function() {
  let data = JSON.parse(this.response) ; 

  data.forEach(element => {
    // creating list elements for dog facts and append them to the web 
    let li = document.createElement('li');
    li.textContent = element.text; 
    dogContainer.appendChild(li);
    
    
  });
  

}
request.send()
}


// Send request

