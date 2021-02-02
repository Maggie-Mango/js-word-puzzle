function findVowel(letter) {
  const vowels = ["a","e","i","o","u"]
  if (vowels.includes(letter.toLowerCase())) {
    return true;
  }
  else {
    return false;
  }
}

function makePuzzle(str) {
  let newString = "";
  for (i = 0; i < str.length; i += 1) {
    if (findVowel(str[i]) === true) {
      newString += "-";
    }
    else {
      newString += str[i];
    }
  }
  return newString;
}

$(document).ready(function() {

  $("form#word").submit(function(event) {
    event.preventDefault();
    const userMessage = $("input#message").val();

    $("#output").text(makePuzzle(userMessage));
    $("input#message").val("");
    $("#output").show();
  })
})