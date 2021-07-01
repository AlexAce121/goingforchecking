var firebaseConfig = {
    apiKey: "AIzaSyClmziqEFU-GHGxoyiudXma3s9vWiPoE7I",
    authDomain: "kwitter-redecorated-4eefe.firebaseapp.com",
    databaseURL: "https://kwitter-redecorated-4eefe-default-rtdb.firebaseio.com",
    projectId: "kwitter-redecorated-4eefe",
    storageBucket: "kwitter-redecorated-4eefe.appspot.com",
    messagingSenderId: "171744170519",
    appId: "1:171744170519:web:f4c38775f3d61223764252"
  };
  firebase.initializeApp(firebaseConfig);

  var usernamee = localStorage.getItem("username");
  console.log(usernamee);
  document.getElementById("welcome").innerHTML = "Welcome " + usernamee + "!";

 function AddNewRoom(){
  var Room_Name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(Room_names).update({
    purpose:"addingRoom"

});
localStorage.set("roomName" , Room_names);
window.location = "chat.html";

 }

 function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

row = "<div class ='room_name' id= " + Room_names +" onclick='redirectToRoom(this.id)' >#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
});});}
getData(); 


function redirectToRoom(name){
  localStorage.setItem("room_name" , name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("username");
  window.location="kwitter.html"
}
