document.addEventListener('DOMContentLoaded', function () {
    let addButton = document.createElement('Button');
    addButton.textContent = "Button";
    addButton.className = "button"
    document.body.appendChild(addButton);

    addButton.addEventListener("click", function () {
        alert("A very nice message");
    });


    let button = document.getElementById("button");
    button.addEventListener("click", click);
    function click() {
        let message = document.getElementById("text-box").nodeValue;
        alert(message);
    }

    let div = document.getElementById("div");
    div.addEventListener("mouseenter", function () {
        div.style.backgroundColor = "red";
    })
    div.addEventListener("mouseleave", function () {
        div.style.backgroundColor = "black";
    })

    let paragraph = document.getElementById("paragraph")
    paragraph.addEventListener("click", function () {
        let allcolor = "0123456789ABCDEF";
        let randomColor = "";

        for (let i = 0; i < 6; i++) {
            randomColor += allColor[Math.floor(Math.random() * 16)];

        }

        paragraph.style.color = "#" + randomColor;
    })

    let button3 = document.getElementById("button3");
    let div2 = document.getElementById("div2");
    
    button3.addEventListener("click", function () {
        let span = document.createElement("span");
        div2.appendChild(span);
        let text = document.createTextNode("Austin");
        span.appendChild(text);

    });

    let friends =  ["Braden","Nick","Russo","Bradley","Stew","Sam","Shaun", "Gray","Noah","Reed"]
    let button4 = document.getElementById("button")
    let ul = document.getElementById("ul");
    button4.addEventListener("click", function() {
        for (let i = 0; i < friends.length; i++) {
            let li = document.createElement("li");
            let name = document.createTextNode(friends[i]);
            li.appendChild(name);
            ul.appendChild(li);
            
        }
        });
    });

    



