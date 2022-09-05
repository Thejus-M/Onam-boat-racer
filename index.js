

final_Position=document.getElementById("vl").style.setProperty("left","70vw");
document.getElementById("button").style.setProperty("display", "none");
final_Position=document.getElementById("vl").style["left"]
user_Boat_Position=0;
bot1_Position=0;
bot2_Position=0;
bot3_Position=0;

win=0;
console.log(final_Position);

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

function bot1WhenPress(i){
    bot1_Position-=i
    document.getElementById("b2").style.setProperty("left", bot1_Position+"px");
}
function bot1WhenReleased(i){
    bot1_Position+=i
    document.getElementById("b2").style.setProperty("left", bot1_Position+"px");
}

function bot2WhenPress(i){
    bot2_Position-=i
    document.getElementById("b3").style.setProperty("left", bot2_Position+"px");
}
function bot2WhenReleased(i){
    bot2_Position+=i
    document.getElementById("b3").style.setProperty("left", bot2_Position+"px");
}


function bot3WhenPress(i){
    bot3_Position-=i
    document.getElementById("b4").style.setProperty("left", bot3_Position+"px");
}
function bot3WhenReleased(i){
    bot3_Position+=i
    document.getElementById("b4").style.setProperty("left", bot3_Position+"px");
}

function activate_Bots(){
    
    //! Bot1
    setInterval(()=>{
        ran1=Math.random() * 2
        ran2=Math.random() * 3
        bot1WhenPress(ran1)
        bot1WhenReleased(ran2)
    }, 100);
    
    
    
    //! Bot2
    setInterval(()=>{
        ran1=Math.random() * 2
        ran2=Math.random() * 3
        bot2WhenPress(ran1)
        bot2WhenReleased(ran2)
    }, 100);
    
    
    //! Bot3
    setInterval(()=>{
        ran1=Math.random() * 2
        ran2=Math.random() * 3
        bot3WhenPress(ran1)
        bot3WhenReleased(ran2)
    }, 100);

}
function startGame(){
    activate_Bots()
    document.getElementById("pop_up").style.setProperty("display", "none");
    document.getElementById("button").style.setProperty("display", "unset");
}