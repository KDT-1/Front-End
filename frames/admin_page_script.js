
// 1. 모바일상에서 햄버거 버튼을 누르면 원래 있던 nav칸 아래로 메뉴 한칸이 생기면서 슬라이드되서 나오게. 
const menuBtn = document.querySelector('.navbar__toggle-btn');
const menuContainer = document.querySelector('.menu-container');
const menuNav = document.querySelector('.navbar__menu');
console.log(menuNav)
menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('open');
    menuNav.classList.toggle('open');
});


// 2. 내소개, 기술, 내작업실 등 메뉴를 누를때마다 슬라이딩 되어 해당 section으로 이동
function clickmenu() {
    const menu = document.getElementsByTagName("li");
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove("active");
    }
}

function goToScroll(name) {
    let location = document.querySelector('#' + name);
    menuid = 'mn_' + location.id
    window.scrollTo({ top: location.offsetTop -50, behavior: "smooth" });
    clickmenu();
    select = document.getElementById(menuid)
    select.classList.add("active");
}

// 2-1번
let sections = document.querySelectorAll('section')
const navList = document.querySelectorAll(".navbar__menu__item")
window.addEventListener("scroll", ()=> {
    sections.forEach((data, i)=>{
        if(window.scrollY >= data.offsetTop -70){
            document.querySelector('.active').classList.remove('active')
            navList[i].classList.add("active")}
        })
    if(window.scrollY == document.body.offsetHeight - window.innerHeight){
        document.querySelector(".active").classList.remove("active");
        navList[navList.length -1].classList.add("active");
    }
})



// 3. 프로젝트의 각 탭에 프로젝트 갯수(counter div)를 표시하기
    // 각 탭을 누르면 해당 프로젝트만 표시하기(filter기능 쓰면 됨)
window.onload =function() {
    const countAll = document.getElementsByClassName('project');
    const countFront = document.getElementsByClassName('Front');
    const countBack = document.getElementsByClassName('Back');
    const countAI = document.getElementsByClassName('AI');
    document.getElementsByClassName('count__All')[0].innerText = countAll.length;
    document.getElementsByClassName('count__Front')[0].innerText = countFront.length;
    document.getElementsByClassName('count__Back')[0].innerText = countBack.length;
    document.getElementsByClassName('count__AI')[0].innerText = countAI.length;
}

function countClass(projectName, me) {
    const count__All = document.querySelectorAll('.project');
    const projectNameCount = document.querySelectorAll(projectName);
    const projectSelected = document.querySelector('.selected');
    
    count__All.forEach((data) => {
        data.classList.add('none');
    });

    projectNameCount.forEach((data) => {
        data.classList.remove('none');
    });

    projectSelected.classList.remove('selected');
    me.classList.add('selected');
}




// 4. home을 벗어나면 화살표 버튼이 활성화되고 화살표 버튼을 누르면 home으로 이동 (숨겨놨던 버튼 등장)
const btn = document.getElementsByClassName('arrow-up');
window.addEventListener('scroll', () => {
    const home = document.querySelector('#home');
    if (window.scrollY > home.offsetTop + home.offsetHeight) {
        for(let i=0; i < btn.length; i++){
            btn[i].classList.add('visible')
        }
    } else {
        for(let i=0; i < btn.length; i++){
            btn[i].classList.remove('visible')
        }
    }
});


