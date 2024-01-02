import createNavbar from "./navbar";
function createMain() { 
    createNavbar();
    const content = document.getElementById("content");
    const createCenterContainer = function(direction) {
        const temp = document.createElement("div");
        temp.classList.add("center-flex");
        temp.style.flexDirection = direction;
        return temp;
    };
    const createText = function(content) {
        const text = document.createElement("p");
        text.classList.add("desc");
        text.textContent = content;
        return text;
    }
    const createImg = function(src, alt) {
        const img = document.createElement("img");
        img.classList.add("def-img");
        img.src = src;
        img.alt = alt;
        return img;
    }
    const headerContainer = createCenterContainer("column");
    const headline = document.createElement("h1");
    headline.textContent = "Noodle Shop";
    headline.classList.add("headline");
    headerContainer.appendChild(headline);
    const slogan = createText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    slogan.classList.add("reset");
    slogan.classList.add("subtext");
    headerContainer.appendChild(slogan);
    // headerContainer.appendChild(createImg("./media/pexels-photo-67468-4288958554.jpeg", "background-img"));
    /* <h1>The #1 Restuarant</h1>
            <img src="./pexels-photo-67468-4288958554.jpeg" alt="header-img">
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p> */
    content.appendChild(headerContainer);
} export default createMain;
// console.log("hi");
// createMain();