 var ctx = document.getElementById('myCanvas').getContext('2d');

function Draw() {
  let x =document.getElementById('x').value;
  let y =document.getElementById('y').value;
  let l =document.getElementById('l').value;
  let L =document.getElementById('L').value;
  ctx.strokeStyle = 'blue';
  ctx.strokeRect(x, y, l, L);
}

//  calcule de l'aire du rectangle 
function rectangle() {
var area;
        var width = document.getElementById('width').value;
        var height = document.getElementById('height').value;
        var total = width * height;
        document.getElementById('area').value = total;
        return false;
    }

    function init() {
        var submit = document.getElementById('submit');
        submit.onclick = rectangle;
    }

    window.onload = init;


      //  regex 

    var validation = document.getElementById("Draw")
    var xAxios = document.getElementById("x")
    var yAyios = document.getElementById("y")
    var h =  document.getElementById("L")
    var w = document.getElementById("l")


     var xAxios_m = document.getElementById("error-xAxios")
     var xAxios_v = /^[0-9]/;

     
     var yAyios_m = document.getElementById("error-yAxios")
     var yAyios_v = /^[0-9]/;

     
     var h_m = document.getElementById("error-h")
     var h_v = /^[0-9]/;

    
     
     var w_m = document.getElementById("error-w")
     var w_v = /^[0-9]/;
 
   
function f_valid(e) {
  console.log("erreur")

  //  pour xAxios

   if (xAxios.validity.valueMissing) {
     e.preventDefault();
     xAxios_m.innerText = 'Prenom manquant';
     prenom_m.style.color = 'red';
  } else if (prenom_v.test(xAxios.value )== false ) {
    event.preventDefault();
    xAxios_m.textContent = "Format incorrect";
    xAxios_m.style.color = "orange"
  } else {

  }

  // pour yAyios 

  
  if (yAyios.validity.valueMissing) {
    e.preventDefault();
    yAyios_m.innerText = 'Prenom manquant';
    yAyios_m.style.color = 'red';
 } else if (prenom_v.test(yAyios.value )== false ) {
   event.preventDefault();
   yAyios_m.textContent = "Format incorrect";
   yAyios_m.style.color = "orange"
 } else {

 }

 // pour h 

  
 if (h.validity.valueMissing) {
  e.preventDefault();
  h_m.innerText = 'Prenom manquant';
  h_m.style.color = 'red';
} else if (prenom_v.test(h.value )== false ) {
 event.preventDefault();
 h_m.textContent = "Format incorrect";
 h_m.style.color = "orange"
} else {

}

//pour  w 


if (w.validity.valueMissing) {
  e.preventDefault();
  w_m.innerText = 'Prenom manquant';
  w_m.style.color = 'red';
} else if (prenom_v.test(w.value )== false ) {
 event.preventDefault();
 w_m.textContent = "Format incorrect";
 w_m.style.color = "orange"
} else {

   }

} 


    // //  getCursorPosition(canvas,event)
    
      function getCursorPosition(canvas,event)  {
        const rect = canvas.getBoundingClientRect();
        const x1 = event.clientX - rect.left;
       const y1 = event.clientY - rect.top; 
        console.log("Coordinate x: " + x1, 
                     "Coordinate y: " + y1);
     }
  
     const canvasElem = document.querySelector("canvas");
      
     canvasElem.addEventListener("mousedown", function(e)
     {
        getMousePosition(canvasElem, e);
     });

     

