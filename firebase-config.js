const firebaseConfig = {
  apiKey: "AIzaSyD_O9c-3FhOqPcaMuY8mfc0gvI0IFcOqHY",
  authDomain: "zerowaste-a7d52.firebaseapp.com",
  databaseURL: "https://zerowaste-a7d52-default-rtdb.firebaseio.com",
  projectId: "zerowaste-a7d52",
  storageBucket: "zerowaste-a7d52.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "948595794347",
  appId: "1:948595794347:web:c62cac51d1b46e27de72ee",
  measurementId: "G-PBCS66JXZ8"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}