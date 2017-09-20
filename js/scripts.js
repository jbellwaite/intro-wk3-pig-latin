

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("input#original-input").val();
    var vowels= ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    var inputArray= [""]
    var qu=["q"]
    //var sliceArray= [""]
// Code for single letter word beginning vowel
    //   for (var i = 0; i < input.length; i++) {
    //   if (vowels.includes(input.charAt(i))) {
    //     inputArray.push(input.charAt(i) + "way");
    //   }
    // }
    // WORKED
// Code for multi-letter word beginning with vowel
    //for (var i = 0; i < 2;) {

// Code for multi and single letter words beginnign with vowel
    // if (vowels.includes(input.charAt(0))) {
    //   inputArray.push(input + "way");
    // } else {
    //
    //   var sliceArray = [input.charAt(0).slice(0 , 1)];
    //   var otherArray = [input.slice(1)];
    //   inputArray.push(otherArray+ sliceArray + "ay");
    //
    // } WORKED

//Code for words that begin with multiple consonats
      //
      // for (var i = 0; input.charAt(i) !== vowels; i++) {
      //   var sliceArray = [input.slice(0, i +1)];
      //   var otherArray = [input.slice(i)];
      //   inputArray.push(otherArray+ sliceArray + "ay");
      //
      // }

      // for (var i = 0; i < input.length; i++) {
      //   if (vowels.includes(input.charAt(i))) {
      //     break;
      //     //inputArray.push(input +"way");
      //   } else {
      //     var beginningArray = [input.slice(0, i +1)];
      //     var endArray = [input.slice(i + 1)];
      //     //inputArray.push(endArray + beginningArray + "ay");
      //   }
      // }
      // inputArray.push(endArray + beginningArray + "ay");


        for (var i = 0; i < input.length; i++) {
        if (qu.includes(input.charAt(i))) {
          var beginningArray = [input.slice(0, i +2)];
          var endArray = [input.slice(i + 2)];
          inputArray.push(endArray + beginningArray + "ay");
        }
      }
      $("#output").text(inputArray.join(" "));
  });
});
