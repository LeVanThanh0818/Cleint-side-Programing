/**
 * Example BMI - Activity 5 a and b - JavaScript parts
 * 
 * This is a starting point that have unimplemented parts
 * to be implemented in Activity 5 and b.
 */

// use more strict JavaScript (more errors and warnings will
// be available in developers tools console in browser).
"use strict";

// TODO:
// (a) global variables for storing min and max BMI

/**
 * Function init() that is called when the page bmi.html is loaded.
 */  
function init() {
    // TODO:
    // (a) add local variables for min and max and
    // (b) initialize all variables by getting them from the local storage
    //     (they will be null, if they were not in the local storage)
    let height = 0;
    let weight = 0;

    // TODO:
    // (b) replace with if-else to check if data was in local storage
        // if yes, set data on the page and global variables
        // to the saved values,
        // otherwise, set date on the page to default values
    document.getElementById('no').checked = 'true';

    // call function calculateBMI with height and weight
    // gotten from the input fields of the page
    calculateBMI(document.getElementById('height').value,
        document.getElementById('weight').value);
}

/**
 * Function calculateBMI(height, weight) that is called when
 * a new BMI will be calulated (input values have changes on the page
 * or the page is loaded).
 */
function calculateBMI(height, weight) {
    // initialize variable heightInMeters (height / 100) and
    // bmi (weight / (heightInMeters * heightInMeters))
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    
    // round the BMI into 1 decimal)
    bmi = bmi.toFixed(1)

    // TODO:
    // (a) check if this is the first time the BMI was calculated and
    //     if it is, update the BMI to global min and max and on the page

    // set the calculated BMI to page
    document.getElementById('calculatedBMI').innerHTML =
        '<p>BMI: ' + bmi + '</p>';
    
    // TODO:
    // (a) check if the calculated BMI is new min or max and
    //     if it is, update it on the page and on the global variable
    //     accordingly
    
    // check if the radio button for saving is set to "Yes" and
    // if it is, call function store(setting) with parameter true
    if (document.getElementById('yes').checked) {
        store(true);
    }
}

/**
 * Function store(setting) that is called when the value of the
 * radio button on the page is changed and when the page loads
 * (from init()-function).
 */
function store(setting){
    // TODO:
    // (b) if setting is true, save data to local storage,
    //     otherwise, remove all data from local storage
}