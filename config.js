// const firebase=require('firebase');

// const firebaseConfig = {
//   apiKey: "AIzaSyCGybvDfcNm6Ndsjl7n8u5Jv8Xu2bPMnw0",
//   authDomain: "tutorial-3b15c.firebaseapp.com",
//   projectId: "tutorial-3b15c",
//   storageBucket: "tutorial-3b15c.firebasestorage.app",
//   messagingSenderId: "485222307546",
//   appId: "1:485222307546:web:142368ac2b183a523a37e3",
//   measurementId: "G-DQFJ5X7RX7"
// };
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const User = db.collection("Users")
// module.exports = User


// const admin = require('firebase-admin');
// const serviceAccount = require('./firebaseServiceKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();
// const Users = db.collection('Users');

// module.exports = Users;

// const push_data

// await db.collection('shops').doc(shop).set({
//   shop, 
//   accessToken,
//   email,
//   installedAt: new Date().toLocaleString()
// });