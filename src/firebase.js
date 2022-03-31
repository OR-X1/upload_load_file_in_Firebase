
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAgyN3D-5M1hz7CyR-YM_ea0Kt3h_u5XMU",
    authDomain: "megastore-79b73.firebaseapp.com",
    projectId: "megastore-79b73",
    storageBucket: "megastore-79b73.appspot.com",
    messagingSenderId: "518097544603",
    appId: "1:518097544603:web:dec2b4155f15b4bf6a6d3e",
    measurementId: "G-Z1W6X9PC8D"
  };
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;