 import dotenv from "dotenv";
// dotenv.config({path:'./.env'});
dotenv.config();
import express from 'express';
import cors from 'cors';
import { fetchShopifyProducts } from "./FetchData.js";
import db from './firebase.js'; 
// import { User } from "./config.js"; 



const app = express();
app.use(express.json());
app.use(cors()); 
const User = db.collection('Users');

// app.post('/create', async(req,res)=>{
//     try{
//             const data =req.body
//     console.log("Data of Users", data)
//     await User.add(data)  
//     res.send({msg:"User created successfully!"})
//     }catch(err){
//         console.error(err);
//         res.status(500).send({ msg: "Something went wrong!" });
//     }
// })

app.get('/', async(req,res)=>{
    try{
        const imageData = await fetchShopifyProducts();
        console.log("Image Data:", imageData);

        // const snapshot = await User.get();
        // const ids = snapshot.docs.map((doc)=>doc.id)
        // const list = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))
        // res.send(list)
        res.json(imageData);
    }catch(err){
        console.error(err);
        res.status(500).send({ msg: "Error fetching users" });
    }
    
})

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from backend!" });
});


app.listen(4000, () => {
    console.log('Server is running on port 4000')
})