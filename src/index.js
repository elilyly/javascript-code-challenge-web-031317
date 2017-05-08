$(document).ready(function(){

  document.getElementById('note-form').onsubmit = function() {submitted()};

  function submitted() {
    var t = document.createTextNode('hi');
    document.body.appendChild(t);
    alert('Form submitted');
  }

})
//after submitting a comment, it alerts you that the form was submitted, and the comment appears on the page for less than a second
