// eslint-disable-next-line import/no-webpack-loader-syntax
import 'script-loader!../src/vendor/airconsole-1.7.0';
// import 'script-loader!../src/vendor/airconsole-1.7.0';
export function setupConsole() {
  const airconsole = new window.AirConsole();
  // action when a device connects
  airconsole.onConnect = function (device_id) {
    // assign player to device
    // checkTwoPlayers();
  };

  // action when a device disconnects
  airconsole.onDisconnect = function (device_id) {
    var player = airconsole.convertDeviceIdToPlayerNumber(device_id);
    if (player != undefined) {
      // Player that was in game left the game
      // Setting active players to length 0
      airconsole.setActivePlayers(0); // set active players tells which devices should get a player number
    }
    // checkTwoPlayers();
  };

  airconsole.onMessage = function (device_id, data) {
    var player = airconsole.convertDeviceIdToPlayerNumber(device_id);
    if (player != undefined && data.move !== undefined) {
      // data object holds custom data like { move: 50 }
      // send data back to main
    }
  };

  // function checkTwoPlayers() {
  //   // Only update if the game didn't have active players.
  //     if (active_players.length == 0) {
  //       if (connected_controllers.length >= 2) {
  //         // Enough controller devices connected to start the game.
  //         // Setting the first 2 controllers to active players.
  //         airconsole.setActivePlayers(2);
  //         score = [0, 0];
  //         score_el.innerHTML = score.join(":");
  //         document.getElementById("wait").innerHTML = "";          
  //       } else if (connected_controllers.length == 1) {
  //         document.getElementById("wait").innerHTML = "Need 1 more player!";        
  //         // reset game
  //       } else if (connected_controllers.length == 0) {
  //         document.getElementById("wait").innerHTML = "Need 2 more players!";
  //         // reset game
  //     }
  //   }
  // }
}