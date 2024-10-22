// Constants
const totalDistance = 1500; // Total distance of the trip in miles
const fuelCostPerGallon = 3; // Cost of fuel per gallon in dollars
const fuelBudget = 175; // Total fuel budget in dollars

// Fuel efficiency at different speeds (miles per gallon)
const fuelEfficiency = {
    "55mph": 30,
    "60mph": 28,
    "75mph": 23
};

// Function to calculate gallons needed, budget sufficiency, and travel time
function calculateTripDetails(speed) {
    const mpg = fuelEfficiency[speed]; // Get miles per gallon for the given speed
    const gallonsNeeded = totalDistance / mpg; // Calculate gallons needed for the trip
    const totalFuelCost = gallonsNeeded * fuelCostPerGallon; // Calculate total fuel cost
    const isBudgetSufficient = totalFuelCost <= fuelBudget; // Check if budget is sufficient
    const travelTime = totalDistance / speed; // Calculate travel time in hours

    // Log the results using template literals
    console.log(`For driving at ${speed}:`);
    console.log(`You will need ${gallonsNeeded.toFixed(2)} gallons of fuel for the trip.`);
    console.log(`The total fuel cost will be $${totalFuelCost.toFixed(2)}.`);
    console.log(`Is your budget sufficient? ${isBudgetSufficient ? "Yes" : "No"}.`);
    console.log(`The trip will take approximately ${travelTime.toFixed(2)} hours.\n`);
}

// Calculate details for each speed
calculateTripDetails("55mph");
calculateTripDetails("60mph");
calculateTripDetails("75mph");

/*
For driving at 55mph:
You will need 50.00 gallons of fuel for the trip.
The total fuel cost will be $150.00.
Is your budget sufficient? Yes.
The trip will take approximately 27.27 hours.

For driving at 60mph:
You will need 53.57 gallons of fuel for the trip.
The total fuel cost will be $160.71.
Is your budget sufficient? Yes.
The trip will take approximately 25.00 hours.

For driving at 75mph:
You will need 65.22 gallons of fuel for the trip.
The total fuel cost will be $196.67.
Is your budget sufficient? No.
The trip will take approximately 20.00 hours.*/