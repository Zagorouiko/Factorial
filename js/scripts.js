function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return (number * factorial(number - 1));
  }
};

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = factorial(number);

    $("span.factorial").text(result)
    $("#result").show();
    event.preventDefault();
  });
});
