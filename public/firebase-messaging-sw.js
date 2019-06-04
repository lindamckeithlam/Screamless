importScripts("https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

var config = {
  apiKey: "AIzaSyAcLRPWPZ_huX8G4gOILf8DFwNDbguspLg",
  authDomain: "screamless-clone.firebaseapp.com",
  databaseURL: "https://screamless-clone.firebaseio.com",
  projectId: "screamless-clone",
  storageBucket: "screamless-clone.appspot.com",
  messagingSenderId: "441015667772",
  appId: "1:441015667772:web:75cfd97d7f44b3e8"
};

firebase.initializeApp(config);
const message = firebase.messaging();

message.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  var notificationTitle = "Panda!";
  var notificationOptions = {
    body: "Background Message body.",
    icon: "../src/images/panda.png"
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
