# 6. Responsive Navigation Bar

## Goal
- 미디어 쿼리(Media Query) 활용
- 작은 화면(모바일)에서 네비게이션 메뉴를 아이콘으로 변환

## Practice
- (화면이 768px 이하일 때 적용) @media (max-width: 768px) {}
- (더 작은 화면에서 카드 크기 조절) @media (max-width: 600px) {}
- (기본적으로 버튼 숨기기) .menu-toggle { display: none; }
- (작은 화면에서 메뉴를 세로 배치) display: flex; flex-direction: column;