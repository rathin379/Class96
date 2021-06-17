//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD7MastMJvlR2nMGQmPYB3WQNZ6GwlzWTw",
      authDomain: "kwitter-f04d6.firebaseapp.com",
      databaseURL: "https://kwitter-f04d6-default-rtdb.firebaseio.com",
      projectId: "kwitter-f04d6",
      storageBucket: "kwitter-f04d6.appspot.com",
      messagingSenderId: "1061127804210",
      appId: "1:1061127804210:web:280921d95bac10411ef32b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name")
  room_name = localStorage.getItem("room_name")


function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like: 0
      });
document.getElementById("msg").value = "";
}






function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}