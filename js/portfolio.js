/*----Page Loader------*/
window.addEventListener("load", () => { 
    document.querySelector(".main").classList.remove("hidden");
    // document.querySelector(".home-section").classList.add("active");
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
        window.scrollTo(0, 0);
    }, 600);
});

// setTimeout(() => {
//     var body = window.document.body;
//     console.log("Body", body);
//     body.style.height = 100 + 'px';
//     body.style.width = 600 + 'px';
// }, 1000);

/*-----Toggle Navbar------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", (e) => { 
    toggleNavBar();
    toggleNavItems();
    document.body.classList.toggle("hide-scrolling");
});
function toggleNavBar() {
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavItems() {
    document.querySelector(".header").classList.toggle("active");
}

/*--------Active Section-----------*/
document.addEventListener("click", e => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        navToggler.classList.add("hide");
        if (e.target.classList.contains("nav-item")) {
            toggleNavItems();
        }
        // else {
        //     toggleNavBar();
        //     document.body.classList.add("hide-scrolling");
        // }
        document.querySelector("section.active").classList.remove("active", "fade-out");
        document.querySelector(e.target.hash).classList.add("active");
        // window.scrollTo(0, 0);
        document.body.classList.remove("hide-scrolling");
        navToggler.classList.remove("hide");
    }
});

/*----------About tabs-------------*/
const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

tabsContainer.addEventListener("click", e => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
})

/*---------Portfolio Items Details Popup-----------*/
document.addEventListener("click", e => {
    if (e.target.classList.contains("portfolio-view-project-btn")) {
        togglePortfolioPopup();
        portfolioDetailsShow(e.target.parentElement);
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
    } 
});
function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup)

function portfolioDetailsShow(parentElement) {
    document.querySelector(".pp-thumpnail img").src = parentElement.querySelector(".portfolio-item-thumpnail img").src;
    document.querySelector(".pp-header h3").innerHTML = parentElement.querySelector(".portfolio-item-title").innerHTML;
    document.querySelector(".pp-body").innerHTML = parentElement.querySelector(".portfolio-item-details").innerHTML;
}

document.addEventListener("click", e => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();
    }
});