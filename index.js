window.onload = function trigger() {
    // Set the trigger (default, the konami code)
    var trigger = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRight";
    console.log("Waiting for 2 seconds...");
    var html_element = document.getElementById("SomethingSpecial");
    const textElement = document.getElementById("text");

    var Maxwell = false;
    var RickRolled = false;
    var Parryable = false;
    var eeveebg = false;
    var antiBug = false

    const videoContainer = document.getElementById("videoContainer");
    let typedKeys = '';
    
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
        video.controls = false;
        video.setAttribute("allowfullscreen", "");
        video.setAttribute("width", "1060px");
        video.setAttribute("height", "615px");
        video.classList.add("rick");

        // Why not another reference
        video.setAttribute("title", "Cake is a lie");

        
        Cooldiv.appendChild(video);

        
        document.body.appendChild(Cooldiv);
    }

    function animateRickRoll() {
        const rickElement = document.getElementById("rick");
        var trash = document.getElementById("trashContainer");
        const img = document.createElement("img");
        img.src = "trashcan.png";
        img.alt = "Centered Image";

        trash.innerHTML = "";

        trash.appendChild(img);

        trash.style.display = "flex";

        if (rickElement) {
            rickElement.style.transition = "transform 0.2s linear";
            rickElement.style.transform = "translate(-50%, -80%) scale(0.5)";
            
            setTimeout  (() => { 
                rickElement.style.transition = "transform 0.3s ease-in";
                rickElement.style.transform = "translate(-50%, -90%) scale(0.5) rotate(360deg)";
                setTimeout  (() => {
                    rickElement.style.transition = "transform 0.5s ease-in";
                    rickElement.style.transform = "translate(-50%, -40%) scale(0.2)";
                    setTimeout  (() => {
                        
                        
                        if (rickElement) {
                            
                            trash.style.transition = "transform 0.2s ease-in-out";
                            trash.style.transform = "scale(1.2, 0.8)";
                            setTimeout(() => {
                                trash.style.transform = "scale(1.0, 1.0)";
                                setTimeout(() => {
                                    trash.style.transform = "opacity(0%)";
                                    setTimeout(() => {
                                        trash.style.display = "none";
                                    }, 200);
                                }, 2000);
                            },300);
                            rickElement.parentNode.removeChild(rickElement);
                        }
                    }, 500)
                }, 500);
            }, 200);
            
        }
    }

    localStorage.setItem("KC", "");

        // Listen for inputs
        document.addEventListener("keydown", function (e) {
            // Add the new keyPress to stack
            let updated = localStorage.getItem("KC") + e.key;

            console.log("Current input sequence:", updated); // Debugging line

            if (updated.includes(trigger) && RickRolled == false && antiBug == false) {
                antiBug = true
                // If trigger met, execute order 66
                localStorage.removeItem("KC");
                
                
                textElement.innerHTML = "Uh, Hola! Esperame 5 segundos que estoy configurando algo";
                setTimeout(() => {
                    textElement.innerHTML = "Mientras esperas. Si ves algo que no te gusta, hazle parry con la F";
                    setTimeout(() => {
                        setTimeout(() => {
                            textElement.innerHTML = "Hello World";
                        }, 2000);
                        textElement.innerHTML = "Bueno, espero que estes bien, yo... volvere a lo mio";
                    }, 2300);
                }, 2000);
                
                
                setTimeout(() => {
                    if (!RickRolled) {
                        rickRoll();
                        Parryable = true
                        RickRolled = true
                        setTimeout(() => {
                            if (Parryable) {
                                Parryable = false
                                textElement.innerHTML = "Has sido RickRolled.";
                                setTimeout(() => {
                                    textElement.innerHTML = "Hello World";
                                }, 1500)
                            }
                        }, 3000);
                    } else {
                        textElement.innerHTML = "I'm sorry, but good parry";
                        setTimeout(() => {
                            textElement.innerHTML = "Hello World";
                        }, 2000)
                    }
                    
                }, 6800);
            } else if (updated.includes("maxwell") && !Maxwell) {
                localStorage.removeItem("KC");
                console.log("Maxwell executed!");
                Maxwell = true;
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
            } else {
                // Else update stack
                localStorage.setItem("KC", updated);
            }

            if (updated.includes("eevee") && eeveebg == false) {
                localStorage.removeItem("KC");
                
                console.log("Eevee mode enabled!");
                eeveebg = true;
                document.body.style.backgroundImage = 'url("eevee-background.jpg")';
                document.body.style.backgroundSize = 'cover'; // Makes the image cover the entire screen
                document.body.style.backgroundRepeat = 'no-repeat'; // Prevents the image from repeating
                document.body.style.backgroundPosition = 'default'; // Centers the image
                document.body.style.opacity = '0';
                document.body.style.transform = "opacity 0.5s ease-in";
                setTimeout(() => {
                    document.body.style.opacity = '1';
                })
            } else if (updated.includes("eevee") && eeveebg == true) {
                localStorage.removeItem("KC");
                console.log("Eevee mode disabled!");
                eeveebg = false;
                document.body.style.backgroundImage = 'url("")';
            }
    
        if (updated.includes("f") && RickRolled && Parryable) {
            parry.play();
            Parryable = false;
            
            
            
                
                setTimeout(() => {
                    textElement.innerHTML = "BUEN PARRY!!!";
                    textElement.style.color = "white";
                    document.body.style.backgroundColor = "black";
                    animateRickRoll();
                    setTimeout(() => {
                        setTimeout(() => {
                            textElement.innerHTML = "Hello World";
                        }, 1000);
                        textElement.style.color = "black";
                        document.body.style.backgroundColor = "white";
                    }, 200);
                }, 140);
        }


        //THIS IS SO CURSED
        });
}