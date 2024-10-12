import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL!);
let isConnected = false;

async function connectToDatabase() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
}

async function checkConnection() {
  try {
    await client.db("admin").command({ ping: 1 });
  } catch (error) {
    console.warn("Connection lost, reconnecting...");
    isConnected = false;
    await connectToDatabase();
  }
}

export async function getCollection(collectionName: string) {
  await checkConnection();
  const db = client.db("fideo");
  return db.collection(collectionName);
}