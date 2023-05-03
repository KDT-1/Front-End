
let switchNow = false;    //스위치 상태 기억할 변수
function alertToggle() {
    if (switchNow == false) {  //스위치가 꺼져 있으면
    document.querySelector(".noticeBox").style.display = "block"; // 보여주고
    switchNow = true; // 스위치는 켠 상태로 바꿈
    } else {
    document.querySelector(".noticeBox").style.display = "none";  // 숨겨주고
    switchNow = false;  //스위차는 끈 상태로 바꿈
    }
}

function toggleMenu(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

function singo_btn() {
    let singo = document.querySelectorAll('.singo_btn');
    singo.forEach((data) => data.classList.toggle('active'));
    // singo.classList.toggle('active');
    
}

let speaker = false;
function toggleSpeaker(){
    if (speaker == false) {  //스위치가 꺼져 있으면
    document.querySelector(".speaker").style.display = "block"; // 보여주고
    speaker = true; // 스위치는 켠 상태로 바꿈
    audio.play()
    } else {
    document.querySelector(".speaker").style.display = "none";  // 숨겨주고
    speaker = false;  //스위차는 끈 상태로 바꿈
    audio.pause();
    }
}

// 사이렌 소리 !
let switch_siren = false; // 사이렌소리 스위치
const audio = new Audio("./audio/siren.mp3");
let play = document.getElementById('play');
function playMusic(){
    if(switch_siren == false){
        audio.play()
        switch_siren = true;
    }else {
        audio.pause()
        switch_siren = false;
    }
}
