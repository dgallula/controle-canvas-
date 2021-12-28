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