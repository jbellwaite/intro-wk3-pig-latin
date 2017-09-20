

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("input#original-input").val();
    var vowels= ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    var inputArray= [""]
    //var sliceArray= [""]
// Code for single letter word beginning vowel
    //   for (var i = 0; i < input.length; i++) {
    //   if (vowels.includes(input.charAt(i))) {
    //     inputArray.push(input.charAt(i) + "way");
    //   }
    // }
// Code for multi-letter word beginning with vowel
    //for (var i = 0; i < 2;) {

// Code for multi and single letter words beginnign with vowel
    if (vowels.includes(input.charAt(0))) {
      inputArray.push(input + "way");
    } else {

      var sliceArray = [input.charAt(0).slice(0 , 1)];
      var otherArray = [input.slice(1)];
      inputArray.push(otherArray+ sliceArray + "ay");

    }


    $("#output").text(inputArray.join(" "));
  });
});
