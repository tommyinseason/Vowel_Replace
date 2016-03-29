$(document).ready(function() {
    $('#sentence').submit(function(event){

      var sentenceString = $("#form1").val();
      var arraySplitString = sentenceString.split('');

      for (var index = 0; index <= arraySplitString.length; index += 1) {
        if (arraySplitString[index] = "a","e","i","o","u") {
          arraySplitString.replace('-');
          alert(arraySplitString);
        }
        }
        alert(arraySplitString)
      $(event.preventDefault());
});
});
