import createNavbar from "./navbar";
function createMenu() {
    createNavbar();
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
    const createItemTitle = function(name) {
        const title = document.createElement("h2");
        title.textContent = name;
        return title; 
    }
    const createItems = function(items) {

        // for (i of items) {

        // }
        return items.map((i) => {
            const item = document.createElement("div");
            const ingredients = createText(i[1]);
            item.classList.add("menu-item")
            const temp = createCenterContainer("row");
            temp.appendChild(createItemTitle(i[0])) 
            temp.appendChild(createText(i[2])) 
            temp.classList.add("item-header");
            item.appendChild(temp); 
            ingredients.style.textAlign = "left";
            item.appendChild(ingredients);
            return item;
        });
    }
    const createGrid = function(clss, items) {
        const temp = document.createElement("div");
        temp.classList.add(clss);
        for (const i of items) 
            temp.appendChild(i);
        return temp;
    }
    const items = [["Spaghetti Bolognese", " Spaghetti, ground beef, tomato sauce, onions, garlic, herbs, Parmesan cheese.", "$12.99"]
    , ["Pad Thai",  "Rice noodles, shrimp or chicken, tofu, bean sprouts, peanuts, lime, tamarind sauce.", "$11.95"], 
    ["Chicken Alfredo", " Fettuccine pasta, grilled chicken, Alfredo sauce, garlic, Parmesan cheese, parsley.", "$14.50"], 
    ["Singapore Noodles", "Rice vermicelli, tofu, mixed vegetables, curry powder, soy sauce.", "$10.99"], 
    ["Beef Ramen", "Ramen noodles, beef slices, green onions, miso broth, soy sauce, soft-boiled egg.", "$13.75"], 
    ["Shrimp Scampi", "Linguine pasta, shrimp, garlic, white wine, lemon, parsley, butter.", "$15.99"], 
    ["Lo Mein", "Lo mein noodles, assorted vegetables, soy sauce, garlic, sesame oil.", "$10.50"], 
    ["Pho Beef", " Rice noodles, beef broth, beef slices, bean sprouts, basil, lime, hoisin sauce.", "$11.95"], 
    ["Mushroom Risotto", "Arborio rice, mushrooms, vegetable broth, white wine, Parmesan cheese.", "$12.99"], 
    ["Soba Noodles", "Soba noodles, chicken or tofu, broccoli, sesame oil, ginger, soy sauce.", "$11.50"]];
    const divList = createItems(items);
    const itemContainer = createGrid("item-container", divList);
    // const content = document.getElementById("content");
    // const title = createItemTitle("Noodles");
    // const desc = createText("Neque porro quisquam est, qui dolorem ipsum quia dolor sit.");
    // const container = createCenterContainer("row");
    // const noodles = createItem(container, title, desc);
    // itemContainer.appendChild(noodles);
    const title = document.createElement("h1");
    title.textContent = "Our Menu";
    content.append(title);
    title.style.textAlign = "center";
    title.style.fontSize = "2.5rem"; 
    content.appendChild(itemContainer);
} export default createMenu;
// createMenu();