

const lift1 = () => {
    const div = document.getElementById("ask1");
    const ava = document.getElementById("ava_lift1");
    if (div.classList.contains("ask1_small")){
            div.classList.remove("ask1_small");
            div.classList.add("ask1_big")
            const sp = document.createElement('span');
            div.appendChild(sp);
            sp.id="text_ask1";
            sp.innerHTML = "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.";
            ava.src = "up.png";
        }
    else{
            div.classList.remove("ask1_big");
            div.classList.add("ask1_small")
            const rem = elementToRemove = document.getElementById("text_ask1");
            div.removeChild(rem);
            ava.src = "down.png";
    }
}

const lift2 = () => {
    const div = document.getElementById("ask2");
    const ava = document.getElementById("ava_lift2");
        if (div.classList.contains("ask2_small")){
            div.classList.remove("ask2_small");
            div.classList.add("ask2_big")
            const sp = document.createElement('span');
            div.appendChild(sp);
            sp.id="text_ask2";
            sp.innerHTML = "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.";
            ava.src = "up.png";
        }
        else{
            div.classList.remove("ask2_big");
            div.classList.add("ask2_small")
            const rem = elementToRemove = document.getElementById("text_ask2");
            div.removeChild(rem);
            ava.src = "down.png";
        }
}

const lift3 = () => {
    const div = document.getElementById("ask3");
    const ava = document.getElementById("ava_lift3");
        if (div.classList.contains("ask3_small")){
            div.classList.remove("ask3_small");
            div.classList.add("ask3_big")
            const sp = document.createElement('span');
            div.appendChild(sp);
            sp.id="text_ask3";
            sp.innerHTML = "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.";
            ava.src = "up.png";
        }
        else{
            div.classList.remove("ask3_big");
            div.classList.add("ask3_small")
            const rem = elementToRemove = document.getElementById("text_ask3");
            div.removeChild(rem);
            ava.src = "down.png";
        }
}

const lift4 = () => {
    const div = document.getElementById("ask4");
    const ava = document.getElementById("ava_lift4");
        if (div.classList.contains("ask4_small")){
            div.classList.remove("ask4_small");
            div.classList.add("ask4_big")
            const sp = document.createElement('span');
            div.appendChild(sp);
            sp.id="text_ask4";
            sp.innerHTML = "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.";
            ava.src = "up.png";
        }
        else{
            div.classList.remove("ask4_big");
            div.classList.add("ask4_small")
            const rem = elementToRemove = document.getElementById("text_ask4");
            div.removeChild(rem);
            ava.src = "down.png";
        }
}