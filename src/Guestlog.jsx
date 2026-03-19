import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp
} from "firebase/firestore";
import { db, auth, provider } from './firebase'; // Custom Firebase config
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'; // Auth methods
import './Guestlog.css'

function Guestlog() {
  //for list
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  //for sign in
  const [user, setUser] = useState(null);

  // Ask google very nicely to do login
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider); // Triggers Google login flow
    } catch (error) {
      console.error('Login failed', error); // Catch and display any login errors
    }
  };
  // Ask google very nicely to log out
  const handleLogout = async () => {
    try {
      await signOut(auth); // Signs out the current user
      setUser(null); // Clear the user from local state
    } catch (error) {
      console.error('Logout failed', error); // Catch and display logout errors
    }
  };



  // --- READ: Load items from Firestore ---
  const loadItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const loaded = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setItems(loaded);
  };
  // Load items once when the page first renders
  useEffect(() => {loadItems();}, []);
  // --- WRITE: Add a new item to Firestore ---
  const handleAdd = async () => {
    if (inputText.trim() === "") return;
    await addDoc(collection(db, "items"), {
      name: user.displayName,
      text: inputText,
      createdAt: serverTimestamp()
    });
    setInputText("");   // clear the input
    loadItems();        // refresh the list




  };
  useEffect(() => {
    // Set up a listener that triggers every time the auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state with the logged-in user
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);  


  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      {/* Input + Button */}

      <div>
      <p id="pleaseLogIn">Please log in to use the Guest Log</p>
      {/* If user is logged in, show greeting, logout button, and messages */}
      {user ? (
        <div>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        // If no user is logged in, show login button
        //test commit
        <div>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </div>

      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add Message"
        />
        <button onClick={handleAdd} id="submitButton">Submit!</button>
      </div>
      {/* List of items from Firestore */}
      <h2>Messages:</h2>
      {items.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
      <table>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>      
    )}
    </div>
  );
}
export default Guestlog;
