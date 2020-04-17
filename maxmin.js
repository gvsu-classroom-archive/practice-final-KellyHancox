document.getElementById('more').addEventListener('click', moreClick);
function moreClick() {
    for(var i = 0; i < 10; i++){
        //add html to the page on button click
        document.getElementById('input-list').innerHTML =
        document.getElementById('input-list').innerHTML + 
        "<input type='text'>";
    }
    
}


document.getElementById('submit').addEventListener('click', submitClick);
function submitClick() {
    var inputs = document.querySelectorAll("input"),
    numbers = [],
    sum = 0,
    length = 0;

      //restart colors every time
  for (var i = 0; i < inputs.length; i += 1) {
      inputs[i].style.backgroundColor = '';

    }

  for (var i = 0; i < inputs.length; i += 1) {
      if(inputs[i].value !== ""){
        var n = +inputs[i].value;
        numbers.push(n);
        sum += n;
        length += 1;
      }
  }

  var max = Math.max(...numbers);
  var average = (sum / length).toFixed(2);
  var min = Math.min(...numbers);

  //loop through numbers to change color 
  for (var i = 0; i < inputs.length; i += 1) {
    if(inputs[i].value == max){
      inputs[i].style.backgroundColor = 'green';
    }
    if(inputs[i].value == min){
        inputs[i].style.backgroundColor = 'red';
      }
    }

    document.getElementById('max').innerHTML = max;
    
    document.getElementById('min').innerHTML = 
        min;
    
    document.getElementById('average').innerHTML = 
        average;
    
}