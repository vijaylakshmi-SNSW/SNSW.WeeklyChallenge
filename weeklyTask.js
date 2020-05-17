const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Welcome message
    console.log("Welcome to Health Check Calulator!");
    console.log();
    while (true) {
        // List options
        console.log("[1] Calculate my BMI");
        console.log("[2] Calculate Ideal Weight");
        console.log("[3] Exit");
        // Ask user to enter an option
        let userInput = await askQuestion("Select an option from above: ");
        console.log();

        // Choose an option based on user input
        if (userInput == "1") {
            console.log("You have selected option 1.");
            // Add numbers logic
            let userInput1 = await askQuestion("Enter your name: ");
            let userInput2 = await askQuestion("Enter your weight in kg: ");
            let num2 = parseInt(userInput2);
            let userInput3 = await askQuestion("Enter your height in cm: ");
            let num3 = parseInt(userInput3);

            CalculateBMI(userInput1, num2, num3);
            break;
        
         } 
        
        else if(userInput == "2") {
            console.log("You have selected option 2 ");
            // Multiply numbers logic
            let userInputName = await askQuestion("Enter your name: ");
            let userInput1 = await askQuestion("Enter your gender: ");
            let num1 = userInput1.toLowerCase();
            let userInput2 = await askQuestion("Enter your weight in kg: ");
            let num2 = parseInt(userInput2);
            let userInput3 = await askQuestion("Enter your height in cm: ");
            let num3 = parseInt(userInput3);
            let userInput4 = await askQuestion("Enter your age: ");
            let num4 = parseInt(userInput4);
            
            IdealWeight(userInputName, num1, num2, num3, num4);
            break;

        } else if(userInput == "3") {
            break; 
        } else {
            // Error: couldn't read input
            console.log("Error: please enter a number 1 - 3");
        }
        console.log();
    }
    // Goodbye message
    console.log("Thank you for using Health Check Calulator!");
} 
function CalculateBMI (name, weight, height){
    if(weight > 0 && height > 0){	
        var finalBmi = weight/(height/100*height/100);
        console.log("Your BMI is: " + " " + finalBmi);
        if(finalBmi < 18.5){
            console.log("You are too thin" + " " + name);
            }
            if(finalBmi > 18.5 && finalBmi < 25){
                console.log("You are healthy"+ " " + name);
            }
            if(finalBmi > 25){
                console.log("You are overweight"+ " " + name);
            }
            }
            
            }
           

function IdealWeight (name1,gender, weight, height, age){
    let calories = 0;
    if(gender == 'female') {
       //females =  655.09 + 9.56 x (Weight in kg) + 1.84 x (Height in cm) - 4.67 x age   
      calories = 655.09 + (9.56 * weight) + (1.84 * height) - (4.67 * age);
      console.log(`Hey ${name1} your daily calorie intake is ` + "" + calories);
      console.log();
     }  else {
      calories = 66.47 + (13.75 * weight) + (5 * height) - (6.75 * age);
      console.log(`Hey ${name1} your daily calorie intake is ` + "" + calories);
      console.log();

     }
}

// alt + shift + f

Program().then(() => {
    process.exit(0);
});