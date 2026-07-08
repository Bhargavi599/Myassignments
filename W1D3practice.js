// 1. Global variable
let genderType = "female";

// Function declaration
function printGender() {
  
  let color = "brown";

  //If condition checking if genderType starts with "female"
  if (genderType=="female") {
    
    var age = 30;
    let color = "pink";
    console.log("Inside if-block color:", color); // Should print "pink"
  }

  console.log("Outside if-block age:", age); // Should print 30
  console.log("Outside if-block color:", color); // Should print "brown"
}

// Call the function
printGender();
console.log("Global genderType:", genderType);

// Change genderType to "male" and observe
genderType = "male";
printGender();
console.log("Global genderType:", genderType);
