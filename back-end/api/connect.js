import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://danieldoreino:mCj6AFksv9sUhf6@cluster0.a6rq3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("SpotifyProject");

console.log(db);

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
