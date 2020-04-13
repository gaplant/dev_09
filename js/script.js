$(function() {
  
   var preview = document.getElementById('textIn'); //assigns variable to text input area
  
   preview.onkeyup = preview.onkeypress = function(){   //checks for keypresses in input area, adds them to preview area
    document.getElementById('outputBox').innerHTML = this.value;
   }
  
  $('#textOut').text(""); 
  
  $('#sendText').on('click', function (e) {
    
    e.preventDefault();
    $('#textOut').text(""); //clears out output
    $('#outputBox').text(""); //clears out preview
    var getInput = $('#textIn').val();  //gets input
    if (getInput != "" && getInput.length < 20){  //checks for null string + < 20 characters
      
      var output = $('#textOut')  //outputs and changes style
        .append('<p>'+getInput+'</p>')
        .addClass("output"); 
        document.getElementById('textIn').value="";
    }
    });
  
});