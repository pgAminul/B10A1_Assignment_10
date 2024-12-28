require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.USER_DB;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const database = client.db("newProducts").collection("product");
    app.get("/", (req, res) => {
      res.send("hello");
    });
    app.post("/products", async (req, res) => {
      const body = req.body;
      const result = await database.insertOne(body);
      res.send(result);
      console.log(result);
    });
    app.get("/homeCard", async (req, res) => {
      const allData = database.find().limit(6);
      const result = await allData.toArray();
      res.send(result);
    });
    app.get("/allData", async (req, res) => {
      const data = database.find();
      const result = await data.toArray();
      res.send(result);
    });

    app.get("/matchEmail", async (req, res) => {
      const email = req.query.email;
      const data = database.find({ userEmail: email });
      const result = await data.toArray();
      res.send(result);
    });
    app.get("/sorted", async (req, res) => {
      // simple way to sort data from server

      // const data = database.find().sort({ price: -1 });
      // const result = await data.toArray();
      // res.send(result);

      // multiple sort data funtionality

      const { sortType } = req.query;

      try {
        let data;
        if (sortType === "Ascending") {
          data = database.find().sort({ price: 1 }); // Ascending order
        } else if (sortType === "Descending") {
          data = database.find().sort({ price: -1 }); // Descending order
        } else {
          data = database.find(); // Default (unsorted)
        }

        const result = await data.toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Error fetching sorted data", error });
      }
    });
    app.delete("/deleteData/:id", async (req, res) => {
      const id = req.params.id;
      const data = { _id: new ObjectId(id) };
      const result = await database.deleteOne(data);
      res.send(result);
    });
    app.patch("/updateData/:id", async (req, res) => {
      const id = req.params.id;
      const body = req.body;
      const data = { _id: new ObjectId(id) };
      const allData = {
        $set: {
          imageUrl: body.imageUrl,
          itemName: body.itemName,
          categoryName: body.categoryName,
          description: body.description,
          price: body.price,
          rating: body.rating,
          customization: body.customization,
          processingTime: body.processingTime,
          stockStatus: body.stockStatus,
          userEmail: body.userEmail,
          userName: body.userName,
        },
      };
      try {
        const updateData = await database.updateOne(data, allData);
        res.send(updateData);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

module.exports = app;
