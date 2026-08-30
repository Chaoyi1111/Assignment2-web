const icon = document.getElementById("planetIcon");
const animation = document.getElementById("ballAnimation");

console.log("icon:", icon);
console.log("animation:", animation);

const planetSound = new Audio("./sound/a5.mp3");
planetSound.volume = 0.5;

icon.addEventListener("mouseenter", function() {
    console.log("MOUSE ENTER");
    if (!document.body.classList.contains("active")) {
        return;
    }

    animation.beginElement();

    planetSound.currentTime = 0;
    planetSound.play();
});

icon.addEventListener("click", function() {
    console.log("PLANET CLICK");
    document.body.classList.add("active");
    animation.beginElement();
    planetSound.currentTime = 0;
    planetSound.play();
});
