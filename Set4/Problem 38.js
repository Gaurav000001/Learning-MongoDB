// **Problem 38:**

// - **Prerequisite**: Understand using HAVING clause in SQL / using match in MongoDB's aggregate pipeline
// - **Problem**: Write a query to find **`driver_id`** that have completed more than 5 rides.



let e = 
db.Rides.aggregate(
    [
        {
            $group: {
                _id: "$driver_id",
                rides: {$sum: 1}
            }
        }
    ]
).toArray()

for(let i=0;i<e.length;i++){
    if(e[i]['rides'] >= 5) printjson(e[i]['_id'])
}

printjson(e)