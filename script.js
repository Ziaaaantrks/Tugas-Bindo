/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        () => {

            menuToggle.classList.toggle("active");

            navMenu.classList.toggle("active");

            document.body.classList.toggle("menu-open");

        }
    );


    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    menuToggle.classList.remove(
                        "active"
                    );

                    navMenu.classList.remove(
                        "active"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        }
    );

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);


/* =====================================================
   TYPING EFFECT
===================================================== */

const typingElements =
    document.querySelectorAll(".typing");


function typeText(element) {

    if (
        element.dataset.typed === "true"
    ) {
        return;
    }


    const text =
        element.dataset.text;


    if (!text) {
        return;
    }


    element.dataset.typed = "true";


    let index = 0;


    const speed = 60;


    function typeCharacter() {

        if (
            index < text.length
        ) {

            element.textContent +=
                text.charAt(index);

            index++;

            setTimeout(
                typeCharacter,
                speed
            );

        } else {

            element.classList.add(
                "finished"
            );

        }

    }


    typeCharacter();

}


const typingObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        typeText(
                            entry.target
                        );

                        typingObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.5
        }

    );


typingElements.forEach(
    (element) => {

        typingObserver.observe(
            element
        );

    }
);


/* =====================================================
   NUMBER COUNTER
===================================================== */

const counters =
    document.querySelectorAll(".counter");


function animateCounter(element) {

    if (
        element.dataset.counted === "true"
    ) {
        return;
    }


    element.dataset.counted = "true";


    const target =
        Number(
            element.dataset.target
        );


    const duration = 1600;

    const startTime =
        performance.now();


    function updateCounter(
        currentTime
    ) {

        const elapsed =
            currentTime - startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        /*
            Ease out.
            Awalnya cepat,
            lalu melambat ketika
            mendekati angka target.
        */

        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const current =
            Math.floor(
                eased * target
            );


        element.textContent =
            current.toLocaleString(
                "id-ID"
            );


        if (
            progress < 1
        ) {

            requestAnimationFrame(
                updateCounter
            );

        } else {

            element.textContent =
                target.toLocaleString(
                    "id-ID"
                );

        }

    }


    requestAnimationFrame(
        updateCounter
    );

}


const counterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        animateCounter(
                            entry.target
                        );

                        counterObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.5
        }

    );


counters.forEach(
    (counter) => {

        counterObserver.observe(
            counter
        );

    }
);


/* =====================================================
   SURVEY BAR CHART
===================================================== */

const bars =
    document.querySelectorAll(".bar");


function animateBar(bar) {

    if (
        bar.dataset.animated === "true"
    ) {
        return;
    }


    bar.dataset.animated = "true";


    const width =
        bar.dataset.width;


    bar.style.setProperty(
        "--bar-width",
        width
    );


    bar.classList.add(
        "animate"
    );

}


const barObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        animateBar(
                            entry.target
                        );

                        barObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.4
        }

    );


bars.forEach(
    (bar) => {

        barObserver.observe(
            bar
        );

    }
);


/* =====================================================
   IMAGE LAZY LOADING
===================================================== */

const images =
    document.querySelectorAll(
        "img"
    );


images.forEach(
    (image) => {

        image.setAttribute(
            "loading",
            "lazy"
        );

    }
);


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );


yearElements.forEach(
    (element) => {

        element.textContent =
            new Date().getFullYear();

    }
);