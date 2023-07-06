# ZIGZAG Clone Coding (반응형 홈페이지)

## ZIGZAG 사이트
https://zigzag.kr/

## 구현 사이트
[DEMO](https://sparkly-begonia-22c763.netlify.app/)

https://github.com/doradora523/ZIGZAG/assets/94670754/84fbcef6-f41f-4871-9f65-0c1511bc12ea

https://github.com/doradora523/ZIGZAG/assets/94670754/981d1dc6-5694-4221-b022-7d25f4fef622


## 필수 요구사항

- [x] 정리된 README.md 파일을 제공하세요!
- [x] 결과와 비교할 수 있는 선택 사이트의 주소를 명시하세요!
- [x] 제출 프로젝트에 확인 가능한 HTML, CSS 파일이 모두 있어야 합니다!
- [x] 브라우저에서 정상적으로 출력돼야 합니다!

## 선택 요구사항

- [x] 시멘틱 태그를 최대한 활용해보세요.
- [x] 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해보세요.
- [x] JS가 필요한 부분은 생략하고 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- [x] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.
- [x] BEM 방법론을 도입해보세요.



### 자바스크립트로 페이지를 구현하면서 잘 안되었던 부분

1. tabMenu 를 클릭했을 때, slide함수가 동작하고 5번의 탭을 자동으로 보여준 후 첫번째 탭에서 자동슬라이드 기능을 중단시킨다.
   이 후 다시 tabMenu를 클릭했을 때마다 위 사이클을 반복한다. 
   *슬라이드가 동작할 때 동시에 탭을 누르면 누른 횟수만큼 슬라이드가 반복이 되지 않도록 해야하며
   탭메뉴를 클릭한 횟수와 별개로 자동슬라이드가 최초 1회만 반복하고 슬라이드가 멈춰야만 그다음 메뉴를 클릭했을 때 다시 1회 반복할 수 있도록 코드를 짜야한다.*

-> 문제 해결 : slide 함수가 interval로 돌면서, 첫번째 메뉴에서 멈추게 되는데,
   이때 isStart값을 다시 false로 바꾸는 로직이 없어서 이벤트가 실행되지 않은 것으로 판단되어 
   false로 바꾸는 로직을 slide함수 안에 넣은 후 확인해보니 정상적으로 원하는 기능이 동작된다 ! :D

2. tabMenu를 두번째 클릭햇을 때 숨어있던 conf 등장
   display:none을 주면 되는 것처럼 단순하게 생각했었는데 생각처럼 되지 않았고, 결국 이런저런 방법을 찾아보다 구현실패..ㅠㅠ
  
-> 문제 해결 : js 에서, 메뉴탭이 2회 이상 클릭된 경우에, .pinkConfetties에 class 명을 하나 추가한다음,ex) show--confetties
   위 css 를 #tabMenu .pinkConfetties.show--confetties .conf1, #tabMenu .pinkConfetties.show--confetties .conf2 .... 으로 변경하게 한 후 
   메뉴 아이템을 2회 눌렀을 때 날리는 것을 구현시켰다.
   
