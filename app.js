const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraseBtn = document.getElementById("eraser-btn");

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;


ctx.lineWidth = lineWidth.value;

let isPainting = false;
let isFilling = false;

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

// 색상 선택 감지
function onColorChange(e) {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
}

// 지정 색상 클릭 감지
function onColorClick(e) {
    const colorValue = e.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

// 색상 채우기
function onModeClick() {
    if (isFilling === true) {
        isFilling = false;
        modeBtn.innerText = "fill"
    } else {
        isFilling = true;
        modeBtn.innerText = "draw"
    }
}

function onCanvasClick() {
    if (isFilling === true) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

// 캔버스 초기화
function onDestroyClick() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

// 지우개
function onEraserClick() {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "fill";
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick)

lineWidth.addEventListener("change", onLineWidthChange);

color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);

destroyBtn.addEventListener("click", onDestroyClick);

eraseBtn.addEventListener("click", onEraserClick);