const firebaseConfig = {
  apiKey: "AIzaSyC1dXYT25h6orUjgbQsJNtde8ReB-XDjaQ",
  authDomain: "xanky-8676d.firebaseapp.com",
  databaseURL:
    "https://xanky-8676d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "xanky-8676d",
  storageBucket: "xanky-8676d.appspot.com",
  messagingSenderId: "1005034946014",
  appId: "1:1005034946014:web:caaa1b274af1c0f58db14f",
};

let database = undefined;

const connectToFirebase = () => {
  !database && firebase.initializeApp(firebaseConfig);
  database = firebase.database().ref("messages");
  database.on("child_added", (data) => refreshMessages(data.val()));
  database.on("child_removed", (data) => {
    refreshMessages(data.val());
  });
};

const newMessage = (message) => {
  database &&
    database.push().set({
      author: message.author,
      content: message.content,
    });
};

const deleteMessages = () => {
  database.remove();
};
