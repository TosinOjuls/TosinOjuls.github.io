const navigation = () => {

    const header = document.querySelector(".header")
    const mobileMenu = document.querySelector(".header-navitems")
    const menuIcon = document.querySelector(".header-mobile")
    const treshold = 100

    menuIcon.addEventListener("click", () => mobileMenu.classList.toggle("active"))

    window.addEventListener("scroll", e=> {
        const scrolledAmount = window.scrollY;
        scrolledAmount >= treshold ? header.classList.add("active") : header.classList.remove ("active")
    })
}

navigation ()