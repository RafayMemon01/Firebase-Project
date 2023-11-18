console.log("script working finnaly");

console.log("Admin Working");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
   //onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const appSettings = {
  databaseURL: "https://salesphere-95e48-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyBJtfXZTIxNyUuYW-4kaumwpWoqaQJw8Ko",
  authDomain: "salesphere-95e48.firebaseapp.com",
  projectId: "salesphere-95e48",
};

const app = initializeApp(appSettings);
const auth = getAuth(app);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Login successful");
      alert("Login successful");
      window.location.href = "./Admin-Dashboard";
    })
    .catch((error) => {
      console.error("Login failed:", error.message);
      alert("Login failed");
    });
});

// const adminDashboardPages = ["/Admin-Dashboard/index.html", "/Admin-Dashboard/script.js","/Admin-Dashboard"]; // Add all pages within the admin-dashboard folder
// if (adminDashboardPages.some(page => window.location.pathname.includes(page))) {
//     onAuthStateChanged(auth, (user) => {
//         if (!user) {
//             // If the user is not authenticated, redirect to the login page
//             window.location.href = "../"; // Change to the actual path of your login page
//         }
//     });
// }
