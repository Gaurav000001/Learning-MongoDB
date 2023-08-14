// **Problem 37:**

// - **Prerequisite**: Understand using the GROUP BY clause in SQL / using aggregate in MongoDB
// - **Problem**: Write a query to find the average **`fare`** and **`distance`** for each **`driver_id`**.



let avg_fare_distance = 

db.Rides.aggregate(
    [
        {
            $group: {
                _id: "$drivar_id",
                avgFare: {$avg: "$fare"},
                avgDistance: {$avg: "$distance"}
            }
        }
    ]
).toArray()

if (avg_fare_distance.length > 0) {
    let avg_fare = avg_fare_distance[0]['avgFare'];
    let avg_distance = avg_fare_distance[0]['avgDistance'];
  
    print("Average fare: ");
    printjson(avg_fare);
  
    print("Average Distance: ");
    printjson(avg_distance);

  } else {
    print("No data available.");
  }