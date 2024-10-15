const {MongoClient}=require("mongodb")
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@atlascluster.8tdja.mongodb.net/Cricket-data?retryWrites=true&w=majority`; // Replace with your MongoDB Atlas connection string
    
const client = new MongoClient(uri);

module.exports.api_data=async (req,res)=> {
  
    try {
      await client.connect();      
      const database = client.db("Cricket-data"); 
      const collection = database.collection("crickets");
      const data = await collection.find({}).toArray();
      res.send(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
}
