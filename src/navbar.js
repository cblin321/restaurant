import createMain from "./main";
import createMenu from "./menu";
import createAbout from "./about";
function createNavbar() {
    const createCenterContainer = function(direction) {
        const temp = document.createElement("div");
        temp.classList.add("center-flex");
        temp.style.flexDirection = direction;
        return temp;
    };
    const createFlex = function(direction, justify, align, clss = "center-flex") {
        const temp = document.createElement("div");
        temp.classList.add(clss);
        temp.style.display = "flex";
        temp.style.flexDirection = direction;
        temp.style.justifyContent = justify;
        temp.style.alignItems = align;
        return temp;
    };
    const createButton = function(text, clss = "!") {
        const temp = document.createElement("button");
        temp.classList.add(clss);
        temp.textContent = text;
        return temp;
    }
    const createImg = function(src, alt) {
        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        return img;
    }
    //create containers
    const linkContainer = createCenterContainer("row");
    const top = document.getElementById("top");
    const nav = document.createElement("nav");
    const name = createImg("./media/64719c24122abf8faed8d0ee_Logo_trnspr.png", "Noodle Store");

    //create hamburger
    const navItems = ["Order Online", "Main Page", "Menu", "About Us"];
    const navMenu = document.createElement("ul");
    navMenu.classList.add("nav-menu");
    navMenu.classList.add("reset");
    for (const i of navItems) {
        const tempItem = document.createElement("li");
        tempItem.textContent = i;
        tempItem.classList.add("nav-item");
        if (i === "Order Online")
            tempItem.style.backgroundColor = "#fcb10f";
        navMenu.appendChild(tempItem);
    }
    const container = document.createElement("div");
    container.classList.add("hambuger");
    const bar = document.createElement("span");
    bar.classList.add("bar");
    const bar2 = document.createElement("span");
    bar2.classList.add("bar");
    const bar3 = document.createElement("span");
    bar3.classList.add("bar");
    container.appendChild(bar);
    container.appendChild(bar2);
    container.appendChild(bar3);
    container.addEventListener("click", () => {
        bar.classList.toggle("active");
        bar2.classList.toggle("active");
        bar3.classList.toggle("active");
        navMenu.classList.toggle("active");
        for (const i of navMenu.children) {
            i.classList.toggle("active");
        }
    });
    navMenu.children.item(1).addEventListener("click", () => {
        bar.classList.toggle("active");
        bar2.classList.toggle("active");
        bar3.classList.toggle("active");
        navMenu.classList.toggle("active");
        for (const i of navMenu.children) {
            i.classList.toggle("active");
        }
        document.getElementById("top").innerHTML = "";
        document.getElementById("content").innerHTML = "";
        createMain();
    });
    navMenu.children.item(2).addEventListener("click", () => {
        bar.classList.toggle("active");
        bar2.classList.toggle("active");
        bar3.classList.toggle("active");
        navMenu.classList.toggle("active");
        for (const i of navMenu.children) {
            i.classList.toggle("active");
        }
        document.getElementById("top").innerHTML = "";
        document.getElementById("content").innerHTML = "";
        createMenu();
    });
    navMenu.children.item(3).addEventListener("click", () => {
        bar.classList.toggle("active");
        bar2.classList.toggle("active");
        bar3.classList.toggle("active");
        navMenu.classList.toggle("active");
        for (const i of navMenu.children) {
            i.classList.toggle("active");
        }
        document.getElementById("top").innerHTML = "";
        document.getElementById("content").innerHTML = "";
        createAbout();
    });

    //create tabs
    name.classList.add("site-logo");
    const order = createButton("Order Online", "action-btn");
    const main = document.createElement("a");
    main.textContent = "Main Page";
    main.addEventListener("click", () => {
        document.getElementById("top").innerHTML = "";
        document.getElementById("content").innerHTML = "";
        createMain();
    });
    const about = document.createElement("a");
    about.textContent = "About Us";
    about.addEventListener("click", () => {
        document.getElementById("top").innerHTML = "";
        document.getElementById("content").innerHTML = "";
        createAbout();
    });
    const menu = document.createElement("a");
    menu.textContent = "Menu";
    menu.addEventListener("click", () => {
        document.getElementById("top").innerHTML = "";
        document.getElementById("content").innerHTML = "";
        createMenu();
    });


    nav.classList.add("gap");
    nav.appendChild(name);
    nav.appendChild(main);
    nav.appendChild(menu);
    nav.appendChild(about);
    nav.appendChild(order);
    nav.appendChild(container);
    nav.appendChild(navMenu);
    top.appendChild(nav);
} export default createNavbar; 