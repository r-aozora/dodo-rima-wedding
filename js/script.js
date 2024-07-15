// Countdown
simplyCountdown(".simply-countdown", {
    year: 2024,
    month: 8,
    day: 4,
    hours: 10,
    words: {
        days: { singular: "hari", plural: "hari" },
        hours: { singular: "jam", plural: "jam" },
        minutes: { singular: "menit", plural: "menit" },
        seconds: { singular: "detik", plural: "detik" },
    },
});

// Sticky Top
const offcanvas = document.querySelector(".offcanvas");
const stickyTop = document.querySelector(".sticky-top");

offcanvas.addEventListener("show.bs.offcanvas", () => {
    stickyTop.style.overflow = "visible";
});

offcanvas.addEventListener("hidden.bs.offcanvas", () => {
    stickyTop.style.overflow = "hidden";
});

// Play / Pause Audio
const audio = document.querySelector("#bgm");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
let isPlaying = false;

const playAudio = () => {
    audioIconWrapper.style.display = "flex";

    audio.volume = 0.1;
    audio.play();

    isPlaying = true;
};

audioIconWrapper.onclick = () => {
    if (isPlaying) {
        audio.pause();

        audioIcon.classList.remove("bi-disc");
        audioIcon.classList.add("bi-pause-circle");
    } else {
        audio.volume = 0.1;
        audio.play();

        audioIcon.classList.remove("bi-pause-circle");
        audioIcon.classList.add("bi-disc");
    }

    isPlaying = !isPlaying;
};

// Disable Scroll
const rootElement = document.querySelector(":root");

const disableScroll = () => {
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    window.onscroll = () => {
        window.scrollTo(scrollTop, scrollLeft);
    };

    rootElement.style.scrollBehavior = "auto";
};

const enableScroll = () => {
    window.onscroll = () => { };

    rootElement.style.scrollBehavior = "smooth";

    playAudio();

    // localStorage.setItem('opened', 'true')
};

// if (!localStorage.getItem('opened')) {
//     disableScroll()
// }
disableScroll();

// RSVP Form Handler
window.addEventListener("load", function () {
    const form = document.getElementById("rsvp-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: "POST",
            body: data,
        }).then(() => {
            alert("Konfirmasi kehadiran berhasil terkirim!");
        });
    });
});

// Get Guest
const params = new URLSearchParams(window.location.search);
const pronoun = params.get("p") || "Bapak/Ibu/Saudara/i";
const nama = params.get("n") || "";

const guest = document.querySelector(".hero h4 span");

guest.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ",");

document.querySelector("#nama").value = nama;
