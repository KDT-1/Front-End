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