var followers = 3; // Max 183 unfollows per day

var start = 1;
var following = 1138;

for (let i = start; i < followers; i++) {
    (function(index) {
        setTimeout(() => {
                console.log(`Unfollowing ${following - i}`);
                document.getElementsByClassName("sqdOP  L3NKy       ")[i].click();
                setTimeout(function(){
                    document.getElementsByClassName("aOOlW -Cab_   ")[0].click();
                }, 100)
        }, (index - start) * 1000 * 90); // 40 unfollows per hour
    })(i);
}