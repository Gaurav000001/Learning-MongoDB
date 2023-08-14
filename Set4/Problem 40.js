// **Problem 40:**

// - **Prerequisite**: Understand the concept of subqueries in SQL / using multiple stages 
// in MongoDB's aggregate pipeline
// - **Problem**: Write a query to find the top 3 drivers who have earned the most from fares. 
// Return the drivers' ids and total earnings.




let e = 

db.Rides.aggregate(
    [
        {
            $group: {
                _id: "$driver_id",
                totalEarnings: {$sum: "$fare"}
            },
        },
        {$sort: {totalEarnings: -1}},
        {$limit: 3},
        {
            $project: {
                _id: 1,
                totalEarnings: 1
            }
        }
    ]
)

print(e)
