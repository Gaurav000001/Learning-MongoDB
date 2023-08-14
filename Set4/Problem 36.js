// **Problem 36:**

// - **Prerequisite**: Understand using the MAX and MIN functions in SQL / using sort and limit in MongoDB
// - **Problem**: Write a query to find the ride with the highest and lowest **`fare`**.



// Ride with the highest fare
const highestFareRide = db.Rides.aggregate([
  { $sort: { fare: -1 } },
  { $limit: 1 }
]).toArray()[0];

// Ride with the lowest fare
const lowestFareRide = db.Rides.aggregate([
  { $sort: { fare: 1 } },
  { $limit: 1 }
]).toArray()[0];

print("Ride with the highest fare:");
printjson(highestFareRide);

print("Ride with the lowest fare:");
printjson(lowestFareRide);
