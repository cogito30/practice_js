# Tab UI

## Goal
- 탭 UI 구현 (탭을 클릭하면 해당 콘텐츠 표시)

## Practice
- (처음에는 안 보이도록 설정) display: none;
- (기존 활성 탭 제거) tablinks[i].classList.remove("active");
- (클릭한 탭 표시) document.getElementById(tabName).style.display = "block";