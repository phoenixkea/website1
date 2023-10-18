
const div = document.querySelector("stars");
let offsetX, offsetY;
// Update div position based on new cursor position
const move = (e) => {
    div.style.left = `${e.clientX - offsetX}px`;
    div.style.top = `${e.clientY - offsetY}px`;
}
div.addEventListener("mousedown", (e) => {
offsetX = e.clientX - div.offsetLeft;
offsetY = e.clientX - div.offsetTop;
document.addEventListener("mousemove", move);
});
document.addEventListener("mouseup", () => {
    document.remoteEventListener("mousemove", move);
});