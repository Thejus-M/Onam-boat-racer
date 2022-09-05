document.getElementById("vl").style.setProperty("left", "800px");
document.getElementById("button").style.setProperty("display", "none");
final_Position = document.getElementById("vl").style["left"];
user_Boat_Position = 0;
bot1_Position = 0;
bot2_Position = 0;
bot3_Position = 0;

win = 0;
team = 0;
console.log(final_Position);
final_Position = 700;

function whenPress() {
   if (user_Boat_Position < final_Position && win == 0) {
      user_Boat_Position -= 2;
      document
         .getElementById("b1")
         .style.setProperty("left", user_Boat_Position + "px");
      console.log("Pressed  " + user_Boat_Position);
   } else {
      if (win == 0) {
         win = 1;
         team = 1;
         window.alert("Yay you won!!");
      }
   }
}

function whenReleased() {
   if (user_Boat_Position < final_Position && win == 0) {
      user_Boat_Position += 4;
      document
         .getElementById("b1")
         .style.setProperty("left", user_Boat_Position + "px");
      console.log("released  " + user_Boat_Position);
   } else {
      if (win == 0) {
         win = 1;
         team = 1;
         window.alert("Yay you won!!");
      }
   }
}

function bot1WhenPress(i) {
   if (bot1_Position < final_Position && win == 0) {
      bot1_Position -= i;
      document
         .getElementById("b2")
         .style.setProperty("left", bot1_Position + "px");
   } else {
      if (win == 0) {
         win = 2;
         team = 2;
         window.alert("Team " + team + " won!!!");
      }
   }
}
function bot1WhenReleased(i) {
   if (bot1_Position < final_Position && win == 0) {
      bot1_Position += i;
      document
         .getElementById("b2")
         .style.setProperty("left", bot1_Position + "px");
   } else {
      if (win == 0) {
         win = 2;
         team = 2;
         window.alert("Team " + team + " won!!!");
      }
   }
}

function bot2WhenPress(i) {
   if (bot2_Position < final_Position && win == 0) {
      bot2_Position -= i;
      document
         .getElementById("b3")
         .style.setProperty("left", bot2_Position + "px");
   } else {
      if (win == 0) {
         win = 2;
         team = 2;
         window.alert("Team " + team + " won!!!");
      }
   }
}
function bot2WhenReleased(i) {
   if (bot2_Position < final_Position && win == 0) {
      bot2_Position += i;
      document
         .getElementById("b3")
         .style.setProperty("left", bot2_Position + "px");
   } else {
      if (win == 0) {
         win = 2;
         team = 2;
         window.alert("Team " + team + " won!!!");
      }
   }
}

function bot3WhenPress(i) {
   if (bot3_Position < final_Position && win == 0) {
      bot3_Position -= i;
      document
         .getElementById("b4")
         .style.setProperty("left", bot3_Position + "px");
   } else {
      if (win == 0) {
         win = 3;
         team = 3;
         window.alert("Team " + team + " won!!!");
      }
   }
}
function bot3WhenReleased(i) {
   if (bot3_Position < final_Position && win == 0) {
      bot3_Position += i;
      document
         .getElementById("b4")
         .style.setProperty("left", bot3_Position + "px");
   } else {
      if (win == 0) {
         win = 3;
         team = 3;
         window.alert("Team " + team + " won!!!");
      }
   }
}

function activate_Bots() {
   //! Bot1
   setInterval(() => {
      ran1 = Math.random() * 2;
      ran2 = Math.random() * 3;
      bot1WhenPress(ran1);
      bot1WhenReleased(ran2);
   }, 100);

   //! Bot2
   setInterval(() => {
      ran1 = Math.random() * 2;
      ran2 = Math.random() * 3;
      bot2WhenPress(ran1);
      bot2WhenReleased(ran2);
   }, 100);

   //! Bot3
   setInterval(() => {
      ran1 = Math.random() * 2;
      ran2 = Math.random() * 3;
      bot3WhenPress(ran1);
      bot3WhenReleased(ran2);
   }, 100);
}
function startGame() {
   activate_Bots();
   document.getElementById("pop_up").style.setProperty("display", "none");
   document.getElementById("button").style.setProperty("display", "unset");
}
