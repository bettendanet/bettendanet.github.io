window.onload = function trigger() {
    // Set the trigger (default, the konami code)
    var trigger = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRight";
    console.log("Waiting for 2 seconds...");
    var html_element = document.getElementById("SomethingSpecial");
    const textElement = document.getElementById("text");

    if (html_element != null) {
         // A catchy phrase to bait unsuspicious people
        if (html_element.getAttribute("bait") != null) {
                console.log(html_element.getAttribute("bait"));
        }

        // Change the trigger if specified
        if (html_element.getAttribute("trigger") != null) {
            trigger = html_element.getAttribute("trigger");
        }
    }
    // Get the audio element
    var parry = document.getElementById("united-kingdom");

    function rickRoll() {
        // Create CSS class
        var style = document.createElement("style");
        style.type = "text/css";
        style.innerHTML =
            ".rick {" +
            "    z-index: 1000;" +
            "    width: 1060px;" +
            "    height: 615px;" +
            "    position: absolute;" +
            "    top: 50%;" +
            "    left: 50%;" +
            "    transform: translate(-50%,-50%);" +
            "    -ms-transform: translate(-50%,-50%);" +
            "}";
        document.getElementsByTagName("head")[0].appendChild(style);

        // Create container
        let Cooldiv = document.createElement("div");
        Cooldiv.setAttribute("id", "rick");
        Cooldiv.classList.add("rick");

        // Make the video tag
        let video = document.createElement("video");
        video.setAttribute("id", "Astley");
        video.setAttribute("src", "YouLostTheGame.mp4");
        video.autoplay = true;
        video.controls = true;
        video.setAttribute("allowfullscreen", "");
        video.setAttribute("width", "1060px");
        video.setAttribute("height", "615px");
        video.classList.add("rick");

        // Why not another reference
        video.setAttribute("title", "Cake is a lie");

        // Put the iframe in the container
        Cooldiv.appendChild(video);

        // Append container to body
        document.body.appendChild(Cooldiv);
    }

    localStorage.setItem("KC", "");

        // Listen for inputs
        document.addEventListener("keydown", function (e) {
            // Add the new keyPress to stack
            let updated = localStorage.getItem("KC") + e.key;

            console.log("Current input sequence:", updated); // Debugging line

            if (updated.includes(trigger)) {
                // If trigger met, execute order 66
                localStorage.removeItem("KC");

                parry.play();
                
                setTimeout(() => {
                    textElement.innerHTML = "PARRY!";
                    textElement.style.color = "white";
                    document.body.style.backgroundColor = "black";
                    setTimeout(() => {
                        textElement.innerHTML = "PARRY???";
                        setTimeout(() => {
                            textElement.innerHTML = "Hello World";
                        }, 300);
                        textElement.style.color = "black";
                        document.body.style.backgroundColor = "white";
                    }, 200);
                }, 140);
                
                setTimeout(() => {
                    rickRoll();
                    
                }, 5000);
            } else {
                // Else update stack
                localStorage.setItem("KC", updated);
            }
        });
}