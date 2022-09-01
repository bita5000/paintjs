const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

// // shortcut Function
// // moveTo - 브러쉬의 좌표를 움직여줌
// // lineTo - 라인을 그려줌
// // fillRect = fill + Rect(=moveTo + lineTo)

ctx.fillRect(150, 150, 4, 50);
ctx.fillRect(250, 150, 4, 50);
ctx.fillRect(170, 150, 65, 80);
// 원 그리는 방법
// arc를 사용하여 원을 그려넣을 수 있다.
// X축, Y축, 반지름 길이, 원 시작 위치, 시작 위치에서부터 원을 어디까지 그릴지
ctx.arc(200, 120, 25, 0, 2 * Math.PI);
ctx.fill();

// 새로운 경로를 만들어 줌
// 지금의 경우 새로운 색상으로 변경해 주시 위해 beginPath를 사용하여 초기화(?)해주고
// 새로운 색상을 넣어 원을 그려줌
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(190, 120, 5, Math.PI, 2 * Math.PI);
ctx.arc(210, 120, 5, Math.PI, 2 * Math.PI);
ctx.fill();