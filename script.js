/* =========================================
   MADDISON ROSE WEBSITE
   JavaScript Functions
========================================= */


/* ---------- DISCOVER MORE ---------- */

function showMessage() {

    const message = document.getElementById("special-message");

    if (message.style.display === "none" ||
        message.style.display === "") {

        message.style.display = "block";

    } else {

        message.style.display = "none";

    }
}


/* ---------- SCROLL TO FAVORITES ---------- */

function scrollToFavorites() {

    const favorites =
        document.getElementById("favorites");

    favorites.scrollIntoView({
        behavior: "smooth"
    });

}


/* ---------- PRINT ENTIRE PAGE ---------- */

function printPage() {

    window.print();

}


/* ---------- FAVORITE BUTTON ---------- */

function favoriteAlert(favorite) {

    let message = "";

    if (favorite === "Cheetahs") {

        message =
            "🐆 Cheetahs represent speed, confidence, independence, and freedom!";

    }

    else if (favorite === "Roses") {

        message =
            "🌹 Roses represent beauty, elegance, strength, and personality!";

    }

    else if (favorite === "Good Energy") {

        message =
            "💖 Good energy makes everything better. Keep surrounding yourself with positivity!";

    }

    alert(message);

}


/* ---------- SAY HELLO ---------- */

function sayHello() {

    const message =
        document.getElementById("hello-message");

    message.textContent =
        "💕 Hello! Thanks for visiting Maddison Rose's website! 🐆🌹";

}


/* ---------- PRINT CUSTOM GREETING ---------- */

function printMessage() {

    const greeting =
        "Welcome to the Maddison Rose website! 🐆🌹";

    const printWindow =
        window.open(
            "",
            "",
            "width=700,height=500"
        );

    printWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

            <title>
                Maddison Rose Greeting
            </title>

        </head>

        <body style="
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 100px;
            background: #fff5fa;
            color: #2b1721;
        ">

            <h1 style="
                font-size: 45px;
                color: #d52d7e;
            ">
                🐆 Maddison Rose 🌹
            </h1>

            <p style="
                font-size: 22px;
            ">
                ${greeting}
            </p>

            <p>
                Be wild. Be fearless.
                Be unapologetically you.
            </p>

        </body>

        </html>

    `);

    printWindow.document.close();

    printWindow.focus();

    printWindow.print();

}


/* ---------- PAGE LOAD MESSAGE ---------- */

window.addEventListener("load", function() {

    console.log(
        "🐆 Maddison Rose website loaded successfully!"
    );

});
