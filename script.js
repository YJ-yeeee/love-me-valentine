// 버튼 가져오기
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// No 버튼에 마우스 올리면 도망
noBtn.addEventListener("mouseenter", () => {
  // 버튼을 absolute로 바꿔서 자유롭게 움직이게 함
  noBtn.style.position = "absolute";

  // 카드(.container) 크기 가져오기
  const container = document.querySelector(".container");
  const rect = container.getBoundingClientRect();

  // 랜덤 위치 계산 (카드 안에서만)
  const maxX = rect.width - noBtn.offsetWidth;
  const maxY = rect.height - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // 위치 적용
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Yes 버튼 클릭 시
yesBtn.addEventListener("click", () => {
  alert("I knew it! hehe happy valentine 💌");
});
