// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_x9eYzXysOvf3OVR-C6XePrrnPGpCIio",
  authDomain: "utm-2023.firebaseapp.com",
  projectId: "utm-2023",
  storageBucket: "utm-2023.appspot.com",
  messagingSenderId: "1087279555623",
  appId: "1:1087279555623:web:546e23fc9abed42f1a5a02"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// Variable to access database collection
const db = firestore.collection("formData");

// Get Submit Form
let submitButton = document.getElementById("loginButton");

// Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  // Prevent Default Form Submission Behavior
  e.preventDefault();

  // Get Form Values
  let email = document.getElementById("correo").value;
  let password = document.getElementById("contraseña").value;

  firestore.collection("formData").get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      const fn = doc.data().email;
      if (email === fn) {
        console.log("Already Exists");
      }
    });
  });

  // Save Form Data To Firebase
  db.add({
    email: email, // Fix variable name
    password: password, // Fix variable name
  })
  .then(() => { })
  .catch((error) => {
    console.log(error);
  });

  // Clear form after submission
  function clearForm() {
    document.getElementById("loginForm").reset(); // Assuming your form has an ID of "loginForm"
  }
  clearForm();
});
