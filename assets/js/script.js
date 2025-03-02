/*!* Bibek Rajbanshi Landing page
=========================================================

* Copyright: 2023-2024 BibekRajbanshi (https://rajbanshibibek.com.np/)
* Licensed: (https://rajbanshibibek.com.np/licenses)
* Coded by https://rajbanshibibek.com.np/

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.674, lng: -73.945},
        zoom: 12,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}


// SMOOTH SCROLL ----------------------------------START

$(document).ready(function() {
    // Add smooth scroll animation to all anchor links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  });
  
  //  SMOOTH SCROLL ====================END
  
  
  

// TABLE OF CONTENT*---------------------------------START
    // JavaScript function to toggle the table of contents
  function toggleTableOfContents() {
    var toc = document.getElementById("table-of-contents");
    var button = document.getElementById("toggle-button");
    
    if (toc.style.display === "none") {
      toc.style.display = "block"; // Show the table of contents
      button.textContent = "Table of Contents  [Hide]";
    } else {
      toc.style.display = "none"; // Hide the table of contents
      button.textContent = "Table of Contents  [Show]";
    }
  }
 // TABLE OF CONTENT*=================== END
 
  // SCROLL UPT*=================== START
  let timeout;
        const scrollButton = document.getElementById("scrollUp");

        window.addEventListener("scroll", () => {
            scrollButton.style.opacity = "1";
            scrollButton.style.visibility = "visible";

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                scrollButton.style.opacity = "0";
                scrollButton.style.visibility = "hidden";
            }, 2000); // Hides after 2 seconds of inactivity
        });

// SCROLL UPT*=================== START


// DROPDOWN NAVBAR =================== START

document.querySelectorAll('.nav-item').forEach((item) => {
  const dropdown = item.querySelector('.dropdown-content');

  if (dropdown) {
    item.addEventListener('mouseenter', () => {
      dropdown.classList.add('show');
    });

    item.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!dropdown.matches(':hover')) {
          dropdown.classList.remove('show');
        }
      }, 200);
    });
  }
});

// DROPDOWN NAVBAR =================== END




// Detects and starts counting only when the section enters the viewport*=================== START

function animateCounter(counter) {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const speed = target / 100; // Adjust speed

            const updateCounter = () => {
                if (count < target) {
                    count += speed;
                    counter.innerText = Math.ceil(count) + (target >= 1000 ? "+" : "+"); 
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target + (target >= 1000 ? "+" : "+");
                }
            };

            updateCounter();
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target); // Stops observing after animation
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll(".counter").forEach(counter => observer.observe(counter));
        
// Detects and starts counting only when the section enters the viewport*=================== END

// Progress Bar Animation =================== START
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let bar = entry.target;
                let targetValue = parseInt(bar.getAttribute("data-target")); // Get target percentage
                let currentWidth = 0;

                const increaseWidth = () => {
                    if (currentWidth <= targetValue) {
                        bar.style.width = currentWidth + "%";
                        currentWidth++;
                        setTimeout(increaseWidth, 15); // Adjust speed (lower = faster)
                    }
                };

                increaseWidth();
                observer.unobserve(bar); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll(".progress-bar").forEach(bar => observer.observe(bar));
});

// Progress Bar Animation =================== END



document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let element = entry.target;
                let currentPosition = 30; // Start position (30px down)
                let opacity = 0;

                const animateElement = () => {
                    if (currentPosition > 0) {
                        currentPosition -= 1; // Move up gradually
                        opacity += 0.03; // Gradually increase opacity
                        element.style.transform = `translateY(${currentPosition}px)`;
                        element.style.opacity = opacity;
                        setTimeout(animateElement, 15); // Adjust speed
                    } else {
                        element.style.transform = "translateY(0)";
                        element.style.opacity = "1";
                    }
                };

                animateElement();
                observer.unobserve(element); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 });

    // Select both paragraph and heading elements
    document.querySelectorAll(".text-muted, .card-title").forEach(el => observer.observe(el));
});








  
(function () {
    const allowedHost = "rajbanshibibek.com.np"; // Your official domain
    const countdownTime = 25; // Countdown in seconds
    let countdown = countdownTime;

    if (window.location.hostname !== allowedHost) {
        document.body.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center; flex-direction: column;">
                    <h2 style="color: red;">🚨 Uh-oh! Caught Red-Handed! In The Act, illegal Activities Detected! 🚔😂</h2>                    
                    <p style="color: black;">Hey there, Digital Pirate! 🏴‍☠️ </p>
                    <p style="color: black;">Nice Try, But This Content Is <strong>only</strong> for VIPs on The Official site Only!😜</p>
                    <p style="color: black;">Don't worry, we won't call the internet police... <em>this time.</em> 👀</p>
                    <p style="color: black;">But seriously, You’ll Be Redirected Soon, So don’t Panic! <span id="countdown">${countdown}</span> seconds.</p>
                    <img src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif" alt="Warning GIF" width="300">

            </div>
        `;
        
        const countdownInterval = setInterval(() => {
            countdown--;
            document.getElementById("countdown").textContent = countdown;
            
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                window.location.href = "https://" + allowedHost;
            }
        }, 1000); // Update countdown every second
    }

    // Disable Right Click
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });

    // Disable Keyboard Shortcuts
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && (event.key === "U" || event.key === "u")) {
            event.preventDefault();
        }
        if (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "i")) {
            event.preventDefault();
        }
        if (event.key === "F12") {
            event.preventDefault();
        }
        if (event.ctrlKey && event.shiftKey && (event.key === "J" || event.key === "j")) {
            event.preventDefault();
        }
    });

    // Detect Chrome DevTools and Block It
    setInterval(function () {
        const devtools = /./;
        devtools.toString = function () {
            throw new Error("DevTools Blocked!");
        };
        console.log(devtools);
    }, 1000);

    // Close Tab If DevTools Is Open
    (function () {
        let devtoolsOpen = false;
        const threshold = 160;

        setInterval(() => {
            const widthDiff = window.outerWidth - window.innerWidth > threshold;
            const heightDiff = window.outerHeight - window.innerHeight > threshold;

            if (widthDiff || heightDiff) {
                devtoolsOpen = true;
                document.body.innerHTML = "<h1>Inspecting is not allowed!</h1>";
                setTimeout(() => {
                    window.close(); // Close the browser tab
                }, 2000);
            }
        }, 1000);
    })();

    // Disable Console Debugging
    function blockConsole() {
        console.log = function () {};
        console.warn = function () {};
        console.error = function () {};
        console.info = function () {};
        console.debug = function () {};
    }

    blockConsole();

    setInterval(function () {
        if (window.console && (console.profile || console.clear)) {
            console.clear();
            console.log("Console disabled!");
            blockConsole();
        }
    }, 1000);
})();

// Disable Right Click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("Right-click is disabled!");
});

// Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S)
document.onkeydown = function(event) {
    if (event.keyCode == 123) { // F12
        return false;
    }
    if (event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 74)) { // Ctrl+Shift+I / Ctrl+Shift+J
        return false;
    }
    if (event.ctrlKey && (event.keyCode == 85 || event.keyCode == 83)) { // Ctrl+U / Ctrl+S
        return false;
    }
};

// Detect DevTools Open and Redirect
(function() {
    function detectDevTools() {
        window.location.href = "https://rajbanshibek.com.np"; // Redirect when DevTools is detected
    }

    setInterval(function() {
        let before = new Date().getTime();
        debugger;
        let after = new Date().getTime();
        if (after - before > 100) {
            detectDevTools();
        }
    }, 500);
})();

// Prevent Text Selection & Copying
document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});
document.addEventListener('copy', function(event) {
    event.preventDefault();
    alert("Copying content is disabled!");
});

// Prevent Dragging Images
document.addEventListener("dragstart", function(event) {
    event.preventDefault();
});

// Anti-Inspect Console Trick
setInterval(() => {
    let element = new Image();
    element.__defineGetter__('id', () => {
        alert("DevTools is open! Closing now...");
        window.location.reload();
    });
    console.log('%c', element);
}, 1000);

// Infinite Loop to Slow Down Debugging
(function() {
    var start = new Date();
    debugger;
    var end = new Date();
    if (end - start > 100) {
        while (true) {}
    }
})();


  // Redirect only if the URL ends with .html
  if (window.location.pathname.endsWith(".html")) {
    window.location.href = window.location.pathname.replace(".html", "/");
  }