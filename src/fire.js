import firebase from "firebase";
// var firebaseConfig = {
//   apiKey: "AIzaSyAWbIh-5D99mz3ddykh8dzM2suzMJkar5Y",
//   authDomain: "check-fintech.firebaseapp.com",
//   databaseURL: "https://check-fintech-default-rtdb.firebaseio.com",
//   projectId: "check-fintech",
//   storageBucket: "check-fintech.appspot.com",
//   messagingSenderId: "244738091976",
//   appId: "1:244738091976:web:8ee5c52f8290f25a0daefd",
// };

var firebaseConfig = {
    apiKey: "AIzaSyDt0vfOzOHNAndf_cjNbDIzOI3KxfKy11U",
    authDomain: "vassar-hacks-give-2.firebaseapp.com",
    databaseURL: "https://vassar-hacks-give-2-default-rtdb.firebaseio.com",
    projectId: "vassar-hacks-give-2",
    storageBucket: "vassar-hacks-give-2.appspot.com",
    messagingSenderId: "626208049177",
    appId: "1:626208049177:web:eaf53a43dc9621c66e0288",
    measurementId: "G-XD1HZPBMGX"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);
export default fire;
