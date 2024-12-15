window.onload = function trigger() {
    // Set the trigger (default, the konami code)
    var trigger = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRight";
    console.log("Waiting for 2 seconds...");
    var html_element = document.getElementById("SomethingSpecial");
    const textElement = document.getElementById("text");

    var RickRolled = false;

    const videoContainer = document.getElementById("videoContainer");
    let typedKeys = '';

    document.addEventListener("keydown", function(event) {
    typedKeys += event.key;
    if (typedKeys === "maxwell") {
        // Execute the code you want here
        console.log("Maxwell executed!");
        // Remove the Rickroll video player
        const iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = "https://www.youtube.com/embed/U2Fjfqm-7g8?si=X7FJ7cvYamrBdkcP";
        iframe.title = "YouTube video player";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allowFullscreen = true;

    // Clear any existing content in the video container
        videoContainer.innerHTML = "";

    // Append the iframe to the video container
        videoContainer.appendChild(iframe);
        
        typedKeys = ''; // Reset the typed keys
    }
    });
    
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

    document.addEventListener("keydown", function(event) {
        // Get the key that was pressed
        const key = event.key; // You can also use event.code for physical key location
    
        if (key == "F" && RickRolled) {
            parry.play();
            
                
                setTimeout(() => {
                    var rickrollElement = document.getElementById("rick");
                    if (rickrollElement) {
                        rickrollElement.parentNode.removeChild(rickrollElement);
                    }
                    textElement.innerHTML = "PARRY!";
                    textElement.style.color = "white";
                    document.body.style.backgroundColor = "black";
                    setTimeout(() => {
                        setTimeout(() => {
                            textElement.innerHTML = "Hello World";
                        }, 300);
                        textElement.style.color = "black";
                        document.body.style.backgroundColor = "white";
                    }, 200);
                }, 140);
        }
    });
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
                    if (!RickRolled) {
                        rickRoll();
                        RickRolled = true
                    } else {
                        textElement.innerHTML = "I'm sorry, but good parry";
                        setTimeout(() => {
                            textElement.innerHTML = "Hello World";
                        }, 2000)
                    }
                    
                }, 5000);
            } else {
                // Else update stack
                localStorage.setItem("KC", updated);
            }
        });
}