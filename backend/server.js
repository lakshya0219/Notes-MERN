import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();
// dotenv.config() reads a .env file in your project root.
// It adds each variable from the file to process.env, so you can use them in your code.
const app = express(); //is how you create an Express application in Node.js

app.use(cors()); //allows requests from different domains (frontend → backend).
app.use(express.json()); //allows your server to read JSON data sent by clients.

import noteRoutes from "./routes/noteRoutes.js";
app.use("/api/notes", noteRoutes); 
// Tells your Express app:
// "For any request that starts with /api/notes, use the routes defined in noteRoutes."
// Effectively, this prefixes all routes in noteRoutes with /api/notes.

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch(err => console.log(err));
