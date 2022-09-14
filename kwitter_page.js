//YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyA3APOXyD833_ReNPp67N0UZ1WTMeTEkMs",
  authDomain: "kwitter-a6840.firebaseapp.com",
  databaseURL: "https://kwitter-a6840-default-rtdb.firebaseio.com",
  projectId: "kwitter-a6840",
  storageBucket: "kwitter-a6840.appspot.com",
  messagingSenderId: "222452830875",
  appId: "1:222452830875:web:3822733e051df2a8b8ac3e"
};



function addRoom(){
  localStorage.addItem("room_name");
window.location="kwitter_page.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
     

     

//Start code
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(kwitter_page.html)'>#"+Room_names+"</div><hr>";
//End code
  } });  }); }
getData();

