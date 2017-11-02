$(document).ready(function() {
  var $docHTML = "";
  var $numberArray = [];
  var $total = 0;
  var $signArray = [];
  var equalInput = false;
  const updateNumber = (string) => {
    if (equalInput) {
      $docHTML = "";
      $total = 0;
      equalInput = false;
    }
    if ($numberArray.length <= 8) {
      $docHTML += string;
      $numberArray.push(string);
      $('h2').html($docHTML);
    }
  } // updateNumber end
  const deleteAndPush = (stringSign) => {
    if (equalInput) {
      equalInput = false;
    } else {
      var sign = stringSign;
      switch(sign) {
        case "+":
          $total += parseFloat($numberArray.join(""));
          break;
        case "-":
          if ($signArray[0] === undefined) {
            $total = parseFloat($numberArray.join(""));
          } else {
            $total -= parseFloat($numberArray.join(""));
          }
          break;
        case "*":
          if ($signArray[0] === undefined) {
            $total = parseFloat($numberArray.join(""));
          } else {
            $total *= parseFloat($numberArray.join(""));
          }
          break;
        case "/":
          if ($signArray[0] === undefined) {
            $total = parseFloat($numberArray.join(""));
          } else {
            $total /= parseFloat($numberArray.join(""));
          }
          break;
      } // switch sign end
    } // if else statement end
    $docHTML = "";
    $numberArray = [];
    $signArray = [];
    $signArray.push(stringSign);
  } // deleteAndPush function end
  $('#add').click(function() {
    deleteAndPush("+");
  });
  $('#subtract').click(function() {
    deleteAndPush("-");
  });
  $('#multiply').click(function() {
    deleteAndPush("*");
  });
  $('#divide').click(function() {
    deleteAndPush("/");
  });
  $('#equal').click(function() {
    if ($signArray[0] === "+") {
      $total += parseFloat($numberArray.join(""));
    } else if ($signArray[0] === "-") {
      $total -= parseFloat($numberArray.join(""));
    } else if ($signArray[0] === "*") {
      $total *= parseFloat($numberArray.join(""));
    } else if ($signArray[0] === "/") {
      $total /= parseFloat($numberArray.join(""));
    } else if ($signArray[0] === undefined) {
      $total = parseFloat($numberArray.join(""));
    }
    equalInput = true;
    $numberArray = [];
    $signArray = [];
    $docHTML = $total;
    $('h2').html($docHTML);
  }); // #equal click event end
  $('#clear-memory').click(function() {
    $docHTML = "";
    $('h2').html($docHTML);
    $total = 0;
    $numberArray = [];
    $signArray = [];
  });
  $('#clear-entry').click(function() {
    $docHTML = "";
    $('h2').html($docHTML);
  });
  $('#period').click(function() {
    updateNumber(".");
  });
  $('#percent').click(function() {
    var num = parseFloat($docHTML) / 100;
    $docHTML += "%";
    $('h2').html($docHTML);
    $numberArray = [];
    $numberArray.push(num);
  });
// number click buttons ****************************
  $('#zero').click(function(){
    updateNumber("0");
  });
  $('#one').click(function() {
    updateNumber("1");
  });
  $('#two').click(function() {
    updateNumber("2");
  });
  $('#three').click(function(){
    updateNumber("3");
  });
  $('#four').click(function() {
    updateNumber("4");
  });
  $('#five').click(function() {
    updateNumber("5");
  });
  $('#six').click(function(){
    updateNumber("6");
  });
  $('#seven').click(function() {
    updateNumber("7");
  });
  $('#eight').click(function() {
    updateNumber("8");
  });
  $('#nine').click(function(){
    updateNumber("9");
  });
}); // document end
