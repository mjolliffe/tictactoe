var player = 1;

function clickBtn(btn){
  if (player===1){
  document.getElementById(btn).style.background= "red";
  document.getElementById(btn).value = "X";
  document.getElementById(btn).disabled = "disabled";
  player -= 1;
  winner();
  } else {
  document.getElementById(btn).value = "O";
  document.getElementById(btn).disabled = "disabled";
  player += 1;
  winner();
  }
}

//function myFunction() {
//    var x = document.getElementsByClassName("color");
//    x.color = #222;
//}


function winner(){
  if (
  document.getElementById("s1").value == "X" &&
  document.getElementById("s2").value == "X" &&
  document.getElementById("s3").value == "X" ||
  document.getElementById("s4").value == "X" &&
  document.getElementById("s5").value == "X" &&
  document.getElementById("s6").value == "X" ||
  document.getElementById("s7").value == "X" &&
  document.getElementById("s8").value == "X" &&
  document.getElementById("s9").value == "X" ||
  document.getElementById("s1").value == "X" &&
  document.getElementById("s4").value == "X" &&
  document.getElementById("s7").value == "X" ||
  document.getElementById("s2").value == "X" &&
  document.getElementById("s5").value == "X" &&
  document.getElementById("s8").value == "X" ||
  document.getElementById("s3").value == "X" &&
  document.getElementById("s6").value == "X" &&
  document.getElementById("s9").value == "X" ||
  document.getElementById("s1").value == "X" &&
  document.getElementById("s5").value == "X" &&
  document.getElementById("s9").value == "X" ||
  document.getElementById("s3").value == "X" &&
  document.getElementById("s5").value == "X" &&
  document.getElementById("s7").value == "X"
    ){
  alert("The Winner is X!");
  resetTable();
  } else if (
  document.getElementById("s1").value == "O" &&
  document.getElementById("s2").value == "O" &&
  document.getElementById("s3").value == "O" ||
  document.getElementById("s4").value == "O" &&
  document.getElementById("s5").value == "O" &&
  document.getElementById("s6").value == "O" ||
  document.getElementById("s7").value == "O" &&
  document.getElementById("s8").value == "O" &&
  document.getElementById("s9").value == "O" ||
  document.getElementById("s1").value == "O" &&
  document.getElementById("s4").value == "O" &&
  document.getElementById("s7").value == "O" ||
  document.getElementById("s2").value == "O" &&
  document.getElementById("s5").value == "O" &&
  document.getElementById("s8").value == "O" ||
  document.getElementById("s3").value == "O" &&
  document.getElementById("s6").value == "O" &&
  document.getElementById("s9").value == "O" ||
  document.getElementById("s1").value == "O" &&
  document.getElementById("s5").value == "O" &&
  document.getElementById("s9").value == "O" ||
  document.getElementById("s3").value == "O" &&
  document.getElementById("s5").value == "O" &&
  document.getElementById("s7").value == "O" )
  {
  alert("The Winner is O!");
  resetTable();
  }
}

function resetTable (){
  document.getElementById("s1").value = "";
  document.getElementById("s2").value = "";
  document.getElementById("s3").value = "";
  document.getElementById("s4").value = "";
  document.getElementById("s5").value = "";
  document.getElementById("s6").value = "";
  document.getElementById("s7").value = "";
  document.getElementById("s8").value = "";
  document.getElementById("s9").value = "";
  document.getElementById("s1").disabled = "";
  document.getElementById("s2").disabled = "";
  document.getElementById("s3").disabled = "";
  document.getElementById("s4").disabled = "";
  document.getElementById("s5").disabled = "";
  document.getElementById("s6").disabled = "";
  document.getElementById("s7").disabled = "";
  document.getElementById("s8").disabled = "";
  document.getElementById("s9").disabled = "";
  document.getElementById("s1").style.background= "blue";
  document.getElementById("s2").style.background= "blue";
  document.getElementById("s3").style.background= "blue";
  document.getElementById("s4").style.background= "blue";
  document.getElementById("s5").style.background= "blue";
  document.getElementById("s6").style.background= "blue";
  document.getElementById("s7").style.background= "blue";
  document.getElementById("s8").style.background= "blue";
  document.getElementById("s9").style.background= "blue";
}
