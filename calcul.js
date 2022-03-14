var  screen = document.getElementById("screen");
var numchar;
var currentchar,previouschar;
var operation = ['+' , '/' , '*' , '-','.'];
var operations = ['+' , '/' ,'.' ,'*'];


function clearScreen(){
    screen.value = "";
}

function display(c){
    screen.value += c;
    numchar = screen.value.length;
    currentchar = c ;  
    getpreviouschar();
}

function calculat(){
    screen.value = eval(screen.value);
}

function getpreviouschar(){ //
    previouschar = screen.value.substring(numchar-2,numchar-1);
    checksyntax();
      
}

function checksyntax(){
    if(operations.includes(currentchar ) && numchar == 1){
        removechar();       
    }
    if(operation.includes(previouschar) && operation.includes(currentchar)) {
        if(previouschar == currentchar){
            removechar()
        }else{
            screen.value = screen.value.slice (0 , numchar-2) + screen.value.slice(numchar-1);

        }
    }   
}

function removechar(){
    screen.value=screen.value.substring(0 , numchar-1);
}
  

