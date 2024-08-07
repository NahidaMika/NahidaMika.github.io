var myvid = document.getElementById('MusicVideo');
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
        myvid.value = volume.value
    }else {
        myvid.hidden = true;
        myvid.volume = 0;
        myvid.pause();
        volume.value = volume.value;
        speed.value = speed.value;
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
        // Update the video source and play
        myvid.src = previousSource.src;
        myvid.play();
    }
});

//var goback = document.getElementById("goback");

//goback.addEventListener("click", function() {
    //window.location.href = "http://192.168.0.3:8080/";} )

var gobackbutton = document.getElementById("goback");
var ip = location.host;
    
function GoBack() {
    window.history.back();
    //window.location.href="http://"+ip+"/"; 
    }
    
gobackbutton.addEventListener('click', function() {
    gobackbutton.onclick = GoBack();
});