const icon = document.getElementById("planetIcon");
const animation = document.getElementById("ballAnimation");

console.log("icon:", icon);
console.log("animation:", animation);

icon.addEventListener("mouseenter", function() {
    console.log("MOUSE ENTER");
    animation.beginElement();
});