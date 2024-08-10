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

//var myvid = document.getElementById('MusicVideo');
//var myvids = [
    //"file:///C:\Users\tleyo\Desktop\html\music\【Animation MV】 What an amazing swing _角巻わため【original】.mp4", 
    //"file:///C:\Users\tleyo\Desktop\html\music\【MV】 Oh! Asmara - Kobo Kanaeru.mp4",
    //"file:///C:\Users\tleyo\Desktop\html\music\【MV】HELP!! - Kobo Kanaeru.mp4",
    //"file:///C:\Users\tleyo\Desktop\html\music\【original anime MV】III【hololive_宝鐘マリン＆こぼ・かなえる】.mp4",
    //"file:///C:\Users\tleyo\Desktop\html\music\Overdose - Kobo Kanaeru (Cover).mp4",
    //"file:///C:\Users\tleyo\Desktop\html\music\ずっと真夜中でいいのに。『お勉強しといてよ』MV (ZUTOMAYO – STUDY ME).mp4",
    //"file:///C:\Users\tleyo\Desktop\html\music\ずっと真夜中でいいのに。『ハゼ馳せる果てるまで』MV.mp4",
    //"file:///C:\Users\tleyo\Desktop\html\music\ずっと真夜中でいいのに。『嘘じゃない』MV (ZUTOMAYO – Truth In Lies).mp4",
    //"file:///C:\Users\tleyo\Desktop\html\music\ずっと真夜中でいいのに。『暗く黒く』MV（ZUTOMAYO – DARKEN）.mp4",
    //"file:///C:\Users\tleyo\Desktop\html\music\ずっと真夜中でいいのに。『秒針を噛む』MV (ZUTOMAYO – Byoushinwo Kamu).mp4",
    //"file:///C:\Users\tleyo\Desktop\html\music\ずっと真夜中でいいのに。『綺羅キラー (feat. Mori Calliope)』MV (ZUTOMAYO – Kira Killer).mp4",
    //"file:///C:\Users\tleyo\Desktop\html\music\ビビデバ _ 星街すいせい(official).mp4",
    //"file:///C:\Users\tleyo\Desktop\html\music\美波「カワキヲアメク」MV.mp4"
  //];
//var activeVideo = 0;

//myvid.addEventListener('ended', function(e) {
  // update the new active video index
  //activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  //myvid.src = myvids[activeVideo];
  //myvid.play();
//});


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

//const gameredirect = document.getElementById("redirectbutton");

//gameredirect.addEventListener("click", function() {
    //window.location.href='http://192.168.0.3:8080/webserver2';
//});

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

// function json(url) {
       // return fetch(url).then(res => res.json());
      // }
      
      //let apiKey = 'your_api_key';
      //json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
       // console.log(data.ip);
       // console.log(data.city);
       // console.log(data.country_code);
        // so many more properties
     // });    

// function getIPFromAmazon() {
    // fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data => console.log(data))
// }
      
// Text to speech script
//----------------------------------------------------------------

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
