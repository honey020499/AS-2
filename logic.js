let start;
 
function moving(){
    left= Math.random()*400;
    right=Math.random()*300;
    wh=((Math.random()*500)+100);
        document.getElementById("box").style.left=left +"px"; // here without adding the units we cant change the size but in explanation clip tutor didnt add 
        document.getElementById("box").style.right=right+"px";
            document.getElementById("box").style.width=wh+"px";
             document.getElementById("box").style.height=wh+"px";
              document.getElementById("box").style.display="block";
              document.getElementById("box").style.backgroundColor=getRandomColor();
               start=new Date().getTime();
   
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

 moving();
 

document.getElementById("box").onclick = function() {
    document.getElementById("box").style.display="none";
    var end= new Date().getTime();
    var  time=(end-start)/1000 ;
    alert(time + " sec");
    moving();

}