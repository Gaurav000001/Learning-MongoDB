// **Problem 42:**

// - **Prerequisite**: Understand the concept of NULL values and how to handle them in SQL / MongoDB
// - **Problem**: Write a query to find all rides where the **`end_location`** is not set.



let ridesWhereEndLocationNotSet = db.Rides.find(
    {
        $or: [
            {end_location: {$exists: false}},
            {end_location: null}
        ]
    }
)