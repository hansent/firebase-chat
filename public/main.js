var $ = require('jquery');

var rootRef = new Firebase("https://deviowatest3.firebaseio.com/");
var messagesRef = rootRef.child('messages');

var username = "aonymous";

var authClient = new FirebaseSimpleLogin(rootRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log("User ID: " + user.uid + ", Provider: " + user.provider);
    username = user.username;
  } else {
    // user is logged out
    username = "aonymous";
  }
});

authClient.login("github")






// on message from firebase
messagesRef.on('child_added', function(snapshot){
    var m = snapshot.val();
    var messageElement = $(ich.message(snapshot.val()));
    $(".messages").append(messageElement);
});


// on user input, push message to firebse
$(".message-input").keypress(function(evt){
    if(evt.charCode == 13){
        var msg = $(".message-input").val();
        console.log("sending", {username: username, text: msg})
        messagesRef.push({username: username, text: msg});
        $(".message-input").val("");
    }
});







// var users = new Firebase("https://deviowatest2.firebaseio.com/users");
// var username = prompt("whats your username?");
// users.push(username);





// users.on('child_added', function(snapshot){
//     console.log("user joines", snapshot.val());
// })




