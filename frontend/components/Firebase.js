import firebase from "firebase";

export const initializeFirebase = () => {
  firebase.initializeApp({ messagingSenderId: "441015667772" });
};
