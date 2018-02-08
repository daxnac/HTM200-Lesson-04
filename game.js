function startGame() {
  
  // Greeting when game starts
  document.getElementById("hiSound").play();
  
  // user starts at x0, y0 (bottom left of board)
  var userX = 0;
  var userY = 0;
  
  // Flag that controls loop
  var treasureFound = false;

  // Get user's name
  var name = prompt("What shall we call you?");
  
  // Define the size of the game play area based on user level select.
  var lvlEasy = "easy";
  var lvlMedium = "medium";
  var lvlHard = "hard";
  var lvlSelect = prompt("Enter difficulty level. (easy, medium, hard)");
  
  if (lvlSelect == lvlEasy) {
    maxX = 3;
    maxY = 3;
  } else if (lvlSelect == lvlMedium) {
    maxX = 5;
    maxY = 5;
  } else if (lvlSelect == lvlHard) {
    maxX = 8;
    maxY = 8;
  } else {
    alert("Please try again and enter difficulty level.");
    console.log("Please try again and enter difficulty level");
    return lvlSelect;
  }
  
  // Defines the size of the game play area
  var maxX;
  var maxY;
  
  // Hide the treasure, also with x y values based on level difficulty
  var treasureX = Math.floor(Math.random() * maxX);
  var treasureY = Math.floor(Math.random() * maxY);
  
  // begin while loop
  while (!treasureFound) {
    var direction = prompt("Which direction would you like to go in? (north, east, west, south)");
    console.log(direction);

    //tmp vars only used of checking validity of new user location after move
    var newX;
    var newY;

    if (direction == "north") {
      newX = userX;
      newY = userY + 1;
        // neither value < 0, neither is > max
        if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
          userX = newX;
          userY = newY;
        } else {
          document.getElementById("nSound").play();
          alert("Sorry! You need a passport to enter Canada");
          console.log("Sorry! You need a passport to enter Canada");
      }
    } else if (direction == "east") {
      newX = userX + 1;
      newY = userY;
        // neither value < 0, neither is > max
        if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
          userX = newX;
          userY = newY;
        } else {
          document.getElementById("eSound").play();
          alert("Dang! The Cascades are in the way.");
          console.log("Dang! The Cascades are in the way.");
        }
    } else if (direction == "south") {
      newX = userX;
      newY = userY - 1;
        // neither value < 0, neither is > max
        if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
          userX = newX;
          userY = newY;
        } else {
          document.getElementById("sSound").play();
          alert("You have reached Oregon!");
          console.log("You have reached Oregon!");
        }
    } else if (direction == "west") {
      newX = userX - 1;
      newY = userY;
        // neither value < 0, neither is > max
        if (newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
          userX = newX;
          userY = newY;
        } else {
          document.getElementById("wSound").play();
          alert("Nothing here but Pacific ocean.");
          console.log("Nothing here but Pacific ocean.");
        }
    } else {
      alert("Please enter a real direction.");
      console.log("Please enter a real direction.");
    }

    //validate User X/Y location
    console.log(name + " X location is: " + userX);
    console.log(name + " Y location is: " + userY);

    //see if user location matches treasure
    if (userX == treasureX && userY == treasureY) {
      document.getElementById("tSound").play();
      alert("Hoooraay! You found the treasure!");
      console.log("Hoooraay! You found the treasure!");
      treasureFound = true;
    }  
  }
}