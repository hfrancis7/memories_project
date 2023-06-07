import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express(); //initialize app with express

//set posts routes
// localhost:3000/posts/
app.use('/posts', postRoutes);

//set up things on app like bodyparser and cors
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL || "mongodb://127.0.0.1:27017/memories";
const PORT = process.env.PORT || 3001;

//not required, but will get warnings in console if you don't use useNewUrlParser and useUnifiedTopology
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`)}))
.catch((err) => console.log(err.message));

// this was in the tutorial but was saying wasn't a valid thing to set
//mongoose.set('useFindAndModify', false);



