// update_user_edit.html에서 회원탈퇴 버튼 클릭시 창 띄우기 
let switchNow = false;    //스위치 상태 기억할 변수
function alertToggle() {
    if (switchNow == false) {  //스위치가 꺼져 있으면
    document.querySelector(".noticeBox").style.display = "block"; // 보여주고
    switchNow = true; // 스위치는 켠 상태로 바꿈
    } else {
    document.querySelector(".noticeBox").style.display = "none";  // 숨겨주고
    switchNow = false;  //스위치는 끈 상태로 바꿈
    }
}

// 사이드바 생성 소스 
function toggleMenu(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// main2.html에서 시작버튼 누를시 종료로 바뀌는 함수
let switch_start = false;
function singo_btn() {
    let singo = document.querySelectorAll('.singo_btn');
    const start_btn = document.querySelector('#start_btn')
    singo.forEach((data) => data.classList.toggle('active'));
    if(switch_start==false){
        start_btn.innerText = "종료(작동중)";
        start_btn.style.backgroundColor='var(--color-btn-red)';
        start_btn.style.color='white';
        switch_start = true;
    } else {
        start_btn.innerText = "시작";
        start_btn.style.backgroundColor='var(--color-btn-yello)';
        start_btn.style.color='black';
        switch_start = false;
    }
}

// main1.html 에서 사이렌 이미지위에 와이파이 뜨게 하는 js 
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
/* 아이디 / 패스워드 찾기 */

let IDswitch = false;    //스위치 상태 기억할 변수
function alertToggle() {
    if (IDswitch == false) {  //스위치가 꺼져 있으면
    document.querySelector(".noticeBoxID").style.display = "block"; // 보여주고
    IDswitch = true; // 스위치는 켠 상태로 바꿈
    } else {
    document.querySelector(".noticeBoxID").style.display = "none";  // 숨겨주고
    IDswitch = false;  //스위차는 끈 상태로 바꿈
    }
}

let PWswitch = false;  
function PWToggle() {
    if (PWswitch == false) {  //스위치가 꺼져 있으면
    document.querySelector(".noticeBoxPW").style.display = "block"; // 보여주고
    PWswitch = true; // 스위치는 켠 상태로 바꿈
    } else {
    document.querySelector(".noticeBoxPW").style.display = "none";  // 숨겨주고
    PWswitch = false;  //스위차는 끈 상태로 바꿈
    }
}

let switchNow2 = false;
function PWAToggle() {
    if (switchNow2 == false) {  //스위치가 꺼져 있으면
    document.querySelector(".noticeBoxPWA").style.display = "block"; // 보여주고
    switchNow = true; // 스위치는 켠 상태로 바꿈
    } else {
    document.querySelector(".noticeBoxPWA").style.display = "none";  // 숨겨주고
    switchNow2 = false;  //스위차는 끈 상태로 바꿈
    }
}

