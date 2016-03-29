$(document).ready(function() {
    $('#sentence').submit(function(event){
      $(event.preventDefault());
      var sentenceString = $("#form1").val();
      var arraySplitString = sentenceString.split('');

      for (var index = 0; index <= arraySplitString.length; index += 1) {
        if (arraySplitString[index] === 'a', 'e', 'i', 'o', 'u') {
          arraySplitString[index] = arraySplitString[index].replace(/a/gi,'-').replace(/e/gi, '-').replace(/i/gi,'-').replace(/o/gi, '-').replace(/u/gi, '-')
          var smurf = arraySplitString.join('')
          $('.output').text(smurf);
          $('#sentence').hide();
        }
      }
  });
});
