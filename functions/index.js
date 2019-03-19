const functions = require('firebase-functions');
const express  = require('express');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.

// The Firebase Admin SDK to access the Firebase Realtime Database.

const app1 = express();
app1.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app1.get('/', (req, res) =>{

    admin.database().ref().child("/products").once("value", (snap) =>{
        res.json(snap.exportVal());
    });
    
});


const admin = require('firebase-admin');
admin.initializeApp();
npm
exports.productImage = functions.https.onRequest(app1);
 