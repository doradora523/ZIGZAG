# ZIGZAG Clone Coding (반응형 홈페이지)

## ZIGZAG 사이트
https://zigzag.kr/

## 구현 사이트
[DEMO](https://sparkly-begonia-22c763.netlify.app/)

https://github.com/doradora523/ZIGZAG/assets/94670754/84fbcef6-f41f-4871-9f65-0c1511bc12ea

https://github.com/doradora523/ZIGZAG/assets/94670754/981d1dc6-5694-4221-b022-7d25f4fef622

## Description

- 반응형 디자인을 적용한 지그재그 홈페이지 클론코딩
- Vanilla JS를 사용하여 Auto Slide Tab Menu, Auto Counting, ScrollMagic 구현

## **Development Detail**

- **반응형 디자인 및 Animation CSS 컴포넌트 분리**
- **setInterval 을 사용하여 Auto Slide Tab 구현**
- **requestAnimationFrame을 사용하여 Auto Counting Number 구현**
- **IntersectionObserver를 사용하여 Auto Counting 구간을 관찰하여 실행**
- **ScrollMagic 라이브러리를 사용하여 현재 scroll position을 통해 partner 섹션의 애니매이션을 실행**

## What I Learned

### 오류해결

- `tabMenu` 를 클릭했을 때, slide함수가 동작하고 5번의 탭을 자동으로 보여준 후 첫번째 탭에서 자동슬라이드 기능을 중단시킨다. 이 후 다시 `tabMenu` 를 클릭했을 때마다 위 사이클을 반복한다.
    *슬라이드가 동작할 때 동시에 탭을 누르면 누른 횟수만큼 슬라이드가 반복이 되지 않도록 해야 하며 탭 메뉴를 클릭한 횟수와 별개로 자동 슬라이드가 최초 1회만 반복하고 슬라이드가 멈춰야만 그다음 메뉴를 클릭 했을 때 다시 1회 반복할 수 있도록 해야 한다.*
    
- **문제 해결**
  
   slide 함수가 interval 로 돌면서, 첫 번째 메뉴에서 멈추게 되는데, 이때 isStart 값을 다시 false 로 바꾸는 로직이 없어서 이벤트가 실행되지 않은 것으로 판단되어 false 로 바꾸는 로직을 slide함수 안에 넣은 후 확인해보니 정상적으로 원하는 기능이 구현되었습니다.
    

---

- `tabMenu` 를 두번째 클릭했을 때 숨어있던 `conf` 등장을 `display:none`을 주면 되는 것처럼 단순하게 생각했었는데 생각처럼 되지 않았던 문제가 있었습니다.
- **문제 해결**
  
    js 에서, 메뉴탭이 2회 이상 클릭 된 경우에, `.pinkConfetties`에 class 명을 하나 추가한다음, 
    ex) `show--confetties` 위 css 를 `#tabMenu .pinkConfetties.show--confetties .conf1`, `#tabMenu .pinkConfetties.show--confetties .conf2` .... 으로 변경하게 한 후 메뉴 아이템을 2회 눌렀을 때 날리는 것을 구현시켰습니다.
