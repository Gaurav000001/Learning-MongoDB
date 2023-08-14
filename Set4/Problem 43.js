// **Problem 43:**

// - **Prerequisite**: Understand the use of complex mathematical operations in SQL / MongoDB
// - **Problem**: Write a query to calculate the fare per mile for each ride and return the ride ids 
// and their fare per mile, ordered by fare per mile in descending order.



let e = db.Rides.aggregate([
    {
        $addFields: {
            farePerMile: {
                $round: [{$divide: ["$fare", "$distance"]}, 2]
            }
        }
    },
    { $sort: {farePerMile: -1}},
    {
        $project: {
            _id: 1,
            farePerMile: 1
        }
    }
]).toArray()


printjson(e)