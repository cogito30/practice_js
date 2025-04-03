document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    let isDarkMode = document.body.classList.contains("dark-mode");
    this.textContent = isDarkMode ? "☀️ 라이트 모드" : "🌙 다크 모드";
});
