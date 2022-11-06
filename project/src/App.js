import React from 'react';
import './App.css';
import {Button} from '@mui/material'

import { collection, doc, addDoc, getDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj5OgO-GJLetg8TTKDADtBUTNQRVuEds8",
  authDomain: "newhacks-b144e.firebaseapp.com",
  projectId: "newhacks-b144e",
  storageBucket: "newhacks-b144e.appspot.com",
  messagingSenderId: "737121549886",
  appId: "1:737121549886:web:e5c6f6efa1743523765b6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const addlink = async (url, title, body, id) => {

  await addDoc(collection(db, 'articles'), {
    url: url,
    title: title,
    body: body,
    id : id
  })
}

const docRef = doc(db, "articles", "nr69MTOI17jlR6IZNnfQ");

const getData = async (e) => {

  const docSnap = await getDoc(docRef);
  console.log(docSnap.data().title);
}


function App() {
  return (
    <div className="App">
      <header>
        <Button variant = "contained" onClick = {addlink}> Click to kill another brain cell</Button>
        <Button variant='text' onClick={getData}>get data</Button>
      </header>
    </div>
  );
}

export default App;