var screen = document.querySelector("#result");
var numArr = [];
var keyarr=[];



  function display(num) {
screen.value += num;
}; 



  function calculate(value){
  try{
    screen.value = eval(screen.value);
  }
  catch(err){
    alert("Invaid Calculation"); 
  }
}



  function clr(value) {
  screen.value = "";
}



  function del() {
  screen.value = screen.value.slice(0, -1);
}


var number = document.querySelectorAll(".cal")


for(let i=0; i<number.length; i++){
 let numVal= (number[i].innerText);
 
 function insert(numArr, ...items) {
  numArr.push(...items);
}

insert(numArr, numVal);


  
}

//Key borad events for only numbers

let endVal = document.getElementById("result");
console.log(endVal);
endVal.addEventListener("keydown", function(event){
  //console.log(event.key);
  if(event.key === "1"||
     event.key === "2"||
     event.key === "3"||
     event.key === "4"||
     event.key === "5"||
     event.key === "6"||
     event.key === "7"||
     event.key === "8"||
     event.key === "9"||
     event.key === "0"){
    
  }

  else if(event.key === "Delete"){
     clr(event.key);
  }

  else if(event.key ==="Backspace"){
     del(event.key);
  }
    
  else{
    alert("Please Enter only Number");
    event.preventDefault();
  }
})