/* =========================
   MOBILE MENU
========================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-active");

});


/* =========================
   PRODUCT FILTER
========================= */

const categoryButtons =
    document.querySelectorAll(".category");

const products =
    document.querySelectorAll(".product-card");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.dataset.filter;

        products.forEach(product => {

            const category =
                product.dataset.category;

            if (
                filter === "all" ||
                category === filter
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});


/* =========================
   FAQ ACCORDION
========================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem =
            question.parentElement;


        document
            .querySelectorAll(".faq-item")
            .forEach(item => {

                if (item !== currentItem) {

                    item.classList.remove("open");

                }

            });


        currentItem.classList.toggle("open");

    });

});


/* =========================
   ORDER BUTTON
========================= */

const orderButtons =
    document.querySelectorAll(".order-button");


orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product =
            button.dataset.product;


        const phone =
            "6281234567890";


        const message =
            `Halo Pempek Kita 👋

Saya ingin memesan:
${product}

Mohon informasi harga dan ketersediaannya.

Terima kasih.`;


        const whatsappURL =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

});


/* =========================
   NAVBAR SHADOW
========================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.getElementById("navbar");

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,.08)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});


/* =========================
   MOBILE NAV STYLE
========================= */

const style =
    document.createElement("style");

style.innerHTML = `

@media(max-width:900px){

    .nav-menu.mobile-active{

        display:flex;

        position:absolute;

        top:70px;

        left:0;

        width:100%;

        padding:25px;

        background:#f8f4ed;

        flex-direction:column;

        gap:20px;

        border-bottom:1px solid #ddd;

        box-shadow:0 10px 30px rgba(0,0,0,.08);

    }

}

`;

document.head.appendChild(style);
