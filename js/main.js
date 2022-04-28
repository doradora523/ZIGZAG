/* TabMenu */
const tabMenu = [...document.querySelectorAll(".tab--menu li")];
const tabCont = [...document.querySelectorAll(".tab--contents")];
const tabTextR = [...document.querySelectorAll(".tab--textbox.right")];
const tabTextL = [...document.querySelectorAll(".tab--textbox.left")];

const SHOWING_CLASS = "show";
const MENU_ON = "on";

//메뉴 클릭 시 슬라이드 순번
let show = 0;
// Contents를 보여줄 함수 생성
function contShow(show) {
  
  // 메뉴 일괄적으로 비활성화 처리
  for(let i=0; i<tabMenu.length; i++) { // 변수 i에 0을 담아주고 i가 메뉴의 갯수보다 작을 때 1씩 증가
    tabMenu[i].classList.remove(MENU_ON); // 클릭한 메뉴의 class "on" 제거
    tabCont[i].classList.remove(SHOWING_CLASS); // 클릭한 메뉴의 컨텐츠 class "show" 제거
  };

  // 활성화 1개
  tabMenu[show].classList.add(MENU_ON); // 클릭한 메뉴의 class "show" 삽입
  tabCont[show].classList.add(SHOWING_CLASS); // 클릭한 메뉴의 컨텐츠 class "show" 삽입
  tabTextL[show].classList.add('.left'); // 클릭한 메뉴의 컨텐츠 text의 class "left" 삽입

};

let isStart = false // 변수 isStart 에 false 를 부여
tabMenu.forEach((tab, i) => { // forEach 메서드를 주어 tabMenu 배열 요소 각각에 대해 event 함수를 실행한다.
  tab.addEventListener('click', tabClick => { // 탭을 클릭했을 때,
    contShow(i) // 선택된 탭의 contShow 함수 호출
    if (!isStart) { // isStart 호출 (isStart가 false일 때)
      slide() // slide 함수 실행
    }
    isStart = true // isStart 의 값을 true로 대체
    return(tabClick);
  })
})

/* AUTO SLIDE TAB */
const firstSlideMenu = document.querySelector(".tab--menu li:first-child");
const firstSlide = document.querySelector(".tab--contents:first-child"); // 첫번째 컨텐츠를 변수 firstSlide에 담아준다.

function slide() { // slide 함수를 선언

  let tabSlide = setInterval(() => {

    const currentSlideMenu = document.querySelector(`.${MENU_ON}`); // 변수 currentSlideMenu 에 현재 보여지고 있는 컨텐츠를 담는다.
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`); // 변수 currentSlide 에 현재 보여지고 있는 컨텐츠를 담는다.

    if (currentSlideMenu && currentSlide) { // 현재 보여지는 컨텐츠에서

      currentSlideMenu.classList.remove(MENU_ON); // 컨텐츠 class "on" 제거
      currentSlide.classList.remove(SHOWING_CLASS); // 컨텐츠 class "show" 제거
  
      const nextSlideMenu = currentSlideMenu.nextElementSibling; // 변수 nextSlideMenu 에 현재 컨텐츠의 다음에 나오는 형제요소를 선택하여 담는다.
      const nextSlide = currentSlide.nextElementSibling; // 변수 nextSlide 에 현재 컨텐츠의 다음에 나오는 형제요소를 선택하여 담는다.
  
      if (nextSlideMenu && nextSlide) { // 다음 보여지는 컨텐츠에
  
        nextSlideMenu.classList.add(MENU_ON); // 다음 컨텐츠 메뉴 class "on" 삽입
        nextSlide.classList.add(SHOWING_CLASS); // 다음 컨텐츠 class "show" 삽입
      }
      else { // 다음 컨텐츠가 없을 시
  
        firstSlideMenu.classList.add(MENU_ON); // 첫번째 컨텐츠 메뉴 class "on" 삽입
        firstSlide.classList.add(SHOWING_CLASS); // 첫번째 컨텐츠 class "show" 삽입
        clearInterval(tabSlide)
      }
    }
  }, 3000);
};


/* AUTO COUNTING NUMBER */ // Infinite Carousel With Vanilla JS

const callback = (entries, observer) => {
  // 콜백은 2개의 인수(entries, observer)를 가지며,
  // entries는 IntersectionObserverEntry 인스턴스의 배열이고, observer는 콜백이 실행되는 해당 인스턴스를 참조한다.
  entries.forEach( entry => { // forEach 메서드를 주어 entries 배열 요소 각각에 대해 entry 함수를 실행한다.
    if(entry.isIntersecting) {
      scrollCallback(); // scrollCallback 함수 실행
    }
  })
};

const counting = document.querySelectorAll('.howMany span'); // .howMany안의 span태그를 변수 counting 에 담아준다.

const scrollCallback = () => { // 변수 scrollCallback 에 익명함수를 담아준다.
  counting.forEach( counter => { // forEach 메서드를 주어 counting 배열 요소 각각에 대해 counter함수를 실행한다.
    
    let speed = 250; // 변수 speed 에 숫자 250을 담아 함수실행 속도(.25s)를 정한다.
    const animate = () => { // 변수 animate 에 익명함수를 담아준다.
      
      const data = +counter.getAttribute('data'); // counter함수의 innerText 값을 숫자 데이터로 표현하는 것을 변수 data 에 담아준다.
      const value = +counter.innerText; // counter함수의 innerText 값을 숫자 데이터로 표현하는 것을 변수 value 에 담아준다.
      const time = data / speed; // data 값을 speed 의 값으로 나눈 몫을 변수 time 에 담아준다.

      if( value < data ) { // 변수 value 의 값이 변수 data 의 값보다 작을 때 명령을 실행한다.
        
        counter.innerText = Math.ceil(value + time); // 변수 value 와 변수 time 의 값을 더한 값(소수점 이하 반올림)을 counter.innerText에 담는다.
        requestAnimationFrame(animate); // requestAnimationFrame의 메소드를 사용해 함수 animate 를 실행한다.
      }
    };

    animate(); // animate 실행
  });
};

const option = {
  threshold: 0 // observer가 실행되기 위해 타겟의 가시성이 얼마나 필요한지 백분율로 표시한다.
};
const io = new IntersectionObserver(callback, option); // new IntersectionObserver()를 통해 생성한 인스턴스(io)로 관찰자(Observer) 초기화

const observerBox = document.querySelector('.howMany'); // 변수 observerBox 에 .howMany 를 담아준다.

io.observe(observerBox); // 관찰할 대상요소(observerBox) 등록



/* PARTNER SCROLL MAGIC */

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .9
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});