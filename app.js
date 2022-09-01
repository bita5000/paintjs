const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

ctx.lineWidth = lineWidth.value;

let isPainting = false;

function onMove(e) {
    if (isPainting === true) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

// 사용자의 마우스 움직임 감지
function startPainting() {
    isPainting = true;
}
function cancelPainting() {
    isPainting = false;
}

// range의 움직임 감지
function onLineWidthChange(e) {
    ctx.lineWidth = e.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);