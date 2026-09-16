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

const idButton = document.getElementById("idBtn");
const enButton = document.getElementById("enBtn");

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


    if (language === "id") {

        idButton.classList.add("active");
        enButton.classList.remove("active");

        document.documentElement.lang = "id";

    } else {

        enButton.classList.add("active");
        idButton.classList.remove("active");

        document.documentElement.lang = "en";

    }

}


idButton.addEventListener("click", () => {

    changeLanguage("id");

});


enButton.addEventListener("click", () => {

    changeLanguage("en");

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
