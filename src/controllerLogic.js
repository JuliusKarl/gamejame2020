function controllerLogic() {

    var airconsole;
    var cardsInHand = [0, 0, 1, 3, 2, 1];

    this.airconsole = new AirConsole({"orientation":"portrait"});
    
    /*
     * Here we are adding support for mouse events manually.
     * --> WE STRONGLY ENCOURAGE YOU TO USE THE AIRCONSOLE CONTROLS LIBRARY
     * WHICH IS EVEN BETTER (BUT WE DONT WANT TO BLOAT THE CODE HERE).
     * https://github.com/AirConsole/airconsole-controls/
     * 
     * DO NOT USE ONCLICK HANDLERS.
     * THEY ADD A 200MS DELAY!
     */
    if (!("ontouchstart" in document.createElement("div"))) {
      var elements = document.getElementsByTagName("*");
      for (var i = 0; i < elements.length; ++i) {
        var element = elements[i];
        var ontouchstart = element.getAttribute("ontouchstart");
        if (ontouchstart) {
          element.setAttribute("onmousedown", ontouchstart);
        }
        var ontouchend = element.getAttribute("ontouchend");
        if (ontouchend) {
          element.setAttribute("onmouseup", ontouchend);
        }
      }
    }
  }

  App.prototype.sendMessageToScreen = function(msg) {
    console.log("card pressed");
    this.airconsole.message(AirConsole.SCREEN, {"action":msg});
  }