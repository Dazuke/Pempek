/* =====================================================
   PEMPEK UNPAM
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   WHATSAPP NUMBER
===================================================== */

// GANTI NOMOR INI
const whatsappNumber = "6289688204332";


/* =====================================================
   LANGUAGE SYSTEM
===================================================== */

const languageSwitch = document.getElementById("languageSwitch");

const translatedElements =
    document.querySelectorAll("[data-id][data-en]");


function changeLanguage(language) {

    translatedElements.forEach(element => {

        if (language === "id") {

            element.textContent =
                element.dataset.id;

        } else {

            element.textContent =
                element.dataset.en;

        }

    });


    const isEnglish = language === "en";
    languageSwitch.setAttribute("aria-checked", String(isEnglish));
    languageSwitch.setAttribute("aria-label", isEnglish ? "Switch language to Indonesian" : "Switch language to English");
    document.documentElement.lang = isEnglish ? "en" : "id";

}


function playSwitchClick() {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        const context = new AudioContextClass();
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(880, context.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(520, context.currentTime + 0.045);
        gain.gain.setValueAtTime(0.045, context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.055);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start();
        oscillator.stop(context.currentTime + 0.06);
        oscillator.onended = () => context.close();
    } catch (error) { /* sound is optional */ }
}

languageSwitch.addEventListener("click", () => {
    playSwitchClick();
    const nextLanguage = document.documentElement.lang === "en" ? "id" : "en";
    changeLanguage(nextLanguage);
});

languageSwitch.addEventListener("keydown", event => {
    if (event.key === " ") { event.preventDefault(); languageSwitch.click(); }
});


/* =====================================================
   WHATSAPP MESSAGE
===================================================== */

function openWhatsApp(message) {

    const url =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}


/* =====================================================
   WHATSAPP BUTTONS
===================================================== */

const whatsappLinks =
    document.querySelectorAll(".whatsapp-link");


whatsappLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const isEnglish =
            document.documentElement.lang === "en";


        let message;


        if (isEnglish) {

            message =
                "Hello Pempek UNPAM! 👋\n\nI would like to ask about your products and how to order.";

        } else {

            message =
                "Halo Pempek UNPAM! 👋\n\nSaya ingin bertanya mengenai produk dan cara pemesanannya.";

        }


        openWhatsApp(message);

    });

});


/* =====================================================
   WHATSAPP POPUP
===================================================== */

const whatsappButton =
    document.getElementById("whatsappButton");

const whatsappPopup =
    document.getElementById("whatsappPopup");

const popupClose =
    document.getElementById("popupClose");


whatsappButton.addEventListener("click", () => {

    whatsappPopup.classList.toggle("show");

});


popupClose.addEventListener("click", () => {

    whatsappPopup.classList.remove("show");

});


/* Klik di luar popup */

document.addEventListener("click", event => {

    const clickedInside =
        whatsappPopup.contains(event.target);

    const clickedButton =
        whatsappButton.contains(event.target);


    if (!clickedInside && !clickedButton) {

        whatsappPopup.classList.remove("show");

    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileButton =
    document.getElementById("mobileMenuBtn");


const navigation =
    document.querySelector(".nav");


mobileButton.addEventListener("click", () => {

    navigation.classList.toggle("mobile-open");

});


/* =====================================================
   MOBILE NAVIGATION STYLE
===================================================== */

const mobileStyle =
    document.createElement("style");


mobileStyle.innerHTML = `

@media(max-width:850px){

    .nav.mobile-open{

        display:flex;

        position:absolute;

        top:70px;

        left:0;

        width:100%;

        padding:25px;

        flex-direction:column;

        gap:20px;

        background:#f5f3ed;

        border-bottom:1px solid rgba(28,33,30,.13);

        box-shadow:0 15px 30px rgba(0,0,0,.08);

    }

}

`;


document.head.appendChild(mobileStyle);


/* =====================================================
   CLOSE MOBILE MENU WHEN LINK CLICKED
===================================================== */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("mobile-open");

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".product-card, .experience-card, .about-content, .about-image"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =====================================================
   REVEAL STYLE
===================================================== */

const revealStyle =
    document.createElement("style");


revealStyle.innerHTML = `

.reveal{

    opacity:0;

    transform:translateY(25px);

    transition:
        opacity .7s ease,
        transform .7s ease;

}

.reveal.visible{

    opacity:1;

    transform:translateY(0);

}

`;


document.head.appendChild(revealStyle);
