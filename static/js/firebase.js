
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, set, get, child  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDmug2IRC9zs3q0CAg5X0zQZoWsIub6D-I",
  authDomain: "begard-portfolio.firebaseapp.com",
  databaseURL: "https://begard-portfolio-default-rtdb.firebaseio.com",
  projectId: "begard-portfolio",
  storageBucket: "begard-portfolio.appspot.com",
  messagingSenderId: "394800492138",
  appId: "1:394800492138:web:4b4563e6bbac62deb92413",
  measurementId: "G-8ERCPD3MGG"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get ref to database service
const db = getDatabase(app);

document.getElementById("submit-fb").addEventListener('click',function(e) {
  e.preventDefault();
  set(ref(db, 'feedback' +document.getElementById('name').value),
  {
    username: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    submissionDate: new Date().toISOString() 

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



document.getElementById("submit-hire").addEventListener('click',function(e) {
  e.preventDefault();
  set(ref(db, 'hire-employer' + ' ' +document.getElementById('hire-name').value),
  {
    username: document.getElementById('hire-name').value,
    email: document.getElementById('hire-email').value,
    message: document.getElementById('hire-message').value,
    submissionDate: new Date().toISOString() 

  });

  messageHire (e)
});


function messageHire (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Hide the form
  document.getElementById("hireForm").style.display = "none";
  // Display the confirmation message
  document.querySelector(".hiremessage").style.display = "flex";
};