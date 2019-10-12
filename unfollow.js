var followers = 150; // Max 183 unfollows per day

var start = 0;
var following = 708;

for (let i = start; i < followers; i++) {
    (function(index) {
        setTimeout(() => {
            if (document.getElementsByClassName("sqdOP  L3NKy       ")[following - i].innerText !== "Seguir") {
                console.log(`Unfollowing ${index} users, ${i}/${following - i}/${followers}`);
                document.getElementsByClassName("sqdOP  L3NKy       ")[following - i].click();
                setTimeout(function(){
                    document.getElementsByClassName("aOOlW -Cab_   ")[0].click();
                }, 100)
            } else {
                console.log("Skiping...");
            }   
        }, (index - start) * 1000 * 90); // 40 unfollows per hour
    })(i);
}