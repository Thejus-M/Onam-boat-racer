// u= document.getElementById("b1").style.setProperty("left", "100px");
user_Boat = document.getElementsByClassName("boat1");
bot1 = document.getElementsByClassName("boat2");
bot2 = document.getElementsByClassName("boat3");
bot3 = document.getElementsByClassName("boat4");

// user_Boat_Position=document.getElementById("b1").style['left'];
user_Boat_Position=0;

console.log();


function whenPress(){
    user_Boat_Position-=1
    document.getElementById("b1").style.setProperty("left", user_Boat_Position+"px");
    console.log("Pressed  "+user_Boat_Position);
}

function whenReleased(){
    user_Boat_Position+=2
    document.getElementById("b1").style.setProperty("left", user_Boat_Position+"px");
    console.log("released  "+user_Boat_Position);

}