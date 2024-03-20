
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, set, get, child  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: `${process.env.api_Key}`,
  authDomain: `${process.env.auth_Domain}`,
  projectId: `${process.env.project_Id}`,
  storageBucket: `${process.env.storage_Bucket}`,
  messagingSenderId: `${process.env.messaging_SenderId}`,
  appId: `${process.env.app_Id}`,
  measurementId: `${process.env.measurement_Id}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get ref to database service
const db = getDatabase(app);

document.getElementById("submit-fb").addEventListener('click',function(e) {
  e.preventDefault();
  set(ref(db, 'name' +document.getElementById('name').value),
  {
    username: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value

  });
  message (e)
 
  // alert('Thank you for your feedback.');
});

function message (e) {
  e.preventDefault(); // Prevent the form from submitting normally
  
  // Hide the form
  document.getElementById("feedback-form").style.display = "none";
  document.querySelector(".feedbak-header").style.display = "none";
  // Display the confirmation message
  document.querySelector(".message").style.display = "flex";
};
