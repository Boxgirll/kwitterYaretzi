
//AÑADE TUS ENLACES DE FIREBASE
// Your web app's Firebase configuration
      var firebaseConfig = {
      apiKey: "AIzaSyAZ29Zkv2kTxyOunYAUIV-zAFBpNtz6qfI",
      authDomain: "kwitter-5b807.firebaseapp.com",
      databaseURL:"https://kwitter-5b807-default-rtdb.firebaseio.com/",
      projectId: "kwitter-5b807",
      storageBucket: "kwitter-5b807.appspot.com",
      messagingSenderId: "672808646090",
      appId: "1:672808646090:web:c7479aebd6d7c3cddecb33"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("room name -" + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)' > #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();

function AddRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}
function redirectToRoomName(name){
      console.log(name); localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}