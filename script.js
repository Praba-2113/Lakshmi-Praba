document.addEventListener("DOMContentLoaded", function () {

    /* ================= YEAR ================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ================= MOBILE MENU ================= */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("open");

        if (navMenu.classList.contains("open")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    /* ================= CLOSE MENU ================= */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });


    /* ================= SCROLL PROGRESS ================= */

    const progressBar =
        document.getElementById("progressBar");

    window.addEventListener("scroll", function () {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (scrollTop / documentHeight) * 100;

        progressBar.style.width =
            progress + "%";

    });


    /* ================= ACTIVE NAV ================= */

    const sections =
        document.querySelectorAll("section");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.style.color = "";

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.style.color = "#7c5cff";

            }

        });

    });

});