// parseInt(document.getElementsByClassName("g47SY ")[1].innerText) * 1000;
var followers = 125; // Max 183 follows per day
var scroll_stuff = document.getElementsByClassName("isgrP")[0];

var start = 0;
for (let i = start; i < followers; i++) {
    (function(index) {
        setTimeout(() => {
            if (document.getElementsByClassName("sqdOP  L3NKy       ")[i].innerText === "Seguir") {
                document.getElementsByClassName("sqdOP  L3NKy       ")[i].click();
                let l = document.getElementsByClassName("sqdOP  L3NKy       ").length;
                console.log(`Following ${index} users, ${i}/${l}/${followers}`);
                if ((i + 24) >=  l) {
                    console.log("Loading more users...")
                    scroll_stuff.scrollTop = scroll_stuff.scrollHeight;
                }
            } else {
                console.log("Skiping...");
            }
        }, (index - start) * 1000 * 90); // 40 follows per hour
    })(i);
}

