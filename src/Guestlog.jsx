import './Guestlog.css'
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';



function Guestlog() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const docRef = await addDoc(collection(db, "collectionName"), {
            field: "value"
          });
        } catch (e) { console.error(e); }
    };

    return (
        <div>
            <h3>Put your name down and a message!</h3>
            <input id="nameBox" placeholder="Name"></input>
            <textarea id="messageBox" placeholder="Message"></textarea>
            <button>Submit</button>
        </div>
    )
}

export default Guestlog