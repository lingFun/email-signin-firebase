import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyCodIw9wcNscuMIqKYog64ur6wapdJsrpw",
    authDomain: "my-project-90e16.firebaseapp.com",
    databaseURL: "https://my-project-90e16.firebaseio.com",
    projectId: "my-project-90e16",
    storageBucket: "my-project-90e16.appspot.com",
    messagingSenderId: "332719485617"
    // appId: "1:332719485617:web:15c4d091416ec64a7ce890",
    // measurementId: "G-235862QBWK"
  };

  class Firebase {
      constructor() {
          app.initializeApp(config);

          this.auth = app.auth();
          this.db = app.database();
      }

      //  ***Auth API***
      doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

      doSignInWithEmailAndPassword = (email, password) =>
        // this.auth.signInAndRetrieveDataWithCredential(email, password);
        this.auth.signInWithEmailAndPassword(email, password);

      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

      //  ***User API***
      user = uid => this.db.ref(`user/${uid}`);
      users = () => this.db.ref('users');

  }

  export default Firebase;