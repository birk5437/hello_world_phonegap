// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//         $('.derp').addEventListener('deviceready', this.onDerpTap, false);

//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicity call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         app.receivedEvent('deviceready');
//     },
//     onDerpTap: function() {
//       alert("HERP");
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');

//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');

//         alert('Received Event: ' + id);
//     }
// };


// $('#deviceready').bind('pageinit', function(event) {
//   $(".listening").setAttribute('style', 'display:none;');
//   $(".received").setAttribute('style', 'display:block;');
// });

$( document ).on( "ready", function(){ 
  alert("DERP");
  StatusBar.overlaysWebView( false );
  StatusBar.backgroundColorByName( "gray" );
  alert("HERP");
});