setTimeout(function () {
    const elementShow = document.getElementsByClassName("hidden");
    elementShow[0].classList.remove("hidden");
    const elementHide = document.getElementsByClassName("loader-wrapper");
    elementHide[0].classList.add("hidden");
}, 3000);

// hide slowly...............

