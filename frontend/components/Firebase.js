import firebase from "firebase";
import Push from "push.js";
import "firebase/database";
import "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyAcLRPWPZ_huX8G4gOILf8DFwNDbguspLg",
  authDomain: "screamless-clone.firebaseapp.com",
  databaseURL: "https://screamless-clone.firebaseio.com",
  projectId: "screamless-clone",
  storageBucket: "screamless-clone.appspot.com",
  messagingSenderId: "441015667772",
  appId: "1:441015667772:web:75cfd97d7f44b3e8"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  "BFurC3OBF6MHlcpvqdPF9uFW3GIeScP6NInzo0tih1CW7ZKBUb1lIJUnGbVbcvDq_kp6Xiyhwm_jjD-BdJmRYL0"
);

Push.config({
  FCM: firebaseConfig
});

// Notification.requestPermission().then(function(permission) {
//   if (permission === "granted") {
//     console.log("Notification permission granted.");
//     // TODO(developer): Retrieve an Instance ID token for use with FCM.
//     // ...
//   } else {
//     console.log("Unable to get permission to notify.");
//   }
// });
