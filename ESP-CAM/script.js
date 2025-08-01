function set_none(value, id){
        var textarea = document.getElementById(id);
        textarea.value = value;
      }

function toggleCheckbox(x) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/action?go=" + x, true);
      xhr.send();
      }

function speed() {
        var speed = new XMLHttpRequest();
        var speedTextArea = document.getElementById("speed");
        var speedInt = parseInt(speedTextArea.value);
        if (speedInt >= 0 && speedInt <= 255) {
            speed.open("GET", "/action?speed=" + speedTextArea.value, true);
            speed.send();
          } else {
            alert("The Value Must Be between 0 and 255");
          }
        }

function brightness() {
        var brightness = new XMLHttpRequest();
        var brightnessTextArea = document.getElementById("brightness");
        var brightnessInt = parseInt(brightnessTextArea.value);
        if (brightnessInt >= 0 && brightnessInt <= 255) {
          brightness.open("GET", "/action?brightness=" + brightnessTextArea.value, true);
          brightness.send();
          } else {
            alert("The Value Must Be between 0 and 255");
          }
        }

// window.onload = document.getElementById("photo").src = window.location.href.slice(0, -1) + ":81/stream";
// window.onload = set_none("", "speed");
// window.onload = set_none("", "brightness");

window.onload = function() {
        document.getElementById("photo").src = window.location.href.slice(0, -1) + ":81/stream";
        set_none("", "speed");
        set_none("", "brightness");
      };