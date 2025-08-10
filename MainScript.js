var myvid = document.getElementById("MusicVideo");
myvid.volume = 0;
myvid.hidden = true;
myvid.pause();

var toggle = document.getElementById("togglebutton");
toggle.addEventListener("click", function() {
    if (myvid.hidden==true) {
        myvid.hidden = false;
        myvid.volume = 1;
        myvid.play();
        speed.value = speed.value;
        volume.value = volume.value;
    }else {
        myvid.hidden = true;
        myvid.volume = 0;
        myvid.pause();
    }});

var play = document.getElementById("play");

play.addEventListener("click", function() {
    myvid.play();
});

var pause = document.getElementById("pause");
pause.addEventListener("click", function() {
    myvid.pause();
});;

var speed = document.getElementById("speed")
speed.selectedIndex =4;

speed.addEventListener("change", function() {
    myvid.playbackRate = speed.value;
});

var volume = document.getElementById("vol");
volume.selectedIndex =0;

volume.addEventListener("change", function() {
    myvid.volume = (volume.value/100);    
});


myvid.addEventListener('ended', function(e) {
  // get the active source and the next video source.
  // I set it so if there's no next, it loops to the first one
  var activesource = document.querySelector("#MusicVideo source.active");
  var nextsource = document.querySelector("#MusicVideo source.active + source") || document.querySelector("#MusicVideo source:first-child");
  
  // deactivate current source, and activate next one
  activesource.className = "";
  nextsource.className = "active";
  
  // update the video source and play
  myvid.src = nextsource.src;
  speed.selectedIndex =4;
  myvid.volume = volume.value;
  myvid.play();
});

var next = document.getElementById("next");

next.addEventListener("click", function() {
var activesource = document.querySelector("#MusicVideo source.active");
  var nextsource = document.querySelector("#MusicVideo source.active + source") || document.querySelector("#MusicVideo source:first-child");
  
  // deactivate current source, and activate next one
  activesource.className = "";
  nextsource.className = "active";
  
  // update the video source and play
  myvid.src = nextsource.src;
  speed.selectedIndex =4;
  myvid.volume = volume.value;
  myvid.play();
      });
    

// Assuming you have an HTML video element with the ID "myvid"
var prevButton = document.getElementById("previous"); // Replace with your button's ID

prevButton.addEventListener("click", function() {
    console.log("Previous button clicked");
    var activeSource = document.querySelector("#MusicVideo source.active");
    var previousSource = document.querySelector("#MusicVideo source.previous");

    if (previousSource) {
        // Deactivate the current source and activate the previous one
        activeSource.className = ("active");
        previousSource.className =("active");
x
        // Update the video source and play
        myvid.src = previousSource.src;
        myvid.play();
    }
});

const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);  
        let span = document.createElement("span")
        span.innerHTML = "×";
        li.appendChild(span);   
    }
    inputbox.value = "";
    saveData();
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "LI" && e.target.classList("checked")) {
        e.target.classList.remove("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    
}},false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function loadData() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

loadData();

let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("#lang-select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});


    document.querySelector('#listen-button').addEventListener('click', () => {
    speech.text = document.querySelector('.text-to-listen').value;
    window.speechSynthesis.speak(speech);
});
    
// End of text to speech script

// Start of calc script

const display = document.getElementById('display-calc');

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
};

function clearDisplay(){
    display.value = "";
}
   
// End of calc script

// Start of Qr script

let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');
let hexcolor = document.getElementById('Colorcode');

function GenerateQR() {
    //if (qrText.value.length > 0) {
        //qrImg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        //imgBox.classList.add("show-img"); // missing a }
    if (qrText.value.length > 0 && hexcolor.value.length < 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }else if (qrText.value.length > 0 && hexcolor.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value + '&bgcolor=' + hexcolor.value;
        imgBox.classList.add("show-img");
    }else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);   
    }
};
