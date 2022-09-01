const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
];

ctx.lineWidth = 2;

function onClick(e) {
    // 시작하기 전 캔버스에 있는 모든 선의 색상이 바뀌게 하지 않기 위해 beginPath를 사용하여 각각의 선의 색상을 정해줌
    ctx.beginPath();

    // 선을 그리기 전 선을 시작할 위치를 선정
    ctx.moveTo(0, 0);

    //색상 변경
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;

    // 선을 끝마칠 위치를 선정
    ctx.lineTo(e.offsetX, e.offsetY);

    // 얘가 결정적으로 시작 위치와 끝 위치를 읽고 눈에 보이게 해 줌
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);