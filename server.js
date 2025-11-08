const express = require('express');
const db_connection = require('./database/db.js');
const cors = require('cors');
require('dotenv').config();
const useRoutes = require('./userRouters/user.route.js');
const postRoutes = require('./userRouters/post.route.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//user api
app.use("/api/v1/user",useRoutes);

//post api
app.use("/api/posts",postRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT,async()=>{
    await db_connection();
    console.log(`server is running at http://localhost:${PORT}`);
})