let switchNow = false;    //스위치 상태 기억할 변수
function alertToggle() {
    if (switchNow == false) {  //스위치가 꺼져 있으면
    document.querySelector(".noticeBoxID").style.display = "block"; // 보여주고
    switchNow = true; // 스위치는 켠 상태로 바꿈
    } else {
    document.querySelector(".noticeBoxID").style.display = "none";  // 숨겨주고
    switchNow = false;  //스위차는 끈 상태로 바꿈
    }
}

function PWToggle() {
    if (switchNow == false) {  //스위치가 꺼져 있으면
    document.querySelector(".noticeBoxPW").style.display = "block"; // 보여주고
    switchNow = true; // 스위치는 켠 상태로 바꿈
    } else {
    document.querySelector(".noticeBoxPW").style.display = "none";  // 숨겨주고
    switchNow = false;  //스위차는 끈 상태로 바꿈
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

function toggleMenu(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}