# ScrollAnimation

## Goal
- 스크롤 시 요소가 나타나는 애니메이션 적용
- 화면을 내리면 특정 요소가 부드럽게 나타나는 효과

## Practice
- (처음엔 안 보이게 설정) opacity: 0;
- (아래에서 위로 이동하는 효과) transform: translateY(50px);
- (요소가 화면에 보이면 .show 클래스 추가) if (boxPosition < screenHeight * 0.99)