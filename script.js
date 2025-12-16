// script.js

// 1. Define Multi-Dimensional Array studentData
// Format: [Name (String), Credit Hour (Number), Current GPA (Number)]
const studentData = [
    ["Ali Bin Ahmad", 15, 3.75],
    ["Bala A/L Muthu", 12, 3.40],
    ["Siti Nurhaliza", 18, 4.00],
    ["Wong Mei Ling", 10, 3.50],
    ["David Lee", 15, 2.95]
];

// 2. Create function to measure dean list eligibility
function checkDeanList(gpa) {
    // Check if the GPA is 3.50 or higher
    if (gpa >= 3.50) {
        // Return status wrapped in a class for styling
        return "<span class='eligible'>Dean's List Eligible</span>";
    } else {
        return "<span class='not-eligible'>Not Dean's List Eligible</span>";
    }
}

// Get the element where results will be rendered
const resultsOutput = document.getElementById('results-output');

// Variable to accumulate all the generated HTML strings
let outputHTML = '';

// 3. Create Looping (for loop) to process and format student data
for (const student of studentData) {
    // Extract student data
    const [name, creditHours, gpa] = student; 

    // Get the eligibility status
    const status = checkDeanList(gpa);

    // Build the HTML for the current student record
    outputHTML += `
        <div class='student-data'>
            <b>Name:</b> ${name}<br>
            <b>Current GPA:</b> ${gpa.toFixed(2)}<br>
            <b>Status:</b> ${status}
        </div>
    `;
}

// Display the results by setting the innerHTML of the dedicated div
resultsOutput.innerHTML = outputHTML;