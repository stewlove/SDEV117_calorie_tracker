/*
    This file converts weight from pounds to kilograms, workout types into MET,
    and then displays calories burned per minute for said workout.
    Author: Stewart Lovell
    File: script.js
    Date: 1/24/2022
*/

//this registers the button click events when the
//page loads
window.onload = function() {
    //register button events when the page loads
    document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
    document.getElementById("workout-to-met").onclick = workoutToMet;
    document.getElementById("calc-calories").onclick = calculateCalories;
}

//convert lbs to kgs from the input fields in the
//page and send output to the console
function lbsToKgs()
{
    //grab the value from the "Weight in lbs" field, store it in a variable
    let lbs = parseFloat(document.getElementById("lbs").value);

    //Check to see if the user entered a non number
    if(!lbs)
    {
        output("You did not enter a number for pounds, try again!");
    }
    //Check to see if the user entered an invalid number
    else if(lbs < 0)
    {
        output("Negative weight entered, try again!")
    }
    //Calculate, since the input is valid
    else
    {
        //convert the pounds into kilograms, new variable for clarity
        let kg = lbs / 2.205;
        //round kg to 2 decimal places
        kg = kg.toFixed(2);


        //output pounds and kilograms
        output(`You entered ${lbs}lbs, which is ${kg}kg`)

        //Send the rounded kilograms variable into the "Weight in kg" input box so that the user doesn't have to
        document.getElementById("kgs").value = kg;
    }

}

//determine MET value for exercises in the dropdown
//list and send output to the console
function workoutToMet()
{
    //grab the MET value from the selected workout in the "workouts" list, store it in a variable
    let metValue = parseFloat(document.getElementById("workouts").value);

    //create a variable to store our workout String
    let workout = "";

    //Create a switch statement that will store the workout inside the variable if it is selected by using checking its value
    switch (metValue)
    {
        case 16.0:
            workout = "Competitive Bicycle Racing";
            break;
        case 7.2:
            workout = "Playing Dance Dance Revolution";
            break;
        case 5.0:
            workout = "Military Obstacle Course Training";
            break;
        case 7.3:
            workout = "General Aerobics";
            break;
        case 10.0:
            workout = "Aerobic Dance Wearing 10-15lb Weights";
            break;
        case 4.5:
            workout = "Crab Fishing";
            break;
        case 2.5:
            workout = "Cooking/Food Preparation/Walking";
            break;
        case 8.3:
            workout = "Felling Large Sized Trees";
            break;
    }
    //Output the selected workout
    output(`You selected ${workout} which has a MET value of ${metValue}`);

    //Send the MET value into the "MET" input box in the html so that the user doesn't have to
    document.getElementById("met").value = metValue;

}

//Calculates the calories burned per minute, given
//the inputs from the page and sends the output
//to the console
function calculateCalories()
{
    //grab the value from the "MET" and "Weight in kg" input fields and store them in variables
    let metValue = parseFloat(document.getElementById("met").value);
    let kgs = parseFloat(document.getElementById("kgs").value);

    //make sure that valid inputs are used for MET and Weight in kg
    if(!kgs || !metValue)
    {
        output("You did not enter a number for the MET or Weight in kg, try again!");
    }
    else if(kgs < 0 || metValue < 0)
    {
        output("Negative number for MET or Weight in kg entered, try again!")
    }
    else
    {
        //calculate calories burned per minute
        let caloriesBurned = (metValue * 3.5 * kgs) / 200;
        //round caloriesBurned to 2 decimal places
        caloriesBurned = caloriesBurned.toFixed(2);
        //output calories burned per minute
        output(`MET ${metValue}, weight ${kgs}kgs - burns ${caloriesBurned} calories per minute`);
    }
}

//this function takes the provided message and prints
//it to the console on the page
function output(message)
{
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}