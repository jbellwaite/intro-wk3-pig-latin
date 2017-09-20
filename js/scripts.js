

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("input#original-input").val();
    var vowels= ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    var inputArray= [""]
      for (var i = 0; i < input.length; i++) {
      if (vowels.includes(input.charAt(i))) {
        inputArray.push(input.charAt(i) + "way");
      }
    }

    $("#output").text(inputArray.join(" "));
  });
});
