// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.2.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.2.0/firebase-analytics.js"></script>

import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCgIV_TBHrxCNG5Hw3HECo2WGxGl2oOkbM',
  authDomain: 'accessibility-frontend.firebaseapp.com',
  databaseURL: 'https://accessibility-frontend.firebaseio.com',
  projectId: 'accessibility-frontend',
  storageBucket: 'accessibility-frontend.appspot.com',
  messagingSenderId: '805489018779',
  appId: '1:805489018779:web:b3e0f0b2939a05ddbf433e',
  measurementId: 'G-8LQH808338'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
