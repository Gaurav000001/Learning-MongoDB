// **Problem 41:**

// - **Prerequisite**: Understand date and time functions in SQL / MongoDB
// - **Problem**: Assuming there's a **`ride_date`** field of date type in the **`Rides`** table 
// / collection, write a query to find all rides that happened in the last 7 days.


let currentDate = new Date();
let sevenDaysAgo = new Date();
sevenDaysAgo.setDate(currentDate.getDate() - 7);


let sevenDaysAgoRides = db.Rides.find({
    ride_date: {
        $gt: sevenDaysAgo,
        $lt: currentDate
    }
})

sevenDaysAgoRides.array.forEach(ride => {
    printjson(ride)
});