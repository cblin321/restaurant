import createNavbar from "./navbar";
function createAbout() {
    const createFlex = function(direction, justify, align, clss = "center-flex") {
        const temp = document.createElement("div");
        temp.classList.add(clss);
        temp.style.display = "flex";
        temp.style.flexDirection = direction;
        temp.style.justifyContent = justify;
        temp.style.alignItems = align;
        return temp;
    };
    const createText = function(content, align = "auto") {
        const text = document.createElement("p");
        text.classList.add("desc");
        text.textContent = content;
        text.style.textAlign = align;
        return text;
    }
    const createImg = function(src, alt) {
        const img = document.createElement("img");
        img.classList.add("header-img");
        img.src = src;
        img.alt = alt;
        return img;
    }
    createNavbar();
    const sections = [];
    const aboutContainer = createFlex("row", "center", "center", "about-container");
    aboutContainer.style.margin = "auto";
    
    const loc = document.createElement("div");
    // const locHeader = document.createElement("h2");
    // locHeader.textContent = "Location/Contact";
    // loc.appendChild(locHeader);
    const locInfo = ["3122 Watson Street", "Pennsauken NJ, 08110"];
    let line1 = createFlex("row", "flex-start", "center", "info-header");
    let svgNS = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 512 512");  
    let path = document.createElementNS(svgNS, "path");
    path.setAttribute("fill", "currentColor");
    path.setAttribute("d", "M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64");  
    svg.appendChild(path);
    svg.setAttribute("id", "loc-icon");
    line1.appendChild(svg);
    let text = createText(locInfo[0], "left");
    text.classList.add("reset");
    line1.appendChild(text); 
    line1.classList.add("info-item");
    loc.appendChild(line1);
    text = createText(locInfo[1], "left");
    text.classList.add("reset");
    text.classList.add("info-item");
    loc.appendChild(text);
    loc.classList.add("about-content");
    sections.push(loc);

    line1 = createFlex("row", "flex-start", "center", "info-header");
    svgNS = "http://www.w3.org/2000/svg";
    svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");  
    path = document.createElementNS(svgNS, "path");
    path.setAttribute("fill", "currentColor");
    path.setAttribute("d", "m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98");
    svg.appendChild(path);
    line1.appendChild(svg);
    text = createText("609-793-9043", "left");
    text.classList.add("info-item");
    text.classList.add("reset");
    line1.appendChild(text);
    line1.classList.add("info-item"); 
    loc.appendChild(line1);

    line1 = createFlex("row", "flex-start", "center", "info-header");
    svgNS = "http://www.w3.org/2000/svg";
    svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");  
    path = document.createElementNS(svgNS, "path");
    path.setAttribute("fill", "currentColor");
    path.setAttribute("d", "m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2");
    svg.appendChild(path);
    line1.classList.add("info-item");
    line1.appendChild(svg);
    text = createText("hello@example.com", "left");
    text.classList.add("reset");
    text.classList.add("info-item");
    line1.appendChild(text); 
    loc.appendChild(line1);
    
    const hr = document.createElement("div");
    // const hrHeader = document.createElement("h2");
    // hrHeader.textContent = "Hours:"
    // hr.appendChild(hrHeader);
    const hours = ["M-W: 11AM-9PM", "THU-SAT:11AM-10PM", "SU:10AM-8PM"];
    line1 = createFlex("row", "flex-start", "center", "info-header");
    svgNS = "http://www.w3.org/2000/svg";
    svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 256 256");
    path = document.createElementNS(svgNS, "path");
    path.setAttribute("fill", "currentColor");
    path.setAttribute("d", "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8");
    svg.appendChild(path);
    line1.appendChild(svg);
    line1.classList.add("info-item");
    text = createText(hours[0], "left");
    text.classList.add("reset");
    text.classList.add("info-item");
    line1.appendChild(text);
    hr.appendChild(line1); 
    text = createText(hours[1], "left");
    text.classList.add("info-item");
    text.classList.add("reset");
    hr.appendChild(text); 
    text = createText(hours[2], "left");
    text.classList.add("info-item");
    text.classList.add("reset");
    hr.classList.add("about-content");
    hr.appendChild(text); 
    sections.push(hr);


    // let maxWidth = -1 * Number.MIN_VALUE;
    // for (var i = 0; i < loc.children.length; i++) {
    //     var elementWidth = loc.children[i].width; 
    //     maxWidth = Math.max(maxWidth, elementWidth); 
    //     console.log(parseFloat(window.getComputedStyle(loc.children[i]).fontSize));
    // }
    // loc.style.width = maxWidth + 'px';

    // for (var i = 0; i < hr.children.length; i++) {
    //     var elementWidth = hr.children[i].width; 
    //     maxWidth = Math.max(maxWidth, elementWidth); 
    // }
    // hr.style.width = maxWidth + 'px';

    const locContainer = createFlex("column", "center", "normal", "info-container");
    const contactContainer = createFlex("column", "center", "normal", "info-container");
    const content = document.getElementById("content");
    for (const i of sections) 
        aboutContainer.appendChild(i);
    const desc = createText("Nibh nisl condimentum id venenatis a condimentum. Auctor eu augue ut lectus arcu bibendum at. Id donec ultrices tincidunt arcu non sodales neque sodales. Auctor eu augue ut lectus arcu bibendum at varius. Donec enim diam vulputate ut pharetra sit amet aliquam. Vitae congue eu consequat ac felis donec et odio. Ac odio tempor orci dapibus ultrices. Sed faucibus turpis in eu mi bibendum neque egestas. Consequat nisl vel pretium lectus quam id.");
    content.appendChild(aboutContainer);
} export default createAbout;
// createAbout();