import { initializeApp } from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyD72jDmiXpkTT0fgUjs4ifv8rrnS-wPOkU",
  authDomain: "react-contact-e23dc.firebaseapp.com",
  projectId: "react-contact-e23dc",
  storageBucket: "react-contact-e23dc.appspot.com",
  messagingSenderId: "51129046565",
  appId: "1:51129046565:web:866a30def68862a9e791cc"
};





const fireDb = initializeApp(firebaseConfig);
  export default fireDb;