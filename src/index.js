let isSliding = false;

function slideReady() {
    let nav = document.getElementsByClassName("nav").item(0);
    nav.classList.add("nav-sliding-ready");
//     slide();
}

// function slide() {
//     let nav = document.getElementsByClassName("nav").item(0);
//     nav.classList.add("nav-sliding");
// }

function slide() {
    let nav = document.getElementsByClassName("nav").item(0);
    var keyframeEffect = new KeyframeEffect (
        nav,
        [
            left: '0%',
        ]
    )
}