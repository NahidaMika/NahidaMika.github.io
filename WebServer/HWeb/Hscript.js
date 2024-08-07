var myvid = document.getElementById('HlaVid');

myvid.volume = 0;
myvid.hidden = true;
myvid.pause();
SourceName();

var toggle = document.getElementById("togglebutton");
toggle.addEventListener("click", function() {
    if (myvid.hidden==true) {
        myvid.hidden = false;
        myvid.volume = 1;
        myvid.play();
        speed.value = speed.value;
        volume.value = volume.value;
        myvid.value = volume.value;
       
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
  var activesource = document.querySelector("#HlaVid source.active");
  var nextsource = document.querySelector("#HlaVid source.active + source") || document.querySelector("#HlaVid source:first-child");
  
  // deactivate current source, and activate next one
  activesource.className = "";
  nextsource.className = "active";
  
  // update the video source and play
  myvid.src = nextsource.src;
  speed.selectedIndex =4;
  myvid.volume = volume.value;
  myvid.play();
  SourceName ()
});


var next = document.getElementById("next");

next.addEventListener("click", function() {
var activesource = document.querySelector("#HlaVid source.active");
  var nextsource = document.querySelector("#HlaVid source.active + source") || document.querySelector("#HlaVid source:first-child");
  
  // deactivate current source, and activate next one
  activesource.className = "";
  nextsource.className = "active";
  
  // update the video source and play
  myvid.src = nextsource.src;
  speed.selectedIndex =4;
  myvid.volume = volume.value;
  myvid.play();
  SourceName ()
      });
    

// Assuming you have an HTML video element with the ID "myvid"
var prevButton = document.getElementById("previous"); // Replace with your button's ID

prevButton.addEventListener("click", function() {
    console.log("Previous button clicked");
    var activeSource = document.querySelector("#HlaVid source.active");
    var previousSource = document.querySelector("#HlaVid source.previous");

    if (previousSource) {
        // Deactivate the current source and activate the previous one
        activeSource.className = ("active");
        previousSource.className =("active");
        // Update the video source and play
        myvid.src = previousSource.src;
        myvid.play();
        SourceName ()
    }
});

//var goback = document.getElementById("goback");

//goback.addEventListener("click", function() {
    //window.location.href = "http://192.168.0.6:8080/";} )

//const showsourcename = document.getElementById("Sourcename");

// ctrl + shift + L   
function SourceName () {
var showsourcename = document.getElementById("Sourcename");

if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA%20Nocturnal%201.mp4"){
    showsourcename.textContent = "Nocturnal 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_69ItsuwarinoBishou_1.mp4") {
    showsourcename.textContent = "69ItsuwarinoBishou 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_69ItsuwarinoBishou_2.mp4") {
    showsourcename.textContent = "69ItsuwarinoBishou 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Abandon100NukiShinaitoDerarenaiFushiginaKyoushitsu_1.mp4") {
    showsourcename.textContent = "Abandon 100 Nuki Shinai to Derarenai Fushigina Kyoushitsu 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Abandon100NukiShinaitoDerarenaiFushiginaKyoushitsu_2.mp4") {
    showsourcename.textContent = "Abandon 100 Nuki Shinai to Derarenai Fushigina Kyoushitsu 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_AkanewaTsumareSomerareru_1.mp4") {
    showsourcename.textContent = "Akanewa Tsumare Somerareru 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_AkanewaTsumareSomerareru_2_e1TV.mp4") {
    showsourcename.textContent = "Akanewa Tsumare Somerareru 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_BokuniSefuregaDekitaRiyuu_1.mp4") {
    showsourcename.textContent = "BokuniSefuregaDekitaRiyuu 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_BokuniSefuregaDekitaRiyuu_2.mp4") {
    showsourcename.textContent = "BokuniSefuregaDekitaRiyuu 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_BokuniSefuregaDekitaRiyuu_3.mp4") {
    showsourcename.textContent = "BokuniSefuregaDekitaRiyuu 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_BokuniSefuregaDekitaRiyuu_4.mp4") {
    showsourcename.textContent = "BokuniSefuregaDekitaRiyuu 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_BokuniSefuregaDekitaRiyuu_5.mp4") {
    showsourcename.textContent = "BokuniSefuregaDekitaRiyuu 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_BokuniSefuregaDekitaRiyuu_6.mp4") {
    showsourcename.textContent = "BokuniSefuregaDekitaRiyuu 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_CosplayChangePure-KeiJoshidaiseinoKikennaSeiheki_1.mp4") {
    showsourcename.textContent = "CosplayChangePure-KeiJoshidaiseinoKikennaSeiheki 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_CosplayChangePure-KeiJoshidaiseinoKikennaSeiheki_2.mp4") {
    showsourcename.textContent = "CosplayChangePure-KeiJoshidaiseinoKikennaSeiheki 2";
} else if (myvid.currentSrc == "ttp://192.168.0.6:8081/Hla/HLA_CosplayChangePure-KeiJoshidaiseinoKikennaSeiheki_3.mp4") {
    showsourcename.textContent = "CosplayChangePure-KeiJoshidaiseinoKikennaSeiheki 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_CosplayChangePure-KeiJoshidaiseinoKikennaSeiheki_4.mp4") {
    showsourcename.textContent = "CosplayChangePure-KeiJoshidaiseinoKikennaSeiheki 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_DearestBlue_1.mp4") {
    showsourcename.textContent = "DearestBlue 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_DoukyoSuruNeneki_1.mp4") {
    showsourcename.textContent = "DoukyoSuruNeneki 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_DoukyoSuruNeneki_2.mp4") {
    showsourcename.textContent = "DoukyoSuruNeneki 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_DoukyuuseiRemakeTheAnimation_1.mp4") {
    showsourcename.textContent = "DoukyuuseiRemake The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_DoukyuuseiRemakeTheAnimation_2.mp4") {
    showsourcename.textContent = "DoukyuuseiRemake The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ErogedeSubetewaKaiketsuDekiruTheAnimation_1.mp4") {
    showsourcename.textContent = "ErogedeSubetewaKaiketsuDekiru The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ErogedeSubetewaKaiketsuDekiruTheAnimation_2.mp4") {
    showsourcename.textContent = "ErogedeSubetewaKaiketsuDekiru The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ErogeHmoGamemoKaihatsuZanmai_1.mp4") {
    showsourcename.textContent = "ErogeHmoGamemoKaihatsuZanmai 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ErogeHmoGamemoKaihatsuZanmai_2_x4m7.mp4") {
    showsourcename.textContent = "ErogeHmoGamemoKaihatsuZanmai 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ErogeHmoGamemoKaihatsuZanmai_3.mp4") {
    showsourcename.textContent = "ErogeHmoGamemoKaihatsuZanmai 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ErogeHmoGamemoKaihatsuZanmai_4.mp4") {
    showsourcename.textContent = "ErogeHmoGamemoKaihatsuZanmai 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ErogeHmoGamemoKaihatsuZanmai_5.mp4") {
    showsourcename.textContent = "ErogeHmoGamemoKaihatsuZanmai 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ErogeHmoGamemoKaihatsuZanmai_6.mp4") {
    showsourcename.textContent = "ErogeHmoGamemoKaihatsuZanmai 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Eromame_1.mp4") {
    showsourcename.textContent = "Eromame 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Eromame_2.mp4") {
    showsourcename.textContent = "Eromame 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Euphoria_1.mp4") {
    showsourcename.textContent = "Euphoria 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Euphoria_2.mp4") {
    showsourcename.textContent = "Euphoria 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Euphoria_3.mp4") {
    showsourcename.textContent = "Euphoria 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Euphoria_4.mp4") {
    showsourcename.textContent = "Euphoria 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Euphoria_5.mp4") {
    showsourcename.textContent = "Euphoria 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Euphoria_6.mp4") {
    showsourcename.textContent = "Euphoria 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_FleurTheAnimation_1.mp4") {
    showsourcename.textContent = "Fleur The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Futabu_1.mp4") {
    showsourcename.textContent = "Futabu 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Futabu_2.mp4") {
    showsourcename.textContent = "Futabu 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Futabu_3.mp4") {
    showsourcename.textContent = "Futabu 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Futabu_4.mp4") {
    showsourcename.textContent = "Futabu 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Futabu_5.mp4") {
    showsourcename.textContent = "Futabu 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_GardenTakamine-kenoNirinkaTheAnimation_1.mp4") {
    showsourcename.textContent = "GardenTakamine-kenoNirinka The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_GoblinnoSuana_1.mp4") {
    showsourcename.textContent = "GoblinnoSuana 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_GoblinnoSuana_2.mp4") {
    showsourcename.textContent = "GoblinnoSuana 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_GoblinnoSuana_3.mp4") {
    showsourcename.textContent = "GoblinnoSuana 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_GoblinnoSuana_4.mp4") {
    showsourcename.textContent = "GoblinnoSuana 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_GyakutenMajoSaibanChijonaMajoniSabakarechauTheAnimation_1.mp4") {
    showsourcename.textContent = "GyakutenMajoSaiban ChijonaMajoniSabakarechau The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HachishakuHachiwaKerakuMeguriIgyouKaikitanTheAnimation_1.mp4") {
    showsourcename.textContent = "HachishakuHachiwaKeraku Meguri IgyouKaikitan The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HachishakuHachiwaKerakuMeguriIgyouKaikitanTheAnimation_2.mp4") {
    showsourcename.textContent = "HachishakuHachiwaKeraku Meguri IgyouKaikitan The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HachishakuHachiwaKerakuMeguriIgyouKaikitanTheAnimation_3.mp4") {
    showsourcename.textContent = "HachishakuHachiwaKeraku Meguri IgyouKaikitan The Animation 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HajimetenoHitozuma_1.mp4") {
    showsourcename.textContent = "HajimetenoHitozuma 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HajimetenoHitozuma_2.mp4") {
    showsourcename.textContent = "HajimetenoHitozuma 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HajimetenoHitozuma_3.mp4") {
    showsourcename.textContent = "HajimetenoHitozuma 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HajimetenoHitozuma_4.mp4") {
    showsourcename.textContent = "HajimetenoHitozuma 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HajimetenoHitozuma_5.mp4") {
    showsourcename.textContent = "HajimetenoHitozuma 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HajimetenoHitozuma_6.mp4") {
    showsourcename.textContent = "HajimetenoHitozuma 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HaramaseyaTheAnimation_1.mp4") {
    showsourcename.textContent = "Haramaseya The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HaramaseyaTheAnimation_2.mp4") {
    showsourcename.textContent = "Haramaseya The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HaremCult_1.mp4") {
    showsourcename.textContent = "HaremCult 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HaremCult_2.mp4") {
    showsourcename.textContent = "HaremCult 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HaremCult_3.mp4") {
    showsourcename.textContent = "HaremCult 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HaremCult_4.mp4") {
    showsourcename.textContent = "HaremCult 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HatsukoiTime_1.mp4") {
    showsourcename.textContent = "HatsukoiTime 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HatsukoiTime_2.mp4") {
    showsourcename.textContent = "HatsukoiTime 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HatsukoiTime_3.mp4") {
    showsourcename.textContent = "HatsukoiTime 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HatsukoiTime_4.mp4") {
    showsourcename.textContent = "HatsukoiTime 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HatsukoiTime_5.mp4") {
    showsourcename.textContent = "HatsukoiTime 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HatsukoiTime_6.mp4") {
    showsourcename.textContent = "HatsukoiTime 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_HimawarigaYoruniSaku_1.mp4") {
    showsourcename.textContent = "Himawariga YoruniSaku 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IinchouwaSaiminApplioShinjiteru_1.mp4") {
    showsourcename.textContent = "Iinchouwa Saimin Applio Shinjiteru 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IjirareFukushuuSaimin_1.mp4") {
    showsourcename.textContent = "Ijirare Fukushuu Saimin 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IjirareFukushuuSaimin_2.mp4") {
    showsourcename.textContent = "Ijirare Fukushuu Saimin 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IjirareFukushuuSaimin_3.mp4") {
    showsourcename.textContent = "Ijirare Fukushuu Saimin 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IjirareFukushuuSaimin_4.mp4") {
    showsourcename.textContent = "Ijirare Fukushuu Saimin 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IkumonogakariTheAnimation_1.mp4") {
    showsourcename.textContent = "Ikumonogakari The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IkumonogakariTheAnimation_2.mp4") {
    showsourcename.textContent = "Ikumonogakari The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IkusaOtomeSuvia_1.mp4") {
    showsourcename.textContent = "Ikusa Otome Suvia 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IkusaOtomeSuvia_2.mp4") {
    showsourcename.textContent = "Ikusa Otome Suvia 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Imaizumin-chiwaDouyaraGalnoTamaribaniNatteruRashii_1.mp4") {
    showsourcename.textContent = "Imaizumin-chiwa Douyara Galno Tamaribani Natteru Rashii 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Imaizumin-chiwaDouyaraGalnoTamaribaniNatteruRashii_2.mp4") {
    showsourcename.textContent = "Imaizumin-chiwa Douyara Galno Tamaribani Natteru Rashii 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Imaizumin-chiwaDouyaraGalnoTamaribaniNatteruRashii_3.mp4") {
    showsourcename.textContent = "Imaizumin-chiwa Douyara Galno Tamaribani Natteru Rashii 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Imaizumin-chiwaDouyaraGalnoTamaribaniNatteruRashii_4.mp4") {
    showsourcename.textContent = "Imaizumin-chiwa Douyara Galno Tamaribani Natteru Rashii 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ImoutoBitchniShiboraretai_1.mp4") {
    showsourcename.textContent = "Imouto Bitchni Shiboraretai 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ImoutoBitchniShiboraretai_2.mp4") {
    showsourcename.textContent = "Imouto Bitchni Shiboraretai 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IsekaiHaremMonogatari_1.mp4") {
    showsourcename.textContent = "Isekai Harem Monogatari 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IsekaiHaremMonogatari_2.mp4") {
    showsourcename.textContent = "Isekai Harem Monogatari 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IsekaiHaremMonogatari_3.mp4") {
    showsourcename.textContent = "Isekai Harem Monogatari 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_IsekaiHaremMonogatari_4.mp4") {
    showsourcename.textContent = "Isekai Harem Monogatari 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_JashinShoukanInranKyonyuuOyakoIkenieGishiki_1.mp4") {
    showsourcename.textContent = "Jashin Shoukan Inran Kyonyuu Oyako Ikenie Gishiki 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_JashinShoukanInranKyonyuuOyakoIkenieGishiki_2.mp4") {
    showsourcename.textContent = "Jashin Shoukan Inran Kyonyuu Oyako Ikenie Gishiki 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KaedetoSuzuTheAnimation_1.mp4") {
    showsourcename.textContent = "Kaedeto Suzu The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KaedetoSuzuTheAnimation_2.mp4") {
    showsourcename.textContent = "Kaedeto Suzu The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KateikyoushixSaimin2TheAnimation_1.mp4") {
    showsourcename.textContent = "Kateikyoushix Saimin 2 The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KonbiniShoujoZ_1.mp4") {
    showsourcename.textContent = "Konbini Shoujo Z 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KonbiniShoujoZ_2.mp4") {
    showsourcename.textContent = "Konbini Shoujo Z 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KonbiniShoujoZ_3.mp4") {
    showsourcename.textContent = "Konbini Shoujo Z 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KonbiniShoujoZ_4.mp4") {
    showsourcename.textContent = "Konbini Shoujo Z 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KonomijaNaikedoMukatsukuAnetoAishouBatsugunEcchi_1.mp4") {
    showsourcename.textContent = "Konomija Naikedo Mukatsuku Aneto Aishou Batsugun Ecchi 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KonomijaNaikedoMukatsukuAnetoAishouBatsugunEcchi_2.mp4") {
    showsourcename.textContent = "Konomija Naikedo Mukatsuku Aneto Aishou Batsugun Ecchi 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KotowarenaiHaha_1.mp4") {
    showsourcename.textContent = "Kotowarenai Haha 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KotowarenaiHaha_2.mp4") {
    showsourcename.textContent = "Kotowarenai Haha 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KyonyuuOnnaShikanSennouSaimin_1.mp4") {
    showsourcename.textContent = "Kyonyuu Onna Shikan Sennou Saimin 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_KyonyuuOnnaShikanSennouSaimin_2.mp4") {
    showsourcename.textContent = "Kyonyuu Onna Shikan Sennou Saimin 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MayohiganoOnee-sanTheAnimation_1.mp4") {
    showsourcename.textContent = "Mayohigano Onee-san The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MebukiTheAnimation_1.mp4") {
    showsourcename.textContent = "Mebuki The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MebukiTheAnimation_2.mp4") {
    showsourcename.textContent = "Mebuki The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MidareUchi_1.mp4") {
    showsourcename.textContent = "Midare Uchi 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MidareUchi_2.mp4") {
    showsourcename.textContent = "Midare Uchi 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MihitsunoKoi_%202.mp4") {
    showsourcename.textContent = "Mihitsuno Koi 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MihitsunoKoi_1.mp4") {
    showsourcename.textContent = "Mihitsuno Koi 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MitasareteMezameruAsani%2CJiminaChoushokuwoTheAnimation_1.mp4") {
    showsourcename.textContent = "Mitasarete Mezameru Asani, Jimina Choushokuwo The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ModaeteyoAdam-kun_1.mp4") {
    showsourcename.textContent = "Modaeteyo Adam-kun 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ModaeteyoAdam-kun_2.mp4") {
    showsourcename.textContent = "Modaeteyo Adam-kun 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ModaeteyoAdam-kun_3.mp4") {
    showsourcename.textContent = "Modaeteyo Adam-kun 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ModaeteyoAdam-kun_4.mp4") {
    showsourcename.textContent = "Modaeteyo Adam-kun 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ModaeteyoAdam-kun_5.mp4") {
    showsourcename.textContent = "Modaeteyo Adam-kun 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ModaeteyoAdam-kun_6.mp4") {
    showsourcename.textContent = "Modaeteyo Adam-kun 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ModaeteyoAdam-kun_7.mp4") {
    showsourcename.textContent = "Modaeteyo Adam-kun 7";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ModaeteyoAdam-kun_8.mp4") {
    showsourcename.textContent = "Modaeteyo Adam-kun 8";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MouHasamazuniwaIrarenaiHoshiniOnegaiShitaraKonnaniOkkikuNacchatta_1.mp4") {
    showsourcename.textContent = "Mou Hasamazuniwa Irarenai Hoshini Onegai Shitara Konnani Okkiku Nacchatta 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MouHasamazuniwaIrarenaiHoshiniOnegaiShitaraKonnaniOkkikuNacchatta_2.mp4") {
    showsourcename.textContent = "Mou Hasamazuniwa Irarenai Hoshini Onegai Shitara Konnani Okkiku Nacchatta 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MugokunoKuninoAlice_1.mp4") {
    showsourcename.textContent = "Mugokuno Kunino Alice 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MugokunoKuninoAlice_2.mp4") {
    showsourcename.textContent = "Mugokuno Kunino Alice 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MyMotherTheAnimation_1.mp4") {
    showsourcename.textContent = "My Mother The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_MyMotherTheAnimation_2.mp4") {
    showsourcename.textContent = "My Mother The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_NatsugaOwarumade_1.mp4") {
    showsourcename.textContent = "Natsuga Owarumade 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_NatsugaOwarumade_2.mp4") {
    showsourcename.textContent = "Natsuga Owarumade 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_NatsugaOwarumade_3.mp4") {
    showsourcename.textContent = "Natsuga Owarumade 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Netosis_1.mp4") {
    showsourcename.textContent = "Netosis 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Netosis_2.mp4") {
    showsourcename.textContent = "Netosis 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_NightTail_1.mp4") {
    showsourcename.textContent = "NightTail 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_NightTail_2.mp4") {
    showsourcename.textContent = "NightTail 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_NukiDokiTenshiToAkumaNoSakuseiBattleRevolution_1.mp4") {
    showsourcename.textContent = "Nuki Doki Tenshi To Akuma No Sakusei Battle Revolution 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_NukiDokiTenshiToAkumaNoSakuseiBattleRevolution_2_saPm.mp4") {
    showsourcename.textContent = "Nuki Doki Tenshi To Akuma No Sakusei Battle Revolution 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_NukiDokiTenshiToAkumaNoSakuseiBattleRevolution_3.mp4") {
    showsourcename.textContent = "Nuki Doki Tenshi To Akuma No Sakusei Battle Revolution 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_NukiDokiTenshiToAkumaNoSakuseiBattleRevolution_4.mp4") {
    showsourcename.textContent = "Nuki Doki Tenshi To Akuma No Sakusei Battle Revolution 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_OshieteReMaid_1.mp4") {
    showsourcename.textContent = "Oshiete Re Maid 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_OshieteReMaid_2.mp4") {
    showsourcename.textContent = "Oshiete Re Maid 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_OtogibanashinoOnigokko_2.mp4") {
    showsourcename.textContent = "Otogibanashino Onigokko 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_OtomeDori_1.mp4") {
    showsourcename.textContent = "Otome Dori 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_OtomeDori_2.mp4") {
    showsourcename.textContent = "Otome Dori 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Overflow_1.mp4") {
    showsourcename.textContent = "Overflow 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Overflow_2.mp4") {
    showsourcename.textContent = "Overflow 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Overflow_3.mp4") {
    showsourcename.textContent = "Overflow 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Overflow_4.mp4") {
    showsourcename.textContent = "Overflow 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Overflow_5.mp4") {
    showsourcename.textContent = "Overflow 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Overflow_6.mp4") {
    showsourcename.textContent = "Overflow 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Overflow_7.mp4") {
    showsourcename.textContent = "Overflow 7";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Overflow_8.mp4") {
    showsourcename.textContent = "Overflow 8";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Pandemic_1.mp4") {
    showsourcename.textContent = "Pandemic 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Pandemic_2.mp4") {
    showsourcename.textContent = "Pandemic 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Pinkerton_1.mp4") {
    showsourcename.textContent = "Pinkerton 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Pinkerton_2.mp4") {
    showsourcename.textContent = "Pinkerton 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Pinkerton_3.mp4") {
    showsourcename.textContent = "Pinkerton 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_PleaseRapeMe_1.mp4") {
    showsourcename.textContent = "Please Rape Me 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_PleaseRapeMe_2.mp4") {
    showsourcename.textContent = "Please Rape Me 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_RaikouShinkiIgisMagiaPandraSaga3rdIgnitionTheAnimation_1.mp4") {
    showsourcename.textContent = "Raikou Shinki Igis Magia Pandra Saga 3rd Ignition: The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_RaikouShinkiIgisMagiaPandraSaga3rdIgnitionTheAnimation_2.mp4") {
    showsourcename.textContent = "Raikou Shinki Igis Magia Pandra Saga 3rd Ignition: The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_RennyuuOrderOkawariTheAnimation_1.mp4") {
    showsourcename.textContent = "Rennyuu Order Okawari: The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_RenseijutsushiColettenoHnaSakuseiMonogatari_1.mp4") {
    showsourcename.textContent = "Renseijutsushi Coletteno Hna Sakusei Monogatari 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_RenseijutsushiColettenoHnaSakuseiMonogatari_2.mp4") {
    showsourcename.textContent = "Renseijutsushi Coletteno Hna Sakusei Monogatari 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_RenseijutsushiColettenoHnaSakuseiMonogatari_3.mp4") {
    showsourcename.textContent = "Renseijutsushi Coletteno Hna Sakusei Monogatari 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_RenseijutsushiColettenoHnaSakuseiMonogatari_4.mp4") {
    showsourcename.textContent = "Renseijutsushi Coletteno Hna Sakusei Monogatari 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_RuinsSeeker_1.mp4") {
    showsourcename.textContent = "Ruins Seeker 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_RuinsSeeker_2.mp4") {
    showsourcename.textContent = "Ruins Seeker 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_RyoujokunoRensa_1.mp4") {
    showsourcename.textContent = "Ryoujokuno Rensa 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_RyoujokunoRensa_2.mp4") {
    showsourcename.textContent = "Ryoujokuno Rensa 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SaiminClass_1.mp4") {
    showsourcename.textContent = "Saimin Class 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SaiminClass_2.mp4") {
    showsourcename.textContent = "Saimin Class 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SaiminSeishidou_1.mp4") {
    showsourcename.textContent = "Saimin Seishidou 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SaiminSeishidou_2.mp4") {
    showsourcename.textContent = "Saimin Seishidou 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SaiminSeishidou_3.mp4") {
    showsourcename.textContent = "Saimin Seishidou 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SaiminSeishidou_4_BZVr.mp4") {
    showsourcename.textContent = "Saimin Seishidou 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SaiminSeishidou_5.mp4") {
    showsourcename.textContent = "Saimin Seishidou 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SaiminSeishidou_6.mp4") {
    showsourcename.textContent = "Saimin Seishidou 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SaintDoreiGakuen2_1_h7Iw.mp4") {
    showsourcename.textContent = "Saint Dorei Gakuen2 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SaintDoreiGakuen2_2_.mp4") {
    showsourcename.textContent = "Saint Dorei Gakuen2 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SakuseiByoutouTheAnimation_1.mp4") {
    showsourcename.textContent = "Sakusei Byoutou: The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SakuseiByoutouTheAnimation_2.mp4") {
    showsourcename.textContent = "Sakusei Byoutou: The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SakuseiByoutouTheAnimation_3.mp4") {
    showsourcename.textContent = "Sakusei Byoutou: The Animation 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SakuseiByoutouTheAnimation_4.mp4") {
    showsourcename.textContent = "Sakusei Byoutou: The Animation 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SakuseiByoutouTheAnimation_5.mp4") {
    showsourcename.textContent = "Sakusei Byoutou: The Animation 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SakuseiByoutouTheAnimation_6.mp4") {
    showsourcename.textContent = "Sakusei Byoutou: The Animation 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SakuseiByoutouTheAnimation_7.mp4") {
    showsourcename.textContent = "Sakusei Byoutou: The Animation 7";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SakuseiByoutouTheAnimation_8.mp4") {
    showsourcename.textContent = "Sakusei Byoutou: The Animation 8";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SakuseiByoutouTheAnimation_9.mp4") {
    showsourcename.textContent = "Sakusei Byoutou: The Animation 9";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SakuseiByoutouTheAnimation_10.mp4") {
    showsourcename.textContent = "Sakusei Byoutou: The Animation 10";
} else if (myvid.currentSrc == "hhttp://192.168.0.6:8081/Hla/HLA_SecretMissionSennyuuSousakanwaZettainiMakenai_1.mp4") {
    showsourcename.textContent = "Secret Mission: Sennyuu Sousakanwa Zettaini Makenai 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SecretMissionSennyuuSousakanwaZettainiMakenai_2.mp4") {
    showsourcename.textContent = "Secret Mission: Sennyuu Sousakanwa Zettaini Makenai 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SecretMissionSennyuuSousakanwaZettainiMakenai_3.mp4") {
    showsourcename.textContent = "Secret Mission: Sennyuu Sousakanwa Zettaini Makenai 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SecretMissionSennyuuSousakanwaZettainiMakenai_4.mp4") {
    showsourcename.textContent = "Secret Mission: Sennyuu Sousakanwa Zettaini Makenai 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SecretMissionSennyuuSousakanwaZettainiMakenai_5.mp4") {
    showsourcename.textContent = "Secret Mission: Sennyuu Sousakanwa Zettaini Makenai 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SecretMissionSennyuuSousakanwaZettainiMakenai_6.mp4") {
    showsourcename.textContent = "Secret Mission: Sennyuu Sousakanwa Zettaini Makenai 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SecretMissionSennyuuSousakanwaZettainiMakenai_7.mp4") {
    showsourcename.textContent = "Secret Mission: Sennyuu Sousakanwa Zettaini Makenai 7";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SecretMissionSennyuuSousakanwaZettainiMakenai_8.mp4") {
    showsourcename.textContent = "Secret Mission: Sennyuu Sousakanwa Zettaini Makenai 8";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Shoujo-tachinoSadismTheAnimation_1.mp4") {
    showsourcename.textContent = "Shoujo-tachi no Sadism: The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Shoujo-tachiNoSadismTheAnimation_2.mp4") {
    showsourcename.textContent = "Shoujo-tachi no Sadism: The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShowtimeUtanoOnee-sanDatteShitai_1.mp4") {
    showsourcename.textContent = "Showtime: Utano Onee-san Datte Shitai 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShowtimeUtanoOnee-sanDatteShitai_2.mp4") {
    showsourcename.textContent = "Showtime: Utano Onee-san Datte Shitai 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShowtimeUtanoOnee-sanDatteShitai_3.mp4") {
    showsourcename.textContent = "Showtime: Utano Onee-san Datte Shitai 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShowtimeUtanoOnee-sanDatteShitai_4.mp4") {
    showsourcename.textContent = "Showtime: Utano Onee-san Datte Shitai 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShowtimeUtanoOnee-sanDatteShitai_5.mp4") {
    showsourcename.textContent = "Showtime: Utano Onee-san Datte Shitai 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShowtimeUtanoOnee-sanDatteShitai_6.mp4") {
    showsourcename.textContent = "Showtime: Utano Onee-san Datte Shitai 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShowtimeUtanoOnee-sanDatteShitai_7.mp4") {
    showsourcename.textContent = "Showtime: Utano Onee-san Datte Shitai 7";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShowtimeUtanoOnee-sanDatteShitai_8.mp4") {
    showsourcename.textContent = "Showtime: Utano Onee-san Datte Shitai 8";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SwordArtOnlineAlicization_1.mp4") {
    showsourcename.textContent = "Sword Art Online: Alicization 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SwordArtOnlineAlicization_2.mp4") {
    showsourcename.textContent = "Sword Art Online: Alicization 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShowtimeUtanoOnee-sanDatteShitai2_1_hde8.mp4") {
    showsourcename.textContent = "Showtime: Utano Onee-san Datte Shitai 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShunkaShuutou_1.mp4") {
    showsourcename.textContent = "Shunka Shuutou 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShunkaShuutou_2.mp4") {
    showsourcename.textContent = "Shunka Shuutou 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShunkaShuutou_3.mp4") {
    showsourcename.textContent = "Shunka Shuutou 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShuumatsuHospital_1.mp4") {
    showsourcename.textContent = "Shuumatsu Hospital 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShuumatsuHospital_2.mp4") {
    showsourcename.textContent = "Shuumatsu Hospital 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ShuumatsuHospital_3.mp4") {
    showsourcename.textContent = "Shuumatsu Hospital 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SiNiSistar_1.mp4") {
    showsourcename.textContent = "SiNiSistar 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SiNiSistar_2.mp4") {
    showsourcename.textContent = "SiNiSistar 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SleeplessAMidsummerNightsDreamTheAnimation_1.mp4") {
    showsourcename.textContent = "Sleepless Amid Summer Nights: Dream The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SleeplessAMidsummerNightsDreamTheAnimation_2.mp4") {
    showsourcename.textContent = "Sleepless Amid Summer Nights: Dream The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SleeplessNocturneTheAnimation_1.mp4") {
    showsourcename.textContent = "Sleepless Nocturne: The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SleeplessNocturneTheAnimation_2.mp4") {
    showsourcename.textContent = "Sleepless Nocturne: The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Solow_1.mp4") {
    showsourcename.textContent = "Solow 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Solow_2.mp4") {
    showsourcename.textContent = "Solow 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Starless_1_r8a4.mp4") {
    showsourcename.textContent = "Starless 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Starless_2.mp4") {
    showsourcename.textContent = "Starless 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Starless_3.mp4") {
    showsourcename.textContent = "Starless 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_Starless_4.mp4") {
    showsourcename.textContent = "Starless 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SuccubusConnect_1.mp4") {
    showsourcename.textContent = "Succubus Connect 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SuccubusConnect_2.mp4") {
    showsourcename.textContent = "Succubus Connect 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SuccubusYondaraHahagaKita_1.mp4") {
    showsourcename.textContent = "Succubus: Yondara & Hahaga Kita 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SuccubusYondaraHahagaKita_2.mp4") {
    showsourcename.textContent = "Succubus: Yondara & Hahaga Kita 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SweetandHot_1.mp4") {
    showsourcename.textContent = "Sweet and Hot 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_SweetandHot_2.mp4") {
    showsourcename.textContent = "Sweet and Hot 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_TamashiiInsert_1.mp4") {
    showsourcename.textContent = "Tamashii Insert 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_TamashiiInsert_2.mp4") {
    showsourcename.textContent = "Tamashii Insert 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_TanetsukeOji-santoNTRHitozumaSexTheAnimation_1.mp4") {
    showsourcename.textContent = "Tanetsuke Oji-santo & NTR Hitozuma: Sex The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_TanetsukeOji-santoPappakoJDSaiminSeikatsuTheAnimation_1.mp4") {
    showsourcename.textContent = "Tanetsuke Oji-santo & Pappako JD: Saimin Seikatsu The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshiDensetsuSeries_1.mp4") {
    showsourcename.textContent = "Toshi Densetsu Series 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshiDensetsuSeries_2.mp4") {
    showsourcename.textContent = "Toshi Densetsu Series 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshiDensetsuSeries_3.mp4") {
    showsourcename.textContent = "Toshi Densetsu Series 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshiDensetsuSeries_4.mp4") {
    showsourcename.textContent = "Toshi Densetsu Series 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshiDensetsuSeries_5.mp4") {
    showsourcename.textContent = "Toshi Densetsu Series 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshiDensetsuSeries_6.mp4") {
    showsourcename.textContent = "Toshi Densetsu Series 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshiDensetsuSeries_7.mp4") {
    showsourcename.textContent = "Toshi Densetsu Series 7";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshiDensetsuSeries_8.mp4") {
    showsourcename.textContent = "Toshi Densetsu Series 8";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshoshitsunoKanojoTheAnimation_1.mp4") {
    showsourcename.textContent = "Toshoshitsuno Kanojo The Animation 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshoshitsunoKanojoTheAnimation_2.mp4") {
    showsourcename.textContent = "Toshoshitsuno Kanojo The Animation 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshoshitsunoKanojoTheAnimation_3.mp4") {
    showsourcename.textContent = "Toshoshitsuno Kanojo The Animation 3";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshoshitsunoKanojoTheAnimation_4.mp4") {
    showsourcename.textContent = "Toshoshitsuno Kanojo The Animation 4";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshoshitsunoKanojoTheAnimation_5.mp4") {
    showsourcename.textContent = "Toshoshitsuno Kanojo The Animation 5";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshoshitsunoKanojoTheAnimation_6.mp4") {
    showsourcename.textContent = "Toshoshitsuno Kanojo The Animation 6";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshoshitsunoKanojoTheAnimation_7.mp4") {
    showsourcename.textContent = "Toshoshitsuno Kanojo The Animation 7";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_ToshoshitsunoKanojoTheAnimation_8.mp4") {
    showsourcename.textContent = "Toshoshitsuno Kanojo The Animation 8";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_TsunTsunMaidwaEroEroDesu_1.mp4") {
    showsourcename.textContent = "Tsun Tsun Maidwa: Ero Ero Desu 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_TsunTsunMaidwaEroEroDesu_2.mp4") {
    showsourcename.textContent = "Tsun Tsun Maidwa: Ero Ero Desu 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_UchinoOtoutoMajideDekainDakedoMiniKonai_1.mp4") {
    showsourcename.textContent = "Uchino Otouto: Majide Dekain Dakedo Mini Konai 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_UchinoOtoutoMajideDekainDakedoMiniKonai_2.mp4") {
    showsourcename.textContent = "Uchino Otouto: Majide Dekain Dakedo Mini Konai 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_YoasobiGurashi_1.mp4") {
    showsourcename.textContent = "Yoasobi Gurashi 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_YoasobiGurashi_2.mp4") {
    showsourcename.textContent = "Yoasobi Gurashi 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_YokorenboImmoralMother_1.mp4") {
    showsourcename.textContent = "Yokorenbo Immoral Mother 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_YokorenboImmoralMother_2.mp4") {
    showsourcename.textContent = "Yokorenbo Immoral Mother 2";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_YuushaHimeMilia_1.mp4") {
    showsourcename.textContent = "Yuusha Hime Milia 1";
} else if (myvid.currentSrc == "http://192.168.0.6:8081/Hla/HLA_YuushaHimeMilia_2.mp4") {
    showsourcename.textContent = "Yuusha Hime Milia 2";
} else { 
    showsourcename.textContent = "No Source Selected";
}}

var gobackbutton = document.getElementById("goback");
var ip = location.host;

function GoBack() {
    window.history.back();
    //window.location.href="http://"+ip+"/"; 
}

gobackbutton.addEventListener('click', function() {
    gobackbutton.onclick = GoBack();
});







//myvid.addEventListener('loadedmetadata', function(e) { 
    //showsourcename.textContent = myvid.currentSrc; 
//});